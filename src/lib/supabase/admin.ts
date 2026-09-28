// SAFETY: SERVICE ROLE — server-side only.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

if (typeof window !== 'undefined') {
  throw new Error('[supabase/admin] Must not be imported on the client side.');
}

const url =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_englishydsstudying_SUPABASE_URL ||
  process.env.englishydsstudying_NEXT_PUBLIC_SUPABASE_URL ||
  '';

const serviceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.englishydsstudying_SUPABASE_SERVICE_ROLE_KEY ||
  process.env.englishydsstudying_SUPABASE_SECRET_KEY ||
  '';

export const adminClient = createClient<Database>(
  url || 'https://placeholder.supabase.co',
  serviceKey || 'placeholder-service-key',
  {
    auth: { autoRefreshToken: false, persistSession: false },
  }
);
