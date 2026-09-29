"use client";

import React, { useState, useEffect, useRef } from "react";
import { NewsArticle } from "@/lib/news/types";

interface NewsReaderModalProps {
  article: NewsArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export function NewsReaderModal({ article, isOpen, onClose }: NewsReaderModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showFullTurkish, setShowFullTurkish] = useState(false);
  const [activeWordPlaying, setActiveWordPlaying] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isOpen, onClose]);

  // Reset audio on article change
  useEffect(() => {
    setIsPlaying(false);
    setShowFullTurkish(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }, [article]);

  if (!isOpen || !article) return null;

  const { newspaperClipping: clip } = article;

  // Build full English text for reading aloud
  const fullArticleText = `${article.titleEn}. ${article.paragraphs.map((p) => p.en).join(" ")}`;

  const handleTogglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      // Play full article via TTS audio route or speech synthesis fallback
      const audioUrl = `/api/tts?text=${encodeURIComponent(fullArticleText.slice(0, 500))}&accent=en-US&rate=${playbackRate}`;
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.playbackRate = playbackRate;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // SAFETY: Fallback to browser SpeechSynthesis
          if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance(fullArticleText);
            utter.lang = "en-US";
            utter.rate = playbackRate;
            utter.onend = () => setIsPlaying(false);
            utter.onerror = (e) => {
              console.warn("Speech error:", e);
              setIsPlaying(false);
            };
            window.speechSynthesis.speak(utter);
            setIsPlaying(true);
          }
        });

      audio.onended = () => setIsPlaying(false);
      audio.onerror = (e) => {
        console.warn("Audio element error:", e);
        setIsPlaying(false);
      };
    }
  };

  const playSingleWord = (word: string) => {
    setActiveWordPlaying(word);
    const audio = new Audio(`/api/tts?text=${encodeURIComponent(word)}&accent=en-US`);
    audio
      .play()
      .then(() => {})
      .catch(() => {
        if ("speechSynthesis" in window) {
          const utter = new SpeechSynthesisUtterance(word);
          utter.lang = "en-US";
          utter.onend = () => setActiveWordPlaying(null);
          utter.onerror = (e) => {
            console.warn("Single word speech error:", e);
            setActiveWordPlaying(null);
          };
          window.speechSynthesis.speak(utter);
        } else {
          setActiveWordPlaying(null);
        }
      });
    audio.onended = () => setActiveWordPlaying(null);
    audio.onerror = (e) => {
      console.warn("Single word audio error:", e);
      setActiveWordPlaying(null);
    };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-100 flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="p-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{article.categoryEmoji}</span>
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                {article.categoryLabelTr}
              </span>
              <span className="text-slate-500 mx-2">&bull;</span>
              <span className="text-xs text-slate-400 font-mono">{article.id}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFullTurkish(!showFullTurkish)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                showFullTurkish
                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
              }`}
            >
              🇹🇷 {showFullTurkish ? "Çeviriyi Gizle" : "Türkçe Çeviri"}
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-sm transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Audio Player Bar */}
        <div className="px-5 py-3 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={handleTogglePlay}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-1.5"
            >
              <span>{isPlaying ? "⏸️" : "🔊"}</span>
              <span>{isPlaying ? "Durdur" : "Haberi Sesli Dinle"}</span>
            </button>

            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl text-xs font-mono">
              {[0.75, 1, 1.25, 1.5].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setPlaybackRate(speed)}
                  className={`px-2 py-0.5 rounded-lg transition-all ${
                    playbackRate === speed
                      ? "bg-cyan-500 text-slate-950 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          <div className="text-[11px] text-slate-400 font-mono hidden sm:block">
            <span>⏱️ {article.readTimeMin} dk &bull; 🇺🇸 Doğal Amerikan Aksanı</span>
          </div>
        </div>

        {/* Scrollable Reader Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* Newspaper Masthead */}
          <div className="text-center pb-5 border-b-2 border-double border-slate-700 space-y-1">
            <div className="text-2xl sm:text-4xl font-serif font-black tracking-wider text-slate-100 uppercase">
              {clip.paperName}
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 font-serif italic">
              {clip.tagline}
            </p>
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-2 border-t border-slate-800 max-w-xl mx-auto">
              <span>{clip.edition}</span>
              <span>{clip.dateString}</span>
              <span className="font-bold text-cyan-400">{article.level} Seviyesi</span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="font-serif text-xl sm:text-3xl font-extrabold text-white leading-tight">
              {article.titleEn}
            </h1>
            <p className="text-sm sm:text-base font-serif italic text-amber-300 font-medium">
              🇹🇷 {article.titleTr}
            </p>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-5 font-serif text-sm sm:text-base leading-relaxed text-slate-200">
            {article.paragraphs.map((para, pIdx) => (
              <div key={pIdx} className="space-y-2 bg-slate-800/30 p-4 rounded-2xl border border-slate-700/40">
                <p className="text-slate-100 leading-relaxed font-sans">{para.en}</p>
                {showFullTurkish && (
                  <p className="text-xs sm:text-sm text-emerald-300 bg-emerald-950/30 p-3 rounded-xl border border-emerald-600/30 font-sans leading-relaxed animate-in fade-in">
                    🇹🇷 {para.tr}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Key Academic Vocabulary & Synonyms Box */}
          <div className="mt-8 pt-6 border-t-2 border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-cyan-300 flex items-center gap-2">
                <span>📚</span> Haberdeki Önemli Akademik Kelimeler & Eş Anlamlıları
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                {article.keyVocabulary.length} Kelime
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {article.keyVocabulary.map((v, vIdx) => (
                <div
                  key={vIdx}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-2.5 shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-base font-bold text-cyan-300">{v.word}</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-slate-700 text-slate-300">
                        {v.type}
                      </span>
                    </div>

                    <button
                      onClick={() => playSingleWord(v.word)}
                      disabled={activeWordPlaying === v.word}
                      className="px-2 py-1 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-200 text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>🔊</span>
                      <span>{activeWordPlaying === v.word ? "Dinleniyor..." : "Dinle"}</span>
                    </button>
                  </div>

                  <div className="text-sm font-semibold text-white">
                    🇹🇷 {v.meaningTr}
                  </div>

                  {/* Synonyms */}
                  {v.synonymsEn && v.synonymsEn.length > 0 && (
                    <div className="text-xs space-y-1">
                      <span className="text-slate-400 font-semibold">İngilizce Eş Anlamlılar: </span>
                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {v.synonymsEn.map((syn, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded bg-slate-900 text-cyan-200 border border-slate-700 font-mono text-[11px]"
                          >
                            {syn}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Example Sentence */}
                  <div className="pt-2 border-t border-slate-700/60 text-xs space-y-1">
                    <div className="text-slate-300 italic">
                      &ldquo;{v.exampleSentenceEn}&rdquo;
                    </div>
                    <div className="text-emerald-300/90">
                      🇹🇷 {v.exampleSentenceTr}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>YDS Master Gündem Haberleri Arşivi &bull; {article.sourceName}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-colors font-semibold"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
