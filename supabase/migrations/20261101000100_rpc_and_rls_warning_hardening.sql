-- Explicit deny policies document the intended lockout of public API roles and
-- clear the advisor's empty-policy notices without opening any rows.
DO $migration$
DECLARE
  table_name text;
BEGIN
  FOREACH table_name IN ARRAY ARRAY[
    'User', 'WordMastery', 'ExamAttempt', 'Progress', 'Question', 'Exam',
    'error_reports', 'keep_alive'
  ] LOOP
    EXECUTE format(
      'CREATE POLICY %I ON public.%I FOR ALL TO anon, authenticated USING (false) WITH CHECK (false)',
      'deny_public_api_access', table_name
    );
  END LOOP;
END
$migration$;

-- Trigger functions need only a fixed, empty search path; every application
-- object referenced in SECURITY DEFINER code is schema-qualified.
ALTER FUNCTION public.handle_new_user() SET search_path = '';
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
ALTER FUNCTION public.touch_updated_at() SET search_path = '';
ALTER FUNCTION public.set_updated_at() SET search_path = '';

-- Authenticated clients may report a study event, but their supplied points
-- are untrusted. Award no points through this self-report RPC until a
-- server-verified scoring event exists; bound claimed duration per event.
CREATE OR REPLACE FUNCTION public.track_activity(
  p_type text,
  p_topic text DEFAULT NULL::text,
  p_points integer DEFAULT 0,
  p_seconds integer DEFAULT 0,
  p_payload jsonb DEFAULT '{}'::jsonb
)
RETURNS public.user_stats
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
DECLARE
  v_uid text := (auth.uid())::text;
  v_today date := (now() AT TIME ZONE 'Europe/Istanbul')::date;
  v_new_streak integer;
  v_stats public.user_stats;
  v_safe_points integer := 0;
  v_safe_seconds integer := LEAST(GREATEST(COALESCE(p_seconds, 0), 0), 300);
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Oturum açmadan ilerleme kaydedilemez.';
  END IF;
  IF p_type IS NULL OR p_type NOT IN ('listen', 'quiz', 'vocab', 'exam', 'task') THEN
    RAISE EXCEPTION 'Geçersiz aktivite tipi.';
  END IF;

  INSERT INTO public.activity_log (user_id, activity_type, topic_slug, points, seconds, payload)
  VALUES (v_uid, p_type, NULLIF(left(COALESCE(p_topic, ''), 120), ''), v_safe_points, v_safe_seconds,
          COALESCE(p_payload, '{}'::jsonb));

  SELECT CASE
    WHEN s.last_active_on = v_today THEN s.current_streak
    WHEN s.last_active_on = v_today - 1 THEN s.current_streak + 1
    ELSE 1
  END
  INTO v_new_streak
  FROM public.user_stats AS s
  WHERE s.user_id = v_uid;

  v_new_streak := COALESCE(v_new_streak, 1);

  INSERT INTO public.user_stats AS s
    (user_id, points, total_study_sec, total_listen_sec, current_streak, longest_streak, last_active_on)
  VALUES
    (v_uid, v_safe_points, v_safe_seconds,
     CASE WHEN p_type = 'listen' THEN v_safe_seconds ELSE 0 END,
     v_new_streak, v_new_streak, v_today)
  ON CONFLICT (user_id) DO UPDATE SET
    points = s.points + EXCLUDED.points,
    total_study_sec = s.total_study_sec + EXCLUDED.total_study_sec,
    total_listen_sec = s.total_listen_sec + EXCLUDED.total_listen_sec,
    current_streak = v_new_streak,
    longest_streak = GREATEST(s.longest_streak, v_new_streak),
    last_active_on = v_today,
    updated_at = now()
  RETURNING * INTO v_stats;

  IF p_type = 'quiz' THEN
    UPDATE public.user_stats
    SET total_questions = (SELECT count(*) FROM public.quiz_answers WHERE user_id = v_uid),
        total_correct = (SELECT count(*) FROM public.quiz_answers WHERE user_id = v_uid AND is_correct)
    WHERE user_id = v_uid;
    SELECT * INTO v_stats FROM public.user_stats WHERE user_id = v_uid;
  END IF;

  RETURN v_stats;
END
$function$;

REVOKE EXECUTE ON FUNCTION public.track_activity(text, text, integer, integer, jsonb) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.track_activity(text, text, integer, integer, jsonb) TO authenticated, service_role;
