"use client";

import { useEffect, useState } from "react";
import { evaluateGameAnswer, nextGameQuestionIndex } from "@/shared/game-feedback";
import { validateMoleQuestionSet, type MoleQuestion } from "@/shared/mole-game";
export type { MoleQuestion } from "@/shared/mole-game";
import { BackgroundAudioPlayer, type AudioVoiceProfile } from "./BackgroundAudioPlayer";
import { ConfirmDialog } from "./ConfirmDialog";

type Props = {
  questions: readonly MoleQuestion[];
  voiceProfiles?: readonly AudioVoiceProfile[];
  onPrepareAudio?: (
    text: string,
    voiceProfileId: string,
    language: string,
    signal: AbortSignal,
  ) => Promise<{ src: string; title: string; artist?: string; album?: string }>;
  onVoiceProfileChange?: (voiceProfileId: string) => void;
  onComplete?: (result: { correct: number; total: number }) => void;
  onExit?: () => void;
};

type ResultByQuestion = Record<string, "correct" | "incorrect">;

/**
 * Accessible whack-a-mole vocabulary game. Feedback is locked until an explicit
 * "Tamam, anladım" action; neither animation nor a timer advances the question.
 */
export function WhackAMoleGame({
  questions,
  voiceProfiles = [],
  onPrepareAudio,
  onVoiceProfileChange,
  onComplete,
  onExit,
}: Props) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [resultByQuestion, setResultByQuestion] = useState<ResultByQuestion>({});
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [complete, setComplete] = useState(false);
  const [exited, setExited] = useState(false);
  const questionSignature = JSON.stringify(questions.map((item) => item.id));

  useEffect(() => {
    setQuestionIndex(0);
    setSelectedChoiceId(null);
    setResultByQuestion({});
    setComplete(false);
    setExited(false);
    setShowExitDialog(false);
    setShowResetDialog(false);
  }, [questionSignature]);

  const question = questions[questionIndex];
  const selectedChoice = question?.choices.find((choice) => choice.id === selectedChoiceId);
  const correctChoice = question?.choices.find((choice) => choice.id === question.correctChoiceId);
  const feedback = question && selectedChoiceId !== null && correctChoice
    ? evaluateGameAnswer({
      selectedChoiceId,
      correctChoiceId: question.correctChoiceId,
      correctAnswer: correctChoice.label,
      explanation: question.explanation,
    })
    : null;
  const correctCount = Object.values(resultByQuestion).filter((result) => result === "correct").length;
  const dataError = validateMoleQuestionSet(questions);

  function submitAnswer(choiceId: string) {
    if (!question || selectedChoiceId !== null || !question.choices.some((choice) => choice.id === choiceId)) return;
    const correct = choiceId === question.correctChoiceId;
    setSelectedChoiceId(choiceId);
    setResultByQuestion((current) => ({ ...current, [question.id]: correct ? "correct" : "incorrect" }));
  }

  function acknowledgeFeedback() {
    if (!feedback) return;
    const nextIndex = nextGameQuestionIndex(questionIndex, questions.length);
    if (nextIndex === null) {
      setComplete(true);
      onComplete?.({ correct: correctCount, total: questions.length });
      return;
    }
    setQuestionIndex(nextIndex);
    setSelectedChoiceId(null);
  }

  function resetGame() {
    setQuestionIndex(0);
    setSelectedChoiceId(null);
    setResultByQuestion({});
    setComplete(false);
    setExited(false);
    setShowResetDialog(false);
  }

  function leaveGame() {
    setShowExitDialog(false);
    if (onExit) onExit();
    else setExited(true);
  }

  if (questions.length === 0) {
    return <section className="yds-card yds-panel yds-mole-game" aria-label="Köstebek Vur oyunu"><p role="status">Bu oyun için henüz soru eklenmemiş.</p></section>;
  }

  if (exited) {
    return (
      <section className="yds-card yds-panel yds-mole-game" aria-label="Köstebek Vur oyunu">
        <h2>Oyun duraklatıldı</h2>
        <p>İlerlemen bu ekranda kaldı. Devam etmek veya oyunu sıfırlamak için seçim yap.</p>
        <div className="yds-mole-controls">
          <button className="yds-button" type="button" onClick={() => setExited(false)}>Oyuna dön</button>
          <button className="yds-button yds-button-secondary" type="button" onClick={() => setShowResetDialog(true)}>Baştan başlat</button>
        </div>
        <ConfirmDialog open={showResetDialog} title="Oyunu sıfırlamak istiyor musun?" description="Bu turdaki cevaplar ve puan silinecek. Bu işlem geri alınamaz." confirmLabel="Sıfırla" destructive onConfirm={resetGame} onCancel={() => setShowResetDialog(false)} />
      </section>
    );
  }

  if (complete) {
    return (
      <section className="yds-card yds-panel yds-mole-game" aria-label="Köstebek Vur sonuçları">
        <p className="yds-eyebrow">Tur tamamlandı</p>
        <h2>Harika, tur bitti! 🎉</h2>
        <p className="yds-mole-score">{correctCount} / {questions.length} doğru</p>
        <p>Yanıtlarını gözden geçir; yeni tura yalnızca sen başladığında geçilir.</p>
        <div className="yds-mole-controls">
          <button className="yds-button" type="button" onClick={resetGame}>Tekrar oyna</button>
          <button className="yds-button yds-button-secondary" type="button" onClick={() => setShowExitDialog(true)}>Oyundan çık</button>
        </div>
        <ConfirmDialog open={showExitDialog} title="Oyundan çıkmak istiyor musun?" description="Bu tur tamamlandı. Sonuç ekranından ayrılacaksın." confirmLabel="Evet, çık" onConfirm={leaveGame} onCancel={() => setShowExitDialog(false)} />
      </section>
    );
  }

  if (!question) return null;

  return (
    <section className="yds-card yds-panel yds-mole-game" aria-label="Köstebek Vur kelime oyunu">
      <header className="yds-mole-header">
        <div><p className="yds-eyebrow">Kısa tur · kendi hızında</p><h2>Köstebek Vur 🐹</h2></div>
        <div className="yds-mole-controls">
          <button className="yds-button yds-button-secondary" type="button" onClick={() => setShowResetDialog(true)}>Sıfırla</button>
          <button className="yds-button yds-button-secondary" type="button" onClick={() => setShowExitDialog(true)}>Çıkış</button>
        </div>
      </header>
      <div className="yds-mole-progress" aria-label={`Soru ${questionIndex + 1} / ${questions.length}`}>
        <span>Soru {questionIndex + 1} / {questions.length}</span><span>{correctCount} doğru</span>
      </div>
      <div className="yds-mole-progressbar" role="progressbar" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={questionIndex + (feedback ? 1 : 0)} aria-label="Oyun ilerlemesi">
        <span style={{ width: `${((questionIndex + (feedback ? 1 : 0)) / questions.length) * 100}%` }} />
      </div>

      <div className="yds-mole-question" aria-live="polite">
        <p className="yds-eyebrow">Hedef kelime / anlam</p>
        <h3>{question.prompt}</h3>
      </div>

      {question.listening && (
        <BackgroundAudioPlayer
          text={question.listening.text}
          language={question.listening.language}
          title={question.listening.title}
          voiceProfiles={voiceProfiles}
          onPrepareAudio={onPrepareAudio}
          onVoiceProfileChange={onVoiceProfileChange}
        />
      )}

      <div className="yds-mole-field" role="group" aria-label="Cevap seçenekleri; köstebeğe dokunarak cevap ver">
        {question.choices.map((choice, choiceIndex) => {
          const isCorrect = choice.id === question.correctChoiceId;
          const isSelected = choice.id === selectedChoiceId;
          const state = feedback ? isCorrect ? "is-correct" : isSelected ? "is-wrong" : "is-muted" : "";
          return (
            <button
              key={choice.id}
              className={`yds-mole-choice ${state}`}
              type="button"
              disabled={selectedChoiceId !== null}
              onClick={() => submitAnswer(choice.id)}
              aria-label={`Köstebeği vur: ${choice.label}${choice.hint ? `. ${choice.hint}` : ""}`}
              aria-pressed={isSelected}
            >
              <span className="yds-mole-character" aria-hidden="true">🐹</span>
              <strong>{choice.label}</strong>
              {choice.hint && <small>{choice.hint}</small>}
              {feedback && isCorrect && <span className="yds-mole-check" aria-hidden="true">✓ Doğru seçenek</span>}
            </button>
          );
        })}
      </div>

      {feedback && (
        <section className={`yds-mole-feedback is-${feedback.correctness}`} role="status" aria-live="assertive" aria-atomic="true" tabIndex={-1}>
          <p className="yds-eyebrow">{feedback.correctness === "correct" ? "Doğru cevap! 🎉" : "Henüz değil — birlikte düzeltelim"}</p>
          {feedback.showCorrectAnswer && <p className="yds-mole-correct-answer"><strong>Doğru cevap:</strong> {feedback.correctAnswer}</p>}
          <p>{feedback.explanation}</p>
          {selectedChoice && feedback.correctness === "incorrect" && <p className="yds-exam-footnote">Senin seçimin: {selectedChoice.label}</p>}
          <button className="yds-button" type="button" onClick={acknowledgeFeedback}>
            Tamam, anladım
          </button>
          <p className="yds-exam-footnote">Bu geri bildirim ekranda kalır; düğmeye basmadan sonraki soruya geçilmez.</p>
        </section>
      )}

      {!feedback && <p className="yds-exam-footnote">Cevabından sonra doğru/yanlış açıklaması gösterilecek. Hazır olduğunda “Tamam, anladım” düğmesine bas; zamanlayıcı otomatik geçiş yapmaz.</p>}

      <ConfirmDialog
        open={showExitDialog}
        title="Oyundan çıkmak istediğine emin misin?"
        description="Mevcut turdan ayrılacaksın. Cevapların bu ekranda kalır; ilerleme hesabına kaydedilmesi için host uygulamanın kayıt callback'i bağlanmalıdır."
        confirmLabel="Evet, çık"
        cancelLabel="Oyuna dön"
        onConfirm={leaveGame}
        onCancel={() => setShowExitDialog(false)}
      />
      <ConfirmDialog
        open={showResetDialog}
        title="Oyunu sıfırlamak istediğine emin misin?"
        description="Bu turdaki cevaplar ve puan temizlenip ilk soruya dönülecek. Bu işlem geri alınamaz."
        confirmLabel="Sıfırla"
        destructive
        onConfirm={resetGame}
        onCancel={() => setShowResetDialog(false)}
      />
    </section>
  );
}
