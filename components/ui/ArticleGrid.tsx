'use client';

import { useState, useMemo } from 'react';
import { ArticleCard, ArticleCardProps } from './ArticleCard';

interface ArticleGridProps {
  articles: ArticleCardProps[];
  initialCount?: number;
  loadMoreCount?: number;
  category: string;
  emptyMessage?: string;
}

/**
 * Article grid with "Load More" functionality
 * Shows initialCount articles first, then loads more on click
 */
export function ArticleGrid({
  articles,
  initialCount = 20,
  loadMoreCount = 20,
  category,
  emptyMessage = '記事が見つかりませんでした。',
}: ArticleGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleArticles = useMemo(
    () => articles.slice(0, visibleCount),
    [articles, visibleCount]
  );

  const hasMore = visibleCount < articles.length;
  const remaining = articles.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadMoreCount, articles.length));
  };

  if (articles.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div>
      {/* Article count header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          全{articles.length}件
        </h2>
        <p className="text-sm text-gray-500">
          {visibleCount}件表示中
        </p>
      </div>

      {/* Article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {visibleArticles.map((article) => (
          <ArticleCard
            key={article.slug}
            {...article}
            category={category}
          />
        ))}
      </div>

      {/* Load more button */}
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span>さらに表示する</span>
            <span className="text-blue-200">({remaining}件)</span>
          </button>
        </div>
      )}

      {/* All loaded message */}
      {!hasMore && articles.length > initialCount && (
        <div className="mt-8 text-center text-gray-500">
          すべての記事を表示しています
        </div>
      )}
    </div>
  );
}
