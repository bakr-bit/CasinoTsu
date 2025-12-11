import type { Metadata } from 'next';
import { getAllMDXWithFrontmatter } from '@/lib/mdx';
import { loadMDX } from '@/lib/mdx';
import { getAllPayments } from '@/content/data/payments';
import PillarPageTemplate from '@/components/templates/PillarPageTemplate';

export const metadata: Metadata = {
  title: '決済方法 | CasinoTsu',
  description: 'オンラインカジノの入出金方法を徹底解説。手数料、処理時間、対応カジノなど。',
};

export default async function PaymentPillarPage() {
  // Get all articles in this category
  const articles = await getAllMDXWithFrontmatter('payment');
  const dataRegistry = getAllPayments();

  // Extract meta from data registry
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractMeta = (d) => ({
      type: d.type,
      jpySupported: d.features?.jpySupported,
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
      category: 'payment',
      meta,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl: (meta as any).slotImageSrc || (meta as any).logo || undefined,
    };
  });

  const { content } = await loadMDX('pillars', 'payment');

  return (
    <PillarPageTemplate
      category="payment"
      categoryNameJa="決済方法"
      description="オンラインカジノの入出金方法を徹底解説。手数料、処理時間、対応カジノなど。"
      heroGradient="from-emerald-600 to-teal-800"
      content={content}
      articles={enrichedArticles}
    />
  );
}
