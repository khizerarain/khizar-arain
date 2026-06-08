// Utility functions for blog operations

/**
 * Calculate reading time in minutes based on content length
 * Average reading speed: ~200 words per minute
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
}

/**
 * Generate a URL-friendly slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Format a date to a readable string
 */
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format a date to relative time (e.g., "2 days ago")
 */
export function formatRelativeTime(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  const intervals: Record<string, number> = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [name, seconds_in_interval] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / seconds_in_interval);
    if (interval >= 1) {
      return `${interval} ${name}${interval > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

/**
 * Extract plain text from markdown
 */
export function extractPlainText(markdown: string): string {
  return markdown
    .replace(/# /g, "")
    .replace(/## /g, "")
    .replace(/### /g, "")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/`/g, "")
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Truncate text to a maximum length with ellipsis
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength).trim() + "...";
}

/**
 * Format word count
 */
export function formatWordCount(text: string): string {
  const words = text.split(/\s+/).length;
  return `${words.toLocaleString()} words`;
}

/**
 * Get excerpt from content (first 160 characters)
 */
export function generateExcerpt(content: string, length: number = 160): string {
  const plainText = extractPlainText(content);
  return truncateText(plainText, length);
}

/**
 * Check if a slug is valid
 */
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);
}

/**
 * Validate blog post data
 */
export function validatePost(data: {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
}): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.title || data.title.trim().length === 0) {
    errors.title = "Title is required";
  } else if (data.title.length > 200) {
    errors.title = "Title must be less than 200 characters";
  }

  if (!data.slug || data.slug.trim().length === 0) {
    errors.slug = "Slug is required";
  } else if (!isValidSlug(data.slug)) {
    errors.slug =
      "Slug must contain only lowercase letters, numbers, and hyphens";
  }

  if (!data.excerpt || data.excerpt.trim().length === 0) {
    errors.excerpt = "Excerpt is required";
  } else if (data.excerpt.length < 20) {
    errors.excerpt = "Excerpt must be at least 20 characters";
  } else if (data.excerpt.length > 300) {
    errors.excerpt = "Excerpt must be less than 300 characters";
  }

  if (!data.content || data.content.trim().length === 0) {
    errors.content = "Content is required";
  } else if (data.content.length < 100) {
    errors.content = "Content must be at least 100 characters";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Get all unique categories from posts
 */
export function extractCategories(posts: any[]): string[] {
  return Array.from(
    new Set(posts.map((p) => p.category).filter(Boolean)),
  ) as string[];
}

/**
 * Get all unique tags from posts
 */
export function extractTags(posts: any[]): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach((tag: string) => tags.add(tag));
    }
  });
  return Array.from(tags);
}

/**
 * Filter posts by multiple criteria
 */
export function filterPosts(
  posts: any[],
  filters: {
    search?: string;
    category?: string;
    tag?: string;
  },
): any[] {
  return posts.filter((post) => {
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    if (filters.category && post.category !== filters.category) {
      return false;
    }

    if (filters.tag && (!post.tags || !post.tags.includes(filters.tag))) {
      return false;
    }

    return true;
  });
}

/**
 * Sort posts
 */
export function sortPosts(
  posts: any[],
  sortBy: "newest" | "oldest" | "popular" = "newest",
): any[] {
  const sorted = [...posts];

  switch (sortBy) {
    case "oldest":
      return sorted.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
      );
    case "popular":
      // You can add a view count or comment count in the future
      return sorted;
    case "newest":
    default:
      return sorted.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
  }
}
