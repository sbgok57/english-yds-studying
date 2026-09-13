"use client";

import { useUsage } from "@/lib/store";

// CPU dostu: 4 blob, GPU-friendly transform animasyonları (left/top değil).
const BLOBS = [
  { color: "#ec4899", size: "34vw", cls: "ambient-1", left: "-6%", top: "-8%" },
  { color: "#f59e0b", size: "30vw", cls: "ambient-2", left: "60%", top: "6%" },
  { color: "#22c55e", size: "30vw", cls: "ambient-3", left: "70%", top: "52%" },
  { color: "#8b5cf6", size: "34vw", cls: "ambient-1", left: "8%", top: "58%" },
];

export default function AmbientBackground() {
  const { usage, update } = useUsage();
  const on = usage.ambient !== false;

  return (
    <>
      {/* Gökkuşağı ambians katmanı */}
      {on && (
        <div
          className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
          aria-hidden
        >
          {BLOBS.map((b, i) => (
            <div
              key={i}
              className={`ambient-blob ${b.cls}`}
              style={{
                width: b.size,
                height: b.size,
                left: b.left,
                top: b.top,
                background: `radial-gradient(circle at center, ${b.color} 0%, transparent 70%)`,
              }}
            />
          ))}
        </div>
      )}

      {/* Aç/kapa düğmesi */}
      <button
        onClick={() => update((u) => ({ ...u, ambient: !(u.ambient !== false) }))}
        className="fixed bottom-4 left-4 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-slate-900/80 backdrop-blur-xl text-sm font-bold text-white/80 hover:text-white hover:scale-105 transition-all shadow-xl"
        title="Gökkuşağı ambiansını aç/kapat"
      >
        <span className={on ? "" : "inline-block opacity-40"}>🌈</span>
        {on ? "Ortam Açık" : "Ortam Kapalı"}
      </button>
    </>
  );
}
