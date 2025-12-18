import type { BlackjackData } from './types';

export const rules: BlackjackData = {
  slug: 'rules',
  name: 'Blackjack Rules',
  nameJa: 'ブラックジャックのルール',

  category: 'rules',

  houseEdge: '0.5%',

  highlights: [
    'カードの値とゲームの進め方を分かりやすく解説',
    'ヒット・スタンド・ダブルダウン・スプリットの基本アクション',
    'ベーシックストラテジー早見表付き',
    'オンラインカジノでの注意点も網羅',
  ],

  difficulty: 'beginner',

  relatedVariants: ['strategy', 'variants', 'free'],

  recommendedCasinos: [],

  meta: {
    title: 'ブラックジャックのルール徹底解説：基礎から戦略まで',
    description:
      'ブラックジャックのルールを初心者にも分かりやすく解説。基本的な遊び方から、ハウスエッジを下げるための戦略、オンラインカジノでプレイする際の注意点まで網羅的にご紹介します。',
  },
};
