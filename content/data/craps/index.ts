/**
 * Craps Data Registry
 * Central hub for all craps article data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:craps-index
 */

import type { CrapsData } from './types';

// Import individual craps data
import { craps } from './craps';
import { rules } from './rules';
import { strategy } from './strategy';
import { variants } from './variants';

// Re-export types
export type { CrapsData } from './types';

/**
 * Registry type for craps articles
 */
export type CrapsRegistry = Record<string, CrapsData>;

/**
 * Registry of all craps articles indexed by slug
 */
export const crapsRegistry: CrapsRegistry = {
  craps: craps,
  rules: rules,
  strategy: strategy,
  variants: variants,
};

/**
 * Get a single craps article by slug
 */
export function getCraps(slug: string): CrapsData | undefined {
  return crapsRegistry[slug];
}

/**
 * Get all craps articles as an array
 */
export function getAllCraps(): CrapsData[] {
  return Object.values(crapsRegistry);
}

/**
 * Get all craps article slugs
 */
export function getCrapsSlugs(): string[] {
  return Object.keys(crapsRegistry);
}

/**
 * Get craps articles by category
 */
export function getCrapsByCategory(category: CrapsData['category']): CrapsData[] {
  return getAllCraps().filter((craps) => craps.category === category);
}

/**
 * Get craps articles by difficulty level
 */
export function getCrapsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): CrapsData[] {
  return getAllCraps().filter((craps) => craps.difficulty === difficulty);
}
