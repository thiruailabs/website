# Brevo Support Ticket: Duplicate Welcome Emails from Multiple Webhooks

## Issue Summary

When a user subscribes to the newsletter via Double Opt-In (DOI), they receive **two welcome emails** instead of one.

## Root Cause

We have **two webhooks** configured in Brevo, both listening to `list_addition` events on the same list (`newsletter_subs`, list ID 11):

1. **nickthiru-dev webhook** → sends welcome email
2. **thiru-ai-labs webhook** → also sends welcome email

When a contact confirms their DOI email, **both webhooks fire** because they're both listening to the same list. Both webhooks send the welcome email, resulting in duplicates.

## Environment

| Item              | Value                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------- |
| **Application**   | Two SvelteKit apps (thiru-ai-labs, nickthiru-dev)                                             |
| **Hosting**       | Vercel                                                                                        |
| **Brevo SDK**     | `@getbrevo/brevo` v5.0.4                                                                      |
| **Webhook URLs**  | `https://www.thiruailabs.com/api/brevo/webhook` and `https://nickthiru.dev/api/brevo/webhook` |
| **Webhook Event** | `list_addition` (DOI confirmation)                                                            |
| **Webhook Auth**  | Bearer token                                                                                  |

## Resolution Applied

We removed the welcome email logic from the thiru-ai-labs webhook. Now:

- **nickthiru-dev webhook** handles welcome emails for all newsletter subscribers
- **thiru-ai-labs webhook** only handles waitlist-related emails (sent when contact has waitlist boolean attributes set)

This eliminates the duplicate welcome email while preserving all waitlist functionality.

## Additional Observation: Webhook Retry Behavior

We also observed that Brevo fires the webhook **twice** for the same event (one marked as "delivered", one as "failed" in the Brevo dashboard). The second delivery appears to be a retry due to timeout on the first request.

**Vercel logs show:**

- Request 1: 835ms execution, sends email, returns 200
- Request 2: ~9 seconds later, 11ms execution (early return), returns 200

The second request takes only 11ms because it hits an early return path (event filter or auth check), not because it's sending an email. This retry behavior is not causing duplicate emails after our fix, but it's worth noting.

## Requested Clarification

1. Is the webhook retry behavior (firing twice, one marked as failed) expected?
2. Is there a way to configure webhook retry behavior or disable retries?
3. Does Brevo provide a unique event ID in webhook payloads for idempotency purposes?

## Impact

- **Before fix**: Users received 2 welcome emails
- **After fix**: Users receive 1 welcome email (from nickthiru-dev webhook)

## Contact

Please respond with guidance on the webhook retry behavior. We can provide additional logs, request IDs, or contact details as needed.
