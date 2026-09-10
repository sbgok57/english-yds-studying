import React, { useState } from 'react';
import { AppSettings } from '../types';
import { storageService } from '../services/db';
import { speechService } from '../services/speech';
import {
  Settings,
  Volume2,
  Moon,
  Sun,
  Globe,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface SettingsViewProps {
  currentSettings: AppSettings;
  onSettingsUpdated: (newSettings: AppSettings) => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  currentSettings,
  onSettingsUpdated,
}) => {
  const [settings, setSettings] = useState<AppSettings>(currentSettings);
  const [savedNotice, setSavedNotice] = useState(false);

  const audioAvailable = speechService.isAvailable();

  const handleUpdate = <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => {
    const next = { ...settings, [key]: value };
    setSettings(next);
    storageService.saveSettings(next);

    // Apply audio service changes
    if (key === 'voiceEnabled') speechService.setMuted(!value);
    if (key === 'voiceVolume') speechService.setVolume(value as number);
    if (key === 'voiceSpeed') speechService.setDefaultSpeed(value as 'normal' | 'slow');

    onSettingsUpdated(next);

    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleTestAudio = () => {
    speechService.speak('This is a test of the academic English voice engine.');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Settings className="w-7 h-7 text-brand-600" />
            Uygulama Ayarları
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Tercihleriniz yerel tarayıcı hafızasında (localStorage) güvenle saklanır.
          </p>
        </div>

        {savedNotice && (
          <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 animate-fadeIn">
            <CheckCircle2 className="w-3.5 h-3.5" /> Kaydedildi
          </span>
        )}
      </div>

      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        {/* Audio / Voice System */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-brand-500" />
            Ses & Telaffuz Sistemi (Web Speech API)
          </h3>

          {!audioAvailable && (
            <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">Tarayıcı Ses Uyarısı:</span>
                <p>Audio is unavailable in this browser. / Bu tarayıcıda ses özelliği kullanılamıyor.</p>
              </div>
            </div>
          )}

          <div className="space-y-3 text-sm">
            {/* Voice toggle */}
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                  Sesli Telaffuz
                </span>
                <span className="text-xs text-slate-400">
                  Kelime ve örnek cümlelerde otomatik veya tıklamayla seslendirme
                </span>
              </div>
              <input
                type="checkbox"
                checked={settings.voiceEnabled}
                onChange={(e) => handleUpdate('voiceEnabled', e.target.checked)}
                className="w-5 h-5 accent-brand-600 cursor-pointer"
              />
            </div>

            {/* Voice speed */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                  Telaffuz Hızı
                </span>
                <span className="text-xs text-slate-400">
                  Normal veya yavaş anlaşılır telaffuz
                </span>
              </div>
              <select
                value={settings.voiceSpeed}
                onChange={(e) =>
                  handleUpdate('voiceSpeed', e.target.value as 'normal' | 'slow')
                }
                className="px-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              >
                <option value="normal">Normal (1.0x)</option>
                <option value="slow">Yavaş / Net (0.7x)</option>
              </select>
            </div>

            {/* Test voice button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleTestAudio}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-brand-50 hover:bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300 transition-colors"
              >
                Sesi Test Et (Test Voice)
              </button>
            </div>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Sun className="w-4 h-4 text-amber-500" />
            Görünüm & Tema
          </h3>

          <div className="grid grid-cols-3 gap-3">
            {[
              { id: 'light', label: 'Açık Tema', icon: Sun },
              { id: 'dark', label: 'Koyu Tema', icon: Moon },
              { id: 'system', label: 'Sistem Teması', icon: Globe },
            ].map((theme) => {
              const Icon = theme.icon;
              const isSelected = settings.theme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleUpdate('theme', theme.id as AppSettings['theme'])}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    isSelected
                      ? 'bg-brand-50 border-brand-500 text-brand-900 dark:bg-brand-950/60 dark:border-brand-500 dark:text-brand-200 font-bold ring-2 ring-brand-500/20'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4 mx-auto mb-1 text-slate-500" />
                  <span className="text-xs block">{theme.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Language Support Level */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-500" />
            Açıklama & Destek Dili
          </h3>

          <div className="space-y-2 text-xs">
            <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer">
              <input
                type="radio"
                name="langSupport"
                checked={settings.languageSupportLevel === 'bilingual'}
                onChange={() => handleUpdate('languageSupportLevel', 'bilingual')}
                className="text-brand-600"
              />
              <div>
                <span className="font-bold text-slate-900 dark:text-slate-100 block">
                  İki Dilli (Bilingual - İngilizce & Türkçe)
                </span>
                <span className="text-slate-400">
                  Her açıklama önce İngilizce, hemen altında Türkçe çevirisi ile sunulur.
                </span>
              </div>
            </label>

            <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer">
              <input
                type="radio"
                name="langSupport"
                checked={settings.languageSupportLevel === 'english_only'}
                onChange={() => handleUpdate('languageSupportLevel', 'english_only')}
                className="text-brand-600"
              />
              <div>
                <span className="font-bold text-slate-900 dark:text-slate-100 block">
                  Sadece İngilizce (English Only)
                </span>
                <span className="text-slate-400">
                  İleri düzey okuma ve tam immersion için Türkçe çeviriler gizlenir.
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Session Duration Default */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-500" />
            Varsayılan Oturum Süresi
          </h3>

          <div className="grid grid-cols-3 gap-3">
            {[
              { val: 5, label: '5 Dakika' },
              { val: 15, label: '15 Dakika (Önerilen)' },
              { val: 30, label: '30 Dakika' },
            ].map((dur) => (
              <button
                key={dur.val}
                onClick={() =>
                  handleUpdate('sessionDurationMinutes', dur.val as 5 | 15 | 30)
                }
                className={`p-3 rounded-2xl border text-center transition-all ${
                  settings.sessionDurationMinutes === dur.val
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-900 dark:bg-indigo-950/60 dark:border-indigo-500 dark:text-indigo-200 font-bold ring-2 ring-indigo-500/20'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span className="text-xs block">{dur.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
