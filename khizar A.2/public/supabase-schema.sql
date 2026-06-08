-- Create the contacts table
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add comments to the table and columns
COMMENT ON TABLE contacts IS 'Stores contact form submissions from portfolio visitors';
COMMENT ON COLUMN contacts.id IS 'Unique identifier for each contact submission';
COMMENT ON COLUMN contacts.name IS 'Name of the person submitting the form';
COMMENT ON COLUMN contacts.email IS 'Email address of the contact';
COMMENT ON COLUMN contacts.message IS 'Message content from the contact form';
COMMENT ON COLUMN contacts.created_at IS 'Timestamp when the contact form was submitted';

-- Create an index on created_at for faster queries
CREATE INDEX contacts_created_at_idx ON contacts(created_at DESC);

-- Create an index on email for searching
CREATE INDEX contacts_email_idx ON contacts(email);
