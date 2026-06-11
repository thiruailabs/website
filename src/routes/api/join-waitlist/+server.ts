import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";
import { parseList, serializeList, union } from "$lib/utils/metadata";
import { sendWaitlistAcknowledgementEmail } from "$lib/server/send-waitlist-email";
import { WAITLIST_TAG_TO_LABEL } from "$lib/config/waitlists";

export const POST: RequestHandler = async ({ request }) => {
  const { email, metadata } = await request.json();

  if (!email || typeof email !== "string") {
    return json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    return json(
      { error: "Newsletter service not configured" },
      { status: 500 }
    );
  }

  try {
    // Extract the waitlist tag from metadata
    const newPendingTag = metadata?.pending_waitlists;
    if (!newPendingTag || typeof newPendingTag !== "string") {
      return json(
        { error: "No waitlist tag provided" },
        { status: 400 }
      );
    }

    // 1) Retrieve subscriber by email
    const getResponse = await fetch(
      `https://api.buttondown.com/v1/subscribers/${email}`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    let subscriber = null;
    if (getResponse.ok) {
      subscriber = await getResponse.json();
    }

    // 2) Case A: Subscriber does NOT exist
    if (!subscriber) {
      const productName = WAITLIST_TAG_TO_LABEL[newPendingTag] || newPendingTag;
      // Only include metadata fields with actual values - Buttondown may reject empty strings
      const newMetadata: Record<string, string> = {
        pending_waitlists: newPendingTag,
        waitlist_product: productName,
      };
      if (metadata?.first_name) {
        newMetadata.first_name = metadata.first_name;
      }

      const createResponse = await fetch(
        "https://api.buttondown.com/v1/subscribers",
        {
          method: "POST",
          headers: {
            Authorization: `Token ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email_address: email,
            tags: [],
            metadata: newMetadata,
          }),
        }
      );

      if (!createResponse.ok) {
        const errorData = await createResponse.json().catch(() => ({}));
        console.error("[join-waitlist] Buttondown create error:", {
          status: createResponse.status,
          statusText: createResponse.statusText,
          errorData: JSON.stringify(errorData),
          requestBody: JSON.stringify({
            email_address: email,
            tags: [],
            metadata: newMetadata,
          }),
        });
        // Buttondown error format: { code, detail, metadata } or { error }
        const errorMessage = errorData.detail || errorData.error || "Failed to create subscriber";
        return json(
          { error: errorMessage },
          { status: createResponse.status }
        );
      }

      return json({
        success: true,
        message:
          "Please check your email to confirm your subscription. Once confirmed, you'll be added to the waitlist.",
      });
    }

    // 3) Case B & C: Subscriber EXISTS
    const isConfirmed = subscriber.type === "regular";
    let updatedMetadata = { ...subscriber.metadata };

    if (!isConfirmed) {
      // Case B: Not confirmed yet → store in pending_waitlists
      const currentPending = parseList(
        updatedMetadata.pending_waitlists || ""
      );
      updatedMetadata.pending_waitlists = serializeList(
        union(currentPending, [newPendingTag])
      );
      // Set waitlist_product for the most recent pending tag
      const productName = WAITLIST_TAG_TO_LABEL[newPendingTag] || newPendingTag;
      updatedMetadata.waitlist_product = productName;

      // Update subscriber with new pending metadata
      const patchResponse = await fetch(
        `https://api.buttondown.com/v1/subscribers/${subscriber.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Token ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ metadata: updatedMetadata }),
        }
      );

      if (!patchResponse.ok) {
        const errorData = await patchResponse.json().catch(() => ({}));
        // Buttondown error format: { code, detail, metadata } or { error }
        const errorMessage = errorData.detail || errorData.error || "Failed to update subscriber";
        return json(
          { error: errorMessage },
          { status: patchResponse.status }
        );
      }

      return json({
        success: true,
        message:
          "Please confirm your email subscription. Once confirmed, you'll be added to the waitlist.",
      });
    } else {
      // Case C: Already confirmed  
      const currentAckSent = parseList(  
        updatedMetadata.waitlist_ack_sent || ""  
      );  

      // CHECK: is this tag already acknowledged?  
      if (currentAckSent.includes(newPendingTag)) {  
        return json({  
          success: true,  
          message: "No worries, you're already on this list!",  
        });  
      }  

      // If not, proceed with tag union + email send
      const currentTags = subscriber.tags || [];
      const updatedTags = union(currentTags, [newPendingTag]);
      updatedMetadata.waitlist_ack_sent = serializeList(
        union(currentAckSent, [newPendingTag])
      );
      // Set waitlist_product for the email template
      const productName = WAITLIST_TAG_TO_LABEL[newPendingTag] || newPendingTag;
      updatedMetadata.waitlist_product = productName;

      // Update tags and metadata
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
            metadata: updatedMetadata,
          }),
        }
      );

      if (!patchResponse.ok) {
        const errorData = await patchResponse.json().catch(() => ({}));
        // Buttondown error format: { code, detail, metadata } or { error }
        const errorMessage = errorData.detail || errorData.error || "Failed to update subscriber";
        return json(
          { error: errorMessage },
          { status: patchResponse.status }
        );
      }

      // Send acknowledgement email immediately for confirmed subscriber
      try {
        await sendWaitlistAcknowledgementEmail(email, apiKey);
      } catch (emailError) {
        console.error("Failed to send acknowledgement email:", emailError);
        // Don't fail the whole request if email send fails
      }

      return json({
        success: true,
        message: "You've been added to the waitlist!",
      });
    }
  } catch (error) {
    console.error("Join waitlist error:", error);
    return json({ error: "Failed to process request" }, { status: 500 });
  }
};


