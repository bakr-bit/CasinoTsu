export interface CrashGameData {
  slug: string;
  name: string;
  nameJa: string;

  // Game classification
  category: 'guide' | 'variant' | 'strategy' | 'review';

  // Provider info
  provider?: string;
  providerJa?: string;

  // Game mechanics
  maxMultiplier?: string;
  minBet?: string;
  maxBet?: string;
  autoCashout?: boolean;
  provablyFair?: boolean;

  // Technical specs
  rtp?: string;
  houseEdge?: string;
  volatility?: 'low' | 'medium' | 'high' | 'very-high';

  // Features
  specialFeatures?: string[];
  highlights: string[];

  // Difficulty/risk
  difficulty?: 'beginner' | 'intermediate' | 'advanced';

  // Related content
  relatedGames?: string[];
  recommendedCasinos: string[];

  // SEO
  meta: {
    title: string;
    description: string;
  };
}

export type CrashGameRegistry = Record<string, CrashGameData>;
