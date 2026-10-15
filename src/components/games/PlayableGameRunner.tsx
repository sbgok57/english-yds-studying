"use client";

import { useState, useEffect, useCallback } from "react";
import { PlayableGameItem } from "@/lib/games/types";
import { saveGameAction, loadGameAction } from "@/lib/offline/autosave-engine";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Volume2, Award, Sparkles, BookOpen } from "lucide-react";
import { clientAudio } from "@/lib/tts/audio-client";
import { cn } from "@/lib/utils";

interface PlayableGameRunnerProps {
  game: PlayableGameItem;
  onFinished?: (score: number) => void;
}

export default function PlayableGameRunner({ game, onFinished }: PlayableGameRunnerProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loadingSaved, setLoadingSaved] = useState(true);

  // 1. Önceki Oyun Durumunu Yükleme (Resume / Kaldığı Yerden Devam Etme)
  useEffect(() => {
    let active = true;
    async function restore() {
      const saved = await loadGameAction(game.id);
      if (active && saved) {
        setScore(saved.score);
        setStreak(saved.streak);
        if (saved.completed) {
          setIsCompleted(true);
        } else if (saved.isCorrect !== null) {
          setIsAnswered(true);
          setIsCorrect(saved.isCorrect);
          setSelectedAnswer(saved.userAnswerSummary || null);
        }
      }
      if (active) setLoadingSaved(false);
    }
    restore();
    return () => {
      active = false;
    };
  }, [game.id]);

  // 2. Cevap Seçimi ve Anında Doğrulama
  const handleSelectAnswer = async (choice: string) => {
    if (isAnswered || isCompleted) return;

    const correctStr = String(game.correctAnswer).trim();
    const isRight = choice.trim().toLowerCase() === correctStr.toLowerCase();

    const newScore = isRight ? score + game.points : score;
    const newStreak = isRight ? streak + 1 : 0;

    setSelectedAnswer(choice);
    setIsAnswered(true);
    setIsCorrect(isRight);
    setScore(newScore);
    setStreak(newStreak);

    // Her eylemde gecikmesiz atomik kayıt
    await saveGameAction(game.id, {
      stepIndex: 1,
      score: newScore,
      streak: newStreak,
      isCorrect: isRight,
      userAnswerSummary: choice,
      hasConfirmed: false,
      completed: false,
    });
  };

  // 3. Kullanıcı "Tamam, Anladım / Devam Et" Onayı (Otomatik zamanlı geçiş YOK!)
  const handleConfirmExplanation = async () => {
    setIsCompleted(true);

    await saveGameAction(game.id, {
      stepIndex: 1,
      score,
      streak,
      isCorrect,
      userAnswerSummary: selectedAnswer || "",
      hasConfirmed: true,
      completed: true,
    });

    onFinished?.(score);
  };

  // 4. Yeniden Başlatma (Onaylı Sıfırlama)
  const handleResetGame = async () => {
    const ok = window.confirm("Bu oyunu baştan başlatmak istediğinize emin misiniz? İlerlemeniz sıfırlanacaktır.");
    if (!ok) return;

    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsCorrect(null);
    setScore(0);
    setStreak(0);
    setIsCompleted(false);

    await saveGameAction(game.id, {
      stepIndex: 0,
      score: 0,
      streak: 0,
      isCorrect: null,
      userAnswerSummary: "",
      hasConfirmed: false,
      completed: false,
    });
  };

  // Sesli Telaffuz
  const playSound = (text: string) => {
    void clientAudio.play(text, { contentType: "word" });
  };

  if (loadingSaved) {
    return (
      <div className="p-8 text-center text-white/60 animate-pulse">
        <p className="text-sm font-bold">Oyun verileri yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="card-vibrant p-5 sm:p-7 rounded-3xl border border-white/15 bg-slate-900/90 shadow-2xl space-y-6 max-w-3xl mx-auto text-white">
      {/* Üst Bilgi Başlığı */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 font-bold text-xs uppercase border border-pink-400/30">
              {game.modeTitle}
            </span>
            <span className="glass-pill text-[11px] font-mono text-yellow-300 font-bold">
              {game.level} • Ders #{game.lessonOrder}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 mt-1">
            {game.title}
          </h2>
        </div>

        {/* Puan ve Seri Göstergesi */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-2xl bg-white/10 border border-white/15 text-center">
            <span className="text-[10px] text-white/50 block font-bold uppercase">Puan</span>
            <span className="text-sm font-black text-yellow-400">{score}</span>
          </div>
          {streak > 1 && (
            <div className="px-3 py-1.5 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-center animate-bounce">
              <span className="text-[10px] text-amber-300 block font-bold uppercase">Seri</span>
              <span className="text-sm font-black text-amber-300">🔥 {streak}</span>
            </div>
          )}
          <button
            onClick={handleResetGame}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/50 hover:text-white transition-all text-xs"
            title="Oyunu Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Yönerge Kutusu */}
      <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-400/30 text-xs sm:text-sm text-cyan-200 flex items-start gap-2.5">
        <span className="text-base">📌</span>
        <div>
          <span className="font-bold block">Yönerge:</span>
          <span>{game.instruction}</span>
        </div>
      </div>

      {/* Soru / Görev Alanı */}
      <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-white/50">Görev & İçerik</span>
          {game.pattern && (
            <span className="text-[11px] font-mono text-yellow-300/80 bg-white/5 px-2 py-0.5 rounded">
              Formül: {game.pattern}
            </span>
          )}
        </div>
        <p className="text-base sm:text-lg font-bold text-white whitespace-pre-line leading-relaxed">
          {game.prompt}
        </p>
      </div>

      {/* Seçenekler Listesi */}
      {!isCompleted && game.choices && game.choices.length > 0 && (
        <div className="space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-1">
            Seçenekler:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {game.choices.map((choice, idx) => {
              const isChosen = selectedAnswer === choice;
              const correctStr = String(game.correctAnswer).trim().toLowerCase();
              const isThisCorrect = choice.trim().toLowerCase() === correctStr;

              let btnStyle = "bg-white/10 hover:bg-white/20 border-white/15 text-white";

              if (isAnswered) {
                if (isThisCorrect) {
                  btnStyle = "bg-emerald-600/90 border-emerald-400 text-white shadow-lg shadow-emerald-500/20";
                } else if (isChosen && !isThisCorrect) {
                  btnStyle = "bg-rose-600/90 border-rose-400 text-white shadow-lg shadow-rose-500/20";
                } else {
                  btnStyle = "bg-white/5 border-white/10 text-white/40 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectAnswer(choice)}
                  disabled={isAnswered}
                  className={cn(
                    "min-h-[52px] p-4 rounded-2xl border text-left font-bold text-sm sm:text-base transition-all flex items-center justify-between gap-3 cursor-pointer",
                    btnStyle
                  )}
                  aria-pressed={isChosen}
                >
                  <span className="leading-snug">{choice}</span>
                  {isAnswered && isThisCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                  )}
                  {isAnswered && isChosen && !isThisCorrect && (
                    <XCircle className="w-5 h-5 text-rose-300 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Yanıt Sonrası Açıklama & "Tamam, Anladım / Devam Et" Onay Butonu */}
      {isAnswered && !isCompleted && (
        <div className={cn(
          "p-5 rounded-2xl border space-y-4 animate-in fade-in duration-300",
          isCorrect
            ? "bg-emerald-950/40 border-emerald-400/40"
            : "bg-rose-950/40 border-rose-400/40"
        )}>
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                <span className="font-extrabold text-emerald-300 text-base">Harika! Doğru Yanıt (+{game.points} Puan)</span>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-rose-400" />
                <span className="font-extrabold text-rose-300 text-base">Yanlış! Doğru Çözümü İnceleyin:</span>
              </>
            )}
          </div>

          {!isCorrect && (
            <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-sm">
              <span className="text-white/60 block text-xs font-bold mb-0.5">Doğru Cevap:</span>
              <span className="text-yellow-300 font-bold">{String(game.correctAnswer)}</span>
            </div>
          )}

          <div className="text-xs sm:text-sm text-white/90 leading-relaxed italic border-t border-white/10 pt-3">
            <span className="font-bold not-italic text-cyan-300 block mb-1">📖 Kural Açıklaması:</span>
            {game.explanation}
          </div>

          {/* KULLANICI ONAY BUTONU: Asla otomatik zamanlı geçiş yapılmaz! */}
          <button
            onClick={handleConfirmExplanation}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-black text-sm sm:text-base shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Tamam, Anladım • Sonucu Kaydet</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Oyun Tamamlandı Kartı */}
      {isCompleted && (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/60 to-slate-900 border border-purple-400/40 text-center space-y-4 animate-in zoom-in-95 duration-300">
          <div className="w-14 h-14 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center mx-auto text-2xl">
            🏆
          </div>
          <div>
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              Oyun Başarıyla Tamamlandı!
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              İlerlemeniz ve kazandığınız {score} puan cihazınıza kaydedildi.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <button
              onClick={handleResetGame}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all"
            >
              Tekrar Oyna 🔄
            </button>
          </div>
        </div>
      )}

      {/* Örnek Cümleler Bilgi Alanı */}
      {game.examples && game.examples.length > 0 && (
        <div className="pt-2 border-t border-white/10 space-y-2">
          <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider block">
            Müfredat Örnek Cümleleri:
          </span>
          <div className="grid grid-cols-1 gap-2">
            {game.examples.map((ex, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-white block">{ex.en}</span>
                  <span className="text-white/60">{ex.tr}</span>
                </div>
                <button
                  onClick={() => playSound(ex.en)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all ml-2 shrink-0"
                  title="Dinle"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
