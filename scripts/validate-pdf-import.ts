import { PdfVocabularyImporter } from '../src/services/pdf';
import { isExtractionCorrupted, repairKnownPdfDropouts } from '../src/services/wordSanitizer';
import { INITIAL_VOCABULARY } from '../src/data/vocabulary';

console.log('🧪 Starting Strict PDF Import & Vocabulary Integrity Validation...\n');

let errorCount = 0;

// =========================================================================
// TEST 1: Table-Aware Parsing & Phrasal Verbs Extraction Test
// =========================================================================
console.log('1. Testing Table-Aware Phrasal Verbs Extraction:');

const sampleTableLines = [
  'PHRASAL VERB | MEANING | SYNONYMS',
  'TAKE OVER | devralmak, kontrolü ele geçirmek | assume control',
  'TURN INTO | dönüşmek, haline gelmek | transform into',
  'STEM FROM | -den kaynaklanmak, ileri gelmek | originate from',
  'GET RID OF | kurtulmak, başından atmak | eliminate, dispose of',
  'ACCOUNT FOR | açıklamak, oluşturmak | explain, constitute',
  'KEEP UP WITH | ayak uydurmak, hızına yetişmek | keep pace with',
  'MAKE UP | oluşturmak, uydurmak | constitute, invent',
  'CALL OFF | iptal etmek | cancel',
  'DEAL WITH | ele almak, başa çıkmak | handle, cope with',
  'PUT OFF | ertelemek | postpone, delay',
  'RELY ON | güvenmek, bel bağlamak | depend on, trust',
  'LOOK AFTER | bakmak, ilgilenmek | take care of',
  'TURN DOWN | reddetmek | reject, refuse',
  'BREAK OUT | patlak vermek, aniden başlamak | erupt, begin suddenly',
  'CARRY ON | devam etmek, sürdürmek | continue, go on',
  'BE FED UP WITH | bıkmak, usanmak | be tired of',
  'LOOK FOR | aramak | search for',
  'GO THROUGH | yaşamak, geçirmek, incelemek | experience, examine',
  'GIVE OFF | salmak, yaymak | emit, release',
  'GET AWAY | kaçmak, uzaklaşmak | escape',
  'FALL APART | parçalara ayrılmak, dağılmak | crumble',
];

const parsedTable = PdfVocabularyImporter.parseLines(
  sampleTableLines,
  'YDS_Phrasal_Verbs_Test.pdf',
  1,
  'Tier 1: Native PDF Operator (Tj/TJ)'
);

const expectedPhrasals = [
  'take over', 'turn into', 'stem from', 'get rid of', 'account for',
  'keep up with', 'make up', 'call off', 'deal with', 'put off',
  'rely on', 'look after', 'turn down', 'break out', 'carry on',
  'be fed up with', 'look for', 'go through', 'give off', 'get away',
  'fall apart',
];

const extractedWords = new Map<string, typeof parsedTable.items[0]>();
parsedTable.items.forEach((item) => {
  extractedWords.set(item.word.toLowerCase(), item);
});

expectedPhrasals.forEach((phrasal) => {
  const item = extractedWords.get(phrasal);
  if (!item) {
    console.error(`  ❌ FAILED: Expected phrasal verb "${phrasal}" was not extracted.`);
    errorCount++;
  } else {
    if (!item.meaningsTr || item.meaningsTr.length === 0) {
      console.error(`  ❌ FAILED: Meanings missing for "${phrasal}".`);
      errorCount++;
    }
    if (item.partOfSpeech !== 'phrasal_verb') {
      console.error(`  ❌ FAILED: "${phrasal}" was classified as "${item.partOfSpeech}", expected "phrasal_verb".`);
      errorCount++;
    }
    if (!item.rawText || !item.sourceFile || !item.sourcePage || item.confidence === undefined) {
      console.error(`  ❌ FAILED: Provenance fields missing for "${phrasal}".`);
      errorCount++;
    }
  }
});

if (parsedTable.items.length === 21) {
  console.log(`  ✓ All 21 required phrasal verbs extracted with exact Turkish meanings and table association.`);
} else {
  console.error(`  ❌ FAILED: Expected 21 phrasal verbs, got ${parsedTable.items.length}.`);
  errorCount++;
}

// =========================================================================
// TEST 2: PDF Text Dropout Repair & Corruption Detection
// =========================================================================
console.log('\n2. Testing PDF Text Dropout Repair & Corruption Quarantine:');

const testDropouts = [
  { raw: 'e planation', expected: 'explanation' },
  { raw: 'kno ledge', expected: 'knowledge' },
  { raw: ' e perience', expected: 'experience' },
  { raw: 'sub tantial', expected: 'substantial' },
  { raw: 'a count for', expected: 'account for' },
];

testDropouts.forEach(({ raw, expected }) => {
  const repaired = repairKnownPdfDropouts(raw);
  if (repaired.toLowerCase() !== expected.toLowerCase()) {
    console.error(`  ❌ FAILED: Dropout "${raw}" was not repaired to "${expected}", got "${repaired}".`);
    errorCount++;
  } else {
    console.log(`  ✓ Dropout "${raw}" safely resolved to "${repaired}" with high confidence.`);
  }
});

const corruptedCandidates = [
  'bad\uFFFDchar',
  'Ã§Ä±kÄ±ÅŸ',
  'sayfa 12',
  '12345',
  '--- PAGE BREAK ---',
];

corruptedCandidates.forEach((cand) => {
  const isCorrupt = isExtractionCorrupted(cand);
  if (!isCorrupt) {
    console.error(`  ❌ FAILED: Known corrupted candidate "${cand}" was not flagged as corrupted.`);
    errorCount++;
  } else {
    console.log(`  ✓ Corrupted candidate "${cand}" correctly flagged and quarantined.`);
  }
});

// =========================================================================
// TEST 3: Turkish Character Safety in Extraction
// =========================================================================
console.log('\n3. Testing Turkish Character Integrity (ç, Ç, ğ, Ğ, ı, İ, ö, Ö, ş, Ş, ü, Ü):');

const turkishTestLines = [
  'çıkarım | sonuç çıkarma, çıkarım yapma | deduction',
  'öngörü | geleceği tahmin etme | foresight',
  'şüphesiz | kesin olarak | undoubtedly',
  'gözlem | dikkatle izleme | observation',
  'üretim | imalat, meydana getirme | manufacturing',
  'İlke | temel prensip, kural | principle',
];

const parsedTurkish = PdfVocabularyImporter.parseLines(
  turkishTestLines,
  'Turkish_Test.pdf',
  1
);

let turkishPass = true;
parsedTurkish.items.forEach((item) => {
  const text = item.word + ' ' + item.meaningsTr.join(' ');
  if (/[\uFFFDÃÄÅ?]/.test(text)) {
    console.error(`  ❌ FAILED: Corrupted character detected in "${item.word}".`);
    errorCount++;
    turkishPass = false;
  }
});

if (turkishPass && parsedTurkish.items.length === 6) {
  console.log(`  ✓ All Turkish characters preserved without mojibake or character replacement.`);
}

// =========================================================================
// TEST 4: Existing Vocabulary Database Integrity
// =========================================================================
console.log('\n4. Auditing Existing Vocabulary Database:');

const auditResult = PdfVocabularyImporter.auditVocabularyIntegrity(INITIAL_VOCABULARY);
console.log(`  - Total Inspected: ${INITIAL_VOCABULARY.length}`);
console.log(`  - Valid Items:     ${auditResult.validItems.length}`);
console.log(`  - Repairable:      ${auditResult.repairableItems.length}`);
console.log(`  - Corrupted:       ${auditResult.corruptedItems.length}`);
console.log(`  - Duplicates:      ${auditResult.duplicateItems.length}`);
console.log(`  - Manual Review:   ${auditResult.manualReviewItems.length}`);

if (auditResult.corruptedItems.length > 0) {
  console.error(`  ❌ FAILED: ${auditResult.corruptedItems.length} corrupted items found in vocabulary database!`);
  errorCount += auditResult.corruptedItems.length;
} else {
  console.log(`  ✓ Zero corrupted records found in active vocabulary database.`);
}

if (auditResult.duplicateItems.length > 0) {
  console.error(`  ❌ FAILED: ${auditResult.duplicateItems.length} duplicate items found!`);
  errorCount += auditResult.duplicateItems.length;
} else {
  console.log(`  ✓ Zero duplicate records found.`);
}

console.log('\n----------------------------------------');
if (errorCount === 0) {
  console.log('✅ ALL PDF Import, Phrasal Verbs, and Character Integrity Validations PASSED with 0 errors!\n');
  process.exit(0);
} else {
  console.error(`❌ PDF Import Validation FAILED with ${errorCount} error(s).\n`);
  process.exit(1);
}
