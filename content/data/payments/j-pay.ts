import type { PaymentMethodData } from './types';

export const j_pay: PaymentMethodData = {
  slug: 'j-pay',
  name: 'J-Pay (Bank Transfer)',
  nameJa: 'J-Pay（銀行送金）',
  logo: '/assets/payment/j-pay.png',
  type: 'bank',

  processingTime: {
    deposit: '即時～数分（最大24時間以内）',
    withdrawal: 'KYC完了後1〜3営業日程度（24〜72時間）',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '銀行の振込手数料（数十円～数百円）',
    withdrawal: '銀行の受取手数料あり（5,000円〜1万円程度）',
    note: '入金時の振込手数料はユーザー負担だが、ネット銀行利用で無料になる場合がある。出金時の銀行受取手数料はカジノ負担となる場合もある。',
  },

  features: {
    highlights: [
      '日本円で直接取引可能（為替手数料不要）',
      '国内銀行ネットワークを利用するため安全性が高い',
      'アカウント登録不要で、普段使いの銀行から直接送金可能',
      '入金はほぼ即時反映でスピーディ'
    ],
    watchouts: [
      '銀行の振込手数料（入金時）および受取手数料（出金時）が発生する',
      '振込名義に専用IDをつけ忘れると入金が遅延する',
      '短期間に多額の取引を行うと銀行口座凍結のリスクがある'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'J-Pay（銀行送金）入出金ガイド【2025年最新版】手数料・安全性・使い方を徹底解説',
    description: 'J-Pay（銀行送金）は、日本の銀行口座から日本円で直接入出金できる安全性の高い決済方法です。為替手数料不要で即時入金が可能。2025年最新の手数料、KYC、使い方、注意点を解説します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
