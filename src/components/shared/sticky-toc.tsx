'use client';

import * as React from 'react';
import { cn } from '@/src/lib/utils';

interface TocItem {
  id: string;
  label: string;
}

interface StickyTocProps {
  items: TocItem[];
}

export function StickyToc({ items }: StickyTocProps) {
  const [activeId, setActiveId] = React.useState<string>('');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-y border-gray-100 py-2 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200',
                activeId === item.id
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
