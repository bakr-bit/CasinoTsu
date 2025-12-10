import type { PaymentMethodData } from './types';

export const venuspoint: PaymentMethodData = {
  slug: 'venuspoint',
  name: 'Vega Wallet',
  nameJa: 'Vega Wallet（ベガウォレット）',
  logo: '/assets/payment/venuspoint.png',
  type: 'ewallet',

  processingTime: {
    deposit: '通常24時間以内（最大2営業日）',
    withdrawal: '通常24時間以内（最大2営業日）',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: 'ほぼ無料〜小額',
    withdrawal: '$1.80/900ドル程度（約200円前後）',
    note: 'カジノや入金方法により小額の手数料が発生する場合がある。',
  },

  features: {
    highlights: [
      '日本円（JPY）に直接対応し、為替手数料を最小限に抑えられる',
      '送金手数料が安く、処理スピードが速い（通常24時間以内）',
      '毎週の抽選会やポイント還元など特典が充実している',
      '日本の法規制に準拠した厳格なKYCと高水準のセキュリティ'
    ],
    watchouts: [
      'クレジットカードや銀行からの直接チャージは不可（間接的なルートが必要）',
      '1日あたり20,000ポイント（約2万ドル）など利用限度額が設定されている'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'Vega Wallet（ベガウォレット）入出金ガイド【2024年最新版】',
    description: 'Vega Walletは、Venus Pointの後継として登場した電子決済サービスです。日本円（JPY）対応、低手数料、迅速な処理速度が魅力。KYCやセキュリティ対策も万全で、ポイント還元も充実。オンラインカジノでの入出金に最適なベガウォレットの登録・利用方法を徹底解説します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
