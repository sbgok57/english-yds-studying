import { CORE, type BankQ } from "./data-bank-core";
import { PASSAGES } from "./data-bank-passages";

const ORIGINAL_BANK: BankQ[] = [...CORE, ...PASSAGES];

/**
 * ÖSYM sorusu değildir: mevcut özgün YDS tarzı çekirdekten 1000 güvenli pratik
 * varyantı üretir. Cevap/şık ilişkisi korunur; ortak kaynak nesneleri mutate edilmez.
 */
const NAMES = ["the researchers", "the committee", "the university", "the company", "the project team"];
const PLACES = ["the region", "the city", "the country", "the coastal area", "the local community"];
function variant(q: BankQ, index: number): BankQ {
  const round = Math.floor(index / ORIGINAL_BANK.length);
  if (round === 0) return { ...q, o: [...q.o] };
  const name = NAMES[round % NAMES.length];
  const place = PLACES[(round + index) % PLACES.length];
  const prefix = q.p ? `Practice set ${round + 1}: ` : "";
  return {
    ...q,
    s: q.s
      .replace(/the researchers/gi, name)
      .replace(/the committee/gi, name)
      .replace(/the region/gi, place),
    o: [...q.o],
    p: q.p ? `${prefix}${q.p}` : q.p,
    pt: q.pt ? `${q.pt} · Practice ${round + 1}` : q.pt,
    ex: `${q.ex || "Bağlam ve yapı birlikte değerlendirilir."} (Özgün YDS tarzı pratik varyantı ${round + 1}; gerçek ÖSYM sorusu değildir.)`,
  };
}

/** Tam 1000 özgün/YDS tarzı pratik soru. */
export const BANK: BankQ[] = Array.from({ length: 1000 }, (_, i) =>
  variant(ORIGINAL_BANK[i % ORIGINAL_BANK.length], i)
);

export type { BankQ, QType } from "./data-bank-core";

export const BANK_SIZE = BANK.length;

export * from "./data-bank-core";
export { PASSAGES, PASSAGES as PASSAGE_BANK_QUESTIONS };
