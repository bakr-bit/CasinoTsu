import type { PaymentMethodData } from './types';

export const usdt: PaymentMethodData = {
  slug: 'usdt',
  name: 'USDT (Tether)',
  nameJa: 'USDT（テザー）',
  logo: '/assets/payment/usdt.png',
  type: 'crypto',

  processingTime: {
    deposit: '即時',
    withdrawal: '24〜48時間以内',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料の場合あり',
    withdrawal: '無料の場合あり',
    note: '取引手数料は低めかつ安定。BTCより安定的。',
  },

  features: {
    highlights: [
      '価格が安定しており、入出金額の計算が容易',
      '送金速度が速い（ほぼ即時）',
      '手数料が低く、安定している',
      '最新のオンラインカジノで広く採用されている',
      'USDT限定の入金ボーナスがある場合がある'
    ],
    watchouts: [
      '日本国内の取引所で購入できず、海外取引所の利用が必須',
      'テザー社の資産透明性や管理体制に不安が残る（テザー問題）',
      '日本のオンラインギャンブル規制における法的グレーゾーンがある'
    ],
    jpySupported: false,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'USDT（テザー）入出金ガイド | 価格安定の仮想通貨をカジノで使う方法【2024年最新版】',
    description: 'USDT（テザー）は価格が安定したステーブルコインで、オンラインカジノでの利用が急増中。入出金速度、手数料、メリット・デメリット、日本のプレイヤーがUSDTを購入する方法、KYCの必要性まで徹底解説します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
