import type { PaymentMethodData } from './types';

export const muchbetter: PaymentMethodData = {
  slug: 'muchbetter',
  name: 'MuchBetter',
  nameJa: 'MuchBetter（マッチベター）',
  logo: '/assets/payment/muchbetter.png',
  type: 'ewallet',

  processingTime: {
    deposit: '即時反映',
    withdrawal: '数分〜最大24時間以内',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料',
    withdrawal: '約2%または5ポンド程度',
    note: 'クレジットカード入金は無料。仮想通貨入金は約2%、他の電子決済は6%の手数料がかかる場合がある。',
  },

  features: {
    highlights: [
      '日本円（JPY）に正式対応しており為替リスクを気にせず使える',
      'スマホアプリで完結し、入金は基本的に即時反映',
      '銀行レベルの暗号化技術と多層的なセキュリティ対策',
      '日本語でのサポート窓口がメールで利用可能'
    ],
    watchouts: [
      '仮想通貨出金は約2%、海外送金は5ポンド程度の手数料がかかる',
      '海外送金（銀行振込）の場合、日本語住所をローマ字に変更が必要になる場合がある',
      '通貨設定は登録後の変更が不可'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'MuchBetter（マッチベター）入出金ガイド｜日本円対応カジノ決済【2024年最新版】',
    description: 'MuchBetter（マッチベター）は日本円対応のモバイル電子ウォレット。オンラインカジノへの入出金がスマホで完結し、迅速かつ安全です。手数料や本人確認(KYC)の手順、利用できるカジノを詳しく解説します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
