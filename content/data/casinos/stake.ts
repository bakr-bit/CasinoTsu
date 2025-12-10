import type { CasinoData } from './types';

export const stake: CasinoData = {
  slug: 'stake',
  name: 'Stake',
  nameJa: 'ステークカジノ',
  logo: '/assets/casino/stake.png',
  rating: 4.2,

  license: {
    name: 'Antillephone License Validation',
    jurisdiction: 'キュラソー',
  },

  operator: 'Medium Rare N.V.',
  established: 2017,

  affiliate: {
    url: 'https://casinotsu.com/go/stake',
  },

  features: {
    bonusHeadline: 'ジャパカジ限定！最大$2,000の200%初回入金ボーナス',
    highlights: [
      '降格なしの豪華なVIP特典',
      'ハウスエッジ5%レーキバック',
      '約20種類以上の仮想通貨利用可能',
      '豊富なスポーツベット（35種類以上）、eスポーツ、競馬もカバー',
      'VIPボーナスは賭け条件なしで即現金化可能'
    ],
    watchouts: [
      'サイトの一部が英語で不便',
      '決済が少し複雑（仮想通貨以外は購入サービス利用）',
      '過去にセキュリティインシデントあり（2023年）'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'litecoin', 'tether', 'ripple', 'solana', 'polygon', 'bitcoin-cash', 'shiba-inu'],

  facts: [
    { label: '名称', value: 'Stake' },
    { label: 'ローンチ', value: '2017年' },
    { label: '運営会社', value: 'Medium Rare N.V.' },
    { label: 'ゲーム数', value: '3,000種類以上' },
    { label: 'VIPプログラム', value: '15段階（降格なし）' },
    { label: '日本語サポート', value: '24時間ライブチャット/メール' },
    { label: '入出金手数料', value: 'ユーザー側のネットワーク手数料のみ' }
  ],

  meta: {
    title: 'ステークカジノ（Stake）レビュー【2025年最新版】',
    description:
      'ステークカジノ（Stake）は、仮想通貨に特化したハイブリッド型カジノ。降格なしの豪華VIP特典や5%レーキバックが魅力。ジャパカジ限定の最大$2,000ボーナス情報や入出金方法、安全性、評判を徹底解説します。',
  },
};
