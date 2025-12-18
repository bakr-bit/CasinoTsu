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
      className="my-6 p-4 bg-gray-50 border border-gray-200 rounded-lg"
    >
      <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? 'ml-4' : ''}
          >
            <a
              href={`#${heading.id}`}
              className="text-[#0019b2] hover:text-[#0014a0] hover:underline text-sm"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
