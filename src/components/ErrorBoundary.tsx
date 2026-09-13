"use client";

import { Component, type ReactNode } from "react";

/** İkinci güvenlik katmanı: herhangi bir render hatasında sayfayı çökertmez,
 *  "Tekrar Dene" ile kurtarır. Route seviyesindeki app/error.tsx ile birlikte çalışır. */
export default class ErrorBoundary extends Component<
  { children: ReactNode; label?: string },
  { hasError: boolean; msg: string }
> {
  constructor(props: { children: ReactNode; label?: string }) {
    super(props);
    this.state = { hasError: false, msg: "" };
  }

  static getDerivedStateFromError(err: unknown) {
    return {
      hasError: true,
      msg: err instanceof Error ? err.message : "Bilinmeyen hata",
    };
  }

  componentDidCatch(err: unknown) {
    console.error("[YDS Master] Bileşen hatası yakalandı:", err);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center p-6">
          <div className="card-vibrant p-10 text-center max-w-md w-full space-y-4">
            <div className="text-5xl">🛠️</div>
            <h2 className="text-2xl font-black">Kanka, küçük bir terslik oldu!</h2>
            <p className="text-sm text-white/60 leading-relaxed">
              {this.props.label || "Bu bölüm"} yüklenirken bir hata oluştu. Panik yok —
              site ayakta, sadece bu kısım sıfırlandı. Aşağıdan tekrar deneyebilirsin.
            </p>
            <p className="text-[11px] font-mono text-white/40 break-words">
              Hata: {this.state.msg || "—"}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => this.setState({ hasError: false, msg: "" })}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform"
              >
                🔄 Tekrar Dene
              </button>
              <a
                href="/"
                className="px-6 py-3 rounded-full border border-white/20 font-bold hover:bg-white/10 transition-all"
              >
                Ana Sayfa
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
