// ============================================================
// DEBUG PANEL — telefonda DevTools olmadığı için mini hata merkezi.
// Açma: herhangi bir sayfaya ?debug=1 ekle (veya localStorage 'yds:debug'='1')
// "Raporu kopyala" → panoya JSON geçer → doğrudan Claude'a yapıştırılır.
// Root layout'a BİR KEZ ekle: <DebugPanel />
// ============================================================
'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  CAPTURE_EVENT,
  clearRecentErrors,
  getRecentErrors,
  type CapturedError,
} from '@/lib/debug/capture';

export default function DebugPanel() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<CapturedError[]>([]);
  const [copied, setCopied] = useState(false);
  const [isPersisted, setIsPersisted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isUrlDebug = window.location.search.includes('debug=1');
    const isStorageDebug = localStorage.getItem('yds:debug') === '1';
    const flag = isUrlDebug || isStorageDebug;
    setVisible(flag);
    setIsPersisted(isStorageDebug);

    if (!flag) return;
    setErrors(getRecentErrors());
    const onErr = () => setErrors([...getRecentErrors()]);
    window.addEventListener(CAPTURE_EVENT, onErr);
    return () => window.removeEventListener(CAPTURE_EVENT, onErr);
  }, []);

  const copyReport = useCallback(async () => {
    const report = {
      sayfa: window.location.href,
      zaman: new Date().toISOString(),
      tarayici: navigator.userAgent,
      ekran: `${window.innerWidth}x${window.innerHeight}`,
      yakalanan_hatalar: getRecentErrors(),
    };
    try {
      await navigator.clipboard.writeText(JSON.stringify(report, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      void err;
    }
  }, []);

  const togglePersistence = () => {
    if (typeof window === 'undefined') return;
    const next = !isPersisted;
    localStorage.setItem('yds:debug', next ? '1' : '0');
    setIsPersisted(next);
  };

  if (!visible) return null;

  return (
    <>
      {/* Yüzen buton */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-[90] flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-lg shadow-lg ring-2 ring-amber-400"
        aria-label="Debug paneli"
      >
        🐞{errors.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            {errors.length}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed inset-x-2 bottom-20 z-[90] max-h-[60vh] overflow-auto rounded-2xl border border-slate-700 bg-slate-900 p-4 font-mono text-xs text-slate-200 shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <strong className="text-amber-400">🐞 DEBUG PANEL</strong>
            <button
              type="button"
              onClick={togglePersistence}
              className="rounded bg-slate-700 px-2 py-1 text-[11px]"
            >
              kalıcı: {isPersisted ? 'açık' : 'kapalı'}
            </button>
          </div>

          <p className="mb-2 break-all text-slate-400">{typeof window !== 'undefined' ? window.location.pathname : ''}</p>

          <div className="mb-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={copyReport}
              className="rounded-lg bg-blue-600 px-3 py-1.5 font-semibold text-white"
            >
              {copied ? '✅ Kopyalandı' : '📋 Raporu kopyala (Claude için)'}
            </button>
            <button
              type="button"
              onClick={() => {
                clearRecentErrors();
                setErrors([]);
              }}
              className="rounded-lg bg-slate-700 px-3 py-1.5"
            >
              🧹 Temizle
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-lg bg-slate-700 px-3 py-1.5"
            >
              🔄 Yenile
            </button>
          </div>

          {errors.length === 0 ? (
            <p className="text-emerald-400">✅ Yakalanan hata yok.</p>
          ) : (
            <ul className="space-y-2">
              {[...errors].reverse().map((e, i) => (
                <li key={i} className="rounded-lg bg-slate-800 p-2">
                  <p className="font-bold text-red-400">
                    [{e.type}] {e.ts.slice(11, 19)}
                  </p>
                  <p className="break-all">{e.message}</p>
                  {e.url && <p className="text-slate-500">{e.url}</p>}
                  {e.stack && <pre className="mt-1 max-h-24 overflow-auto whitespace-pre-wrap text-slate-500">{e.stack}</pre>}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
