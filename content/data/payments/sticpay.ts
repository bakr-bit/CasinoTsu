import type { PaymentMethodData } from './types';

export const sticpay: PaymentMethodData = {
  slug: 'sticpay',
  name: 'STICPAY',
  nameJa: 'STICPAY（スティックペイ）',
  logo: '/assets/payment/sticpay.png',
  type: 'ewallet',

  processingTime: {
    deposit: '即時〜数分以内',
    withdrawal: '1〜3営業日（銀行口座への出金）',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料（銀行送金は別途手数料）',
    withdrawal: '約1%程度（銀行送金時は別途費用）',
    note: '通貨換算（FX）手数料が約1〜2％かかる場合がある。カード発行には配送費用$35が必要。',
  },

  features: {
    highlights: [
      '多通貨対応で日本円の利用が可能',
      'ユニオンペイプリペイドカード発行でATMからの現金引き出しが可能',
      'ビットコイン（BTC）入金が手数料無料',
      'KYCを厳格に行うためセキュリティが高い',
      'オンラインカジノへの入金は即時〜数分と処理が速い'
    ],
    watchouts: [
      '通貨交換時に為替手数料（FX手数料）が発生する場合がある',
      'カードの発行手数料（配送費用）や月会費がかかる',
      '入出金限度額や手数料が日本ユーザー向けに変動し、明確な公開情報が少ない'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'STICPAY（スティックペイ）入出金ガイド【2025年最新版】',
    description: 'STICPAY（スティックペイ）は多通貨対応の電子ウォレットで、オンラインカジノの入出金に便利です。日本円対応、ビットコイン入金無料、ユニオンペイカードでのATM出金が可能。手数料やKYC、利用方法を徹底解説します。【2025年最新】',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
