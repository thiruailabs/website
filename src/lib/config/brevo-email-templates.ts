/**
 * Brevo Email Template IDs configuration
 * Update these IDs after creating templates in Brevo UI or running provision-brevo-assets.ts
 */
export const BREVO_TEMPLATE_IDS = {
  newsletter_verify: 1, // DOI confirmation email
  welcome: 2, // Welcome after verification (no waitlists joined)
  waitlist_joined: 3, // Consolidated waitlist joined email (all scenarios)
} as const;
