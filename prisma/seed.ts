import { PrismaClient } from "@prisma/client";
import { seedQuotes } from "./seed-quotes";
import { GRAMMAR_TOPICS } from "../src/lib/grammar-data";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Starting YDS Master database seed...");

  // 1. Seed 500 Quotes
  await seedQuotes();

  // 2. Seed Canonical Vocabulary from Quizlet Pipeline Output
  const canonicalPath = path.resolve(__dirname, "../src/data/canonical-vocabulary.json");
  if (fs.existsSync(canonicalPath)) {
    const raw = fs.readFileSync(canonicalPath, "utf-8");
    const canonicalData = JSON.parse(raw);
    console.log(`Loading canonical Quizlet cards from ${canonicalPath}...`);

    let wordCount = 0;
    for (const set of canonicalData.sets) {
      for (const card of set.cards) {
        await prisma.word.upsert({
          where: {
            english_turkish: {
              english: card.term,
              turkish: card.meaningTr,
            },
          },
          update: {
            definitionEn: card.definitionEn,
            source: set.id,
            sourceRow: card.sourceRow,
            integrityHash: card.integrityHash,
          },
          create: {
            id: card.id,
            english: card.term,
            turkish: card.meaningTr,
            definitionEn: card.definitionEn,
            examples: JSON.stringify([
              `The team decided to ${card.term} due to unforeseen circumstances.`,
              `Understanding how to ${card.term} is crucial for YDS success.`,
            ]),
            synonyms: JSON.stringify([card.term, "key term"]),
            level: "B2-YDS",
            type: set.id.includes("adverbs") ? "zarf" : set.id.includes("phrasal") ? "phrasal verb" : "genel",
            source: set.id,
            sourceRow: card.sourceRow,
            integrityHash: card.integrityHash,
            approved: true,
          },
        });
        wordCount++;
      }
    }
    console.log(`✅ Seeded ${wordCount} canonical vocabulary cards.`);
  }

  // 3. Seed Grammar Topics
  console.log("Seeding 15 Grammar Topics...");
  for (const topic of GRAMMAR_TOPICS) {
    await prisma.grammarTopic.upsert({
      where: { slug: topic.slug },
      update: {
        title: topic.title,
        emoji: topic.emoji,
        colorTheme: topic.colorTheme,
        simpleSummary: topic.simpleSummary,
        sections: JSON.stringify(topic.sections),
        trapAlerts: JSON.stringify(topic.trapAlerts),
        signalWords: JSON.stringify(topic.signalWords),
        questionCount: 100,
      },
      create: {
        slug: topic.slug,
        title: topic.title,
        emoji: topic.emoji,
        colorTheme: topic.colorTheme,
        simpleSummary: topic.simpleSummary,
        sections: JSON.stringify(topic.sections),
        trapAlerts: JSON.stringify(topic.trapAlerts),
        signalWords: JSON.stringify(topic.signalWords),
        questionCount: 100,
      },
    });

    // Seed sample practice questions for this topic
    for (const q of topic.practiceQuestions) {
      await prisma.question.upsert({
        where: { id: `${topic.slug}-q-${q.id}` },
        update: {
          text: q.text,
          options: JSON.stringify(q.options),
          correct: q.correct,
          explanation: q.explanation,
          memoryCode: q.memoryCode,
        },
        create: {
          id: `${topic.slug}-q-${q.id}`,
          topicSlug: topic.slug,
          questionNumber: q.id,
          type: "Grammar",
          text: q.text,
          options: JSON.stringify(q.options),
          correct: q.correct,
          explanation: q.explanation,
          memoryCode: q.memoryCode,
        },
      });
    }
  }
  console.log("✅ 15 Grammar topics and practice questions seeded.");

  // 4. Seed Exams (2013 - 2026 Past Exams + 100 Practice Mock Exams)
  console.log("Seeding Exams (2013-2026 + 100 Mock Exams)...");
  
  // Real Exams: 2013 to 2026
  for (let year = 2013; year <= 2026; year++) {
    const periods = ["İlkbahar", "Sonbahar"];
    for (const period of periods) {
      const examId = `yds-${year}-${period.toLowerCase()}`;
      await prisma.exam.upsert({
        where: { id: examId },
        update: { title: `YDS ${year} ${period}`, year, period, isReal: true },
        create: {
          id: examId,
          title: `YDS ${year} ${period}`,
          year,
          period,
          isReal: true,
          durationMinutes: 180,
          questionCount: 80,
        },
      });
    }
  }

  // 100 Practice Mock Exams
  for (let i = 1; i <= 100; i++) {
    const mockId = `deneme-${String(i).padStart(3, "0")}`;
    await prisma.exam.upsert({
      where: { id: mockId },
      update: { title: `YDS Özgün Deneme Sınavı #${i}`, isReal: false },
      create: {
        id: mockId,
        title: `YDS Özgün Deneme Sınavı #${i}`,
        period: "Özgün Deneme",
        isReal: false,
        durationMinutes: 180,
        questionCount: 80,
      },
    });
  }
  console.log("✅ 28 Real Exams and 100 Mock Exams slots seeded.");

  // 5. Seed Default User
  const passwordHash = await bcrypt.hash("yds123456", 10);
  await prisma.user.upsert({
    where: { email: "ogrenci@ydsmaster.com" },
    update: {},
    create: {
      email: "ogrenci@ydsmaster.com",
      username: "ydskasifi",
      passwordHash,
      avatarId: "astronaut",
      level: "B1",
      streak: 7,
      totalPoints: 1250,
    },
  });
  console.log("✅ Default student account created: ogrenci@ydsmaster.com / yds123456");

  console.log("🎉 Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
