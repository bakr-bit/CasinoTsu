import { ArticleGrid } from '@/components/ui/ArticleGrid';
import { ArticleCardProps } from '@/components/ui/ArticleCard';

export interface PillarPageProps {
  /** Category slug (e.g., 'slots', 'payment', 'reviews') */
  category: string;
  /** Japanese category name for display */
  categoryNameJa: string;
  /** Category description */
  description: string;
  /** Hero gradient colors (Tailwind classes) */
  heroGradient: string;
  /** MDX content rendered above article listing (optional) */
  content?: React.ReactNode;
  /** List of articles in this category */
  articles: ArticleCardProps[];
}

/**
 * Pillar page template for category landing pages
 * Shows hero + MDX content + article grid with Load More
 */
export default function PillarPageTemplate({
  category,
  categoryNameJa,
  description,
  heroGradient,
  content,
  articles,
}: PillarPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className={`bg-gradient-to-r ${heroGradient} text-white`}>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {categoryNameJa}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            {description}
          </p>
          <p className="mt-4 text-white/70">
            {articles.length}件の記事
          </p>
        </div>
      </section>

      {/* MDX Content section (if provided) */}
      {content && (
        <section className="bg-white">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900">
              {content}
            </div>
          </div>
        </section>
      )}

      {/* Article listing section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <ArticleGrid
            articles={articles}
            category={category}
            initialCount={20}
            loadMoreCount={20}
          />
        </div>
      </section>
    </div>
  );
}
