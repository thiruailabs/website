/**
 * POST /api/brevo/webhook - Brevo DOI confirmation webhook handler
 *
 * Receives listAddition events when contacts confirm their email via DOI.
 * Processes pending waitlist joins and sends appropriate emails.
 */
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";
import { brevoClient } from "$lib/server/brevo";
import { handleBrevoError } from "$lib/server/brevo-errors";
import { BREVO_LIST_IDS } from "$lib/config/brevo-lists";
import { BREVO_TEMPLATE_IDS } from "$lib/config/brevo-email-templates";

export const POST: RequestHandler = async ({ request }) => {
  console.log("=== Brevo Webhook Received ===");

  // Verify Bearer token
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.replace("Bearer ", "");

  if (token !== env.BREVO_WEBHOOK_SECRET) {
    console.log("Webhook: Unauthorized - token mismatch");
    return json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: any;
  try {
    payload = await request.json();
    console.log("Webhook payload:", JSON.stringify(payload, null, 2));
  } catch {
    return json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  // Handle list_addition event (DOI confirmation)
  // Brevo sends event as "list_addition" (snake_case)
  if (payload.event !== "list_addition" && payload.event !== "listAddition") {
    console.log("Webhook: Ignoring event:", payload.event);
    return json({ success: true }); // Ignore other events
  }

  console.log("Webhook: Processing list_addition event");
  console.log("Webhook: list_id from payload:", payload.list_id, "(type:", typeof payload.list_id, ")");

  // Brevo sends list_id as an array: [11]
  const payloadListId = Array.isArray(payload.list_id)
    ? payload.list_id[0]
    : payload.list_id;

  console.log("Webhook: resolved list_id:", payloadListId);

  const { email } = payload;
  console.log("Webhook: Processing email:", email);

  try {
    // Fetch contact to get attributes (webhook payload doesn't include them)
    const contact = await brevoClient.contacts.getContactInfo({
      identifier: email,
    });

    // Cast attributes to any since SDK types don't include custom attributes
    const attrs = contact.attributes as Record<string, any> | undefined;
    console.log("Webhook: Contact attributes:", JSON.stringify(attrs, null, 2));

    // Check which waitlist booleans are set
    const joinedWaitlists: string[] = [];
    if (attrs?.WAITLIST_OPSPILOT) {
      joinedWaitlists.push("ops_pilot");
    }
    if (attrs?.WAITLIST_SOCIAL_ENGAGEMENT_RADAR) {
      joinedWaitlists.push("social_engagement_radar");
    }
    if (attrs?.WAITLIST_POLICYFORGE) {
      joinedWaitlists.push("policyforge");
    }

    console.log("Webhook: Joined waitlists:", joinedWaitlists);

    // Only send welcome email when this is the newsletter_subs list confirmation
    // (not when adding to waitlist lists, which also triggers the webhook)
    // Also check WELCOME_SENT to prevent duplicate sends from Brevo retries
    if (Number(payloadListId) === BREVO_LIST_IDS.newsletter_subs && !attrs?.WELCOME_SENT) {
      console.log("Webhook: Sending welcome email");
      const welcomeResult = await brevoClient.transactionalEmails.sendTransacEmail({
        templateId: BREVO_TEMPLATE_IDS.welcome,
        to: [{ email }],
        params: {
          first_name: attrs?.FIRSTNAME || "there",
        },
      });
      console.log("Webhook: Welcome email sent, messageId:", welcomeResult.messageId);

      // Mark as sent to prevent duplicate sends on Brevo retry
      await brevoClient.contacts.updateContact({
        identifier: email,
        attributes: { WELCOME_SENT: true },
      });
    } else if (Number(payloadListId) === BREVO_LIST_IDS.newsletter_subs && attrs?.WELCOME_SENT) {
      console.log("Webhook: Welcome email already sent (WELCOME_SENT=true), skipping");
    }

    // If waitlists are joined, also send waitlist email
    if (joinedWaitlists.length > 0) {
      console.log("Webhook: Sending waitlist joined email");
      // Add to product lists
      if (attrs?.WAITLIST_OPSPILOT) {
        await brevoClient.contacts.addContactToList({
          listId: BREVO_LIST_IDS.waitlist_ops_pilot,
          body: { emails: [email] },
        });
      }
      if (attrs?.WAITLIST_SOCIAL_ENGAGEMENT_RADAR) {
        await brevoClient.contacts.addContactToList({
          listId: BREVO_LIST_IDS.waitlist_social_engagement_radar,
          body: { emails: [email] },
        });
      }
      if (attrs?.WAITLIST_POLICYFORGE) {
        await brevoClient.contacts.addContactToList({
          listId: BREVO_LIST_IDS.waitlist_policyforge,
          body: { emails: [email] },
        });
      }

      // Send consolidated notification email with boolean params
      const waitlistResult = await brevoClient.transactionalEmails.sendTransacEmail({
        templateId: BREVO_TEMPLATE_IDS.waitlist_joined,
        to: [{ email }],
        params: {
          first_name: attrs?.FIRSTNAME || "there",
          joined_ops_pilot: !!attrs?.WAITLIST_OPSPILOT,
          joined_social_engagement_radar: !!attrs?.WAITLIST_SOCIAL_ENGAGEMENT_RADAR,
          joined_policyforge: !!attrs?.WAITLIST_POLICYFORGE,
        },
      });
      console.log("Webhook: Waitlist email sent, messageId:", waitlistResult.messageId);
    }

    return json({ success: true }, { status: 200 });
  } catch (error) {
    const { statusCode, message } = handleBrevoError(error);
    console.error("Webhook handler error:", error);
    return json({ error: message }, { status: statusCode });
  }
};
