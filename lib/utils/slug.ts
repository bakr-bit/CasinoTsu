/**
 * Generate an anchor ID from heading text
 * Supports Japanese characters (hiragana, katakana, kanji) and alphanumeric
 */
export function generateAnchorId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf-]/g, '') // Keep alphanumeric, Japanese, hyphens
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
