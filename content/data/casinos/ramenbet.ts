import type { CasinoData } from './types';

export const ramenbet: CasinoData = {
  slug: 'ramenbet',
  name: 'Ramenbet',
  nameJa: 'ラーメンベット',
  logo: '/assets/casino/ramenbet.png',
  rating: 3.8,

  license: {
    name: 'Antillephone License',
    jurisdiction: 'キュラソー',
  },

  operator: 'Pomadorro N.V.',
  established: 2023,

  affiliate: {
    url: 'https://casinotsu.com/go/ramenbet',
  },

  features: {
    bonusHeadline: '最大30万円ウェルカムボーナス＋CasinoTsu限定 賭け条件5倍の入金不要ボーナス',
    highlights: [
      'ボンズカジノやカジノエックスと同じ運営会社で信頼性が高い',
      'CasinoTsu限定！賭け条件わずか5倍の入金不要ボーナスが利用可能',
      'スロット5,000種類以上、ゲームプロバイダー60社以上とゲームが豊富',
      '銀行送金、仮想通貨、PayPayなど日本のプレイヤー向け決済方法が充実',
      'ボラティリティなどで絞り込める優秀なゲーム検索フィルター機能'
    ],
    watchouts: [
      'ライブチャットやメールで日本語サポートに対応していない',
      '1日3回目以降の出金には10%の手数料が発生する'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'tether', 'bank-transfer', 'visa', 'mastercard', 'jcb', 'vega-wallet', 'paypay', 'ecopayz'],

  facts: [
    { label: '名称', value: 'Ramenbet' },
    { label: 'ローンチ', value: '2023年12月' },
    { label: 'ライセンス', value: 'Antillephone License (キュラソー)' },
    { label: '運営会社', value: 'Pomadorro N.V.' },
    { label: 'ゲーム数', value: '5,000種類以上' },
    { label: 'VIPプログラム', value: 'あり' },
    { label: '日本語サポート', value: '非対応（英語/ロシア語のみ）' },
    { label: '出金限度額', value: '月間最大$100,000' }
  ],

  meta: {
    title: 'ラーメンベット（Ramenbet）レビュー【2024年最新版】| 賭け条件5倍ボーナス',
    description:
      'ラーメンベット（Ramenbet）は、ボンズカジノの姉妹カジノとして2023年に登場。最大30万円のウェルカムボーナスに加え、CasinoTsu限定の賭け条件5倍入金不要ボーナスが魅力。5,000種類以上のゲームと豊富な決済方法を徹底解説します。',
  },
};
