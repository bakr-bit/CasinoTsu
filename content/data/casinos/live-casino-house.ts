import type { CasinoData } from './types';

export const live_casino_house: CasinoData = {
  slug: 'live-casino-house',
  name: 'Live Casino House',
  nameJa: 'ライブカジノハウス',
  logo: '/assets/casino/live-casino-house.png',
  rating: 4.1,

  license: {
    name: 'Anjouan Gaming License',
    jurisdiction: 'アンジュアン',
  },

  operator: 'Class Innovation B.V.',
  established: 2018,

  affiliate: {
    url: 'https://casinotsu.com/go/live-casino-house',
  },

  features: {
    bonusHeadline: '最大50,000円ウェルカムボーナス',
    highlights: [
      '6社のライブカジノプロバイダーを採用し、珍しいゲームも楽しめる',
      '毎日貰える無制限キャッシュバック＆リベートボーナスあり',
      '初回入金ボーナスは最大50,000円（スロット専用150%ボーナスも選択可能）',
      '完全日本語対応のカスタマーサポート（LINE、電話サポートも提供）',
      'スロットゲームは3,000種類以上と豊富'
    ],
    watchouts: [
      '出金時に8%の手数料がかかる',
      '入金額の5倍以上を賭けるという出金条件がある',
      'ライブカジノプロバイダー数が以前より減少した'
    ],
  },

  payments: ['vega-wallet', 'bank-transfer', 'bitcoin', 'ethereum', 'litecoin', 'payz', 'visa', 'mastercard'],

  facts: [
    { label: '運営会社', value: 'Class Innovation B.V.' },
    { label: '設立年', value: '2018年' },
    { label: 'ライセンス', value: 'アンジュアンゲーミングライセンス, キュラソー (GCB)' },
    { label: '総ゲーム数', value: '3,500種類以上' },
    { label: '日本語サポート', value: 'ライブチャット (09:00～27:00), LINE, 電話' },
    { label: '出金手数料', value: '8% (全ての決済方法)' },
    { label: 'KYC (本人確認)', value: '出金時に必要' }
  ],

  meta: {
    title: 'ライブカジノハウス（Live Casino House）レビュー【2024年最新版】',
    description:
      'ライブカジノハウスのボーナス、入出金方法、評判を徹底解説。最大50,000円のウェルカムボーナスや無制限キャッシュバックが魅力。6社のライブカジノプロバイダーを採用し、完全日本語サポートで安心して遊べます。',
  },
};
