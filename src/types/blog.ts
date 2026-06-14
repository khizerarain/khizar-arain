export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  featured: boolean;
}

export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  category: string;
  tags?: string[];
  createdAt: string;
  updatedAt?: string;
  featured?: boolean;
}
