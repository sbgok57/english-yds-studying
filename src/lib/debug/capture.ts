// ============================================================
// HATA YAKALAYICI — üretimdeki hataları KAYBETME.
// window.onerror + unhandledrejection → /api/log'a raporlanır,
// son 50 hata ring buffer'da tutulur (DebugPanel gösterir).
// Root layout'ta BİR KEZ çağır: installErrorCapture()
// ============================================================

export interface CapturedError {
  ts: string;
  type: 'window-error' | 'unhandled-rejection' | 'manual';
  message: string;
  stack?: string;
  url?: string;
  context?: Record<string, unknown>;
}

export const CAPTURE_EVENT = 'yds:captured-error';

const RING: CapturedError[] = [];
const RING_LIMIT = 50;
const seenAt = new Map<string, number>(); // aynı hatayı 5 sn'de bir raporla

let installed = false;

function dedupe(key: string): boolean {
  const now = Date.now();
  const last = seenAt.get(key) ?? 0;
  seenAt.set(key, now);
  return now - last < 5000; // true → YUT (yeni değil)
}

function push(entry: CapturedError) {
  RING.push(entry);
  if (RING.length > RING_LIMIT) RING.shift();
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CAPTURE_EVENT, { detail: entry }));
  }
}

async function report(entry: CapturedError) {
  const key = `${entry.type}:${entry.message}`.slice(0, 300);
  if (dedupe(key)) return;
  push(entry);
  try {
    await fetch('/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: entry.message.slice(0, 2000),
        stack: entry.stack?.slice(0, 8000),
        url: entry.url,
        context: entry.context,
        severity: 'error',
      }),
      keepalive: true, // sayfa kapanırken bile rapor gitsin
    });
  } catch (err) {
    // Raporlama hatası kullanıcıya asla yansıtılmaz
    void err;
  }
}

/** Manuel yakalama: try/catch bloklarında captureError(e, {islem:'...'}) */
export function captureError(err: unknown, context?: Record<string, unknown>) {
  const e = err as Error;
  void report({
    ts: new Date().toISOString(),
    type: 'manual',
    message: e?.message ?? String(err),
    stack: e?.stack,
    url: typeof window !== 'undefined' ? window.location.pathname : undefined,
    context,
  });
}

/** Global dinleyicileri kur (idempotent) */
export function installErrorCapture() {
  if (typeof window === 'undefined' || installed) return;
  installed = true;

  window.addEventListener('error', (event) => {
    void report({
      ts: new Date().toISOString(),
      type: 'window-error',
      message: event.message,
      stack: event.error?.stack,
      url: `${event.filename}:${event.lineno}:${event.colno}`,
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason as Error;
    void report({
      ts: new Date().toISOString(),
      type: 'unhandled-rejection',
      message: reason?.message ?? String(event.reason),
      stack: reason?.stack,
      url: window.location.pathname,
    });
  });
}

/** DebugPanel ve rapor kopyalama için */
export function getRecentErrors(): CapturedError[] {
  return [...RING];
}

export function clearRecentErrors() {
  RING.length = 0;
}
