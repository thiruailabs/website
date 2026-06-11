/**
 * Utilities for parsing and serializing metadata fields
 * (stored as comma-separated strings in Buttondown)
 */

/**
 * Parse a comma-separated string into an array, handling whitespace
 * @example parseList("a,b,c") -> ["a", "b", "c"]
 * @example parseList("") -> []
 */
export function parseList(value: string | null | undefined): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

/**
 * Serialize an array into a comma-separated string
 * @example serializeList(["a", "b"]) -> "a,b"
 * @example serializeList([]) -> ""
 */
export function serializeList(items: string[]): string {
  return items.join(",");
}

/**
 * Union two lists (combine, remove duplicates)
 * @example union(["a", "b"], ["b", "c"]) -> ["a", "b", "c"]
 */
export function union(listA: string[], listB: string[]): string[] {
  return Array.from(new Set([...listA, ...listB]));
}

/**
 * Difference (items in listA but not in listB)
 * @example difference(["a", "b", "c"], ["b"]) -> ["a", "c"]
 */
export function difference(listA: string[], listB: string[]): string[] {
  const setB = new Set(listB);
  return listA.filter((item) => !setB.has(item));
}

/**
 * Check if a tag is in a list
 * @example isInList("ops-pilot", ["ops-pilot", "data-platform"]) -> true
 */
export function isInList(tag: string, list: string[]): boolean {
  return (list || []).includes(tag);
}

/**
 * Subscriber metadata interface
 */
export interface SubscriberMetadata {
  first_name?: string;
  pending_waitlists?: string; // comma-separated
  waitlist_ack_sent?: string; // comma-separated
  [key: string]: any;
}
