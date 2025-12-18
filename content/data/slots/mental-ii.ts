import type { SlotData } from './types';

export const mental_ii: SlotData = {
  slug: 'mental-ii',
  title: 'Mental II: 精神病院を舞台にした、CasinoTsuも驚愕の超高ボラティリティスロット',
  hero: {
    title: 'Mental II',
    subheading: '精神病院を舞台にした、CasinoTsuも驚愕の超高ボラティリティスロット',
    description: 'Nolimit City社がお届けする『Mental II』は、まさに想像の斜め上を行く、精神病院を舞台にしたダークでスリリングなオンラインカジノスロットです。最高99,999倍という驚異的な最大配当倍率、そして「INSANE」としか言いようのない超高ボラティリティは、プレイヤーに前例のない興奮をもたらすでしょう。その独特なテーマと複雑なゲームメカニクスは、経験豊かなプレイヤーをも魅了しますが、その難易度の高さゆえ、熟練者向けの作品と言えます。 CasinoTsuでは、この異色のスロットを詳細にレビューいたします。正確さが第一。興奮はその次。',
    score: 2.5,
    scoreMax: 5,
    rtp: '96.06%',
    maxMultiplier: 'x99,999',
    provider: 'Nolimit City',
    releaseDate: '2025-03-25',
    volatility: 'High',
    reels: '5',
    paylines: '108',
    minBet: '$0.20',
    maxBet: '$100',
    slotImageSrc: '/slots/mental-2.jpg',
    highlights: [
      '最大配当99,999倍',
      '超高ボラティリティ',
      '精神病院テーマ',
      'Nolimit City',
      'ボーナス購入機能',
    ],
    watchouts: [
      'ダークで不穏なテーマ',
      '高難易度',
      '一部プレイヤーには不快感を与える可能性',
    ],
  },
  gameInfo: {
    intro: 'Nolimit City社がお届けする『Mental II』は、まさに想像の斜め上を行く、精神病院を舞台にしたダークでスリリングなオンラインカジノスロットです。最高99,999倍という驚異的な最大配当倍率、そして「INSANE」としか言いようのない超高ボラティリティは、プレイヤーに前例のない興奮をもたらすでしょう。その独特なテーマと複雑なゲームメカニクスは、経験豊かなプレイヤーをも魅了しますが、その難易度の高さゆえ、熟練者向けの作品と言えます。 CasinoTsuでは、この異色のスロットを詳細にレビューいたします。正確さが第一。興奮はその次。',
    basicInfo: {
      rtp: '96.06%',
      volatility: 'High',
      reels: '5',
      paylines: '108',
      minBet: '$0.20',
      maxBet: '$100',
      provider: 'Nolimit City',
      releaseDate: '2025-03-25',
    },
  },
  payoutTable: {
    title: 'ペイアウト・配当表',
    symbols: [
      {
        name: '患者シンボル (高配当)',
        description: '5種類の患者シンボル。左端から3つ以上揃うと配当獲得。',
        payout5: 'x1.5',
        payout4: 'x0.8',
        payout3: 'x0.4',
      },
      {
        name: '骨シンボル (低配当)',
        description: '骨や臓器をモチーフにした低配当シンボル。左端から3つ以上揃うと配当獲得。',
        payout5: 'x0.8',
        payout4: 'x0.4',
        payout3: 'x0.2',
      },
      {
        name: '脳スキャッター',
        description: 'フリースピンをトリガーするスキャッターシンボル。',
        isSpecial: true,
      },
      {
        name: '生首スキャッター',
        description: 'より強力なフリースピンをトリガーするスキャッターシンボル。xWays、xSplit、Dead Patient、Wilds、または Patientシンボルに変化する可能性あり。',
        isSpecial: true,
      },
      {
        name: 'ワイルドシンボル',
        description: '他のシンボルの代わりとなり、配当成立を補助します。',
        isSpecial: true,
      },
      {
        name: 'xSplit',
        description: 'リール上のシンボルを分裂させ、自身も2つのワイルドに分裂。',
        isSpecial: true,
      },
      {
        name: 'xNudge Wild',
        description: 'リール全体が表示されるまでナッジし、ナッジごとにマルチプライヤーが増加。',
        isSpecial: true,
      },
      {
        name: 'xWays',
        description: '同じ3つのシンボルを表示し、リールを拡大。',
        isSpecial: true,
      },
      {
        name: 'xHole',
        description: '他のシンボルを吸い込み、サイズを分割。ワイルドシンボルへ変身。',
        isSpecial: true,
      },
    ],
    maxPayout: 'x99,999',
    notes: [
      '配当はベット額1ドルあたり。',
      'ペイラインは左端から右方向へ、隣接するリールに同じシンボルが3つ以上並ぶことで成立。',
      'スキャッターシンボルはペイラインに関係なく配当に影響を与える場合があります。',
    ],
  },
  features: {
    title: 'ゲーム特徴・フィーチャー',
    items: [
      {
        name: 'Fire Frames & Fire Reels',
        description: '停止したシンボルを分裂させ、勝利の可能性を高める。',
      },
      {
        name: 'Dead Patients',
        description: 'マルチプライヤー付きの患者シンボルが出現し、配当を増加させる。',
      },
      {
        name: 'Enhancer Cells',
        description: '解放されると、ワイルド、xSplit、xNudge Wild、患者シンボル、xWaysが出現。',
      },
      {
        name: 'xHole',
        description: 'シンボルを吸い込み、分割、ワイルドへ変身させる。',
      },
      {
        name: 'xMental Transform Feature',
        description: '特定のシンボルが他のシンボルへ変化する。',
      },
      {
        name: 'xGod® Feature',
        description: '最大勝利額が放出される可能性のある究極のフィーチャー。',
      },
      {
        name: '3種類のフリースピン',
        description: 'Bloodletting、Surgery、ExperiMENTALスピンがあり、それぞれ異なる特典が付与される。',
      },
      {
        name: 'Nolimit Bonus',
        description: 'ボーナス購入機能。フリースピンや特別フィーチャーを直接購入可能。',
      },
      {
        name: 'Nolimit Booster',
        description: 'ボーナス購入のコストとフィーチャー出現確率を調整するオプション。',
      },
    ],
  },
  similarGames: [
    {
      name: 'フォルサム・プリズン',
      href: '/slots/folsom-prison',
      provider: 'Nolimit City',
      description: '刑務所を舞台にしたスロット。ゴキブリと囚人がシンボルとなる、こちらも不気味な体験ができる作品です。',
    },
    {
      name: 'デッド・キャナリー',
      href: '/slots/dead-canary',
      provider: 'Nolimit City',
      description: '炭鉱を舞台にしたスロットですが、カナリアが爆発したり、ドワーフが爆発したりと、Nolimit Cityならではの過激な演出は健在です。',
    },
  ],
  prosCons: {
    pros: [
      '最大配当99,999倍という驚異的なポテンシャル',
      'Nolimit Cityならではのユニークで複雑なゲームメカニクス',
      '3種類の強力なフリースピンモード',
      'ボーナス購入機能（Nolimit Bonus）と調整オプション（Nolimit Booster）',
      'ダークで没入感のあるテーマとグラフィック',
      '高いボラティリティによるスリリングなゲームプレイ',
    ],
    cons: [
      'テーマや表現が一部のプレイヤーには不快感を与える可能性',
      '非常に高いボラティリティのため、初心者には難易度が高い',
      'ベースゲームが「空騒ぎ」と感じられる場合がある',
      'フィーチャーの出現頻度や公平性に関する懸念の声も一部存在する',
    ],
  },
  faq: [
    {
      q: '『Mental II』にフリースピン購入機能はありますか？',
      a: 'はい、『Mental II』にはボーナス購入機能（Nolimit Bonus）が豊富に用意されています。ベット額の100倍から6,666倍で購入できるフリースピンを始め、xホールやxメンタルといった特別なフィーチャーも購入可能です。Nolimit Boosterオプションを利用することで、購入コストとフィーチャー出現確率を調整することができます。CasinoTsuは、この機能がゲームへのアクセスを容易にしていると評価しています。',
    },
    {
      q: '『Mental II』の最大配当倍率はどのくらいですか？',
      a: '『Mental II』の最大配当倍率は、驚異の99,999倍に達します。ボラティリティは極めて高いですが、一攫千金のチャンスを秘めた、非常に爆発力のあるスロットです。',
    },
    {
      q: '『Mental II』は初心者でも遊べますか？',
      a: '『Mental II』は、多数の特別機能と非常に高いボラティリティを持つ複雑なスロットです。そのため、初心者の方にはあまりお勧めできるスロットではありません。初心者の方は、まず無料のデモプレイでゲームの仕組みを十分に理解することをお勧めします。CasinoTsuは、常にプレイヤーの皆様に最適なゲーム体験を提供できるよう、情報提供に努めております。',
    },
  ],
  categoryTags: {
    mechanics: ['bonus-buy'],
    volatilityLevel: 'high',
    features: ['free-spins', 'multiplier'],
  },
  meta: {
    title: 'Mental II: 精神病院を舞台にした、CasinoTsuも驚愕の超高ボラティリティスロット',
    description: 'Nolimit City社がお届けする『Mental II』は、まさに想像の斜め上を行く、精神病院を舞台にしたダークでスリリングなオンラインカジノスロットです。最高99,999倍という驚異的な最大配当倍率、そして「INSANE」としか言いようのない超高ボラティリティは、プレイヤーに前例のない興奮をもたらすでしょう。その独特なテーマと複雑なゲームメカニクスは、経験豊かなプレイヤーをも魅了しますが、その難易度の高さゆえ、熟練者向けの作品と言えます。 CasinoTsuでは、この異色のスロットを詳細にレビューいたします。正確さが第一。興奮はその次。',
  },
};
