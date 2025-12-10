import type { PaymentMethodData } from './types';

export const bitcoin: PaymentMethodData = {
  slug: 'bitcoin',
  name: 'Bitcoin',
  nameJa: 'ビットコイン',
  logo: '/assets/payments/bitcoin.svg',
  type: 'crypto',

  processingTime: {
    deposit: '約5分〜30分',
    withdrawal: '数時間〜1営業日',
  },

  limits: {
    minDeposit: '0.0001 BTC',
    maxDeposit: '制限なし（カジノにより異なる）',
    minWithdrawal: '0.001 BTC',
    maxWithdrawal: '制限なし（カジノにより異なる）',
  },

  fees: {
    deposit: '無料〜少額（ネットワーク手数料）',
    withdrawal: '無料〜少額（ネットワーク手数料）',
    note: 'ブロックチェーンネットワーク手数料は変動します',
  },

  features: {
    highlights: [
      '匿名性が高い',
      '送金スピードが速い',
      '手数料が安い',
      '24時間365日利用可能',
      '国際送金に便利',
    ],
    watchouts: [
      '価格変動リスクがある',
      'ウォレット管理の責任がある',
      '初心者には操作が複雑',
    ],
    jpySupported: false,
    kycRequired: false,
  },

  supportedCasinos: [
    'stake',
    'bc-game',
    'bitcasino',
    'ramenbet',
    'bitz',
    'mega-dice',
  ],

  meta: {
    title: '【2024年最新版】日本人向けオンラインカジノで使うビットコイン完全ガイド',
    description: '日本のオンラインカジノで使えるビットコインの基礎から入出金方法、注意点、手数料、メリットデメリットまで徹底解説。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
