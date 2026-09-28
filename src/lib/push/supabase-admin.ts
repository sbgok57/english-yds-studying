// ============================================================
// Service-role Supabase istemcisi — YALNIZCA sunucu tarafı (API route / cron).
// RLS'yi aşar; bu yüzden asla client component'lerine import etme!
// ============================================================
import { createClient } from '@supabase/supabase-js';

if (typeof window !== 'undefined') {
  throw new Error('[push/supabase-admin] Client bundle içinde asla import edilmemelidir!');
}

export function createAdminClient() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_englishydsstudying_SUPABASE_URL ||
    process.env.englishydsstudying_NEXT_PUBLIC_SUPABASE_URL;

  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.englishydsstudying_SUPABASE_SERVICE_ROLE_KEY ||
    process.env.englishydsstudying_SUPABASE_SECRET_KEY;

  if (!url || !key) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL ve SUPABASE_SERVICE_ROLE_KEY tanımlı olmalı.');
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
