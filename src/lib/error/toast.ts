// ============================================================
// Hafif hata/bilgi toast sistemi — context/provider gerektirmez.
// Kullanım (istemci):
//   import { showError, showOk } from '@/lib/error/toast'
//   if (!r.ok) showError(r.error.message)
// ============================================================

export type ToastKind = 'error' | 'ok' | 'info'

export interface ToastDetail {
  kind: ToastKind
  message: string
}

const EVENT = 'yds:toast'

export function pushToast(kind: ToastKind, message: string) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent<ToastDetail>(EVENT, { detail: { kind, message } }))
}

export const showError = (message: string) => pushToast('error', message)
export const showOk = (message: string) => pushToast('ok', message)
export const showInfo = (message: string) => pushToast('info', message)

export function onToast(handler: (detail: ToastDetail) => void): () => void {
  if (typeof window === 'undefined') return () => {}
  const listener = (e: Event) => handler((e as CustomEvent<ToastDetail>).detail)
  window.addEventListener(EVENT, listener)
  return () => window.removeEventListener(EVENT, listener)
}
