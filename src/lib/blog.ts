import { readMarkdownFiles } from "./content";
import { isValidDate } from "./utils";
import type { BlogPost, BlogPostFrontmatter } from "@/types/blog";

function timestamp(createdAt: string): number {
  if (!isValidDate(createdAt)) return 0;
  return new Date(createdAt).getTime();
}

function parsePost({
  frontmatter,
  content,
  slug,
}: {
  frontmatter: BlogPostFrontmatter;
  content: string;
  slug: string;
}): BlogPost {
  return {
    id: slug,
    title: frontmatter.title,
    slug: frontmatter.slug || slug,
    excerpt: frontmatter.excerpt,
    content,
    coverImage: frontmatter.coverImage,
    category: frontmatter.category,
    tags: frontmatter.tags || [],
    createdAt: String(frontmatter.createdAt ?? ""),
    updatedAt: frontmatter.updatedAt || frontmatter.createdAt,
    featured: frontmatter.featured ?? false,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = await readMarkdownFiles<BlogPostFrontmatter>("content/blog");
  const posts = files.map(parsePost);

  return posts.sort((a, b) => timestamp(b.createdAt) - timestamp(a.createdAt));
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map((post) => post.category)));
}

export async function getTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = posts.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
}

export async function getRelatedPosts(
  currentSlug: string,
  limit = 2,
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  const current = posts.find((post) => post.slug === currentSlug);
  if (!current) return [];

  const related = posts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) =>
        current.tags.includes(tag),
      ).length;
      const sameCategory = post.category === current.category ? 1 : 0;
      return { post, score: sharedTags + sameCategory };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);

  if (related.length < limit) {
    const remaining = posts
      .filter(
        (post) =>
          post.slug !== currentSlug &&
          !related.find((r) => r.slug === post.slug),
      )
      .slice(0, limit - related.length);
    related.push(...remaining);
  }

  return related;
}
