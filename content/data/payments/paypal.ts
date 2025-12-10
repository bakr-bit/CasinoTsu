import type { PaymentMethodData } from './types';

export const paypal: PaymentMethodData = {
  slug: 'paypal',
  name: 'PayPal',
  nameJa: 'PayPal（ペイパル）',
  logo: '/assets/payment/paypal.png',
  type: 'ewallet',

  processingTime: {
    deposit: '即時',
    withdrawal: '1〜2営業日',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料',
    withdrawal: '無料',
    note: '日本円以外での決済時、3.5～4%の為替手数料が発生',
  },

  features: {
    highlights: [
      '世界基準のセキュリティとチャージバック保護機能',
      'カジノにクレジットカード情報を直接教えずに済む',
      '入金は基本的に即時反映され、すぐにプレイ可能',
      '日本円対応カジノを選べば為替手数料を削減可能',
      '二段階認証（2FA）対応など高度な不正検知システム'
    ],
    watchouts: [
      '日本円以外での決済時、為替手数料（3.5～4%）が発生する',
      'KYC（本人確認）が必須であり、未完了だと取引制限がある',
      'カジノ側の処理により出金に時間がかかる場合がある（1〜2営業日目安）'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'PayPal（ペイパル）｜2025年最新版 オンラインカジノ決済ガイド 🇯🇵✨',
    description: 'PayPal（ペイパル）を使ったオンラインカジノへの入出金方法を徹底解説。2025年最新の安全性、手数料、処理スピード、本人確認（KYC）の必要性、日本円対応カジノの選び方を詳しく紹介します。安全・簡単な電子決済でカジノを楽しもう！',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
