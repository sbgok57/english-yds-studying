"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, BookOpen, Clock, Layers, X, Sparkles } from "lucide-react";

interface SearchResults {
  words: { id: string; english: string; turkish: string; level?: string; type?: string }[];
  topics: { slug: string; title: string; emoji: string }[];
  exams: { id: string; title: string }[];
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResults | null>(null);
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  // Debounce: her tuşta değil, yazma bitince ara (300ms) — performans garantisi
  useEffect(() => {
    clearTimeout(timer.current);
    if (query.trim().length < 2) {
      setResults(null);
      return;
    }

    timer.current = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query.trim())}`)
        .then((r) => {
          if (!r.ok) throw new Error();
          return r.json();
        })
        .then(setResults)
        .catch(() => setResults(null));
    }, 300);

    return () => clearTimeout(timer.current);
  }, [query]);

  const hasResults =
    results &&
    (results.words.length > 0 ||
      results.topics.length > 0 ||
      results.exams.length > 0);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
      <div className="relative">
        <Search className="w-4 h-4 text-white/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 250)}
          placeholder="Kelime, konu, sınav ara... (örn. mitigate, tense)"
          className="w-full pl-9 pr-8 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md focus:border-yellow-300 focus:bg-slate-900/90 focus:outline-none text-xs text-white placeholder:text-white/40 font-medium transition-all"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults(null);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && hasResults && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute z-50 mt-2 w-full bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden text-xs divide-y divide-white/10 max-h-96 overflow-y-auto"
          >
            {/* Kelimeler */}
            {results.words.length > 0 && (
              <div className="p-2 space-y-1">
                <p className="px-3 py-1 text-[10px] font-mono font-bold text-yellow-300 flex items-center gap-1">
                  <Layers className="w-3 h-3" /> KELİMELER
                </p>
                {results.words.map((w) => (
                  <Link
                    key={w.id}
                    href={`/vocabulary?q=${encodeURIComponent(w.english)}`}
                    className="block px-3 py-1.5 rounded-xl hover:bg-white/10 text-white transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-yellow-200">{w.english}</span>
                      <span className="text-[10px] text-white/50">{w.level || "YDS"}</span>
                    </div>
                    <p className="text-[11px] text-cyan-300 truncate">{w.turkish}</p>
                  </Link>
                ))}
              </div>
            )}

            {/* Gramer Konuları */}
            {results.topics.length > 0 && (
              <div className="p-2 space-y-1">
                <p className="px-3 py-1 text-[10px] font-mono font-bold text-purple-300 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> GRAMER KONULARI
                </p>
                {results.topics.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/grammar/${t.slug}`}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white/10 text-white transition-colors"
                  >
                    <span>{t.emoji}</span>
                    <span className="font-semibold text-white/90">{t.title}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Sınavlar */}
            {results.exams.length > 0 && (
              <div className="p-2 space-y-1">
                <p className="px-3 py-1 text-[10px] font-mono font-bold text-rose-300 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 180 DK SINAVLAR
                </p>
                {results.exams.map((e) => (
                  <Link
                    key={e.id}
                    href={`/exams/${e.id}`}
                    className="block px-3 py-1.5 rounded-xl hover:bg-white/10 text-white/90 font-medium transition-colors"
                  >
                    {e.title}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
