import type { PokerData } from './types';

export const caribbean_stud: PokerData = {
  slug: 'caribbean-stud',
  name: "Caribbean Stud Poker",
  nameJa: "カリビアン・スタッド・ポーカー",

  category: "variant",

  playerCount: "1 vs dealer",
  deckCount: 1,
  houseEdge: "約5.22%",

  highlights: [
    "プレイヤー対ディーラー形式で、複雑な心理戦なしに楽しめる",
    "ルールが単純で初心者でもすぐに馴染める",
    "ジャックポットやボーナスベットで高額配当のチャンスがある",
    "ライブディーラー版とRNG版の両方で、好みに合わせてプレイ可能"
  ],

  difficulty: "beginner",

  relatedVariants: ["three-card-poker","texas-hold-em"],

  recommendedCasinos: [
    "wonder-casino",
    "eldoah-casino",
    "parimatch",
    "duelbits"
  ],

  meta: {
    title: "カリビアン・スタッド・ポーカー完全ガイド！ルール・遊び方・攻略法を解説",
    description: "カリビアン・スタッド・ポーカーの基本ルールから遊び方、配当、攻略のコツまで徹底解説。初心者でもディーラー相手に気軽に楽しめるカジノポーカーの魅力を紹介します。おすすめオンラインカジノも。",
  },
};
