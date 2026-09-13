"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Filter, Sparkles, Layers, Volume2 } from "lucide-react";
import TTSPlayer from "@/components/tts/TTSPlayer";
import { cn } from "@/lib/utils";

interface WordItem {
  id: string;
  english: string;
  turkish: string;
  definitionEn: string;
  examples: string[];
  synonyms: string[];
  level: string;
  type: string;
}

const LEVELS = ["Hepsi", "A1", "A2", "B1", "B2", "C1", "YDS"];
const TYPES = ["Hepsi", "genel", "isim", "fiil", "sıfat", "zarf", "phrasal verb"];

export default function VocabularyPage() {
  const [words, setWords] = useState<WordItem[]>([]);
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Hepsi");
  const [selectedType, setSelectedType] = useState("Hepsi");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/words")
      .then((res) => res.json())
      .then((data) => setWords(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filteredWords = words.filter((w) => {
    const matchesSearch =
      w.english.toLowerCase().includes(search.toLowerCase()) ||
      w.turkish.toLowerCase().includes(search.toLowerCase()) ||
      w.definitionEn.toLowerCase().includes(search.toLowerCase());

    const matchesLevel =
      selectedLevel === "Hepsi" ||
      w.level.toLowerCase().includes(selectedLevel.toLowerCase());

    const matchesType =
      selectedType === "Hepsi" ||
      w.type.toLowerCase().includes(selectedType.toLowerCase());

    return matchesSearch && matchesLevel && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Üst Başlık */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-300">
            📚 YDS Kelime Kütüphanesi
          </h1>
          <p className="text-xs md:text-sm text-white/70 mt-1">
            Seviye ve tür bazlı filtrelenebilir, 10 sesli telaffuz destekli kelime havuzu
          </p>
        </div>

        <Link
          href="/vocabulary/flashcards"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-extrabold text-sm text-white shadow-lg hover:scale-105 transition-transform"
        >
          <Sparkles className="w-4 h-4" /> 3D Flashcard Modu
        </Link>
      </div>

      {/* Arama ve Filtre Çubuğu */}
      <div className="card-vibrant p-4 md:p-6 space-y-4">
        {/* Arama Girdisi */}
        <div className="relative">
          <Search className="w-5 h-5 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Kelime veya Türkçe anlam ara (örn. ubiquitous, neden olmak)..."
            className="w-full bg-black/30 border border-white/15 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-yellow-300 transition-colors placeholder:text-white/40"
          />
        </div>

        {/* Filtre Sekmeleri */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs">
          {/* Seviye */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-white/60 font-bold mr-1">Seviye:</span>
            {LEVELS.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={cn(
                  "px-3 py-1.5 rounded-full font-bold transition-all",
                  selectedLevel === lvl
                    ? "bg-yellow-300 text-slate-950 shadow"
                    : "bg-white/5 hover:bg-white/15 text-white/70"
                )}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Tür */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-white/60 font-bold mr-1">Tür:</span>
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={cn(
                  "px-3 py-1.5 rounded-full font-bold capitalize transition-all",
                  selectedType === t
                    ? "bg-pink-500 text-white shadow"
                    : "bg-white/5 hover:bg-white/15 text-white/70"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Kelime Kartları Izgarası */}
      {loading ? (
        <div className="text-center py-16 text-white/60 animate-pulse">
          Kelimeler yükleniyor...
        </div>
      ) : filteredWords.length === 0 ? (
        <div className="card-vibrant p-12 text-center text-white/60 space-y-2">
          <p className="text-4xl">🔍</p>
          <p className="font-bold text-lg text-white">Eşleşen kelime bulunamadı.</p>
          <p className="text-xs">Arama kriterlerinizi değiştirebilir veya yeni kelime ekleyebilirsiniz.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWords.map((word) => (
            <div
              key={word.id}
              className="card-vibrant p-6 space-y-4 flex flex-col justify-between group hover:border-yellow-400/40"
            >
              <div>
                {/* Rozetler ve TTS Butonu */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1.5">
                    <span className="glass-pill text-[10px] font-bold text-yellow-300">
                      {word.level}
                    </span>
                    <span className="glass-pill text-[10px] text-cyan-300 uppercase">
                      {word.type}
                    </span>
                  </div>
                  <TTSPlayer text={word.english} size="sm" showControls={false} />
                </div>

                {/* Kelime ve Türkçe Anlam (Display Contract) */}
                <h3 className="text-2xl font-black text-white group-hover:text-yellow-300 transition-colors">
                  {word.english}
                </h3>
                <p className="text-lg font-bold text-cyan-200 mt-1">
                  {word.turkish}
                </p>

                {word.definitionEn && (
                  <p className="text-xs text-white/70 italic mt-2 line-clamp-2">
                    "{word.definitionEn}"
                  </p>
                )}
              </div>

              {word.examples && word.examples.length > 0 && (
                <div className="bg-black/30 rounded-2xl p-3 border border-white/10 text-xs text-white/80 mt-4">
                  <span className="text-[10px] font-mono text-pink-300 uppercase block font-bold mb-1">
                    Örnek Cümle:
                  </span>
                  <p className="italic leading-relaxed">{word.examples[0]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
