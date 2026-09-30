"use client";

import { useState } from "react";
import { Headphones, Play, Pause, RotateCcw, Volume2, Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react";
import TTSPlayer, { ACCENT_OPTIONS, type AccentCode, type GenderCode } from "@/components/tts/TTSPlayer";
import { cn } from "@/lib/utils";

export default function ListeningPage() {
  const [accent, setAccent] = useState<AccentCode>("en-GB");
  const [gender, setGender] = useState<GenderCode>("female");
  const [speed, setSpeed] = useState<number>(1.0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const listeningAudioText = `Good morning candidates. Today we will examine the socio-economic implications of the Industrial Revolution on European urban demographics. Prior to the late eighteenth century, the vast majority of the population resided in agrarian hamlets. However, the introduction of steam-powered mechanized looms in northern England catalyzed a colossal rural-to-urban migration. Cities expanded with staggering rapidity, often outstripping municipal sanitary infrastructure. While this transition initially inflicted severe squalor upon factory laborers, it eventually laid the institutional groundwork for modern labor legislation and public health standards.`;

  const questions = [
    {
      id: 1,
      question: "What catalyzed the colossal rural-to-urban migration in northern England?",
      options: [
        "The introduction of steam-powered mechanized looms",
        "The complete collapse of the agricultural sector",
        "Massive foreign invasions from mainland Europe",
        "A nationwide drought in the late eighteenth century",
      ],
      correct: "A",
      explanation: "Metinde 'the introduction of steam-powered mechanized looms... catalyzed a colossal migration' ifadesi doğrudan yer almaktadır.",
    },
    {
      id: 2,
      question: "True or False: Municipal infrastructure initially expanded faster than city populations.",
      options: ["True", "False"],
      correct: "B",
      explanation: "Yanlış (False): Metin şehirlerin belediye altyapısından çok daha hızlı büyüdüğünü ('outstripping municipal sanitary infrastructure') belirtmektedir.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Üst Başlık */}
      <div className="rounded-3xl p-8 bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 border-2 border-blue-500/30 shadow-2xl space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-xs font-bold text-blue-300">
          <Headphones className="w-4 h-4" />
          <span>Multi-Accent TTS • 14 Doğal Neural Ses Seçeneği</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white">
          YDS Dinleme & Çoklu Aksan Laboratuvarı
        </h1>
        <p className="text-xs md:text-sm text-white/70">
          7 farklı İngilizce aksanı (İngiliz, Amerikan, Avustralya, Kanada, Yeni Zelanda, İskoçya, Hint) ve stüdyo kalitesinde kadın/erkek neural sesleriyle kulak aşinalığı kazanın.
        </p>
      </div>

      {/* Ses Kontrol Paneli */}
      <div className="card-vibrant p-6 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          {/* Aksan Seçimi */}
          <div>
            <label className="text-xs font-mono text-cyan-300 uppercase tracking-widest block font-bold mb-2">
              Aksan Seçimi (6 Aksan)
            </label>
            <div className="flex gap-1.5 flex-wrap">
              {ACCENT_OPTIONS.map((a) => (
                <button
                  key={a.code}
                  onClick={() => setAccent(a.code)}
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 border",
                    accent === a.code
                      ? "bg-blue-600 text-white border-blue-400 shadow scale-105"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
                  )}
                >
                  <span>{a.flag}</span>
                  <span>{a.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Cinsiyet ve Hız Seçimi */}
          <div className="flex items-center gap-4 flex-wrap">
            <div>
              <label className="text-xs font-mono text-pink-300 uppercase tracking-widest block font-bold mb-2">
                Seslendirici
              </label>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setGender("female")}
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-bold transition-all border",
                    gender === "female"
                      ? "bg-pink-600 text-white border-pink-400 shadow scale-105"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
                  )}
                >
                  👩 Kadın
                </button>
                <button
                  onClick={() => setGender("male")}
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-bold transition-all border",
                    gender === "male"
                      ? "bg-indigo-600 text-white border-indigo-400 shadow scale-105"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
                  )}
                >
                  👨 Erkek
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-cyan-300 uppercase tracking-widest block font-bold mb-2">
                Hız
              </label>
              <div className="flex gap-1 bg-black/40 border border-white/10 rounded-xl p-1 text-xs">
                {[0.75, 0.9, 1.0, 1.1, 1.25].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={cn(
                      "px-2 py-0.5 rounded-lg text-xs font-mono transition-all",
                      Math.abs(speed - s) < 0.01
                        ? "bg-cyan-500 text-white font-bold shadow"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Oynatıcı Çubuğu */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-black/40 border border-white/15">
          <div className="flex items-center gap-3">
            <TTSPlayer
              text={listeningAudioText}
              accent={accent}
              gender={gender}
              speed={speed}
              contentType="long-form"
              size="lg"
            />
            <div>
              <span className="text-sm font-bold text-white block">
                The Industrial Revolution and Urban Shift
              </span>
              <span className="text-xs text-emerald-400 font-medium">
                Doğal Neural Ses • {accent} ({gender === "female" ? "Kadın" : "Erkek"}) • {speed}x Hız
              </span>
            </div>
          </div>

          {/* Transkript Göster/Gizle */}
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/20"
          >
            {showTranscript ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showTranscript ? "Transkripti Gizle" : "Transkripti Gör"}</span>
          </button>
        </div>

        {/* Transkript Metni */}
        {showTranscript && (
          <div className="p-5 rounded-2xl bg-black/30 border border-white/10 text-sm text-white/90 leading-relaxed font-serif">
            {listeningAudioText}
          </div>
        )}
      </div>

      {/* Dinleme Soruları */}
      <div className="space-y-4">
        <h3 className="text-xl font-black text-white">
          🎧 Dinleme Anlama Soruları
        </h3>

        {questions.map((q) => {
          const picked = selectedAnswers[q.id];
          const isCorrect = picked === q.correct;
          const isAnswered = Boolean(picked);

          return (
            <div key={q.id} className="card-vibrant p-6 space-y-4">
              <p className="font-bold text-base text-white">{q.id}. {q.question}</p>

              <div className="space-y-2">
                {q.options.map((opt, idx) => {
                  const letter = ["A", "B", "C", "D"][idx];
                  const isPicked = picked === letter;
                  const isKey = q.correct === letter;

                  return (
                    <button
                      key={letter}
                      onClick={() => setSelectedAnswers((prev) => ({ ...prev, [q.id]: letter }))}
                      className={cn(
                        "w-full text-left p-3.5 rounded-xl border text-sm transition-all flex items-center gap-3",
                        isPicked && isKey && "bg-emerald-500/30 border-emerald-400 text-white font-bold",
                        isPicked && !isKey && "bg-rose-500/30 border-rose-400 text-white",
                        !isPicked && isAnswered && isKey && "border-emerald-400/80 bg-emerald-500/10 text-emerald-300",
                        !isAnswered && "bg-white/5 border-white/10 hover:bg-white/10 text-white/80"
                      )}
                    >
                      <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center font-bold text-xs">
                        {letter}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-yellow-200">
                  💡 {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
