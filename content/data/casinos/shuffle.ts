import type { CasinoData } from './types';

export const shuffle: CasinoData = {
  slug: 'shuffle',
  name: 'Shuffle',
  nameJa: 'シャッフルカジノ',
  logo: '/assets/casino/shuffle.png',
  rating: 4,

  license: {
    name: 'Antillephone',
    jurisdiction: 'キュラソー',
  },

  operator: 'Natural Nine B.V.',
  established: 2023,

  affiliate: {
    url: 'https://casinotsu.com/go/shuffle',
  },

  features: {
    bonusHeadline: '最大$2,000ウェルカムボーナス (200%)',
    highlights: [
      '独自のSHFLトークンを利用し、資産運用とベットを両立可能',
      '仮想通貨での入出金に制限がない',
      'オリジナルゲームは最大99%の高いRTPを誇る',
      '4,000種類以上のスロットと70種類以上のスポーツベットを提供',
      'ハウスエッジの最大70％を還元する高還元率VIPプログラム'
    ],
    watchouts: [
      '入出金は仮想通貨のみに対応',
      'Trustpilotの評価は2.9と賛否両論（出金遅延やアカウント凍結の報告あり）',
      '日本語サポートは自動翻訳機能を利用'
    ],
  },

  payments: ['bitcoin', 'usdt', 'ethereum', 'litecoin', 'dogecoin', 'ripple', 'solana', 'shfl'],

  facts: [
    { label: '名称', value: 'シャッフルカジノ (Shuffle)' },
    { label: '設立年', value: '2023年' },
    { label: 'ライセンス', value: 'Antillephone (キュラソー)' },
    { label: '運営会社', value: 'Natural Nine B.V.' },
    { label: '対応通貨', value: '仮想通貨17種類' },
    { label: '入出金制限', value: '制限なし (仮想通貨)' },
    { label: 'ゲーム数', value: '4,000種類以上' },
    { label: '日本語サポート', value: '24時間ライブチャット (自動翻訳)' }
  ],

  meta: {
    title: 'Shuffle（シャッフルカジノ）レビュー | SHFLトークンが魅力の仮想通貨カジノ【2024年最新版】',
    description:
      '2023年ローンチのシャッフルカジノ（Shuffle）を徹底レビュー。独自のSHFLトークンによる資産運用とベットの両立が魅力。4,000種以上のゲームとスポーツベット、入出金制限なしのクリプトカジノです。',
  },
};
