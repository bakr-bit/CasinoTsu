import type { CasinoData } from './types';

export const respin: CasinoData = {
  slug: 'respin',
  name: 'ReSpin',
  nameJa: 'ReSpin（リスピン）カジノ',
  logo: '/assets/casino/respin.png',
  rating: 3.7,

  license: {
    name: 'Curaçao Gaming Authority',
    jurisdiction: 'キュラソー',
  },

  operator: 'Comeback N.V.',
  established: 2023,

  affiliate: {
    url: 'https://casinotsu.com/go/respin',
  },

  features: {
    bonusHeadline: '最大300USDTボーナス＋フリースピン200回＋賭け条件なしホイール特典',
    highlights: [
      '多数用意されているプロモーション',
      '5,000種類以上の豊富なゲームラインアップ',
      '特典が充実しているロイヤルティプログラム',
      '高い安全性指数 (8.2/10)'
    ],
    watchouts: [
      '出金は仮想通貨のみ可能 (一部制限あり)',
      '入金不要ボーナスなし',
      'ローンチ年に関する情報にばらつきがある'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'litecoin', 'ripple', 'solana', 'usdt', 'bitcoin-cash', 'dogecoin', 'usd-coin', 'binance-coin', 'cardano', 'tron', 'skrill', 'mifinity', 'zimpler', 'visa', 'mastercard', 'paysafecard', 'bank-transfer'],

  facts: [
    { label: '名称', value: 'ReSpin' },
    { label: '設立年', value: '2023年または2024年' },
    { label: 'ライセンス', value: 'キュラソー, エストニア, アンジュアン' },
    { label: '運営会社', value: 'Comeback N.V.' },
    { label: 'ゲーム数', value: '5,000種類以上' },
    { label: 'VIPプログラム', value: 'あり' },
    { label: 'サポート', value: 'ライブチャット (24時間日本語対応)' },
    { label: 'KYC (本人確認)', value: '出金時に必要 (72時間以内に完了)' }
  ],

  meta: {
    title: 'ReSpin（リスピン）カジノのボーナスや評判を全解説！【2025年最新版】',
    description:
      'ReSpin（リスピン）カジノは、10種類以上の仮想通貨が利用可能なクリプトカジノ。最大300USDTボーナスと賭け条件5倍のフリースピン200回を含む豪華なウェルカムオファー、5,000種類以上のゲーム、充実したロイヤルティプログラムを徹底解説します。',
  },
};
