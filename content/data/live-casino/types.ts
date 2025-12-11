export interface LiveCasinoData {
  slug: string;
  name: string;
  nameJa: string;

  // Game classification
  gameType: 'baccarat' | 'blackjack' | 'roulette' | 'poker' | 'craps' | 'other';
  category: 'guide' | 'variant' | 'rules' | 'strategy';

  // Provider info
  provider?: string;
  providerJa?: string;

  // Game details
  tableCount?: number;
  minBet?: string;
  maxBet?: string;
  languages?: string[];
  hasJapaneseTable?: boolean;

  // Technical specs
  rtp?: string;
  houseEdge?: string;
  streamQuality?: 'HD' | '4K' | 'Standard';

  // Features
  specialFeatures?: string[];
  highlights: string[];

  // Difficulty
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

export type LiveCasinoRegistry = Record<string, LiveCasinoData>;
