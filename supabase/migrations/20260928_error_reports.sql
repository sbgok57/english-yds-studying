-- ============================================================
-- HATA RAPORLARI (debug toolkit)
-- Yalnız SUNUCU (service role) yazar/okur — istemci doğrudan
-- erişemez (RLS politikası yok → kilitli).
-- ============================================================
create table if not exists public.error_reports (
  id         bigint generated always as identity primary key,
  user_id    uuid references auth.users (id) on delete set null,
  message    text not null,
  stack      text,
  url        text,
  user_agent text,
  context    jsonb not null default '{}'::jsonb,
  resolved   boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists error_reports_created_idx
  on public.error_reports (created_at desc);
create index if not exists error_reports_resolved_idx
  on public.error_reports (resolved) where resolved = false;

alter table public.error_reports enable row level security;
