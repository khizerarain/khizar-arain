"use server";

import { supabase } from "@/lib/supabase";
import {
  Post,
  CreatePostInput,
  UpdatePostInput,
  BlogResponse,
  PaginatedResponse,
  BlogFilters,
  BlogStats,
} from "@/types/blog";

/**
 * Get all published posts with optional filtering
 */
export async function getPublishedPosts(
  filters?: BlogFilters,
): Promise<PaginatedResponse<Post>> {
  try {
    const page = filters?.page || 1;
    const limit = filters?.limit || 10;
    const offset = (page - 1) * limit;

    let query = supabase
      .from("posts")
      .select("*", { count: "exact" })
      .eq("published", true)
      .order("created_at", { ascending: false });

    // Apply filters
    if (filters?.search) {
      query = query.or(
        `title.ilike.%${filters.search}%,excerpt.ilike.%${filters.search}%,content.ilike.%${filters.search}%`,
      );
    }

    if (filters?.category) {
      query = query.eq("category", filters.category);
    }

    if (filters?.tag) {
      query = query.contains("tags", [filters.tag]);
    }

    // Apply pagination
    query = query.range(offset, offset + limit - 1);

    const { data, count, error } = await query;

    if (error) {
      throw error;
    }

    const totalPages = Math.ceil((count || 0) / limit);

    return {
      data: (data as Post[]) || [],
      total: count || 0,
      page,
      limit,
      totalPages,
      success: true,
    };
  } catch (err) {
    console.error("Error fetching published posts:", err);
    return {
      data: [],
      total: 0,
      page: 1,
      limit: 10,
      totalPages: 0,
      success: false,
      error: "Failed to fetch posts",
    };
  }
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogResponse<Post>> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error) {
      return { success: false, error: "Post not found" };
    }

    return { data: data as Post, success: true };
  } catch (err) {
    console.error("Error fetching post by slug:", err);
    return { success: false, error: "Failed to fetch post" };
  }
}

/**
 * Get a post by ID (for admin editing)
 */
export async function getPostById(id: string): Promise<BlogResponse<Post>> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      return { success: false, error: "Post not found" };
    }

    return { data: data as Post, success: true };
  } catch (err) {
    console.error("Error fetching post by ID:", err);
    return { success: false, error: "Failed to fetch post" };
  }
}

/**
 * Get all posts for admin (published and drafts)
 */
export async function getAllPosts(
  filters?: BlogFilters,
): Promise<PaginatedResponse<Post>> {
  try {
    const page = filters?.page || 1;
    const limit = filters?.limit || 10;
    const offset = (page - 1) * limit;

    let query = supabase
      .from("posts")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false });

    if (filters?.search) {
      query = query.or(
        `title.ilike.%${filters.search}%,excerpt.ilike.%${filters.search}%`,
      );
    }

    if (filters?.category) {
      query = query.eq("category", filters.category);
    }

    query = query.range(offset, offset + limit - 1);

    const { data, count, error } = await query;

    if (error) {
      throw error;
    }

    const totalPages = Math.ceil((count || 0) / limit);

    return {
      data: (data as Post[]) || [],
      total: count || 0,
      page,
      limit,
      totalPages,
      success: true,
    };
  } catch (err) {
    console.error("Error fetching all posts:", err);
    return {
      data: [],
      total: 0,
      page: 1,
      limit: 10,
      totalPages: 0,
      success: false,
      error: "Failed to fetch posts",
    };
  }
}

/**
 * Get featured posts (latest published)
 */
export async function getFeaturedPosts(limit: number = 3): Promise<Post[]> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      throw error;
    }

    return (data as Post[]) || [];
  } catch (err) {
    console.error("Error fetching featured posts:", err);
    return [];
  }
}

/**
 * Get related posts by category and tags
 */
export async function getRelatedPosts(
  currentPostId: string,
  limit: number = 3,
): Promise<Post[]> {
  try {
    // First get the current post to know its category and tags
    const { data: currentPost, error: currentError } = await supabase
      .from("posts")
      .select("category, tags")
      .eq("id", currentPostId)
      .single();

    if (currentError || !currentPost) {
      return [];
    }

    // Get related posts with same category or tags
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .neq("id", currentPostId)
      .or(
        `category.eq.${currentPost.category},tags.cs.{${currentPost.tags.join(",")}}`,
      )
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      throw error;
    }

    return (data as Post[]) || [];
  } catch (err) {
    console.error("Error fetching related posts:", err);
    return [];
  }
}

/**
 * Create a new post
 */
export async function createPost(
  input: CreatePostInput,
): Promise<BlogResponse<Post>> {
  try {
    // Validate required fields
    if (!input.title || !input.slug || !input.excerpt || !input.content) {
      return {
        success: false,
        error: "Missing required fields: title, slug, excerpt, content",
      };
    }

    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          title: input.title,
          slug: input.slug.toLowerCase().replace(/\s+/g, "-"),
          excerpt: input.excerpt,
          content: input.content,
          cover_image: input.cover_image || null,
          category: input.category || null,
          tags: input.tags || [],
          published: input.published || false,
        },
      ])
      .select()
      .single();

    if (error) {
      return { success: false, error: error.message };
    }

    return { data: data as Post, success: true };
  } catch (err) {
    console.error("Error creating post:", err);
    return { success: false, error: "Failed to create post" };
  }
}

/**
 * Update a post
 */
export async function updatePost(
  id: string,
  input: UpdatePostInput,
): Promise<BlogResponse<Post>> {
  try {
    const updateData: Record<string, any> = {};

    if (input.title) updateData.title = input.title;
    if (input.slug)
      updateData.slug = input.slug.toLowerCase().replace(/\s+/g, "-");
    if (input.excerpt) updateData.excerpt = input.excerpt;
    if (input.content) updateData.content = input.content;
    if (input.cover_image !== undefined)
      updateData.cover_image = input.cover_image;
    if (input.category !== undefined) updateData.category = input.category;
    if (input.tags) updateData.tags = input.tags;
    if (input.published !== undefined) updateData.published = input.published;

    const { data, error } = await supabase
      .from("posts")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return { success: false, error: error.message };
    }

    return { data: data as Post, success: true };
  } catch (err) {
    console.error("Error updating post:", err);
    return { success: false, error: "Failed to update post" };
  }
}

/**
 * Delete a post
 */
export async function deletePost(id: string): Promise<BlogResponse<null>> {
  try {
    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Error deleting post:", err);
    return { success: false, error: "Failed to delete post" };
  }
}

/**
 * Get blog statistics
 */
export async function getBlogStats(): Promise<BlogStats> {
  try {
    const { count: totalCount } = await supabase
      .from("posts")
      .select("id", { count: "exact" });

    const { count: publishedCount } = await supabase
      .from("posts")
      .select("id", { count: "exact" })
      .eq("published", true);

    const { count: draftCount } = await supabase
      .from("posts")
      .select("id", { count: "exact" })
      .eq("published", false);

    const { data: categoriesData } = await supabase
      .from("posts")
      .select("category")
      .eq("published", true)
      .neq("category", null);

    const { data: tagsData } = await supabase
      .from("posts")
      .select("tags")
      .eq("published", true);

    // Extract unique categories
    const categories = Array.from(
      new Set(categoriesData?.map((p) => p.category).filter(Boolean)),
    ) as string[];

    // Extract unique tags
    const tags = Array.from(
      new Set(tagsData?.flatMap((p) => p.tags || [])),
    ) as string[];

    return {
      totalPosts: totalCount || 0,
      publishedPosts: publishedCount || 0,
      draftPosts: draftCount || 0,
      categories,
      tags,
    };
  } catch (err) {
    console.error("Error fetching blog stats:", err);
    return {
      totalPosts: 0,
      publishedPosts: 0,
      draftPosts: 0,
      categories: [],
      tags: [],
    };
  }
}

/**
 * Generate RSS feed XML
 */
export async function generateRSSFeed(siteUrl: string): Promise<string> {
  try {
    const { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .limit(20);

    if (error) {
      throw error;
    }

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Khizar Arain - Blog</title>
    <link>${siteUrl}</link>
    <description>A blog about web development and technology</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${(posts as Post[])
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.created_at).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
      <category>${post.category || "General"}</category>
    </item>
    `,
      )
      .join("")}
  </channel>
</rss>`;

    return rss;
  } catch (err) {
    console.error("Error generating RSS feed:", err);
    return "";
  }
}

/**
 * Helper function to escape XML special characters
 */
function escapeXml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
