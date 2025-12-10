import type { CasinoData } from './types';

export const lucky_casino: CasinoData = {
  slug: 'lucky-casino',
  name: 'LuckyCasino',
  nameJa: 'ラッキーカジノ',
  logo: '/assets/casino/lucky-casino.png',
  rating: 4.2,

  license: {
    name: 'Malta Gaming Authority',
    jurisdiction: 'マルタ',
  },

  operator: 'Glitnor Services Limited',
  established: 2015,

  affiliate: {
    url: 'https://casinotsu.com/go/lucky-casino',
  },

  features: {
    bonusHeadline: '最大$1,500ウェルカムボーナス（3回目入金まで）',
    highlights: [
      '入金3回目までボーナス最大$1,500',
      '低めに設定された最低入出金額',
      'スピーディーな出金対応',
      '日本人ネイティブスピーカーによるサポート',
      'シンプルで直感的な操作性のサイトデザイン'
    ],
    watchouts: [
      '際立った特徴が少ない',
      '一部ボーナスに最大勝利金上限(€2,500)が設定されている',
      'プロモーションの頻度が低い'
    ],
  },

  payments: ['mastercard', 'jcb', 'vega-wallet', 'payz', 'muchbetter', 'bank-transfer'],

  facts: [
    { label: '名称', value: 'LuckyCasino（ラッキーカジノ）' },
    { label: '設立年', value: '2015年' },
    { label: 'ライセンス', value: 'Malta Gaming Authority (マルタ)' },
    { label: '運営会社', value: 'Glitnor Services Limited' },
    { label: 'ウェルカムボーナス', value: '最大$1,500' },
    { label: '賭け条件', value: '35倍 (ボーナス額に対して)' },
    { label: '日本語サポート', value: '毎日対応 (チャット)' },
    { label: '出金速度', value: '24時間以内 (電子ウォレット)' }
  ],

  meta: {
    title: 'LuckyCasino（ラッキーカジノ）レビュー【2024年最新版】｜シンプルさが魅力の老舗カジノ',
    description:
      'LuckyCasino（ラッキーカジノ）は、マルタライセンスを持つシンプル設計の老舗カジノです。最大$1,500のウェルカムボーナスと35倍の賭け条件を提供。迅速な出金と日本人ネイティブサポートが魅力で、ゲームプレイに集中したいプレイヤーにおすすめです。',
  },
};
