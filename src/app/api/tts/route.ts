import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Microsoft Edge neural sesleri — 5 aksan × (kadın/erkek) = 10 garantili farklı ses
const VALID_VOICES = new Set([
  "en-GB-SoniaNeural", // İngiliz · Kadın
  "en-GB-RyanNeural", //  İngiliz · Erkek
  "en-US-JennyNeural", // Amerikan · Kadın
  "en-US-GuyNeural", //   Amerikan · Erkek
  "en-AU-NatashaNeural", // Avustralya · Kadın
  "en-AU-WilliamNeural", // Avustralya · Erkek
  "en-NZ-MollyNeural", //   Yeni Zelanda · Kadın
  "en-NZ-MitchellNeural", // Yeni Zelanda · Erkek
  "en-IN-NeerjaNeural", //  Hint · Kadın
  "en-IN-PrabhatNeural", // Hint · Erkek
]);

// Bellek içi önbellek → aynı kelime tekrar tekrar sentezlenmez (CPU + ağ tasarrufu)
const cache = new Map<string, Buffer>();
const MAX_CACHE = 300;

async function synthesize(voice: string, text: string): Promise<Buffer> {
  const { MsEdgeTTS, OUTPUT_FORMAT } = await import("msedge-tts");
  const tts = new MsEdgeTTS();
  await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const { audioStream } = tts.toStream(text);
  const chunks: Buffer[] = [];
  for await (const chunk of audioStream) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks);
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const voice = url.searchParams.get("voice") || "";
  const text = (url.searchParams.get("text") || "").slice(0, 300).trim();

  if (!VALID_VOICES.has(voice) || !text) {
    return new Response("geçersiz istek", { status: 400 });
  }

  const key = voice + "\u0000" + text;
  let buf = cache.get(key);

  if (!buf) {
    try {
      buf = await synthesize(voice, text);
    } catch {
      return new Response("ses üretilemedi", { status: 502 });
    }
    if (cache.size >= MAX_CACHE) {
      const keys = [...cache.keys()];
      for (let i = 0; i < Math.floor(MAX_CACHE / 2); i++) cache.delete(keys[i]);
    }
    cache.set(key, buf);
  }

  return new Response(new Uint8Array(buf), {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": String(buf.length),
      "Cache-Control": "public, max-age=86400",
    },
  });
}

