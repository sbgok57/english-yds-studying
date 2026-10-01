export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface MasterVocabWord {
  id: number;
  word: string;
  tr: string;
  type: "fiil" | "isim" | "sıfat" | "zarf" | "phrasal verb";
  level: CefrLevel;
  category: string;
  emoji: string;
  hint: string;
  example: string;
  exampleTr: string;
  synonyms: string[];
  frequency: number; // 1 (rare) to 5 (must know / very frequent in YDS/YDT)
}
