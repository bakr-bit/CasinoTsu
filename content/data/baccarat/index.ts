/**
 * Baccarat Data Registry
 * Central hub for all baccarat variant/guide data access
 */

import type { BaccaratData, BaccaratRegistry } from './types';

// Import individual baccarat data
import { rules } from './rules';
import { strategy } from './strategy';
import { variants } from './variants';
import { squeeze } from './squeeze';

// Re-export types
export type { BaccaratData, BaccaratRegistry } from './types';

/**
 * Registry of all baccarat content indexed by slug
 */
export const baccaratRegistry: BaccaratRegistry = {
  rules: rules,
  strategy: strategy,
  variants: variants,
  squeeze: squeeze,
};

/**
 * Get a single baccarat entry by slug
 */
export function getBaccarat(slug: string): BaccaratData | undefined {
  return baccaratRegistry[slug];
}

/**
 * Get all baccarat entries as an array
 */
export function getAllBaccarat(): BaccaratData[] {
  return Object.values(baccaratRegistry);
}

/**
 * Get all baccarat slugs
 */
export function getBaccaratSlugs(): string[] {
  return Object.keys(baccaratRegistry);
}

/**
 * Get baccarat entries by category
 * @param category - One of: 'variant', 'strategy', 'rules', 'guide'
 */
export function getBaccaratByCategory(category: string): BaccaratData[] {
  return getAllBaccarat().filter((baccarat) => baccarat.category === category);
}

/**
 * Get baccarat entries by difficulty
 * @param difficulty - One of: 'beginner', 'intermediate', 'advanced'
 */
export function getBaccaratByDifficulty(difficulty: string): BaccaratData[] {
  return getAllBaccarat().filter((baccarat) => baccarat.difficulty === difficulty);
}
