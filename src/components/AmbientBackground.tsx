"use client";

import { useUsage } from "@/lib/store";

const BLOBS = [
  { color: "#ec4899", size: "46vw", cls: "ambient-1", left: "-6%", top: "-8%" },
  { color: "#f97316", size: "38vw", cls: "ambient-2", left: "58%", top: "2%" },
  { color: "#eab308", size: "34vw", cls: "ambient-3", left: "20%", top: "46%" },
  { color: "#22c55e", size: "40vw", cls: "ambient-2", left: "70%", top: "52%" },
  { color: "#06b6d4", size: "36vw", cls: "ambient-1", left: "-4%", top: "62%" },
  { color: "#8b5cf6", size: "42vw", cls: "ambient-3", left: "40%", top: "-10%" },
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
        <span className={on ? "animate-spin-slow inline-block" : "inline-block opacity-40"}>
          🌈
        </span>
        {on ? "Ortam Açık" : "Ortam Kapalı"}
      </button>
    </>
  );
}
