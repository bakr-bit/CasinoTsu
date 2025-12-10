import type { CasinoData } from './types';

export const caibo: CasinoData = {
  slug: 'caibo',
  name: 'Caibo Casino',
  nameJa: 'Caibo Casino',
  logo: '/assets/casino/caibo.png',
  rating: 3.8,

  license: {
    name: 'Gaming Curacao',
    jurisdiction: 'キュラソー',
  },

  operator: 'MIBS N.V.',
  established: 2023,

  affiliate: {
    url: 'https://casinotsu.com/go/caibo',
  },

  features: {
    bonusHeadline: '最大22,500 USDT + 225フリースピンの豪華ウェルカムパッケージ',
    highlights: [
      '仮想通貨に特化したオンラインカジノ',
      '最大22,500 USDTの超高額ウェルカムボーナス',
      '最大20%のデイリーキャッシュバックを提供',
      '約3,500種類の豊富なスロットとスポーツベットも完備'
    ],
    watchouts: [
      '現在、カジノが閉鎖または新規受付停止の可能性が高い',
      '出金遅延や賞金没収に関するプレイヤーからの苦情が多数報告されている',
      'ウェルカムボーナスの賭け条件が45倍とやや厳しめ'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'litecoin', 'usdt', 'ripple', 'visa', 'mastercard', 'bank-transfer'],

  facts: [
    { label: '総合評価', value: '3.8/5.0' },
    { label: '設立年', value: '2023年' },
    { label: 'ライセンス', value: 'キュラソー (Gaming Curacao) / アンジュアン' },
    { label: '運営会社', value: 'MIBS N.V.' },
    { label: '対応通貨', value: '仮想通貨14種類（法定通貨は入金一部対応）' },
    { label: 'ゲーム数', value: '約3,500種類' },
    { label: 'サポート', value: '24時間365日ライブチャット（自動翻訳）' },
    { label: 'ウェルカムボーナス賭け条件', value: '45倍' }
  ],

  meta: {
    title: 'Caibo Casino（カイボカジノ）徹底レビュー | 仮想通貨特化のボーナスと安全性【2024年版】',
    description:
      'Caibo Casino（カイボカジノ）は2023年オープンの仮想通貨専門カジノ。最大22,500 USDTの豪華ボーナスが魅力ですが、出金遅延や賞金没収の報告があり、プレイには注意が必要です。ライセンス情報や入出金方法、ゲームラインナップを徹底解説します。',
  },
};
