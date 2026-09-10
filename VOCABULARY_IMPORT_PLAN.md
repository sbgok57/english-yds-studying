# 📚 VOCABULARY IMPORT & DATA INTEGRITY ARCHITECTURAL PLAN

## 1. Current Vocabulary Architecture
The current application maintains a dual storage architecture:
- **Static Seed Layer**: `src/data/vocabulary.ts` and `src/data/vocabulary.json` provide default vocabulary items on application boot.
- **Persistent Client Database**: IndexedDB (`YdtYdsEnglishMasterDB`, version 1) with an in-memory `FallbackStore` in `src/services/db.ts`.
- **Strict Separation of Concerns**:
  - `VocabularyItem` (`src/types/vocabulary.ts`): Immutable vocabulary content (word, meaningsTr, example, partOfSpeech, synonyms, antonyms, collocations, visualMnemonic, pronunciation, difficulty, source).
  - `LearningState` (`src/types/vocabulary.ts`): Mutable user learning state (vocabularyId, mastery, correctCount, incorrectCount, consecutiveCorrect, consecutiveIncorrect, easeFactor, intervalDays, lastReviewedAt, nextReviewAt, learningStage).
  - Learning progress and dictionary entries live in separate IndexedDB object stores (`vocabulary` vs `learning_states`). Updating or importing word content never touches user learning metrics.

## 2. Existing Imported Vocabulary Count
- **Current Active Seed**: 25 curated academic words in `src/data/vocabulary.ts` (mitigate, deteriorate, detrimental, comprehensive, etc.).
- **Historical Git Dataset**: Git commit `d5b8aac` contained 207 high-frequency YDS adverbs in `src/data/vocabularyData.ts` ("YDS Adverbs Master Set"), of which only a small subset was migrated during earlier hardening.
- **Target External Sources**:
  - Quizlet Folder 1: `https://quizlet.com/user/sbgok57/folders/ydtyds-en-sik-kullanilan-zarflar` (Protected by Cloudflare 403 challenge).
  - Quizlet Folder 2: `https://quizlet.com/user/sbgok57/folders/ydtyds-en-sik-kullanilan-kelimeler` (Protected by Cloudflare 403 challenge).
  - Local PDFs: `YDS Grammar En Çok Sorulan Öbek Fiiller.pdf` and `YDS Phrasal Verbs.pdf` (not present in workspace; upload flow required).

## 3. Existing Source Metadata
- Currently, `VocabularyItem` has a single string field: `source: string` (e.g. `'YDS Core'`, `'User CSV Import'`).
- There is no central source registry, no source type distinction, no URL/filename tracking, and no audit trail of processed sets or pages.
- **Required Extension**: Add `VocabularySource` entity and `sourceRefs: SourceReference[]` to track multi-source provenance, set names, page numbers, and import timestamps without losing where each item originated.

## 4. Existing Duplicate Strategy
- In `src/services/csv.ts`: Normalized comparison via `word.trim().toLowerCase()`.
- Provides two strategies in CSV modal: `skip` (omit duplicates) or `update` (update meanings and examples while strictly preserving learning progress).
- However, it lacks deterministic key normalization for multi-word phrases and phrasal verbs, and does not merge alternative translations into `meaningsTr` when multiple sources describe the same word.

## 5. Existing IndexedDB Schema
- Database: `YdtYdsEnglishMasterDB` (version 1)
- Stores:
  - `vocabulary` (keyPath: `id`)
  - `learning_states` (keyPath: `vocabularyId`)
  - `attempts` (keyPath: `id`)
  - `study_sessions` (keyPath: `id`)
  - `error_records` (keyPath: `id`)
  - `grammar_progress` (keyPath: `topicId`)
  - `yds_attempts` (keyPath: `id`)
  - `user_progress` (keyPath: `id`)
  - `achievements` (keyPath: `id`)
  - `daily_missions` (keyPath: `date`)
  - `weekly_missions` (keyPath: `weekStart`)
- **Required Update**: Upgrade DB to version 2; add `vocabulary_sources` store (keyPath: `id`) to track registered sources and their audit metrics.

## 6. Existing Import Flow
- Restricted solely to single-file CSV upload through `src/components/CsvModal.tsx`.
- Does not support Quizlet public URL discovery, Quizlet export text parsing, or PDF document parsing.
- UI button only says "CSV İçe Aktar".

## 7. Missing Functionality
1. **Source Discovery & Completeness Pipeline**: Inability to register, scan, and audit Quizlet folders and sets.
2. **Access Control & Fallback Handling**: Automated network requests to Quizlet are blocked by Cloudflare (HTTP 403 Managed Challenge). The system must handle this safely as `ACCESS_FAILED`, record exact metadata, and provide an interactive Quizlet export parser fallback without violating security restrictions or fabricating data.
3. **PDF Vocabulary Extraction**: Inability to upload and parse PDF files (specifically targeting phrasal verbs and academic vocabulary with page references).
4. **Intelligent Deep Merging**: Combining alternative Turkish meanings into `meaningsTr: string[]`, aggregating synonyms, and tracking multiple sources per word.
5. **Unified Import UI**: Single dialog with 3 tabs: (1) Quizlet, (2) PDF, (3) CSV.
6. **Source Audit Dashboard**: View in Vocabulary to inspect discovered vs processed sets, completeness ratios, duplicates, and missing words.
7. **Two Voice Sections**: Web Speech API lacks woman and man voice selection and preview buttons in Settings.

## 8. Exact Changes Required
1. **Data Model (`src/types/vocabulary.ts` & `src/types/settings.ts`)**:
   - Add `SourceReference`, `VocabularySource`, and extend `VocabularyItem` with `sourceRefs`, `missingFields`, `requiresManualReview`.
   - Add `voiceGender: 'female' | 'male'` to `AppSettings`.
2. **Database Service (`src/services/db.ts`)**:
   - Add `vocabulary_sources` store (DB Version 2).
   - Add CRUD methods for sources.
   - Add `syncSeedVocabulary()` to safely merge new static seed vocabulary on app boot without wiping user progress.
3. **Import Engine (`src/services/importer.ts`, `src/services/quizlet.ts`, `src/services/pdf.ts`)**:
   - `normalizeVocabularyKey(word)`: Standardizes spacing, casing, Unicode normalization while strictly preserving phrasal verbs ("carry out" vs "carry").
   - `mergeVocabularyRecords(existing, incoming)`: Deep merge of meanings, synonyms, examples, and source references.
   - `QuizletImporter`: Attempts URL fetch, records `ACCESS_FAILED` with HTTP 403 and timestamp upon Cloudflare challenge, and parses standard Quizlet tab/comma/dash export formats.
   - `PdfVocabularyImporter`: Parses PDF binary streams, extracts words/phrasal verbs, Turkish definitions, and page numbers.
4. **Vocabulary View & UI (`src/views/VocabularyView.tsx`, `src/components/VocabularyImportModal.tsx`)**:
   - Replace `CsvModal` with multi-source `VocabularyImportModal`.
   - Real-time progress indicators (source, current set, terms found, imported, duplicates).
   - "Kaynak Denetimi (Source Audit)" collapsible panel showing status, sets found vs processed, and completeness warnings.
   - Comprehensive multi-field search (word, Turkish meaning, synonym, collocation, part of speech, source).
5. **Voice Engine & Settings (`src/services/speech.ts`, `src/views/SettingsView.tsx`)**:
   - Add Woman (Kadın Sesi) and Man (Erkek Sesi) sections with individual test buttons and voice profile configuration.
6. **Seed Dataset Upgrade (`src/data/vocabulary.ts` & `src/data/vocabulary.json`)**:
   - Merge the 207 historical YDS adverbs from `d5b8aac` with the 25 current words (deduplicated: 228 unique words), with complete metadata and source provenance.
7. **Validation & Automated Tests**:
   - Create `scripts/validate-vocabulary-content.ts` (verifies uniqueness, schema compliance, source refs).
   - Update `scripts/run-tests.ts` with comprehensive unit tests for normalization, deduplication, state preservation regression, and parsers.

## 9. Data-Integrity Strategy
- **Separation Guarantee**: `saveVocabularyItem` or `saveVocabularyBatch` only writes to `STORES.VOCABULARY`. `STORES.LEARNING_STATES` is never touched by import routines.
- **Mandatory Regression Test**: Test with "abandon" (mastery=72, correct=8, incorrect=2, consecutive=3, interval=7) verifying that re-importing with new Turkish meanings leaves all learning state attributes completely unchanged.
- **Honest Auditing**: Never fabricate data. Inaccessible sources are explicitly flagged as `ACCESS_FAILED` or `requiresManualReview`.

## 10. Validation Strategy
- `npm run validate:vocabulary`: Custom script validating static and imported vocabularies.
- `npm run validate`: Enforces content and grammar integrity.
- `npm test`: Runs all 42+ unit tests including normalization, merge, and progress preservation.
- `npm run typecheck` & `npm run lint`: Zero errors and warnings.
- `npm run build`: Production build verification into `dist`.
