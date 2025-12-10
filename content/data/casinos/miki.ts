import type { CasinoData } from './types';

export const miki: CasinoData = {
  slug: 'miki',
  name: 'Miki Casino',
  nameJa: 'Mikiカジノ（ミキカジノ）',
  logo: '/assets/casino/miki.png',
  rating: 4.2,

  license: {
    name: '不明 (公式サイトで確認)',
    jurisdiction: '不明',
  },

  operator: '不明',
  established: 2025,

  affiliate: {
    url: 'https://casinotsu.com/go/miki',
  },

  features: {
    bonusHeadline: '最大$4,000入金ボーナス + 200回フリースピン',
    highlights: [
      '最大$4,000の豪華ウェルカムボーナス（3種類同時獲得）',
      'スロット、ライブカジノ、クラッシュゲームなど豊富なゲームラインナップ',
      '仮想通貨、電子ウォレットを含む多様な入出金方法に対応',
      '迅速な出金対応が期待できる',
      '高度なセキュリティと責任あるギャンブルへの取り組み'
    ],
    watchouts: [
      '一部ボーナスの賭け条件が厳しいと感じるユーザーがいる',
      'サイトデザインがやや複雑に感じる場合がある'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'usdt', 'payz', 'muchbetter', 'bank-transfer', 'credit-card'],

  facts: [
    { label: '名称', value: 'Mikiカジノ' },
    { label: 'ローンチ年', value: '2025年' },
    { label: 'ライセンス', value: '公式サイトで確認' },
    { label: '運営会社', value: '不明' },
    { label: 'ウェルカムボーナス', value: '最大$4,000 + FS 200回' },
    { label: '入金方法', value: '仮想通貨、電子ウォレット、銀行送金、クレカ' },
    { label: '出金時間', value: '比較的短い（迅速な対応）' },
    { label: 'サポート体制', value: '対応が良いとの評判あり' }
  ],

  meta: {
    title: 'Miki Casino（ミキカジノ）レビュー【2025年最新版】',
    description:
      'Mikiカジノは、最大$4,000の豪華ウェルカムボーナスと200回フリースピンが魅力のオンラインカジノです。豊富なゲームラインナップと多様な決済方法に対応しており、高い安全性と信頼性で初心者から経験者まで幅広くおすすめできます。',
  },
};
