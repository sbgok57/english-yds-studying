import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Cpu,
  GraduationCap,
  AlertCircle,
  BarChart3,
  Settings,
  Flame,
  Zap,
  Sparkles,
  Sun,
  Moon,
} from 'lucide-react';
import { UserProgress } from '../../types';

export type ActiveTab =
  | 'dashboard'
  | 'study_session'
  | 'vocabulary'
  | 'grammar'
  | 'yds'
  | 'yds_essentials'
  | 'errors'
  | 'progress'
  | 'settings';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  userProgress: UserProgress;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userProgress,
  isDarkMode = false,
  onToggleDarkMode,
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Ana Sayfa', labelEn: 'Dashboard', icon: LayoutDashboard },
    { id: 'yds_essentials', label: 'YDS/YDT Önemliler', labelEn: 'YDS/YDT Essentials', icon: Sparkles },
    { id: 'vocabulary', label: 'Kelimeler', labelEn: 'Vocabulary', icon: BookOpen },
    { id: 'grammar', label: 'Gramer', labelEn: 'Grammar', icon: Cpu },
    { id: 'yds', label: 'YDS Çalışma Merkezi', labelEn: 'YDS Study Center', icon: GraduationCap },
    { id: 'errors', label: 'Hata Defterim', labelEn: 'Error Notebook', icon: AlertCircle },
    { id: 'progress', label: 'İlerleme', labelEn: 'Progress', icon: BarChart3 },
    { id: 'settings', label: 'Ayarlar', labelEn: 'Settings', icon: Settings },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white font-black text-xl shadow-md">
              Y
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">
                YDS/YDT Master
              </span>
              <span className="hidden sm:block text-[10px] text-slate-400 font-medium">
                Personal English Tutor
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-300 font-bold shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Progress Stats Header Bar */}
          <div className="flex items-center gap-3">
            {/* Streak */}
            <div
              title={`${userProgress.dailyStreak} günlük çalışma serisi`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-300 text-xs font-bold"
            >
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{userProgress.dailyStreak} Gün</span>
            </div>

            {/* XP / Level */}
            <div
              title={`Seviye ${userProgress.level} (${userProgress.xp} XP)`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/60 text-brand-700 dark:text-brand-300 text-xs font-bold"
            >
              <Zap className="w-3.5 h-3.5 text-brand-500 fill-brand-500" />
              <span>{userProgress.xp} XP</span>
              <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-brand-200 dark:bg-brand-900 text-brand-900 dark:text-brand-100">
                Lv.{userProgress.level}
              </span>
            </div>

            {/* Dark Mode Quick Toggle */}
            {onToggleDarkMode && (
              <button
                type="button"
                onClick={onToggleDarkMode}
                title={isDarkMode ? 'Aydınlık moda geç' : 'Karanlık moda geç'}
                aria-label="Tema değiştir"
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 py-2 overflow-x-auto gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg text-[10px] font-medium shrink-0 ${
                  isActive
                    ? 'text-brand-600 dark:text-brand-400 font-bold'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                <Icon className="w-4 h-4 mb-0.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
