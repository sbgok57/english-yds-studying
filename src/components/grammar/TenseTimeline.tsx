"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export interface TimelineEvent {
  position: number;        // 0-100: çizgi üzerindeki yüzde konum
  emoji: string;
  label: string;
  isDuration?: boolean;    // süreç mi (continuous) nokta mı
  durationEnd?: number;
}

interface Props {
  title: string;
  events: TimelineEvent[];
  nowPosition?: number;    // "ŞİMDİ" işaretinin yeri (varsayılan 65)
  sentence: string;        // animasyonun anlattığı örnek cümle
}

export default function TenseTimeline({
  title,
  events,
  nowPosition = 65,
  sentence,
}: Props) {
  const [playing, setPlaying] = useState(false);

  const startAnimation = () => {
    setPlaying(false);
    setTimeout(() => setPlaying(true), 60);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl text-white my-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎬</span>
          <h4 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 text-base md:text-lg">
            {title}
          </h4>
        </div>
        <button
          onClick={startAnimation}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-extrabold text-xs px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all flex items-center gap-1.5"
        >
          <span>▶️</span> Animasyonu Oynat
        </button>
      </div>

      <div className="relative h-32 select-none px-2">
        {/* Zaman çizgisi */}
        <div className="absolute top-1/2 -translate-y-1/2 inset-x-4 h-2 bg-gradient-to-r from-slate-600 via-indigo-500 to-fuchsia-400 rounded-full shadow-inner" />

        {/* GEÇMİŞ / ŞİMDİ / GELECEK etiketleri */}
        <span className="absolute left-2 top-[62%] text-[10px] font-black text-slate-400 tracking-wider">
          ◀ GEÇMİŞ (PAST)
        </span>
        <span className="absolute right-2 top-[62%] text-[10px] font-black text-fuchsia-400 tracking-wider">
          GELECEK (FUTURE) ▶
        </span>

        {/* ŞİMDİ (NOW) Göstergesi */}
        <motion.div
          className="absolute top-1 -translate-x-1/2 text-center z-10 pointer-events-none"
          style={{ left: `${nowPosition}%` }}
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <span className="text-xl filter drop-shadow">📍</span>
          <p className="text-[10px] font-black text-yellow-300 tracking-widest bg-black/60 px-1.5 py-0.5 rounded-full border border-yellow-300/40">
            ŞİMDİ
          </p>
        </motion.div>

        {/* Olaylar ve Süreç Blokları */}
        {events.map((ev, i) => (
          <div key={i}>
            {ev.isDuration && ev.durationEnd !== undefined && (
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 h-4 rounded-full bg-gradient-to-r from-amber-400/80 to-yellow-300/80 border-2 border-amber-300 shadow-lg shadow-amber-500/20"
                style={{ left: `${ev.position}%` }}
                initial={{ width: 0 }}
                animate={
                  playing
                    ? { width: `${ev.durationEnd - ev.position}%` }
                    : { width: `${ev.durationEnd - ev.position}%` }
                }
                transition={{ delay: 0.3 + i * 0.5, duration: 0.9 }}
              />
            )}
            <motion.div
              className="absolute -translate-x-1/2 text-center z-20"
              style={{ left: `${ev.position}%`, top: "54%" }}
              initial={{ scale: 0.8, opacity: 0.7 }}
              animate={
                playing
                  ? { scale: [0.8, 1.25, 1], opacity: 1 }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ delay: 0.3 + i * 0.5, type: "spring" }}
            >
              <span className="text-2xl filter drop-shadow-md block mb-0.5">
                {ev.emoji}
              </span>
              <p className="text-[10px] font-bold text-white bg-slate-900/90 px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap shadow">
                {ev.label}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0.9 }}
        animate={playing ? { scale: [0.98, 1.02, 1], opacity: 1 } : { scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 + events.length * 0.5 }}
        className="mt-6 text-center bg-black/40 border border-white/15 rounded-2xl p-4 font-bold text-sm shadow-inner text-yellow-200"
      >
        💬 <span className="text-white">{sentence}</span>
      </motion.div>
    </div>
  );
}
