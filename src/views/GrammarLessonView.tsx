import React, { useState } from 'react';
import {
  GrammarTopic,
  GrammarLesson,
  GrammarActivity,
  GrammarProgress,
  VocabularyItem,
} from '../types';
import { SentenceBlocks } from '../components/grammar/SentenceBlocks';
import { Timeline } from '../components/grammar/Timeline';
import { CommonMistakeCard } from '../components/grammar/CommonMistakeCard';
import { MicroPracticeCard } from '../components/grammar/MicroPracticeCard';
import { ClickableVocabularyModal } from '../components/grammar/ClickableVocabularyModal';
import {
  ExampleSentenceCard,
  MemoryTrickCard,
} from '../components/grammar/visuals';
import { dbService } from '../services/db';
import { speechService } from '../services/speech';
import {
  ArrowLeft,
  BookOpen,
  Cpu,
  Layers,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
} from 'lucide-react';

interface GrammarLessonViewProps {
  topic: GrammarTopic;
  lesson: GrammarLesson;
  activities: GrammarActivity[];
  progress?: GrammarProgress;
  allVocabulary: VocabularyItem[];
  onBack: () => void;
  onProgressUpdate: () => void;
}

export const GrammarLessonView: React.FC<GrammarLessonViewProps> = ({
  topic,
  lesson,
  activities,
  progress,
  allVocabulary,
  onBack,
  onProgressUpdate,
}) => {
  const [activeTab, setActiveTab] = useState<'lecture' | 'visuals' | 'examples' | 'yds' | 'activities'>('lecture');
  const [selectedVocabItem, setSelectedVocabItem] = useState<VocabularyItem | null>(null);

  // Activities tab state
  const [activityIndex, setActivityIndex] = useState(0);
  const [selectedActAnswer, setSelectedActAnswer] = useState<string | null>(null);
  const [isActSubmitted, setIsActSubmitted] = useState(false);
  const [completedActCount, setCompletedActCount] = useState(progress?.completedActivitiesCount ?? 0);
  const [actCorrectCount, setActCorrectCount] = useState(progress?.correctCount ?? 0);

  const currentActivity = activities[activityIndex];

  const handleSelectActivityAnswer = async (opt: string) => {
    if (isActSubmitted && selectedActAnswer === currentActivity.correctAnswer) return;

    setSelectedActAnswer(opt);
    setIsActSubmitted(true);

    const isCorrect = opt === currentActivity.correctAnswer;
    const newCorrect = isCorrect ? actCorrectCount + 1 : actCorrectCount;
    const newCompleted = Math.max(completedActCount, activityIndex + 1);

    if (isCorrect) {
      speechService.speakCorrectAnswer('Correct answer!');
      setActCorrectCount(newCorrect);
    } else {
      speechService.speakIncorrectAnswer('Incorrect, check the explanation.');
    }

    setCompletedActCount(newCompleted);

    // Update and persist grammar progress
    const rawMastery = Math.round((newCorrect / activities.length) * 100);
    const updatedProgress: GrammarProgress = {
      topicId: topic.id,
      mastery: Math.min(100, Math.max(0, rawMastery)),
      completedActivitiesCount: newCompleted,
      correctCount: newCorrect,
      incorrectCount: (progress?.incorrectCount ?? 0) + (isCorrect ? 0 : 1),
      lessonCompleted: newCompleted >= activities.length,
      lastStudiedAt: new Date().toISOString(),
    };

    await dbService.saveGrammarProgress(updatedProgress);
    onProgressUpdate();
  };

  const handleNextActivity = () => {
    if (activityIndex < activities.length - 1) {
      setActivityIndex((prev) => prev + 1);
      setSelectedActAnswer(null);
      setIsActSubmitted(false);
    }
  };

  const handleWordClick = (word: string) => {
    const clean = word.toLowerCase().trim();
    const found = allVocabulary.find((v) => v.word.toLowerCase() === clean);
    if (found) {
      setSelectedVocabItem(found);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Back button and Topic Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          aria-label="Gramer Konularına Dön"
          className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            {topic.level.replace('_', ' ')} • DERS {topic.order}
          </span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
            {topic.title}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">{topic.titleTr}</p>
        </div>
      </div>

      {/* Navigation Tabs (Progressive Disclosure) */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto gap-2">
        {[
          { id: 'lecture', label: '1. Konu Anlatımı', icon: BookOpen },
          { id: 'visuals', label: '2. Görsel Şema & Hatalar', icon: Layers },
          { id: 'examples', label: '3. Örnekler & Kelimeler', icon: Cpu },
          { id: 'yds', label: '4. YDS Odak & Taktikler', icon: Award },
          { id: 'activities', label: `5. Alıştırmalar (${activities.length})`, icon: CheckCircle2 },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 text-xs font-bold transition-all shrink-0 ${
                isActive
                  ? 'border-brand-600 text-brand-600 dark:text-brand-400 bg-brand-50/50 dark:bg-brand-950/20'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: Konu Anlatımı */}
      {activeTab === 'lecture' && (
        <div className="space-y-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm animate-fadeIn">
          {/* Introduction & Why it matters */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Bu Konu Nedir & Neden Önemlidir?
            </h3>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {lesson.introduction.en}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                {lesson.introduction.tr}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-1 text-xs">
              <span className="font-bold text-indigo-900 dark:text-indigo-300 block uppercase tracking-wider">
                🎯 Sınav Stratejisi (Why it matters)
              </span>
              <p className="text-slate-800 dark:text-slate-200">{lesson.whyItMatters.en}</p>
              <p className="text-slate-500 dark:text-slate-400 italic">{lesson.whyItMatters.tr}</p>
            </div>
          </div>

          {/* Basic Structure & Sentence Blocks */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
              Temel Cümle Mimarisi
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-1">
              {lesson.basicStructure.explanationEn}
            </p>
            <p className="text-xs text-slate-400 italic mb-2">
              {lesson.basicStructure.explanationTr}
            </p>
            <SentenceBlocks
              pattern={lesson.basicStructure.pattern}
              blocks={lesson.basicStructure.formulaBlocks}
            />
          </div>

          {/* Positive, Negative, Questions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            {/* Positive */}
            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block mb-1">
                (+) Olumlu Yapı
              </span>
              <p className="text-xs font-mono text-emerald-950 dark:text-emerald-200 font-semibold mb-2">
                {lesson.positive.structure}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                {lesson.positive.explanationTr}
              </p>
              {lesson.positive.examples[0] && (
                <div className="text-xs p-2 rounded bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-950">
                  <p className="italic">"{lesson.positive.examples[0].en}"</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{lesson.positive.examples[0].tr}</p>
                </div>
              )}
            </div>

            {/* Negative */}
            <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40">
              <span className="text-xs font-bold text-red-800 dark:text-red-300 block mb-1">
                (-) Olumsuz Yapı
              </span>
              <p className="text-xs font-mono text-red-950 dark:text-red-200 font-semibold mb-2">
                {lesson.negative.structure}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                {lesson.negative.explanationTr}
              </p>
              {lesson.negative.examples[0] && (
                <div className="text-xs p-2 rounded bg-white dark:bg-slate-900 border border-red-100 dark:border-red-950">
                  <p className="italic">"{lesson.negative.examples[0].en}"</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{lesson.negative.examples[0].tr}</p>
                </div>
              )}
            </div>

            {/* Questions */}
            <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
              <span className="text-xs font-bold text-blue-800 dark:text-blue-300 block mb-1">
                (?) Soru Yapısı
              </span>
              <p className="text-xs font-mono text-blue-950 dark:text-blue-200 font-semibold mb-2">
                {lesson.questions.structure}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                {lesson.questions.explanationTr}
              </p>
              {lesson.questions.examples[0] && (
                <div className="text-xs p-2 rounded bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-950">
                  <p className="italic">"{lesson.questions.examples[0].en}"</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{lesson.questions.examples[0].tr}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Görsel Şema & Hatalar */}
      {activeTab === 'visuals' && (
        <div className="space-y-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm animate-fadeIn">
          {/* Visual Explanation Timeline/Diagram */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              Görsel Süreç & Mantıksal Akış
            </h3>
            <Timeline
              titleEn={lesson.visualExplanation.titleEn}
              titleTr={lesson.visualExplanation.titleTr}
              steps={lesson.visualExplanation.steps}
            />
          </div>

          {/* Signal Words */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Zaman & Sinyal Kelimeleri (Signal Words)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {lesson.signalWords.map((s, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                >
                  <span className="font-bold text-brand-600 dark:text-brand-400 text-sm block mb-0.5 font-mono">
                    {s.word}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                    {s.meaningTr}
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 italic">{s.noteTr}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <CommonMistakeCard mistakes={lesson.commonMistakes} />
        </div>
      )}

      {/* TAB 3: Örnekler & Kelimeler */}
      {activeTab === 'examples' && (
        <div className="space-y-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm animate-fadeIn">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
              Akademik Örnek Cümleler
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Vurgulu kelimelere tıklayarak sözlük ve hafıza ipuçlarını inceleyebilirsiniz.
            </p>

            <div className="space-y-3">
              {lesson.examples.map((ex, idx) => (
                <ExampleSentenceCard
                  key={idx}
                  en={ex.en}
                  tr={ex.tr}
                  context={ex.context}
                  highlightedWords={ex.highlightedWords}
                  onWordClick={handleWordClick}
                />
              ))}
            </div>
          </div>

          {/* Clickable Vocabulary references */}
          {lesson.vocabulary && lesson.vocabulary.length > 0 && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                Bu Derste Geçen Önemli Kelimeler (Vocabulary Integration)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lesson.vocabulary.map((voc, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleWordClick(voc.word)}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-brand-400 transition-all flex items-center justify-between"
                  >
                    <div>
                      <span className="font-bold text-slate-900 dark:text-slate-100 text-sm block">
                        {voc.word}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {voc.meaningTr}
                      </span>
                    </div>
                    <span className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold underline">
                      İncele →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: YDS Odak & Taktikler */}
      {activeTab === 'yds' && (
        <div className="space-y-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm animate-fadeIn">
          {/* YDS Connection (A2, B1, YDS level progression) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              YDS Bu Konuyu Nasıl Kullanır? (How YDS Uses This)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {lesson.ydsConnection.descriptionTr}
            </p>

            <div className="space-y-3">
              {/* A2 Example */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1">
                  Seviye 1: A2 Köprü Örneği
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  "{lesson.ydsConnection.a2Example.en}"
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{lesson.ydsConnection.a2Example.tr}</p>
                <p className="text-xs text-slate-400 italic mt-1">
                  💡 {lesson.ydsConnection.a2Example.explanation}
                </p>
              </div>

              {/* B1 Example */}
              <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40">
                <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase block mb-1">
                  Seviye 2: B1 Temel Örneği
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  "{lesson.ydsConnection.b1Example.en}"
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{lesson.ydsConnection.b1Example.tr}</p>
                <p className="text-xs text-blue-600 dark:text-blue-300 italic mt-1">
                  💡 {lesson.ydsConnection.b1Example.explanation}
                </p>
              </div>

              {/* YDS Exam Example */}
              <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40">
                <span className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase block mb-1">
                  Seviye 3: Gerçek YDS Sınav Seviyesi
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  "{lesson.ydsConnection.ydsExample.en}"
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{lesson.ydsConnection.ydsExample.tr}</p>
                <p className="text-xs text-purple-600 dark:text-purple-300 italic mt-1">
                  💡 {lesson.ydsConnection.ydsExample.explanation}
                </p>
              </div>
            </div>
          </div>

          {/* Memory Tricks */}
          {lesson.memoryTricks && lesson.memoryTricks.length > 0 && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                Akılda Tutma İpuçları (Memory Tricks)
              </h4>
              {lesson.memoryTricks.map((trick, idx) => (
                <MemoryTrickCard
                  key={idx}
                  title={trick.title}
                  mnemonicEn={trick.mnemonicEn}
                  mnemonicTr={trick.mnemonicTr}
                />
              ))}
            </div>
          )}

          {/* Micro Practices */}
          {lesson.microPractices && lesson.microPractices.length > 0 && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                Ders İçi Mikro Alıştırmalar
              </h4>
              {lesson.microPractices.map((mp) => (
                <MicroPracticeCard key={mp.id} practice={mp} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 5: Alıştırmalar (25 Soru) */}
      {activeTab === 'activities' && currentActivity && (
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
              Soru {activityIndex + 1} / {activities.length} ({currentActivity.difficulty})
            </span>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                ✓ {actCorrectCount} Doğru
              </span>
              <span className="text-slate-400">
                Tamamlanan: {completedActCount} / {activities.length}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-rainbow-stripe transition-all duration-300"
              style={{ width: `${((activityIndex + 1) / activities.length) * 100}%` }}
            ></div>
          </div>

          {/* Question stem */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
              {currentActivity.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentActivity.options.map((opt, idx) => {
              let optStyle =
                'w-full text-left p-4 rounded-2xl border text-sm font-medium transition-all flex items-center justify-between ';

              if (!isActSubmitted) {
                optStyle +=
                  'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-400 text-slate-800 dark:text-slate-200 shadow-sm';
              } else {
                if (opt === currentActivity.correctAnswer) {
                  optStyle +=
                    'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold shadow-sm';
                } else if (opt === selectedActAnswer) {
                  optStyle +=
                    'bg-red-50 dark:bg-red-950/60 border-red-400 text-red-900 dark:text-red-200';
                } else {
                  optStyle +=
                    'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-50 text-slate-500 dark:text-slate-400';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectActivityAnswer(opt)}
                  disabled={isActSubmitted && selectedActAnswer === currentActivity.correctAnswer}
                  className={optStyle}
                >
                  <span>{opt}</span>
                  {isActSubmitted && opt === currentActivity.correctAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
                  )}
                  {isActSubmitted &&
                    opt === selectedActAnswer &&
                    opt !== currentActivity.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 ml-2" />
                    )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Explanations */}
          {isActSubmitted && (
            <div
              className={`p-4 rounded-2xl text-xs space-y-1.5 animate-fadeIn ${
                selectedActAnswer === currentActivity.correctAnswer
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                  : 'bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm flex items-center gap-1.5">
                  {selectedActAnswer === currentActivity.correctAnswer ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 🎉 Harika! Doğru Cevap
                    </>
                  ) : (
                    <>
                      <HelpCircle className="w-4 h-4 text-amber-600" /> Çözüm & Açıklama
                    </>
                  )}
                </span>
                {selectedActAnswer !== currentActivity.correctAnswer && (
                  <button
                    onClick={() => {
                      setSelectedActAnswer(null);
                      setIsActSubmitted(false);
                    }}
                    className="flex items-center gap-1 font-semibold text-amber-700 dark:text-amber-300 hover:underline"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Tekrar Dene
                  </button>
                )}
              </div>
              <p className="font-medium">{currentActivity.explanationEn}</p>
              <p className="italic opacity-90">{currentActivity.explanationTr}</p>
            </div>
          )}

          {/* Next Button */}
          {isActSubmitted && activityIndex < activities.length - 1 && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextActivity}
                className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition-all"
              >
                Sonraki Soru ({activityIndex + 2} / {activities.length}) →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Vocabulary Modal for clicked words */}
      {selectedVocabItem && (
        <ClickableVocabularyModal
          item={selectedVocabItem}
          isOpen={!!selectedVocabItem}
          onClose={() => setSelectedVocabItem(null)}
        />
      )}
    </div>
  );
};
