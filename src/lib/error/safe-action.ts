// ============================================================
// Server action sarmalayıcısı — hiçbir server action ham hata fırlatmaz.
// Kullanım:
//   export async function myAction(...) {
//     return safeAction('auth.verify', async () => { ... })
//   }
// ============================================================
import { toAppError } from './app-error';
import { logError, logInfo, newCid } from './logger';

export type ActionResponse<T> =
  | { ok: true; data: T }
  | { ok: false; error: { code: string; message: string; cid: string } };

export async function safeAction<T>(
  name: string,
  fn: (ctx: { cid: string }) => Promise<T>
): Promise<ActionResponse<T>> {
  const cid = newCid();
  const started = Date.now();

  try {
    const data = await fn({ cid });
    logInfo({
      cid,
      code: 'ACTION_OK',
      message: `${name} (${Date.now() - started}ms)`,
    });
    return { ok: true, data };
  } catch (e) {
    const appErr = toAppError(e, { action: name });
    logError({
      cid,
      code: appErr.code,
      message: appErr.message,
      context: appErr.context,
    });
    return {
      ok: false,
      error: {
        code: appErr.code,
        message: appErr.userMessage,
        cid,
      },
    };
  }
}
