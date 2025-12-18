import type { MDXComponents } from 'mdx/types';
import { AffiliateButton } from './AffiliateButton';
import { PaymentTable } from './PaymentTable';
import { CasinoList } from './CasinoList';
import { InfoBox } from './InfoBox';
import { SlotPayoutTable } from './SlotPayoutTable';
import { SlotFeatures } from './SlotFeatures';
import { SlotCasinoList } from './SlotCasinoList';
import { generateAnchorId } from '@/lib/utils/slug';

// Export individual components
export { AffiliateButton } from './AffiliateButton';
export { PaymentTable } from './PaymentTable';
export { CasinoList } from './CasinoList';
export { InfoBox } from './InfoBox';
export { SlotPayoutTable } from './SlotPayoutTable';
export { SlotFeatures } from './SlotFeatures';
export { SlotCasinoList } from './SlotCasinoList';
export { TableOfContents } from './TableOfContents';
export { ArticleContent } from './ArticleContent';
export type { HeadingInfo } from './TableOfContents';

/**
 * Extract text content from React children for ID generation
 */
function getTextContent(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(getTextContent).join('');
  if (children && typeof children === 'object' && 'props' in children) {
    return getTextContent((children as { props: { children?: React.ReactNode } }).props.children);
  }
  return '';
}

/**
 * MDX components registry
 * These components are available for use in MDX files
 */
export const mdxComponents: MDXComponents = {
  // Custom components
  AffiliateButton,
  PaymentTable,
  CasinoList,
  InfoBox,
  // Slot components (with aliases for MDX usage)
  SlotPayoutTable,
  PayoutTable: SlotPayoutTable, // Alias for <PayoutTable slotId="..."> in slot MDX
  SlotFeatures,
  SlotCasinoList,

  // HTML element overrides for consistent styling
  h1: (props) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />
  ),
  h2: (props) => {
    const text = getTextContent(props.children);
    const id = text ? generateAnchorId(text) : undefined;
    return (
      <h2
        id={id}
        className="text-2xl font-bold mt-8 mb-4 text-gray-900 scroll-mt-20"
        {...props}
      />
    );
  },
  h3: (props) => {
    const text = getTextContent(props.children);
    const id = text ? generateAnchorId(text) : undefined;
    return (
      <h3
        id={id}
        className="text-xl font-semibold mt-6 mb-3 text-gray-800 scroll-mt-20"
        {...props}
      />
    );
  },
  h4: (props) => (
    <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-800" {...props} />
  ),
  p: (props) => (
    <p className="text-gray-700 leading-relaxed my-4" {...props} />
  ),
  a: (props) => (
    <a
      className="text-[#0019b2] hover:text-[#0014a0] underline"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc pl-6 my-4 space-y-2 text-gray-700" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 my-4 space-y-2 text-gray-700" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-[#0019b2] pl-4 my-4 italic text-gray-600"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-gray-50" {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr className="border-b border-gray-200" {...props} />,
  th: (props) => (
    <th
      className="border border-gray-200 px-4 py-2 bg-gray-50 font-bold text-left"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border border-gray-200 px-4 py-2" {...props} />
  ),
  code: (props) => (
    <code
      className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-bold text-gray-900" {...props} />,
  em: (props) => <em className="italic" {...props} />,
};
