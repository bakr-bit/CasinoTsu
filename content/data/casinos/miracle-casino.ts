import type { CasinoData } from './types';

export const miracle_casino: CasinoData = {
  slug: 'miracle-casino',
  name: 'Miracle Casino',
  nameJa: 'ミラクルカジノ',
  logo: '/assets/casino/miracle-casino.png',
  rating: 4.3,

  license: {
    name: 'Antillephone',
    jurisdiction: 'キュラソー',
  },

  operator: 'Sector Media N.V.',
  established: 2022,

  affiliate: {
    url: 'https://casinotsu.com/go/miracle-casino',
  },

  features: {
    bonusHeadline: '入金不要ボーナス$20 & 初回入金50%キャッシュバック最大$350 (賭け条件1倍)',
    highlights: [
      '入出金が業界最速クラス（平均10分）',
      '24時間対応の日本語カスタマーサポート',
      '降格なしの累計ベット額で昇格するVIPプログラム',
      '還元率の高いリベートボーナスを提供',
      'ライブバカラのゲーム数が豊富で利用満足度No,1'
    ],
    watchouts: [
      '2025年9月30日をもってサービス終了予定',
      'クレジットカード決済が利用できない',
      '銀行振込など一部決済方法で手数料がかかる'
    ],
  },

  payments: ['bank-transfer', 'bitcoin', 'ethereum', 'payz', 'sticpay', 'vega-wallet', 'tether', 'litecoin', 'bitcoin-cash'],

  facts: [
    { label: '設立年', value: '2022年' },
    { label: '運営会社', value: 'Sector Media N.V.' },
    { label: 'ライセンス', value: 'Antillephone (キュラソー)' },
    { label: '日本語サポート', value: '24時間対応 (ライブチャット/メール)' },
    { label: '出金速度', value: '平均10分 (業界最速クラス)' },
    { label: 'VIPシステム', value: '降格なし (累計ベット額で昇格)' },
    { label: '特化ゲーム', value: 'ライブバカラ' },
    { label: '最大月間出金額', value: '$15,000,000' }
  ],

  meta: {
    title: 'Miracle Casino（ミラクルカジノ）レビュー【2025年最新版】',
    description:
      'ライブバカラ満足度No,1のミラクルカジノを徹底解説。入金不要ボーナス$20や最大$350の初回キャッシュバック、降格なしのVIPプログラムが魅力。爆速出金でハイローラーにも最適です。',
  },
};
