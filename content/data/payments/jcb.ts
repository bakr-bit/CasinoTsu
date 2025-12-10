import type { PaymentMethodData } from './types';

export const jcb: PaymentMethodData = {
  slug: 'jcb',
  name: 'JCB',
  nameJa: 'JCBカード',
  logo: '/assets/payment/jcb.png',
  type: 'card',

  processingTime: {
    deposit: '即時',
    withdrawal: '出金不可（代替手段の処理時間に依存）',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '無料〜2.5%程度',
    withdrawal: 'N/A（出金不可）',
    note: '日本円決済対応カジノでは為替手数料を抑えられる。ドル決済の場合はカード会社による通貨換算手数料が発生する。',
  },

  features: {
    highlights: [
      '日本ブランドで安心感と日本語サポートが充実',
      '日本円入金対応カジノが多く為替手数料を抑えやすい',
      '「J/Secure」による高いセキュリティと不正監視体制',
      '入金反映がほぼ即時でスムーズ'
    ],
    watchouts: [
      '出金はカードに戻せず、電子ウォレットや銀行振込が必須',
      '対応カジノ数はVISA/Mastercardよりまだ少ない',
      '一部カード発行元がギャンブル決済を制限する場合がある'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'JCBカード入金ガイド【2024年最新版】日本人向けオンラインカジノ決済',
    description: 'JCBカードを使ったオンラインカジノへの入金方法、手数料、限度額、J/Secureによる安全性、そして出金方法（代替手段）を徹底解説。日本人プレイヤーに嬉しい日本円対応カジノ情報も紹介します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
