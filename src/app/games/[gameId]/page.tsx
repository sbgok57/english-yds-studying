import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import MatchingGame, { type Pair } from "@/components/games/MatchingGame";
import BalloonPop, { type BalloonQuestion } from "@/components/games/BalloonPop";
import SpinWheelGame from "@/components/games/SpinWheelGame";
import AnagramGame from "@/components/games/AnagramGame";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const FALLBACK_PAIRS: Pair[] = [
  { id: "p1", english: "mitigate", turkish: "hafifletmek / azaltmak" },
  { id: "p2", english: "inevitable", turkish: "kaçınılmaz / çaresiz" },
  { id: "p3", english: "pioneer", turkish: "öncü / yol açan" },
  { id: "p4", english: "deteriorate", turkish: "kötüleşmek / bozulmak" },
  { id: "p5", english: "drastically", turkish: "ciddi / köklü biçimde" },
  { id: "p6", english: "carry out", turkish: "yürütmek / uygulamak" },
];

const BALLOON_QUESTIONS: BalloonQuestion[] = [
  {
    prompt: "mitigate = ?",
    choices: ["hafifletmek", "kötüleştirmek", "ertelemek", "hızlandırmak"],
    answerIndex: 0,
  },
  {
    prompt: "inevitable = ?",
    choices: ["kaçınılmaz", "imkânsız", "faydalı", "geçici"],
    answerIndex: 0,
  },
  {
    prompt: "carry out = ?",
    choices: ["yürütmek / icra etmek", "vazgeçmek", "iptal etmek", "tahmin etmek"],
    answerIndex: 0,
  },
  {
    prompt: "cope with = ?",
    choices: ["başa çıkmak", "yok etmek", "güvenmek", "ertelemek"],
    answerIndex: 0,
  },
  {
    prompt: "She _____ in Ankara since 2015.",
    choices: ["has lived", "lived", "is living", "had lived"],
    answerIndex: 0,
  },
  {
    prompt: "Water _____ at 100 degrees Celsius.",
    choices: ["boils", "boiled", "is boiling", "has boiled"],
    answerIndex: 0,
  },
];

export default async function GameLauncherPage({
  params,
}: {
  params: Promise<{ gameId: string }> | { gameId: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const gameId = resolvedParams?.gameId;

  // Veritabanından kelimeleri çek
  let dbPairs: Pair[] = [];
  try {
    const words = await prisma.word.findMany({
      take: 12,
      select: { id: true, english: true, turkish: true, imageUrl: true },
    });
    if (words.length >= 6) {
      dbPairs = words.map((w) => ({
        id: w.id,
        english: w.english,
        turkish: w.turkish.split(",")[0].trim(),
        imageUrl: w.imageUrl || undefined,
      }));
    }
  } catch (e) {
    console.warn("DB words fetch for game fallback:", e);
  }

  const activePairs = dbPairs.length >= 6 ? dbPairs : FALLBACK_PAIRS;

  const validGames = ["matching", "balloon", "wheel", "anagram"];
  if (!validGames.includes(gameId)) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Üst Geri Butonu */}
      <div className="flex items-center justify-between">
        <Link
          href="/games"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" /> Tüm Oyunlar
        </Link>
      </div>

      {/* Oyun Bileşenleri */}
      {gameId === "matching" && <MatchingGame pairs={activePairs} />}
      {gameId === "balloon" && <BalloonPop questions={BALLOON_QUESTIONS} />}
      {gameId === "wheel" && <SpinWheelGame />}
      {gameId === "anagram" && <AnagramGame />}
    </div>
  );
}
