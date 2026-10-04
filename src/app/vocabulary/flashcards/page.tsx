"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { WORDS } from "@/lib/data-vocabulary";
import { MASTER_VOCABULARY } from "@/lib/vocabulary/master-vocab-database";
import { YDS_PUBLICATIONS_MASTER_CORPUS } from "@/lib/vocabulary/publications-master-corpus";
import Cube from "@/components/Cube";
import Celebration from "@/components/Celebration";
import Tip from "@/components/Tip";
import VideoModal, { type VideoOption } from "@/components/VideoModal";
import SceneAnim from "@/components/SceneAnim";
import AccentBar from "@/components/AccentBar";
import { MEDIA_SOURCE_TIP } from "@/lib/media-source";
import { recordWord, useUsage, wordScore } from "@/lib/store";
import {
  Sparkles,
  FileUp,
  Search,
  Shuffle,
  RotateCcw,
  BookOpen,
  Filter,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Volume2,
  LayoutGrid,
  Table as TableIcon,
} from "lucide-react";

export interface UnifiedFlashcardWord {
  id: string | number;
  word: string;
  tr: string;
  type: string;
  level: string; // A1, A2, B1, B2, C1, C2, YDS
  category: string;
  exams: ("YDS" | "YDT" | "YÖKDİL")[];
  emoji: string;
  hint: string;
  example: string;
  exampleTr: string;
  synonyms?: string[];
  collocations?: string[];
  sourceCategory?: string;
  poolSource: "temel" | "master" | "yayinlar";
}

const GRADIENTS = [
  "linear-gradient(135deg,#7c3aed,#06b6d4)",
  "linear-gradient(135deg,#db2777,#f59e0b)",
  "linear-gradient(135deg,#059669,#0ea5e9)",
  "linear-gradient(135deg,#e11d48,#8b5cf6)",
  "linear-gradient(135deg,#2563eb,#22d3ee)",
];

const CEFR_LEVELS = ["Tümü", "A1", "A2", "B1", "B2", "C1", "C2"] as const;
const WORD_TYPES = ["Tümü", "fiil", "isim", "sıfat", "zarf", "phrasal verb"] as const;

function correctLastStreak(streak: number): string {
  if (streak > 0 && streak % 5 === 0) return "Kral gibi gidiyorsun, hız kesme! 👑";
  return "Kaydını aldık, sana göre ilerliyoruz kanka.";
}

export default function FlashcardsPage() {
  const { usage, update } = useUsage();

  // Filtre durumları
  const [selectedExam, setSelectedExam] = useState<"TÜMÜ" | "YDS" | "YDT" | "YÖKDİL">("TÜMÜ");
  const [selectedLevel, setSelectedLevel] = useState<string>("Tümü");
  const [selectedType, setSelectedType] = useState<string>("Tümü");
  const [selectedPool, setSelectedPool] = useState<"TÜMÜ" | "yayinlar" | "master" | "temel">("TÜMÜ");
  const [searchQuery, setSearchQuery] = useState("");

  // Görünüm Modu: 3D Kart vs Tüm Liste Tablosu
  const [viewMode, setViewMode] = useState<"card" | "table">("card");
  const [tablePage, setTablePage] = useState(1);
  const TABLE_PAGE_SIZE = 30;

  // Kişiselleştirilmiş Seviye Tespiti (Senin seviyen bu, buradan başlayalım!)
  const [userDetectedLevel, setUserDetectedLevel] = useState<string>("A1");

  useEffect(() => {
    try {
      const rawTest = localStorage.getItem("yds_level_test_result_v1");
      if (rawTest) {
        const parsed = JSON.parse(rawTest);
        if (parsed.level) setUserDetectedLevel(parsed.level.toUpperCase());
      }
    } catch {
      // safe fallback
    }
  }, []);

  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [streak, setStreak] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [celebrateMsg, setCelebrateMsg] = useState("");
  const [video, setVideo] = useState<VideoOption | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  // 1. Tüm veri kaynaklarını konsolide et (PERF: Tek seferlik pure memoize)
  const consolidatedPool = useMemo<UnifiedFlashcardWord[]>(() => {
    const list: UnifiedFlashcardWord[] = [];

    // A. 2013-2026 Akademik Yayınlar Master Korpusu (Modadil, Akın Dil, Remzi Hoca, vb.)
    YDS_PUBLICATIONS_MASTER_CORPUS.forEach((p, i) => {
      list.push({
        id: `pub-${p.term}-${i}`,
        word: p.term,
        tr: p.meaningsTr.join(", "),
        type: p.type,
        level: p.level || "C1",
        category: "Akademik Yayınlar",
        exams: ["YDS", "YDT", "YÖKDİL"],
        emoji:
          p.type === "fiil"
            ? "⚡"
            : p.type === "sıfat"
            ? "🎨"
            : p.type === "zarf"
            ? "🚀"
            : p.type === "phrasal verb"
            ? "🔗"
            : "📦",
        hint: p.definitionEn || "Akademik sınav bağlamında yüksek frekans",
        example: p.exampleEn,
        exampleTr: p.exampleTr,
        synonyms: p.synonyms,
        collocations: p.collocations,
        sourceCategory: p.sourceCategory || "Modadil / Akın Dil / YDS Pub",
        poolSource: "yayinlar",
      });
    });

    // B. 2.500 Master Veritabanı (A1-C2)
    MASTER_VOCABULARY.forEach((m) => {
      // Çift kelime eklemeyi önle
      if (list.some((existing) => existing.word.toLowerCase() === m.word.toLowerCase())) return;

      const isBeginner = m.level === "A1" || m.level === "A2";
      list.push({
        id: `mv-${m.id}`,
        word: m.word,
        tr: m.tr,
        type: m.type,
        level: m.level,
        category: m.category || "Genel Akademik",
        exams: isBeginner ? ["YDT"] : ["YDS", "YDT", "YÖKDİL"],
        emoji: m.emoji || "📖",
        hint: m.hint || "Kelimeyi hafızanda canlandır",
        example: m.example,
        exampleTr: m.exampleTr,
        synonyms: m.synonyms,
        sourceCategory: `2.500 Master Havuz (${m.level})`,
        poolSource: "master",
      });
    });

    // C. Orijinal WORDS (50 Temel Kelime)
    WORDS.forEach((w) => {
      if (list.some((existing) => existing.word.toLowerCase() === w.word.toLowerCase())) return;
      list.push({
        id: `w-${w.id}`,
        word: w.word,
        tr: w.tr,
        type: w.type,
        level: "B2",
        category: w.category,
        exams: ["YDS", "YDT", "YÖKDİL"],
        emoji: w.emoji,
        hint: w.hint,
        example: w.example,
        exampleTr: w.exampleTr,
        sourceCategory: "Temel Sınav Hazırlık",
        poolSource: "temel",
      });
    });

    return list;
  }, []);

  // 2. Filtrelenmiş ve Kullanıcı Performansına göre Sıralanmış Liste
  const filteredWords = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return consolidatedPool.filter((item) => {
      // Sınav Filtresi
      if (selectedExam !== "TÜMÜ" && !item.exams.includes(selectedExam)) {
        return false;
      }
      // Seviye Filtresi
      if (selectedLevel !== "Tümü" && item.level.toUpperCase() !== selectedLevel.toUpperCase()) {
        return false;
      }
      // Tür Filtresi
      if (selectedType !== "Tümü" && item.type.toLowerCase() !== selectedType.toLowerCase()) {
        return false;
      }
      // Havuz Filtresi
      if (selectedPool !== "TÜMÜ" && item.poolSource !== selectedPool) {
        return false;
      }
      // Arama Metni Filtresi
      if (q) {
        const matchesWord = item.word.toLowerCase().includes(q);
        const matchesTr = item.tr.toLowerCase().includes(q);
        const matchesHint = item.hint.toLowerCase().includes(q);
        const matchesSynonym = item.synonyms?.some((s) => s.toLowerCase().includes(q));
        if (!matchesWord && !matchesTr && !matchesHint && !matchesSynonym) {
          return false;
        }
      }
      return true;
    });
  }, [consolidatedPool, selectedExam, selectedLevel, selectedType, selectedPool, searchQuery]);

  // 3. Öğrenci skoruna göre sırala: En zayıf (düşük puanlı) kelimeler önce gelir
  const sortedWords = useMemo(() => {
    return [...filteredWords].sort(
      (a, b) => wordScore(usage.words[String(a.id)]) - wordScore(usage.words[String(b.id)])
    );
  }, [filteredWords, usage.words]);

  // Güvenli kelime seçimi (SAFETY: Liste boşsa çökme önlenir)
  const currentWord: UnifiedFlashcardWord | null =
    sortedWords.length > 0 ? sortedWords[Math.min(idx, sortedWords.length - 1)] : null;
  const total = sortedWords.length;
  const stat = currentWord ? usage.words[String(currentWord.id)] : null;

  // İndeks değiştiğinde kartı ön yüze çevir
  useEffect(() => {
    setFlipped(false);
  }, [idx, selectedExam, selectedLevel, selectedType, selectedPool]);

  // Filtre değiştiğinde indisi ve tablo sayfasını başa al
  const resetIdx = useCallback(() => {
    setIdx(0);
    setFlipped(false);
    setTablePage(1);
  }, []);

  // URL parametresinden kelime arama (PERF & UX: /vocabulary/flashcards?word=abate)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const targetWord = params.get("word") || params.get("q");
    if (targetWord) {
      setSearchQuery(targetWord);
      setViewMode("card");
    }
  }, []);

  const totalTablePages = Math.max(1, Math.ceil(sortedWords.length / TABLE_PAGE_SIZE));
  const paginatedWords = useMemo(() => {
    const start = (tablePage - 1) * TABLE_PAGE_SIZE;
    return sortedWords.slice(start, start + TABLE_PAGE_SIZE);
  }, [sortedWords, tablePage]);

  // Sesli Telaffuz (Web Speech API ile hafif ve yerel)
  const speakWord = (text: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "en-US";
      utter.rate = 0.9;
      window.speechSynthesis.speak(utter);
    }
  };

  const openIn3DCard = (targetWord: UnifiedFlashcardWord) => {
    const targetIdx = sortedWords.findIndex((w) => w.id === targetWord.id);
    if (targetIdx !== -1) {
      setIdx(targetIdx);
    }
    setViewMode("card");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  const go = (delta: number) => {
    if (total === 0) return;
    setIdx((i) => (i + delta + total) % total);
  };

  const handleShuffle = () => {
    if (total <= 1) return;
    const randomIdx = Math.floor(Math.random() * total);
    setIdx(randomIdx);
    setFlipped(false);
  };

  const resetAllFilters = () => {
    setSelectedExam("TÜMÜ");
    setSelectedLevel("Tümü");
    setSelectedType("Tümü");
    setSelectedPool("TÜMÜ");
    setSearchQuery("");
    resetIdx();
  };

  const mark = (correct: boolean) => {
    if (!currentWord) return;
    recordWord(update, currentWord.id, correct);
    if (correct) {
      const ns = streak + 1;
      setStreak(ns);
      if (ns % 5 === 0) {
        setCelebrateMsg(`Seri ${ns} kanka! 🔥 Zincirleme netler geliyor!`);
        setCelebrate(true);
      }
    } else {
      setStreak(0);
      setCelebrateMsg("Olsun kanka, bu kelime artık öncelik listende! 💪");
      setCelebrate(true);
    }
    go(1);
  };

  const videoOptions = useMemo<VideoOption[]>(() => {
    if (!currentWord) return [];
    return [
      {
        label: "Dizi/Film Sahnesi",
        emoji: "🎬",
        query: `${currentWord.word} in movies and tv series`,
        tip: "Bu kelimenin dizi/filmlerdeki gerçek kullanımı",
      },
      {
        label: "Telaffuz",
        emoji: "🗣️",
        query: `${currentWord.word} pronunciation`,
        tip: "Kelimenin doğru telaffuzu",
      },
      {
        label: "Cümlede Kullanım",
        emoji: "📝",
        query: `${currentWord.word} example sentence`,
        tip: "Örnek cümlelerde nasıl geçtiği",
      },
    ];
  }, [currentWord]);

  // Klavye kısayolları (←, →, Boşluk)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Kullanıcı arama kutusuna yazıyorsa kısayolları engelle
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === " ") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {videoOpen && currentWord && (
        <VideoModal
          title={`${currentWord.word} — Mini Video`}
          options={videoOptions}
          active={video}
          onClose={() => setVideoOpen(false)}
          onSelect={(o) => setVideo(o)}
        />
      )}
      <Celebration
        show={celebrate}
        onDone={() => setCelebrate(false)}
        message={celebrateMsg}
        sub={correctLastStreak(streak)}
      />

      {/* Üst Başlık & Hızlı İçe Aktarma Aksiyonu */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-400/40 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-gradient-to-br from-pink-500/20 via-yellow-400/20 to-cyan-500/20 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-amber-400/20 to-cyan-500/20 border border-cyan-400/40 text-xs font-black text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>DİL MASTER • YDS · YDT · YÖKDİL Çoklu Sınav Kartları</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              🃏 <span className="gradient-text">3D Flashcards & Zengin Hafıza</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
              2.500+ master akademik kelime, 2013-2026 yayınlar havuzu (Modadil, Akın Dil, Remzi Hoca, vb.) ve kendi PDF aktarımlarınız tek küpte! Çevir, dinle, öğren, en zayıf kelimelerini otomatik önceliklendir.
            </p>
          </div>

          {/* Vurgulu PDF / Kelime Ekle Butonu */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <Link
              href="/import"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-slate-950 font-black text-sm shadow-xl shadow-teal-500/30 hover:scale-105 active:scale-95 transition-all text-center group"
            >
              <FileUp className="w-5 h-5 text-slate-950 group-hover:-translate-y-0.5 transition-transform" />
              <span>📄➕ Kelime Ekle & Akıllı PDF Aktarıcı</span>
            </Link>

            <Link
              href="/vocabulary"
              className="flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-white/5 border border-white/15 text-white/80 hover:text-white hover:bg-white/10 text-sm font-bold transition-all text-center"
            >
              <BookOpen className="w-4 h-4 text-cyan-300" />
              <span>Tüm Liste</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 🎯 Kişiselleştirilmiş Seviye Başlangıç Banner'ı */}
      <div className="rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-slate-900 border-2 border-cyan-400/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-2xl shrink-0 shadow-md">
            🎯
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-black text-white flex items-center gap-2 flex-wrap">
              <span>Senin Seviyen:</span>
              <span className="px-2.5 py-0.5 rounded-lg bg-cyan-500/20 border border-cyan-400 text-cyan-200 text-xs font-mono font-bold">
                {userDetectedLevel} ({userDetectedLevel === "A1" ? "Başlangıç" : userDetectedLevel === "A2" ? "Temel" : userDetectedLevel === "B1" ? "Orta" : "İleri"})
              </span>
              <span className="text-xs text-white/50">• Hadi buradan başlayalım!</span>
            </h4>
            <p className="text-xs text-white/60 mt-0.5">
              Kendi seviyene uygun kelimelerle başlayarak adım adım ilerle; netlerini ve kalıcılığını katla.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              setSelectedLevel(userDetectedLevel);
              resetIdx();
            }}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs hover:scale-105 active:scale-95 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2"
          >
            <span>🚀</span>
            <span>{userDetectedLevel} Seviyesinden Başla ({consolidatedPool.filter(w => w.level.toUpperCase() === userDetectedLevel.toUpperCase()).length} Kelime)</span>
          </button>
        </div>
      </div>

      {/* Filtre & Arama Kontrolleri Paneli */}
      <div className="card-vibrant p-5 sm:p-6 space-y-4">
        {/* Satır 1: Sınav Modu & Görünüm Modu & Canlı Arama */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Sınav Modu Seçici */}
            <div className="flex items-center gap-1.5 bg-black/40 p-1.5 rounded-2xl border border-white/10 flex-wrap">
              <span className="text-[11px] font-bold text-white/50 px-2 flex items-center gap-1">
                <Filter className="w-3 h-3 text-cyan-400" /> Sınav:
              </span>
              {(["TÜMÜ", "YDS", "YDT", "YÖKDİL"] as const).map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => {
                    setSelectedExam(ex);
                    resetIdx();
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                    selectedExam === ex
                      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-md shadow-cyan-500/20 scale-105"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {ex === "TÜMÜ" ? "🌟 Tüm Sınavlar" : ex === "YDS" ? "🎯 YDS" : ex === "YDT" ? "🎓 YDT" : "🔬 YÖKDİL"}
                </button>
              ))}
            </div>

            {/* Görünüm Modu: 3D Kart vs Tüm Liste Tablosu */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-2xl border border-white/10 shrink-0">
              <button
                type="button"
                onClick={() => setViewMode("card")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  viewMode === "card"
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-md shadow-cyan-500/20"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>3D Kart</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  viewMode === "table"
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-md shadow-cyan-500/20"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Tablo ({sortedWords.length})</span>
              </button>
            </div>
          </div>

          {/* Canlı Arama Kutusu */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                resetIdx();
              }}
              placeholder="Kelime, anlam veya eşanlam ara (örn. mitigate, hızlandırmak)..."
              className="w-full bg-black/30 border border-white/15 rounded-2xl pl-10 pr-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 placeholder:text-white/40"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  resetIdx();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Satır 2: CEFR Seviyesi, Kelime Türü & Kaynak Havuzu */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10 text-xs">
          {/* CEFR Seviye Hapları */}
          <span className="text-[11px] font-bold text-white/50 mr-1">Seviye:</span>
          {CEFR_LEVELS.map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                setSelectedLevel(lvl);
                resetIdx();
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedLevel === lvl
                  ? "bg-cyan-500/30 border border-cyan-400 text-cyan-200"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              {lvl}
            </button>
          ))}

          <span className="mx-2 text-white/20">|</span>

          {/* Tür Hapları */}
          <span className="text-[11px] font-bold text-white/50 mr-1">Tür:</span>
          {WORD_TYPES.map((tp) => (
            <button
              key={tp}
              onClick={() => {
                setSelectedType(tp);
                resetIdx();
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                selectedType === tp
                  ? "bg-pink-500/30 border border-pink-400 text-pink-200"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              {tp}
            </button>
          ))}

          <span className="mx-2 text-white/20">|</span>

          {/* Havuz Seçici */}
          <span className="text-[11px] font-bold text-white/50 mr-1">Havuz:</span>
          <button
            onClick={() => {
              setSelectedPool("TÜMÜ");
              resetIdx();
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              selectedPool === "TÜMÜ"
                ? "bg-amber-500/30 border border-amber-400 text-amber-200"
                : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
            }`}
          >
            Tümü ({consolidatedPool.length})
          </button>
          <button
            onClick={() => {
              setSelectedPool("yayinlar");
              resetIdx();
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              selectedPool === "yayinlar"
                ? "bg-amber-500/30 border border-amber-400 text-amber-200"
                : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
            }`}
          >
            🏛️ Yayınlar ({YDS_PUBLICATIONS_MASTER_CORPUS.length})
          </button>
          <button
            onClick={() => {
              setSelectedPool("master");
              resetIdx();
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              selectedPool === "master"
                ? "bg-amber-500/30 border border-amber-400 text-amber-200"
                : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
            }`}
          >
            📚 2.500 Master ({MASTER_VOCABULARY.length})
          </button>

          {/* Aksiyonlar: Karıştır & Sıfırla */}
          <div className="ml-auto flex items-center gap-1.5">
            <button
              onClick={handleShuffle}
              className="flex items-center gap-1 px-3 py-1 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-200 hover:bg-purple-500/30 font-bold transition-all"
              title="Rastgele Bir Karta Git"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Karıştır</span>
            </button>
            <button
              onClick={resetAllFilters}
              className="flex items-center gap-1 px-3 py-1 rounded-xl bg-white/5 border border-white/15 text-white/60 hover:text-white hover:bg-white/10 font-bold transition-all"
              title="Filtreleri Sıfırla"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>
        </div>
      </div>

      {/* Seri göstergesi */}
      {streak >= 2 && (
        <div className="text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-400/40 text-orange-300 font-black text-sm anim-pop shadow-lg shadow-orange-500/10">
            🔥 {streak} Seri Doğru! Böyle Devam Kral!
          </span>
        </div>
      )}

      {/* Sonuç Yok Uyarısı */}
      {total === 0 ? (
        <div className="card-vibrant p-12 text-center space-y-4 max-w-xl mx-auto">
          <div className="text-5xl">🔍</div>
          <h3 className="text-xl font-black text-white">Bu Filtreye Uygun Kelime Bulunamadı</h3>
          <p className="text-xs text-white/60">
            Arama kriterlerinize veya seçtiğiniz seviyeye uygun kart bulunamadı. Filtreleri sıfırlayabilir veya kendi PDF kelimelerinizi ekleyebilirsiniz.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={resetAllFilters}
              className="px-5 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-200 font-bold text-xs hover:bg-cyan-500/30 transition-all"
            >
              Tüm Filtreleri Sıfırla
            </button>
            <Link
              href="/import"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs hover:scale-105 transition-all"
            >
              Yeni Kelime Ekle &rarr;
            </Link>
          </div>
        </div>
      ) : viewMode === "table" ? (
        <div className="card-vibrant p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
            <div>
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <span>📋</span> Tüm Kelime Envanteri Tablosu
              </h3>
              <p className="text-xs text-white/60">
                Toplam <strong className="text-cyan-300 font-mono">{sortedWords.length}</strong> kelime. İstediğiniz satıra veya &ldquo;3D Aç&rdquo; butonuna basarak kart görünümüne geçebilirsiniz.
              </p>
            </div>
            <div className="text-xs text-white/50 font-mono">
              Sayfa {tablePage} / {totalTablePages}
            </div>
          </div>

          {/* Responsive Tablo */}
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-xs text-white/80">
              <thead className="bg-black/40 text-[11px] uppercase font-bold text-white/60 border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Kelime & Telaffuz</th>
                  <th className="py-3 px-4">Türkçe Anlamı</th>
                  <th className="py-3 px-3">Tür</th>
                  <th className="py-3 px-3">Seviye</th>
                  <th className="py-3 px-3">Sınav</th>
                  <th className="py-3 px-4">Kaynak / Havuz</th>
                  <th className="py-3 px-3 text-right">3D Kart</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {paginatedWords.map((word) => (
                  <tr
                    key={word.id}
                    onClick={() => openIn3DCard(word)}
                    className="hover:bg-white/[0.06] transition-colors cursor-pointer group"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => speakWord(word.word, e)}
                          className="p-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-white/50 hover:text-cyan-300 transition-colors"
                          title="Sesli Dinle (US)"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                          {word.word}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-white/90">
                      {word.tr}
                    </td>
                    <td className="py-3 px-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-400/30 capitalize">
                        {word.type}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                        {word.level}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex gap-1 flex-wrap">
                        {word.exams.map((ex) => (
                          <span
                            key={ex}
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/10 text-white/70"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[11px] text-white/60">
                      <span className="line-clamp-1" title={word.sourceCategory}>
                        {word.sourceCategory || "DİL MASTER"}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openIn3DCard(word);
                        }}
                        className="px-2.5 py-1 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-200 text-[11px] font-bold transition-all shrink-0 inline-flex items-center gap-1"
                      >
                        <span>🃏</span>
                        <span>3D Aç</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sayfalama Kontrolleri */}
          {totalTablePages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs">
              <div className="text-white/50">
                Toplam <strong>{sortedWords.length}</strong> kelimeden <strong>{(tablePage - 1) * TABLE_PAGE_SIZE + 1}</strong> - <strong>{Math.min(tablePage * TABLE_PAGE_SIZE, sortedWords.length)}</strong> arası gösteriliyor
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={tablePage === 1}
                  onClick={() => setTablePage(1)}
                  className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  İlk
                </button>
                <button
                  type="button"
                  disabled={tablePage === 1}
                  onClick={() => setTablePage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  ← Önceki
                </button>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 font-bold font-mono">
                  {tablePage} / {totalTablePages}
                </span>
                <button
                  type="button"
                  disabled={tablePage === totalTablePages}
                  onClick={() => setTablePage((p) => Math.min(totalTablePages, p + 1))}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  Sonraki →
                </button>
                <button
                  type="button"
                  disabled={tablePage === totalTablePages}
                  onClick={() => setTablePage(totalTablePages)}
                  className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  Son
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* İlerleme Çubuğu & İstatistik */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-xs text-white/60 mb-1.5 font-mono">
              <span className="font-bold text-cyan-300">
                Kart {idx + 1} / {total}
              </span>
              <span>
                {stat ? (
                  <span className="text-emerald-300 font-bold">
                    {stat.c}✓ Doğru · {stat.w}✗ Tekrar
                  </span>
                ) : (
                  <span className="text-yellow-300/80">Yeni Kart ✨</span>
                )}
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-white/10 overflow-hidden border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400 transition-all duration-300"
                style={{ width: `${Math.round(((idx + 1) / total) * 100)}%` }}
              />
            </div>
          </div>

          {/* Ana 3D Küp ve Kart Görünümü */}
          {currentWord && (
            <div className="grid md:grid-cols-2 gap-8 items-center pt-2">
              {/* Sol Sütun: 3D Dönen Küp */}
              <div className="order-2 md:order-1 flex flex-col items-center gap-4">
                <Cube
                  front={currentWord.word}
                  back={currentWord.tr.split(",")[0] || currentWord.tr}
                  color={GRADIENTS[idx % GRADIENTS.length]}
                />
                <p className="text-xs text-white/40 font-mono flex items-center gap-1.5">
                  <span>🖱️</span> Küpü sürükleyerek 3D döndürebilirsiniz
                </p>

                <div className="flex items-center gap-2">
                  <SceneAnim slug={currentWord.category} size="text-2xl" />
                  <a
                    href={`https://giphy.com/search/${encodeURIComponent(currentWord.word)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-pink-400/50 transition-all flex items-center gap-1"
                  >
                    <span>🎬 GIF Ara</span>
                    <ExternalLink className="w-3 h-3 text-pink-400" />
                  </a>
                </div>
              </div>

              {/* Sağ Sütun: 3D Çevrilebilir Kart */}
              <div className="order-1 md:order-2 space-y-4">
                <div
                  className="flip-scene min-h-[340px] cursor-pointer"
                  onClick={() => setFlipped(!flipped)}
                  title="Kartı çevirmek için tıkla veya Boşluk (Space) tuşuna bas"
                >
                  <div className={`flip-card relative w-full min-h-[340px] ${flipped ? "flipped" : ""}`}>
                    {/* ÖN YÜZ */}
                    <div className="flip-face card-vibrant p-6 sm:p-8 flex flex-col items-center justify-between text-center relative border-2 border-white/15 shadow-2xl">
                      {/* Üst Rozetler */}
                      <div className="flex flex-wrap items-center justify-center gap-1.5 w-full">
                        {/* Seviye */}
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                          {currentWord.level}
                        </span>
                        {/* Tür */}
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 capitalize">
                          {currentWord.type}
                        </span>
                        {/* Hedef Sınavlar */}
                        {currentWord.exams.map((ex) => (
                          <span
                            key={ex}
                            className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-white/10 text-white/70"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>

                      {/* Kelime ve Emoji */}
                      <div className="my-auto py-4 space-y-2">
                        <div className="text-5xl">{currentWord.emoji}</div>
                        <h2 className="text-3xl sm:text-4xl font-black gradient-text tracking-wide">
                          {currentWord.word}
                        </h2>
                        {currentWord.hint && (
                          <p className="text-xs text-white/60 max-w-sm mx-auto line-clamp-2 italic">
                            💡 &ldquo;{currentWord.hint}&rdquo;
                          </p>
                        )}
                      </div>

                      {/* Alt Kaynak & Tıklama Bilgisi */}
                      <div className="w-full flex items-center justify-between text-[11px] text-white/40 pt-2 border-t border-white/10">
                        <span className="truncate max-w-[200px]" title={currentWord.sourceCategory}>
                          🏛️ {currentWord.sourceCategory || "DİL MASTER Korpusu"}
                        </span>
                        <span className="text-cyan-300/80 font-bold">Çevirmek için tıkla 👆</span>
                      </div>
                    </div>

                    {/* ARKA YÜZ */}
                    <div className="flip-face flip-back card-vibrant p-6 sm:p-8 flex flex-col justify-between text-left border-2 border-cyan-400/40 shadow-2xl overflow-y-auto">
                      <div className="space-y-3">
                        {/* Türkçe Anlamı */}
                        <div>
                          <span className="text-[10px] uppercase font-black tracking-wider text-pink-400">
                            Türkçe Anlamı
                          </span>
                          <div className="text-2xl font-black text-white mt-0.5">{currentWord.tr}</div>
                        </div>

                        {/* İngilizce Tanım / İpucu */}
                        {currentWord.hint && (
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-[10px] font-bold text-amber-300 flex items-center gap-1">
                              <span>💡</span> İngilizce Tanım & Bellek İpucu:
                            </span>
                            <p className="text-xs text-white/80 mt-0.5 italic">{currentWord.hint}</p>
                          </div>
                        )}

                        {/* Örnek Cümle ve Çevirisi */}
                        {currentWord.example && (
                          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20 space-y-1">
                            <span className="text-[10px] font-bold text-cyan-300">📝 Sınav Tipi Örnek:</span>
                            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-mono">
                              &ldquo;{currentWord.example}&rdquo;
                            </p>
                            {currentWord.exampleTr && (
                              <p className="text-xs text-white/60 italic pt-1 border-t border-white/5">
                                {currentWord.exampleTr}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Eşanlamlılar & Collocations */}
                        {currentWord.synonyms && currentWord.synonyms.length > 0 && (
                          <div>
                            <span className="text-[10px] font-black uppercase text-white/50">Eşanlamlılar:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {currentWord.synonyms.map((s) => (
                                <span
                                  key={s}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-white/80 border border-white/10"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-white/40">
                        <span>{currentWord.category}</span>
                        <span className="text-cyan-300 font-bold">Ön yüze dönmek için tıkla 👆</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Medya / Video Linkleri */}
                <div className="flex flex-wrap items-center gap-2">
                  {videoOptions.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => {
                        setVideo(o);
                        setVideoOpen(true);
                      }}
                      className="text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-cyan-400/50 transition-all flex items-center gap-1.5"
                      title={o.tip}
                    >
                      <span>{o.emoji}</span>
                      <span>{o.label} ▶</span>
                    </button>
                  ))}
                  <Tip tip={MEDIA_SOURCE_TIP} marker>
                    <button className="text-[11px] font-bold px-2 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/60 hover:text-white transition-all">
                      ℹ️
                    </button>
                  </Tip>
                </div>

                {/* 5 Aksanda Sesli Telaffuz Çubuğu */}
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-1">
                    <span>🗣️</span> Aksanlar — Çoklu Aksan Dinle (US, UK, CA, AU, NZ)
                  </p>
                  <AccentBar text={currentWord.word} />
                </div>

                {/* Öğrenme Kontrol Butonları */}
                <div className="flex gap-2.5 pt-2">
                  <button
                    onClick={() => go(-1)}
                    className="p-3.5 rounded-2xl border border-white/20 font-bold hover:bg-white/10 transition-all text-white"
                    aria-label="Önceki Kart"
                    title="Önceki (Sol Ok ←)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <Tip marker tip="Bu kelime tekrar listesine eklenir. Zayıf kelimelerin bir sonraki turda en başta gelir!">
                    <button
                      onClick={() => mark(false)}
                      className="flex-1 py-3.5 px-4 rounded-2xl bg-rose-500/20 border border-rose-400/40 font-black text-xs sm:text-sm text-rose-200 hover:bg-rose-500/30 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>🔁 Tekrar Et</span>
                    </button>
                  </Tip>

                  <Tip marker tip="Doğru bilirsen kalıcılık puanın artar; her 5 seride havai fişek patlar! 🎆">
                    <button
                      onClick={() => mark(true)}
                      className="flex-1 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 font-black text-xs sm:text-sm text-white hover:scale-105 transition-transform flex items-center justify-center gap-1.5 shadow-lg shadow-teal-500/20"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>✓ Bildim</span>
                    </button>
                  </Tip>

                  <button
                    onClick={() => go(1)}
                    className="p-3.5 rounded-2xl border border-white/20 font-bold hover:bg-white/10 transition-all text-white"
                    aria-label="Sonraki Kart"
                    title="Sonraki (Sağ Ok →)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
