import React, { useState, useEffect, useCallback } from 'react';
import {
  VocabularyItem,
  LearningState,
  UserProgress,
  StudySession,
  ErrorRecord,
  GrammarProgress,
  YdsAttempt,
  Achievement,
  AppSettings,
} from './types';
import { dbService, storageService } from './services/db';
import { INITIAL_VOCABULARY } from './data/vocabulary';
import { ALL_GRAMMAR_ACTIVITIES } from './data/grammar';
import { INITIAL_ACHIEVEMENTS } from './services/gamification';
import { Navbar, ActiveTab } from './components/layout/Navbar';
import { DashboardView } from './views/DashboardView';
import { StudySessionView } from './views/StudySessionView';
import { VocabularyView } from './views/VocabularyView';
import { GrammarView } from './views/GrammarView';
import { YdsView } from './views/YdsView';
import { ErrorNotebookView } from './views/ErrorNotebookView';
import { ProgressView } from './views/ProgressView';
import { SettingsView } from './views/SettingsView';
import { ErrorBoundary } from './components/common/ErrorBoundary';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [sessionMode, setSessionMode] = useState<
    'daily_mission' | 'quick_review' | 'standard' | 'deep_practice'
  >('daily_mission');

  const [isLoading, setIsLoading] = useState(true);
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>([]);
  const [learningStates, setLearningStates] = useState<Map<string, LearningState>>(new Map());
  const [grammarProgress, setGrammarProgress] = useState<Map<string, GrammarProgress>>(new Map());
  const [userProgress, setUserProgress] = useState<UserProgress>({
    xp: 0,
    level: 1,
    dailyStreak: 0,
    weeklyStreak: 0,
    lastActiveDate: new Date().toISOString().split('T')[0],
    totalStudyTimeMinutes: 0,
    perfectSessions: 0,
  });
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [errors, setErrors] = useState<ErrorRecord[]>([]);
  const [ydsAttempts, setYdsAttempts] = useState<YdsAttempt[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>(INITIAL_ACHIEVEMENTS);
  const [settings, setSettings] = useState<AppSettings>(storageService.getSettings());

  // Hash-based routing synchronization (Ensures back/forward and deep linking works without 404s)
  useEffect(() => {
    const handleHashChange = () => {
      const raw = window.location.hash.replace('#', '');
      const validTabs: ActiveTab[] = [
        'dashboard',
        'study_session',
        'vocabulary',
        'grammar',
        'yds',
        'errors',
        'progress',
        'settings',
      ];
      if (validTabs.includes(raw as ActiveTab)) {
        setActiveTab(raw as ActiveTab);
      } else {
        setActiveTab('dashboard');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  // Central Load Data Function
  const loadData = useCallback(async () => {
    try {
      await dbService.init();

      // 1. Vocabulary
      let vocabs = await dbService.getAllVocabulary();
      if (vocabs.length === 0) {
        // Seed initial curated vocabulary
        await dbService.saveVocabularyBatch(INITIAL_VOCABULARY);
        vocabs = INITIAL_VOCABULARY;
      }
      setVocabulary(vocabs);

      // 2. Learning States
      const states = await dbService.getAllLearningStates();
      const stateMap = new Map<string, LearningState>();
      states.forEach((s) => stateMap.set(s.vocabularyId, s));
      setLearningStates(stateMap);

      // 3. Grammar Progress
      const gpList = await dbService.getAllGrammarProgress();
      const gpMap = new Map<string, GrammarProgress>();
      gpList.forEach((g) => gpMap.set(g.topicId, g));
      setGrammarProgress(gpMap);

      // 4. User Progress
      const prog = await dbService.getUserProgress();
      setUserProgress(prog);

      // 5. Sessions
      const sess = await dbService.getAllSessions();
      setSessions(sess);

      // 6. Errors
      const errs = await dbService.getAllErrors();
      setErrors(errs);

      // 7. YDS Attempts
      const yds = await dbService.getAllYdsAttempts();
      setYdsAttempts(yds);

      // 8. Achievements
      const achs = await dbService.getAllAchievements();
      if (achs.length > 0) {
        setAchievements(achs);
      }

      setIsLoading(false);
    } catch (err) {
      console.warn('Error loading application database:', err);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Apply Dark Mode Class
  useEffect(() => {
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (settings.theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // System
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [settings.theme]);

  const handleStartSession = (
    mode: 'daily_mission' | 'quick_review' | 'standard' | 'deep_practice'
  ) => {
    setSessionMode(mode);
    navigateToTab('study_session');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            YDT & YDS Master hazırlanıyor...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar
        activeTab={activeTab}
        setActiveTab={navigateToTab}
        userProgress={userProgress}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <ErrorBoundary>
          {activeTab === 'dashboard' && (
            <DashboardView
              userProgress={userProgress}
              vocabulary={vocabulary}
              learningStates={learningStates}
              grammarProgress={grammarProgress}
              recentSessions={sessions}
              errors={errors}
              onNavigate={navigateToTab}
              onStartSession={handleStartSession}
            />
          )}

          {activeTab === 'study_session' && (
            <StudySessionView
              initialMode={sessionMode}
              allVocabulary={vocabulary}
              learningStates={learningStates}
              userProgress={userProgress}
              allGrammarActivities={ALL_GRAMMAR_ACTIVITIES}
              onSessionComplete={() => {
                loadData();
              }}
              onExit={() => navigateToTab('dashboard')}
            />
          )}

          {activeTab === 'vocabulary' && (
            <VocabularyView
              vocabulary={vocabulary}
              learningStates={learningStates}
              onRefreshData={loadData}
            />
          )}

          {activeTab === 'grammar' && (
            <GrammarView
              grammarProgress={grammarProgress}
              allVocabulary={vocabulary}
              onProgressUpdate={loadData}
            />
          )}

          {activeTab === 'yds' && (
            <YdsView
              userProgress={userProgress}
              onRefreshProgress={loadData}
            />
          )}

          {activeTab === 'errors' && (
            <ErrorNotebookView
              errors={errors}
              onRefreshErrors={loadData}
            />
          )}

          {activeTab === 'progress' && (
            <ProgressView
              userProgress={userProgress}
              sessions={sessions}
              learningStates={learningStates}
              grammarProgress={grammarProgress}
              ydsAttempts={ydsAttempts}
              achievements={achievements}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsView
              currentSettings={settings}
              onSettingsUpdated={(newSet) => setSettings(newSet)}
            />
          )}
        </ErrorBoundary>
      </main>
    </div>
  );
};
