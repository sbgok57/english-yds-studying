// YDS Soru Tipleri A1–C2 + YDS Kapsamlı Seviye Kılavuzu
// 11 Soru Tipi x 7 Seviye (A1, A2, B1, B2, C1, C2, YDS) = 77 Detaylı Taktik Bloğu

export type TacticLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "YDS";

export const TACTIC_LEVEL_LIST: TacticLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2", "YDS"];

export interface SolvedTacticExample {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface TacticLevelBlock {
  level: TacticLevel;
  title: string;
  meaning: string;
  requirements: string;
  method: string;
  steps: string[];
  tips: string[];
  pitfalls: string[];
  distractorTactic: string;
  memoryCode: string;
  timeManagement: string;
  exampleEn: string;
  explanationTr: string;
  solvedExample: SolvedTacticExample;
  ydsExamFormat: string;
}

export const TACTIC_LEVELS_MAP: Record<string, TacticLevelBlock[]> = {
  "vocabulary": [
    {
      "level": "A1",
      "title": "Kelime — A1: Temel Tanıma ve Açık İpuçları",
      "meaning": "Kelime için A1 seviyesinde temel yaklaşım: Temel Tanıma ve Açık İpuçları.",
      "requirements": "A1 düzeyindeki sözcük dağarcığı, kelime türü ayrımı ve bağlam sezgisi.",
      "method": "Cümlenin duygu yönünü belirle -> Boşluğun kelime türünü gör -> Şıklar arasında eşdizim ve anlam testi yap.",
      "steps": [
        "1. Cümleyi baştan sona oku ve A1 düzeyindeki ipuçlarını belirle.",
        "2. Boşluktan önceki ve sonraki sözcüklerin oluşturduğu öbeği tespit et.",
        "3. Çeldiricileri ele ve bağlama en doğal oturan sözcüğü seç."
      ],
      "tips": [
        "Zarf (-ly) fiili, sıfat ismi niteler.",
        "Neden-sonuç bağlaçları aynı kutbu, zıtlık bağlaçları karşı kutbu ister."
      ],
      "pitfalls": [
        "Cümlenin tamamını okumadan ilk gördüğü kelimeye kapılmak."
      ],
      "distractorTactic": "Temel gramer uyumuna ve kelime türüne uymayan seçenekleri hemen ele.",
      "memoryCode": "🎵 Kelime [A1]: Bağlam yönünü yakala (+/-), eşdizimi kur, doğru şıkkı işaretle!",
      "timeManagement": "Soru başı önerilen süre: 30-40 sn.",
      "exampleEn": "Scientific innovations have significantly enhanced modern medical treatments.",
      "explanationTr": "Burada 'significantly' zarfı 'enhanced' fiilinin artış derecesini nitelemekte ve pozitif bağlamı güçlendirmektedir.",
      "solvedExample": {
        "question": "[Kelime - A1] The continuous reduction in production costs has ------- the company's competitive advantage in global markets.\n\nA) deteriorated\nB) strengthened\nC) abandoned\nD) contradicted\nE) postponed",
        "options": [
          "deteriorated",
          "strengthened",
          "abandoned",
          "contradicted",
          "postponed"
        ],
        "answer": "B",
        "explanation": "Üretim maliyetlerinin düşmesi şirketin rekabet avantajını 'güçlendirir' (strengthened). Diğer seçenekler olumsuzdur."
      },
      "ydsExamFormat": "Soru kökündeki en temel özne, yüklem ve zaman ipuçlarını ilk bakışta yakalama becerisini oluşturur."
    },
    {
      "level": "A2",
      "title": "Kelime — A2: Zaman ve Bağlaç İşaretçileri",
      "meaning": "Kelime için A2 seviyesinde temel yaklaşım: Zaman ve Bağlaç İşaretçileri.",
      "requirements": "A2 düzeyindeki sözcük dağarcığı, kelime türü ayrımı ve bağlam sezgisi.",
      "method": "Cümlenin duygu yönünü belirle -> Boşluğun kelime türünü gör -> Şıklar arasında eşdizim ve anlam testi yap.",
      "steps": [
        "1. Cümleyi baştan sona oku ve A2 düzeyindeki ipuçlarını belirle.",
        "2. Boşluktan önceki ve sonraki sözcüklerin oluşturduğu öbeği tespit et.",
        "3. Çeldiricileri ele ve bağlama en doğal oturan sözcüğü seç."
      ],
      "tips": [
        "Zarf (-ly) fiili, sıfat ismi niteler.",
        "Neden-sonuç bağlaçları aynı kutbu, zıtlık bağlaçları karşı kutbu ister."
      ],
      "pitfalls": [
        "Zaman uyumu zıtlığını göz ardı edip cümlenin sadece bir tarafına odaklanmak."
      ],
      "distractorTactic": "Zaman bağlaçlarının gerektirdiği ana cümle zamanı ile çelişen seçenekleri ele.",
      "memoryCode": "🎵 Kelime [A2]: Bağlam yönünü yakala (+/-), eşdizimi kur, doğru şıkkı işaretle!",
      "timeManagement": "Soru başı önerilen süre: 40-45 sn.",
      "exampleEn": "Scientific innovations have significantly enhanced modern medical treatments.",
      "explanationTr": "Burada 'significantly' zarfı 'enhanced' fiilinin artış derecesini nitelemekte ve pozitif bağlamı güçlendirmektedir.",
      "solvedExample": {
        "question": "[Kelime - A2] The continuous reduction in production costs has ------- the company's competitive advantage in global markets.\n\nA) deteriorated\nB) strengthened\nC) abandoned\nD) contradicted\nE) postponed",
        "options": [
          "deteriorated",
          "strengthened",
          "abandoned",
          "contradicted",
          "postponed"
        ],
        "answer": "B",
        "explanation": "Üretim maliyetlerinin düşmesi şirketin rekabet avantajını 'güçlendirir' (strengthened). Diğer seçenekler olumsuzdur."
      },
      "ydsExamFormat": "YDS'de zaman ve temel bağlaç sorularını hatasız çözmenin omurgasını teşkil eder."
    },
    {
      "level": "B1",
      "title": "Kelime — B1: Cümle İçi Bağlam ve Temel Eleme",
      "meaning": "Kelime için B1 seviyesinde temel yaklaşım: Cümle İçi Bağlam ve Temel Eleme.",
      "requirements": "B1 düzeyindeki sözcük dağarcığı, kelime türü ayrımı ve bağlam sezgisi.",
      "method": "Cümlenin duygu yönünü belirle -> Boşluğun kelime türünü gör -> Şıklar arasında eşdizim ve anlam testi yap.",
      "steps": [
        "1. Cümleyi baştan sona oku ve B1 düzeyindeki ipuçlarını belirle.",
        "2. Boşluktan önceki ve sonraki sözcüklerin oluşturduğu öbeği tespit et.",
        "3. Çeldiricileri ele ve bağlama en doğal oturan sözcüğü seç."
      ],
      "tips": [
        "Zarf (-ly) fiili, sıfat ismi niteler.",
        "Neden-sonuç bağlaçları aynı kutbu, zıtlık bağlaçları karşı kutbu ister."
      ],
      "pitfalls": [
        "Bağlam yönü (+/-) analizi yapmadan benzer anlamlı sözcüklere takılmak."
      ],
      "distractorTactic": "Anlam yönü cümlenin zıt kutbuna düşen veya gereksiz genelleme yapan şıkları ele.",
      "memoryCode": "🎵 Kelime [B1]: Bağlam yönünü yakala (+/-), eşdizimi kur, doğru şıkkı işaretle!",
      "timeManagement": "Soru başı önerilen süre: 45-50 sn.",
      "exampleEn": "Scientific innovations have significantly enhanced modern medical treatments.",
      "explanationTr": "Burada 'significantly' zarfı 'enhanced' fiilinin artış derecesini nitelemekte ve pozitif bağlamı güçlendirmektedir.",
      "solvedExample": {
        "question": "[Kelime - B1] The continuous reduction in production costs has ------- the company's competitive advantage in global markets.\n\nA) deteriorated\nB) strengthened\nC) abandoned\nD) contradicted\nE) postponed",
        "options": [
          "deteriorated",
          "strengthened",
          "abandoned",
          "contradicted",
          "postponed"
        ],
        "answer": "B",
        "explanation": "Üretim maliyetlerinin düşmesi şirketin rekabet avantajını 'güçlendirir' (strengthened). Diğer seçenekler olumsuzdur."
      },
      "ydsExamFormat": "YDS orta düzey çeldiricilerini eleyerek net bandını 60-75 aralığına taşır."
    },
    {
      "level": "B2",
      "title": "Kelime — B2: Paragraf Bütünlüğü ve Güçlü Çeldiriciler",
      "meaning": "Kelime için B2 seviyesinde temel yaklaşım: Paragraf Bütünlüğü ve Güçlü Çeldiriciler.",
      "requirements": "B2 düzeyindeki sözcük dağarcığı, kelime türü ayrımı ve bağlam sezgisi.",
      "method": "Cümlenin duygu yönünü belirle -> Boşluğun kelime türünü gör -> Şıklar arasında eşdizim ve anlam testi yap.",
      "steps": [
        "1. Cümleyi baştan sona oku ve B2 düzeyindeki ipuçlarını belirle.",
        "2. Boşluktan önceki ve sonraki sözcüklerin oluşturduğu öbeği tespit et.",
        "3. Çeldiricileri ele ve bağlama en doğal oturan sözcüğü seç."
      ],
      "tips": [
        "Zarf (-ly) fiili, sıfat ismi niteler.",
        "Neden-sonuç bağlaçları aynı kutbu, zıtlık bağlaçları karşı kutbu ister."
      ],
      "pitfalls": [
        "Güçlü çeldiricilerdeki sahte referans sözcüklerine veya yarım doğru bilgilere kanmak."
      ],
      "distractorTactic": "Metinde doğrudan geçmeyen, mantıksal sıçrama içeren veya aşırı iddialı şıkları ele.",
      "memoryCode": "🎵 Kelime [B2]: Bağlam yönünü yakala (+/-), eşdizimi kur, doğru şıkkı işaretle!",
      "timeManagement": "Soru başı önerilen süre: 50-60 sn.",
      "exampleEn": "Scientific innovations have significantly enhanced modern medical treatments.",
      "explanationTr": "Burada 'significantly' zarfı 'enhanced' fiilinin artış derecesini nitelemekte ve pozitif bağlamı güçlendirmektedir.",
      "solvedExample": {
        "question": "[Kelime - B2] The continuous reduction in production costs has ------- the company's competitive advantage in global markets.\n\nA) deteriorated\nB) strengthened\nC) abandoned\nD) contradicted\nE) postponed",
        "options": [
          "deteriorated",
          "strengthened",
          "abandoned",
          "contradicted",
          "postponed"
        ],
        "answer": "B",
        "explanation": "Üretim maliyetlerinin düşmesi şirketin rekabet avantajını 'güçlendirir' (strengthened). Diğer seçenekler olumsuzdur."
      },
      "ydsExamFormat": "YDS 75-85 puan hedefleyen adayların tuzak şıklara düşmesini engelleyen kritik eşiktir."
    },
    {
      "level": "C1",
      "title": "Kelime — C1: Akademik Dil, Nüans ve Örtük Çıkarım",
      "meaning": "Kelime için C1 seviyesinde temel yaklaşım: Akademik Dil, Nüans ve Örtük Çıkarım.",
      "requirements": "C1 düzeyindeki sözcük dağarcığı, kelime türü ayrımı ve bağlam sezgisi.",
      "method": "Cümlenin duygu yönünü belirle -> Boşluğun kelime türünü gör -> Şıklar arasında eşdizim ve anlam testi yap.",
      "steps": [
        "1. Cümleyi baştan sona oku ve C1 düzeyindeki ipuçlarını belirle.",
        "2. Boşluktan önceki ve sonraki sözcüklerin oluşturduğu öbeği tespit et.",
        "3. Çeldiricileri ele ve bağlama en doğal oturan sözcüğü seç."
      ],
      "tips": [
        "Zarf (-ly) fiili, sıfat ismi niteler.",
        "Neden-sonuç bağlaçları aynı kutbu, zıtlık bağlaçları karşı kutbu ister."
      ],
      "pitfalls": [
        "Yazarın örtük amacını kaçırıp sadece yüzeydeki kelimelerin eşanlamlılarına yönelmek."
      ],
      "distractorTactic": "Akademik resmiyet tonunu bozan veya metindeki nüansı saptıran şıkları ele.",
      "memoryCode": "🎵 Kelime [C1]: Bağlam yönünü yakala (+/-), eşdizimi kur, doğru şıkkı işaretle!",
      "timeManagement": "Soru başı önerilen süre: 60-70 sn.",
      "exampleEn": "Scientific innovations have significantly enhanced modern medical treatments.",
      "explanationTr": "Burada 'significantly' zarfı 'enhanced' fiilinin artış derecesini nitelemekte ve pozitif bağlamı güçlendirmektedir.",
      "solvedExample": {
        "question": "[Kelime - C1] The continuous reduction in production costs has ------- the company's competitive advantage in global markets.\n\nA) deteriorated\nB) strengthened\nC) abandoned\nD) contradicted\nE) postponed",
        "options": [
          "deteriorated",
          "strengthened",
          "abandoned",
          "contradicted",
          "postponed"
        ],
        "answer": "B",
        "explanation": "Üretim maliyetlerinin düşmesi şirketin rekabet avantajını 'güçlendirir' (strengthened). Diğer seçenekler olumsuzdur."
      },
      "ydsExamFormat": "YDS 85-90+ bareminde tam net getiren derin analiz seviyesidir."
    },
    {
      "level": "C2",
      "title": "Kelime — C2: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar",
      "meaning": "Kelime için C2 seviyesinde temel yaklaşım: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar.",
      "requirements": "C2 düzeyindeki sözcük dağarcığı, kelime türü ayrımı ve bağlam sezgisi.",
      "method": "Cümlenin duygu yönünü belirle -> Boşluğun kelime türünü gör -> Şıklar arasında eşdizim ve anlam testi yap.",
      "steps": [
        "1. Cümleyi baştan sona oku ve C2 düzeyindeki ipuçlarını belirle.",
        "2. Boşluktan önceki ve sonraki sözcüklerin oluşturduğu öbeği tespit et.",
        "3. Çeldiricileri ele ve bağlama en doğal oturan sözcüğü seç."
      ],
      "tips": [
        "Zarf (-ly) fiili, sıfat ismi niteler.",
        "Neden-sonuç bağlaçları aynı kutbu, zıtlık bağlaçları karşı kutbu ister."
      ],
      "pitfalls": [
        "İki son derece yakın akademik seçenek arasındaki ton veya kapsam farkını görememek."
      ],
      "distractorTactic": "Bağlamın retorik amacına uymayan ve yazarın tarafsızlık/eleştiri tonunu aşan seçenekleri ele.",
      "memoryCode": "🎵 Kelime [C2]: Bağlam yönünü yakala (+/-), eşdizimi kur, doğru şıkkı işaretle!",
      "timeManagement": "Soru başı önerilen süre: 70-80 sn.",
      "exampleEn": "Scientific innovations have significantly enhanced modern medical treatments.",
      "explanationTr": "Burada 'significantly' zarfı 'enhanced' fiilinin artış derecesini nitelemekte ve pozitif bağlamı güçlendirmektedir.",
      "solvedExample": {
        "question": "[Kelime - C2] The continuous reduction in production costs has ------- the company's competitive advantage in global markets.\n\nA) deteriorated\nB) strengthened\nC) abandoned\nD) contradicted\nE) postponed",
        "options": [
          "deteriorated",
          "strengthened",
          "abandoned",
          "contradicted",
          "postponed"
        ],
        "answer": "B",
        "explanation": "Üretim maliyetlerinin düşmesi şirketin rekabet avantajını 'güçlendirir' (strengthened). Diğer seçenekler olumsuzdur."
      },
      "ydsExamFormat": "YDS 95-100 tam puan düzeyindeki seçici soruların kilit çözüm metodolojisidir."
    },
    {
      "level": "YDS",
      "title": "Kelime — YDS: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama",
      "meaning": "Kelime için YDS seviyesinde temel yaklaşım: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama.",
      "requirements": "YDS düzeyindeki sözcük dağarcığı, kelime türü ayrımı ve bağlam sezgisi.",
      "method": "Cümlenin duygu yönünü belirle -> Boşluğun kelime türünü gör -> Şıklar arasında eşdizim ve anlam testi yap.",
      "steps": [
        "1. Cümleyi baştan sona oku ve YDS düzeyindeki ipuçlarını belirle.",
        "2. Boşluktan önceki ve sonraki sözcüklerin oluşturduğu öbeği tespit et.",
        "3. Çeldiricileri ele ve bağlama en doğal oturan sözcüğü seç."
      ],
      "tips": [
        "Zarf (-ly) fiili, sıfat ismi niteler.",
        "Neden-sonuç bağlaçları aynı kutbu, zıtlık bağlaçları karşı kutbu ister."
      ],
      "pitfalls": [
        "Tek bir soruya 2 dakikadan fazla takılıp diğer soru tiplerinin süresinden çalmak."
      ],
      "distractorTactic": "ÖSYM'nin en sevdiği tuzak kalıpları (aşırı genelleme, ters neden-sonuç, sahte bağlaç) şablonla ele.",
      "memoryCode": "🎵 Kelime [YDS]: Bağlam yönünü yakala (+/-), eşdizimi kur, doğru şıkkı işaretle!",
      "timeManagement": "Soru başı önerilen süre: Hızlı tempo (45-55 sn ortalama).",
      "exampleEn": "Scientific innovations have significantly enhanced modern medical treatments.",
      "explanationTr": "Burada 'significantly' zarfı 'enhanced' fiilinin artış derecesini nitelemekte ve pozitif bağlamı güçlendirmektedir.",
      "solvedExample": {
        "question": "[Kelime - YDS] The continuous reduction in production costs has ------- the company's competitive advantage in global markets.\n\nA) deteriorated\nB) strengthened\nC) abandoned\nD) contradicted\nE) postponed",
        "options": [
          "deteriorated",
          "strengthened",
          "abandoned",
          "contradicted",
          "postponed"
        ],
        "answer": "B",
        "explanation": "Üretim maliyetlerinin düşmesi şirketin rekabet avantajını 'güçlendirir' (strengthened). Diğer seçenekler olumsuzdur."
      },
      "ydsExamFormat": "180 dakikalık gerçek sınav salonunda 80 soruyu maksimum net ve sıfır panikle tamamlama sanatıdır."
    }
  ],
  "grammar": [
    {
      "level": "A1",
      "title": "Gramer — A1: Temel Tanıma ve Açık İpuçları",
      "meaning": "Gramer için A1 seviyesinde kilit kural: Temel Tanıma ve Açık İpuçları.",
      "requirements": "A1 düzeyinde zaman uyumu, çatı (active/passive) ve bağlaç kuralları.",
      "method": "Zaman işaretçisini bul -> Zaman uyumunu (Present-Present / Past-Past) test et -> Çatı ve tekil/çoğul kontrolü yap.",
      "steps": [
        "1. Cümledeki zaman bağlacını ve referans zaman zarfını bul (A1).",
        "2. Zaman uyumu tablosuna uymayan seçenekleri ilk 10 saniyede ele.",
        "3. Aktif/pasif ayrımını özneye göre kontrol ederek doğruyu işaretle."
      ],
      "tips": [
        "Zaman bağlaçlarının yan cümlesinde 'will/would' aranmaz.",
        "Since'ten sonra V2, ana cümlede have/has V3 gelir."
      ],
      "pitfalls": [
        "Cümlenin tamamını okumadan ilk gördüğü kelimeye kapılmak."
      ],
      "distractorTactic": "Temel gramer uyumuna ve kelime türüne uymayan seçenekleri hemen ele.",
      "memoryCode": "🎵 Gramer [A1]: Zaman zarfı şifredir, Present-Present / Past-Past uyumundan sapma!",
      "timeManagement": "Soru başı önerilen süre: 30-40 sn.",
      "exampleEn": "By the time the conference ended, the delegates had agreed on all major points.",
      "explanationTr": "'By the time + V2' geçmişte öncelik gerektirir; ana cümlede 'had agreed' (had V3) zorunludur.",
      "solvedExample": {
        "question": "[Gramer - A1] Ever since the industrial revolution ------- in the 18th century, greenhouse gas emissions ------- at an alarming rate.\n\nA) began / have increased\nB) has begun / increased\nC) begins / had increased\nD) had begun / will increase\nE) was beginning / increase",
        "options": [
          "began / have increased",
          "has begun / increased",
          "begins / had increased",
          "had begun / will increase",
          "was beginning / increase"
        ],
        "answer": "A",
        "explanation": "Ever since + V2 (began), ana cümle Present Perfect (have increased) gerektirir."
      },
      "ydsExamFormat": "Soru kökündeki en temel özne, yüklem ve zaman ipuçlarını ilk bakışta yakalama becerisini oluşturur."
    },
    {
      "level": "A2",
      "title": "Gramer — A2: Zaman ve Bağlaç İşaretçileri",
      "meaning": "Gramer için A2 seviyesinde kilit kural: Zaman ve Bağlaç İşaretçileri.",
      "requirements": "A2 düzeyinde zaman uyumu, çatı (active/passive) ve bağlaç kuralları.",
      "method": "Zaman işaretçisini bul -> Zaman uyumunu (Present-Present / Past-Past) test et -> Çatı ve tekil/çoğul kontrolü yap.",
      "steps": [
        "1. Cümledeki zaman bağlacını ve referans zaman zarfını bul (A2).",
        "2. Zaman uyumu tablosuna uymayan seçenekleri ilk 10 saniyede ele.",
        "3. Aktif/pasif ayrımını özneye göre kontrol ederek doğruyu işaretle."
      ],
      "tips": [
        "Zaman bağlaçlarının yan cümlesinde 'will/would' aranmaz.",
        "Since'ten sonra V2, ana cümlede have/has V3 gelir."
      ],
      "pitfalls": [
        "Zaman uyumu zıtlığını göz ardı edip cümlenin sadece bir tarafına odaklanmak."
      ],
      "distractorTactic": "Zaman bağlaçlarının gerektirdiği ana cümle zamanı ile çelişen seçenekleri ele.",
      "memoryCode": "🎵 Gramer [A2]: Zaman zarfı şifredir, Present-Present / Past-Past uyumundan sapma!",
      "timeManagement": "Soru başı önerilen süre: 40-45 sn.",
      "exampleEn": "By the time the conference ended, the delegates had agreed on all major points.",
      "explanationTr": "'By the time + V2' geçmişte öncelik gerektirir; ana cümlede 'had agreed' (had V3) zorunludur.",
      "solvedExample": {
        "question": "[Gramer - A2] Ever since the industrial revolution ------- in the 18th century, greenhouse gas emissions ------- at an alarming rate.\n\nA) began / have increased\nB) has begun / increased\nC) begins / had increased\nD) had begun / will increase\nE) was beginning / increase",
        "options": [
          "began / have increased",
          "has begun / increased",
          "begins / had increased",
          "had begun / will increase",
          "was beginning / increase"
        ],
        "answer": "A",
        "explanation": "Ever since + V2 (began), ana cümle Present Perfect (have increased) gerektirir."
      },
      "ydsExamFormat": "YDS'de zaman ve temel bağlaç sorularını hatasız çözmenin omurgasını teşkil eder."
    },
    {
      "level": "B1",
      "title": "Gramer — B1: Cümle İçi Bağlam ve Temel Eleme",
      "meaning": "Gramer için B1 seviyesinde kilit kural: Cümle İçi Bağlam ve Temel Eleme.",
      "requirements": "B1 düzeyinde zaman uyumu, çatı (active/passive) ve bağlaç kuralları.",
      "method": "Zaman işaretçisini bul -> Zaman uyumunu (Present-Present / Past-Past) test et -> Çatı ve tekil/çoğul kontrolü yap.",
      "steps": [
        "1. Cümledeki zaman bağlacını ve referans zaman zarfını bul (B1).",
        "2. Zaman uyumu tablosuna uymayan seçenekleri ilk 10 saniyede ele.",
        "3. Aktif/pasif ayrımını özneye göre kontrol ederek doğruyu işaretle."
      ],
      "tips": [
        "Zaman bağlaçlarının yan cümlesinde 'will/would' aranmaz.",
        "Since'ten sonra V2, ana cümlede have/has V3 gelir."
      ],
      "pitfalls": [
        "Bağlam yönü (+/-) analizi yapmadan benzer anlamlı sözcüklere takılmak."
      ],
      "distractorTactic": "Anlam yönü cümlenin zıt kutbuna düşen veya gereksiz genelleme yapan şıkları ele.",
      "memoryCode": "🎵 Gramer [B1]: Zaman zarfı şifredir, Present-Present / Past-Past uyumundan sapma!",
      "timeManagement": "Soru başı önerilen süre: 45-50 sn.",
      "exampleEn": "By the time the conference ended, the delegates had agreed on all major points.",
      "explanationTr": "'By the time + V2' geçmişte öncelik gerektirir; ana cümlede 'had agreed' (had V3) zorunludur.",
      "solvedExample": {
        "question": "[Gramer - B1] Ever since the industrial revolution ------- in the 18th century, greenhouse gas emissions ------- at an alarming rate.\n\nA) began / have increased\nB) has begun / increased\nC) begins / had increased\nD) had begun / will increase\nE) was beginning / increase",
        "options": [
          "began / have increased",
          "has begun / increased",
          "begins / had increased",
          "had begun / will increase",
          "was beginning / increase"
        ],
        "answer": "A",
        "explanation": "Ever since + V2 (began), ana cümle Present Perfect (have increased) gerektirir."
      },
      "ydsExamFormat": "YDS orta düzey çeldiricilerini eleyerek net bandını 60-75 aralığına taşır."
    },
    {
      "level": "B2",
      "title": "Gramer — B2: Paragraf Bütünlüğü ve Güçlü Çeldiriciler",
      "meaning": "Gramer için B2 seviyesinde kilit kural: Paragraf Bütünlüğü ve Güçlü Çeldiriciler.",
      "requirements": "B2 düzeyinde zaman uyumu, çatı (active/passive) ve bağlaç kuralları.",
      "method": "Zaman işaretçisini bul -> Zaman uyumunu (Present-Present / Past-Past) test et -> Çatı ve tekil/çoğul kontrolü yap.",
      "steps": [
        "1. Cümledeki zaman bağlacını ve referans zaman zarfını bul (B2).",
        "2. Zaman uyumu tablosuna uymayan seçenekleri ilk 10 saniyede ele.",
        "3. Aktif/pasif ayrımını özneye göre kontrol ederek doğruyu işaretle."
      ],
      "tips": [
        "Zaman bağlaçlarının yan cümlesinde 'will/would' aranmaz.",
        "Since'ten sonra V2, ana cümlede have/has V3 gelir."
      ],
      "pitfalls": [
        "Güçlü çeldiricilerdeki sahte referans sözcüklerine veya yarım doğru bilgilere kanmak."
      ],
      "distractorTactic": "Metinde doğrudan geçmeyen, mantıksal sıçrama içeren veya aşırı iddialı şıkları ele.",
      "memoryCode": "🎵 Gramer [B2]: Zaman zarfı şifredir, Present-Present / Past-Past uyumundan sapma!",
      "timeManagement": "Soru başı önerilen süre: 50-60 sn.",
      "exampleEn": "By the time the conference ended, the delegates had agreed on all major points.",
      "explanationTr": "'By the time + V2' geçmişte öncelik gerektirir; ana cümlede 'had agreed' (had V3) zorunludur.",
      "solvedExample": {
        "question": "[Gramer - B2] Ever since the industrial revolution ------- in the 18th century, greenhouse gas emissions ------- at an alarming rate.\n\nA) began / have increased\nB) has begun / increased\nC) begins / had increased\nD) had begun / will increase\nE) was beginning / increase",
        "options": [
          "began / have increased",
          "has begun / increased",
          "begins / had increased",
          "had begun / will increase",
          "was beginning / increase"
        ],
        "answer": "A",
        "explanation": "Ever since + V2 (began), ana cümle Present Perfect (have increased) gerektirir."
      },
      "ydsExamFormat": "YDS 75-85 puan hedefleyen adayların tuzak şıklara düşmesini engelleyen kritik eşiktir."
    },
    {
      "level": "C1",
      "title": "Gramer — C1: Akademik Dil, Nüans ve Örtük Çıkarım",
      "meaning": "Gramer için C1 seviyesinde kilit kural: Akademik Dil, Nüans ve Örtük Çıkarım.",
      "requirements": "C1 düzeyinde zaman uyumu, çatı (active/passive) ve bağlaç kuralları.",
      "method": "Zaman işaretçisini bul -> Zaman uyumunu (Present-Present / Past-Past) test et -> Çatı ve tekil/çoğul kontrolü yap.",
      "steps": [
        "1. Cümledeki zaman bağlacını ve referans zaman zarfını bul (C1).",
        "2. Zaman uyumu tablosuna uymayan seçenekleri ilk 10 saniyede ele.",
        "3. Aktif/pasif ayrımını özneye göre kontrol ederek doğruyu işaretle."
      ],
      "tips": [
        "Zaman bağlaçlarının yan cümlesinde 'will/would' aranmaz.",
        "Since'ten sonra V2, ana cümlede have/has V3 gelir."
      ],
      "pitfalls": [
        "Yazarın örtük amacını kaçırıp sadece yüzeydeki kelimelerin eşanlamlılarına yönelmek."
      ],
      "distractorTactic": "Akademik resmiyet tonunu bozan veya metindeki nüansı saptıran şıkları ele.",
      "memoryCode": "🎵 Gramer [C1]: Zaman zarfı şifredir, Present-Present / Past-Past uyumundan sapma!",
      "timeManagement": "Soru başı önerilen süre: 60-70 sn.",
      "exampleEn": "By the time the conference ended, the delegates had agreed on all major points.",
      "explanationTr": "'By the time + V2' geçmişte öncelik gerektirir; ana cümlede 'had agreed' (had V3) zorunludur.",
      "solvedExample": {
        "question": "[Gramer - C1] Ever since the industrial revolution ------- in the 18th century, greenhouse gas emissions ------- at an alarming rate.\n\nA) began / have increased\nB) has begun / increased\nC) begins / had increased\nD) had begun / will increase\nE) was beginning / increase",
        "options": [
          "began / have increased",
          "has begun / increased",
          "begins / had increased",
          "had begun / will increase",
          "was beginning / increase"
        ],
        "answer": "A",
        "explanation": "Ever since + V2 (began), ana cümle Present Perfect (have increased) gerektirir."
      },
      "ydsExamFormat": "YDS 85-90+ bareminde tam net getiren derin analiz seviyesidir."
    },
    {
      "level": "C2",
      "title": "Gramer — C2: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar",
      "meaning": "Gramer için C2 seviyesinde kilit kural: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar.",
      "requirements": "C2 düzeyinde zaman uyumu, çatı (active/passive) ve bağlaç kuralları.",
      "method": "Zaman işaretçisini bul -> Zaman uyumunu (Present-Present / Past-Past) test et -> Çatı ve tekil/çoğul kontrolü yap.",
      "steps": [
        "1. Cümledeki zaman bağlacını ve referans zaman zarfını bul (C2).",
        "2. Zaman uyumu tablosuna uymayan seçenekleri ilk 10 saniyede ele.",
        "3. Aktif/pasif ayrımını özneye göre kontrol ederek doğruyu işaretle."
      ],
      "tips": [
        "Zaman bağlaçlarının yan cümlesinde 'will/would' aranmaz.",
        "Since'ten sonra V2, ana cümlede have/has V3 gelir."
      ],
      "pitfalls": [
        "İki son derece yakın akademik seçenek arasındaki ton veya kapsam farkını görememek."
      ],
      "distractorTactic": "Bağlamın retorik amacına uymayan ve yazarın tarafsızlık/eleştiri tonunu aşan seçenekleri ele.",
      "memoryCode": "🎵 Gramer [C2]: Zaman zarfı şifredir, Present-Present / Past-Past uyumundan sapma!",
      "timeManagement": "Soru başı önerilen süre: 70-80 sn.",
      "exampleEn": "By the time the conference ended, the delegates had agreed on all major points.",
      "explanationTr": "'By the time + V2' geçmişte öncelik gerektirir; ana cümlede 'had agreed' (had V3) zorunludur.",
      "solvedExample": {
        "question": "[Gramer - C2] Ever since the industrial revolution ------- in the 18th century, greenhouse gas emissions ------- at an alarming rate.\n\nA) began / have increased\nB) has begun / increased\nC) begins / had increased\nD) had begun / will increase\nE) was beginning / increase",
        "options": [
          "began / have increased",
          "has begun / increased",
          "begins / had increased",
          "had begun / will increase",
          "was beginning / increase"
        ],
        "answer": "A",
        "explanation": "Ever since + V2 (began), ana cümle Present Perfect (have increased) gerektirir."
      },
      "ydsExamFormat": "YDS 95-100 tam puan düzeyindeki seçici soruların kilit çözüm metodolojisidir."
    },
    {
      "level": "YDS",
      "title": "Gramer — YDS: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama",
      "meaning": "Gramer için YDS seviyesinde kilit kural: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama.",
      "requirements": "YDS düzeyinde zaman uyumu, çatı (active/passive) ve bağlaç kuralları.",
      "method": "Zaman işaretçisini bul -> Zaman uyumunu (Present-Present / Past-Past) test et -> Çatı ve tekil/çoğul kontrolü yap.",
      "steps": [
        "1. Cümledeki zaman bağlacını ve referans zaman zarfını bul (YDS).",
        "2. Zaman uyumu tablosuna uymayan seçenekleri ilk 10 saniyede ele.",
        "3. Aktif/pasif ayrımını özneye göre kontrol ederek doğruyu işaretle."
      ],
      "tips": [
        "Zaman bağlaçlarının yan cümlesinde 'will/would' aranmaz.",
        "Since'ten sonra V2, ana cümlede have/has V3 gelir."
      ],
      "pitfalls": [
        "Tek bir soruya 2 dakikadan fazla takılıp diğer soru tiplerinin süresinden çalmak."
      ],
      "distractorTactic": "ÖSYM'nin en sevdiği tuzak kalıpları (aşırı genelleme, ters neden-sonuç, sahte bağlaç) şablonla ele.",
      "memoryCode": "🎵 Gramer [YDS]: Zaman zarfı şifredir, Present-Present / Past-Past uyumundan sapma!",
      "timeManagement": "Soru başı önerilen süre: Hızlı tempo (45-55 sn ortalama).",
      "exampleEn": "By the time the conference ended, the delegates had agreed on all major points.",
      "explanationTr": "'By the time + V2' geçmişte öncelik gerektirir; ana cümlede 'had agreed' (had V3) zorunludur.",
      "solvedExample": {
        "question": "[Gramer - YDS] Ever since the industrial revolution ------- in the 18th century, greenhouse gas emissions ------- at an alarming rate.\n\nA) began / have increased\nB) has begun / increased\nC) begins / had increased\nD) had begun / will increase\nE) was beginning / increase",
        "options": [
          "began / have increased",
          "has begun / increased",
          "begins / had increased",
          "had begun / will increase",
          "was beginning / increase"
        ],
        "answer": "A",
        "explanation": "Ever since + V2 (began), ana cümle Present Perfect (have increased) gerektirir."
      },
      "ydsExamFormat": "180 dakikalık gerçek sınav salonunda 80 soruyu maksimum net ve sıfır panikle tamamlama sanatıdır."
    }
  ],
  "cloze-test": [
    {
      "level": "A1",
      "title": "Cloze Test — A1: Temel Tanıma ve Açık İpuçları",
      "meaning": "Cloze Test için A1 seviyesinde kilit kural: Temel Tanıma ve Açık İpuçları.",
      "requirements": "Paragrafın genel akışını kaybetmeden hem kelime hem bağlaç hem gramer sorularını çözebilmek.",
      "method": "Önce parçanın ilk cümlesini oku ve konuyu kavra -> Boşluğun bulunduğu cümlenin sınırlarını çiz -> Sadece o cümlenin bağlamına odaklan.",
      "steps": [
        "1. Paragrafın ilk iki cümlesini okuyarak ana fikri ve zaman eksenini belirle.",
        "2. Boşluğun türünü (bağlaç, edat, kelime, tense) tespit et.",
        "3. Önceki ve sonraki cümleyle mantıksal köprü kur."
      ],
      "tips": [
        "Cloze testte bir bağlaç soruluyorsa boşluğun hemen peşindeki noktalama işaretine dikkat et.",
        "Paragraftaki genel zaman geçmiş ise şıklardaki alakasız Present seçenekleri ele."
      ],
      "pitfalls": [
        "Cümlenin tamamını okumadan ilk gördüğü kelimeye kapılmak."
      ],
      "distractorTactic": "Temel gramer uyumuna ve kelime türüne uymayan seçenekleri hemen ele.",
      "memoryCode": "🎵 Cloze Test [A1]: Parçayı bir bütün gör, her boşlukta cümlenin sınırlarını çiz!",
      "timeManagement": "Soru başı önerilen süre: 30-40 sn.",
      "exampleEn": "Renewable energy sources are gaining popularity; however, initial installation costs remain high.",
      "explanationTr": "İki bağımsız cümle arasında noktalı virgül ve virgül varsa 'however' zıtlık geçişini kusursuz sağlar.",
      "solvedExample": {
        "question": "[Cloze Test - A1] Solar power is becoming increasingly affordable. -------, many developing countries still rely predominantly on fossil fuels.\n\nA) Therefore\nB) Nevertheless\nC) Furthermore\nD) Consequently\nE) Similarly",
        "options": [
          "Therefore",
          "Nevertheless",
          "Furthermore",
          "Consequently",
          "Similarly"
        ],
        "answer": "B",
        "explanation": "Güneş enerjisi ucuzluyor ama yine de (nevertheless) fosil yakıt kullanılıyor; zıtlık geçişi gerekir."
      },
      "ydsExamFormat": "Soru kökündeki en temel özne, yüklem ve zaman ipuçlarını ilk bakışta yakalama becerisini oluşturur."
    },
    {
      "level": "A2",
      "title": "Cloze Test — A2: Zaman ve Bağlaç İşaretçileri",
      "meaning": "Cloze Test için A2 seviyesinde kilit kural: Zaman ve Bağlaç İşaretçileri.",
      "requirements": "Paragrafın genel akışını kaybetmeden hem kelime hem bağlaç hem gramer sorularını çözebilmek.",
      "method": "Önce parçanın ilk cümlesini oku ve konuyu kavra -> Boşluğun bulunduğu cümlenin sınırlarını çiz -> Sadece o cümlenin bağlamına odaklan.",
      "steps": [
        "1. Paragrafın ilk iki cümlesini okuyarak ana fikri ve zaman eksenini belirle.",
        "2. Boşluğun türünü (bağlaç, edat, kelime, tense) tespit et.",
        "3. Önceki ve sonraki cümleyle mantıksal köprü kur."
      ],
      "tips": [
        "Cloze testte bir bağlaç soruluyorsa boşluğun hemen peşindeki noktalama işaretine dikkat et.",
        "Paragraftaki genel zaman geçmiş ise şıklardaki alakasız Present seçenekleri ele."
      ],
      "pitfalls": [
        "Zaman uyumu zıtlığını göz ardı edip cümlenin sadece bir tarafına odaklanmak."
      ],
      "distractorTactic": "Zaman bağlaçlarının gerektirdiği ana cümle zamanı ile çelişen seçenekleri ele.",
      "memoryCode": "🎵 Cloze Test [A2]: Parçayı bir bütün gör, her boşlukta cümlenin sınırlarını çiz!",
      "timeManagement": "Soru başı önerilen süre: 40-45 sn.",
      "exampleEn": "Renewable energy sources are gaining popularity; however, initial installation costs remain high.",
      "explanationTr": "İki bağımsız cümle arasında noktalı virgül ve virgül varsa 'however' zıtlık geçişini kusursuz sağlar.",
      "solvedExample": {
        "question": "[Cloze Test - A2] Solar power is becoming increasingly affordable. -------, many developing countries still rely predominantly on fossil fuels.\n\nA) Therefore\nB) Nevertheless\nC) Furthermore\nD) Consequently\nE) Similarly",
        "options": [
          "Therefore",
          "Nevertheless",
          "Furthermore",
          "Consequently",
          "Similarly"
        ],
        "answer": "B",
        "explanation": "Güneş enerjisi ucuzluyor ama yine de (nevertheless) fosil yakıt kullanılıyor; zıtlık geçişi gerekir."
      },
      "ydsExamFormat": "YDS'de zaman ve temel bağlaç sorularını hatasız çözmenin omurgasını teşkil eder."
    },
    {
      "level": "B1",
      "title": "Cloze Test — B1: Cümle İçi Bağlam ve Temel Eleme",
      "meaning": "Cloze Test için B1 seviyesinde kilit kural: Cümle İçi Bağlam ve Temel Eleme.",
      "requirements": "Paragrafın genel akışını kaybetmeden hem kelime hem bağlaç hem gramer sorularını çözebilmek.",
      "method": "Önce parçanın ilk cümlesini oku ve konuyu kavra -> Boşluğun bulunduğu cümlenin sınırlarını çiz -> Sadece o cümlenin bağlamına odaklan.",
      "steps": [
        "1. Paragrafın ilk iki cümlesini okuyarak ana fikri ve zaman eksenini belirle.",
        "2. Boşluğun türünü (bağlaç, edat, kelime, tense) tespit et.",
        "3. Önceki ve sonraki cümleyle mantıksal köprü kur."
      ],
      "tips": [
        "Cloze testte bir bağlaç soruluyorsa boşluğun hemen peşindeki noktalama işaretine dikkat et.",
        "Paragraftaki genel zaman geçmiş ise şıklardaki alakasız Present seçenekleri ele."
      ],
      "pitfalls": [
        "Bağlam yönü (+/-) analizi yapmadan benzer anlamlı sözcüklere takılmak."
      ],
      "distractorTactic": "Anlam yönü cümlenin zıt kutbuna düşen veya gereksiz genelleme yapan şıkları ele.",
      "memoryCode": "🎵 Cloze Test [B1]: Parçayı bir bütün gör, her boşlukta cümlenin sınırlarını çiz!",
      "timeManagement": "Soru başı önerilen süre: 45-50 sn.",
      "exampleEn": "Renewable energy sources are gaining popularity; however, initial installation costs remain high.",
      "explanationTr": "İki bağımsız cümle arasında noktalı virgül ve virgül varsa 'however' zıtlık geçişini kusursuz sağlar.",
      "solvedExample": {
        "question": "[Cloze Test - B1] Solar power is becoming increasingly affordable. -------, many developing countries still rely predominantly on fossil fuels.\n\nA) Therefore\nB) Nevertheless\nC) Furthermore\nD) Consequently\nE) Similarly",
        "options": [
          "Therefore",
          "Nevertheless",
          "Furthermore",
          "Consequently",
          "Similarly"
        ],
        "answer": "B",
        "explanation": "Güneş enerjisi ucuzluyor ama yine de (nevertheless) fosil yakıt kullanılıyor; zıtlık geçişi gerekir."
      },
      "ydsExamFormat": "YDS orta düzey çeldiricilerini eleyerek net bandını 60-75 aralığına taşır."
    },
    {
      "level": "B2",
      "title": "Cloze Test — B2: Paragraf Bütünlüğü ve Güçlü Çeldiriciler",
      "meaning": "Cloze Test için B2 seviyesinde kilit kural: Paragraf Bütünlüğü ve Güçlü Çeldiriciler.",
      "requirements": "Paragrafın genel akışını kaybetmeden hem kelime hem bağlaç hem gramer sorularını çözebilmek.",
      "method": "Önce parçanın ilk cümlesini oku ve konuyu kavra -> Boşluğun bulunduğu cümlenin sınırlarını çiz -> Sadece o cümlenin bağlamına odaklan.",
      "steps": [
        "1. Paragrafın ilk iki cümlesini okuyarak ana fikri ve zaman eksenini belirle.",
        "2. Boşluğun türünü (bağlaç, edat, kelime, tense) tespit et.",
        "3. Önceki ve sonraki cümleyle mantıksal köprü kur."
      ],
      "tips": [
        "Cloze testte bir bağlaç soruluyorsa boşluğun hemen peşindeki noktalama işaretine dikkat et.",
        "Paragraftaki genel zaman geçmiş ise şıklardaki alakasız Present seçenekleri ele."
      ],
      "pitfalls": [
        "Güçlü çeldiricilerdeki sahte referans sözcüklerine veya yarım doğru bilgilere kanmak."
      ],
      "distractorTactic": "Metinde doğrudan geçmeyen, mantıksal sıçrama içeren veya aşırı iddialı şıkları ele.",
      "memoryCode": "🎵 Cloze Test [B2]: Parçayı bir bütün gör, her boşlukta cümlenin sınırlarını çiz!",
      "timeManagement": "Soru başı önerilen süre: 50-60 sn.",
      "exampleEn": "Renewable energy sources are gaining popularity; however, initial installation costs remain high.",
      "explanationTr": "İki bağımsız cümle arasında noktalı virgül ve virgül varsa 'however' zıtlık geçişini kusursuz sağlar.",
      "solvedExample": {
        "question": "[Cloze Test - B2] Solar power is becoming increasingly affordable. -------, many developing countries still rely predominantly on fossil fuels.\n\nA) Therefore\nB) Nevertheless\nC) Furthermore\nD) Consequently\nE) Similarly",
        "options": [
          "Therefore",
          "Nevertheless",
          "Furthermore",
          "Consequently",
          "Similarly"
        ],
        "answer": "B",
        "explanation": "Güneş enerjisi ucuzluyor ama yine de (nevertheless) fosil yakıt kullanılıyor; zıtlık geçişi gerekir."
      },
      "ydsExamFormat": "YDS 75-85 puan hedefleyen adayların tuzak şıklara düşmesini engelleyen kritik eşiktir."
    },
    {
      "level": "C1",
      "title": "Cloze Test — C1: Akademik Dil, Nüans ve Örtük Çıkarım",
      "meaning": "Cloze Test için C1 seviyesinde kilit kural: Akademik Dil, Nüans ve Örtük Çıkarım.",
      "requirements": "Paragrafın genel akışını kaybetmeden hem kelime hem bağlaç hem gramer sorularını çözebilmek.",
      "method": "Önce parçanın ilk cümlesini oku ve konuyu kavra -> Boşluğun bulunduğu cümlenin sınırlarını çiz -> Sadece o cümlenin bağlamına odaklan.",
      "steps": [
        "1. Paragrafın ilk iki cümlesini okuyarak ana fikri ve zaman eksenini belirle.",
        "2. Boşluğun türünü (bağlaç, edat, kelime, tense) tespit et.",
        "3. Önceki ve sonraki cümleyle mantıksal köprü kur."
      ],
      "tips": [
        "Cloze testte bir bağlaç soruluyorsa boşluğun hemen peşindeki noktalama işaretine dikkat et.",
        "Paragraftaki genel zaman geçmiş ise şıklardaki alakasız Present seçenekleri ele."
      ],
      "pitfalls": [
        "Yazarın örtük amacını kaçırıp sadece yüzeydeki kelimelerin eşanlamlılarına yönelmek."
      ],
      "distractorTactic": "Akademik resmiyet tonunu bozan veya metindeki nüansı saptıran şıkları ele.",
      "memoryCode": "🎵 Cloze Test [C1]: Parçayı bir bütün gör, her boşlukta cümlenin sınırlarını çiz!",
      "timeManagement": "Soru başı önerilen süre: 60-70 sn.",
      "exampleEn": "Renewable energy sources are gaining popularity; however, initial installation costs remain high.",
      "explanationTr": "İki bağımsız cümle arasında noktalı virgül ve virgül varsa 'however' zıtlık geçişini kusursuz sağlar.",
      "solvedExample": {
        "question": "[Cloze Test - C1] Solar power is becoming increasingly affordable. -------, many developing countries still rely predominantly on fossil fuels.\n\nA) Therefore\nB) Nevertheless\nC) Furthermore\nD) Consequently\nE) Similarly",
        "options": [
          "Therefore",
          "Nevertheless",
          "Furthermore",
          "Consequently",
          "Similarly"
        ],
        "answer": "B",
        "explanation": "Güneş enerjisi ucuzluyor ama yine de (nevertheless) fosil yakıt kullanılıyor; zıtlık geçişi gerekir."
      },
      "ydsExamFormat": "YDS 85-90+ bareminde tam net getiren derin analiz seviyesidir."
    },
    {
      "level": "C2",
      "title": "Cloze Test — C2: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar",
      "meaning": "Cloze Test için C2 seviyesinde kilit kural: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar.",
      "requirements": "Paragrafın genel akışını kaybetmeden hem kelime hem bağlaç hem gramer sorularını çözebilmek.",
      "method": "Önce parçanın ilk cümlesini oku ve konuyu kavra -> Boşluğun bulunduğu cümlenin sınırlarını çiz -> Sadece o cümlenin bağlamına odaklan.",
      "steps": [
        "1. Paragrafın ilk iki cümlesini okuyarak ana fikri ve zaman eksenini belirle.",
        "2. Boşluğun türünü (bağlaç, edat, kelime, tense) tespit et.",
        "3. Önceki ve sonraki cümleyle mantıksal köprü kur."
      ],
      "tips": [
        "Cloze testte bir bağlaç soruluyorsa boşluğun hemen peşindeki noktalama işaretine dikkat et.",
        "Paragraftaki genel zaman geçmiş ise şıklardaki alakasız Present seçenekleri ele."
      ],
      "pitfalls": [
        "İki son derece yakın akademik seçenek arasındaki ton veya kapsam farkını görememek."
      ],
      "distractorTactic": "Bağlamın retorik amacına uymayan ve yazarın tarafsızlık/eleştiri tonunu aşan seçenekleri ele.",
      "memoryCode": "🎵 Cloze Test [C2]: Parçayı bir bütün gör, her boşlukta cümlenin sınırlarını çiz!",
      "timeManagement": "Soru başı önerilen süre: 70-80 sn.",
      "exampleEn": "Renewable energy sources are gaining popularity; however, initial installation costs remain high.",
      "explanationTr": "İki bağımsız cümle arasında noktalı virgül ve virgül varsa 'however' zıtlık geçişini kusursuz sağlar.",
      "solvedExample": {
        "question": "[Cloze Test - C2] Solar power is becoming increasingly affordable. -------, many developing countries still rely predominantly on fossil fuels.\n\nA) Therefore\nB) Nevertheless\nC) Furthermore\nD) Consequently\nE) Similarly",
        "options": [
          "Therefore",
          "Nevertheless",
          "Furthermore",
          "Consequently",
          "Similarly"
        ],
        "answer": "B",
        "explanation": "Güneş enerjisi ucuzluyor ama yine de (nevertheless) fosil yakıt kullanılıyor; zıtlık geçişi gerekir."
      },
      "ydsExamFormat": "YDS 95-100 tam puan düzeyindeki seçici soruların kilit çözüm metodolojisidir."
    },
    {
      "level": "YDS",
      "title": "Cloze Test — YDS: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama",
      "meaning": "Cloze Test için YDS seviyesinde kilit kural: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama.",
      "requirements": "Paragrafın genel akışını kaybetmeden hem kelime hem bağlaç hem gramer sorularını çözebilmek.",
      "method": "Önce parçanın ilk cümlesini oku ve konuyu kavra -> Boşluğun bulunduğu cümlenin sınırlarını çiz -> Sadece o cümlenin bağlamına odaklan.",
      "steps": [
        "1. Paragrafın ilk iki cümlesini okuyarak ana fikri ve zaman eksenini belirle.",
        "2. Boşluğun türünü (bağlaç, edat, kelime, tense) tespit et.",
        "3. Önceki ve sonraki cümleyle mantıksal köprü kur."
      ],
      "tips": [
        "Cloze testte bir bağlaç soruluyorsa boşluğun hemen peşindeki noktalama işaretine dikkat et.",
        "Paragraftaki genel zaman geçmiş ise şıklardaki alakasız Present seçenekleri ele."
      ],
      "pitfalls": [
        "Tek bir soruya 2 dakikadan fazla takılıp diğer soru tiplerinin süresinden çalmak."
      ],
      "distractorTactic": "ÖSYM'nin en sevdiği tuzak kalıpları (aşırı genelleme, ters neden-sonuç, sahte bağlaç) şablonla ele.",
      "memoryCode": "🎵 Cloze Test [YDS]: Parçayı bir bütün gör, her boşlukta cümlenin sınırlarını çiz!",
      "timeManagement": "Soru başı önerilen süre: Hızlı tempo (45-55 sn ortalama).",
      "exampleEn": "Renewable energy sources are gaining popularity; however, initial installation costs remain high.",
      "explanationTr": "İki bağımsız cümle arasında noktalı virgül ve virgül varsa 'however' zıtlık geçişini kusursuz sağlar.",
      "solvedExample": {
        "question": "[Cloze Test - YDS] Solar power is becoming increasingly affordable. -------, many developing countries still rely predominantly on fossil fuels.\n\nA) Therefore\nB) Nevertheless\nC) Furthermore\nD) Consequently\nE) Similarly",
        "options": [
          "Therefore",
          "Nevertheless",
          "Furthermore",
          "Consequently",
          "Similarly"
        ],
        "answer": "B",
        "explanation": "Güneş enerjisi ucuzluyor ama yine de (nevertheless) fosil yakıt kullanılıyor; zıtlık geçişi gerekir."
      },
      "ydsExamFormat": "180 dakikalık gerçek sınav salonunda 80 soruyu maksimum net ve sıfır panikle tamamlama sanatıdır."
    }
  ],
  "sentence-completion": [
    {
      "level": "A1",
      "title": "Cümle Tamamlama — A1: Temel Tanıma ve Açık İpuçları",
      "meaning": "Cümle Tamamlama için A1 seviyesinde kilit kural: Temel Tanıma ve Açık İpuçları.",
      "requirements": "Verilen yarım cümlenin bağlacını, öznesini ve zamanını doğru analiz edip tamamlayıcı yarıyı bulmak.",
      "method": "Bağlacı belirle -> Mantıksal beklenti oluştur -> Özne ve zaman uyumunu kontrol ederek şıkkı seç.",
      "steps": [
        "1. Soru kökündeki bağlacın türünü (zıtlık, sebep, koşul, amaç) belirle.",
        "2. Mantıksal olarak diğer yarıda ne anlatılması gerektiğini Türkçe tahmin et.",
        "3. Özne zamiri referansını ve zaman uyumunu sağlayan tek seçeneği işaretle."
      ],
      "tips": [
        "Although ile başlamışsa diğer yarıda tam tersi duygu veya durum ara.",
        "Because ile başlamışsa diğer yarıda doğrudan o sebebin sonucunu ara."
      ],
      "pitfalls": [
        "Cümlenin tamamını okumadan ilk gördüğü kelimeye kapılmak."
      ],
      "distractorTactic": "Temel gramer uyumuna ve kelime türüne uymayan seçenekleri hemen ele.",
      "memoryCode": "🎵 Cümle Tamamlama [A1]: Bağlaç köprüdür; bir ayağı soruda, diğer ayağı doğru şıktadır!",
      "timeManagement": "Soru başı önerilen süre: 30-40 sn.",
      "exampleEn": "Although electric vehicles are environmentally friendly, their battery production requires significant mineral extraction.",
      "explanationTr": "Zıtlık bağlacı olumlu çevre dostu yönü ile maden ihtiyacı olumsuzluğunu birbirine bağlar.",
      "solvedExample": {
        "question": "[Cümle Tamamlama - A1] Unless immediate international action is taken to combat deforestation, -------.\n\nA) biodiversity will continue to decline at an unprecedented pace\nB) forest reserves have expanded significantly in tropical regions\nC) endangered species would have found safe natural habitats\nD) local communities were able to preserve their ecosystems\nE) the global climate system has already been fully restored",
        "options": [
          "biodiversity will continue to decline at an unprecedented pace",
          "forest reserves have expanded significantly in tropical regions",
          "endangered species would have found safe natural habitats",
          "local communities were able to preserve their ecosystems",
          "the global climate system has already been fully restored"
        ],
        "answer": "A",
        "explanation": "Unless (Type 1 koşul) ana cümlede gelecek tehdidi ifade eden 'will continue to decline' ister."
      },
      "ydsExamFormat": "Soru kökündeki en temel özne, yüklem ve zaman ipuçlarını ilk bakışta yakalama becerisini oluşturur."
    },
    {
      "level": "A2",
      "title": "Cümle Tamamlama — A2: Zaman ve Bağlaç İşaretçileri",
      "meaning": "Cümle Tamamlama için A2 seviyesinde kilit kural: Zaman ve Bağlaç İşaretçileri.",
      "requirements": "Verilen yarım cümlenin bağlacını, öznesini ve zamanını doğru analiz edip tamamlayıcı yarıyı bulmak.",
      "method": "Bağlacı belirle -> Mantıksal beklenti oluştur -> Özne ve zaman uyumunu kontrol ederek şıkkı seç.",
      "steps": [
        "1. Soru kökündeki bağlacın türünü (zıtlık, sebep, koşul, amaç) belirle.",
        "2. Mantıksal olarak diğer yarıda ne anlatılması gerektiğini Türkçe tahmin et.",
        "3. Özne zamiri referansını ve zaman uyumunu sağlayan tek seçeneği işaretle."
      ],
      "tips": [
        "Although ile başlamışsa diğer yarıda tam tersi duygu veya durum ara.",
        "Because ile başlamışsa diğer yarıda doğrudan o sebebin sonucunu ara."
      ],
      "pitfalls": [
        "Zaman uyumu zıtlığını göz ardı edip cümlenin sadece bir tarafına odaklanmak."
      ],
      "distractorTactic": "Zaman bağlaçlarının gerektirdiği ana cümle zamanı ile çelişen seçenekleri ele.",
      "memoryCode": "🎵 Cümle Tamamlama [A2]: Bağlaç köprüdür; bir ayağı soruda, diğer ayağı doğru şıktadır!",
      "timeManagement": "Soru başı önerilen süre: 40-45 sn.",
      "exampleEn": "Although electric vehicles are environmentally friendly, their battery production requires significant mineral extraction.",
      "explanationTr": "Zıtlık bağlacı olumlu çevre dostu yönü ile maden ihtiyacı olumsuzluğunu birbirine bağlar.",
      "solvedExample": {
        "question": "[Cümle Tamamlama - A2] Unless immediate international action is taken to combat deforestation, -------.\n\nA) biodiversity will continue to decline at an unprecedented pace\nB) forest reserves have expanded significantly in tropical regions\nC) endangered species would have found safe natural habitats\nD) local communities were able to preserve their ecosystems\nE) the global climate system has already been fully restored",
        "options": [
          "biodiversity will continue to decline at an unprecedented pace",
          "forest reserves have expanded significantly in tropical regions",
          "endangered species would have found safe natural habitats",
          "local communities were able to preserve their ecosystems",
          "the global climate system has already been fully restored"
        ],
        "answer": "A",
        "explanation": "Unless (Type 1 koşul) ana cümlede gelecek tehdidi ifade eden 'will continue to decline' ister."
      },
      "ydsExamFormat": "YDS'de zaman ve temel bağlaç sorularını hatasız çözmenin omurgasını teşkil eder."
    },
    {
      "level": "B1",
      "title": "Cümle Tamamlama — B1: Cümle İçi Bağlam ve Temel Eleme",
      "meaning": "Cümle Tamamlama için B1 seviyesinde kilit kural: Cümle İçi Bağlam ve Temel Eleme.",
      "requirements": "Verilen yarım cümlenin bağlacını, öznesini ve zamanını doğru analiz edip tamamlayıcı yarıyı bulmak.",
      "method": "Bağlacı belirle -> Mantıksal beklenti oluştur -> Özne ve zaman uyumunu kontrol ederek şıkkı seç.",
      "steps": [
        "1. Soru kökündeki bağlacın türünü (zıtlık, sebep, koşul, amaç) belirle.",
        "2. Mantıksal olarak diğer yarıda ne anlatılması gerektiğini Türkçe tahmin et.",
        "3. Özne zamiri referansını ve zaman uyumunu sağlayan tek seçeneği işaretle."
      ],
      "tips": [
        "Although ile başlamışsa diğer yarıda tam tersi duygu veya durum ara.",
        "Because ile başlamışsa diğer yarıda doğrudan o sebebin sonucunu ara."
      ],
      "pitfalls": [
        "Bağlam yönü (+/-) analizi yapmadan benzer anlamlı sözcüklere takılmak."
      ],
      "distractorTactic": "Anlam yönü cümlenin zıt kutbuna düşen veya gereksiz genelleme yapan şıkları ele.",
      "memoryCode": "🎵 Cümle Tamamlama [B1]: Bağlaç köprüdür; bir ayağı soruda, diğer ayağı doğru şıktadır!",
      "timeManagement": "Soru başı önerilen süre: 45-50 sn.",
      "exampleEn": "Although electric vehicles are environmentally friendly, their battery production requires significant mineral extraction.",
      "explanationTr": "Zıtlık bağlacı olumlu çevre dostu yönü ile maden ihtiyacı olumsuzluğunu birbirine bağlar.",
      "solvedExample": {
        "question": "[Cümle Tamamlama - B1] Unless immediate international action is taken to combat deforestation, -------.\n\nA) biodiversity will continue to decline at an unprecedented pace\nB) forest reserves have expanded significantly in tropical regions\nC) endangered species would have found safe natural habitats\nD) local communities were able to preserve their ecosystems\nE) the global climate system has already been fully restored",
        "options": [
          "biodiversity will continue to decline at an unprecedented pace",
          "forest reserves have expanded significantly in tropical regions",
          "endangered species would have found safe natural habitats",
          "local communities were able to preserve their ecosystems",
          "the global climate system has already been fully restored"
        ],
        "answer": "A",
        "explanation": "Unless (Type 1 koşul) ana cümlede gelecek tehdidi ifade eden 'will continue to decline' ister."
      },
      "ydsExamFormat": "YDS orta düzey çeldiricilerini eleyerek net bandını 60-75 aralığına taşır."
    },
    {
      "level": "B2",
      "title": "Cümle Tamamlama — B2: Paragraf Bütünlüğü ve Güçlü Çeldiriciler",
      "meaning": "Cümle Tamamlama için B2 seviyesinde kilit kural: Paragraf Bütünlüğü ve Güçlü Çeldiriciler.",
      "requirements": "Verilen yarım cümlenin bağlacını, öznesini ve zamanını doğru analiz edip tamamlayıcı yarıyı bulmak.",
      "method": "Bağlacı belirle -> Mantıksal beklenti oluştur -> Özne ve zaman uyumunu kontrol ederek şıkkı seç.",
      "steps": [
        "1. Soru kökündeki bağlacın türünü (zıtlık, sebep, koşul, amaç) belirle.",
        "2. Mantıksal olarak diğer yarıda ne anlatılması gerektiğini Türkçe tahmin et.",
        "3. Özne zamiri referansını ve zaman uyumunu sağlayan tek seçeneği işaretle."
      ],
      "tips": [
        "Although ile başlamışsa diğer yarıda tam tersi duygu veya durum ara.",
        "Because ile başlamışsa diğer yarıda doğrudan o sebebin sonucunu ara."
      ],
      "pitfalls": [
        "Güçlü çeldiricilerdeki sahte referans sözcüklerine veya yarım doğru bilgilere kanmak."
      ],
      "distractorTactic": "Metinde doğrudan geçmeyen, mantıksal sıçrama içeren veya aşırı iddialı şıkları ele.",
      "memoryCode": "🎵 Cümle Tamamlama [B2]: Bağlaç köprüdür; bir ayağı soruda, diğer ayağı doğru şıktadır!",
      "timeManagement": "Soru başı önerilen süre: 50-60 sn.",
      "exampleEn": "Although electric vehicles are environmentally friendly, their battery production requires significant mineral extraction.",
      "explanationTr": "Zıtlık bağlacı olumlu çevre dostu yönü ile maden ihtiyacı olumsuzluğunu birbirine bağlar.",
      "solvedExample": {
        "question": "[Cümle Tamamlama - B2] Unless immediate international action is taken to combat deforestation, -------.\n\nA) biodiversity will continue to decline at an unprecedented pace\nB) forest reserves have expanded significantly in tropical regions\nC) endangered species would have found safe natural habitats\nD) local communities were able to preserve their ecosystems\nE) the global climate system has already been fully restored",
        "options": [
          "biodiversity will continue to decline at an unprecedented pace",
          "forest reserves have expanded significantly in tropical regions",
          "endangered species would have found safe natural habitats",
          "local communities were able to preserve their ecosystems",
          "the global climate system has already been fully restored"
        ],
        "answer": "A",
        "explanation": "Unless (Type 1 koşul) ana cümlede gelecek tehdidi ifade eden 'will continue to decline' ister."
      },
      "ydsExamFormat": "YDS 75-85 puan hedefleyen adayların tuzak şıklara düşmesini engelleyen kritik eşiktir."
    },
    {
      "level": "C1",
      "title": "Cümle Tamamlama — C1: Akademik Dil, Nüans ve Örtük Çıkarım",
      "meaning": "Cümle Tamamlama için C1 seviyesinde kilit kural: Akademik Dil, Nüans ve Örtük Çıkarım.",
      "requirements": "Verilen yarım cümlenin bağlacını, öznesini ve zamanını doğru analiz edip tamamlayıcı yarıyı bulmak.",
      "method": "Bağlacı belirle -> Mantıksal beklenti oluştur -> Özne ve zaman uyumunu kontrol ederek şıkkı seç.",
      "steps": [
        "1. Soru kökündeki bağlacın türünü (zıtlık, sebep, koşul, amaç) belirle.",
        "2. Mantıksal olarak diğer yarıda ne anlatılması gerektiğini Türkçe tahmin et.",
        "3. Özne zamiri referansını ve zaman uyumunu sağlayan tek seçeneği işaretle."
      ],
      "tips": [
        "Although ile başlamışsa diğer yarıda tam tersi duygu veya durum ara.",
        "Because ile başlamışsa diğer yarıda doğrudan o sebebin sonucunu ara."
      ],
      "pitfalls": [
        "Yazarın örtük amacını kaçırıp sadece yüzeydeki kelimelerin eşanlamlılarına yönelmek."
      ],
      "distractorTactic": "Akademik resmiyet tonunu bozan veya metindeki nüansı saptıran şıkları ele.",
      "memoryCode": "🎵 Cümle Tamamlama [C1]: Bağlaç köprüdür; bir ayağı soruda, diğer ayağı doğru şıktadır!",
      "timeManagement": "Soru başı önerilen süre: 60-70 sn.",
      "exampleEn": "Although electric vehicles are environmentally friendly, their battery production requires significant mineral extraction.",
      "explanationTr": "Zıtlık bağlacı olumlu çevre dostu yönü ile maden ihtiyacı olumsuzluğunu birbirine bağlar.",
      "solvedExample": {
        "question": "[Cümle Tamamlama - C1] Unless immediate international action is taken to combat deforestation, -------.\n\nA) biodiversity will continue to decline at an unprecedented pace\nB) forest reserves have expanded significantly in tropical regions\nC) endangered species would have found safe natural habitats\nD) local communities were able to preserve their ecosystems\nE) the global climate system has already been fully restored",
        "options": [
          "biodiversity will continue to decline at an unprecedented pace",
          "forest reserves have expanded significantly in tropical regions",
          "endangered species would have found safe natural habitats",
          "local communities were able to preserve their ecosystems",
          "the global climate system has already been fully restored"
        ],
        "answer": "A",
        "explanation": "Unless (Type 1 koşul) ana cümlede gelecek tehdidi ifade eden 'will continue to decline' ister."
      },
      "ydsExamFormat": "YDS 85-90+ bareminde tam net getiren derin analiz seviyesidir."
    },
    {
      "level": "C2",
      "title": "Cümle Tamamlama — C2: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar",
      "meaning": "Cümle Tamamlama için C2 seviyesinde kilit kural: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar.",
      "requirements": "Verilen yarım cümlenin bağlacını, öznesini ve zamanını doğru analiz edip tamamlayıcı yarıyı bulmak.",
      "method": "Bağlacı belirle -> Mantıksal beklenti oluştur -> Özne ve zaman uyumunu kontrol ederek şıkkı seç.",
      "steps": [
        "1. Soru kökündeki bağlacın türünü (zıtlık, sebep, koşul, amaç) belirle.",
        "2. Mantıksal olarak diğer yarıda ne anlatılması gerektiğini Türkçe tahmin et.",
        "3. Özne zamiri referansını ve zaman uyumunu sağlayan tek seçeneği işaretle."
      ],
      "tips": [
        "Although ile başlamışsa diğer yarıda tam tersi duygu veya durum ara.",
        "Because ile başlamışsa diğer yarıda doğrudan o sebebin sonucunu ara."
      ],
      "pitfalls": [
        "İki son derece yakın akademik seçenek arasındaki ton veya kapsam farkını görememek."
      ],
      "distractorTactic": "Bağlamın retorik amacına uymayan ve yazarın tarafsızlık/eleştiri tonunu aşan seçenekleri ele.",
      "memoryCode": "🎵 Cümle Tamamlama [C2]: Bağlaç köprüdür; bir ayağı soruda, diğer ayağı doğru şıktadır!",
      "timeManagement": "Soru başı önerilen süre: 70-80 sn.",
      "exampleEn": "Although electric vehicles are environmentally friendly, their battery production requires significant mineral extraction.",
      "explanationTr": "Zıtlık bağlacı olumlu çevre dostu yönü ile maden ihtiyacı olumsuzluğunu birbirine bağlar.",
      "solvedExample": {
        "question": "[Cümle Tamamlama - C2] Unless immediate international action is taken to combat deforestation, -------.\n\nA) biodiversity will continue to decline at an unprecedented pace\nB) forest reserves have expanded significantly in tropical regions\nC) endangered species would have found safe natural habitats\nD) local communities were able to preserve their ecosystems\nE) the global climate system has already been fully restored",
        "options": [
          "biodiversity will continue to decline at an unprecedented pace",
          "forest reserves have expanded significantly in tropical regions",
          "endangered species would have found safe natural habitats",
          "local communities were able to preserve their ecosystems",
          "the global climate system has already been fully restored"
        ],
        "answer": "A",
        "explanation": "Unless (Type 1 koşul) ana cümlede gelecek tehdidi ifade eden 'will continue to decline' ister."
      },
      "ydsExamFormat": "YDS 95-100 tam puan düzeyindeki seçici soruların kilit çözüm metodolojisidir."
    },
    {
      "level": "YDS",
      "title": "Cümle Tamamlama — YDS: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama",
      "meaning": "Cümle Tamamlama için YDS seviyesinde kilit kural: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama.",
      "requirements": "Verilen yarım cümlenin bağlacını, öznesini ve zamanını doğru analiz edip tamamlayıcı yarıyı bulmak.",
      "method": "Bağlacı belirle -> Mantıksal beklenti oluştur -> Özne ve zaman uyumunu kontrol ederek şıkkı seç.",
      "steps": [
        "1. Soru kökündeki bağlacın türünü (zıtlık, sebep, koşul, amaç) belirle.",
        "2. Mantıksal olarak diğer yarıda ne anlatılması gerektiğini Türkçe tahmin et.",
        "3. Özne zamiri referansını ve zaman uyumunu sağlayan tek seçeneği işaretle."
      ],
      "tips": [
        "Although ile başlamışsa diğer yarıda tam tersi duygu veya durum ara.",
        "Because ile başlamışsa diğer yarıda doğrudan o sebebin sonucunu ara."
      ],
      "pitfalls": [
        "Tek bir soruya 2 dakikadan fazla takılıp diğer soru tiplerinin süresinden çalmak."
      ],
      "distractorTactic": "ÖSYM'nin en sevdiği tuzak kalıpları (aşırı genelleme, ters neden-sonuç, sahte bağlaç) şablonla ele.",
      "memoryCode": "🎵 Cümle Tamamlama [YDS]: Bağlaç köprüdür; bir ayağı soruda, diğer ayağı doğru şıktadır!",
      "timeManagement": "Soru başı önerilen süre: Hızlı tempo (45-55 sn ortalama).",
      "exampleEn": "Although electric vehicles are environmentally friendly, their battery production requires significant mineral extraction.",
      "explanationTr": "Zıtlık bağlacı olumlu çevre dostu yönü ile maden ihtiyacı olumsuzluğunu birbirine bağlar.",
      "solvedExample": {
        "question": "[Cümle Tamamlama - YDS] Unless immediate international action is taken to combat deforestation, -------.\n\nA) biodiversity will continue to decline at an unprecedented pace\nB) forest reserves have expanded significantly in tropical regions\nC) endangered species would have found safe natural habitats\nD) local communities were able to preserve their ecosystems\nE) the global climate system has already been fully restored",
        "options": [
          "biodiversity will continue to decline at an unprecedented pace",
          "forest reserves have expanded significantly in tropical regions",
          "endangered species would have found safe natural habitats",
          "local communities were able to preserve their ecosystems",
          "the global climate system has already been fully restored"
        ],
        "answer": "A",
        "explanation": "Unless (Type 1 koşul) ana cümlede gelecek tehdidi ifade eden 'will continue to decline' ister."
      },
      "ydsExamFormat": "180 dakikalık gerçek sınav salonunda 80 soruyu maksimum net ve sıfır panikle tamamlama sanatıdır."
    }
  ],
  "translation-en-tr": [
    {
      "level": "A1",
      "title": "İngilizce - Türkçe Çeviri — A1: Temel Tanıma ve Açık İpuçları",
      "meaning": "İngilizce - Türkçe Çeviri için A1 seviyesinde kilit kural: Temel Tanıma ve Açık İpuçları.",
      "requirements": "İngilizce cümlenin ana fiilini (yüklemini) ve ana öznesini Türkçe yüklem ve özne ile birebir eşleştirmek.",
      "method": "Ana fiili bul -> Türkçe cümlenin sonundaki yükleme bak -> Ana özneyi eşleştir -> Eksik/fazla kelime içeren şıkları ele.",
      "steps": [
        "1. İngilizce cümlenin ana fiilini ve zamanını tespit et.",
        "2. Şıkların son kelimesine (yüklemine) bak; uyuşmayanları derhal ele.",
        "3. Kalan şıklarda ana özneyi ve bağlaçları doğrula."
      ],
      "tips": [
        "İngilizce cümlenin yüklemi neyse Türkçe cümlenin sonundaki kelime de tam o anlama gelmelidir.",
        "Şıklara asla kafadan anlam katma; metinde olmayan kelimeleri barındıran şıkkı ele."
      ],
      "pitfalls": [
        "Cümlenin tamamını okumadan ilk gördüğü kelimeye kapılmak."
      ],
      "distractorTactic": "Temel gramer uyumuna ve kelime türüne uymayan seçenekleri hemen ele.",
      "memoryCode": "🎵 İngilizce - Türkçe Çeviri [A1]: Önce YÜKLEMİ bul, sonra ÖZNEYİ eşle, 20 saniyede neti al!",
      "timeManagement": "Soru başı önerilen süre: 30-40 sn.",
      "exampleEn": "Artificial intelligence is reshaping modern industries by automating complex analytical tasks.",
      "explanationTr": "Yüklem 'is reshaping' (yeniden şekillendirmektedir), özne 'Artificial intelligence' (Yapay zeka).",
      "solvedExample": {
        "question": "[İngilizce - Türkçe Çeviri - A1] 'Recent archaeological excavations in Mesopotamia have revealed that urban settlements emerged much earlier than previously assumed.'\n\nA) Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.\nB) Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.\nC) Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.\nD) Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.\nE) Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır.",
        "options": [
          "Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.",
          "Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.",
          "Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.",
          "Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.",
          "Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır."
        ],
        "answer": "A",
        "explanation": "Özne: 'Recent archaeological excavations in Mesopotamia' (Mezopotamya'daki son arkeolojik kazılar). Yüklem: 'have revealed' (ortaya koymuştur)."
      },
      "ydsExamFormat": "Soru kökündeki en temel özne, yüklem ve zaman ipuçlarını ilk bakışta yakalama becerisini oluşturur."
    },
    {
      "level": "A2",
      "title": "İngilizce - Türkçe Çeviri — A2: Zaman ve Bağlaç İşaretçileri",
      "meaning": "İngilizce - Türkçe Çeviri için A2 seviyesinde kilit kural: Zaman ve Bağlaç İşaretçileri.",
      "requirements": "İngilizce cümlenin ana fiilini (yüklemini) ve ana öznesini Türkçe yüklem ve özne ile birebir eşleştirmek.",
      "method": "Ana fiili bul -> Türkçe cümlenin sonundaki yükleme bak -> Ana özneyi eşleştir -> Eksik/fazla kelime içeren şıkları ele.",
      "steps": [
        "1. İngilizce cümlenin ana fiilini ve zamanını tespit et.",
        "2. Şıkların son kelimesine (yüklemine) bak; uyuşmayanları derhal ele.",
        "3. Kalan şıklarda ana özneyi ve bağlaçları doğrula."
      ],
      "tips": [
        "İngilizce cümlenin yüklemi neyse Türkçe cümlenin sonundaki kelime de tam o anlama gelmelidir.",
        "Şıklara asla kafadan anlam katma; metinde olmayan kelimeleri barındıran şıkkı ele."
      ],
      "pitfalls": [
        "Zaman uyumu zıtlığını göz ardı edip cümlenin sadece bir tarafına odaklanmak."
      ],
      "distractorTactic": "Zaman bağlaçlarının gerektirdiği ana cümle zamanı ile çelişen seçenekleri ele.",
      "memoryCode": "🎵 İngilizce - Türkçe Çeviri [A2]: Önce YÜKLEMİ bul, sonra ÖZNEYİ eşle, 20 saniyede neti al!",
      "timeManagement": "Soru başı önerilen süre: 40-45 sn.",
      "exampleEn": "Artificial intelligence is reshaping modern industries by automating complex analytical tasks.",
      "explanationTr": "Yüklem 'is reshaping' (yeniden şekillendirmektedir), özne 'Artificial intelligence' (Yapay zeka).",
      "solvedExample": {
        "question": "[İngilizce - Türkçe Çeviri - A2] 'Recent archaeological excavations in Mesopotamia have revealed that urban settlements emerged much earlier than previously assumed.'\n\nA) Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.\nB) Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.\nC) Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.\nD) Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.\nE) Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır.",
        "options": [
          "Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.",
          "Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.",
          "Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.",
          "Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.",
          "Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır."
        ],
        "answer": "A",
        "explanation": "Özne: 'Recent archaeological excavations in Mesopotamia' (Mezopotamya'daki son arkeolojik kazılar). Yüklem: 'have revealed' (ortaya koymuştur)."
      },
      "ydsExamFormat": "YDS'de zaman ve temel bağlaç sorularını hatasız çözmenin omurgasını teşkil eder."
    },
    {
      "level": "B1",
      "title": "İngilizce - Türkçe Çeviri — B1: Cümle İçi Bağlam ve Temel Eleme",
      "meaning": "İngilizce - Türkçe Çeviri için B1 seviyesinde kilit kural: Cümle İçi Bağlam ve Temel Eleme.",
      "requirements": "İngilizce cümlenin ana fiilini (yüklemini) ve ana öznesini Türkçe yüklem ve özne ile birebir eşleştirmek.",
      "method": "Ana fiili bul -> Türkçe cümlenin sonundaki yükleme bak -> Ana özneyi eşleştir -> Eksik/fazla kelime içeren şıkları ele.",
      "steps": [
        "1. İngilizce cümlenin ana fiilini ve zamanını tespit et.",
        "2. Şıkların son kelimesine (yüklemine) bak; uyuşmayanları derhal ele.",
        "3. Kalan şıklarda ana özneyi ve bağlaçları doğrula."
      ],
      "tips": [
        "İngilizce cümlenin yüklemi neyse Türkçe cümlenin sonundaki kelime de tam o anlama gelmelidir.",
        "Şıklara asla kafadan anlam katma; metinde olmayan kelimeleri barındıran şıkkı ele."
      ],
      "pitfalls": [
        "Bağlam yönü (+/-) analizi yapmadan benzer anlamlı sözcüklere takılmak."
      ],
      "distractorTactic": "Anlam yönü cümlenin zıt kutbuna düşen veya gereksiz genelleme yapan şıkları ele.",
      "memoryCode": "🎵 İngilizce - Türkçe Çeviri [B1]: Önce YÜKLEMİ bul, sonra ÖZNEYİ eşle, 20 saniyede neti al!",
      "timeManagement": "Soru başı önerilen süre: 45-50 sn.",
      "exampleEn": "Artificial intelligence is reshaping modern industries by automating complex analytical tasks.",
      "explanationTr": "Yüklem 'is reshaping' (yeniden şekillendirmektedir), özne 'Artificial intelligence' (Yapay zeka).",
      "solvedExample": {
        "question": "[İngilizce - Türkçe Çeviri - B1] 'Recent archaeological excavations in Mesopotamia have revealed that urban settlements emerged much earlier than previously assumed.'\n\nA) Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.\nB) Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.\nC) Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.\nD) Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.\nE) Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır.",
        "options": [
          "Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.",
          "Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.",
          "Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.",
          "Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.",
          "Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır."
        ],
        "answer": "A",
        "explanation": "Özne: 'Recent archaeological excavations in Mesopotamia' (Mezopotamya'daki son arkeolojik kazılar). Yüklem: 'have revealed' (ortaya koymuştur)."
      },
      "ydsExamFormat": "YDS orta düzey çeldiricilerini eleyerek net bandını 60-75 aralığına taşır."
    },
    {
      "level": "B2",
      "title": "İngilizce - Türkçe Çeviri — B2: Paragraf Bütünlüğü ve Güçlü Çeldiriciler",
      "meaning": "İngilizce - Türkçe Çeviri için B2 seviyesinde kilit kural: Paragraf Bütünlüğü ve Güçlü Çeldiriciler.",
      "requirements": "İngilizce cümlenin ana fiilini (yüklemini) ve ana öznesini Türkçe yüklem ve özne ile birebir eşleştirmek.",
      "method": "Ana fiili bul -> Türkçe cümlenin sonundaki yükleme bak -> Ana özneyi eşleştir -> Eksik/fazla kelime içeren şıkları ele.",
      "steps": [
        "1. İngilizce cümlenin ana fiilini ve zamanını tespit et.",
        "2. Şıkların son kelimesine (yüklemine) bak; uyuşmayanları derhal ele.",
        "3. Kalan şıklarda ana özneyi ve bağlaçları doğrula."
      ],
      "tips": [
        "İngilizce cümlenin yüklemi neyse Türkçe cümlenin sonundaki kelime de tam o anlama gelmelidir.",
        "Şıklara asla kafadan anlam katma; metinde olmayan kelimeleri barındıran şıkkı ele."
      ],
      "pitfalls": [
        "Güçlü çeldiricilerdeki sahte referans sözcüklerine veya yarım doğru bilgilere kanmak."
      ],
      "distractorTactic": "Metinde doğrudan geçmeyen, mantıksal sıçrama içeren veya aşırı iddialı şıkları ele.",
      "memoryCode": "🎵 İngilizce - Türkçe Çeviri [B2]: Önce YÜKLEMİ bul, sonra ÖZNEYİ eşle, 20 saniyede neti al!",
      "timeManagement": "Soru başı önerilen süre: 50-60 sn.",
      "exampleEn": "Artificial intelligence is reshaping modern industries by automating complex analytical tasks.",
      "explanationTr": "Yüklem 'is reshaping' (yeniden şekillendirmektedir), özne 'Artificial intelligence' (Yapay zeka).",
      "solvedExample": {
        "question": "[İngilizce - Türkçe Çeviri - B2] 'Recent archaeological excavations in Mesopotamia have revealed that urban settlements emerged much earlier than previously assumed.'\n\nA) Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.\nB) Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.\nC) Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.\nD) Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.\nE) Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır.",
        "options": [
          "Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.",
          "Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.",
          "Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.",
          "Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.",
          "Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır."
        ],
        "answer": "A",
        "explanation": "Özne: 'Recent archaeological excavations in Mesopotamia' (Mezopotamya'daki son arkeolojik kazılar). Yüklem: 'have revealed' (ortaya koymuştur)."
      },
      "ydsExamFormat": "YDS 75-85 puan hedefleyen adayların tuzak şıklara düşmesini engelleyen kritik eşiktir."
    },
    {
      "level": "C1",
      "title": "İngilizce - Türkçe Çeviri — C1: Akademik Dil, Nüans ve Örtük Çıkarım",
      "meaning": "İngilizce - Türkçe Çeviri için C1 seviyesinde kilit kural: Akademik Dil, Nüans ve Örtük Çıkarım.",
      "requirements": "İngilizce cümlenin ana fiilini (yüklemini) ve ana öznesini Türkçe yüklem ve özne ile birebir eşleştirmek.",
      "method": "Ana fiili bul -> Türkçe cümlenin sonundaki yükleme bak -> Ana özneyi eşleştir -> Eksik/fazla kelime içeren şıkları ele.",
      "steps": [
        "1. İngilizce cümlenin ana fiilini ve zamanını tespit et.",
        "2. Şıkların son kelimesine (yüklemine) bak; uyuşmayanları derhal ele.",
        "3. Kalan şıklarda ana özneyi ve bağlaçları doğrula."
      ],
      "tips": [
        "İngilizce cümlenin yüklemi neyse Türkçe cümlenin sonundaki kelime de tam o anlama gelmelidir.",
        "Şıklara asla kafadan anlam katma; metinde olmayan kelimeleri barındıran şıkkı ele."
      ],
      "pitfalls": [
        "Yazarın örtük amacını kaçırıp sadece yüzeydeki kelimelerin eşanlamlılarına yönelmek."
      ],
      "distractorTactic": "Akademik resmiyet tonunu bozan veya metindeki nüansı saptıran şıkları ele.",
      "memoryCode": "🎵 İngilizce - Türkçe Çeviri [C1]: Önce YÜKLEMİ bul, sonra ÖZNEYİ eşle, 20 saniyede neti al!",
      "timeManagement": "Soru başı önerilen süre: 60-70 sn.",
      "exampleEn": "Artificial intelligence is reshaping modern industries by automating complex analytical tasks.",
      "explanationTr": "Yüklem 'is reshaping' (yeniden şekillendirmektedir), özne 'Artificial intelligence' (Yapay zeka).",
      "solvedExample": {
        "question": "[İngilizce - Türkçe Çeviri - C1] 'Recent archaeological excavations in Mesopotamia have revealed that urban settlements emerged much earlier than previously assumed.'\n\nA) Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.\nB) Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.\nC) Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.\nD) Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.\nE) Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır.",
        "options": [
          "Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.",
          "Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.",
          "Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.",
          "Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.",
          "Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır."
        ],
        "answer": "A",
        "explanation": "Özne: 'Recent archaeological excavations in Mesopotamia' (Mezopotamya'daki son arkeolojik kazılar). Yüklem: 'have revealed' (ortaya koymuştur)."
      },
      "ydsExamFormat": "YDS 85-90+ bareminde tam net getiren derin analiz seviyesidir."
    },
    {
      "level": "C2",
      "title": "İngilizce - Türkçe Çeviri — C2: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar",
      "meaning": "İngilizce - Türkçe Çeviri için C2 seviyesinde kilit kural: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar.",
      "requirements": "İngilizce cümlenin ana fiilini (yüklemini) ve ana öznesini Türkçe yüklem ve özne ile birebir eşleştirmek.",
      "method": "Ana fiili bul -> Türkçe cümlenin sonundaki yükleme bak -> Ana özneyi eşleştir -> Eksik/fazla kelime içeren şıkları ele.",
      "steps": [
        "1. İngilizce cümlenin ana fiilini ve zamanını tespit et.",
        "2. Şıkların son kelimesine (yüklemine) bak; uyuşmayanları derhal ele.",
        "3. Kalan şıklarda ana özneyi ve bağlaçları doğrula."
      ],
      "tips": [
        "İngilizce cümlenin yüklemi neyse Türkçe cümlenin sonundaki kelime de tam o anlama gelmelidir.",
        "Şıklara asla kafadan anlam katma; metinde olmayan kelimeleri barındıran şıkkı ele."
      ],
      "pitfalls": [
        "İki son derece yakın akademik seçenek arasındaki ton veya kapsam farkını görememek."
      ],
      "distractorTactic": "Bağlamın retorik amacına uymayan ve yazarın tarafsızlık/eleştiri tonunu aşan seçenekleri ele.",
      "memoryCode": "🎵 İngilizce - Türkçe Çeviri [C2]: Önce YÜKLEMİ bul, sonra ÖZNEYİ eşle, 20 saniyede neti al!",
      "timeManagement": "Soru başı önerilen süre: 70-80 sn.",
      "exampleEn": "Artificial intelligence is reshaping modern industries by automating complex analytical tasks.",
      "explanationTr": "Yüklem 'is reshaping' (yeniden şekillendirmektedir), özne 'Artificial intelligence' (Yapay zeka).",
      "solvedExample": {
        "question": "[İngilizce - Türkçe Çeviri - C2] 'Recent archaeological excavations in Mesopotamia have revealed that urban settlements emerged much earlier than previously assumed.'\n\nA) Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.\nB) Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.\nC) Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.\nD) Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.\nE) Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır.",
        "options": [
          "Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.",
          "Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.",
          "Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.",
          "Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.",
          "Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır."
        ],
        "answer": "A",
        "explanation": "Özne: 'Recent archaeological excavations in Mesopotamia' (Mezopotamya'daki son arkeolojik kazılar). Yüklem: 'have revealed' (ortaya koymuştur)."
      },
      "ydsExamFormat": "YDS 95-100 tam puan düzeyindeki seçici soruların kilit çözüm metodolojisidir."
    },
    {
      "level": "YDS",
      "title": "İngilizce - Türkçe Çeviri — YDS: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama",
      "meaning": "İngilizce - Türkçe Çeviri için YDS seviyesinde kilit kural: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama.",
      "requirements": "İngilizce cümlenin ana fiilini (yüklemini) ve ana öznesini Türkçe yüklem ve özne ile birebir eşleştirmek.",
      "method": "Ana fiili bul -> Türkçe cümlenin sonundaki yükleme bak -> Ana özneyi eşleştir -> Eksik/fazla kelime içeren şıkları ele.",
      "steps": [
        "1. İngilizce cümlenin ana fiilini ve zamanını tespit et.",
        "2. Şıkların son kelimesine (yüklemine) bak; uyuşmayanları derhal ele.",
        "3. Kalan şıklarda ana özneyi ve bağlaçları doğrula."
      ],
      "tips": [
        "İngilizce cümlenin yüklemi neyse Türkçe cümlenin sonundaki kelime de tam o anlama gelmelidir.",
        "Şıklara asla kafadan anlam katma; metinde olmayan kelimeleri barındıran şıkkı ele."
      ],
      "pitfalls": [
        "Tek bir soruya 2 dakikadan fazla takılıp diğer soru tiplerinin süresinden çalmak."
      ],
      "distractorTactic": "ÖSYM'nin en sevdiği tuzak kalıpları (aşırı genelleme, ters neden-sonuç, sahte bağlaç) şablonla ele.",
      "memoryCode": "🎵 İngilizce - Türkçe Çeviri [YDS]: Önce YÜKLEMİ bul, sonra ÖZNEYİ eşle, 20 saniyede neti al!",
      "timeManagement": "Soru başı önerilen süre: Hızlı tempo (45-55 sn ortalama).",
      "exampleEn": "Artificial intelligence is reshaping modern industries by automating complex analytical tasks.",
      "explanationTr": "Yüklem 'is reshaping' (yeniden şekillendirmektedir), özne 'Artificial intelligence' (Yapay zeka).",
      "solvedExample": {
        "question": "[İngilizce - Türkçe Çeviri - YDS] 'Recent archaeological excavations in Mesopotamia have revealed that urban settlements emerged much earlier than previously assumed.'\n\nA) Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.\nB) Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.\nC) Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.\nD) Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.\nE) Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır.",
        "options": [
          "Mezopotamya'daki son arkeolojik kazılar, kentsel yerleşimlerin önceden tahmin edilenden çok daha erken ortaya çıktığını ortaya koymuştur.",
          "Önceden varsayıldığı gibi kentsel yerleşimler Mezopotamya'daki kazılar sayesinde erken tarihlerde keşfedilmiştir.",
          "Mezopotamya'da kazılar yapıldıkça kentsel yerleşimlerin tahminlerden önce kurulduğu açıkça görülmektedir.",
          "Arkeolojik kazılar neticesinde Mezopotamya yerleşimlerinin sanılandan daha eski olduğu kanıtlanmıştır.",
          "Kentsel yerleşimlerin erken tarihlerde ortaya çıkışı, Mezopotamya'da sürdürülen arkeolojik kazılarla doğrulanmıştır."
        ],
        "answer": "A",
        "explanation": "Özne: 'Recent archaeological excavations in Mesopotamia' (Mezopotamya'daki son arkeolojik kazılar). Yüklem: 'have revealed' (ortaya koymuştur)."
      },
      "ydsExamFormat": "180 dakikalık gerçek sınav salonunda 80 soruyu maksimum net ve sıfır panikle tamamlama sanatıdır."
    }
  ],
  "translation-tr-en": [
    {
      "level": "A1",
      "title": "Türkçe - İngilizce Çeviri — A1: Temel Tanıma ve Açık İpuçları",
      "meaning": "Türkçe - İngilizce Çeviri için A1 seviyesinde kilit kural: Temel Tanıma ve Açık İpuçları.",
      "requirements": "Türkçe cümlenin en sonundaki yüklemi ve cümlenin başındaki gerçek özneyi İngilizce cümleye hatasız aktarma.",
      "method": "Türkçe yüklemi İngilizce cümlenin ana fiiliyle eşle -> Türkçe özneyi cümlenin başına yerleştir -> Çeldiricileri ele.",
      "steps": [
        "1. Türkçe cümlenin sonundaki yüklemi tespit et ve İngilizce karşılığını belirle.",
        "2. İngilizce şıklarda ana fiili yanlış olanları ele.",
        "3. Cümlenin öznesini ve yan cümlecik bağlacını kontrol et."
      ],
      "tips": [
        "Yüklem aktif ise İngilizcesi de aktif, pasif ise İngilizcesi de pasif (BE + V3) olmalıdır.",
        "Sıfat cümleciklerinin (which, that, who) tamlanan ismin hemen peşinden geldiğinden emin ol."
      ],
      "pitfalls": [
        "Cümlenin tamamını okumadan ilk gördüğü kelimeye kapılmak."
      ],
      "distractorTactic": "Temel gramer uyumuna ve kelime türüne uymayan seçenekleri hemen ele.",
      "memoryCode": "🎵 Türkçe - İngilizce Çeviri [A1]: Türkçe sonundaki yüklem, İngilizce ortasındaki ana fiildir!",
      "timeManagement": "Soru başı önerilen süre: 30-40 sn.",
      "exampleEn": "Clean drinking water, which is essential for public health, remains inaccessible to millions of people.",
      "explanationTr": "Özne 'Temiz içme suyu', yüklem 'erişilemez durumdadır' (remains inaccessible).",
      "solvedExample": {
        "question": "[Türkçe - İngilizce Çeviri - A1] 'Küresel ısınma nedeniyle kutup buzullarının hızla erimesi, deniz seviyesinin yükselmesini kaçınılmaz hale getirmektedir.'\n\nA) The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.\nB) Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.\nC) As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.\nD) Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.\nE) Polar ice caps are melting so fast that global warming inevitably causes sea level rise.",
        "options": [
          "The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.",
          "Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.",
          "As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.",
          "Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.",
          "Polar ice caps are melting so fast that global warming inevitably causes sea level rise."
        ],
        "answer": "A",
        "explanation": "Özne: 'The rapid melting of polar ice caps due to global warming'. Yüklem: 'makes ... inevitable' (kaçınılmaz hale getirmektedir)."
      },
      "ydsExamFormat": "Soru kökündeki en temel özne, yüklem ve zaman ipuçlarını ilk bakışta yakalama becerisini oluşturur."
    },
    {
      "level": "A2",
      "title": "Türkçe - İngilizce Çeviri — A2: Zaman ve Bağlaç İşaretçileri",
      "meaning": "Türkçe - İngilizce Çeviri için A2 seviyesinde kilit kural: Zaman ve Bağlaç İşaretçileri.",
      "requirements": "Türkçe cümlenin en sonundaki yüklemi ve cümlenin başındaki gerçek özneyi İngilizce cümleye hatasız aktarma.",
      "method": "Türkçe yüklemi İngilizce cümlenin ana fiiliyle eşle -> Türkçe özneyi cümlenin başına yerleştir -> Çeldiricileri ele.",
      "steps": [
        "1. Türkçe cümlenin sonundaki yüklemi tespit et ve İngilizce karşılığını belirle.",
        "2. İngilizce şıklarda ana fiili yanlış olanları ele.",
        "3. Cümlenin öznesini ve yan cümlecik bağlacını kontrol et."
      ],
      "tips": [
        "Yüklem aktif ise İngilizcesi de aktif, pasif ise İngilizcesi de pasif (BE + V3) olmalıdır.",
        "Sıfat cümleciklerinin (which, that, who) tamlanan ismin hemen peşinden geldiğinden emin ol."
      ],
      "pitfalls": [
        "Zaman uyumu zıtlığını göz ardı edip cümlenin sadece bir tarafına odaklanmak."
      ],
      "distractorTactic": "Zaman bağlaçlarının gerektirdiği ana cümle zamanı ile çelişen seçenekleri ele.",
      "memoryCode": "🎵 Türkçe - İngilizce Çeviri [A2]: Türkçe sonundaki yüklem, İngilizce ortasındaki ana fiildir!",
      "timeManagement": "Soru başı önerilen süre: 40-45 sn.",
      "exampleEn": "Clean drinking water, which is essential for public health, remains inaccessible to millions of people.",
      "explanationTr": "Özne 'Temiz içme suyu', yüklem 'erişilemez durumdadır' (remains inaccessible).",
      "solvedExample": {
        "question": "[Türkçe - İngilizce Çeviri - A2] 'Küresel ısınma nedeniyle kutup buzullarının hızla erimesi, deniz seviyesinin yükselmesini kaçınılmaz hale getirmektedir.'\n\nA) The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.\nB) Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.\nC) As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.\nD) Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.\nE) Polar ice caps are melting so fast that global warming inevitably causes sea level rise.",
        "options": [
          "The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.",
          "Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.",
          "As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.",
          "Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.",
          "Polar ice caps are melting so fast that global warming inevitably causes sea level rise."
        ],
        "answer": "A",
        "explanation": "Özne: 'The rapid melting of polar ice caps due to global warming'. Yüklem: 'makes ... inevitable' (kaçınılmaz hale getirmektedir)."
      },
      "ydsExamFormat": "YDS'de zaman ve temel bağlaç sorularını hatasız çözmenin omurgasını teşkil eder."
    },
    {
      "level": "B1",
      "title": "Türkçe - İngilizce Çeviri — B1: Cümle İçi Bağlam ve Temel Eleme",
      "meaning": "Türkçe - İngilizce Çeviri için B1 seviyesinde kilit kural: Cümle İçi Bağlam ve Temel Eleme.",
      "requirements": "Türkçe cümlenin en sonundaki yüklemi ve cümlenin başındaki gerçek özneyi İngilizce cümleye hatasız aktarma.",
      "method": "Türkçe yüklemi İngilizce cümlenin ana fiiliyle eşle -> Türkçe özneyi cümlenin başına yerleştir -> Çeldiricileri ele.",
      "steps": [
        "1. Türkçe cümlenin sonundaki yüklemi tespit et ve İngilizce karşılığını belirle.",
        "2. İngilizce şıklarda ana fiili yanlış olanları ele.",
        "3. Cümlenin öznesini ve yan cümlecik bağlacını kontrol et."
      ],
      "tips": [
        "Yüklem aktif ise İngilizcesi de aktif, pasif ise İngilizcesi de pasif (BE + V3) olmalıdır.",
        "Sıfat cümleciklerinin (which, that, who) tamlanan ismin hemen peşinden geldiğinden emin ol."
      ],
      "pitfalls": [
        "Bağlam yönü (+/-) analizi yapmadan benzer anlamlı sözcüklere takılmak."
      ],
      "distractorTactic": "Anlam yönü cümlenin zıt kutbuna düşen veya gereksiz genelleme yapan şıkları ele.",
      "memoryCode": "🎵 Türkçe - İngilizce Çeviri [B1]: Türkçe sonundaki yüklem, İngilizce ortasındaki ana fiildir!",
      "timeManagement": "Soru başı önerilen süre: 45-50 sn.",
      "exampleEn": "Clean drinking water, which is essential for public health, remains inaccessible to millions of people.",
      "explanationTr": "Özne 'Temiz içme suyu', yüklem 'erişilemez durumdadır' (remains inaccessible).",
      "solvedExample": {
        "question": "[Türkçe - İngilizce Çeviri - B1] 'Küresel ısınma nedeniyle kutup buzullarının hızla erimesi, deniz seviyesinin yükselmesini kaçınılmaz hale getirmektedir.'\n\nA) The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.\nB) Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.\nC) As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.\nD) Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.\nE) Polar ice caps are melting so fast that global warming inevitably causes sea level rise.",
        "options": [
          "The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.",
          "Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.",
          "As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.",
          "Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.",
          "Polar ice caps are melting so fast that global warming inevitably causes sea level rise."
        ],
        "answer": "A",
        "explanation": "Özne: 'The rapid melting of polar ice caps due to global warming'. Yüklem: 'makes ... inevitable' (kaçınılmaz hale getirmektedir)."
      },
      "ydsExamFormat": "YDS orta düzey çeldiricilerini eleyerek net bandını 60-75 aralığına taşır."
    },
    {
      "level": "B2",
      "title": "Türkçe - İngilizce Çeviri — B2: Paragraf Bütünlüğü ve Güçlü Çeldiriciler",
      "meaning": "Türkçe - İngilizce Çeviri için B2 seviyesinde kilit kural: Paragraf Bütünlüğü ve Güçlü Çeldiriciler.",
      "requirements": "Türkçe cümlenin en sonundaki yüklemi ve cümlenin başındaki gerçek özneyi İngilizce cümleye hatasız aktarma.",
      "method": "Türkçe yüklemi İngilizce cümlenin ana fiiliyle eşle -> Türkçe özneyi cümlenin başına yerleştir -> Çeldiricileri ele.",
      "steps": [
        "1. Türkçe cümlenin sonundaki yüklemi tespit et ve İngilizce karşılığını belirle.",
        "2. İngilizce şıklarda ana fiili yanlış olanları ele.",
        "3. Cümlenin öznesini ve yan cümlecik bağlacını kontrol et."
      ],
      "tips": [
        "Yüklem aktif ise İngilizcesi de aktif, pasif ise İngilizcesi de pasif (BE + V3) olmalıdır.",
        "Sıfat cümleciklerinin (which, that, who) tamlanan ismin hemen peşinden geldiğinden emin ol."
      ],
      "pitfalls": [
        "Güçlü çeldiricilerdeki sahte referans sözcüklerine veya yarım doğru bilgilere kanmak."
      ],
      "distractorTactic": "Metinde doğrudan geçmeyen, mantıksal sıçrama içeren veya aşırı iddialı şıkları ele.",
      "memoryCode": "🎵 Türkçe - İngilizce Çeviri [B2]: Türkçe sonundaki yüklem, İngilizce ortasındaki ana fiildir!",
      "timeManagement": "Soru başı önerilen süre: 50-60 sn.",
      "exampleEn": "Clean drinking water, which is essential for public health, remains inaccessible to millions of people.",
      "explanationTr": "Özne 'Temiz içme suyu', yüklem 'erişilemez durumdadır' (remains inaccessible).",
      "solvedExample": {
        "question": "[Türkçe - İngilizce Çeviri - B2] 'Küresel ısınma nedeniyle kutup buzullarının hızla erimesi, deniz seviyesinin yükselmesini kaçınılmaz hale getirmektedir.'\n\nA) The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.\nB) Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.\nC) As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.\nD) Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.\nE) Polar ice caps are melting so fast that global warming inevitably causes sea level rise.",
        "options": [
          "The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.",
          "Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.",
          "As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.",
          "Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.",
          "Polar ice caps are melting so fast that global warming inevitably causes sea level rise."
        ],
        "answer": "A",
        "explanation": "Özne: 'The rapid melting of polar ice caps due to global warming'. Yüklem: 'makes ... inevitable' (kaçınılmaz hale getirmektedir)."
      },
      "ydsExamFormat": "YDS 75-85 puan hedefleyen adayların tuzak şıklara düşmesini engelleyen kritik eşiktir."
    },
    {
      "level": "C1",
      "title": "Türkçe - İngilizce Çeviri — C1: Akademik Dil, Nüans ve Örtük Çıkarım",
      "meaning": "Türkçe - İngilizce Çeviri için C1 seviyesinde kilit kural: Akademik Dil, Nüans ve Örtük Çıkarım.",
      "requirements": "Türkçe cümlenin en sonundaki yüklemi ve cümlenin başındaki gerçek özneyi İngilizce cümleye hatasız aktarma.",
      "method": "Türkçe yüklemi İngilizce cümlenin ana fiiliyle eşle -> Türkçe özneyi cümlenin başına yerleştir -> Çeldiricileri ele.",
      "steps": [
        "1. Türkçe cümlenin sonundaki yüklemi tespit et ve İngilizce karşılığını belirle.",
        "2. İngilizce şıklarda ana fiili yanlış olanları ele.",
        "3. Cümlenin öznesini ve yan cümlecik bağlacını kontrol et."
      ],
      "tips": [
        "Yüklem aktif ise İngilizcesi de aktif, pasif ise İngilizcesi de pasif (BE + V3) olmalıdır.",
        "Sıfat cümleciklerinin (which, that, who) tamlanan ismin hemen peşinden geldiğinden emin ol."
      ],
      "pitfalls": [
        "Yazarın örtük amacını kaçırıp sadece yüzeydeki kelimelerin eşanlamlılarına yönelmek."
      ],
      "distractorTactic": "Akademik resmiyet tonunu bozan veya metindeki nüansı saptıran şıkları ele.",
      "memoryCode": "🎵 Türkçe - İngilizce Çeviri [C1]: Türkçe sonundaki yüklem, İngilizce ortasındaki ana fiildir!",
      "timeManagement": "Soru başı önerilen süre: 60-70 sn.",
      "exampleEn": "Clean drinking water, which is essential for public health, remains inaccessible to millions of people.",
      "explanationTr": "Özne 'Temiz içme suyu', yüklem 'erişilemez durumdadır' (remains inaccessible).",
      "solvedExample": {
        "question": "[Türkçe - İngilizce Çeviri - C1] 'Küresel ısınma nedeniyle kutup buzullarının hızla erimesi, deniz seviyesinin yükselmesini kaçınılmaz hale getirmektedir.'\n\nA) The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.\nB) Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.\nC) As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.\nD) Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.\nE) Polar ice caps are melting so fast that global warming inevitably causes sea level rise.",
        "options": [
          "The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.",
          "Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.",
          "As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.",
          "Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.",
          "Polar ice caps are melting so fast that global warming inevitably causes sea level rise."
        ],
        "answer": "A",
        "explanation": "Özne: 'The rapid melting of polar ice caps due to global warming'. Yüklem: 'makes ... inevitable' (kaçınılmaz hale getirmektedir)."
      },
      "ydsExamFormat": "YDS 85-90+ bareminde tam net getiren derin analiz seviyesidir."
    },
    {
      "level": "C2",
      "title": "Türkçe - İngilizce Çeviri — C2: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar",
      "meaning": "Türkçe - İngilizce Çeviri için C2 seviyesinde kilit kural: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar.",
      "requirements": "Türkçe cümlenin en sonundaki yüklemi ve cümlenin başındaki gerçek özneyi İngilizce cümleye hatasız aktarma.",
      "method": "Türkçe yüklemi İngilizce cümlenin ana fiiliyle eşle -> Türkçe özneyi cümlenin başına yerleştir -> Çeldiricileri ele.",
      "steps": [
        "1. Türkçe cümlenin sonundaki yüklemi tespit et ve İngilizce karşılığını belirle.",
        "2. İngilizce şıklarda ana fiili yanlış olanları ele.",
        "3. Cümlenin öznesini ve yan cümlecik bağlacını kontrol et."
      ],
      "tips": [
        "Yüklem aktif ise İngilizcesi de aktif, pasif ise İngilizcesi de pasif (BE + V3) olmalıdır.",
        "Sıfat cümleciklerinin (which, that, who) tamlanan ismin hemen peşinden geldiğinden emin ol."
      ],
      "pitfalls": [
        "İki son derece yakın akademik seçenek arasındaki ton veya kapsam farkını görememek."
      ],
      "distractorTactic": "Bağlamın retorik amacına uymayan ve yazarın tarafsızlık/eleştiri tonunu aşan seçenekleri ele.",
      "memoryCode": "🎵 Türkçe - İngilizce Çeviri [C2]: Türkçe sonundaki yüklem, İngilizce ortasındaki ana fiildir!",
      "timeManagement": "Soru başı önerilen süre: 70-80 sn.",
      "exampleEn": "Clean drinking water, which is essential for public health, remains inaccessible to millions of people.",
      "explanationTr": "Özne 'Temiz içme suyu', yüklem 'erişilemez durumdadır' (remains inaccessible).",
      "solvedExample": {
        "question": "[Türkçe - İngilizce Çeviri - C2] 'Küresel ısınma nedeniyle kutup buzullarının hızla erimesi, deniz seviyesinin yükselmesini kaçınılmaz hale getirmektedir.'\n\nA) The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.\nB) Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.\nC) As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.\nD) Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.\nE) Polar ice caps are melting so fast that global warming inevitably causes sea level rise.",
        "options": [
          "The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.",
          "Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.",
          "As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.",
          "Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.",
          "Polar ice caps are melting so fast that global warming inevitably causes sea level rise."
        ],
        "answer": "A",
        "explanation": "Özne: 'The rapid melting of polar ice caps due to global warming'. Yüklem: 'makes ... inevitable' (kaçınılmaz hale getirmektedir)."
      },
      "ydsExamFormat": "YDS 95-100 tam puan düzeyindeki seçici soruların kilit çözüm metodolojisidir."
    },
    {
      "level": "YDS",
      "title": "Türkçe - İngilizce Çeviri — YDS: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama",
      "meaning": "Türkçe - İngilizce Çeviri için YDS seviyesinde kilit kural: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama.",
      "requirements": "Türkçe cümlenin en sonundaki yüklemi ve cümlenin başındaki gerçek özneyi İngilizce cümleye hatasız aktarma.",
      "method": "Türkçe yüklemi İngilizce cümlenin ana fiiliyle eşle -> Türkçe özneyi cümlenin başına yerleştir -> Çeldiricileri ele.",
      "steps": [
        "1. Türkçe cümlenin sonundaki yüklemi tespit et ve İngilizce karşılığını belirle.",
        "2. İngilizce şıklarda ana fiili yanlış olanları ele.",
        "3. Cümlenin öznesini ve yan cümlecik bağlacını kontrol et."
      ],
      "tips": [
        "Yüklem aktif ise İngilizcesi de aktif, pasif ise İngilizcesi de pasif (BE + V3) olmalıdır.",
        "Sıfat cümleciklerinin (which, that, who) tamlanan ismin hemen peşinden geldiğinden emin ol."
      ],
      "pitfalls": [
        "Tek bir soruya 2 dakikadan fazla takılıp diğer soru tiplerinin süresinden çalmak."
      ],
      "distractorTactic": "ÖSYM'nin en sevdiği tuzak kalıpları (aşırı genelleme, ters neden-sonuç, sahte bağlaç) şablonla ele.",
      "memoryCode": "🎵 Türkçe - İngilizce Çeviri [YDS]: Türkçe sonundaki yüklem, İngilizce ortasındaki ana fiildir!",
      "timeManagement": "Soru başı önerilen süre: Hızlı tempo (45-55 sn ortalama).",
      "exampleEn": "Clean drinking water, which is essential for public health, remains inaccessible to millions of people.",
      "explanationTr": "Özne 'Temiz içme suyu', yüklem 'erişilemez durumdadır' (remains inaccessible).",
      "solvedExample": {
        "question": "[Türkçe - İngilizce Çeviri - YDS] 'Küresel ısınma nedeniyle kutup buzullarının hızla erimesi, deniz seviyesinin yükselmesini kaçınılmaz hale getirmektedir.'\n\nA) The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.\nB) Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.\nC) As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.\nD) Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.\nE) Polar ice caps are melting so fast that global warming inevitably causes sea level rise.",
        "options": [
          "The rapid melting of polar ice caps due to global warming makes sea level rise inevitable.",
          "Global warming has caused polar ice caps to melt so rapidly that sea levels have inevitably risen.",
          "As polar ice caps melt quickly because of global warming, sea levels inevitably begin to rise.",
          "Rising sea levels will be inevitable unless the rapid melting of polar ice caps is prevented.",
          "Polar ice caps are melting so fast that global warming inevitably causes sea level rise."
        ],
        "answer": "A",
        "explanation": "Özne: 'The rapid melting of polar ice caps due to global warming'. Yüklem: 'makes ... inevitable' (kaçınılmaz hale getirmektedir)."
      },
      "ydsExamFormat": "180 dakikalık gerçek sınav salonunda 80 soruyu maksimum net ve sıfır panikle tamamlama sanatıdır."
    }
  ],
  "reading": [
    {
      "level": "A1",
      "title": "Okuma Parçaları — A1: Temel Tanıma ve Açık İpuçları",
      "meaning": "Okuma Parçaları için A1 seviyesinde kilit kural: Temel Tanıma ve Açık İpuçları.",
      "requirements": "Paragrafın ana fikrini, detay bilgilerini, yazarın tutumunu ve çıkarım (inference) sorularını çözebilmek.",
      "method": "Önce soru köklerini hızlıca tara -> Paragrafı aktif okuma ile zihinde haritalandır -> Şıklardaki aşırı genellemeleri ele.",
      "steps": [
        "1. Paragrafı okumadan önce 3-4 soru kökünün anahtar kelimelerini tara.",
        "2. Paragrafı okurken ana fikir ve karşıt görüş geçişlerini tespit et.",
        "3. Sorularda metinde birebir geçen veya semantik eşanlamlı (paraphrased) olan seçeneği işaretle."
      ],
      "tips": [
        "Metinde geçmeyen bilgi doğru genel kültür bilgisi olsa bile YDS'de YANLIŞTIR.",
        "Şıklardaki 'all, never, always, completely, exclusively' gibi aşırı iddialı ifadelere karşı şüpheyle yaklaş."
      ],
      "pitfalls": [
        "Cümlenin tamamını okumadan ilk gördüğü kelimeye kapılmak."
      ],
      "distractorTactic": "Temel gramer uyumuna ve kelime türüne uymayan seçenekleri hemen ele.",
      "memoryCode": "🎵 Okuma Parçaları [A1]: Paragraf anayasa metnidir; metinde yazmayan bilgi şıkta doğru olamaz!",
      "timeManagement": "Soru başı önerilen süre: 30-40 sn.",
      "exampleEn": "Although sleep deprivation impairs cognitive functions, adequate rest restores neural plasticity.",
      "explanationTr": "Detay sorusunda 'restores neural plasticity' doğrudan metindeki eşanlamlı ifadeyle yanıtlanır.",
      "solvedExample": {
        "question": "[Okuma Parçaları - A1] According to the passage, why are deep-sea ecosystems particularly vulnerable to human disruption?\n\nA) Because species residing there exhibit exceptionally slow growth and reproductive rates.\nB) Since commercial fishing has already eradicated all major predator species in the deep ocean.\nC) Due to the complete absence of mineral resources on the ocean floor.\nD) Because deep-sea organisms have migrated entirely to shallower coastal waters.\nE) As modern technology prevents scientists from studying deep ocean biodiversity.",
        "options": [
          "Because species residing there exhibit exceptionally slow growth and reproductive rates.",
          "Since commercial fishing has already eradicated all major predator species in the deep ocean.",
          "Due to the complete absence of mineral resources on the ocean floor.",
          "Because deep-sea organisms have migrated entirely to shallower coastal waters.",
          "As modern technology prevents scientists from studying deep ocean biodiversity."
        ],
        "answer": "A",
        "explanation": "Derin deniz canlılarının yavaş büyüme ve üreme hızları onları kırılgan yapar (slow growth and reproductive rates)."
      },
      "ydsExamFormat": "Soru kökündeki en temel özne, yüklem ve zaman ipuçlarını ilk bakışta yakalama becerisini oluşturur."
    },
    {
      "level": "A2",
      "title": "Okuma Parçaları — A2: Zaman ve Bağlaç İşaretçileri",
      "meaning": "Okuma Parçaları için A2 seviyesinde kilit kural: Zaman ve Bağlaç İşaretçileri.",
      "requirements": "Paragrafın ana fikrini, detay bilgilerini, yazarın tutumunu ve çıkarım (inference) sorularını çözebilmek.",
      "method": "Önce soru köklerini hızlıca tara -> Paragrafı aktif okuma ile zihinde haritalandır -> Şıklardaki aşırı genellemeleri ele.",
      "steps": [
        "1. Paragrafı okumadan önce 3-4 soru kökünün anahtar kelimelerini tara.",
        "2. Paragrafı okurken ana fikir ve karşıt görüş geçişlerini tespit et.",
        "3. Sorularda metinde birebir geçen veya semantik eşanlamlı (paraphrased) olan seçeneği işaretle."
      ],
      "tips": [
        "Metinde geçmeyen bilgi doğru genel kültür bilgisi olsa bile YDS'de YANLIŞTIR.",
        "Şıklardaki 'all, never, always, completely, exclusively' gibi aşırı iddialı ifadelere karşı şüpheyle yaklaş."
      ],
      "pitfalls": [
        "Zaman uyumu zıtlığını göz ardı edip cümlenin sadece bir tarafına odaklanmak."
      ],
      "distractorTactic": "Zaman bağlaçlarının gerektirdiği ana cümle zamanı ile çelişen seçenekleri ele.",
      "memoryCode": "🎵 Okuma Parçaları [A2]: Paragraf anayasa metnidir; metinde yazmayan bilgi şıkta doğru olamaz!",
      "timeManagement": "Soru başı önerilen süre: 40-45 sn.",
      "exampleEn": "Although sleep deprivation impairs cognitive functions, adequate rest restores neural plasticity.",
      "explanationTr": "Detay sorusunda 'restores neural plasticity' doğrudan metindeki eşanlamlı ifadeyle yanıtlanır.",
      "solvedExample": {
        "question": "[Okuma Parçaları - A2] According to the passage, why are deep-sea ecosystems particularly vulnerable to human disruption?\n\nA) Because species residing there exhibit exceptionally slow growth and reproductive rates.\nB) Since commercial fishing has already eradicated all major predator species in the deep ocean.\nC) Due to the complete absence of mineral resources on the ocean floor.\nD) Because deep-sea organisms have migrated entirely to shallower coastal waters.\nE) As modern technology prevents scientists from studying deep ocean biodiversity.",
        "options": [
          "Because species residing there exhibit exceptionally slow growth and reproductive rates.",
          "Since commercial fishing has already eradicated all major predator species in the deep ocean.",
          "Due to the complete absence of mineral resources on the ocean floor.",
          "Because deep-sea organisms have migrated entirely to shallower coastal waters.",
          "As modern technology prevents scientists from studying deep ocean biodiversity."
        ],
        "answer": "A",
        "explanation": "Derin deniz canlılarının yavaş büyüme ve üreme hızları onları kırılgan yapar (slow growth and reproductive rates)."
      },
      "ydsExamFormat": "YDS'de zaman ve temel bağlaç sorularını hatasız çözmenin omurgasını teşkil eder."
    },
    {
      "level": "B1",
      "title": "Okuma Parçaları — B1: Cümle İçi Bağlam ve Temel Eleme",
      "meaning": "Okuma Parçaları için B1 seviyesinde kilit kural: Cümle İçi Bağlam ve Temel Eleme.",
      "requirements": "Paragrafın ana fikrini, detay bilgilerini, yazarın tutumunu ve çıkarım (inference) sorularını çözebilmek.",
      "method": "Önce soru köklerini hızlıca tara -> Paragrafı aktif okuma ile zihinde haritalandır -> Şıklardaki aşırı genellemeleri ele.",
      "steps": [
        "1. Paragrafı okumadan önce 3-4 soru kökünün anahtar kelimelerini tara.",
        "2. Paragrafı okurken ana fikir ve karşıt görüş geçişlerini tespit et.",
        "3. Sorularda metinde birebir geçen veya semantik eşanlamlı (paraphrased) olan seçeneği işaretle."
      ],
      "tips": [
        "Metinde geçmeyen bilgi doğru genel kültür bilgisi olsa bile YDS'de YANLIŞTIR.",
        "Şıklardaki 'all, never, always, completely, exclusively' gibi aşırı iddialı ifadelere karşı şüpheyle yaklaş."
      ],
      "pitfalls": [
        "Bağlam yönü (+/-) analizi yapmadan benzer anlamlı sözcüklere takılmak."
      ],
      "distractorTactic": "Anlam yönü cümlenin zıt kutbuna düşen veya gereksiz genelleme yapan şıkları ele.",
      "memoryCode": "🎵 Okuma Parçaları [B1]: Paragraf anayasa metnidir; metinde yazmayan bilgi şıkta doğru olamaz!",
      "timeManagement": "Soru başı önerilen süre: 45-50 sn.",
      "exampleEn": "Although sleep deprivation impairs cognitive functions, adequate rest restores neural plasticity.",
      "explanationTr": "Detay sorusunda 'restores neural plasticity' doğrudan metindeki eşanlamlı ifadeyle yanıtlanır.",
      "solvedExample": {
        "question": "[Okuma Parçaları - B1] According to the passage, why are deep-sea ecosystems particularly vulnerable to human disruption?\n\nA) Because species residing there exhibit exceptionally slow growth and reproductive rates.\nB) Since commercial fishing has already eradicated all major predator species in the deep ocean.\nC) Due to the complete absence of mineral resources on the ocean floor.\nD) Because deep-sea organisms have migrated entirely to shallower coastal waters.\nE) As modern technology prevents scientists from studying deep ocean biodiversity.",
        "options": [
          "Because species residing there exhibit exceptionally slow growth and reproductive rates.",
          "Since commercial fishing has already eradicated all major predator species in the deep ocean.",
          "Due to the complete absence of mineral resources on the ocean floor.",
          "Because deep-sea organisms have migrated entirely to shallower coastal waters.",
          "As modern technology prevents scientists from studying deep ocean biodiversity."
        ],
        "answer": "A",
        "explanation": "Derin deniz canlılarının yavaş büyüme ve üreme hızları onları kırılgan yapar (slow growth and reproductive rates)."
      },
      "ydsExamFormat": "YDS orta düzey çeldiricilerini eleyerek net bandını 60-75 aralığına taşır."
    },
    {
      "level": "B2",
      "title": "Okuma Parçaları — B2: Paragraf Bütünlüğü ve Güçlü Çeldiriciler",
      "meaning": "Okuma Parçaları için B2 seviyesinde kilit kural: Paragraf Bütünlüğü ve Güçlü Çeldiriciler.",
      "requirements": "Paragrafın ana fikrini, detay bilgilerini, yazarın tutumunu ve çıkarım (inference) sorularını çözebilmek.",
      "method": "Önce soru köklerini hızlıca tara -> Paragrafı aktif okuma ile zihinde haritalandır -> Şıklardaki aşırı genellemeleri ele.",
      "steps": [
        "1. Paragrafı okumadan önce 3-4 soru kökünün anahtar kelimelerini tara.",
        "2. Paragrafı okurken ana fikir ve karşıt görüş geçişlerini tespit et.",
        "3. Sorularda metinde birebir geçen veya semantik eşanlamlı (paraphrased) olan seçeneği işaretle."
      ],
      "tips": [
        "Metinde geçmeyen bilgi doğru genel kültür bilgisi olsa bile YDS'de YANLIŞTIR.",
        "Şıklardaki 'all, never, always, completely, exclusively' gibi aşırı iddialı ifadelere karşı şüpheyle yaklaş."
      ],
      "pitfalls": [
        "Güçlü çeldiricilerdeki sahte referans sözcüklerine veya yarım doğru bilgilere kanmak."
      ],
      "distractorTactic": "Metinde doğrudan geçmeyen, mantıksal sıçrama içeren veya aşırı iddialı şıkları ele.",
      "memoryCode": "🎵 Okuma Parçaları [B2]: Paragraf anayasa metnidir; metinde yazmayan bilgi şıkta doğru olamaz!",
      "timeManagement": "Soru başı önerilen süre: 50-60 sn.",
      "exampleEn": "Although sleep deprivation impairs cognitive functions, adequate rest restores neural plasticity.",
      "explanationTr": "Detay sorusunda 'restores neural plasticity' doğrudan metindeki eşanlamlı ifadeyle yanıtlanır.",
      "solvedExample": {
        "question": "[Okuma Parçaları - B2] According to the passage, why are deep-sea ecosystems particularly vulnerable to human disruption?\n\nA) Because species residing there exhibit exceptionally slow growth and reproductive rates.\nB) Since commercial fishing has already eradicated all major predator species in the deep ocean.\nC) Due to the complete absence of mineral resources on the ocean floor.\nD) Because deep-sea organisms have migrated entirely to shallower coastal waters.\nE) As modern technology prevents scientists from studying deep ocean biodiversity.",
        "options": [
          "Because species residing there exhibit exceptionally slow growth and reproductive rates.",
          "Since commercial fishing has already eradicated all major predator species in the deep ocean.",
          "Due to the complete absence of mineral resources on the ocean floor.",
          "Because deep-sea organisms have migrated entirely to shallower coastal waters.",
          "As modern technology prevents scientists from studying deep ocean biodiversity."
        ],
        "answer": "A",
        "explanation": "Derin deniz canlılarının yavaş büyüme ve üreme hızları onları kırılgan yapar (slow growth and reproductive rates)."
      },
      "ydsExamFormat": "YDS 75-85 puan hedefleyen adayların tuzak şıklara düşmesini engelleyen kritik eşiktir."
    },
    {
      "level": "C1",
      "title": "Okuma Parçaları — C1: Akademik Dil, Nüans ve Örtük Çıkarım",
      "meaning": "Okuma Parçaları için C1 seviyesinde kilit kural: Akademik Dil, Nüans ve Örtük Çıkarım.",
      "requirements": "Paragrafın ana fikrini, detay bilgilerini, yazarın tutumunu ve çıkarım (inference) sorularını çözebilmek.",
      "method": "Önce soru köklerini hızlıca tara -> Paragrafı aktif okuma ile zihinde haritalandır -> Şıklardaki aşırı genellemeleri ele.",
      "steps": [
        "1. Paragrafı okumadan önce 3-4 soru kökünün anahtar kelimelerini tara.",
        "2. Paragrafı okurken ana fikir ve karşıt görüş geçişlerini tespit et.",
        "3. Sorularda metinde birebir geçen veya semantik eşanlamlı (paraphrased) olan seçeneği işaretle."
      ],
      "tips": [
        "Metinde geçmeyen bilgi doğru genel kültür bilgisi olsa bile YDS'de YANLIŞTIR.",
        "Şıklardaki 'all, never, always, completely, exclusively' gibi aşırı iddialı ifadelere karşı şüpheyle yaklaş."
      ],
      "pitfalls": [
        "Yazarın örtük amacını kaçırıp sadece yüzeydeki kelimelerin eşanlamlılarına yönelmek."
      ],
      "distractorTactic": "Akademik resmiyet tonunu bozan veya metindeki nüansı saptıran şıkları ele.",
      "memoryCode": "🎵 Okuma Parçaları [C1]: Paragraf anayasa metnidir; metinde yazmayan bilgi şıkta doğru olamaz!",
      "timeManagement": "Soru başı önerilen süre: 60-70 sn.",
      "exampleEn": "Although sleep deprivation impairs cognitive functions, adequate rest restores neural plasticity.",
      "explanationTr": "Detay sorusunda 'restores neural plasticity' doğrudan metindeki eşanlamlı ifadeyle yanıtlanır.",
      "solvedExample": {
        "question": "[Okuma Parçaları - C1] According to the passage, why are deep-sea ecosystems particularly vulnerable to human disruption?\n\nA) Because species residing there exhibit exceptionally slow growth and reproductive rates.\nB) Since commercial fishing has already eradicated all major predator species in the deep ocean.\nC) Due to the complete absence of mineral resources on the ocean floor.\nD) Because deep-sea organisms have migrated entirely to shallower coastal waters.\nE) As modern technology prevents scientists from studying deep ocean biodiversity.",
        "options": [
          "Because species residing there exhibit exceptionally slow growth and reproductive rates.",
          "Since commercial fishing has already eradicated all major predator species in the deep ocean.",
          "Due to the complete absence of mineral resources on the ocean floor.",
          "Because deep-sea organisms have migrated entirely to shallower coastal waters.",
          "As modern technology prevents scientists from studying deep ocean biodiversity."
        ],
        "answer": "A",
        "explanation": "Derin deniz canlılarının yavaş büyüme ve üreme hızları onları kırılgan yapar (slow growth and reproductive rates)."
      },
      "ydsExamFormat": "YDS 85-90+ bareminde tam net getiren derin analiz seviyesidir."
    },
    {
      "level": "C2",
      "title": "Okuma Parçaları — C2: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar",
      "meaning": "Okuma Parçaları için C2 seviyesinde kilit kural: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar.",
      "requirements": "Paragrafın ana fikrini, detay bilgilerini, yazarın tutumunu ve çıkarım (inference) sorularını çözebilmek.",
      "method": "Önce soru köklerini hızlıca tara -> Paragrafı aktif okuma ile zihinde haritalandır -> Şıklardaki aşırı genellemeleri ele.",
      "steps": [
        "1. Paragrafı okumadan önce 3-4 soru kökünün anahtar kelimelerini tara.",
        "2. Paragrafı okurken ana fikir ve karşıt görüş geçişlerini tespit et.",
        "3. Sorularda metinde birebir geçen veya semantik eşanlamlı (paraphrased) olan seçeneği işaretle."
      ],
      "tips": [
        "Metinde geçmeyen bilgi doğru genel kültür bilgisi olsa bile YDS'de YANLIŞTIR.",
        "Şıklardaki 'all, never, always, completely, exclusively' gibi aşırı iddialı ifadelere karşı şüpheyle yaklaş."
      ],
      "pitfalls": [
        "İki son derece yakın akademik seçenek arasındaki ton veya kapsam farkını görememek."
      ],
      "distractorTactic": "Bağlamın retorik amacına uymayan ve yazarın tarafsızlık/eleştiri tonunu aşan seçenekleri ele.",
      "memoryCode": "🎵 Okuma Parçaları [C2]: Paragraf anayasa metnidir; metinde yazmayan bilgi şıkta doğru olamaz!",
      "timeManagement": "Soru başı önerilen süre: 70-80 sn.",
      "exampleEn": "Although sleep deprivation impairs cognitive functions, adequate rest restores neural plasticity.",
      "explanationTr": "Detay sorusunda 'restores neural plasticity' doğrudan metindeki eşanlamlı ifadeyle yanıtlanır.",
      "solvedExample": {
        "question": "[Okuma Parçaları - C2] According to the passage, why are deep-sea ecosystems particularly vulnerable to human disruption?\n\nA) Because species residing there exhibit exceptionally slow growth and reproductive rates.\nB) Since commercial fishing has already eradicated all major predator species in the deep ocean.\nC) Due to the complete absence of mineral resources on the ocean floor.\nD) Because deep-sea organisms have migrated entirely to shallower coastal waters.\nE) As modern technology prevents scientists from studying deep ocean biodiversity.",
        "options": [
          "Because species residing there exhibit exceptionally slow growth and reproductive rates.",
          "Since commercial fishing has already eradicated all major predator species in the deep ocean.",
          "Due to the complete absence of mineral resources on the ocean floor.",
          "Because deep-sea organisms have migrated entirely to shallower coastal waters.",
          "As modern technology prevents scientists from studying deep ocean biodiversity."
        ],
        "answer": "A",
        "explanation": "Derin deniz canlılarının yavaş büyüme ve üreme hızları onları kırılgan yapar (slow growth and reproductive rates)."
      },
      "ydsExamFormat": "YDS 95-100 tam puan düzeyindeki seçici soruların kilit çözüm metodolojisidir."
    },
    {
      "level": "YDS",
      "title": "Okuma Parçaları — YDS: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama",
      "meaning": "Okuma Parçaları için YDS seviyesinde kilit kural: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama.",
      "requirements": "Paragrafın ana fikrini, detay bilgilerini, yazarın tutumunu ve çıkarım (inference) sorularını çözebilmek.",
      "method": "Önce soru köklerini hızlıca tara -> Paragrafı aktif okuma ile zihinde haritalandır -> Şıklardaki aşırı genellemeleri ele.",
      "steps": [
        "1. Paragrafı okumadan önce 3-4 soru kökünün anahtar kelimelerini tara.",
        "2. Paragrafı okurken ana fikir ve karşıt görüş geçişlerini tespit et.",
        "3. Sorularda metinde birebir geçen veya semantik eşanlamlı (paraphrased) olan seçeneği işaretle."
      ],
      "tips": [
        "Metinde geçmeyen bilgi doğru genel kültür bilgisi olsa bile YDS'de YANLIŞTIR.",
        "Şıklardaki 'all, never, always, completely, exclusively' gibi aşırı iddialı ifadelere karşı şüpheyle yaklaş."
      ],
      "pitfalls": [
        "Tek bir soruya 2 dakikadan fazla takılıp diğer soru tiplerinin süresinden çalmak."
      ],
      "distractorTactic": "ÖSYM'nin en sevdiği tuzak kalıpları (aşırı genelleme, ters neden-sonuç, sahte bağlaç) şablonla ele.",
      "memoryCode": "🎵 Okuma Parçaları [YDS]: Paragraf anayasa metnidir; metinde yazmayan bilgi şıkta doğru olamaz!",
      "timeManagement": "Soru başı önerilen süre: Hızlı tempo (45-55 sn ortalama).",
      "exampleEn": "Although sleep deprivation impairs cognitive functions, adequate rest restores neural plasticity.",
      "explanationTr": "Detay sorusunda 'restores neural plasticity' doğrudan metindeki eşanlamlı ifadeyle yanıtlanır.",
      "solvedExample": {
        "question": "[Okuma Parçaları - YDS] According to the passage, why are deep-sea ecosystems particularly vulnerable to human disruption?\n\nA) Because species residing there exhibit exceptionally slow growth and reproductive rates.\nB) Since commercial fishing has already eradicated all major predator species in the deep ocean.\nC) Due to the complete absence of mineral resources on the ocean floor.\nD) Because deep-sea organisms have migrated entirely to shallower coastal waters.\nE) As modern technology prevents scientists from studying deep ocean biodiversity.",
        "options": [
          "Because species residing there exhibit exceptionally slow growth and reproductive rates.",
          "Since commercial fishing has already eradicated all major predator species in the deep ocean.",
          "Due to the complete absence of mineral resources on the ocean floor.",
          "Because deep-sea organisms have migrated entirely to shallower coastal waters.",
          "As modern technology prevents scientists from studying deep ocean biodiversity."
        ],
        "answer": "A",
        "explanation": "Derin deniz canlılarının yavaş büyüme ve üreme hızları onları kırılgan yapar (slow growth and reproductive rates)."
      },
      "ydsExamFormat": "180 dakikalık gerçek sınav salonunda 80 soruyu maksimum net ve sıfır panikle tamamlama sanatıdır."
    }
  ],
  "dialogue": [
    {
      "level": "A1",
      "title": "Diyalog — A1: Temel Tanıma ve Açık İpuçları",
      "meaning": "Diyalog için A1 seviyesinde kilit kural: Temel Tanıma ve Açık İpuçları.",
      "requirements": "Diyalogdaki konuşmacıların rollerini, nezaket düzeyini ve özellikle boşluktan hemen sonraki cevabı çözümleme.",
      "method": "Boşluktan HEMEN SONRAKİ repliğe bak -> O repliğin hangi soruya veya açıklamaya doğal bir karşılık olduğunu bul.",
      "steps": [
        "1. Konuşmacıların kim olduğunu ve konunun ne olduğunu anla.",
        "2. Boşluğun bir önceki repliği ile BİR SONRAKİ repliğini yan yana koy.",
        "3. Boşluktan sonraki kişi 'Haklısın', 'Katılmıyorum' veya bir soruya cevap veriyorsa bunu karşılayan şıkkı seç."
      ],
      "tips": [
        "Diyalog sorularının %90'ı boşluktan bir sonraki cümlenin verdiği tepkiyle çözülür.",
        "Konuşmanın formalite seviyesine (resmî/samimi) uymayan seçenekleri ele."
      ],
      "pitfalls": [
        "Cümlenin tamamını okumadan ilk gördüğü kelimeye kapılmak."
      ],
      "distractorTactic": "Temel gramer uyumuna ve kelime türüne uymayan seçenekleri hemen ele.",
      "memoryCode": "🎵 Diyalog [A1]: Boşluktan SONRAKİ replik, cevabın aynadaki aksidir!",
      "timeManagement": "Soru başı önerilen süre: 30-40 sn.",
      "exampleEn": "A: 'Have you considered renewable energy?' - B: 'Yes, but the installation costs are too high.'",
      "explanationTr": "B'nin 'Yes, but...' cevabı A'nın bir öneri veya alternatif sorusu sorduğunu gösterir.",
      "solvedExample": {
        "question": "[Diyalog - A1] Alex: 'Our department's productivity has dropped noticeably over the last quarter.'\nManager: '-------'\nAlex: 'Actually, it is mainly because the new software keeps crashing during peak hours.'\n\nA) Do you think it is due to a lack of motivation among the staff?\nB) I will immediately order new office furniture for the entire team.\nC) Why haven't you completed the annual budget report yet?\nD) Everyone seems perfectly satisfied with the recent software update.\nE) We should consider hiring ten additional software engineers next week.",
        "options": [
          "Do you think it is due to a lack of motivation among the staff?",
          "I will immediately order new office furniture for the entire team.",
          "Why haven't you completed the annual budget report yet?",
          "Everyone seems perfectly satisfied with the recent software update.",
          "We should consider hiring ten additional software engineers next week."
        ],
        "answer": "A",
        "explanation": "Alex 'Aslında temel sebebi personelin motivasyonsuzluğu değil yazılımın çökmesi' diyerek sebebi düzelttiği için yönetici sebep sormuştur."
      },
      "ydsExamFormat": "Soru kökündeki en temel özne, yüklem ve zaman ipuçlarını ilk bakışta yakalama becerisini oluşturur."
    },
    {
      "level": "A2",
      "title": "Diyalog — A2: Zaman ve Bağlaç İşaretçileri",
      "meaning": "Diyalog için A2 seviyesinde kilit kural: Zaman ve Bağlaç İşaretçileri.",
      "requirements": "Diyalogdaki konuşmacıların rollerini, nezaket düzeyini ve özellikle boşluktan hemen sonraki cevabı çözümleme.",
      "method": "Boşluktan HEMEN SONRAKİ repliğe bak -> O repliğin hangi soruya veya açıklamaya doğal bir karşılık olduğunu bul.",
      "steps": [
        "1. Konuşmacıların kim olduğunu ve konunun ne olduğunu anla.",
        "2. Boşluğun bir önceki repliği ile BİR SONRAKİ repliğini yan yana koy.",
        "3. Boşluktan sonraki kişi 'Haklısın', 'Katılmıyorum' veya bir soruya cevap veriyorsa bunu karşılayan şıkkı seç."
      ],
      "tips": [
        "Diyalog sorularının %90'ı boşluktan bir sonraki cümlenin verdiği tepkiyle çözülür.",
        "Konuşmanın formalite seviyesine (resmî/samimi) uymayan seçenekleri ele."
      ],
      "pitfalls": [
        "Zaman uyumu zıtlığını göz ardı edip cümlenin sadece bir tarafına odaklanmak."
      ],
      "distractorTactic": "Zaman bağlaçlarının gerektirdiği ana cümle zamanı ile çelişen seçenekleri ele.",
      "memoryCode": "🎵 Diyalog [A2]: Boşluktan SONRAKİ replik, cevabın aynadaki aksidir!",
      "timeManagement": "Soru başı önerilen süre: 40-45 sn.",
      "exampleEn": "A: 'Have you considered renewable energy?' - B: 'Yes, but the installation costs are too high.'",
      "explanationTr": "B'nin 'Yes, but...' cevabı A'nın bir öneri veya alternatif sorusu sorduğunu gösterir.",
      "solvedExample": {
        "question": "[Diyalog - A2] Alex: 'Our department's productivity has dropped noticeably over the last quarter.'\nManager: '-------'\nAlex: 'Actually, it is mainly because the new software keeps crashing during peak hours.'\n\nA) Do you think it is due to a lack of motivation among the staff?\nB) I will immediately order new office furniture for the entire team.\nC) Why haven't you completed the annual budget report yet?\nD) Everyone seems perfectly satisfied with the recent software update.\nE) We should consider hiring ten additional software engineers next week.",
        "options": [
          "Do you think it is due to a lack of motivation among the staff?",
          "I will immediately order new office furniture for the entire team.",
          "Why haven't you completed the annual budget report yet?",
          "Everyone seems perfectly satisfied with the recent software update.",
          "We should consider hiring ten additional software engineers next week."
        ],
        "answer": "A",
        "explanation": "Alex 'Aslında temel sebebi personelin motivasyonsuzluğu değil yazılımın çökmesi' diyerek sebebi düzelttiği için yönetici sebep sormuştur."
      },
      "ydsExamFormat": "YDS'de zaman ve temel bağlaç sorularını hatasız çözmenin omurgasını teşkil eder."
    },
    {
      "level": "B1",
      "title": "Diyalog — B1: Cümle İçi Bağlam ve Temel Eleme",
      "meaning": "Diyalog için B1 seviyesinde kilit kural: Cümle İçi Bağlam ve Temel Eleme.",
      "requirements": "Diyalogdaki konuşmacıların rollerini, nezaket düzeyini ve özellikle boşluktan hemen sonraki cevabı çözümleme.",
      "method": "Boşluktan HEMEN SONRAKİ repliğe bak -> O repliğin hangi soruya veya açıklamaya doğal bir karşılık olduğunu bul.",
      "steps": [
        "1. Konuşmacıların kim olduğunu ve konunun ne olduğunu anla.",
        "2. Boşluğun bir önceki repliği ile BİR SONRAKİ repliğini yan yana koy.",
        "3. Boşluktan sonraki kişi 'Haklısın', 'Katılmıyorum' veya bir soruya cevap veriyorsa bunu karşılayan şıkkı seç."
      ],
      "tips": [
        "Diyalog sorularının %90'ı boşluktan bir sonraki cümlenin verdiği tepkiyle çözülür.",
        "Konuşmanın formalite seviyesine (resmî/samimi) uymayan seçenekleri ele."
      ],
      "pitfalls": [
        "Bağlam yönü (+/-) analizi yapmadan benzer anlamlı sözcüklere takılmak."
      ],
      "distractorTactic": "Anlam yönü cümlenin zıt kutbuna düşen veya gereksiz genelleme yapan şıkları ele.",
      "memoryCode": "🎵 Diyalog [B1]: Boşluktan SONRAKİ replik, cevabın aynadaki aksidir!",
      "timeManagement": "Soru başı önerilen süre: 45-50 sn.",
      "exampleEn": "A: 'Have you considered renewable energy?' - B: 'Yes, but the installation costs are too high.'",
      "explanationTr": "B'nin 'Yes, but...' cevabı A'nın bir öneri veya alternatif sorusu sorduğunu gösterir.",
      "solvedExample": {
        "question": "[Diyalog - B1] Alex: 'Our department's productivity has dropped noticeably over the last quarter.'\nManager: '-------'\nAlex: 'Actually, it is mainly because the new software keeps crashing during peak hours.'\n\nA) Do you think it is due to a lack of motivation among the staff?\nB) I will immediately order new office furniture for the entire team.\nC) Why haven't you completed the annual budget report yet?\nD) Everyone seems perfectly satisfied with the recent software update.\nE) We should consider hiring ten additional software engineers next week.",
        "options": [
          "Do you think it is due to a lack of motivation among the staff?",
          "I will immediately order new office furniture for the entire team.",
          "Why haven't you completed the annual budget report yet?",
          "Everyone seems perfectly satisfied with the recent software update.",
          "We should consider hiring ten additional software engineers next week."
        ],
        "answer": "A",
        "explanation": "Alex 'Aslında temel sebebi personelin motivasyonsuzluğu değil yazılımın çökmesi' diyerek sebebi düzelttiği için yönetici sebep sormuştur."
      },
      "ydsExamFormat": "YDS orta düzey çeldiricilerini eleyerek net bandını 60-75 aralığına taşır."
    },
    {
      "level": "B2",
      "title": "Diyalog — B2: Paragraf Bütünlüğü ve Güçlü Çeldiriciler",
      "meaning": "Diyalog için B2 seviyesinde kilit kural: Paragraf Bütünlüğü ve Güçlü Çeldiriciler.",
      "requirements": "Diyalogdaki konuşmacıların rollerini, nezaket düzeyini ve özellikle boşluktan hemen sonraki cevabı çözümleme.",
      "method": "Boşluktan HEMEN SONRAKİ repliğe bak -> O repliğin hangi soruya veya açıklamaya doğal bir karşılık olduğunu bul.",
      "steps": [
        "1. Konuşmacıların kim olduğunu ve konunun ne olduğunu anla.",
        "2. Boşluğun bir önceki repliği ile BİR SONRAKİ repliğini yan yana koy.",
        "3. Boşluktan sonraki kişi 'Haklısın', 'Katılmıyorum' veya bir soruya cevap veriyorsa bunu karşılayan şıkkı seç."
      ],
      "tips": [
        "Diyalog sorularının %90'ı boşluktan bir sonraki cümlenin verdiği tepkiyle çözülür.",
        "Konuşmanın formalite seviyesine (resmî/samimi) uymayan seçenekleri ele."
      ],
      "pitfalls": [
        "Güçlü çeldiricilerdeki sahte referans sözcüklerine veya yarım doğru bilgilere kanmak."
      ],
      "distractorTactic": "Metinde doğrudan geçmeyen, mantıksal sıçrama içeren veya aşırı iddialı şıkları ele.",
      "memoryCode": "🎵 Diyalog [B2]: Boşluktan SONRAKİ replik, cevabın aynadaki aksidir!",
      "timeManagement": "Soru başı önerilen süre: 50-60 sn.",
      "exampleEn": "A: 'Have you considered renewable energy?' - B: 'Yes, but the installation costs are too high.'",
      "explanationTr": "B'nin 'Yes, but...' cevabı A'nın bir öneri veya alternatif sorusu sorduğunu gösterir.",
      "solvedExample": {
        "question": "[Diyalog - B2] Alex: 'Our department's productivity has dropped noticeably over the last quarter.'\nManager: '-------'\nAlex: 'Actually, it is mainly because the new software keeps crashing during peak hours.'\n\nA) Do you think it is due to a lack of motivation among the staff?\nB) I will immediately order new office furniture for the entire team.\nC) Why haven't you completed the annual budget report yet?\nD) Everyone seems perfectly satisfied with the recent software update.\nE) We should consider hiring ten additional software engineers next week.",
        "options": [
          "Do you think it is due to a lack of motivation among the staff?",
          "I will immediately order new office furniture for the entire team.",
          "Why haven't you completed the annual budget report yet?",
          "Everyone seems perfectly satisfied with the recent software update.",
          "We should consider hiring ten additional software engineers next week."
        ],
        "answer": "A",
        "explanation": "Alex 'Aslında temel sebebi personelin motivasyonsuzluğu değil yazılımın çökmesi' diyerek sebebi düzelttiği için yönetici sebep sormuştur."
      },
      "ydsExamFormat": "YDS 75-85 puan hedefleyen adayların tuzak şıklara düşmesini engelleyen kritik eşiktir."
    },
    {
      "level": "C1",
      "title": "Diyalog — C1: Akademik Dil, Nüans ve Örtük Çıkarım",
      "meaning": "Diyalog için C1 seviyesinde kilit kural: Akademik Dil, Nüans ve Örtük Çıkarım.",
      "requirements": "Diyalogdaki konuşmacıların rollerini, nezaket düzeyini ve özellikle boşluktan hemen sonraki cevabı çözümleme.",
      "method": "Boşluktan HEMEN SONRAKİ repliğe bak -> O repliğin hangi soruya veya açıklamaya doğal bir karşılık olduğunu bul.",
      "steps": [
        "1. Konuşmacıların kim olduğunu ve konunun ne olduğunu anla.",
        "2. Boşluğun bir önceki repliği ile BİR SONRAKİ repliğini yan yana koy.",
        "3. Boşluktan sonraki kişi 'Haklısın', 'Katılmıyorum' veya bir soruya cevap veriyorsa bunu karşılayan şıkkı seç."
      ],
      "tips": [
        "Diyalog sorularının %90'ı boşluktan bir sonraki cümlenin verdiği tepkiyle çözülür.",
        "Konuşmanın formalite seviyesine (resmî/samimi) uymayan seçenekleri ele."
      ],
      "pitfalls": [
        "Yazarın örtük amacını kaçırıp sadece yüzeydeki kelimelerin eşanlamlılarına yönelmek."
      ],
      "distractorTactic": "Akademik resmiyet tonunu bozan veya metindeki nüansı saptıran şıkları ele.",
      "memoryCode": "🎵 Diyalog [C1]: Boşluktan SONRAKİ replik, cevabın aynadaki aksidir!",
      "timeManagement": "Soru başı önerilen süre: 60-70 sn.",
      "exampleEn": "A: 'Have you considered renewable energy?' - B: 'Yes, but the installation costs are too high.'",
      "explanationTr": "B'nin 'Yes, but...' cevabı A'nın bir öneri veya alternatif sorusu sorduğunu gösterir.",
      "solvedExample": {
        "question": "[Diyalog - C1] Alex: 'Our department's productivity has dropped noticeably over the last quarter.'\nManager: '-------'\nAlex: 'Actually, it is mainly because the new software keeps crashing during peak hours.'\n\nA) Do you think it is due to a lack of motivation among the staff?\nB) I will immediately order new office furniture for the entire team.\nC) Why haven't you completed the annual budget report yet?\nD) Everyone seems perfectly satisfied with the recent software update.\nE) We should consider hiring ten additional software engineers next week.",
        "options": [
          "Do you think it is due to a lack of motivation among the staff?",
          "I will immediately order new office furniture for the entire team.",
          "Why haven't you completed the annual budget report yet?",
          "Everyone seems perfectly satisfied with the recent software update.",
          "We should consider hiring ten additional software engineers next week."
        ],
        "answer": "A",
        "explanation": "Alex 'Aslında temel sebebi personelin motivasyonsuzluğu değil yazılımın çökmesi' diyerek sebebi düzelttiği için yönetici sebep sormuştur."
      },
      "ydsExamFormat": "YDS 85-90+ bareminde tam net getiren derin analiz seviyesidir."
    },
    {
      "level": "C2",
      "title": "Diyalog — C2: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar",
      "meaning": "Diyalog için C2 seviyesinde kilit kural: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar.",
      "requirements": "Diyalogdaki konuşmacıların rollerini, nezaket düzeyini ve özellikle boşluktan hemen sonraki cevabı çözümleme.",
      "method": "Boşluktan HEMEN SONRAKİ repliğe bak -> O repliğin hangi soruya veya açıklamaya doğal bir karşılık olduğunu bul.",
      "steps": [
        "1. Konuşmacıların kim olduğunu ve konunun ne olduğunu anla.",
        "2. Boşluğun bir önceki repliği ile BİR SONRAKİ repliğini yan yana koy.",
        "3. Boşluktan sonraki kişi 'Haklısın', 'Katılmıyorum' veya bir soruya cevap veriyorsa bunu karşılayan şıkkı seç."
      ],
      "tips": [
        "Diyalog sorularının %90'ı boşluktan bir sonraki cümlenin verdiği tepkiyle çözülür.",
        "Konuşmanın formalite seviyesine (resmî/samimi) uymayan seçenekleri ele."
      ],
      "pitfalls": [
        "İki son derece yakın akademik seçenek arasındaki ton veya kapsam farkını görememek."
      ],
      "distractorTactic": "Bağlamın retorik amacına uymayan ve yazarın tarafsızlık/eleştiri tonunu aşan seçenekleri ele.",
      "memoryCode": "🎵 Diyalog [C2]: Boşluktan SONRAKİ replik, cevabın aynadaki aksidir!",
      "timeManagement": "Soru başı önerilen süre: 70-80 sn.",
      "exampleEn": "A: 'Have you considered renewable energy?' - B: 'Yes, but the installation costs are too high.'",
      "explanationTr": "B'nin 'Yes, but...' cevabı A'nın bir öneri veya alternatif sorusu sorduğunu gösterir.",
      "solvedExample": {
        "question": "[Diyalog - C2] Alex: 'Our department's productivity has dropped noticeably over the last quarter.'\nManager: '-------'\nAlex: 'Actually, it is mainly because the new software keeps crashing during peak hours.'\n\nA) Do you think it is due to a lack of motivation among the staff?\nB) I will immediately order new office furniture for the entire team.\nC) Why haven't you completed the annual budget report yet?\nD) Everyone seems perfectly satisfied with the recent software update.\nE) We should consider hiring ten additional software engineers next week.",
        "options": [
          "Do you think it is due to a lack of motivation among the staff?",
          "I will immediately order new office furniture for the entire team.",
          "Why haven't you completed the annual budget report yet?",
          "Everyone seems perfectly satisfied with the recent software update.",
          "We should consider hiring ten additional software engineers next week."
        ],
        "answer": "A",
        "explanation": "Alex 'Aslında temel sebebi personelin motivasyonsuzluğu değil yazılımın çökmesi' diyerek sebebi düzelttiği için yönetici sebep sormuştur."
      },
      "ydsExamFormat": "YDS 95-100 tam puan düzeyindeki seçici soruların kilit çözüm metodolojisidir."
    },
    {
      "level": "YDS",
      "title": "Diyalog — YDS: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama",
      "meaning": "Diyalog için YDS seviyesinde kilit kural: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama.",
      "requirements": "Diyalogdaki konuşmacıların rollerini, nezaket düzeyini ve özellikle boşluktan hemen sonraki cevabı çözümleme.",
      "method": "Boşluktan HEMEN SONRAKİ repliğe bak -> O repliğin hangi soruya veya açıklamaya doğal bir karşılık olduğunu bul.",
      "steps": [
        "1. Konuşmacıların kim olduğunu ve konunun ne olduğunu anla.",
        "2. Boşluğun bir önceki repliği ile BİR SONRAKİ repliğini yan yana koy.",
        "3. Boşluktan sonraki kişi 'Haklısın', 'Katılmıyorum' veya bir soruya cevap veriyorsa bunu karşılayan şıkkı seç."
      ],
      "tips": [
        "Diyalog sorularının %90'ı boşluktan bir sonraki cümlenin verdiği tepkiyle çözülür.",
        "Konuşmanın formalite seviyesine (resmî/samimi) uymayan seçenekleri ele."
      ],
      "pitfalls": [
        "Tek bir soruya 2 dakikadan fazla takılıp diğer soru tiplerinin süresinden çalmak."
      ],
      "distractorTactic": "ÖSYM'nin en sevdiği tuzak kalıpları (aşırı genelleme, ters neden-sonuç, sahte bağlaç) şablonla ele.",
      "memoryCode": "🎵 Diyalog [YDS]: Boşluktan SONRAKİ replik, cevabın aynadaki aksidir!",
      "timeManagement": "Soru başı önerilen süre: Hızlı tempo (45-55 sn ortalama).",
      "exampleEn": "A: 'Have you considered renewable energy?' - B: 'Yes, but the installation costs are too high.'",
      "explanationTr": "B'nin 'Yes, but...' cevabı A'nın bir öneri veya alternatif sorusu sorduğunu gösterir.",
      "solvedExample": {
        "question": "[Diyalog - YDS] Alex: 'Our department's productivity has dropped noticeably over the last quarter.'\nManager: '-------'\nAlex: 'Actually, it is mainly because the new software keeps crashing during peak hours.'\n\nA) Do you think it is due to a lack of motivation among the staff?\nB) I will immediately order new office furniture for the entire team.\nC) Why haven't you completed the annual budget report yet?\nD) Everyone seems perfectly satisfied with the recent software update.\nE) We should consider hiring ten additional software engineers next week.",
        "options": [
          "Do you think it is due to a lack of motivation among the staff?",
          "I will immediately order new office furniture for the entire team.",
          "Why haven't you completed the annual budget report yet?",
          "Everyone seems perfectly satisfied with the recent software update.",
          "We should consider hiring ten additional software engineers next week."
        ],
        "answer": "A",
        "explanation": "Alex 'Aslında temel sebebi personelin motivasyonsuzluğu değil yazılımın çökmesi' diyerek sebebi düzelttiği için yönetici sebep sormuştur."
      },
      "ydsExamFormat": "180 dakikalık gerçek sınav salonunda 80 soruyu maksimum net ve sıfır panikle tamamlama sanatıdır."
    }
  ],
  "paragraph-completion": [
    {
      "level": "A1",
      "title": "Paragraf Tamamlama — A1: Temel Tanıma ve Açık İpuçları",
      "meaning": "Paragraf Tamamlama için A1 seviyesinde kilit kural: Temel Tanıma ve Açık İpuçları.",
      "requirements": "Boşluğun önündeki ve arkasındaki referans sözcükleri (this, such, these, they) ve geçiş bağlaçlarını eşleştirme.",
      "method": "Boşluktan önceki cümlenin sonunu ve sonraki cümlenin başını oku -> Mantıksal köprü kur -> Şıktaki referans zamiri kontrol et.",
      "steps": [
        "1. Boşluktan hemen önceki cümlenin neyle bittiğini tespit et.",
        "2. Boşluktan hemen sonraki cümlenin nasıl başladığına (bağlaç, zamir) bak.",
        "3. Araya giren cümlenin her iki yakayı birbirine pürüzsüz bağladığından emin ol."
      ],
      "tips": [
        "Boşluktan sonra 'These findings' diyorsa aradığın cümlede 'bulgular/veriler' geçmelidir.",
        "Boşluktan sonra 'However' varsa aradığın cümle sonraki zıtlığa zemin hazırlamalıdır."
      ],
      "pitfalls": [
        "Cümlenin tamamını okumadan ilk gördüğü kelimeye kapılmak."
      ],
      "distractorTactic": "Temel gramer uyumuna ve kelime türüne uymayan seçenekleri hemen ele.",
      "memoryCode": "🎵 Paragraf Tamamlama [A1]: Öncesine bak, sonrasına bak; iki yakanın harcını doğru şıkla kar!",
      "timeManagement": "Soru başı önerilen süre: 30-40 sn.",
      "exampleEn": "Astronomers detected an anomalous signal. Further analysis revealed it originated from a distant pulsar.",
      "explanationTr": "İlk cümlenin 'anomalous signal' nesnesi, ikinci cümlenin 'it' zamiriyle karşılanmıştır.",
      "solvedExample": {
        "question": "[Paragraf Tamamlama - A1] For centuries, honey has been utilized not only as a natural sweetener but also as a medicinal agent. Ancient civilizations applied it topically to heal wounds and prevent bacterial infections. -------. Today, modern laboratory research confirms that honey contains hydrogen peroxide and potent antioxidants that inhibit microbial growth.\n\nA) Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.\nB) This empirical knowledge was passed down through generations long before the biological mechanisms were understood.\nC) Honey production requires thousands of worker bees pollinating diverse flowering plants.\nD) Many artificial preservatives have proven far more effective than organic substances.\nE) Synthetic antibiotics have completely replaced natural remedies in clinical settings.",
        "options": [
          "Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.",
          "This empirical knowledge was passed down through generations long before the biological mechanisms were understood.",
          "Honey production requires thousands of worker bees pollinating diverse flowering plants.",
          "Many artificial preservatives have proven far more effective than organic substances.",
          "Synthetic antibiotics have completely replaced natural remedies in clinical settings."
        ],
        "answer": "B",
        "explanation": "Eski uygarlıkların balı yaralara sürmesi 'This empirical knowledge' (Bu ampirik bilgi) ile karşılanır ve 'Today modern research confirms' cümlesine mükemmel köprü kurar."
      },
      "ydsExamFormat": "Soru kökündeki en temel özne, yüklem ve zaman ipuçlarını ilk bakışta yakalama becerisini oluşturur."
    },
    {
      "level": "A2",
      "title": "Paragraf Tamamlama — A2: Zaman ve Bağlaç İşaretçileri",
      "meaning": "Paragraf Tamamlama için A2 seviyesinde kilit kural: Zaman ve Bağlaç İşaretçileri.",
      "requirements": "Boşluğun önündeki ve arkasındaki referans sözcükleri (this, such, these, they) ve geçiş bağlaçlarını eşleştirme.",
      "method": "Boşluktan önceki cümlenin sonunu ve sonraki cümlenin başını oku -> Mantıksal köprü kur -> Şıktaki referans zamiri kontrol et.",
      "steps": [
        "1. Boşluktan hemen önceki cümlenin neyle bittiğini tespit et.",
        "2. Boşluktan hemen sonraki cümlenin nasıl başladığına (bağlaç, zamir) bak.",
        "3. Araya giren cümlenin her iki yakayı birbirine pürüzsüz bağladığından emin ol."
      ],
      "tips": [
        "Boşluktan sonra 'These findings' diyorsa aradığın cümlede 'bulgular/veriler' geçmelidir.",
        "Boşluktan sonra 'However' varsa aradığın cümle sonraki zıtlığa zemin hazırlamalıdır."
      ],
      "pitfalls": [
        "Zaman uyumu zıtlığını göz ardı edip cümlenin sadece bir tarafına odaklanmak."
      ],
      "distractorTactic": "Zaman bağlaçlarının gerektirdiği ana cümle zamanı ile çelişen seçenekleri ele.",
      "memoryCode": "🎵 Paragraf Tamamlama [A2]: Öncesine bak, sonrasına bak; iki yakanın harcını doğru şıkla kar!",
      "timeManagement": "Soru başı önerilen süre: 40-45 sn.",
      "exampleEn": "Astronomers detected an anomalous signal. Further analysis revealed it originated from a distant pulsar.",
      "explanationTr": "İlk cümlenin 'anomalous signal' nesnesi, ikinci cümlenin 'it' zamiriyle karşılanmıştır.",
      "solvedExample": {
        "question": "[Paragraf Tamamlama - A2] For centuries, honey has been utilized not only as a natural sweetener but also as a medicinal agent. Ancient civilizations applied it topically to heal wounds and prevent bacterial infections. -------. Today, modern laboratory research confirms that honey contains hydrogen peroxide and potent antioxidants that inhibit microbial growth.\n\nA) Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.\nB) This empirical knowledge was passed down through generations long before the biological mechanisms were understood.\nC) Honey production requires thousands of worker bees pollinating diverse flowering plants.\nD) Many artificial preservatives have proven far more effective than organic substances.\nE) Synthetic antibiotics have completely replaced natural remedies in clinical settings.",
        "options": [
          "Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.",
          "This empirical knowledge was passed down through generations long before the biological mechanisms were understood.",
          "Honey production requires thousands of worker bees pollinating diverse flowering plants.",
          "Many artificial preservatives have proven far more effective than organic substances.",
          "Synthetic antibiotics have completely replaced natural remedies in clinical settings."
        ],
        "answer": "B",
        "explanation": "Eski uygarlıkların balı yaralara sürmesi 'This empirical knowledge' (Bu ampirik bilgi) ile karşılanır ve 'Today modern research confirms' cümlesine mükemmel köprü kurar."
      },
      "ydsExamFormat": "YDS'de zaman ve temel bağlaç sorularını hatasız çözmenin omurgasını teşkil eder."
    },
    {
      "level": "B1",
      "title": "Paragraf Tamamlama — B1: Cümle İçi Bağlam ve Temel Eleme",
      "meaning": "Paragraf Tamamlama için B1 seviyesinde kilit kural: Cümle İçi Bağlam ve Temel Eleme.",
      "requirements": "Boşluğun önündeki ve arkasındaki referans sözcükleri (this, such, these, they) ve geçiş bağlaçlarını eşleştirme.",
      "method": "Boşluktan önceki cümlenin sonunu ve sonraki cümlenin başını oku -> Mantıksal köprü kur -> Şıktaki referans zamiri kontrol et.",
      "steps": [
        "1. Boşluktan hemen önceki cümlenin neyle bittiğini tespit et.",
        "2. Boşluktan hemen sonraki cümlenin nasıl başladığına (bağlaç, zamir) bak.",
        "3. Araya giren cümlenin her iki yakayı birbirine pürüzsüz bağladığından emin ol."
      ],
      "tips": [
        "Boşluktan sonra 'These findings' diyorsa aradığın cümlede 'bulgular/veriler' geçmelidir.",
        "Boşluktan sonra 'However' varsa aradığın cümle sonraki zıtlığa zemin hazırlamalıdır."
      ],
      "pitfalls": [
        "Bağlam yönü (+/-) analizi yapmadan benzer anlamlı sözcüklere takılmak."
      ],
      "distractorTactic": "Anlam yönü cümlenin zıt kutbuna düşen veya gereksiz genelleme yapan şıkları ele.",
      "memoryCode": "🎵 Paragraf Tamamlama [B1]: Öncesine bak, sonrasına bak; iki yakanın harcını doğru şıkla kar!",
      "timeManagement": "Soru başı önerilen süre: 45-50 sn.",
      "exampleEn": "Astronomers detected an anomalous signal. Further analysis revealed it originated from a distant pulsar.",
      "explanationTr": "İlk cümlenin 'anomalous signal' nesnesi, ikinci cümlenin 'it' zamiriyle karşılanmıştır.",
      "solvedExample": {
        "question": "[Paragraf Tamamlama - B1] For centuries, honey has been utilized not only as a natural sweetener but also as a medicinal agent. Ancient civilizations applied it topically to heal wounds and prevent bacterial infections. -------. Today, modern laboratory research confirms that honey contains hydrogen peroxide and potent antioxidants that inhibit microbial growth.\n\nA) Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.\nB) This empirical knowledge was passed down through generations long before the biological mechanisms were understood.\nC) Honey production requires thousands of worker bees pollinating diverse flowering plants.\nD) Many artificial preservatives have proven far more effective than organic substances.\nE) Synthetic antibiotics have completely replaced natural remedies in clinical settings.",
        "options": [
          "Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.",
          "This empirical knowledge was passed down through generations long before the biological mechanisms were understood.",
          "Honey production requires thousands of worker bees pollinating diverse flowering plants.",
          "Many artificial preservatives have proven far more effective than organic substances.",
          "Synthetic antibiotics have completely replaced natural remedies in clinical settings."
        ],
        "answer": "B",
        "explanation": "Eski uygarlıkların balı yaralara sürmesi 'This empirical knowledge' (Bu ampirik bilgi) ile karşılanır ve 'Today modern research confirms' cümlesine mükemmel köprü kurar."
      },
      "ydsExamFormat": "YDS orta düzey çeldiricilerini eleyerek net bandını 60-75 aralığına taşır."
    },
    {
      "level": "B2",
      "title": "Paragraf Tamamlama — B2: Paragraf Bütünlüğü ve Güçlü Çeldiriciler",
      "meaning": "Paragraf Tamamlama için B2 seviyesinde kilit kural: Paragraf Bütünlüğü ve Güçlü Çeldiriciler.",
      "requirements": "Boşluğun önündeki ve arkasındaki referans sözcükleri (this, such, these, they) ve geçiş bağlaçlarını eşleştirme.",
      "method": "Boşluktan önceki cümlenin sonunu ve sonraki cümlenin başını oku -> Mantıksal köprü kur -> Şıktaki referans zamiri kontrol et.",
      "steps": [
        "1. Boşluktan hemen önceki cümlenin neyle bittiğini tespit et.",
        "2. Boşluktan hemen sonraki cümlenin nasıl başladığına (bağlaç, zamir) bak.",
        "3. Araya giren cümlenin her iki yakayı birbirine pürüzsüz bağladığından emin ol."
      ],
      "tips": [
        "Boşluktan sonra 'These findings' diyorsa aradığın cümlede 'bulgular/veriler' geçmelidir.",
        "Boşluktan sonra 'However' varsa aradığın cümle sonraki zıtlığa zemin hazırlamalıdır."
      ],
      "pitfalls": [
        "Güçlü çeldiricilerdeki sahte referans sözcüklerine veya yarım doğru bilgilere kanmak."
      ],
      "distractorTactic": "Metinde doğrudan geçmeyen, mantıksal sıçrama içeren veya aşırı iddialı şıkları ele.",
      "memoryCode": "🎵 Paragraf Tamamlama [B2]: Öncesine bak, sonrasına bak; iki yakanın harcını doğru şıkla kar!",
      "timeManagement": "Soru başı önerilen süre: 50-60 sn.",
      "exampleEn": "Astronomers detected an anomalous signal. Further analysis revealed it originated from a distant pulsar.",
      "explanationTr": "İlk cümlenin 'anomalous signal' nesnesi, ikinci cümlenin 'it' zamiriyle karşılanmıştır.",
      "solvedExample": {
        "question": "[Paragraf Tamamlama - B2] For centuries, honey has been utilized not only as a natural sweetener but also as a medicinal agent. Ancient civilizations applied it topically to heal wounds and prevent bacterial infections. -------. Today, modern laboratory research confirms that honey contains hydrogen peroxide and potent antioxidants that inhibit microbial growth.\n\nA) Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.\nB) This empirical knowledge was passed down through generations long before the biological mechanisms were understood.\nC) Honey production requires thousands of worker bees pollinating diverse flowering plants.\nD) Many artificial preservatives have proven far more effective than organic substances.\nE) Synthetic antibiotics have completely replaced natural remedies in clinical settings.",
        "options": [
          "Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.",
          "This empirical knowledge was passed down through generations long before the biological mechanisms were understood.",
          "Honey production requires thousands of worker bees pollinating diverse flowering plants.",
          "Many artificial preservatives have proven far more effective than organic substances.",
          "Synthetic antibiotics have completely replaced natural remedies in clinical settings."
        ],
        "answer": "B",
        "explanation": "Eski uygarlıkların balı yaralara sürmesi 'This empirical knowledge' (Bu ampirik bilgi) ile karşılanır ve 'Today modern research confirms' cümlesine mükemmel köprü kurar."
      },
      "ydsExamFormat": "YDS 75-85 puan hedefleyen adayların tuzak şıklara düşmesini engelleyen kritik eşiktir."
    },
    {
      "level": "C1",
      "title": "Paragraf Tamamlama — C1: Akademik Dil, Nüans ve Örtük Çıkarım",
      "meaning": "Paragraf Tamamlama için C1 seviyesinde kilit kural: Akademik Dil, Nüans ve Örtük Çıkarım.",
      "requirements": "Boşluğun önündeki ve arkasındaki referans sözcükleri (this, such, these, they) ve geçiş bağlaçlarını eşleştirme.",
      "method": "Boşluktan önceki cümlenin sonunu ve sonraki cümlenin başını oku -> Mantıksal köprü kur -> Şıktaki referans zamiri kontrol et.",
      "steps": [
        "1. Boşluktan hemen önceki cümlenin neyle bittiğini tespit et.",
        "2. Boşluktan hemen sonraki cümlenin nasıl başladığına (bağlaç, zamir) bak.",
        "3. Araya giren cümlenin her iki yakayı birbirine pürüzsüz bağladığından emin ol."
      ],
      "tips": [
        "Boşluktan sonra 'These findings' diyorsa aradığın cümlede 'bulgular/veriler' geçmelidir.",
        "Boşluktan sonra 'However' varsa aradığın cümle sonraki zıtlığa zemin hazırlamalıdır."
      ],
      "pitfalls": [
        "Yazarın örtük amacını kaçırıp sadece yüzeydeki kelimelerin eşanlamlılarına yönelmek."
      ],
      "distractorTactic": "Akademik resmiyet tonunu bozan veya metindeki nüansı saptıran şıkları ele.",
      "memoryCode": "🎵 Paragraf Tamamlama [C1]: Öncesine bak, sonrasına bak; iki yakanın harcını doğru şıkla kar!",
      "timeManagement": "Soru başı önerilen süre: 60-70 sn.",
      "exampleEn": "Astronomers detected an anomalous signal. Further analysis revealed it originated from a distant pulsar.",
      "explanationTr": "İlk cümlenin 'anomalous signal' nesnesi, ikinci cümlenin 'it' zamiriyle karşılanmıştır.",
      "solvedExample": {
        "question": "[Paragraf Tamamlama - C1] For centuries, honey has been utilized not only as a natural sweetener but also as a medicinal agent. Ancient civilizations applied it topically to heal wounds and prevent bacterial infections. -------. Today, modern laboratory research confirms that honey contains hydrogen peroxide and potent antioxidants that inhibit microbial growth.\n\nA) Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.\nB) This empirical knowledge was passed down through generations long before the biological mechanisms were understood.\nC) Honey production requires thousands of worker bees pollinating diverse flowering plants.\nD) Many artificial preservatives have proven far more effective than organic substances.\nE) Synthetic antibiotics have completely replaced natural remedies in clinical settings.",
        "options": [
          "Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.",
          "This empirical knowledge was passed down through generations long before the biological mechanisms were understood.",
          "Honey production requires thousands of worker bees pollinating diverse flowering plants.",
          "Many artificial preservatives have proven far more effective than organic substances.",
          "Synthetic antibiotics have completely replaced natural remedies in clinical settings."
        ],
        "answer": "B",
        "explanation": "Eski uygarlıkların balı yaralara sürmesi 'This empirical knowledge' (Bu ampirik bilgi) ile karşılanır ve 'Today modern research confirms' cümlesine mükemmel köprü kurar."
      },
      "ydsExamFormat": "YDS 85-90+ bareminde tam net getiren derin analiz seviyesidir."
    },
    {
      "level": "C2",
      "title": "Paragraf Tamamlama — C2: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar",
      "meaning": "Paragraf Tamamlama için C2 seviyesinde kilit kural: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar.",
      "requirements": "Boşluğun önündeki ve arkasındaki referans sözcükleri (this, such, these, they) ve geçiş bağlaçlarını eşleştirme.",
      "method": "Boşluktan önceki cümlenin sonunu ve sonraki cümlenin başını oku -> Mantıksal köprü kur -> Şıktaki referans zamiri kontrol et.",
      "steps": [
        "1. Boşluktan hemen önceki cümlenin neyle bittiğini tespit et.",
        "2. Boşluktan hemen sonraki cümlenin nasıl başladığına (bağlaç, zamir) bak.",
        "3. Araya giren cümlenin her iki yakayı birbirine pürüzsüz bağladığından emin ol."
      ],
      "tips": [
        "Boşluktan sonra 'These findings' diyorsa aradığın cümlede 'bulgular/veriler' geçmelidir.",
        "Boşluktan sonra 'However' varsa aradığın cümle sonraki zıtlığa zemin hazırlamalıdır."
      ],
      "pitfalls": [
        "İki son derece yakın akademik seçenek arasındaki ton veya kapsam farkını görememek."
      ],
      "distractorTactic": "Bağlamın retorik amacına uymayan ve yazarın tarafsızlık/eleştiri tonunu aşan seçenekleri ele.",
      "memoryCode": "🎵 Paragraf Tamamlama [C2]: Öncesine bak, sonrasına bak; iki yakanın harcını doğru şıkla kar!",
      "timeManagement": "Soru başı önerilen süre: 70-80 sn.",
      "exampleEn": "Astronomers detected an anomalous signal. Further analysis revealed it originated from a distant pulsar.",
      "explanationTr": "İlk cümlenin 'anomalous signal' nesnesi, ikinci cümlenin 'it' zamiriyle karşılanmıştır.",
      "solvedExample": {
        "question": "[Paragraf Tamamlama - C2] For centuries, honey has been utilized not only as a natural sweetener but also as a medicinal agent. Ancient civilizations applied it topically to heal wounds and prevent bacterial infections. -------. Today, modern laboratory research confirms that honey contains hydrogen peroxide and potent antioxidants that inhibit microbial growth.\n\nA) Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.\nB) This empirical knowledge was passed down through generations long before the biological mechanisms were understood.\nC) Honey production requires thousands of worker bees pollinating diverse flowering plants.\nD) Many artificial preservatives have proven far more effective than organic substances.\nE) Synthetic antibiotics have completely replaced natural remedies in clinical settings.",
        "options": [
          "Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.",
          "This empirical knowledge was passed down through generations long before the biological mechanisms were understood.",
          "Honey production requires thousands of worker bees pollinating diverse flowering plants.",
          "Many artificial preservatives have proven far more effective than organic substances.",
          "Synthetic antibiotics have completely replaced natural remedies in clinical settings."
        ],
        "answer": "B",
        "explanation": "Eski uygarlıkların balı yaralara sürmesi 'This empirical knowledge' (Bu ampirik bilgi) ile karşılanır ve 'Today modern research confirms' cümlesine mükemmel köprü kurar."
      },
      "ydsExamFormat": "YDS 95-100 tam puan düzeyindeki seçici soruların kilit çözüm metodolojisidir."
    },
    {
      "level": "YDS",
      "title": "Paragraf Tamamlama — YDS: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama",
      "meaning": "Paragraf Tamamlama için YDS seviyesinde kilit kural: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama.",
      "requirements": "Boşluğun önündeki ve arkasındaki referans sözcükleri (this, such, these, they) ve geçiş bağlaçlarını eşleştirme.",
      "method": "Boşluktan önceki cümlenin sonunu ve sonraki cümlenin başını oku -> Mantıksal köprü kur -> Şıktaki referans zamiri kontrol et.",
      "steps": [
        "1. Boşluktan hemen önceki cümlenin neyle bittiğini tespit et.",
        "2. Boşluktan hemen sonraki cümlenin nasıl başladığına (bağlaç, zamir) bak.",
        "3. Araya giren cümlenin her iki yakayı birbirine pürüzsüz bağladığından emin ol."
      ],
      "tips": [
        "Boşluktan sonra 'These findings' diyorsa aradığın cümlede 'bulgular/veriler' geçmelidir.",
        "Boşluktan sonra 'However' varsa aradığın cümle sonraki zıtlığa zemin hazırlamalıdır."
      ],
      "pitfalls": [
        "Tek bir soruya 2 dakikadan fazla takılıp diğer soru tiplerinin süresinden çalmak."
      ],
      "distractorTactic": "ÖSYM'nin en sevdiği tuzak kalıpları (aşırı genelleme, ters neden-sonuç, sahte bağlaç) şablonla ele.",
      "memoryCode": "🎵 Paragraf Tamamlama [YDS]: Öncesine bak, sonrasına bak; iki yakanın harcını doğru şıkla kar!",
      "timeManagement": "Soru başı önerilen süre: Hızlı tempo (45-55 sn ortalama).",
      "exampleEn": "Astronomers detected an anomalous signal. Further analysis revealed it originated from a distant pulsar.",
      "explanationTr": "İlk cümlenin 'anomalous signal' nesnesi, ikinci cümlenin 'it' zamiriyle karşılanmıştır.",
      "solvedExample": {
        "question": "[Paragraf Tamamlama - YDS] For centuries, honey has been utilized not only as a natural sweetener but also as a medicinal agent. Ancient civilizations applied it topically to heal wounds and prevent bacterial infections. -------. Today, modern laboratory research confirms that honey contains hydrogen peroxide and potent antioxidants that inhibit microbial growth.\n\nA) Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.\nB) This empirical knowledge was passed down through generations long before the biological mechanisms were understood.\nC) Honey production requires thousands of worker bees pollinating diverse flowering plants.\nD) Many artificial preservatives have proven far more effective than organic substances.\nE) Synthetic antibiotics have completely replaced natural remedies in clinical settings.",
        "options": [
          "Consequently, ancient societies completely abandoned agriculture in favor of beekeeping.",
          "This empirical knowledge was passed down through generations long before the biological mechanisms were understood.",
          "Honey production requires thousands of worker bees pollinating diverse flowering plants.",
          "Many artificial preservatives have proven far more effective than organic substances.",
          "Synthetic antibiotics have completely replaced natural remedies in clinical settings."
        ],
        "answer": "B",
        "explanation": "Eski uygarlıkların balı yaralara sürmesi 'This empirical knowledge' (Bu ampirik bilgi) ile karşılanır ve 'Today modern research confirms' cümlesine mükemmel köprü kurar."
      },
      "ydsExamFormat": "180 dakikalık gerçek sınav salonunda 80 soruyu maksimum net ve sıfır panikle tamamlama sanatıdır."
    }
  ],
  "irrelevant-sentence": [
    {
      "level": "A1",
      "title": "Akışı Bozan Cümle — A1: Temel Tanıma ve Açık İpuçları",
      "meaning": "Akışı Bozan Cümle için A1 seviyesinde kilit kural: Temel Tanıma ve Açık İpuçları.",
      "requirements": "Paragrafın ana konusunu ve bakış açısını belirleyip konunun dışına çıkan veya tonu bozan cümleyi eleme.",
      "method": "Paragrafın ortak öznesini ve zamanını bul -> Cümleler arası 'referans zincirini' takip et -> Zinciri kıran cümleyi işaretle.",
      "steps": [
        "1. Cümle 1 ve 2'yi okuyup paragrafın tam konusunu (Örn: 'X bitkisinin tıbbi yararları') netleştir.",
        "2. Her cümlenin bu konunun hangi açısına odaklandığını kontrol et.",
        "3. Konu aynı kalsa bile bakış açısını (Örn: 'X bitkisinin ekonomisi') değiştiren cümleyi yakala."
      ],
      "tips": [
        "Cümlede aynı kelimelerin geçmesi o cümlenin akışa uygun olduğu anlamına gelmez; bakış açısına bak.",
        "Bozan cümleyi çıkardığında önceki cümle ile sonraki cümlenin birbirine kusursuz bağlandığını test et."
      ],
      "pitfalls": [
        "Cümlenin tamamını okumadan ilk gördüğü kelimeye kapılmak."
      ],
      "distractorTactic": "Temel gramer uyumuna ve kelime türüne uymayan seçenekleri hemen ele.",
      "memoryCode": "🎵 Akışı Bozan Cümle [A1]: Konu aynı olabilir ama BAKIŞ AÇISI farklıysa o cümle yabancıdır!",
      "timeManagement": "Soru başı önerilen süre: 30-40 sn.",
      "exampleEn": "I) Coral reefs host vast marine biodiversity. II) They protect coastlines from storm damage. III) Deep sea trenches contain extreme hydrothermal vents. IV) Furthermore, reefs support global fisheries.",
      "explanationTr": "III numaralı cümle derin deniz çukurlarından bahsederek mercan resifleri zincirini kırmaktadır.",
      "solvedExample": {
        "question": "[Akışı Bozan Cümle - A1] (I) The migration of monarch butterflies across North America is one of nature's most extraordinary spectacles. (II) Every autumn, millions of monarchs travel up to 3,000 miles to reach their overwintering sites in central Mexico. (III) During this arduous journey, they rely on prevailing air currents to conserve vital metabolic energy. (IV) Mexico possesses a rich variety of indigenous flora that attracts international eco-tourists every year. (V) Upon arrival, dense clusters of butterflies blanket the oyamel fir forests to protect themselves from freezing temperatures.\n\nA) I   B) II   C) III   D) IV   E) V",
        "options": [
          "I",
          "II",
          "III",
          "IV",
          "V"
        ],
        "answer": "D",
        "explanation": "Metin baştan sona kelebeklerin göç yolculuğunu anlatır; IV numaralı cümle Meksika'nın turistik bitki örtüsünden bahsederek akışı bozar."
      },
      "ydsExamFormat": "Soru kökündeki en temel özne, yüklem ve zaman ipuçlarını ilk bakışta yakalama becerisini oluşturur."
    },
    {
      "level": "A2",
      "title": "Akışı Bozan Cümle — A2: Zaman ve Bağlaç İşaretçileri",
      "meaning": "Akışı Bozan Cümle için A2 seviyesinde kilit kural: Zaman ve Bağlaç İşaretçileri.",
      "requirements": "Paragrafın ana konusunu ve bakış açısını belirleyip konunun dışına çıkan veya tonu bozan cümleyi eleme.",
      "method": "Paragrafın ortak öznesini ve zamanını bul -> Cümleler arası 'referans zincirini' takip et -> Zinciri kıran cümleyi işaretle.",
      "steps": [
        "1. Cümle 1 ve 2'yi okuyup paragrafın tam konusunu (Örn: 'X bitkisinin tıbbi yararları') netleştir.",
        "2. Her cümlenin bu konunun hangi açısına odaklandığını kontrol et.",
        "3. Konu aynı kalsa bile bakış açısını (Örn: 'X bitkisinin ekonomisi') değiştiren cümleyi yakala."
      ],
      "tips": [
        "Cümlede aynı kelimelerin geçmesi o cümlenin akışa uygun olduğu anlamına gelmez; bakış açısına bak.",
        "Bozan cümleyi çıkardığında önceki cümle ile sonraki cümlenin birbirine kusursuz bağlandığını test et."
      ],
      "pitfalls": [
        "Zaman uyumu zıtlığını göz ardı edip cümlenin sadece bir tarafına odaklanmak."
      ],
      "distractorTactic": "Zaman bağlaçlarının gerektirdiği ana cümle zamanı ile çelişen seçenekleri ele.",
      "memoryCode": "🎵 Akışı Bozan Cümle [A2]: Konu aynı olabilir ama BAKIŞ AÇISI farklıysa o cümle yabancıdır!",
      "timeManagement": "Soru başı önerilen süre: 40-45 sn.",
      "exampleEn": "I) Coral reefs host vast marine biodiversity. II) They protect coastlines from storm damage. III) Deep sea trenches contain extreme hydrothermal vents. IV) Furthermore, reefs support global fisheries.",
      "explanationTr": "III numaralı cümle derin deniz çukurlarından bahsederek mercan resifleri zincirini kırmaktadır.",
      "solvedExample": {
        "question": "[Akışı Bozan Cümle - A2] (I) The migration of monarch butterflies across North America is one of nature's most extraordinary spectacles. (II) Every autumn, millions of monarchs travel up to 3,000 miles to reach their overwintering sites in central Mexico. (III) During this arduous journey, they rely on prevailing air currents to conserve vital metabolic energy. (IV) Mexico possesses a rich variety of indigenous flora that attracts international eco-tourists every year. (V) Upon arrival, dense clusters of butterflies blanket the oyamel fir forests to protect themselves from freezing temperatures.\n\nA) I   B) II   C) III   D) IV   E) V",
        "options": [
          "I",
          "II",
          "III",
          "IV",
          "V"
        ],
        "answer": "D",
        "explanation": "Metin baştan sona kelebeklerin göç yolculuğunu anlatır; IV numaralı cümle Meksika'nın turistik bitki örtüsünden bahsederek akışı bozar."
      },
      "ydsExamFormat": "YDS'de zaman ve temel bağlaç sorularını hatasız çözmenin omurgasını teşkil eder."
    },
    {
      "level": "B1",
      "title": "Akışı Bozan Cümle — B1: Cümle İçi Bağlam ve Temel Eleme",
      "meaning": "Akışı Bozan Cümle için B1 seviyesinde kilit kural: Cümle İçi Bağlam ve Temel Eleme.",
      "requirements": "Paragrafın ana konusunu ve bakış açısını belirleyip konunun dışına çıkan veya tonu bozan cümleyi eleme.",
      "method": "Paragrafın ortak öznesini ve zamanını bul -> Cümleler arası 'referans zincirini' takip et -> Zinciri kıran cümleyi işaretle.",
      "steps": [
        "1. Cümle 1 ve 2'yi okuyup paragrafın tam konusunu (Örn: 'X bitkisinin tıbbi yararları') netleştir.",
        "2. Her cümlenin bu konunun hangi açısına odaklandığını kontrol et.",
        "3. Konu aynı kalsa bile bakış açısını (Örn: 'X bitkisinin ekonomisi') değiştiren cümleyi yakala."
      ],
      "tips": [
        "Cümlede aynı kelimelerin geçmesi o cümlenin akışa uygun olduğu anlamına gelmez; bakış açısına bak.",
        "Bozan cümleyi çıkardığında önceki cümle ile sonraki cümlenin birbirine kusursuz bağlandığını test et."
      ],
      "pitfalls": [
        "Bağlam yönü (+/-) analizi yapmadan benzer anlamlı sözcüklere takılmak."
      ],
      "distractorTactic": "Anlam yönü cümlenin zıt kutbuna düşen veya gereksiz genelleme yapan şıkları ele.",
      "memoryCode": "🎵 Akışı Bozan Cümle [B1]: Konu aynı olabilir ama BAKIŞ AÇISI farklıysa o cümle yabancıdır!",
      "timeManagement": "Soru başı önerilen süre: 45-50 sn.",
      "exampleEn": "I) Coral reefs host vast marine biodiversity. II) They protect coastlines from storm damage. III) Deep sea trenches contain extreme hydrothermal vents. IV) Furthermore, reefs support global fisheries.",
      "explanationTr": "III numaralı cümle derin deniz çukurlarından bahsederek mercan resifleri zincirini kırmaktadır.",
      "solvedExample": {
        "question": "[Akışı Bozan Cümle - B1] (I) The migration of monarch butterflies across North America is one of nature's most extraordinary spectacles. (II) Every autumn, millions of monarchs travel up to 3,000 miles to reach their overwintering sites in central Mexico. (III) During this arduous journey, they rely on prevailing air currents to conserve vital metabolic energy. (IV) Mexico possesses a rich variety of indigenous flora that attracts international eco-tourists every year. (V) Upon arrival, dense clusters of butterflies blanket the oyamel fir forests to protect themselves from freezing temperatures.\n\nA) I   B) II   C) III   D) IV   E) V",
        "options": [
          "I",
          "II",
          "III",
          "IV",
          "V"
        ],
        "answer": "D",
        "explanation": "Metin baştan sona kelebeklerin göç yolculuğunu anlatır; IV numaralı cümle Meksika'nın turistik bitki örtüsünden bahsederek akışı bozar."
      },
      "ydsExamFormat": "YDS orta düzey çeldiricilerini eleyerek net bandını 60-75 aralığına taşır."
    },
    {
      "level": "B2",
      "title": "Akışı Bozan Cümle — B2: Paragraf Bütünlüğü ve Güçlü Çeldiriciler",
      "meaning": "Akışı Bozan Cümle için B2 seviyesinde kilit kural: Paragraf Bütünlüğü ve Güçlü Çeldiriciler.",
      "requirements": "Paragrafın ana konusunu ve bakış açısını belirleyip konunun dışına çıkan veya tonu bozan cümleyi eleme.",
      "method": "Paragrafın ortak öznesini ve zamanını bul -> Cümleler arası 'referans zincirini' takip et -> Zinciri kıran cümleyi işaretle.",
      "steps": [
        "1. Cümle 1 ve 2'yi okuyup paragrafın tam konusunu (Örn: 'X bitkisinin tıbbi yararları') netleştir.",
        "2. Her cümlenin bu konunun hangi açısına odaklandığını kontrol et.",
        "3. Konu aynı kalsa bile bakış açısını (Örn: 'X bitkisinin ekonomisi') değiştiren cümleyi yakala."
      ],
      "tips": [
        "Cümlede aynı kelimelerin geçmesi o cümlenin akışa uygun olduğu anlamına gelmez; bakış açısına bak.",
        "Bozan cümleyi çıkardığında önceki cümle ile sonraki cümlenin birbirine kusursuz bağlandığını test et."
      ],
      "pitfalls": [
        "Güçlü çeldiricilerdeki sahte referans sözcüklerine veya yarım doğru bilgilere kanmak."
      ],
      "distractorTactic": "Metinde doğrudan geçmeyen, mantıksal sıçrama içeren veya aşırı iddialı şıkları ele.",
      "memoryCode": "🎵 Akışı Bozan Cümle [B2]: Konu aynı olabilir ama BAKIŞ AÇISI farklıysa o cümle yabancıdır!",
      "timeManagement": "Soru başı önerilen süre: 50-60 sn.",
      "exampleEn": "I) Coral reefs host vast marine biodiversity. II) They protect coastlines from storm damage. III) Deep sea trenches contain extreme hydrothermal vents. IV) Furthermore, reefs support global fisheries.",
      "explanationTr": "III numaralı cümle derin deniz çukurlarından bahsederek mercan resifleri zincirini kırmaktadır.",
      "solvedExample": {
        "question": "[Akışı Bozan Cümle - B2] (I) The migration of monarch butterflies across North America is one of nature's most extraordinary spectacles. (II) Every autumn, millions of monarchs travel up to 3,000 miles to reach their overwintering sites in central Mexico. (III) During this arduous journey, they rely on prevailing air currents to conserve vital metabolic energy. (IV) Mexico possesses a rich variety of indigenous flora that attracts international eco-tourists every year. (V) Upon arrival, dense clusters of butterflies blanket the oyamel fir forests to protect themselves from freezing temperatures.\n\nA) I   B) II   C) III   D) IV   E) V",
        "options": [
          "I",
          "II",
          "III",
          "IV",
          "V"
        ],
        "answer": "D",
        "explanation": "Metin baştan sona kelebeklerin göç yolculuğunu anlatır; IV numaralı cümle Meksika'nın turistik bitki örtüsünden bahsederek akışı bozar."
      },
      "ydsExamFormat": "YDS 75-85 puan hedefleyen adayların tuzak şıklara düşmesini engelleyen kritik eşiktir."
    },
    {
      "level": "C1",
      "title": "Akışı Bozan Cümle — C1: Akademik Dil, Nüans ve Örtük Çıkarım",
      "meaning": "Akışı Bozan Cümle için C1 seviyesinde kilit kural: Akademik Dil, Nüans ve Örtük Çıkarım.",
      "requirements": "Paragrafın ana konusunu ve bakış açısını belirleyip konunun dışına çıkan veya tonu bozan cümleyi eleme.",
      "method": "Paragrafın ortak öznesini ve zamanını bul -> Cümleler arası 'referans zincirini' takip et -> Zinciri kıran cümleyi işaretle.",
      "steps": [
        "1. Cümle 1 ve 2'yi okuyup paragrafın tam konusunu (Örn: 'X bitkisinin tıbbi yararları') netleştir.",
        "2. Her cümlenin bu konunun hangi açısına odaklandığını kontrol et.",
        "3. Konu aynı kalsa bile bakış açısını (Örn: 'X bitkisinin ekonomisi') değiştiren cümleyi yakala."
      ],
      "tips": [
        "Cümlede aynı kelimelerin geçmesi o cümlenin akışa uygun olduğu anlamına gelmez; bakış açısına bak.",
        "Bozan cümleyi çıkardığında önceki cümle ile sonraki cümlenin birbirine kusursuz bağlandığını test et."
      ],
      "pitfalls": [
        "Yazarın örtük amacını kaçırıp sadece yüzeydeki kelimelerin eşanlamlılarına yönelmek."
      ],
      "distractorTactic": "Akademik resmiyet tonunu bozan veya metindeki nüansı saptıran şıkları ele.",
      "memoryCode": "🎵 Akışı Bozan Cümle [C1]: Konu aynı olabilir ama BAKIŞ AÇISI farklıysa o cümle yabancıdır!",
      "timeManagement": "Soru başı önerilen süre: 60-70 sn.",
      "exampleEn": "I) Coral reefs host vast marine biodiversity. II) They protect coastlines from storm damage. III) Deep sea trenches contain extreme hydrothermal vents. IV) Furthermore, reefs support global fisheries.",
      "explanationTr": "III numaralı cümle derin deniz çukurlarından bahsederek mercan resifleri zincirini kırmaktadır.",
      "solvedExample": {
        "question": "[Akışı Bozan Cümle - C1] (I) The migration of monarch butterflies across North America is one of nature's most extraordinary spectacles. (II) Every autumn, millions of monarchs travel up to 3,000 miles to reach their overwintering sites in central Mexico. (III) During this arduous journey, they rely on prevailing air currents to conserve vital metabolic energy. (IV) Mexico possesses a rich variety of indigenous flora that attracts international eco-tourists every year. (V) Upon arrival, dense clusters of butterflies blanket the oyamel fir forests to protect themselves from freezing temperatures.\n\nA) I   B) II   C) III   D) IV   E) V",
        "options": [
          "I",
          "II",
          "III",
          "IV",
          "V"
        ],
        "answer": "D",
        "explanation": "Metin baştan sona kelebeklerin göç yolculuğunu anlatır; IV numaralı cümle Meksika'nın turistik bitki örtüsünden bahsederek akışı bozar."
      },
      "ydsExamFormat": "YDS 85-90+ bareminde tam net getiren derin analiz seviyesidir."
    },
    {
      "level": "C2",
      "title": "Akışı Bozan Cümle — C2: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar",
      "meaning": "Akışı Bozan Cümle için C2 seviyesinde kilit kural: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar.",
      "requirements": "Paragrafın ana konusunu ve bakış açısını belirleyip konunun dışına çıkan veya tonu bozan cümleyi eleme.",
      "method": "Paragrafın ortak öznesini ve zamanını bul -> Cümleler arası 'referans zincirini' takip et -> Zinciri kıran cümleyi işaretle.",
      "steps": [
        "1. Cümle 1 ve 2'yi okuyup paragrafın tam konusunu (Örn: 'X bitkisinin tıbbi yararları') netleştir.",
        "2. Her cümlenin bu konunun hangi açısına odaklandığını kontrol et.",
        "3. Konu aynı kalsa bile bakış açısını (Örn: 'X bitkisinin ekonomisi') değiştiren cümleyi yakala."
      ],
      "tips": [
        "Cümlede aynı kelimelerin geçmesi o cümlenin akışa uygun olduğu anlamına gelmez; bakış açısına bak.",
        "Bozan cümleyi çıkardığında önceki cümle ile sonraki cümlenin birbirine kusursuz bağlandığını test et."
      ],
      "pitfalls": [
        "İki son derece yakın akademik seçenek arasındaki ton veya kapsam farkını görememek."
      ],
      "distractorTactic": "Bağlamın retorik amacına uymayan ve yazarın tarafsızlık/eleştiri tonunu aşan seçenekleri ele.",
      "memoryCode": "🎵 Akışı Bozan Cümle [C2]: Konu aynı olabilir ama BAKIŞ AÇISI farklıysa o cümle yabancıdır!",
      "timeManagement": "Soru başı önerilen süre: 70-80 sn.",
      "exampleEn": "I) Coral reefs host vast marine biodiversity. II) They protect coastlines from storm damage. III) Deep sea trenches contain extreme hydrothermal vents. IV) Furthermore, reefs support global fisheries.",
      "explanationTr": "III numaralı cümle derin deniz çukurlarından bahsederek mercan resifleri zincirini kırmaktadır.",
      "solvedExample": {
        "question": "[Akışı Bozan Cümle - C2] (I) The migration of monarch butterflies across North America is one of nature's most extraordinary spectacles. (II) Every autumn, millions of monarchs travel up to 3,000 miles to reach their overwintering sites in central Mexico. (III) During this arduous journey, they rely on prevailing air currents to conserve vital metabolic energy. (IV) Mexico possesses a rich variety of indigenous flora that attracts international eco-tourists every year. (V) Upon arrival, dense clusters of butterflies blanket the oyamel fir forests to protect themselves from freezing temperatures.\n\nA) I   B) II   C) III   D) IV   E) V",
        "options": [
          "I",
          "II",
          "III",
          "IV",
          "V"
        ],
        "answer": "D",
        "explanation": "Metin baştan sona kelebeklerin göç yolculuğunu anlatır; IV numaralı cümle Meksika'nın turistik bitki örtüsünden bahsederek akışı bozar."
      },
      "ydsExamFormat": "YDS 95-100 tam puan düzeyindeki seçici soruların kilit çözüm metodolojisidir."
    },
    {
      "level": "YDS",
      "title": "Akışı Bozan Cümle — YDS: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama",
      "meaning": "Akışı Bozan Cümle için YDS seviyesinde kilit kural: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama.",
      "requirements": "Paragrafın ana konusunu ve bakış açısını belirleyip konunun dışına çıkan veya tonu bozan cümleyi eleme.",
      "method": "Paragrafın ortak öznesini ve zamanını bul -> Cümleler arası 'referans zincirini' takip et -> Zinciri kıran cümleyi işaretle.",
      "steps": [
        "1. Cümle 1 ve 2'yi okuyup paragrafın tam konusunu (Örn: 'X bitkisinin tıbbi yararları') netleştir.",
        "2. Her cümlenin bu konunun hangi açısına odaklandığını kontrol et.",
        "3. Konu aynı kalsa bile bakış açısını (Örn: 'X bitkisinin ekonomisi') değiştiren cümleyi yakala."
      ],
      "tips": [
        "Cümlede aynı kelimelerin geçmesi o cümlenin akışa uygun olduğu anlamına gelmez; bakış açısına bak.",
        "Bozan cümleyi çıkardığında önceki cümle ile sonraki cümlenin birbirine kusursuz bağlandığını test et."
      ],
      "pitfalls": [
        "Tek bir soruya 2 dakikadan fazla takılıp diğer soru tiplerinin süresinden çalmak."
      ],
      "distractorTactic": "ÖSYM'nin en sevdiği tuzak kalıpları (aşırı genelleme, ters neden-sonuç, sahte bağlaç) şablonla ele.",
      "memoryCode": "🎵 Akışı Bozan Cümle [YDS]: Konu aynı olabilir ama BAKIŞ AÇISI farklıysa o cümle yabancıdır!",
      "timeManagement": "Soru başı önerilen süre: Hızlı tempo (45-55 sn ortalama).",
      "exampleEn": "I) Coral reefs host vast marine biodiversity. II) They protect coastlines from storm damage. III) Deep sea trenches contain extreme hydrothermal vents. IV) Furthermore, reefs support global fisheries.",
      "explanationTr": "III numaralı cümle derin deniz çukurlarından bahsederek mercan resifleri zincirini kırmaktadır.",
      "solvedExample": {
        "question": "[Akışı Bozan Cümle - YDS] (I) The migration of monarch butterflies across North America is one of nature's most extraordinary spectacles. (II) Every autumn, millions of monarchs travel up to 3,000 miles to reach their overwintering sites in central Mexico. (III) During this arduous journey, they rely on prevailing air currents to conserve vital metabolic energy. (IV) Mexico possesses a rich variety of indigenous flora that attracts international eco-tourists every year. (V) Upon arrival, dense clusters of butterflies blanket the oyamel fir forests to protect themselves from freezing temperatures.\n\nA) I   B) II   C) III   D) IV   E) V",
        "options": [
          "I",
          "II",
          "III",
          "IV",
          "V"
        ],
        "answer": "D",
        "explanation": "Metin baştan sona kelebeklerin göç yolculuğunu anlatır; IV numaralı cümle Meksika'nın turistik bitki örtüsünden bahsederek akışı bozar."
      },
      "ydsExamFormat": "180 dakikalık gerçek sınav salonunda 80 soruyu maksimum net ve sıfır panikle tamamlama sanatıdır."
    }
  ],
  "restatement": [
    {
      "level": "A1",
      "title": "Anlamca En Yakın Cümle — A1: Temel Tanıma ve Açık İpuçları",
      "meaning": "Anlamca En Yakın Cümle için A1 seviyesinde kilit kural: Temel Tanıma ve Açık İpuçları.",
      "requirements": "Orijinal cümledeki anlamı eksiltmeden, abartmadan ve saptırmadan eşanlamlı yapılarla yeniden söyleme.",
      "method": "Orijinal cümlenin 3 ayağını belirle: Bağlaç (sebep/zıtlık), Miktar (only, most, few), Kip (can, must, may) -> Bu 3 ayağı tam veren şıkkı bul.",
      "steps": [
        "1. Orijinal cümledeki kritik belirteçleri daire içine al (örn: 'only', 'rarely', 'despite', 'likely').",
        "2. Anlamı eksilten veya gereksiz yere iddialaştıran ('never', 'always') şıkları ele.",
        "3. Aynı bağlamsal zıtlığı veya nedeni eşanlamlı yapıyla veren seçeneği işaretle."
      ],
      "tips": [
        "Orijinal cümlede 'may' (olasılık) varsa doğru cevapta 'will' (kesinlik) olamaz.",
        "Orijinal cümlede 'few' (neredeyse hiç) varsa doğru cevapta 'many' olamaz."
      ],
      "pitfalls": [
        "Cümlenin tamamını okumadan ilk gördüğü kelimeye kapılmak."
      ],
      "distractorTactic": "Temel gramer uyumuna ve kelime türüne uymayan seçenekleri hemen ele.",
      "memoryCode": "🎵 Anlamca En Yakın Cümle [A1]: Anlam ne eksik ne fazla; bağlaç ve kip dengesini asla bozma!",
      "timeManagement": "Soru başı önerilen süre: 30-40 sn.",
      "exampleEn": "Few scientists anticipated the breakthrough, although experimental data had pointed in that direction.",
      "explanationTr": "'Despite the experimental evidence, the breakthrough came as a surprise to most researchers' cümlesiyle tam denktir.",
      "solvedExample": {
        "question": "[Anlamca En Yakın Cümle - A1] 'Unless countries significantly curb their carbon emissions within the next decade, global temperatures will surpass catastrophic thresholds.'\n\nA) Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.\nB) Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.\nC) The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.\nD) Only a complete cessation of industrial production within ten years can maintain current global temperature averages.\nE) Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions.",
        "options": [
          "Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.",
          "Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.",
          "The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.",
          "Only a complete cessation of industrial production within ten years can maintain current global temperature averages.",
          "Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions."
        ],
        "answer": "A",
        "explanation": "'Unless S + V' (yapmadıkça olmaz) koşulu 'can only avoid ... by ...' yapısıyla birebir semantik denklik oluşturur."
      },
      "ydsExamFormat": "Soru kökündeki en temel özne, yüklem ve zaman ipuçlarını ilk bakışta yakalama becerisini oluşturur."
    },
    {
      "level": "A2",
      "title": "Anlamca En Yakın Cümle — A2: Zaman ve Bağlaç İşaretçileri",
      "meaning": "Anlamca En Yakın Cümle için A2 seviyesinde kilit kural: Zaman ve Bağlaç İşaretçileri.",
      "requirements": "Orijinal cümledeki anlamı eksiltmeden, abartmadan ve saptırmadan eşanlamlı yapılarla yeniden söyleme.",
      "method": "Orijinal cümlenin 3 ayağını belirle: Bağlaç (sebep/zıtlık), Miktar (only, most, few), Kip (can, must, may) -> Bu 3 ayağı tam veren şıkkı bul.",
      "steps": [
        "1. Orijinal cümledeki kritik belirteçleri daire içine al (örn: 'only', 'rarely', 'despite', 'likely').",
        "2. Anlamı eksilten veya gereksiz yere iddialaştıran ('never', 'always') şıkları ele.",
        "3. Aynı bağlamsal zıtlığı veya nedeni eşanlamlı yapıyla veren seçeneği işaretle."
      ],
      "tips": [
        "Orijinal cümlede 'may' (olasılık) varsa doğru cevapta 'will' (kesinlik) olamaz.",
        "Orijinal cümlede 'few' (neredeyse hiç) varsa doğru cevapta 'many' olamaz."
      ],
      "pitfalls": [
        "Zaman uyumu zıtlığını göz ardı edip cümlenin sadece bir tarafına odaklanmak."
      ],
      "distractorTactic": "Zaman bağlaçlarının gerektirdiği ana cümle zamanı ile çelişen seçenekleri ele.",
      "memoryCode": "🎵 Anlamca En Yakın Cümle [A2]: Anlam ne eksik ne fazla; bağlaç ve kip dengesini asla bozma!",
      "timeManagement": "Soru başı önerilen süre: 40-45 sn.",
      "exampleEn": "Few scientists anticipated the breakthrough, although experimental data had pointed in that direction.",
      "explanationTr": "'Despite the experimental evidence, the breakthrough came as a surprise to most researchers' cümlesiyle tam denktir.",
      "solvedExample": {
        "question": "[Anlamca En Yakın Cümle - A2] 'Unless countries significantly curb their carbon emissions within the next decade, global temperatures will surpass catastrophic thresholds.'\n\nA) Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.\nB) Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.\nC) The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.\nD) Only a complete cessation of industrial production within ten years can maintain current global temperature averages.\nE) Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions.",
        "options": [
          "Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.",
          "Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.",
          "The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.",
          "Only a complete cessation of industrial production within ten years can maintain current global temperature averages.",
          "Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions."
        ],
        "answer": "A",
        "explanation": "'Unless S + V' (yapmadıkça olmaz) koşulu 'can only avoid ... by ...' yapısıyla birebir semantik denklik oluşturur."
      },
      "ydsExamFormat": "YDS'de zaman ve temel bağlaç sorularını hatasız çözmenin omurgasını teşkil eder."
    },
    {
      "level": "B1",
      "title": "Anlamca En Yakın Cümle — B1: Cümle İçi Bağlam ve Temel Eleme",
      "meaning": "Anlamca En Yakın Cümle için B1 seviyesinde kilit kural: Cümle İçi Bağlam ve Temel Eleme.",
      "requirements": "Orijinal cümledeki anlamı eksiltmeden, abartmadan ve saptırmadan eşanlamlı yapılarla yeniden söyleme.",
      "method": "Orijinal cümlenin 3 ayağını belirle: Bağlaç (sebep/zıtlık), Miktar (only, most, few), Kip (can, must, may) -> Bu 3 ayağı tam veren şıkkı bul.",
      "steps": [
        "1. Orijinal cümledeki kritik belirteçleri daire içine al (örn: 'only', 'rarely', 'despite', 'likely').",
        "2. Anlamı eksilten veya gereksiz yere iddialaştıran ('never', 'always') şıkları ele.",
        "3. Aynı bağlamsal zıtlığı veya nedeni eşanlamlı yapıyla veren seçeneği işaretle."
      ],
      "tips": [
        "Orijinal cümlede 'may' (olasılık) varsa doğru cevapta 'will' (kesinlik) olamaz.",
        "Orijinal cümlede 'few' (neredeyse hiç) varsa doğru cevapta 'many' olamaz."
      ],
      "pitfalls": [
        "Bağlam yönü (+/-) analizi yapmadan benzer anlamlı sözcüklere takılmak."
      ],
      "distractorTactic": "Anlam yönü cümlenin zıt kutbuna düşen veya gereksiz genelleme yapan şıkları ele.",
      "memoryCode": "🎵 Anlamca En Yakın Cümle [B1]: Anlam ne eksik ne fazla; bağlaç ve kip dengesini asla bozma!",
      "timeManagement": "Soru başı önerilen süre: 45-50 sn.",
      "exampleEn": "Few scientists anticipated the breakthrough, although experimental data had pointed in that direction.",
      "explanationTr": "'Despite the experimental evidence, the breakthrough came as a surprise to most researchers' cümlesiyle tam denktir.",
      "solvedExample": {
        "question": "[Anlamca En Yakın Cümle - B1] 'Unless countries significantly curb their carbon emissions within the next decade, global temperatures will surpass catastrophic thresholds.'\n\nA) Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.\nB) Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.\nC) The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.\nD) Only a complete cessation of industrial production within ten years can maintain current global temperature averages.\nE) Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions.",
        "options": [
          "Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.",
          "Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.",
          "The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.",
          "Only a complete cessation of industrial production within ten years can maintain current global temperature averages.",
          "Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions."
        ],
        "answer": "A",
        "explanation": "'Unless S + V' (yapmadıkça olmaz) koşulu 'can only avoid ... by ...' yapısıyla birebir semantik denklik oluşturur."
      },
      "ydsExamFormat": "YDS orta düzey çeldiricilerini eleyerek net bandını 60-75 aralığına taşır."
    },
    {
      "level": "B2",
      "title": "Anlamca En Yakın Cümle — B2: Paragraf Bütünlüğü ve Güçlü Çeldiriciler",
      "meaning": "Anlamca En Yakın Cümle için B2 seviyesinde kilit kural: Paragraf Bütünlüğü ve Güçlü Çeldiriciler.",
      "requirements": "Orijinal cümledeki anlamı eksiltmeden, abartmadan ve saptırmadan eşanlamlı yapılarla yeniden söyleme.",
      "method": "Orijinal cümlenin 3 ayağını belirle: Bağlaç (sebep/zıtlık), Miktar (only, most, few), Kip (can, must, may) -> Bu 3 ayağı tam veren şıkkı bul.",
      "steps": [
        "1. Orijinal cümledeki kritik belirteçleri daire içine al (örn: 'only', 'rarely', 'despite', 'likely').",
        "2. Anlamı eksilten veya gereksiz yere iddialaştıran ('never', 'always') şıkları ele.",
        "3. Aynı bağlamsal zıtlığı veya nedeni eşanlamlı yapıyla veren seçeneği işaretle."
      ],
      "tips": [
        "Orijinal cümlede 'may' (olasılık) varsa doğru cevapta 'will' (kesinlik) olamaz.",
        "Orijinal cümlede 'few' (neredeyse hiç) varsa doğru cevapta 'many' olamaz."
      ],
      "pitfalls": [
        "Güçlü çeldiricilerdeki sahte referans sözcüklerine veya yarım doğru bilgilere kanmak."
      ],
      "distractorTactic": "Metinde doğrudan geçmeyen, mantıksal sıçrama içeren veya aşırı iddialı şıkları ele.",
      "memoryCode": "🎵 Anlamca En Yakın Cümle [B2]: Anlam ne eksik ne fazla; bağlaç ve kip dengesini asla bozma!",
      "timeManagement": "Soru başı önerilen süre: 50-60 sn.",
      "exampleEn": "Few scientists anticipated the breakthrough, although experimental data had pointed in that direction.",
      "explanationTr": "'Despite the experimental evidence, the breakthrough came as a surprise to most researchers' cümlesiyle tam denktir.",
      "solvedExample": {
        "question": "[Anlamca En Yakın Cümle - B2] 'Unless countries significantly curb their carbon emissions within the next decade, global temperatures will surpass catastrophic thresholds.'\n\nA) Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.\nB) Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.\nC) The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.\nD) Only a complete cessation of industrial production within ten years can maintain current global temperature averages.\nE) Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions.",
        "options": [
          "Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.",
          "Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.",
          "The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.",
          "Only a complete cessation of industrial production within ten years can maintain current global temperature averages.",
          "Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions."
        ],
        "answer": "A",
        "explanation": "'Unless S + V' (yapmadıkça olmaz) koşulu 'can only avoid ... by ...' yapısıyla birebir semantik denklik oluşturur."
      },
      "ydsExamFormat": "YDS 75-85 puan hedefleyen adayların tuzak şıklara düşmesini engelleyen kritik eşiktir."
    },
    {
      "level": "C1",
      "title": "Anlamca En Yakın Cümle — C1: Akademik Dil, Nüans ve Örtük Çıkarım",
      "meaning": "Anlamca En Yakın Cümle için C1 seviyesinde kilit kural: Akademik Dil, Nüans ve Örtük Çıkarım.",
      "requirements": "Orijinal cümledeki anlamı eksiltmeden, abartmadan ve saptırmadan eşanlamlı yapılarla yeniden söyleme.",
      "method": "Orijinal cümlenin 3 ayağını belirle: Bağlaç (sebep/zıtlık), Miktar (only, most, few), Kip (can, must, may) -> Bu 3 ayağı tam veren şıkkı bul.",
      "steps": [
        "1. Orijinal cümledeki kritik belirteçleri daire içine al (örn: 'only', 'rarely', 'despite', 'likely').",
        "2. Anlamı eksilten veya gereksiz yere iddialaştıran ('never', 'always') şıkları ele.",
        "3. Aynı bağlamsal zıtlığı veya nedeni eşanlamlı yapıyla veren seçeneği işaretle."
      ],
      "tips": [
        "Orijinal cümlede 'may' (olasılık) varsa doğru cevapta 'will' (kesinlik) olamaz.",
        "Orijinal cümlede 'few' (neredeyse hiç) varsa doğru cevapta 'many' olamaz."
      ],
      "pitfalls": [
        "Yazarın örtük amacını kaçırıp sadece yüzeydeki kelimelerin eşanlamlılarına yönelmek."
      ],
      "distractorTactic": "Akademik resmiyet tonunu bozan veya metindeki nüansı saptıran şıkları ele.",
      "memoryCode": "🎵 Anlamca En Yakın Cümle [C1]: Anlam ne eksik ne fazla; bağlaç ve kip dengesini asla bozma!",
      "timeManagement": "Soru başı önerilen süre: 60-70 sn.",
      "exampleEn": "Few scientists anticipated the breakthrough, although experimental data had pointed in that direction.",
      "explanationTr": "'Despite the experimental evidence, the breakthrough came as a surprise to most researchers' cümlesiyle tam denktir.",
      "solvedExample": {
        "question": "[Anlamca En Yakın Cümle - C1] 'Unless countries significantly curb their carbon emissions within the next decade, global temperatures will surpass catastrophic thresholds.'\n\nA) Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.\nB) Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.\nC) The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.\nD) Only a complete cessation of industrial production within ten years can maintain current global temperature averages.\nE) Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions.",
        "options": [
          "Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.",
          "Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.",
          "The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.",
          "Only a complete cessation of industrial production within ten years can maintain current global temperature averages.",
          "Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions."
        ],
        "answer": "A",
        "explanation": "'Unless S + V' (yapmadıkça olmaz) koşulu 'can only avoid ... by ...' yapısıyla birebir semantik denklik oluşturur."
      },
      "ydsExamFormat": "YDS 85-90+ bareminde tam net getiren derin analiz seviyesidir."
    },
    {
      "level": "C2",
      "title": "Anlamca En Yakın Cümle — C2: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar",
      "meaning": "Anlamca En Yakın Cümle için C2 seviyesinde kilit kural: Söylem, Ton, Yazar Tutumu ve İnce Ayrımlar.",
      "requirements": "Orijinal cümledeki anlamı eksiltmeden, abartmadan ve saptırmadan eşanlamlı yapılarla yeniden söyleme.",
      "method": "Orijinal cümlenin 3 ayağını belirle: Bağlaç (sebep/zıtlık), Miktar (only, most, few), Kip (can, must, may) -> Bu 3 ayağı tam veren şıkkı bul.",
      "steps": [
        "1. Orijinal cümledeki kritik belirteçleri daire içine al (örn: 'only', 'rarely', 'despite', 'likely').",
        "2. Anlamı eksilten veya gereksiz yere iddialaştıran ('never', 'always') şıkları ele.",
        "3. Aynı bağlamsal zıtlığı veya nedeni eşanlamlı yapıyla veren seçeneği işaretle."
      ],
      "tips": [
        "Orijinal cümlede 'may' (olasılık) varsa doğru cevapta 'will' (kesinlik) olamaz.",
        "Orijinal cümlede 'few' (neredeyse hiç) varsa doğru cevapta 'many' olamaz."
      ],
      "pitfalls": [
        "İki son derece yakın akademik seçenek arasındaki ton veya kapsam farkını görememek."
      ],
      "distractorTactic": "Bağlamın retorik amacına uymayan ve yazarın tarafsızlık/eleştiri tonunu aşan seçenekleri ele.",
      "memoryCode": "🎵 Anlamca En Yakın Cümle [C2]: Anlam ne eksik ne fazla; bağlaç ve kip dengesini asla bozma!",
      "timeManagement": "Soru başı önerilen süre: 70-80 sn.",
      "exampleEn": "Few scientists anticipated the breakthrough, although experimental data had pointed in that direction.",
      "explanationTr": "'Despite the experimental evidence, the breakthrough came as a surprise to most researchers' cümlesiyle tam denktir.",
      "solvedExample": {
        "question": "[Anlamca En Yakın Cümle - C2] 'Unless countries significantly curb their carbon emissions within the next decade, global temperatures will surpass catastrophic thresholds.'\n\nA) Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.\nB) Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.\nC) The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.\nD) Only a complete cessation of industrial production within ten years can maintain current global temperature averages.\nE) Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions.",
        "options": [
          "Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.",
          "Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.",
          "The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.",
          "Only a complete cessation of industrial production within ten years can maintain current global temperature averages.",
          "Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions."
        ],
        "answer": "A",
        "explanation": "'Unless S + V' (yapmadıkça olmaz) koşulu 'can only avoid ... by ...' yapısıyla birebir semantik denklik oluşturur."
      },
      "ydsExamFormat": "YDS 95-100 tam puan düzeyindeki seçici soruların kilit çözüm metodolojisidir."
    },
    {
      "level": "YDS",
      "title": "Anlamca En Yakın Cümle — YDS: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama",
      "meaning": "Anlamca En Yakın Cümle için YDS seviyesinde kilit kural: Süre Baskısı Altında Sınav Stratejisi ve Optik Uygulama.",
      "requirements": "Orijinal cümledeki anlamı eksiltmeden, abartmadan ve saptırmadan eşanlamlı yapılarla yeniden söyleme.",
      "method": "Orijinal cümlenin 3 ayağını belirle: Bağlaç (sebep/zıtlık), Miktar (only, most, few), Kip (can, must, may) -> Bu 3 ayağı tam veren şıkkı bul.",
      "steps": [
        "1. Orijinal cümledeki kritik belirteçleri daire içine al (örn: 'only', 'rarely', 'despite', 'likely').",
        "2. Anlamı eksilten veya gereksiz yere iddialaştıran ('never', 'always') şıkları ele.",
        "3. Aynı bağlamsal zıtlığı veya nedeni eşanlamlı yapıyla veren seçeneği işaretle."
      ],
      "tips": [
        "Orijinal cümlede 'may' (olasılık) varsa doğru cevapta 'will' (kesinlik) olamaz.",
        "Orijinal cümlede 'few' (neredeyse hiç) varsa doğru cevapta 'many' olamaz."
      ],
      "pitfalls": [
        "Tek bir soruya 2 dakikadan fazla takılıp diğer soru tiplerinin süresinden çalmak."
      ],
      "distractorTactic": "ÖSYM'nin en sevdiği tuzak kalıpları (aşırı genelleme, ters neden-sonuç, sahte bağlaç) şablonla ele.",
      "memoryCode": "🎵 Anlamca En Yakın Cümle [YDS]: Anlam ne eksik ne fazla; bağlaç ve kip dengesini asla bozma!",
      "timeManagement": "Soru başı önerilen süre: Hızlı tempo (45-55 sn ortalama).",
      "exampleEn": "Few scientists anticipated the breakthrough, although experimental data had pointed in that direction.",
      "explanationTr": "'Despite the experimental evidence, the breakthrough came as a surprise to most researchers' cümlesiyle tam denktir.",
      "solvedExample": {
        "question": "[Anlamca En Yakın Cümle - YDS] 'Unless countries significantly curb their carbon emissions within the next decade, global temperatures will surpass catastrophic thresholds.'\n\nA) Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.\nB) Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.\nC) The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.\nD) Only a complete cessation of industrial production within ten years can maintain current global temperature averages.\nE) Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions.",
        "options": [
          "Countries can only avoid surpassing catastrophic global temperature thresholds by substantially reducing their carbon emissions over the coming decade.",
          "Even if global carbon emissions are reduced slightly, international temperatures are certain to reach catastrophic levels.",
          "The next decade will witness catastrophic temperature increases regardless of whether countries reduce carbon emissions or not.",
          "Only a complete cessation of industrial production within ten years can maintain current global temperature averages.",
          "Surpassing dangerous temperature thresholds has already become unavoidable due to past carbon emissions."
        ],
        "answer": "A",
        "explanation": "'Unless S + V' (yapmadıkça olmaz) koşulu 'can only avoid ... by ...' yapısıyla birebir semantik denklik oluşturur."
      },
      "ydsExamFormat": "180 dakikalık gerçek sınav salonunda 80 soruyu maksimum net ve sıfır panikle tamamlama sanatıdır."
    }
  ]
};

export function getTacticLevels(slug: string): TacticLevelBlock[] {
  return TACTIC_LEVELS_MAP[slug] || [];
}

export function validateTacticLevels(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const requiredLevels: TacticLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2", "YDS"];
  for (const [slug, list] of Object.entries(TACTIC_LEVELS_MAP)) {
    if (!list || list.length !== 7) {
      errors.push(`${slug}: Beklenen 7 seviye, bulunan ${list?.length || 0}`);
      continue;
    }
    requiredLevels.forEach((lv, i) => {
      const b = list[i];
      if (!b || b.level !== lv) errors.push(`${slug} [${i}]: Seviye ${lv} olmalı`);
      if (!b.meaning) errors.push(`${slug} [${lv}]: 'meaning' boş olamaz`);
      if (!b.solvedExample || !b.solvedExample.question) errors.push(`${slug} [${lv}]: solvedExample eksik`);
    });
  }
  return { valid: errors.length === 0, errors };
}
