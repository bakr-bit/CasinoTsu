/**
 * Blackjack Data Types
 * For blackjack guides (rules, strategy, variants, free, speed-blackjack)
 */

export interface BlackjackData {
  slug: string;
  name: string;
  nameJa: string;

  // Game classification
  category: 'variant' | 'strategy' | 'rules' | 'guide';

  // Game details
  deckCount?: number;
  houseEdge?: string; // e.g., "0.5%", "varies"

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

export type BlackjackRegistry = Record<string, BlackjackData>;
