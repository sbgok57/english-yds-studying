import { INITIAL_VOCABULARY } from '../src/data/vocabulary';
import { normalizeVocabularyKey } from '../src/services/importer';
import fs from 'fs';
import path from 'path';

function runVocabularyValidation() {
  console.log('🔍 Starting Strict Vocabulary Content & Integrity Validation...\n');
  let errors = 0;

  console.log(`Total static vocabulary items declared: ${INITIAL_VOCABULARY.length}`);
  if (INITIAL_VOCABULARY.length < 400) {
    console.error(`❌ ERROR: Expected at least 400 vocabulary items, found only ${INITIAL_VOCABULARY.length}`);
    errors++;
  }

  const seenIds = new Set<string>();
  const seenNormWords = new Map<string, string>();

  const validPos = new Set([
    'noun',
    'verb',
    'adjective',
    'adverb',
    'preposition',
    'conjunction',
    'phrase',
    'phrasal_verb',
  ]);

  const validDifficulties = new Set(['A2', 'B1', 'B2', 'C1', 'YDS']);

  let quizletCount = 0;
  let pdfCount = 0;
  let csvCount = 0;
  let coreCount = 0;
  let incompleteCount = 0;
  let manualReviewCount = 0;

  INITIAL_VOCABULARY.forEach((item, index) => {
    // 1. ID Check
    if (!item.id || item.id.trim() === '') {
      console.error(`❌ ERROR: Item at index ${index} has empty ID.`);
      errors++;
    } else if (seenIds.has(item.id)) {
      console.error(`❌ ERROR: Duplicate ID detected: "${item.id}"`);
      errors++;
    }
    seenIds.add(item.id);

    // 2. Normalized Word Check
    if (!item.word || item.word.trim() === '') {
      console.error(`❌ ERROR: Item at index ${index} has empty word.`);
      errors++;
      return;
    }

    const norm = normalizeVocabularyKey(item.word);
    if (seenNormWords.has(norm)) {
      console.error(
        `❌ ERROR: Duplicate normalized word detected: "${norm}" (ID: ${item.id}, already seen as ID: ${seenNormWords.get(norm)})`
      );
      errors++;
    }
    seenNormWords.set(norm, item.id);

    // 3. MeaningsTr Check
    if (!item.meaningsTr || !Array.isArray(item.meaningsTr) || item.meaningsTr.length === 0) {
      console.error(`❌ ERROR: Word "${item.word}" has missing or invalid meaningsTr.`);
      errors++;
      incompleteCount++;
    }

    // 4. Part of Speech Check
    if (!validPos.has(item.partOfSpeech)) {
      console.error(`❌ ERROR: Word "${item.word}" has invalid partOfSpeech: "${item.partOfSpeech}"`);
      errors++;
    }

    // 5. Example Sentence Check
    if (!item.example || item.example.trim() === '') {
      console.error(`❌ ERROR: Word "${item.word}" has empty example sentence.`);
      errors++;
      incompleteCount++;
    }

    // 6. Difficulty Check
    if (!validDifficulties.has(item.difficulty)) {
      console.error(`❌ ERROR: Word "${item.word}" has invalid difficulty: "${item.difficulty}"`);
      errors++;
    }

    // 7. Source & SourceRefs Check
    if (!item.source || item.source.trim() === '') {
      console.error(`❌ ERROR: Word "${item.word}" missing source description.`);
      errors++;
    }

    if (item.sourceRefs && Array.isArray(item.sourceRefs)) {
      item.sourceRefs.forEach((ref) => {
        if (!ref.sourceId || !ref.sourceType) {
          console.error(`❌ ERROR: Word "${item.word}" has invalid sourceRef:`, ref);
          errors++;
        }
      });
    }

    // Categorization stats
    const lowerSource = item.source.toLowerCase();
    if (lowerSource.includes('quizlet') || item.sourceRefs?.some((r) => r.sourceType === 'quizlet')) {
      quizletCount++;
    } else if (lowerSource.includes('pdf') || item.sourceRefs?.some((r) => r.sourceType === 'pdf')) {
      pdfCount++;
    } else if (lowerSource.includes('csv') || item.sourceRefs?.some((r) => r.sourceType === 'csv')) {
      csvCount++;
    } else {
      coreCount++;
    }

    if (item.requiresManualReview) {
      manualReviewCount++;
    }
  });

  // 8. vocabulary.json sync check
  try {
    const jsonPath = path.join(process.cwd(), 'src', 'data', 'vocabulary.json');
    if (!fs.existsSync(jsonPath)) {
      console.error('❌ ERROR: src/data/vocabulary.json does not exist.');
      errors++;
    } else {
      const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      if (jsonContent.length !== INITIAL_VOCABULARY.length) {
        console.error(
          `❌ ERROR: vocabulary.json count (${jsonContent.length}) differs from vocabulary.ts (${INITIAL_VOCABULARY.length})`
        );
        errors++;
      }
    }
  } catch (err) {
    console.error('❌ ERROR reading vocabulary.json:', err);
    errors++;
  }

  console.log('\n📊 Vocabulary Dataset Summary:');
  console.log(`  - Total Unique Vocabulary: ${INITIAL_VOCABULARY.length}`);
  console.log(`  - Quizlet Sourced Words:   ${quizletCount}`);
  console.log(`  - Core Academic Words:     ${coreCount}`);
  console.log(`  - PDF Sourced Words:       ${pdfCount}`);
  console.log(`  - CSV Sourced Words:       ${csvCount}`);
  console.log(`  - Incomplete Records:      ${incompleteCount}`);
  console.log(`  - Flagged for Review:      ${manualReviewCount}`);

  console.log('\n----------------------------------------');
  if (errors > 0) {
    console.error(`💥 Vocabulary Content Validation FAILED with ${errors} error(s).`);
    process.exit(1);
  } else {
    console.log(`✅ All ${INITIAL_VOCABULARY.length} vocabulary items passed strict integrity validation!`);
    console.log('✅ Zero duplicate IDs, zero duplicate normalized words, 100% schema compliance.\n');
    process.exit(0);
  }
}

runVocabularyValidation();
