import type { CasinoData } from './types';

export const dafabet: CasinoData = {
  slug: 'dafabet',
  name: 'Dafabet',
  nameJa: 'ダファベット',
  logo: '/assets/casino/dafabet.png',
  rating: 3.8,

  license: {
    name: 'Antillephone',
    jurisdiction: 'キュラソー',
  },

  operator: 'Osmila N.V.',
  established: 2004,

  affiliate: {
    url: 'https://casinotsu.com/go/dafabet',
  },

  features: {
    bonusHeadline: '最大$500の100%入金ボーナス！賭け条件は10倍または20倍',
    highlights: [
      '国際的なサッカークラブのスポンサーでスポーツイベントが豊富',
      'プロモーションが豊富で賭け条件が比較的寛容',
      '幅広いゲームの種類と3,000種類以上のスロットを提供',
      '日本語での国際無料電話サポートが利用可能',
      'Androidユーザー向け専用アプリを完備'
    ],
    watchouts: [
      'ゲームセクションごとにウォレットが分かれており資金移動が必要',
      'ライブチャットサポートが提供されていない',
      'ユーザーレビューで出金遅延やアカウント閉鎖など深刻な問題が多数報告されている'
    ],
  },

  payments: ['bank-transfer', 'bitcoin', 'payz', 'vega-wallet', 'ethereum', 'usdt'],

  facts: [
    { label: '名称', value: 'Dafabet' },
    { label: '設立年', value: '2004年' },
    { label: '運営会社', value: 'Osmila N.V.' },
    { label: 'ライセンス', value: 'Antillephone (キュラソー)' },
    { label: 'ゲーム種類', value: 'スロット、ライブカジノ、2種類のスポーツブック' },
    { label: '日本語サポート', value: '国際無料電話、メール、Line/WhatsApp' },
    { label: 'VIPプログラム', value: 'あり (4レベル制)' }
  ],

  meta: {
    title: 'ダファベット（Dafabet）カジノレビュー｜ボーナス＆評判を紹介【2024年最新版】',
    description:
      'ダファベット（Dafabet）は、2004年設立の老舗カジノで、セルティックFCのスポンサーを務めるスポーツベットに強いサイトです。最大$500ボーナスや豊富なゲーム、専用アプリが魅力。',
  },
};
