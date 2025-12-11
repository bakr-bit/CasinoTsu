import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllRoulette } from '@/content/data/roulette';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'ルーレット | CasinoTsu',
  description: 'ヨーロピアン、アメリカン、フレンチルーレットのルールと攻略法を解説。',
};

export default async function RoulettePillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('roulette');
  const dataRegistry = getAllRoulette();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d) => ({
      category: d.category,
      wheelType: d.wheelType,
      houseEdge: d.houseEdge,
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
      category: 'roulette',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'roulette');

  return (
    <PillarPageTemplate
      category="roulette"
      categoryNameJa="ルーレット"
      description="ヨーロピアン、アメリカン、フレンチルーレットのルールと攻略法を解説。"
      heroGradient="from-red-600 to-rose-700"
      content={content}
      articles={enrichedArticles}
    />
  );
}
