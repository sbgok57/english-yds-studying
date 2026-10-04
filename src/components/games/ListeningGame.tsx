"use client";
import { useEffect, useMemo, useState } from "react";
import { WORDS } from "@/lib/data-vocabulary";
import Celebration from "@/components/Celebration";
import AccentBar from "@/components/AccentBar";
import { getStoredAccent, speakWithAccent } from "@/lib/accents";
import { clientAudio } from "@/lib/tts/audio-client";
import { logGameComplete } from "@/lib/activity-logger";

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

const TOTAL = 10;

export default function ListeningGame() {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const [done, setDone] = useState(false);
  const [ttsOk, setTtsOk] = useState(true);
  const [revealed, setRevealed] = useState(false);

  const words = useMemo(() => shuffle(WORDS).slice(0, TOTAL), []);
  const word = words[Math.min(round, words.length - 1)];

  const options = useMemo(() => {
    if (!word) return [];
    const distract = shuffle(WORDS.filter((w) => w.word !== word.word))
      .slice(0, 3)
      .map((w) => w.tr);
    return shuffle([word.tr, ...distract]);
  }, [word]);

  const speak = async (text: string) => {
    try {
      await clientAudio.play(text, {
        contentType: "word",
      });
      setTtsOk(true);
    } catch {
      setTtsOk(false);
    }
  };

  // Her turda kelimeyi otomatik oku + cevabı sıfırla
  useEffect(() => {
    setPicked(null);
    setRevealed(false);
    if (!word || done) return;
    const t = window.setTimeout(() => speak(word.word), 400);
    return () => {
      window.clearTimeout(t);
      clientAudio.stopAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round, done]);

  const hear = () => speak(word.word);

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (options[i] === word.tr) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
      setCelebrate(true);
    } else {
      setStreak(0);
    }
    setRevealed(true);
  };

  const next = () => {
    if (round + 1 >= TOTAL) {
      setDone(true);
      void logGameComplete({
        gameId: "listening-game",
        gameTitle: "Dinle & Seç (Sesli Kelime)",
        score: score * 10,
        streak,
        timeSpentMinutes: 4,
        wordsPlayed: TOTAL,
        details: `${score}/${TOTAL} Kelime Dinleyerek Doğru Bulundu`,
      });
    } else {
      setRound(round + 1);
    }
  };

  if (done) {
    return (
      <div className="max-w-2xl mx-auto text-center anim-pop">
        <div className="text-6xl mb-3">🎧</div>
        <p className="text-3xl font-black gradient-text">Dinleme bitti kanka!</p>
        <p className="text-white/70 mt-2">
          Doğru: <b className="text-emerald-300">{score}/{TOTAL}</b>
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-5 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform"
        >
          🔄 Tekrar Oyna
        </button>
      </div>
    );
  }

  const isCorrect = picked !== null && options[picked] === word.tr;

  return (
    <div className="max-w-2xl mx-auto">
      <Celebration show={celebrate} onDone={() => setCelebrate(false)} message="Kulağın keskin kanka! 🎆" sub={`${word.word} = ${word.tr}`} short />

      <div className="flex items-center justify-between mb-4 text-sm text-white/60">
        <span>Soru {round + 1}/{TOTAL}</span>
        <span>Skor: <b className="text-emerald-300">{score}</b> · Seri: <b className="text-orange-300">{streak}</b></span>
      </div>

      <div className="card-vibrant p-8 text-center">
        <p className="text-xs text-white/50 mb-3">🔊 Dinle, doğru anlamı seç:</p>
        <button
          onClick={hear}
          className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-4xl shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform"
          title="Tekrar dinle"
        >
          🔊
        </button>
        <div className="mt-4 flex justify-center">
          <AccentBar text={word.word} />
        </div>
        {!ttsOk && (
          <p className="text-xs text-amber-300 mt-2">
            Ses bağlantısı sağlanamadı — kelime: <b className="font-mono">{word.word}</b>
          </p>
        )}
        {revealed && (
          <p className="text-sm mt-3 font-mono text-cyan-300">{word.word} → {word.tr}</p>
        )}

        <div className="grid grid-cols-2 gap-2 mt-6">
          {options.map((o, i) => {
            let cls = "border-white/15 bg-white/[0.04] hover:border-white/35";
            if (picked !== null) {
              if (o === word.tr) cls = "border-emerald-400/70 bg-emerald-500/20";
              else if (picked === i) cls = "border-rose-400/70 bg-rose-500/20 anim-shake";
              else cls = "border-white/10 opacity-50";
            }
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={picked !== null}
                className={`rounded-xl border px-4 py-3 font-bold transition-all ${cls}`}
              >
                {o}
              </button>
            );
          })}
        </div>

        {picked !== null && (
          <div className="mt-5 anim-pop">
            <p className={`text-sm font-bold ${isCorrect ? "text-emerald-300" : "text-rose-300"}`}>
              {isCorrect ? "Aynen kral! 👑" : "Olsun kanka, tekrar dinle! 💪"}
            </p>
            <button
              onClick={next}
              className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform"
            >
              {round + 1 >= TOTAL ? "Bitir 🏁" : "Sonraki →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/** @type {import('next').NextConfig} */
