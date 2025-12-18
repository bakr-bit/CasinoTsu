/**
 * Info Data Registry
 * Central hub for all casino info/knowledge article data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:info-index
 */

import type { InfoData } from './types';

// Import individual info data
import { _10_mistakes_in_vegas } from './10-mistakes-in-vegas';
import { _5richest_poker_players } from './5richest-poker-players';
import { _7_kinds_of_poker_personalities } from './7-kinds-of-poker-personalities';
import { _7_types_of_gamblers } from './7-types-of-gamblers';
import { biggest_gambling_countries } from './biggest-gambling-countries';
import { biggest_roulette_wins } from './biggest-roulette-wins';
import { casino_license } from './casino-license';
import { casino_psychology_tricks } from './casino-psychology-tricks';
import { casinos_in_the_world } from './casinos-in-the-world';
import { champs_colossus_advice } from './champs-colossus-advice';
import { doyle_brunson } from './doyle-brunson';
import { faded_spade } from './faded-spade';
import { female_pokerplayers } from './female-pokerplayers';
import { gamble_tax_free_countries } from './gamble-tax-free-countries';
import { guinness_records } from './guinness-records';
import { history_of_the_slots } from './history-of-the-slots';
import { inactive_account } from './inactive-account';
import { info } from './info';
import { interesting_poker_facts } from './interesting-poker-facts';
import { money_list } from './money-list';
import { poker_movies } from './poker-movies';
import { poker_players_after_retire } from './poker-players-after-retire';
import { poker_players_celeb } from './poker-players-celeb';
import { poker_skills_and_business } from './poker-skills-and-business';
import { poker_tournaments } from './poker-tournaments';
import { quick_casino_games } from './quick-casino-games';
import { stu_unger } from './stu-unger';
import { taxes } from './taxes';

// Re-export types
export type { InfoData } from './types';

/**
 * Registry type for info articles
 */
export type InfoRegistry = Record<string, InfoData>;

/**
 * Registry of all info articles indexed by slug
 */
export const infoRegistry: InfoRegistry = {
  '10-mistakes-in-vegas': _10_mistakes_in_vegas,
  '5richest-poker-players': _5richest_poker_players,
  '7-kinds-of-poker-personalities': _7_kinds_of_poker_personalities,
  '7-types-of-gamblers': _7_types_of_gamblers,
  'biggest-gambling-countries': biggest_gambling_countries,
  'biggest-roulette-wins': biggest_roulette_wins,
  'casino-license': casino_license,
  'casino-psychology-tricks': casino_psychology_tricks,
  'casinos-in-the-world': casinos_in_the_world,
  'champs-colossus-advice': champs_colossus_advice,
  'doyle-brunson': doyle_brunson,
  'faded-spade': faded_spade,
  'female-pokerplayers': female_pokerplayers,
  'gamble-tax-free-countries': gamble_tax_free_countries,
  'guinness-records': guinness_records,
  'history-of-the-slots': history_of_the_slots,
  'inactive-account': inactive_account,
  info: info,
  'interesting-poker-facts': interesting_poker_facts,
  'money-list': money_list,
  'poker-movies': poker_movies,
  'poker-players-after-retire': poker_players_after_retire,
  'poker-players-celeb': poker_players_celeb,
  'poker-skills-and-business': poker_skills_and_business,
  'poker-tournaments': poker_tournaments,
  'quick-casino-games': quick_casino_games,
  'stu-unger': stu_unger,
  taxes: taxes,
};

/**
 * Get a single info article by slug
 */
export function getInfo(slug: string): InfoData | undefined {
  return infoRegistry[slug];
}

/**
 * Get all info articles as an array
 */
export function getAllInfo(): InfoData[] {
  return Object.values(infoRegistry);
}

/**
 * Get all info article slugs
 */
export function getInfoSlugs(): string[] {
  return Object.keys(infoRegistry);
}

/**
 * Get info articles by category
 */
export function getInfoByCategory(category: InfoData['category']): InfoData[] {
  return getAllInfo().filter((info) => info.category === category);
}

/**
 * Get license-related info articles
 */
export function getLicenseInfo(): InfoData[] {
  return getInfoByCategory('license');
}

/**
 * Get history-related info articles
 */
export function getHistoryInfo(): InfoData[] {
  return getInfoByCategory('history');
}

/**
 * Get people-related info articles
 */
export function getPeopleInfo(): InfoData[] {
  return getInfoByCategory('people');
}

/**
 * Get legal-related info articles
 */
export function getLegalInfo(): InfoData[] {
  return getInfoByCategory('legal');
}

/**
 * Get industry-related info articles
 */
export function getIndustryInfo(): InfoData[] {
  return getInfoByCategory('industry');
}

/**
 * Get trivia info articles
 */
export function getTriviaInfo(): InfoData[] {
  return getInfoByCategory('trivia');
}
