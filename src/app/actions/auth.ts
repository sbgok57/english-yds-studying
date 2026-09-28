// ============================================================
// Auth Server Actions (Hata Kalkanı Entegrasyonu)
// safeAction + fromAuthError deseni:
// Tüm hatalar Türkçe AppError olarak döner, asla ham hata sızmaz.
// ============================================================
'use server';

import { safeAction } from '@/lib/error/safe-action';
import { fromAuthError } from '@/lib/error/app-error';
import { createClient } from '@/lib/supabase/server';

export async function signupAction(email: string, password: string, fullName?: string) {
  return safeAction('auth.signup', async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        data: { full_name: fullName || '' },
      },
    });
    if (error) throw fromAuthError(error);
    return {
      userId: data.user?.id,
      needsCode: data.session === null,
    };
  });
}

export async function verifyCodeAction(email: string, token: string) {
  return safeAction('auth.verify', async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.verifyOtp({
      email: email.trim().toLowerCase(),
      token: token.trim().replace(/\s/g, ''),
      type: 'signup',
    });
    if (error) throw fromAuthError(error);
    return {
      sessionId: !!data.session?.access_token,
      userId: data.user?.id,
    };
  });
}

export async function resendCodeAction(email: string) {
  return safeAction('auth.resend', async () => {
    const supabase = await createClient();
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: email.trim().toLowerCase(),
    });
    if (error) throw fromAuthError(error);
    return { sent: true };
  });
}

export async function resetPasswordAction(email: string) {
  return safeAction('auth.reset', async () => {
    const supabase = await createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase());
    if (error) throw fromAuthError(error);
    return { sent: true };
  });
}
