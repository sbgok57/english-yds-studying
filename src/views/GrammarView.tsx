import React, { useState } from 'react';
import {
  GRAMMAR_TOPICS,
  LESSONS_BY_TOPIC_ID,
  ACTIVITIES_BY_TOPIC_ID,
} from '../data/grammar';
import {
  GrammarTopic,
  GrammarProgress,
  VocabularyItem,
} from '../types';
import { GrammarLessonView } from './GrammarLessonView';
import {
  Sparkles,
  CheckCircle2,
  Lock,
} from 'lucide-react';

interface GrammarViewProps {
  grammarProgress: Map<string, GrammarProgress>;
  allVocabulary: VocabularyItem[];
  onProgressUpdate: () => void;
}

export const GrammarView: React.FC<GrammarViewProps> = ({
  grammarProgress,
  allVocabulary,
  onProgressUpdate,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(null);
  const [activeCategory, setActiveCategory] = useState<
    'ALL' | 'FOUNDATION' | 'CORE' | 'INTERMEDIATE' | 'YDS_GRAMMAR'
  >('ALL');

  if (selectedTopic) {
    const lesson = LESSONS_BY_TOPIC_ID.get(selectedTopic.id);
    const activities = ACTIVITIES_BY_TOPIC_ID.get(selectedTopic.id) || [];
    const progress = grammarProgress.get(selectedTopic.id);

    if (lesson) {
      return (
        <GrammarLessonView
          topic={selectedTopic}
          lesson={lesson}
          activities={activities}
          progress={progress}
          allVocabulary={allVocabulary}
          onBack={() => setSelectedTopic(null)}
          onProgressUpdate={onProgressUpdate}
        />
      );
    }
  }

  const categories = [
    { id: 'ALL', label: 'Tüm Konular (28)' },
    { id: 'FOUNDATION', label: '1. Foundation (Temel)' },
    { id: 'CORE', label: '2. Core (Çekirdek)' },
    { id: 'INTERMEDIATE', label: '3. Intermediate (Orta)' },
    { id: 'YDS_GRAMMAR', label: '4. YDS Grammar (İleri)' },
  ] as const;

  const filteredTopics = GRAMMAR_TOPICS.filter((t) =>
    activeCategory === 'ALL' ? true : t.level === activeCategory
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
            Gramer Mimarisi & Konu Yol Haritası
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            28 kapsamlı gramer konusu, görsel formül blokları ve her konuda en az 25 sınav sorusu.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold border border-brand-200 dark:border-brand-800">
          <Sparkles className="w-4 h-4 text-brand-500" />
          <span>Toplam 700 Sınav Alıştırması</span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === cat.id
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTopics.map((t) => {
          const prog = grammarProgress.get(t.id);
          const mastery = prog?.mastery ?? 0;
          const completedCount = prog?.completedActivitiesCount ?? 0;
          const isDone = prog?.lessonCompleted || mastery >= 80;

          // Check prerequisites
          const prereqsSatisfied = t.prerequisites.every((reqId) => {
            const reqProg = grammarProgress.get(reqId);
            return (reqProg?.mastery ?? 0) >= 60 || reqProg?.lessonCompleted;
          });

          return (
            <div
              key={t.id}
              onClick={() => setSelectedTopic(t)}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-400 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    Konu {t.order} • {t.level.replace('_', ' ')}
                  </span>
                  {isDone ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Tamamlandı
                    </span>
                  ) : !prereqsSatisfied && t.prerequisites.length > 0 ? (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                      <Lock className="w-3 h-3" /> Ön Koşullu
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400">
                      %{mastery} Başarı
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1 leading-snug">
                  {t.title}
                </h3>
                <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2">
                  {t.titleTr}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                  {t.description}
                </p>
              </div>

              {/* Progress bar and activity indicator */}
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Tamamlanan: {completedCount} / 25 Soru</span>
                  <span className="font-bold">%{mastery}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isDone ? 'bg-emerald-500' : 'bg-brand-500'
                    }`}
                    style={{ width: `${mastery}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
