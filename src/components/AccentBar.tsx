"use client";

import { useState } from "react";
import {
  ACCENTS,
  getStoredAccent,
  setStoredAccent,
  speakWithAccent,
  youglishUrl,
  type AccentId,
} from "@/lib/accents";

/** 5 ayrı aksanda telaffuz düğmeleri + gerçek aksan (Youglish) linki. */
export default function AccentBar({ text }: { text: string }) {
  const [active, setActive] = useState<AccentId>(() => getStoredAccent());
  const [note, setNote] = useState("");

  const speak = (id: AccentId) => {
    setActive(id);
    setStoredAccent(id);
    speakWithAccent(text, id, setNote);
  };

  return (
    <div className="space-y-1.5">
      <div className="flex flex-wrap items-center gap-1.5">
        {ACCENTS.map((a) => (
          <button
            key={a.id}
            onClick={() => speak(a.id)}
            title={`${a.label} aksanıyla dinle`}
            className={`px-2.5 py-1 rounded-full text-[11px] font-bold border transition-all ${
              active === a.id
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white"
                : "border-white/15 bg-white/5 text-white/60 hover:text-white hover:border-cyan-400/50"
            }`}
          >
            {a.flag} {a.label}
          </button>
        ))}
        <a
          href={youglishUrl(text, active)}
          target="_blank"
          rel="noreferrer"
          title="Youglish: bu kelimenin gerçek aksanlı telaffuzlarını dinle"
          className="px-2.5 py-1 rounded-full text-[11px] font-bold border border-white/15 bg-white/5 text-white/60 hover:text-white hover:border-cyan-400/50 transition-all"
        >
          🎧 Gerçek aksan ↗
        </a>
      </div>
      {note && <p className="text-[10px] text-white/40 leading-snug">{note}</p>}
    </div>
  );
}
