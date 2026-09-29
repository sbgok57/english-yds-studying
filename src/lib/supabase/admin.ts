// SAFETY: SERVICE ROLE — server-side only.
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

if (typeof window !== 'undefined') {
  throw new Error('[supabase/admin] Must not be imported on the client side.');
}

let cachedClient: SupabaseClient<Database> | null = null;
let lastUrl = '';
let lastKey = '';

export function getAdminClient(): SupabaseClient<Database> {
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

  if (cachedClient && url === lastUrl && serviceKey === lastKey) {
    return cachedClient;
  }

  lastUrl = url;
  lastKey = serviceKey;

  cachedClient = createClient<Database>(
    url || 'https://placeholder.supabase.co',
    serviceKey || 'placeholder-service-key',
    {
      auth: { autoRefreshToken: false, persistSession: false },
    }
  );

  return cachedClient;
}

// Transparent Proxy so imports of `adminClient` always route to current client instance
export const adminClient = new Proxy({} as SupabaseClient<Database>, {
  get(_target, prop, receiver) {
    const client = getAdminClient();
    const value = Reflect.get(client, prop, receiver);
    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  },
});
