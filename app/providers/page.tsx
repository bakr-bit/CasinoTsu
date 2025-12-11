import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllProviders } from '@/content/data/providers';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'プロバイダー | CasinoTsu',
  description: 'オンラインカジノゲームを開発する主要プロバイダーを紹介。',
};

export default async function ProvidersPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('providers');
  const dataRegistry = getAllProviders();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d) => ({
      gameCount: d.gameCount,
      gameTypes: d.gameTypes,
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
      category: 'providers',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'providers');

  return (
    <PillarPageTemplate
      category="providers"
      categoryNameJa="プロバイダー"
      description="オンラインカジノゲームを開発する主要プロバイダーを紹介。"
      heroGradient="from-blue-600 to-indigo-700"
      content={content}
      articles={enrichedArticles}
    />
  );
}
