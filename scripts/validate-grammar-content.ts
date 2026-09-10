import { GRAMMAR_TOPICS } from '../src/data/grammarData';

interface ValidationError {
  topicId: string;
  field: string;
  message: string;
}

const REQUIRED_TOPIC_IDS = [
  'be',
  'pronouns',
  'articles',
  'present-simple',
  'present-continuous',
  'past-simple',
  'future-forms',
  'present-perfect',
  'past-perfect',
  'modal-verbs',
  'comparatives',
  'superlatives',
  'quantifiers',
  'gerunds-infinitives',
  'passive-voice',
  'conditionals',
  'relative-clauses',
  'noun-clauses',
  'adverb-clauses',
  'reported-speech',
  'linking-words',
  'prepositions',
  'advanced-tenses',
  'inversion',
  'participles',
  'reduced-clauses',
  'advanced-connectors',
  'sentence-completion',
  'cloze-grammar',
  'mixed-yds-grammar'
];

function validateGrammarContent() {
  console.log('🔍 Starting comprehensive Grammar Content Validation...\n');
  const errors: ValidationError[] = [];
  const globalActivityIds = new Set<string>();
  const globalQuestionTexts = new Set<string>();

  // 1. Verify all 30 topics exist
  const existingIds = new Set(GRAMMAR_TOPICS.map(t => t.id));
  for (const reqId of REQUIRED_TOPIC_IDS) {
    if (!existingIds.has(reqId)) {
      errors.push({ topicId: reqId, field: 'topic_existence', message: `Missing required topic: "${reqId}"` });
    }
  }

  // 2. Validate every topic's 19 required structural sections and activities
  for (const topic of GRAMMAR_TOPICS) {
    const tid = topic.id;

    // Lesson & Title
    if (!topic.title || !topic.titleTr) {
      errors.push({ topicId: tid, field: 'title', message: 'Topic missing title or titleTr' });
    }

    // Section 1-3: Intro / What / Why
    if (!topic.intro?.overview || !topic.intro?.overviewTr) {
      errors.push({ topicId: tid, field: 'intro.overview', message: 'Missing overview in English or Turkish' });
    }
    if (!topic.intro?.whatIsIt || !topic.intro?.whatIsItTr) {
      errors.push({ topicId: tid, field: 'intro.whatIsIt', message: 'Missing whatIsIt explanation in English or Turkish' });
    }
    if (!topic.intro?.whyUseIt || !topic.intro?.whyUseItTr) {
      errors.push({ topicId: tid, field: 'intro.whyUseIt', message: 'Missing whyUseIt explanation in English or Turkish' });
    }

    // Section 4-8: Sentence Structure Formulas & Sentence Blocks
    if (!topic.structure?.formulaPositive || !topic.structure?.formulaNegative || !topic.structure?.formulaQuestion) {
      errors.push({ topicId: tid, field: 'structure.formulas', message: 'Missing structural formulas' });
    }
    if (!topic.structure?.sentenceBlocksPositive || topic.structure.sentenceBlocksPositive.length === 0) {
      errors.push({ topicId: tid, field: 'structure.sentenceBlocks', message: 'Missing interactive sentence blocks' });
    }

    // Section 9: Signal Words
    if (!topic.signalWords?.words || topic.signalWords.words.length === 0) {
      errors.push({ topicId: tid, field: 'signalWords', message: 'Missing signal words list' });
    }
    if (!topic.signalWords?.explanationEn || !topic.signalWords?.explanationTr) {
      errors.push({ topicId: tid, field: 'signalWords.explanation', message: 'Missing signal words explanation' });
    }

    // Section 10-11: Examples with Vocabulary Support
    if (!topic.examplesWithVocab || topic.examplesWithVocab.length === 0) {
      errors.push({ topicId: tid, field: 'examplesWithVocab', message: 'Missing examples with vocabulary support' });
    } else {
      for (const ex of topic.examplesWithVocab) {
        if (!ex.sentence || !ex.sentenceTr) {
          errors.push({ topicId: tid, field: 'examplesWithVocab.sentence', message: 'Example missing English sentence or Turkish translation' });
        }
        if (!ex.vocabulary || ex.vocabulary.length === 0) {
          errors.push({ topicId: tid, field: 'examplesWithVocab.vocabulary', message: `Example "${ex.sentence}" missing vocabulary support` });
        }
      }
    }

    // Section 12-13: Visual Explanation / Visual Timelines
    if (!topic.visualExplanation?.descriptionEn || !topic.visualExplanation?.descriptionTr) {
      errors.push({ topicId: tid, field: 'visualExplanation', message: 'Missing visual explanation' });
    }

    // Section 14: Common Mistakes
    if (!topic.commonMistakes || topic.commonMistakes.length === 0) {
      errors.push({ topicId: tid, field: 'commonMistakes', message: 'Missing common mistakes list' });
    } else {
      for (const m of topic.commonMistakes) {
        if (!m.incorrect || !m.correct || !m.explanationEn || !m.explanationTr) {
          errors.push({ topicId: tid, field: 'commonMistakes.item', message: 'Incomplete common mistake item' });
        }
      }
    }

    // Section 15: Memory Tricks
    if (!topic.memoryTricks || topic.memoryTricks.length === 0) {
      errors.push({ topicId: tid, field: 'memoryTricks', message: 'Missing memory tricks' });
    }

    // Section 16: Micro Practice
    if (!topic.microPractices || topic.microPractices.length === 0) {
      errors.push({ topicId: tid, field: 'microPractices', message: 'Missing micro-practices' });
    }

    // Section 18: YDS Connection
    if (!topic.ydsConnection?.ydsStrategyEn || !topic.ydsConnection?.ydsStrategyTr) {
      errors.push({ topicId: tid, field: 'ydsConnection', message: 'Missing YDS connection strategies' });
    }

    // Section 19: Final Review Summary
    if (!topic.finalReviewSummary?.keyRules || topic.finalReviewSummary.keyRules.length === 0) {
      errors.push({ topicId: tid, field: 'finalReviewSummary', message: 'Missing final review summary rules' });
    }

    // Section 20: Activities (MUST BE AT LEAST 20 UNIQUE ACTIVITIES)
    if (!topic.activities || topic.activities.length < 20) {
      errors.push({
        topicId: tid,
        field: 'activities.count',
        message: `Topic only has ${topic.activities?.length || 0} activities. Minimum requirement is 20.`
      });
    }

    // Validate individual activities
    for (const act of topic.activities || []) {
      if (!act.id) {
        errors.push({ topicId: tid, field: 'activity.id', message: 'Activity missing ID' });
      } else if (globalActivityIds.has(act.id)) {
        errors.push({ topicId: tid, field: 'activity.id', message: `Duplicate activity ID detected: "${act.id}"` });
      } else {
        globalActivityIds.add(act.id);
      }

      if (!act.prompt) {
        errors.push({ topicId: tid, field: 'activity.prompt', message: `Activity ${act.id} missing prompt` });
      } else {
        const normPrompt = act.prompt.trim().toLowerCase();
        if (globalQuestionTexts.has(normPrompt)) {
          // Warning: potential duplicate question
          console.warn(`⚠️ Warning: Duplicate question text across topics: "${act.prompt.substring(0, 40)}..."`);
        } else {
          globalQuestionTexts.add(normPrompt);
        }
      }

      if (!act.correctAnswer) {
        errors.push({ topicId: tid, field: 'activity.correctAnswer', message: `Activity ${act.id} missing correct answer` });
      }

      if (!act.options || act.options.length < 2) {
        errors.push({ topicId: tid, field: 'activity.options', message: `Activity ${act.id} needs at least 2 options` });
      } else if (!act.options.includes(act.correctAnswer)) {
        errors.push({
          topicId: tid,
          field: 'activity.options',
          message: `Activity ${act.id} correct answer "${act.correctAnswer}" not in options [${act.options.join(', ')}]`
        });
      }

      if (!act.explanationEn || !act.explanationTr) {
        errors.push({ topicId: tid, field: 'activity.explanation', message: `Activity ${act.id} missing English or Turkish explanation` });
      }
    }
  }

  // Final summary
  console.log('----------------------------------------------------');
  console.log(`📊 Validated ${GRAMMAR_TOPICS.length} grammar topics.`);
  console.log(`📊 Total activities validated: ${globalActivityIds.size}`);
  console.log('----------------------------------------------------');

  if (errors.length > 0) {
    console.error(`❌ Validation Failed with ${errors.length} errors:\n`);
    errors.forEach(e => console.error(` [${e.topicId}] ${e.field}: ${e.message}`));
    process.exit(1);
  } else {
    console.log('✅ ALL GRAMMAR CONTENT VALIDATED SUCCESSFULLY!');
    console.log('✔ All 30 topics present.');
    console.log('✔ All 19 required structural sections present.');
    console.log('✔ Every topic has at least 20 unique activities with Turkish explanations and correct answers.');
    process.exit(0);
  }
}

validateGrammarContent();
