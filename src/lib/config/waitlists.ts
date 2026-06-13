/**
 * Waitlist configuration for Brevo integration
 * Maps product IDs to Brevo boolean contact attributes
 */

/**
 * Product ID to Brevo boolean attribute name mapping
 */
export const PRODUCT_ATTR_MAP = {
  ops_pilot: "WAITLIST_OPSPILOT",
  social_engagement_radar: "WAITLIST_SOCIAL_ENGAGEMENT_RADAR",
  policyforge: "WAITLIST_POLICYFORGE",
} as const;

/**
 * Product ID to friendly label mapping
 */
export const PRODUCT_LABELS: Record<string, string> = {
  ops_pilot: "OpsPilot",
  social_engagement_radar: "Social Engagement Radar",
  policyforge: "PolicyForge",
} as const;

/**
 * Get the Brevo boolean attribute name for a product ID
 */
export function getProductAttribute(productId: string): string | undefined {
  return PRODUCT_ATTR_MAP[productId as keyof typeof PRODUCT_ATTR_MAP];
}

/**
 * Get the friendly label for a product ID
 */
export function getProductLabel(productId: string): string {
  return PRODUCT_LABELS[productId as keyof typeof PRODUCT_LABELS] || productId;
}
