import type { CasinoData } from './types';

export const fresh_casino: CasinoData = {
  slug: 'fresh-casino',
  name: 'Fresh Casino',
  nameJa: 'フレッシュカジノ',
  logo: '/assets/casino/fresh-casino.png',
  rating: 4,

  license: {
    name: 'Antillephone',
    jurisdiction: 'キュラソー',
  },

  operator: 'Galaktika N.V.',
  established: 2018,

  affiliate: {
    url: 'https://casinotsu.com/go/fresh-casino',
  },

  features: {
    bonusHeadline: '最大¥150,000ウェルカムボーナス + 入金不要フリースピン50回',
    highlights: [
      '豪華なウェルカムボーナス（最大合計9万円）',
      'スポーツブックもプレイ可能なハイブリッドカジノ',
      '6,000種類以上の豊富なゲーム数',
      '毎週開催される宝くじやキャッシュバックキャンペーン',
      'Android/iOS対応のモバイルアプリを提供'
    ],
    watchouts: [
      'サポートが外国人スタッフによる自動翻訳対応',
      'ウェルカムボーナスの賭け条件が45倍とやや厳しめ'
    ],
  },

  payments: ['bank-transfer', 'ethereum', 'muchbetter', 'payz', 'usdt', 'tiger-pay', 'vega-wallet', 'visa'],

  facts: [
    { label: '名称', value: 'フレッシュカジノ' },
    { label: '設立年', value: '2018年' },
    { label: '運営会社', value: 'Galaktika N.V.' },
    { label: 'ライセンス', value: 'Antillephone (キュラソー)' },
    { label: 'ゲーム数', value: '6,000種類以上' },
    { label: 'VIPプログラム', value: 'Fresh Club (あり)' },
    { label: 'サポート体制', value: '24時間ライブチャット (自動翻訳)' },
    { label: '入金不要ボーナス', value: 'フリースピン50回' }
  ],

  meta: {
    title: 'Fresh Casino（フレッシュカジノ）レビュー｜入金不要ボーナスと評判を徹底解説【2024年最新版】',
    description:
      'フレッシュカジノ（Fresh Casino）は2018年設立のハイブリッドカジノ。最大¥150,000のウェルカムボーナスと50回フリースピンが魅力。6,000種類以上のゲームとスポーツベットを提供し、キュラソーライセンス取得済みで安全性も高いです。',
  },
};
