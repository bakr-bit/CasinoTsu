import type { CasinoData } from './types';

export const livecasino_io: CasinoData = {
  slug: 'livecasino-io',
  name: 'Livecasino.io',
  nameJa: 'ライブカジノアイオー',
  logo: '/assets/casino/livecasino-io.png',
  rating: 4,

  license: {
    name: 'Curacao E-Gaming N.V. License',
    jurisdiction: 'キュラソー',
  },

  operator: 'Moon Technologies B.V.',
  established: 2020,

  affiliate: {
    url: 'https://casinotsu.com/go/livecasino-io',
  },

  features: {
    bonusHeadline: '最大250 USDT相当のウェルカムフリースピン',
    highlights: [
      '多様な仮想通貨での入出金が可能',
      'ライブカジノゲームが豊富に揃っている',
      'ライブカジノ専用のプライベートテーブルを完備',
      '充実したロイヤリティプログラムとキャッシュバック特典'
    ],
    watchouts: [
      '決済方法が限定的（仮想通貨以外は銀行送金のみ）',
      'スロットのタイトル数がやや限定的',
      'ウェルカムボーナスに賭け条件が付帯する場合がある'
    ],
  },

  payments: ['bank-transfer', 'bitcoin', 'ethereum', 'litecoin', 'ripple', 'tether'],

  facts: [
    { label: '名称', value: 'Livecasino.io' },
    { label: '設立年', value: '2020年' },
    { label: '運営会社', value: 'Moon Technologies B.V.' },
    { label: 'ライセンス', value: 'キュラソーE-Gaming N.V. / コモロ（AOFA）' },
    { label: 'ゲーム総数', value: '2,500～3,000種類以上' },
    { label: '日本語サポート', value: 'ライブチャット・メール (24時間対応)' },
    { label: 'VIPプログラム', value: 'あり (キャッシュバック特典)' },
    { label: '本人確認 (KYC)', value: '2,000ドル/ユーロ超の出金時に必要' }
  ],

  meta: {
    title: 'ライブカジノアイオー（Livecasino.io）レビュー【2024年最新版】',
    description:
      'ライブカジノアイオー（Livecasino.io）は、ビットカジノの姉妹カジノとして2020年に誕生。仮想通貨決済に特化し、豊富なライブカジノゲームとハイローラー向けのプライベートテーブルが魅力です。24時間日本語サポート完備で、充実したロイヤリティプログラムも提供しています。',
  },
};
