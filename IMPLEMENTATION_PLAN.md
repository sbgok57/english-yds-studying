# IMPLEMENTATION_PLAN.md
# Production Hardening & Architecture Plan: YDT/YDS English Learning Platform

## 1. Current Architecture
- **Workspace State:** Inspected `/Users/sbgok57/Desktop/Antigravity/YDT:YDS`. Workspace was newly allocated and empty prior to initialization. Node.js `v22.23.2` and npm `10.9.8` are active in the local macOS environment.
- **Target Stack:** React 18 / 19 + TypeScript + Vite + Tailwind CSS + Lucide React + IndexedDB (with safe memory fallback) + Web Speech API.
- **Project Structure:**
  - `src/types/`: Strict domain models (`vocabulary.ts`, `grammar.ts`, `progress.ts`, `session.ts`, `settings.ts`).
  - `src/data/`: Curated YDT/YDS vocabulary database (`vocabulary.ts`, `vocabulary.json`), motivation messages (`motivation.ts`), and comprehensive grammar lessons/activities for all 28 topics (`grammar/`).
  - `src/services/`: Centralized persistence (`db.ts`, `storage.ts`), spaced repetition SM-2 engine (`spacedRepetition.ts`), multi-evidence mastery calculator (`mastery.ts`), CSV importer/exporter (`csv.ts`), speech synthesis (`speech.ts`), and adaptive YDS selector (`yds.ts`).
  - `src/components/`: Reusable grammar visuals (`Timeline`, `SentenceBlocks`, `GrammarDiagram`, `ComparisonCard`, `MicroPractice`, etc.), layout, navigation, modals, and error boundaries.
  - `src/views/`: Dashboard, Vocabulary Studio, Grammar Roadmap & Lesson Player, YDS Exam Mode, Error Notebook, Analytics/Progress, Settings.
  - `scripts/`: Production content validators (`validate-content.ts`, `validate-grammar-content.ts`).

## 2. Existing Functionality
- Initialized clean git repository in workspace.
- Workspace environment verified with modern Node.js and npm toolchains.

## 3. Missing Functionality to Implement
- **Data Models:** Strict domain interfaces for `VocabularyItem`, `LearningState`, `GrammarTopic`, `GrammarLesson`, `GrammarActivity`, `StudySession`, `UserProgress`, `Attempt`, `ErrorRecord`, `Achievement`, `DailyMission`, `WeeklyMission`, `YdsAttempt`, `ImportRecord`, `AppSettings`.
- **Persistence Layer:** Robust versioned IndexedDB database with transactional stores and automatic fallback to localStorage/in-memory storage when IndexedDB is restricted.
- **Vocabulary Data:** Curated comprehensive YDT/YDS vocabulary dataset with IPA pronunciations, Turkish meanings, examples, synonyms, antonyms, collocations, visual mnemonics, and difficulty ratings.
- **Separation of Concerns:** Zero mixing of immutable vocabulary definitions with mutable learner states (`mastery`, `streak`, `nextReviewAt`, `intervalDays`).
- **CSV Import/Export:** RFC 4180 compliant CSV parser/serializer with UTF-8 BOM, Turkish character preservation, duplicate handling (skip vs metadata update), preview modal, and row validation.
- **Spaced Repetition (SM-2):** Deterministic intervals (1d, 3d, 7d, 14d, 30d, extended) with easeFactor adaptation, error priority scheduling, and due-queue selection.
- **Multi-Evidence Mastery:** Clamped 0-100 mastery formula combining recognition, recall, context, synonyms, collocations, spelling, and historical consistency.
- **Vocabulary Activity Engine:** Dynamic engine supporting 40 activity types with randomized answer distribution and deterministic validation.
- **Grammar System:** Complete curriculum of 28 topics across Foundation, Core, Intermediate, and YDS Grammar. Every topic equipped with a 16-section lesson, progressive disclosure, interactive visual components, and at least 20 valid unique activities (total 560+ activities).
- **YDS Connection & Exam Mode:** Bridging from A2/B1 to authentic YDS format (Sentence Completion, Cloze Test, Translation, Reading Comprehension, Connectors) with adaptive difficulty and detailed answer explanations.
- **Gamification & Mission:** XP, levels, real daily/weekly streaks, non-fabricated achievements, pre-study mission screen (5/15/30 min options), and 50+ bilingual motivational quotes.
- **Error Notebook:** Categorized error tracking ("What I often forget", "What I recently improved"), supportive feedback, and same-session review.
- **Speech Engine:** Web Speech API integration with English/Turkish voice selection, slow/normal rates, volume control, mute toggle, and graceful fallback.

## 4. Broken Functionality to Address
- Prevent runtime failures when IndexedDB is unavailable in sandboxed/incognito contexts.
- Eliminate unsafe type assertions and `any` types.
- Ensure all route transitions and deep links persist application state across reloads.
- Protect against zero-division, `NaN`, or infinite values in mastery and accuracy calculations.

## 5. Data-Model Problems & Safeguards
- **Problem:** Blurring vocabulary metadata with user progress risks losing user stats during data updates.
- **Safeguard:** Split schemas into `VocabularyItem` (read-only metadata) and `LearningState` (keyed by `vocabularyId`). Updates to metadata never reset learning progress.
- **ID Stability:** All entity IDs use stable, deterministic string identifiers.

## 6. Persistence Problems & Strategy
- Provide an abstraction layer (`StorageAdapter`) managing IndexedDB `idb` instances with version upgrades (Store: `vocabulary`, `learning_states`, `attempts`, `sessions`, `errors`, `grammar`, `yds`, `progress`, `settings`).
- Detect quota errors and private browsing security blocks; automatically fall back to resilient in-memory state with localStorage sync for user settings.

## 7. Routing Problems & Strategy
- Use client-side routing (hash-based or clean state-driven routing) to guarantee zero 404s when deploying on static hosts or Vite preview servers.
- Ensure unknown routes redirect smoothly to the Dashboard without crashing.

## 8. Accessibility Problems & Strategy
- Semantic HTML tags (`<main>`, `<nav>`, `<article>`, `<button>`).
- Keyboard navigability: Tab order, focus visible indicators, `Escape` key listeners for all modals.
- ARIA attributes: `aria-expanded`, `aria-label`, `role="progressbar"`, `role="alert"`.
- Non-color reliant indicators for correctness (icons + descriptive text in addition to green/red hues).

## 9. Content Validation Problems & Strategy
- Build automated test scripts: `scripts/validate-content.ts` and `scripts/validate-grammar-content.ts`.
- Check:
  1. All 28 grammar topics present with valid lessons.
  2. Exactly >= 20 valid activities per grammar topic.
  3. No duplicate IDs across the entire activity database.
  4. No duplicate question texts within a topic.
  5. Correct answer exists in options array.
  6. Bilingual explanations (`explanationEn`, `explanationTr`) on every activity.
  7. All vocabulary items conform strictly to domain requirements.

## 10. Grammar System Problems & Strategy
- Ensure grammar is not a bare quiz list. Every topic features:
  1. What is this grammar?
  2. Why do we use it?
  3. Basic sentence structure (visual blocks)
  4. Positive sentences
  5. Negative sentences
  6. Questions
  7. Short answers
  8. Signal words
  9. Common mistakes
  10. Visual explanation
  11. Example sentences
  12. Turkish meanings
  13. Mini practice
  14. Memory trick
  15. YDS connection
  16. Final mini-check

## 11. Vocabulary System Problems & Strategy
- Prevent isolated word memorization: Include collocations, contextual sentences, visual mnemonics, and Turkish meanings for all vocabulary items.
- Provide click-to-view vocabulary popups inside grammar lessons with "Add to Review" functionality.

## 12. Import/Export Problems & Strategy
- Support standard RFC 4180 CSV with UTF-8 BOM for Excel Turkish character encoding.
- Two-step import workflow: Parse -> Validate -> Duplicate Analysis Preview -> User Choice (Skip or Update Metadata) -> Confirm & Persist.

## 13. Spaced Repetition Problems & Strategy
- Implement SuperMemo SM-2 adapted scheduling:
  - Repetition 1: 1 day
  - Repetition 2: 3 days
  - Repetition 3: 7 days
  - Repetition 4: 14 days
  - Repetition 5: 30 days
  - Ease factor dynamically adjusted between 1.3 and 2.5.
  - Review queue interleaves due items, weak items, errors, and new items.

## 14. Gamification Problems & Strategy
- No fake streaks, no hard-coded percentages.
- XP awarded deterministically for completed reviews, sessions, and daily challenges.
- Badges unlocked strictly when domain conditions are met in persisted data.

## 15. YDS Mode Problems & Strategy
- Provide realistic YDS question templates: Cloze Test, Sentence Completion, English-Turkish Translation, Restatement, Paragraph Analysis.
- Include A2, B1, and authentic YDS level questions with full Turkish rationale.

## 16. Production Risks & Mitigations
- **Build Failures:** Strict TypeScript typing, ESLint configuration, and automated build verification.
- **Data Loss:** Defensive deserialization, corrupted storage detection, and automatic schema defaults.
- **Audio Crashes:** Safe Web Speech API wrapper with feature detection and user-friendly fallback notices.

## 17. Exact Implementation Order
1. Setup core configuration: `package.json`, `tsconfig.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `index.html`.
2. Install dependencies (`react`, `react-dom`, `lucide-react`, `tailwindcss`, `typescript`, `vite`, etc.).
3. Define strict domain types (`src/types/*.ts`).
4. Implement persistence service (`src/services/db.ts`, `src/services/storage.ts`).
5. Implement Spaced Repetition & Mastery Engine (`src/services/spacedRepetition.ts`, `src/services/mastery.ts`).
6. Implement Speech Synthesis service (`src/services/speech.ts`).
7. Implement CSV Import/Export service (`src/services/csv.ts`).
8. Create comprehensive YDT/YDS Vocabulary dataset (`src/data/vocabulary.ts`, `src/data/vocabulary.json`).
9. Create 50+ bilingual motivational quotes (`src/data/motivation.ts`).
10. Build 28 Grammar Topics, complete 16-section Lessons, and 560+ valid unique Grammar Activities (`src/data/grammar/`).
11. Build Grammar Visual Components (`Timeline`, `SentenceBlocks`, `GrammarDiagram`, `ComparisonCard`, etc.).
12. Build Vocabulary Activity Engine (`src/components/VocabularyActivityEngine.tsx`).
13. Build Views:
    - Dashboard (with pre-study mission screen)
    - Vocabulary Studio (list, flashcards, activities)
    - Grammar Explorer & Lesson Player
    - YDS Exam Mode
    - Error Notebook
    - Analytics & Progress
    - Settings
14. Build CSV Import Modal with preview and duplicate resolution.
15. Create and run validation scripts: `scripts/validate-content.ts` and `scripts/validate-grammar-content.ts`.
16. Implement unit tests for core algorithms (`tests/*.test.ts`).
17. Run typecheck, lint, content validation, unit tests, and production build.
18. Verify data integrity and zero fake data.
19. Produce `IMPORT_REPORT.md` and `PRODUCTION_AUDIT.md`.

## 18. Validation Strategy
- **TypeScript:** `npm run typecheck` (zero errors, no `@ts-ignore`).
- **ESLint:** `npm run lint` (zero critical errors).
- **Content Validation:** `npm run validate:content` and `npm run validate:grammar`.
- **Unit Tests:** `npm run test` (SM-2 algorithm, mastery calculation, CSV parsing, data integrity).
- **Production Build:** `npm run build` (clean Vite bundle).
- **Smoke Testing:** Static preview validation of learning flows, state persistence, and responsive UI.
