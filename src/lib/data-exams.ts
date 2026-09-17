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
    explanation: q.ex,
    passage: q.p,
    passageTitle: q.pt,
  };
}

export function getExamQuestions(id: string): ExamQuestion[] {
  const seed = hashString(id);
  let picked: BankQ[] = [];
  ORDER.forEach((t, i) => {
    // SAFETY: Deep clone items before shuffling so shared BANK is never mutated
    const matching = BANK.filter((q) => q.t === t).map((q) => ({
      ...q,
      o: [...q.o],
    }));
    const pool = shuffleWithSeed(matching, seed + i * 7919);
    const slice = pool.slice(0, QUOTA[t]);
    // seçenek sıralarını da sınav kimliğine göre karıştır (deneme hissi)
    const r = mulberry32(seed + i * 104729 + 3);
    slice.forEach((q) => {
      const perm = shuffleWithSeed(q.o.map((_, idx) => idx), Math.floor(r() * 1e9));
      q.o = perm.map((idx) => q.o[idx]);
      q.a = perm.indexOf(q.a);
    });
    picked = picked.concat(slice);
  });
  return picked.map((q, i) => toExamQuestion(q, i + 1));
}

// ============ Meta ============
export function getExamMeta(id: string): ExamMeta {
  const m = getPracticeExamIds().find((x) => x.id === id);
  if (m) {
    return {
      id,
      title: m.title,
      subtitle: m.year === "Özgün" ? "Özgün Deneme Sınavı" : "İngilizce Alan Bilgisi",
      year: m.year,
      session: m.session,
      durationMin: 180,
      questionCount: QUESTION_COUNT,
      isOfficial: m.year !== "Özgün",
    };
  }
  if (id === MAIN_EXAM_ID) {
    return {
      id,
      title: "YDS 2024 İlkbahar",
      subtitle: "İngilizce Alan Bilgisi — Tam Deneme",
      year: "2024",
      session: "İlkbahar Dönemi",
      durationMin: 180,
      questionCount: QUESTION_COUNT,
      isOfficial: true,
    };
  }
  // Bilinmeyen id → güvenli varsayılan (çökme olmaz)
  return {
    id,
    title: id.replace(/-/g, " ").toUpperCase(),
    subtitle: "İngilizce Alan Bilgisi",
    year: "—",
    session: "Deneme",
    durationMin: 180,
    questionCount: QUESTION_COUNT,
    isOfficial: false,
  };
}

// ============ Sınav listesi (2013-2026 + özgün denemeler) ============
const YEARS = [
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
];
const SESSIONS = ["ilkbahar", "sonbahar"];

export function getPracticeExamIds(): {
  id: string;
  title: string;
  year: string;
  session: string;
}[] {
  const list: { id: string; title: string; year: string; session: string }[] = [];
  YEARS.forEach((y) => {
    SESSIONS.forEach((s) => {
      list.push({
        id: `yds-${y}-${s}`,
        title: `YDS ${y} ${s === "ilkbahar" ? "İlkbahar" : "Sonbahar"}`,
        year: y,
        session: s === "ilkbahar" ? "İlkbahar" : "Sonbahar",
      });
    });
  });
  for (let d = 1; d <= 72; d++) {
    list.push({ id: `deneme-${d}`, title: `Özgün Deneme ${d}`, year: "Özgün", session: `Deneme ${d}` });
  }
  return list;
}

// Uyumluluk için hazır değerler
export const MAIN_EXAM_META = getExamMeta(MAIN_EXAM_ID);
export const MAIN_EXAM_QUESTIONS = getExamQuestions(MAIN_EXAM_ID);

// Geriye dönük uyumluluk takma adları
export const SAMPLE_EXAM_META = MAIN_EXAM_META;
export const SAMPLE_EXAM_QUESTIONS = MAIN_EXAM_QUESTIONS;
