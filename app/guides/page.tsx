import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllGuides } from '@/content/data/guides';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'ガイド | CasinoTsu',
  description: '初心者向けガイド、攻略法、ゲーム戦略など実践的なガイド集。',
};

export default async function GuidesPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('guides');
  const dataRegistry = getAllGuides();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d: any) => ({
      category: d.category,
      targetAudience: d.targetAudience,
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
      category: 'guides',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'guides');

  return (
    <PillarPageTemplate
      category="guides"
      categoryNameJa="ガイド"
      description="初心者向けガイド、攻略法、ゲーム戦略など実践的なガイド集。"
      heroColor="bg-green-700"
      content={content}
      articles={enrichedArticles}
    />
  );
}
