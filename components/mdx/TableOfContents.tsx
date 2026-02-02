import { List } from 'lucide-react';

export interface HeadingInfo {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: HeadingInfo[];
  title?: string;
}

/**
 * Table of contents component with anchor links to headings
 */
export function TableOfContents({
  headings,
  title = '目次',
}: TableOfContentsProps) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="目次"
      className="my-8 rounded-2xl border-0 bg-white overflow-hidden shadow-lg shadow-indigo-100/50 not-prose"
    >
      {/* Header with gradient and shine */}
      <div className="p-4 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
        <div className="relative flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
            <List className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-base font-bold text-white">{title}</h2>
          <span className="text-xs text-white/70 bg-white/10 px-2 py-0.5 rounded-lg border border-white/20">
            {headings.length}項目
          </span>
        </div>
      </div>
      {/* Body */}
      <div className="p-5">
        <ul className="space-y-2.5">
          {headings.map((heading, index) => (
            <li
              key={heading.id}
              className={heading.level === 3 ? 'ml-5' : ''}
            >
              <a
                href={`#${heading.id}`}
                className="flex items-start gap-2.5 text-sm text-gray-700 hover:text-indigo-600 transition-colors group"
              >
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 text-[10px] font-bold group-hover:bg-indigo-100 transition-colors mt-0.5">
                  {index + 1}
                </span>
                <span className="group-hover:underline">{heading.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
