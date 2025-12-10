import type { CasinoData } from './types';

export const wsm_casino: CasinoData = {
  slug: 'wsm-casino',
  name: 'WSM Casino',
  nameJa: 'WSMカジノ',
  logo: '/assets/casino/wsm-casino.png',
  rating: 3.8,

  license: {
    name: 'Curacao eGaming',
    jurisdiction: 'キュラソー',
  },

  operator: 'MIBS N.V.',
  established: 2023,

  affiliate: {
    url: 'https://casinotsu.com/go/wsm-casino',
  },

  features: {
    bonusHeadline: '最大$25,000ウェルカムボーナス (200%還元)',
    highlights: [
      'ミーム文化を取り入れたユニークなコンセプトの仮想通貨カジノ',
      '最大$25,000の超豪華な初回入金ボーナス (200%還元)',
      '5,000種類以上のゲームと90社以上のプロバイダーを完備',
      'WSMトークンを含む24種類もの豊富な仮想通貨に対応',
      'カジノと統合された充実のスポーツブックを提供'
    ],
    watchouts: [
      '初回入金ボーナスの賭け条件が60倍以上と非常に厳しい',
      'ゲーム検索機能が不便で、初心者にはゲーム探しが難しい',
      '利用規約やプライバシーポリシーなど一部重要なページが英語表記のまま'
    ],
  },

  payments: ['bitcoin', 'bitcoin-cash', 'ethereum', 'polygon', 'ripple', 'shiba-inu', 'solana', 'tether'],

  facts: [
    { label: '名称', value: 'WSM Casino' },
    { label: '設立年', value: '2023年' },
    { label: 'ライセンス', value: 'キュラソー (8048/JAZ), アンジュアン' },
    { label: '運営会社', value: 'MIBS N.V.' },
    { label: 'ゲーム総数', value: '5,000種類以上' },
    { label: '対応通貨', value: '仮想通貨24種類 (法定通貨不可)' },
    { label: 'サポート', value: '24時間ライブチャット (日本語翻訳対応)' },
    { label: '本人確認(KYC)', value: '出金時に必要' }
  ],

  meta: {
    title: 'WSMカジノ（WSM Casino）レビュー【2024年最新版】| ミームコイン特化の仮想通貨カジノ',
    description:
      'WSMカジノはミームコインから生まれた最先端の仮想通貨カジノ。最大$25,000の豪華ボーナスと5,000種類以上のゲームを提供。24時間日本語サポート完備で、仮想通貨ユーザーにおすすめです。',
  },
};
