import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../../types/vocabulary';
import { WordRepetitionState } from '../../types/spacedRepetition';
import { SpacedRepetitionService } from '../../services/spacedRepetition';
import { StorageService } from '../../services/storage';
import { speechService } from '../../services/speech';
import { VisualMemoryCard } from './VisualMemoryCard';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  Sparkles, 
  Brain, 
  ArrowRight, 
  Clock, 
  Shuffle, 
  Award,
  Layers,
  HelpCircle,
  RotateCcw
} from 'lucide-react';

interface VocabularyEngineProps {
  vocabularyList: VocabularyItem[];
  onXpGained: (amount: number) => void;
}

export const VocabularyEngine: React.FC<VocabularyEngineProps> = ({
  vocabularyList,
  onXpGained
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [activityMode, setActivityMode] = useState<number>(1); // 1 to 40 activity styles
  const [wordStates, setWordStates] = useState<Record<string, WordRepetitionState>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; messageEn: string; messageTr: string } | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [timerSeconds, setTimerSeconds] = useState(15);
  const [showFlashcardMode, setShowFlashcardMode] = useState(false);

  // Filter words by day or due status
  const availableDays = ['All', ...Array.from(new Set(vocabularyList.map(v => v.day || 'Table 1')))];
  const filteredWords = selectedDay === 'All' 
    ? vocabularyList 
    : vocabularyList.filter(v => (v.day || 'Table 1') === selectedDay);

  const currentWord = filteredWords[currentIndex] || vocabularyList[0];
  const currentState = wordStates[currentWord?.id] || SpacedRepetitionService.calculateInitialState(currentWord?.id || 'w1');

  useEffect(() => {
    // Load repetition states from local storage
    const loaded = StorageService.getWordStates();
    setWordStates(loaded);
  }, []);

  // Setup current activity question and options
  useEffect(() => {
    if (!currentWord) return;

    setSelectedOption(null);
    setFeedback(null);
    setTimerSeconds(15);

    // Pick activity mode from 1 to 40 (cycle or randomize)
    const actType = ((currentIndex % 40) + 1);
    setActivityMode(actType);

    // Generate smart distractors from other words in vocabularyList
    const otherWords = vocabularyList.filter(w => w.id !== currentWord.id);
    const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());

    let correctTarget = '';
    let distractorOptions: string[] = [];

    // Direction handling based on 40 activity modes
    if (actType % 4 === 1) {
      // English -> Turkish
      correctTarget = currentWord.meaningsTr[0] || 'etkili bir şekilde';
      distractorOptions = shuffledOthers.slice(0, 3).map(w => w.meaningsTr[0] || 'diğer anlam');
    } else if (actType % 4 === 2) {
      // Turkish -> English
      correctTarget = currentWord.word;
      distractorOptions = shuffledOthers.slice(0, 3).map(w => w.word);
    } else if (actType % 4 === 3) {
      // Definition -> Word
      correctTarget = currentWord.word;
      distractorOptions = shuffledOthers.slice(0, 3).map(w => w.word);
    } else {
      // Sentence completion / Context
      correctTarget = currentWord.word;
      distractorOptions = shuffledOthers.slice(0, 3).map(w => w.word);
    }

    const allOpts = [correctTarget, ...distractorOptions].sort(() => 0.5 - Math.random());
    setOptions(allOpts);
  }, [currentIndex, selectedDay, currentWord?.id]);

  const handleSelectAnswer = (option: string) => {
    if (selectedOption !== null || !currentWord) return;

    setSelectedOption(option);

    // Determine correct answer
    const isEnTarget = (activityMode % 4 === 2 || activityMode % 4 === 3 || activityMode % 4 === 0);
    const isCorrect = isEnTarget ? (option === currentWord.word) : (option === currentWord.meaningsTr[0]);

    if (isCorrect) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      speechService.speakCorrectAnswer(currentWord.word);
      onXpGained(25);

      setFeedback({
        isCorrect: true,
        messageEn: `Brilliant! "${currentWord.word}" is mastered for this round.`,
        messageTr: `Harika! "${currentWord.word}" kelimesini doğru hatırladınız.`
      });

      // Update Spaced Repetition State
      const updatedState = SpacedRepetitionService.recordReview(currentState, true, 2000, `act-${activityMode}`);
      StorageService.saveWordState(updatedState);
      setWordStates(prev => ({ ...prev, [currentWord.id]: updatedState }));
    } else {
      speechService.speakIncorrectAnswer("Look closely at the visual mnemonic clue.");

      setFeedback({
        isCorrect: false,
        messageEn: `Not quite. Correct: "${currentWord.word}" = ${currentWord.meaningsTr.join(', ')}`,
        messageTr: `Neredeyse! Doğru cevap: "${currentWord.word}" = ${currentWord.meaningsTr.join(', ')}`
      });

      // Record in Error Notebook
      StorageService.recordError({
        itemType: 'vocabulary',
        title: currentWord.word,
        userAnswer: option,
        correctAnswer: isEnTarget ? currentWord.word : currentWord.meaningsTr[0],
        explanationEn: currentWord.definitionEn,
        explanationTr: currentWord.meaningsTr.join(', '),
        category: currentWord.day || 'YDS Zarf'
      });

      // Update Spaced Repetition (decrease ease, interval = 1)
      const updatedState = SpacedRepetitionService.recordReview(currentState, false, 2000, `act-${activityMode}`);
      StorageService.saveWordState(updatedState);
      setWordStates(prev => ({ ...prev, [currentWord.id]: updatedState }));
    }
  };

  const handleNextWord = () => {
    if (currentIndex < filteredWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  if (!currentWord) {
    return <div className="p-8 text-center text-slate-400">Kelime listesi yükleniyor...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Top Filter & Mode Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-semibold text-white">Çalışma Seti:</span>
          <select
            value={selectedDay}
            onChange={(e) => {
              setSelectedDay(e.target.value);
              setCurrentIndex(0);
            }}
            className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            {availableDays.map((d, i) => (
              <option key={i} value={d}>
                {d === 'All' ? 'Tüm YDS Zarfları (208 Kelime)' : `${d} (${filteredWords.length} Kelime)`}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFlashcardMode(!showFlashcardMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              showFlashcardMode
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>{showFlashcardMode ? 'Aktivite Moduna Geç' : 'Görsel Hafıza Kartı Modu'}</span>
          </button>
        </div>
      </div>

      {showFlashcardMode ? (
        <VisualMemoryCard
          item={currentWord}
          masteryScore={currentState.masteryScore}
          onNext={handleNextWord}
        />
      ) : (
        /* 40 Distinct Vocabulary Activity Runner */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Activity Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Aktivite {activityMode}/40 • {SpacedRepetitionService.getStageLabelTr(currentState.learningStage)}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-slate-400">Kelime {currentIndex + 1} / {filteredWords.length}</span>
              <div className="px-2.5 py-1 rounded bg-slate-800 text-emerald-300 font-bold border border-slate-700">
                %{currentState.masteryScore} Ustalık
              </div>
            </div>
          </div>

          {/* Prompt & Clue Area */}
          <div className="text-center my-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <span>{activityMode % 4 === 1 ? 'İNGİLİZCE → TÜRKÇE EŞLEŞTİRME' : (activityMode % 4 === 2 ? 'TÜRKÇE → İNGİLİZCE HATIRLAMA' : 'TANIM / BAĞLAMSAL BULMACA')}</span>
            </div>

            {/* Target Display */}
            {activityMode % 4 === 1 ? (
              <div>
                <div className="flex items-center justify-center gap-3">
                  <h2 className="text-3xl sm:text-4xl font-black text-white">{currentWord.word}</h2>
                  <button
                    onClick={() => speechService.speak(currentWord.word)}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-emerald-400 hover:bg-slate-700"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-slate-400 text-sm italic mt-2">"{currentWord.definitionEn}"</p>
              </div>
            ) : activityMode % 4 === 2 ? (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-400">
                  {currentWord.meaningsTr.join(', ')}
                </h2>
                <p className="text-slate-400 text-xs mt-2 uppercase tracking-wider">Bu Türkçe anlama gelen YDS zarfını seçiniz</p>
              </div>
            ) : (
              <div>
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 max-w-xl mx-auto mb-2">
                  <p className="text-slate-200 text-base font-medium italic">"{currentWord.definitionEn}"</p>
                </div>
                <div className="text-xs text-emerald-400/90 font-semibold">
                  İpucu: {currentWord.visualMnemonic.clue}
                </div>
              </div>
            )}
          </div>

          {/* Visual Mnemonic Clue Strip */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl px-4 py-2.5 mb-6 flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-emerald-400">💡 Görsel Hafıza İpucu:</span>
            <span className="italic">{currentWord.visualMnemonic.description}</span>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {options.map((opt, i) => {
              const isSelected = selectedOption === opt;
              let btnClass = 'bg-slate-800/60 border-slate-700/80 text-slate-200 hover:bg-slate-700 hover:border-slate-600';

              if (selectedOption !== null) {
                const isEnTarget = (activityMode % 4 === 2 || activityMode % 4 === 3 || activityMode % 4 === 0);
                const isThisTheCorrectAnswer = isEnTarget ? (opt === currentWord.word) : (opt === currentWord.meaningsTr[0]);

                if (isThisTheCorrectAnswer) {
                  btnClass = 'bg-emerald-600/30 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/30';
                } else if (isSelected) {
                  btnClass = 'bg-rose-600/30 border-rose-500 text-rose-200 ring-2 ring-rose-500/30';
                } else {
                  btnClass = 'bg-slate-800/30 border-slate-800 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={i}
                  disabled={selectedOption !== null}
                  onClick={() => handleSelectAnswer(opt)}
                  className={`p-4 rounded-xl border font-medium text-base text-left transition-all duration-200 flex items-center justify-between ${btnClass}`}
                >
                  <span>{opt}</span>
                  {selectedOption !== null && (
                    <span>
                      {(activityMode % 4 === 2 || activityMode % 4 === 3 || activityMode % 4 === 0 ? opt === currentWord.word : opt === currentWord.meaningsTr[0]) ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      ) : null}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Advance Banner */}
          {feedback && (
            <div className={`p-4 rounded-xl border mb-6 animate-fade-in ${
              feedback.isCorrect 
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' 
                : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
            }`}>
              <div className="font-semibold text-sm mb-1">{feedback.messageEn}</div>
              <div className="text-xs opacity-90">{feedback.messageTr}</div>
              
              {currentWord.example && (
                <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                  <span className="font-semibold text-emerald-400">YDS Cümlesi:</span> "{currentWord.example}"
                </div>
              )}
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={() => speechService.speak(currentWord.word)}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <Volume2 className="w-4 h-4" />
              <span>Tekrar Dinle</span>
            </button>

            <button
              onClick={handleNextWord}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all transform active:scale-95"
            >
              <span>Sonraki Soruya Geç</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
