import {
  GRAMMAR_TOPICS,
  ALL_GRAMMAR_LESSONS,
  ALL_GRAMMAR_ACTIVITIES,
  ACTIVITIES_BY_TOPIC_ID,
  LESSONS_BY_TOPIC_ID,
} from '../src/data/grammar';

function runGrammarValidation() {
  console.log('🔍 Starting Comprehensive Grammar Content Validation...\n');

  let errors = 0;
  const warnings = 0;

  // 1. Validate Topic Count & Metadata
  console.log(`Checking topics... Total declared: ${GRAMMAR_TOPICS.length}`);
  if (GRAMMAR_TOPICS.length !== 28) {
    console.error(`❌ ERROR: Expected exactly 28 grammar topics, found ${GRAMMAR_TOPICS.length}`);
    errors++;
  }

  const topicIds = new Set<string>();
  GRAMMAR_TOPICS.forEach((t) => {
    if (topicIds.has(t.id)) {
      console.error(`❌ ERROR: Duplicate Topic ID: ${t.id}`);
      errors++;
    }
    topicIds.add(t.id);

    if (!t.title || !t.titleTr || !t.slug || !t.level || !t.description || !t.descriptionTr) {
      console.error(`❌ ERROR: Incomplete metadata for topic ${t.id}`);
      errors++;
    }
  });

  // 2. Validate Every Topic Has a Full Lesson with All 16 Sections
  console.log(`Checking lessons... Total lessons: ${ALL_GRAMMAR_LESSONS.length}`);
  topicIds.forEach((id) => {
    const lesson = LESSONS_BY_TOPIC_ID.get(id);
    if (!lesson) {
      console.error(`❌ ERROR: Missing lesson for topic ${id}`);
      errors++;
      return;
    }

    // 16 Required Sections Verification:
    // 1 Introduction
    if (!lesson.introduction?.en || !lesson.introduction?.tr) {
      console.error(`❌ ERROR: Topic ${id} missing bilingual introduction.`);
      errors++;
    }
    // 2 Why it matters
    if (!lesson.whyItMatters?.en || !lesson.whyItMatters?.tr) {
      console.error(`❌ ERROR: Topic ${id} missing bilingual whyItMatters.`);
      errors++;
    }
    // 3 Basic Structure
    if (!lesson.basicStructure?.pattern || !lesson.basicStructure?.explanationEn || !lesson.basicStructure?.explanationTr || !lesson.basicStructure?.formulaBlocks?.length) {
      console.error(`❌ ERROR: Topic ${id} missing basicStructure or formulaBlocks.`);
      errors++;
    }
    // 4 Positive sentences
    if (!lesson.positive?.structure || !lesson.positive?.explanationEn || !lesson.positive?.explanationTr || !lesson.positive?.examples?.length) {
      console.error(`❌ ERROR: Topic ${id} missing positive section or examples.`);
      errors++;
    }
    // 5 Negative sentences
    if (!lesson.negative?.structure || !lesson.negative?.explanationEn || !lesson.negative?.explanationTr || !lesson.negative?.examples?.length) {
      console.error(`❌ ERROR: Topic ${id} missing negative section or examples.`);
      errors++;
    }
    // 6 Questions
    if (!lesson.questions?.structure || !lesson.questions?.explanationEn || !lesson.questions?.explanationTr || !lesson.questions?.examples?.length) {
      console.error(`❌ ERROR: Topic ${id} missing questions section or examples.`);
      errors++;
    }
    // 7 Short Answers
    if (!lesson.shortAnswers?.structure || !lesson.shortAnswers?.explanationEn || !lesson.shortAnswers?.explanationTr || !lesson.shortAnswers?.examples?.length) {
      console.error(`❌ ERROR: Topic ${id} missing shortAnswers section or examples.`);
      errors++;
    }
    // 8 Signal Words
    if (!lesson.signalWords || lesson.signalWords.length === 0) {
      console.error(`❌ ERROR: Topic ${id} missing signalWords.`);
      errors++;
    } else {
      lesson.signalWords.forEach((s) => {
        if (!s.word || !s.meaningTr || !s.noteEn || !s.noteTr) {
          console.error(`❌ ERROR: Topic ${id} has incomplete signalWord: ${JSON.stringify(s)}`);
          errors++;
        }
      });
    }
    // 9 Common Mistakes
    if (!lesson.commonMistakes || lesson.commonMistakes.length === 0) {
      console.error(`❌ ERROR: Topic ${id} missing commonMistakes.`);
      errors++;
    } else {
      lesson.commonMistakes.forEach((m) => {
        if (!m.wrong || !m.right || !m.explanationEn || !m.explanationTr) {
          console.error(`❌ ERROR: Topic ${id} has incomplete commonMistake.`);
          errors++;
        }
      });
    }
    // 10 Visual Explanation
    if (!lesson.visualExplanation?.type || !lesson.visualExplanation?.titleEn || !lesson.visualExplanation?.titleTr || !lesson.visualExplanation?.steps?.length) {
      console.error(`❌ ERROR: Topic ${id} missing visualExplanation.`);
      errors++;
    }
    // 11 Examples
    if (!lesson.examples || lesson.examples.length === 0) {
      console.error(`❌ ERROR: Topic ${id} missing examples.`);
      errors++;
    }
    // 12 Vocabulary
    if (!lesson.vocabulary || lesson.vocabulary.length === 0) {
      console.error(`❌ ERROR: Topic ${id} missing vocabulary references.`);
      errors++;
    } else {
      lesson.vocabulary.forEach((v) => {
        if (!v.word || !v.meaningTr || !v.context) {
          console.error(`❌ ERROR: Incomplete vocabulary entry in topic ${id}.`);
          errors++;
        }
      });
    }
    // 13 Memory Tricks
    if (!lesson.memoryTricks || lesson.memoryTricks.length === 0) {
      console.error(`❌ ERROR: Topic ${id} missing memoryTricks.`);
      errors++;
    }
    // 14 Micro Practices
    if (!lesson.microPractices || lesson.microPractices.length === 0) {
      console.error(`❌ ERROR: Topic ${id} missing microPractices.`);
      errors++;
    }
    // 15 YDS Connection
    if (!lesson.ydsConnection?.descriptionEn || !lesson.ydsConnection?.a2Example || !lesson.ydsConnection?.b1Example || !lesson.ydsConnection?.ydsExample) {
      console.error(`❌ ERROR: Topic ${id} missing comprehensive YDS connection.`);
      errors++;
    }
    // 16 Final Check
    if (!lesson.finalCheck || lesson.finalCheck.length === 0) {
      console.error(`❌ ERROR: Topic ${id} missing finalCheck questions.`);
      errors++;
    }
    // Mastery Rules
    if (!lesson.masteryRules?.minScoreToPass || !lesson.masteryRules?.activitiesRequired || !lesson.masteryRules?.keyConcepts?.length) {
      console.error(`❌ ERROR: Topic ${id} missing masteryRules.`);
      errors++;
    }
  });

  // 3. Validate Activities per Topic (Must be >= 20 valid activities)
  console.log(`Checking activities... Total declared: ${ALL_GRAMMAR_ACTIVITIES.length}`);
  const activityIds = new Set<string>();

  topicIds.forEach((id) => {
    const topicActs = ACTIVITIES_BY_TOPIC_ID.get(id) || [];
    if (topicActs.length < 20) {
      console.error(`❌ ERROR: Topic ${id} has ${topicActs.length} activities (minimum required: 20).`);
      errors++;
    }

    const questionTextsInTopic = new Set<string>();

    topicActs.forEach((act) => {
      // Unique ID check
      if (activityIds.has(act.id)) {
        console.error(`❌ ERROR: Duplicate Activity ID across dataset: ${act.id}`);
        errors++;
      }
      activityIds.add(act.id);

      // Unique Question in Topic
      if (questionTextsInTopic.has(act.question.trim().toLowerCase())) {
        console.error(`❌ ERROR: Duplicate question in topic ${id}: "${act.question}"`);
        errors++;
      }
      questionTextsInTopic.add(act.question.trim().toLowerCase());

      // Topic ID match
      if (act.grammarTopicId !== id) {
        console.error(`❌ ERROR: Activity ${act.id} grammarTopicId mismatch. Found ${act.grammarTopicId}, expected ${id}`);
        errors++;
      }

      // Options and Correct Answer
      if (!act.options || act.options.length < 2) {
        console.error(`❌ ERROR: Activity ${act.id} has fewer than 2 options.`);
        errors++;
      } else if (!act.options.includes(act.correctAnswer)) {
        console.error(`❌ ERROR: Activity ${act.id} correctAnswer "${act.correctAnswer}" not in options.`);
        errors++;
      }

      // Bilingual Explanations
      if (!act.explanationEn || act.explanationEn.trim() === '') {
        console.error(`❌ ERROR: Activity ${act.id} missing explanationEn.`);
        errors++;
      }
      if (!act.explanationTr || act.explanationTr.trim() === '') {
        console.error(`❌ ERROR: Activity ${act.id} missing explanationTr.`);
        errors++;
      }

      // Difficulty
      if (!['A2', 'B1', 'B2', 'YDS'].includes(act.difficulty)) {
        console.error(`❌ ERROR: Activity ${act.id} invalid difficulty: ${act.difficulty}`);
        errors++;
      }
    });
  });

  console.log('\n----------------------------------------');
  if (errors > 0) {
    console.error(`💥 Validation FAILED with ${errors} error(s) and ${warnings} warning(s).`);
    process.exit(1);
  } else {
    console.log(`✅ All ${topicIds.size} grammar topics validated successfully!`);
    console.log(`✅ All ${activityIds.size} grammar activities passed strict validation (>= 20 per topic).`);
    console.log(`✅ Zero duplicate IDs, zero duplicate questions, 100% bilingual coverage.\n`);
    process.exit(0);
  }
}

runGrammarValidation();
