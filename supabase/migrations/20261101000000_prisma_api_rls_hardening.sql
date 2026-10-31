-- Keep Prisma-owned tables accessible to the trusted server database role,
-- but prevent Supabase's public API roles from bypassing account ownership.
-- The three educational catalogs remain public read-only.

BEGIN;

ALTER TABLE public."User" ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public."User" FROM anon, authenticated;

ALTER TABLE public."WordMastery" ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public."WordMastery" FROM anon, authenticated;

ALTER TABLE public."ExamAttempt" ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public."ExamAttempt" FROM anon, authenticated;

ALTER TABLE public."Progress" ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public."Progress" FROM anon, authenticated;

ALTER TABLE public."Question" ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public."Question" FROM anon, authenticated;

ALTER TABLE public."Exam" ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public."Exam" FROM anon, authenticated;

ALTER TABLE public."Word" ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public."Word" FROM anon, authenticated;
GRANT SELECT ON TABLE public."Word" TO anon, authenticated;
CREATE POLICY "public_read_word_catalog" ON public."Word"
  FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE public."Quote" ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public."Quote" FROM anon, authenticated;
GRANT SELECT ON TABLE public."Quote" TO anon, authenticated;
CREATE POLICY "public_read_quote_catalog" ON public."Quote"
  FOR SELECT TO anon, authenticated USING (true);

ALTER TABLE public."GrammarTopic" ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public."GrammarTopic" FROM anon, authenticated;
GRANT SELECT ON TABLE public."GrammarTopic" TO anon, authenticated;
CREATE POLICY "public_read_grammar_catalog" ON public."GrammarTopic"
  FOR SELECT TO anon, authenticated USING (true);

-- This view aggregates per-user quiz answers. Run it with the caller's role so
-- the existing quiz_answers RLS policies are honored for each authenticated user.
ALTER VIEW public.topic_mastery SET (security_invoker = true);

COMMIT;
