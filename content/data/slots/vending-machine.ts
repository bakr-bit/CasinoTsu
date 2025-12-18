import type { SlotData } from './types';

export const vending_machine: SlotData = {
  slug: 'vending-machine',
  title: 'ベンディング・マシン（Vending Machine）スロットレビュー 🚀',
  hero: {
    title: 'ベンディング・マシン（Vending Machine）',
    score: 2.6,
    scoreMax: 5,
    rtp: '96.28%',
    maxMultiplier: 'x5,000',
    provider: 'Hacksaw Gaming',
    releaseDate: '2023-07-13',
    volatility: 'Medium (3/5)',
    reels: '5',
    paylines: '35',
    minBet: '$0.10',
    maxBet: '$100',
    slotImageSrc: '/slots/vending-machine.jpg',
    highlights: [
      '最大配当5,000倍',
      'ユニークなマルチプライヤー機能',
      'カスケード型スロット',
      'フリースピンモード搭載',
      'ボーナス購入機能あり',
    ],
    watchouts: [
      'RTPはカジノによって異なる場合がある',
      'マルチプライヤー機能の理解が必要',
    ],
  },
  gameInfo: {
    intro: '「ベンディング・マシン」は、Hacksaw Gamingによって開発された、ユニークなマルチプライヤー機能を搭載した5リール、5行のカスケード型スロットです。都会的な自販機をテーマにしたこのゲームは、リラックスできるサウンドとエキサイティングなゲームプレイを融合させています。',
    basicInfo: {
      rtp: '96.28% (他のバージョン: 94.26%, 92.32%, 88.28%)',
      volatility: 'Medium (3/5)',
      reels: '5',
      paylines: '35',
      minBet: '$0.10',
      maxBet: '$100',
      provider: 'Hacksaw Gaming',
      releaseDate: '2023-07-13',
    },
  },
  payoutTable: {
    title: 'ベンディング・マシン｜ペイアウト・配当表',
    symbols: [
      {
        name: 'スナック',
        payout5: '10.00x',
        payout4: '4.00x',
        payout3: '1.00x',
      },
      {
        name: 'サンドイッチ',
        payout5: '8.00x',
        payout4: '3.00x',
        payout3: '0.80x',
      },
      {
        name: 'ハンバーガー',
        payout5: '6.00x',
        payout4: '2.50x',
        payout3: '0.70x',
      },
      {
        name: 'ドーナツ',
        payout5: '5.00x',
        payout4: '2.00x',
        payout3: '0.60x',
      },
      {
        name: 'オレンジジュース',
        payout5: '4.00x',
        payout4: '1.50x',
        payout3: '0.50x',
      },
      {
        name: 'ソーダ',
        payout5: '3.00x',
        payout4: '1.20x',
        payout3: '0.40x',
      },
      {
        name: 'コーヒー',
        payout5: '2.50x',
        payout4: '1.00x',
        payout3: '0.30x',
      },
      {
        name: 'ティー',
        payout5: '2.00x',
        payout4: '0.80x',
        payout3: '0.20x',
      },
      {
        name: 'ワイルド (ポップコーン)',
        description: '他のシンボルの代わりとなり、配当成立をサポートします。',
        isSpecial: true,
      },
      {
        name: 'スキャッター (FS)',
        description: 'フリースピンモード突入の鍵となります。',
        isSpecial: true,
      },
      {
        name: 'ライトニングシンボル',
        description: 'マルチプライヤーライトを有効化します。',
        isSpecial: true,
      },
      {
        name: 'ドクロシンボル',
        description: 'フリースピン中にマルチプライヤーを無効化します。',
        isSpecial: true,
      },
      {
        name: 'マルチプライヤーブーストシンボル',
        description: 'マルチプライヤーの倍率を増加させます。',
        isSpecial: true,
      },
    ],
    maxPayout: 'ベット額の5,000倍',
    notes: [
      'ベット額が2ドルの場合の配当額です。',
      '35通りのペイラインが用意されています。',
      'ペイライン上に、左端から同じシンボルが3つ以上並ぶと配当獲得となります。',
    ],
  },
  features: {
    title: 'ベンディング・マシンのゲーム特徴・フィーチャー',
    items: [
      {
        name: 'カスケード型スロット',
        description: '配当成立時に新しいシンボルが落下してきて連鎖する',
      },
      {
        name: 'マルチプライヤーライト',
        description: '各行にランダムで表示されるマルチプライヤーが、ライトニングシンボル出現時に有効化され、配当を増加させる',
      },
      {
        name: '取り除きと落下',
        description: '配当が得られなかった場合に、低配当シンボルが取り除かれ、新しいシンボルが落下してくるチャンス機能',
      },
      {
        name: 'フリースピン (Lo-Fi Spins / Spin and Chill)',
        description: 'FSシンボル3つ以上で突入。マルチプライヤーが有効な状態で開始し、ドクロシンボル出現で終了。マルチプライヤーは累積していく。',
      },
      {
        name: 'ボーナス購入',
        description: 'Lo-Fi Spins (ベット額の100倍)、Spin and Chill (ベット額の200倍)、Bonus Hunt FeatureSpins (ベット額の3倍) が利用可能',
      },
    ],
  },
  similarGames: [
    {
      name: '1429 アンチャーテッド・シーズ',
      href: 'https://casinotsu.com/slots/1429-uncharted-seas',
      provider: 'Thunderkick',
      description: '海図がオシャレな高RTPスロット！拡張ワイルドが特徴。',
    },
    {
      name: 'ロッテン',
      href: 'https://casinotsu.com/slots/rotten',
      provider: 'Hacksaw Gaming',
      description: 'クールなゾンビたちが登場🧟。Hacksaw Gaming開発。',
    },
    {
      name: 'Stack \'em',
      provider: 'Hacksaw Gaming',
      description: '同プロバイダーHacksaw Gamingの人気作。ユニークなリスピン機能が魅力。',
    },
  ],
  prosCons: {
    pros: [
      'ユニークなマルチプライヤー機能',
      'スタイリッシュなグラフィックとサウンド',
      'カスケード機能による連鎖の楽しさ',
      'フリースピンモードでのマルチプライヤー累積',
      'ボーナス購入機能で直接フリースピンへ',
      'Mediumボラティリティで比較的安定したプレイ感',
    ],
    cons: [
      'RTPがカジノによって異なる場合がある',
      'マルチプライヤー機能の理解に少し時間がかかる場合がある',
      '最大配当倍率が他のハイボラティリティスロットより低い',
    ],
  },
  categoryTags: {
    mechanics: ['bonus-buy'],
    volatilityLevel: 'medium',
    features: ['free-spins', 'multiplier', 're-spins'],
  },
  meta: {
    title: 'ベンディング・マシン（Vending Machine）スロットレビュー 🚀',
    description: '',
  },
};
