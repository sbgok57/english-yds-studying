"use client";

/** Kök seviye hata yakalayıcı (layout dahil). */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr" className="dark">
      <body style={{ background: "#020617", color: "#e2e8f0", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ maxWidth: 420, textAlign: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 40 }}>
            <div style={{ fontSize: 48 }}>🧯</div>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: "12px 0" }}>Kanka, kritik bir hata oldu.</h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
              Site tamamen durmadı — tek tıkla geri dönelim. {error.message ? `(${error.message})` : ""}
            </p>
            <button
              onClick={reset}
              style={{ marginTop: 16, padding: "12px 24px", borderRadius: 999, border: "none", background: "linear-gradient(90deg,#ec4899,#8b5cf6)", color: "#fff", fontWeight: 700, cursor: "pointer" }}
            >
              🔄 Tekrar Dene
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
