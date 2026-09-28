// ============================================================
// API route sarmalayıcısı — hiçbir rota ham hata kaçır(a)maz.
// Kullanım:
//   export const POST = withApiHandler('push.subscribe', async (req, { cid }) => { ... })
// Her yanıt normalize: { ok, data } veya { ok:false, error:{code,message,cid} }
// ============================================================
import { NextResponse } from 'next/server'
import { AppError, toAppError } from './app-error'
import { logError, logInfo, newCid } from './logger'

export interface ApiCtx {
  cid: string
  [key: string]: unknown
}

type Handler = (req: Request, ctx: ApiCtx) => Promise<Response>

export function withApiHandler(name: string, handler: Handler) {
  return async (req: Request, routeCtx?: Record<string, unknown>): Promise<Response> => {
    const cid = newCid()
    const started = Date.now()

    try {
      const res = await handler(req, { cid, ...(routeCtx ?? {}) })
      logInfo({
        cid,
        code: 'API_OK',
        message: `${name} → ${res.status} (${Date.now() - started}ms)`,
      })
      return res
    } catch (e) {
      const appErr = toAppError(e, { route: name })
      logError({
        cid,
        code: appErr.code,
        message: appErr.message,
        context: appErr.context,
      })
      // Kullanıcıya yalnızca güvenli Türkçe mesaj + izleme kodu döner;
      // stack trace / iç ayrıntı ASLA istemciye gitmez.
      return NextResponse.json(
        { ok: false, error: { code: appErr.code, message: appErr.userMessage, cid } },
        { status: appErr.status }
      )
    }
  }
}

/** Başarı yanıtları için standart zarf */
export function jsonOk<T>(data: T, status = 200) {
  return NextResponse.json({ ok: true, data }, { status })
}

/** Beklenen bir AppError'ı yanıtla (throw etmeden erken dönüş) */
export function jsonErr(appError: AppError, cid?: string) {
  return NextResponse.json(
    { ok: false, error: { code: appError.code, message: appError.userMessage, cid } },
    { status: appError.status }
  )
}
