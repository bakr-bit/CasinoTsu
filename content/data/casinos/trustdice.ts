import type { CasinoData } from './types';

export const trustdice: CasinoData = {
  slug: 'trustdice',
  name: 'Trustdice',
  nameJa: 'トラストダイス（TRUST DICE）',
  logo: '/assets/casino/trustdice.png',
  rating: 4,

  license: {
    name: 'Antillephone',
    jurisdiction: 'キュラソー',
  },

  operator: 'Satoshi Gaming Group N.V.',
  established: 2018,

  affiliate: {
    url: 'https://casinotsu.com/go/trustdice',
  },

  features: {
    bonusHeadline: '最大3BTC / $90,000 + 100フリースピンのウェルカムパッケージ',
    highlights: [
      '入金ボーナスが3ビットコインと非常に豪華',
      'TXTトークンを預けて配当を得る資産運用型カジノ',
      '独自のオリジナルゲーム（Dice, Crash）を提供',
      'スロットおよびライブカジノの種類が豊富（約8,000種類）'
    ],
    watchouts: [
      'Payzなどの主要な電子決済方法が利用できない',
      '米ドルでのプレイは対応していない',
      '日本人サポートの対応時間が限定的である'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'usdt', 'bank-transfer', 'visa', 'mastercard', 'vega-wallet', 'sticpay'],

  facts: [
    { label: 'ローンチ年', value: '2018年' },
    { label: '運営会社', value: 'Satoshi Gaming Group N.V.' },
    { label: 'ライセンス', value: 'Antillephone (キュラソー)' },
    { label: '対応通貨', value: '仮想通貨9種類以上、日本円など法定通貨' },
    { label: 'ゲーム総数', value: '約8,000種類' },
    { label: 'VIPプログラム', value: 'Shrimp to Satoshi (全13段階)' },
    { label: '本人確認(KYC)', value: '原則任意 (高額出金時に必要)' }
  ],

  meta: {
    title: 'トラストダイス（Trustdice）レビュー｜最大3BTCボーナスとTXTマイニング【2024年最新版】',
    description:
      '仮想通貨マイニングと資産運用が可能な次世代型オンラインカジノ、トラストダイスを徹底解説。最大3BTCの豪華ボーナス、豊富なゲーム、日本語サポートの対応時間、入出金方法まで網羅。仮想通貨プレイヤー必見です。',
  },
};
