// ============================================================
// Güvenli Supabase katmanı — her sorgu Result döner.
// Kullanım:
//   const r = await run(supabase.from('profiles').select('*').eq('id', uid).single())
//   if (!r.ok) throw r.error            // AppError → üst katman yakalar
//   const profile = r.data
// ============================================================
import { AppError, fromPostgrestError } from '@/lib/error/app-error';

type SupabaseResponse<T> = { data: T | null; error: { message: string; code?: string } | null };

export type QueryResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: AppError };

/** Postgrest yanıtını Result'a çevirir (tek satır bekleyen sorgular) */
export function fromQuery<T>(res: SupabaseResponse<T>, context?: Record<string, unknown>): QueryResult<T> {
  if (res.error) {
    return { ok: false, error: fromPostgrestError(res.error, context) };
  }
  return { ok: true, data: res.data as T };
}

/** `.maybeSingle()` gibi null dönebilen sorgular için */
export function fromMaybeQuery<T>(
  res: SupabaseResponse<T | null>,
  notFoundMessage = 'Aradığın kayıt bulunamadı.',
  context?: Record<string, unknown>
): QueryResult<T> {
  if (res.error) return { ok: false, error: fromPostgrestError(res.error, context) };
  if (res.data == null) {
    return { ok: false, error: new AppError('DB_ROW_NOT_FOUND', notFoundMessage, { context }) };
  }
  return { ok: true, data: res.data };
}

/** Promise dönen builder'ları bekleyip Result verir */
export async function run<T>(
  builder: PromiseLike<SupabaseResponse<T>>,
  context?: Record<string, unknown>
): Promise<QueryResult<T>> {
  try {
    return fromQuery(await builder, context);
  } catch (e) {
    const { toAppError } = await import('@/lib/error/app-error');
    return { ok: false, error: toAppError(e, context) };
  }
}
