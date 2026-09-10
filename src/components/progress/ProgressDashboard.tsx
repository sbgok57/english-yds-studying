import React, { useState } from 'react';
import { UserProgressState, WordRepetitionState } from '../../types/spacedRepetition';
import { StorageService } from '../../services/storage';
import { QuizletImporter } from '../../services/quizletImporter';
import { VocabularyItem } from '../../types/vocabulary';
import { 
  BarChart2, 
  Award, 
  Flame, 
  Clock, 
  BookOpen, 
  Download, 
  Upload, 
  CheckCircle2, 
  Sparkles,
  Shield,
  FileText
} from 'lucide-react';

interface ProgressDashboardProps {
  progress: UserProgressState;
  wordStates: Record<string, WordRepetitionState>;
  totalWordsCount: number;
  onImportCustomWords?: (words: VocabularyItem[]) => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  progress,
  wordStates,
  totalWordsCount,
  onImportCustomWords
}) => {
  const [importText, setImportText] = useState('');
  const [importFeedback, setImportFeedback] = useState<string | null>(null);

  // Compute actual mastery distribution from real stored data
  const stateValues = Object.values(wordStates);
  const masteryCounts = {
    new: 0,
    familiar: 0,
    learning: 0,
    strong: 0,
    very_strong: 0,
    mastered: 0
  };

  stateValues.forEach(s => {
    masteryCounts[s.learningStage] = (masteryCounts[s.learningStage] || 0) + 1;
  });

  const remainingUntouched = Math.max(0, totalWordsCount - stateValues.length);
  masteryCounts.new += remainingUntouched;

  const handleExport = () => {
    const jsonStr = StorageService.exportAllData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `yds_study_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleQuizletImport = () => {
    if (!importText.trim()) return;
    const parsed = QuizletImporter.parseQuizletText(importText);
    if (parsed.length > 0) {
      if (onImportCustomWords) {
        onImportCustomWords(parsed);
      }
      setImportFeedback(`Başarılı! ${parsed.length} kelime içe aktarıldı ve kelime havuzunuza eklendi.`);
      setImportText('');
    } else {
      setImportFeedback('Uyarı: Geçerli kelime bulunamadı. Lütfen "Kelime - Anlam" veya Sekme/Virgül formatını kontrol edin.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      {/* Title */}
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 mb-1">
          <BarChart2 className="w-4 h-4" />
          <span>GERÇEK ÇALIŞMA VERİLERİ</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Gelişim Raporu & Seviye Analizi
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Tüm veriler cihazınızın yerel hafızasından doğrudan derlenir; yapay istatistik üretilmez.
        </p>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase mb-1">
            <Award className="w-4 h-4" />
            <span>Toplam XP</span>
          </div>
          <div className="text-3xl font-black text-white">{progress.xp}</div>
          <div className="text-xs text-slate-400 mt-1">Seviye {progress.level} Yetkinlik</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-1">
            <Flame className="w-4 h-4 fill-amber-400" />
            <span>Günlük Seri</span>
          </div>
          <div className="text-3xl font-black text-white">{progress.streakDays} Gün</div>
          <div className="text-xs text-slate-400 mt-1">Kesintisiz Çalışma</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Kelimeler</span>
          </div>
          <div className="text-3xl font-black text-white">{stateValues.length} / {totalWordsCount}</div>
          <div className="text-xs text-slate-400 mt-1">Hafızaya Alınan</div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase mb-1">
            <Clock className="w-4 h-4" />
            <span>Çalışma Süresi</span>
          </div>
          <div className="text-3xl font-black text-white">{progress.totalStudyTimeMinutes} Dk</div>
          <div className="text-xs text-slate-400 mt-1">Odaklanmış Seans</div>
        </div>
      </div>

      {/* Spaced Repetition Mastery Distribution */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>ARALIKLI TEKRAR (SM-2) HAFIZA DAĞILIMI</span>
          </div>
          <span className="text-xs text-slate-400">{totalWordsCount} Kelime Havuzu</span>
        </div>

        <div className="space-y-3">
          {[
            { label: 'Yeni Başlanan (0-19)', count: masteryCounts.new, color: 'bg-slate-700' },
            { label: 'Aşina Olunan (20-39)', count: masteryCounts.familiar, color: 'bg-blue-600' },
            { label: 'Öğrenilmekte (40-59)', count: masteryCounts.learning, color: 'bg-amber-500' },
            { label: 'Güçlü Hafıza (60-79)', count: masteryCounts.strong, color: 'bg-teal-500' },
            { label: 'Çok Güçlü (80-94)', count: masteryCounts.very_strong, color: 'bg-emerald-500' },
            { label: 'Şimdilik Ustalaşıldı (95-100)', count: masteryCounts.mastered, color: 'bg-emerald-400' },
          ].map((bar, i) => {
            const percent = totalWordsCount > 0 ? Math.round((bar.count / totalWordsCount) * 100) : 0;
            return (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs text-slate-300 font-medium">
                  <span>{bar.label}</span>
                  <span className="font-mono text-emerald-400">{bar.count} kelime (%{percent})</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className={`h-full ${bar.color} transition-all duration-500`} style={{ width: `${percent}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quizlet CSV / TSV Import Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-md">
        <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider mb-2">
          <Upload className="w-4 h-4" />
          <span>QUIZLET VEYA CSV İLE YENİ KELİME İÇE AKTAR</span>
        </div>
        <p className="text-xs text-slate-400 mb-4">
          Quizlet klasörünüzden kopyaladığınız satırları buraya yapıştırabilirsiniz. (Örn: "Word \t Türkçe Anlamı" veya "Word - Anlam")
        </p>

        <textarea
          rows={4}
          value={importText}
          onChange={(e) => setImportText(e.target.value)}
          placeholder={`Efficiently\tetkili bir şekilde\nSignificantly\tönemli derecede\nWidely\tyaygın olarak`}
          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-emerald-500 mb-3"
        />

        <div className="flex items-center justify-between">
          <button
            onClick={handleQuizletImport}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-600/30 flex items-center gap-2"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Kelimeleri Yükle</span>
          </button>

          {importFeedback && (
            <span className="text-xs text-emerald-400 font-medium">{importFeedback}</span>
          )}
        </div>
      </div>

      {/* Data Backup / Export */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-white mb-0.5">Çalışma Verilerini Yedekle</div>
          <div className="text-xs text-slate-400">Tüm XP, seriler ve aralıklı tekrar hafıza durumunu JSON dosyası olarak indir.</div>
        </div>

        <button
          onClick={handleExport}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700"
        >
          <Download className="w-4 h-4" />
          <span>Dışa Aktar (Backup)</span>
        </button>
      </div>
    </div>
  );
};
