"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchSite, type SiteEntry } from "@/lib/site-index";

/** Google tarzı canlı önerili arama kutusu. Kelime/konu/sınav ne ararsan çıkar. */
export default function SearchBox({ autoFocus = false }: { autoFocus?: boolean }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [results, setResults] = useState<SiteEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    const t = q.trim();
    if (!t) {
      setResults([]);
      setOpen(false);
      return;
    }
    setResults(searchSite(t, 12));
    setOpen(true);
    setActive(-1);
  }, [q]);

  const go = (href: string) => {
    setOpen(false);
    setQ("");
    setResults([]);
    router.push(href);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results.length > 0) go(results[active >= 0 ? active : 0].href);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={boxRef} className="relative w-full max-w-md">
      <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 h-10 focus-within:border-cyan-400/60 focus-within:bg-white/[0.09] transition-colors">
        <span className="text-white/50 text-sm">🔍</span>
        <input
          value={q}
          autoFocus={autoFocus}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => q.trim() && setOpen(true)}
          onKeyDown={onKey}
          placeholder="Kelime, konu, sınav ara… (örn. abundant, tenses, 2024)"
          className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/40"
          aria-label="Ara"
        />
        {q && (
          <button
            onClick={() => {
              setQ("");
              setOpen(false);
            }}
            className="text-white/40 hover:text-white text-xs font-bold"
            aria-label="Temizle"
          >
            ✕
          </button>
        )}
      </div>

      {open && (
        <div className="absolute top-12 left-0 right-0 z-[70] rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden">
          {results.length === 0 ? (
            <div className="px-4 py-5 text-sm text-white/50 text-center">
              😕 Aradığın şey bulunamadı kanka. Farklı bir kelime dene — İngilizce kelimeler,
              konu adları veya yıl (örn. <span className="text-white/80 font-bold">2013</span>) yaz.
            </div>
          ) : (
            <ul className="max-h-[60vh] overflow-y-auto py-1">
              {results.map((r, i) => (
                <li key={`${r.type}-${r.label}-${i}`}>
                  <button
                    onClick={() => go(r.href)}
                    onMouseEnter={() => setActive(i)}
                    className={`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors ${
                      active === i ? "bg-white/10" : ""
                    }`}
                  >
                    <span className="text-lg">{r.emoji}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-white truncate">{r.label}</span>
                      <span className="block text-[11px] text-white/50 truncate">{r.sub}</span>
                    </span>
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-cyan-300/80 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-2 py-0.5">
                      {r.type}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
