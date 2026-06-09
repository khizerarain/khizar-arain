-- Row Level Security (RLS) for projects
-- Create an admins table and policies to allow only admins to modify content

-- Admins table to track admin user ids (populate with your admin user ids)
CREATE TABLE IF NOT EXISTS public.admins (
  user_id uuid PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Public users can SELECT (view) projects
CREATE POLICY "public_select" ON public.projects
  FOR SELECT
  USING (true);

-- Only admins can INSERT
CREATE POLICY "admins_insert" ON public.projects
  FOR INSERT
  USING (EXISTS (SELECT 1 FROM public.admins WHERE public.admins.user_id = auth.uid()));

-- Only admins can UPDATE
CREATE POLICY "admins_update" ON public.projects
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM public.admins WHERE public.admins.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.admins WHERE public.admins.user_id = auth.uid()));

-- Only admins can DELETE
CREATE POLICY "admins_delete" ON public.projects
  FOR DELETE
  USING (EXISTS (SELECT 1 FROM public.admins WHERE public.admins.user_id = auth.uid()));

-- Grant select to anon role (optional if you prefer service policies)
GRANT SELECT ON public.projects TO anon;

-- Note: To make an account admin, insert their auth.uid() into public.admins:
-- INSERT INTO public.admins (user_id) VALUES ('<USER_UUID>');
