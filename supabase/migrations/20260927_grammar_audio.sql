-- ============================================================
-- YDS EXAM – SESLİ GRAMER (Modül 3) migration
-- Dinleme ilerlemesi (kalıcı) + Storage bucket
-- ============================================================

-- Kullanıcı bazlı dinleme ilerlemesi: kaldığı yerden devam eder
create table if not exists public.listening_progress (
  user_id          uuid references auth.users (id) on delete cascade,
  topic_slug       text not null,
  part_index       integer not null default 0,
  position_seconds integer not null default 0,
  completed        boolean not null default false,
  updated_at       timestamptz not null default now(),
  primary key (user_id, topic_slug)
);

alter table public.listening_progress enable row level security;

drop policy if exists "listen_progress_all_own" on public.listening_progress;
create policy "listen_progress_all_own" on public.listening_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Grammar ses dosyaları için PUBLIC okunur Storage bucket
insert into storage.buckets (id, name, public)
values ('grammar-audio', 'grammar-audio', true)
on conflict (id) do nothing;

-- Herkes dinleyebilsin (public bucket politikası)
drop policy if exists "grammar_audio_public_read" on storage.objects;
create policy "grammar_audio_public_read" on storage.objects
  for select using (bucket_id = 'grammar-audio');
