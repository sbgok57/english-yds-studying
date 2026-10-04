"use client";

import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Sparkles,
  Layers,
  RefreshCw,
  AlertCircle,
  Volume2,
  BookOpen,
  GraduationCap,
  Microscope,
  Target,
} from "lucide-react";
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
  targetExams?: ("YDS" | "YDT" | "YÖKDİL")[];
  sourceCategory?: string;
}

const LEVELS = ["Hepsi", "A1", "A2", "B1", "B2", "C1", "YDS"];
const TYPES = ["Hepsi", "genel", "isim", "fiil", "sıfat", "zarf", "phrasal verb"];

const EXAM_CARDS = [
  {
    id: "Hepsi",
    label: "Tüm Sınavlar",
    sub: "Konsolide Külliyat",
    emoji: "🌐",
    color: "from-slate-800 to-slate-900 border-white/20 text-white",
    badge: "Tüm Sınavlar",
  },
  {
    id: "YDS",
    label: "YDS Master",
    sub: "Akademik Çekirdek & B2-C2",
    emoji: "🎯",
    color: "from-cyan-950/80 to-blue-950/90 border-cyan-400 text-cyan-200",
    badge: "180 Dk · 80 Soru",
  },
  {
    id: "YDT",
    label: "YDT (YKS-Dil)",
    sub: "Lise Müfredatı & Phrasal Verbs",
    emoji: "🎓",
    color: "from-amber-950/80 to-orange-950/90 border-amber-400 text-amber-200",
    badge: "120 Dk · 80 Soru",
  },
  {
    id: "YÖKDİL",
    label: "YÖKDİL",
    sub: "Sağlık · Fen · Sosyal Bilimler",
    emoji: "🔬",
    color: "from-pink-950/80 to-purple-950/90 border-pink-400 text-pink-200",
    badge: "3 Özel Alan",
  },
];

const FALLBACK_WORDS: WordItem[] = [
  { id: "fb-1", english: "mitigate", turkish: "hafifletmek, azaltmak, yatıştırmak", definitionEn: "To make something less severe or harmful", examples: ["Governments must take immediate action to mitigate climate risks."], synonyms: ["alleviate", "lessen", "reduce"], level: "B2", type: "fiil", targetExams: ["YDS", "YÖKDİL"], sourceCategory: "Modadil / Akın Dil / YDS Pub" },
  { id: "fb-2", english: "inevitable", turkish: "kaçınılmaz, çaresiz", definitionEn: "Certain to happen and unable to be avoided", examples: ["Digital transformation has become inevitable for modern education."], synonyms: ["unavoidable", "inescapable"], level: "B2", type: "sıfat", targetExams: ["YDS", "YDT", "YÖKDİL"], sourceCategory: "Oxford 3000 / Cambridge" },
  { id: "fb-3", english: "pioneer", turkish: "öncü, yol açan kimse", definitionEn: "A person who is among the first to explore a new country or area", examples: ["Marie Curie was a pioneer in radiological research."], synonyms: ["trailblazer", "innovator"], level: "B2", type: "isim", targetExams: ["YDS", "YDT", "YÖKDİL"], sourceCategory: "Pelikan / Yediiklim" },
  { id: "fb-4", english: "deteriorate", turkish: "kötüleşmek, bozulmak", definitionEn: "To become progressively worse", examples: ["Without maintenance, the ancient stone monuments will deteriorate."], synonyms: ["worsen", "decline", "decay"], level: "B2", type: "fiil", targetExams: ["YDS", "YÖKDİL"], sourceCategory: "Remzi Hoca / ODTÜ GV" },
  { id: "fb-5", english: "drastically", turkish: "ciddi ve köklü biçimde", definitionEn: "In a way that is likely to have a strong or far-reaching effect", examples: ["Costs have fallen drastically over the past three decades."], synonyms: ["radically", "substantially"], level: "B2", type: "zarf", targetExams: ["YDS", "YDT", "YÖKDİL"], sourceCategory: "Benim Hocam / YDS Pub" },
  { id: "fb-6", english: "carry out", turkish: "yürütmek, uygulamak", definitionEn: "To perform or complete a task", examples: ["Scientists will carry out a clinical trial next spring."], synonyms: ["conduct", "execute", "implement"], level: "B2", type: "phrasal verb", targetExams: ["YDT", "YDS", "YÖKDİL"], sourceCategory: "Akın Dil / Modadil" },
  { id: "fb-7", english: "cope with", turkish: "üstesinden gelmek, başa çıkmak", definitionEn: "To deal effectively with something difficult", examples: ["Many species struggle to cope with habitat loss."], synonyms: ["handle", "manage", "tackle"], level: "B2", type: "phrasal verb", targetExams: ["YDT", "YDS", "YÖKDİL"], sourceCategory: "Dilko / ELS YDT" },
  { id: "fb-8", english: "ubiquitous", turkish: "her yerde bulunan, yaygın", definitionEn: "Present, appearing, or found everywhere", examples: ["Mobile devices have become ubiquitous in daily modern life."], synonyms: ["omnipresent", "pervasive"], level: "C1", type: "sıfat", targetExams: ["YDS", "YÖKDİL"], sourceCategory: "Cambridge Academic / Modadil" },
  { id: "fb-9", english: "scrutinize", turkish: "dikkatle incelemek", definitionEn: "To examine or inspect closely and thoroughly", examples: ["Inspectors will scrutinize all official financial records."], synonyms: ["inspect", "examine", "analyze"], level: "C1", type: "fiil", targetExams: ["YDS", "YÖKDİL"], sourceCategory: "Akın Dil / Remzi Hoca" },
  { id: "fb-10", english: "prevalent", turkish: "yaygın, hâkim", definitionEn: "Widespread in a particular area or at a particular time", examples: ["The belief was prevalent throughout ancient Mediterranean civilisations."], synonyms: ["widespread", "common"], level: "B2", type: "sıfat", targetExams: ["YDS", "YDT", "YÖKDİL"], sourceCategory: "Yargı / Yediiklim" },
  { id: "fb-11", english: "reconcile", turkish: "uzlaştırmak, arayı bulmak", definitionEn: "To restore friendly relations between", examples: ["It is difficult to reconcile these two opposing theories."], synonyms: ["harmonize", "settle"], level: "B2", type: "fiil", targetExams: ["YDS", "YÖKDİL"], sourceCategory: "Pegem / Kritik Dil" },
  { id: "fb-12", english: "reluctance", turkish: "isteksizlik, gönülsüzlük", definitionEn: "Unwillingness or disinclination to do something", examples: ["He showed great reluctance to accept the new assignment."], synonyms: ["hesitation", "unwillingness"], level: "B2", type: "isim", targetExams: ["YDS", "YDT", "YÖKDİL"], sourceCategory: "Oxford / Benim Hocam" },
];

const EMOJI_BY_TYPE: Record<string, string> = {
  fiil: "⚡",
  isim: "📦",
  sıfat: "🎨",
  zarf: "🚀",
  "phrasal verb": "🔗",
  genel: "💡",
};

function computeWordExams(w: WordItem): ("YDS" | "YDT" | "YÖKDİL")[] {
  if (w.targetExams && w.targetExams.length > 0) return w.targetExams;
  const exams: ("YDS" | "YDT" | "YÖKDİL")[] = [];
  const lvl = (w.level || "B2").toUpperCase();
  const tp = (w.type || "").toLowerCase();

  // YDT
  if (lvl === "A1" || lvl === "A2" || lvl === "B1" || lvl === "B2" || tp.includes("phrasal")) {
    exams.push("YDT");
  }
  // YDS
  if (lvl === "B2" || lvl === "C1" || lvl === "C2" || lvl.includes("YDS")) {
    exams.push("YDS");
  }
  // YÖKDİL
  if (lvl === "B1" || lvl === "B2" || lvl === "C1") {
    exams.push("YÖKDİL");
  }
  if (exams.length === 0) {
    exams.push("YDS", "YDT", "YÖKDİL");
  }
  return exams;
}

function VocabularyContent() {
  const searchParams = useSearchParams();
  const rawExamParam = searchParams.get("exam")?.toUpperCase();
  const initialExam =
    rawExamParam === "YDS"
      ? "YDS"
      : rawExamParam === "YDT"
      ? "YDT"
      : rawExamParam === "YOKDIL" || rawExamParam === "YÖKDİL"
      ? "YÖKDİL"
      : "Hepsi";

  const [words, setWords] = useState<WordItem[]>([]);
  const [search, setSearch] = useState("");
  const [selectedExam, setSelectedExam] = useState<string>(initialExam);
  const [selectedLevel, setSelectedLevel] = useState<string>("Hepsi");
  const [selectedType, setSelectedType] = useState<string>("Hepsi");
  const [loading, setLoading] = useState(true);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);
  const [showVoicePicker, setShowVoicePicker] = useState(false);

  const fetchWords = useCallback(async () => {
    setLoading(true);
    setErrorNotice(null);
    try {
      const url =
        selectedExam && selectedExam !== "Hepsi"
          ? `/api/words?limit=100&exam=${encodeURIComponent(selectedExam)}`
          : `/api/words?limit=100`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("API yanıt vermedi");
      const data = await res.json();
      const list: WordItem[] = Array.isArray(data) ? data : Array.isArray(data?.words) ? data.words : [];
      if (list.length > 0) {
        setWords(list);
      } else {
        setWords(FALLBACK_WORDS);
        setErrorNotice(
          "Veritabanında henüz kelime bulunamadı. Örnek kelimeler gösteriliyor. Admin panelinden seed veya Quizlet import çalıştırabilirsiniz."
        );
      }
    } catch {
      setWords(FALLBACK_WORDS);
      setErrorNotice("Sunucu bağlantısı kurulamadı. Çevrimdışı örnek kelimeler gösteriliyor.");
    } finally {
      setLoading(false);
    }
  }, [selectedExam]);

  useEffect(() => {
    fetchWords();
  }, [fetchWords]);

  const filteredWords = useMemo(() => {
    return words.filter((w) => {
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

      const itemExams = computeWordExams(w);
      const matchesExam =
        selectedExam === "Hepsi" || itemExams.includes(selectedExam as any);

      return matchesSearch && matchesLevel && matchesType && matchesExam;
    });
  }, [words, search, selectedLevel, selectedType, selectedExam]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Üst Başlık & Hızlı Araçlar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-300">
              📚 Dil Master Kelime Kütüphanesi
            </h1>
            <span className="glass-pill text-xs font-mono text-yellow-300 font-bold">
              {filteredWords.length} / {words.length} Kelime
            </span>
          </div>
          <p className="text-xs md:text-sm text-white/70 light:text-slate-600 mt-1">
            YDS, YDT ve YÖKDİL için bağımsız ayrılmış sınav külliyatı, 12 sesli aksan telaffuzu ve görsel hafıza kartları
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <Link
            href="/import"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 font-black text-xs md:text-sm text-white shadow-lg shadow-teal-500/25 hover:scale-105 active:scale-95 transition-all"
            title="PDF Yükle veya AI ile Yeni Kelime Ekle"
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
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white light:text-slate-900 font-bold text-xs border border-white/20 light:border-slate-300 transition-all"
            title="Kelimeleri Yenile"
          >
            <RefreshCw className={cn("w-3.5 h-3.5", loading && "animate-spin")} /> Yenile
          </button>
          <Link
            href={`/vocabulary/flashcards${selectedExam !== "Hepsi" ? `?exam=${selectedExam}` : ""}`}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-extrabold text-xs md:text-sm text-white shadow-lg hover:scale-105 transition-transform"
          >
            <Sparkles className="w-4 h-4" /> 3D Flashcard Modu
          </Link>
        </div>
      </div>

      {/* 🎯 BİRİNCİ SINIF SINAV GRUPLANDIRMASI (YDS - YDT - YÖKDİL) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wider text-cyan-300 light:text-cyan-700 flex items-center gap-1.5">
            <span>🎯</span> Sınav Külliyatı Gruplandırması (Seviyeden Bağımsız):
          </span>
          <span className="text-xs text-white/50 light:text-slate-500">
            {selectedExam === "Hepsi" && "Tüm sınavların konsolide akademik havuzu"}
            {selectedExam === "YDS" && "YDS: Akademik Çekirdek, B2-C2 & Makale Kelimeleri"}
            {selectedExam === "YDT" && "YDT: Lise Müfredatı, B1-B2, Phrasal Verbs & YKS-Dil"}
            {selectedExam === "YÖKDİL" && "YÖKDİL: Sağlık, Fen & Sosyal Bilimler Alan Terimleri"}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {EXAM_CARDS.map((card) => {
            const isSelected = selectedExam === card.id;
            return (
              <button
                key={card.id}
                onClick={() => setSelectedExam(card.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between group ${
                  isSelected
                    ? `bg-gradient-to-br ${card.color} shadow-lg ring-2 ring-cyan-400 scale-[1.02]`
                    : "bg-slate-900/60 light:bg-white border-white/10 light:border-slate-200 text-white/80 light:text-slate-700 hover:border-white/30 light:hover:border-slate-300 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {card.emoji}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 light:bg-slate-100 font-bold">
                    {card.badge}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-black block">{card.label}</span>
                  <span className="text-[11px] opacity-70 block">{card.sub}</span>
                </div>
              </button>
            );
          })}
        </div>
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
          <Search className="w-5 h-5 text-white/40 light:text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Kelime veya Türkçe anlam ara (örn. ubiquitous, hafifletmek, carry out)..."
            className="w-full bg-black/30 light:bg-white border border-white/15 light:border-slate-300 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white light:text-slate-900 focus:outline-none focus:border-yellow-300 transition-colors placeholder:text-white/40 light:placeholder:text-slate-400"
          />
        </div>

        {/* Hızlı Envanter Butonu */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-white/10 light:border-slate-200">
          <div className="text-xs text-white/60 light:text-slate-600">
            Aktif Sınav Filtresi: <strong className="text-cyan-300 light:text-cyan-700">{selectedExam === "Hepsi" ? "Tüm Sınavlar" : selectedExam}</strong>
          </div>
          <Link
            href={`/vocabulary/inventory${selectedExam !== "Hepsi" ? `?exam=${selectedExam}` : ""}`}
            className="px-3.5 py-1.5 rounded-xl bg-purple-500/20 border border-purple-400/40 hover:border-purple-300 text-purple-200 light:text-purple-800 text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>📊</span>
            <span>Ayrıntılı Kelime Envanteri (Tablo & A-Z) &rarr;</span>
          </Link>
        </div>

        {/* Filtre Sekmeleri (Seviye ve Tür) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10 light:border-slate-200 text-xs">
          {/* Seviye */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-white/60 light:text-slate-600 font-bold mr-1">Seviye:</span>
            {LEVELS.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={cn(
                  "px-3 py-1.5 rounded-full font-bold transition-all",
                  selectedLevel === lvl
                    ? "bg-yellow-300 text-slate-950 shadow"
                    : "bg-white/5 light:bg-slate-100 hover:bg-white/15 text-white/70 light:text-slate-700"
                )}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Tür */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-white/60 light:text-slate-600 font-bold mr-1">Tür:</span>
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={cn(
                  "px-3 py-1.5 rounded-full font-bold capitalize transition-all",
                  selectedType === t
                    ? "bg-pink-500 text-white shadow"
                    : "bg-white/5 light:bg-slate-100 hover:bg-white/15 text-white/70 light:text-slate-700"
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
        <div className="card-vibrant p-12 text-center text-white/60 light:text-slate-600 space-y-3">
          <p className="text-4xl">🔍</p>
          <p className="font-bold text-lg text-white light:text-slate-900">Eşleşen kelime bulunamadı.</p>
          <p className="text-xs">Arama kriterlerinizi değiştirebilir veya arama çubuğunu temizleyebilirsiniz.</p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedLevel("Hepsi");
              setSelectedType("Hepsi");
              setSelectedExam("Hepsi");
            }}
            className="mt-2 px-5 py-2 rounded-full bg-white/10 light:bg-slate-200 hover:bg-white/20 text-white light:text-slate-800 text-xs font-bold"
          >
            Filtreleri Temizle
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWords.map((word) => {
            const typeEmoji = EMOJI_BY_TYPE[word.type.toLowerCase()] || "💡";
            const itemExams = computeWordExams(word);
            return (
              <div
                key={word.id}
                className="card-vibrant p-6 space-y-4 flex flex-col justify-between group hover:border-yellow-400/40 transition-all hover:scale-[1.01]"
              >
                <div>
                  {/* Sınav Rozetleri, Seviye ve TTS Butonu */}
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className="w-6 h-6 rounded-full bg-white/10 light:bg-slate-100 flex items-center justify-center text-xs"
                        title={`Tür: ${word.type}`}
                      >
                        {typeEmoji}
                      </span>
                      <span className="glass-pill text-[10px] font-bold text-yellow-300">
                        {word.level}
                      </span>
                      <span className="glass-pill text-[10px] text-cyan-300 uppercase">
                        {word.type}
                      </span>

                      {/* Sınav Rozetleri */}
                      {itemExams.includes("YDS") && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                          🎯 YDS
                        </span>
                      )}
                      {itemExams.includes("YDT") && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                          🎓 YDT
                        </span>
                      )}
                      {itemExams.includes("YÖKDİL") && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-400/30">
                          🔬 YÖKDİL
                        </span>
                      )}
                    </div>
                    <TTSPlayer text={word.english} size="sm" showControls={false} />
                  </div>

                  {/* Kelime ve Türkçe Anlam (Quizlet Display Contract) */}
                  <h3 className="text-2xl font-black text-white light:text-slate-900 group-hover:text-yellow-300 transition-colors">
                    {word.english}
                  </h3>
                  <p className="text-lg font-bold text-cyan-200 light:text-cyan-700 mt-1">
                    {word.turkish}
                  </p>

                  {word.definitionEn && (
                    <p className="text-xs text-white/70 light:text-slate-600 italic mt-2 line-clamp-2">
                      &quot;{word.definitionEn}&quot;
                    </p>
                  )}

                  {word.sourceCategory && (
                    <span className="inline-block mt-2 text-[10px] text-white/40 light:text-slate-400 font-mono">
                      📚 {word.sourceCategory}
                    </span>
                  )}
                </div>

                {word.examples && word.examples.length > 0 && (
                  <div className="bg-black/30 light:bg-slate-100 rounded-2xl p-3 border border-white/10 light:border-slate-200 text-xs text-white/80 light:text-slate-800 mt-4">
                    <span className="text-[10px] font-mono text-pink-300 light:text-pink-600 uppercase block font-bold mb-1">
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

export default function VocabularyPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-white/60">
          <div className="inline-block animate-spin text-3xl mb-3">🔄</div>
          <p className="text-sm font-bold">Kelime Kütüphanesi Yükleniyor...</p>
        </div>
      }
    >
      <VocabularyContent />
    </Suspense>
  );
}
