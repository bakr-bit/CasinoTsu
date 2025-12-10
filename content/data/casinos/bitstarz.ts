import type { CasinoData } from './types';

export const bitstarz: CasinoData = {
  slug: 'bitstarz',
  name: 'BitStarz',
  nameJa: 'ビットスターズ',
  logo: '/assets/casino/bitstarz.png',
  rating: 4.3,

  license: {
    name: 'Curacao eGaming (Antillephone)',
    jurisdiction: 'キュラソー',
  },

  operator: 'Dama N.V.',
  established: 2014,

  affiliate: {
    url: 'https://casinotsu.com/go/bitstarz',
  },

  features: {
    bonusHeadline: '最大¥50,000 + 210フリースピンのウェルカムボーナス (賭け条件40倍)',
    highlights: [
      '仮想通貨と法定通貨に対応したマルチウォレット機能',
      '業界トップクラスの高品質なカスタマーサポート',
      '豊富なゲーム数と魅力的なプロモーション',
      '2014年設立の信頼性の高い老舗カジノ'
    ],
    watchouts: [
      'ボーナス利用時に禁止ゲームが多い',
      'ゲーム検索機能に改善の余地がある'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'litecoin', 'usdt', 'bank-transfer', 'payz'],

  facts: [
    { label: '名称', value: 'ビットスターズ (BitStarz)' },
    { label: '運営会社', value: 'Dama N.V.' },
    { label: '設立年', value: '2014年' },
    { label: 'ライセンス', value: 'キュラソー (Antillephone)' },
    { label: '最大ウェルカムボーナス', value: '¥50,000 + 210フリースピン' },
    { label: 'サポート対応', value: '日本語対応 (毎日12時間)' },
    { label: '特徴', value: '仮想通貨・法定通貨対応マルチウォレット' }
  ],

  meta: {
    title: 'BitStarz（ビットスターズ）レビュー【2024年最新版】 | マルチ通貨対応カジノ',
    description:
      'BitStarz（ビットスターズ）は2014年設立の老舗仮想通貨カジノ。Dama N.V.運営、キュラソーライセンス取得。最大¥50,000ボーナスと業界トップクラスのサポートが魅力。',
  },
};
