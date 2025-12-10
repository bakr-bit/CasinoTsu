import type { CasinoData } from './types';

export const gamdom: CasinoData = {
  slug: 'gamdom',
  name: 'Gamdom',
  nameJa: 'ガンダムカジノ',
  logo: '/assets/casino/gamdom.png',
  rating: 4.1,

  license: {
    name: 'GAMING CURACAO, Anjouan Gaming License',
    jurisdiction: 'キュラソー, コモロ連合',
  },

  operator: 'Smein Hosting N.V.',
  established: 2021,

  affiliate: {
    url: 'https://casinotsu.com/go/gamdom',
  },

  features: {
    bonusHeadline: 'CasinoTsu限定 登録後7日間15%レーキバック',
    highlights: [
      '遊べば遊ぶほどお得になる賭け条件なしのレーキバックシステム',
      'スロット7,000種以上、ライブカジノ800種以上の豊富なゲーム数',
      'Gamdom限定のオリジナルゲームやスポーツベットも楽しめる',
      'Casino.Guru安全性指数9.8/10を誇る高い信頼性',
      '仮想通貨に特化しており、出金制限なしで即時出金が可能'
    ],
    watchouts: [
      '日本語対応のサポートがない',
      '初回入金ボーナスやウェルカムボーナスの提供がない',
      '日本円での決済方法の選択肢が限られている（仮想通貨中心）'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'litecoin', 'usdt', 'bank-transfer', 'payz', 'skrill'],

  facts: [
    { label: '名称', value: 'Gamdom' },
    { label: '設立年', value: '2021年' },
    { label: '運営会社', value: 'Smein Hosting N.V.' },
    { label: 'ライセンス', value: 'キュラソー, コモロ連合 (Anjouan Gaming)' },
    { label: 'ゲーム総数', value: '7,000種類以上 (スロット)' },
    { label: '日本語サポート', value: '現在なし (英語チャット24時間対応)' },
    { label: 'KYC（本人確認）', value: '原則不要 (出金時に必要となる場合あり)' },
    { label: 'ボーナス特徴', value: '賭け条件なしのレーキバック' }
  ],

  meta: {
    title: 'Gamdom（ガンダムカジノ）レビュー｜賭け条件なしレーキバックが魅力【2024年最新版】',
    description:
      'Gamdom（ガンダムカジノ）は、賭け条件なしのレーキバックが特徴の仮想通貨カジノです。スロット7,000種以上、スポーツベット、オリジナルゲームを提供。キュラソーライセンスと高い安全性指数で安心してプレイできます。日本語サポートは現在準備中です。',
  },
};
