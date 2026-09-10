import React, { useState, useEffect } from 'react';
import { MOTIVATION_QUOTES, MotivationalQuote } from '../../data/motivationData';
import { speechService } from '../../services/speech';
import { Target, Clock, Flame, Award, ArrowRight, Sparkles, RefreshCw, Volume2 } from 'lucide-react';

interface MotivationModalProps {
  streakDays: number;
  xp: number;
  onStartMission: (sessionDurationMinutes: number) => void;
  onClose?: () => void;
}

export const MotivationModal: React.FC<MotivationModalProps> = ({
  streakDays,
  xp,
  onStartMission,
  onClose
}) => {
  const [selectedDuration, setSelectedDuration] = useState<number>(15);
  const [quote, setQuote] = useState<MotivationalQuote>(MOTIVATION_QUOTES[0]);

  useEffect(() => {
    // Pick a randomized inspirational quote on mount
    const randomIdx = Math.floor(Math.random() * MOTIVATION_QUOTES.length);
    const chosen = MOTIVATION_QUOTES[randomIdx];
    setQuote(chosen);
  }, []);

  const randomizeQuote = () => {
    const nextIdx = Math.floor(Math.random() * MOTIVATION_QUOTES.length);
    setQuote(MOTIVATION_QUOTES[nextIdx]);
  };

  const handleAudioListen = () => {
    speechService.speak(quote.quoteEn, { rate: 0.95 });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Tag */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">GÜNÜN GÖREVİ</span>
              <h2 className="text-2xl font-black tracking-tight text-white">TODAY'S MISSION</h2>
            </div>
          </div>

          <button
            onClick={randomizeQuote}
            title="Yeni bir motivasyon cümlesi getir"
            className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all text-xs flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Farklı Söz</span>
          </button>
        </div>

        {/* Motivational Card */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 mb-6 relative group">
          <div className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed italic mb-2 pr-8">
            "{quote.quoteEn}"
          </div>
          <div className="text-sm sm:text-base font-normal text-emerald-400/90 leading-normal border-t border-slate-800/60 pt-2">
            "{quote.quoteTr}"
          </div>

          <button
            onClick={handleAudioListen}
            title="Cümleyi sesli dinle"
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800/60 hover:bg-emerald-600/20 hover:text-emerald-400 text-slate-400 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* User Stats Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-semibold mb-1">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
              <span>GÜNCEL SERİ</span>
            </div>
            <div className="text-xl font-bold text-white">{streakDays} Gün</div>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-400 text-xs font-semibold mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>MEVCUT XP</span>
            </div>
            <div className="text-xl font-bold text-white">{xp} XP</div>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-teal-400 text-xs font-semibold mb-1">
              <Target className="w-3.5 h-3.5" />
              <span>GÜNLÜK HEDEF</span>
            </div>
            <div className="text-xl font-bold text-white">20 Kelime</div>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-indigo-400 text-xs font-semibold mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>SÜRE</span>
            </div>
            <div className="text-xl font-bold text-white">{selectedDuration} Dk</div>
          </div>
        </div>

        {/* Study Mode Selector */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            ÇALIŞMA SEANS MODUNU SEÇİN
          </label>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setSelectedDuration(5)}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedDuration === 5
                  ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/20'
                  : 'bg-slate-800/30 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="font-semibold text-sm">Hızlı Tekrar</div>
              <div className="text-xs opacity-75">5 Dakika</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedDuration(15)}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedDuration === 15
                  ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/20'
                  : 'bg-slate-800/30 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="font-semibold text-sm">Standart Seans</div>
              <div className="text-xs opacity-75">15 Dakika (Önerilen)</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedDuration(30)}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedDuration === 30
                  ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/20'
                  : 'bg-slate-800/30 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="font-semibold text-sm">Derin Pratik</div>
              <div className="text-xs opacity-75">30 Dakika</div>
            </button>
          </div>
        </div>

        {/* Large Action Button */}
        <button
          onClick={() => {
            speechService.speak("Starting today's mission. Let's practice with focus.");
            onStartMission(selectedDuration);
          }}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-lg tracking-wide shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-3 transition-all transform active:scale-[0.98]"
        >
          <span>GÖREVİ BAŞLAT (START MY MISSION)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
