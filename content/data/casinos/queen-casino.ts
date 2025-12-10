import type { CasinoData } from './types';

export const queen_casino: CasinoData = {
  slug: 'queen-casino',
  name: 'Queen Casino',
  nameJa: 'クイーンカジノ',
  logo: '/assets/casino/queen-casino.png',
  rating: 4.5,

  license: {
    name: 'Curacao eGaming',
    jurisdiction: 'キュラソー',
  },

  operator: 'ZEN ESTRATEGA BV Limited',
  established: 2016,

  affiliate: {
    url: 'https://casinotsu.com/go/queen-casino',
  },

  features: {
    bonusHeadline: '最大$1,800入金ボーナス + 最大$88入金不要ボーナス＆フリースピン88回',
    highlights: [
      '伝説の4号機・5号機を含むオンラインパチンコ・パチスロがプレイ可能',
      '初回〜3回目入金で合計最大$1,800の豪華ウェルカムボーナス',
      '24時間365日、日本人サポート担当者がライブチャットで常駐',
      '銀行振込、仮想通貨、電子ウォレットなど豊富な決済方法に対応',
      'ロイヤルティクラブ（VIPプログラム）が充実しており、キャッシュバックも提供'
    ],
    watchouts: [
      'ボーナス勝利金からキャッシュへの移行上限が5倍に設定されている',
      'リニューアル後も出金速度に関する悪い口コミが少数見受けられる'
    ],
  },

  payments: ['bank-transfer', 'visa', 'mastercard', 'amex', 'payz', 'sticpay', 'vega-wallet', 'bitcoin', 'ethereum', 'usdt', 'litecoin', 'dogecoin'],

  facts: [
    { label: '運営会社', value: 'ZEN ESTRATEGA BV Limited' },
    { label: '設立年', value: '2016年 (2023年リニューアル)' },
    { label: 'ライセンス', value: 'キュラソー' },
    { label: '入金不要ボーナス', value: '最大88USDT + FS 88回' },
    { label: '初回入金ボーナス', value: '最大1,800USDT (3回合計)' },
    { label: 'サポート体制', value: '24時間365日 日本語ライブチャット' },
    { label: 'KYC要件', value: '初回出金時に必須 (仮想通貨/Vega Wallet利用時は不要な場合あり)' },
    { label: 'ゲーム数', value: 'スロット3,000種類以上' }
  ],

  meta: {
    title: 'クイーンカジノ（Queen Casino）レビュー【2024年最新版】パチンコ・パチスロも遊べる！',
    description:
      'クイーンカジノは、パチンコ・パチスロが遊べることで有名なオンラインカジノです。最大$1,800のウェルカムボーナスに加え、24時間日本語サポート完備。信頼性の高いライセンスと迅速な入出金が魅力です。',
  },
};
