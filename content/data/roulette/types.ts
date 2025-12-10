/**
 * Roulette Data Types
 * For roulette variant guides (European, American, French, etc.)
 */

export interface RouletteData {
  slug: string;
  name: string;
  nameJa: string;

  // Game classification
  category: 'variant' | 'strategy' | 'rules' | 'guide';

  // Game details (for variants)
  wheelType?: 'european' | 'american' | 'french' | 'other';
  zeroPockets?: number; // 1 for European/French, 2 for American
  houseEdge?: string; // e.g., "2.7%", "5.26%"
  rtp?: string; // e.g., "97.3%"

  // Special rules (for French roulette)
  specialRules?: string[]; // e.g., ["La Partage", "En Prison"]

  // Key features
  highlights: string[]; // 3-5 pros in Japanese
  difficulty?: 'beginner' | 'intermediate' | 'advanced';

  // Related content
  relatedVariants?: string[]; // Other roulette variants
  recommendedCasinos: string[];

  // SEO metadata
  meta: {
    title: string;
    description: string;
  };
}

export type RouletteRegistry = Record<string, RouletteData>;
