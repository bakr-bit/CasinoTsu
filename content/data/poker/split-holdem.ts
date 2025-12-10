import type { PokerData } from './types';

export const split_holdem: PokerData = {
  slug: 'split-holdem',
  name: "Split Hold'em",
  nameJa: "スプリット・ホールデム",

  category: "variant",

  playerCount: "2-10",
  deckCount: 1,
  houseEdge: "N/A",

  highlights: [
    "1ハンドに2つの「ボード」（共有カードの列）が用意される",
    "ポットを2分割して勝者に配分されるため、片方のボードで負けても挽回チャンスがある",
    "ルールはシンプルながら戦略性が深く、ポーカー経験者も初心者も楽しめる",
    "戦略の幅が広がり、通常のテキサスホールデムとは異なるワクワク感が味わえる"
  ],

  difficulty: "intermediate",

  relatedVariants: ["texas-hold-em","omaha-hold-em","short-deck-holdem"],

  recommendedCasinos: [],

  meta: {
    title: "スプリット・ホールデム徹底ガイド：ルール、戦略、オンラインでの遊び方",
    description: "スプリット・ホールデムの基本ルールから戦略、オンラインでのプレイ方法を徹底解説。2つのボードで楽しむテキサスホールデムの変種で、初心者から経験者まで楽しめる奥深いゲームです。安全なオンラインカジノ選びのポイントも紹介。",
  },
};
