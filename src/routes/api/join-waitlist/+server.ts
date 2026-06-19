/**
 * POST /api/join-waitlist - Join product waitlist via Brevo
 *
 * Flow:
 * 1. If contact doesn't exist → create DOI contact (newsletter signup)
 * 2. If contact exists but not confirmed → set boolean waitlist attribute
 * 3. If contact is confirmed → set boolean attribute + send waitlist email
 */
import { json } from "@sveltejs/kit";
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
      console.log("Existing contact:", contact);
    } catch {
      // Contact doesn't exist - will create below
    }

    // Case A: Contact doesn't exist → create DOI contact with waitlist attribute
    if (!contact) {
      await brevoClient.contacts.createDoiContact({
        email,
        includeListIds: [BREVO_LIST_IDS.newsletter_subs],
        templateId: BREVO_TEMPLATE_IDS.newsletter_verify,
        redirectionUrl: `https://www.thiruailabs.com/newsletter/confirmed`,
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
    // Brevo returns "Yes" (string) for confirmed contacts, not boolean true
    const isConfirmed = contact.attributes?.s["DOUBLE_OPT-IN"] === "1";

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
            "Please confirm your email. Once done, you'll be added to the waitlist.",
          status: "pending_doi",
        },
        { status: 200 },
      );
    }

    // Case C: Already confirmed → add to waitlist list + send email

    // Determine the first_name to use:
    // - If contact has no FIRSTNAME set (empty string or missing), use the provided first_name
    // - Otherwise, keep the existing FIRSTNAME
    const existingFirstName = contact.attributes?.FIRSTNAME || "";
    const effectiveFirstName = existingFirstName === "" ? (first_name || "") : existingFirstName;

    // Update contact if FIRSTNAME was missing and a new one was provided
    if (existingFirstName === "" && first_name) {
      await brevoClient.contacts.updateContact({
        identifier: email,
        attributes: {
          FIRSTNAME: first_name,
        },
      });
    }

    // Check if already on the product waitlist list
    const productListId =
      BREVO_LIST_IDS[`waitlist_${product_id}` as keyof typeof BREVO_LIST_IDS];
    const alreadyOnList = productListId && contact.listIds?.includes(productListId);

    if (alreadyOnList) {
      // Already joined - no email sent
      return json(
        {
          success: true,
          message: `No worries! You've already joined the waitlist for ${getProductLabel(product_id)}.`,
          status: "already_joined",
        },
        { status: 200 },
      );
    }

    // Add to product waitlist
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
        first_name: effectiveFirstName || "there",
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
