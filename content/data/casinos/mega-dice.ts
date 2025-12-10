import type { CasinoData } from './types';

export const mega_dice: CasinoData = {
  slug: 'mega-dice',
  name: 'Mega Dice',
  nameJa: 'メガダイス',
  logo: '/assets/casino/mega-dice.png',
  rating: 3.7,

  license: {
    name: 'GAMING CURACAO',
    jurisdiction: 'キュラソー',
  },

  operator: '非公開',
  established: 2023,

  affiliate: {
    url: 'https://casinotsu.com/go/mega-dice',
  },

  features: {
    bonusHeadline: '最大1BTC (200%) 初回入金ボーナス + 50回FS + $5スポーツベット',
    highlights: [
      '最大1BTCの豪華ウェルカムボーナス',
      '5,000種類以上の豊富なゲームラインナップとスポーツベット',
      '13種類以上の仮想通貨に対応し、KYC原則不要',
      '24時間対応のライブチャットサポート'
    ],
    watchouts: [
      '出金は仮想通貨のみ（仮想通貨ウォレット必須）',
      '責任あるギャンブル機能が限定的',
      '一部サイトの日本語翻訳に不備が見られる'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'usdt', 'litecoin', 'dogecoin', 'ripple', 'visa', 'mastercard', 'bank-transfer'],

  facts: [
    { label: '名称', value: 'Mega Dice (メガダイス)' },
    { label: '設立年', value: '2023年' },
    { label: 'ライセンス', value: 'GAMING CURACAO / Anjouan Gaming Board' },
    { label: '運営会社', value: '非公開' },
    { label: 'KYC（本人確認）', value: '原則不要' },
    { label: 'ゲーム総数', value: '5,000種類以上' },
    { label: 'サポート体制', value: '24時間ライブチャット' },
    { label: '出金方法', value: '仮想通貨13種類以上のみ' }
  ],

  meta: {
    title: 'Mega Dice（メガダイス）レビュー【2024年最新版】',
    description:
      'メガダイス（Mega Dice）は2023年設立の仮想通貨特化型オンラインカジノ。最大1BTCの豪華ウェルカムボーナスに加え、5,000種類以上のゲームとスポーツベットが楽しめます。KYC原則不要で匿名性が高く、24時間ライブチャットサポートも完備。仮想通貨プレイヤーにおすすめです。',
  },
};
