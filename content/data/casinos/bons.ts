import type { CasinoData } from './types';

export const bons: CasinoData = {
  slug: 'bons',
  name: 'Bons Casino',
  nameJa: 'ボンズカジノ',
  logo: '/assets/casino/bonscom.png',
  rating: 4.6,

  license: {
    name: 'Antillephone License Validation (Curacao)',
    jurisdiction: 'キュラソー',
  },

  operator: 'Owl In N.V.',
  established: 2019,

  affiliate: {
    url: 'https://casinotsu.com/go/bons',
  },

  features: {
    bonusHeadline: '最大$3,950ウェルカムボーナス + 200回フリースピン',
    highlights: [
      '最大$3,950の豪華なウェルカムボーナスと限定入金不要ボーナスあり',
      'カジノ、ライブカジノ、スポーツベット、eスポーツまで楽しめるハイブリッドカジノ',
      '仮想通貨を含む豊富な決済方法に対応し、入出金スピードが速いと評判',
      '損失額の最大35%を還元するキャッシュバックシステム',
      '日本語ディーラーがいる独占ライブカジノテーブル「サムライスタジオ」を提供'
    ],
    watchouts: [
      'ボーナスの賭け条件が一体型でやや厳しめ（20～30倍）',
      '銀行振込など、一部の出金方法で遅延の報告がある',
      '外部評価（Casino Guru）で安全性指数が「平均以下」と評価されている'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'litecoin', 'ripple', 'dogecoin', 'usdc', 'solana', 'polygon', 'bank-transfer', 'payz', 'vega-wallet', 'muchbetter', 'sticpay', 'visa', 'mastercard', 'jcb'],

  facts: [
    { label: '設立年', value: '2019年' },
    { label: 'ライセンス', value: 'キュラソー (Antillephone License Validation)' },
    { label: '運営会社', value: 'Owl In N.V.' },
    { label: 'ゲームプロバイダー数', value: '85社以上' },
    { label: 'サポート体制', value: '24時間年中無休（ライブチャット、メール）' },
    { label: '入金不要ボーナス', value: '5,000円 + FS20回 (限定特典)' },
    { label: 'モバイル対応', value: '公式アプリあり (iOS/Android)' },
    { label: '月間出金限度額', value: '100,000ドル' }
  ],

  meta: {
    title: 'Bons Casino（ボンズカジノ）レビュー【2025年最新版】 | 最大$3,950ボーナス',
    description:
      'ボンズカジノ（Bons）の安全性、ボーナス、評判を徹底解説。最大$3,950のウェルカムボーナスに加え、スポーツベットや日本語ライブカジノも楽しめるハイブリッドカジノです。豊富な仮想通貨決済に対応。',
  },
};
