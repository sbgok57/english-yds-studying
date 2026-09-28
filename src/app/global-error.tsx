// ============================================================
// KÖK hata sınırı — layout bile çökse kullanıcı asla boş ekran görmez.
// (global-error kendi <html><body>'sini tanımlamak ZORUNDA)
// ============================================================
'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
}) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: '#e2e8f0' }}>
        <main
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 24,
          }}
        >
          <p style={{ fontSize: 56, margin: 0 }}>🛠️</p>
          <h1 style={{ fontSize: 22, marginTop: 16 }}>Sitede beklenmedik bir hata oluştu</h1>
          <p style={{ color: '#94a3b8', maxWidth: 420, fontSize: 14 }}>
            Ekibimiz bu hatayı görebiliyor. Lütfen sayfayı yenile; sorun devam ederse
            hata koduyla birlikte bize yaz.
          </p>
          {error.digest && (
            <code
              style={{
                marginTop: 12,
                background: '#1e293b',
                padding: '6px 12px',
                borderRadius: 8,
                fontSize: 12,
              }}
            >
              Hata kodu: {error.digest}
            </code>
          )}
          <button
            type="button"
            onClick={() => (reset ? reset() : window.location.reload())}
            style={{
              marginTop: 24,
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: 12,
              padding: '12px 28px',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            🔄 Sayfayı yenile
          </button>
        </main>
      </body>
    </html>
  );
}
