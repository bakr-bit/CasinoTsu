import type { SlotData } from './types';

export const royal_masquerade: SlotData = {
  slug: 'royal-masquerade',
  title: 'Royal Masquerade（ロイヤル・マスカレード）スロットレビュー | CasinoTsu',
  hero: {
    title: 'Royal Masquerade',
    subheading: 'ロイヤル・マスカレード',
    description: '貴族の仮面舞踏会へようこそ！優雅な雰囲気の中で、高額配当獲得のチャンスをお楽しみください。',
    score: 4.3,
    scoreMax: 5,
    rtp: '96%',
    maxMultiplier: 'x10,000',
    provider: 'Play’n GO',
    releaseDate: '2015年10月1日',
    volatility: 'High',
    reels: '5',
    paylines: '10',
    minBet: '$0.01',
    maxBet: '$2',
    slotImageSrc: '/slots/royal-masquerade.jpg',
    highlights: [
      '毎スピンで必ず配当が発生するフリースピン機能',
      '積み重なって出現するスタックワイルド',
      '最大10,000倍のポテンシャル',
      '洗練されたグラフィックとサウンド',
    ],
    watchouts: [
      '高ボラティリティのため、配当頻度は低い傾向がある',
      'RTPはカジノによって異なる場合があるため、ペイテーブルでの確認が必要',
    ],
  },
  gameInfo: {
    intro: '華やかな貴族の仮面舞踏会へようこそ！『ロイヤル・マスカレード』は、Play’n GO社が贈る、ミステリアスで優雅な雰囲気のスロットゲームです。ヴェネツィアのカーニバルを思わせるテーマが、プレイヤーを非日常の世界へと誘います。美しいグラフィックと洗練されたサウンドは、ゲーム体験を一層豊かなものにしてくれるでしょう。このスロットの真の魅力は、その高いポテンシャルにあります。特にフリースピン機能は、高額配当獲得への期待感を大いに高めてくれます。',
    basicInfo: {
      rtp: '96.0%',
      volatility: 'High',
      reels: '5',
      paylines: '10',
      minBet: '$0.01',
      maxBet: '$2',
      provider: 'Play’n GO',
      releaseDate: '2015年10月1日',
    },
  },
  payoutTable: {
    title: 'ペイアウト・配当表',
    symbols: [
      {
        name: '貴婦人（紫）',
        payout5: 'x500',
        payout4: 'x100',
        payout3: 'x20',
      },
      {
        name: '男爵（緑）',
        payout5: 'x250',
        payout4: 'x50',
        payout3: 'x10',
      },
      {
        name: '演奏者（青）',
        payout5: 'x200',
        payout4: 'x40',
        payout3: 'x8',
      },
      {
        name: 'バイオリン（赤）',
        payout5: 'x150',
        payout4: 'x30',
        payout3: 'x6',
      },
      {
        name: '10',
        payout5: 'x100',
        payout4: 'x20',
        payout3: 'x4',
      },
      {
        name: 'J',
        payout5: 'x100',
        payout4: 'x20',
        payout3: 'x4',
      },
      {
        name: 'Q',
        payout5: 'x80',
        payout4: 'x15',
        payout3: 'x3',
      },
      {
        name: 'K',
        payout5: 'x80',
        payout4: 'x15',
        payout3: 'x3',
      },
      {
        name: 'A',
        payout5: 'x60',
        payout4: 'x10',
        payout3: 'x2',
      },
      {
        name: 'ワイルド（くちばし仮面）',
        description: 'スキャッターを除く全てのシンボルの代わりとなる。',
        payout5: 'x1000',
        payout4: 'x200',
        payout3: 'x40',
        isSpecial: true,
      },
      {
        name: 'スキャッター（黄金仮面）',
        description: '3つ以上でフリースピン突入。',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
    ],
    maxPayout: 'ベット額の10,000倍',
    notes: [
      '上記はベット額の倍率で表示されています。',
      'ワイルドシンボルは、スキャッター以外の全てのシンボルの代わりとなり、5つ揃うと最も高い配当（x1000）をもたらします。',
      'スタックワイルドとして、ワイルドシンボルは積み重なって出現することがあり、勝利のチャンスを大幅に高めます。',
    ],
  },
  features: {
    title: 'ゲームの特徴・フィーチャー',
    items: [
      {
        name: 'ワイルドシンボル',
        description: '「くちばし仮面」のシンボル。スキャッターを除く他のシンボルの代わりとなり、配当成立をサポートします。リール上に積み重なって出現する（スタックワイルド）こともあり、高配当に繋がりやすくなります。5つ揃うとステークの100倍の配当。',
      },
      {
        name: 'スキャッターシンボル',
        description: '「黄金仮面」のシンボル。リール上に3つ以上停止すると、フリースピン「Win Spins」機能が発動します。',
      },
      {
        name: 'フリースピン「Win Spins」機能',
        description: '5回のフリースピンから開始され、毎スピンで必ず何らかの配当が発生します。フリースピン中にスキャッターが出現すると、2回の追加スピンが付与され、最大20回まで延長可能です。',
      },
      {
        name: 'ギャンブル機能',
        description: '配当獲得後、カードの色（2倍）またはスート（4倍）を当てて賞金を倍増させるチャンスがあります。ただし、外れた場合は配当がゼロになります。',
      },
    ],
  },
  similarGames: [
    {
      name: 'Book of Dead',
      href: '/slots/book-of-dead',
      provider: 'Play’n GO',
      description: 'エジプト冒険テーマの定番スロット。高いボラティリティと爆発力が魅力です。',
    },
    {
      name: 'Moon Princess',
      href: '/slots/moon-princess',
      provider: 'Play’n GO',
      description: '可愛らしいプリンセスたちが登場する、連鎖配当とマルチプライヤーが特徴のスロットです。',
    },
    {
      name: 'Reactoonz',
      href: '/slots/reactoonz-2',
      provider: 'Play’n GO',
      description: 'ユニークなエイリアンがグリッド上を動き回る、クラスターペイ方式のスロットです。',
    },
  ],
  prosCons: {
    pros: [
      '毎スピンで必ず配当が発生するフリースピン機能',
      '積み重なって出現するスタックワイルド',
      '最大10,000倍のポテンシャル',
      '洗練されたグラフィックとサウンド',
      'モバイル対応でいつでもどこでもプレイ可能',
      'ギャンブル機能でリスクを冒して高配当を狙える',
    ],
    cons: [
      '高ボラティリティのため、配当頻度は低い傾向がある',
      'RTPはカジノによって異なる場合があるため、ペイテーブルでの確認が必要',
      'ギャンブル機能はリスクを伴う',
    ],
  },
  categoryTags: {
    mechanics: ['cluster'],
    volatilityLevel: 'high',
    features: ['free-spins', 'multiplier'],
  },
  meta: {
    title: 'Royal Masquerade（ロイヤル・マスカレード）スロットレビュー | CasinoTsu',
    description: '貴族の仮面舞踏会へようこそ！優雅な雰囲気の中で、高額配当獲得のチャンスをお楽しみください。',
  },
};
