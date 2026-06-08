-- Row Level Security Policies for the posts table

-- Enable Row Level Security on the posts table
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow public (unauthenticated) users to READ published posts only
CREATE POLICY "Allow public to read published posts"
ON posts
FOR SELECT
USING (published = true);

-- Policy 2: Allow authenticated users to read all posts (for admin)
CREATE POLICY "Allow authenticated users to read all posts"
ON posts
FOR SELECT
USING (auth.role() = 'authenticated');

-- Policy 3: Allow authenticated users to INSERT posts
CREATE POLICY "Allow authenticated users to create posts"
ON posts
FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

-- Policy 4: Allow authenticated users to UPDATE their own posts
CREATE POLICY "Allow authenticated users to update posts"
ON posts
FOR UPDATE
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Policy 5: Allow authenticated users to DELETE posts
CREATE POLICY "Allow authenticated users to delete posts"
ON posts
FOR DELETE
USING (auth.role() = 'authenticated');

-- NOTE: For production, you may want to add additional checks like:
-- - Only specific admin users can perform operations
-- - Track user IDs and ensure users can only modify their own posts
-- 
-- Example: Only allow specific admin user:
/*
CREATE POLICY "Only admins can create posts"
ON posts
FOR INSERT
WITH CHECK (
  auth.uid() = '00000000-0000-0000-0000-000000000000'::uuid
);
*/
