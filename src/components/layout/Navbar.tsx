"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  Flame,
  Gamepad2
} from "lucide-react";
import { cn } from "@/lib/utils";
import SearchBar from "@/components/search/SearchBar";
import { getClientStreak } from "@/lib/streak";
import { safeStorage } from "@/lib/safe-storage";
import {
  getAvatar,
  avatarSvg,
  AVATAR_CHANGED_EVENT,
  AVATAR_STORAGE_KEY,
  CUSTOM_AVATAR_KEY,
} from "@/lib/avatars";

const NAV_LINKS = [
  { href: "/vocabulary/flashcards", label: "Flashcards 3D", icon: Sparkles, color: "text-amber-300" },
  { href: "/vocabulary", label: "Kelimeler", icon: Layers, color: "text-orange-400" },
  { href: "/exams", label: "180 dk Sınav", icon: Clock, color: "text-rose-400" },
  { href: "/grammar", label: "Gramer (27 Konu)", icon: BookOpen, color: "text-purple-400" },
  { href: "/tactics", label: "11 Taktik", icon: Compass, color: "text-cyan-400" },
  { href: "/games", label: "Oyunlar", icon: Gamepad2, color: "text-pink-400" },
  { href: "/reading", label: "Reading Lab", icon: FileSpreadsheet, color: "text-emerald-400" },
  { href: "/listening", label: "Listening", icon: Headphones, color: "text-blue-400" },
  { href: "/import", label: "PDF / Quizlet", icon: UploadCloud, color: "text-indigo-400" },
  { href: "/dashboard", label: "İlerleme & Avatar", icon: Award, color: "text-yellow-400" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [streak, setStreak] = useState(0);
  const [username, setUsername] = useState("ydskasifi");
  const [avatarId, setAvatarId] = useState<string>("astronaut");
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);

  const reloadUserAvatar = () => {
    const currentStreak = getClientStreak();
    setStreak(currentStreak);

    const storedUser = safeStorage.get("yds_username") || "ydskasifi";
    setUsername(storedUser);

    const storedAvatarId = safeStorage.get(AVATAR_STORAGE_KEY) || "astronaut";
    setAvatarId(storedAvatarId);

    // Custom avatar check
    const customKey = safeStorage.get(CUSTOM_AVATAR_KEY);
    if (customKey) {
      try {
        const rawCustomList = window.localStorage.getItem("yds-master-custom-avatars");
        if (rawCustomList) {
          const list = JSON.parse(rawCustomList);
          const found = list.find((c: any) => c.id === customKey);
          if (found?.dataUrl) {
            setCustomAvatar(found.dataUrl);
            return;
          }
        }
      } catch {
        /* empty */
      }
    }
    // Check usage store
    try {
      const usageRaw = window.localStorage.getItem("yds-master-usage-v1");
      if (usageRaw) {
        const u = JSON.parse(usageRaw);
        if (u.customAvatar) {
          setCustomAvatar(u.customAvatar);
          return;
        }
      }
    } catch {
      /* empty */
    }
    setCustomAvatar(null);
  };

  useEffect(() => {
    reloadUserAvatar();
    const handleAvatarChange = () => reloadUserAvatar();
    window.addEventListener(AVATAR_CHANGED_EVENT, handleAvatarChange);
    window.addEventListener("storage", handleAvatarChange);
    return () => {
      window.removeEventListener(AVATAR_CHANGED_EVENT, handleAvatarChange);
      window.removeEventListener("storage", handleAvatarChange);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 flex items-center justify-center text-lg shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
            🧠
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
              YDS Master
            </span>
            <span className="block text-[9px] font-mono tracking-widest text-cyan-300 uppercase -mt-1">
              Görsel Hafıza
            </span>
          </div>
        </Link>

        {/* Global Arama Çubuğu */}
        <div className="flex-1 max-w-xs md:max-w-sm mx-1 sm:mx-3">
          <SearchBar />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden 2xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap",
                  isActive
                    ? "bg-white/15 text-white shadow-md border border-white/20 scale-105"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5", link.color)} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Status (Real Streak + Avatar) */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold hover:scale-105 transition-transform"
            title="Gerçek Günlük Çalışma Serisi"
          >
            <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span>{streak} Gün</span>
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 p-1 pr-2.5 rounded-full bg-white/10 border border-white/20 hover:border-white/40 transition-all group"
          >
            <span className="w-7 h-7 rounded-full overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center text-sm shadow">
              {customAvatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={customAvatar} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <div
                  className="w-full h-full aspect-square"
                  dangerouslySetInnerHTML={{ __html: avatarSvg(avatarId, "nav") }}
                />
              )}
            </span>
            <span className="text-xs font-bold text-white/90 group-hover:text-yellow-300 transition-colors hidden md:inline truncate max-w-[80px]">
              {username}
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="2xl:hidden p-2 rounded-xl bg-white/10 text-white/80 hover:text-white"
            aria-label="Menüyü Aç"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="2xl:hidden bg-slate-950/95 border-b border-white/10 px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-2 p-3 rounded-2xl text-xs font-bold border transition-all",
                      isActive
                        ? "bg-white/20 text-white border-white/30"
                        : "bg-white/5 text-white/70 border-white/5 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Icon className={cn("w-4 h-4", link.color)} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
