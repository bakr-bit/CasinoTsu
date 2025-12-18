import { TableOfContents, HeadingInfo } from './TableOfContents';

interface ArticleContentProps {
  content: React.ReactElement;
  headings: HeadingInfo[];
  className?: string;
}

/**
 * ArticleContent wraps MDX content with a Table of Contents.
 * Use this component in article pages to automatically include TOC.
 */
export function ArticleContent({ content, headings, className = '' }: ArticleContentProps) {
  return (
    <article className={className}>
      {headings && headings.length > 0 && <TableOfContents headings={headings} />}
      {content}
    </article>
  );
}
