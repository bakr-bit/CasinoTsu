// Slot category configuration for category pages
import type { SlotsPageData } from '@/components/templates/SlotsTemplate';

export interface SlotCategory {
  slug: string;
  titleJa: string;
  titleEn: string;
  description: string;
  heroColor: string;
  // Filter function to match slots in this category
  filter: (slot: {
    slug: string;
    name: string;
    volatility?: string;
    rtp?: string;
    categoryTags?: {
      mechanics?: string[];
      volatilityLevel?: string;
      themes?: string[];
      features?: string[];
      isNew?: boolean;
      isHighRtp?: boolean;
      rtpValue?: number;
    };
  }) => boolean;
  // Static page data for SlotsTemplate
  pageData: Partial<SlotsPageData>;
}

// Helper to parse RTP string to number
function parseRtp(rtp?: string): number {
  if (!rtp) return 0;
  const match = rtp.match(/(\d+\.?\d*)/);
  return match ? parseFloat(match[1]) : 0;
}

// Helper to check if slot name contains certain patterns
function nameContains(name: string, patterns: string[]): boolean {
  const lowerName = name.toLowerCase();
  return patterns.some(p => lowerName.includes(p.toLowerCase()));
}

export const SLOT_CATEGORIES: SlotCategory[] = [
  // Mechanic-based categories
  {
    slug: 'megaways',
    titleJa: 'Megawaysスロット',
    titleEn: 'Megaways Slots',
    description: 'Megawaysスロットは、数千から数十万通りのペイラインを持つ革新的なオンラインスロットです。',
    heroColor: 'bg-purple-600',
    filter: (slot) =>
      nameContains(slot.name, ['megaways']) ||
      slot.categoryTags?.mechanics?.includes('megaways') === true,
    pageData: {
      title: 'Megawaysスロット徹底攻略【2024年最新】',
      intro: 'Megawaysスロットは、数千から数十万通りのペイラインを持つ革新的なオンラインスロットです。高ボラティリティで爆発的な勝利の可能性を秘めており、多くのプレイヤーを魅了しています。',
      criteria: ['RTP（還元率）', 'ボラティリティ', '最大ペイライン数', 'ボーナス機能', 'ゲームテーマ'],
      tips: ['少額から始める', '予算を設定する', 'デモプレイで練習する'],
      prosCons: {
        pros: ['数万通りのペイラインで高配当のチャンス', '様々なボーナス機能で飽きない', '多くのゲームプロバイダーが提供'],
        cons: ['ボラティリティが高く、資金管理が重要', 'ペイラインの仕組みが複雑に見える場合も'],
      },
      faq: [
        { q: 'Megawaysスロットとは？', a: 'Megawaysスロットとは、スピンごとに変化するペイラインを持つオンラインスロットです。Big Time Gaming社が開発したシステムで、最大117,649通りのペイラインを実現できます。' },
        { q: 'Megawaysスロットはどこで遊べますか？', a: '当サイトで紹介しているオンラインカジノでプレイできます。' },
      ],
    },
  },
  {
    slug: 'bonus-buy',
    titleJa: 'ボーナス購入スロット',
    titleEn: 'Bonus Buy Slots',
    description: 'ベット額の倍率を支払うことで、直接フリースピンやボーナスラウンドに突入できるスロット。',
    heroColor: 'bg-amber-600',
    filter: (slot) =>
      slot.categoryTags?.mechanics?.includes('bonus-buy') === true ||
      slot.categoryTags?.features?.includes('bonus-round') === true,
    pageData: {
      title: 'ボーナス購入スロット徹底ガイド【2024年最新】',
      intro: 'オンラインカジノで人気急上昇中のボーナス購入スロット。通常プレイよりも高額配当のチャンスを狙える魅力的な機能です。',
      criteria: ['RTP（還元率）', 'ボラティリティ', '最大配当倍率', 'ボーナス購入価格', 'ゲーム性'],
      tips: ['資金管理を徹底しましょう', '高ボラティリティスロットはリスクが高いことを理解しましょう', 'ボーナス購入は必ずしも勝利を保証するものではありません'],
      prosCons: {
        pros: ['すぐにボーナスラウンドを楽しめる', '高額配当のチャンスが増える'],
        cons: ['資金を失うリスクが高まる', '通常プレイよりもRTPが低い場合がある'],
      },
    },
  },
  {
    slug: 'hold-and-win',
    titleJa: 'Hold & Winスロット',
    titleEn: 'Hold & Win Slots',
    description: 'リスピン機能でシンボルを固定しながら賞金を積み上げていく人気の機能を搭載したスロット。',
    heroColor: 'bg-blue-600',
    filter: (slot) =>
      nameContains(slot.name, ['hold', 'win']) ||
      slot.categoryTags?.mechanics?.includes('hold-and-win') === true,
    pageData: {
      title: 'Hold & Winスロット特集【2024年最新】',
      intro: 'Hold & Win機能は、特定のシンボルを固定しながらリスピンを繰り返し、大きな配当を目指す人気のゲームメカニクスです。',
    },
  },

  // Volatility-based categories
  {
    slug: 'high-volatility',
    titleJa: '高ボラティリティスロット',
    titleEn: 'High Volatility Slots',
    description: '高ボラティリティスロットは、大きな配当を狙えるが当たりの頻度は低めのスロットです。',
    heroColor: 'bg-red-600',
    filter: (slot) =>
      slot.categoryTags?.volatilityLevel === 'high' ||
      slot.volatility?.includes('高') === true,
    pageData: {
      title: '高ボラティリティスロットおすすめランキング【2024年最新】',
      intro: '高ボラティリティスロットは、当たりの頻度は低いものの、一撃で大きな配当を獲得できる可能性があります。ハイリスク・ハイリターンを好むプレイヤーにおすすめです。',
      tips: ['十分な資金を用意してプレイしましょう', '損失限度額を設定しましょう', 'デモモードで試してから実資金でプレイしましょう'],
    },
  },
  {
    slug: 'medium-volatility',
    titleJa: '中ボラティリティスロット',
    titleEn: 'Medium Volatility Slots',
    description: '中ボラティリティスロットは、バランスの取れた配当頻度と配当額を持つスロットです。',
    heroColor: 'bg-yellow-600',
    filter: (slot) =>
      slot.categoryTags?.volatilityLevel === 'medium' ||
      slot.volatility?.includes('中') === true,
    pageData: {
      title: '中ボラティリティスロットおすすめランキング【2024年最新】',
      intro: '中ボラティリティスロットは、配当頻度と配当額のバランスが良く、初心者から上級者まで幅広いプレイヤーにおすすめです。',
    },
  },
  {
    slug: 'low-volatility',
    titleJa: '低ボラティリティスロット',
    titleEn: 'Low Volatility Slots',
    description: '低ボラティリティスロットは、小さな配当が頻繁に発生するスロットです。',
    heroColor: 'bg-green-600',
    filter: (slot) =>
      slot.categoryTags?.volatilityLevel === 'low' ||
      slot.volatility?.includes('低') === true,
    pageData: {
      title: '低ボラティリティスロットおすすめランキング【2024年最新】',
      intro: '低ボラティリティスロットは、配当は小さいものの頻繁に当たりが発生するため、長時間安定してプレイを楽しめます。',
    },
  },

  // RTP-based categories
  {
    slug: 'high-rtp',
    titleJa: '高RTPスロット',
    titleEn: 'High RTP Slots',
    description: 'RTP（還元率）96.5%以上の高還元スロットを紹介。理論上、プレイヤーに有利なスロットです。',
    heroColor: 'bg-emerald-600',
    filter: (slot) => {
      if (slot.categoryTags?.isHighRtp) return true;
      const rtpValue = slot.categoryTags?.rtpValue || parseRtp(slot.rtp);
      return rtpValue >= 96.5;
    },
    pageData: {
      title: '高RTPスロットで勝利の確率アップ！おすすめ機種【2024年最新】',
      intro: 'オンラインカジノで勝ちたいなら、高RTPスロットは外せません。RTP（Return to Player）とは、プレイヤーに還元される賭け金の割合を示す数値。RTPが高いほど、理論上は勝ちやすくなります。',
      criteria: ['RTP', 'ボラティリティ', '最大ペイアウト', 'ゲーム性', '人気度'],
      tips: ['高RTPスロットでも必ず勝てるわけではありません', '予算を決めて、責任あるギャンブルを心がけましょう', 'ボーナスを活用して資金を増やしましょう'],
      faq: [
        { q: 'RTPとは何ですか？', a: 'Return to Playerの略で、プレイヤーに還元される賭け金の割合です。例えば、RTP 96%のスロットでは、理論上100ドル賭けると96ドルが還元されることを意味します。' },
        { q: 'ボラティリティとは何ですか？', a: 'ペイアウトの変動性を示す指標です。高ボラティリティは大きな当たりが稀に出る、低ボラティリティは小さな当たりが頻繁に出ることを意味します。' },
      ],
    },
  },
  {
    slug: 'best-payout',
    titleJa: '高配当スロット',
    titleEn: 'Best Payout Slots',
    description: '最大配当倍率が高いスロットを紹介。一攫千金を狙えるスロットを厳選。',
    heroColor: 'bg-yellow-500',
    filter: (slot) => {
      const rtpValue = slot.categoryTags?.rtpValue || parseRtp(slot.rtp);
      return rtpValue >= 96.0;
    },
    pageData: {
      title: '高配当スロットランキング【2024年最新】',
      intro: '最大配当倍率が高く、一攫千金を狙えるスロットを厳選してご紹介します。',
    },
  },

  // Theme-based categories
  {
    slug: 'geisha',
    titleJa: '芸者・和風スロット',
    titleEn: 'Geisha Slots',
    description: '日本の伝統的な芸者をテーマにしたスロット。和の雰囲気を楽しめます。',
    heroColor: 'bg-pink-600',
    filter: (slot) =>
      nameContains(slot.name, ['geisha', 'oiran', 'sakura', 'japanese', '芸者', '花魁']) ||
      slot.categoryTags?.themes?.includes('geisha') === true ||
      slot.categoryTags?.themes?.includes('japanese') === true,
    pageData: {
      title: '芸者・和風スロット特集【2024年最新】',
      intro: '日本の伝統的な美しさを表現した芸者・和風テーマのスロットを紹介します。桜や着物など、日本文化を楽しみながらプレイできます。',
    },
  },
  {
    slug: 'halloween-slots',
    titleJa: 'ハロウィンスロット',
    titleEn: 'Halloween Slots',
    description: 'ハロウィンをテーマにしたスロット。ホラー要素や不気味な雰囲気を楽しめます。',
    heroColor: 'bg-orange-600',
    filter: (slot) =>
      nameContains(slot.name, ['halloween', 'spooky', 'zombie', 'vampire', 'dracula', 'blood']) ||
      slot.categoryTags?.themes?.includes('halloween') === true,
    pageData: {
      title: 'ハロウィンスロット特集【2024年最新】',
      intro: 'ハロウィンの雰囲気を味わえる、ホラー＆ミステリーテーマのスロットを紹介します。',
    },
  },
  {
    slug: 'xmas',
    titleJa: 'クリスマススロット',
    titleEn: 'Christmas Slots',
    description: 'クリスマスをテーマにしたスロット。サンタや雪景色など、季節感あふれるスロット。',
    heroColor: 'bg-red-700',
    filter: (slot) =>
      nameContains(slot.name, ['christmas', 'xmas', 'santa', 'winter', 'snow']) ||
      slot.categoryTags?.themes?.includes('xmas') === true,
    pageData: {
      title: 'クリスマススロット特集【2024年最新】',
      intro: 'クリスマスシーズンにぴったりの、サンタや雪景色をテーマにしたスロットを紹介します。',
    },
  },
  {
    slug: 'valentine',
    titleJa: 'バレンタインスロット',
    titleEn: 'Valentine Slots',
    description: 'バレンタインデーをテーマにしたスロット。ハートやロマンチックな演出を楽しめます。',
    heroColor: 'bg-pink-500',
    filter: (slot) =>
      nameContains(slot.name, ['valentine', 'love', 'heart', 'cupid']) ||
      slot.categoryTags?.themes?.includes('valentine') === true,
    pageData: {
      title: 'バレンタインスロット特集【2024年最新】',
      intro: 'バレンタインデーの雰囲気を楽しめる、ロマンチックなテーマのスロットを紹介します。',
    },
  },

  // Feature-based categories
  {
    slug: 'progressive-jackpot',
    titleJa: 'プログレッシブジャックポット',
    titleEn: 'Progressive Jackpot Slots',
    description: 'プレイするたびにジャックポット賞金が積み上がる、夢の一攫千金スロット。',
    heroColor: 'bg-yellow-600',
    filter: (slot) =>
      nameContains(slot.name, ['jackpot', 'mega', 'fortune']) ||
      slot.categoryTags?.features?.includes('progressive-jackpot') === true,
    pageData: {
      title: 'プログレッシブジャックポットスロット【2024年最新】',
      intro: 'プログレッシブジャックポットは、プレイヤーの賭け金の一部がジャックポット賞金として積み立てられ、誰かが当選するまで増え続けます。',
      tips: ['ジャックポットの金額が大きくなったタイミングを狙う', '最大ベットでプレイするとジャックポット獲得資格が得られる場合が多い', '予算管理をしっかり行う'],
    },
  },
  {
    slug: 'free',
    titleJa: '無料でプレイできるスロット',
    titleEn: 'Free Play Slots',
    description: 'デモモードで無料プレイできるスロット。実際のお金を使わずにゲームを試せます。',
    heroColor: 'bg-teal-600',
    filter: () => true, // All slots have free play mode
    pageData: {
      title: '無料スロット一覧【2024年最新】',
      intro: 'オンラインカジノの多くのスロットは、デモモードで無料プレイが可能です。実際のお金を賭ける前に、ゲームの仕組みや特徴を試すことができます。',
    },
  },

  // Other categories
  {
    slug: 'new-slots',
    titleJa: '新着スロット',
    titleEn: 'New Slots',
    description: '2024年にリリースされた最新スロットを紹介。',
    heroColor: 'bg-indigo-600',
    filter: (slot) => slot.categoryTags?.isNew === true,
    pageData: {
      title: '新着スロット【2024年最新リリース】',
      intro: '2024年にリリースされた最新のオンラインスロットを紹介します。最新のゲームメカニクスや美しいグラフィックを楽しめます。',
    },
  },
  {
    slug: 'slots-strategies',
    titleJa: 'スロット攻略',
    titleEn: 'Slot Strategies',
    description: 'スロットで勝つための戦略やヒントを紹介。',
    heroColor: 'bg-gray-700',
    filter: () => false, // This is a guide page, not a filter
    pageData: {
      title: 'スロット必勝戦略ガイド：高RTPスロットで勝利を掴む方法',
      intro: 'オンラインカジノのスロットで勝ちたいなら、戦略は必須です。このガイドでは、高RTPスロットの選び方、効果的な資金管理、ボーナス活用術など、勝利に近づくための具体的な戦略を徹底解説。',
      criteria: ['RTP（還元率）', 'ボラティリティ', '最大ペイアウト', 'ボーナス機能', 'ゲーム性'],
      tips: ['高RTPスロットを選ぶ', '予算を設定し、それを守る', 'ボーナスを有効活用する', 'ペイテーブルを確認する', 'デモプレイで練習する'],
    },
  },
  {
    slug: 'hidden',
    titleJa: '隠れた名作スロット',
    titleEn: 'Hidden Gem Slots',
    description: 'あまり知られていないが、実はおすすめの隠れた名作スロット。',
    heroColor: 'bg-purple-700',
    filter: () => false, // Manually curated
    pageData: {
      title: '隠れた名作スロット特集【2024年最新】',
      intro: '人気ランキングには入らないものの、実は素晴らしいゲーム性を持つ隠れた名作スロットを紹介します。',
    },
  },
];

// Get category by slug
export function getSlotCategory(slug: string): SlotCategory | undefined {
  return SLOT_CATEGORIES.find(c => c.slug === slug);
}

// Get all category slugs for static generation
export function getAllCategorySlugs(): string[] {
  return SLOT_CATEGORIES.map(c => c.slug);
}
