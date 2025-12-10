/**
 * Roulette Data Registry
 * Central hub for all roulette variant/guide data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:roulette-index
 */

import type { RouletteData, RouletteRegistry } from './types';

// Import individual roulette data
import { american } from './american';
import { european } from './european';
import { ez_dealer_roulette_japanese } from './ez-dealer-roulette-japanese';
import { free } from './free';
import { french } from './french';
import { fx } from './fx';
import { rules } from './rules';
import { strategy } from './strategy';
import { variants } from './variants';

// Re-export types
export type { RouletteData, RouletteRegistry } from './types';

/**
 * Registry of all roulette content indexed by slug
 */
export const rouletteRegistry: RouletteRegistry = {
  american: american,
  european: european,
  'ez-dealer-roulette-japanese': ez_dealer_roulette_japanese,
  free: free,
  french: french,
  fx: fx,
  rules: rules,
  strategy: strategy,
  variants: variants,
};

/**
 * Get a single roulette entry by slug
 */
export function getRoulette(slug: string): RouletteData | undefined {
  return rouletteRegistry[slug];
}

/**
 * Get all roulette entries as an array
 */
export function getAllRoulette(): RouletteData[] {
  return Object.values(rouletteRegistry);
}

/**
 * Get all roulette slugs
 */
export function getRouletteSlugs(): string[] {
  return Object.keys(rouletteRegistry);
}

/**
 * Get roulette entries by category
 * @param category - One of: 'variant', 'strategy', 'rules', 'guide'
 */
export function getRouletteByCategory(category: string): RouletteData[] {
  return getAllRoulette().filter((roulette) => roulette.category === category);
}

/**
 * Get roulette entries by wheel type
 * @param wheelType - One of: 'european', 'american', 'french', 'other'
 */
export function getRouletteByWheelType(wheelType: string): RouletteData[] {
  return getAllRoulette().filter((roulette) => roulette.wheelType === wheelType);
}

/**
 * Get roulette entries by difficulty
 * @param difficulty - One of: 'beginner', 'intermediate', 'advanced'
 */
export function getRouletteByDifficulty(difficulty: string): RouletteData[] {
  return getAllRoulette().filter((roulette) => roulette.difficulty === difficulty);
}

/**
 * Get casinos that offer good roulette games
 * Returns casino slugs from the recommendedCasinos field
 */
export function getCasinosForRoulette(rouletteSlug: string): string[] {
  const roulette = rouletteRegistry[rouletteSlug];
  return roulette?.recommendedCasinos || [];
}

/**
 * Search roulette entries by name (English or Japanese)
 */
export function searchRoulette(query: string): RouletteData[] {
  const lowerQuery = query.toLowerCase();
  return getAllRoulette().filter(
    (roulette) =>
      roulette.name.toLowerCase().includes(lowerQuery) ||
      roulette.nameJa.includes(query)
  );
}
