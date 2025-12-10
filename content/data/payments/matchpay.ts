import type { PaymentMethodData } from './types';

export const matchpay: PaymentMethodData = {
  slug: 'matchpay',
  name: 'MatchPay',
  nameJa: 'マッチペイ（MatchPay）',
  logo: '/assets/payment/matchpay.png',
  type: 'other',

  processingTime: {
    deposit: 'ほぼ即時〜10分以内',
    withdrawal: 'ほぼ即時〜10分以内',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料',
    withdrawal: '無料',
    note: '銀行振込時の手数料（数百円程度）はユーザー負担',
  },

  features: {
    highlights: [
      'P2P決済により入出金がほぼ即時で完了する',
      '1円固定のステーブルコイン（Match Coin）で為替リスクがない',
      'メールアドレスと電話番号のみで利用可能（匿名性が高い）',
      '多くのオンラインカジノで入出金手数料が無料'
    ],
    watchouts: [
      'P2P取引のため、売買相手とのトラブルや不正リスクが存在する',
      '銀行振込手数料はユーザー負担となる',
      '日本国内での法規制の動向に注意が必要'
    ],
    jpySupported: true,
    kycRequired: false,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'マッチペイ（MatchPay）入出金ガイド｜手数料・安全性・使い方を徹底解説【2024年最新版】',
    description: 'マッチペイ（MatchPay）はP2P型の新しい決済サービスです。匿名性が高く、1円固定のステーブルコインで為替リスクなし。手数料や入出金速度、安全な使い方、おすすめカジノを徹底解説します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
