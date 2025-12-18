import type { BlackjackData } from './types';

export const strategy: BlackjackData = {
  slug: 'strategy',
  name: 'Blackjack Strategy',
  nameJa: 'ブラックジャック戦略ガイド',

  category: 'strategy',

  houseEdge: '0.5%',

  highlights: [
    'ベーシックストラテジーで勝率を最大化',
    'カードカウンティングの基礎知識',
    '資金管理のテクニック',
    'ハウスエッジの理解と活用法',
  ],

  difficulty: 'intermediate',

  relatedVariants: ['rules', 'variants', 'free'],

  recommendedCasinos: [],

  meta: {
    title: 'ブラックジャック必勝戦略ガイド：基礎から応用まで徹底解説',
    description:
      'ブラックジャックの戦略を初心者から上級者まで役立つ形で詳しく解説。基本戦略からカードカウンティング、オンラインカジノで活用できるヒントまで網羅しています。',
  },
};
