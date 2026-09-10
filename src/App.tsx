import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { MotivationModal } from './components/motivation/MotivationModal';
import { VocabularyEngine } from './components/vocabulary/VocabularyEngine';
import { GrammarTopicList } from './components/grammar/GrammarTopicList';
import { GrammarTopicView } from './components/grammar/GrammarTopicView';
import { GrammarPractice } from './components/grammar/GrammarPractice';
import { YdsExamMode } from './components/yds/YdsExamMode';
import { ErrorNotebook } from './components/errors/ErrorNotebook';
import { ProgressDashboard } from './components/progress/ProgressDashboard';
import { VOCABULARY_DATA } from './data/vocabularyData';
import { VocabularyItem } from './types/vocabulary';
import { GrammarTopic } from './types/grammar';
import { StorageService } from './services/storage';
import { UserProgressState, WordRepetitionState } from './types/spacedRepetition';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'vocabulary' | 'grammar' | 'yds' | 'errors' | 'progress'>('vocabulary');
  const [progress, setProgress] = useState<UserProgressState>(StorageService.getProgress());
  const [wordStates, setWordStates] = useState<Record<string, WordRepetitionState>>(StorageService.getWordStates());
  const [vocabList, setVocabList] = useState<VocabularyItem[]>(VOCABULARY_DATA);
  const [selectedGrammarTopic, setSelectedGrammarTopic] = useState<GrammarTopic | null>(null);
  const [inGrammarPractice, setInGrammarPractice] = useState(false);
  const [showMotivationModal, setShowMotivationModal] = useState(true);

  const handleXpGained = (amount: number) => {
    const updated = StorageService.addXp(amount);
    setProgress(updated);
    setWordStates(StorageService.getWordStates());
  };

  const handleImportWords = (customWords: VocabularyItem[]) => {
    setVocabList(prev => [...customWords, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Header */}
      <Header
        currentView={currentView}
        onSelectView={(view) => {
          setCurrentView(view);
          setSelectedGrammarTopic(null);
          setInGrammarPractice(false);
        }}
        xp={progress.xp}
        level={progress.level}
        streakDays={progress.streakDays}
      />

      {/* Pre-study Motivation Screen ("TODAY'S MISSION") */}
      {showMotivationModal && (
        <MotivationModal
          streakDays={progress.streakDays}
          xp={progress.xp}
          onStartMission={(duration) => {
            setShowMotivationModal(false);
            const current = StorageService.getProgress();
            StorageService.saveProgress({
              totalStudyTimeMinutes: current.totalStudyTimeMinutes + duration
            });
            setProgress(StorageService.getProgress());
          }}
          onClose={() => setShowMotivationModal(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {currentView === 'vocabulary' && (
          <VocabularyEngine
            vocabularyList={vocabList}
            onXpGained={handleXpGained}
          />
        )}

        {currentView === 'grammar' && (
          <div>
            {!selectedGrammarTopic ? (
              <GrammarTopicList
                onSelectTopic={(topic) => setSelectedGrammarTopic(topic)}
              />
            ) : inGrammarPractice ? (
              <GrammarPractice
                topic={selectedGrammarTopic}
                onFinish={() => setInGrammarPractice(false)}
                onXpGained={handleXpGained}
              />
            ) : (
              <GrammarTopicView
                topic={selectedGrammarTopic}
                onStartPractice={() => setInGrammarPractice(true)}
                onBackToList={() => setSelectedGrammarTopic(null)}
              />
            )}
          </div>
        )}

        {currentView === 'yds' && (
          <YdsExamMode onXpGained={handleXpGained} />
        )}

        {currentView === 'errors' && (
          <ErrorNotebook />
        )}

        {currentView === 'progress' && (
          <ProgressDashboard
            progress={progress}
            wordStates={wordStates}
            totalWordsCount={vocabList.length}
            onImportCustomWords={handleImportWords}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            YDS & YDT English Mastery • Yetişkin & Kariyer Odaklı İngilizce Hazırlık Platformu
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>208 YDS Zarfı</span>
            <span>•</span>
            <span>30 Gramer Konusu</span>
            <span>•</span>
            <span>SM-2 Algoritması</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
