"use client";
import { useState } from "react";
import {
  ACCENTS,
  getStoredAccent,
  setStoredAccent,
  getStoredGender,
  setStoredGender,
  speakWithAccent,
  youglishUrl,
  type AccentId,
  type Gender,
} from "@/lib/accents";

/** 6 aksan × (Kadın/Erkek) = 12 doğal telaffuz seçeneği + Youglish linki. */
export default function AccentBar({ text }: { text: string }) {
  const [accent, setAccent] = useState<AccentId>(() => getStoredAccent());
  const [gender, setGender] = useState<Gender>(() => getStoredGender());
  const [note, setNote] = useState("");

  const speak = (id: AccentId, g: Gender) => {
    setAccent(id);
    setGender(g);
    setStoredAccent(id);
    setStoredGender(g);
    speakWithAccent(text, id, g, setNote);
  };

  return (
    <div className="space-y-1.5">
      <p className="text-[10px] uppercase tracking-wider text-white/35 font-bold">
        🗣️ Aksan seç — her aksanda kadın & erkek ses
      </p>

      <div className="space-y-1">
        {ACCENTS.map((a) => {
          const isActiveAccent = accent === a.id;
          return (
            <div
              key={a.id}
              className="flex items-center gap-1.5 flex-wrap rounded-xl border border-white/10 bg-white/[0.03] px-2 py-1"
            >
              <span className="text-[11px] font-bold text-white/70 w-24 shrink-0">
                {a.flag} {a.label}
              </span>

              {(["female", "male"] as Gender[]).map((g) => {
                const isActive = isActiveAccent && gender === g;
                return (
                  <button
                    key={g}
                    onClick={() => speak(a.id, g)}
                    title={`${a.label} aksanı · ${g === "female" ? "kadın" : "erkek"} sesi`}
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold border transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white"
                        : "border-white/10 bg-white/5 text-white/55 hover:text-white hover:border-cyan-400/50"
                    }`}
                  >
                    {g === "female" ? "👩 Kadın" : "👨 Erkek"}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 pt-0.5">
        <a
          href={youglishUrl(text, accent)}
          target="_blank"
          rel="noreferrer"
          title="Youglish: bu kelimenin gerçek aksanlı telaffuzlarını dinle"
          className="px-2.5 py-1 rounded-full text-[11px] font-bold border border-white/15 bg-white/5 text-white/60 hover:text-white hover:border-cyan-400/50 transition-all"
        >
          🎧 Gerçek aksan ↗
        </a>
        <span className="text-[10px] text-white/30">
          Doğal stüdyo kalitesinde 96kbps çoklu aksan motoru.
        </span>
      </div>

      {note && <p className="text-[10px] text-cyan-200/60 leading-snug">{note}</p>}
    </div>
  );
}
