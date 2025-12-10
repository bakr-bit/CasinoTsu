import type { PaymentMethodData } from './types';

export const japanese_yen_casinos: PaymentMethodData = {
  slug: 'japanese-yen-casinos',
  name: 'Bank Transfer (Domestic JPY)',
  nameJa: '銀行送金（国内送金）',
  logo: '/assets/payment/japanese-yen-casinos.png',
  type: 'bank',

  processingTime: {
    deposit: '数分～1営業日',
    withdrawal: '1～3営業日',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '0円～数百円',
    withdrawal: '0円～数百円',
    note: '銀行間で手数料が異なる場合がある。カジノ側が送金手数料を負担しない場合あり。',
  },

  features: {
    highlights: [
      '一般的で信頼性が高い',
      'ほとんどのオンラインカジノで対応している',
      '大きな金額の入出金にも対応可能',
      '為替手数料がかからず、金銭感覚を維持しやすい'
    ],
    watchouts: [
      '銀行やカジノによっては手続きが面倒な場合がある',
      '銀行間の送金手数料が発生することがある',
      '出金処理に1～3営業日かかる'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: '銀行送金（国内送金）で日本円入出金するガイド【2025年最新版】',
    description: '日本円で遊べるオンラインカジノでの銀行送金（国内送金）のメリット、入出金時間、手数料を解説。為替リスクなしで安全にプレイするための完全ガイドです。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
