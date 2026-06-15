/**
 * Brevo List IDs configuration
 * Update these IDs after creating lists in Brevo UI or running provision-brevo-assets.ts
 */
export const BREVO_LIST_IDS = {
  newsletter_subs: 11, // Newsletter subscribers (DOI confirmed)
  waitlist_ops_pilot: 6, // OpsPilot waitlist
  waitlist_social_engagement_radar: 12, // Social Engagement Radar waitlist
  waitlist_policyforge: 5, // PolicyForge waitlist
} as const;
