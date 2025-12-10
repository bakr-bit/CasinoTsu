import type { CasinoData } from './types';

export const sushi_casino: CasinoData = {
  slug: 'sushi-casino',
  name: 'Sushi Casino',
  nameJa: 'スシカジノ',
  logo: '/assets/casino/sushi-casino.png',
  rating: 4,

  license: {
    name: 'Curaçao Gaming Control Board',
    jurisdiction: 'キュラソー',
  },

  operator: 'Willx N.V. / SoftGenius N.V.',
  established: 2023,

  affiliate: {
    url: 'https://casinotsu.com/go/sushi-casino',
  },

  features: {
    bonusHeadline: '最大20万円100%ボーナス + 50回フリースピン (カジノ/スポーツから選択可能)',
    highlights: [
      '8,000種類以上の豪華なゲーム数！',
      'カジノとスポーツ、自分の好みに合わせて選べるウェルカムボーナス♪',
      '充実したVIPプログラム★',
      '日本人向けの親しみやすいテーマとデザイン'
    ],
    watchouts: [
      '初回入金ボーナスの賭け条件が一体型35倍と非常に厳しい',
      '出金遅延やKYCの煩雑さに関する否定的な報告がある',
      'クレジットカードや銀行送金など、一部の決済方法がまだ準備中'
    ],
  },

  payments: ['bank-transfer', 'bitcoin', 'bitcoin-cash', 'ethereum', 'mastercard', 'payz', 'visa'],

  facts: [
    { label: '名称', value: 'Sushi Casino' },
    { label: 'ローンチ', value: '2023年' },
    { label: 'ライセンス', value: 'Curaçao Gaming Control Board (キュラソー)' },
    { label: '運営会社', value: 'Willx N.V. / SoftGenius N.V.' },
    { label: 'ゲーム数', value: '8,000種類以上' },
    { label: 'VIPプログラム', value: 'あり (豪華な特典付き)' },
    { label: '日本語サポート', value: '24時間ライブチャット (翻訳機能使用)' },
    { label: '初回ボーナス賭け条件', value: '35倍 (一体型)' }
  ],

  meta: {
    title: 'スシカジノ（Sushi Casino）レビュー【2024年最新版】豪華ボーナスと8,000種以上のゲームを徹底解説',
    description:
      'スシカジノ（Sushi Casino）は2023年オープンの新しいオンラインカジノ。最大20万円の選べるウェルカムボーナスと8,000種類以上のゲームが魅力。ライセンス、入出金、評判、注意点（出金遅延リスク）を解説します。',
  },
};
