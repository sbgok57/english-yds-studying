import { INITIAL_VOCABULARY } from '../src/data/vocabulary';
import { MOTIVATION_MESSAGES } from '../src/data/motivation';
import fs from 'fs';
import path from 'path';

function runContentValidation() {
  console.log('🔍 Starting General Content Validation (Vocabulary & Motivation)...\n');
  let errors = 0;

  // 1. Vocabulary validation
  console.log(`Validating Vocabulary... Total items: ${INITIAL_VOCABULARY.length}`);
  if (INITIAL_VOCABULARY.length < 10) {
    console.error(`❌ ERROR: Vocabulary database too small (${INITIAL_VOCABULARY.length} items).`);
    errors++;
  }

  const seenVocabIds = new Set<string>();
  const seenWords = new Set<string>();

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

  INITIAL_VOCABULARY.forEach((item) => {
    if (seenVocabIds.has(item.id)) {
      console.error(`❌ ERROR: Duplicate vocabulary ID: ${item.id}`);
      errors++;
    }
    seenVocabIds.add(item.id);

    const normWord = item.word.trim().toLowerCase();
    if (seenWords.has(normWord)) {
      console.error(`❌ ERROR: Duplicate vocabulary word: "${item.word}"`);
      errors++;
    }
    seenWords.add(normWord);

    if (!item.meaningsTr || item.meaningsTr.length === 0) {
      console.error(`❌ ERROR: Word "${item.word}" missing Turkish meanings.`);
      errors++;
    }

    if (!validPos.has(item.partOfSpeech)) {
      console.error(`❌ ERROR: Word "${item.word}" invalid partOfSpeech: ${item.partOfSpeech}`);
      errors++;
    }

    if (!item.example || item.example.trim() === '') {
      console.error(`❌ ERROR: Word "${item.word}" missing example sentence.`);
      errors++;
    }

    if (!item.visualMnemonic || item.visualMnemonic.trim() === '') {
      console.error(`❌ ERROR: Word "${item.word}" missing visual mnemonic.`);
      errors++;
    }

    if (!item.pronunciation || item.pronunciation.trim() === '') {
      console.error(`❌ ERROR: Word "${item.word}" missing pronunciation.`);
      errors++;
    }

    if (!['A2', 'B1', 'B2', 'C1', 'YDS'].includes(item.difficulty)) {
      console.error(`❌ ERROR: Word "${item.word}" invalid difficulty: ${item.difficulty}`);
      errors++;
    }

    if (!item.source || item.source.trim() === '') {
      console.error(`❌ ERROR: Word "${item.word}" missing source.`);
      errors++;
    }
  });

  // Check vocabulary.json sync
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

  // 2. Motivation messages validation
  console.log(`\nValidating Motivation Messages... Total items: ${MOTIVATION_MESSAGES.length}`);
  if (MOTIVATION_MESSAGES.length < 50) {
    console.error(
      `❌ ERROR: Expected at least 50 motivational messages, found ${MOTIVATION_MESSAGES.length}`
    );
    errors++;
  }

  const seenMotIds = new Set<string>();
  const shameWords = ['lazy', 'stupid', 'worthless', 'shame', 'guilt', 'tembel', 'utan'];

  MOTIVATION_MESSAGES.forEach((msg) => {
    if (seenMotIds.has(msg.id)) {
      console.error(`❌ ERROR: Duplicate motivation ID: ${msg.id}`);
      errors++;
    }
    seenMotIds.add(msg.id);

    if (!msg.en || msg.en.trim() === '') {
      console.error(`❌ ERROR: Motivation ${msg.id} missing English text.`);
      errors++;
    }
    if (!msg.tr || msg.tr.trim() === '') {
      console.error(`❌ ERROR: Motivation ${msg.id} missing Turkish text.`);
      errors++;
    }

    const combined = `${msg.en} ${msg.tr}`.toLowerCase();
    for (const bad of shameWords) {
      if (combined.includes(bad)) {
        console.error(`❌ ERROR: Prohibited negative/shame word "${bad}" in motivation ${msg.id}`);
        errors++;
      }
    }
  });

  console.log('\n----------------------------------------');
  if (errors > 0) {
    console.error(`💥 Content Validation FAILED with ${errors} error(s).`);
    process.exit(1);
  } else {
    console.log(`✅ All ${INITIAL_VOCABULARY.length} vocabulary items validated with complete metadata.`);
    console.log(`✅ All ${MOTIVATION_MESSAGES.length} motivational messages passed safety and quality rules.`);
    console.log('✅ Content validation SUCCESSFUL!\n');
    process.exit(0);
  }
}

runContentValidation();
