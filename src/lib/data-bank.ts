import { CORE, type BankQ, type QType } from "./data-bank-core";
import { PASSAGE_BANK_QUESTIONS } from "./data-reading";

export * from "./data-bank-core";
export { PASSAGE_BANK_QUESTIONS };

export const BANK: BankQ[] = [...CORE, ...PASSAGE_BANK_QUESTIONS];
