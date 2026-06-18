# Brevo Support Ticket: Duplicate Emails from Webhook Double-Fire

## Issue Summary

Brevo fires the `list_addition` webhook **multiple times** for related list operations, causing duplicate transactional emails (welcome and waitlist) to be sent to new subscribers.

### Root Cause Identified (Updated)

The webhook is configured to fire on `list_addition` events. When a contact confirms their DOI email:

1. Brevo adds them to `newsletter_subs` list → fires `list_addition` webhook (list_id=11)
2. Our webhook handler processes this, then calls `addContactToList()` for product waitlist lists
3. Each `addContactToList()` call triggers **another** `list_addition` webhook for the product waitlist list
4. The webhook handler was not filtering by list_id for waitlist email logic, causing duplicate emails

We have implemented a fix to only process welcome/waitlist email logic when the webhook is for the `newsletter_subs` list. However, the **welcome email duplicate issue persists** due to a separate retry behavior (see below).

## Environment

| Item              | Value                                           |
| ----------------- | ----------------------------------------------- |
| **Application**   | SvelteKit app                                   |
| **Hosting**       | Vercel                                          |
| **Brevo SDK**     | `@getbrevo/brevo` v5.0.4                        |
| **Webhook URL**   | `https://www.thiruailabs.com/api/brevo/webhook` |
| **Webhook Event** | `list_addition` (DOI confirmation)              |
| **Webhook Auth**  | Bearer token                                    |

## The Problem

When a contact confirms their email address via Double Opt-In, Brevo fires the `list_addition` webhook **two times** for the same event:

1. **First request**: Succeeds with `200` status, ~835ms execution time. Welcome email is sent.
2. **Second request**: Fires ~9 seconds later, also returns `200` status, ~11ms execution time. A second welcome email is sent.

Both requests result in a welcome email being delivered to the same contact.

## Attempted Fix: Idempotency Guard (Does Not Work)

We implemented an idempotency guard using a boolean contact attribute `WELCOME_SENT`:

1. Check `WELCOME_SENT` attribute on the contact before sending
2. Send welcome email only if `WELCOME_SENT` is `false`
3. Set `WELCOME_SENT = true` after sending

**Why this fails**: The second webhook request fires **before** the first request's `updateContact()` call completes. Both requests read `WELCOME_SENT = false` and both proceed to send the email. The race condition makes the idempotency guard ineffective.

## Vercel Logs Evidence

```
[Request 1] 200 OK | Duration: ~835ms | Action: Welcome email sent
[Request 2] 200 OK | Duration: ~11ms  | Action: Welcome email sent (duplicate)
```

The second request fires approximately 9 seconds after the first, well within the window before the `updateContact()` call in the first request can complete and propagate.

## Relevant Code (Webhook Handler)

File: `website/src/routes/api/brevo/webhook/+server.ts` (lines 82–100)

```typescript
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
```

## Requested Resolution

We are requesting one of the following:

1. **Disable webhook retries**: Provide a way to disable automatic webhook retries for `list_addition` events, or confirm that retries can be disabled via API or dashboard settings.

2. **Idempotency mechanism**: Provide a unique event ID (or similar deduplication key) in the webhook payload so we can implement our own idempotency guard at the application level.

3. **Confirm expected behavior + workaround**: If this double-fire behavior is expected/intentional, please confirm and suggest a recommended workaround for preventing duplicate transactional emails.

## Impact

- **User experience**: New subscribers receive duplicate welcome emails, creating a poor first impression.
- **Email deliverability**: Duplicate sends may negatively impact sender reputation.
- **Transactional email quota**: Each duplicate consumes quota unnecessarily.

## Contact

Please respond with guidance or escalation to the engineering team. We can provide additional logs, request IDs, or contact details as needed.
