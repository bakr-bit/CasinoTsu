import type { CasinoData } from './types';

export const casino_secret: CasinoData = {
  slug: 'casino-secret',
  name: 'Casino Secret',
  nameJa: 'カジノシークレット',
  logo: '/assets/casino/casino-secret.png',
  rating: 4.3,

  license: {
    name: 'Gaming Curacao',
    jurisdiction: 'キュラソー',
  },

  operator: 'Niollo B.V.',
  established: 2018,

  affiliate: {
    url: 'https://casinotsu.com/go/casino-secret',
  },

  features: {
    bonusHeadline: 'ジャパカジ限定$35入金不要ボーナス＋最大$1,000ウェルカムボーナス＆賭け条件なしインスタントキャッシュバック',
    highlights: [
      '賭け条件なしでリアルマネーが進呈されるインスタントキャッシュバック',
      'ジャパカジ限定の入金不要ボーナス$35（賭け条件20倍）',
      '初回〜3回目入金で合計最大$1,000の豪華ウェルカムボーナス',
      '国内銀行送金や主要な仮想通貨を含む豊富な入出金方法',
      '毎日開催される日替わりデイリーキャンペーンが復活'
    ],
  },

  payments: ['american-express', 'bank-transfer', 'bitcoin', 'bitcoin-cash', 'ethereum', 'iwallet', 'jcb', 'litecoin', 'mastercard', 'payz', 'ripple', 'sticpay', 'tether', 'vega-wallet', 'visa'],

  facts: [
    { label: '名称', value: 'Casino Secret' },
    { label: '運営会社', value: 'Niollo B.V.' },
    { label: '設立年', value: '2018年' },
    { label: 'ライセンス', value: 'Gaming Curacao (キュラソー)' },
    { label: '最小入金額', value: '$20 (銀行送金は$10〜)' },
    { label: '最小出金額', value: '$20' },
    { label: '入金分の出金条件', value: '2倍' },
    { label: 'ライブチャット対応時間', value: '毎日 10:00 〜 翌2:00' }
  ],

  meta: {
    title: 'Casino Secret（カジノシークレット）レビュー＆限定ボーナス【2025年最新版】',
    description:
      'Casino Secret（カジノシークレット）は、賭け条件なしのインスタントキャッシュバックが魅力のオンラインカジノ。ジャパカジ限定の入金不要ボーナス$35や最大$1,000のウェルカムボーナス、豊富な入出金方法を徹底解説します。',
  },
};
