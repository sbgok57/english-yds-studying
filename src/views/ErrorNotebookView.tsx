import { sanitizeWord } from '../services/wordSanitizer';
import React, { useState } from 'react';
import { ErrorRecord } from '../types';
import { dbService } from '../services/db';
import {
  AlertCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ErrorNotebookViewProps {
  errors: ErrorRecord[];
  onRefreshErrors: () => void;
}

export const ErrorNotebookView: React.FC<ErrorNotebookViewProps> = ({
  errors,
  onRefreshErrors,
}) => {
  const [activeTab, setActiveTab] = useState<'unmastered' | 'improved'>('unmastered');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const unmasteredErrors = errors.filter((e) => !e.mastered);
  const improvedErrors = errors.filter((e) => e.mastered);

  const currentList = activeTab === 'unmastered' ? unmasteredErrors : improvedErrors;

  const filteredErrors = currentList.filter((e) =>
    selectedCategory === 'all' ? true : e.category === selectedCategory
  );

  const handleMarkMastered = async (id: string) => {
    const record = errors.find((e) => e.id === id);
    if (!record) return;

    const updated: ErrorRecord = {
      ...record,
      mastered: true,
      reviewedCount: record.reviewedCount + 1,
      lastReviewedAt: new Date().toISOString(),
    };
    await dbService.saveError(updated);
    onRefreshErrors();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <AlertCircle className="w-7 h-7 text-rose-500" />
          Hata Defteri
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Hatalarınız en değerli öğrenme verinizdir. Yanılgılarınızı inceleyin ve kalıcı öğrenmeye dönüştürün.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4">
        <button
          onClick={() => setActiveTab('unmastered')}
          className={`pb-3 text-xs font-bold transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'unmastered'
              ? 'border-amber-500 text-amber-600 dark:text-amber-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
          }`}
        >
          <AlertCircle className="w-4 h-4" />
          <span>Sık Unuttuklarım ({unmasteredErrors.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('improved')}
          className={`pb-3 text-xs font-bold transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'improved'
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Geliştirdiklerim & Düzeltilenler ({improvedErrors.length})</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 pt-1">
        {[
          { id: 'all', label: 'Tümü' },
          { id: 'meaning', label: 'Kelime Anlamı' },
          { id: 'context', label: 'Bağlam & Cümle' },
          { id: 'grammar_rule', label: 'Gramer Kuralı' },
          { id: 'tense', label: 'Zaman Uyumu' },
          { id: 'connector', label: 'Bağlaç' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat.id
                ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Errors List */}
      {filteredErrors.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <Sparkles className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {activeTab === 'unmastered'
              ? 'Harika! Bekleyen hata kaydınız bulunmuyor.'
              : 'Henüz düzeltilip ustalaşılan bir hata kaydı yok.'}
          </p>
          <p className="text-xs text-slate-400">
            Çözdüğünüz sorulardaki hatalar buraya otomatik olarak analiz edilerek eklenir.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredErrors.map((err) => (
            <div
              key={err.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  {err.category}
                </span>
                <span className="text-[11px] text-slate-400">
                  {new Date(err.failedAt).toLocaleDateString('tr-TR')}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {err.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40">
                  <span className="text-red-700 dark:text-red-300 font-bold block mb-0.5">
                    Verdiğiniz Cevap:
                  </span>
                  <p className="text-red-950 dark:text-red-200 font-mono">{sanitizeWord(err.userAnswer) || err.userAnswer}</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                  <span className="text-emerald-700 dark:text-emerald-300 font-bold block mb-0.5">
                    Doğru Cevap:
                  </span>
                  <p className="text-emerald-950 dark:text-emerald-200 font-mono font-bold">
                    {sanitizeWord(err.correctAnswer) || err.correctAnswer}
                  </p>
                </div>
              </div>

              {err.explanation && (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-semibold block mb-0.5">Öğrenme Notu:</span>
                  <p>{err.explanation}</p>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-1">
                {!err.mastered && (
                  <button
                    onClick={() => handleMarkMastered(err.id)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Şimdi Hatırladım (Düzeltildi)
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
