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
  // Verify Bearer token
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.replace("Bearer ", "");

  if (token !== env.BREVO_WEBHOOK_SECRET) {
    return json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  // Handle listAddition event (DOI confirmation)
  if (payload.event !== "listAddition") {
    return json({ success: true }); // Ignore other events
  }

  // Check if this is newsletter_subs list
  if (payload.list_id !== BREVO_LIST_IDS.newsletter_subs) {
    return json({ success: true }); // Not our newsletter list
  }

  const { email } = payload;

  try {
    // Fetch contact to get attributes (webhook payload doesn't include them)
    const contact = await brevoClient.contacts.getContactInfo({
      identifier: email,
    });

    // Cast attributes to any since SDK types don't include custom attributes
    const attrs = contact.attributes as Record<string, any> | undefined;

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

    if (joinedWaitlists.length > 0) {
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
      await brevoClient.transactionalEmails.sendTransacEmail({
        templateId: BREVO_TEMPLATE_IDS.waitlist_joined,
        to: [{ email }],
        params: {
          first_name: attrs?.FIRSTNAME || "there",
          joined_ops_pilot: !!attrs?.WAITLIST_OPSPILOT,
          joined_social_engagement_radar: !!attrs?.WAITLIST_SOCIAL_ENGAGEMENT_RADAR,
          joined_policyforge: !!attrs?.WAITLIST_POLICYFORGE,
        },
      });
    } else {
      // No waitlists joined — just newsletter confirmation
      // Send welcome email
      await brevoClient.transactionalEmails.sendTransacEmail({
        templateId: BREVO_TEMPLATE_IDS.welcome,
        to: [{ email }],
        params: {
          first_name: attrs?.FIRSTNAME || "there",
        },
      });
    }

    return json({ success: true }, { status: 200 });
  } catch (error) {
    const { statusCode, message } = handleBrevoError(error);
    console.error("Webhook handler error:", error);
    return json({ error: message }, { status: statusCode });
  }
};
