import type { SlotData } from './types';

export const sweet_cat_cafe: SlotData = {
  slug: 'sweet-cat-cafe',
  title: 'Sweet Cat Cafe',
  hero: {
    title: 'Sweet Cat Cafe',
    score: 3.4,
    scoreMax: 5,
    rtp: '96.5% (変動あり)',
    maxMultiplier: 'x59,800',
    provider: 'Golden Hero',
    releaseDate: '2023-05-02',
    volatility: 'High',
    reels: '3',
    paylines: '5',
    minBet: '$0.20',
    maxBet: '$15',
    slotImageSrc: '/slots/sweet-cat-cafe.jpg',
    highlights: [
      '選べるボーナスやリスピン、ホールド＆ウィンで稼ぎまくり！',
      '可愛いネコとヤンデレ店員が登場する高ボラ台を徹底レビュー！',
    ],
    watchouts: [
      '高ボラティリティのため、資金管理には十分注意が必要です。',
    ],
  },
  gameInfo: {
    intro: '「スイート・キャット・カフェ」は、猫カフェが舞台のパチスロ風スロット🎰 プロバイダーは、日本のゲーム開発会社ラクジン社によって制作され、日本向けパチスロ風スロットに定評のあるGolden Hero社のプラットフォームで提供されています。ホールド＆ウィンなど、フィーチャーてんこ盛りの猫カフェスロットをレッツ・チェック🐈',
    basicInfo: {
      rtp: '96.50% (※変動あり：96.07%～96.83%)',
      volatility: 'High (高)',
      reels: '3',
      paylines: '5',
      minBet: '$0.20',
      maxBet: '$15',
      provider: 'Golden Hero',
      releaseDate: '2023-05-02',
    },
  },
  payoutTable: {
    title: 'ペイアウト・配当表',
    symbols: [
      {
        name: 'ネコ（高配当）',
        payout3: '$5.00',
      },
      {
        name: 'トランプ A',
        payout3: '$1.50',
      },
      {
        name: 'トランプ K',
        payout3: '$1.25',
      },
      {
        name: 'トランプ Q',
        payout3: '$1.00',
      },
      {
        name: 'トランプ J',
        payout3: '$0.75',
      },
      {
        name: 'トランプ 10',
        payout3: '$0.50',
      },
    ],
    maxPayout: '59,800倍',
    notes: [
      'ワイルドシンボル: このゲームには、他のシンボルに代用されるワイルドシンボルは存在しません。',
      'ブランクシンボル: ブランクシンボルは配当を生み出しません。',
      'ハニーボトル: フリースピン中に登場し、勝利金に倍率を加算する可能性があります。',
      'シュガースプーン: フリースピン中に登場し、マルチプライヤーを収集・分配する役割を持ちます。',
      'トッピングシュガー: マルチプライヤーを画面上のマスに分配します。',
    ],
  },
  features: {
    title: 'ゲーム特徴・フィーチャー',
    items: [
      {
        name: 'リスピン (ボーナスチャンス機能)',
        description: 'ベル型のスキャッターが1つまたは2つ出現した場合、「ボーナスチャンス」として1回のリスピンが発動します🔔 このリスピン中は、出現したベル（スキャッター）はリールに固定され、ホールド＆ウィン のような状態になります。スキャッターが3つ以上出現すると、フリースピン突入のチャンスです🐾',
      },
      {
        name: 'フリースピン',
        description: 'スキャッターが3つ出現するとフリースピンへGO～🚀 フリースピンの数は、スキャッターに表示されるスピンの数によって異なり、最低5回からスタートします。フリースピン開始前に5つのケーキがシャッフルされ、ハニーボトルやマルチプライヤーなど、止まったケーキによって様々なボーナスが付与されます。',
      },
      {
        name: '選べるフリースピン（ケーキ選択）',
        description: 'プレイヤーは、フルーツケーキ、チョコケーキ、チーズケーキ、ゴールドケーキ、またはランダム選択の中から1つを選択できます。それぞれのケーキは、ミニゲーム中のRTPや特徴が異なります。',
      },
      {
        name: 'マルチプライヤー（トッピングシュガー）',
        description: 'マルチプライヤーシンボルに書かれた倍率を、ゲーム画面上の指定されたマスに分配する機能です。これにより、勝利金の倍率をさらに高めることが期待できます。',
      },
      {
        name: 'エクストラチャレンジ',
        description: 'フリースピン中に特定の条件を満たすと「COMPLETE！」と表示され、エクストラチャレンジが発動します。',
      },
      {
        name: 'シュガースプーンボーナス',
        description: 'エクストラチャレンジ中に発動する可能性のあるボーナス。スプーンの中に表示されるマルチプライヤーが、フリースピン中の全マスに加算されます。このボーナスは、フリースピン終了まで有効です。',
      },
      {
        name: '継続抽選フィーチャー',
        description: 'ボーナスステージ（フリースピン）の終了時に、継続抽選フィーチャーが発動することがあります。このフィーチャーに当選すると、ボーナスステージが続行し、フリースピンが5回追加されます。',
      },
      {
        name: 'ボーナス購入機能',
        description: 'フリースピンの購入は、スロット右上の『BUY』ボタンをクリックすることで可能です。購入価格は、選択するフリースピンの種類によって異なり、55.50倍から77.30倍の範囲で設定されています。ランダム選択の場合は64倍です。',
      },
    ],
  },
  similarGames: [
    {
      name: 'Sweet Cat Cafe Resort',
      href: 'https://casinotsu.com/slots/sweet-cat-cafe-resort',
      provider: 'Golden Hero',
      description: '「Sweet Cat Cafe」の続編にあたる作品。テーマはリゾートで、ドリンクがモチーフ。フィーチャーやRTP、ボラティリティ、最大配当倍率など、多くの点で共通しています。 CasinoTsu は、前作ファンには見逃せない作品であると評価しております。',
    },
    {
      name: 'Hawaiian Dream',
      href: 'https://casinotsu.com/slots/hawaiian-dream',
      provider: 'Golden Hero',
      description: 'Golden Hero社による人気のパチスロ風スロット。リール構成やゲームフローに共通点があります。 CasinoTsu は、このゲームも同様に日本のプレイヤーに愛されていることを確認しております。',
    },
    {
      name: 'Dragon Reborn',
      href: 'https://casinotsu.com/slots/dragon-reborn',
      provider: 'Golden Hero',
      description: 'アニメボイス搭載の学園×バトルスロット。Golden Hero社や類似のプロバイダーが開発した、演出重視のスロット。 CasinoTsu は、演出にこだわるプレイヤーにおすすめできる作品としております。',
    },
    {
      name: 'Doki Doki! Fireworks',
      href: 'https://casinotsu.com/slots/doki-doki-fireworks',
      provider: 'Golden Hero',
      description: '夏祭りをテーマにしたパチスロ風スロット。こちらもGolden Hero社が提供しており、独特のフィーチャーが楽しめます。 CasinoTsu は、日本の季節感を味わえるユニークなゲームとして推奨いたします。',
    },
  ],
  prosCons: {
    pros: [
      '最大59,800倍の驚異的な最大配当倍率',
      '高ボラティリティで一攫千金のチャンス',
      'リスピン、選べるフリースピン、エクストラチャレンジなど多彩なボーナスフィーチャー',
      'パチスロ風のゲーム性で日本のプレイヤーに人気',
      '可愛いキャラクターとアニメ風のグラフィック',
      'スマートフォンでのプレイに最適化されたモバイル対応',
      'ボーナス購入機能により、すぐにボーナスラウンドを楽しめる',
      '継続抽選フィーチャーによる連続ボーナスで興奮が持続',
    ],
    cons: [
      '高ボラティリティのため、資金管理に注意が必要',
      'ベースゲーム中は比較的静かな展開が多い',
      '一部の地域ではプレイできない場合がある',
    ],
  },
  meta: {
    title: 'Sweet Cat Cafe',
    description: '',
  },
};
