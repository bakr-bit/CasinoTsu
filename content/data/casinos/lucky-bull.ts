import type { CasinoData } from './types';

export const lucky_bull: CasinoData = {
  slug: 'lucky-bull',
  name: 'Lucky Bull',
  nameJa: 'ラッキーブル（Lucky Bull）',
  logo: '/assets/casino/lucky-bull.png',
  rating: 3.9,

  license: {
    name: 'Malta Gaming Authority',
    jurisdiction: 'マルタ',
  },

  operator: 'Condor Malta Ltd',
  established: 2021,

  affiliate: {
    url: 'https://casinotsu.com/go/lucky-bull',
  },

  features: {
    bonusHeadline: '最大$888初回入金ボーナス + $29入金不要ボーナス',
    highlights: [
      'クエスト式プログラム「ベットルバース」',
      '豊富なキャンペーン',
      'ブックメーカーも提供',
      '出金条件買い取りオプションあり'
    ],
    watchouts: [
      'やや厳しめの賭け条件 (入金ボーナス30倍/入金不要ボーナス60倍)',
      '欧米市場向けのコンテンツやボーナスに偏りがある',
      '一部プレイヤーから出金やサポート対応に関する懸念が報告されている'
    ],
  },

  payments: ['payz', 'venus-point', 'bank-transfer', 'visa', 'mastercard', 'bitcoin-cash', 'ethereum'],

  facts: [
    { label: '名称', value: 'Lucky Bull' },
    { label: 'ローンチ', value: '2021年' },
    { label: 'ライセンス', value: 'Malta Gaming Authority (MGA)' },
    { label: '運営会社', value: 'Condor Malta Ltd' },
    { label: '日本語サポート', value: 'ライブチャット (毎日16時〜深夜00時)' },
    { label: 'ゲーム種類', value: 'スロット、ライブカジノ、ブックメーカー' },
    { label: 'VIPプログラム', value: '現在なし' },
    { label: '入金不要ボーナス', value: '$29 (賭け条件60倍)' }
  ],

  meta: {
    title: 'Lucky Bull（ラッキーブル）カジノレビュー｜入金不要ボーナスと評判【2024年最新版】',
    description:
      'ラッキーブルカジノの入金不要ボーナス($29)や初回入金ボーナス($888)の詳細、評判、出金方法を徹底解説。クエスト型プログラム「ベットルバース」やブックメーカーも楽しめるポップなカジノです。',
  },
};
