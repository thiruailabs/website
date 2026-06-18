/**
 * POST /api/subscribe - Newsletter subscription via Brevo DOI
 * Creates a double opt-in contact, Brevo sends confirmation email
 */
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { brevoClient } from "$lib/server/brevo";
import { handleBrevoError } from "$lib/server/brevo-errors";
import { BREVO_LIST_IDS } from "$lib/config/brevo-lists";
import { BREVO_TEMPLATE_IDS } from "$lib/config/brevo-email-templates";

export const POST: RequestHandler = async ({ request }) => {
  const { email, first_name } = await request.json();

  if (!email || typeof email !== "string") {
    return json({ error: "Email is required" }, { status: 400 });
  }

  const redirectUrl = `https://www.thiruailabs.com/newsletter/confirmed`;

  try {
    // Create DOI contact - Brevo sends confirmation email automatically
    await brevoClient.contacts.createDoiContact({
      email,
      includeListIds: [BREVO_LIST_IDS.newsletter_subs],
      templateId: BREVO_TEMPLATE_IDS.newsletter_verify,
      redirectionUrl: redirectUrl,
      attributes: {
        FIRSTNAME: first_name || "",
      },
    });

    return json(
      {
        success: true,
        message:
          "Please check your email to confirm your subscription.",
      },
      { status: 201 },
    );
  } catch (error) {
    const { statusCode, message } = handleBrevoError(error);
    console.error("Newsletter subscribe error:", error);
    return json({ error: message }, { status: statusCode });
  }
};
