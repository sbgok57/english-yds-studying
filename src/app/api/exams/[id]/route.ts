import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { YDS_QUESTION_TYPES } from "@/lib/yds-constants";

export const dynamic = "force-dynamic";

interface QuestionTemplate {
  text: string;
  options: string[];
  correct: "A" | "B" | "C" | "D" | "E";
  explanation: string;
  type: string;
}

// 80 soru için YDS soru tipi dağılımı
function generate80Questions(examTitle: string) {
  const questions = [];
  const alphabet = ["A", "B", "C", "D", "E"] as const;

  // 1-6 Kelime
  for (let i = 1; i <= 6; i++) {
    const vocabWords = [
      { w: "pioneer", tr: "öncü", opt: ["pioneer", "hindrance", "reluctance", "hazard", "illusion"], c: "A" as const, exp: "Cümlede çığır açan bir liderden bahsedilmektedir. Doğru yanıt 'pioneer' (öncü)." },
      { w: "deteriorate", tr: "kötüleşmek", opt: ["flourish", "deteriorate", "accelerate", "reconcile", "subsidize"], c: "B" as const, exp: "Hava kirliliğinin sağlığı giderek bozduğu anlatılmaktadır. 'Deteriorate' (kötüleşmek) doğru cevaptır." },
      { w: "inevitable", tr: "kaçınılmaz", opt: ["plausible", "volatile", "inevitable", "superficial", "lenient"], c: "C" as const, exp: "Teknolojik dönüşümün durdurulamayacağı vurgulanmaktadır: 'inevitable' (kaçınılmaz)." },
      { w: "drastically", tr: "ciddi ölçüde", opt: ["barely", "scarcely", "vaguely", "drastically", "mutually"], c: "D" as const, exp: "Fiyatların sert ve keskin biçimde düştüğü ifade edilmektedir: 'drastically' (ciddi derecede)." },
      { w: "carry out", tr: "yürütmek", opt: ["carry out", "call off", "give in", "put out", "turn down"], c: "A" as const, exp: "'Carry out an experiment' (deney yürütmek) ayrılmaz bir kalıptır. Doğru cevap A." },
      { w: "cope with", tr: "üstesinden gelmek", opt: ["look down on", "cope with", "make up for", "run out of", "get rid of"], c: "B" as const, exp: "'Cope with adversity' (zorluklarla başa çıkmak). Doğru cevap B." },
    ];
    const v = vocabWords[i - 1];
    questions.push({
      id: i,
      text: `${i}. In the field of contemporary research, scientists often need to _____ numerous empirical trials before formulating a verifiable theory.`,
      options: v.opt,
      correct: v.c,
      explanation: v.exp,
      type: "Vocabulary (Kelime Bilgisi)",
    });
  }

  // 7-16 Gramer
  for (let i = 7; i <= 16; i++) {
    const correctLetter = alphabet[(i % 5)];
    questions.push({
      id: i,
      text: `${i}. Ever since the breakthrough discovery _____ in the laboratory, researchers _____ to synthesize the organic compound at scale.`,
      options: [
        "was made / have attempted",
        "is made / attempted",
        "had been made / will attempt",
        "has made / had attempted",
        "was making / attempt",
      ],
      correct: "A" as const,
      explanation: "Zaman uyumu: 'Since + V2 (was made), have/has V3 (have attempted)'. S-P-P kuralı gereği doğru yanıt A'dır.",
      type: "Grammar (Dilbilgisi)",
    });
  }

  // 17-26 Cloze Test
  for (let i = 17; i <= 26; i++) {
    questions.push({
      id: i,
      text: `${i}. [CLOZE PARAGRAFI] Neuroplasticity refers to the remarkable ability of the nervous system to adapt. (Soru ${i}) _____ ongoing stimulation, neural pathways reorganize.`,
      options: ["Thanks to", "In spite of", "Rather than", "As if", "Lest"],
      correct: "A" as const,
      explanation: "Cümlede uyarılma sayesinde sinir yollarının yeniden organize olduğu pozitif sebep-sonuç ilişkisiyle belirtilmiştir. Cevap 'Thanks to' (Sayesinde).",
      type: "Cloze Test",
    });
  }

  // 27-36 Cümle Tamamlama
  for (let i = 27; i <= 36; i++) {
    questions.push({
      id: i,
      text: `${i}. Although synthetic polymers have revolutionized modern industrial manufacturing, _____.`,
      options: [
        "their non-biodegradable persistence poses catastrophic threats to marine ecosystems",
        "they are widely accepted as completely harmless to organic life",
        "industrial production costs continue to plummet year after year",
        "inventors were awarded the highest scientific honors of the century",
        "recycling initiatives have proven obsolete in every major metropolis",
      ],
      correct: "A" as const,
      explanation: "Zıtlık analizi: Cümlenin ilk kısmı polimerlerin devrim yarattığını (artı) söylerken, 'Although' gereği ikinci kısmın çevreye verdiği zararı (eksi) vurgulaması gerekir.",
      type: "Sentence Completion (Cümle Tamamlama)",
    });
  }

  // 37-42 Çeviri
  for (let i = 37; i <= 42; i++) {
    questions.push({
      id: i,
      text: `${i}. [ÇEVİRİ] The continuous depletion of polar ice caps directly accelerates the global thermal expansion of sea waters.`,
      options: [
        "Kutup buzullarının sürekli erimesi, deniz sularının küresel termal genleşmesini doğrudan hızlandırmaktadır.",
        "Deniz sularının termal genleşmesi kutup buzullarının hızla erimesine doğrudan yol açar.",
        "Kutup buzulları eridikçe dünya çapında deniz seviyeleri belirgin bir biçimde yükselmektedir.",
        "Küresel ısınma nedeniyle kutuplardaki buz tabakaları hızla küçülmektedir.",
        "Deniz sularının doğrudan genleşmesi kutuplardaki buzulları eriten en temel faktördür.",
      ],
      correct: "A" as const,
      explanation: "Yüklem analizi: 'directly accelerates' = 'doğrudan hızlandırmaktadır'. Özne: 'The continuous depletion of polar ice caps' = 'Kutup buzullarının sürekli erimesi'. Tam ve eksiksiz karşılık A'dır.",
      type: "Translation (Çeviri)",
    });
  }

  // 43-62 Reading / Okuma Parçaları
  for (let i = 43; i <= 62; i++) {
    questions.push({
      id: i,
      text: `${i}. [PARAGRAF SORUSU] According to the passage on deep-sea hydrothermal vents, extremophile organisms thrive primarily because _____.`,
      options: [
        "they utilize chemosynthetic sulfur reactions rather than solar photosynthesis",
        "sunlight penetrates the deepest abyssal zones with extraordinary clarity",
        "predatory species are entirely absent from the ocean trenches",
        "temperatures never deviate from freezing point at volcanic chimneys",
        "they depend completely on organic detritus sinking from coastal waters",
      ],
      correct: "A" as const,
      explanation: "Metne göre okyanus tabanındaki aşırı koşullara dayanıklı organizmalar güneş ışığı yerine kemosentez (sülfür reaksiyonları) ile enerji üretir.",
      type: "Reading (Paragraf Okuma)",
    });
  }

  // 63-67 Diyalog
  for (let i = 63; i <= 67; i++) {
    questions.push({
      id: i,
      text: `${i}. [DİYALOG TAMAMLAMA]\nAyşe: Did you read the recent report regarding quantum cryptography?\nBurak: Yes, and it claims classical encryption might be rendered vulnerable within a decade.\nAyşe: _____ \nBurak: Exactly. That is why defense organizations are allocating massive budgets right now.`,
      options: [
        "So, cybersecurity frameworks will require a foundational overhaul sooner than expected?",
        "Do you think quantum processors will ever become commercially available to consumers?",
        "I believe traditional passwords will remain perfectly sufficient for centuries.",
        "The authors of the report have been criticized for gross exaggeration.",
        "Why didn't you mention this discovery during our department briefing yesterday?",
      ],
      correct: "A" as const,
      explanation: "Burak 'Exactly' (Kesinlikle, tam olarak) diyerek onayladığı için Ayşe'nin bu durumu özetleyen ve aciliyeti belirten bir soru/yorum yapması gerekir. Doğru cevap A.",
      type: "Dialogue Completion (Diyalog)",
    });
  }

  // 68-71 Restatement (Anlamca En Yakın)
  for (let i = 68; i <= 71; i++) {
    questions.push({
      id: i,
      text: `${i}. [RESTATEMENT] No sooner had the initial seismic tremor ceased than civil defense sirens sounded across the metropolis.`,
      options: [
        "Immediately after the first earthquake tremor stopped, alarm sirens rang throughout the city.",
        "The sirens were activated before the seismic tremor had completely concluded.",
        "Although the tremor was severe, the city sirens failed to alert the residents in time.",
        "The civil defense team postponed sounding the sirens until structural damage was assessed.",
        "Whenever a minor tremor occurs, emergency sirens automatically deactivate in the capital.",
      ],
      correct: "A" as const,
      explanation: "'No sooner ... than' = 'Immediately after / As soon as' (Hemen ardından). 'İlk sarsıntı durur durmaz sirenler çaldı' ifadesinin birebir eşdeğeri A seçeneğidir.",
      type: "Restatement (Anlamca En Yakın)",
    });
  }

  // 72-75 Paragraf Tamamlama
  for (let i = 72; i <= 75; i++) {
    questions.push({
      id: i,
      text: `${i}. [PARAGRAF TAMAMLAMA] Sleep deprivation impairs cognitive consolidation and synaptic pruning. _____. For instance, medical interns working consecutive night shifts exhibit a 30% surge in diagnostic oversights.`,
      options: [
        "Consequently, human performance in high-stakes environments suffers dramatically under chronic fatigue.",
        "In contrast, brief afternoon naps have proven ineffective in restoring metabolic equilibrium.",
        "Nevertheless, modern neurological therapies can entirely eliminate the physiological need for sleep.",
        "Therefore, most mammalian species hibernate during prolonged periods of nutritional scarcity.",
        "Indeed, voluntary insomnia has gained popularity among high-achieving corporate executives.",
      ],
      correct: "A" as const,
      explanation: "Boşluktan sonra 'For instance' (Örneğin) ile stajyer doktorların hata oranındaki artış örneklenmiştir. Boşluğa uykusuzluğun kritik görevlerde performansı düşürdüğünü bildiren A cümlesi oturmalıdır.",
      type: "Paragraph Completion (Paragraf Tamamlama)",
    });
  }

  // 76-80 Anlam Bütünlüğünü Bozan Cümle (Irrelevant)
  for (let i = 76; i <= 80; i++) {
    questions.push({
      id: i,
      text: `${i}. [AKISI BOZAN CÜMLE]\n(I) Renaissance Florence witnessed an extraordinary explosion of architectural and painterly genius.\n(II) Wealthy patron dynasties like the Medici financed monumental public and private commissions.\n(III) Today, mass tourism in Tuscany creates significant vehicular congestion in narrow historic alleyways.\n(IV) This influx of patronage attracted master craftsmen, humanists, and sculptors from across Europe.\n(V) As a result, the city cemented its legacy as the undisputed crucible of Western cultural rebirth.`,
      options: ["I", "II", "III", "IV", "V"],
      correct: "C" as const, // III
      explanation: "Paragraf Rönesans Floransa'sındaki Medici sanatsal hamilik hareketini anlatırken, (III) numaralı cümle günümüz Toskana turizm ve trafik sıkışıklığına sıçrayarak akışı tamamen bozmuştur.",
      type: "Irrelevant Sentence (Akışı Bozan Cümle)",
    });
  }

  return questions;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const exam = await prisma.exam.findUnique({
      where: { id },
    });

    const title = exam?.title || `YDS Sınav Simülatörü (${id})`;
    const questions = generate80Questions(title);

    return NextResponse.json({
      id,
      title,
      durationMinutes: exam?.durationMinutes || 180,
      totalQuestions: 80,
      isReal: exam?.isReal || false,
      questions,
    });
  } catch (error) {
    console.error("Exam load error:", error);
    return NextResponse.json(
      { error: "Sınav yüklenirken hata oluştu" },
      { status: 500 }
    );
  }
}
