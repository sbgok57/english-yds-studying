# 🎓 YDS & YDT English Mastery Platform

A comprehensive, adult-oriented English learning and exam preparation platform designed for Turkish learners (~25 years old, A2 to YDS level, HR and career advancement focus).

---

## 🌟 Key Features

### 1. 🧠 Visual Memory & SM-2 Spaced Repetition
- **208 High-Frequency YDS Adverbs & Terms**: Extracted from curated YDS study corpora across 30 days.
- **Visual Mnemonic Associations**: Dedicated conceptual visual cues and diagrams for every vocabulary item.
- **SM-2 Adaptive Spaced Repetition**: Memory stages (0-19 New, 20-39 Familiar, 40-59 Learning, 60-79 Strong, 80-94 Very Strong, 95-100 Mastered for now).
- **40 Distinct Vocabulary Activity Types**: Multi-directional retrieval (EN→TR, TR→EN, Visual→Word, Definition, Sentence Completion, Collocations, Odd-one-out, etc.).

### 2. 🏛️ Complete Grammar Laboratory (30 Topics)
- **19 Structural Sections per Topic**: Topic intro, What & Why, interactive sentence building blocks, positive/negative/question formulas, signal words, vocabulary support table, tense timelines, common mistakes with explanations, memory tricks, micro-practice, YDS exam strategy.
- **660+ Validated Grammar Activities**: At least 20 unique activities per topic verified by `scripts/validate-grammar-content.ts`.

### 3. 🎯 YDS Exam Mode & Strategy Engine
- Deep question analysis covering Sentence Completion, Cloze Tests, Conjunctions & Logic, Vocabulary & Translation, and Academic Paragraph Synthesis.
- In-depth answer breakdowns explaining why correct options succeed and why distractors fail.

### 4. 🔊 Positive Voice Feedback (Web Speech API)
- Real-time spoken encouragement and pronunciation assistance with volume control, mute toggle, and replay.

### 5. 🚀 Motivation Screen ("TODAY'S MISSION")
- 55 bilingual adult-oriented motivational quotes focused on consistency, cognitive retention, and career advancement.

---

## 🛠️ Development & Deployment

```bash
# Install dependencies
npm install

# Run content validator (checks all 30 topics, 19 sections, 660 activities)
npm run validate

# Typecheck
npm run typecheck

# Production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Vercel Deployment
Configured out-of-the-box via `vercel.json` with SPA routing rewrites.
