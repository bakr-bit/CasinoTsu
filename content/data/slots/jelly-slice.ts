import type { SlotData } from './types';

export const jelly_slice: SlotData = {
  slug: 'jelly-slice',
  title: 'Jelly Slice（ジェリー・スライス）スロット：キュートなゼリーが最大10,000倍の配当をお届け！',
  hero: {
    title: 'Jelly Slice',
    subheading: 'キュートなゼリーがお届けする、驚きの配当体験！',
    description: 'Hacksaw Gaming 社が贈る、最大1,048,576通りのペイラインと最大10,000倍の配当倍率を誇るメガウェイズスロット。',
    score: 4.2,
    scoreMax: 5,
    rtp: '96.24%',
    maxMultiplier: 'x10,000',
    provider: 'Hacksaw Gaming',
    releaseDate: '2024年5月16日',
    volatility: 'Medium to High',
    reels: '5',
    paylines: '最大1,048,576通り',
    minBet: '$0.10',
    maxBet: '$100',
    slotImageSrc: '/slots/jelly-slice.jpg',
    highlights: [
      'ユニークな「スライサーメカニクス」でシンボルを分割！',
      'メガウェイズシステムによる最大1,048,576通りのペイライン',
      '最大10,000倍の驚異的な配当倍率',
      'フリースピン（RAZOR-SHARPボーナスゲーム）搭載',
      'ボーナス購入機能で直接ボーナスラウンドへ突入可能',
    ],
    watchouts: [
      'RTPはカジノや購入機能によって変動する可能性あり',
      '中〜高ボラティリティのため、勝ち負けの波が大きい場合がある',
    ],
  },
  gameInfo: {
    intro: 'Jelly Sliceは、Hacksaw Gaming社が提供するメガウェイズタイプのスロットゲームです。CasinoTsu として、[RTP（還元率）](https://casinotsu.com/research/testing-methods) はカジノやプレイ状況によって変動する可能性があるため、通常プレイ時で94.32%〜96.24%、ボーナス購入時には96.33%〜96.39%と、やや高めの数値に設定されている点に注目しています。ボラティリティは中〜高程度とされており、頻繁に配当が発生するわけではありませんが、一度当たると大きな配当が期待できるゲーム性となっています。ベット額は$0.10から$100まで幅広く設定されており、多くのプレイヤーがご自身のプレイスタイルに合わせて調整可能です。',
    basicInfo: {
      rtp: '94.32% 〜 96.24% （フィーチャー購入時は96.33% 〜 96.39%）',
      volatility: 'Medium to High',
      reels: '5',
      paylines: '最大1,048,576通り（メガウェイズタイプ）',
      minBet: '$0.10',
      maxBet: '$100',
      provider: 'Hacksaw Gaming',
      releaseDate: '2024年5月16日',
    },
  },
  payoutTable: {
    title: 'ペイアウト・配当表',
    symbols: [
      {
        name: '高配当ゼリー',
        description: '5つ揃いで最大 x500',
        payout5: 'x500',
        payout4: 'x100',
        payout3: 'x20',
      },
      {
        name: '中配当ゼリー',
        description: '5つ揃いで最大 x400',
        payout5: 'x400',
        payout4: 'x80',
        payout3: 'x18',
      },
      {
        name: '低配当ゼリー',
        description: '5つ揃いで最大 x300',
        payout5: 'x300',
        payout4: 'x60',
        payout3: 'x15',
      },
      {
        name: 'A',
        description: '5つ揃いで x15',
        payout5: 'x15',
        payout4: 'x10',
        payout3: 'x5',
      },
      {
        name: 'K',
        description: '5つ揃いで x14',
        payout5: 'x14',
        payout4: 'x9',
        payout3: 'x4',
      },
      {
        name: 'Q',
        description: '5つ揃いで x13',
        payout5: 'x13',
        payout4: 'x8',
        payout3: 'x3',
      },
      {
        name: 'J',
        description: '5つ揃いで x12',
        payout5: 'x12',
        payout4: 'x7',
        payout3: 'x3',
      },
      {
        name: '10',
        description: '5つ揃いで x10',
        payout5: 'x10',
        payout4: 'x6',
        payout3: 'x2',
      },
      {
        name: 'ワイルド（虹色のスター）',
        description: 'スキャッターを除く全シンボルの代わりになる',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: 'スキャッター（FSエンブレム）',
        description: '5つ以上でフリースピンをトリガー',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
    ],
    maxPayout: '10,000倍',
    notes: [
      '上記はあくまで例であり、正確な配当倍率はゲーム内のペイテーブルをご確認ください。',
      'ワイルドシンボルは配当を生み出しません。',
      'スキャッターシンボルはフリースピンラウンドをトリガーします。',
    ],
  },
  features: {
    title: 'ゲーム特徴・フィーチャー',
    items: [
      {
        name: 'スライサーメカニクス',
        description: 'ランダムに出現し、シンボルを最大4つに分割して配当ラインを増やします。',
      },
      {
        name: 'メガウェイズシステム',
        description: 'リールごとにシンボル数が変動し、最大1,048,576通りの勝利方法を提供します。',
      },
      {
        name: 'カスケード機能',
        description: '配当成立後にシンボルが消滅し、新しいシンボルが落ちてくることで連続配当のチャンスがあります。',
      },
      {
        name: 'フリースピン (RAZOR-SHARPボーナスゲーム)',
        description: '5つ以上のスキャッターシンボルで突入し、スライサーの出現率がアップします。追加スピン獲得の可能性もあります。',
      },
      {
        name: 'ボーナス購入機能',
        description: '3種類のオプションがあり、ベット額の倍率を支払うことで直接ボーナスラウンドに突入できます。',
      },
      {
        name: 'ワイルドシンボル',
        description: 'スキャッター以外の全てのシンボルの代わりとなり、配当成立を補助します。',
      },
    ],
  },
  similarGames: [
    {
      name: 'スイートラッシュ・メガウェイズ',
      href: '/slots/sweet-rush-megaways',
      provider: 'Pragmatic Play',
      description: 'お菓子のモンスターとキャンディがモチーフのオンラインスロット🍬。メガウェイズシステムと、連鎖による配当増加が特徴です。',
    },
    {
      name: 'ハッピー・アップル',
      href: '/slots/happy-apples',
      provider: 'Play\'n GO',
      description: '最大100倍のマルチプライヤーや追加スピンで高配当が狙えるオンラインスロット🍎。こちらもフルーツやお菓子をテーマにした、明るく楽しい雰囲気です。',
    },
    {
      name: 'Sweetopia Royale',
      href: '/slots/sweetopia-royale',
      provider: 'Hacksaw Gaming',
      description: 'こちらもHacksaw Gaming社が提供する、お菓子がテーマのスロット。ユニークな機能と高配当の可能性を秘めています。',
    },
  ],
  prosCons: {
    pros: [
      'ユニークなスライサーメカニクスで高配当の可能性',
      'メガウェイズシステムによる膨大なペイライン',
      '最大10,000倍の驚異的な最大配当倍率',
      'キュートで魅力的なグラフィックとサウンド',
      'ボーナス購入機能で直接ボーナスラウンドへ突入可能',
      'モバイルデバイスに完全対応',
    ],
    cons: [
      '中〜高ボラティリティのため、勝ち負けの波が大きい',
      'RTPがカジノや状況によって変動する可能性がある',
      'ベースゲーム中の当たりが単調に感じることがある',
    ],
  },
  faq: [
    {
      q: 'ジェリー・スライスのRTP（還元率）は？',
      a: 'ジェリー・スライスの RTP は通常プレイ時で **96.24%** です。ただし、CasinoTsu として注意しておきたいのは、カジノやフィ―チャー購入時には、 **94.32%〜96.24%** （通常時）、 **96.33%〜96.39%** （フィーチャー購入時）と、 RTP が変動する可能性がある点です。プレイするカジノの RTP を確認することをおすすめします。',
    },
    {
      q: 'スライサー機能とは何？',
      a: 'スライサー機能は、ゲーム中にランダムで出現する特殊な演出です。スライサーが出現すると、その下にあるシンボルが **最大4つに分割（スライス）** されます。分割されたシンボルは、それぞれ独立したシンボルとして扱われるため、一気に配当ラインが増え、高配当に繋がる可能性が高まります。',
    },
    {
      q: 'Jelly Sliceはどのくらいの頻度で配当が発生しますか？',
      a: '『Jelly Slice』は中〜高ボラティリティのスロットであるため、配当の発生頻度はそれほど高くありません。しかし、一度配当が発生すると、スライサー機能やメガウェイズシステムにより、大きな配当が得られる可能性があります。CasinoTsu は、このゲームの爆発力に期待しています。',
    },
    {
      q: 'フリースピンはどのようにトリガーされますか？',
      a: 'フリースピン（RAZOR-SHARPボーナスゲーム）は、リール上に **5つ以上のスキャッターシンボル（FSエンブレム）** が着地することでトリガーされます。獲得できるフリースピンの回数は、着地したスキャッターシンボルの数によって決まります（5個〜20個）。',
    },
    {
      q: 'モバイルデバイスでプレイできますか？',
      a: 'はい、『Jelly Slice』はスマートフォンやタブレットなどのモバイルデバイスに完全対応しています。iOSおよびAndroidデバイスのブラウザから、いつでもどこでも快適にプレイできます。',
    },
  ],
  categoryTags: {
    mechanics: ['bonus-buy'],
    volatilityLevel: 'medium',
    features: ['free-spins', 'multiplier', 'bonus-round'],
  },
  meta: {
    title: 'Jelly Slice（ジェリー・スライス）スロット：キュートなゼリーが最大10,000倍の配当をお届け！',
    description: 'Hacksaw Gaming 社が贈る、最大1,048,576通りのペイラインと最大10,000倍の配当倍率を誇るメガウェイズスロット。',
  },
};
