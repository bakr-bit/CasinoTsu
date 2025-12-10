import type { CasinoData } from './types';

export const duelbits: CasinoData = {
  slug: 'duelbits',
  name: 'Duelbits',
  nameJa: 'デュエルビッツ',
  logo: '/assets/casino/duelbits.png',
  rating: 4.2,

  license: {
    name: 'Gaming Curacao',
    jurisdiction: 'キュラソー',
  },

  operator: 'Liquid Entertainment N.V.',
  established: 2020,

  affiliate: {
    url: 'https://casinotsu.com/go/duelbits',
  },

  features: {
    bonusHeadline: '賭け条件なしのフリースピン500回＆最大48.5%の驚異的なレーキバック！',
    highlights: [
      '豪華ウェルカムボーナス＆フリースピンを提供',
      '最大48.5%の超高還元レーキバックが魅力',
      'オリジナルゲームやスポーツベットも充実',
      'カーソルを重ねるとRTPが表示される機能が便利',
      'しっかりとした日本人サポートが対応'
    ],
    watchouts: [
      '決済方法が仮想通貨中心（法定通貨の選択肢は限定的）',
      '高額勝利時の出金遅延や拒否の報告がある',
      'KYC認証が厳格で問題が発生するケースがある'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'litecoin', 'tether', 'ripple', 'shiba-inu', 'visa', 'mastercard', 'jcb'],

  facts: [
    { label: '名称', value: 'Duelbits' },
    { label: 'ローンチ', value: '2020年' },
    { label: 'ライセンス', value: 'Gaming Curacao' },
    { label: '運営会社', value: 'Liquid Entertainment N.V.' },
    { label: 'VIPプログラム', value: 'あり（最大48.5%レーキバック）' },
    { label: '総ゲーム数', value: '約4,200～5,000種類' },
    { label: '日本語サポート', value: 'ライブチャットで対応（24時間）' },
    { label: '出金手数料', value: '無料' }
  ],

  meta: {
    title: 'Duelbits（デュエルビッツ）レビュー｜賭け条件なしフリースピン500回【2024年最新版】',
    description:
      'デュエルビッツ（Duelbits）は2020年設立の仮想通貨特化型カジノ。賭け条件なしのフリースピン500回と最大48.5%のレーキバックが魅力。スポーツベットやオリジナルゲームも充実。キュラソーライセンスで安全にプレイ可能。',
  },
};
