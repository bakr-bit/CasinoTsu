import type { CasinoData } from './types';

export const betswap: CasinoData = {
  slug: 'betswap',
  name: 'Betswap',
  nameJa: 'ベットスワップ',
  logo: '/assets/casino/betswap.png',
  rating: 3.4,

  license: {
    name: 'Gaming Curaçao',
    jurisdiction: 'キュラソー',
  },

  operator: 'BSGG Labs NV',
  established: 2023,

  affiliate: {
    url: 'https://casinotsu.com/go/betswap',
  },

  features: {
    bonusHeadline: '最大360%＋220,000USDT 豪華ウェルカムボーナス',
    highlights: [
      '個人間ベットが可能な次世代型スポーツベットを提供',
      '仮想通貨で受け取れる豪華なウェルカムボーナス',
      '4,000種類以上の豊富なゲームと多数のプロバイダー',
      '独自の仮想通貨「BSGGトークン」を保有'
    ],
    watchouts: [
      '出金トラブルの報告が多数ある（遅延、アカウント凍結など）',
      '利用可能な決済方法が仮想通貨に限定的',
      '自己制限機能が正常に機能しない報告がある'
    ],
  },

  payments: ['usdt', 'ethereum', 'bitcoin', 'litecoin', 'visa', 'mastercard', 'tron', 'usdc'],

  facts: [
    { label: '名称', value: 'Betswap' },
    { label: 'ローンチ', value: '2023年' },
    { label: 'ライセンス', value: 'Gaming Curaçao (キュラソー)' },
    { label: '運営会社', value: 'BSGG Labs NV' },
    { label: 'ゲーム数', value: '4,000種類以上' },
    { label: '対応通貨', value: '仮想通貨（USDT, BTC, ETHなど）' },
    { label: 'サポート', value: '24時間365日ライブチャット（翻訳対応）' },
    { label: '特徴', value: '個人間ベット可能な分散型スポーツベット' }
  ],

  meta: {
    title: 'Betswap（ベットスワップ）レビュー【2024年最新版】｜次世代型スポーツベットと仮想通貨カジノ',
    description:
      'ベットスワップ（Betswap）は、2023年設立の革新的な仮想通貨カジノ。個人間ベットが可能な分散型スポーツベットと4,000種類以上のカジノゲームを提供。最大220,000USDTの豪華ボーナスやBSGGトークンが魅力。',
  },
};
