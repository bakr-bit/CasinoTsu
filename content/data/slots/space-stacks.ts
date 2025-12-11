import type { SlotData } from './types';

export const space_stacks: SlotData = {
  slug: 'space-stacks',
  title: 'Space Stacks (スペース・スタックス)',
  hero: {
    title: 'Space Stacks (スペース・スタックス)',
    score: 3.4,
    scoreMax: 5,
    rtp: '96.23%',
    maxMultiplier: '5,000x',
    provider: 'Push Gaming',
    volatility: 'Medium',
    reels: '10',
    paylines: '-',
    minBet: '0.1',
    maxBet: '100',
    slotImageSrc: '/slots/space-stacks.jpg',
    highlights: [
      'Push Gaming社の新作スロット',
      'スロット・オブ・ザ・イヤー2位受賞',
      'ハイブリッド型ゲーム（テーブルゲーム＋ビデオスロット）',
      '戦略性の高いブロック選択システム',
      '3種類のユニークなボーナスゲーム（Astro, Flip, Apex）',
      '最大配当5,000倍',
    ],
    watchouts: [
      'Push Gaming社の日本市場撤退に伴い、2023年8月28日(木)以降、同社のゲーム配信が停止となりました。',
      'RTPはカジノによって異なる場合があります（96.23%, 95.25%など）。',
      'ボーナスゲーム購入機能はありません。',
      'ボラティリティはプレイヤーの戦略によって変動します。',
    ],
  },
  gameInfo: {
    intro: 'CasinoTsuがお届けする、Push Gaming社の新作スロット「Space Stacks」のご紹介です。Push Gaming社といえば、[レイザーシャーク](https://casinotsu.com/slots/razor-shark) や [ジャミンジャーズ](https://casinotsu.com/slots/jammin-jars) といった人気機種で知られています。今回は、可愛らしくポップな宇宙をテーマにしたスロットが登場しました👏\nこのSpace Stacksは、先日開催された[グローバルゲーミングアワード（Global Gaming Awards）2023](https://casinotsu.com/news/global-gaming-awards-london-2023) において、**スロット・オブ・ザ・イヤーの2位** を獲得した話題のスロットなんです(≧▽≦)／\nなんと、このSpace Stacksは、これまでのスロットとは一味違う、新しい遊び方ができるとのこと。CasinoTsuが、その魅力を徹底的にレビューいたします🚀',
    basicInfo: {
      rtp: '96.23%',
      volatility: 'Medium (プレイヤーの戦略により変動)',
      reels: '10',
      paylines: '-',
      minBet: '0.1',
      maxBet: '100',
      provider: 'Push Gaming',
      releaseDate: '2022-10-26',
    },
  },
  payoutTable: {
    title: 'シンボルと機能',
    symbols: [
      {
        name: 'インスタントプライズブロック',
        description: '直接的な配当倍率（x2～x50）を持つブロック。シンボルが到達すると配当を獲得。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
      },
      {
        name: '機能ブロック (Astro, Flip, Apex)',
        description: '特殊なボーナスゲームをトリガーするブロック。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: 'Max Win Block',
        description: '固定の最大配当5,000倍ブロック。',
        payout5: 'x5,000',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: 'Wildシンボル',
        description: '搭載されていません。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: 'Scatterシンボル',
        description: '搭載されていません。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
    ],
    maxPayout: '5,000x',
    notes: [
      'ペイアウトとRTPはプレイヤーが選択するブロックや戦略によって変動します。',
      'RTPはカジノによって異なる場合があります（96.23%または95.25%など）。',
      'WildシンボルやScatterシンボルは搭載されていません。',
    ],
  },
  features: {
    title: 'ゲームフィーチャー解説',
    items: [
      {
        name: 'ハイブリッド型ゲーム (ReelBets™)',
        description: 'テーブルゲームとビデオスロットの要素を融合させた革新的なシステム。',
      },
      {
        name: 'エンハンスメントシステム',
        description: 'シンボル落下前に配当を増加させるチャンス。追加値(+)や乗数(X)が付与される。',
      },
      {
        name: 'Astro ボーナスゲーム',
        description: 'ホイールゲーム。インスタント賞（配当+追加値）またはマルチプライヤー賞を獲得。平均配当約34.232倍。',
      },
      {
        name: 'Flip ボーナスゲーム',
        description: '6x6グリッドでの宝探しゲーム。数字シンボル（配当）またはロケットシンボル（マルチプライヤー上昇）を発見。平均配当約64.143倍。',
      },
      {
        name: 'Apex ボーナスゲーム',
        description: '複数の列が埋まるまで続くボーナスゲーム。ライフ制で、終了時に全列の配当に乗算が適用。平均配当約299.335倍。',
      },
    ],
  },
  similarGames: [
    {
      name: 'Razor Shark',
      href: 'https://casinotsu.com/slots/razor-shark',
      provider: 'Push Gaming',
      description: 'Push Gaming社の人気機種。',
    },
    {
      name: 'Jammin\' Jars',
      href: 'https://casinotsu.com/slots/jammin-jars',
      provider: 'Push Gaming',
      description: 'Push Gaming社の人気機種。',
    },
  ],
  prosCons: {
    pros: [
      'ユニークなハイブリッド型ゲームシステム',
      '戦略性の高いベットシステム',
      '3種類の魅力的なボーナスゲーム',
      '最大5,000倍の配当可能性',
      '可愛らしくポップなグラフィックとサウンド',
      'モバイルデバイスでの快適なプレイ',
    ],
    cons: [
      'Push Gaming社の日本市場撤退により、一部カジノでプレイできなくなる可能性',
      'RTPがカジノによって異なる場合がある',
      'ボーナスゲームの突入率が低い場合がある',
      'Wild/Scatterシンボルがない',
    ],
  },
  faq: [
    {
      q: 'Space Stacksで、ボーナスゲームの購入は可能ですか？',
      a: 'いいえ、ボーナスゲームの購入機能はございません。ボーナスゲームは、特定のブロックにシンボルが到達することでトリガーされます。',
    },
    {
      q: 'Space Stacksは、どのようなオンラインカジノでプレイできますか？',
      a: 'Bitz、Roobet、Oh My Spins！、Wonder Casino、Trust Diceなど、多くのオンラインカジノでプレイ可能です。ただし、地域によっては提供されていない場合もあります（例：アメリカ合衆国ニュージャージー州では確認されていません）。',
    },
  ],
  meta: {
    title: 'Space Stacks (スペース・スタックス)',
    description: '',
  },
};
