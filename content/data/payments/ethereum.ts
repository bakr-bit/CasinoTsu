import type { PaymentMethodData } from './types';

export const ethereum: PaymentMethodData = {
  slug: 'ethereum',
  name: 'Ethereum',
  nameJa: 'イーサリアム（ETH）',
  logo: '/assets/payment/ethereum.png',
  type: 'crypto',

  processingTime: {
    deposit: '数分〜30分程度',
    withdrawal: '数分〜1時間以内',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: 'ほぼ無料',
    withdrawal: 'カジノやマイニングフィーによる',
    note: '通貨変換コスト（為替変動）やマイニングフィーが発生する場合がある',
  },

  features: {
    highlights: [
      '処理速度が速い（通常数分で反映）',
      '世界共通で国境を越えて利用可能',
      'ブロックチェーン技術による高い安全性と透明性',
      '銀行を介さないためプライバシー重視'
    ],
    watchouts: [
      '為替レートの変動リスクがある',
      '送金ミスが発生した場合、資金の取り戻しが非常に困難',
      '利益は雑所得として課税対象となる'
    ],
    jpySupported: false,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'イーサリアム（ETH）入出金ガイド｜オンラインカジノでの使い方と手数料【2024年最新版】',
    description: 'イーサリアム(ETH)をオンラインカジノで使うメリット、入出金手順、手数料、安全性、税金まで徹底解説。高速かつ安全な仮想通貨決済を始めましょう。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
