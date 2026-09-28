// ============================================================
// TRACER — Kapsamlı izleme altyapısı (sıfır maliyetle aç/kapa)
// ?debug=1 veya localStorage 'yds:debug'='1' olduğunda aktiftir.
// Kapalıyken tarayıcı / sunucu performansına sıfır ek yük getirir.
// ============================================================

export function isDebugEnabled(): boolean {
  if (typeof window === 'undefined') {
    return process.env.DEBUG === '1' || process.env.NODE_ENV === 'development';
  }
  try {
    return (
      window.location.search.includes('debug=1') ||
      localStorage.getItem('yds:debug') === '1'
    );
  } catch (err) {
    void err;
    return false;
  }
}

export function trace(topic: string, message: string, data?: unknown) {
  if (!isDebugEnabled()) return;
  const now = new Date().toISOString().slice(11, 23);
  const prefix = `[TRACE:${topic}] ${now} — ${message}`;
  if (data !== undefined) {
    console.info(prefix, data);
  } else {
    console.info(prefix);
  }
}

export async function timeAsync<T>(
  topic: string,
  label: string,
  fn: () => Promise<T>
): Promise<T> {
  if (!isDebugEnabled()) {
    return fn();
  }
  const t0 = performance.now();
  trace(topic, `START: ${label}`);
  try {
    const result = await fn();
    const ms = (performance.now() - t0).toFixed(2);
    trace(topic, `SUCCESS: ${label} (${ms}ms)`);
    return result;
  } catch (err) {
    const ms = (performance.now() - t0).toFixed(2);
    trace(topic, `ERROR: ${label} (${ms}ms)`, err);
    throw err;
  }
}
