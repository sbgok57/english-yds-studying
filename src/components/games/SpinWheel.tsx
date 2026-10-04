"use client";

import { useEffect, useRef, useState } from "react";
import { BANK, type QType } from "@/lib/data-bank";
import Celebration from "@/components/Celebration";
import { logGameComplete } from "@/lib/activity-logger";

const SEGMENTS: { label: string; color: string; types: QType[] }[] = [
  { label: "Kelime", color: "#ec4899", types: ["vocab"] },
  { label: "Gramer", color: "#8b5cf6", types: ["grammar"] },
  { label: "Çeviri", color: "#06b6d4", types: ["en-tr", "tr-en"] },
  { label: "Cümle", color: "#f59e0b", types: ["sentence"] },
  { label: "Okuma", color: "#22c55e", types: ["reading"] },
  { label: "Bonus", color: "#ef4444", types: ["vocab", "grammar", "sentence", "en-tr", "tr-en"] },
];

function pickQuestion(types: QType[]) {
  const pool = BANK.filter((q) => types.includes(q.t));
  const q = pool[Math.floor(Math.random() * pool.length)];
  const opt = q.o.map((text, i) => ({ text, i }));
  for (let i = opt.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opt[i], opt[j]] = [opt[j], opt[i]];
  }
  return {
    stem: q.s,
    options: opt.map((o) => o.text),
    answer: opt.findIndex((o) => o.i === q.a),
    label: q.p ? `${q.pt || ""} ${q.s}`.slice(0, 120) : q.s,
  };
}

export default function SpinWheel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [question, setQuestion] = useState<ReturnType<typeof pickQuestion> | null>(null);
  const [choice, setChoice] = useState<number | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const [msg, setMsg] = useState("");
  const rafRef = useRef(0);

  // Çarkı çiz
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const size = canvas.width;
    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2 - 6;
    const slice = (Math.PI * 2) / SEGMENTS.length;
    ctx.clearRect(0, 0, size, size);
    SEGMENTS.forEach((s, i) => {
      const start = i * slice + angle;
      const end = start + slice;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, start, end);
      ctx.closePath();
      ctx.fillStyle = s.color;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.lineWidth = 2;
      ctx.stroke();
      // etiket
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + slice / 2);
      ctx.textAlign = "center";
      ctx.fillStyle = "#fff";
      ctx.font = "bold 16px system-ui";
      ctx.fillText(s.label, radius * 0.6, 6);
      ctx.restore();
    });
    // ok
    ctx.beginPath();
    ctx.moveTo(cx - 8, cy - radius + 10);
    ctx.lineTo(cx + 8, cy - radius + 10);
    ctx.lineTo(cx, cy - radius + 28);
    ctx.closePath();
    ctx.fillStyle = "#fde047";
    ctx.fill();
  }, [angle]);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setQuestion(null);
    setChoice(null);
    const total = Math.PI * 2 * (5 + Math.floor(Math.random() * 4)) + Math.random() * Math.PI * 2;
    const startAngle = angle;
    const startTime = performance.now();
    const duration = 2600;
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setAngle(startAngle + total * eased);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setSpinning(false);
        // hangi segment? (ok üstte, -PI/2 yönünde)
        const norm = ((total % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const slice = (Math.PI * 2) / SEGMENTS.length;
        let segIdx = Math.floor(norm / slice) % SEGMENTS.length;
        segIdx = (SEGMENTS.length - segIdx) % SEGMENTS.length;
        const seg = SEGMENTS[segIdx] || SEGMENTS[0];
        setQuestion(pickQuestion(seg.types));
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const answered = choice !== null;
  const correct = answered && question && choice === question.answer;

  const choose = (i: number) => {
    if (answered || !question) return;
    setChoice(i);
    if (i === question.answer) {
      setMsg("Doğru bildin kral! 🎆");
      setCelebrate(true);
      void logGameComplete({
        gameId: "spin-wheel",
        gameTitle: "Çarkıfelek",
        score: 25,
        streak: 1,
        timeSpentMinutes: 2,
        details: `Çarkıfelek Sorusu Doğru: "${question.stem.slice(0, 70)}..."`,
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Celebration show={celebrate} onDone={() => setCelebrate(false)} message={msg} sub="Çark seninle kanka!" short />

      <div className="flex flex-col items-center">
        <canvas ref={canvasRef} width={280} height={280} className="mb-4" />
        <button
          onClick={spin}
          disabled={spinning}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-black shadow-lg shadow-yellow-500/30 hover:scale-105 transition-transform disabled:opacity-50"
        >
          {spinning ? "🎡 Dönüyor..." : "🎡 Çarkı Çevir!"}
        </button>
      </div>

      {question && (
        <div className="card-vibrant p-6 mt-6 anim-pop">
          <p className="text-sm text-white/85 leading-relaxed mb-4 whitespace-pre-line">
            {question.stem.length > 200 ? question.stem.slice(0, 200) + "..." : question.stem}
          </p>
          <div className="space-y-2">
            {question.options.map((o, i) => {
              const isAnswer = answered && i === question.answer;
              const isChosen = answered && i === choice;
              let cls = "border-white/15 bg-white/[0.04] hover:border-white/35";
              if (answered) {
                if (isAnswer) cls = "border-emerald-400/70 bg-emerald-500/20";
                else if (isChosen) cls = "border-rose-400/70 bg-rose-500/20 anim-shake";
                else cls = "border-white/10 opacity-50";
              }
              return (
                <button
                  key={i}
                  onClick={() => choose(i)}
                  disabled={answered}
                  className={`block w-full text-left rounded-xl border px-4 py-2.5 transition-all text-sm text-white/85 ${cls}`}
                >
                  <span className="font-black text-white/60 mr-2">{String.fromCharCode(65 + i)})</span>
                  {o}
                  {isAnswer && answered && " ✅"}
                </button>
              );
            })}
          </div>
          {answered && (
            <p className="mt-4 text-sm text-white/70">
              {correct ? "Kanka, net cebinde! 🎉" : "Olsun, çarkı bir daha çevir! 💪"}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
