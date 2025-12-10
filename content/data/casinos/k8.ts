import type { CasinoData } from './types';

export const k8: CasinoData = {
  slug: 'k8',
  name: 'K8 Casino',
  nameJa: 'K8カジノ',
  logo: '/assets/casino/k8.png',
  rating: 4.3,

  license: {
    name: 'Curaçao Gaming Control Board (GCB)',
    jurisdiction: 'キュラソー',
  },

  operator: 'Westward Way Tech N.V.',
  established: 2022,

  affiliate: {
    url: 'https://casinotsu.com/go/k8',
  },

  features: {
    bonusHeadline: '最大$1,800ウェルカムボーナス + 最大288回フリースピン',
    highlights: [
      '日本のパチンコ・パチスロ実機がオンラインで遊べる',
      'プロモーションの数が常時豊富でVIPプログラムも充実',
      '仮想通貨の購入手数料が無料',
      '豊富なゲーム数（21,000種類以上）'
    ],
    watchouts: [
      '日本語カスタマーサポートが不在（翻訳機能での対応）',
      'モバイルでのパチンコゲームの動作に遅延が生じる場合がある',
      'ビットコインの出金手数料が高くなる場合がある'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'usdt', 'litecoin', 'bitcoin-cash', 'shiba-inu', 'vega-wallet', 'sticpay'],

  facts: [
    { label: '名称', value: 'K8' },
    { label: '設立年', value: '2022年〜2023年' },
    { label: 'ライセンス', value: 'キュラソー (GCB)' },
    { label: '運営会社', value: 'Westward Way Tech N.V.' },
    { label: 'ゲーム総数', value: '21,000種類以上' },
    { label: '日本語サポート', value: 'ライブチャット/メール (翻訳対応)' },
    { label: 'KYC認証', value: '出金前に必須 (レベル2まで)' },
    { label: '特徴', value: '日本のパチンコ・パチスロ実機が遊べる' }
  ],

  meta: {
    title: 'K8カジノ（K8 Casino）レビュー【2024年最新版】パチンコ・パチスロが遊べる仮想通貨カジノ',
    description:
      'K8カジノは、日本のパチンコ・パチスロ実機がオンラインで楽しめる仮想通貨カジノです。最大$1,800ボーナスと豊富なプロモーション、VIPプログラムが魅力。信頼性の高いキュラソーライセンスを取得しており、安心してプレイできます。',
  },
};
