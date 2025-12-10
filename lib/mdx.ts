import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { mdxComponents } from '@/components/mdx';

/**
 * Frontmatter structure for MDX files
 */
export interface MDXFrontmatter {
  slug: string;
  title: string;
  description?: string;
  lastUpdated: string;
  author: string;
  status?: 'active' | 'draft' | 'retired';
}

/**
 * Result from loading an MDX file
 */
export interface MDXLoadResult<T extends MDXFrontmatter = MDXFrontmatter> {
  content: React.ReactElement;
  frontmatter: T;
}

/**
 * Base path for MDX content files
 */
const MDX_BASE_PATH = path.join(process.cwd(), 'content', 'mdx');

/**
 * Load and compile an MDX file
 */
export async function loadMDX<T extends MDXFrontmatter = MDXFrontmatter>(
  category: string,
  slug: string
): Promise<MDXLoadResult<T>> {
  const filePath = path.join(MDX_BASE_PATH, category, `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, 'utf-8');

    const { content, frontmatter } = await compileMDX<T>({
      source,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
      },
    });

    return {
      content,
      frontmatter,
    };
  } catch (error) {
    throw new Error(`Failed to load MDX file: ${category}/${slug}.mdx - ${error}`);
  }
}

/**
 * Get frontmatter only (without compiling MDX) - useful for listings
 */
export async function getMDXFrontmatter<T extends MDXFrontmatter = MDXFrontmatter>(
  category: string,
  slug: string
): Promise<T> {
  const filePath = path.join(MDX_BASE_PATH, category, `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, 'utf-8');
    const { data } = matter(source);
    return data as T;
  } catch (error) {
    throw new Error(`Failed to read frontmatter: ${category}/${slug}.mdx - ${error}`);
  }
}

/**
 * Get all MDX slugs for a category
 */
export async function getMDXSlugs(category: string): Promise<string[]> {
  const dir = path.join(MDX_BASE_PATH, category);

  try {
    const files = await fs.readdir(dir);
    return files
      .filter((f) => f.endsWith('.mdx'))
      .map((f) => f.replace('.mdx', ''));
  } catch (error) {
    // Return empty array if directory doesn't exist
    return [];
  }
}

/**
 * Get all MDX files with frontmatter for a category
 */
export async function getAllMDXWithFrontmatter<T extends MDXFrontmatter = MDXFrontmatter>(
  category: string
): Promise<Array<{ slug: string; frontmatter: T }>> {
  const slugs = await getMDXSlugs(category);

  const results = await Promise.all(
    slugs.map(async (slug) => {
      const frontmatter = await getMDXFrontmatter<T>(category, slug);
      return { slug, frontmatter };
    })
  );

  return results;
}
