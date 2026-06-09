-- Projects table schema for Supabase
-- Run in your Supabase SQL editor or psql

-- Enable pgcrypto for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  short_description text,
  full_description text,
  cover_image text,
  gallery_images text[],
  technologies text[],
  category text,
  github_url text,
  live_demo_url text,
  featured boolean DEFAULT false,
  status text DEFAULT 'draft',
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Optional index for faster lookups by slug and created_at
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects (slug);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON public.projects (created_at DESC);
