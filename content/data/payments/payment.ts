import type { PaymentMethodData } from './types';

export const payment: PaymentMethodData = {
  slug: 'payment',
  name: 'Credit Card (VISA, Master, JCB)',
  nameJa: 'クレジットカード (JCB、VISA、Master)',
  logo: '/assets/payment/payment.png',
  type: 'card',

  processingTime: {
    deposit: '数分〜即時',
    withdrawal: '銀行送金経由で数営業日〜1週間',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '1～3%程度',
    withdrawal: 'カジノによる',
    note: '手数料はカジノごとに異なります。出金は銀行送金が一般的で遅め。',
  },

  features: {
    highlights: [
      '手軽で即時入金可能',
      '安全性も高い',
      'JCBが増加中'
    ],
    watchouts: [
      '入金のみで出金不可な場合多し',
      '出金は銀行送金経由で遅い',
      '1～3%程度の手数料がかかる場合がある'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'クレジットカード（VISA/JCB）でオンラインカジノに入金する方法【2025年最新版】',
    description: 'オンラインカジノでクレジットカード（VISA, Master, JCB）を利用する際の入金処理時間、手数料、出金方法を徹底解説。手軽さのメリットと出金時の注意点をまとめました。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
