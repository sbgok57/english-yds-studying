import assert from "node:assert/strict";
import { GRAMMAR_LESSONS, getGrammarLesson } from "../src/data/grammar-curriculum";

async function runTests() {
  console.log("▶ Running Grammar Curriculum Tests...");

  // 1. Sıfırdan başlayıp sırayla ilerleme testi
  assert.equal(GRAMMAR_LESSONS.length, 24, "Toplam 24 ders olmalıdır");
  assert.deepEqual(
    GRAMMAR_LESSONS.map((lesson) => lesson.order),
    Array.from({ length: 24 }, (_, index) => index + 1),
    "Ders sıra numaraları 1'den 24'e ardışık olmalıdır"
  );
  assert.equal(GRAMMAR_LESSONS[0]?.id, "sentence-order", "İlk ders sentence-order olmalıdır");
  assert.equal(GRAMMAR_LESSONS[0]?.level, "A1", "İlk ders A1 seviyesinde olmalıdır");
  assert.ok(
    GRAMMAR_LESSONS.findIndex((lesson) => lesson.id === "present-simple-positive") <
      GRAMMAR_LESSONS.findIndex((lesson) => lesson.id === "past-simple"),
    "Present Simple, Past Simple'dan önce gelmelidir"
  );

  // 2. Her dersin eksiksiz veri doğrulaması
  const ids = GRAMMAR_LESSONS.map((lesson) => lesson.id);
  assert.equal(new Set(ids).size, ids.length, "Ders ID'leri benzersiz olmalıdır");

  for (const lesson of GRAMMAR_LESSONS) {
    assert.ok(lesson.title.trim().length > 0, `Ders başlığı dolu olmalıdır: ${lesson.id}`);
    assert.ok(lesson.explanation.trim().length > 0, `Açıklama dolu olmalıdır: ${lesson.id}`);
    assert.ok(lesson.pattern.trim().length > 0, `Kalıp dolu olmalıdır: ${lesson.id}`);
    assert.ok(lesson.commonMistake.trim().length > 0, `Sık hata dolu olmalıdır: ${lesson.id}`);
    assert.ok(lesson.examples.length >= 2, `En az 2 örnek bulunmalıdır: ${lesson.id}`);
    assert.ok(
      lesson.examples.every((example) => example.en.trim().length > 0 && example.tr.trim().length > 0),
      `Her örneğin İngilizce ve Türkçe çevirisi olmalıdır: ${lesson.id}`
    );
    assert.ok(lesson.quiz.choices.length >= 2, `Quiz en az 2 seçenek içermelidir: ${lesson.id}`);
    assert.ok(
      lesson.quiz.answerIndex >= 0 && lesson.quiz.answerIndex < lesson.quiz.choices.length,
      `Quiz answerIndex geçerli bir seçenek indeksi olmalıdır: ${lesson.id}`
    );
  }

  // 3. ID sorgulama fonksiyonu
  assert.equal(getGrammarLesson("be-positive")?.title, "To be: am, is, are — olumlu cümle");
  assert.equal(getGrammarLesson("not-a-lesson"), undefined);

  console.log("✔ Grammar Curriculum: 24/24 lessons verified successfully.");
}

runTests().catch((err) => {
  console.error("❌ Grammar Curriculum Test Failure:", err);
  process.exit(1);
});
