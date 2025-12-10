import type { CasinoData } from './types';

export const katsuwin: CasinoData = {
  slug: 'katsuwin',
  name: 'Katsuwin',
  nameJa: '勝WIN（KatsuWIN）',
  logo: '/assets/casino/katsuwin.png',
  rating: 4.3,

  license: {
    name: 'Anjouan Gaming License',
    jurisdiction: 'アンジュアン',
  },

  operator: 'Initial Singularity Limited',
  established: 2023,

  affiliate: {
    url: 'https://casinotsu.com/go/katsuwin',
  },

  features: {
    bonusHeadline: '最大¥155,000ウェルカムボーナスと賭け条件8倍の¥5,000入金不要ボーナス',
    highlights: [
      '賭け条件の優しい入金不要ボーナス！',
      '業界トップバラエティのパチンコ・パチスロが遊べる★',
      '24時間日本語対応のカスタマーサポート♪',
      '出金速度は業界トップクラス！'
    ],
    watchouts: [
      '決済方法が少ない',
      '知名度が低く、口コミが少ない',
      'サイトの表示速度が遅くなることがある'
    ],
  },

  payments: ['bank-transfer', 'vega-wallet', 'bitcoin', 'ethereum', 'usdt', 'litecoin', 'mastercard', 'visa', 'tiger-pay', 'matchpay'],

  facts: [
    { label: '名称', value: 'Katsuwin' },
    { label: 'ローンチ', value: '2023年' },
    { label: 'ライセンス', value: 'アンジュアンゲーミングライセンス' },
    { label: '運営会社', value: 'Initial Singularity Limited' },
    { label: 'ゲーム数', value: '6,000種類以上' },
    { label: 'パチンコ/パチスロ', value: '業界トップクラスの台数' },
    { label: '日本語サポート', value: '24時間ライブチャット対応' },
    { label: '出金速度', value: '業界トップクラス（最短即時）' }
  ],

  meta: {
    title: '勝WIN（KatsuWIN）カジノレビュー【2024年最新版】 | 業界トップクラスのパチスロ台数',
    description:
      '勝WIN（KatsuWIN）は2023年オープンの新星カジノ。賭け条件8倍の¥5,000入金不要ボーナスと最大¥155,000のウェルカムボーナスが魅力。24時間日本語サポート、業界トップクラスのパチスロ・パチンコ台数、高速出金が特徴です。',
  },
};
