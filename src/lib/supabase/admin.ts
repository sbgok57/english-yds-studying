// SAFETY: SERVICE ROLE — server-side only.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

if (typeof window !== 'undefined') {
  throw new Error('[supabase/admin] Must not be imported on the client side.');
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  throw new Error(
    '[supabase/admin] Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars.'
  );
}

export const adminClient = createClient<Database>(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});
