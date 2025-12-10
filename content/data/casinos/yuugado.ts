import type { CasinoData } from './types';

export const yuugado: CasinoData = {
  slug: 'yuugado',
  name: 'Yuugado',
  nameJa: '遊雅堂（ゆうがどう）',
  logo: '/assets/casino/yuugado.png',
  rating: 4.6,

  license: {
    name: 'Curaçao eGaming',
    jurisdiction: 'キュラソー',
  },

  operator: 'Breckenridge Curacao B.V.',
  established: 2021,

  affiliate: {
    url: 'https://casinotsu.com/go/yuugado',
  },

  features: {
    bonusHeadline: '最大¥128,000ウェルカムボーナス + フリースピン60回',
    highlights: [
      '安心のベラジョングループ運営で信頼性が高い',
      '日本円(JPY)に完全対応し、和のテイストで使いやすい',
      'カジノゲームに加え、パチンコ館やスポーツベットも楽しめる',
      '最大¥128,000の豪華な選べるウェルカムボーナス',
      '日本語サポートが充実（ライブチャットは午前9時～翌午前2時）'
    ],
    watchouts: [
      'ライブチャットは24時間対応ではない',
      '出金審査に時間がかかるという口コミが一部見られる'
    ],
  },

  payments: ['american-express', 'bank-transfer', 'bitcoin', 'bitcoin-cash', 'ethereum', 'jcb', 'litecoin', 'mastercard', 'muchbetter', 'payz', 'ripple', 'vega-wallet', 'visa', 'jetonbank', 'point66', 'tether'],

  facts: [
    { label: '名称', value: 'Yuugado (遊雅堂)' },
    { label: '設立年', value: '2021年' },
    { label: 'ライセンス', value: 'Curaçao eGaming' },
    { label: '運営会社', value: 'Breckenridge Curacao B.V.' },
    { label: '対応通貨', value: '日本円(JPY)に完全対応' },
    { label: '日本語サポート', value: 'ライブチャット 午前9時～翌午前2時' },
    { label: 'VIPプログラム', value: '遊雅マイレージプログラムあり' },
    { label: '特徴的なゲーム', value: 'パチンコ館、スポーツベット' }
  ],

  meta: {
    title: '遊雅堂（ゆうがどう/Yuugado）レビュー【2025年最新版】',
    description:
      'ベラジョングループの遊雅堂（Yuugado）は、和風デザインと日本円対応が魅力。最大¥128,000の選べるボーナスに加え、パチンコ館やスポーツベットも楽しめる万能型カジノです。',
  },
};
