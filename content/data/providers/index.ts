/**
 * Provider Data Registry
 * Central hub for all game provider/developer data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:providers-index
 */

import type { ProviderData, ProviderRegistry } from './types';

// Import individual provider data
import { Evolution } from './Evolution';
import { air_dice } from './air-dice';
import { authentic_gaming } from './authentic-gaming';
import { betgames } from './betgames';
import { betsoft } from './betsoft';
import { bgaming } from './bgaming';
import { big_time_gaming } from './big-time-gaming';
import { blueprint_gaming } from './blueprint-gaming';
import { booming_games } from './booming-games';
import { booongo } from './booongo';
import { ela_games } from './ela-games';
import { elk_studios } from './elk-studios';
import { fa_chai_gaming } from './fa-chai-gaming';
import { golden_hero_games } from './golden-hero-games';
import { greentube } from './greentube';
import { habanero } from './habanero';
import { hogaming } from './hogaming';
import { igt } from './igt';
import { indigo_magic } from './indigo-magic';
import { isoftbet } from './isoftbet';
import { lightning_box } from './lightning-box';
import { manna_play } from './manna-play';
import { merkur_gaming } from './merkur-gaming';
import { microgaming } from './microgaming';
import { nolimit_city } from './nolimit-city';
import { novomatic } from './novomatic';
import { octoplay } from './octoplay';
import { pg_soft } from './pg-soft';
import { playtech } from './playtech';
import { pragmatic_play } from './pragmatic-play';
import { print_studios } from './print-studios';
import { push_gaming } from './push-gaming';
import { quik_gaming } from './quik-gaming';
import { racjin } from './racjin';
import { reel_kingdom } from './reel-kingdom';
import { spinmatic } from './spinmatic';
import { spinomenal } from './spinomenal';
import { stakelogic } from './stakelogic';
import { thunderkick } from './thunderkick';
import { vivo_gaming } from './vivo-gaming';
import { wazdan } from './wazdan';

// Re-export types
export type { ProviderData, ProviderRegistry } from './types';

/**
 * Registry of all providers indexed by slug
 */
export const providersRegistry: ProviderRegistry = {
  Evolution: Evolution,
  'air-dice': air_dice,
  'authentic-gaming': authentic_gaming,
  betgames: betgames,
  betsoft: betsoft,
  bgaming: bgaming,
  'big-time-gaming': big_time_gaming,
  'blueprint-gaming': blueprint_gaming,
  'booming-games': booming_games,
  booongo: booongo,
  'ela-games': ela_games,
  'elk-studios': elk_studios,
  'fa-chai-gaming': fa_chai_gaming,
  'golden-hero-games': golden_hero_games,
  greentube: greentube,
  habanero: habanero,
  hogaming: hogaming,
  igt: igt,
  'indigo-magic': indigo_magic,
  isoftbet: isoftbet,
  'lightning-box': lightning_box,
  'manna-play': manna_play,
  'merkur-gaming': merkur_gaming,
  microgaming: microgaming,
  'nolimit-city': nolimit_city,
  novomatic: novomatic,
  octoplay: octoplay,
  'pg-soft': pg_soft,
  playtech: playtech,
  'pragmatic-play': pragmatic_play,
  'print-studios': print_studios,
  'push-gaming': push_gaming,
  'quik-gaming': quik_gaming,
  racjin: racjin,
  'reel-kingdom': reel_kingdom,
  spinmatic: spinmatic,
  spinomenal: spinomenal,
  stakelogic: stakelogic,
  thunderkick: thunderkick,
  'vivo-gaming': vivo_gaming,
  wazdan: wazdan,
};

/**
 * Get a single provider by slug
 */
export function getProvider(slug: string): ProviderData | undefined {
  return providersRegistry[slug];
}

/**
 * Get all providers as an array
 */
export function getAllProviders(): ProviderData[] {
  return Object.values(providersRegistry);
}

/**
 * Get all provider slugs
 */
export function getProviderSlugs(): string[] {
  return Object.keys(providersRegistry);
}

/**
 * Get providers by game type
 * @param gameType - One of: 'slots', 'live-casino', 'table-games', 'video-poker', 'scratch-cards', 'crash-games'
 */
export function getProvidersByGameType(gameType: string): ProviderData[] {
  return getAllProviders().filter((provider) =>
    provider.gameTypes.includes(gameType)
  );
}

/**
 * Get casinos that feature a specific provider
 * Returns casino slugs from the recommendedCasinos field
 */
export function getCasinosForProvider(providerSlug: string): string[] {
  const provider = providersRegistry[providerSlug];
  return provider?.recommendedCasinos || [];
}

/**
 * Get providers founded after a specific year
 */
export function getProvidersByFoundedYear(year: number): ProviderData[] {
  return getAllProviders().filter((provider) => provider.founded >= year);
}

/**
 * Search providers by name (English or Japanese)
 */
export function searchProviders(query: string): ProviderData[] {
  const lowerQuery = query.toLowerCase();
  return getAllProviders().filter(
    (provider) =>
      provider.name.toLowerCase().includes(lowerQuery) ||
      provider.nameJa.includes(query)
  );
}
