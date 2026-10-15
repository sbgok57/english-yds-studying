"use client";

import { useState, useMemo, useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import MatchPairs from "@/components/games/MatchPairs";
import WhackMole from "@/components/games/WhackMole";
import SpinWheel from "@/components/games/SpinWheel";
import TrueFalse from "@/components/games/TrueFalse";
import ListeningGame from "@/components/games/ListeningGame";
import DiceGame from "@/components/games/DiceGame";
import PlayableGameRunner from "@/components/games/PlayableGameRunner";
import { getCurriculumGames } from "@/lib/games/curriculum-games-generator";
import { PlayableGameItem, GAME_MODES, GameModeId } from "@/lib/games/types";
import { Search, Sparkles, Filter, Wifi, WifiOff, CheckCircle2, Play, BookOpen, Layers, X } from "lucide-react";
import { cn } from "@/lib/utils";

const CLASSIC_MINI_GAMES = [
  { id: "match", label: "Eşleştirme", emoji: "🧩", desc: "Kelime ↔ anlam hafıza oyunu" },
  { id: "mole", label: "Köstebek Vur", emoji: "🐹", desc: "Doğru kelimeyi yakala" },
  { id: "dice", label: "Zar At", emoji: "🎲", desc: "Zarı at, kelimenin anlamını bil" },
  { id: "wheel", label: "Çarkıfelek", emoji: "🎡", desc: "Çevir, soru gel, çöz" },
  { id: "tf", label: "Doğru / Yanlış", emoji: "⚖️", desc: "Gramer mitleri" },
  { id: "listen", label: "Dinle & Seç", emoji: "🎧", desc: "5 aksanda kelimeyi duy, anlamı bul" },
];

export default function GamesPage() {
  const [activeTab, setActiveTab] = useState<"library" | "classic">("library");
  const [classicTab, setClassicTab] = useState("match");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExam, setSelectedExam] = useState<string>("Tümü");
  const [selectedMode, setSelectedMode] = useState<string>("Tümü");
  const [currentPage, setCurrentPage] = useState(1);
  const [activePlayingGame, setActivePlayingGame] = useState<PlayableGameItem | null>(null);
  const [isOnline, setIsOnline] = useState(true);

  // Çevrimdışı bağlantı durumu dinleyicisi
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsOnline(navigator.onLine);
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  // 240+ Müfredat Oyunları
  const allCurriculumGames = useMemo(() => getCurriculumGames(), []);

  // Filtreleme
  const filteredGames = useMemo(() => {
    return allCurriculumGames.filter((game) => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        game.title.toLowerCase().includes(q) ||
        game.lessonTitle.toLowerCase().includes(q) ||
        game.prompt.toLowerCase().includes(q);

      const matchExam =
        selectedExam === "Tümü" ||
        game.examCategories.includes(selectedExam as any);

      const matchMode =
        selectedMode === "Tümü" || game.mode === selectedMode;

      return matchSearch && matchExam && matchMode;
    });
  }, [allCurriculumGames, searchQuery, selectedExam, selectedMode]);

  // Sayfalama (24 oyun per sayfa)
  const pageSize = 24;
  const totalPages = Math.ceil(filteredGames.length / pageSize) || 1;
  const pagedGames = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredGames.slice(start, start + pageSize);
  }, [filteredGames, currentPage]);

  return (
    <div id="game-library" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Üst Başlık & Çevrimdışı Durum Göstergesi */}
      <header className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white mb-1">
          {isOnline ? (
            <>
              <Wifi className="w-3.5 h-3.5 text-emerald-400" />
              <span>🌐 Çevrimiçi • Otomatik Eşitleme Aktif</span>
            </>
          ) : (
            <>
              <WifiOff className="w-3.5 h-3.5 text-amber-400" />
              <span>📱 Çevrimdışı Mod • 240+ Oyun Cihazında Hazır</span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
          🎮 <span className="gradient-text">Dil Master Oyun Kütüphanesi</span>
        </h1>
        <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
          24 gerçek gramer dersinden 10 özgün mekanikle türetilmiş <strong>240+ tamamlanmış ve oynanabilir oyun</strong>.
          Her eylemde anında cihazına kaydedilir; internet olmasa bile kesintisiz oynanır!
        </p>
      </header>

      {/* Ana Sekmeler: 240+ Müfredat Oyun Kütüphanesi vs Klasik Hızlı Oyunlar */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setActiveTab("library")}
          className={cn(
            "px-6 py-3 rounded-2xl font-black text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer shadow-lg",
            activeTab === "library"
              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-105 shadow-pink-500/25"
              : "bg-white/10 hover:bg-white/15 text-white/70 border border-white/15"
          )}
        >
          <span>📚 240+ Müfredat Oyun Kütüphanesi</span>
          <span className="px-2 py-0.5 rounded-full bg-black/40 text-xs text-yellow-300 font-mono">
            {allCurriculumGames.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("classic")}
          className={cn(
            "px-6 py-3 rounded-2xl font-black text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer shadow-lg",
            activeTab === "classic"
              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-105 shadow-pink-500/25"
              : "bg-white/10 hover:bg-white/15 text-white/70 border border-white/15"
          )}
        >
          <span>⚡ Klasik Hızlı Mini Oyunlar</span>
          <span className="px-2 py-0.5 rounded-full bg-black/40 text-xs text-cyan-300 font-mono">
            6
          </span>
        </button>
      </div>

      {/* TAB 1: 240+ MÜFREDAT OYUN KÜTÜPHANESİ */}
      {activeTab === "library" && (
        <div className="space-y-6">
          {/* Filtre ve Arama Çubuğu */}
          <div className="card-vibrant p-5 rounded-3xl border border-white/15 bg-slate-900/80 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Arama Input */}
              <div className="relative md:col-span-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Oyun veya konu ara..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-yellow-400 placeholder:text-white/40"
                />
              </div>

              {/* Sınav Filtresi */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                <span className="text-xs text-white/50 font-bold shrink-0 mr-1">Sınav:</span>
                {["Tümü", "YDS", "YDT", "YÖKDİL"].map((ex) => (
                  <button
                    key={ex}
                    onClick={() => {
                      setSelectedExam(ex);
                      setCurrentPage(1);
                    }}
                    className={cn(
                      "px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer",
                      selectedExam === ex
                        ? "bg-yellow-400 text-slate-950 shadow"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    )}
                  >
                    {ex}
                  </button>
                ))}
              </div>

              {/* Mekanik Filtresi */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                <span className="text-xs text-white/50 font-bold shrink-0 mr-1">Mekanik:</span>
                <select
                  value={selectedMode}
                  onChange={(e) => {
                    setSelectedMode(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="px-3 py-2 rounded-xl bg-black/50 border border-white/15 text-xs font-bold text-white focus:outline-none cursor-pointer"
                >
                  <option value="Tümü">Tüm Mekanikler (10 Mod)</option>
                  {GAME_MODES.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.emoji} {m.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sonuç Sayacı */}
            <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
              <span>
                Toplam <strong>{filteredGames.length}</strong> oyun bulundu (Sayfa {currentPage} / {totalPages})
              </span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> %100 Çevrimdışı ve Oynanabilir
              </span>
            </div>
          </div>

          {/* Oyun Kartları Izgarası */}
          {pagedGames.length === 0 ? (
            <div className="p-12 text-center text-white/60 card-vibrant rounded-3xl space-y-2">
              <p className="text-3xl">🔍</p>
              <p className="font-bold text-lg text-white">Eşleşen oyun bulunamadı.</p>
              <p className="text-xs">Filtrelerinizi temizleyerek tekrar deneyebilirsiniz.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pagedGames.map((game) => (
                <div
                  key={game.id}
                  onClick={() => setActivePlayingGame(game)}
                  className="card-vibrant p-5 rounded-3xl border border-white/15 bg-slate-900/70 hover:border-yellow-400/50 hover:scale-[1.02] transition-all flex flex-col justify-between group cursor-pointer shadow-lg space-y-4"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActivePlayingGame(game);
                    }
                  }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 font-bold text-[11px] border border-pink-400/30">
                        {game.modeTitle}
                      </span>
                      <span className="glass-pill text-[10px] text-yellow-300 font-bold">
                        {game.level} • #{game.lessonOrder}
                      </span>
                    </div>

                    <h3 className="font-black text-base text-white group-hover:text-yellow-300 transition-colors line-clamp-2">
                      {game.title}
                    </h3>

                    <p className="text-xs text-white/70 line-clamp-2 italic">
                      &quot;{game.prompt.slice(0, 90)}...&quot;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-yellow-400 font-bold">+{game.points} Puan</span>
                    <span className="inline-flex items-center gap-1 text-cyan-300 font-bold group-hover:translate-x-1 transition-transform">
                      <span>Oyna</span>
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sayfalama Butonları */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-xs font-bold text-white transition-all cursor-pointer"
              >
                Önceki
              </button>
              <span className="text-xs text-white/70 font-mono px-3">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-xs font-bold text-white transition-all cursor-pointer"
              >
                Sonraki
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: KLASİK HIZLI MİNİ OYUNLAR */}
      {activeTab === "classic" && (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {CLASSIC_MINI_GAMES.map((g) => (
              <button
                key={g.id}
                onClick={() => setClassicTab(g.id)}
                className={cn(
                  "px-4 py-2 rounded-full font-bold text-xs transition-all cursor-pointer",
                  classicTab === g.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md scale-105"
                    : "border border-white/15 text-white/60 hover:text-white bg-white/5"
                )}
              >
                {g.emoji} {g.label}
              </button>
            ))}
          </div>

          <ErrorBoundary label="Oyun">
            {classicTab === "match" && <MatchPairs />}
            {classicTab === "mole" && <WhackMole />}
            {classicTab === "dice" && <DiceGame />}
            {classicTab === "wheel" && <SpinWheel />}
            {classicTab === "tf" && <TrueFalse />}
            {classicTab === "listen" && <ListeningGame />}
          </ErrorBoundary>
        </div>
      )}

      {/* 🎮 CANLI OYUN ÇALIŞTIRICI MODALI */}
      {activePlayingGame && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto">
            {/* Kapat Butonu */}
            <button
              onClick={() => setActivePlayingGame(null)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 z-20 cursor-pointer"
              title="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <PlayableGameRunner
              game={activePlayingGame}
              onFinished={() => {
                // Oyun bitişinde callback
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
