import type { PaymentMethodData } from './types';

export const mastercard: PaymentMethodData = {
  slug: 'mastercard',
  name: 'Mastercard',
  nameJa: 'マスターカード',
  logo: '/assets/payment/mastercard.png',
  type: 'card',

  processingTime: {
    deposit: '即時〜数分以内',
    withdrawal: '不可（代替手段が必要）',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料〜3%程度（カジノによる）',
    withdrawal: '直接出金不可',
    note: '為替手数料（1.6%〜3.0%）が別途発生する可能性あり。',
  },

  features: {
    highlights: [
      'ほとんどのオンラインカジノで利用可能',
      '入金が即時反映され、すぐにプレイできる',
      '3Dセキュアなど強固なセキュリティ対策が充実',
      '不正利用に対するゼロリスクポリシーで安心'
    ],
    watchouts: [
      '直接出金ができないため、銀行送金や電子ウォレットなどの代替手段が必須',
      '日本円非対応カジノでは、為替手数料（1.6%〜3.0%）が発生する',
      'カジノによっては入金時に手数料（2%〜3%）がかかる場合がある'
    ],
    jpySupported: false,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'オンラインカジノでマスターカードを使う方法【2024年最新版】入金・出金・手数料を解説',
    description: 'マスターカード（Mastercard）を使ってオンラインカジノに入金する方法、安全性、手数料、そして出金時の代替手段を徹底解説。即時入金が可能で、強固なセキュリティ対策が魅力です。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
