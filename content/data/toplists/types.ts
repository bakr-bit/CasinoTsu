/**
 * Toplist Types
 * Configuration for casino ranking lists used throughout the site
 */

/**
 * Individual casino entry in a toplist with optional overrides
 */
export interface ToplistEntry {
  /** Casino slug */
  casinoSlug: string;
  /** Override the headline shown (optional) */
  headlineOverride?: string;
  /** Override the description shown (optional) */
  descriptionOverride?: string;
  /** Special badge to display (optional) */
  badge?: string;
}

/**
 * Toplist configuration
 */
export interface ToplistConfig {
  /** Unique identifier for the toplist */
  id: string;
  /** Display title */
  title: string;
  /** Optional description */
  description?: string;
  /** Ordered list of casino entries */
  casinos: ToplistEntry[];
  /** Last updated date */
  lastUpdated: string;
}

/**
 * Registry type for all toplists
 */
export type ToplistRegistry = Record<string, ToplistConfig>;
