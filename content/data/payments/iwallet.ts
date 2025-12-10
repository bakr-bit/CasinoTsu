import type { PaymentMethodData } from './types';

export const iwallet: PaymentMethodData = {
  slug: 'iwallet',
  name: 'iWallet',
  nameJa: 'iWallet（アイウォレット）',
  logo: '/assets/payment/iwallet.png',
  type: 'ewallet',

  processingTime: {
    deposit: '数分〜数時間',
    withdrawal: '1～3営業日',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '為替換算手数料が発生する場合あり',
    withdrawal: '送金手数料＋為替換算費用が発生する場合あり',
    note: '1ヶ月以上取引がない場合、管理手数料が発生',
  },

  features: {
    highlights: [
      'プリペイドカード（銀聯）で日本国内ATMから現金化可能',
      '多くのオンラインカジノで採用されている人気サービス',
      '二段階認証やSSL暗号化などセキュリティ対策が充実',
      '入出金処理が海外送金としては比較的スピーディ'
    ],
    watchouts: [
      '日本円（JPY）非対応のため、入出金時に為替手数料が発生',
      '1ヶ月以上取引がない場合、口座維持費（管理手数料）が発生',
      'プリペイドカードの到着に時間がかかる場合がある（約4週間）'
    ],
    jpySupported: false,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'iWallet（アイウォレット）入出金ガイド | オンラインカジノでの使い方と手数料【2024年最新版】',
    description: 'iWallet（アイウォレット）は、オンラインカジノで人気の電子決済サービス。プリペイドカードによる国内ATM現金化が魅力ですが、日本円非対応のため為替手数料に注意が必要です。口座開設から入出金手順、手数料、セキュリティまで徹底解説します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
