-- Remove broad role-level grants that are not constrained by row-level security
-- (notably TRUNCATE, which bypasses RLS). Restore only the privileges used by
-- the application's verified Supabase queries.

REVOKE ALL PRIVILEGES ON TABLE
  public.activity_log,
  public.user_stats,
  public.quiz_answers,
  public.exam_results,
  public.listening_progress,
  public.topic_mastery
FROM PUBLIC, anon, authenticated;

-- User-facing progress screens read only their own rows under existing RLS.
GRANT SELECT ON TABLE
  public.activity_log,
  public.user_stats,
  public.exam_results,
  public.topic_mastery
TO authenticated;

-- These two client flows use upsert and have auth.uid()-scoped RLS policies.
GRANT SELECT, INSERT, UPDATE ON TABLE public.quiz_answers TO authenticated;
GRANT SELECT, INSERT, UPDATE ON TABLE public.listening_progress TO authenticated;

-- Exam result writes are performed by the server; clients receive read access
-- to their own result rows only. Remove stale direct-write policies as well.
DROP POLICY IF EXISTS exam_insert_own ON public.exam_results;
DROP POLICY IF EXISTS exam_delete_own ON public.exam_results;

-- Activity rows are created through the trusted SECURITY DEFINER RPC, not by a
-- direct table write. Clients retain only their own-row read policy.
DROP POLICY IF EXISTS log_delete_own ON public.activity_log;
