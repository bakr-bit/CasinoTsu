import type { CasinoData } from './types';

export const parimatch: CasinoData = {
  slug: 'parimatch',
  name: 'Parimatch',
  nameJa: 'パリマッチ',
  logo: '/assets/casino/parimatch.png',
  rating: 4.2,

  license: {
    name: 'Curaçao Gaming Control Board (GCB)',
    jurisdiction: 'キュラソー',
  },

  operator: 'OLISTEK N.V.',
  established: 2024,

  affiliate: {
    url: 'https://casinotsu.com/go/parimatch',
  },

  features: {
    bonusHeadline: '選べる4種類のウェルカムオファー！最大$1,200ボーナス＋フリースピン200回',
    highlights: [
      '選べる4種類のウェルカムオファー（カジノ/スポーツ）が用意されている',
      'カジノゲームとスポーツベットをシームレスに楽しめる独自のサイトデザイン',
      '8,900種類以上の豊富なゲームラインナップ',
      'ゲームをプレイしながらボーナスを獲得できる「クエスト」機能',
      '24時間年中無休の完全日本語ライブチャットサポート'
    ],
    watchouts: [
      '口コミがまだ少なく、不明な点が多い',
      '一部機能（VIPプログラム、電話サポート）は準備中',
      '一部プレイヤーから入出金やサポートの質に関する苦情が報告されている'
    ],
  },

  payments: ['bank-transfer', 'bitcoin', 'ethereum', 'litecoin', 'usdt', 'vega-wallet', 'visa'],

  facts: [
    { label: '名称', value: 'Parimatch' },
    { label: 'ローンチ', value: '2024年11月' },
    { label: 'ライセンス', value: 'キュラソー（GCB）' },
    { label: '運営会社', value: 'OLISTEK N.V.' },
    { label: 'ゲーム数', value: '8,900種類以上' },
    { label: '日本語サポート', value: '24時間年中無休（ライブチャット・Eメール）' },
    { label: 'ウェルカムボーナス', value: '最大$1,200 + FS 200回' },
    { label: '入金不要ボーナス', value: '5,250円分（限定）' }
  ],

  meta: {
    title: 'パリマッチ（Parimatch）カジノレビュー【2025年最新版】選べるウェルカムボーナスを徹底解説',
    description:
      '2024年11月オープンのパリマッチ（Parimatch）を徹底レビュー！最大$1,200ボーナスと8,900種以上のゲーム、スポーツベットが魅力。ライセンスや入出金方法、評判を解説します。',
  },
};
