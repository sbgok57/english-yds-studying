"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { WORDS } from "@/lib/data-vocabulary";
import { BASE_INVENTORY_ITEMS, getWordExams } from "@/lib/data-inventory";
import { MASTER_VOCABULARY } from "@/lib/vocabulary/master-vocab-database";
import { YDS_PUBLICATIONS_MASTER_CORPUS } from "@/lib/vocabulary/publications-master-corpus";
import Celebration from "@/components/Celebration";
import Tip from "@/components/Tip";
import VideoModal, { type VideoOption } from "@/components/VideoModal";
import AccentBar from "@/components/AccentBar";
import VocabularyVisual from "@/components/media/VocabularyVisual";
import { MEDIA_SOURCE_TIP } from "@/lib/media-source";
import { recordWord, useUsage, wordScore } from "@/lib/store";
import { isWordReviewDue, isWordStillLearning } from "@/lib/vocabulary/learning-schedule";
import { logVocabularySession } from "@/lib/activity-logger";
import { clientAudio } from "@/lib/tts/audio-client";
import { getHighestUnlockedCefrLevel, isVocabularyLevelUnlocked } from "@/lib/adaptive/content-access";
import { getVoiceProfile } from "@/lib/tts/voice-registry";
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

const CEFR_LEVELS = ["Tümü", "A1", "A2", "B1", "B2", "C1", "C2"] as const;
const WORD_TYPES = ["Tümü", "fiil", "isim", "sıfat", "zarf", "phrasal verb"] as const;

function correctLastStreak(streak: number): string {
  if (streak > 0 && streak % 5 === 0) return "Kral gibi gidiyorsun, hız kesme! 👑";
  return "Kaydını aldık, sana göre ilerliyoruz kanka.";
}

export default function FlashcardsPage() {
  const { usage, update } = useUsage();
  const unlockedLevel = getHighestUnlockedCefrLevel(usage.levelAssessment?.currentLevel);

  // Filtre durumları
  const [selectedExam, setSelectedExam] = useState<"TÜMÜ" | "YDS" | "YDT" | "YÖKDİL">("TÜMÜ");
  const [selectedLevel, setSelectedLevel] = useState<string>("Tümü");
  const [selectedType, setSelectedType] = useState<string>("Tümü");
  const [selectedPool, setSelectedPool] = useState<"TÜMÜ" | "yayinlar" | "master" | "temel">("TÜMÜ");
  const [searchQuery, setSearchQuery] = useState("");
  const [queueMode, setQueueMode] = useState<"all" | "learning">("all");

  // Görünüm modu: kelime kartları veya tüm liste tablosu
  const [viewMode, setViewMode] = useState<"card" | "table">("card");
  const [tablePage, setTablePage] = useState(1);
  const TABLE_PAGE_SIZE = 30;

  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [streak, setStreak] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [celebrateMsg, setCelebrateMsg] = useState("");
  const [video, setVideo] = useState<VideoOption | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  // 1. Tüm veri kaynaklarını konsolide et (PERF: Tek seferlik pure memoize — 2.544 kelime tam eşitlik)
  const consolidatedPool = useMemo<UnifiedFlashcardWord[]>(() => {
    const list: UnifiedFlashcardWord[] = [];
    const seen = new Set<string>();

    // A. 2013-2026 Akademik Yayınlar Master Korpusu (Modadil, Akın Dil, Remzi Hoca, vb.)
    YDS_PUBLICATIONS_MASTER_CORPUS.forEach((p, i) => {
      const norm = p.term.toLowerCase();
      if (seen.has(norm)) return;
      seen.add(norm);
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
      const norm = m.word.toLowerCase();
      if (seen.has(norm)) return;
      seen.add(norm);

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
      const norm = w.word.toLowerCase();
      if (seen.has(norm)) return;
      seen.add(norm);
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

    // D. BASE_INVENTORY_ITEMS (Kanonik 2.544 Envanter Tamamlaması)
    BASE_INVENTORY_ITEMS.forEach((b) => {
      const norm = b.word.toLowerCase();
      if (seen.has(norm)) return;
      seen.add(norm);
      const posTr =
        b.phrasalVerb
          ? "phrasal verb"
          : b.partOfSpeech === "verb"
          ? "fiil"
          : b.partOfSpeech === "noun"
          ? "isim"
          : b.partOfSpeech === "adjective"
          ? "sıfat"
          : b.partOfSpeech === "adverb"
          ? "zarf"
          : "isim";
      list.push({
        id: b.id,
        word: b.word,
        tr: b.turkishMeanings.join(", "),
        type: posTr,
        level: b.level === "UNCLASSIFIED" ? "B2" : b.level,
        category: "Envanter Çekirdek",
        exams: getWordExams(b),
        emoji: "📚",
        hint: b.englishDefinition || "Akademik sınav kelimesi",
        example: b.example || "",
        exampleTr: b.exampleTr || "",
        synonyms: b.synonyms,
        sourceCategory: "DİL MASTER Konsolide Envanter",
        poolSource: "temel",
      });
    });

    return list;
  }, []);

  // 2. Filtrelenmiş ve Kullanıcı Performansına göre Sıralanmış Liste
  const filteredWords = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const now = Date.now();

    return consolidatedPool.filter((item) => {
      if (!isVocabularyLevelUnlocked(usage.levelAssessment?.currentLevel, item.level)) return false;
      if (queueMode === "learning") {
        const review = usage.wordReviews?.[String(item.id)];
        if (!isWordStillLearning(review) && !isWordReviewDue(review, now)) return false;
      }
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
  }, [consolidatedPool, selectedExam, selectedLevel, selectedType, selectedPool, searchQuery, queueMode, usage.wordReviews, usage.levelAssessment?.currentLevel]);

  // 3. Öğrenci skoruna göre sırala: En zayıf (düşük puanlı) kelimeler önce gelir
  const sortedWords = useMemo(() => {
    return [...filteredWords].sort((a, b) => {
      if (queueMode === "learning") {
        const aDue = usage.wordReviews?.[String(a.id)]?.dueAt ?? 0;
        const bDue = usage.wordReviews?.[String(b.id)]?.dueAt ?? 0;
        if (aDue !== bDue) return aDue - bDue;
      }
      return wordScore(usage.words[String(a.id)]) - wordScore(usage.words[String(b.id)]);
    });
  }, [filteredWords, usage.words, usage.wordReviews, queueMode]);

  const reviewQueueCount = consolidatedPool.filter((word) => {
    const review = usage.wordReviews?.[String(word.id)];
    return isWordStillLearning(review) || isWordReviewDue(review, Date.now());
  }).length;
  const dueReviewCount = consolidatedPool.filter((word) =>
    isWordReviewDue(usage.wordReviews?.[String(word.id)], Date.now())
  ).length;

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

  // URL parametresinden kelime ve sınav filtreleme (PERF & UX: /vocabulary/flashcards?exam=YDT&word=abate)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const targetWord = params.get("word") || params.get("q");
    if (targetWord) {
      setSearchQuery(targetWord);
      setViewMode("card");
    }
    const targetExam = params.get("exam");
    if (targetExam) {
      const upper = targetExam.toUpperCase();
      if (upper === "YDS" || upper === "YDT") {
        setSelectedExam(upper as "YDS" | "YDT");
      } else if (upper === "YÖKDİL" || upper === "YOKDIL") {
        setSelectedExam("YÖKDİL");
      }
    }
  }, []);

  const totalTablePages = Math.max(1, Math.ceil(sortedWords.length / TABLE_PAGE_SIZE));
  const paginatedWords = useMemo(() => {
    const start = (tablePage - 1) * TABLE_PAGE_SIZE;
    return sortedWords.slice(start, start + TABLE_PAGE_SIZE);
  }, [sortedWords, tablePage]);

  // SAFETY: Stop active audio when leaving flashcards page
  useEffect(() => {
    return () => {
      clientAudio.stopAll();
    };
  }, []);

  // Sesli Telaffuz (Merkezi clientAudio motoru ile)
  const speakWord = (text: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const preferences = clientAudio.getPreferences();
    const selectedVoice = getVoiceProfile(preferences.preferredVoiceId);
    void clientAudio.play(text, {
      voiceId: selectedVoice?.enabled ? selectedVoice.id : undefined,
      accent: preferences.preferredAccent,
      gender: preferences.preferredVoiceGender,
      rate: preferences.speakingRate,
      contentType: text.includes(" ") ? "sentence" : "word",
    });
  };

  const openWordCard = (targetWord: UnifiedFlashcardWord) => {
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

  const sessionCountRef = useRef(0);
  const sessionCorrectRef = useRef(0);

  // SAFETY: Persist reviewed cards on unmount
  useEffect(() => {
    return () => {
      const c = sessionCountRef.current;
      const ok = sessionCorrectRef.current;
      if (c > 0) {
        void logVocabularySession({
          cardsReviewed: c,
          correctCount: ok,
          examType: (selectedExam === "TÜMÜ" ? "Genel" : selectedExam) as any,
          timeSpentMinutes: Math.max(1, Math.round(c * 0.4)),
        });
      }
    };
  }, [selectedExam]);

  const mark = (correct: boolean) => {
    if (!currentWord) return;
    recordWord(update, currentWord.id, correct);

    sessionCountRef.current += 1;
    if (correct) sessionCorrectRef.current += 1;

    // Persist every 5 cards to server database
    if (sessionCountRef.current % 5 === 0) {
      void logVocabularySession({
        cardsReviewed: sessionCountRef.current,
        correctCount: sessionCorrectRef.current,
        examType: (selectedExam === "TÜMÜ" ? "Genel" : selectedExam) as any,
        timeSpentMinutes: Math.max(1, Math.round(sessionCountRef.current * 0.4)),
      });
    }

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
              <span className="gradient-text">Kelime kartları</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
              Kanka, kelimeyi hatırlamaya çalış; takıldıklarını sana uygun aralıklarla yeniden getireceğiz. Şu an {consolidatedPool.length.toLocaleString("tr-TR")} kelime var.
            </p>
          </div>

          {/* Vurgulu PDF / Kelime Ekle Butonu */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <Link
              href="/import"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-slate-950 font-black text-sm shadow-xl shadow-teal-500/30 hover:scale-105 active:scale-95 transition-all text-center group"
            >
              <FileUp className="w-5 h-5 text-slate-950 group-hover:-translate-y-0.5 transition-transform" />
              <span>Kelime veya PDF ekle</span>
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

        <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-950/30 px-4 py-3 text-sm text-white/80" aria-live="polite">
          Şu an <strong className="text-cyan-200">{unlockedLevel}</strong> seviyesine kadar içerik açık. Bir üst basamağı açmak için <Link href="/level-test" className="font-bold text-amber-200 underline underline-offset-2">seviye tespitini tamamla</Link>; kelime havuzun sonucuna göre genişler.
        </div>
      </div>

      <section className="card-vibrant p-4 sm:p-5 space-y-4" aria-labelledby="word-learning-title">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 id="word-learning-title" className="text-lg font-black text-white">Bugün ne çalışalım?</h2>
            <p className="text-sm text-white/65 mt-1">Zorlandıkların burada kalır; öğrendiklerin de zamanı gelince tekrar önüne çıkar.</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Kelime çalışma listesi">
            <button type="button" onClick={() => { setQueueMode("all"); resetIdx(); }} aria-pressed={queueMode === "all"}
              className={`rounded-xl px-4 py-2 text-sm font-bold border transition-colors ${queueMode === "all" ? "bg-cyan-400 text-slate-950 border-cyan-300" : "bg-white/5 text-white/80 border-white/15 hover:bg-white/10"}`}>
              Tüm kelimeler
            </button>
            <button type="button" onClick={() => { setQueueMode("learning"); setViewMode("card"); resetIdx(); }} aria-pressed={queueMode === "learning"}
              className={`rounded-xl px-4 py-2 text-sm font-bold border transition-colors ${queueMode === "learning" ? "bg-rose-400 text-slate-950 border-rose-300" : "bg-white/5 text-white/80 border-white/15 hover:bg-white/10"}`}>
              Zorlandıklarım ve tekrar listem ({reviewQueueCount})
            </button>
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-3 text-xs sm:text-sm text-white/75">
          <p className="rounded-xl bg-white/5 p-3"><strong className="text-cyan-200">1. Hatırla:</strong> Cevabı açmadan önce anlamını aklından söyle.</p>
          <p className="rounded-xl bg-white/5 p-3"><strong className="text-cyan-200">2. Kendini yokla:</strong> Takıldıysan “Tekrar et”, bildiysen “Bildim” seç.</p>
          <p className="rounded-xl bg-white/5 p-3"><strong className="text-cyan-200">3. Aralıklı tekrar:</strong> Yanlışlar yakında, doğrular giderek daha uzun arayla gelir.</p>
        </div>
        {queueMode === "learning" && <p className="text-xs text-white/60">{dueReviewCount} kelimenin tekrar zamanı geldi. Takıldıkların da öğrendiklerini sağlamlaştırana kadar listede kalır.</p>}
      </section>

      {/* Filtre & Arama Kontrolleri Paneli */}
      <div className="card-vibrant p-4 sm:p-5 space-y-4">
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

            {/* Görünüm Modu: Kart vs Tüm Liste Tablosu */}
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
                <span>Kart</span>
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

        <details className="border-t border-white/10 pt-3">
          <summary className="cursor-pointer select-none text-sm font-bold text-white/80 hover:text-white">Ek filtreler ve liste araçları</summary>
          <div className="flex flex-wrap items-center gap-2 pt-3 text-xs">
          {/* CEFR Seviye Hapları */}
          <span className="text-[11px] font-bold text-white/50 mr-1">Seviye:</span>
          {CEFR_LEVELS.map((lvl) => (
              <button
              key={lvl}
                disabled={lvl !== "Tümü" && !isVocabularyLevelUnlocked(usage.levelAssessment?.currentLevel, lvl)}
              onClick={() => {
                setSelectedLevel(lvl);
                resetIdx();
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedLevel === lvl
                  ? "bg-cyan-500/30 border border-cyan-400 text-cyan-200"
                    : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
                } ${lvl !== "Tümü" && !isVocabularyLevelUnlocked(usage.levelAssessment?.currentLevel, lvl) ? "cursor-not-allowed opacity-35" : ""}`}
            >
              {lvl !== "Tümü" && !isVocabularyLevelUnlocked(usage.levelAssessment?.currentLevel, lvl) ? `🔒 ${lvl}` : lvl}
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
              onClick={() => {
                setQueueMode("all");
                resetAllFilters();
              }}
              className="flex items-center gap-1 px-3 py-1 rounded-xl bg-white/5 border border-white/15 text-white/60 hover:text-white hover:bg-white/10 font-bold transition-all"
              title="Filtreleri Sıfırla"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>
          </div>
        </details>
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
            {queueMode === "learning" && reviewQueueCount === 0
              ? "Şimdilik tekrar sırası boş kanka. Bir kartta “Tekrar et” seçtiğinde zorlandığın kelimeyi buraya alacağız."
              : queueMode === "learning"
                ? "Bu filtrelere uyan tekrar kelimesi yok. Filtreleri kaldırıp tüm tekrar listene bakabilirsin."
                : "Aramana veya filtrelerine uygun kelime bulamadık. Filtreleri sıfırlayıp yeniden deneyebilirsin."}
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setQueueMode("all");
                resetAllFilters();
              }}
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
                Toplam <strong className="text-cyan-300 font-mono">{sortedWords.length}</strong> kelime. Bir satıra veya &ldquo;Kartı Aç&rdquo; düğmesine basarak kelime kartına geçebilirsiniz.
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
                  <th className="py-3 px-3 text-right">Kart</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {paginatedWords.map((word) => (
                  <tr
                    key={word.id}
                    onClick={() => openWordCard(word)}
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
                          openWordCard(word);
                        }}
                        className="px-2.5 py-1 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-200 text-[11px] font-bold transition-all shrink-0 inline-flex items-center gap-1"
                      >
                        <span>🃏</span>
                        <span>Kartı Aç</span>
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

          {/* Kelime kartı görünümü */}
          {currentWord && (
            <div className="max-w-3xl mx-auto pt-2">
              <div className="space-y-4">
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

                      {/* Kelime ve Görsel Hafıza Modülü */}
                      <div className="my-auto py-3 space-y-2 w-full">
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="w-full max-w-xs mx-auto mb-1"
                        >
                          <VocabularyVisual
                            english={currentWord.word}
                            turkish={currentWord.tr}
                            partOfSpeech={currentWord.type}
                            level={currentWord.level}
                            compact
                          />
                        </div>
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
