import type { CasinoData } from './types';

export const casinoleo: CasinoData = {
  slug: 'casinoleo',
  name: 'CasinoLeo',
  nameJa: 'カジノレオ',
  logo: '/assets/casino/casinoleo.png',
  rating: 4.2,

  license: {
    name: 'GAMING CURACAO',
    jurisdiction: 'キュラソー',
  },

  operator: 'Dawg Entertainment B.V.',
  established: 2022,

  affiliate: {
    url: 'https://casinotsu.com/go/casinoleo',
  },

  features: {
    bonusHeadline: '最大¥150,000ウェルカムボーナス + 賭け条件なしフリースピン10回',
    highlights: [
      '最大15万円の太っ腹なウェルカムボーナスを提供',
      '24時間体制の日本語ライブチャットサポートが利用可能',
      '賭け条件なしの入金不要フリースピンが提供されていた',
      'キャンペーンやプロモーションが豊富に用意されていた'
    ],
    watchouts: [
      '利用可能な決済方法が限定的でした',
      'VIPプログラムやポイントサービスは提供されていませんでした',
      '銀行振込での出金に3.5%の手数料がかかる'
    ],
  },

  payments: ['bank-transfer', 'visa', 'mastercard', 'jcb', 'vega-wallet', 'payz', 'bitcoin', 'ethereum'],

  facts: [
    { label: '名称', value: 'CasinoLeo' },
    { label: 'ローンチ', value: '2022年9月' },
    { label: '運営会社', value: 'Dawg Entertainment B.V.' },
    { label: 'ライセンス', value: 'GAMING CURACAO' },
    { label: 'ゲーム総数', value: '約3,000種類' },
    { label: '日本語サポート', value: '24時間ライブチャット' },
    { label: 'VIPプログラム', value: 'なし' }
  ],

  meta: {
    title: 'CasinoLeo（カジノレオ）レビュー 2025年｜入金不要ボーナス',
    description:
      '日本市場を撤退したカジノレオ（Casino Leo）の詳細レビュー。最大¥150,000の豪華ウェルカムボーナスや、賭け条件なしのフリースピン、24時間日本語サポートなど、かつての魅力を徹底解説します。',
  },
};
