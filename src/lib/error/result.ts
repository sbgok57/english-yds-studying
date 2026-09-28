// ============================================================
// Result deseni — fonksiyonlar throw ETMEZ, sonuç döner.
// Çağıran taraf hatayı ele almak ZORUNDADIR (derleyici bunu görür).
// ============================================================
import { AppError, toAppError } from './app-error';

export type Result<T> = { ok: true; value: T } | { ok: false; error: AppError };

export const ok = <T>(value: T): Result<T> => ({ ok: true, value });
export const err = (error: AppError): Result<never> => ({ ok: false, error });

/**
 * Herhangi bir async işi Result'a çevirir — try/catch tek noktada:
 *   const r = await tryCatch(() => supabase.from('x').select('*'))
 *   if (!r.ok) return r.error.userMessage
 */
export async function tryCatch<T>(
  fn: () => Promise<T>,
  context?: Record<string, unknown>
): Promise<Result<T>> {
  try {
    return ok(await fn());
  } catch (e) {
    return err(toAppError(e, context));
  }
}

/** Zincirleme: yalnızca ok ise sonraki adıma geç */
export function andThen<T, U>(result: Result<T>, fn: (value: T) => Result<U>): Result<U> {
  return result.ok ? fn(result.value) : result;
}

/** Değer ya da varsayılan */
export function unwrapOr<T>(result: Result<T>, fallback: T): T {
  return result.ok ? result.value : fallback;
}
