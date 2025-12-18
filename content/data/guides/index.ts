/**
 * Guides Data Registry
 * Central hub for all casino guide data access
 *
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run: npm run build:guides-index
 */

import type { GuideData } from './types';

// Import individual guide data
import { _3_things_poker_winners_do } from './3-things-poker-winners-do';
import { account_management } from './account-management';
import { bad_check_reasons } from './bad-check-reasons';
import { bankroll_management } from './bankroll-management';
import { beginner } from './beginner';
import { bluffing } from './bluffing';
import { break_free_downswing } from './break-free-downswing';
import { casino_best_game_odds } from './casino-best-game-odds';
import { casino_english_vocabulary } from './casino-english-vocabulary';
import { casino_original_games } from './casino-original-games';
import { casino_skill_games } from './casino-skill-games';
import { donk_bet } from './donk-bet';
import { fake_casinos } from './fake-casinos';
import { free_casino_games } from './free-casino-games';
import { freeroll_strategies } from './freeroll-strategies';
import { glossary } from './glossary';
import { hand_probabilities } from './hand-probabilities';
import { high_roller } from './high-roller';
import { hole_card_ranking } from './hole-card-ranking';
import { house_edge } from './house-edge';
import { how_casino_attract_high_rollers } from './how-casino-attract-high-rollers';
import { how_to_be_poker_pro } from './how-to-be-poker-pro';
import { mahjong } from './mahjong';
import { not_to_become_fish } from './not-to-become-fish';
import { pachinko } from './pachinko';
import { poker_hands_evaluation } from './poker-hands-evaluation';
import { poker_tournament_tips } from './poker-tournament-tips';
import { popular_casino_games_strategies } from './popular-casino-games-strategies';
import { preflop_mistakes } from './preflop-mistakes';
import { reverse_tell } from './reverse-tell';
import { rng_explained } from './rng-explained';
import { side_bet_poker } from './side-bet-poker';
import { sit_and_go } from './sit-and-go';
import { slingo } from './slingo';
import { sowq_documents } from './sowq-documents';
import { texas_hold_em_position_guide } from './texas-hold-em-position-guide';
import { tips_for_big_tounaments } from './tips-for-big-tounaments';
import { vip_program } from './vip-program';
import { wagering_requirements } from './wagering-requirements';
import { writers_best_10_casino } from './writers-best-10-casino';

// Re-export types
export type { GuideData } from './types';

/**
 * Registry type for guides
 */
export type GuidesRegistry = Record<string, GuideData>;

/**
 * Registry of all guides indexed by slug
 */
export const guidesRegistry: GuidesRegistry = {
  '3-things-poker-winners-do': _3_things_poker_winners_do,
  'account-management': account_management,
  'bad-check-reasons': bad_check_reasons,
  'bankroll-management': bankroll_management,
  beginner: beginner,
  bluffing: bluffing,
  'break-free-downswing': break_free_downswing,
  'casino-best-game-odds': casino_best_game_odds,
  'casino-english-vocabulary': casino_english_vocabulary,
  'casino-original-games': casino_original_games,
  'casino-skill-games': casino_skill_games,
  'donk-bet': donk_bet,
  'fake-casinos': fake_casinos,
  'free-casino-games': free_casino_games,
  'freeroll-strategies': freeroll_strategies,
  glossary: glossary,
  'hand-probabilities': hand_probabilities,
  'high-roller': high_roller,
  'hole-card-ranking': hole_card_ranking,
  'house-edge': house_edge,
  'how-casino-attract-high-rollers': how_casino_attract_high_rollers,
  'how-to-be-poker-pro': how_to_be_poker_pro,
  mahjong: mahjong,
  'not-to-become-fish': not_to_become_fish,
  pachinko: pachinko,
  'poker-hands-evaluation': poker_hands_evaluation,
  'poker-tournament-tips': poker_tournament_tips,
  'popular-casino-games-strategies': popular_casino_games_strategies,
  'preflop-mistakes': preflop_mistakes,
  'reverse-tell': reverse_tell,
  'rng-explained': rng_explained,
  'side-bet-poker': side_bet_poker,
  'sit-and-go': sit_and_go,
  slingo: slingo,
  'sowq-documents': sowq_documents,
  'texas-hold-em-position-guide': texas_hold_em_position_guide,
  'tips-for-big-tounaments': tips_for_big_tounaments,
  'vip-program': vip_program,
  'wagering-requirements': wagering_requirements,
  'writers-best-10-casino': writers_best_10_casino,
};

/**
 * Get a single guide by slug
 */
export function getGuide(slug: string): GuideData | undefined {
  return guidesRegistry[slug];
}

/**
 * Get all guides as an array
 */
export function getAllGuides(): GuideData[] {
  return Object.values(guidesRegistry);
}

/**
 * Get all guide slugs
 */
export function getGuideSlugs(): string[] {
  return Object.keys(guidesRegistry);
}

/**
 * Get guides by category
 */
export function getGuidesByCategory(category: GuideData['category']): GuideData[] {
  return getAllGuides().filter((guide) => guide.category === category);
}

/**
 * Get guides by target audience
 */
export function getGuidesByAudience(audience: 'beginner' | 'intermediate' | 'advanced' | 'all'): GuideData[] {
  return getAllGuides().filter((guide) => guide.targetAudience === audience);
}

/**
 * Get beginner guides
 */
export function getBeginnerGuides(): GuideData[] {
  return getGuidesByCategory('beginner');
}

/**
 * Get strategy guides
 */
export function getStrategyGuides(): GuideData[] {
  return getGuidesByCategory('strategy');
}

/**
 * Get poker guides
 */
export function getPokerGuides(): GuideData[] {
  return getGuidesByCategory('poker');
}

/**
 * Get casino guides
 */
export function getCasinoGuides(): GuideData[] {
  return getGuidesByCategory('casino');
}

/**
 * Get bonus guides
 */
export function getBonusGuides(): GuideData[] {
  return getGuidesByCategory('bonus');
}

/**
 * Get safety guides
 */
export function getSafetyGuides(): GuideData[] {
  return getGuidesByCategory('safety');
}

/**
 * Get game guides
 */
export function getGameGuides(): GuideData[] {
  return getGuidesByCategory('games');
}
