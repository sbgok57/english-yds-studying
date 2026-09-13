import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const count = await prisma.quote.count();
    if (count === 0) {
      return NextResponse.json({
        text: "A1'den başlayan sen değil misin? Bak nerelere geldin, YDS'ye az kaldı! 🚀",
        category: "MOTIVASYON",
        animation: "rocket.json",
        author: "YDS Master",
      });
    }

    const skip = Math.floor(Math.random() * count);
    const [randomQuote] = await prisma.quote.findMany({
      skip,
      take: 1,
    });

    return NextResponse.json(randomQuote);
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json({
      text: "Bugün çalıştığın her kelime, yarınki netinin teminatıdır. Başarı seninle! ✨",
      category: "MOTIVASYON",
      animation: "sparkles.json",
      author: "YDS Master",
    });
  }
}
