"use client";

import { useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import MatchPairs from "@/components/games/MatchPairs";
import WhackMole from "@/components/games/WhackMole";
import SpinWheel from "@/components/games/SpinWheel";
import TrueFalse from "@/components/games/TrueFalse";
import ListeningGame from "@/components/games/ListeningGame";
import DiceGame from "@/components/games/DiceGame";

const GAMES = [
  { id: "match", label: "Eşleştirme", emoji: "🧩", desc: "Kelime ↔ anlam hafıza oyunu" },
  { id: "mole", label: "Köstebek Vur", emoji: "🐹", desc: "Doğru kelimeyi yakala" },
  { id: "dice", label: "Zar At", emoji: "🎲", desc: "Zarı at, kelimenin anlamını bil" },
  { id: "wheel", label: "Çarkıfelek", emoji: "🎡", desc: "Çevir, soru gel, çöz" },
  { id: "tf", label: "Doğru / Yanlış", emoji: "⚖️", desc: "Gramer mitleri" },
  { id: "listen", label: "Dinle & Seç", emoji: "🎧", desc: "5 aksanda kelimeyi duy, anlamı bul" },
];

export default function GamesPage() {
  const [tab, setTab] = useState("match");

  const active = GAMES.find((g) => g.id === tab)!;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-2">
          🎮 <span className="gradient-text">Oyun Merkezi</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          Kanka, Wordwall tadında oyunlar! Her doğru cevapta havai fişek, her yanlışta dostça
          bir pat pat. Öğrenirken eğlen, netler uçsun! 🎆
        </p>
      </header>

      {/* Oyun sekmeleri */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {GAMES.map((g) => (
          <button
            key={g.id}
            onClick={() => setTab(g.id)}
            className={`px-4 py-2.5 rounded-full font-bold text-sm transition-all ${
              tab === g.id
                ? "bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-pink-500/30 text-white scale-105"
                : "border border-white/15 text-white/60 hover:text-white bg-white/5"
            }`}
          >
            {g.emoji} {g.label}
          </button>
        ))}
      </div>

      <p className="text-center text-xs text-white/40 mb-6">{active.desc}</p>

      <ErrorBoundary label="Oyun">
        {tab === "match" && <MatchPairs />}
        {tab === "mole" && <WhackMole />}
        {tab === "dice" && <DiceGame />}
        {tab === "wheel" && <SpinWheel />}
        {tab === "tf" && <TrueFalse />}
        {tab === "listen" && <ListeningGame />}
      </ErrorBoundary>
    </div>
  );
}
