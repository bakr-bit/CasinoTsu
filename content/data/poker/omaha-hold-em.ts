import type { PokerData } from './types';

export const omaha_hold_em: PokerData = {
  slug: 'omaha-hold-em',
  name: "Omaha Hold'em",
  nameJa: "オマハホールデム",

  category: "variant",

  playerCount: "2-10",
  deckCount: 1,
  houseEdge: "2.5%-5% (rake)",

  highlights: [
    "手札が4枚配られ、必ず2枚使用する独特のルール",
    "テキサスホールデムより複雑で戦略的なゲーム性",
    "ポットリミットオマハ（PLO）が日本で特に人気",
    "強い役ができやすく、ポットが大きくなりやすい",
    "オンラインカジノで日本円対応サイトも多数"
  ],

  difficulty: "intermediate",

  relatedVariants: ["texas-hold-em","short-deck-poker"],

  recommendedCasinos: [],

  meta: {
    title: "オマハポーカー＆オマハホールデム完全ガイド｜ルール・戦略・サイト情報",
    description: "オマハポーカーとオマハホールデムのルール、テキサスホールデムとの違い、人気バリエーション（PLO、ハイロー）を徹底解説。日本から安全に遊べるオンラインカジノ情報や戦略のコツも紹介します。",
  },
};
