import type { CasinoData } from './types';

export const casumo: CasinoData = {
  slug: 'casumo',
  name: 'Casumo',
  nameJa: 'カスモ',
  logo: '/assets/casino/casumo.png',
  rating: 4.2,

  license: {
    name: 'Malta Gaming Authority (MGA)',
    jurisdiction: 'マルタ',
  },

  operator: 'Casumo Services Limited',
  established: 2012,

  affiliate: {
    url: 'https://casinotsu.com/go/casumo',
  },

  features: {
    bonusHeadline: '初回から2回目入金まで合計最大$600ウェルカムボーナス',
    highlights: [
      '短時間集中型「弾丸トーナメント」を毎日開催',
      'Casumo専用ライブカジノテーブルを用意',
      '4,500種類以上の豊富なゲームとRPG要素のあるアドベンチャー機能',
      '多数のライセンスを保持しており、高い信頼性がある',
      'プレイヤーの皆様に向けたスロット情報が豊富'
    ],
    watchouts: [
      'サポートからの返信が遅れる場合がある',
      'VIPプログラムは招待制'
    ],
  },

  payments: ['visa', 'mastercard', 'jcb', 'payz', 'vega-wallet', 'iwallet', 'muchbetter', 'bank-transfer'],

  facts: [
    { label: 'ローンチ', value: '2012年' },
    { label: 'ライセンス', value: 'Malta Gaming Authority (MGA) 他多数' },
    { label: '運営会社', value: 'Casumo Services Limited' },
    { label: 'ゲーム数', value: '4,500種類以上' },
    { label: 'サイト全体ペイアウト率', value: '97%' },
    { label: '最小入金額', value: '$10' },
    { label: '最小出金額', value: '$20' },
    { label: '日本語サポート', value: 'ライブチャット (14:00〜23:00)' }
  ],

  meta: {
    title: 'Casumo（カスモ）カジノ徹底レビュー【2024年最新版】',
    description:
      'Casumo（カスモ）は、毎日開催される弾丸トーナメントとRPG要素のあるアドベンチャー機能が魅力。MGAライセンスを持ち、4,500種類以上のゲームを提供。最大$600のウェルカムボーナスをゲットしよう！',
  },
};
