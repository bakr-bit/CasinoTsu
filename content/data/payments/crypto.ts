import type { PaymentMethodData } from './types';

export const crypto: PaymentMethodData = {
  slug: 'crypto',
  name: 'Cryptocurrency',
  nameJa: '仮想通貨（暗号資産）',
  logo: '/assets/payment/crypto.png',
  type: 'crypto',

  processingTime: {
    deposit: '即時～数分',
    withdrawal: '数分～数時間',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: 'ほぼ無料',
    withdrawal: 'ほぼ無料',
    note: '取引所での両替手数料やレート変動リスクあり',
  },

  features: {
    highlights: [
      '24時間即時入金反映でスピーディー',
      '中間銀行なしのピアツーピア送金で手数料ほぼゼロ',
      'クレジットカードや銀行口座を使わず匿名性が高い',
      '仮想通貨入金者限定の豪華ボーナスが豊富'
    ],
    watchouts: [
      '仮想通貨の価格変動リスクがある',
      '送金後のチャージバック（返金）が原則不可',
      '日本の法規制が複雑なため自己責任での利用が必要'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: '仮想通貨（暗号資産）入出金ガイド【2025年最新版】',
    description: '2025年最新の仮想通貨対応オンラインカジノを徹底解説。ビットコイン(BTC)などを使った入出金は即時反映、手数料ほぼ無料で匿名性も高いのが魅力。KYCや日本の規制、お得なボーナス情報まで網羅。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
