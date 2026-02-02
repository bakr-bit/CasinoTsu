import type { CasinoData } from './types';

export const inter_casino: CasinoData = {
  slug: 'inter-casino',
  name: 'InterCasino',
  nameJa: 'インターカジノ',
  logo: '/assets/casino/intercasino.png',
  rating: 4.4,

  license: {
    name: 'Antillephone / MGA',
    jurisdiction: 'キュラソー / マルタ',
  },

  operator: 'Breckenridge Curacao B.V.',
  established: 1996,

  affiliate: {
    url: 'https://casinotsu.com/go/inter-casino',
  },

  features: {
    bonusHeadline: 'CasinoTsu限定！入金不要フリースピン150回＆総額$500ウェルカムキャッシュバック',
    highlights: [
      '1996年設立、20年以上の歴史を持つ老舗オンラインカジノ',
      'ベラジョン、遊雅堂と同じ運営会社で信頼性が高い',
      '出金条件なしのウェルカムキャッシュバック総額$500',
      '本人確認（KYC）なしで即座にキャッシュプレイ可能',
      'ライブカジノ『花路野三丁目』など日本語ゲームが充実'
    ],
    watchouts: [
      '銀行送金以外で$50未満の出金には$5の手数料が発生',
      '銀行送金による出金には1.5%の手数料が発生'
    ],
  },

  payments: ['visa', 'mastercard', 'jcb', 'bank-transfer', 'payz', 'vega-wallet', 'muchbetter', 'bitcoin', 'ethereum', 'ripple'],

  facts: [
    { label: '名称', value: 'インターカジノ (InterCasino)' },
    { label: '設立年', value: '1996年' },
    { label: '運営会社', value: 'Breckenridge Curacao B.V.' },
    { label: 'ライセンス', value: 'キュラソー (Antillephone) / マルタ (MGA)' },
    { label: 'ゲーム数', value: '約2,500種類' },
    { label: 'ペイアウト率', value: '97%以上' },
    { label: 'KYC要件', value: 'キャッシュプレイは本人確認なしで即開始' },
    { label: '日本語サポート', value: 'ライブチャット 9:00～翌2:00 (年中無休)' }
  ],

  meta: {
    title: 'インターカジノ（InterCasino）レビュー【2024年最新版】',
    description:
      'インターカジノ（InterCasino）は1996年設立の老舗カジノ。ベラジョン系列で信頼性が高く、アニメ調にリニューアル。CasinoTsu限定の入金不要フリースピン150回と出金条件なしの$500ウェルカムキャッシュバックが魅力。初心者にもおすすめです。',
  },
};
