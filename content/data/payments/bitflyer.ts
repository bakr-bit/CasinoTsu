import type { PaymentMethodData } from './types';

export const bitflyer: PaymentMethodData = {
  slug: 'bitflyer',
  name: 'bitFlyer',
  nameJa: 'bitFlyer（ビットフライヤー）',
  logo: '/assets/payment/bitflyer.png',
  type: 'crypto',

  processingTime: {
    deposit: '約10〜30分',
    withdrawal: '約10〜30分',
  },

  limits: {
    // Limits vary by casino - see individual casino pages
  },

  fees: {
    deposit: '銀行振込は銀行により変動（無料の場合もあり）、カードは約3%程',
    withdrawal: '0.0004BTC前後',
  },

  features: {
    highlights: [
      '即時入金が可能！',
      '手数料が抑えられる',
      '日本円とビットコイン間のスムーズな交換',
      '本人確認（KYC）により安心の運用',
      '多くの日本向けオンラインカジノで利用可能'
    ],
    watchouts: [
      '仮想通貨の価格変動リスクがある',
      '送金ミスは戻せない（チャージバック機能なし）',
      '初心者は最初の設定がやや難しい'
    ],
    jpySupported: true,
    kycRequired: true,
  },

  supportedCasinos: [], // Populated dynamically from casino data

  meta: {
    title: 'bitFlyer（ビットフライヤー）入出金ガイド【2024年最新版】',
    description: 'bitFlyerを使ったオンラインカジノへのビットコイン入出金方法を徹底解説。国内最大手の取引所なので安心安全。口座開設からJPY入金、BTC送金、手数料、処理時間まで、初心者でもわかるようにステップごとに紹介します。',
    lastUpdated: '2025-01-15',
    author: 'casinotsu',
  },
};
