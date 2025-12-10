/**
 * Poker Data Types
 * For poker variant guides (Texas Hold'em, Omaha, Caribbean Stud, etc.)
 */

export interface PokerData {
  slug: string;
  name: string;
  nameJa: string;

  // Game classification
  category: 'variant' | 'strategy' | 'rules' | 'guide';

  // Game details (for variants)
  playerCount?: string; // e.g., "2-10", "1 vs dealer"
  deckCount?: number;
  houseEdge?: string; // e.g., "2.5%", "varies"

  // Key features
  highlights: string[]; // 3-5 pros in Japanese
  difficulty?: 'beginner' | 'intermediate' | 'advanced';

  // Related content
  relatedVariants?: string[]; // Other poker variants
  recommendedCasinos: string[];

  // SEO metadata
  meta: {
    title: string;
    description: string;
  };
}

export type PokerRegistry = Record<string, PokerData>;
