import type { PaymentMethodData } from './types';

export const paypay: PaymentMethodData = {
  slug: 'paypay',
  name: 'PayPay Bank',
  nameJa: 'PayPay銀行',
  logo: '/assets/payment/paypay.png',
  type: 'bank',

  processingTime: {
    deposit: 'ほぼ即時',
    withdrawal: '数時間〜1営業日程度',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料',
    withdrawal: 'カジノによる (0%〜10%超)',
    note: '国内振込手数料は基本無料。カジノ側の出金手数料は要確認。外貨取引には為替手数料が発生。',
  },

  features: {
    highlights: [
      '安全性が高く、日本の金融規制に適合している',
      '入金はほぼ即時反映され、24時間365日利用可能',
      '日本円決済時の手数料が低く、為替コストが透明',
      'ワンタイムパスワードなど高度なセキュリティ対策を搭載',
      'スマホアプリで手続きが完結し利便性が高い'
    ],
    watchouts: [
      'カジノ側の出金手数料がサイトによって大きく異なる場合がある',
      '日本円口座のみ対応のため、外貨取引には外部での換金が必要',
      '出金には必ず本人確認（KYC）の完了が求められる'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'PayPay銀行（旧ジャパンネット銀行）対応オンラインカジノ徹底ガイド【2025年最新版】',
    description: 'PayPay銀行（旧ジャパンネット銀行）を使ったオンラインカジノの入出金方法を徹底解説。2025年最新情報として、即時入金、低手数料、国内トップクラスのセキュリティ体制、KYCの必要性まで網羅。安全で迅速なPayPay銀行の利用方法と対応カジノを紹介します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
