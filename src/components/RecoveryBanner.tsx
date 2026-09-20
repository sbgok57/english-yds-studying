"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  subscribeToRecovery,
  clearSessionCheckpoint,
  AnySessionCheckpoint,
} from "@/lib/state-preservation";

export default function RecoveryBanner() {
  const [session, setSession] = useState<AnySessionCheckpoint | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = subscribeToRecovery((latest) => {
      setSession(latest);
    });
    return unsubscribe;
  }, []);

  if (!session || dismissed) return null;

  // Don't show the banner if the student is currently on that exact page
  if (pathname === session.url || (session.url && pathname.startsWith(session.url))) {
    return null;
  }

  const handleResume = () => {
    router.push(session.url);
  };

  const handleDismiss = () => {
    setDismissed(true);
    clearSessionCheckpoint(session.type);
  };

  const timeAgoMin = Math.max(1, Math.floor((Date.now() - (session.updatedAt || Date.now())) / 60000));

  return (
    <aside
      aria-label="Kurtarılan çalışma oturumu"
      className="fixed bottom-5 right-5 z-50 max-w-sm w-[calc(100vw-2.5rem)] rounded-2xl border border-cyan-500/40 bg-slate-900/95 backdrop-blur-xl p-4 shadow-2xl shadow-cyan-950/50 text-white animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-lg shrink-0">
          ⏳
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Kaldığın Yerden Devam Et
            </span>
            <span className="text-[10px] text-white/40">{timeAgoMin} dk önce</span>
          </div>
          <h4 className="text-sm font-bold text-white truncate mt-0.5">{session.title}</h4>
          <p className="text-xs text-white/60 mt-1 line-clamp-1">
            {session.type === "exam" && "İşaretlediğin şıklar ve süren hafızada korundu."}
            {session.type === "optik" && "Optik form cevapların güvende."}
            {session.type === "level_test" && "Seviye testi cevapların korundu."}
            {session.type === "flashcards" && "Kelime destesi kaldığın karttan devam edecek."}
            {session.type === "grammar" && "Gramer alıştırma oturumun hazır."}
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="text-white/40 hover:text-white text-sm p-1 rounded-lg hover:bg-white/10 transition-colors"
          title="Bildirimi kapat ve oturumu temizle"
          aria-label="Kapat"
        >
          ✕
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={handleResume}
          className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-1.5"
        >
          <span>▶</span>
          <span>Devam Et</span>
        </button>
        <button
          onClick={handleDismiss}
          className="py-2 px-3 rounded-xl border border-white/10 hover:bg-white/5 text-white/60 hover:text-white text-xs font-medium transition-colors"
        >
          Temizle
        </button>
      </div>
    </aside>
  );
}
