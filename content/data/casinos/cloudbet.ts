import type { CasinoData } from './types';

export const cloudbet: CasinoData = {
  slug: 'cloudbet',
  name: 'Cloudbet',
  nameJa: 'クラウドベット',
  logo: '/assets/casino/cloudbet.png',
  rating: 4,

  license: {
    name: 'Curaçao eGaming License',
    jurisdiction: 'キュラソー',
  },

  operator: 'Halcyon Super Holdings B.V.',
  established: 2013,

  affiliate: {
    url: 'https://casinotsu.com/go/cloudbet',
  },

  features: {
    bonusHeadline: '最大5BTC ウェルカムボーナス！入出金上限なしの仮想通貨特化カジノ',
    highlights: [
      '30種類以上の仮想通貨決済に対応し、入出金上限なし',
      '2,500〜3,000種類以上の豊富なカジノゲームとスポーツベット',
      '10年以上の運営実績を持つ高い安全性と信頼性',
      '24時間年中無休の日本語ライブチャットサポート',
      'クレジットカード等で仮想通貨を直接購入できる機能あり'
    ],
    watchouts: [
      '法定通貨（クレジットカードや電子決済）での直接入出金に未対応',
      '日本語訳に一部不自然な箇所が見られる',
      'プレイヤーからの評判にばらつきがある（アカウント認証やサポート対応など）'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'litecoin', 'usdt', 'bitcoin-cash', 'dash', 'dogecoin', 'shiba-inu', 'ripple', 'vega-wallet'],

  facts: [
    { label: '名称', value: 'Cloudbet' },
    { label: 'ローンチ', value: '2013年' },
    { label: 'ライセンス', value: 'Curaçao eGaming License (キュラソー)' },
    { label: '運営会社', value: 'Halcyon Super Holdings B.V.' },
    { label: '対応通貨', value: '30種類以上の仮想通貨' },
    { label: '入出金上限', value: 'なし (仮想通貨利用時)' },
    { label: 'ゲーム数', value: '2,500〜3,000種類以上' },
    { label: '日本語サポート', value: 'ライブチャット24時間年中無休' }
  ],

  meta: {
    title: 'Cloudbet（クラウドベット）レビュー【2024年最新版】仮想通貨特化カジノの評判とボーナス',
    description:
      'クラウドベット（Cloudbet）は2013年設立の老舗仮想通貨カジノ。最大5BTCのウェルカムボーナスに加え、30種類以上の仮想通貨に対応し、入出金上限なし。2,500種類以上のゲームと24時間日本語サポートが魅力。信頼性の高いハイローラー向けカジノを徹底解説します。',
  },
};
