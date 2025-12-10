import type { CasinoData } from './types';

export const pachipachi: CasinoData = {
  slug: 'pachipachi',
  name: 'PachiPachi Casino',
  nameJa: 'パチパチカジノ',
  logo: '/assets/casino/pachipachi.png',
  rating: 3.8,

  license: {
    name: 'Anjouan Gaming License',
    jurisdiction: 'アンジュアン',
  },

  operator: 'Evonix Limitada',
  established: 2020,

  affiliate: {
    url: 'https://casinotsu.com/go/pachipachi',
  },

  features: {
    bonusHeadline: '初回〜3回目入金で最大300%マッチボーナス（賭け条件30倍〜）',
    highlights: [
      'ドッグレースやビンゴなどユニークでバラエティ豊かなゲームラインナップ',
      '日本マーケットに特化したサイト設計とゲームセレクション',
      '毎日8時間、土日祝日も対応する充実した日本語サポート',
      '毎週損失額の10%が戻ってくるキャッシュバックボーナス',
      'Bitcoin, Ethereum, Rippleなど多様な仮想通貨に対応'
    ],
    watchouts: [
      'スロットゲームの種類が、他カジノと比較してやや少なめ',
      'VIPプログラムや会員制度が存在しない',
      'デスクトップ版の操作性に改善の余地あり'
    ],
  },

  payments: ['bitcoin', 'ethereum', 'litecoin', 'tether', 'bank-transfer', 'payz', 'vega-wallet', 'visa', 'mastercard', 'jcb'],

  facts: [
    { label: '名称', value: 'PachiPachi' },
    { label: 'ローンチ', value: '2020年' },
    { label: '運営会社', value: 'Evonix Limitada' },
    { label: 'ライセンス', value: 'コモロ政府（Anjouan Gaming Board）' },
    { label: '最小入金額', value: '$10' },
    { label: '最小出金額', value: '$15' },
    { label: '日本語サポート', value: 'ライブチャット（毎日8時間）' },
    { label: '対応通貨', value: '日本円(JPY), 米ドル(USD), ユーロ(EUR)' }
  ],

  meta: {
    title: 'パチパチカジノ（PachiPachi Casino）レビュー｜入金不要ボーナス・評判【2025年最新版】',
    description:
      '2020年設立のパチパチカジノを徹底レビュー。最大300%ウェルカムボーナスや毎週10%キャッシュバックが魅力。ドッグレースやビンゴなどユニークなゲームが豊富で、充実した日本語サポートを提供。入出金方法や安全性、評判を詳しく解説します。',
  },
};
