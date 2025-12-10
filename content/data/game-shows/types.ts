/**
 * Game Show Data Types
 * For live casino game show guides (Crazy Time, Lightning Roulette, etc.)
 */

export interface GameShowData {
  slug: string;
  name: string;
  nameJa: string;
  provider: string; // e.g., "Evolution Gaming", "Pragmatic Play"

  // Game characteristics
  category: 'wheel' | 'dice' | 'roulette' | 'baccarat' | 'blackjack' | 'other';
  rtp: string; // e.g., "96.08%"
  maxWin: string; // e.g., "500,000x"

  // Key features
  highlights: string[];
  watchouts?: string[];

  // Recommended casinos to play this game (references casino slugs)
  recommendedCasinos: string[];

  // SEO metadata
  meta: {
    title: string;
    description: string;
  };
}

export type GameShowRegistry = Record<string, GameShowData>;
