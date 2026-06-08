import { BlogPost, blogPosts } from "@/data/blogPosts";

export async function getAllPosts(): Promise<BlogPost[]> {
  return blogPosts
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  return blogPosts.find((post) => post.slug === slug);
}

export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  return (await getAllPosts()).slice(0, limit);
}
