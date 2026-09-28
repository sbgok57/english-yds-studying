// ============================================================
// Toast görüntüleyici — root layout'a BİR KEZ ekle:
//   <ErrorToast />
// Hatalar Türkçe, otomatik kapanır, dokununca kapanır.
// ============================================================
'use client';

import { useEffect, useState } from 'react';
import { onToast, type ToastDetail } from '@/lib/error/toast';

interface Toast extends ToastDetail {
  id: number;
}

let seq = 0;

export default function ErrorToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    return onToast((detail) => {
      const id = ++seq;
      setToasts((list) => [...list.slice(-3), { ...detail, id }]);
      setTimeout(() => {
        setToasts((list) => list.filter((t) => t.id !== id));
      }, 6000);
    });
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[100] flex flex-col items-center gap-2 px-4">
      {toasts.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => setToasts((list) => list.filter((x) => x.id !== t.id))}
          className={`pointer-events-auto w-full max-w-md rounded-xl px-4 py-3 text-left text-sm font-medium shadow-lg backdrop-blur transition ${
            t.kind === 'error'
              ? 'bg-red-600/95 text-white'
              : t.kind === 'ok'
                ? 'bg-emerald-600/95 text-white'
                : 'bg-slate-800/95 text-white'
          }`}
        >
          {t.kind === 'error' ? '⚠️ ' : t.kind === 'ok' ? '✅ ' : 'ℹ️ '}
          {t.message}
        </button>
      ))}
    </div>
  );
}
