import type { CasinoData } from './types';

export const konibet: CasinoData = {
  slug: 'konibet',
  name: 'Konibet',
  nameJa: 'コニベット',
  logo: '/assets/casino/konibet.png',
  rating: 4.4,

  license: {
    name: 'Anjouan Gaming License / Curacao eGaming',
    jurisdiction: 'アンジュアン / キュラソー',
  },

  operator: 'Dash N.V.',
  established: 2019,

  affiliate: {
    url: 'https://casinotsu.com/go/konibet',
  },

  features: {
    bonusHeadline: '最大65%リベンジボーナス（賭け条件0倍）＆入金不要ボーナス$20',
    highlights: [
      'オンラインパチンコ・パチスロ（コニパチ）が遊べる',
      '24時間年中無休の日本人による日本語サポート（LINE対応あり）',
      '初回入金リベンジボーナスは賭け条件0倍（最大65%）',
      '国内送金（銀行振込）が利用可能',
      '月単位の出金上限なし'
    ],
    watchouts: [
      'ボーナスの申請がチャット経由である',
      '初回出金時にKYC認証に時間がかかる場合がある（最大72時間）',
      '一部のプレイヤーから、非表示の賭け条件や出金拒否の報告あり'
    ],
  },

  payments: ['bank-transfer', 'bitcoin', 'ethereum', 'litecoin', 'payz', 'ripple', 'sticpay', 'usdt', 'tiger-pay', 'vega-wallet'],

  facts: [
    { label: '運営会社', value: 'Dash N.V.' },
    { label: '設立年', value: '2019年' },
    { label: 'ライセンス', value: 'アンジュアン / キュラソー' },
    { label: '日本語サポート', value: '24時間年中無休 (ライブチャット/LINE)' },
    { label: 'パチンコ/パチスロ', value: 'プレイ可能 (コニパチ)' },
    { label: 'VIPプログラム', value: 'あり (6段階)' },
    { label: '出金上限', value: '月単位の上限なし' }
  ],

  meta: {
    title: 'コニベット Konibet 最新レビュー｜パチンコ・パチスロが遊べる♪【2025年版】',
    description:
      'コニベット（Konibet）は2019年設立。24時間日本語サポートと賭け条件0倍のリベンジボーナスが魅力。2024年にパチンコ・パチスロ「コニパチ」を導入し、国内送金にも対応。ハイローラーにもおすすめのオンラインカジノです。',
  },
};
