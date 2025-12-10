import type { CasinoData } from './types';

export const wazamba: CasinoData = {
  slug: 'wazamba',
  name: 'Wazamba',
  nameJa: 'ワザンバ',
  logo: '/assets/casino/wazamba.png',
  rating: 4,

  license: {
    name: 'Antillephone N.V., Anjouan Gaming Board, PAGCOR',
    jurisdiction: 'キュラソー',
  },

  operator: 'Rabidi N.V.',
  established: 2019,

  affiliate: {
    url: 'https://casinotsu.com/go/wazamba',
  },

  features: {
    bonusHeadline: '最大$1,200ウェルカムボーナス + 15フリースピン',
    highlights: [
      'ユニークなRPG風テーマとキャラクターデザイン',
      '5,000種類以上の豊富なゲーム数',
      'カジノゲームとスポーツベットの両方を提供',
      '充実したボーナスとゲーミフィケーション要素',
      '信頼性の高い複数のライセンス（キュラソー、アンジュアン、PAGCOR）'
    ],
    watchouts: [
      '一部ボーナスの賭け条件が非常に高い（最大80倍）',
      'モバイル専用アプリなし',
      '入金制限などの責任あるギャンブルツールが不足'
    ],
  },

  payments: ['american-express', 'astropay', 'bank-transfer', 'bitcoin', 'bitcoin-cash', 'ethereum', 'litecoin', 'mastercard', 'muchbetter', 'payz', 'ripple', 'sticpay', 'tether', 'vega-wallet', 'visa'],

  facts: [
    { label: '運営会社', value: 'Rabidi N.V.' },
    { label: '設立年', value: '2019年' },
    { label: 'ライセンス', value: 'Antillephone N.V., Anjouan Gaming Board, PAGCOR' },
    { label: 'ゲーム数', value: '5,000～10,000種類以上' },
    { label: '最小入金額', value: '$10' },
    { label: '最小出金額', value: '$10' },
    { label: '出金手数料', value: '無料' },
    { label: '日本語サポート', value: 'ライブチャット24時間対応' }
  ],

  meta: {
    title: 'Wazamba（ワザンバ）カジノレビュー【2025年最新版】最大$1,200ボーナスを徹底解説',
    description:
      'RPG要素満載のワザンバ（Wazamba）カジノを徹底レビュー。最大$1,200のウェルカムボーナス、5,000種類以上の豊富なゲーム、複数のライセンスによる高い信頼性を解説します。',
  },
};
