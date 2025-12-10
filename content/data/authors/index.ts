/**
 * Author Data Registry
 * Profiles for content authors and editors
 */

/**
 * Author profile data
 */
export interface AuthorData {
  /** Unique identifier (slug) */
  slug: string;
  /** Display name */
  name: string;
  /** Japanese name if different */
  nameJa?: string;
  /** Role/title */
  role: string;
  /** Short bio */
  bio: string;
  /** Path to avatar image */
  avatar?: string;
  /** Social/contact links */
  links?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  /** Areas of expertise */
  expertise?: string[];
}

/**
 * Registry type for all authors
 */
export type AuthorRegistry = Record<string, AuthorData>;

/**
 * Registry of all authors indexed by slug
 */
export const authorsRegistry: AuthorRegistry = {
  casinotsu: {
    slug: 'casinotsu',
    name: 'CasinoTsu',
    nameJa: 'カジノツ',
    role: '編集部',
    bio: 'CasinoTsu編集部は、オンラインカジノの専門家チームが運営しています。日本人プレイヤー向けに、正確で信頼性の高い情報を提供することを使命としています。',
    avatar: '/assets/authors/casinotsu.png',
    expertise: ['オンラインカジノ', '決済方法', 'ボーナス分析'],
  },

  yamamoto: {
    slug: 'yamamoto',
    name: 'Yamamoto Kenji',
    nameJa: '山本健二',
    role: 'シニアレビュアー',
    bio: '10年以上のオンラインカジノ経験を持つベテランレビュアー。特に仮想通貨カジノと決済方法に精通。',
    avatar: '/assets/authors/yamamoto.png',
    expertise: ['仮想通貨', 'セキュリティ', 'カジノレビュー'],
  },

  tanaka: {
    slug: 'tanaka',
    name: 'Tanaka Yuki',
    nameJa: '田中悠希',
    role: 'コンテンツライター',
    bio: 'ギャンブル業界で5年の経験を持つライター。ボーナス条件の分析と初心者向けガイドを得意とする。',
    avatar: '/assets/authors/tanaka.png',
    expertise: ['ボーナス', '初心者ガイド', 'スロットレビュー'],
  },

  'rina-okabe': {
    slug: 'rina-okabe',
    name: 'Rina Okabe',
    nameJa: '岡部里奈',
    role: 'シニアカジノレビュアー',
    bio: 'オンラインカジノ業界で8年以上の経験を持つシニアレビュアー。日本市場に特化したカジノレビューと徹底した調査で知られる。',
    avatar: '/assets/authors/rina-okabe.png',
    expertise: ['カジノレビュー', '日本市場', 'ライブカジノ', 'VIPプログラム'],
  },
};

/**
 * Get an author by slug
 */
export function getAuthor(slug: string): AuthorData | undefined {
  return authorsRegistry[slug];
}

/**
 * Get all authors as an array
 */
export function getAllAuthors(): AuthorData[] {
  return Object.values(authorsRegistry);
}

/**
 * Get author display name (Japanese name if available, otherwise English)
 */
export function getAuthorDisplayName(slug: string): string {
  const author = getAuthor(slug);
  return author?.nameJa || author?.name || slug;
}
