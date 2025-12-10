import type { PaymentMethodData } from './types';

export const slash_payment: PaymentMethodData = {
  slug: 'slash-payment',
  name: 'Slash Payment',
  nameJa: 'スラッシュ・ペイメント',
  logo: '/assets/payment/slash-payment.png',
  type: 'crypto',

  processingTime: {
    deposit: '即時〜数分',
    withdrawal: '未対応',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料',
    withdrawal: 'N/A',
    note: '仮想通貨ネットワークのガス代（手数料）はユーザー負担',
  },

  features: {
    highlights: [
      '1,400種類以上の仮想通貨に対応',
      '入金手数料が無料',
      'KYC（本人確認）不要で匿名性が高い',
      'スマホのQRコードからも簡単に支払い可能'
    ],
    watchouts: [
      '現在は入金専用であり、出金は通常の仮想通貨ウォレットが必要',
      'ネットワークの混雑状況によりガス代（手数料）が高騰する場合がある',
      '日本のオンラインカジノでの導入数がまだ少ない'
    ],
    jpySupported: false,
    kycRequired: false,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'スラッシュ・ペイメント入出金ガイド｜KYC不要の仮想通貨決済【2024年最新版】',
    description: 'Slash Payment（スラッシュ・ペイメント）は1,400種以上の仮想通貨に対応した入金専用決済です。KYC不要で匿名性が高く、手数料無料で即時入金が可能。対応カジノや出金方法、ガス代の注意点を徹底解説します。【2024年版】',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
