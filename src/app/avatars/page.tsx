"use client";

import { useState, useEffect } from "react";
import { AVATARS, AVATAR_CATEGORIES, getAvatar, type Avatar } from "@/lib/avatars";
import { Search, ChevronLeft, ChevronRight, Sparkles, ArrowLeft, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { safeStorage } from "@/lib/safe-storage";
import Link from "next/link";

const PER_PAGE = 60;

export default function AvatarsPage() {
  const [selectedAvatarId, setSelectedAvatarId] = useState<string>("astronaut");
  const [avatarCategory, setAvatarCategory] = useState<string>("Hepsi");
  const [avatarSearch, setAvatarSearch] = useState<string>("");
  const [avatarPage, setAvatarPage] = useState<number>(0);

  useEffect(() => {
    const storedAvatar = safeStorage.get("yds_avatar_id") || "astronaut";
    setSelectedAvatarId(storedAvatar);
  }, []);

  const currentAvatar = getAvatar(selectedAvatarId);

  const handleSelectAvatar = (a: Avatar) => {
    setSelectedAvatarId(a.id);
    safeStorage.set("yds_avatar_id", a.id);
    toast.success(`Avatar seçildi: ${a.label}! "${a.motivation}"`);
    if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(20);
  };

  const filteredAvatars = AVATARS.filter((a) => {
    const matchesCategory = avatarCategory === "Hepsi" || a.category === avatarCategory;
    const matchesSearch =
      !avatarSearch ||
      a.label.toLowerCase().includes(avatarSearch.toLowerCase()) ||
      a.motivation.toLowerCase().includes(avatarSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredAvatars.length / PER_PAGE) || 1;
  const safePage = Math.min(avatarPage, totalPages - 1);
  const visibleAvatars = filteredAvatars.slice(safePage * PER_PAGE, (safePage + 1) * PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Üst Başlık & Geri Dön */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>
        <Link
          href="/dashboard"
          className="text-xs font-bold text-cyan-300 hover:text-cyan-200 underline"
        >
          Profil ve Gösterge Paneli →
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-fuchsia-950 via-purple-950 to-pink-950 border-2 border-pink-500/30 shadow-2xl flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div
            className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${currentAvatar.theme} border-2 border-white/40 flex items-center justify-center text-6xl shadow-2xl anim-float`}
          >
            {currentAvatar.emoji}
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-yellow-300 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Aktif Maskotun</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-white">
              {currentAvatar.label}
            </h1>
            <p className="text-xs md:text-sm text-pink-200 mt-1 italic max-w-xl leading-relaxed">
              "{currentAvatar.motivation}"
            </p>
          </div>
        </div>

        <div className="bg-white/10 px-5 py-3.5 rounded-2xl border border-white/20 text-center">
          <span className="text-xs text-white/60 font-semibold block">Toplam Koleksiyon</span>
          <span className="text-3xl font-black gradient-text">500 Avatar</span>
        </div>
      </div>

      {/* Filtre ve Arama Çubuğu */}
      <div className="card-vibrant p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👤</span>
            <div>
              <h2 className="text-lg font-black text-white">500 Prosedürel Avatar Havuzu</h2>
              <p className="text-xs text-white/60">
                {filteredAvatars.length} avatar listeleniyor · İstediğine tıklayıp profil maskotun yap
              </p>
            </div>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={avatarSearch}
              onChange={(e) => {
                setAvatarSearch(e.target.value);
                setAvatarPage(0);
              }}
              placeholder="Avatar ara (örn. astronot, aslan)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-pink-400"
            />
          </div>
        </div>

        {/* Kategori Hapları */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
          {AVATAR_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setAvatarCategory(cat);
                setAvatarPage(0);
              }}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border",
                avatarCategory === cat
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400 shadow-md scale-105"
                  : "bg-white/5 hover:bg-white/10 text-white/70 border-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sayfalanmış Avatar Izgarası */}
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3 pt-4">
          {visibleAvatars.map((avatar) => {
            const isSelected = selectedAvatarId === avatar.id;
            return (
              <button
                key={avatar.id}
                onClick={() => handleSelectAvatar(avatar)}
                title={`${avatar.label} — "${avatar.motivation}"`}
                className={cn(
                  "p-2.5 rounded-2xl border flex flex-col items-center justify-center transition-all group relative hover:scale-110",
                  isSelected
                    ? "border-yellow-400 bg-yellow-400/20 shadow-lg shadow-yellow-400/20 ring-2 ring-yellow-400"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30"
                )}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${avatar.theme} flex items-center justify-center text-2xl shadow-md`}
                >
                  {avatar.emoji}
                </div>
                <span className="text-[10px] text-white/80 font-bold truncate max-w-full mt-1.5 text-center">
                  {avatar.label}
                </span>
                {isSelected && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-400 text-slate-950 flex items-center justify-center text-[10px] font-black shadow">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Sayfalama Kontrolleri */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/70">
            <button
              disabled={safePage === 0}
              onClick={() => setAvatarPage((p) => Math.max(0, p - 1))}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 flex items-center gap-1 font-bold"
            >
              <ChevronLeft className="w-4 h-4" /> Önceki
            </button>
            <span className="font-semibold">
              Sayfa {safePage + 1} / {totalPages} ({(safePage * PER_PAGE) + 1} - {Math.min((safePage + 1) * PER_PAGE, filteredAvatars.length)})
            </span>
            <button
              disabled={safePage >= totalPages - 1}
              onClick={() => setAvatarPage((p) => Math.min(totalPages - 1, p + 1))}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 flex items-center gap-1 font-bold"
            >
              Sonraki <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
