import type { PaymentMethodData } from './types';

export const vega_wallet: PaymentMethodData = {
  slug: 'vega-wallet',
  name: 'Vega Wallet',
  nameJa: 'ベガウォレット',
  logo: '/assets/payment/vega-wallet.png',
  type: 'ewallet',

  processingTime: {
    deposit: '即時〜数分',
    withdrawal: '数時間〜1営業日',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料',
    withdrawal: '無料（平日350ポイント以上）',
    note: '銀行振込時の振込手数料は利用者負担。週末（金曜15時～月曜15時）は換金手数料が割高になる。',
  },

  features: {
    highlights: [
      '複数カジノ間の資金移動が手数料無料',
      '入金・出金処理スピードが比較的早い',
      '利用者向けのポイントバックや抽選キャンペーンがある',
      '人気決済サービスVenus Pointの後継で信頼性が高い'
    ],
    watchouts: [
      '日本円（JPY）非対応のため為替コストが発生する',
      '週末（金曜15時以降）の換金手数料が割高になる',
      '対応オンラインカジノが限定的で事前確認が必要'
    ],
    jpySupported: false,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'Vega Wallet / ベガウォレット オンカジ決済レビュー2025年最新版',
    description: 'ベガウォレット（Vega Wallet）は、ヴィーナスポイントの後継として登場したオンラインカジノ専用の電子ウォレットです。複数カジノ間の資金移動が無料で、入出金スピードも速いのが魅力。ただし、日本円非対応のため為替コストや週末の換金手数料には注意が必要です。最新の入出金方法、手数料、対応カジノを2025年版で徹底解説します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
