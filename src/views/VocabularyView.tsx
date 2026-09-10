import React, { useState } from 'react';
import { VocabularyItem, LearningState } from '../types';
import { getMasteryLevelInfo } from '../services/mastery';
import { speechService } from '../services/speech';
import { exportVocabularyToCsv } from '../services/csv';
import { dbService } from '../services/db';
import { createInitialLearningState } from '../services/spacedRepetition';
import { CsvModal } from '../components/CsvModal';
import {
  Search,
  Volume2,
  Download,
  Upload,
  BookmarkPlus,
  Check,
  Lightbulb,
} from 'lucide-react';

interface VocabularyViewProps {
  vocabulary: VocabularyItem[];
  learningStates: Map<string, LearningState>;
  onRefreshData: () => void;
  onStartWordTest?: (item: VocabularyItem) => void;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({
  vocabulary,
  learningStates,
  onRefreshData,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  // Filter vocabulary
  const filteredVocabulary = vocabulary.filter((item) => {
    const matchesSearch =
      item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaningsTr.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesPos = selectedPos === 'all' || item.partOfSpeech === selectedPos;
    const matchesDiff =
      selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;

    return matchesSearch && matchesPos && matchesDiff;
  });

  const handlePronounce = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    speechService.speak(word, { lang: 'en-US' });
  };

  const handleAddToReview = async (item: VocabularyItem, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const existing = await dbService.getLearningState(item.id);
      if (!existing) {
        const newState = createInitialLearningState(item.id);
        await dbService.saveLearningState(newState);
      }
      setAddedItems((prev) => new Set(prev).add(item.id));
      onRefreshData();
    } catch (err) {
      console.warn('Failed to add to review queue:', err);
    }
  };

  const handleExportCsv = () => {
    const csvData = exportVocabularyToCsv(vocabulary);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ydt_yds_vocabulary_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            Akademik Kelime Bankası
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Toplam {vocabulary.length} YDT & YDS kelimesi, hafıza ipuçları ve aralıklı tekrar desteği.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setIsCsvModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-brand-50 hover:bg-brand-100 dark:bg-brand-950/60 dark:hover:bg-brand-900 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 transition-all shadow-sm"
          >
            <Upload className="w-3.5 h-3.5" /> CSV İçe Aktar
          </button>
          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" /> CSV Dışa Aktar
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-stretch md:items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="İngilizce kelime veya Türkçe anlam ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          />
        </div>

        {/* Part of speech filter */}
        <select
          value={selectedPos}
          onChange={(e) => setSelectedPos(e.target.value)}
          className="px-3 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="all">Tüm Sözcük Türleri</option>
          <option value="noun">Noun (İsim)</option>
          <option value="verb">Verb (Fiil)</option>
          <option value="adjective">Adjective (Sıfat)</option>
          <option value="adverb">Adverb (Zarf)</option>
          <option value="phrasal_verb">Phrasal Verb (Deyimsel Fiil)</option>
          <option value="conjunction">Conjunction (Bağlaç)</option>
        </select>

        {/* Difficulty filter */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-3 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="all">Tüm Seviyeler</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
          <option value="YDS">YDS</option>
        </select>
      </div>

      {/* Vocabulary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredVocabulary.map((item) => {
          const state = learningStates.get(item.id);
          const mastery = state?.mastery ?? 0;
          const levelInfo = getMasteryLevelInfo(mastery);
          const isAdded = addedItems.has(item.id) || !!state;

          return (
            <div
              key={item.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Card Header: Word, Pronunciation, POS badge, Mastery badge */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-slate-900 dark:text-slate-100">
                        {item.word}
                      </h3>
                      <button
                        onClick={(e) => handlePronounce(item.word, e)}
                        aria-label={`${item.word} telaffuzunu dinle`}
                        className="p-1 rounded-full text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-xs text-slate-400 font-mono block">
                      {item.pronunciation}
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {item.partOfSpeech}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${levelInfo.colorClass}`}>
                      {levelInfo.labelTr} (%{mastery})
                    </span>
                  </div>
                </div>

                {/* Turkish Meaning */}
                <div className="my-2.5">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {item.meaningsTr.join(', ')}
                  </p>
                </div>

                {/* Example Sentence */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 my-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <p className="italic font-medium text-slate-800 dark:text-slate-200">
                    "{item.example}"
                  </p>
                  {item.exampleTr && (
                    <p className="text-slate-400 mt-1">{item.exampleTr}</p>
                  )}
                </div>

                {/* Synonyms & Collocations */}
                <div className="space-y-1.5 text-xs">
                  {item.synonyms && item.synonyms.length > 0 && (
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Eş Anlam: </span>
                      <span className="text-slate-600 dark:text-slate-300 font-medium">
                        {item.synonyms.slice(0, 3).join(', ')}
                      </span>
                    </div>
                  )}

                  {item.collocations && item.collocations.length > 0 && (
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Eşdizim: </span>
                      <span className="text-slate-600 dark:text-slate-300 font-medium">
                        {item.collocations.slice(0, 2).join(' • ')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Visual Mnemonic */}
                {item.visualMnemonic && (
                  <div className="mt-3 p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-900/50 flex items-start gap-2 text-[11px] text-amber-900 dark:text-amber-200">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <p>{item.visualMnemonic}</p>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-400 uppercase">
                  Kaynak: {item.source}
                </span>

                <button
                  onClick={(e) => handleAddToReview(item, e)}
                  disabled={isAdded}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isAdded
                      ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 cursor-default'
                      : 'bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-300 hover:bg-brand-100'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Listemde
                    </>
                  ) : (
                    <>
                      <BookmarkPlus className="w-3.5 h-3.5" /> Tekrara Ekle
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredVocabulary.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Arama kriterlerinize uygun kelime bulunamadı.
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Filtreleri sıfırlayarak tüm kelime veritabanını görüntüleyebilirsiniz.
          </p>
        </div>
      )}

      {/* CSV Import Modal */}
      <CsvModal
        isOpen={isCsvModalOpen}
        onClose={() => setIsCsvModalOpen(false)}
        existingVocabulary={vocabulary}
        onImportComplete={() => {
          onRefreshData();
          setIsCsvModalOpen(false);
        }}
      />
    </div>
  );
};
