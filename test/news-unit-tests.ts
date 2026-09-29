// ============================================================
// test/news-unit-tests.ts
// YDS Master — Gündem Haberleri Motoru Birim Testleri
// ============================================================

import {
  generateNewsArticle,
  getNewsArticleById,
  getNewsArticleBySlug,
  getNewsArticles,
  TOTAL_NEWS_COUNT,
} from "../src/lib/news/engine";
import { NEWS_CATEGORIES } from "../src/lib/news/categories";

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAIL: ${msg}`);
    process.exit(1);
  } else {
    console.log(`✅ PASS: ${msg}`);
  }
}

console.log("🚀 [TEST:NEWS] Running English News Hub & Engine Unit Tests...\n");

// 1. Scale check: Must have > 2000 articles
assert(TOTAL_NEWS_COUNT >= 2000, `Must provide at least 2000 news articles (found ${TOTAL_NEWS_COUNT})`);

// 2. Categories count
assert(NEWS_CATEGORIES.length === 8, `Must have exactly 8 distinct news categories (found ${NEWS_CATEGORIES.length})`);

// 3. Article structural validation
const sampleIndices = [0, 42, 99, 500, 1199, 1800, 2399];
for (const idx of sampleIndices) {
  const article = generateNewsArticle(idx);

  assert(Boolean(article.id), `Article #${idx} must have an ID`);
  assert(Boolean(article.titleEn && article.titleEn.length > 5), `Article #${idx} must have an English title`);
  assert(Boolean(article.titleTr && article.titleTr.length > 5), `Article #${idx} must have a Turkish title`);
  assert(article.paragraphs.length >= 2, `Article #${idx} must have at least 2 paragraphs (found ${article.paragraphs.length})`);

  // Verify newspaper clipping
  assert(Boolean(article.newspaperClipping.paperName), `Article #${idx} must have a newspaper masthead name`);
  assert(Boolean(article.newspaperClipping.edition), `Article #${idx} must have an edition string`);

  // Verify key vocabulary and synonyms
  assert(article.keyVocabulary.length >= 2, `Article #${idx} must have at least 2 key vocabulary items`);
  for (const vocab of article.keyVocabulary) {
    assert(Boolean(vocab.word), `Vocabulary in article #${idx} must have word`);
    assert(Boolean(vocab.meaningTr), `Vocabulary in article #${idx} must have meaningTr`);
    assert(Array.isArray(vocab.synonymsEn) && vocab.synonymsEn.length > 0, `Vocabulary in article #${idx} must have synonyms`);
    assert(Boolean(vocab.exampleSentenceEn), `Vocabulary in article #${idx} must have exampleSentenceEn`);
    assert(Boolean(vocab.exampleSentenceTr), `Vocabulary in article #${idx} must have exampleSentenceTr`);
  }
}

// 4. Pagination & Filtering test
const pageResult = getNewsArticles({ page: 1, limit: 24, category: "all", level: "all" });
assert(pageResult.totalCount === TOTAL_NEWS_COUNT, `Default totalCount must equal TOTAL_NEWS_COUNT (${TOTAL_NEWS_COUNT})`);
assert(pageResult.articles.length === 24, `Page size must be 24 (found ${pageResult.articles.length})`);
assert(pageResult.totalPages === 100, `Total pages for 2400 articles with limit 24 must be 100 (found ${pageResult.totalPages})`);
assert(pageResult.hasNextPage === true, "Page 1 must have next page");
assert(pageResult.hasPrevPage === false, "Page 1 must not have prev page");

// 5. Category filter test
const techResult = getNewsArticles({ category: "technology", limit: 10 });
assert(techResult.totalCount === TOTAL_NEWS_COUNT / 8, `Category filter must yield 300 articles (found ${techResult.totalCount})`);
assert(techResult.articles.every((a) => a.category === "technology"), "All returned articles must be in technology category");

// 6. Direct lookup by ID
const artById = getNewsArticleById("news-0042");
assert(artById !== undefined, "Article news-0042 must be found by ID");
assert(artById?.id === "news-0042", "Returned article must have ID news-0042");

// 7. Direct lookup by Slug
const artBySlug = getNewsArticleBySlug(artById!.slug);
assert(artBySlug !== undefined, "Article must be found by slug");
assert(artBySlug?.id === "news-0042", "Returned article must match slug");

console.log("\n🎉 [TEST:NEWS] All English News Hub unit tests passed successfully!\n");
