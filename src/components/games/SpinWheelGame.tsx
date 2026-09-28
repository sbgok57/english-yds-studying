"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, RotateCw, CheckCircle2 } from "lucide-react";

interface WheelItem {
  word: string;
  meaning: string;
  color: string;
}

const DEFAULT_ITEMS: WheelItem[] = [
  { word: "mitigate", meaning: "hafifletmek, azaltmak", color: "#f43f5e" },
  { word: "inevitable", meaning: "kaçınılmaz, çaresiz", color: "#8b5cf6" },
  { word: "pioneer", meaning: "öncü, liderlik eden", color: "#06b6d4" },
  { word: "deteriorate", meaning: "kötüleşmek, bozulmak", color: "#10b981" },
  { word: "drastically", meaning: "ciddi, köklü biçimde", color: "#f59e0b" },
  { word: "carry out", meaning: "yürütmek, uygulamak", color: "#ec4899" },
  { word: "cope with", meaning: "üstesinden gelmek", color: "#6366f1" },
  { word: "ubiquitous", meaning: "her yerde bulunan", color: "#14b8a6" },
];

export default function SpinWheelGame({ items = DEFAULT_ITEMS }: { items?: WheelItem[] }) {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState<WheelItem | null>(null);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setSelectedItem(null);

    const extraRounds = 5 + Math.floor(Math.random() * 4); // 5-8 tam tur
    const randomIndex = Math.floor(Math.random() * items.length);
    const sliceAngle = 360 / items.length;
    const targetAngle = extraRounds * 360 + randomIndex * sliceAngle + sliceAngle / 2;

    setRotation((prev) => prev + targetAngle);

    setTimeout(() => {
      setSpinning(false);
      setSelectedItem(items[randomIndex]);
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch (err) {
        // PERF: Confetti is optional visual enhancement
        void err;
      }
      if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(30);
    }, 3500);
  };

  return (
    <div className="max-w-md mx-auto p-4 text-center space-y-6">
      {/* Çark Çerçevesi */}
      <div className="relative w-72 h-72 mx-auto">
        {/* İbre (Pointer) */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-yellow-400 filter drop-shadow" />

        {/* Dönen Çark */}
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 3.5, ease: [0.15, 0.9, 0.2, 1] }}
          className="w-full h-full rounded-full border-4 border-yellow-400 shadow-2xl overflow-hidden relative"
          style={{
            background: `conic-gradient(${items
              .map((it, i) => `${it.color} ${i * (100 / items.length)}% ${(i + 1) * (100 / items.length)}%`)
              .join(", ")})`,
          }}
        >
          {/* Çark Merkezi */}
          <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-slate-950 border-4 border-yellow-400 flex items-center justify-center text-xl shadow-lg z-10 text-white font-black">
            🎯
          </div>
        </motion.div>
      </div>

      {/* Çevir Butonu */}
      <button
        onClick={spin}
        disabled={spinning}
        className="px-8 py-3.5 rounded-full font-black text-white bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 shadow-xl shadow-pink-500/30 hover:scale-105 disabled:opacity-50 transition-all text-sm flex items-center justify-center gap-2 mx-auto"
      >
        <RotateCw className={`w-4 h-4 ${spinning ? "animate-spin" : ""}`} />
        {spinning ? "Çark Dönüyor..." : "Çarkıfeleği Çevir!"}
      </button>

      {/* Kazanan Kart */}
      {selectedItem && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="card-vibrant p-5 rounded-2xl border-2 border-yellow-300/50 text-center space-y-2 shadow-xl"
        >
          <span className="glass-pill text-[10px] text-yellow-300 font-mono">Çarkta Çıkan Kelime</span>
          <h3 className="text-2xl font-black text-white">{selectedItem.word}</h3>
          <p className="text-lg font-bold text-cyan-300">🇹🇷 {selectedItem.meaning}</p>
        </motion.div>
      )}
    </div>
  );
}
