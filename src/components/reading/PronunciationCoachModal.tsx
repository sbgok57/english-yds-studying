"use client";

import React, { useState, useEffect, useRef } from "react";
import { launchFireworks } from "@/lib/fireworks";

interface PronunciationCoachModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetText: string;
  passageTitle?: string;
}

interface WordEvaluation {
  raw: string;
  clean: string;
  matched: boolean;
}

export function PronunciationCoachModal({
  isOpen,
  onClose,
  targetText,
  passageTitle,
}: PronunciationCoachModalProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [evaluatedWords, setEvaluatedWords] = useState<WordEvaluation[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const recognitionRef = useRef<any>(null);

  // Clean target words
  const cleanTargetWords = (text: string) => {
    return text.split(/\s+/).filter(Boolean).map((w) => ({
      raw: w,
      clean: w.toLowerCase().replace(/[^a-z0-9]/g, ""),
      matched: false,
    }));
  };

  useEffect(() => {
    if (targetText) {
      setEvaluatedWords(cleanTargetWords(targetText));
      setTranscript("");
      setScore(null);
    }
  }, [targetText]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event: any) => {
          let currentTranscript = "";
          for (let i = 0; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript + " ";
          }
          currentTranscript = currentTranscript.trim();
          setTranscript(currentTranscript);
          evaluateSpeech(currentTranscript);
        };

        recognition.onerror = (e: any) => {
          console.warn("Pronunciation recognition error:", e.error);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          console.warn("Recognition cleanup aborted:", e);
        }
      }
    };
  }, [targetText]);

  const evaluateSpeech = (spoken: string) => {
    const spokenTokens = spoken
      .toLowerCase()
      .split(/\s+/)
      .map((w) => w.replace(/[^a-z0-9]/g, ""))
      .filter(Boolean);

    const baseWords = cleanTargetWords(targetText);
    let matchedCount = 0;

    const evaluated = baseWords.map((wordObj) => {
      const isMatched = spokenTokens.includes(wordObj.clean);
      if (isMatched) matchedCount++;
      return {
        ...wordObj,
        matched: isMatched,
      };
    });

    setEvaluatedWords(evaluated);

    if (baseWords.length > 0) {
      const currentScore = Math.round((matchedCount / baseWords.length) * 100);
      setScore(currentScore);
      if (currentScore >= 85) {
        launchFireworks(2500, true);
      }
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Tarayıcınız ses tanıma özelliğini desteklemiyor.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setTranscript("");
      setScore(null);
      setEvaluatedWords(cleanTargetWords(targetText));
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.warn("Could not start recognition:", e);
      }
    }
  };

  const playWordAudio = (word: string) => {
    // Play pronunciation of specific word
    const audio = new Audio(`/api/tts?text=${encodeURIComponent(word)}&accent=en-US`);
    audio.play().catch(() => {
      if ("speechSynthesis" in window) {
        const utter = new SpeechSynthesisUtterance(word);
        utter.lang = "en-US";
        window.speechSynthesis.speak(utter);
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎙️</span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-cyan-300">
                Sesli Oku & Telaffuz Koçu
              </h2>
              <p className="text-xs text-slate-400">
                {passageTitle ? `Metin: ${passageTitle}` : "Akademik Cümle Telaffuz Analizi"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors text-sm"
          >
            ✕
          </button>
        </div>

        {/* Target Text with Word Colors */}
        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Metni Mikrofona Oku:</span>
            <span className="text-[11px] text-cyan-400">
              🟢 Doğru telaffuz | 🔴 Eksik/Hatalı (tıkla ve dinle)
            </span>
          </div>

          <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 leading-relaxed text-base sm:text-lg">
            {evaluatedWords.map((item, idx) => (
              <span
                key={idx}
                onClick={() => playWordAudio(item.clean)}
                className={`inline-block mr-1.5 px-1 py-0.5 rounded cursor-pointer transition-all ${
                  transcript
                    ? item.matched
                      ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                      : "bg-rose-500/20 text-rose-300 underline decoration-dotted"
                    : "text-slate-100 hover:bg-white/10"
                }`}
                title="Doğru telaffuzu dinlemek için tıkla"
              >
                {item.raw}
              </span>
            ))}
          </div>
        </div>

        {/* Spoken Transcript Preview */}
        {transcript && (
          <div className="mt-4 p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400 font-semibold">Algılanan Ses: </span>
            <span className="text-slate-200 italic">"{transcript}"</span>
          </div>
        )}

        {/* Feedback & Score */}
        {score !== null && (
          <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-850 border border-slate-700 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-cyan-300">Kanka Telaffuz Dönütü:</div>
              <p className="text-xs sm:text-sm text-slate-200">
                {score >= 85
                  ? "Mükemmel aksan kanka! Kelimeleri tam bir BBC/CNN spikeri gibi akıcı çıkardın 👏"
                  : score >= 65
                  ? "Gayet başarılı! Kırmızı kalan kelimelerin üzerine tıklayıp doğrusunu dinleyerek bir tur daha oku 🔥"
                  : "İlk deneme için iyi çaba! Kırmızı kelimeleri dinle ve yavaş tempoda tekrar dene 💪"}
              </p>
            </div>
            <div className="text-center shrink-0">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                %{score}
              </div>
              <div className="text-[10px] text-slate-400">Doğruluk Skoru</div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={toggleListening}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 ${
              isListening
                ? "bg-rose-600 hover:bg-rose-500 text-white animate-pulse"
                : "bg-cyan-600 hover:bg-cyan-500 text-white"
            }`}
          >
            <span>{isListening ? "🛑" : "🎙️"}</span>
            <span>{isListening ? "Okumayı Tamamla" : "Mikrofona Oku"}</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => playWordAudio(targetText)}
              className="flex-1 sm:flex-none px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <span>🔊</span> Tüm Cümleyi Dinle
            </button>
            <button
              onClick={onClose}
              className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs sm:text-sm rounded-xl transition-colors"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
