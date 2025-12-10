/**
 * Bonus Type Data Types
 * For bonus category/guide pages (welcome-bonus, no-deposit, cashback, etc.)
 */

export interface BonusTypeData {
  slug: string;
  name: string;
  nameJa: string;
  description: string;

  // Key characteristics of this bonus type
  highlights: string[];

  // Things to watch out for
  watchouts: string[];

  // Recommended casinos for this bonus type (references casino slugs)
  recommendedCasinos: string[];

  // SEO metadata
  meta: {
    title: string;
    description: string;
  };
}

export type BonusTypeRegistry = Record<string, BonusTypeData>;
