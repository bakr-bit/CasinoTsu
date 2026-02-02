import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllInfo } from '@/content/data/info';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'カジノ情報 | CasinoTsu',
  description: 'カジノライセンス、歴史、業界ニュース、トリビアなど幅広い情報。',
};

export default async function InfoPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('info');
  const dataRegistry = getAllInfo();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d: any) => ({
      category: d.category,
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
      category: 'info',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'info');

  return (
    <PillarPageTemplate
      category="info"
      categoryNameJa="カジノ情報"
      description="カジノライセンス、歴史、業界ニュース、トリビアなど幅広い情報。"
      heroColor="bg-slate-700"
      content={content}
      articles={enrichedArticles}
    />
  );
}
