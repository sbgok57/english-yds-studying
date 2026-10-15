import { GRAMMAR_LESSONS, GrammarLesson } from "@/components/grammar/grammar-curriculum";
import { GameModeId, PlayableGameItem, GAME_MODES, GameExamCategory } from "./types";

/**
 * DİL MASTER — 240 Deterministik ve Oynanabilir Gramer Oyunu Üreticisi
 * 
 * 24 Gerçek Müfredat Dersi × 10 Pedagojik Oyun Mekaniği = 240 Tamamlanmış Oyun.
 * YDS, YDT ve YÖKDİL kategorilerine kararlı biçimde eşlenir.
 * Tamamen yerel, pure ve deterministiktir. Sıfır LLM / API gerektirir.
 */

function determineExamCategories(order: number, level: string): GameExamCategory[] {
  // YDS, YDT ve YÖKDİL temel sınav gereksinimleri
  const cats: GameExamCategory[] = ["Genel", "YDS", "YDT", "YÖKDİL"];
  return cats;
}

export function generateAllCurriculumGames(): PlayableGameItem[] {
  const games: PlayableGameItem[] = [];

  for (const lesson of GRAMMAR_LESSONS) {
    const exams = determineExamCategories(lesson.order, lesson.level);
    const ex1 = lesson.examples[0] || { en: "I study English.", tr: "İngilizce çalışırım." };
    const ex2 = lesson.examples[1] || ex1;

    // 1. Çoktan Seçmeli Yapı (Multiple Choice)
    games.push({
      id: `gm-${lesson.id}-mc`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order,
      level: lesson.level,
      mode: "multiple-choice",
      modeTitle: "Çoktan Seçmeli",
      examCategories: exams,
      title: `${lesson.title} — Çoktan Seçmeli Test`,
      instruction: "Aşağıdaki soruyu okuyun ve gramer kuralına en uygun olan doğru seçeneği işaretleyin.",
      prompt: lesson.quiz.prompt,
      choices: [...lesson.quiz.choices],
      correctAnswer: lesson.quiz.choices[lesson.quiz.answerIndex] ?? lesson.quiz.choices[0],
      explanation: lesson.quiz.explanation,
      pattern: lesson.pattern,
      examples: lesson.examples,
      commonMistake: lesson.commonMistake,
      points: 20,
    });

    // 2. Doğru / Yanlış (True / False)
    const mistakeParts = lesson.commonMistake.split("·");
    const wrongSentence = mistakeParts[0]?.replace(/Yanlış:\s*/i, "").trim() || "Reads he books.";
    const correctSentence = mistakeParts[1]?.replace(/Doğru:\s*/i, "").trim() || ex1.en;

    games.push({
      id: `gm-${lesson.id}-tf`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order,
      level: lesson.level,
      mode: "true-false",
      modeTitle: "Doğru / Yanlış",
      examCategories: exams,
      title: `${lesson.title} — Doğruluk Denetimi`,
      instruction: "Verilen İngilizce cümlenin gramer kuralına uygun olup olmadığını (Doğru / Yanlış) belirleyin.",
      prompt: `Cümle: "${wrongSentence}"\nBu cümle İngilizce dilbilgisi kuralına göre DOĞRU mudur?`,
      choices: ["Doğru", "Yanlış"],
      correctAnswer: "Yanlış",
      explanation: `Bu cümle yanlıştır! Doğrusu: "${correctSentence}". Kural: ${lesson.pattern}.`,
      pattern: lesson.pattern,
      examples: lesson.examples,
      commonMistake: lesson.commonMistake,
      points: 15,
    });

    // 3. Eşleştirme (Matching)
    games.push({
      id: `gm-${lesson.id}-match`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order,
      level: lesson.level,
      mode: "matching",
      modeTitle: "Kural & Anlam Eşleştirme",
      examCategories: exams,
      title: `${lesson.title} — Eşleştirme Kartları`,
      instruction: "İngilizce örnek cümle ile Türkçe tam karşılığını eşleştirin.",
      prompt: `"${ex1.en}" cümlesinin doğru Türkçe çevirisini seçin.`,
      choices: [ex1.tr, ex2.tr !== ex1.tr ? ex2.tr : "Farklı bir zaman yapısı", "Ters anlamlı çeviri"],
      correctAnswer: ex1.tr,
      explanation: `"${ex1.en}" ifadesi Türkçe'ye "${ex1.tr}" olarak aktarılır. Kural: ${lesson.pattern}.`,
      pattern: lesson.pattern,
      examples: lesson.examples,
      commonMistake: lesson.commonMistake,
      points: 20,
    });

    // 4. Hatırlama / Flashcard
    games.push({
      id: `gm-${lesson.id}-flashcard`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order,
      level: lesson.level,
      mode: "flashcard",
      modeTitle: "Kalıp Kartı",
      examCategories: exams,
      title: `${lesson.title} — Hafıza & Kalıp Kartı`,
      instruction: "Hedef kuralın şablonunu ve açıklamasını zihninde canlandır, ardından kartı çevirip doğrula.",
      prompt: `Hedef Kalıp: ${lesson.pattern}\nBu kalıbın temel kuralı ve Türkçe mantığı nedir?`,
      choices: [lesson.explanation, "Fiil daima cümlenin başında gelir", "Özne hiçbir zaman kullanılmaz"],
      correctAnswer: lesson.explanation,
      explanation: `${lesson.explanation} Örnek: ${ex1.en} (${ex1.tr})`,
      pattern: lesson.pattern,
      examples: lesson.examples,
      commonMistake: lesson.commonMistake,
      points: 10,
    });

    // 5. Cümle Sıralama (Sentence Order / Word Scramble)
    const rawTokens = ex1.en.replace(/[.,!?]/g, "").split(/\s+/).filter(Boolean);
    const shuffledTokens = [...rawTokens].reverse();
    // Eğer tersi aynıysa ilk ikisini yer değiştir
    if (shuffledTokens.join(" ") === rawTokens.join(" ") && shuffledTokens.length > 1) {
      const temp = shuffledTokens[0];
      shuffledTokens[0] = shuffledTokens[1];
      shuffledTokens[1] = temp;
    }

    games.push({
      id: `gm-${lesson.id}-order`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order,
      level: lesson.level,
      mode: "sentence-order",
      modeTitle: "Cümle Sıralama",
      examCategories: exams,
      title: `${lesson.title} — Sözdizimi Sıralama`,
      instruction: "Karışık sırada verilen sözcükleri gramer kuralına uygun eksiksiz bir cümle haline getirin.",
      prompt: `Türkçe: "${ex1.tr}"\nKelimeler: [ ${shuffledTokens.join("  |  ")} ]`,
      choices: [rawTokens.join(" "), shuffledTokens.join(" "), rawTokens.slice(1).concat(rawTokens[0]).join(" ")],
      correctAnswer: rawTokens.join(" "),
      explanation: `Doğru sözdizimi: "${rawTokens.join(" ")}". İngilizce kuralı: ${lesson.pattern}.`,
      pattern: lesson.pattern,
      examples: lesson.examples,
      commonMistake: lesson.commonMistake,
      points: 25,
    });

    // 6. Boşluk Doldurma (Fill in the Blank)
    // Cümlenin bir sözcüğünü boşluk yap
    const wordsInSentence = ex1.en.replace(/[.,!?]/g, "").split(/\s+/);
    const blankWord = wordsInSentence.length > 1 ? wordsInSentence[1] : wordsInSentence[0];
    const sentenceWithBlank = ex1.en.replace(new RegExp(`\\b${blankWord}\\b`), "_____");

    games.push({
      id: `gm-${lesson.id}-blank`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order,
      level: lesson.level,
      mode: "fill-in-the-blank",
      modeTitle: "Boşluk Doldur",
      examCategories: exams,
      title: `${lesson.title} — Eksik Parçayı Tamamla`,
      instruction: "Cümledeki boşluğa dilbilgisi kuralına göre gelmesi gereken doğru kelimeyi seçin.",
      prompt: `${sentenceWithBlank}\n(Türkçe Anlamı: ${ex1.tr})`,
      choices: [blankWord, blankWord + "s", blankWord + "ing", "is " + blankWord].filter(
        (v, i, a) => a.indexOf(v) === i
      ),
      correctAnswer: blankWord,
      explanation: `Boşluğa "${blankWord}" gelmelidir. Tam cümle: "${ex1.en}".`,
      pattern: lesson.pattern,
      examples: lesson.examples,
      commonMistake: lesson.commonMistake,
      points: 20,
    });

    // 7. Gramer Kalıbı Bul (Pattern Finder)
    games.push({
      id: `gm-${lesson.id}-pattern`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order,
      level: lesson.level,
      mode: "pattern-finder",
      modeTitle: "Kalıp Teşhisi",
      examCategories: exams,
      title: `${lesson.title} — Kural Kalıbını Teşhis Et`,
      instruction: "Verilen örnek cümlenin hangi formüle dayandığını analiz edin.",
      prompt: `Cümle: "${ex2.en}" (${ex2.tr})\nBu cümlenin temel gramer formülü nedir?`,
      choices: [
        lesson.pattern,
        "Verb + Object + Subject",
        "Passive + By Agent Only",
        "Conjunction + Inversion",
      ],
      correctAnswer: lesson.pattern,
      explanation: `Bu cümlenin yapısı "${lesson.pattern}" formülüne dayanır.`,
      pattern: lesson.pattern,
      examples: lesson.examples,
      commonMistake: lesson.commonMistake,
      points: 20,
    });

    // 8. Hafıza Çiftleri (Memory Pair)
    games.push({
      id: `gm-${lesson.id}-memory`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order,
      level: lesson.level,
      mode: "memory-pair",
      modeTitle: "Hafıza Çifti",
      examCategories: exams,
      title: `${lesson.title} — Hafıza Eşleşmesi`,
      instruction: "Kuralın amacını (objective) doğru ders başlığıyla eşleştirerek hafızanı sına.",
      prompt: `Amaç: "${lesson.objective}"\nBu hedef hangi gramer dersine aittir?`,
      choices: [
        lesson.title,
        "Gelecek Zaman & Will Kalıbı",
        "Edilgen Çatı (Passive Voice)",
        "Dolaylı Anlatım (Reported Speech)",
      ],
      correctAnswer: lesson.title,
      explanation: `"${lesson.objective}" hedefi doğrudan "${lesson.title}" konusunun merkezindedir.`,
      pattern: lesson.pattern,
      examples: lesson.examples,
      commonMistake: lesson.commonMistake,
      points: 15,
    });

    // 9. Hata Dedektifi (Error Detective / Spot the Mistake)
    games.push({
      id: `gm-${lesson.id}-detective`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order,
      level: lesson.level,
      mode: "error-detective",
      modeTitle: "Hata Dedektifi",
      examCategories: exams,
      title: `${lesson.title} — Sınav Tuzağı Dedektifi`,
      instruction: "ÖSYM ve akademik sınavlarda sıkça kurulan bu gramer tuzağındaki yanlışı tespit edin.",
      prompt: `İnceleme Notu: "${lesson.commonMistake}"\nBu tuzaktan kaçınmak için doğru kullanım hangisidir?`,
      choices: [correctSentence, wrongSentence, "Her iki kullanım da kabul edilir"],
      correctAnswer: correctSentence,
      explanation: `Tuzak Çözümü: ${lesson.commonMistake}`,
      pattern: lesson.pattern,
      examples: lesson.examples,
      commonMistake: lesson.commonMistake,
      points: 25,
    });

    // 10. Takım Quiz Tahtası (Team Quiz Board)
    games.push({
      id: `gm-${lesson.id}-board`,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order,
      level: lesson.level,
      mode: "team-quiz-board",
      modeTitle: "Puanlı Quiz Tahtası",
      examCategories: exams,
      title: `${lesson.title} — 30 Puanlık Master Sorusu`,
      instruction: "Öğrenilen tüm kuralları birleştiren bu final sorusunu çözerek 30 bonus puanı hanene yazdır.",
      prompt: `Ders ${lesson.order}: ${lesson.title}\n"${ex2.tr}" anlamına gelen hatasız cümle hangisidir?`,
      choices: [ex2.en, ex1.en !== ex2.en ? ex1.en : "Not a valid English sentence", "Sentence without proper verb"],
      correctAnswer: ex2.en,
      explanation: `Tebrikler! Doğru cümle: "${ex2.en}". Kural: ${lesson.pattern}.`,
      pattern: lesson.pattern,
      examples: lesson.examples,
      commonMistake: lesson.commonMistake,
      points: 30,
    });
  }

  return games;
}

// Global Önbellek (Tekil üretim, deterministik sonuç)
let _cachedGames: PlayableGameItem[] | null = null;

export function getCurriculumGames(): PlayableGameItem[] {
  if (!_cachedGames) {
    _cachedGames = generateAllCurriculumGames();
  }
  return _cachedGames;
}

export function getGameById(id: string): PlayableGameItem | undefined {
  return getCurriculumGames().find((g) => g.id === id);
}
