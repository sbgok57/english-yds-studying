"use client";

import { useEffect } from "react";
import { launchFireworks } from "@/lib/fireworks";

export default function Celebration({
  show,
  message,
  sub,
  onDone,
}: {
  show: boolean;
  message: string;
  sub?: string;
  onDone: () => void;
}) {
  useEffect(() => {
    if (!show) return;
    launchFireworks(2800);
    const t = setTimeout(onDone, 3000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[70] pointer-events-none flex items-center justify-center p-4">
      <div className="anim-pop text-center px-8 py-6 rounded-3xl border border-white/20 bg-slate-900/90 backdrop-blur-xl shadow-2xl max-w-md">
        <div className="text-6xl mb-2 animate-bounce">🎆</div>
        <p className="text-2xl font-black gradient-text">{message}</p>
        {sub && <p className="text-sm text-white/70 mt-2">{sub}</p>}
      </div>
    </div>
  );
}
