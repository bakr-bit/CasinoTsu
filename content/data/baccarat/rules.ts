import type { BaccaratData } from './types';

export const rules: BaccaratData = {
  slug: 'rules',
  name: 'Baccarat Rules',
  nameJa: 'バカラのルール',

  category: 'rules',

  houseEdge: '1.06%',

  highlights: [
    'プレイヤー・バンカー・タイの3種類のベット解説',
    'カードの値と合計の計算方法',
    '3枚目のカードルールを分かりやすく説明',
    '配当表と戦略の基礎',
  ],

  difficulty: 'beginner',

  relatedVariants: ['strategy', 'variants', 'squeeze'],

  recommendedCasinos: [],

  meta: {
    title: 'バカラのルールを徹底解説！初心者でもすぐに理解できる完全ガイド',
    description:
      'バカラのルールを初心者の方にも分かりやすく丁寧に解説。基本的なルールからゲームの流れ、配当まで、バカラをプレイするために必要な情報を網羅しています。',
  },
};
