import type { PaymentMethodData } from './types';

export const bank_transfer: PaymentMethodData = {
  slug: 'bank-transfer',
  name: 'Bank Transfer (Domestic)',
  nameJa: '国内銀行振込',
  logo: '/assets/payment/bank-transfer.png',
  type: 'bank',

  processingTime: {
    deposit: '数分〜数時間',
    withdrawal: '数時間〜1営業日程度',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '数百円前後',
    withdrawal: '数百円前後',
    note: '銀行側の振込手数料が発生する（カジノ側手数料は無料の場合が多い）',
  },

  features: {
    highlights: [
      '日本の銀行口座があれば誰でも利用可能',
      '入金は即時〜数時間、出金も比較的スピーディ',
      '日本人に最も馴染み深く、操作が簡単',
      '手数料が安価（数百円前後）',
      '取引の透明性が高く、セキュリティ面で安心'
    ],
    watchouts: [
      '銀行側の振込手数料（数百円程度）が別途発生する',
      '夜間や土日祝日は処理が翌営業日になる場合がある',
      '振込時にユニークID（リファレンス番号）の入力が必要'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: '国内銀行振込でオンラインカジノに入出金する完全ガイド【2025年最新版】',
    description: '国内銀行振込は、日本の銀行口座から直接カジノに入出金できる最も安全で便利な方法です。手数料や処理時間、本人確認（KYC）の手順を詳しく解説。日本人にとって最も馴染みやすい決済手段をマスターしましょう。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
