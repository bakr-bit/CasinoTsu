import type { SlotData } from './types';

export const emojiplanet: SlotData = {
  slug: 'emojiplanet',
  title: 'Emojiplanet',
  hero: {
    title: 'Emojiplanet',
    subheading: '絵文字プラネット（Emoji Planet）は、NetEnt社よりリリースされた、ユニークな絵文字をテーマにしたビデオスロットです。',
    description: '私たちが日頃から親しんでいるお馴染みの絵文字がシンボルとして登場し、ポップで楽しい雰囲気を演出しています。 CasinoTsu では、この魅力的なスロットの基本情報からゲームの特徴、さらにはプレイ可能なカジノまで、詳細にご紹介いたします。',
    score: 3.4,
    scoreMax: 5,
    rtp: '96.4%',
    maxMultiplier: 'x5,000',
    provider: 'NetEnt',
    releaseDate: '2017年8月22日',
    volatility: 'Medium',
    reels: '6',
    paylines: 'Cluster Pays',
    minBet: '$0.20',
    maxBet: '$200',
    slotImageSrc: '/slots/emojiplanet.jpg',
    highlights: [
      'ユニークな絵文字テーマ',
      'クラスターペイシステムとアバランチ機能',
      '5つの異なるフィーチャー（爆弾、ピザ、キスマーク、ロケット、ダブルハート）',
      '最大10,000倍のポテンシャル',
    ],
    watchouts: [
      '中毒性が高いため、予算管理が重要',
      'フィーチャーの出現にはある程度の運が必要',
    ],
  },
  gameInfo: {
    intro: 'Emojiplanet は、ユニークなゲームメカニクスと魅力的な機能を持つスロットです。以下にその基本情報をまとめました。正確さが第一。興奮はその次。',
    basicInfo: {
      rtp: '96.4%',
      volatility: 'Medium',
      reels: '6',
      paylines: 'Cluster Pays',
      minBet: '$0.20',
      maxBet: '$200',
      provider: 'NetEnt',
      releaseDate: '2017年8月22日',
    },
  },
  payoutTable: {
    title: '配当表',
    symbols: [
      {
        name: 'スマイリー顔',
        description: '最高配当シンボル',
        payout5: 'x500',
        payout4: 'x100',
        payout3: 'x50',
      },
      {
        name: 'ロケット',
        payout5: 'x100',
        payout4: 'x50',
        payout3: 'x20',
      },
      {
        name: 'キスマーク',
        payout5: 'x50',
        payout4: 'x25',
        payout3: 'x15',
      },
      {
        name: 'ピザ',
        payout5: 'x30',
        payout4: 'x15',
        payout3: 'x10',
      },
      {
        name: '爆弾',
        payout5: 'x20',
        payout4: 'x10',
        payout3: 'x5',
      },
      {
        name: 'ダブルハート',
        payout5: 'x15',
        payout4: 'x8',
        payout3: 'x4',
      },
      {
        name: '星（ワイルド）',
        description: '全ての通常シンボルの代わり',
        isSpecial: true,
      },
    ],
    maxPayout: 'x5,000 (ラインベット) / 10,000x (ステーク)',
    notes: [
      '配当はクラスターペイシステムに基づきます。',
      '5つ以上の同一シンボルが縦横に隣接すると勝利となります。',
      'ワイルドシンボルは全ての通常シンボルの代わりとなります。',
    ],
  },
  features: {
    title: 'ゲーム特徴・フィーチャー',
    items: [
      {
        name: 'アバランチ機能',
        description: '勝利シンボルが爆発して消滅し、新しいシンボルが落下してくる連続落下機能。',
      },
      {
        name: '絵文字メーターと5つのフィーチャー',
        description: '5種類の絵文字（爆弾、ピザ、キスマーク、ロケット、ダブルハート）メーターが貯まると、対応する特殊フィーチャーが発動。',
      },
      {
        name: '爆弾フィーチャー',
        description: 'ランダムな8つのシンボルが破壊され、ベット額の5倍から100倍までの賞金が付与されます。',
      },
      {
        name: 'ピザフィーチャー',
        description: 'ランダムな3x3グリッドがピザシンボルに変化します。',
      },
      {
        name: 'キスマークフィーチャー',
        description: '3つの「スティッキーワイルド」が登場し、勝利に貢献するたびに命を消費します。',
      },
      {
        name: 'ロケットフィーチャー',
        description: '勝利コンボを形成したリールに、最大10個のワイルドシンボルが出現します。',
      },
      {
        name: 'ダブルハートフィーチャー',
        description: 'メーターが満杯になった回数に応じて、ペイアウトにマルチプライヤーが適用されます。',
      },
      {
        name: 'ワイルドシンボル',
        description: '星の形をしたワイルドシンボルは、全ての通常シンボルの代わりとなり、勝利コンボの形成を助けます。',
      },
    ],
  },
  similarGames: [
    {
      name: 'Jammin\' Jars',
      provider: 'Push Gaming',
      description: 'フルーツシンボルがクラスターを形成し、移動するワイルドやマルチプライヤーが特徴の人気のスロットです。',
    },
    {
      name: 'Reactoonz',
      provider: 'Play\'n GO',
      description: 'カラフルなエイリアンが登場し、アバランチ機能と様々な「クイック」機能が魅力のクラスターペイ型スロットです。',
    },
  ],
  prosCons: {
    pros: [
      'ユニークで楽しい絵文字テーマ',
      'クラスターペイとアバランチ機能による連続勝利の可能性',
      '5種類の異なるフィーチャーがゲームに深みを与える',
      '最大10,000倍という高い最大配当ポテンシャル',
      'NetEnt社の高品質なグラフィックとサウンド',
      'モバイルデバイスに完全対応',
      '幅広いベット範囲',
    ],
    cons: [
      'フィーチャーの出現にはある程度の運が必要',
      '中毒性が高いため、自己管理が重要',
      'ボラティリティがミディアムのため、ハイローラーには物足りない可能性も',
    ],
  },
  faq: [
    {
      q: 'Emojiplanet はどこのカジノで遊ぶことができますか？',
      a: 'カジ旅, ベラジョン, エルドアカジノなど、多くのオンラインカジノでプレイ可能です。 CasinoTsu が上記「プレイ可能なカジノ」セクションにて、厳選したカジノをご紹介しておりますので、ご参照ください。',
    },
    {
      q: 'Emojiplanet の特徴は何ですか？',
      a: '5つの特別なフィーチャー（爆弾、ピザ、キスマーク、ロケット、ダブルハート）が搭載されており、これらは特定の絵文字シンボルを12個以上集める（アバランチ機能で消滅させる）ことで発動します。また、クラスターペイシステムとアバランチ機能（連鎖落下）が特徴的です。',
    },
  ],
  categoryTags: {
    mechanics: ['cluster', 'tumble'],
    volatilityLevel: 'medium',
    features: ['multiplier'],
  },
  meta: {
    title: 'Emojiplanet',
    description: '私たちが日頃から親しんでいるお馴染みの絵文字がシンボルとして登場し、ポップで楽しい雰囲気を演出しています。 CasinoTsu では、この魅力的なスロットの基本情報からゲームの特徴、さらにはプレイ可能なカジノまで、詳細にご紹介いたします。',
  },
};
