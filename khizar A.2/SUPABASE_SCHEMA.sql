-- ============================================
-- Supabase Schema for Portfolio Website
-- ============================================

-- 1. Create the contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create an index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- 3. Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- ============================================
-- Row Level Security (RLS) Policies
-- ============================================

-- 5. Allow public (unauthenticated) users to INSERT new contacts
-- This policy allows anyone to submit a contact form without authentication
CREATE POLICY "Allow public to insert contacts"
ON contacts
FOR INSERT
WITH CHECK (true);

-- 6. Allow public (unauthenticated) users to SELECT only their own contacts
-- In this case, we'll allow viewing recent contacts (optional)
-- Or restrict it completely - adjust based on your needs
CREATE POLICY "Allow public to view contacts"
ON contacts
FOR SELECT
USING (true);

-- 7. Prevent public users from updating contacts
-- Only authenticated admins can update (configure via dashboard if needed)
CREATE POLICY "Prevent public from updating contacts"
ON contacts
FOR UPDATE
USING (false)
WITH CHECK (false);

-- 8. Prevent public users from deleting contacts
-- Only authenticated admins can delete (configure via dashboard if needed)
CREATE POLICY "Prevent public from deleting contacts"
ON contacts
FOR DELETE
USING (false);

-- ============================================
-- Optional: Create audit trigger for updated_at
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contacts_updated_at
BEFORE UPDATE ON contacts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Verification Query
-- ============================================
-- Run this to verify the table was created successfully:
-- SELECT * FROM contacts LIMIT 1;
