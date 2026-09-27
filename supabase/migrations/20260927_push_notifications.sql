-- ============================================================
-- YDS EXAM – PUSH BİLDİRİM SİSTEMİ (Supabase migration)
-- Abonelikler + kullanıcı bildirim tercihleri
-- ============================================================

-- 1) Push abonelikleri (her cihaz/tarayıcı için bir satır)
create table if not exists public.push_subscriptions (
  id              uuid primary key default gen_random_uuid(),
  user_id         text not null,
  endpoint        text not null,
  p256dh          text not null,
  auth_key        text not null,
  user_agent      text,
  created_at      timestamptz not null default now(),
  last_success_at timestamptz,
  fail_count      integer not null default 0,
  unique (user_id, endpoint)
);

create index if not exists push_subscriptions_user_idx
  on public.push_subscriptions (user_id);

-- 2) Bildirim tercihleri (kullanıcı başına tek satır)
create table if not exists public.notification_settings (
  user_id             text primary key,
  enabled             boolean not null default true,
  reminders           boolean not null default true,   -- hatırlatıcı
  motivation          boolean not null default true,   -- motive edici
  funny               boolean not null default true,   -- komik
  reminder_time       text    not null default '20:00',-- günlük hatırlatma saati (Türkiye saati)
  exam_date           date,                            -- YDS sınav tarihi (geri sayım için)
  timezone            text    not null default 'Europe/Istanbul',
  last_reminder_on    date,                            -- aynı gün çift gönderimi engeller
  last_motivation_on  date,
  last_funny_on       date,
  updated_at          timestamptz not null default now()
);

-- updated_at otomatik güncellensin
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists notification_settings_updated_at on public.notification_settings;
create trigger notification_settings_updated_at
  before update on public.notification_settings
  for each row execute function public.set_updated_at();

-- ============================================================
-- RLS: kullanıcı yalnızca KENDİ verisini görür/değiştirir
-- ============================================================
alter table public.push_subscriptions    enable row level security;
alter table public.notification_settings enable row level security;

drop policy if exists "push_sub_select_own" on public.push_subscriptions;
create policy "push_sub_select_own" on public.push_subscriptions
  for select using ((auth.uid())::text = user_id);

drop policy if exists "push_sub_insert_own" on public.push_subscriptions;
create policy "push_sub_insert_own" on public.push_subscriptions
  for insert with check ((auth.uid())::text = user_id);

drop policy if exists "push_sub_delete_own" on public.push_subscriptions;
create policy "push_sub_delete_own" on public.push_subscriptions
  for delete using ((auth.uid())::text = user_id);

drop policy if exists "notif_settings_all_own" on public.notification_settings;
create policy "notif_settings_all_own" on public.notification_settings
  for all using ((auth.uid())::text = user_id) with check ((auth.uid())::text = user_id);
