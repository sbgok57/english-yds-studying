-- ============================================================
-- YDS SİTESİ — KALICI HESAP + KULLANICI VERİSİ
-- Supabase Dashboard → SQL Editor → yapıştır → Run
-- ============================================================

-- ------------------------------------------------------------
-- 1) PROFİLLER
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text,
  full_name   text,
  avatar_url  text,
  level       text default 'B1',
  target_score int default 70,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  using ( auth.uid() = id );

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  with check ( auth.uid() = id );

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using ( auth.uid() = id )
  with check ( auth.uid() = id );

-- ------------------------------------------------------------
-- 2) OTOMATİK PROFİL OLUŞTURMA (trigger)
-- ------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, level, target_score)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'level', 'B1'),
    coalesce((new.raw_user_meta_data ->> 'target_score')::int, 70)
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ------------------------------------------------------------
-- 3) SORU / ÇALIŞMA İLERLEMESİ
-- ------------------------------------------------------------
create table if not exists public.user_progress (
  id           bigint generated always as identity primary key,
  user_id      uuid not null references auth.users (id) on delete cascade,
  module       text not null,
  question_id  text not null,
  correct      boolean not null,
  time_spent_ms int,
  answered_at  timestamptz default now()
);

create unique index if not exists user_progress_unique
  on public.user_progress (user_id, module, question_id);

create index if not exists user_progress_user_idx
  on public.user_progress (user_id, module);

alter table public.user_progress enable row level security;

drop policy if exists "progress_all_own" on public.user_progress;
create policy "progress_all_own"
  on public.user_progress for all
  using ( auth.uid() = user_id )
  with check ( auth.uid() = user_id );

-- ------------------------------------------------------------
-- 4) DENEME SONUÇLARI
-- ------------------------------------------------------------
create table if not exists public.deneme_sonuclari (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references auth.users (id) on delete cascade,
  deneme_adi text not null,
  dogru      int not null,
  yanlis     int not null,
  bos        int not null,
  sure_sn    int,
  created_at timestamptz default now()
);

create index if not exists deneme_user_idx on public.deneme_sonuclari (user_id);

alter table public.deneme_sonuclari enable row level security;

drop policy if exists "deneme_all_own" on public.deneme_sonuclari;
create policy "deneme_all_own"
  on public.deneme_sonuclari for all
  using ( auth.uid() = user_id )
  with check ( auth.uid() = user_id );

-- ------------------------------------------------------------
-- 5) KELİME DEFTERİ
-- ------------------------------------------------------------
create table if not exists public.user_words (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references auth.users (id) on delete cascade,
  word       text not null,
  meaning    text,
  known      boolean default false,
  created_at timestamptz default now()
);

create unique index if not exists user_words_unique
  on public.user_words (user_id, lower(word));

alter table public.user_words enable row level security;

drop policy if exists "words_all_own" on public.user_words;
create policy "words_all_own"
  on public.user_words for all
  using ( auth.uid() = user_id )
  with check ( auth.uid() = user_id );

-- ------------------------------------------------------------
-- 6) updated_at otomatiği
-- ------------------------------------------------------------
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch before update on public.profiles
  for each row execute function public.touch_updated_at();

-- ============================================================
-- KEEP-ALIVE (ücretsiz plan 7 günde duraklamasın diye)
-- ============================================================
create table if not exists public.keep_alive (
  id         int primary key default 1,
  pinged_at  timestamptz default now()
);
insert into public.keep_alive (id) values (1) on conflict (id) do nothing;

alter table public.keep_alive enable row level security;
