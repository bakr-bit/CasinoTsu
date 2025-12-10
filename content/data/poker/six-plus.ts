import type { PokerData } from './types';

export const six_plus: PokerData = {
  slug: 'six-plus',
  name: "Six-Plus Poker",
  nameJa: "ショートデックポーカー（Six-Plus Poker）",

  category: "variant",

  playerCount: "2-10",
  deckCount: 1,
  // houseEdge: undefined,

  highlights: [
    "使用するカードは36枚（6～Aのみ）",
    "ハンドランキングがテキサスホールデムと一部異なる",
    "ゲーム展開が速く、より攻撃的な戦略が求められる",
    "オッズ計算に「3と6のルール」を適用する",
    "アジア発祥で世界的に人気が高まっている新星ポーカー"
  ],

  difficulty: "intermediate",

  relatedVariants: ["texas-hold-em"],

  recommendedCasinos: [
    "queen-casino"
  ],

  meta: {
    title: "ショートデックポーカー（Six-Plus）完全ガイド｜ルール・戦略・おすすめカジノ",
    description: "ショートデックポーカー（Six-Plus Poker）の基本ルールからテキサスホールデムとの違い、ハンドランキング、戦略、オッズ計算まで徹底解説。日本人向けのおすすめオンラインカジノも紹介。",
  },
};
