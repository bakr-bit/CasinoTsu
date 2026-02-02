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
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-gray-900">
            全{articles.length}件
          </span>
          <span className="text-sm text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-lg font-medium">
            {visibleCount}件表示中
          </span>
        </div>
      </div>

      {/* Article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
        <div className="mt-10 text-center">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span>さらに表示する</span>
            <span className="text-indigo-200 bg-white/10 px-2 py-0.5 rounded-lg text-sm">
              +{remaining}件
            </span>
          </button>
        </div>
      )}

      {/* All loaded message */}
      {!hasMore && articles.length > initialCount && (
        <div className="mt-10 text-center">
          <span className="inline-flex items-center gap-2 text-gray-500 bg-gray-100 px-4 py-2 rounded-lg">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            すべての記事を表示しています
          </span>
        </div>
      )}
    </div>
  );
}
