import type { PaymentMethodData } from './types';

export const visa: PaymentMethodData = {
  slug: 'visa',
  name: 'VISA',
  nameJa: 'VISAカード',
  logo: '/assets/payment/visa.png',
  type: 'card',

  processingTime: {
    deposit: '即時反映',
    withdrawal: '基本的に不可',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料または最大2.25%程度',
    withdrawal: '出金不可',
    note: 'カジノによっては入金額の最大2.25%程度の手数料が発生する場合がある。',
  },

  features: {
    highlights: [
      '世界で最も利用者数が多い国際ブランド',
      'ほとんどのオンラインカジノで利用可能',
      '日本円での入金がスムーズ',
      '入金は即時反映でスピーディ',
      '3Dセキュア認証などセキュリティ機能が充実'
    ],
    watchouts: [
      '多くのカジノでVISAカードへの直接出金は不可',
      '一部の銀行発行元では賭博関連取引がブロックされる場合がある',
      '高額入金時はカジノ側の手数料に注意が必要'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'VISAカード｜日本で使えるオンラインカジノ入金ガイド【2024年最新版】',
    description: 'VISAカードはオンラインカジノで最も人気のある入金方法です。入金手順、手数料、即時反映の処理時間、そして出金時の代替手段について詳しく解説します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
