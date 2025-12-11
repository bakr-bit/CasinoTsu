import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllCasinos } from '@/content/data/casinos';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'カジノレビュー | CasinoTsu',
  description: '信頼できるオンラインカジノを徹底レビュー。ライセンス、ボーナス、決済方法など。',
};

export default async function ReviewsPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('reviews');
  const dataRegistry = getAllCasinos();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d) => ({
      rating: d.rating,
      bonusHeadline: d.features?.bonusHeadline,
      logo: d.logo,
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
      category: 'reviews',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'reviews');

  return (
    <PillarPageTemplate
      category="reviews"
      categoryNameJa="カジノレビュー"
      description="信頼できるオンラインカジノを徹底レビュー。ライセンス、ボーナス、決済方法など。"
      heroGradient="from-purple-600 to-purple-800"
      content={content}
      articles={enrichedArticles}
    />
  );
}
