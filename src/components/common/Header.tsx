import React, { useState } from 'react';
import { Flame, Award, Volume2, VolumeX, BookOpen, GraduationCap, FileCheck, Bookmark, BarChart2 } from 'lucide-react';
import { speechService } from '../../services/speech';

interface HeaderProps {
  currentView: 'vocabulary' | 'grammar' | 'yds' | 'errors' | 'progress';
  onSelectView: (view: 'vocabulary' | 'grammar' | 'yds' | 'errors' | 'progress') => void;
  xp: number;
  level: number;
  streakDays: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onSelectView,
  xp,
  level,
  streakDays
}) => {
  const [soundOn, setSoundOn] = useState(speechService.getSettings().enabled);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    speechService.saveSettings({ enabled: next });
    if (next) {
      speechService.speak("Voice feedback enabled");
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onSelectView('vocabulary')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-md shadow-emerald-500/20 font-bold text-white text-lg">
              YDS
            </div>
            <div>
              <div className="font-bold text-base tracking-tight flex items-center gap-2">
                <span>ENGLISH MASTERY</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  YDS & YDT
                </span>
              </div>
              <div className="text-xs text-slate-400">Yetişkin & Kariyer Odaklı Hazırlık Platformu</div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => onSelectView('vocabulary')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                currentView === 'vocabulary'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Kelime Laboratuvarı
            </button>

            <button
              onClick={() => onSelectView('grammar')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                currentView === 'grammar'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Gramer Sistemi (30 Konu)
            </button>

            <button
              onClick={() => onSelectView('yds')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                currentView === 'yds'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              YDS Sınav Modu
            </button>

            <button
              onClick={() => onSelectView('errors')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                currentView === 'errors'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              Hata Defterim
            </button>

            <button
              onClick={() => onSelectView('progress')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                currentView === 'progress'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              İstatistik & İçe Aktar
            </button>
          </nav>

          {/* Gamification & Controls */}
          <div className="flex items-center space-x-3">
            {/* Streak */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{streakDays} Gün Seri</span>
            </div>

            {/* XP */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Award className="w-4 h-4" />
              <span>{xp} XP (Seviye {level})</span>
            </div>

            {/* Voice Feedback Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundOn ? "Sesli Geri Bildirim Açık (Tıkla kapat)" : "Sesli Geri Bildirim Kapalı (Tıkla aç)"}
              className={`p-2 rounded-lg border transition-all ${
                soundOn
                  ? 'bg-slate-800 border-slate-700 text-emerald-400 hover:bg-slate-700'
                  : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-400'
              }`}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-800 text-xs">
          <button
            onClick={() => onSelectView('vocabulary')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded ${currentView === 'vocabulary' ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}
          >
            <BookOpen className="w-4 h-4" />
            Kelime
          </button>
          <button
            onClick={() => onSelectView('grammar')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded ${currentView === 'grammar' ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}
          >
            <GraduationCap className="w-4 h-4" />
            Gramer
          </button>
          <button
            onClick={() => onSelectView('yds')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded ${currentView === 'yds' ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}
          >
            <FileCheck className="w-4 h-4" />
            YDS
          </button>
          <button
            onClick={() => onSelectView('errors')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded ${currentView === 'errors' ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}
          >
            <Bookmark className="w-4 h-4" />
            Hatalar
          </button>
          <button
            onClick={() => onSelectView('progress')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded ${currentView === 'progress' ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}
          >
            <BarChart2 className="w-4 h-4" />
            Profil
          </button>
        </div>
      </div>
    </header>
  );
};
