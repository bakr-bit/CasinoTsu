import type { CasinoData } from './types';

export const bets_io: CasinoData = {
  slug: 'bets-io',
  name: 'Bets.io',
  nameJa: 'ベッツアイオー',
  logo: '/assets/casino/bets-io.png',
  rating: 3.9,

  license: {
    name: 'Anjouan Gaming License',
    jurisdiction: 'アンジュアン',
  },

  operator: 'Bets Entertainment N.V.',
  established: 2021,

  affiliate: {
    url: 'https://casinotsu.com/go/bets-io',
  },

  features: {
    bonusHeadline: '最大1BTC＋150フリースピンの200％初回入金ボーナス【CasinoTsu限定】',
    highlights: [
      '10,000種類以上の圧倒的なゲーム数！',
      'アカウント登録がスムーズ♪',
      '500種類以上の仮想通貨から入金が可能！',
      'スポーツベットまで網羅',
      '24時間対応のライブチャットサポートが迅速'
    ],
    watchouts: [
      '出金は仮想通貨のみ。',
      'まだ知名度が低いため、口コミが少なく評判が不明瞭。',
      '日本円は使用不可。'
    ],
  },

  payments: ['bitcoin', 'bitcoin-cash', 'ethereum', 'litecoin', 'mastercard', 'ripple', 'tether', 'visa'],

  facts: [
    { label: 'ローンチ', value: '2021年' },
    { label: '運営会社', value: 'Bets Entertainment N.V.' },
    { label: 'ライセンス', value: 'アンジュアン / キュラソー (情報に一部食い違いあり)' },
    { label: 'ゲーム数', value: '10,000種類以上' },
    { label: '仮想通貨対応', value: '500種類以上' },
    { label: '出金方法', value: '仮想通貨のみ' },
    { label: 'サポート', value: '24時間ライブチャット（翻訳ツール使用）' },
    { label: 'VIPプログラム', value: 'あり（合計入金額500USDTで獲得）' }
  ],

  meta: {
    title: 'Bets.io（ベッツアイオー）レビュー｜最大1BTCボーナス【2025年最新版】',
    description:
      'ベッツアイオー（Bets.io）は、最大1BTCの豪華ボーナスと10,000種類以上のゲームを提供するクリプトカジノです。仮想通貨での入出金に特化しており、迅速なサポートも魅力。',
  },
};
