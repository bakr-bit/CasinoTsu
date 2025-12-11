import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllGameShows } from '@/content/data/game-shows';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'ゲームショー | CasinoTsu',
  description: 'Crazy Time、Monopoly Live、Lightning Rouletteなど人気ゲームショーを解説。',
};

export default async function GameShowsPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('game-shows');
  const dataRegistry = getAllGameShows();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d) => ({
      category: d.category,
      providerName: d.providerJa || d.provider,
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
      category: 'game-shows',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'game-shows');

  return (
    <PillarPageTemplate
      category="game-shows"
      categoryNameJa="ゲームショー"
      description="Crazy Time、Monopoly Live、Lightning Rouletteなど人気ゲームショーを解説。"
      heroGradient="from-pink-500 to-rose-600"
      content={content}
      articles={enrichedArticles}
    />
  );
}
