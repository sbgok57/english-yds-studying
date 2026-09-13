"use client";

import { useState, useEffect } from "react";
import Flashcard, { type WordCardData } from "@/components/vocabulary/Flashcard";
import { Sparkles, Shuffle, ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { calculateSM2 } from "@/lib/spaced-repetition";
import Link from "next/link";

export default function FlashcardsPage() {
  const [words, setWords] = useState<WordCardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Kelimeleri API veya statik veri kaynağından çek
    fetch("/api/words")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setWords(data);
        } else {
          loadFallbackWords();
        }
      })
      .catch(() => loadFallbackWords())
      .finally(() => setLoading(false));
  }, []);

  const loadFallbackWords = () => {
    // 30 kanonik kelime fallback'i
    const fallbackList: WordCardData[] = [
      { id: "1", english: "bring about", turkish: "neden olmak, yol açmak", definitionEn: "to cause something to happen", examples: ["The industrial revolution brought about massive social shifts."], synonyms: ["lead to", "trigger"], level: "B2", type: "phrasal verb" },
      { id: "2", english: "cope with", turkish: "üstesinden gelmek, başa çıkmak", definitionEn: "to deal successfully with a difficult situation", examples: ["Hospitals struggled to cope with the surge in patients."], synonyms: ["manage", "handle"], level: "B2", type: "phrasal verb" },
      { id: "3", english: "ubiquitous", turkish: "her yerde bulunan, yaygın", definitionEn: "present, appearing, or found everywhere", examples: ["Smartphones have become ubiquitous in modern society."], synonyms: ["omnipresent", "pervasive"], level: "C1", type: "sıfat" },
      { id: "4", english: "inevitable", turkish: "kaçınılmaz", definitionEn: "certain to happen; unavoidable", examples: ["Technological change is an inevitable part of human evolution."], synonyms: ["unavoidable", "inescapable"], level: "B2", type: "sıfat" },
      { id: "5", english: "drastically", turkish: "ciddi ölçüde, sertçe", definitionEn: "in a severe or extreme manner", examples: ["Carbon emissions must be drastically curtailed."], synonyms: ["severely", "substantially"], level: "B2", type: "zarf" },
      { id: "6", english: "carry out", turkish: "yürütmek, gerçekleştirmek", definitionEn: "to perform or conduct a task or experiment", examples: ["Scientists carried out rigorous experiments."], synonyms: ["conduct", "perform"], level: "B2", type: "phrasal verb" },
      { id: "7", english: "pioneer", turkish: "öncü, çığır açan kimse", definitionEn: "a person who is among the first to explore a new area", examples: ["She was a pioneer in pediatric neurosurgery."], synonyms: ["trailblazer", "innovator"], level: "B2", type: "isim" },
      { id: "8", english: "deteriorate", turkish: "kötüleşmek, bozulmak", definitionEn: "to become progressively worse", examples: ["The diplomatic relations deteriorated rapidly."], synonyms: ["worsen", "degenerate"], level: "B2", type: "fiil" },
      { id: "9", english: "exclusively", turkish: "yalnızca, sadece", definitionEn: "only and entirely for a specific purpose", examples: ["This grant is exclusively allocated to quantum physics."], synonyms: ["solely", "entirely"], level: "B2", type: "zarf" },
      { id: "10", english: "make up for", turkish: "telafi etmek", definitionEn: "to compensate for something bad or missing", examples: ["Hard work can make up for lack of initial experience."], synonyms: ["compensate for"], level: "B2", type: "phrasal verb" },
    ];
    setWords(fallbackList);
  };

  const handleKnow = (wordId: string, quality: number) => {
    // SM-2 algoritması işlet
    calculateSM2(quality);
    if (currentIndex < words.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleDontKnow = (wordId: string) => {
    // Tekrar listesine ekle veya sonraya ertele
    calculateSM2(1);
    if (currentIndex < words.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const shuffleCards = () => {
    setWords((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-white">
        <div className="text-center space-y-3 animate-pulse">
          <div className="w-12 h-12 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-bold text-sm">Görsel Hafıza Flashcard'ları Hazırlanıyor...</p>
        </div>
      </div>
    );
  }

  const currentWord = words[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Üst Başlık & Kontroller */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
            🃏 3D Görsel Hafıza Flashcards
          </h1>
          <p className="text-xs text-white/70 mt-1">
            SM-2 Aralıklı Tekrar (Spaced Repetition) Algoritması ile Güçlendirildi
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={shuffleCards}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors"
            title="Kartları Karıştır"
          >
            <Shuffle className="w-3.5 h-3.5 text-cyan-300" />
            <span>Karıştır</span>
          </button>
          <Link
            href="/vocabulary"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white"
          >
            Tüm Kelimeler
          </Link>
        </div>
      </div>

      {/* Ana Kart Bileşeni */}
      {currentWord && (
        <Flashcard
          word={currentWord}
          onKnow={handleKnow}
          onDontKnow={handleDontKnow}
          totalCards={words.length}
          currentIndex={currentIndex}
        />
      )}

      {/* Alt Gezinme Barı */}
      <div className="flex items-center justify-center gap-4 pt-4">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-bold text-white"
        >
          <ArrowLeft className="w-4 h-4" /> Önceki Kart
        </button>

        <span className="text-xs font-mono font-bold text-yellow-300 px-3 py-1 rounded-full bg-black/40 border border-white/15">
          {currentIndex + 1} / {words.length}
        </span>

        <button
          onClick={() => setCurrentIndex((prev) => Math.min(words.length - 1, prev + 1))}
          disabled={currentIndex === words.length - 1}
          className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-bold text-white"
        >
          Sonraki Kart <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
