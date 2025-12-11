import type { SlotData } from './types';

export const dreams_of_gold: SlotData = {
  slug: 'dreams-of-gold',
  title: 'Dreams of Gold',
  hero: {
    title: 'Dreams of Gold',
    subheading: 'ドリーム・オブ・ゴールド',
    description: '日本のパチスロにそっくりということで日本人プレイヤーをざわつかせたハワイアンドリームを開発したGolden Hero／ゴールデンヒーローとJTG。続々と同系統のスロットを開発し、今度はカエル？をテーマにしたスロットのDreams of Gold／ドリーム・オブ・ゴールドが誕生！早速レビューしてみましょ♪ 🐸',
    score: 2.5,
    scoreMax: 5,
    rtp: '96.41%',
    maxMultiplier: '2,000x〜5,000x',
    provider: 'Golden Hero',
    releaseDate: '2020年3月13日',
    volatility: '高',
    reels: '3',
    paylines: '5',
    minBet: '$0.2',
    maxBet: '$100',
    slotImageSrc: '/images/dreams-of-gold-top.jpg',
    highlights: [
      '日本のパチスロ風ゲーム性',
      '3x3リール、5ペイライン',
      '高ボラティリティ',
      'リスピンからビッグウィンラッシュへの連鎖',
      '初心者から経験者まで楽しめる',
    ],
    watchouts: [
      'カエルのグラフィックが一部プレイヤーにはグロテスクに感じられる可能性',
      '高ボラティリティのため、勝利頻度は低い傾向がある',
      '一部情報源では提供終了の可能性あり、プレイ前に確認推奨',
    ],
  },
  gameInfo: {
    intro: '「ドリーム・オブ・ゴールド」は、Golden Hero GamesとJTGがタッグを組んで開発した、日本のパチスロファンに馴染み深いゲーム体験を提供するオンラインスロットです。特に、同開発元の「ハワイアンドリーム」で人気を博したゲーム性が、本作でも踏襲されています。',
    basicInfo: {
      rtp: '96.41%',
      volatility: '高',
      reels: '3',
      paylines: '5',
      minBet: '$0.2',
      maxBet: '$100',
      provider: 'Golden Hero',
      releaseDate: '2020年3月13日',
    },
  },
  payoutTable: {
    title: 'ドリーム・オブ・ゴールド：シンボルと配当',
    symbols: [
      {
        name: 'カエル',
        description: 'ビッグウィンシンボル',
        payout5: '-',
        payout4: '-',
        payout3: 'x50',
      },
      {
        name: '鯉',
        description: '高配当シンボル',
        payout5: '-',
        payout4: '-',
        payout3: 'x20',
      },
      {
        name: '青い宝石',
        description: '中配当シンボル',
        payout5: '-',
        payout4: '-',
        payout3: 'x15',
      },
      {
        name: '緑の宝石',
        description: '中配当シンボル',
        payout5: '-',
        payout4: '-',
        payout3: 'x10',
      },
      {
        name: '赤の宝石',
        description: '低配当シンボル',
        payout5: '-',
        payout4: '-',
        payout3: 'x8',
      },
      {
        name: '黄色の宝石',
        description: '低配当シンボル',
        payout5: '-',
        payout4: '-',
        payout3: 'x5',
      },
      {
        name: '紫の宝石',
        description: '低配当シンボル',
        payout5: '-',
        payout4: '-',
        payout3: 'x3',
      },
      {
        name: 'リスピンシンボル',
        description: 'ベースゲームで3回連続揃えるとフリースピン獲得',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
      {
        name: 'Golden 8 (Wild)',
        description: '他のシンボルの代わりになる',
        payout5: '-',
        payout4: '-',
        payout3: '-',
        isSpecial: true,
      },
    ],
    maxPayout: 'ステーク額の2,000倍〜5,000倍',
    notes: [
      '最大キャッシュアウト: 最高ベット額 ($100) での1スピンあたり最大$200,000',
      'ジャックポット: なし',
      'ボーナス購入機能: なし',
    ],
  },
  features: {
    title: 'ゲームの特徴とフィーチャー',
    items: [
      {
        name: 'リスピン',
        description: 'ベースゲームでリスピンシンボルを3回連続で揃えると、背景色が変化し、最終的に8回のフリースピン（FROG RUSH）を獲得できます。',
      },
      {
        name: 'FROG RUSH (フリースピン)',
        description: '8回のフリースピン中にビッグウィンを3回獲得すると、賞金が増加し、追加フリースピンのチャンスがあります。ビッグウィン3回達成でBIG WIN RUSHへ突入します。',
      },
      {
        name: 'BIG WIN RUSH',
        description: '高配当獲得のチャンスがあるフィーチャー。賞金が大幅に増加する可能性があり、非常にエキサイティングな体験ができます。',
      },
      {
        name: 'GOODESS CHALLENGE (ゴッデスチャレンジ)',
        description: 'ランダムにトリガーされる可能性があり、プレイヤーが選ぶカエル（ハイボラ、中ボラ、ローボラ）によってリスクとリターンのバランスが変わります。',
      },
    ],
  },
  similarGames: [
    {
      name: 'ハワイアンドリーム (Hawaiian Dream)',
      href: 'https://casinotsu.com/slots/hawaiian-dream',
      provider: 'Golden Hero',
      description: 'ドリーム・オブ・ゴールドの前身とも言える人気スロット。南国リゾートをテーマに、リスピンや連チャンモードが特徴です。',
    },
    {
      name: 'バトルドワーフ (Battle Dwarf)',
      href: 'https://casinotsu.com/slots/battle-dwarf',
      provider: 'Golden Hero',
      description: 'こちらもGolden Hero Gamesの人気作。ドワーフたちがバトルを繰り広げるユニークなテーマと、熱いフィーチャーが魅力です。',
    },
  ],
  prosCons: {
    pros: [
      '日本のパチスロを彷彿とさせるゲーム性',
      'シンプルながらも奥深いフィーチャー',
      '高ボラティリティによる一撃の大きな配当の可能性',
      'リスピンからBIG WIN RUSHへの連鎖がエキサイティング',
      '初心者でも理解しやすい3x3リールと5ペイライン',
      'モバイルデバイスでの快適なプレイに対応',
    ],
    cons: [
      'カエルのグラフィックが一部プレイヤーには好まれない可能性',
      '高ボラティリティのため、勝利頻度は低い傾向がある',
      '一部情報源では提供終了の可能性があり、プレイ前に確認が必要',
    ],
  },
  faq: [
    {
      q: 'Dreams of Goldはどのカジノで遊べますか？',
      a: 'ミスティーノ、カジノミー、WSM Casinoなど、多くの[オンラインカジノ](https://casinotsu.com/reviews)で遊べます。プレイしたいカジノで利用可能か事前にご確認ください。 CasinoTsuは、皆様に安全で信頼できるカジノ情報を提供いたします。',
    },
    {
      q: 'Dreams of Goldの特徴は何ですか？',
      a: '日本のパチスロ風のゲーム性、3x3リール、5ペイライン、高ボラティリティ、そしてリスピンからビッグウィンラッシュへと繋がる熱いフィーチャーが特徴です。5ペイラインでとってもシンプルなので、初心者プレイヤーにももってこいですが、高ボラティリティなので経験者にもおすすめです。 CasinoTsuは、ゲームの魅力を分かりやすく解説いたします。',
    },
    {
      q: 'WildシンボルとScatterシンボルは何ですか？',
      a: 'Wildシンボルは「Golden 8」で、他のシンボルの代わりになります。Scatterシンボルは金色の「8」のシンボルで、フリースピンをトリガーします。（※注：記事中の記述に基づくと、「リスピン」シンボルがフリースピン突入のキーとなり、金色の「8」シンボルもフリースピンに関連する可能性があります。詳細なシンボル機能はゲーム内説明をご確認ください。） CasinoTsuでは、常に正確な情報を提供できるよう努めております。',
    },
    {
      q: 'フリースピンは再トリガーできますか？',
      a: 'はい、フリースピン中にさらにフリースピンを獲得できる可能性があります。 CasinoTsuは、プレイヤーの皆様が最大限に楽しめるよう、詳細な情報を提供いたします。',
    },
    {
      q: 'このスロットはモバイルでプレイできますか？',
      a: 'はい、HTML5で最適化されているため、スマートフォンやタブレットで快適にプレイできます。 CasinoTsu 推薦のカジノでは、スムーズなモバイルプレイ環境を提供しています。',
    },
  ],
  meta: {
    title: 'Dreams of Gold',
    description: '日本のパチスロにそっくりということで日本人プレイヤーをざわつかせたハワイアンドリームを開発したGolden Hero／ゴールデンヒーローとJTG。続々と同系統のスロットを開発し、今度はカエル？をテーマにしたスロットのDreams of Gold／ドリーム・オブ・ゴールドが誕生！早速レビューしてみましょ♪ 🐸',
  },
};
