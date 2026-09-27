-- ============================================================
-- YDS EXAM – KİŞİSEL İLERLEME TAKİBİ (Modül 5)
-- Her hesabın ilerlemesi KENDİNE ÖZEL kaydedilir (RLS: auth.uid()).
--
-- Tasarım:
--  • activity_log      → her şeyin günlüğü (append-only, yalnız RPC yazar)
--  • quiz_answers      → soru bazında doğrular/yanlışlar
--  • vocab_progress    → kelime durumu (yeni/öğreniliyor/master)
--  • exam_results      → deneme sonuçları
--  • user_stats        → otomatik güncellenen özet (puan, seri, sayaçlar)
--  • track_activity()  → TEK yazma kapısı (security definer); anti-cheat
-- ============================================================

-- 1) AKTİVİTE GÜNLÜĞÜ (gerçeğin kaynağı)
create table if not exists public.activity_log (
  id            bigint generated always as identity primary key,
  user_id       text not null,
  activity_type text not null,             -- listen | quiz | vocab | exam | task
  topic_slug    text,
  points        integer not null default 0,
  seconds       integer not null default 0,
  payload       jsonb not null default '{}'::jsonb,
  created_at    timestamptz not null default now()
);
create index if not exists activity_log_user_idx
  on public.activity_log (user_id, created_at desc);

-- 2) SORU BAZLI İLERLEME (konu konu ustalık buradan hesaplanır)
create table if not exists public.quiz_answers (
  id             bigint generated always as identity primary key,
  user_id        text not null,
  topic_slug     text not null,
  question_id    text not null,
  chosen         text not null,
  correct_answer text not null,
  is_correct     boolean not null,
  time_spent_sec integer not null default 0,
  answered_at    timestamptz not null default now(),
  unique (user_id, question_id)            -- tekrar cevaplanırsa üzerine yazılır (upsert)
);
create index if not exists quiz_answers_topic_idx
  on public.quiz_answers (user_id, topic_slug);

-- 3) KELİME İLERLEMESİ
create table if not exists public.vocab_progress (
  user_id        text not null,
  word           text not null,
  meaning        text,
  status         text not null default 'new',   -- new | learning | review | mastered
  correct_count  integer not null default 0,
  wrong_count    integer not null default 0,
  next_review_at timestamptz,
  updated_at     timestamptz not null default now(),
  primary key (user_id, word)
);

-- 4) DENEME SONUÇLARI
create table if not exists public.exam_results (
  id           bigint generated always as identity primary key,
  user_id      text not null,
  exam_name    text not null default 'Deneme',
  score        numeric not null default 0,
  correct      integer not null default 0,
  wrong        integer not null default 0,
  empty        integer not null default 0,
  duration_sec integer not null default 0,
  breakdown    jsonb not null default '{}'::jsonb,
  taken_at     timestamptz not null default now()
);
create index if not exists exam_results_user_idx
  on public.exam_results (user_id, taken_at desc);

-- 5) KULLANICI ÖZETİ (RPC otomatik günceller; kullanıcı doğrudan YAZAMAZ)
create table if not exists public.user_stats (
  user_id          text primary key,
  points           integer not null default 0,
  total_questions  integer not null default 0,
  total_correct    integer not null default 0,
  total_listen_sec integer not null default 0,
  total_study_sec  integer not null default 0,
  current_streak   integer not null default 0,
  longest_streak   integer not null default 0,
  last_active_on   date,
  updated_at       timestamptz not null default now()
);

-- ============================================================
-- TEK YAZMA KAPISI: track_activity()
-- Puan/seri/sayaç mantığının tamamı SUNUCUDA çalışır; istemci
-- yalnız "ne yaptığını" bildirir. Anti-cheat için activity_log
-- ve user_stats tablolarına kullanıcı INSERT politikası verilmez.
-- ============================================================
create or replace function public.track_activity(
  p_type    text,
  p_topic   text    default null,
  p_points  integer default 0,
  p_seconds integer default 0,
  p_payload jsonb   default '{}'::jsonb
) returns public.user_stats
language plpgsql security definer set search_path = public as $$
declare
  v_uid   text := (auth.uid())::text;
  v_today date := (now() at time zone 'Europe/Istanbul')::date;
  v_new_streak integer;
  v_stats public.user_stats;
begin
  if v_uid is null then
    raise exception 'Oturum açmadan ilerleme kaydedilemez.';
  end if;
  if p_type not in ('listen','quiz','vocab','exam','task') then
    raise exception 'Geçersiz aktivite tipi: %', p_type;
  end if;

  -- Günlüğe yaz
  insert into public.activity_log (user_id, activity_type, topic_slug, points, seconds, payload)
  values (v_uid, p_type, p_topic, p_points, p_seconds, p_payload);

  -- Seriyi hesapla (Türkiye gününe göre)
  select case
    when s.last_active_on = v_today      then s.current_streak          -- bugün zaten işlendi
    when s.last_active_on = v_today - 1  then s.current_streak + 1      -- dün aktifti → seri +1
    else 1                                                                -- yeni seri
  end
  into v_new_streak
  from public.user_stats s where s.user_id = v_uid;

  v_new_streak := coalesce(v_new_streak, 1);

  insert into public.user_stats as s
    (user_id, points, total_study_sec, total_listen_sec,
     current_streak, longest_streak, last_active_on)
  values
    (v_uid, p_points, p_seconds, case when p_type = 'listen' then p_seconds else 0 end,
     v_new_streak, v_new_streak, v_today)
  on conflict (user_id) do update set
    points           = s.points + excluded.points,
    total_study_sec  = s.total_study_sec + excluded.total_study_sec,
    total_listen_sec = s.total_listen_sec + excluded.total_listen_sec,
    current_streak   = v_new_streak,
    longest_streak   = greatest(s.longest_streak, v_new_streak),
    last_active_on   = v_today,
    updated_at       = now()
  returning * into v_stats;

  -- Quiz sayaçları payload'dan DEĞİL, gerçek cevap tablosundan sayılır (kopya koruması)
  if p_type = 'quiz' then
    update public.user_stats set
      total_questions = (select count(*)        from public.quiz_answers where user_id = v_uid),
      total_correct   = (select count(*)        from public.quiz_answers where user_id = v_uid and is_correct)
    where user_id = v_uid;
    select * into v_stats from public.user_stats where user_id = v_uid;
  end if;

  return v_stats;
end $$;

revoke all on function public.track_activity(text, text, integer, integer, jsonb) from public, anon;
grant execute on function public.track_activity(text, text, integer, integer, jsonb) to authenticated;

-- ============================================================
-- KONU USTALIĞI GÖRÜNÜMÜ (başarı yüzdesi konu bazında)
-- ============================================================
create or replace view public.topic_mastery as
select
  user_id,
  topic_slug,
  count(*)::int                                             as attempts,
  sum(case when is_correct then 1 else 0 end)::int          as correct,
  coalesce(round(100.0 * sum(case when is_correct then 1 else 0 end) / nullif(count(*), 0)), 0)::int as success_rate
from public.quiz_answers
group by user_id, topic_slug;

grant select on public.topic_mastery to authenticated;

-- ============================================================
-- RLS: HERKES YALNIZCA KENDİ VERİSİNİ GÖRÜR
-- ============================================================
alter table public.activity_log   enable row level security;
alter table public.quiz_answers   enable row level security;
alter table public.vocab_progress enable row level security;
alter table public.exam_results   enable row level security;
alter table public.user_stats     enable row level security;

-- activity_log: sadece oku + sil; YAZMA yalnız track_activity RPC'siyledir
drop policy if exists "log_select_own" on public.activity_log;
create policy "log_select_own" on public.activity_log
  for select using ((auth.uid())::text = user_id);
drop policy if exists "log_delete_own" on public.activity_log;
create policy "log_delete_own" on public.activity_log
  for delete using ((auth.uid())::text = user_id);

-- quiz_answers: oku / ekle / güncelle (upsert için) — kendi satırları
drop policy if exists "quiz_select_own" on public.quiz_answers;
create policy "quiz_select_own" on public.quiz_answers
  for select using ((auth.uid())::text = user_id);
drop policy if exists "quiz_insert_own" on public.quiz_answers;
create policy "quiz_insert_own" on public.quiz_answers
  for insert with check ((auth.uid())::text = user_id);
drop policy if exists "quiz_update_own" on public.quiz_answers;
create policy "quiz_update_own" on public.quiz_answers
  for update using ((auth.uid())::text = user_id) with check ((auth.uid())::text = user_id);

-- vocab_progress
drop policy if exists "vocab_all_own" on public.vocab_progress;
create policy "vocab_all_own" on public.vocab_progress
  for all using ((auth.uid())::text = user_id) with check ((auth.uid())::text = user_id);

-- exam_results
drop policy if exists "exam_select_own" on public.exam_results;
create policy "exam_select_own" on public.exam_results
  for select using ((auth.uid())::text = user_id);
drop policy if exists "exam_insert_own" on public.exam_results;
create policy "exam_insert_own" on public.exam_results
  for insert with check ((auth.uid())::text = user_id);
drop policy if exists "exam_delete_own" on public.exam_results;
create policy "exam_delete_own" on public.exam_results
  for delete using ((auth.uid())::text = user_id);

-- user_stats: SADECE OKU — yazma hakkı yalnız RPC'nindir (anti-cheat: puan şişirme engeli)
drop policy if exists "stats_select_own" on public.user_stats;
create policy "stats_select_own" on public.user_stats
  for select using ((auth.uid())::text = user_id);
