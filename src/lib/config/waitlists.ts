/**
 * Waitlist tag configuration and utilities
 * Canonical tags match the values set in Buttondown dashboard
 */

export const WAITLIST_TAGS = {
  OPS_PILOT: "ops_pilot_waitlist",
  SOCIAL_ENGAGEMENT_RADAR: "social_engagement_radar_waitlist",
  POLICY_FORGE: "policy_forge_waitlist",
} as const;

/**
 * Map tag values to friendly product labels (for email display)
 */
export const WAITLIST_TAG_TO_LABEL: Record<string, string> = {
  [WAITLIST_TAGS.OPS_PILOT]: "OpsPilot",
  [WAITLIST_TAGS.SOCIAL_ENGAGEMENT_RADAR]: "Social Engagement Radar",
  [WAITLIST_TAGS.POLICY_FORGE]: "PolicyForge",
} as const;

/**
 * Validate whether a tag is a known waitlist tag
 */
export function isValidWaitlistTag(tag: string): boolean {
  return Object.values(WAITLIST_TAGS).includes(tag as any);
}

/**
 * Convert a tag to its user-friendly label
 * Falls back to the tag itself if not found in mapping
 */
export function tagToLabel(tag: string): string {
  return WAITLIST_TAG_TO_LABEL[tag] || tag;
}

/**
 * Convert multiple tags to their labels
 */
export function tagsToLabels(tags: string[]): string[] {
  return tags.map(tagToLabel).filter((label) => label.length > 0);
}
