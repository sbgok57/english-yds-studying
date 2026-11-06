"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { ExamMeta, ExamQuestion } from "@/lib/data-exams";
import Celebration from "@/components/Celebration";
import Tip from "@/components/Tip";
import { recordExam, useUsage } from "@/lib/store";
import { calculateYdsNet } from "@/lib/exam-validator";
import {
  saveSessionCheckpoint,
  loadSessionCheckpoint,
  clearSessionCheckpoint,
  ExamCheckpoint,
} from "@/lib/state-preservation";

const LETTERS = ["A", "B", "C", "D", "E"];

function fmt(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function ExamRunner({
  meta,
  questions,
}: {
  meta: ExamMeta;
  questions: ExamQuestion[];
}) {
  const [mounted, setMounted] = useState(false);
  const [startedAt, setStartedAt] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flags, setFlags] = useState<Record<number, boolean>>({});
  const [current, setCurrent] = useState(0);

  const totalSec = meta.durationMin * 60;
  const [timeLeft, setTimeLeft] = useState(totalSec);
  const [submitted, setSubmitted] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const hasRecordedRef = useRef(false);
  const isSubmittingRef = useRef(false);
  const { update } = useUsage();

  // Restore preserved session safely after hydration (zero SSR mismatch)
  useEffect(() => {
    setMounted(true);
    const saved = loadSessionCheckpoint<ExamCheckpoint>("exam");
    if (saved && saved.examId === meta.id && !saved.completed) {
      setStartedAt(saved.startedAt || Date.now());
      if (saved.answers) setAnswers(saved.answers);
      if (saved.flags) setFlags(saved.flags);
      if (typeof saved.currentQuestion === "number") setCurrent(saved.currentQuestion);
    } else {
      setStartedAt(Date.now());
    }
  }, [meta.id]);

  // Wall-clock synced countdown (never halts on phone lock or inactive tab)
  useEffect(() => {
    if (!mounted || submitted || startedAt === 0) return;

    const checkTime = () => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      const remaining = Math.max(0, totalSec - elapsed);
      setTimeLeft(remaining);
      if (remaining <= 0) {
        setSubmitted(true);
      }
    };

    checkTime();
    const iv = setInterval(checkTime, 1000);
    return () => clearInterval(iv);
  }, [mounted, submitted, startedAt, totalSec]);

  // Continuous auto-save checkpoint
  useEffect(() => {
    if (!mounted) return;
    if (submitted) {
      clearSessionCheckpoint("exam");
      return;
    }

    if (Object.keys(answers).length > 0 || current > 0) {
      saveSessionCheckpoint({
        type: "exam",
        examId: meta.id,
        title: meta.title,
        url: `/exams/${meta.id}`,
        currentQuestion: current,
        answers,
        flags,
        startedAt: startedAt || Date.now(),
        durationMinutes: meta.durationMin,
      });
    }
  }, [mounted, answers, flags, current, submitted, meta.id, meta.title, startedAt, meta.durationMin]);

  // Soru dizisi boşsa veya current dışarıdaysa güvenli sınırla
  const safeCurrent = questions && questions.length > 0
    ? Math.max(0, Math.min(questions.length - 1, current))
    : 0;
  const q = questions && questions.length > 0 ? questions[safeCurrent] : undefined;

  const stats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let blank = 0;
    if (Array.isArray(questions)) {
      questions.forEach((qq) => {
        const a = answers[qq.n];
        if (a === undefined) blank++;
        else if (a === qq.answer) correct++;
        else wrong++;
      });
    }
    const net = calculateYdsNet(correct, wrong);
    return { correct, wrong, blank, net };
  }, [answers, questions]);

  // Sınav bittiğinde kayıt al + havai fişek (idempotent, bir kez çalışır)
  useEffect(() => {
    if (submitted && !hasRecordedRef.current && questions && questions.length > 0) {
      hasRecordedRef.current = true;
      recordExam(update, stats.correct, questions.length, stats.wrong, stats.net);
      try {
        setCelebrate(true);
      } catch {
        // PERF & SAFETY: Celebration canvas hatası durumunda sonuç ekranı engellenmez
      }
    }
  }, [submitted, stats.correct, stats.wrong, stats.net, questions, update]);

  const answeredCount = Object.keys(answers).length;

  const select = (qIndex: number, opt: number) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: opt }));
  };

  // net üzerinden kanka yorumu
  const net = stats.net;
  const ratio = questions.length > 0 ? stats.correct / questions.length : 0;
  const comment =
    ratio >= 0.9
      ? "Müthişsin kral! 👑 Bu performansla YDS'de zirvedesin!"
      : ratio >= 0.7
      ? "Çok iyi kanka! 🔥 Netler tırmanıyor, devam!"
      : ratio >= 0.5
      ? "Fena değil kanka! 💪 Yanlışlarını taktik sayfalarından kapat."
      : "Kanka, moral bozma! 🚀 Yanlışlar senin yol haritan. Gramer ve taktiklere dön.";

  // SAFETY: Boş veya bozuk soru gelmesi durumunda güvenli dönüş ekranı göster (asla çökmez)
  if (!questions || questions.length === 0 || !q) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="card-vibrant p-10 space-y-4">
          <div className="text-5xl">🧭</div>
          <h2 className="text-2xl font-black text-white">Soru Yüklenemedi</h2>
          <p className="text-sm text-white/60">
            Sınav soruları hazırlanırken bir hata oluştu veya soru listesi boş. Panik yok kanka!
          </p>
          <Link
            href="/exams"
            className="inline-block px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black text-sm transition-all"
          >
            ← Sınav Salonuna Dön
          </Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Celebration
          show={celebrate}
          onDone={() => setCelebrate(false)}
          message="Sınav tamam kanka! 🎆"
          sub={`${stats.net.toFixed(2)} net — ${comment}`}
        />
        <div className="card-vibrant p-10 text-center anim-pop">
          <div className="text-6xl mb-4">🏁</div>
          <h1 className="text-3xl font-black mb-2">Sınav Bitti!</h1>
          <p className="text-white/60 mb-2">{meta.title} sonucun hazır kanka.</p>
          <p className="text-sm text-amber-300 mb-8">{comment}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="rounded-2xl bg-emerald-500/15 border border-emerald-400/30 p-4">
              <div className="text-3xl font-black text-emerald-300">{stats.correct}</div>
              <div className="text-xs text-white/60 font-semibold">Doğru</div>
            </div>
            <div className="rounded-2xl bg-rose-500/15 border border-rose-400/30 p-4">
              <div className="text-3xl font-black text-rose-300">{stats.wrong}</div>
              <div className="text-xs text-white/60 font-semibold">Yanlış</div>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
              <div className="text-3xl font-black text-white/70">{stats.blank}</div>
              <div className="text-xs text-white/60 font-semibold">Boş</div>
            </div>
            <div className="rounded-2xl bg-cyan-500/15 border border-cyan-400/30 p-4">
              <div className="text-3xl font-black text-cyan-300">{stats.net.toFixed(2)}</div>
              <div className="text-xs text-white/60 font-semibold">Net</div>
              <p className="text-[10px] text-white/40 mt-1">Net = Doğru − (Yanlış ÷ 4)</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                clearSessionCheckpoint("exam");
                hasRecordedRef.current = false;
                setSubmitted(false);
                setAnswers({});
                setFlags({});
                setCurrent(0);
                const now = Date.now();
                setStartedAt(now);
                setTimeLeft(meta.durationMin * 60);
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform"
            >
              🔄 Tekrar Çöz
            </button>
            <Link
              href="/exams"
              className="px-6 py-3 rounded-full border border-white/20 font-bold hover:bg-white/10 transition-all"
            >
              ← Sınav Salonu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Üst bar */}
      <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
        <div>
          <Link href="/exams" className="text-sm text-white/50 hover:text-white">← Çıkış</Link>
          <h1 className="text-xl sm:text-2xl font-black">{meta.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-white/60 hidden sm:block">
            {answeredCount}/{questions.length} işaretli
          </div>
          <div
            className={`font-mono font-black text-lg px-4 py-2 rounded-xl border ${
              timeLeft < 600
                ? "border-rose-400/60 bg-rose-500/15 text-rose-300 anim-pulse-glow"
                : "border-white/15 bg-white/5 text-cyan-300"
            }`}
          >
            ⏱ {fmt(timeLeft)}
          </div>
          <Tip tip="Bitirince netini anında hesaplarız kanka, üstüne havai fişek de patlatırız! 🎆">
            <button
              onClick={() => setConfirmOpen(true)}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 font-bold text-sm hover:scale-105 transition-transform"
            >
              Sınavı Bitir
            </button>
          </Tip>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* Soru kartı */}
        <div className="card-vibrant p-6 sm:p-8">
          {q.passage && (
            <div className="mb-6 rounded-2xl bg-slate-900/60 border border-white/10 p-5">
              <p className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-2">
                📄 {q.passageTitle}
              </p>
              <p className="text-sm text-white/70 leading-relaxed">{q.passage}</p>
            </div>
          )}

          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-black">
              {q.n}
            </span>
            <span className="text-xs font-mono px-2 py-1 rounded-full bg-white/10 text-white/60">
              {q.type}
            </span>
            <button
              onClick={() => setFlags((f) => ({ ...f, [q.n]: !f[q.n] }))}
              className={`ml-auto text-sm px-3 py-1.5 rounded-lg border transition-all ${
                flags[q.n]
                  ? "border-amber-400/60 bg-amber-400/15 text-amber-300"
                  : "border-white/15 text-white/50 hover:text-white"
              }`}
            >
              {flags[q.n] ? "🚩 İşaretli" : "⚑ İşaretle"}
            </button>
          </div>

          <p className="text-lg text-white/90 whitespace-pre-line leading-relaxed mb-6">{q.stem}</p>

          <div className="space-y-2.5">
            {q.options.map((opt, i) => {
              const chosen = answers[q.n] === i;
              return (
                <button
                  key={i}
                  onClick={() => select(q.n, i)}
                  className={`group w-full flex items-center gap-3 text-left rounded-xl border px-4 py-3 transition-all ${
                    chosen
                      ? "border-cyan-400/70 bg-cyan-500/15"
                      : "border-white/12 bg-white/[0.03] hover:border-white/30"
                  }`}
                >
                  <span
                    className={`bubble w-8 h-8 shrink-0 rounded-full border-2 flex items-center justify-center font-black text-sm transition-all ${
                      chosen
                        ? "border-cyan-300 bg-cyan-400 text-slate-900"
                        : "border-white/30 group-hover:border-cyan-300"
                    }`}
                  >
                    {LETTERS[i]}
                  </span>
                  <span className="text-white/85 text-sm sm:text-base">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Gezinme */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="px-5 py-2.5 rounded-xl border border-white/20 font-bold disabled:opacity-30 hover:bg-white/10 transition-all"
            >
              ← Önceki
            </button>
            {current < questions.length - 1 ? (
              <button
                onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform"
              >
                Sonraki →
              </button>
            ) : (
              <button
                onClick={() => setConfirmOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 font-bold hover:scale-105 transition-transform"
              >
                Bitir 🏁
              </button>
            )}
          </div>
        </div>

        {/* Optik form */}
        <aside className="card-vibrant p-5 lg:sticky lg:top-20 h-fit">
          <p className="font-black mb-1">Optik Form</p>
          <p className="text-xs text-white/50 mb-4">
            Mavi = işaretli · Sarı = işaretli (bayrak) · Halka = aktif
          </p>
          <div className="grid grid-cols-5 gap-1.5 max-h-[60vh] overflow-y-auto pr-1">
            {questions.map((qq, idx) => {
              const a = answers[qq.n];
              const isCur = idx === safeCurrent;
              let cls = "bg-white/[0.05] text-white/60 border-white/10";
              if (flags[qq.n]) cls = "bg-amber-400/20 text-amber-200 border-amber-400/40";
              if (a !== undefined) cls = "bg-cyan-500/25 text-cyan-100 border-cyan-400/50";
              return (
                <button
                  key={qq.n}
                  onClick={() => setCurrent(idx)}
                  className={`h-9 rounded-lg border text-xs font-bold transition-all hover:scale-105 ${cls} ${
                    isCur ? "ring-2 ring-pink-400" : ""
                  }`}
                >
                  {qq.n}
                </button>
              );
            })}
          </div>
        </aside>
      </div>

      {/* Onay modalı */}
      {confirmOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="card-vibrant p-8 max-w-md w-full text-center anim-pop">
            <div className="text-4xl mb-3">🤔</div>
            <h3 className="text-xl font-black mb-2">Sınavı bitirmek istiyor musun?</h3>
            <p className="text-sm text-white/60 mb-6">
              {questions.length - answeredCount} soru boş · {Object.keys(flags).length} soru işaretli
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setConfirmOpen(false)}
                className="px-5 py-2.5 rounded-xl border border-white/20 font-bold hover:bg-white/10 transition-all"
              >
                Devam Et
              </button>
              <button
                onClick={() => {
                  if (isSubmittingRef.current) return;
                  isSubmittingRef.current = true;
                  setConfirmOpen(false);
                  setSubmitted(true);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 font-bold hover:scale-105 transition-transform"
              >
                Bitir 🏁
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
