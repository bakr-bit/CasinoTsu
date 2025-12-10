import type { CasinoData } from './types';

export const wonder_casino: CasinoData = {
  slug: 'wonder-casino',
  name: 'Wonder Casino',
  nameJa: 'ワンダーカジノ',
  logo: '/assets/casino/wonder-casino.png',
  rating: 4.5,

  license: {
    name: 'Curaçao Gaming Authority',
    jurisdiction: 'キュラソー',
  },

  operator: 'Sector Media NV',
  established: 2018,

  affiliate: {
    url: 'https://casinotsu.com/go/wonder-casino',
  },

  features: {
    bonusHeadline: '業界最速出金＆仮想通貨特化ボーナス！最大$500初回入金ボーナス',
    highlights: [
      '業界最速クラスの出金スピード！最短5分〜1時間で着金',
      '仮想通貨入金で最大60%キャッシュバック＋毎日5%還元',
      '最短1日でVIP最上位まで昇格可能！降格なしの超高速VIPプログラム',
      '24時間365日の完全日本語サポート（ライブチャット・LINE対応）',
      '高額入出金でも制限なし！ハイローラーも大満足'
    ],
    watchouts: [
      '銀行振込の出金手数料が5%と高め',
      'ゲーム検索機能が細分化されておらず、使いにくい場合がある'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'usdt', 'bank-transfer', 'vega-wallet', 'payz', 'sticpay', 'visa', 'mastercard', 'jcb'],

  facts: [
    { label: '設立年', value: '2018年' },
    { label: 'ライセンス', value: 'キュラソー (Curaçao Gaming Authority)' },
    { label: '運営会社', value: 'Sector Media NV' },
    { label: '出金スピード', value: '最短5分〜1時間' },
    { label: '日本語サポート', value: '24時間365日（ライブチャット, LINE）' },
    { label: 'VIPプログラム', value: '累計ベット額で昇格、降格なし' },
    { label: '入金不要ボーナス', value: '$40 (コード: JP40)' },
    { label: 'KYC要件', value: '出金時に必要' }
  ],

  meta: {
    title: 'Wonder Casino（ワンダーカジノ）レビュー【2025年最新版】',
    description:
      '業界最速の出金スピードを誇るワンダーカジノ（Wonder Casino）を徹底レビュー。仮想通貨特化ボーナス、最短1日のVIP昇格、24時間日本語サポートの魅力や、入金不要ボーナス$40の獲得方法を解説します。',
  },
};
