export type AnswerFeedback = {
  correctness: "correct" | "incorrect";
  showCorrectAnswer: boolean;
  correctAnswer: string;
  explanation: string;
};

/** Build explicit feedback that stays visible until the learner acknowledges it. */
export function evaluateGameAnswer(input: {
  selectedChoiceId: string;
  correctChoiceId: string;
  correctAnswer: string;
  explanation: string;
}): AnswerFeedback {
  const correctness = input.selectedChoiceId === input.correctChoiceId ? "correct" : "incorrect";
  return {
    correctness,
    showCorrectAnswer: correctness === "incorrect",
    correctAnswer: input.correctAnswer,
    explanation: input.explanation,
  };
}

/** Return the next index only when the learner explicitly advances. */
export function nextGameQuestionIndex(currentIndex: number, questionCount: number): number | null {
  if (!Number.isInteger(currentIndex) || !Number.isInteger(questionCount) || questionCount < 1) return null;
  if (currentIndex < 0 || currentIndex >= questionCount - 1) return null;
  return currentIndex + 1;
}

/** Clamp a page to a valid range. Useful for large, paginated exercise catalogs. */
export function clampPage(page: number, totalItems: number, pageSize: number): number {
  if (!Number.isFinite(page) || !Number.isFinite(totalItems) || !Number.isFinite(pageSize) || pageSize < 1 || totalItems < 1) return 0;
  const pageCount = Math.ceil(totalItems / pageSize);
  return Math.max(0, Math.min(pageCount - 1, Math.trunc(page)));
}
