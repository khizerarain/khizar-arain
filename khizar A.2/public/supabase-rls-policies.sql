-- Row Level Security Policies for the contacts table

-- Enable Row Level Security on the contacts table
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow public (unauthenticated) users to INSERT new contacts
-- This allows anyone to submit the contact form
CREATE POLICY "Allow public to insert contacts"
ON contacts
FOR INSERT
WITH CHECK (true);

-- Policy 2: Allow public to SELECT contacts (optional, usually for testing)
-- In production, you may want to restrict this or require authentication
CREATE POLICY "Allow public to select contacts"
ON contacts
FOR SELECT
USING (true);

-- Policy 3: Prevent updates to existing contacts
-- Contacts should be immutable once submitted
CREATE POLICY "Prevent updates to contacts"
ON contacts
FOR UPDATE
WITH CHECK (false);

-- Policy 4: Prevent deletion by public
-- Only admins or authenticated users should be able to delete
-- This can be updated based on your authentication setup
CREATE POLICY "Prevent public from deleting contacts"
ON contacts
FOR DELETE
USING (false);

-- Optional: Create a policy to allow authenticated admin users to read, update, and delete
-- Uncomment and modify based on your authentication setup
/*
CREATE POLICY "Allow authenticated admins full access"
ON contacts
FOR ALL
USING (auth.uid() IN (SELECT id FROM admin_users));
*/
