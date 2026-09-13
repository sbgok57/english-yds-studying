import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

export async function seedWords() {
  console.log("📚 Seeding full YDS vocabulary database (436+ genuine words)...");

  let totalSeeded = 0;

  // 1. Seed canonical vocabulary if present
  const canonicalPath = path.resolve(__dirname, "../src/data/canonical-vocabulary.json");
  if (fs.existsSync(canonicalPath)) {
    try {
      const canonicalData = JSON.parse(fs.readFileSync(canonicalPath, "utf-8"));
      for (const set of canonicalData.sets || []) {
        for (const card of set.cards || []) {
          const term = String(card.term || "").trim();
          const meaningTr = String(card.meaningTr || "").trim();
          if (!term || !meaningTr) continue;

          await prisma.word.upsert({
            where: {
              english_turkish: {
                english: term,
                turkish: meaningTr,
              },
            },
            update: {
              definitionEn: card.definitionEn || "",
              source: set.id || "canonical",
              sourceRow: card.sourceRow || 0,
              integrityHash: card.integrityHash || "",
            },
            create: {
              english: term,
              turkish: meaningTr,
              definitionEn: card.definitionEn || "",
              examples: JSON.stringify([
                `The research highlights how crucial it is to comprehend ${term}.`,
                `In academic discourse, ${term} plays a fundamental role.`,
              ]),
              synonyms: JSON.stringify([term]),
              level: "B2-YDS",
              type: set.id.includes("adverbs")
                ? "zarf"
                : set.id.includes("phrasal")
                ? "phrasal verb"
                : "genel",
              source: set.id || "canonical",
              sourceRow: card.sourceRow || 0,
              integrityHash: card.integrityHash || "",
              approved: true,
            },
          });
          totalSeeded++;
        }
      }
    } catch (e) {
      console.warn("Canonical vocab seed warning:", e);
    }
  }

  // 2. Seed 436 genuine YDS words
  const fullVocabPath = path.resolve(__dirname, "../src/data/yds-vocabulary-436.json");
  if (fs.existsSync(fullVocabPath)) {
    try {
      const fullVocab = JSON.parse(fs.readFileSync(fullVocabPath, "utf-8"));
      for (const item of fullVocab) {
        const word = String(item.word || "").trim();
        const meanings: string[] = Array.isArray(item.meaningsTr)
          ? item.meaningsTr
          : [String(item.meaningsTr || "anlam")];
        const primaryMeaning = meanings.join(", ") || "anlam";

        if (!word) continue;

        const partOfSpeech = item.partOfSpeech || "genel";
        let type = "genel";
        if (partOfSpeech.includes("verb") || partOfSpeech === "fiil") type = "fiil";
        else if (partOfSpeech.includes("noun") || partOfSpeech === "isim") type = "isim";
        else if (partOfSpeech.includes("adj") || partOfSpeech === "sıfat") type = "sıfat";
        else if (partOfSpeech.includes("adv") || partOfSpeech === "zarf") type = "zarf";
        else if (partOfSpeech.includes("phrasal")) type = "phrasal verb";

        const examples = [];
        if (item.example) examples.push(item.example);
        if (item.exampleTr) examples.push(item.exampleTr);

        const synonyms = Array.isArray(item.synonyms) ? item.synonyms : [];

        await prisma.word.upsert({
          where: {
            english_turkish: {
              english: word,
              turkish: primaryMeaning,
            },
          },
          update: {
            definitionEn: item.visualConcept || item.ydsNote || "",
            examples: JSON.stringify(examples),
            synonyms: JSON.stringify(synonyms),
            level: item.difficulty || "B2",
            type,
            source: item.source || "YDS Core",
          },
          create: {
            english: word,
            turkish: primaryMeaning,
            definitionEn: item.visualConcept || item.ydsNote || "",
            examples: JSON.stringify(examples),
            synonyms: JSON.stringify(synonyms),
            level: item.difficulty || "B2",
            type,
            source: item.source || "YDS Core",
            approved: true,
          },
        });
        totalSeeded++;
      }
    } catch (e) {
      console.warn("Full vocab 436 seed warning:", e);
    }
  }

  console.log(`✅ Seeded total ${totalSeeded} vocabulary entries into database.`);
}

if (require.main === module) {
  seedWords()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
