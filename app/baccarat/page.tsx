import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'バカラ完全ガイド【2025年最新版】| CasinoTsu',
  description: 'オンラインバカラの遊び方を徹底解説。バカラのルール、罫線の読み方、必勝法からおすすめオンラインカジノまで、初心者から上級者まで役立つ情報を完全網羅。',
};

export default async function BaccaratPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('baccarat');

  // Merge MDX frontmatter with article data
  const enrichedArticles = articles.map(({ slug, frontmatter }) => ({
    slug,
    title: frontmatter.title || slug,
    description: frontmatter.description,
    lastUpdated: frontmatter.lastUpdated,
    category: 'baccarat',
  }));

  const { content, frontmatter, headings } = await loadMDX('pillars', 'baccarat');

  return (
    <PillarPageTemplate
      category="baccarat"
      categoryNameJa="バカラ"
      description="バカラのルール、戦略、罫線の読み方を徹底解説。初心者から上級者まで役立つ完全ガイド。"
      heroColor="bg-red-700"
      heroImage="/headers/baccarat-header.webp"
      content={content}
      articles={enrichedArticles}
      lastUpdated={frontmatter.lastUpdated}
      headings={headings}
    />
  );
}
