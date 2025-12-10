import type { CasinoData } from './types';

export const playamo: CasinoData = {
  slug: 'playamo',
  name: 'Playamo',
  nameJa: 'プレイアモカジノ',
  logo: '/assets/casino/playamo.png',
  rating: 4,

  license: {
    name: 'Curacao eGaming',
    jurisdiction: 'キュラソー',
  },

  operator: 'DAMA N.V. Casinos',
  established: 2020,

  affiliate: {
    url: 'https://casinotsu.com/go/playamo',
  },

  features: {
    bonusHeadline: '最大¥36,000ウェルカムボーナス + フリースピン150回',
    highlights: [
      '豊富なゲーム数と多種多様な決済方法',
      '日々のプロモーションが充実している',
      '128ビットSSL暗号化技術でセキュリティ万全',
      'PWA技術採用で専用アプリ不要、モバイルプレイが快適',
      '認定RNGによるゲームの公平性が保証されている'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'jcb', 'mastercard', 'muchbetter', 'payz', 'sticpay', 'usdt', 'venus-point', 'visa', 'maestro', 'interac', 'paysafecard', 'rapid-transfer', 'zimpler', 'mifinity', 'jeton', 'binance', 'idebit', 'iwallet'],

  facts: [
    { label: '名称', value: 'プレイアモカジノ (Playamo)' },
    { label: '運営会社', value: 'DAMA N.V. Casinos' },
    { label: 'ライセンス', value: 'キュラソー (8048/JAZ2020-013)' },
    { label: '総合評価', value: '4.0/5.0' },
    { label: 'ウェルカムボーナス', value: '最大¥36,000 + FS 150回' },
    { label: 'ボーナス賭け条件', value: '50倍' },
    { label: 'セキュリティ', value: '128ビットSSL暗号化技術' }
  ],

  meta: {
    title: 'プレイアモカジノ（Playamo）徹底レビュー【2024年最新版】',
    description:
      'プレイアモカジノの評判、ボーナス、入出金方法を徹底解説。キュラソーライセンスを持つDAMA N.V.運営。豊富なゲームと決済方法が魅力です。',
  },
};
