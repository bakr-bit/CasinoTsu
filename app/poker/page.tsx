import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllPoker } from '@/content/data/poker';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'ポーカー | CasinoTsu',
  description: 'テキサスホールデム、オマハなど各種ポーカーのルールと戦略を解説。',
};

export default async function PokerPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('poker');
  const dataRegistry = getAllPoker();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d) => ({
      category: d.category,
      difficulty: d.difficulty,
    });

  // Merge MDX frontmatter with registry data
  const enrichedArticles = articles.map(({ slug, frontmatter }) => {
    const data = dataRegistry.find((d: { slug: string }) => d.slug === slug);
    const meta = data ? extractMeta(data) : {};
    return {
      slug,
      title: frontmatter.title || slug,
      description: frontmatter.description,
      lastUpdated: frontmatter.lastUpdated,
      category: 'poker',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'poker');

  return (
    <PillarPageTemplate
      category="poker"
      categoryNameJa="ポーカー"
      description="テキサスホールデム、オマハなど各種ポーカーのルールと戦略を解説。"
      heroGradient="from-green-600 to-teal-700"
      content={content}
      articles={enrichedArticles}
    />
  );
}
