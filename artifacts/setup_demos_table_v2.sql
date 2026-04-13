-- 1. CREATE TABLE FIRST (If not exists)
CREATE TABLE IF NOT EXISTS public.demos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  client TEXT NOT NULL,
  category TEXT NOT NULL,
  location TEXT NOT NULL CHECK (location IN ('hero', 'grid')),
  audio_url TEXT NOT NULL,
  duration TEXT NOT NULL DEFAULT '0:00',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. ENABLE RLS
ALTER TABLE public.demos ENABLE ROW LEVEL SECURITY;

-- 3. DROP OLD POLICIES SAFELY
DROP POLICY IF EXISTS "Admins can do everything" ON public.demos;
DROP POLICY IF EXISTS "Public read demos" ON public.demos;
DROP POLICY IF EXISTS "Admin full access demos" ON public.demos;

-- 4. CREATE POLICIES
-- Permitir leitura para todos (visualização no site)
CREATE POLICY "Public read demos" ON public.demos
  FOR SELECT TO public
  USING (true);

-- Permitir tudo para admins
CREATE POLICY "Admin full access demos" ON public.demos
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = auth.uid()
      AND role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = auth.uid()
      AND role = 'admin'
    )
  );
