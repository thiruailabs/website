/**
The `/api/buttondown/+server.ts` webhook endpoint serves as **Buttondown's event listener**. Its purposes are:  

1. **Receive `subscriber.confirmed` events** from Buttondown when a subscriber verifies their email  
2. **Verify webhook signature** using HMAC-SHA256 (security)  
3. **Read pending waitlist tags** from `metadata.pending_waitlists` that were stored during the join-waitlist action  
4. **Finalize the waitlist state** by:  
   - Adding the final `*_waitlist` tags to the subscriber (union/append, not overwrite)  
   - Marking those tags as acknowledged in `metadata.waitlist_ack_sent` (idempotency)  
   - Clearing `metadata.pending_waitlists` (cleanup)  
5. **Send the acknowledgement email** to notify the subscriber they've been added to the waitlist(s)  

This is the **deferred finalization point**—the join-waitlist endpoint stores *intent* in metadata, and this webhook *executes* the intent once confirmation happens. 
 */
 

import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";
import { createHmac, timingSafeEqual } from "node:crypto";
import { parseList, serializeList, union } from "$lib/utils/metadata";
import { sendWaitlistAcknowledgementEmail } from "$lib/server/send-waitlist-email";
import { WAITLIST_TAG_TO_LABEL } from "$lib/config/waitlists";

export const POST: RequestHandler = async ({ request }) => {
  const signingKey = env.BUTTONDOWN_WEBHOOK_SIGNING_KEY;
  const apiKey = env.BUTTONDOWN_API_KEY;

  if (!signingKey) {
    console.error("BUTTONDOWN_WEBHOOK_SIGNING_KEY not set");
    return json(
      { error: "Webhook signing key not configured" },
      { status: 500 }
    );
  }

  if (!apiKey) {
    console.error("BUTTONDOWN_API_KEY not set");
    return json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  // 1) Verify webhook signature
  const rawBody = await request.text();
  const header = request.headers.get("X-Buttondown-Signature");

  if (!header || !header.startsWith("sha256=")) {
    return json({ error: "Invalid webhook signature" }, { status: 401 });
  }

  const receivedHex = header.slice(7); // Remove "sha256=" prefix
  const expectedHex = createHmac("sha256", signingKey)
    .update(rawBody)
    .digest("hex");

  const receivedBuf = Buffer.from(receivedHex, "hex");
  const expectedBuf = Buffer.from(expectedHex, "hex");

  if (
    receivedBuf.length !== expectedBuf.length ||
    !timingSafeEqual(receivedBuf, expectedBuf)
  ) {
    return json({ error: "Invalid webhook signature" }, { status: 401 });
  }

  // 2) Parse payload
  let payload: any;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  // 3) Only handle subscriber.confirmed
  if (payload.event_type !== "subscriber.confirmed") {
    return json({ ok: true }); // Acknowledge but do nothing
  }

  // Buttondown sends subscriber ID in data.subscriber field
  const subscriberId = payload.data?.subscriber;
  if (!subscriberId) {
    console.error("[buttondown-webhook] No subscriber ID in payload:", JSON.stringify(payload));
    return json({ error: "No subscriber ID in payload" }, { status: 400 });
  }

  try {
    // 4) Fetch subscriber to read metadata using the subscriber ID
    const getResponse = await fetch(
      `https://api.buttondown.com/v1/subscribers/${subscriberId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!getResponse.ok) {
      return json(
        { error: "Failed to fetch subscriber" },
        { status: getResponse.status }
      );
    }

    const subscriber = await getResponse.json();
    const metadata = subscriber.metadata || {};

    // 5) Read pending waitlists
    const pendingList = parseList(metadata.pending_waitlists || "");
    const ackSentList = parseList(metadata.waitlist_ack_sent || "");

    if (pendingList.length === 0) {
      return json({ ok: true }); // Nothing to do
    }

    // 6) Filter to only tags not yet acknowledged (idempotency)
    const tagsToAck = pendingList.filter((tag) => !ackSentList.includes(tag));

    if (tagsToAck.length === 0) {
      return json({ ok: true }); // Already acknowledged
    }

    // 7) Add final tags to subscriber (union)
    const currentTags = subscriber.tags || [];
    const updatedTags = union(currentTags, tagsToAck);

    // 8) Update subscriber: add tags + mark as acked + clear pending
    // Set waitlist_product to the first pending tag's label (for email template)
    const productName = WAITLIST_TAG_TO_LABEL[tagsToAck[0]] || tagsToAck[0];
    const patchResponse = await fetch(
      `https://api.buttondown.com/v1/subscribers/${subscriber.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Token ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tags: updatedTags,
          metadata: {
            ...metadata,
            waitlist_ack_sent: serializeList(union(ackSentList, tagsToAck)),
            pending_waitlists: "", // Clear pending
            waitlist_product: productName,
          },
        }),
      }
    );

    if (!patchResponse.ok) {
      return json(
        { error: "Failed to update subscriber tags" },
        { status: patchResponse.status }
      );
    }

    // 9) Send acknowledgement email
    try {
      await sendWaitlistAcknowledgementEmail(
        subscriber.email_address,
        apiKey
      );
    } catch (emailError) {
      console.error("Failed to send acknowledgement email:", emailError);
      // Don't fail the webhook if email send fails; idempotency is already marked
    }

    return json({ ok: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
};
