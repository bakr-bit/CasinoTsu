import type { PaymentMethodData } from './types';

export const ezeebill: PaymentMethodData = {
  slug: 'ezeebill',
  name: 'Ezeebill',
  nameJa: 'イージービル（Ezeebill）',
  logo: '/assets/payment/ezeebill.png',
  type: 'bank',

  processingTime: {
    deposit: '数時間〜最大24時間',
    withdrawal: '数営業日',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '基本無料',
    withdrawal: '基本無料',
    note: '銀行振込手数料は別途必要',
  },

  features: {
    highlights: [
      'アカウント開設不要でカンタン利用',
      '日本円でそのまま入金ができる',
      '日本のメジャー銀行から直接振込可能',
      '2023年以降、一部カジノで出金に対応'
    ],
    watchouts: [
      '運営情報・ライセンスの透明性が低い',
      '出金対応カジノがまだ限定的',
      '入金反映に最大24時間かかる場合がある'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'イージービル（Ezeebill）オンラインカジノ入金＆出金ガイド【2024年最新】',
    description: 'イージービル（Ezeebill）は、アカウント登録不要で日本の銀行から日本円で直接入金できる銀行送金サービスです。手数料や入出金時間、2024年最新の出金対応カジノ、安全性や注意点について詳しく解説します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
