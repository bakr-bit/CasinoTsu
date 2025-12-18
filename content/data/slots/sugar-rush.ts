import type { SlotData } from './types';

export const sugar_rush: SlotData = {
  slug: 'sugar-rush',
  title: 'シュガーラッシュ（Sugar Rush）オンカジ・スロットレビュー',
  hero: {
    title: 'シュガーラッシュ（Sugar Rush）',
    score: 4.6,
    scoreMax: 5,
    rtp: '95.5%',
    maxMultiplier: 'x5,000',
    provider: 'Pragmatic Play',
    releaseDate: '2022-06-16',
    volatility: 'High',
    reels: '7',
    paylines: 'クラスターペイ',
    minBet: '$0.2',
    maxBet: '$100',
    slotImageSrc: '/slots/sugar-rush.jpg',
    highlights: [
      'お菓子をテーマにしたカラフルで甘い世界観',
      'クラスターペイシステムによる爽快な連鎖',
      'マルチプライヤースポット機能による高配当の可能性',
      'フリースピン中はマルチプライヤーが固定され、爆発力がアップ',
      'ボーナスフィーチャー購入機能で直接フリースピンへ突入可能',
    ],
    watchouts: [
      'ハイボラティリティのため、配当がない時間が続く可能性がある',
      'RTPはカジノによって異なる場合があるため、プレイ前に確認が必要',
      'ボーナス購入機能は高額なため、資金管理に注意が必要',
    ],
  },
  gameInfo: {
    intro: 'シュガーラッシュ（Sugar Rush）は、Pragmatic Play（プラグマティックプレイ）社がお届けする、お菓子をテーマにしたスロットゲームでございます。🍬 カラフルで甘い世界観がプレイヤーの皆様を夢のようなお菓子の国へと誘います。見た目の愛らしさとは裏腹に、高い爆発力を持つゲーム性も兼ね備えており、多くのプレイヤーに愛されております。',
    basicInfo: {
      rtp: '95.5% (※カジノによって異なる場合がございます。一般的には96.50%, 95.50%, 94.50%のいずれかが設定されています。プレイするカジノのゲーム画面でご確認ください。)',
      volatility: 'High',
      reels: '7',
      paylines: 'クラスターペイ',
      minBet: '$0.2',
      maxBet: '$100',
      provider: 'Pragmatic Play',
      releaseDate: '2022-06-16',
    },
  },
  payoutTable: {
    title: 'ペイアウト・配当表',
    symbols: [
      {
        name: 'キャンディ（赤）',
        description: '一番配当が高いシンボル。',
        payout5: 'x0.5',
      },
      {
        name: 'キャンディ（オレンジ）',
        payout5: 'x0.4',
      },
      {
        name: 'キャンディ（紫）',
        payout5: 'x0.3',
      },
      {
        name: 'グミ（ピンク）',
        payout5: 'x0.25',
      },
      {
        name: 'グミ（青）',
        payout5: 'x0.2',
      },
      {
        name: 'グミ（緑）',
        payout5: 'x0.15',
      },
      {
        name: 'クマ（オレンジ）',
        description: '低配当ながらも出現頻度が高いシンボル。',
        payout5: 'x0.1',
      },
    ],
    maxPayout: 'x5,000',
    notes: [
      '上記は7x7グリッドでクラスターサイズが最大（またはそれに近い場合）の配当例です。',
      '実際の配当はゲーム内のペイテーブルでご確認ください。',
      'スキャッターシンボル（ロリポップ）は3つ以上出現でフリースピン獲得。',
      'マルチプライヤーは配当成立スポットに付与され、連鎖で倍増します（最大128倍、フリースピン中は固定）。',
    ],
  },
  features: {
    title: 'ゲーム特徴・フィーチャー',
    items: [
      {
        name: 'クラスターペイ',
        description: '縦または横に5つ以上同じシンボルが隣接して出現すると配当成立となるシステム。連鎖してシンボルが消えていく爽快感が特徴。',
      },
      {
        name: 'タンブル（カスケード）機能',
        description: '配当成立シンボルは消滅し、新しいシンボルが落ちてくる。これにより1回のスピンで連続配当が発生する可能性がある。',
      },
      {
        name: 'マルチプライヤースポット',
        description: '配当成立シンボルがあった場所がマルチプライヤースポットとなり、再び配当が成立すると倍率が2倍になる。最大128倍まで増加し、フリースピン中は固定される。',
      },
      {
        name: 'フリースピン',
        description: 'スキャッターシンボル（ロリポップ）が3つ以上出現すると獲得。出現数に応じて10〜30回のフリースピンが付与される。フリースピン中はマルチプライヤースポットが固定される。',
      },
      {
        name: 'ボーナスフィーチャー購入機能',
        description: 'ベット額の100倍で直接フリースピンラウンドを開始できる機能。',
      },
    ],
  },
  categoryTags: {
    mechanics: ['cluster', 'bonus-buy', 'tumble'],
    volatilityLevel: 'high',
    features: ['free-spins', 'multiplier'],
  },
  meta: {
    title: 'シュガーラッシュ（Sugar Rush）オンカジ・スロットレビュー',
    description: '',
  },
};
