/**
 * Brevo SDK client initialization
 * Used by all backend endpoints for contact management, email sending, and webhooks
 */
import { BrevoClient } from "@getbrevo/brevo";
import { BREVO_API_KEY } from "$env/static/private";

export const brevoClient = new BrevoClient({
  apiKey: BREVO_API_KEY,
});
