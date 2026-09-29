// ============================================================
// src/app/api/speaking/route.ts
// YDS Master — AI Speaking Practice API
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { SpeakingSentence } from "@/lib/speaking/topics";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface SpeakingRequestBody {
  topicId: string;
  userMessage: string;
  history?: { role: "user" | "assistant"; content: string }[];
}

// Fallback intelligent conversation matrix for YDS speaking topics
function generateContextualReply(
  topicId: string,
  userMessage: string
): {
  en: string;
  sentences: SpeakingSentence[];
  tipsTr?: string;
} {
  const msgLower = userMessage.toLowerCase().trim();

  if (topicId === "yds-academic") {
    if (msgLower.includes("reading") || msgLower.includes("paragraph") || msgLower.includes("time")) {
      return {
        en: "Time management in reading passages is indeed one of the most critical factors in YDS. To save valuable time, try skimming the passage first to grasp the main idea, and then read the question stems carefully before diving into the options. How many minutes do you currently spend on each reading passage?",
        sentences: [
          {
            en: "Time management in reading passages is indeed one of the most critical factors in YDS.",
            tr: "Okuma parçalarında zaman yönetimi gerçekten de YDS'deki en kritik faktörlerden biridir.",
          },
          {
            en: "To save valuable time, try skimming the passage first to grasp the main idea, and then read the question stems carefully before diving into the options.",
            tr: "Değerli zamandan tasarruf etmek için önce ana fikri yakalamak adına metne hızlıca göz gezdirmeyi, ardından şıklara dalmadan önce soru köklerini dikkatlice okumayı dene.",
          },
          {
            en: "How many minutes do you currently spend on each reading passage?",
            tr: "Şu anda her bir okuma parçasına ortalama kaç dakika harcıyorsun?",
          },
        ],
        tipsTr: "💡 'To grasp the main idea' (ana fikri kavramak) akademik İngilizcede sık kullanılan güçlü bir fiil öbeğidir.",
      };
    }

    if (msgLower.includes("score") || msgLower.includes("target") || msgLower.includes("8") || msgLower.includes("9") || msgLower.includes("7")) {
      return {
        en: "That is a very ambitious and achievable goal! Reaching that target score requires mastering academic collocations and complex sentence connectors like 'nevertheless' and 'notwithstanding'. Have you taken any full mock exams recently to see your current baseline?",
        sentences: [
          {
            en: "That is a very ambitious and achievable goal!",
            tr: "Bu oldukça iddialı ve kesinlikle ulaşılabilir bir hedef!",
          },
          {
            en: "Reaching that target score requires mastering academic collocations and complex sentence connectors like 'nevertheless' and 'notwithstanding'.",
            tr: "Bu hedef puana ulaşmak, akademik eşdizimleri ve 'nevertheless' ile 'notwithstanding' gibi karmaşık cümle bağlaçlarını ustaca kullanmayı gerektirir.",
          },
          {
            en: "Have you taken any full mock exams recently to see your current baseline?",
            tr: "Mevcut başlangıç seviyeni görmek için son zamanlarda hiç tam deneme sınavı çözdün mü?",
          },
        ],
        tipsTr: "💡 'Collocation' kelimelerin doğal birlikteliğidir. Örneğin: 'make a decision' (karar vermek).",
      };
    }

    return {
      en: "That is an excellent point. Consistent daily practice with academic articles from sources like The Economist or National Geographic will significantly boost your comprehension speed. Which study routine works best for you right now?",
      sentences: [
        {
          en: "That is an excellent point.",
          tr: "Bu çok yerinde ve mükemmel bir nokta.",
        },
        {
          en: "Consistent daily practice with academic articles from sources like The Economist or National Geographic will significantly boost your comprehension speed.",
          tr: "The Economist veya National Geographic gibi kaynaklardan akademik makalelerle yapılacak düzenli günlük pratik, kavrama hızını belirgin şekilde artıracaktır.",
        },
        {
          en: "Which study routine works best for you right now?",
          tr: "Şu anda senin için en iyi çalışan çalışma rutini hangisi?",
        },
      ],
      tipsTr: "💡 'Boost comprehension' (kavramayı/anlamayı artırmak) YDS sınavında sıkça test edilen bir kalıptır.",
    };
  }

  if (topicId === "job-interview") {
    if (msgLower.includes("strength") || msgLower.includes("skill") || msgLower.includes("experience")) {
      return {
        en: "Your experience sounds very relevant and impressive. In a global corporate setting, employers also value how candidates handle workplace conflicts. Could you share an example of a challenging situation you successfully resolved with your team?",
        sentences: [
          {
            en: "Your experience sounds very relevant and impressive.",
            tr: "Deneyiminiz oldukça ilgili ve son derece etkileyici görünüyor.",
          },
          {
            en: "In a global corporate setting, employers also value how candidates handle workplace conflicts.",
            tr: "Küresel kurumsal bir ortamda işverenler, adayların iş yerindeki anlaşmazlıkları nasıl çözdüğüne de büyük değer verir.",
          },
          {
            en: "Could you share an example of a challenging situation you successfully resolved with your team?",
            tr: "Ekibinizle birlikte başarıyla çözdüğünüz zorlu bir duruma dair bir örnek paylaşabilir misiniz?",
          },
        ],
        tipsTr: "💡 Mülakatlarda STAR tekniği (Situation, Task, Action, Result) kullanmak cevabını çok daha profesyonel kılar.",
      };
    }

    return {
      en: "Thank you for sharing that detailed overview. Clear communication and proactive leadership are highly sought after qualities. Where do you see yourself professionally in the next five years?",
      sentences: [
        {
          en: "Thank you for sharing that detailed overview.",
          tr: "Bu ayrıntılı genel bakışı paylaştığınız için teşekkür ederim.",
        },
        {
          en: "Clear communication and proactive leadership are highly sought after qualities.",
          tr: "Net iletişim ve proaktif liderlik oldukça aranan ve takdir edilen niteliklerdir.",
        },
        {
          en: "Where do you see yourself professionally in the next five years?",
          tr: "Önümüzdeki beş yıl içinde kendinizi mesleki olarak nerede görüyorsunuz?",
        },
      ],
      tipsTr: "💡 'Highly sought after' (çok aranan/talep gören) iş dünyasında yaygın kullanılan prestijli bir sıfattır.",
    };
  }

  if (topicId === "tech-future") {
    return {
      en: "You raised a compelling argument. While automated systems can optimize efficiency, human empathy and ethical judgment remain irreplaceable. Do you think governments should impose stricter regulations on large language models and autonomous technology?",
      sentences: [
        {
          en: "You raised a compelling argument.",
          tr: "Çok ikna edici ve güçlü bir argüman ortaya koydunuz.",
        },
        {
          en: "While automated systems can optimize efficiency, human empathy and ethical judgment remain irreplaceable.",
          tr: "Otomatik sistemler verimliliği optimize edebilse de insan empatisi ve etik muhakemesi yeri doldurulamaz olmaya devam etmektedir.",
        },
        {
          en: "Do you think governments should impose stricter regulations on large language models and autonomous technology?",
          tr: "Sizce hükümetler büyük dil modelleri ve otonom teknolojiler üzerine daha katı düzenlemeler getirmeli midir?",
        },
      ],
      tipsTr: "💡 'Impose regulations' (düzenlemeler/yönetmelikler getirmek) YDS çeviri ve paragraf sorularında sıkça çıkar.",
    };
  }

  // Daily life default
  return {
    en: "That sounds fascinating! Engaging in relaxing hobbies definitely helps clear your mind and boosts language retention. Have you traveled to any memorable places recently that left a lasting impression on you?",
    sentences: [
      {
        en: "That sounds fascinating!",
        tr: "Kulağa gerçekten büyüleyici geliyor!",
      },
      {
        en: "Engaging in relaxing hobbies definitely helps clear your mind and boosts language retention.",
        tr: "Dinlendirici hobilerle ilgilenmek kesinlikle zihnini tazeler ve dilde akılda kalıcılığı artırır.",
      },
      {
        en: "Have you traveled to any memorable places recently that left a lasting impression on you?",
        tr: "Son zamanlarda sende kalıcı bir iz bırakan unutulmaz bir yere seyahat ettin mi?",
      },
    ],
    tipsTr: "💡 'Leave a lasting impression' (kalıcı bir izlenim/iz bırakmak) çok doğal bir İngilizce deyimdir.",
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SpeakingRequestBody;
    const { topicId, userMessage } = body;

    if (!userMessage || !userMessage.trim()) {
      return NextResponse.json({ ok: false, error: "Mesaj boş olamaz." }, { status: 400 });
    }

    const reply = generateContextualReply(topicId || "yds-academic", userMessage);

    return NextResponse.json({
      ok: true,
      data: reply,
    });
  } catch (error) {
    // SAFETY: Catch all and return gracefully
    return NextResponse.json(
      {
        ok: false,
        error: "Sohbet işlenirken bir hata oluştu.",
      },
      { status: 500 }
    );
  }
}
