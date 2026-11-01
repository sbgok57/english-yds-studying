-- Dedicated server-only login for the Prisma-backed Next.js runtime.
-- This role is not a Supabase API role and is never exposed to the browser.
-- Keep RLS enabled; grant the trusted app server access only to Prisma models.
CREATE ROLE dil_master_runtime
  LOGIN
  INHERIT
  NOSUPERUSER
  NOCREATEDB
  NOCREATEROLE
  NOREPLICATION
  NOBYPASSRLS
  CONNECTION LIMIT 20;

GRANT CONNECT ON DATABASE postgres TO dil_master_runtime;
GRANT USAGE ON SCHEMA public TO dil_master_runtime;

GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE
  public."User",
  public."Word",
  public."WordMastery",
  public."Quote",
  public."GrammarTopic",
  public."Question",
  public."Exam",
  public."ExamAttempt",
  public."Progress"
TO dil_master_runtime;

CREATE POLICY dil_master_runtime_access ON public."User"
  TO dil_master_runtime USING (true) WITH CHECK (true);
CREATE POLICY dil_master_runtime_access ON public."Word"
  TO dil_master_runtime USING (true) WITH CHECK (true);
CREATE POLICY dil_master_runtime_access ON public."WordMastery"
  TO dil_master_runtime USING (true) WITH CHECK (true);
CREATE POLICY dil_master_runtime_access ON public."Quote"
  TO dil_master_runtime USING (true) WITH CHECK (true);
CREATE POLICY dil_master_runtime_access ON public."GrammarTopic"
  TO dil_master_runtime USING (true) WITH CHECK (true);
CREATE POLICY dil_master_runtime_access ON public."Question"
  TO dil_master_runtime USING (true) WITH CHECK (true);
CREATE POLICY dil_master_runtime_access ON public."Exam"
  TO dil_master_runtime USING (true) WITH CHECK (true);
CREATE POLICY dil_master_runtime_access ON public."ExamAttempt"
  TO dil_master_runtime USING (true) WITH CHECK (true);
CREATE POLICY dil_master_runtime_access ON public."Progress"
  TO dil_master_runtime USING (true) WITH CHECK (true);

ALTER ROLE dil_master_runtime SET statement_timeout = '15s';
