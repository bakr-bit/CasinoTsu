import type { CasinoData } from './types';

export const winz_io: CasinoData = {
  slug: 'winz-io',
  name: 'Winz.io',
  nameJa: 'ウィンズアイオー',
  logo: '/assets/casino/winz-io.png',
  rating: 4.3,

  license: {
    name: 'Antillephone',
    jurisdiction: 'キュラソー',
  },

  operator: 'Dama N.V.',
  established: 2020,

  affiliate: {
    url: 'https://casinotsu.com/go/winz-io',
  },

  features: {
    bonusHeadline: '最大$10,000賞金または800フリースピン！ボーナスに賭け条件なし',
    highlights: [
      'ボーナスやプロモーションに賭け条件なし',
      '最大$10,000賞金または800フリースピン',
      '仮想通貨を含む多様な決済方法と日本円対応',
      'ゲーム数豊富（5,000種類以上）でスポーツベットも可能',
      '出金処理が迅速（仮想通貨は0-1時間）'
    ],
    watchouts: [
      '出金前にマネーロンダリング防止のため入金額の1～3倍の賭け条件あり',
      '仮想通貨以外の入出金方法が比較的少なめ',
      'モバイルでのサイト表示に遅延が見られるとの報告あり'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'usdt', 'payz', 'muchbetter', 'visa', 'mastercard', 'jcb', 'bank-transfer'],

  facts: [
    { label: '名称', value: 'ウィンズアイオー (Winz.io)' },
    { label: '設立年', value: '2020年' },
    { label: '運営会社', value: 'Dama N.V.' },
    { label: 'ライセンス', value: 'Antillephone (キュラソー)' },
    { label: 'ゲーム数', value: '5,000種類以上' },
    { label: '日本語サポート', value: '24時間ライブチャット (自動翻訳)' },
    { label: 'KYC認証', value: '€2,000までは不要' },
    { label: '対応通貨', value: '仮想通貨12種、日本円、USDなど' }
  ],

  meta: {
    title: 'ウィンズアイオー（Winz.io）レビュー【2025年最新版】',
    description:
      'ウィンズアイオー（Winz.io）は、ボーナスに賭け条件がないことで知られる仮想通貨カジノです。最大$10,000のウェルカムボーナスを提供し、日本円や多様な法定通貨にも対応。Dama N.V.運営で信頼性も抜群です。',
  },
};
