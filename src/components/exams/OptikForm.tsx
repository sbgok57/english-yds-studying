"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  Clock, 
  Send, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Award,
  ArrowLeft,
  FileText
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { safeStorage } from "@/lib/safe-storage";

export interface ExamQuestion {
  id: number;
  text: string;
  options: string[];
  correct: "A" | "B" | "C" | "D" | "E";
  explanation: string;
  type: string;
  memoryCode?: string;
}

interface OptikFormProps {
  examId: string;
  examTitle: string;
  questions: ExamQuestion[];
  durationMinutes?: number; // 180 dk standart
  isRealExam?: boolean;
}

type Choice = "A" | "B" | "C" | "D" | "E";
const CHOICES: Choice[] = ["A", "B", "C", "D", "E"];
const STANDARD_DURATION = 180; // 180 Dakika

interface SavedSession {
  examId: string;
  answers: Record<number, Choice>;
  startedAt: number;
  finished: boolean;
  score?: number;
  net?: number;
}

const triggerConfetti = (opts: any) => {
  try {
    if (typeof window !== "undefined") {
      confetti(opts);
    }
  } catch (err) {
    console.warn("Confetti could not run:", err);
  }
};

export default function OptikForm({
  examId,
  examTitle,
  questions = [],
  durationMinutes = STANDARD_DURATION,
  isRealExam = true,
}: OptikFormProps) {
  const storageKey = `yds-exam-${examId}`;
  
  // Savunmacı dizi doğrulaması — asla undefined/null olamaz
  const safeQuestions: ExamQuestion[] = useMemo(() => {
    return Array.isArray(questions) ? questions.filter(Boolean) : [];
  }, [questions]);

  const totalQuestions = safeQuestions.length || 80;

  const [phase, setPhase] = useState<"intro" | "resume" | "running" | "result">("intro");
  const [answers, setAnswers] = useState<Record<number, Choice>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [startedAt, setStartedAt] = useState<number>(Date.now());
  const [secondsLeft, setSecondsLeft] = useState<number>(durationMinutes * 60);
  const [warned30, setWarned30] = useState(false);
  const [warned10, setWarned10] = useState(false);
  const [warned5, setWarned5] = useState(false);
  const [warned1, setWarned1] = useState(false);

  const [result, setResult] = useState<{
    correct: number;
    wrong: number;
    empty: number;
    net: number;
    score: number;
    timeSpent: number;
  } | null>(null);

  // Açılışta safeStorage kontrolü (SSR güvenli)
  useEffect(() => {
    try {
      const raw = safeStorage.get(storageKey);
      if (!raw) return;
      const session: SavedSession = JSON.parse(raw);

      if (session.finished) {
        setAnswers(session.answers || {});
        calculateResults(session.answers, session.startedAt, false);
        setPhase("result");
        return;
      }

      const elapsedSec = Math.floor((Date.now() - session.startedAt) / 1000);
      const remainingSec = durationMinutes * 60 - elapsedSec;

      if (remainingSec > 0) {
        setAnswers(session.answers || {});
        setStartedAt(session.startedAt);
        setSecondsLeft(remainingSec);
        setPhase("resume");
      } else {
        // Süre dolmuş, otomatik hesapla
        calculateResults(session.answers || {}, session.startedAt, true);
      }
    } catch {
      safeStorage.remove(storageKey);
    }
  }, [storageKey, durationMinutes]);

  const startExam = (resume: boolean) => {
    if (!resume) {
      const now = Date.now();
      const freshSession: SavedSession = {
        examId,
        answers: {},
        startedAt: now,
        finished: false,
      };
      safeStorage.set(storageKey, JSON.stringify(freshSession));
      setAnswers({});
      setStartedAt(now);
      setSecondsLeft(durationMinutes * 60);
    }
    setPhase("running");
  };

  const calculateResults = useCallback(
    async (currentAnswers: Record<number, Choice>, sessionStart: number, autoSubmit = false) => {
      let correct = 0;
      let wrong = 0;

      safeQuestions.forEach((q, idx) => {
        const userChoice = currentAnswers[idx + 1];
        if (userChoice) {
          if (userChoice === q.correct) correct++;
          else wrong++;
        }
      });

      const qTotal = safeQuestions.length || 80;
      const empty = Math.max(0, qTotal - correct - wrong);
      const net = Math.max(0, correct - wrong / 4);
      // Standart ÖSYM puan karşılığı: 80 soru -> 100 puan (her doğru 1.25 puan)
      const score = Math.round((correct / qTotal) * 100);
      const timeSpent = Math.min(durationMinutes * 60, Math.floor((Date.now() - sessionStart) / 1000));

      const finalResult = { correct, wrong, empty, net, score, timeSpent };
      setResult(finalResult);
      setPhase("result");

      // Bitmiş olarak safeStorage'a yaz
      const session: SavedSession = {
        examId,
        answers: currentAnswers,
        startedAt: sessionStart,
        finished: true,
        score,
        net,
      };
      safeStorage.set(storageKey, JSON.stringify(session));

      if (net >= 40 || score >= 60) {
        triggerConfetti({
          particleCount: 180,
          spread: 90,
          origin: { y: 0.5 },
          colors: ["#00f0ff", "#ff00aa", "#ffff00", "#00ff88"],
        });
      }

      toast[autoSubmit ? "error" : "success"](
        autoSubmit
          ? "180 dakikalık süre doldu! Optik form otomatik değerlendirildi."
          : "Sınav başarıyla tamamlandı! Sonuç raporunuz hazır."
      );

      // API'ye kaydet
      try {
        await fetch(`/api/exams/${examId}/submit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: currentAnswers, ...finalResult }),
        });
      } catch (err) {
        console.warn("Sunucuya sınav sonucu iletilemedi, yerel veri korundu:", err);
      }
    },
    [examId, safeQuestions, durationMinutes, storageKey]
  );

  // Zamanlayıcı (Cihaz saatine göre hesaplanır)
  useEffect(() => {
    if (phase !== "running") return;

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      const remaining = durationMinutes * 60 - elapsed;

      if (remaining <= 0) {
        clearInterval(interval);
        setSecondsLeft(0);
        calculateResults(answers, startedAt, true);
        return;
      }

      setSecondsLeft(remaining);

      // Süre uyarıları
      if (remaining <= 1800 && !warned30) {
        setWarned30(true);
        toast.warning("⏰ Son 30 dakika! Boş soruları gözden geçirin.", { duration: 6000 });
        if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([100, 50, 100]);
      }
      if (remaining <= 600 && !warned10) {
        setWarned10(true);
        toast.warning("⏰ Son 10 dakika! Optik formunuzu kontrol edin.", { duration: 6000 });
        if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([150, 50, 150]);
      }
      if (remaining <= 300 && !warned5) {
        setWarned5(true);
        toast.error("🚨 Son 5 dakika! Süre bitmek üzere!", { duration: 7000 });
        if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 200]);
      }
      if (remaining <= 60 && !warned1) {
        setWarned1(true);
        toast.error("🚨 Son 1 dakika! Otomatik teslim edilecek!", { duration: 8000 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, startedAt, answers, durationMinutes, warned30, warned10, warned5, warned1, calculateResults]);

  const selectAnswer = (questionIndex: number, choice: Choice) => {
    if (phase !== "running") return;
    const qNum = questionIndex + 1;
    const updated = {
      ...answers,
      [qNum]: answers[qNum] === choice ? undefined : choice,
    };
    // Undefined temizliği
    const cleanAnswers: Record<number, Choice> = {};
    Object.entries(updated).forEach(([k, v]) => {
      if (v) cleanAnswers[Number(k)] = v;
    });

    setAnswers(cleanAnswers);

    // Her tıkta anında safeStorage'a kaydet (veri kaybı sıfır)
    const session: SavedSession = {
      examId,
      answers: cleanAnswers,
      startedAt,
      finished: false,
    };
    safeStorage.set(storageKey, JSON.stringify(session));

    if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(12);
  };

  const formatTimer = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const answeredCount = Object.keys(answers).length;

  // ===== EĞER SORULAR YÜKLENMEMİŞSE VEYA BOŞSA: ASLA ÇÖKME, BİLGİ EKRANI GÖSTER =====
  if (safeQuestions.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-slate-900 border-2 border-amber-500/40 rounded-3xl p-8 max-w-md text-center shadow-2xl space-y-4 text-white">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mx-auto text-4xl">
            🚧
          </div>
          <h2 className="text-2xl font-black text-amber-300">{examTitle}</h2>
          <p className="font-semibold text-sm text-white/90">
            Bu sınavın içeriği hazırlanıyor (0/80 soru yüklendi).
          </p>
          <p className="text-xs text-white/70">
            PDF / Quizlet içe aktarma arayüzünden soruları ekleyebilir veya arşivdeki diğer sınavları çözebilirsiniz.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-3">
            <Link
              href="/exams"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold px-6 py-3 rounded-full text-sm shadow-lg hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-4 h-4" /> Diğer Sınavlara Bak
            </Link>
            <Link
              href="/import"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-full text-sm border border-white/20 transition-colors"
            >
              <FileText className="w-4 h-4" /> Soru Yükle
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentQIndex = Math.min(Math.max(0, currentQ), safeQuestions.length - 1);
  const activeQuestion = safeQuestions[currentQIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* ================= GİRİŞ EKRANI (INTRO) ================= */}
      {phase === "intro" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto card-vibrant p-8 md:p-10 text-center space-y-6"
        >
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-4xl mx-auto shadow-xl shadow-yellow-500/20">
            ⏱️
          </div>

          <div>
            <span className="glass-pill text-xs font-bold text-yellow-300 uppercase tracking-wider">
              {isRealExam ? "ÖSYM Çıkmış Sınav Simülatörü" : "Özgün Deneme Sınavı"}
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-white mt-2">
              {examTitle}
            </h1>
            <p className="text-sm text-white/70 mt-2">
              Gerçek 180 dakika, 80 soru, online optik form ve anlık süre koruması
            </p>
          </div>

          {/* Sınav Kuralları */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10">
              <span className="text-[11px] text-white/60 block">Süre</span>
              <strong className="text-sm text-yellow-300">{durationMinutes} Dakika</strong>
            </div>
            <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10">
              <span className="text-[11px] text-white/60 block">Soru Sayısı</span>
              <strong className="text-sm text-cyan-300">{totalQuestions} Soru</strong>
            </div>
            <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10">
              <span className="text-[11px] text-white/60 block">Yanlış Götürme</span>
              <strong className="text-sm text-emerald-300">4 Yanlış 1 Doğru</strong>
            </div>
            <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10">
              <span className="text-[11px] text-white/60 block">Veri Güvenliği</span>
              <strong className="text-sm text-purple-300">Otomatik Kayıt</strong>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-400/30 rounded-2xl p-4 text-left text-xs text-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-400 mt-0.5" />
            <div>
              <strong>Önemli Kural:</strong> Sayfayı yenileseniz veya sekme kapansa bile süre sayacınız cihaz saatinizle senkron çalışmaya devam eder ve cevaplarınız kaybolmaz.
            </div>
          </div>

          <button
            onClick={() => startExam(false)}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-black text-lg shadow-xl shadow-pink-500/30 hover:scale-[1.02] transition-transform"
          >
            🚀 Sınavı ve 180 Dakikalık Sayacı Başlat
          </button>
        </motion.div>
      )}

      {/* ================= DEVAM ETME EKRANI (RESUME) ================= */}
      {phase === "resume" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto card-vibrant p-8 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-3xl mx-auto mb-4">
            💾
          </div>
          <h2 className="text-xl font-black text-white mb-2">Devam Eden Oturum Bulundu!</h2>
          <p className="text-sm text-white/80 mb-6">
            Daha önce bu sınavda {answeredCount} soru işaretlediniz.
          </p>

          <div className="bg-black/40 rounded-2xl p-4 mb-6 text-center border border-white/10">
            <span className="text-xs uppercase font-mono tracking-widest text-cyan-300 block mb-1">
              Kalan Süreniz
            </span>
            <span className="font-mono text-3xl font-black text-white">
              {formatTimer(secondsLeft)}
            </span>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => startExam(true)}
              className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black shadow-lg hover:scale-105 transition-transform"
            >
              ▶️ Kaldığım Yerden Devam Et
            </button>
            <button
              onClick={() => {
                safeStorage.remove(storageKey);
                startExam(false);
              }}
              className="px-6 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white/80 font-bold hover:bg-white/20"
            >
              Baştan Başla
            </button>
          </div>
        </motion.div>
      )}

      {/* ================= SINAV ALANI (RUNNING) ================= */}
      {phase === "running" && (
        <>
          {/* Üst Süre ve İlerleme Barı */}
          <div className="sticky top-16 z-30 mb-6 bg-slate-950/90 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
                {examTitle}
              </h2>
              <p className="text-xs text-white/70">
                {answeredCount} / {totalQuestions} Soru Yanıtlandı
              </p>
            </div>

            {/* Kalan Süre Sayacı */}
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full font-mono text-lg font-black shadow",
                  secondsLeft <= 300
                    ? "bg-red-600 text-white animate-pulse"
                    : secondsLeft <= 1800
                    ? "bg-amber-500/30 text-yellow-300 border border-amber-400/40"
                    : "bg-white/15 text-white border border-white/20"
                )}
              >
                <Clock className="w-5 h-5" />
                <span>{formatTimer(secondsLeft)}</span>
              </div>

              <button
                onClick={() => calculateResults(answers, startedAt, false)}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 font-extrabold text-sm text-white shadow-lg hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" /> Sınavı Bitir
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sol / Orta: Soru Görüntüleme Alanı */}
            <div className="lg:col-span-2 space-y-4">
              {activeQuestion && (
                <div className="card-vibrant p-6 md:p-8 min-h-[420px] flex flex-col justify-between">
                  <div>
                    {/* Soru Başlığı */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="glass-pill text-xs font-bold text-yellow-300">
                        Soru {currentQIndex + 1} / {totalQuestions}
                      </span>
                      <span className="glass-pill text-xs text-cyan-300">
                        {activeQuestion.type}
                      </span>
                    </div>

                    {/* Soru Metni */}
                    <p className="text-base md:text-lg leading-relaxed text-white/95 font-medium mb-8 whitespace-pre-wrap">
                      {activeQuestion.text}
                    </p>

                    {/* Şıklar */}
                    <div className="space-y-3">
                      {(Array.isArray(activeQuestion.options) ? activeQuestion.options : []).map((opt, idx) => {
                        const letter = CHOICES[idx];
                        const isSelected = answers[currentQIndex + 1] === letter;

                        return (
                          <button
                            key={letter || idx}
                            onClick={() => selectAnswer(currentQIndex, letter)}
                            className={cn(
                              "w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5",
                              isSelected
                                ? "bg-gradient-to-r from-cyan-500/25 to-blue-600/25 border-cyan-400 shadow-lg shadow-cyan-500/20"
                                : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                            )}
                          >
                            <span
                              className={cn(
                                "flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-sm transition-colors",
                                isSelected
                                  ? "bg-cyan-400 text-slate-950 border-cyan-400"
                                  : "border-white/40 text-white/80"
                              )}
                            >
                              {letter}
                            </span>
                            <span className="pt-1 text-sm md:text-base text-white/90">
                              {opt}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Alt Gezinme Butonları */}
                  <div className="flex items-center justify-between border-t border-white/15 pt-5 mt-6">
                    <button
                      onClick={() => setCurrentQ((q) => Math.max(0, q - 1))}
                      disabled={currentQIndex === 0}
                      className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-sm font-bold"
                    >
                      <ChevronLeft className="w-4 h-4" /> Önceki Soru
                    </button>
                    <button
                      onClick={() => setCurrentQ((q) => Math.min(safeQuestions.length - 1, q + 1))}
                      disabled={currentQIndex >= safeQuestions.length - 1}
                      className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-sm font-bold"
                    >
                      Sonraki Soru <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sağ: Gerçekçi Online Optik Form (Bubble Sheet) */}
            <div className="bg-slate-900/90 border border-white/20 rounded-3xl p-5 shadow-2xl h-fit max-h-[calc(100vh-8rem)] sticky top-24 overflow-y-auto">
              <div className="text-center mb-4 pb-3 border-b border-white/15">
                <h3 className="font-black text-base text-yellow-300">
                  ONLİNE OPTİK FORM
                </h3>
                <p className="text-[11px] text-white/60 font-mono">
                  {totalQuestions} Soru • 5 Seçenekli Kabarcıklar
                </p>
              </div>

              {/* Baloncuk Tablosu */}
              <div className="grid grid-cols-5 gap-y-2.5 gap-x-1 text-xs">
                {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((qNum) => {
                  const selectedChoice = answers[qNum];
                  const isCurrent = currentQIndex + 1 === qNum;

                  return (
                    <div key={qNum} className="flex flex-col items-center">
                      <button
                        onClick={() => setCurrentQ(qNum - 1)}
                        className={cn(
                          "w-5 h-4 mb-0.5 rounded text-[10px] font-bold transition-colors",
                          isCurrent
                            ? "bg-yellow-400 text-slate-950 font-black"
                            : selectedChoice
                            ? "text-cyan-300"
                            : "text-white/50 hover:text-white"
                        )}
                      >
                        {qNum}
                      </button>
                      <div className="flex gap-0.5">
                        {CHOICES.map((c) => {
                          const isPicked = selectedChoice === c;
                          return (
                            <button
                              key={c}
                              onClick={() => {
                                selectAnswer(qNum - 1, c);
                                setCurrentQ(qNum - 1);
                              }}
                              className={cn(
                                "w-4 h-4 rounded-full border text-[7px] font-bold flex items-center justify-center transition-all",
                                isPicked
                                  ? "bg-cyan-400 text-slate-950 border-cyan-400 scale-110 shadow"
                                  : "border-white/30 text-white/40 hover:border-white/80 hover:text-white"
                              )}
                            >
                              {c}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ================= SONUÇ VE ÇÖZÜM ANALİZİ (RESULT) ================= */}
      {phase === "result" && result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-8"
        >
          {/* Skor Kartı */}
          <div className="rounded-3xl p-8 text-center text-white bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 border-2 border-purple-500/40 shadow-2xl">
            <Award className="w-16 h-16 text-yellow-300 mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              {examTitle} Tamamlandı!
            </h2>
            <p className="text-white/80 text-sm mb-8">
              Harcanan Süre: {Math.floor(result.timeSpent / 60)} dakika {result.timeSpent % 60} saniye
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                <span className="text-xs text-green-300 uppercase font-bold block mb-1">
                  ✅ Doğru
                </span>
                <span className="text-3xl font-black text-white">{result.correct}</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                <span className="text-xs text-red-300 uppercase font-bold block mb-1">
                  ❌ Yanlış
                </span>
                <span className="text-3xl font-black text-white">{result.wrong}</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                <span className="text-xs text-yellow-300 uppercase font-bold block mb-1">
                  ⬜ Boş
                </span>
                <span className="text-3xl font-black text-white">{result.empty}</span>
              </div>
              <div className="bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-2xl p-4 border border-pink-500/40">
                <span className="text-xs text-pink-300 uppercase font-bold block mb-1">
                  🎯 YDS Puanı
                </span>
                <span className="text-3xl font-black text-yellow-300">
                  {result.score} / 100
                </span>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              <button
                onClick={() => {
                  safeStorage.remove(storageKey);
                  startExam(false);
                }}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-sm font-bold"
              >
                🔄 Sıfırla ve Tekrar Çöz
              </button>
              <Link
                href="/exams"
                className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold"
              >
                ← Diğer Sınavlar
              </Link>
            </div>
          </div>

          {/* Soru Soru Çözüm Mantığı ve Görsel Hafıza Kodları */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
              📋 Detaylı Çözüm Mantığı ve Taktik Kodlamaları
            </h3>

            {safeQuestions.map((q, idx) => {
              const qNum = idx + 1;
              const userPick = answers[qNum];
              const isCorrect = userPick === q.correct;
              const isWrong = userPick && !isCorrect;

              return (
                <div
                  key={qNum}
                  className={cn(
                    "p-6 rounded-3xl border transition-all",
                    isCorrect
                      ? "bg-emerald-950/30 border-emerald-500/40"
                      : isWrong
                      ? "bg-red-950/30 border-red-500/40"
                      : "bg-slate-900/50 border-white/15"
                  )}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-yellow-300">
                      Soru {qNum} • {q.type}
                    </span>
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1",
                        isCorrect
                          ? "bg-emerald-500/20 text-emerald-300"
                          : isWrong
                          ? "bg-rose-500/20 text-rose-300"
                          : "bg-white/10 text-white/70"
                      )}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Doğru ({userPick})
                        </>
                      ) : isWrong ? (
                        <>
                          <XCircle className="w-3.5 h-3.5" /> Yanlış (Sen: {userPick}, Doğru: {q.correct})
                        </>
                      ) : (
                        `Boş Bırakıldı (Doğru: ${q.correct})`
                      )}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-white/90 mb-3">{q.text}</p>

                  <div className="bg-black/40 rounded-2xl p-4 border border-white/10 text-xs space-y-2">
                    <p className="text-yellow-200 leading-relaxed">
                      <strong>💡 Çözüm Mantığı:</strong> {q.explanation}
                    </p>
                    {q.memoryCode && (
                      <p className="text-cyan-300 font-semibold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        🧠 <strong>Görsel Kod:</strong> {q.memoryCode}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
