// ============================================================
// auth.ts — Supabase: 6 haneli e-posta doğrulama + kalıcı oturum
// YDS YDT Projesi için tip güvenli ve kalıcı oturum yönetimi.
// service_role ANAHTARI ASLA BURADA KULLANILMAZ.
// ============================================================
import { createClient, type AuthChangeEvent, type Session, type User } from '@supabase/supabase-js';
import type { Database } from './database.types';

// Browser ve SSR/Next.js uyumlu ortam değişkeni okuma
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    // --- KALICILIK AYARLARI ---
    persistSession: true,     // Oturumu localStorage'a yazar → sayfa yenilenince çıkmaz
    autoRefreshToken: true,   // Access token (1 saat) bitmeden otomatik yeniler
    detectSessionInUrl: true, // Link veya OTP dönüşünde oturumu yakalar
    storageKey: 'yds-auth',   // Özel localStorage anahtarı
    flowType: 'pkce',         // Güvenli PKCE akışı
  },
});

export interface KayitExtra {
  fullName?: string;
  level?: string;
  targetScore?: number;
}

// ------------------------------------------------------------
// 1) KAYIT: Kullanıcıya 6 haneli kod gider
//    Supabase Dashboard'da "Confirm signup" şablonunda {{ .Token }} olmalıdır.
// ------------------------------------------------------------
export async function kayitOl(email: string, password: string, extra: KayitExtra = {}) {
  const { data, error } = await supabase.auth.signUp({
    email: email.trim().toLowerCase(),
    password,
    options: {
      data: {
        full_name: extra.fullName ?? '',
        level: extra.level ?? 'B1',
        target_score: extra.targetScore ?? 70,
      },
    },
  });
  if (error) return { error };

  // Confirm email AÇIKSA: data.session null döner → kod ekranına yönlendir
  if (data.session === null) return { needsCode: true, email, user: data.user };

  // Confirm email kapalıysa (test modu) direkt oturum döner
  return { user: data.user, session: data.session };
}

// ------------------------------------------------------------
// 2) KODU DOĞRULA → Oturum açılır
// ------------------------------------------------------------
export async function koduDogrula(email: string, token: string) {
  const cleanToken = token.trim().replace(/\s/g, '');
  const { data, error } = await supabase.auth.verifyOtp({
    email: email.trim().toLowerCase(),
    token: cleanToken,
    type: 'signup', // signUp() ile başlatıldıysa 'signup'. signInWithOtp ile ise 'email'
  });
  if (error) return { error };
  return { user: data.user, session: data.session };
}

// ------------------------------------------------------------
// 3) KODU TEKRAR GÖNDER (60 sn cooldown ile çağrılmalı)
// ------------------------------------------------------------
export async function koduTekrarGonder(email: string) {
  return supabase.auth.resend({
    type: 'signup',
    email: email.trim().toLowerCase(),
  });
}

// ------------------------------------------------------------
// 4) ŞİFRESİZ GİRİŞ (Magic link veya tek seferlik OTP)
// ------------------------------------------------------------
export async function kodlaGirisIstegi(email: string) {
  return supabase.auth.signInWithOtp({
    email: email.trim().toLowerCase(),
    options: { shouldCreateUser: false },
  });
}

export async function kodlaGirisDogrula(email: string, token: string) {
  return supabase.auth.verifyOtp({
    email: email.trim().toLowerCase(),
    token: token.trim().replace(/\s/g, ''),
    type: 'email',
  });
}

// ------------------------------------------------------------
// 5) NORMAL GİRİŞ & ÇIKIŞ
// ------------------------------------------------------------
export async function girisYap(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password,
  });
}

// scope: 'local' → sadece bu cihaz. 'global' → tüm cihazlardan çıkış yapar
export async function cikisYap(scope: 'local' | 'global' = 'local') {
  return supabase.auth.signOut({ scope });
}

// ------------------------------------------------------------
// 6) OTURUM TAKİBİ
//    onAuthStateChange ile SPA reaktif state güncellenir.
// ------------------------------------------------------------
export function oturumDinle(onChange: (event: AuthChangeEvent, session: Session | null) => void) {
  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    onChange(event, session);
  });
  return () => data.subscription.unsubscribe();
}

export async function aktifKullanici(): Promise<User | null> {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return null;
  return data.user;
}

// ------------------------------------------------------------
// 7) YDS İLERLEMESİNİ KAYDET (Kalıcı PostgreSQL + RLS verisi)
// ------------------------------------------------------------
export interface CevapKayitParams {
  module: string;
  questionId: string;
  correct: boolean;
  timeSpentMs?: number;
}

export async function cevabiKaydet({
  module,
  questionId,
  correct,
  timeSpentMs,
}: CevapKayitParams) {
  const user = await aktifKullanici();
  if (!user) return { error: { message: 'Oturum açılmamış' } };

  return supabase.from('user_progress').upsert(
    {
      user_id: user.id,
      module,
      question_id: questionId,
      correct,
      time_spent_ms: timeSpentMs ?? null,
      answered_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,module,question_id' }
  );
}

export async function ilerlemeyiGetir(moduleName?: string) {
  const user = await aktifKullanici();
  if (!user) return { data: null, error: { message: 'Oturum yok' } };

  let query = supabase.from('user_progress').select('*').eq('user_id', user.id);
  if (moduleName) {
    query = query.eq('module', moduleName);
  }
  return query.order('answered_at', { ascending: false }).limit(500);
}

// ------------------------------------------------------------
// 8) DENEME SONUCU KAYDET & LİSTELE
// ------------------------------------------------------------
export interface DenemeKayitParams {
  denemeAdi: string;
  dogru: number;
  yanlis: number;
  bos: number;
  sureSn?: number;
}

export async function denemeSonucuKaydet({
  denemeAdi,
  dogru,
  yanlis,
  bos,
  sureSn,
}: DenemeKayitParams) {
  const user = await aktifKullanici();
  if (!user) return { error: { message: 'Oturum yok' } };

  return supabase.from('deneme_sonuclari').insert({
    user_id: user.id,
    deneme_adi: denemeAdi,
    dogru,
    yanlis,
    bos,
    sure_sn: sureSn ?? null,
    created_at: new Date().toISOString(),
  });
}

export async function denemeSonuclariGetir() {
  const user = await aktifKullanici();
  if (!user) return { data: null, error: { message: 'Oturum yok' } };

  return supabase
    .from('deneme_sonuclari')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });
}

// ------------------------------------------------------------
// 9) KELİME DEFTERİ İŞLEMLERİ
// ------------------------------------------------------------
export async function kelimeKaydet(word: string, meaning?: string, known: boolean = false) {
  const user = await aktifKullanici();
  if (!user) return { error: { message: 'Oturum yok' } };

  return supabase.from('user_words').upsert(
    {
      user_id: user.id,
      word: word.trim().toLowerCase(),
      meaning: meaning ?? null,
      known,
      created_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,lower(word)' }
  );
}

export async function kelimeleriGetir(onlyUnknown = false) {
  const user = await aktifKullanici();
  if (!user) return { data: null, error: { message: 'Oturum yok' } };

  let query = supabase.from('user_words').select('*').eq('user_id', user.id);
  if (onlyUnknown) {
    query = query.eq('known', false);
  }
  return query.order('created_at', { ascending: false });
}
