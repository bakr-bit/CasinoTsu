/**
 * Blackjack Data Registry
 * Central hub for all blackjack variant/guide data access
 */

import type { BlackjackData, BlackjackRegistry } from './types';

// Import individual blackjack data
import { rules } from './rules';
import { strategy } from './strategy';
import { variants } from './variants';
import { free } from './free';
import { speed_blackjack } from './speed-blackjack';

// Re-export types
export type { BlackjackData, BlackjackRegistry } from './types';

/**
 * Registry of all blackjack content indexed by slug
 */
export const blackjackRegistry: BlackjackRegistry = {
  rules: rules,
  strategy: strategy,
  variants: variants,
  free: free,
  'speed-blackjack': speed_blackjack,
};

/**
 * Get a single blackjack entry by slug
 */
export function getBlackjack(slug: string): BlackjackData | undefined {
  return blackjackRegistry[slug];
}

/**
 * Get all blackjack entries as an array
 */
export function getAllBlackjack(): BlackjackData[] {
  return Object.values(blackjackRegistry);
}

/**
 * Get all blackjack slugs
 */
export function getBlackjackSlugs(): string[] {
  return Object.keys(blackjackRegistry);
}

/**
 * Get blackjack entries by category
 * @param category - One of: 'variant', 'strategy', 'rules', 'guide'
 */
export function getBlackjackByCategory(category: string): BlackjackData[] {
  return getAllBlackjack().filter((blackjack) => blackjack.category === category);
}

/**
 * Get blackjack entries by difficulty
 * @param difficulty - One of: 'beginner', 'intermediate', 'advanced'
 */
export function getBlackjackByDifficulty(difficulty: string): BlackjackData[] {
  return getAllBlackjack().filter((blackjack) => blackjack.difficulty === difficulty);
}
