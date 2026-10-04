"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { WORDS } from "@/lib/data-vocabulary";
import Celebration from "@/components/Celebration";
import { useUsage, recordWord } from "@/lib/store";
import { logGameComplete } from "@/lib/activity-logger";

interface Card {
  id: number;
  pair: number;
  text: string;
  kind: "en" | "tr";
}

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

export default function MatchPairs() {
  const { update, addXp } = useUsage();
  const [cards, setCards] = useState<Card[]>([]);
  const [open, setOpen] = useState<number[]>([]);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [msg, setMsg] = useState("");
  const [sub, setSub] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // SAFETY: Clear timeout on unmount to prevent leaks and setState on unmounted component
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const build = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const picked = shuffle(WORDS).slice(0, 8);
    const c: Card[] = [];
    picked.forEach((w, i) => {
      c.push({ id: i * 2, pair: i, text: w.word, kind: "en" });
      c.push({ id: i * 2 + 1, pair: i, text: w.tr, kind: "tr" });
    });
    setCards(shuffle(c));
    setOpen([]);
    setMatched(new Set());
    setMoves(0);
  };

  useEffect(() => {
    build();
  }, []);

  const done = matched.size === 8;

  const flip = (idx: number) => {
    if (open.length === 2 || open.includes(idx) || matched.has(idx)) return;
    const nextOpen = [...open, idx];
    setOpen(nextOpen);
    if (nextOpen.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = nextOpen;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (cards[a].pair === cards[b].pair && cards[a].kind !== cards[b].kind) {
        setMatched((prev) => {
          const nextSet = new Set(prev).add(a).add(b);
          if (nextSet.size === 8) {
            void logGameComplete({
              gameId: "match-pairs",
              gameTitle: "Eşleştirme (Kelime ↔ Anlam)",
              score: 120,
              streak: 8,
              timeSpentMinutes: 3,
              wordsPlayed: 8,
              details: `8/8 Çift Eşleştirildi (${moves + 1} Hamle)`,
            });
          }
          return nextSet;
        });
        setOpen([]);
        const enWord = cards[a].kind === "en" ? cards[a].text : cards[b].text;
        recordWord(update, enWord, true);
        addXp(15, `match-pairs-${enWord}`);
        setMsg("Eşleştirdin kanka! 🔥 (+15 XP)");
        setSub(`${cards[a].text} = ${cards[b].text} — Hafızana kaydedildi!`);
        setCelebrate(true);
      } else {
        timeoutRef.current = setTimeout(() => setOpen([]), 900);
      }
    }
  };

  const matchedCount = matched.size / 2;

  return (
    <div className="max-w-3xl mx-auto">
      <Celebration show={celebrate} onDone={() => setCelebrate(false)} message={msg} sub={sub} short />

      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div className="text-sm text-white/60">
          Eşleşen: <b className="text-emerald-300">{matchedCount}/8</b> · Hamle: {moves}
        </div>
        <button
          onClick={build}
          className="px-4 py-2 rounded-full text-sm font-bold border border-white/20 hover:bg-white/10 transition-all"
        >
          🔄 Yeni Oyun
        </button>
      </div>

      <p className="text-sm text-white/50 mb-4">
        Kanka, İngilizce kelimeyi Türkçe karşılığıyla eşleştir. İki kart aç, doğru çifti bul!
      </p>

      <div className="grid grid-cols-4 gap-2">
        {cards.map((c, i) => {
          const isOpen = open.includes(i) || matched.has(i);
          const isMatch = matched.has(i);
          return (
            <button
              key={c.id}
              onClick={() => flip(i)}
              className={`aspect-[4/5] rounded-xl border text-sm font-bold transition-all duration-300 ${
                isMatch
                  ? "border-emerald-400/60 bg-emerald-500/20 text-emerald-200 scale-95"
                  : isOpen
                  ? "border-cyan-400/60 bg-cyan-500/15 text-white scale-100"
                  : "border-white/15 bg-white/[0.05] text-transparent hover:border-white/40"
              }`}
              style={{ perspective: "1000px" }}
            >
              <span className="flex items-center justify-center h-full px-1 text-center leading-tight">
                {isOpen || isMatch ? c.text : "🃏"}
              </span>
            </button>
          );
        })}
      </div>

      {done && (
        <div className="mt-6 text-center anim-pop">
          <p className="text-xl font-black gradient-text">Hepsini eşleştirdin kral! 👑</p>
          <p className="text-sm text-white/60 mt-1">Toplam {moves} hamle. Harika hafıza!</p>
        </div>
      )}
    </div>
  );
}
