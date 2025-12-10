import type { CasinoData } from './types';

export const 2up: CasinoData = {
  slug: '2up',
  name: '2UP',
  nameJa: '2UP（2アップカジノ）',
  logo: '/assets/casino/2up.png',
  rating: 4,

  license: {
    name: 'Anjouan Gaming License',
    jurisdiction: 'アンジュアン',
  },

  operator: 'Uponly N.V.',
  established: 2018,

  affiliate: {
    url: 'https://casinotsu.com/go/2up',
  },

  features: {
    bonusHeadline: '限定200%初回入金ボーナス最大$2,000 & 500回フリースピン',
    highlights: [
      'ビットコイン含む15種類の仮想通貨と日本円に完全対応',
      '7,000種類以上の豊富なゲームラインナップとスポーツベット',
      'RTP最高99.596%の還元率が高いオリジナルゲーム',
      'VIPステータス移行制度があり、他カジノのVIPレベルを引き継げる',
      'ハウスエッジの一部が還元されるレーキバックを提供'
    ],
    watchouts: [
      '一部プレイヤーから出金問題や遅延の深刻な報告がある',
      'カスタマーサポートの対応に機能不全や遅延の懸念がある',
      '日本円での出金（銀行振込）には手数料（3.0% + 500円）がかかる'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'usdt', 'litecoin', 'dogecoin', 'ripple', 'solana', 'bank-transfer', 'match-pay'],

  facts: [
    { label: '設立年', value: '2018年' },
    { label: 'ライセンス', value: 'アンジュアン島' },
    { label: '運営会社', value: 'Uponly N.V.' },
    { label: 'ゲーム数', value: '約7,000種類以上' },
    { label: '対応通貨', value: '仮想通貨15種、日本円' },
    { label: 'KYC要件', value: '基本的に不要（状況により必要）' },
    { label: 'サポート', value: '日本語ライブチャット（24時間対応）' },
    { label: 'ボーナス賭け条件', value: '35倍（一体型）' }
  ],

  meta: {
    title: '2UP（2アップカジノ）レビュー【2024年最新版】',
    description:
      '2UP（2アップカジノ）は、仮想通貨15種類と日本円に対応したクリプトカジノです。限定200%初回入金ボーナス最大$2,000と7,000種類以上のゲームが魅力。出金問題の懸念点も解説します。',
  },
};
