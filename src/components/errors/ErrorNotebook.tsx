import React, { useState, useEffect } from 'react';
import { StorageService, RecordedError } from '../../services/storage';
import { speechService } from '../../services/speech';
import { Bookmark, CheckCircle2, RotateCcw, AlertCircle, Sparkles, Filter, Trash2 } from 'lucide-react';

export const ErrorNotebook: React.FC = () => {
  const [errors, setErrors] = useState<RecordedError[]>([]);
  const [activeTab, setActiveTab] = useState<'often_forget' | 'recently_improved'>('often_forget');
  const [filterType, setFilterType] = useState<string>('ALL');

  useEffect(() => {
    setErrors(StorageService.getErrors());
  }, []);

  const handleResolve = (id: string) => {
    StorageService.resolveError(id);
    setErrors(StorageService.getErrors());
    speechService.speakCorrectAnswer("Resolved from errors!");
  };

  const pendingErrors = errors.filter(e => !e.resolved);
  const resolvedErrors = errors.filter(e => e.resolved);

  const displayedList = (activeTab === 'often_forget' ? pendingErrors : resolvedErrors).filter(e => {
    if (filterType === 'ALL') return true;
    return e.itemType === filterType;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 animate-fade-in">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 mb-1">
            <Bookmark className="w-4 h-4" />
            <span>KİŞİSEL GELİŞİM DEFTERİ</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Hata Defterim (Error Notebook)
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Hatalar birer öğrenme fırsatıdır. Sık yanıldığın kelime ve kuralları analiz et.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => setActiveTab('often_forget')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'often_forget'
                ? 'bg-rose-600/30 text-rose-300 border border-rose-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Sık Unuttuklarım ({pendingErrors.length})
          </button>
          <button
            onClick={() => setActiveTab('recently_improved')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'recently_improved'
                ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Düzelttiklerim ({resolvedErrors.length})
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 text-xs">
        {['ALL', 'vocabulary', 'grammar', 'yds_question'].map(f => (
          <button
            key={f}
            onClick={() => setFilterType(f)}
            className={`px-3 py-1.5 rounded-lg border font-semibold transition-all ${
              filterType === f
                ? 'bg-slate-800 text-white border-slate-600'
                : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-700'
            }`}
          >
            {f === 'ALL' ? 'Tümü' : f === 'vocabulary' ? 'Kelime Hataları' : f === 'grammar' ? 'Gramer Hataları' : 'YDS Soruları'}
          </button>
        ))}
      </div>

      {/* Error Items List */}
      {displayedList.length === 0 ? (
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-12 text-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">
            {activeTab === 'often_forget' ? 'Harika! Henüz kaydedilmiş bir hata bulunmuyor.' : 'Henüz çözülen hata yok.'}
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Pratikler esnasında yanlış yaptığınız tüm kelimeler ve gramer yapıları buraya otomatik olarak eklenir.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {displayedList.map(item => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {item.itemType} • {item.category}
                  </span>
                  <span className="text-xs text-slate-500">
                    {new Date(item.timestamp).toLocaleDateString('tr-TR')}
                  </span>
                </div>

                <div className="text-lg font-black text-white">{item.title}</div>

                <div className="text-xs flex flex-wrap items-center gap-3 pt-1">
                  <span className="text-rose-400">Verdiğin Cevap: <span className="font-semibold line-through">{item.userAnswer}</span></span>
                  <span className="text-emerald-400">Doğru Cevap: <span className="font-semibold">{item.correctAnswer}</span></span>
                </div>

                {item.explanationTr && (
                  <p className="text-xs text-slate-400 pt-1">
                    💡 {item.explanationTr}
                  </p>
                )}
              </div>

              {!item.resolved && (
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleResolve(item.id)}
                    className="px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Öğrendim / Düzelttim</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
