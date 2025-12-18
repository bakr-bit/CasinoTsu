interface LastUpdatedProps {
  /** Date in ISO format (e.g., "2025-12-11") */
  date: string;
  /** Label text (default: "最終更新日") */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Displays last updated date with semantic HTML5 <time> element
 */
export function LastUpdated({
  date,
  label = '最終更新日',
  className = '',
}: LastUpdatedProps) {
  const formatted = new Date(date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <p className={`text-sm text-gray-500 ${className}`}>
      {label}: <time dateTime={date}>{formatted}</time>
    </p>
  );
}
