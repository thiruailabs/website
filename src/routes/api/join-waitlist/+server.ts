/**
 * POST /api/join-waitlist - Join product waitlist via Brevo
 *
 * Flow:
 * 1. If contact doesn't exist → create DOI contact (newsletter signup)
 * 2. If contact exists but not confirmed → set boolean waitlist attribute
 * 3. If contact is confirmed → set boolean attribute + send waitlist email
 */
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";
import { brevoClient } from "$lib/server/brevo";
import { handleBrevoError } from "$lib/server/brevo-errors";
import { BREVO_LIST_IDS } from "$lib/config/brevo-lists";
import { BREVO_TEMPLATE_IDS } from "$lib/config/brevo-email-templates";
import { getProductAttribute, getProductLabel } from "$lib/config/waitlists";

export const POST: RequestHandler = async ({ request }) => {
  const { email, product_id, first_name } = await request.json();

  if (!email || typeof email !== "string") {
    return json({ error: "Email is required" }, { status: 400 });
  }

  if (!product_id || typeof product_id !== "string") {
    return json({ error: "Product ID is required" }, { status: 400 });
  }

  const productAttr = getProductAttribute(product_id);
  if (!productAttr) {
    return json({ error: `Unknown product: ${product_id}` }, { status: 400 });
  }

  try {
    // Try to get existing contact
    let contact: any = null;
    try {
      contact = await brevoClient.contacts.getContactInfo({
        identifier: email,
      });
    } catch {
      // Contact doesn't exist - will create below
    }

    // Case A: Contact doesn't exist → create DOI contact with waitlist attribute
    if (!contact) {
      await brevoClient.contacts.createDoiContact({
        email,
        includeListIds: [BREVO_LIST_IDS.newsletter_subs],
        templateId: BREVO_TEMPLATE_IDS.newsletter_verify,
        redirectionUrl: `${env.PUBLIC_URL || "https://yoursite.com"}/newsletter/confirmed`,
        attributes: {
          FIRSTNAME: first_name || "",
          [productAttr]: true, // Set waitlist boolean immediately
        },
      });

      return json(
        {
          success: true,
          message:
            "Please check your email to confirm your subscription. Once confirmed, you'll be added to the waitlist.",
        },
        { status: 201 },
      );
    }

    // Check if contact is confirmed via DOI
    const isConfirmed = contact.attributes?.DOUBLE_OPT_IN === true;

    // Case B: Not confirmed yet → set boolean attribute, wait for DOI
    if (!isConfirmed) {
      // Update contact to set the waitlist boolean attribute
      await brevoClient.contacts.updateContact({
        identifier: email,
        attributes: {
          FIRSTNAME: first_name || contact.attributes?.FIRSTNAME || "",
          [productAttr]: true,
        },
      });

      return json(
        {
          success: true,
          message:
            "You're already confirming your email. Once done, you'll be added to the waitlist.",
          status: "pending_doi",
        },
        { status: 200 },
      );
    }

    // Case C: Already confirmed → add to waitlist list + send email
    // Add to product waitlist
    const productListId =
      BREVO_LIST_IDS[`waitlist_${product_id}` as keyof typeof BREVO_LIST_IDS];
    if (productListId) {
      await brevoClient.contacts.addContactToList({
        listId: productListId,
        body: { emails: [email] },
      });
    }

    // Ensure boolean attribute is set (idempotent)
    await brevoClient.contacts.updateContact({
      identifier: email,
      attributes: {
        [productAttr]: true,
      },
    });

    // Send waitlist confirmation email using consolidated template
    await brevoClient.transactionalEmails.sendTransacEmail({
      templateId: BREVO_TEMPLATE_IDS.waitlist_joined,
      to: [{ email }],
      params: {
        first_name: contact.attributes?.FIRSTNAME || "there",
        // Set boolean params for template conditionals
        joined_ops_pilot: productAttr === "WAITLIST_OPSPILOT",
        joined_social_engagement_radar:
          productAttr === "WAITLIST_SOCIAL_ENGAGEMENT_RADAR",
        joined_policyforge: productAttr === "WAITLIST_POLICYFORGE",
      },
    });

    return json(
      {
        success: true,
        message: "You've joined the waitlist!",
        status: "notified",
      },
      { status: 201 },
    );
  } catch (error) {
    const { statusCode, message } = handleBrevoError(error);
    console.error("Waitlist join error:", error);
    return json({ error: message }, { status: statusCode });
  }
};
