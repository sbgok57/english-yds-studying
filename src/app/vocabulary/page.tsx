"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Search, Sparkles, Layers, RefreshCw, AlertCircle, Volume2, Image as ImageIcon } from "lucide-react";
import TTSPlayer from "@/components/tts/TTSPlayer";
import AccentVoicePicker from "@/components/tts/AccentVoicePicker";
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
  imageUrl?: string;
}

const LEVELS = ["Hepsi", "A1", "A2", "B1", "B2", "C1", "YDS"];
const TYPES = ["Hepsi", "genel", "isim", "fiil", "sıfat", "zarf", "phrasal verb"];

const FALLBACK_WORDS: WordItem[] = [
  { id: "fb-1", english: "mitigate", turkish: "hafifletmek, azaltmak, yatıştırmak", definitionEn: "To make something less severe or harmful", examples: ["Governments must take immediate action to mitigate climate risks."], synonyms: ["alleviate", "lessen", "reduce"], level: "B2", type: "fiil" },
  { id: "fb-2", english: "inevitable", turkish: "kaçınılmaz, çaresiz", definitionEn: "Certain to happen and unable to be avoided", examples: ["Digital transformation has become inevitable for modern education."], synonyms: ["unavoidable", "inescapable"], level: "B2", type: "sıfat" },
  { id: "fb-3", english: "pioneer", turkish: "öncü, yol açan kimse", definitionEn: "A person who is among the first to explore a new country or area", examples: ["Marie Curie was a pioneer in radiological research."], synonyms: ["trailblazer", "innovator"], level: "B2", type: "isim" },
  { id: "fb-4", english: "deteriorate", turkish: "kötüleşmek, bozulmak", definitionEn: "To become progressively worse", examples: ["Without maintenance, the ancient stone monuments will deteriorate."], synonyms: ["worsen", "decline", "decay"], level: "B2", type: "fiil" },
  { id: "fb-5", english: "drastically", turkish: "ciddi ve köklü biçimde", definitionEn: "In a way that is likely to have a strong or far-reaching effect", examples: ["Costs have fallen drastically over the past three decades."], synonyms: ["radically", "substantially"], level: "B2", type: "zarf" },
  { id: "fb-6", english: "carry out", turkish: "yürütmek, uygulamak", definitionEn: "To perform or complete a task", examples: ["Scientists will carry out a clinical trial next spring."], synonyms: ["conduct", "execute", "implement"], level: "B2", type: "phrasal verb" },
  { id: "fb-7", english: "cope with", turkish: "üstesinden gelmek, başa çıkmak", definitionEn: "To deal effectively with something difficult", examples: ["Many species struggle to cope with habitat loss."], synonyms: ["handle", "manage", "tackle"], level: "B2", type: "phrasal verb" },
  { id: "fb-8", english: "ubiquitous", turkish: "her yerde bulunan, yaygın", definitionEn: "Present, appearing, or found everywhere", examples: ["Mobile devices have become ubiquitous in daily modern life."], synonyms: ["omnipresent", "pervasive"], level: "C1", type: "sıfat" },
  { id: "fb-9", english: "scrutinize", turkish: "dikkatle incelemek", definitionEn: "To examine or inspect closely and thoroughly", examples: ["Inspectors will scrutinize all official financial records."], synonyms: ["inspect", "examine", "analyze"], level: "C1", type: "fiil" },
  { id: "fb-10", english: "prevalent", turkish: "yaygın, hâkim", definitionEn: "Widespread in a particular area or at a particular time", examples: ["The belief was prevalent throughout ancient Mediterranean civilisations."], synonyms: ["widespread", "common"], level: "B2", type: "sıfat" },
  { id: "fb-11", english: "reconcile", turkish: "uzlaştırmak, arayı bulmak", definitionEn: "To restore friendly relations between", examples: ["It is difficult to reconcile these two opposing theories."], synonyms: ["harmonize", "settle"], level: "B2", type: "fiil" },
  { id: "fb-12", english: "reluctance", turkish: "isteksizlik, gönülsüzlük", definitionEn: "Unwillingness or disinclination to do something", examples: ["He showed great reluctance to accept the new assignment."], synonyms: ["hesitation", "unwillingness"], level: "B2", type: "isim" },
];

const EMOJI_BY_TYPE: Record<string, string> = {
  fiil: "⚡",
  isim: "📦",
  sıfat: "🎨",
  zarf: "🚀",
  "phrasal verb": "🔗",
  genel: "💡",
};

export default function VocabularyPage() {
  const [words, setWords] = useState<WordItem[]>([]);
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Hepsi");
  const [selectedType, setSelectedType] = useState("Hepsi");
  const [loading, setLoading] = useState(true);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);
  const [showVoicePicker, setShowVoicePicker] = useState(false);

  const fetchWords = useCallback(async () => {
    setLoading(true);
    setErrorNotice(null);
    try {
      const res = await fetch("/api/words?limit=100");
      if (!res.ok) throw new Error("API yanıt vermedi");
      const data = await res.json();
      const list: WordItem[] = Array.isArray(data) ? data : Array.isArray(data?.words) ? data.words : [];
      if (list.length > 0) {
        setWords(list);
      } else {
        // Veritabanında henüz kelime yoksa çökmeden örnek kelimelerle besle
        setWords(FALLBACK_WORDS);
        setErrorNotice("Veritabanında henüz kelime bulunamadı. Örnek kelimeler gösteriliyor. Admin panelinden seed veya Quizlet import çalıştırabilirsiniz.");
      }
    } catch {
      setWords(FALLBACK_WORDS);
      setErrorNotice("Sunucu bağlantısı kurulamadı. Çevrimdışı örnek kelimeler gösteriliyor.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWords();
  }, [fetchWords]);

  const filteredWords = words.filter((w) => {
    const q = search.toLowerCase().trim();
    const matchesSearch =
      !q ||
      w.english.toLowerCase().includes(q) ||
      w.turkish.toLowerCase().includes(q) ||
      w.definitionEn.toLowerCase().includes(q);

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
          <div className="flex items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-300">
              📚 YDS Kelime Kütüphanesi
            </h1>
            <span className="glass-pill text-xs font-mono text-yellow-300">
              {words.length} Kelime
            </span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1">
            Seviye ve tür bazlı filtrelenebilir, 12 sesli çoklu aksan telaffuz destekli görsel hafıza kelime havuzu
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <Link
            href="/import"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 font-black text-xs md:text-sm text-white shadow-lg shadow-teal-500/25 hover:scale-105 active:scale-95 transition-all"
            title="PDF Yükle veya Claude AI ile Yeni Kelime Ekle"
          >
            <span className="text-base">📄➕</span>
            <span>Kelime Ekle & PDF Aktar</span>
          </Link>
          <button
            onClick={() => setShowVoicePicker(!showVoicePicker)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/30 font-bold text-xs transition-all"
          >
            🎙️ Aksan & Ses Ayarları
          </button>
          <button
            onClick={() => fetchWords()}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
            title="Kelimeleri Yenile"
          >
            <RefreshCw className={cn("w-3.5 h-3.5", loading && "animate-spin")} /> Yenile
          </button>
          <Link
            href="/vocabulary/flashcards"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-extrabold text-sm text-white shadow-lg hover:scale-105 transition-transform"
          >
            <Sparkles className="w-4 h-4" /> 3D Flashcard Modu
          </Link>
        </div>
      </div>

      {/* Hızlı PDF & Yayınlar Aksiyon Bandı */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 border border-cyan-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-white/90">
          <span className="text-2xl">📚</span>
          <div>
            <span className="font-black text-white text-sm">Akıllı PDF Tarayıcı & 2013-2026 Yayınlar Havuzu Hazır!</span>
            <p className="text-white/60 text-[11px] mt-0.5">
              Modadil, Akın Dil, Cambridge, Oxford, Remzi Hoca ve Pelikan YDS kelimelerini tek tıkla kütüphanenize ekleyin veya elinizdeki PDF&apos;i yükleyin.
            </p>
          </div>
        </div>
        <Link
          href="/import"
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-cyan-300 font-bold border border-cyan-400/40 whitespace-nowrap transition-colors"
        >
          PDF Yükle / İçe Aktar &rarr;
        </Link>
      </div>

      {/* Aksan ve Ses Ayarları Paneli */}
      {showVoicePicker && (
        <AccentVoicePicker className="mb-6 animate-in fade-in slide-in-from-top-4 duration-300" />
      )}

      {/* Uyarı Bandı (Gerekirse) */}
      {errorNotice && (
        <div className="bg-amber-500/15 border border-amber-500/30 rounded-2xl p-4 flex items-start gap-3 text-amber-200 text-xs">
          <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <span>{errorNotice}</span>{" "}
            <Link href="/import" className="underline font-bold text-amber-300 hover:text-white">
              Quizlet / PDF İçe Aktarma Sayfası &rarr;
            </Link>
          </div>
        </div>
      )}

      {/* Arama ve Filtre Çubuğu */}
      <div className="card-vibrant p-4 md:p-6 space-y-4">
        {/* Arama Girdisi */}
        <div className="relative">
          <Search className="w-5 h-5 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Kelime veya Türkçe anlam ara (örn. ubiquitous, hafifletmek, carry out)..."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card-vibrant p-6 space-y-4 animate-pulse min-h-[200px]">
              <div className="h-4 bg-white/10 rounded-full w-1/3" />
              <div className="h-8 bg-white/10 rounded-xl w-3/4" />
              <div className="h-5 bg-white/10 rounded-lg w-1/2" />
              <div className="h-12 bg-white/5 rounded-2xl w-full mt-4" />
            </div>
          ))}
        </div>
      ) : filteredWords.length === 0 ? (
        <div className="card-vibrant p-12 text-center text-white/60 space-y-3">
          <p className="text-4xl">🔍</p>
          <p className="font-bold text-lg text-white">Eşleşen kelime bulunamadı.</p>
          <p className="text-xs">Arama kriterlerinizi değiştirebilir veya arama çubuğunu temizleyebilirsiniz.</p>
          <button
            onClick={() => { setSearch(""); setSelectedLevel("Hepsi"); setSelectedType("Hepsi"); }}
            className="mt-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
          >
            Filtreleri Temizle
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWords.map((word) => {
            const typeEmoji = EMOJI_BY_TYPE[word.type.toLowerCase()] || "💡";
            return (
              <div
                key={word.id}
                className="card-vibrant p-6 space-y-4 flex flex-col justify-between group hover:border-yellow-400/40 transition-all hover:scale-[1.01]"
              >
                <div>
                  {/* Rozetler, Görsel Simgesi ve TTS Butonu */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs" title={`Tür: ${word.type}`}>
                        {typeEmoji}
                      </span>
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
            );
          })}
        </div>
      )}
    </div>
  );
}
