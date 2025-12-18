/**
 * Baccarat Data Types
 * For baccarat guides (rules, strategy, variants, squeeze)
 */

export interface BaccaratData {
  slug: string;
  name: string;
  nameJa: string;

  // Game classification
  category: 'variant' | 'strategy' | 'rules' | 'guide';

  // Game details
  houseEdge?: string; // e.g., "1.06%", "varies"

  // Key features
  highlights: string[]; // 3-5 pros in Japanese
  difficulty?: 'beginner' | 'intermediate' | 'advanced';

  // Related content
  relatedVariants?: string[];
  recommendedCasinos: string[];

  // SEO metadata
  meta: {
    title: string;
    description: string;
  };
}

export type BaccaratRegistry = Record<string, BaccaratData>;
