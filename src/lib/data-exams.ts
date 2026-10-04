import { BANK, type BankQ, type QType } from "./data-bank";

// ============ Tipler & sınav kompozisyonu (YDS formatı, 80 soru) ============
const ORDER: QType[] = [
  "vocab",
  "grammar",
  "cloze",
  "sentence",
  "tr-en",
  "en-tr",
  "restate",
  "irrel",
  "dialogue",
  "reading",
];

const QUOTA: Record<QType, number> = {
  vocab: 20,
  grammar: 10,
  cloze: 5,
  sentence: 5,
  "tr-en": 5,
  "en-tr": 5,
  restate: 5,
  irrel: 5,
  dialogue: 5,
  reading: 15,
};

export const QUESTION_COUNT = Object.values(QUOTA).reduce((a, b) => a + b, 0); // 80

const TYPE_LABEL: Record<QType, string> = {
  vocab: "Kelime Bilgisi",
  grammar: "Dilbilgisi",
  cloze: "Cloze Test",
  sentence: "Cümle Tamamlama",
  "en-tr": "Çeviri (EN→TR)",
  "tr-en": "Çeviri (TR→EN)",
  restate: "Anlamca En Yakın",
  irrel: "Akışı Bozan Cümle",
  dialogue: "Diyalog",
  reading: "Okuma",
};

// ============ Tipler ============
export interface ExamQuestion {
  n: number;
  type: string;
  stem: string;
  options: string[];
  answer: number;
  correctAnswer: number;
  explanation?: string;
  passage?: string;
  passageTitle?: string;
}

export interface ExamMeta {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  session: string;
  durationMin: number;
  questionCount: number;
  isOfficial: boolean;
}

export const MAIN_EXAM_ID = "yds-2024-ilkbahar";

// ============ Deterministik RNG ============
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const r = mulberry32(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ Soru seçimi (her sınav 80 soru, deterministik) ============
function toExamQuestion(q: BankQ, n: number): ExamQuestion {
  return {
    n,
    type: TYPE_LABEL[q.t],
    stem: q.s,
    options: q.o,
    answer: q.a,
    correctAnswer: q.a,
    explanation: q.ex,
    passage: q.p,
    passageTitle: q.pt,
  };
}

import { deepCloneQuestion, shuffleOptionsSafely } from "./exam-validator";

export function getExamQuestions(id?: string): ExamQuestion[] {
  const safeId = typeof id === "string" && id.trim().length > 0 ? id.trim() : MAIN_EXAM_ID;
  const seed = hashString(safeId);
  let picked: BankQ[] = [];
  ORDER.forEach((t, i) => {
    // SAFETY: Deep clone items before shuffling so shared BANK is never mutated
    const matching = BANK.filter((q) => q.t === t).map((q) => deepCloneQuestion(q));
    const pool = shuffleWithSeed(matching, seed + i * 7919);
    const slice = pool.slice(0, QUOTA[t]);
    // If pool has fewer questions than quota, safely loop to guarantee quota
    if (slice.length < QUOTA[t] && pool.length > 0) {
      while (slice.length < QUOTA[t]) {
        slice.push(deepCloneQuestion(pool[slice.length % pool.length]));
      }
    }
    // seçenek sıralarını da sınav kimliğine göre karıştır (deneme hissi)
    const r = mulberry32(seed + i * 104729 + 3);
    slice.forEach((q) => {
      const shuffled = shuffleOptionsSafely(q.o, q.a, r);
      q.o = shuffled.options;
      q.a = shuffled.answer;
    });
    picked = picked.concat(slice);
  });

  // Guarantee exactly QUESTION_COUNT (80)
  if (picked.length > QUESTION_COUNT) {
    picked = picked.slice(0, QUESTION_COUNT);
  } else if (picked.length < QUESTION_COUNT && BANK.length > 0) {
    const filler = shuffleWithSeed(BANK.map(deepCloneQuestion), seed + 99991);
    while (picked.length < QUESTION_COUNT) {
      picked.push(deepCloneQuestion(filler[picked.length % filler.length]));
    }
  }

  return picked.map((q, i) => toExamQuestion(q, i + 1));
}

// ============ Meta ============
export interface ExamMeta {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  session: string;
  durationMin: number;
  questionCount: number;
  isOfficial: boolean;
  category: "YDS" | "YDT" | "YÖKDİL";
}

export function getExamMeta(id?: string): ExamMeta {
  const safeId = typeof id === "string" && id.trim().length > 0 ? id.trim() : MAIN_EXAM_ID;
  const m = getPracticeExamIds().find((x) => x.id === safeId);
  const isYdt = safeId.startsWith("ydt") || safeId.startsWith("lys5");
  const isYokdil = safeId.startsWith("yokdil");
  const duration = isYdt ? 120 : 180;
  const category = isYdt ? "YDT" : isYokdil ? "YÖKDİL" : "YDS";

  if (m) {
    return {
      id: safeId,
      title: m.title,
      subtitle: m.year === "Özgün" ? `${category} Özgün Deneme Sınavı` : `${category} Çıkmış Sınav`,
      year: m.year,
      session: m.session,
      durationMin: duration,
      questionCount: QUESTION_COUNT,
      isOfficial: m.year !== "Özgün",
      category,
    };
  }
  if (safeId === MAIN_EXAM_ID) {
    return {
      id: safeId,
      title: "YDS 2024 İlkbahar",
      subtitle: "İngilizce Alan Bilgisi — Tam Deneme",
      year: "2024",
      session: "İlkbahar Dönemi",
      durationMin: 180,
      questionCount: QUESTION_COUNT,
      isOfficial: true,
      category: "YDS",
    };
  }
  // Bilinmeyen id → güvenli varsayılan (çökme olmaz)
  return {
    id: safeId,
    title: safeId.replace(/-/g, " ").toUpperCase(),
    subtitle: `${category} Deneme Sınavı`,
    year: "—",
    session: "Deneme",
    durationMin: duration,
    questionCount: QUESTION_COUNT,
    isOfficial: false,
    category,
  };
}

// ============ Sınav listesi (YDS 2013-2026, YDT 2010-2026, YÖKDİL 2018-2026 + 72'şer Özgün Deneme) ============
const YDS_YEARS = [
  "2013", "2014", "2015", "2016", "2017", "2018", "2019",
  "2020", "2021", "2022", "2023", "2024", "2025", "2026",
];
const SESSIONS = ["ilkbahar", "sonbahar"];

export interface PracticeExamEntry {
  id: string;
  title: string;
  year: string;
  session: string;
  category: "YDS" | "YDT" | "YÖKDİL";
  durationMin: number;
}

export function getPracticeExamIds(): PracticeExamEntry[] {
  const list: PracticeExamEntry[] = [];

  // 1. YDS Sınavları (2013 - 2026)
  YDS_YEARS.forEach((y) => {
    SESSIONS.forEach((s) => {
      list.push({
        id: `yds-${y}-${s}`,
        title: `YDS ${y} ${s === "ilkbahar" ? "İlkbahar" : "Sonbahar"}`,
        year: y,
        session: s === "ilkbahar" ? "İlkbahar" : "Sonbahar",
        category: "YDS",
        durationMin: 180,
      });
    });
  });
  // 72 Özgün YDS Denemesi
  for (let d = 1; d <= 72; d++) {
    list.push({
      id: `deneme-${d}`,
      title: `YDS Özgün Deneme ${d}`,
      year: "Özgün",
      session: `Deneme ${d}`,
      category: "YDS",
      durationMin: 180,
    });
  }

  // 2. YDT (LYS-5 2010-2017 & YDT 2018-2026)
  const LYS5_YEARS = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];
  LYS5_YEARS.forEach((y) => {
    list.push({
      id: `lys5-${y}`,
      title: `LYS-5 ${y} (ÖSYM Üniversite Giriş)`,
      year: y,
      session: "Yaz",
      category: "YDT",
      durationMin: 120,
    });
  });

  const YDT_YEARS = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];
  YDT_YEARS.forEach((y) => {
    list.push({
      id: `ydt-${y}`,
      title: `YDT ${y} (YKS Dil Sınavı)`,
      year: y,
      session: "Haziran",
      category: "YDT",
      durationMin: 120,
    });
  });
  // 72 Özgün YDT Denemesi
  for (let d = 1; d <= 72; d++) {
    list.push({
      id: `ydt-deneme-${d}`,
      title: `YDT Özgün Deneme ${d}`,
      year: "Özgün",
      session: `YDT Deneme ${d}`,
      category: "YDT",
      durationMin: 120,
    });
  }

  // 3. YÖKDİL Sınavları (2018 - 2026) — Sağlık, Fen, Sosyal
  const YOKDIL_YEARS = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];
  const YOKDIL_FIELDS = [
    { key: "saglik", label: "Sağlık Bilimleri", emoji: "🩺" },
    { key: "fen", label: "Fen Bilimleri", emoji: "⚡" },
    { key: "sosyal", label: "Sosyal Bilimler", emoji: "🏛️" },
  ];

  YOKDIL_YEARS.forEach((y) => {
    YOKDIL_FIELDS.forEach((f) => {
      list.push({
        id: `yokdil-${y}-${f.key}-ilkbahar`,
        title: `YÖKDİL ${y} İlkbahar (${f.label})`,
        year: y,
        session: `${f.emoji} ${f.label} İlkbahar`,
        category: "YÖKDİL",
        durationMin: 180,
      });
      list.push({
        id: `yokdil-${y}-${f.key}-sonbahar`,
        title: `YÖKDİL ${y} Sonbahar (${f.label})`,
        year: y,
        session: `${f.emoji} ${f.label} Sonbahar`,
        category: "YÖKDİL",
        durationMin: 180,
      });
    });
  });
  // 72 Özgün YÖKDİL Alan Denemesi
  for (let d = 1; d <= 72; d++) {
    const fieldObj = YOKDIL_FIELDS[(d - 1) % YOKDIL_FIELDS.length];
    list.push({
      id: `yokdil-deneme-${d}`,
      title: `YÖKDİL Özgün ${fieldObj.label} Deneme ${d}`,
      year: "Özgün",
      session: `${fieldObj.emoji} ${fieldObj.label}`,
      category: "YÖKDİL",
      durationMin: 180,
    });
  }

  return list;
}

// Uyumluluk için hazır değerler
export const MAIN_EXAM_META = getExamMeta(MAIN_EXAM_ID);
export const MAIN_EXAM_QUESTIONS = getExamQuestions(MAIN_EXAM_ID);

// Geriye dönük uyumluluk takma adları
export const SAMPLE_EXAM_META = MAIN_EXAM_META;
export const SAMPLE_EXAM_QUESTIONS = MAIN_EXAM_QUESTIONS;
export const EXAMS = getPracticeExamIds();
