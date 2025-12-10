import type { CasinoData } from './types';

export const casino_me: CasinoData = {
  slug: 'casino-me',
  name: 'Casino Me',
  nameJa: 'カジノミー',
  logo: '/assets/casino/casino-me.png',
  rating: 4.2,

  license: {
    name: 'Curacao Gaming Authority',
    jurisdiction: 'キュラソー',
  },

  operator: 'Sweetspot N.V.',
  established: 2020,

  affiliate: {
    url: 'https://casinotsu.com/go/casino-me',
  },

  features: {
    bonusHeadline: '最大$777ウェルカムボーナス（賭け条件20倍）と77回フリースピン',
    highlights: [
      '業界最高水準の0.3%自動キャッシュバック「キャッシュミー」',
      'カジ旅の姉妹カジノで信頼性が高い',
      'Blitzモードでスロットが最大6倍速で楽しめる',
      '全4回の豪華ウェルカムボーナスを提供',
      'ネイティブ日本語サポートが充実'
    ],
    watchouts: [
      '仮想通貨以外での出金は最大10日かかる場合がある',
      'ライセンスによるプレイヤー保護は限定的',
      '専用モバイルアプリがない'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'bank-transfer', 'visa', 'mastercard', 'jcb', 'payz', 'vega-wallet', 'usdt', 'litecoin', 'ripple', 'iwallet', 'muchbetter', 'sticpay'],

  facts: [
    { label: 'ローンチ', value: '2020年' },
    { label: 'ライセンス', value: 'キュラソー・ゲーミング・オーソリティ' },
    { label: '運営会社', value: 'Sweetspot N.V.' },
    { label: 'ウェルカムボーナス', value: '最大$777 + 77回FS' },
    { label: 'キャッシュバック', value: '0.3%自動積立（キャッシュミー）' },
    { label: '日本語サポート', value: 'ライブチャット (日本時間18:00～翌9:00)' },
    { label: 'KYC（本人確認）', value: '出金時に必要となる場合あり' },
    { label: '姉妹カジノ', value: 'カジ旅、カジノスカイ' }
  ],

  meta: {
    title: 'カジノミー（Casino Me）レビュー【2025年最新版】｜最大$777ボーナスと0.3%キャッシュバック',
    description:
      'カジノミー（Casino Me）はカジ旅の姉妹カジノで、2020年にローンチ。最大$777の豪華ウェルカムボーナスと、賭け金の一部が自動で貯まる独自のキャッシュバック「キャッシュミー」が魅力。仮想通貨決済にも対応し、信頼性の高い日本語サポートも充実しています。',
  },
};
