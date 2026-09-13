"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Layers, 
  BookOpen, 
  Clock, 
  Award, 
  UploadCloud, 
  Menu, 
  X, 
  Compass,
  FileSpreadsheet,
  Headphones,
  Flame
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/vocabulary/flashcards", label: "Flashcards 3D", icon: Sparkles, color: "text-amber-300" },
  { href: "/vocabulary", label: "Kelimeler", icon: Layers, color: "text-orange-400" },
  { href: "/exams", label: "180 dk Sınav & Optik", icon: Clock, color: "text-rose-400" },
  { href: "/grammar", label: "Gramer (15 Konu)", icon: BookOpen, color: "text-purple-400" },
  { href: "/tactics", label: "11 Soru Taktikleri", icon: Compass, color: "text-cyan-400" },
  { href: "/reading", label: "Reading Lab", icon: FileSpreadsheet, color: "text-emerald-400" },
  { href: "/listening", label: "Listening TTS", icon: Headphones, color: "text-blue-400" },
  { href: "/import", label: "PDF / Quizlet", icon: UploadCloud, color: "text-pink-400" },
  { href: "/dashboard", label: "İlerleme & Avatar", icon: Award, color: "text-yellow-400" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 flex items-center justify-center text-xl shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
            🧠
          </div>
          <div>
            <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
              YDS Master
            </span>
            <span className="block text-[10px] font-mono tracking-widest text-cyan-300 uppercase -mt-1">
              Görsel Hafıza Platformu
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all",
                  isActive
                    ? "bg-white/15 text-white shadow-md border border-white/20 scale-105"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                <Icon className={cn("w-4 h-4", link.color)} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Status (Streak + Avatar) */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold hover:scale-105 transition-transform"
            title="Günlük Çalışma Serisi"
          >
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>7 Gün Seri</span>
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-white/10 border border-white/20 hover:border-white/40 transition-all group"
          >
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center text-sm shadow">
              👨‍🚀
            </span>
            <span className="text-xs font-bold text-white/90 group-hover:text-yellow-300 transition-colors hidden sm:inline">
              ydskasifi
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-xl bg-white/10 text-white/80 hover:text-white"
            aria-label="Menüyü Aç"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl px-4 py-4 space-y-1"
          >
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all",
                    isActive
                      ? "bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-white border border-pink-500/40"
                      : "text-white/70 hover:bg-white/10"
                  )}
                >
                  <Icon className={cn("w-5 h-5", link.color)} />
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
