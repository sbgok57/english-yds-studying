export type MoleGameMode = "term-to-meaning" | "meaning-to-term";
export type MoleChoice = { id: string; label: string; hint?: string };
export type MoleListening = { text: string; title: string; language: string };
export type MoleQuestion = {
  id: string;
  prompt: string;
  correctChoiceId: string;
  choices: readonly MoleChoice[];
  explanation: string;
  listening?: MoleListening;
};
export type MoleLexeme = {
  id: string;
  term: string;
  meaningTr: string;
  exampleEn?: string;
  language?: string;
};

export function validateMoleQuestionSet(questions: readonly MoleQuestion[]): string | null {
  const questionIds = new Set<string>();
  for (const question of questions) {
    if (!question.id.trim() || questionIds.has(question.id)) return "Her sorunun boş olmayan, benzersiz bir kimliği olmalı.";
    questionIds.add(question.id);
    if (!question.prompt.trim() || !question.explanation.trim()) return "Her soruda soru metni ve açıklama bulunmalı.";
    if (question.choices.length < 2 || question.choices.length > 6) return "Her soruda 2–6 arası seçenek olmalı.";
    const choiceIds = new Set(question.choices.map((choice) => choice.id));
    if (question.choices.some((choice) => !choice.id.trim() || !choice.label.trim()) || choiceIds.size !== question.choices.length) {
      return "Her cevap seçeneğinin dolu ve benzersiz kimliği/metni olmalı.";
    }
    if (!choiceIds.has(question.correctChoiceId)) return "Doğru cevap, seçenekler arasında bulunmalı.";
    if (question.listening && (!question.listening.text.trim() || !question.listening.language.trim())) {
      return "Listening içeriğinde metin ve dil etiketi bulunmalı.";
    }
  }
  return null;
}

function normalized(value: string): string {
  return value.normalize("NFKC").trim().toLocaleLowerCase("en-US");
}

function shuffle<T>(values: readonly T[], random: () => number): T[] {
  const output = [...values];
  for (let index = output.length - 1; index > 0; index -= 1) {
    const raw = random();
    const bounded = Number.isFinite(raw) ? Math.max(0, Math.min(0.999999999, raw)) : 0;
    const swapIndex = Math.floor(bounded * (index + 1));
    [output[index], output[swapIndex]] = [output[swapIndex]!, output[index]!];
  }
  return output;
}

/** Create multiple-choice whack-a-mole rounds from the learner's authorized vocabulary. */
export function buildMoleQuestions(
  words: readonly MoleLexeme[],
  mode: MoleGameMode = "term-to-meaning",
  random: () => number = Math.random,
  choicesPerQuestion = 4,
): MoleQuestion[] {
  const seenIds = new Set<string>();
  const lexemes = words.filter((word) => {
    const valid = Boolean(word.id.trim() && word.term.trim() && word.meaningTr.trim());
    if (!valid || seenIds.has(word.id)) return false;
    seenIds.add(word.id);
    return true;
  });
  const boundedChoiceCount = Number.isInteger(choicesPerQuestion) ? Math.max(2, Math.min(6, choicesPerQuestion)) : 4;
  const questions: MoleQuestion[] = [];

  for (const target of lexemes) {
    const labelFor = (word: MoleLexeme) => mode === "term-to-meaning" ? word.meaningTr.trim() : word.term.trim();
    const targetLabel = labelFor(target);
    const distractors = shuffle(lexemes.filter((candidate) =>
      candidate.id !== target.id && normalized(labelFor(candidate)) !== normalized(targetLabel)), random);
    const picked = [target, ...distractors.slice(0, boundedChoiceCount - 1)];
    if (picked.length < 2) continue;
    const choices = shuffle(picked, random).map((word) => ({
      id: word.id,
      label: labelFor(word),
      ...(mode === "term-to-meaning" ? { hint: word.term } : {}),
    }));
    const prompt = mode === "term-to-meaning"
      ? `“${target.term}” kelimesinin Türkçe anlamını seç.`
      : `“${target.meaningTr}” anlamına gelen İngilizce kelimeyi seç.`;
    const explanation = `${target.term} = ${target.meaningTr}${target.exampleEn ? `. Örnek: ${target.exampleEn}` : ""}`;
    questions.push({
      id: `mole-${target.id}`,
      prompt,
      correctChoiceId: target.id,
      choices,
      explanation,
      ...(target.exampleEn ? { listening: { text: target.exampleEn, title: `${target.term} · örnek cümle`, language: target.language ?? "en-GB" } } : {}),
    });
  }
  return questions;
}
