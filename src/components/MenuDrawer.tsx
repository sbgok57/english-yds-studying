"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  PAGES,
  GRAMMAR_LINKS,
  TACTICS_LINKS,
  GAME_LINKS,
  REAL_EXAMS,
  DENEME_COUNT,
} from "@/lib/site-index";
import SearchBox from "@/components/SearchBox";
import ThemeToggle from "@/components/ThemeToggle";
import ThemeQuickModal from "@/components/theme/ThemeQuickModal";
import { useUsage } from "@/lib/store";
import { calculateStudentProgress } from "@/lib/progress/calculator";
import {
  X,
  Compass,
  GraduationCap,
  Microscope,
  BookOpen,
  Headphones,
  PenTool,
  Mic,
  Clock,
  Sparkles,
  FileUp,
  Shield,
  Layers,
  ChevronRight,
} from "lucide-react";

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  const [themeModal, setThemeModal] = useState(false);
  const { usage } = useUsage();
  const wordsLearned = Object.values(usage.words || {}).filter((w) => w.c > w.w).length;
  const grammarCount = Object.keys(usage.grammar || {}).length;
  const tacticsCount = Object.keys(usage.tactics || {}).length;

  const progress = calculateStudentProgress({
    wordsLearned,
    grammarCompleted: grammarCount,
    tacticsCompleted: tacticsCount,
    questionsSolved: usage.exams?.totalQuestions || 0,
    examsTaken: usage.exams?.taken || 0,
  });

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        document.body.style.overflow = "auto";
        onClose();
      }
    }

    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      // // SAFETY: Her zaman gövde kaydırmasını yeniden aktif et
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  const handleSafeClose = () => {
    document.body.style.overflow = "auto";
    onClose();
  };

  if (!open) return null;

  const GroupTitle = ({ title, emoji }: { title: string; emoji: string }) => (
    <h3 className="text-[11px] font-black uppercase tracking-widest text-cyan-300/80 flex items-center gap-1.5 mt-6 mb-2.5 first:mt-0 border-b border-white/10 pb-1">
      <span>{emoji}</span> {title}
    </h3>
  );

  return (
    <div className="fixed inset-0 z-[100] transition-opacity duration-300">
      {/* Şeffaf Temiz Arkaplan Katmanı (Karanlık çamurlu değil, net cam) */}
      <div
        className="absolute inset-0 bg-slate-950/25 dark:bg-black/35 light:bg-slate-900/10 backdrop-blur-[2px] animate-in fade-in duration-200"
        onClick={handleSafeClose}
      />

      {/* Yan Çekmece (Sidebar) - Net, kristal kontrast ve aydınlık uyumu */}
      <aside className="absolute right-0 top-0 h-full w-full sm:w-[440px] bg-slate-900/92 dark:bg-slate-950/92 light:bg-white/95 light:text-slate-900 backdrop-blur-2xl border-l border-white/20 light:border-slate-300 overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col transition-colors">
        {/* Üst Sabit Çubuk: Başlık, 1000+ Tema Butonu, Tema Değiştirici ve Kapatma Butonu */}
        <div className="sticky top-0 z-20 bg-slate-900/90 dark:bg-slate-950/90 light:bg-white/95 backdrop-blur-2xl border-b border-white/15 light:border-slate-200 px-5 py-3.5 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧭</span>
              <div>
                <span className="font-black text-base text-white light:text-slate-900 block leading-tight">
                  DİL MASTER Navigasyon
                </span>
                <span className="text-[10px] text-cyan-300/80 light:text-cyan-700 font-mono">
                  YDS · YDT · YÖKDİL Tüm Modüller
                </span>
              </div>
            </div>

            {/* Yan Çekmece İçinde Canlı Tema Butonları ve Kapat */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setThemeModal(true)}
                className="h-9 px-2.5 rounded-xl border border-cyan-400/40 bg-gradient-to-r from-pink-500/15 to-cyan-500/15 hover:border-cyan-300 text-white light:text-slate-900 flex items-center gap-1 text-xs font-bold transition-all shadow-sm"
                title="🎨 1.000+ Tema Stüdyosu"
              >
                <span>🎨</span>
                <span className="text-[10px] font-mono hidden sm:inline">1000+</span>
              </button>
              <ThemeToggle compact className="!w-9 !h-9 !px-0 rounded-xl" />
              <button
                onClick={handleSafeClose}
                className="w-9 h-9 rounded-xl border border-white/15 light:border-slate-300 bg-white/5 light:bg-slate-100 hover:bg-white/15 text-white/80 light:text-slate-700 flex items-center justify-center transition-colors"
                aria-label="Menüyü Kapat"
              >
                <X className="w-5 h-5 text-white/80 light:text-slate-700" />
              </button>
            </div>
          </div>

          <SearchBox />
        </div>

        {/* Kaydırılabilir İçerik Alanı */}
        <div className="flex-1 px-5 py-4 space-y-6 overflow-y-auto">
          {/* 👑 YÖNETİCİ PANELİ & 👤 HESABIM KARTLARI */}
          <div className="space-y-1.5">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-amber-300/90 flex items-center gap-1.5 mb-2 border-b border-white/10 pb-1">
              <span>👑</span> Yönetim & Hesap Merkezi
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/admin"
                onClick={handleSafeClose}
                className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-950/70 via-slate-900 to-purple-950/40 border-2 border-purple-400/50 hover:border-purple-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col justify-between group shadow-lg shadow-purple-950/40"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl group-hover:scale-110 transition-transform">👑</span>
                  <span className="text-[9px] font-black uppercase tracking-wider text-purple-200 bg-purple-500/25 px-2 py-0.5 rounded-full border border-purple-400/40">
                    Admin
                  </span>
                </div>
                <div>
                  <span className="text-xs font-black text-white group-hover:text-purple-300 block">
                    Yönetici Paneli
                  </span>
                  <span className="text-[10px] text-white/50 block">Öğrenci & çalışma takibi</span>
                </div>
              </Link>

              <Link
                href="/hesap"
                onClick={handleSafeClose}
                className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-950/70 via-slate-900 to-cyan-950/40 border-2 border-cyan-400/50 hover:border-cyan-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col justify-between group shadow-lg shadow-cyan-950/40"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl group-hover:scale-110 transition-transform">👤</span>
                  <span className="text-[9px] font-black uppercase tracking-wider text-cyan-200 bg-cyan-500/25 px-2 py-0.5 rounded-full border border-cyan-400/40">
                    Hesap
                  </span>
                </div>
                <div>
                  <span className="text-xs font-black text-white group-hover:text-cyan-300 block">
                    Hesabım & Profil
                  </span>
                  <span className="text-[10px] text-white/50 block">Hedef, avatar & ayarlar</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Hızlı İlerleme & İndirme Kartları */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/ilerleme"
              onClick={handleSafeClose}
              className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xl">📈</span>
                <span className="text-[10px] font-black text-cyan-300 font-mono">%{progress.overallPercent}</span>
              </div>
              <span className="text-xs font-black text-white group-hover:text-cyan-300">İlerlemem</span>
            </Link>

            <button
              onClick={() => {
                handleSafeClose();
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("yds:open-install-modal"));
                }
              }}
              className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/15 to-pink-500/10 border border-purple-500/30 hover:border-purple-400 transition-all text-left flex flex-col justify-between group shadow-sm"
              title="iPhone, iPad ve Android cihazına tek tıkla yükle"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xl">📲</span>
                <span className="text-[10px] font-black text-purple-300 font-mono">iOS & Android</span>
              </div>
              <span className="text-xs font-black text-white group-hover:text-purple-300">
                iOS ve Android&apos;e İndir
              </span>
            </button>
          </div>

          {/* 🎨 TEMALAR — 1.000+ DESENLİ & DESENSİZ RENKLİ TEMA */}
          <div>
            <GroupTitle title="Temalar & Görünüm (1.000+ Desenli & Renkli)" emoji="🎨" />
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  setThemeModal(true);
                }}
                className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border-2 border-pink-400/50 hover:border-pink-300 flex items-center justify-between group transition-all text-left shadow-lg shadow-pink-950/30 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 text-white flex items-center justify-center text-xl font-black shadow-md shrink-0">
                    🎨
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-black text-white group-hover:text-pink-300 transition-colors">
                        Temalar (Hızlı Seçici)
                      </h4>
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-pink-400/25 text-pink-200 font-mono">
                        1.000+ Tema
                      </span>
                    </div>
                    <p className="text-[10px] text-white/60 mt-0.5">
                      200+ SVG desenli, pastel, neon, koyu & degrade renk seçenekleri
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-pink-300 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <Link
                href="/ayarlar"
                onClick={handleSafeClose}
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">⚙️</span>
                  <div>
                    <h5 className="text-[11px] font-bold text-white group-hover:text-cyan-300">
                      Detaylı Tema & Ayarlar Stüdyosu
                    </h5>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 📅 ÇALIŞMA PLANLARI (GÜN / AY / YIL TAKVİMİ) */}
          <div>
            <GroupTitle title="Çalışma Planları (Gün · Ay · Yıl Takvimi)" emoji="📅" />
            <div className="space-y-2">
              <Link
                href="/study-plans"
                onClick={handleSafeClose}
                className="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border-2 border-cyan-400/50 hover:border-cyan-300 flex items-center justify-between group transition-all shadow-lg shadow-cyan-950/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/25 text-cyan-300 flex items-center justify-center text-xl font-black shrink-0">
                    📅
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-black text-white group-hover:text-cyan-300 transition-colors">
                        Sınav Çalışma Planları
                      </h4>
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-mono">
                        Gün / Ay / Yıl
                      </span>
                    </div>
                    <p className="text-[10px] text-white/60 mt-0.5">
                      YDS, YDT ve YÖKDİL (Sağlık, Fen, Sosyal) hazır ve kişisel planlar
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-cyan-300 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>

              {/* Hızlı Plan Başlatıcı / Sınav Seçenekleri */}
              <div className="grid grid-cols-3 gap-1.5">
                <Link
                  href="/study-plans"
                  onClick={handleSafeClose}
                  className="p-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 text-center transition-all group"
                >
                  <span className="text-[10px] font-black text-emerald-300 group-hover:text-white block">
                    📘 YDS
                  </span>
                  <span className="text-[9px] text-white/50 block">30–120 Gün</span>
                </Link>

                <Link
                  href="/study-plans"
                  onClick={handleSafeClose}
                  className="p-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 text-center transition-all group"
                >
                  <span className="text-[10px] font-black text-amber-300 group-hover:text-white block">
                    🎯 YDT
                  </span>
                  <span className="text-[9px] text-white/50 block">Net Artırma</span>
                </Link>

                <Link
                  href="/study-plans"
                  onClick={handleSafeClose}
                  className="p-2 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-400/30 text-center transition-all group"
                >
                  <span className="text-[10px] font-black text-purple-300 group-hover:text-white block">
                    🌐 YÖKDİL
                  </span>
                  <span className="text-[9px] text-white/50 block">3 Alan</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 1. ÜÇ BÜYÜK SINAV MERKEZİ (YDS, YDT, YÖKDİL) */}
          <div>
            <GroupTitle title="Sınav Özel Merkezleri (YDS / YDT / YÖKDİL)" emoji="🎯" />
            <div className="space-y-2">
              <Link
                href="/yds"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-400/30 hover:border-cyan-300 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-lg font-black">
                    🎯
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white group-hover:text-cyan-300 transition-colors">
                      YDS Hazırlık & Sınav Merkezi
                    </h4>
                    <p className="text-[10px] text-white/50">180 dk • 80 Soru • Kamu & Lisansüstü</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/ydt"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-400/30 hover:border-amber-300 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center text-lg font-black">
                    🎓
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white group-hover:text-amber-300 transition-colors">
                      YDT (YKS-Dil / LYS-5) Merkezi
                    </h4>
                    <p className="text-[10px] text-white/50">120 dk • 80 Soru • Üniversite Giriş</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/yokdil"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-400/30 hover:border-purple-300 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center text-lg font-black">
                    🔬
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white group-hover:text-purple-300 transition-colors">
                      YÖKDİL Alan Merkezi (Sağlık, Fen, Sosyal)
                    </h4>
                    <p className="text-[10px] text-white/50">180 dk • 80 Soru • 3 Ayrı Bilim Alanı</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Sınav Bazlı Kelime Envanteri & Yayın Havuzu */}
          <div>
            <GroupTitle title="Kelime Envanteri (Sınav Bazlı)" emoji="📚" />
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-cyan-950/40 border border-indigo-400/30 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📖</span>
                  <div>
                    <span className="text-xs font-black text-white block">
                      Akademik Kelime Envanteri
                    </span>
                    <span className="text-[10px] text-white/50 block">
                      Sınavlara göre ayrıştırılmış yayın havuzu
                    </span>
                  </div>
                </div>
                <Link
                  href="/vocabulary/inventory"
                  onClick={handleSafeClose}
                  className="text-[11px] font-bold text-cyan-300 hover:text-white flex items-center gap-0.5"
                >
                  Tümü &rarr;
                </Link>
              </div>

              {/* Sınav Seçim Hapları */}
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <Link
                  href="/vocabulary/inventory?exam=YDS"
                  onClick={handleSafeClose}
                  className="p-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-center transition-all group"
                >
                  <span className="text-[10px] font-black text-cyan-300 group-hover:text-white block">
                    🎯 YDS
                  </span>
                  <span className="text-[9px] text-white/50 block">Akademik</span>
                </Link>

                <Link
                  href="/vocabulary/inventory?exam=YDT"
                  onClick={handleSafeClose}
                  className="p-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 text-center transition-all group"
                >
                  <span className="text-[10px] font-black text-amber-300 group-hover:text-white block">
                    🎓 YDT
                  </span>
                  <span className="text-[9px] text-white/50 block">YKS-Dil</span>
                </Link>

                <Link
                  href="/vocabulary/inventory?exam=YÖKDİL"
                  onClick={handleSafeClose}
                  className="p-2 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-400/30 text-center transition-all group"
                >
                  <span className="text-[10px] font-black text-purple-300 group-hover:text-white block">
                    🔬 YÖKDİL
                  </span>
                  <span className="text-[9px] text-white/50 block">3 Alan</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. YEDİ TEMEL DİL BECERİSİ (SKILLS) */}
          <div>
            <GroupTitle title="7 Temel Dil Becerisi Modülü" emoji="⚡" />
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/vocabulary/flashcards"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-all block group"
              >
                <span className="text-xl block mb-1">🃏</span>
                <span className="text-xs font-black text-white group-hover:text-cyan-300 block">
                  3D Flashcards
                </span>
                <span className="text-[10px] text-white/50">2.500+ Kelime & Küp</span>
              </Link>

              <Link
                href="/grammar"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 transition-all block group"
              >
                <span className="text-xl block mb-1">📖</span>
                <span className="text-xs font-black text-white group-hover:text-purple-300 block">
                  Gramer (27 Konu)
                </span>
                <span className="text-[10px] text-white/50">Formül & Animasyon</span>
              </Link>

              <Link
                href="/reading"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/40 transition-all block group"
              >
                <span className="text-xl block mb-1">🔬</span>
                <span className="text-xs font-black text-white group-hover:text-emerald-300 block">
                  Reading Lab
                </span>
                <span className="text-[10px] text-white/50">Tıkla-Öğren Sözlük</span>
              </Link>

              <Link
                href="/listening"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-400/40 transition-all block group"
              >
                <span className="text-xl block mb-1">🎧</span>
                <span className="text-xs font-black text-white group-hover:text-blue-300 block">
                  Listening Lab
                </span>
                <span className="text-[10px] text-white/50">14 Aksan & Ses</span>
              </Link>

              <Link
                href="/writing"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-pink-400/40 transition-all block group"
              >
                <span className="text-xl block mb-1">✍️</span>
                <span className="text-xs font-black text-white group-hover:text-pink-300 block">
                  Writing Lab
                </span>
                <span className="text-[10px] text-white/50">Cümle Kurma & Çeviri</span>
              </Link>

              <Link
                href="/speaking"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-400/40 transition-all block group"
              >
                <span className="text-xl block mb-1">🎙️</span>
                <span className="text-xs font-black text-white group-hover:text-rose-300 block">
                  Speaking Lab
                </span>
                <span className="text-[10px] text-white/50">AI Sesli Pratik</span>
              </Link>
            </div>
          </div>

          {/* 3. TÜM DENEME SINAVLARI */}
          <div>
            <GroupTitle title="Sınav Denemeleri & Çıkmış Sorular" emoji="⏱️" />
            <Link
              href="/exams"
              onClick={handleSafeClose}
              className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-cyan-500/20 border border-amber-400/30 hover:border-amber-300 flex items-center justify-between group transition-all"
            >
              <div>
                <span className="text-xs font-black text-white group-hover:text-amber-300 block">
                  ⏱️ Tüm Sınav Havuzunu Aç
                </span>
                <span className="text-[10px] text-white/60">
                  YDS (2013-2026), YDT (2010-2026), YÖKDİL + 72'şer Özgün Deneme
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-amber-300 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 4. AKILLI PDF VE KELİME ARAÇLARI */}
          <div>
            <GroupTitle title="Akıllı Araçlar & PDF Aktarıcı" emoji="📄" />
            <div className="space-y-1.5">
              <Link
                href="/import"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">📄➕</span>
                  <div>
                    <h5 className="text-xs font-black text-white group-hover:text-emerald-300">
                      Akıllı PDF & Kelime Ekle (Claude AI)
                    </h5>
                    <p className="text-[10px] text-white/50">Kitap/deneme yükle, otomatik kelimeleri ayıkla</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-300" />
              </Link>

              <Link
                href="/grammar/audio"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎧</span>
                  <div>
                    <h5 className="text-xs font-black text-white group-hover:text-cyan-300">
                      Sesli Gramer Kodları (12 Track)
                    </h5>
                    <p className="text-[10px] text-white/50">ALi CÜMLEci vs DEDE İSİMci & kilit ekranı</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-cyan-300" />
              </Link>

              <Link
                href="/tactics"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-pink-400/30 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  <div>
                    <h5 className="text-xs font-black text-white group-hover:text-pink-300">
                      Soru Taktikleri (11 Tip / 600 Soru)
                    </h5>
                    <p className="text-[10px] text-white/50">Çeldirici eleme & adım adım çözümler</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-pink-300" />
              </Link>

              <Link
                href="/games"
                onClick={handleSafeClose}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎮</span>
                  <div>
                    <h5 className="text-xs font-black text-white group-hover:text-amber-300">
                      Eğitici Oyunlar (6 Oyun)
                    </h5>
                    <p className="text-[10px] text-white/50">Eşleştirme, Köstebek Vur, Zar, Çarkıfelek</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-300" />
              </Link>
            </div>
          </div>

          {/* 5. DİĞER SAYFALAR & YÖNETİM */}
          <div>
            <GroupTitle title="Genel Sayfalar & Ayarlar" emoji="📘" />
            <div className="grid grid-cols-2 gap-1.5">
              {PAGES.slice(0, 10).map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={handleSafeClose}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white/75 hover:bg-white/10 hover:text-white transition-colors truncate"
                >
                  <span>{p.emoji}</span>
                  <span className="truncate">{p.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sistem Denetçisi / Sıfır Hata Butonu */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                handleSafeClose();
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("yds:open-debug"));
                }
              }}
              className="w-full p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 text-left flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-2">
                <span>🛡️</span>
                <span className="text-xs font-black">Sistem Denetçisi & Sıfır Hata (0 Hata)</span>
              </div>
              <span className="text-xs">⚡ Tara & Sıfırla</span>
            </button>
          </div>
        </div>
      </aside>

      {/* 1.000+ Tema Seçici Modal */}
      <ThemeQuickModal open={themeModal} onClose={() => setThemeModal(false)} />
    </div>
  );
}
