import type { PokerData } from './types';

export const rules: PokerData = {
  slug: 'rules',
  name: "Poker Rules",
  nameJa: "ポーカーのルール徹底解説",

  category: "rules",

  // playerCount: undefined,
  // deckCount: undefined,
  // houseEdge: undefined,

  highlights: [
    "ポーカー初心者から中級者までに役立つルール説明",
    "役（ハンド）とその強さを一覧で解説",
    "テキサスホールデムを例にゲームの進行をステップごとに解説",
    "日本向けオンラインポーカーの特徴や利用環境を網羅",
    "入出金方法、法規制、責任あるギャンブルについても解説"
  ],

  difficulty: "intermediate",

  relatedVariants: ["texas-hold-em","three-card-poker","caribbean-stud-poker"],

  recommendedCasinos: [],

  meta: {
    title: "ポーカーのルール徹底解説｜初心者向けオンラインポーカー完全ガイド",
    description: "オンラインポーカーの基本ルール、役の強さ、ゲーム進行を徹底解説。日本向けオンラインポーカーの特徴や入出金、法規制まで網羅した初心者・中級者向けガイド。",
  },
};
