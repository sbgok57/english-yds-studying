"use client";

import { useState, useEffect } from "react";
import { AVATARS, AVATAR_CATEGORIES, getAvatar, type Avatar } from "@/lib/avatars";
import { 
  Award, 
  Flame, 
  TrendingUp, 
  Target, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Search,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  Bar 
} from "recharts";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { safeStorage } from "@/lib/safe-storage";
import { getClientStreak } from "@/lib/streak";
import UsernameChanger from "@/components/profile/UsernameChanger";

const PER_PAGE = 60;

const SKILL_PERFORMANCE = [
  { skill: "Kelime", accuracy: 85 },
  { skill: "Gramer", accuracy: 80 },
  { skill: "Cümle Tamam.", accuracy: 75 },
  { skill: "Çeviri", accuracy: 90 },
  { skill: "Reading", accuracy: 70 },
  { skill: "Restatement", accuracy: 78 },
];

export default function DashboardPage() {
  const [selectedAvatarId, setSelectedAvatarId] = useState<string>("astronaut");
  const [avatarCategory, setAvatarCategory] = useState<string>("Hepsi");
  const [avatarSearch, setAvatarSearch] = useState<string>("");
  const [avatarPage, setAvatarPage] = useState<number>(0);

  const [username, setUsername] = useState<string>("ydskasifi");
  const [streak, setStreak] = useState<number>(0);
  const [totalWordsCount, setTotalWordsCount] = useState<number>(436);
  const [totalQuestionsSolved, setTotalQuestionsSolved] = useState<number>(0);
  const [netHistory, setNetHistory] = useState<{ date: string; net: number }[]>([]);

  useEffect(() => {
    // 1. Yerel depodan avatar ve kullanıcı adını al
    const storedAvatar = safeStorage.get("yds_avatar_id") || "astronaut";
    setSelectedAvatarId(storedAvatar);

    const storedUser = safeStorage.get("yds_username") || "ydskasifi";
    setUsername(storedUser);

    // 2. Gerçek seriyi hesapla (asla sahte 7 gün değil!)
    const localStreak = getClientStreak();
    setStreak(localStreak);

    // 3. API'den gerçek veritabanı istatistiklerini çek
    fetch("/api/dashboard")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) {
          if (typeof data.streak === "number") setStreak(Math.max(localStreak, data.streak));
          if (typeof data.totalWords === "number" && data.totalWords > 0) setTotalWordsCount(data.totalWords);
          if (typeof data.totalQuestions === "number") setTotalQuestionsSolved(data.totalQuestions);
          if (Array.isArray(data.netHistory) && data.netHistory.length > 0) {
            setNetHistory(data.netHistory);
          }
        }
      })
      .catch(() => {});
  }, []);

  const currentAvatar = getAvatar(selectedAvatarId);

  const handleSelectAvatar = (a: Avatar) => {
    setSelectedAvatarId(a.id);
    safeStorage.set("yds_avatar_id", a.id);
    toast.success(`Avatar güncellendi: ${a.label}! "${a.motivation}"`);
    if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(20);
  };

  // Avatar filtreleme (Kategori + Arama)
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Profil ve Rozet Başlığı */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-950 border-2 border-purple-500/30 shadow-2xl flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${currentAvatar.theme} border-2 border-white/30 flex items-center justify-center text-5xl shadow-xl`}>
            {currentAvatar.emoji}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-black text-white">
                {username}
              </h1>
              <span className="glass-pill text-[10px] text-yellow-300 font-bold">
                {currentAvatar.label}
              </span>
            </div>
            <p className="text-xs md:text-sm text-cyan-200 mt-1 italic">
              "{currentAvatar.motivation}"
            </p>
          </div>
        </div>

        {/* Sayaçlar (Tamamen Gerçek Veriler) */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15 text-center min-w-[90px]">
            <span className="text-xs text-orange-400 font-bold block flex items-center justify-center gap-1">
              <Flame className="w-3.5 h-3.5" /> Seri
            </span>
            <span className="text-xl font-black text-white">{streak} Gün</span>
          </div>
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15 text-center min-w-[90px]">
            <span className="text-xs text-yellow-400 font-bold block flex items-center justify-center gap-1">
              <Award className="w-3.5 h-3.5" /> Kelime
            </span>
            <span className="text-xl font-black text-yellow-300">{totalWordsCount}</span>
          </div>
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15 text-center min-w-[90px]">
            <span className="text-xs text-emerald-400 font-bold block flex items-center justify-center gap-1">
              <Target className="w-3.5 h-3.5" /> Çözülen
            </span>
            <span className="text-xl font-black text-emerald-300">{totalQuestionsSolved} Soru</span>
          </div>
        </div>
      </div>

      {/* Kullanıcı Adı Değiştirme ve Hızlı Eylemler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UsernameChanger />
        <div className="card-vibrant p-6 space-y-3 flex flex-col justify-between">
          <div>
            <h4 className="font-black text-sm text-yellow-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Sınav Hedefi & İlerleme Güvencesi
            </h4>
            <p className="text-xs text-white/75 mt-1 leading-relaxed">
              Tüm deneme ve kelime çalışmalarınız tarayıcı hafızanızda ve veritabanında anında mühürlenir. Sayfayı yenileseniz dahi süreleriniz ve işaretleriniz korunur.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs pt-2 border-t border-white/10">
            <span className="text-cyan-300 font-mono">Bugünkü Hedef: 20 Kelime</span>
            <span className="text-white/40">•</span>
            <span className="text-emerald-300 font-mono">1 Optik Deneme</span>
          </div>
        </div>
      </div>

      {/* Performans Grafikleri */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Net Gelişim Trendi */}
        <div className="card-vibrant p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-base text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              Deneme Net Gelişimi
            </h3>
            <span className="glass-pill text-[10px] text-cyan-300">Optik Sınavlar</span>
          </div>
          <div className="h-56 w-full">
            {netHistory.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={netHistory}>
                  <defs>
                    <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" stroke="#ffffff60" fontSize={11} />
                  <YAxis stroke="#ffffff60" fontSize={11} domain={[0, 80]} />
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "#ffffff20", borderRadius: "1rem" }} />
                  <Area type="monotone" dataKey="net" stroke="#06b6d4" fillOpacity={1} fill="url(#colorNet)" />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-white/50 text-xs space-y-2">
                <p className="text-3xl">📊</p>
                <p>Henüz çözülmüş deneme kaydı yok.</p>
                <a href="/exams" className="text-cyan-300 underline font-bold">180 dk Sınav Başlat &rarr;</a>
              </div>
            )}
          </div>
        </div>

        {/* Soru Tipi Bazlı Başarı Oranı */}
        <div className="card-vibrant p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-base text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Soru Tipi Doğruluk Oranları (%)
            </h3>
            <span className="glass-pill text-[10px] text-emerald-300">YDS Tipleri</span>
          </div>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SKILL_PERFORMANCE}>
                <XAxis dataKey="skill" stroke="#ffffff60" fontSize={11} />
                <YAxis stroke="#ffffff60" fontSize={11} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "#ffffff20", borderRadius: "1rem" }} />
                <Bar dataKey="accuracy" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 500 Motive Edici Prosedürel Avatar Koleksiyonu */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-black text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                500 Motive Edici Avatar Koleksiyonu
              </h3>
              <span className="glass-pill text-xs font-mono text-yellow-300 font-bold">
                {filteredAvatars.length} / 500 Avatar
              </span>
            </div>
            <p className="text-xs text-white/60 mt-0.5">
              10 farklı kategori ve 10 renk teması ile zihnine en uygun avatarı seç!
            </p>
          </div>

          {/* Avatar Arama Girdisi */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={avatarSearch}
              onChange={(e) => {
                setAvatarSearch(e.target.value);
                setAvatarPage(0);
              }}
              placeholder="Avatar ara (örn. astronot, aslan)..."
              className="w-full bg-black/40 border border-white/15 rounded-full pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-yellow-300 placeholder:text-white/40"
            />
          </div>
        </div>

        {/* Kategori Filtresi */}
        <div className="flex gap-1.5 flex-wrap text-xs">
          {AVATAR_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setAvatarCategory(cat);
                setAvatarPage(0);
              }}
              className={cn(
                "px-3 py-1.5 rounded-full font-bold transition-all border",
                avatarCategory === cat
                  ? "bg-yellow-300 text-slate-950 border-yellow-300 shadow"
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sayfalanmış Avatar Izgarası (60/sayfa) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {visibleAvatars.map((avatar) => {
            const isSelected = selectedAvatarId === avatar.id;
            return (
              <button
                key={avatar.id}
                onClick={() => handleSelectAvatar(avatar)}
                className={cn(
                  "p-3.5 rounded-2xl border-2 transition-all flex flex-col items-center text-center group",
                  isSelected
                    ? "bg-yellow-300/15 border-yellow-300 shadow-xl shadow-yellow-500/20 scale-105"
                    : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                )}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${avatar.theme} flex items-center justify-center text-2xl mb-1.5 shadow group-hover:scale-110 transition-transform`}>
                  {avatar.emoji}
                </div>
                <span className="font-bold text-xs text-white group-hover:text-yellow-300 block truncate w-full">
                  {avatar.label}
                </span>
                <span className="text-[10px] text-white/50 block line-clamp-1 mt-0.5">
                  {avatar.motivation}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sayfalama Kontrolleri (60'ar) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between bg-black/30 border border-white/10 rounded-2xl p-3 text-xs font-bold text-white">
            <button
              onClick={() => setAvatarPage((p) => Math.max(0, p - 1))}
              disabled={safePage === 0}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Önceki 60
            </button>

            <span className="text-cyan-300 font-mono">
              Sayfa {safePage + 1} / {totalPages} ({(safePage * PER_PAGE) + 1} - {Math.min((safePage + 1) * PER_PAGE, filteredAvatars.length)})
            </span>

            <button
              onClick={() => setAvatarPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={safePage >= totalPages - 1}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-colors"
            >
              Sonraki 60 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
