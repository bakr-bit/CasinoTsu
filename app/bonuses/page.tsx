import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllBonusTypes } from '@/content/data/bonus-types';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'ボーナス | CasinoTsu',
  description: '入金不要ボーナス、ウェルカムボーナス、キャッシュバックなど各種ボーナスを解説。',
};

export default async function BonusesPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('bonuses');
  const dataRegistry = getAllBonusTypes();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d: any) => ({
      name: d.name,
      nameJa: d.nameJa,
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
      category: 'bonuses',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'bonuses');

  return (
    <PillarPageTemplate
      category="bonuses"
      categoryNameJa="ボーナス"
      description="入金不要ボーナス、ウェルカムボーナス、キャッシュバックなど各種ボーナスを解説。"
      heroColor="bg-amber-600"
      heroImage="/headers/bonus-header.webp"
      content={content}
      articles={enrichedArticles}
    />
  );
}
