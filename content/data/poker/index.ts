/**
 * Poker Data Registry
 * Central hub for all poker variant/guide data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:poker-index
 */

import type { PokerData, PokerRegistry } from './types';

// Import individual poker data
import { _7_card_stud } from './7-card-stud';
import { caribbean_stud } from './caribbean-stud';
import { free } from './free';
import { omaha_hold_em } from './omaha-hold-em';
import { pai_gow } from './pai-gow';
import { rules } from './rules';
import { six_plus } from './six-plus';
import { split_holdem } from './split-holdem';
import { strategy } from './strategy';
import { texas_hold_em } from './texas-hold-em';
import { three_card } from './three-card';
import { variants } from './variants';

// Re-export types
export type { PokerData, PokerRegistry } from './types';

/**
 * Registry of all poker content indexed by slug
 */
export const pokerRegistry: PokerRegistry = {
  '7-card-stud': _7_card_stud,
  'caribbean-stud': caribbean_stud,
  free: free,
  'omaha-hold-em': omaha_hold_em,
  'pai-gow': pai_gow,
  rules: rules,
  'six-plus': six_plus,
  'split-holdem': split_holdem,
  strategy: strategy,
  'texas-hold-em': texas_hold_em,
  'three-card': three_card,
  variants: variants,
};

/**
 * Get a single poker entry by slug
 */
export function getPoker(slug: string): PokerData | undefined {
  return pokerRegistry[slug];
}

/**
 * Get all poker entries as an array
 */
export function getAllPoker(): PokerData[] {
  return Object.values(pokerRegistry);
}

/**
 * Get all poker slugs
 */
export function getPokerSlugs(): string[] {
  return Object.keys(pokerRegistry);
}

/**
 * Get poker entries by category
 * @param category - One of: 'variant', 'strategy', 'rules', 'guide'
 */
export function getPokerByCategory(category: string): PokerData[] {
  return getAllPoker().filter((poker) => poker.category === category);
}

/**
 * Get poker entries by difficulty
 * @param difficulty - One of: 'beginner', 'intermediate', 'advanced'
 */
export function getPokerByDifficulty(difficulty: string): PokerData[] {
  return getAllPoker().filter((poker) => poker.difficulty === difficulty);
}

/**
 * Get casinos that offer good poker games
 * Returns casino slugs from the recommendedCasinos field
 */
export function getCasinosForPoker(pokerSlug: string): string[] {
  const poker = pokerRegistry[pokerSlug];
  return poker?.recommendedCasinos || [];
}

/**
 * Search poker entries by name (English or Japanese)
 */
export function searchPoker(query: string): PokerData[] {
  const lowerQuery = query.toLowerCase();
  return getAllPoker().filter(
    (poker) =>
      poker.name.toLowerCase().includes(lowerQuery) ||
      poker.nameJa.includes(query)
  );
}
