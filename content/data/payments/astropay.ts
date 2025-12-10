import type { PaymentMethodData } from './types';

export const astropay: PaymentMethodData = {
  slug: 'astropay',
  name: 'AstroPay',
  nameJa: 'AstroPay（アストロペイ）',
  logo: '/assets/payment/astropay.png',
  type: 'ewallet',

  processingTime: {
    deposit: '即時〜数分',
    withdrawal: '基本的に出金非対応',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料',
    withdrawal: 'カジノによる',
    note: 'AstroPay自体は入金手数料無料の場合が多い',
  },

  features: {
    highlights: [
      '仮想プリペイドカードで手軽に入金可能',
      'クレジットカード情報不要でセキュリティが高い',
      '日本円（JPY）でのカード発行に対応していた',
      '入金手数料が無料の場合が多い'
    ],
    watchouts: [
      '日本市場での利用が実質的に縮小・停止傾向にある',
      'チャージ済みの残高は原則返金・現金化ができない',
      '出金には基本的に対応していない（入金専用）'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'AstroPay（アストロペイ）入出金ガイド【2025年最新版】',
    description: 'AstroPay（アストロペイ）のオンラインカジノでの利用現状と課題を解説。かつて人気だった仮想プリペイドカードの入金方法、手数料、本人確認（KYC）について詳しく紹介します。代替決済手段も紹介。【2025年版】',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
