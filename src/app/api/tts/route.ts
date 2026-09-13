import { NextRequest, NextResponse } from "next/server";

const VOICES: Record<string, { female: string; male: string }> = {
  "en-GB": { female: "en-GB-SoniaNeural", male: "en-GB-RyanNeural" },
  "en-US": { female: "en-US-JennyNeural", male: "en-US-GuyNeural" },
  "en-AU": { female: "en-AU-NatashaNeural", male: "en-AU-WilliamNeural" },
  "en-NZ": { female: "en-NZ-MollyNeural", male: "en-NZ-MitchellNeural" },
  "en-IN": { female: "en-IN-NeerjaNeural", male: "en-IN-PrabhatNeural" },
};

export async function GET(req: NextRequest) {
  const text = req.nextUrl.searchParams.get("text") ?? "";
  const accent = req.nextUrl.searchParams.get("accent") ?? "en-GB";
  const gender = (req.nextUrl.searchParams.get("gender") ?? "female") as "female" | "male";

  if (!text || text.length > 500) {
    return NextResponse.json({ error: "Geçersiz metin" }, { status: 400 });
  }

  const voice = VOICES[accent]?.[gender];
  if (!voice) {
    return NextResponse.json({ error: "Geçersiz aksan veya ses seçimi" }, { status: 400 });
  }

  const azureKey = process.env.AZURE_SPEECH_KEY;
  const azureRegion = process.env.AZURE_SPEECH_REGION || "westeurope";

  // Azure anahtarı yapılandırılmamışsa, istemcinin Web Speech API kullanması için 200 dön
  if (!azureKey || azureKey.trim() === "") {
    return NextResponse.json({
      fallbackWebSpeech: true,
      text,
      accent,
      gender,
      message: "Web Speech API fallback devrede",
    });
  }

  try {
    const res = await fetch(
      `https://${azureRegion}.tts.speech.microsoft.com/cognitiveservices/v1`,
      {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": azureKey,
          "Content-Type": "application/ssml+xml",
          "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3",
          "User-Agent": "YDSMasterApp",
        },
        body: `<speak version='1.0' xml:lang='${accent}'>
                 <voice name='${voice}'>${text}</voice>
               </speak>`,
      }
    );

    if (!res.ok) {
      throw new Error(`Azure Speech API yanıtı: ${res.status}`);
    }

    const audioBuffer = await res.arrayBuffer();
    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.warn("Azure TTS API çağrısı başarısız, Web Speech fallback devreye giriyor:", error);
    return NextResponse.json({
      fallbackWebSpeech: true,
      text,
      accent,
      gender,
    });
  }
}
