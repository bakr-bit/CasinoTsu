import type { PaymentMethodData } from './types';

export const tiger_pay: PaymentMethodData = {
  slug: 'tiger-pay',
  name: 'Tiger Pay',
  nameJa: 'タイガーペイ（Tiger Pay）',
  logo: '/assets/payment/tiger-pay.png',
  type: 'ewallet',

  processingTime: {
    deposit: '数時間以内',
    withdrawal: '数時間以内',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '銀行振込: 約5%, 仮想通貨: 無料',
    withdrawal: 'カジノ側は無料/低額。別途送金・カード利用手数料あり',
    note: '日本円（JPY）に非対応のため、通貨換算手数料が別途発生します。',
  },

  features: {
    highlights: [
      '仮想通貨と法定通貨の両方に対応した電子ウォレット機能',
      '国内外銀行口座への送金・入金が可能',
      'プリペイドカード発行（ATM引き出し可）に対応予定',
      '電子ウォレット、銀行送金、カード機能を一つに統合した次世代型プラットフォーム'
    ],
    watchouts: [
      '日本円（JPY）に直接対応しておらず、通貨換算コストが発生する',
      '銀行振込での入金手数料が約5%と他サービスに比べ割高',
      'ATMカード利用時、月間10,000ドル（約150万円）の出金制限がある'
    ],
    jpySupported: false,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'タイガーペイ（Tiger Pay）入出金ガイドと手数料・注意点【2024年最新版】',
    description: 'タイガーペイ（Tiger Pay）のオンラインカジノでの使い方、入金・出金手数料、処理時間、日本円対応の実態を徹底解説。仮想通貨と法定通貨を統合した次世代決済サービスです。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
