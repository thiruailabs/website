/**
 * Shared function to send waitlist acknowledgement emails.
 *
 * Uses a 2-step create-then-send approach:
 * 1. POST /v1/emails — creates a new email with Django templating
 * 2. POST /v1/subscribers/{email}/emails/{emailId} — sends it
 *
 * The email body uses Django templating resolved at send time:
 *   {{ subscriber.metadata.first_name|default:"there" }}
 *   {{ subscriber.metadata.waitlist_product }}
 *
 * Buttondown resolves these from the subscriber's metadata when sending.
 */

const WAITLIST_EMAIL_SUBJECT = "You've joined our waitlist!";
const WAITLIST_EMAIL_BODY = `Hi {{ subscriber.metadata.first_name|default:"there" }},

You've been added to the waitlist for: {{ subscriber.metadata.waitlist_product }}

We'll notify you as soon as we launch!

You'll also continue receiving product updates and insights in our weekly newsletter.

— Nick
`;

export async function sendWaitlistAcknowledgementEmail(
  email: string,
  apiKey: string
): Promise<void> {
  // Add a unique timestamp to prevent Buttondown's email_duplicate rejection
  const uniqueBody = `${WAITLIST_EMAIL_BODY}\n\n<!-- sent: ${Date.now()} -->`;

  // Step 1: Create the email
  const createResponse = await fetch("https://api.buttondown.com/v1/emails", {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subject: WAITLIST_EMAIL_SUBJECT,
      body: uniqueBody,
    }),
  });

  if (!createResponse.ok) {
    const errorData = await createResponse.json().catch(() => ({}));
    console.error(
      "Failed to create waitlist email:",
      createResponse.status,
      errorData
    );
    throw new Error("Failed to create waitlist email");
  }

  const createdEmail = await createResponse.json();
  const emailId = createdEmail.id;

  // Step 2: Send the email to the subscriber
  const sendResponse = await fetch(
    `https://api.buttondown.com/v1/subscribers/${encodeURIComponent(email)}/emails/${emailId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );

  if (!sendResponse.ok) {
    const errorData = await sendResponse.json().catch(() => ({}));
    console.error(
      "Failed to send acknowledgement email:",
      sendResponse.status,
      errorData
    );
    throw new Error("Failed to send acknowledgement email");
  }
}
