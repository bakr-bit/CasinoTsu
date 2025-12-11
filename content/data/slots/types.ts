// Slot data types for the new content architecture

export interface SlotSymbol {
  name: string;
  description?: string;
  payout5?: string;
  payout4?: string;
  payout3?: string;
  isSpecial?: boolean;
}

export interface SlotFeature {
  name: string;
  description: string;
  icon?: string;
}

export interface SimilarGame {
  name: string;
  href?: string;
  provider?: string;
  description?: string;
}

export interface SlotData {
  slug: string;
  title: string;

  // Hero section
  hero: {
    title: string;
    subheading?: string;
    description?: string;
    score: number;
    scoreMax: number;
    rtp?: string;
    maxMultiplier?: string;
    provider?: string;
    releaseDate?: string;
    volatility?: string;
    reels?: string;
    paylines?: string;
    minBet?: string;
    maxBet?: string;
    slotImageSrc?: string;
    highlights?: string[];
    watchouts?: string[];
  };

  // Game info with basic specs
  gameInfo?: {
    intro?: string;
    basicInfo?: {
      rtp: string;
      volatility: string;
      reels: string;
      paylines: string;
      minBet: string;
      maxBet: string;
      provider: string;
      releaseDate?: string;
    };
  };

  // Payout table
  payoutTable?: {
    title?: string;
    symbols: SlotSymbol[];
    maxPayout?: string;
    notes?: string[];
  };

  // Features
  features?: {
    title?: string;
    items: SlotFeature[];
  };

  // Similar games
  similarGames?: SimilarGame[];

  // Pros/cons
  prosCons?: {
    pros: string[];
    cons: string[];
  };

  // FAQ
  faq?: Array<{ q: string; a: string }>;

  // SEO metadata
  meta: {
    title: string;
    description: string;
  };
}

export type SlotRegistry = Record<string, SlotData>;
