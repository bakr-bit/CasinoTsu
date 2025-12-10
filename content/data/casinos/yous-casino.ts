import type { CasinoData } from './types';

export const yous_casino: CasinoData = {
  slug: 'yous-casino',
  name: 'YOUS CASINO',
  nameJa: 'ユースカジノ',
  logo: '/assets/casino/yous-casino.png',
  rating: 4.4,

  license: {
    name: 'Curacao eGaming',
    jurisdiction: 'キュラソー',
  },

  operator: 'Sector Media N.V.',
  established: 2020,

  affiliate: {
    url: 'https://casinotsu.com/go/yous-casino',
  },

  features: {
    bonusHeadline: '初回入金100%ボーナス最大$500 & 賭け条件1倍の入金不要ボーナス$20',
    highlights: [
      '入金不要ボーナスが驚異の賭け条件1倍',
      '出金スピードが業界トップクラスの平均5分',
      '最大1.5%のリベートボーナスが全ゲーム対象',
      'スロットゲームが約3,000種類と豊富',
      '24時間体制の日本語カスタマーサポート'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'bank-transfer', 'payz', 'vega-wallet', 'sticpay'],

  facts: [
    { label: '名称', value: 'ユースカジノ (YOUS CASINO)' },
    { label: '設立年', value: '2020年' },
    { label: 'ライセンス', value: 'キュラソー (Curacao eGaming)' },
    { label: '運営会社', value: 'Sector Media N.V.' },
    { label: '出金速度', value: '平均5分' },
    { label: 'プレイ通貨', value: '米ドル ($)' },
    { label: 'リベート率（最大）', value: '1.5%' },
    { label: 'サポート体制', value: '24時間日本語ライブチャット' }
  ],

  meta: {
    title: 'ユースカジノ（YOUS CASINO）の評判とボーナス徹底解説【2024年最新版】',
    description:
      'ユースカジノ（YOUS CASINO）の評判とボーナスを徹底解説。賭け条件1倍の入金不要ボーナスや最大1.5%のリベートボーナスが魅力。平均5分の爆速出金と充実したVIPプログラムで、初心者からハイローラーまで楽しめるカジノです。',
  },
};
