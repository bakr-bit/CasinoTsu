/**
 * Maps category slugs to their header images
 * Child pages use the same header as their parent pillar page
 */
export const categoryHeaders: Record<string, string> = {
  // Games
  slots: '/headers/slots-header.webp',
  roulette: '/headers/roulette-header.webp',
  poker: '/headers/poker-header.webp',
  blackjack: '/headers/blackjack-header.webp',
  baccarat: '/headers/baccarat-header.webp',
  craps: '/headers/craps-header.webp',

  // Live casino & game shows
  'live-casino': '/headers/live-casino.webp',
  'game-shows': '/headers/game-shows.webp',
  'crash-games': '/headers/crash-games.webp',

  // Bonuses
  bonuses: '/headers/bonus-header.webp',
  'free-spins': '/headers/free-spins-header.webp',
  'no-deposit': '/headers/no-deposit.webp',

  // Casino reviews
  reviews: '/headers/reviews.webp',
  'new-casinos': '/headers/new-casinos-header.webp',

  // Mobile
  'mobile-casino': '/headers/mobile-casino-header.webp',

  // Providers
  providers: '/headers/providers.webp',

  // Payments
  payment: '/headers/payments.webp',

  // Guides & Info
  guides: '/headers/guides.webp',
  info: '/headers/info.webp',
};

/**
 * Get the header image for a category
 * Returns undefined if no header is configured
 */
export function getCategoryHeader(category: string): string | undefined {
  return categoryHeaders[category];
}
