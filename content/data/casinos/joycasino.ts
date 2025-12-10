import type { CasinoData } from './types';

export const joycasino: CasinoData = {
  slug: 'joycasino',
  name: 'Joy Casino',
  nameJa: 'ジョイカジノ',
  logo: '/assets/casino/joycasino.png',
  rating: 4.4,

  license: {
    name: 'Antillephone License Validation',
    jurisdiction: 'キュラソー',
  },

  operator: 'Pomadorro N.V.',
  established: 2022,

  affiliate: {
    url: 'https://casinotsu.com/go/joycasino',
  },

  features: {
    bonusHeadline: '最大¥204,500ウェルカムボーナス + 200回フリースピン',
    highlights: [
      'CasinoTsu 限定の入金不要ボーナスあり',
      '5回目までの入金が対象の充実したウェルカムオファー',
      '仮想通貨を含む豊富な決済方法に対応',
      '24時間365日の日本語サポートを提供'
    ],
    watchouts: [
      'ユーザーレビューで出金やアカウント認証に関する深刻な苦情が散見される',
      'サポートの対応に個人差があり、回答に若干のずれが見られる場合がある'
    ],
  },

  payments: ['american-express', 'bank-transfer', 'bitcoin', 'ethereum', 'iwallet', 'litecoin', 'mastercard', 'muchbetter', 'payz', 'ripple', 'tether', 'tiger-pay', 'vega-wallet', 'visa'],

  facts: [
    { label: '名称', value: 'Joy Casino' },
    { label: '運営会社', value: 'Pomadorro N.V.' },
    { label: '設立年', value: '2022年' },
    { label: 'ライセンス', value: 'キュラソー (Antillephone)' },
    { label: '日本語サポート', value: '24時間対応（ライブチャット/メール）' },
    { label: 'ウェルカムボーナス', value: '最大¥204,500 + FS 200回' },
    { label: '出金回数制限', value: '1日2回まで無料（3回目以降10%手数料）' }
  ],

  meta: {
    title: 'Joy Casino（ジョイカジノ）の評判・入金不要ボーナス徹底解説【2025年最新版】',
    description:
      'ジョイカジノ（Joy Casino）は2022年に復活した人気カジノ。CasinoTsu限定の入金不要ボーナスや最大¥204,500の豪華ウェルカムオファー、豊富な決済方法、24時間日本語サポートの魅力を徹底レビューします。',
  },
};
