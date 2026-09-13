import Link from "next/link";
import { Sparkles, Gamepad2, ArrowRight, Trophy, Zap, Layers, HelpCircle, Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";

const GAMES = [
  {
    id: "matching",
    title: "Resimli 3D Kart Eşleştirme",
    subtitle: "Memory Pairs 3D",
    emoji: "🃏",
    color: "from-violet-600 to-purple-800",
    description: "İngilizce kelimeler ile Türkçe anlamları 3D çift yüzlü çevirerek hafızanda eşleştir.",
    type: "Kelime & Görsel Hafıza",
    popular: true,
  },
  {
    id: "balloon",
    title: "Balon Patlatma",
    subtitle: "Balloon Pop Reflex",
    emoji: "🎈",
    color: "from-rose-500 to-red-700",
    description: "Uçuşan renkli balonlar arasından doğru Türkçe anlamı veya gramer yapısını patlat!",
    type: "Refleks & Kelime",
    popular: true,
  },
  {
    id: "wheel",
    title: "Kelime Çarkıfeleği",
    subtitle: "Spin the Wheel",
    emoji: "🎡",
    color: "from-amber-500 to-orange-600",
    description: "Şans çarkını çevir, çıkan akademik YDS kelimesinin anlamını zihninde canlandır.",
    type: "Rastgele Pratik",
    popular: false,
  },
  {
    id: "anagram",
    title: "Harf Karıştırma (Anagram)",
    subtitle: "Letter Scramble",
    emoji: "🔤",
    color: "from-cyan-500 to-blue-700",
    description: "Karışık verilmiş harfleri ipuçlarına bakarak doğru YDS kelimesine dönüştür.",
    type: "Yazım & Aktif Hatırlama",
    popular: false,
  },
];

export default function GamesDirectoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Üst Başlık */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-950 border-2 border-purple-500/30 shadow-2xl space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-xs font-bold text-purple-300">
          <Gamepad2 className="w-4 h-4" />
          <span>Wordwall Tarzı Eğitici Oyunlar • Görsel Hafıza Odaklı</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Oyun Oynayarak YDS Kelimelerini & Gramerini Fethedin
        </h1>
        <p className="text-xs md:text-sm text-white/80 max-w-2xl leading-relaxed">
          Ezberlemek sıkıcı olmak zorunda değil! 3D kart eşleştirmeden balon patlatmaya kadar interaktif oyunlarla kelimeleri kalıcı hafızanıza yazın.
        </p>
      </div>

      {/* Oyun Kartları Izgarası */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GAMES.map((game) => (
          <div
            key={game.id}
            className="card-vibrant p-6 md:p-8 space-y-5 flex flex-col justify-between group hover:border-yellow-400/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-5xl">{game.emoji}</span>
                {game.popular && (
                  <span className="glass-pill text-[10px] text-yellow-300 font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3 text-yellow-400" /> Çok Oynanan
                  </span>
                )}
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
                {game.subtitle}
              </span>
              <h3 className="text-2xl font-black text-white group-hover:text-yellow-300 transition-colors mt-0.5">
                {game.title}
              </h3>
              <p className="text-xs md:text-sm text-white/75 mt-2 leading-relaxed">
                {game.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/60 font-semibold">
                Tür: <strong className="text-white">{game.type}</strong>
              </span>
              <Link
                href={`/games/${game.id}`}
                className={cn(
                  "px-6 py-2.5 rounded-full text-white font-extrabold text-xs shadow-lg hover:scale-105 transition-transform flex items-center gap-1.5 bg-gradient-to-r",
                  game.color
                )}
              >
                <span>Hemen Oyna</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
