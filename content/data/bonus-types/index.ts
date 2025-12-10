/**
 * Bonus Type Data Registry
 * Central hub for all bonus type data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:bonus-types-index
 */

import type { BonusTypeData, BonusTypeRegistry } from './types';

// Import individual bonus type data
import { bonuses } from './bonuses';
import { cashback } from './cashback';
import { crypto } from './crypto';
import { low_wagering } from './low-wagering';
import { no_deposit } from './no-deposit';
import { no_wagering } from './no-wagering';
import { non_sticky } from './non-sticky';
import { reload } from './reload';
import { vip } from './vip';
import { welcome_bonus } from './welcome-bonus';

// Re-export types
export type { BonusTypeData, BonusTypeRegistry } from './types';

/**
 * Registry of all bonus types indexed by slug
 */
export const bonusTypesRegistry: BonusTypeRegistry = {
  bonuses: bonuses,
  cashback: cashback,
  crypto: crypto,
  'low-wagering': low_wagering,
  'no-deposit': no_deposit,
  'no-wagering': no_wagering,
  'non-sticky': non_sticky,
  reload: reload,
  vip: vip,
  'welcome-bonus': welcome_bonus,
};

/**
 * Get a single bonus type by slug
 */
export function getBonusType(slug: string): BonusTypeData | undefined {
  return bonusTypesRegistry[slug];
}

/**
 * Get all bonus types as an array
 */
export function getAllBonusTypes(): BonusTypeData[] {
  return Object.values(bonusTypesRegistry);
}

/**
 * Get all bonus type slugs
 */
export function getBonusTypeSlugs(): string[] {
  return Object.keys(bonusTypesRegistry);
}

/**
 * Get casinos that offer a specific bonus type
 * Returns casino slugs from the recommendedCasinos field
 */
export function getCasinosForBonusType(bonusTypeSlug: string): string[] {
  const bonusType = bonusTypesRegistry[bonusTypeSlug];
  return bonusType?.recommendedCasinos || [];
}
