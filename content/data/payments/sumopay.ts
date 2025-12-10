import type { PaymentMethodData } from './types';

export const sumopay: PaymentMethodData = {
  slug: 'sumopay',
  name: 'SUMOPAY',
  nameJa: 'SUMOPAY（相撲ペイ）',
  logo: '/assets/payment/sumopay.png',
  type: 'bank',

  processingTime: {
    deposit: '数時間〜24時間以内',
    withdrawal: '数時間〜24時間以内',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料（同行間振込）',
    withdrawal: '銀行所定の手数料が発生する場合あり',
    note: '他行宛の振込には銀行所定の手数料が発生します。',
  },

  features: {
    highlights: [
      '国内銀行送金で入出金が完結する',
      '日本円に特化しており為替手数料がかからない',
      'クレジットカード情報などの登録が不要',
      '同行間振込なら手数料無料'
    ],
    watchouts: [
      '2023年以降、運用上の信頼性やセキュリティ面に懸念が示されている',
      '一部のオンラインカジノでは利用推奨が停止されている',
      '振込人コードの入力ミスなど、利用時の注意点が多い'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'SUMOPAY（相撲ペイ）2025年最新版レビュー｜安全性と実態を徹底解説',
    description: 'SUMOPAY（相撲ペイ）は国内銀行送金に特化した決済サービスです。2025年最新情報として、入出金方法、手数料、KYC、そして現在指摘されているセキュリティや運用上の懸念点を徹底解説します。利用前に知っておくべき注意点も紹介。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
