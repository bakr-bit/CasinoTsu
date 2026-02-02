import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'ブラックジャック完全ガイド【2025年最新版】| CasinoTsu',
  description: 'ブラックジャックの基本ルールから必勝法まで徹底解説。ベーシックストラテジー、カードカウンティング、ライブブラックジャックの遊び方、おすすめオンラインカジノを紹介。',
};

export default async function BlackjackPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('blackjack');

  // Merge MDX frontmatter with article data
  const enrichedArticles = articles.map(({ slug, frontmatter }) => ({
    slug,
    title: frontmatter.title || slug,
    description: frontmatter.description,
    lastUpdated: frontmatter.lastUpdated,
    category: 'blackjack',
  }));

  const { content, frontmatter, headings } = await loadMDX('pillars', 'blackjack');

  return (
    <PillarPageTemplate
      category="blackjack"
      categoryNameJa="ブラックジャック"
      description="ブラックジャックのルール、戦略、バリエーションを徹底解説。初心者から上級者まで役立つ完全ガイド。"
      heroColor="bg-green-700"
      heroImage="/headers/blackjack-header.webp"
      content={content}
      articles={enrichedArticles}
      lastUpdated={frontmatter.lastUpdated}
      headings={headings}
    />
  );
}
