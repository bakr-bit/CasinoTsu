import type { CasinoData } from './types';

export const snatch_casino: CasinoData = {
  slug: 'snatch-casino',
  name: 'Snatch Casino',
  nameJa: 'スナッチカジノ',
  logo: '/assets/casino/snatch-casino.png',
  rating: 4.1,

  license: {
    name: 'Antillephone License',
    jurisdiction: 'キュラソー',
  },

  operator: 'Altacore N.V.',
  established: 2022,

  affiliate: {
    url: 'https://casinotsu.com/go/snatch-casino',
  },

  features: {
    bonusHeadline: '最大¥900,000ウェルカムボーナス + 325回フリースピン',
    highlights: [
      '最大¥900,000の超高額ウェルカムボーナスを提供',
      '7,000種類以上という圧倒的なゲームラインナップ',
      'VIPレベルに応じて最大20%のキャッシュバック',
      '24時間対応の日本語ライブチャットサポート'
    ],
    watchouts: [
      '出金遅延やKYC認証の遅延に関するユーザーからの苦情が多い',
      '銀行振込やクレジットカードでの入出金に現時点では非対応',
      '責任あるギャンブルのための自己規制ツールが限定的'
    ],
  },

  payments: ['payz', 'sticpay', 'muchbetter', 'skrill', 'neteller', 'ezeewallet', 'bitcoin', 'ethereum', 'litecoin', 'dogecoin', 'tron', 'usdc', 'mifinity', 'bank-transfer'],

  facts: [
    { label: '名称', value: 'スナッチカジノ (SNATCH CASINO)' },
    { label: '運営会社', value: 'Altacore N.V. / GOODWIN N.V.' },
    { label: '設立年', value: '2022年' },
    { label: 'ライセンス', value: 'Antillephone (キュラソー)' },
    { label: 'ゲーム数', value: '7,000種類以上' },
    { label: '日本語サポート', value: '24時間ライブチャット' },
    { label: '出金スピード', value: '24時間以内 (平均)' },
    { label: '本人確認 (KYC)', value: '出金前に必須' }
  ],

  meta: {
    title: 'Snatch Casino（スナッチカジノ）レビュー【2025年最新版】 | 最大¥90万ボーナス',
    description:
      'スナッチカジノ（SNATCH CASINO）は、7,000種類以上のゲームと最大¥900,000のウェルカムボーナスが魅力。キュラソーライセンスを持ち、24時間日本語サポートに対応。ただし、出金遅延の報告には注意が必要です。',
  },
};
