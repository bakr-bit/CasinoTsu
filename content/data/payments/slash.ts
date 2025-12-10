import type { PaymentMethodData } from './types';

export const slash: PaymentMethodData = {
  slug: 'slash',
  name: 'Slash Payment',
  nameJa: 'Slash Payment（スラッシュ・ペイメント）',
  logo: '/assets/payment/slash.png',
  type: 'crypto',

  processingTime: {
    deposit: '数分〜数十分（ネットワーク状況により変動）',
    withdrawal: '非対応（入金専用）',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料',
    withdrawal: '非対応',
    note: 'ネットワーク手数料（ガス代）やスマートコントラクト手数料が別途発生し、高額になる場合がある。',
  },

  features: {
    highlights: [
      '1,400種類以上のトークン・仮想通貨をサポート',
      'MetaMaskなどの仮想通貨ウォレットから直接決済可能',
      'サービス手数料は基本無料',
      'ブロックチェーン技術により安全性が高い',
      '入金処理が即時〜数分とスピーディ'
    ],
    watchouts: [
      '2024年6月現在、出金には対応していない（入金専用）',
      '日本円（JPY）に直接対応しておらず、仮想通貨への両替が必須',
      '仮想通貨の価格変動リスクを負う必要がある'
    ],
    jpySupported: false,
    kycRequired: false,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'Slash Payment（スラッシュ・ペイメント）入出金ガイド【2024年最新版】',
    description: 'Slash Payment（スラッシュ・ペイメント）は、1,400種類以上の仮想通貨に対応した入金専用決済サービスです。手数料や処理時間、日本円（JPY）対応状況、Konibetでの使い方、注意点（出金非対応など）を徹底解説します。仮想通貨プレイヤー必見の最新ガイド。【2024年版】',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
