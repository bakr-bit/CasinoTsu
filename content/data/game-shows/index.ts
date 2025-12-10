/**
 * Game Show Data Registry
 * Central hub for all game show data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:game-shows-index
 */

import type { GameShowData, GameShowRegistry } from './types';

// Import individual game show data
import { balloon_race } from './balloon-race';
import { cash_collect_roulette_live } from './cash-collect-roulette-live';
import { cash_or_crash } from './cash-or-crash';
import { crazy_balls } from './crazy-balls';
import { crazy_coin_flip } from './crazy-coin-flip';
import { crazy_pachinko } from './crazy-pachinko';
import { crazy_time } from './crazy-time';
import { dream_catcher } from './dream-catcher';
import { evolution_lightning_ball } from './evolution-lightning-ball';
import { extra_chilli_epic_spins } from './extra-chilli-epic-spins';
import { fireball_roulette } from './fireball-roulette';
import { funky_time } from './funky-time';
import { game_shows } from './game-shows';
import { gonzos_treasure_hunt_live } from './gonzos-treasure-hunt-live';
import { ice_fishing } from './ice-fishing';
import { lightning_baccarat } from './lightning-baccarat';
import { lightning_blackjack } from './lightning-blackjack';
import { lightning_dice } from './lightning-dice';
import { lightning_dragon_tiger } from './lightning-dragon-tiger';
import { lightning_roulette } from './lightning-roulette';
import { lightning_sic_bo } from './lightning-sic-bo';
import { lightning_storm_2 } from './lightning-storm-2';
import { lightning_storm } from './lightning-storm';
import { marble_race } from './marble-race';
import { max_bet_games } from './max-bet-games';
import { mega_ball } from './mega-ball';
import { mega_wheel } from './mega-wheel';
import { monopoly_big_baller_live } from './monopoly-big-baller-live';
import { monopoly_live } from './monopoly-live';
import { powerup_roulette } from './powerup-roulette';
import { race_for_cash_live } from './race-for-cash-live';
import { vegas_ball_bonanza } from './vegas-ball-bonanza';
import { xxxtreme_lightning_baccarat } from './xxxtreme-lightning-baccarat';
import { xxxtreme_lightning_roulette } from './xxxtreme-lightning-roulette';

// Re-export types
export type { GameShowData, GameShowRegistry } from './types';

/**
 * Registry of all game shows indexed by slug
 */
export const gameShowsRegistry: GameShowRegistry = {
  'balloon-race': balloon_race,
  'cash-collect-roulette-live': cash_collect_roulette_live,
  'cash-or-crash': cash_or_crash,
  'crazy-balls': crazy_balls,
  'crazy-coin-flip': crazy_coin_flip,
  'crazy-pachinko': crazy_pachinko,
  'crazy-time': crazy_time,
  'dream-catcher': dream_catcher,
  'evolution-lightning-ball': evolution_lightning_ball,
  'extra-chilli-epic-spins': extra_chilli_epic_spins,
  'fireball-roulette': fireball_roulette,
  'funky-time': funky_time,
  'game-shows': game_shows,
  'gonzos-treasure-hunt-live': gonzos_treasure_hunt_live,
  'ice-fishing': ice_fishing,
  'lightning-baccarat': lightning_baccarat,
  'lightning-blackjack': lightning_blackjack,
  'lightning-dice': lightning_dice,
  'lightning-dragon-tiger': lightning_dragon_tiger,
  'lightning-roulette': lightning_roulette,
  'lightning-sic-bo': lightning_sic_bo,
  'lightning-storm-2': lightning_storm_2,
  'lightning-storm': lightning_storm,
  'marble-race': marble_race,
  'max-bet-games': max_bet_games,
  'mega-ball': mega_ball,
  'mega-wheel': mega_wheel,
  'monopoly-big-baller-live': monopoly_big_baller_live,
  'monopoly-live': monopoly_live,
  'powerup-roulette': powerup_roulette,
  'race-for-cash-live': race_for_cash_live,
  'vegas-ball-bonanza': vegas_ball_bonanza,
  'xxxtreme-lightning-baccarat': xxxtreme_lightning_baccarat,
  'xxxtreme-lightning-roulette': xxxtreme_lightning_roulette,
};

/**
 * Get a single game show by slug
 */
export function getGameShow(slug: string): GameShowData | undefined {
  return gameShowsRegistry[slug];
}

/**
 * Get all game shows as an array
 */
export function getAllGameShows(): GameShowData[] {
  return Object.values(gameShowsRegistry);
}

/**
 * Get all game show slugs
 */
export function getGameShowSlugs(): string[] {
  return Object.keys(gameShowsRegistry);
}

/**
 * Get game shows by category
 */
export function getGameShowsByCategory(category: GameShowData['category']): GameShowData[] {
  return getAllGameShows().filter((game) => game.category === category);
}

/**
 * Get game shows by provider
 */
export function getGameShowsByProvider(provider: string): GameShowData[] {
  return getAllGameShows().filter((game) =>
    game.provider.toLowerCase().includes(provider.toLowerCase())
  );
}

/**
 * Get casinos that offer a specific game show
 * Returns casino slugs from the recommendedCasinos field
 */
export function getCasinosForGameShow(gameShowSlug: string): string[] {
  const gameShow = gameShowsRegistry[gameShowSlug];
  return gameShow?.recommendedCasinos || [];
}
