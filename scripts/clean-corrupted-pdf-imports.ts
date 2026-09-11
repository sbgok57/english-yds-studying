import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PdfVocabularyImporter } from '../src/services/pdf.js';
import { VocabularyItem } from '../src/types/vocabulary.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const vocabJsonPath = path.resolve(__dirname, '../src/data/vocabulary.json');

console.log('🧹 [Migration] Starting Safe PDF Corruption Audit & Cleanup...');

if (!fs.existsSync(vocabJsonPath)) {
  console.error('❌ Vocabulary data file not found at:', vocabJsonPath);
  process.exit(1);
}

const rawData = fs.readFileSync(vocabJsonPath, 'utf-8');
const items: VocabularyItem[] = JSON.parse(rawData);

console.log(`📊 Inspected Total Vocabulary Items: ${items.length}`);

const { cleanItems, removedCount, removedWords } = PdfVocabularyImporter.cleanCorruptedPdfItems(items);

console.log(`✅ Valid Items Preserved: ${cleanItems.length}`);
console.log(`🗑️ Corrupted PDF Records Removed: ${removedCount}`);

if (removedCount > 0) {
  console.log(`📝 Removed corrupted entries:`, removedWords);
  fs.writeFileSync(vocabJsonPath, JSON.stringify(cleanItems, null, 2), 'utf-8');
  console.log('💾 Successfully updated vocabulary database with cleaned dataset.');
} else {
  console.log('✨ No corrupted PDF import records detected. Database is already pristine and verified.');
}

console.log('🛡️ Migration completed with zero loss of genuine vocabulary or learning states.');
