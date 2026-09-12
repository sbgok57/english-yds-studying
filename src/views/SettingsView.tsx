import React, { useState } from 'react';
import { AppSettings } from '../types';
import { dbService, storageService } from '../services/db';
import { speechService } from '../services/speech';
import { PdfVocabularyImporter } from '../services/pdf';
import { exportVocabularyToCsv } from '../services/csv';
import { VocabularyItem } from '../types/vocabulary';
import {
  Settings,
  Volume2,
  Moon,
  Sun,
  Globe,
  Clock,
  CheckCircle2,
  AlertCircle,
  Database,
  Download,
  ShieldCheck,
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

  // Data management & integrity audit states
  const [auditResult, setAuditResult] = useState<{
    validItems: VocabularyItem[];
    repairableItems: VocabularyItem[];
    duplicateItems: VocabularyItem[];
    corruptedItems: VocabularyItem[];
    manualReviewItems: VocabularyItem[];
    backupJson: string;
  } | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditMessage, setAuditMessage] = useState<string | null>(null);

  const handleRunAudit = async () => {
    setIsAuditing(true);
    try {
      const items = await dbService.getAllVocabulary();
      const res = PdfVocabularyImporter.auditVocabularyIntegrity(items);
      setAuditResult(res);
      setAuditMessage(
        res.corruptedItems.length === 0 && res.repairableItems.length === 0
          ? 'Tüm kelime veritabanı sağlam, hatasız ve geçerli.'
          : `${res.corruptedItems.length} bozuk, ${res.repairableItems.length} onarılabilir kayıt tespit edildi.`
      );
    } catch (err) {
      console.warn('Audit error:', err);
      setAuditMessage('Bütünlük denetimi sırasında hata oluştu.');
    } finally {
      setIsAuditing(false);
    }
  };

  const handleExportJson = async () => {
    try {
      const items = await dbService.getAllVocabulary();
      const blob = new Blob([JSON.stringify(items, null, 2)], { type: 'application/json;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ydt_yds_vocabulary_backup_${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      alert('Yedek dışa aktarılırken hata oluştu.');
    }
  };

  const handleExportCsv = async () => {
    try {
      const items = await dbService.getAllVocabulary();
      const csvStr = exportVocabularyToCsv(items);
      const blob = new Blob([csvStr], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ydt_yds_vocabulary_${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      alert('Kelime listesi dışa aktarılırken hata oluştu.');
    }
  };

  const handleCleanCorrupted = async () => {
    if (!auditResult || auditResult.corruptedItems.length === 0) return;
    const confirmed = window.confirm(
      `${auditResult.corruptedItems.length} adet bozuk kayıt silinmeden önce otomatik JSON yedeği indirilecektir. Onaylıyor musunuz?`
    );
    if (!confirmed) return;

    await handleExportJson();

    for (const item of auditResult.corruptedItems) {
      await dbService.deleteVocabularyItem(item.id);
    }

    setAuditMessage(`${auditResult.corruptedItems.length} bozuk kayıt temizlendi. Yedeğiniz indirildi.`);
    await handleRunAudit();
  };

  const handleRepairDropouts = async () => {
    if (!auditResult || auditResult.repairableItems.length === 0) return;
    await dbService.saveVocabularyBatch(auditResult.repairableItems);
    setAuditMessage(`${auditResult.repairableItems.length} kayıt güvenle onarıldı.`);
    await handleRunAudit();
  };

  const audioAvailable = speechService.isAvailable();

  const handleUpdate = <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => {
    const next = { ...settings, [key]: value };
    setSettings(next);
    storageService.saveSettings(next);

    // Apply audio service changes
    if (key === 'voiceEnabled') speechService.setMuted(!value);
    if (key === 'voiceVolume') speechService.setVolume(value as number);
    if (key === 'voiceSpeed') speechService.setDefaultSpeed(value as 'normal' | 'slow');
    if (key === 'voiceGender') speechService.setVoiceGender(value as 'female' | 'male');

    onSettingsUpdated(next);

    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleTestWomanAudio = () => {
    speechService.speakWoman('Hello, this is the academic female voice for YDS and YDT preparation.');
  };

  const handleTestManAudio = () => {
    speechService.speakMan('Hello, this is the academic male voice for YDS and YDT preparation.');
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

            {/* Voice Gender Selection (2 Dedicated Sections: Woman & Man) */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Ses Karakteri Seçimi (Voice Profile)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. Woman Voice Section */}
                <div
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    settings.voiceGender === 'female'
                      ? 'bg-rose-50/60 border-rose-400 dark:bg-rose-950/40 dark:border-rose-700 ring-2 ring-rose-400/20'
                      : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                        Kadın Sesi (Woman Voice)
                      </span>
                      {settings.voiceGender === 'female' && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300">
                          Aktif
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                      Akademik İngilizce ve telaffuz için net, doğal kadın ses profili.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                    <button
                      type="button"
                      onClick={() => handleUpdate('voiceGender', 'female')}
                      className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                        settings.voiceGender === 'female'
                          ? 'bg-rose-600 text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {settings.voiceGender === 'female' ? 'Seçili' : 'Seç'}
                    </button>
                    <button
                      type="button"
                      onClick={handleTestWomanAudio}
                      className="py-1.5 px-3 rounded-xl text-xs font-semibold bg-rose-100 hover:bg-rose-200 dark:bg-rose-900/60 dark:hover:bg-rose-800 text-rose-800 dark:text-rose-200 transition-colors flex items-center gap-1"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Dinle
                    </button>
                  </div>
                </div>

                {/* 2. Man Voice Section */}
                <div
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    settings.voiceGender === 'male'
                      ? 'bg-blue-50/60 border-blue-400 dark:bg-blue-950/40 dark:border-blue-700 ring-2 ring-blue-400/20'
                      : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
                        Erkek Sesi (Man Voice)
                      </span>
                      {settings.voiceGender === 'male' && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                          Aktif
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                      Akademik İngilizce ve telaffuz için tok, anlaşılır erkek ses profili.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                    <button
                      type="button"
                      onClick={() => handleUpdate('voiceGender', 'male')}
                      className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                        settings.voiceGender === 'male'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {settings.voiceGender === 'male' ? 'Seçili' : 'Seç'}
                    </button>
                    <button
                      type="button"
                      onClick={handleTestManAudio}
                      className="py-1.5 px-3 rounded-xl text-xs font-semibold bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/60 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-200 transition-colors flex items-center gap-1"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Dinle
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Test voice button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleTestAudio}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-brand-50 hover:bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300 transition-colors"
              >
                Aktif Sesi Test Et (Test Active Voice)
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

        {/* Data Management & Integrity Repair */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Database className="w-4 h-4 text-brand-500" />
              Veri Yönetimi &amp; Bütünlük (Data Management)
            </h3>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Kelime veritabanınızı yedekleyebilir, dışa aktarabilir veya bozuk PDF/aktarım kayıtlarını güvenle temizleyebilirsiniz.
          </p>

          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={handleExportCsv}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-brand-500" />
              Kelime Listesini Dışa Aktar (CSV)
            </button>

            <button
              type="button"
              onClick={handleExportJson}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-indigo-500" />
              Tam JSON Yedek Al
            </button>

            <button
              type="button"
              onClick={handleRunAudit}
              disabled={isAuditing}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-brand-50 hover:bg-brand-100 dark:bg-brand-950 dark:hover:bg-brand-900 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
              {isAuditing ? 'Denetleniyor...' : 'Kelime Bütünlüğünü Denetle'}
            </button>
          </div>

          {auditMessage && (
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>{auditMessage}</span>
            </div>
          )}

          {auditResult && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs text-slate-400 block">Geçerli</span>
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{auditResult.validItems.length}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs text-slate-400 block">Onarılabilir</span>
                  <span className="text-lg font-bold text-amber-600 dark:text-amber-400">{auditResult.repairableItems.length}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs text-slate-400 block">Bozuk</span>
                  <span className="text-lg font-bold text-rose-600 dark:text-rose-400">{auditResult.corruptedItems.length}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs text-slate-400 block">Mükerrer</span>
                  <span className="text-lg font-bold text-slate-600 dark:text-slate-300">{auditResult.duplicateItems.length}</span>
                </div>
              </div>

              {(auditResult.repairableItems.length > 0 || auditResult.corruptedItems.length > 0) && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {auditResult.repairableItems.length > 0 && (
                    <button
                      type="button"
                      onClick={handleRepairDropouts}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white transition-colors"
                    >
                      Onarılabilirleri Düzelt ({auditResult.repairableItems.length})
                    </button>
                  )}
                  {auditResult.corruptedItems.length > 0 && (
                    <button
                      type="button"
                      onClick={handleCleanCorrupted}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white transition-colors"
                    >
                      Bozuk Kayıtları Temizle ({auditResult.corruptedItems.length})
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
