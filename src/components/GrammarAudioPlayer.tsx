"use client";

import React, { useState, useEffect } from 'react';
import { backgroundAudio } from '../lib/backgroundAudioEngine';
import { SmartNotificationManager } from '../lib/smartNotificationManager';

export interface GrammarAudioPlayerProps {
  topicTitle: string;
  topicScript: string;
  level: string;
}

export const GrammarAudioPlayer: React.FC<GrammarAudioPlayerProps> = ({
  topicTitle,
  topicScript,
  level
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Sayfa açıldığında arka plan bildirim iznini iste
    SmartNotificationManager.requestPermissionAndStart();
  }, []);

  const handleTogglePlay = () => {
    if (isPlaying) {
      backgroundAudio.pause();
      setIsPlaying(false);
    } else {
      backgroundAudio.playGrammarLesson({
        id: 'grammar-current',
        title: topicTitle,
        topic: topicTitle,
        level: level,
        textScript: topicScript
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-800">
          {level} · Doğal İnsan Anlatımı
        </span>
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-2">{topicTitle}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          💡 Ekranı kapatsanız veya telefonunuzu kilitleseniz de dinlemeye devam edebilirsiniz.
        </p>
      </div>

      <button
        onClick={handleTogglePlay}
        className={`px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-all ${
          isPlaying
            ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-md'
            : 'bg-sky-600 hover:bg-sky-700 text-white shadow-lg'
        }`}
      >
        <span>{isPlaying ? '⏸ Dersi Duraklat' : '🎧 Tane Tane Sesli Dinle'}</span>
      </button>
    </div>
  );
};

export default GrammarAudioPlayer;
