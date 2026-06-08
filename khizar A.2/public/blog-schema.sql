-- Create the blog posts table
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add comments to table and columns
COMMENT ON TABLE posts IS 'Blog posts for the portfolio website';
COMMENT ON COLUMN posts.id IS 'Unique identifier for each post';
COMMENT ON COLUMN posts.title IS 'Blog post title';
COMMENT ON COLUMN posts.slug IS 'URL-friendly slug for the blog post';
COMMENT ON COLUMN posts.excerpt IS 'Short preview of the blog post';
COMMENT ON COLUMN posts.content IS 'Full content of the blog post (markdown)';
COMMENT ON COLUMN posts.cover_image IS 'URL to the cover image';
COMMENT ON COLUMN posts.category IS 'Blog post category';
COMMENT ON COLUMN posts.tags IS 'Array of tags associated with the post';
COMMENT ON COLUMN posts.published IS 'Whether the post is published or draft';
COMMENT ON COLUMN posts.created_at IS 'Timestamp when post was created';
COMMENT ON COLUMN posts.updated_at IS 'Timestamp when post was last updated';

-- Create indexes for better query performance
CREATE INDEX posts_slug_idx ON posts(slug);
CREATE INDEX posts_published_idx ON posts(published);
CREATE INDEX posts_category_idx ON posts(category);
CREATE INDEX posts_created_at_idx ON posts(created_at DESC);
CREATE INDEX posts_published_created_at_idx ON posts(published, created_at DESC);
CREATE INDEX posts_tags_idx ON posts USING GIN(tags);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_posts_updated_at_trigger
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE FUNCTION update_posts_updated_at();
