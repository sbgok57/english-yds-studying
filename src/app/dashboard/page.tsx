"use client";

import { useState } from "react";
import { AVATARS, type AvatarOption } from "@/lib/avatars";
import { 
  Award, 
  Flame, 
  TrendingUp, 
  Target, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Sparkles 
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

const WEEKLY_DATA = [
  { day: "Pzt", questions: 45, score: 68 },
  { day: "Sal", questions: 60, score: 72 },
  { day: "Çar", questions: 80, score: 75 },
  { day: "Per", questions: 50, score: 70 },
  { day: "Cum", questions: 90, score: 82 },
  { day: "Cmt", questions: 120, score: 85 },
  { day: "Paz", questions: 80, score: 88 },
];

const SKILL_PERFORMANCE = [
  { skill: "Kelime", accuracy: 84 },
  { skill: "Gramer", accuracy: 78 },
  { skill: "Cümle Tamam.", accuracy: 72 },
  { skill: "Çeviri", accuracy: 92 },
  { skill: "Reading", accuracy: 68 },
  { skill: "Restatement", accuracy: 75 },
];

export default function DashboardPage() {
  const [selectedAvatarId, setSelectedAvatarId] = useState<string>("astronaut");
  const [avatarCategory, setAvatarCategory] = useState<string>("all");

  const currentAvatar = AVATARS.find((a) => a.id === selectedAvatarId) || AVATARS[0];

  const handleSelectAvatar = (a: AvatarOption) => {
    setSelectedAvatarId(a.id);
    toast.success(`Avatar güncellendi: ${a.name}! "${a.motto}"`);
    if (navigator.vibrate) navigator.vibrate(20);
  };

  const filteredAvatars = avatarCategory === "all"
    ? AVATARS
    : AVATARS.filter((a) => a.category === avatarCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Profil ve Rozet Başlığı */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-950 border-2 border-purple-500/30 shadow-2xl flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${currentAvatar.gradient} border-2 border-white/30 flex items-center justify-center text-5xl shadow-xl`}>
            {currentAvatar.emoji}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-black text-white">
                ydskasifi
              </h1>
              <span className="glass-pill text-[10px] text-yellow-300 font-bold">
                {currentAvatar.name}
              </span>
            </div>
            <p className="text-xs md:text-sm text-cyan-200 mt-1 italic">
              "{currentAvatar.motto}"
            </p>
          </div>
        </div>

        {/* Sayaçlar */}
        <div className="flex items-center gap-3">
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15 text-center">
            <span className="text-xs text-orange-400 font-bold block flex items-center justify-center gap-1">
              <Flame className="w-3.5 h-3.5" /> Seri
            </span>
            <span className="text-xl font-black text-white">7 Gün</span>
          </div>
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15 text-center">
            <span className="text-xs text-yellow-400 font-bold block flex items-center justify-center gap-1">
              <Award className="w-3.5 h-3.5" /> Puan
            </span>
            <span className="text-xl font-black text-yellow-300">1250 XP</span>
          </div>
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15 text-center">
            <span className="text-xs text-emerald-400 font-bold block flex items-center justify-center gap-1">
              <Target className="w-3.5 h-3.5" /> Seviye
            </span>
            <span className="text-xl font-black text-emerald-300">B1 → YDS</span>
          </div>
        </div>
      </div>

      {/* Performans Grafikleri */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Haftalık Soru Çözümü */}
        <div className="card-vibrant p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-base text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              Haftalık Çözülen Soru Eğilimi
            </h3>
            <span className="glass-pill text-[10px] text-cyan-300">Son 7 Gün</span>
          </div>
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={WEEKLY_DATA}>
                <defs>
                  <linearGradient id="colorQuestions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#ffffff60" fontSize={12} />
                <YAxis stroke="#ffffff60" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "#ffffff20", borderRadius: "1rem" }} />
                <Area type="monotone" dataKey="questions" stroke="#06b6d4" fillOpacity={1} fill="url(#colorQuestions)" />
              </AreaChart>
            </ResponsiveContainer>
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
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SKILL_PERFORMANCE}>
                <XAxis dataKey="skill" stroke="#ffffff60" fontSize={11} />
                <YAxis stroke="#ffffff60" fontSize={12} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "#ffffff20", borderRadius: "1rem" }} />
                <Bar dataKey="accuracy" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 30+ Motivasyonel Avatar Koleksiyonu */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-2xl font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              30+ Motive Edici Avatar Koleksiyonu
            </h3>
            <p className="text-xs text-white/60">
              Görsel hafızana ve sınav ruhuna uygun bir avatar seç!
            </p>
          </div>

          {/* Kategori Filtresi */}
          <div className="flex gap-1.5 flex-wrap text-xs">
            {[
              { id: "all", label: "Tümü (30)" },
              { id: "explorer", label: "Kâşifler" },
              { id: "scholar", label: "Bilginler" },
              { id: "power", label: "Zeka & Güç" },
              { id: "animal", label: "Ruh Hayvanları" },
              { id: "hero", label: "Kahramanlar" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setAvatarCategory(cat.id)}
                className={cn(
                  "px-3 py-1.5 rounded-full font-bold transition-all border",
                  avatarCategory === cat.id
                    ? "bg-yellow-300 text-slate-950 border-yellow-300 shadow"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/15"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredAvatars.map((avatar) => {
            const isSelected = selectedAvatarId === avatar.id;
            return (
              <button
                key={avatar.id}
                onClick={() => handleSelectAvatar(avatar)}
                className={cn(
                  "p-4 rounded-2xl border-2 transition-all flex flex-col items-center text-center group",
                  isSelected
                    ? "bg-yellow-300/15 border-yellow-300 shadow-xl shadow-yellow-500/20 scale-105"
                    : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                )}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${avatar.gradient} flex items-center justify-center text-3xl mb-2 shadow group-hover:scale-110 transition-transform`}>
                  {avatar.emoji}
                </div>
                <span className="font-bold text-xs text-white group-hover:text-yellow-300 block truncate w-full">
                  {avatar.name}
                </span>
                <span className="text-[10px] text-white/50 block line-clamp-1 mt-0.5">
                  {avatar.motto}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
