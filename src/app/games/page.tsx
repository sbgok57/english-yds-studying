"use client";

import { useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import MatchPairs from "@/components/games/MatchPairs";
import WhackMole from "@/components/games/WhackMole";
import SpinWheel from "@/components/games/SpinWheel";
import TrueFalse from "@/components/games/TrueFalse";
import ListeningGame from "@/components/games/ListeningGame";

const GAMES = [
  { id: "match", label: "Eşleştirme", emoji: "🧩", desc: "Kelime ↔ anlam hafıza oyunu" },
  { id: "mole", label: "Köstebek Vur", emoji: "🐹", desc: "Doğru kelimeyi yakala" },
  { id: "wheel", label: "Çarkıfelek", emoji: "🎡", desc: "Çevir, soru gel, çöz" },
  { id: "tf", label: "Doğru / Yanlış", emoji: "⚖️", desc: "Gramer mitleri" },
  { id: "listen", label: "Dinle & Seç", emoji: "🎧", desc: "Kelimeyi duy, anlamı bul" },
];

export default function GamesPage() {
  const [tab, setTab] = useState("match");

  const active = GAMES.find((g) => g.id === tab) || GAMES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-2">
          🎮 <span className="gradient-text">Oyun Merkezi</span>
        </h1>
        <p className="text-white/60">
          Kanka, eğlenerek netleri katla! 5 farklı oyun ile kelime ve gramer pratiği yap.
        </p>
      </header>

      {/* Oyun seçici sekmeler */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {GAMES.map((g) => {
          const isSel = tab === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setTab(g.id)}
              className={`px-5 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all ${
                isSel
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl shadow-purple-500/25 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-white/70 border border-white/10"
              }`}
            >
              <span className="text-xl">{g.emoji}</span>
              <div className="text-left">
                <div className="text-sm leading-tight">{g.label}</div>
                <div className="text-[10px] text-white/50">{g.desc}</div>
              </div>
            </button>
          );
        })}
      </div>

      <ErrorBoundary label={active.label}>
        {tab === "match" && <MatchPairs />}
        {tab === "mole" && <WhackMole />}
        {tab === "wheel" && <SpinWheel />}
        {tab === "tf" && <TrueFalse />}
        {tab === "listen" && <ListeningGame />}
      </ErrorBoundary>
    </div>
  );
}
