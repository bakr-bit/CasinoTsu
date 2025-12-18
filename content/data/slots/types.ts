// Slot data types for the new content architecture

// Slot category tags for filtering
export type SlotMechanic = 'megaways' | 'cluster' | 'hold-and-win' | 'bonus-buy' | 'classic' | 'tumble' | 'expanding-wilds';
export type SlotVolatilityLevel = 'low' | 'medium' | 'high';
export type SlotTheme = 'japanese' | 'geisha' | 'egyptian' | 'fantasy' | 'fruit' | 'adventure' | 'halloween' | 'xmas' | 'valentine' | 'asian' | 'mythology';
export type SlotFeatureTag = 'free-spins' | 'progressive-jackpot' | 'multiplier' | 'bonus-round' | 're-spins';

export interface SlotCategoryTags {
  mechanics?: SlotMechanic[];
  volatilityLevel?: SlotVolatilityLevel;
  themes?: SlotTheme[];
  features?: SlotFeatureTag[];
  isNew?: boolean;
  isHighRtp?: boolean; // RTP >= 96.5%
  rtpValue?: number; // numeric RTP for sorting, e.g., 96.49
}

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

  // Category tags for filtering (used by category pages)
  categoryTags?: SlotCategoryTags;
}

export type SlotRegistry = Record<string, SlotData>;
