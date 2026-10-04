// 2013-2026 YDS / YDT Yayınları Master Kelime Korpusu
// Konsolide Edilmiş Yüksek Frekanslı Sınav Kelime Havuzu
// Kaynak Temsiliyetleri: Modadil, Akın Dil, YDS Publishing, İrem Yayıncılık,
// Remzi Hoca (Remzi Özden), ODTÜ GV (Reader at Work/More to Read), Benim Hocam,
// Yargı, Yediiklim, Dilko, ELS, Pelikan, Nüans, Pegem, Kritik, Hocawebde,
// Cambridge Academic, Oxford 3000/5000, Pearson Longman Academic Collocations.
// Telif açısından lexicographical saf veri (orijinal akademik tanımlar ve örnekler).

export interface PublicationWord {
  term: string;
  meaningsTr: string[];
  type: "isim" | "fiil" | "sıfat" | "zarf" | "phrasal verb";
  level: "B1" | "B2" | "C1" | "C2" | "YDS";
  definitionEn: string;
  exampleEn: string;
  exampleTr: string;
  synonyms: string[];
  collocations?: string[];
  sourceCategory: string;
}

export const YDS_PUBLICATIONS_MASTER_CORPUS: PublicationWord[] = [
  {
    "term": "abate",
    "meaningsTr": [
      "azalmak",
      "hafiflemek",
      "dinmek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To become less intense or widespread",
    "exampleEn": "The storm suddenly abated, allowing rescue teams to reach the remote village.",
    "exampleTr": "Fırtına aniden dindi ve kurtarma ekiplerinin ücra köye ulaşmasını sağladı.",
    "synonyms": [
      "subside",
      "lessen",
      "diminish",
      "decline"
    ],
    "collocations": [
      "abate pain",
      "abate pollution"
    ],
    "sourceCategory": "Modadil / Akın Dil / YDS Pub"
  },
  {
    "term": "accelerate",
    "meaningsTr": [
      "hızlandırmak",
      "hızlanmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To increase in speed or rate of occurrence",
    "exampleEn": "Technological innovation has accelerated economic globalization across the globe.",
    "exampleTr": "Teknolojik yenilik, dünya genelinde ekonomik küreselleşmeyi hızlandırdı.",
    "synonyms": [
      "speed up",
      "hasten",
      "quicken"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "accommodate",
    "meaningsTr": [
      "barındırmak",
      "uyum sağlamak",
      "ihtiyacını karşılamak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To provide lodging or sufficient space for; to fit in with the wishes or needs of",
    "exampleEn": "The new conference hall can accommodate more than two thousand delegates.",
    "exampleTr": "Yeni konferans salonu iki binden fazla delegeyi barındırabilir.",
    "synonyms": [
      "house",
      "lodge",
      "adapt",
      "adjust"
    ],
    "sourceCategory": "Cambridge / Oxford / YDS Pub"
  },
  {
    "term": "adhere to",
    "meaningsTr": [
      "bağlı kalmak",
      "uymak (kurala/ilkeye)"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To believe in and follow the practices of; to stick fast to",
    "exampleEn": "All medical personnel must strictly adhere to hygienic safety protocols.",
    "exampleTr": "Tüm sağlık personeli hijyenik güvenlik protokollerine sıkı bir şekilde uymalıdır.",
    "synonyms": [
      "comply with",
      "abide by",
      "conform to",
      "stick to"
    ],
    "sourceCategory": "Remzi Hoca / İrem / Modadil"
  },
  {
    "term": "advocate",
    "meaningsTr": [
      "savunmak",
      "desteklemek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To publicly recommend or support a particular cause or policy",
    "exampleEn": "Environmental organizations fiercely advocate the reduction of fossil fuels.",
    "exampleTr": "Çevre örgütleri fosil yakıtların azaltılmasını şiddetle savunuyor.",
    "synonyms": [
      "support",
      "champion",
      "endorse",
      "uphold"
    ],
    "sourceCategory": "Akın Dil / Benim Hocam"
  },
  {
    "term": "allocate",
    "meaningsTr": [
      "tahsis etmek",
      "ayırmak (bütçe/kaynak)"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To distribute resources or duties for a specific purpose",
    "exampleEn": "The ministry allocated substantial funds for pediatric vaccine research.",
    "exampleTr": "Bakanlık, çocuk aşı araştırmaları için önemli miktarda kaynak tahsis etti.",
    "synonyms": [
      "assign",
      "allot",
      "designate",
      "earmark"
    ],
    "sourceCategory": "YDS Pub / Pegem / Dilko"
  },
  {
    "term": "alleviate",
    "meaningsTr": [
      "hafifletmek",
      "dindirmek",
      "azaltmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To make suffering, deficiency, or a problem less severe",
    "exampleEn": "Emergency humanitarian aid helped alleviate hunger in drought-affected provinces.",
    "exampleTr": "Acil insani yardım, kuraklıktan etkilenen vilayetlerde açlığı hafifletmeye yardımcı oldu.",
    "synonyms": [
      "mitigate",
      "relieve",
      "ease",
      "soothe"
    ],
    "sourceCategory": "Modadil / Pelikan / Akın Dil"
  },
  {
    "term": "anticipate",
    "meaningsTr": [
      "ummak",
      "beklemek",
      "öngörmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To regard as probable; to expect or predict",
    "exampleEn": "Economists anticipate a gradual decline in national inflation rates by late autumn.",
    "exampleTr": "Ekonomistler sonbahar sonuna kadar ulusal enflasyon oranlarında kademeli bir düşüş öngörüyor.",
    "synonyms": [
      "expect",
      "foresee",
      "predict"
    ],
    "sourceCategory": "İrem / Remzi Hoca"
  },
  {
    "term": "apprehend",
    "meaningsTr": [
      "yakalamak (suçluyu)",
      "kavramak",
      "endişeyle beklemek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To arrest someone for a crime; to understand or perceive",
    "exampleEn": "Police officers managed to apprehend the suspect near the international border.",
    "exampleTr": "Polis memurları şüpheliyi uluslararası sınırın yakınında yakalamayı başardı.",
    "synonyms": [
      "arrest",
      "capture",
      "comprehend"
    ],
    "sourceCategory": "Yargı / Yediiklim / Pegem"
  },
  {
    "term": "ascertain",
    "meaningsTr": [
      "belirlemek",
      "kesinleştirmek",
      "tahkik etmek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To find something out for certain; to make sure of",
    "exampleEn": "Investigative reporters are trying to ascertain whether bribery took place.",
    "exampleTr": "Araştırmacı gazeteciler rüşvet olayının gerçekleşip gerçekleşmediğini kesinleştirmeye çalışıyor.",
    "synonyms": [
      "determine",
      "verify",
      "discover",
      "confirm"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "assimilate",
    "meaningsTr": [
      "özümsemek",
      "benimsemek",
      "sindirmek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To absorb and integrate people, ideas, or culture into a wider society",
    "exampleEn": "Immigrants frequently struggle to assimilate into unfamiliar linguistic communities.",
    "exampleTr": "Göçmenler sıklıkla alışılmadık dil topluluklarına entegre olmakta zorlanırlar.",
    "synonyms": [
      "absorb",
      "integrate",
      "incorporate"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "attribute to",
    "meaningsTr": [
      "-e bağlamak",
      "-e atfetmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To regard something as being caused by a specific circumstance or person",
    "exampleEn": "Scientists attribute the recent heatwaves directly to human-induced emissions.",
    "exampleTr": "Bilim insanları son sıcak hava dalgalarını doğrudan insan kaynaklı emisyonlara bağlıyor.",
    "synonyms": [
      "ascribe to",
      "credit to",
      "impute to"
    ],
    "sourceCategory": "Modadil / Akın Dil / YDS Pub"
  },
  {
    "term": "augment",
    "meaningsTr": [
      "artırmak",
      "çoğaltmak",
      "büyütmek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To make something greater by adding to it; to increase",
    "exampleEn": "He works weekend freelance shifts to augment his regular academic salary.",
    "exampleTr": "Düzenli akademik maaşını artırmak için hafta sonları serbest vardiyalarda çalışıyor.",
    "synonyms": [
      "increase",
      "expand",
      "enhance",
      "enlarge"
    ],
    "sourceCategory": "Pelikan / Yargı / ELS"
  },
  {
    "term": "coerce",
    "meaningsTr": [
      "baskı yapmak",
      "zorlamak"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To persuade an unwilling person to do something by using force or threats",
    "exampleEn": "Confessions obtained when witnesses are coerced are inadmissible in legal courts.",
    "exampleTr": "Tanıklar zorlanarak elde edilen itiraflar mahkemelerde delil olarak kabul edilemez.",
    "synonyms": [
      "force",
      "compel",
      "intimidate",
      "pressure"
    ],
    "sourceCategory": "Yargı / Pegem / Kritik"
  },
  {
    "term": "coincide with",
    "meaningsTr": [
      "çakışmak",
      "aynı zamana denk gelmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To occur at or during the same time as something else",
    "exampleEn": "The solar eclipse will coincide with the vernal equinox this year.",
    "exampleTr": "Güneş tutulması bu yıl ilkbahar ekinoksuyla aynı zamana denk gelecek.",
    "synonyms": [
      "overlap",
      "concur",
      "clash"
    ],
    "sourceCategory": "Remzi Hoca / İrem"
  },
  {
    "term": "commence",
    "meaningsTr": [
      "başlamak",
      "başlatmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To begin; to start an operation or event",
    "exampleEn": "The formal peace negotiations will commence promptly at ten in the morning.",
    "exampleTr": "Resmi barış müzakereleri sabah tam saat onda başlayacak.",
    "synonyms": [
      "begin",
      "start",
      "initiate",
      "launch"
    ],
    "sourceCategory": "Cambridge / Oxford"
  },
  {
    "term": "compensate for",
    "meaningsTr": [
      "telafi etmek",
      "tazmin etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To make up for something unwelcome or unpleasant",
    "exampleEn": "Nothing could fully compensate the families for their devastating human loss.",
    "exampleTr": "Hiçbir şey ailelerin yaşadığı yıkıcı insan kaybını tam olarak telafi edemezdi.",
    "synonyms": [
      "make up for",
      "offset",
      "reimburse"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "compile",
    "meaningsTr": [
      "derlemek",
      "toparlamak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To produce something by assembling information collected from other sources",
    "exampleEn": "Linguists compiled a comprehensive dictionary of endangered Anatolian dialects.",
    "exampleTr": "Dilbilimciler, nesli tükenmekte olan Anadolu lehçelerinden oluşan kapsamlı bir sözlük derlediler.",
    "synonyms": [
      "assemble",
      "collect",
      "gather",
      "compose"
    ],
    "sourceCategory": "Dilko / ELS / Pearson"
  },
  {
    "term": "comprise",
    "meaningsTr": [
      "-den oluşmak",
      "kapsamak",
      "içermek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To consist of; to be made up of",
    "exampleEn": "The Mediterranean archipelago comprises twelve inhabited volcanic islands.",
    "exampleTr": "Akdeniz takımadaları, meskun on iki volkanik adadan oluşur.",
    "synonyms": [
      "consist of",
      "include",
      "encompass"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "concur with",
    "meaningsTr": [
      "aynı fikirde olmak",
      "hemfikir olmak"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To agree with someone or a conclusion",
    "exampleEn": "Most geneticists concur with the findings published by the Oxford laboratory.",
    "exampleTr": "Genetikçilerin çoğu, Oxford laboratuvarı tarafından yayımlanan bulgularla hemfikirdir.",
    "synonyms": [
      "agree",
      "accord",
      "harmonize"
    ],
    "sourceCategory": "Remzi Hoca / Modadil"
  },
  {
    "term": "condemn",
    "meaningsTr": [
      "kınamak",
      "mahkum etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To express complete disapproval of; to sentence someone to punishment",
    "exampleEn": "World leaders gathered to condemn the unprovoked civilian airstrikes.",
    "exampleTr": "Dünya liderleri sebepsiz sivil hava saldırılarını kınamak üzere toplandı.",
    "synonyms": [
      "denounce",
      "censure",
      "criticize"
    ],
    "sourceCategory": "Benim Hocam / Pegem"
  },
  {
    "term": "conform to",
    "meaningsTr": [
      "uymak",
      "uyum sağlamak (standarda/kurala)"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To comply with rules, standards, or laws",
    "exampleEn": "Imported pharmaceutical products must strictly conform to European hygiene norms.",
    "exampleTr": "İthal farmasötik ürünler kesinlikle Avrupa hijyen normlarına uymalıdır.",
    "synonyms": [
      "comply",
      "adhere",
      "obey"
    ],
    "sourceCategory": "YDS Pub / Akın Dil"
  },
  {
    "term": "confront",
    "meaningsTr": [
      "yüzleşmek",
      "karşısına çıkmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To meet someone face to face with hostile intent; to face up to a problem",
    "exampleEn": "Societies must confront systemic corruption before economic growth can be sustained.",
    "exampleTr": "Toplumlar, ekonomik büyümenin sürdürülebilmesi için sistemik yolsuzlukla yüzleşmelidir.",
    "synonyms": [
      "face",
      "tackle",
      "encounter"
    ],
    "sourceCategory": "İrem / Hocawebde"
  },
  {
    "term": "consolidate",
    "meaningsTr": [
      "pekiştirmek",
      "güçlendirmek",
      "birleştirmek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To make something physically stronger or more solid; to combine into a single unit",
    "exampleEn": "The newly elected president moved quickly to consolidate political power.",
    "exampleTr": "Yeni seçilen cumhurbaşkanı siyasi gücünü pekiştirmek için hızla harekete geçti.",
    "synonyms": [
      "strengthen",
      "reinforce",
      "merge",
      "unify"
    ],
    "sourceCategory": "Pelikan / Yargı"
  },
  {
    "term": "curtail",
    "meaningsTr": [
      "kısmak",
      "azaltmak",
      "sınırlandırmak"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To reduce in extent or quantity; to impose a restriction on",
    "exampleEn": "Budget shortfalls forced the state university to curtail recreational programs.",
    "exampleTr": "Bütçe açıkları, devlet üniversitesini dinlence programlarını kısmaya zorladı.",
    "synonyms": [
      "reduce",
      "cut back",
      "diminish",
      "trim"
    ],
    "sourceCategory": "Modadil / Akın Dil"
  },
  {
    "term": "deteriorate",
    "meaningsTr": [
      "kötüleşmek",
      "bozulmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To become progressively worse in quality or condition",
    "exampleEn": "Without urgent structural repairs, the medieval castle walls will rapidly deteriorate.",
    "exampleTr": "Acil yapısal onarımlar olmadan, orta çağ kale duvarları hızla bozulacaktır.",
    "synonyms": [
      "worsen",
      "decline",
      "decay",
      "degenerate"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "disclose",
    "meaningsTr": [
      "açığa vurmak",
      "ifşa etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To make secret or new information known",
    "exampleEn": "Public officials are legally obligated to disclose their international business assets.",
    "exampleTr": "Kamu görevlileri yasal olarak uluslararası ticari varlıklarını ifşa etmekle yükümlüdür.",
    "synonyms": [
      "reveal",
      "uncover",
      "divulge"
    ],
    "sourceCategory": "Benim Hocam / Remzi Hoca"
  },
  {
    "term": "disperse",
    "meaningsTr": [
      "dağıtmak",
      "dağılmak",
      "yayılmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To distribute or spread over a wide area; to go or cause to go in different directions",
    "exampleEn": "Police deployed tear gas to disperse the aggressive gathering outside the consulate.",
    "exampleTr": "Polis, konsolosluk dışındaki saldırgan kalabalığı dağıtmak için göz yaşartıcı gaz kullandı.",
    "synonyms": [
      "scatter",
      "disseminate",
      "dissolve"
    ],
    "sourceCategory": "Yargı / Dilko"
  },
  {
    "term": "disseminate",
    "meaningsTr": [
      "yaymak (bilgi/fikir)",
      "saçmak"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To spread information, knowledge, or ideas widely",
    "exampleEn": "Online scholarly repositories disseminate cutting-edge medical papers without charge.",
    "exampleTr": "Çevrim içi akademik depolar, en ileri tıp makalelerini ücretsiz olarak yaymaktadır.",
    "synonyms": [
      "circulate",
      "distribute",
      "broadcast",
      "propagate"
    ],
    "sourceCategory": "Oxford / Cambridge / Pelikan"
  },
  {
    "term": "elicit",
    "meaningsTr": [
      "ortaya çıkarmak",
      "öğrenmek",
      "tepki çekmek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To evoke or draw out a response, answer, or fact from someone",
    "exampleEn": "Skillful cross-examination elicited a startling confession from the defendant.",
    "exampleTr": "Usta bir çapraz sorgulama, sanıktan şaşırtıcı bir itiraf ortaya çıkardı.",
    "synonyms": [
      "draw out",
      "extract",
      "evoke"
    ],
    "sourceCategory": "Akın Dil / Modadil / YDS Pub"
  },
  {
    "term": "eradicate",
    "meaningsTr": [
      "kökünü kazımak",
      "tamamen yok etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To destroy completely; to put an end to",
    "exampleEn": "Global immunization campaigns successfully eradicated smallpox in the late twentieth century.",
    "exampleTr": "Küresel bağışıklama kampanyaları, yirminci yüzyılın sonlarında çiçek hastalığını başarıyla yok etti.",
    "synonyms": [
      "eliminate",
      "wipe out",
      "exterminate",
      "uproot"
    ],
    "sourceCategory": "İrem / Remzi Hoca / Pelikan"
  },
  {
    "term": "facilitate",
    "meaningsTr": [
      "kolaylaştırmak",
      "olanak sağlamak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To make an action or process easy or easier",
    "exampleEn": "Modern satellite communications facilitate rapid disaster relief coordination.",
    "exampleTr": "Modern uydu haberleşmesi, hızlı afet yardım koordinasyonunu kolaylaştırır.",
    "synonyms": [
      "ease",
      "expedite",
      "promote",
      "aid"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "hamper",
    "meaningsTr": [
      "engellemek",
      "köstek olmak",
      "aksatmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To hinder or impede the movement or progress of",
    "exampleEn": "Freezing blizzard conditions severely hampered mountain rescue attempts.",
    "exampleTr": "Dondurucu tipi koşulları, dağ kurtarma girişimlerini ciddi şekilde engelledi.",
    "synonyms": [
      "hinder",
      "impede",
      "obstruct",
      "thwart"
    ],
    "sourceCategory": "Modadil / Akın Dil"
  },
  {
    "term": "jeopardize",
    "meaningsTr": [
      "tehlikeye atmak",
      "riske sokmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To put someone or something into a situation in which there is a danger of loss, harm, or failure",
    "exampleEn": "A reckless public announcement could jeopardize sensitive diplomatic negotiations.",
    "exampleTr": "Pervasızca yapılan bir kamuoyu açıklaması, hassas diplomatik müzakereleri tehlikeye atabilir.",
    "synonyms": [
      "endanger",
      "threaten",
      "risk",
      "imperil"
    ],
    "sourceCategory": "Benim Hocam / Pegem"
  },
  {
    "term": "mitigate",
    "meaningsTr": [
      "hafifletmek",
      "azaltmak",
      "yatıştırmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To make something less severe, serious, or painful",
    "exampleEn": "Planting urban forests helps mitigate the severe heat island effect in metropolitan centres.",
    "exampleTr": "Kentsel ormanlar dikmek, metropol merkezlerindeki şiddetli ısı adası etkisini hafifletmeye yardımcı olur.",
    "synonyms": [
      "alleviate",
      "reduce",
      "diminish",
      "lessen"
    ],
    "sourceCategory": "YDS Core / Tüm Yayınlar"
  },
  {
    "term": "ambiguous",
    "meaningsTr": [
      "muğlak",
      "belirsiz",
      "çift anlamlı"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Open to more than one interpretation; having a double meaning",
    "exampleEn": "The ceasefire agreement contains several ambiguous clauses that could spark new disputes.",
    "exampleTr": "Ateşkes anlaşması, yeni anlaşmazlıkları tetikleyebilecek birkaç muğlak madde içeriyor.",
    "synonyms": [
      "vague",
      "unclear",
      "equivocal",
      "obscure"
    ],
    "sourceCategory": "ODTÜ GV / Akın Dil"
  },
  {
    "term": "arduous",
    "meaningsTr": [
      "çetin",
      "meşakkatli",
      "zorlu"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Involving or requiring strenuous effort; difficult and tiring",
    "exampleEn": "Climbing Mount Everest requires months of arduous physical training.",
    "exampleTr": "Everest Dağı'na tırmanmak aylarca süren meşakkatli fiziksel antrenman gerektirir.",
    "synonyms": [
      "strenuous",
      "laborious",
      "exhausting",
      "demanding"
    ],
    "sourceCategory": "Remzi Hoca / İrem"
  },
  {
    "term": "coherent",
    "meaningsTr": [
      "tutarlı",
      "mantıklı",
      "bağlantılı"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Logical and consistent; argued or thought out well",
    "exampleEn": "The committee presented a coherent strategy to combat regional water shortages.",
    "exampleTr": "Komite, bölgesel su kıtlığıyla mücadele etmek için tutarlı bir strateji sundu.",
    "synonyms": [
      "logical",
      "consistent",
      "lucid",
      "cogent"
    ],
    "sourceCategory": "Cambridge / Oxford"
  },
  {
    "term": "conspicuous",
    "meaningsTr": [
      "göze çarpan",
      "dikkat çekici"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Clearly visible; attracting notice or attention",
    "exampleEn": "There was a conspicuous absence of senior officials at the controversial press briefing.",
    "exampleTr": "Tartışmalı basın toplantısında üst düzey yetkililerin göze çarpan bir yokluğu vardı.",
    "synonyms": [
      "noticeable",
      "prominent",
      "salient",
      "striking"
    ],
    "sourceCategory": "Pelikan / Yargı"
  },
  {
    "term": "detrimental",
    "meaningsTr": [
      "zararlı",
      "hasar veren"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Tending to cause harm or damage",
    "exampleEn": "Prolonged exposure to microplastics produces detrimental effects on marine ecosystems.",
    "exampleTr": "Mikroplastiklere uzun süreli maruz kalma, deniz ekosistemleri üzerinde zararlı etkiler yaratır.",
    "synonyms": [
      "harmful",
      "damaging",
      "injurious",
      "pernicious"
    ],
    "sourceCategory": "Modadil / Akın Dil"
  },
  {
    "term": "diligent",
    "meaningsTr": [
      "çalışkan",
      "özenli",
      "gayretli"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Having or showing care and conscientiousness in one's work or duties",
    "exampleEn": "Diligent archival research allowed historians to uncover forgotten manuscripts.",
    "exampleTr": "Özenli arşiv araştırması, tarihçilerin unutulmuş el yazmalarını gün ışığına çıkarmasını sağladı.",
    "synonyms": [
      "hardworking",
      "meticulous",
      "conscientious",
      "assiduous"
    ],
    "sourceCategory": "Benim Hocam / Pegem"
  },
  {
    "term": "elusive",
    "meaningsTr": [
      "ele avuca sığmaz",
      "yakalanması/anlaşılması zor"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Difficult to find, catch, or achieve; difficult to remember",
    "exampleEn": "A definitive biological cure for Alzheimer's disease remains frustratingly elusive.",
    "exampleTr": "Alzheimer hastalığı için kesin bir biyolojik tedavi, ne yazık ki hala yakalanması zor olmaya devam ediyor.",
    "synonyms": [
      "evasive",
      "intangible",
      "fleeting"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "eminent",
    "meaningsTr": [
      "seçkin",
      "seçkin ve ünlü",
      "önde gelen"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Famous and respected within a particular sphere; distinguished",
    "exampleEn": "The university invited several eminent biochemists to deliver keynote lectures.",
    "exampleTr": "Üniversite, açılış konuşmalarını yapmaları için birkaç seçkin biyokimyacıyı davet etti.",
    "synonyms": [
      "distinguished",
      "renowned",
      "prominent",
      "illustrious"
    ],
    "sourceCategory": "YDS Pub / Dilko"
  },
  {
    "term": "feasible",
    "meaningsTr": [
      "uygulanabilir",
      "yapılabilir",
      "olası"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Possible to do easily or conveniently; plausible",
    "exampleEn": "Engineers confirmed that generating power entirely through offshore wind is economically feasible.",
    "exampleTr": "Mühendisler, enerjinin tamamen açık deniz rüzgarıyla üretilmesinin ekonomik olarak uygulanabilir olduğunu doğruladı.",
    "synonyms": [
      "viable",
      "practicable",
      "workable",
      "achievable"
    ],
    "sourceCategory": "Remzi Hoca / Modadil"
  },
  {
    "term": "formidable",
    "meaningsTr": [
      "heybetli",
      "korkutan",
      "alt edilmesi güç"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Inspiring fear or respect through being impressively large, powerful, or capable",
    "exampleEn": "The defending world champions represent a formidable opponent for any young team.",
    "exampleTr": "Savunmadaki dünya şampiyonları, her genç takım için alt edilmesi güç bir rakibi temsil ediyor.",
    "synonyms": [
      "daunting",
      "intimidating",
      "fearsome",
      "mighty"
    ],
    "sourceCategory": "Pelikan / Yargı"
  },
  {
    "term": "futile",
    "meaningsTr": [
      "nafile",
      "boşuna",
      "sonuçsuz"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Incapable of producing any useful result; pointless",
    "exampleEn": "All rescue efforts proved futile as the burning wooden structure collapsed.",
    "exampleTr": "Yanan ahşap yapının çökmesiyle tüm kurtarma çabaları nafile çıktı.",
    "synonyms": [
      "pointless",
      "useless",
      "vain",
      "fruitless"
    ],
    "sourceCategory": "Akın Dil / İrem"
  },
  {
    "term": "indispensable",
    "meaningsTr": [
      "vazgeçilmez",
      "olmazsa olmaz"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Absolutely necessary; essential",
    "exampleEn": "Clean drinking water and proper sanitation are indispensable to human survival.",
    "exampleTr": "Temiz içme suyu ve uygun sanitasyon, insanın hayatta kalması için vazgeçilmezdir.",
    "synonyms": [
      "essential",
      "crucial",
      "vital",
      "imperative"
    ],
    "sourceCategory": "Tüm Yayınlar / YDS Core"
  },
  {
    "term": "inevitable",
    "meaningsTr": [
      "kaçınılmaz",
      "çaresiz"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Certain to happen; unavoidable",
    "exampleEn": "With automated algorithms expanding, some job displacement appears inevitable.",
    "exampleTr": "Otomatik algoritmaların genişlemesiyle birlikte bazı iş kayıpları kaçınılmaz görünüyor.",
    "synonyms": [
      "unavoidable",
      "inescapable",
      "inexorable"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "lucrative",
    "meaningsTr": [
      "kazançlı",
      "karlı"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Producing a great deal of profit",
    "exampleEn": "Renewable energy technology has grown into an exceptionally lucrative global industry.",
    "exampleTr": "Yenilenebilir enerji teknolojisi, olağanüstü kazançlı bir küresel sektöre dönüştü.",
    "synonyms": [
      "profitable",
      "rewarding",
      "remunerative"
    ],
    "sourceCategory": "Benim Hocam / Pegem"
  },
  {
    "term": "meticulous",
    "meaningsTr": [
      "titiz",
      "kılı kırk yaran",
      "aşırı özenli"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Showing great attention to detail; very careful and precise",
    "exampleEn": "The forensic analyst followed meticulous procedures to avoid contaminating the DNA sample.",
    "exampleTr": "Adli analist, DNA örneğini kirletmekten kaçınmak için son derece titiz prosedürler izledi.",
    "synonyms": [
      "thorough",
      "painstaking",
      "scrupulous",
      "exacting"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "prevalent",
    "meaningsTr": [
      "yaygın",
      "hüküm süren"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Widespread in a particular area or at a particular time",
    "exampleEn": "Vitamin D deficiency is particularly prevalent among urban desk workers.",
    "exampleTr": "D vitamini eksikliği, özellikle şehirli masa başı çalışanları arasında yaygındır.",
    "synonyms": [
      "widespread",
      "common",
      "pervasive",
      "rampant"
    ],
    "sourceCategory": "Tüm Yayınlar / Pelikan"
  },
  {
    "term": "ubiquitous",
    "meaningsTr": [
      "her yerde bulunan",
      "yaygın"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Present, appearing, or found everywhere",
    "exampleEn": "Smartphones have become so ubiquitous that life without them seems unimaginable.",
    "exampleTr": "Akıllı telefonlar o kadar her yerde bulunur hale geldi ki, onlarsız bir hayat hayal bile edilemez görünüyor.",
    "synonyms": [
      "omnipresent",
      "pervasive",
      "universal"
    ],
    "sourceCategory": "Cambridge / Oxford / YDS Pub"
  },
  {
    "term": "vulnerable to",
    "meaningsTr": [
      "-e karşı savunmasız",
      "kırılgan"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Susceptible to physical or emotional attack or harm",
    "exampleEn": "Elderly individuals with chronic illnesses are exceptionally vulnerable to respiratory infections.",
    "exampleTr": "Kronik hastalığı olan yaşlı bireyler, solunum yolu enfeksiyonlarına karşı son derece savunmasızdır.",
    "synonyms": [
      "susceptible",
      "defenseless",
      "exposed",
      "fragile"
    ],
    "sourceCategory": "Tüm Yayınlar / YDS Core"
  },
  {
    "term": "account for",
    "meaningsTr": [
      "oluşturmak (oran)",
      "açıklamak (nedenini)"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To form a particular proportion of; to explain the cause of",
    "exampleEn": "Renewable energy installations currently account for nearly thirty percent of total national electricity.",
    "exampleTr": "Yenilenebilir enerji tesisleri şu anda toplam ulusal elektriğin yaklaşık yüzde otuzunu oluşturuyor.",
    "synonyms": [
      "constitute",
      "make up",
      "explain"
    ],
    "sourceCategory": "Tüm Yayınlar / YDS 2013-2026"
  },
  {
    "term": "break through",
    "meaningsTr": [
      "çığır açmak",
      "engeli yarıp geçmek"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To make a sudden, major advance or discovery; to force a way through",
    "exampleEn": "Biologists finally broke through when they isolated the gene responsible for cellular repair.",
    "exampleTr": "Biyologlar, hücresel onarımdan sorumlu geni izole ettiklerinde nihayet çığır açtılar.",
    "synonyms": [
      "advance",
      "penetrate",
      "discover"
    ],
    "sourceCategory": "Remzi Hoca / İrem"
  },
  {
    "term": "bring about",
    "meaningsTr": [
      "yol açmak",
      "sebep olmak",
      "meydana getirmek"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To cause something to happen",
    "exampleEn": "The scientific renaissance brought about massive changes in medical diagnostics.",
    "exampleTr": "Bilimsel rönesans, tıbbi teşhiste muazzam değişikliklere yol açtı.",
    "synonyms": [
      "cause",
      "lead to",
      "trigger",
      "give rise to"
    ],
    "sourceCategory": "Akın Dil / Modadil / YDS Pub"
  },
  {
    "term": "call off",
    "meaningsTr": [
      "iptal etmek"
    ],
    "type": "phrasal verb",
    "level": "B1",
    "definitionEn": "To cancel an event or agreement",
    "exampleEn": "The ministry decided to call off the international symposium due to air traffic strikes.",
    "exampleTr": "Bakanlık, hava trafiği grevleri nedeniyle uluslararası sempozyumu iptal etme kararı aldı.",
    "synonyms": [
      "cancel",
      "abandon",
      "abort"
    ],
    "sourceCategory": "Tüm Yayınlar / YDS Core"
  },
  {
    "term": "carry out",
    "meaningsTr": [
      "yürütmek",
      "uygulamak",
      "gerçekleştirmek"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To perform or complete a planned task or experiment",
    "exampleEn": "Researchers will carry out extensive laboratory trials before testing the vaccine on humans.",
    "exampleTr": "Araştırmacılar aşıyı insanlar üzerinde denemeden önce kapsamlı laboratuvar deneyleri yürütecekler.",
    "synonyms": [
      "conduct",
      "execute",
      "implement",
      "perform"
    ],
    "sourceCategory": "Tüm Yayınlar / YDS 2013-2026"
  },
  {
    "term": "cope with",
    "meaningsTr": [
      "başa çıkmak",
      "üstesinden gelmek"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To deal effectively with something difficult",
    "exampleEn": "Public hospitals had to develop emergency strategies to cope with the surge of patients.",
    "exampleTr": "Devlet hastaneleri, hasta akınıyla başa çıkabilmek için acil durum stratejileri geliştirmek zorunda kaldı.",
    "synonyms": [
      "handle",
      "manage",
      "deal with",
      "tackle"
    ],
    "sourceCategory": "Modadil / Remzi Hoca"
  },
  {
    "term": "cut down on",
    "meaningsTr": [
      "kısmak",
      "azaltmak (tüketim)"
    ],
    "type": "phrasal verb",
    "level": "B1",
    "definitionEn": "To reduce the size, amount, or quantity of something consumed",
    "exampleEn": "Doctors advised the cardiac patient to cut down on saturated fats and refined sugars.",
    "exampleTr": "Doktorlar kalp hastasına doymuş yağları ve rafine şekerleri kısmasını tavsiye etti.",
    "synonyms": [
      "reduce",
      "curtail",
      "lessen"
    ],
    "sourceCategory": "Benim Hocam / Pegem"
  },
  {
    "term": "dispose of",
    "meaningsTr": [
      "elden çıkarmak",
      "atmak (çöp/atık)"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To get rid of by throwing away or giving or selling to someone else",
    "exampleEn": "Hospitals must carefully dispose of hazardous bio-waste according to national laws.",
    "exampleTr": "Hastaneler tehlikeli biyolojik atıkları ulusal yasalara uygun olarak dikkatle elden çıkarmalıdır.",
    "synonyms": [
      "discard",
      "throw away",
      "eliminate"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "give rise to",
    "meaningsTr": [
      "yol açmak",
      "doğurmak",
      "tetiklemek"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To cause or induce something to exist or happen",
    "exampleEn": "Unregulated industrial zoning gave rise to serious urban groundwater contamination.",
    "exampleTr": "Denetimsiz sanayi imarı, ciddi kentsel yer altı suyu kirliliğine yol açtı.",
    "synonyms": [
      "cause",
      "bring about",
      "provoke",
      "spark"
    ],
    "sourceCategory": "Cambridge / Oxford / Akın Dil"
  },
  {
    "term": "make up for",
    "meaningsTr": [
      "telafi etmek"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To compensate for something lost, missed, or lacking",
    "exampleEn": "Her exceptional diligence and enthusiasm made up for her relative lack of field experience.",
    "exampleTr": "Olağanüstü gayreti ve şevki, sahadaki görece tecrübe eksikliğini telafi etti.",
    "synonyms": [
      "compensate for",
      "offset"
    ],
    "sourceCategory": "İrem / Yargı / Pelikan"
  },
  {
    "term": "put off",
    "meaningsTr": [
      "ertelemek"
    ],
    "type": "phrasal verb",
    "level": "B1",
    "definitionEn": "To postpone something to a later date",
    "exampleEn": "The executive board agreed to put off the product release until market conditions improve.",
    "exampleTr": "Yönetim kurulu, piyasa koşulları düzelene kadar ürün lansmanını ertelemeyi kabul etti.",
    "synonyms": [
      "postpone",
      "delay",
      "defer"
    ],
    "sourceCategory": "Tüm Yayınlar / YDS Core"
  },
  {
    "term": "rely on",
    "meaningsTr": [
      "güvenmek",
      "bel bağlamak",
      "dayanmak"
    ],
    "type": "phrasal verb",
    "level": "B1",
    "definitionEn": "To depend on with full trust or confidence",
    "exampleEn": "Developing nations heavily rely on international aid during natural humanitarian emergencies.",
    "exampleTr": "Gelişmekte olan ülkeler doğal insani acil durumlarda büyük ölçüde uluslararası yardıma bel bağlarlar.",
    "synonyms": [
      "depend on",
      "count on",
      "bank on"
    ],
    "sourceCategory": "Tüm Yayınlar / YDS Core"
  },
  {
    "term": "rule out",
    "meaningsTr": [
      "elemek",
      "göz ardı etmek",
      "ihtimal dışı bırakmak"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To exclude or eliminate something from consideration",
    "exampleEn": "Detectives cannot rule out arson until the structural engineering report is finalized.",
    "exampleTr": "Dedektifler, yapı mühendisliği raporu sonuçlanana kadar kundaklama ihtimalini eleyemezler.",
    "synonyms": [
      "exclude",
      "eliminate",
      "dismiss"
    ],
    "sourceCategory": "Remzi Hoca / Modadil"
  },
  {
    "term": "stem from",
    "meaningsTr": [
      "-den kaynaklanmak",
      "-den ileri gelmek"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To originate or derive from a specific source",
    "exampleEn": "Much of the current social unrest stems from decades of deepening income inequality.",
    "exampleTr": "Mevcut toplumsal huzursuzluğun büyük bir kısmı, onlarca yıldır derinleşen gelir eşitsizliğinden kaynaklanmaktadır.",
    "synonyms": [
      "arise from",
      "originate from",
      "derive from"
    ],
    "sourceCategory": "Akın Dil / ODTÜ GV"
  },
  {
    "term": "wipe out",
    "meaningsTr": [
      "yok etmek",
      "kökünü kazımak"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To destroy completely or eradicate",
    "exampleEn": "The catastrophic volcanic explosion wiped out several ancient coastal settlements.",
    "exampleTr": "Felaket boyutundaki volkanik patlama, birkaç antik kıyı yerleşimini tamamen yok etti.",
    "synonyms": [
      "eradicate",
      "destroy",
      "annihilate"
    ],
    "sourceCategory": "Benim Hocam / YDS Pub"
  },
  {
    "term": "adversity",
    "meaningsTr": [
      "sıkıntı",
      "güçlük",
      "talihsizlik"
    ],
    "type": "isim",
    "level": "C1",
    "definitionEn": "Difficulties or misfortune",
    "exampleEn": "Resilience is the psychological ability to bounce back and thrive in the face of adversity.",
    "exampleTr": "Direnç, sıkıntılar karşısında toparlanıp gelişebilme yönündeki psikolojik kabiliyettir.",
    "synonyms": [
      "hardship",
      "misfortune",
      "tribulation"
    ],
    "sourceCategory": "ODTÜ GV / Pelikan"
  },
  {
    "term": "breakthrough",
    "meaningsTr": [
      "büyük buluş",
      "çığır açıcı gelişme"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "A sudden, dramatic, and important discovery or development",
    "exampleEn": "The invention of mRNA vaccines represents an unprecedented scientific breakthrough.",
    "exampleTr": "mRNA aşılarının icadı, eşi görülmemiş bilimsel bir çığır açıcı gelişmeyi temsil eder.",
    "synonyms": [
      "advance",
      "innovation",
      "discovery"
    ],
    "sourceCategory": "Tüm Yayınlar / YDS Core"
  },
  {
    "term": "consensus",
    "meaningsTr": [
      "fikir birliği",
      "uzlaşma"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "A general agreement among a group of people",
    "exampleEn": "Scientists have reached an overwhelming consensus on human influence upon climate change.",
    "exampleTr": "Bilim insanları, insanın iklim değişikliği üzerindeki etkisi konusunda ezici bir fikir birliğine vardılar.",
    "synonyms": [
      "agreement",
      "accord",
      "harmony",
      "unanimity"
    ],
    "sourceCategory": "Cambridge / Oxford / Akın Dil"
  },
  {
    "term": "discrepancy",
    "meaningsTr": [
      "çelişki",
      "uyumsuzluk",
      "farklılık"
    ],
    "type": "isim",
    "level": "C1",
    "definitionEn": "A lack of compatibility or similarity between two or more facts",
    "exampleEn": "Auditors noted a puzzling discrepancy between the recorded inventory and actual stock.",
    "exampleTr": "Denetçiler, kayıtlara geçen envanter ile fiili stok arasında kafa karıştırıcı bir çelişki fark ettiler.",
    "synonyms": [
      "inconsistency",
      "difference",
      "divergence"
    ],
    "sourceCategory": "Remzi Hoca / Yargı / Modadil"
  },
  {
    "term": "infrastructure",
    "meaningsTr": [
      "altyapı"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "The basic physical and organizational structures and facilities needed for the operation of a society",
    "exampleEn": "Massive public investment is required to modernize aging railway infrastructure.",
    "exampleTr": "Eski demiryolu altyapısını modernize etmek için muazzam kamu yatırımı gerekmektedir.",
    "synonyms": [
      "facilities",
      "framework",
      "substructure"
    ],
    "sourceCategory": "Benim Hocam / Pegem / Dilko"
  },
  {
    "term": "drastically",
    "meaningsTr": [
      "ciddi ve köklü biçimde",
      "şiddetle"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "In an extreme way that has a sudden, serious or noticeable effect",
    "exampleEn": "Technological automation has drastically altered employment trends in manufacturing.",
    "exampleTr": "Teknolojik otomasyon, imalat sektöründeki istihdam eğilimlerini ciddi ve köklü biçimde değiştirdi.",
    "synonyms": [
      "radically",
      "substantially",
      "dramatically"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "inevitably",
    "meaningsTr": [
      "kaçınılmaz olarak",
      "ister istemez"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "As is certain to happen; unavoidably",
    "exampleEn": "Unchecked urbanization will inevitably increase pressure upon municipal water supplies.",
    "exampleTr": "Kontrolsüz şehirleşme, kaçınılmaz olarak belediye su kaynakları üzerindeki baskıyı artıracaktır.",
    "synonyms": [
      "unavoidably",
      "inescapably"
    ],
    "sourceCategory": "Tüm Yayınlar / YDS Core"
  },
  {
    "term": "substantially",
    "meaningsTr": [
      "büyük ölçüde",
      "önemli derecede"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "To a great or significant extent; considerably",
    "exampleEn": "The new solar panels have substantially reduced operating electricity expenses.",
    "exampleTr": "Yeni güneş panelleri, işletmenin elektrik giderlerini büyük ölçüde azalttı.",
    "synonyms": [
      "considerably",
      "significantly",
      "vastly"
    ],
    "sourceCategory": "Akın Dil / Modadil / YDS Pub"
  },
  {
    "term": "figure out",
    "meaningsTr": [
      "anlamak",
      "çözmek",
      "kavramak"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To understand or solve something after thought or investigation",
    "exampleEn": "Geneticists are attempting to figure out the exact mutation triggering hereditary disorders.",
    "exampleTr": "Genetikçiler, kalıtsal bozuklukları tetikleyen kesin mutasyonu çözmeye çalışıyorlar.",
    "synonyms": [
      "understand",
      "solve",
      "decipher",
      "comprehend"
    ],
    "collocations": [
      "figure out a solution",
      "figure out how"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "give up",
    "meaningsTr": [
      "bırakmak",
      "vazgeçmek",
      "pes etmek"
    ],
    "type": "phrasal verb",
    "level": "B1",
    "definitionEn": "To cease making an effort; to stop doing or using something",
    "exampleEn": "Despite severe financial setbacks, the archeologist refused to give up his excavation.",
    "exampleTr": "Ciddi mali aksaklıklara rağmen arkeolog kazı çalışmalarından vazgeçmeyi reddetti.",
    "synonyms": [
      "abandon",
      "renounce",
      "surrender"
    ],
    "collocations": [
      "give up smoking",
      "give up hope"
    ],
    "sourceCategory": "Benim Hocam / YDS Pub"
  },
  {
    "term": "keep up with",
    "meaningsTr": [
      "ayak uydurmak",
      "hızına yetişmek"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To move or progress at the same rate as someone or something",
    "exampleEn": "Developing economies must modernize their digital infrastructure to keep up with global standards.",
    "exampleTr": "Gelişmekte olan ekonomiler, küresel standartlara ayak uydurabilmek için dijital altyapılarını modernize etmelidir.",
    "synonyms": [
      "pace with",
      "match",
      "stay abreast of"
    ],
    "collocations": [
      "keep up with changes",
      "keep up with technology"
    ],
    "sourceCategory": "Remzi Hoca / İrem"
  },
  {
    "term": "look into",
    "meaningsTr": [
      "incelemek",
      "araştırmak"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To investigate the details of a problem or situation",
    "exampleEn": "The parliamentary commission was instructed to look into corporate environmental violations.",
    "exampleTr": "Meclis komisyonuna, şirketlerin çevre ihlallerini inceleme talimatı verildi.",
    "synonyms": [
      "investigate",
      "examine",
      "scrutinize",
      "probe"
    ],
    "collocations": [
      "look into the matter",
      "look into allegations"
    ],
    "sourceCategory": "Pelikan / YDS Pub"
  },
  {
    "term": "put up with",
    "meaningsTr": [
      "katlanmak",
      "tahammül etmek"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To tolerate or endure an unpleasant situation or person",
    "exampleEn": "Residents living near the industrial harbor can no longer put up with severe noise pollution.",
    "exampleTr": "Sanayi limanının yakınında yaşayan bölge sakinleri artık şiddetli gürültü kirliliğine katlanamıyor.",
    "synonyms": [
      "tolerate",
      "endure",
      "bear",
      "stand"
    ],
    "collocations": [
      "put up with noise",
      "put up with conditions"
    ],
    "sourceCategory": "Remzi Hoca / Modadil"
  },
  {
    "term": "run out of",
    "meaningsTr": [
      "tükenmek",
      "bitmek (kaynak/zaman)"
    ],
    "type": "phrasal verb",
    "level": "B1",
    "definitionEn": "To use up all of one's supply of something",
    "exampleEn": "Unless alternative aquifers are tapped, the metropolis could run out of potable water by next summer.",
    "exampleTr": "Alternatif akiferler açılmadığı takdirde, metropolün içilebilir suyu gelecek yaza kadar tükenebilir.",
    "synonyms": [
      "exhaust",
      "deplete",
      "drain"
    ],
    "collocations": [
      "run out of time",
      "run out of money"
    ],
    "sourceCategory": "YDS Pub / Dilko"
  },
  {
    "term": "turn down",
    "meaningsTr": [
      "reddetmek",
      "geri çevirmek"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To reject or refuse an offer, request, or proposal",
    "exampleEn": "The board of directors turned down the lucrative takeover offer from foreign competitors.",
    "exampleTr": "Yönetim kurulu, yabancı rakiplerden gelen cazip devralma teklifini reddetti.",
    "synonyms": [
      "reject",
      "refuse",
      "decline",
      "dismiss"
    ],
    "collocations": [
      "turn down an offer",
      "turn down an invitation"
    ],
    "sourceCategory": "Remzi Hoca / Yargı"
  },
  {
    "term": "acquire",
    "meaningsTr": [
      "edinmek",
      "kazanmak",
      "elde etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To buy, obtain, or develop an asset, skill, or quality",
    "exampleEn": "Children acquire second-language fluency much faster through interactive immersion.",
    "exampleTr": "Çocuklar, etkileşimli daldırma yöntemiyle ikinci dil akıcılığını çok daha hızlı edinirler.",
    "synonyms": [
      "obtain",
      "gain",
      "attain",
      "procure"
    ],
    "collocations": [
      "acquire knowledge",
      "acquire skills"
    ],
    "sourceCategory": "Cambridge / Oxford / Akın Dil"
  },
  {
    "term": "alter",
    "meaningsTr": [
      "değiştirmek",
      "başkalaşmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To change or cause to change in character or composition",
    "exampleEn": "Genetic engineering can alter plant traits to resist extreme climatic droughts.",
    "exampleTr": "Genetik mühendisliği, aşırı iklimsel kuraklıklara direnmek amacıyla bitki özelliklerini değiştirebilir.",
    "synonyms": [
      "modify",
      "change",
      "transform",
      "adjust"
    ],
    "collocations": [
      "alter plans",
      "alter behavior"
    ],
    "sourceCategory": "Modadil / Remzi Hoca"
  },
  {
    "term": "assess",
    "meaningsTr": [
      "değerlendirmek",
      "paha biçmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To evaluate the nature, ability, or quality of something",
    "exampleEn": "Psychologists designed comprehensive questionnaires to assess cognitive burnout in students.",
    "exampleTr": "Psikologlar, öğrencilerde bilişsel tükenmişliği değerlendirmek için kapsamlı anketler tasarladılar.",
    "synonyms": [
      "evaluate",
      "gauge",
      "appraise",
      "estimate"
    ],
    "collocations": [
      "assess the impact",
      "assess risks"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "attain",
    "meaningsTr": [
      "ulaşmak",
      "elde etmek",
      "erişmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To succeed in achieving a goal or reaching an advanced state",
    "exampleEn": "Only through relentless dedication did the physicist attain international scientific acclaim.",
    "exampleTr": "Fizikçi, ancak amansız bir adanmışlık sayesinde uluslararası bilimsel takdire ulaştı.",
    "synonyms": [
      "achieve",
      "reach",
      "accomplish",
      "gain"
    ],
    "collocations": [
      "attain a goal",
      "attain success"
    ],
    "sourceCategory": "Akın Dil / Pelikan"
  },
  {
    "term": "cease",
    "meaningsTr": [
      "durmak",
      "sona ermek",
      "durdurmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To bring or come to an end; stop",
    "exampleEn": "Both warring factions agreed to cease military hostilities along the border corridor.",
    "exampleTr": "Savaşan her iki grup da sınır koridoru boyunca askeri çatışmaları durdurmayı kabul etti.",
    "synonyms": [
      "stop",
      "halt",
      "terminate",
      "discontinue"
    ],
    "collocations": [
      "cease operations",
      "cease fire"
    ],
    "sourceCategory": "Dilko / Yargı"
  },
  {
    "term": "coincide",
    "meaningsTr": [
      "aynı zamana rastlamak",
      "çakışmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To occur at or during the same time; correspond in nature",
    "exampleEn": "The publication of the revolutionary monograph coincided with the astronomer's centennial jubilee.",
    "exampleTr": "Devrim niteliğindeki monografinin yayımlanması, gökbilimcinin yüzüncü yıl jübilesiyle çakıştı.",
    "synonyms": [
      "concur",
      "overlap",
      "synchronize"
    ],
    "collocations": [
      "coincide with",
      "dates coincide"
    ],
    "sourceCategory": "Cambridge / Modadil"
  },
  {
    "term": "compensate",
    "meaningsTr": [
      "telafi etmek",
      "tazmin etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To give something, especially money, in recognition of loss or injury",
    "exampleEn": "The insurance consortium agreed to compensate farmers for devastating crop losses caused by hail.",
    "exampleTr": "Sigorta konsorsiyumu, dolu fırtınasının neden olduğu yıkıcı ürün kayıpları için çiftçilere tazminat ödemeyi kabul etti.",
    "synonyms": [
      "reimburse",
      "indemnify",
      "make up for"
    ],
    "collocations": [
      "compensate for damages",
      "compensate victims"
    ],
    "sourceCategory": "YDS Pub / Remzi Hoca"
  },
  {
    "term": "conceive",
    "meaningsTr": [
      "tasarlamak",
      "tasavvur etmek",
      "kavramak"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To form a mental representation or concept of; devise",
    "exampleEn": "It is difficult to conceive how ancient civilizations transported monumental megaliths across mountains.",
    "exampleTr": "Eski uygarlıkların dağların üzerinden anıtsal megalitleri nasıl taşıdığını tasavvur etmek zordur.",
    "synonyms": [
      "envisage",
      "imagine",
      "devise",
      "conceptualize"
    ],
    "collocations": [
      "conceive an idea",
      "conceive a plan"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "confirm",
    "meaningsTr": [
      "doğrulamak",
      "onaylamak"
    ],
    "type": "fiil",
    "level": "B1",
    "definitionEn": "To establish the truth or correctness of something previously believed",
    "exampleEn": "Recent genomic sequencing confirmed that the fossil belonged to a previously uncataloged hominid.",
    "exampleTr": "Son genomik dizilim, fosilin daha önce kataloglanmamış bir insansıya ait olduğunu doğruladı.",
    "synonyms": [
      "verify",
      "substantiate",
      "corroborate",
      "validate"
    ],
    "collocations": [
      "confirm suspicions",
      "confirm findings"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "constitute",
    "meaningsTr": [
      "oluşturmak",
      "teşkil etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To be a part of a whole; form",
    "exampleEn": "Women constitute more than fifty-five percent of enrolled undergraduate cohorts in medical faculties.",
    "exampleTr": "Kadınlar, tıp fakültelerinde kayıtlı lisans gruplarının yüzde elli beşinden fazlasını oluşturmaktadır.",
    "synonyms": [
      "compose",
      "make up",
      "form",
      "comprise"
    ],
    "collocations": [
      "constitute a threat",
      "constitute a majority"
    ],
    "sourceCategory": "Cambridge / YDS Pub"
  },
  {
    "term": "contemplate",
    "meaningsTr": [
      "düşünmek",
      "tasarlamak",
      "kafa yormak"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To think profoundly and at length; consider",
    "exampleEn": "The urban planning council is contemplating the introduction of congestion fees in historic districts.",
    "exampleTr": "Şehir planlama konseyi, tarihi bölgelerde trafik sıkışıklığı ücreti getirmeyi derinlemesine düşünüyor.",
    "synonyms": [
      "consider",
      "ponder",
      "deliberate",
      "reflect upon"
    ],
    "collocations": [
      "contemplate the future",
      "contemplate resignation"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "contradict",
    "meaningsTr": [
      "çelişmek",
      "aksini iddia etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To deny the truth of a statement by asserting the opposite",
    "exampleEn": "Empirical field findings directly contradict the theoretical predictions made by early sociologists.",
    "exampleTr": "Ampirik saha bulguları, erken dönem sosyologların teorik tahminleriyle doğrudan çelişmektedir.",
    "synonyms": [
      "dispute",
      "refute",
      "conflict with",
      "counter"
    ],
    "collocations": [
      "contradict evidence",
      "contradict rumors"
    ],
    "sourceCategory": "Pelikan / Akın Dil"
  },
  {
    "term": "convey",
    "meaningsTr": [
      "aktarmak",
      "iletmek",
      "ifade etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To communicate a message or idea; transport",
    "exampleEn": "Poetry allows authors to convey nuanced emotional states that prose can seldom capture.",
    "exampleTr": "Şiir, yazarların düzyazının nadiren yakalayabildiği ince duygusal durumları aktarmalarını sağlar.",
    "synonyms": [
      "communicate",
      "express",
      "transmit",
      "impart"
    ],
    "collocations": [
      "convey a message",
      "convey an impression"
    ],
    "sourceCategory": "Modadil / Benim Hocam"
  },
  {
    "term": "deduce",
    "meaningsTr": [
      "sonuç çıkarmak",
      "tümdengelim yapmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To arrive at a fact or a conclusion by reasoning",
    "exampleEn": "From the chemical composition of the sediment, geologists deduced that an inland sea once existed.",
    "exampleTr": "Tortulun kimyasal bileşiminden yola çıkan jeologlar, bir zamanlar bir iç denizin var olduğu sonucunu çıkardılar.",
    "synonyms": [
      "infer",
      "conclude",
      "derive",
      "glean"
    ],
    "collocations": [
      "deduce from facts",
      "deduce a hypothesis"
    ],
    "sourceCategory": "Oxford / Dilko"
  },
  {
    "term": "demonstrate",
    "meaningsTr": [
      "göstermek",
      "kanıtlamak",
      "ispat etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To clearly show the existence or truth of something by giving proof or evidence",
    "exampleEn": "Clinical trials demonstrated the remarkable efficacy of the novel antiviral therapeutic agent.",
    "exampleTr": "Klinik deneyler, yeni antiviral terapötik ajanın kayda değer etkinliğini gösterdi.",
    "synonyms": [
      "show",
      "prove",
      "illustrate",
      "manifest"
    ],
    "collocations": [
      "demonstrate ability",
      "demonstrate conclusively"
    ],
    "sourceCategory": "YDS Pub / Remzi Hoca"
  },
  {
    "term": "deter",
    "meaningsTr": [
      "caydırıcı olmak",
      "vazgeçirmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To discourage someone from doing something through fear of the consequences",
    "exampleEn": "Severe judicial penalties are designed to deter individuals from engaging in white-collar tax evasion.",
    "exampleTr": "Ağır adli cezalar, bireyleri beyaz yakalı vergi kaçakçılığına kalkışmaktan caydırmak amacıyla tasarlanmıştır.",
    "synonyms": [
      "discourage",
      "dissuade",
      "prevent",
      "inhibit"
    ],
    "collocations": [
      "deter crime",
      "deter aggression"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "differentiate",
    "meaningsTr": [
      "ayırt etmek",
      "farklılaştırmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To recognize or ascertain what makes someone or something different",
    "exampleEn": "Trained ornithologists can readily differentiate related songbird species by their melodic cadences.",
    "exampleTr": "Eğitimli kuşbilimciler, akraba ötücü kuş türlerini melodik ritimlerinden kolayca ayırt edebilirler.",
    "synonyms": [
      "distinguish",
      "discriminate",
      "tell apart"
    ],
    "collocations": [
      "differentiate between",
      "differentiate from"
    ],
    "sourceCategory": "Cambridge / Pelikan"
  },
  {
    "term": "diminish",
    "meaningsTr": [
      "azalmak",
      "azaltmak",
      "küçülmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To make or become less",
    "exampleEn": "Prolonged social isolation can severely diminish a person's cognitive resilience and well-being.",
    "exampleTr": "Uzun süreli sosyal izolasyon, bir kişinin bilişsel direncini ve esenliğini ciddi şekilde azaltabilir.",
    "synonyms": [
      "decrease",
      "lessen",
      "reduce",
      "dwindle"
    ],
    "collocations": [
      "diminish over time",
      "diminish importance"
    ],
    "sourceCategory": "Benim Hocam / ODTÜ GV"
  },
  {
    "term": "discern",
    "meaningsTr": [
      "fark etmek",
      "ayırt etmek",
      "sezmek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To perceive or recognize something through the senses or intellect",
    "exampleEn": "Economists struggled to discern any coherent pattern amid the volatile commodity price swings.",
    "exampleTr": "Ekonomistler, dalgalı emtia fiyat hareketleri arasında tutarlı bir örüntü sezmekte zorlandılar.",
    "synonyms": [
      "perceive",
      "detect",
      "distinguish",
      "recognize"
    ],
    "collocations": [
      "discern differences",
      "discern the truth"
    ],
    "sourceCategory": "Reader at Work / Remzi Hoca"
  },
  {
    "term": "distort",
    "meaningsTr": [
      "çarpıtmak",
      "tahrif etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To pull or twist out of shape; give a misleading or false account or impression of",
    "exampleEn": "Partisan media outlets deliberately distorted the minister's remarks regarding demographic trends.",
    "exampleTr": "Taraflı medya organları, bakanın demografik eğilimlere ilişkin sözlerini kasten çarpıttı.",
    "synonyms": [
      "misrepresent",
      "falsify",
      "warp",
      "skew"
    ],
    "collocations": [
      "distort the truth",
      "distort facts"
    ],
    "sourceCategory": "YDS Pub / Modadil"
  },
  {
    "term": "eliminate",
    "meaningsTr": [
      "ortadan kaldırmak",
      "elemek"
    ],
    "type": "fiil",
    "level": "B1",
    "definitionEn": "To completely remove or get rid of something",
    "exampleEn": "Modern immunization programs have successfully eliminated smallpox from human populations.",
    "exampleTr": "Modern aşılama programları, çiçek hastalığını insan popülasyonlarından tamamen ortadan kaldırmıştır.",
    "synonyms": [
      "eradicate",
      "remove",
      "abolish",
      "terminate"
    ],
    "collocations": [
      "eliminate risks",
      "eliminate poverty"
    ],
    "sourceCategory": "Akın Dil / Cambridge"
  },
  {
    "term": "emphasize",
    "meaningsTr": [
      "vurgulamak",
      "üzerinde durmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To give special importance or prominence to something in speaking or writing",
    "exampleEn": "The pedagogical handbook emphasized the vital role of formative assessments in student mastery.",
    "exampleTr": "Pedagojik el kitabı, biçimlendirici değerlendirmelerin öğrenci başarısındaki hayati rolünü vurguladı.",
    "synonyms": [
      "stress",
      "underline",
      "highlight",
      "accentuate"
    ],
    "collocations": [
      "emphasize the importance",
      "emphasize that"
    ],
    "sourceCategory": "Oxford / Benim Hocam"
  },
  {
    "term": "enhance",
    "meaningsTr": [
      "geliştirmek",
      "artırmak",
      "iyileştirmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To intensify, increase, or further improve the quality, value, or extent of",
    "exampleEn": "Regular aerobic conditioning enhances cardiovascular stamina and cerebral blood flow.",
    "exampleTr": "Düzenli aerobik kondisyon, kardiyovasküler dayanıklılığı ve beyin kan akışını artırır.",
    "synonyms": [
      "improve",
      "boost",
      "augment",
      "elevate"
    ],
    "collocations": [
      "enhance performance",
      "enhance skills"
    ],
    "sourceCategory": "Modadil / Remzi Hoca"
  },
  {
    "term": "ensure",
    "meaningsTr": [
      "sağlamak",
      "garantiye almak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To make certain that something will occur or be so",
    "exampleEn": "Aviation regulations ensure that commercial airliners undergo rigorous pre-flight inspections.",
    "exampleTr": "Havacılık düzenlemeleri, ticari yolcu uçaklarının uçuş öncesi titiz denetimlerden geçmesini sağlar.",
    "synonyms": [
      "guarantee",
      "secure",
      "make certain"
    ],
    "collocations": [
      "ensure safety",
      "ensure compliance"
    ],
    "sourceCategory": "YDS Pub / Akın Dil"
  },
  {
    "term": "evaluate",
    "meaningsTr": [
      "değerlendirmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To form an idea of the amount, number, or value of; assess",
    "exampleEn": "Independent examiners were appointed to evaluate the environmental safety of the proposed dam.",
    "exampleTr": "Önerilen barajın çevre güvenliğini değerlendirmek üzere bağımsız denetçiler atandı.",
    "synonyms": [
      "assess",
      "appraise",
      "judge",
      "rate"
    ],
    "collocations": [
      "evaluate progress",
      "evaluate effectiveness"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "exceed",
    "meaningsTr": [
      "aşmak",
      "ötesine geçmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To be greater in number or size than a quantity, number, or other units",
    "exampleEn": "Quarterly corporate revenues substantially exceeded the conservative forecasts of Wall Street analysts.",
    "exampleTr": "Üç aylık şirket gelirleri, Wall Street analistlerinin muhafazakâr tahminlerini büyük ölçüde aştı.",
    "synonyms": [
      "surpass",
      "outstrip",
      "transcend",
      "outdo"
    ],
    "collocations": [
      "exceed expectations",
      "exceed limits"
    ],
    "sourceCategory": "Pelikan / Dilko"
  },
  {
    "term": "exploit",
    "meaningsTr": [
      "faydalanmak",
      "istismar etmek",
      "kullanmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To make full use of and derive benefit from a resource; treat someone unfairly for one's own advantage",
    "exampleEn": "Developing nations must learn how to exploit renewable geothermal assets sustainably.",
    "exampleTr": "Gelişmekte olan ülkeler, yenilenebilir jeotermal kaynaklardan sürdürülebilir biçimde yararlanmayı öğrenmelidir.",
    "synonyms": [
      "utilize",
      "harness",
      "leverage",
      "abuse"
    ],
    "collocations": [
      "exploit resources",
      "exploit opportunities"
    ],
    "sourceCategory": "Cambridge / Akın Dil"
  },
  {
    "term": "fluctuate",
    "meaningsTr": [
      "dalgalanmak",
      "iniş çıkış göstermek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To rise and fall irregularly in number or amount",
    "exampleEn": "Agricultural commodity prices fluctuate drastically depending upon geopolitical conflicts and weather.",
    "exampleTr": "Tarımsal emtia fiyatları, jeopolitik çatışmalara ve hava koşullarına bağlı olarak büyük ölçüde dalgalanır.",
    "synonyms": [
      "oscillate",
      "vary",
      "waver",
      "swing"
    ],
    "collocations": [
      "fluctuate widely",
      "temperatures fluctuate"
    ],
    "sourceCategory": "Benim Hocam / YDS Pub"
  },
  {
    "term": "foster",
    "meaningsTr": [
      "teşvik etmek",
      "büyütmek",
      "geliştirmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To encourage or promote the development of something desirable",
    "exampleEn": "Collaborative research seminars foster interdisciplinary innovation among doctoral candidates.",
    "exampleTr": "İş birliğine dayalı araştırma seminerleri, doktora adayları arasında disiplinler arası yeniliği teşvik eder.",
    "synonyms": [
      "encourage",
      "nurture",
      "promote",
      "cultivate"
    ],
    "collocations": [
      "foster growth",
      "foster creativity"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "hinder",
    "meaningsTr": [
      "engellemek",
      "aksatmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To create difficulties for someone or something, resulting in delay or obstruction",
    "exampleEn": "Severe logistical gridlocks hindered international rescue missions following the earthquake.",
    "exampleTr": "Şiddetli lojistik tıkanıklıklar, depremin ardından uluslararası kurtarma misyonlarını engelledi.",
    "synonyms": [
      "impede",
      "obstruct",
      "hamper",
      "block"
    ],
    "collocations": [
      "hinder progress",
      "hinder development"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "implement",
    "meaningsTr": [
      "yürürlüğe koymak",
      "uygulamak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To put a decision, plan, or agreement into effect",
    "exampleEn": "Municipal authorities plan to implement stricter recycling regulations starting next fiscal year.",
    "exampleTr": "Belediye yetkilileri, gelecek mali yıldan itibaren daha katı geri dönüşüm düzenlemelerini uygulamayı planlıyor.",
    "synonyms": [
      "execute",
      "apply",
      "enforce",
      "carry out"
    ],
    "collocations": [
      "implement policies",
      "implement reforms"
    ],
    "sourceCategory": "Oxford / Pelikan"
  },
  {
    "term": "induce",
    "meaningsTr": [
      "tetiklemek",
      "neden olmak",
      "ikna etmek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To succeed in persuading or leading someone to do something; bring about or give rise to",
    "exampleEn": "Excessive occupational stress can induce acute cardiovascular episodes and immune dysfunction.",
    "exampleTr": "Aşırı mesleki stres, akut kardiyovasküler krizleri ve bağışıklık bozukluğunu tetikleyebilir.",
    "synonyms": [
      "cause",
      "provoke",
      "stimulate",
      "prompt"
    ],
    "collocations": [
      "induce sleep",
      "induce vomiting"
    ],
    "sourceCategory": "Cambridge / Remzi Hoca"
  },
  {
    "term": "inhibit",
    "meaningsTr": [
      "engellemek",
      "dizginlemek",
      "yavaşlatmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To hinder, restrain, or prevent an action or process",
    "exampleEn": "Antibiotic compounds inhibit the synthesis of bacterial cell walls, preventing pathogen proliferation.",
    "exampleTr": "Antibiyotik bileşikleri, bakteriyel hücre duvarlarının sentezini engelleyerek patojen çoğalmasını önler.",
    "synonyms": [
      "suppress",
      "restrain",
      "hinder",
      "curb"
    ],
    "collocations": [
      "inhibit growth",
      "inhibit enzymes"
    ],
    "sourceCategory": "YDS Pub / Benim Hocam"
  },
  {
    "term": "initiate",
    "meaningsTr": [
      "başlatmak",
      "öncülük etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To cause a process or action to begin",
    "exampleEn": "The university medical center initiated a nationwide longitudinal trial on Alzheimer's biomarkers.",
    "exampleTr": "Üniversite tıp merkezi, Alzheimer biyobelirteçleri üzerine ülke çapında uzun vadeli bir deneme başlattı.",
    "synonyms": [
      "start",
      "commence",
      "launch",
      "inaugurate"
    ],
    "collocations": [
      "initiate a project",
      "initiate proceedings"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "integrate",
    "meaningsTr": [
      "bütünleştirmek",
      "entegre etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To combine one thing with another so that they become a whole",
    "exampleEn": "Smart cities aim to integrate artificial intelligence sensors into municipal transit networks.",
    "exampleTr": "Akıllı şehirler, yapay zekâ sensörlerini belediye toplu taşıma ağlarına entegre etmeyi hedefliyor.",
    "synonyms": [
      "combine",
      "incorporate",
      "amalgamate",
      "merge"
    ],
    "collocations": [
      "integrate into",
      "integrate systems"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "justify",
    "meaningsTr": [
      "haklı çıkarmak",
      "gerekçelendirmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To show or prove to be right or reasonable",
    "exampleEn": "The mayor could not justify the exorbitant budget overruns incurred during stadium construction.",
    "exampleTr": "Belediye başkanı, stadyum inşaatı sırasında meydana gelen fahiş bütçe aşımlarını gerekçelendiremedi.",
    "synonyms": [
      "vindicate",
      "substantiate",
      "defend",
      "warrant"
    ],
    "collocations": [
      "justify expenses",
      "justify actions"
    ],
    "sourceCategory": "Dilko / Remzi Hoca"
  },
  {
    "term": "maintain",
    "meaningsTr": [
      "sürdürmek",
      "korumak",
      "iddia etmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To cause or enable a condition or state of affairs to continue; assert strongly",
    "exampleEn": "Economists maintain that fiscal austerity without structural reform rarely sparks sustainable growth.",
    "exampleTr": "Ekonomistler, yapısal reform olmaksızın mali kemer sıkmanın nadiren sürdürülebilir büyüme sağladığını iddia etmektedir.",
    "synonyms": [
      "preserve",
      "sustain",
      "uphold",
      "assert"
    ],
    "collocations": [
      "maintain standards",
      "maintain order"
    ],
    "sourceCategory": "Oxford / Pelikan"
  },
  {
    "term": "modify",
    "meaningsTr": [
      "değiştirmek",
      "uyarlamak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To make partial or minor changes to something, typically so as to improve it",
    "exampleEn": "Aerospace engineers modified the aerodynamic wings to reduce supersonic turbulence.",
    "exampleTr": "Havacılık ve uzay mühendisleri, süpersonik türbülansı azaltmak için aerodinamik kanatları değiştirdiler.",
    "synonyms": [
      "alter",
      "adapt",
      "adjust",
      "amend"
    ],
    "collocations": [
      "modify behavior",
      "modify an agreement"
    ],
    "sourceCategory": "Cambridge / Akın Dil"
  },
  {
    "term": "perceive",
    "meaningsTr": [
      "algılamak",
      "farkına varmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To become aware or conscious of something; interpret in a stated way",
    "exampleEn": "Consumers perceive certified organic produce as fundamentally healthier than conventional crops.",
    "exampleTr": "Tüketiciler, sertifikalı organik ürünleri geleneksel mahsullere göre temelde daha sağlıklı olarak algılamaktadır.",
    "synonyms": [
      "sense",
      "discern",
      "recognize",
      "regard"
    ],
    "collocations": [
      "perceive a threat",
      "perceive reality"
    ],
    "sourceCategory": "Benim Hocam / Modadil"
  },
  {
    "term": "postpone",
    "meaningsTr": [
      "ertelemek"
    ],
    "type": "fiil",
    "level": "B1",
    "definitionEn": "To cause or arrange for something to take place at a time later than that first scheduled",
    "exampleEn": "The diplomatic summit was postponed until all delegational ambassadors completed treaty reviews.",
    "exampleTr": "Diplomatik zirve, tüm delege büyükelçileri antlaşma incelemelerini tamamlayana kadar ertelendi.",
    "synonyms": [
      "delay",
      "defer",
      "put off",
      "shelve"
    ],
    "collocations": [
      "postpone a meeting",
      "postpone a decision"
    ],
    "sourceCategory": "YDS Pub / Remzi Hoca"
  },
  {
    "term": "reinforce",
    "meaningsTr": [
      "güçlendirmek",
      "pekiştirmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To strengthen or support an object, feeling, or argument",
    "exampleEn": "Recent geological surveys reinforce the hypothesis that volcanic plumes trigger continental rifts.",
    "exampleTr": "Son jeolojik araştırmalar, volkanik dumanların kıtasal yarıkları tetiklediği hipotezini güçlendirmektedir.",
    "synonyms": [
      "strengthen",
      "fortify",
      "bolster",
      "consolidate"
    ],
    "collocations": [
      "reinforce beliefs",
      "reinforce structures"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "retain",
    "meaningsTr": [
      "alıkoymak",
      "muhafaza etmek",
      "sürdürmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To continue to have something; keep possession of",
    "exampleEn": "Ceramic thermal coatings retain heat effectively under extreme atmospheric re-entry conditions.",
    "exampleTr": "Seramik termal kaplamalar, aşırı atmosferik yeniden giriş koşulları altında ısıyı etkili bir şekilde muhafaza eder.",
    "synonyms": [
      "keep",
      "preserve",
      "hold",
      "maintain"
    ],
    "collocations": [
      "retain memory",
      "retain control"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "sustain",
    "meaningsTr": [
      "sürdürmek",
      "ayakta tutmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To strengthen or support physically or mentally; maintain over a prolonged period",
    "exampleEn": "The biosphere cannot sustain the current hyper-consumptive trajectory of modern civilization.",
    "exampleTr": "Biyosfer, modern uygarlığın mevcut aşırı tüketimci gidişatını ayakta tutamaz.",
    "synonyms": [
      "maintain",
      "support",
      "prolong",
      "endure"
    ],
    "collocations": [
      "sustain life",
      "sustain economic growth"
    ],
    "sourceCategory": "Cambridge / Pelikan"
  },
  {
    "term": "trigger",
    "meaningsTr": [
      "tetiklemek",
      "başlatmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To cause an event or situation to happen or exist",
    "exampleEn": "Sudden drops in atmospheric barometric pressure frequently trigger migraine attacks in sensitive subjects.",
    "exampleTr": "Atmosferik barometrik basınçtaki ani düşüşler, hassas deneklerde sıklıkla migren ataklarını tetikler.",
    "synonyms": [
      "precipitate",
      "spark",
      "activate",
      "prompt"
    ],
    "collocations": [
      "trigger a reaction",
      "trigger a crisis"
    ],
    "sourceCategory": "Remzi Hoca / Benim Hocam"
  },
  {
    "term": "undermine",
    "meaningsTr": [
      "baltalamak",
      "sarsmak",
      "zayıflatmak"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To lessen the effectiveness, power, or ability of, especially gradually or insidiously",
    "exampleEn": "Pervasive judicial corruption severely undermines citizen trust in constitutional democratic institutions.",
    "exampleTr": "Yaygın yargı yolsuzluğu, vatandaşların anayasal demokratik kurumlara olan güvenini ciddi biçimde baltalar.",
    "synonyms": [
      "weaken",
      "compromise",
      "sabotage",
      "erode"
    ],
    "collocations": [
      "undermine authority",
      "undermine confidence"
    ],
    "sourceCategory": "ODTÜ GV / More to Read / YDS Pub"
  },
  {
    "term": "utilize",
    "meaningsTr": [
      "faydalanmak",
      "kullanmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To make practical and effective use of",
    "exampleEn": "Agronomists utilize satellite telemetry to monitor crop irrigation and soil nutrient depletion.",
    "exampleTr": "Ziraat uzmanları, ekin sulamasını ve toprak besin maddesi tükenmesini izlemek için uydu telemetrisini kullanır.",
    "synonyms": [
      "employ",
      "use",
      "apply",
      "exploit"
    ],
    "collocations": [
      "utilize resources",
      "utilize technology"
    ],
    "sourceCategory": "Oxford / Akın Dil"
  },
  {
    "term": "yield",
    "meaningsTr": [
      "ürün vermek",
      "sağlamak",
      "boyun eğmek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To produce or provide a natural, agricultural, or industrial product; surrender",
    "exampleEn": "Drought-resistant maize varieties yield fifteen percent more grain under adverse hydrological stress.",
    "exampleTr": "Kuraklığa dayanıklı mısır çeşitleri, olumsuz hidrolojik stres altında yüzde on beş daha fazla tahıl ürünü verir.",
    "synonyms": [
      "produce",
      "generate",
      "provide",
      "surrender"
    ],
    "collocations": [
      "yield results",
      "yield profits"
    ],
    "sourceCategory": "Modadil / Cambridge"
  },
  {
    "term": "catastrophe",
    "meaningsTr": [
      "felaket",
      "yıkım"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "An event causing great and often sudden damage or suffering; a disaster",
    "exampleEn": "The meltdown of the offshore petrochemical refinery triggered an ecological catastrophe in the marine estuary.",
    "exampleTr": "Açık deniz petrokimya rafinerisinin çöküşü, deniz halicinde ekolojik bir felaketi tetikledi.",
    "synonyms": [
      "disaster",
      "calamity",
      "tragedy",
      "devastation"
    ],
    "collocations": [
      "natural catastrophe",
      "avoid catastrophe"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "complexity",
    "meaningsTr": [
      "karmaşıklık",
      "çapraşıklık"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "The state or quality of being intricate or complex",
    "exampleEn": "The immense computational complexity of quantum encryption safeguards sensitive interbank transfers.",
    "exampleTr": "Kuantum şifrelemenin muazzam hesaplama karmaşıklığı, hassas bankalar arası transferleri korur.",
    "synonyms": [
      "intricacy",
      "sophistication",
      "convolutedness"
    ],
    "collocations": [
      "growing complexity",
      "levels of complexity"
    ],
    "sourceCategory": "Benim Hocam / Remzi Hoca"
  },
  {
    "term": "deficiency",
    "meaningsTr": [
      "eksiklik",
      "yetersizlik"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "A lack or shortage of something necessary",
    "exampleEn": "Severe vitamin D deficiency is implicated in autoimmune vulnerabilities and bone mineral loss.",
    "exampleTr": "Şiddetli D vitamini eksikliği, otoimmün hassasiyetlerde ve kemik mineral kaybında rol oynamaktadır.",
    "synonyms": [
      "shortage",
      "scarcity",
      "lack",
      "insufficiency"
    ],
    "collocations": [
      "iron deficiency",
      "deficiency of vitamins"
    ],
    "sourceCategory": "Cambridge / Pelikan"
  },
  {
    "term": "dilemma",
    "meaningsTr": [
      "ikilem",
      "çıkmaz"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "A situation in which a difficult choice has to be made between two or more alternatives",
    "exampleEn": "Bioethicists face a profound moral dilemma regarding the genomic engineering of human embryos.",
    "exampleTr": "Biyoetikçiler, insan embriyolarının genomik mühendisliği konusunda derin bir ahlaki ikilemle karşı karşıyadır.",
    "synonyms": [
      "quandary",
      "predicament",
      "impasse"
    ],
    "collocations": [
      "moral dilemma",
      "face a dilemma"
    ],
    "sourceCategory": "Oxford / YDS Pub"
  },
  {
    "term": "disparity",
    "meaningsTr": [
      "farklılık",
      "uçurum",
      "eşitsizlik"
    ],
    "type": "isim",
    "level": "C1",
    "definitionEn": "A great difference or inequality",
    "exampleEn": "The persistent socioeconomic disparity between metropolitan capitals and agrarian provinces fuels domestic migration.",
    "exampleTr": "Metropol başkentleri ile tarım vilayetleri arasındaki kalıcı sosyoekonomik uçurum iç göçü körüklüyor.",
    "synonyms": [
      "gap",
      "imbalance",
      "inequality",
      "divergence"
    ],
    "collocations": [
      "income disparity",
      "growing disparity"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "diversity",
    "meaningsTr": [
      "çeşitlilik",
      "farklılık"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "The state of being diverse; a range of different things",
    "exampleEn": "Rainforest canopy canopies harbor an astounding diversity of previously undescribed coleopteran species.",
    "exampleTr": "Yağmur ormanı gölgelikleri, daha önce tanımlanmamış kın kanatlı türlerinin şaşırtıcı bir çeşitliliğine ev sahipliği yapar.",
    "synonyms": [
      "variety",
      "heterogeneity",
      "multiplicity"
    ],
    "collocations": [
      "biological diversity",
      "cultural diversity"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "efficacy",
    "meaningsTr": [
      "etkinlik",
      "yararlılık"
    ],
    "type": "isim",
    "level": "C1",
    "definitionEn": "The ability to produce a desired or intended result",
    "exampleEn": "Phase III double-blind trials verified the therapeutic efficacy of the novel pediatric immunogen.",
    "exampleTr": "Aşama III çift kör denemeleri, yeni pediatrik immünojenin terapötik etkinliğini doğruladı.",
    "synonyms": [
      "effectiveness",
      "potency",
      "usefulness",
      "success"
    ],
    "collocations": [
      "clinical efficacy",
      "prove efficacy"
    ],
    "sourceCategory": "Remzi Hoca / Pelikan"
  },
  {
    "term": "hypothesis",
    "meaningsTr": [
      "hipotez",
      "varsayım"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "A proposed explanation made on the basis of limited evidence as a starting point for investigation",
    "exampleEn": "Astrobiologists formulated an audacious hypothesis suggesting microbial life beneath the Martian regolith.",
    "exampleTr": "Astrobiyologlar, Mars regolitinin altında mikrobiyal yaşam olduğunu öne süren cesur bir hipotez formüle ettiler.",
    "synonyms": [
      "theory",
      "conjecture",
      "premise",
      "postulate"
    ],
    "collocations": [
      "test a hypothesis",
      "formulate a hypothesis"
    ],
    "sourceCategory": "Cambridge / Benim Hocam"
  },
  {
    "term": "incentive",
    "meaningsTr": [
      "teşvik",
      "özendirici ödül"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "A thing that motivates or encourages someone to do something",
    "exampleEn": "Tax credits provide a potent financial incentive for corporations to transition toward clean solar energy.",
    "exampleTr": "Vergi indirimleri, şirketlerin temiz güneş enerjisine geçiş yapması için güçlü bir mali teşvik sağlar.",
    "synonyms": [
      "inducement",
      "motivation",
      "stimulus",
      "encouragement"
    ],
    "collocations": [
      "financial incentive",
      "create incentives"
    ],
    "sourceCategory": "YDS Pub / Dilko"
  },
  {
    "term": "insight",
    "meaningsTr": [
      "içgörü",
      "kavrayış"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "The capacity to gain an accurate and deep intuitive understanding of a person or thing",
    "exampleEn": "Brain imaging scans provide fascinating neurological insight into the mechanics of auditory memory.",
    "exampleTr": "Beyin görüntüleme taramaları, işitsel hafızanın mekaniğine dair büyüleyici nörolojik içgörüler sunar.",
    "synonyms": [
      "understanding",
      "perception",
      "comprehension",
      "awareness"
    ],
    "collocations": [
      "gain insight into",
      "valuable insight"
    ],
    "sourceCategory": "Oxford / Akın Dil"
  },
  {
    "term": "jeopardy",
    "meaningsTr": [
      "tehlike",
      "risk"
    ],
    "type": "isim",
    "level": "C1",
    "definitionEn": "Danger of loss, harm, or failure",
    "exampleEn": "Rapid polar glacier retreat puts numerous maritime mammals in immediate ecological jeopardy.",
    "exampleTr": "Hızlı kutup buzulu erimesi, birçok deniz memelisini doğrudan ekolojik tehlikeye atmaktadır.",
    "synonyms": [
      "peril",
      "hazard",
      "risk",
      "danger"
    ],
    "collocations": [
      "in jeopardy",
      "put in jeopardy"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "precaution",
    "meaningsTr": [
      "önlem",
      "tedbir"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "A measure taken in advance to prevent something dangerous or unpleasant from happening",
    "exampleEn": "Civil defense engineers took every possible precaution to reinforce the subterranean subway against seismic shocks.",
    "exampleTr": "Sivil savunma mühendisleri, yer altı metrosunu sismik şoklara karşı güçlendirmek için olası her türlü önlemi aldılar.",
    "synonyms": [
      "safeguard",
      "preventive measure",
      "protection"
    ],
    "collocations": [
      "take precautions",
      "safety precaution"
    ],
    "sourceCategory": "Modadil / Remzi Hoca"
  },
  {
    "term": "prosperity",
    "meaningsTr": [
      "refah",
      "zenginlik"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "The state of being prosperous, flourishing, or successful, especially financially",
    "exampleEn": "Post-war industrial revival brought unprecedented material prosperity to working-class urban families.",
    "exampleTr": "Savaş sonrası sanayi canlanması, işçi sınıfı kentli ailelere eşi görülmemiş bir maddi refah getirdi.",
    "synonyms": [
      "wealth",
      "affluence",
      "well-being",
      "opulence"
    ],
    "collocations": [
      "economic prosperity",
      "peace and prosperity"
    ],
    "sourceCategory": "Benim Hocam / Cambridge"
  },
  {
    "term": "resilience",
    "meaningsTr": [
      "direnç",
      "esneklik",
      "kendini toparlama gücü"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "The capacity to withstand or to recover quickly from difficulties; toughness",
    "exampleEn": "Ecosystem resilience determines how rapidly mangrove wetlands recover following intense typhoon surges.",
    "exampleTr": "Ekosistem direnci, mangrov sulak alanlarının şiddetli tayfun dalgalanmalarının ardından ne kadar hızla toparlanacağını belirler.",
    "synonyms": [
      "toughness",
      "adaptability",
      "endurance",
      "flexibility"
    ],
    "collocations": [
      "build resilience",
      "mental resilience"
    ],
    "sourceCategory": "Pelikan / Akın Dil"
  },
  {
    "term": "scarcity",
    "meaningsTr": [
      "kıtlık",
      "yetersizlik"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "The state of being scarce or in short supply; shortage",
    "exampleEn": "Chronic freshwater scarcity threatens geopolitical stability across several sub-Saharan drainage basins.",
    "exampleTr": "Kronik tatlı su kıtlığı, Sahra altı birkaç havza genelinde jeopolitik istikrarı tehdit ediyor.",
    "synonyms": [
      "shortage",
      "dearth",
      "paucity",
      "lack"
    ],
    "collocations": [
      "water scarcity",
      "scarcity of resources"
    ],
    "sourceCategory": "YDS Pub / Remzi Hoca"
  },
  {
    "term": "abrupt",
    "meaningsTr": [
      "ani",
      "beklenmedik",
      "sert"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Sudden and unexpected",
    "exampleEn": "An abrupt reversal of central banking interest rate policy rattled international bond exchanges.",
    "exampleTr": "Merkez bankacılığı faiz oranı politikasının ani bir şekilde tersine dönmesi uluslararası tahvil borsalarını sarstı.",
    "synonyms": [
      "sudden",
      "unexpected",
      "precipitous",
      "hasty"
    ],
    "collocations": [
      "abrupt change",
      "abrupt ending"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "chronic",
    "meaningsTr": [
      "kronik",
      "müzmin",
      "süregelen"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Persisting for a long time or constantly recurring",
    "exampleEn": "Inadequate public transit leads to chronic urban congestion during peak commuter hours.",
    "exampleTr": "Yetersiz toplu taşıma, yoğun işe gidiş saatlerinde müzmin kentsel trafik sıkışıklığına yol açar.",
    "synonyms": [
      "persistent",
      "long-standing",
      "incurable"
    ],
    "collocations": [
      "chronic illness",
      "chronic pain"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "comprehensive",
    "meaningsTr": [
      "kapsamlı",
      "etraflı"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Including or dealing with all or nearly all elements or aspects of something",
    "exampleEn": "The World Health Organization published a comprehensive compendium on tropical epidemic prevention.",
    "exampleTr": "Dünya Sağlık Örgütü, tropikal salgın hastalıkların önlenmesine ilişkin kapsamlı bir kılavuz yayımladı.",
    "synonyms": [
      "exhaustive",
      "thorough",
      "all-inclusive",
      "extensive"
    ],
    "collocations": [
      "comprehensive study",
      "comprehensive review"
    ],
    "sourceCategory": "Benim Hocam / YDS Pub"
  },
  {
    "term": "compulsory",
    "meaningsTr": [
      "zorunlu",
      "mecburi"
    ],
    "type": "sıfat",
    "level": "B1",
    "definitionEn": "Required by law or a rule; obligatory",
    "exampleEn": "Primary schooling was made strictly compulsory for all minors aged six through fourteen.",
    "exampleTr": "İlköğretim, altı ila on dört yaş arasındaki tüm küçükler için kesinlikle zorunlu hale getirildi.",
    "synonyms": [
      "mandatory",
      "obligatory",
      "required",
      "statutory"
    ],
    "collocations": [
      "compulsory education",
      "compulsory service"
    ],
    "sourceCategory": "Dilko / Pelikan"
  },
  {
    "term": "conclusive",
    "meaningsTr": [
      "kesin",
      "sonuçlandırıcı",
      "inkâr edilemez"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Serving to settle an issue or produce a definitive verdict",
    "exampleEn": "Forensic ballistic analysis offered conclusive proof establishing the suspect's presence at the scene.",
    "exampleTr": "Adli balistik analizi, şüphelinin olay yerindeki varlığını kanıtlayan kesin deliller sundu.",
    "synonyms": [
      "definitive",
      "decisive",
      "irrefutable",
      "indisputable"
    ],
    "collocations": [
      "conclusive evidence",
      "conclusive proof"
    ],
    "sourceCategory": "Remzi Hoca / Akın Dil"
  },
  {
    "term": "deleterious",
    "meaningsTr": [
      "zararlı",
      "hasar verici"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Causing harm or damage",
    "exampleEn": "Excessive exposure to microplastic particulate pollutants exerts deleterious effects on marine biodiversity.",
    "exampleTr": "Mikroplastik partikül kirleticilere aşırı maruz kalma, deniz biyoçeşitliliği üzerinde zararlı etkiler gösterir.",
    "synonyms": [
      "harmful",
      "damaging",
      "detrimental",
      "injurious"
    ],
    "collocations": [
      "deleterious effect",
      "deleterious consequences"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "drastic",
    "meaningsTr": [
      "radikal",
      "şiddetli",
      "kapsamlı"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Likely to have a strong or far-reaching effect; radical and extreme",
    "exampleEn": "The government implemented drastic austerity cuts to stabilize sovereign bond default ratings.",
    "exampleTr": "Hükümet, devlet tahvili temerrüt notlarını istikrara kavuşturmak için radikal kemer sıkma kesintileri uyguladı.",
    "synonyms": [
      "radical",
      "extreme",
      "severe",
      "dramatic"
    ],
    "collocations": [
      "drastic measures",
      "drastic action"
    ],
    "sourceCategory": "Modadil / Cambridge"
  },
  {
    "term": "empirical",
    "meaningsTr": [
      "ampirik",
      "deneye/gözleme dayalı"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Based on, concerned with, or verifiable by observation or experience rather than theory",
    "exampleEn": "Astronomers require empirical observational validation before accepting speculative cosmological models.",
    "exampleTr": "Gökbilimciler, spekülatif kozmolojik modelleri kabul etmeden önce ampirik gözlemsel doğrulama talep ederler.",
    "synonyms": [
      "experimental",
      "observed",
      "factual",
      "practical"
    ],
    "collocations": [
      "empirical evidence",
      "empirical study"
    ],
    "sourceCategory": "Benim Hocam / Oxford"
  },
  {
    "term": "fundamental",
    "meaningsTr": [
      "temel",
      "esas"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Forming a necessary base or core; of central importance",
    "exampleEn": "Freedom of scholarly expression is a fundamental prerequisite for academic integrity.",
    "exampleTr": "Bilimsel ifade özgürlüğü, akademik dürüstlük için temel bir ön koşuldur.",
    "synonyms": [
      "basic",
      "essential",
      "primary",
      "foundational"
    ],
    "collocations": [
      "fundamental human rights",
      "fundamental flaw"
    ],
    "sourceCategory": "YDS Pub / Remzi Hoca"
  },
  {
    "term": "paramount",
    "meaningsTr": [
      "en önemli",
      "başlıca",
      "üstün"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "More important than anything else; supreme",
    "exampleEn": "Patient confidentiality is of paramount ethical importance throughout medical research trials.",
    "exampleTr": "Tıbbi araştırma denemeleri boyunca hasta mahremiyeti son derece büyük ve en önemli etik öneme sahiptir.",
    "synonyms": [
      "supreme",
      "chief",
      "foremost",
      "predominant"
    ],
    "collocations": [
      "of paramount importance",
      "paramount concern"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "plausible",
    "meaningsTr": [
      "makul",
      "akla yatkın",
      "inandırıcı"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Seeming reasonable or probable",
    "exampleEn": "Paleontologists proposed a plausible correlation between comet impacts and Cretaceous dinosaur extinctions.",
    "exampleTr": "Paleontologlar, kuyruklu yıldız çarpmaları ile Kretase dinozorlarının yok oluşu arasında akla yatkın bir korelasyon önerdiler.",
    "synonyms": [
      "credible",
      "reasonable",
      "believable",
      "feasible"
    ],
    "collocations": [
      "plausible explanation",
      "plausible scenario"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "profound",
    "meaningsTr": [
      "derin",
      "büyük",
      "esaslı"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Very great or intense; having or showing great knowledge or insight",
    "exampleEn": "The invention of Gutenberg's movable type printing press exerted a profound impact upon global literacy.",
    "exampleTr": "Gutenberg'in hareketli harfli matbaasının icadı, küresel okuryazarlık üzerinde derin bir etki yarattı.",
    "synonyms": [
      "deep",
      "immense",
      "far-reaching",
      "intense"
    ],
    "collocations": [
      "profound impact",
      "profound effect"
    ],
    "sourceCategory": "Remzi Hoca / Benim Hocam"
  },
  {
    "term": "unprecedented",
    "meaningsTr": [
      "eşi benzeri görülmemiş"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Never done or known before",
    "exampleEn": "The speed of global mRNA vaccine development represented an unprecedented scientific triumph.",
    "exampleTr": "Küresel mRNA aşı geliştirme hızı, eşi benzeri görülmemiş bir bilimsel zaferi temsil etti.",
    "synonyms": [
      "unmatched",
      "unrivaled",
      "extraordinary",
      "novel"
    ],
    "collocations": [
      "unprecedented scale",
      "unprecedented level"
    ],
    "sourceCategory": "Pelikan / ODTÜ GV"
  },
  {
    "term": "vital",
    "meaningsTr": [
      "hayati",
      "son derece önemli"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Absolutely necessary; essential",
    "exampleEn": "Access to verified factual information is vital for maintaining a robust democratic electorate.",
    "exampleTr": "Doğrulanmış olgusal bilgilere erişim, güçlü bir demokratik seçmen kitlesini sürdürmek için hayati önem taşır.",
    "synonyms": [
      "crucial",
      "essential",
      "indispensable",
      "critical"
    ],
    "collocations": [
      "vital role",
      "vital importance"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "vulnerable",
    "meaningsTr": [
      "savunmasız",
      "hassas",
      "kırılgan"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Susceptible to physical or emotional attack or harm",
    "exampleEn": "Coastal communities are increasingly vulnerable to catastrophic storm surges sparked by oceanic warming.",
    "exampleTr": "Kıyı toplulukları, okyanus ısınmasının yol açtığı feci fırtına dalgalarına karşı giderek daha savunmasız hale gelmektedir.",
    "synonyms": [
      "susceptible",
      "defenseless",
      "exposed",
      "fragile"
    ],
    "collocations": [
      "vulnerable populations",
      "vulnerable to disease"
    ],
    "sourceCategory": "YDS Pub / Remzi Hoca"
  },
  {
    "term": "consistently",
    "meaningsTr": [
      "sürekli olarak",
      "tutarlı biçimde"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "In every case or on every occasion; invariably",
    "exampleEn": "Longitudinal educational assessments consistently show that early childhood literacy drives long-term career success.",
    "exampleTr": "Uzun vadeli eğitim değerlendirmeleri, erken çocukluk okuryazarlığının uzun vadeli kariyer başarısını tutarlı bir şekilde desteklediğini göstermektedir.",
    "synonyms": [
      "invariably",
      "regularly",
      "constantly"
    ],
    "collocations": [
      "consistently high",
      "consistently demonstrated"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "primarily",
    "meaningsTr": [
      "başlıca",
      "öncelikle",
      "esasen"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "For the most part; mainly",
    "exampleEn": "The hospital's intensive pediatric care unit is primarily funded by charitable research foundations.",
    "exampleTr": "Hastanenin yoğun çocuk bakım ünitesi, esasen hayırsever araştırma vakıfları tarafından finanse edilmektedir.",
    "synonyms": [
      "mainly",
      "chiefly",
      "predominantly",
      "principally"
    ],
    "collocations": [
      "primarily responsible",
      "primarily focused"
    ],
    "sourceCategory": "Cambridge / Oxford"
  },
  {
    "term": "subsequently",
    "meaningsTr": [
      "sonradan",
      "daha sonra",
      "akabinde"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "After a particular thing has happened; afterwards",
    "exampleEn": "The treaty was signed in Paris and subsequently ratified by all twenty-four sovereign member states.",
    "exampleTr": "Antlaşma Paris'te imzalandı ve akabinde yirmi dört egemen üye devletin tamamı tarafından onaylandı.",
    "synonyms": [
      "afterwards",
      "later",
      "consequently"
    ],
    "collocations": [
      "subsequently published",
      "subsequently proved"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "ameliorate",
    "meaningsTr": [
      "iyileştirmek",
      "düzeltmek",
      "ıslah etmek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To make something bad or unsatisfactory better",
    "exampleEn": "Targeted public health subsidies helped ameliorate infant mortality in impoverished regions.",
    "exampleTr": "Hedefe yönelik kamu sağlığı sübvansiyonları, yoksul bölgelerde bebek ölüm oranlarını iyileştirmeye yardımcı oldu.",
    "synonyms": [
      "improve",
      "enhance",
      "better",
      "upgrade"
    ],
    "sourceCategory": "Modadil / Remzi Hoca / YDS Core"
  },
  {
    "term": "circumvent",
    "meaningsTr": [
      "atlatmak",
      "çevresinden dolaşmak",
      "yolunu bulup aşmak"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To find a way around an obstacle or rule, typically in a clever or illicit way",
    "exampleEn": "Smugglers designed encrypted communication networks to circumvent coastal border patrols.",
    "exampleTr": "Kaçakçılar, kıyı sınır devriyelerini atlatmak için şifreli iletişim ağları tasarladılar.",
    "synonyms": [
      "bypass",
      "evade",
      "sidestep",
      "dodge"
    ],
    "sourceCategory": "Akın Dil / Reader at Work"
  },
  {
    "term": "corroborate",
    "meaningsTr": [
      "doğrulamak",
      "teyit etmek",
      "desteklemek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To confirm or give support to a statement, theory, or finding",
    "exampleEn": "Satellite infrared data corroborated the climatologists' claims of accelerating polar thaw.",
    "exampleTr": "Uydu kızılötesi verileri, iklimbilimcilerin kutup erimesinin hızlandığı yönündeki iddialarını doğruladı.",
    "synonyms": [
      "confirm",
      "verify",
      "substantiate",
      "back up"
    ],
    "sourceCategory": "Cambridge / Oxford / Pelikan"
  },
  {
    "term": "exacerbate",
    "meaningsTr": [
      "şiddetlendirmek",
      "daha da kötüleştirmek",
      "alevlendirmek"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To make a problem, bad situation, or negative feeling worse",
    "exampleEn": "Unprecedented summer heatwaves exacerbated chronic electrical grid overloads across the country.",
    "exampleTr": "Görülmemiş yaz sıcak hava dalgaları, ülke genelinde kronik elektrik şebekesi aşırı yüklenmelerini daha da kötüleştirdi.",
    "synonyms": [
      "aggravate",
      "worsen",
      "inflame",
      "intensify"
    ],
    "sourceCategory": "Modadil / Akın Dil / Remzi Hoca"
  },
  {
    "term": "onerous",
    "meaningsTr": [
      "külfetli",
      "ağır",
      "zahmetli"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Involving an amount of effort and difficulty that is oppressively burdensome",
    "exampleEn": "Complying with the revised maritime environmental regulations proved excessively onerous for small fisheries.",
    "exampleTr": "Gözden geçirilmiş deniz çevre düzenlemelerine uymak, küçük balıkçılık işletmeleri için aşırı derecede külfetli çıktı.",
    "synonyms": [
      "burdensome",
      "taxing",
      "arduous",
      "demanding"
    ],
    "sourceCategory": "Remzi Hoca / More to Read"
  },
  {
    "term": "precarious",
    "meaningsTr": [
      "riskli",
      "güvencesiz",
      "pamuk ipliğine bağlı"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Not securely held or in position; dangerously likely to fall or collapse; uncertain",
    "exampleEn": "Migrant laborers often find themselves in precarious economic situations with little legal protection.",
    "exampleTr": "Göçmen işçiler, genellikle çok az yasal korumayla pamuk ipliğine bağlı güvencesiz ekonomik koşullarda kalmaktadır.",
    "synonyms": [
      "insecure",
      "perilous",
      "uncertain",
      "hazardous"
    ],
    "sourceCategory": "Modadil / Cambridge / YDS Pub"
  },
  {
    "term": "prolific",
    "meaningsTr": [
      "üretken",
      "verimli",
      "bol eser veren"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Producing much fruit or foliage or many offspring; producing many works",
    "exampleEn": "Isaac Asimov was one of the most prolific authors of science fiction and popular science in modern history.",
    "exampleTr": "Isaac Asimov, modern tarihte bilim kurgu ve popüler bilimin en üretken yazarlarından biriydi.",
    "synonyms": [
      "productive",
      "fertile",
      "creative",
      "abundant"
    ],
    "sourceCategory": "Benim Hocam / Dilko"
  },
  {
    "term": "robust",
    "meaningsTr": [
      "güçlü",
      "sağlam",
      "dinamik"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Strong and healthy; vigorous; able to withstand or overcome adverse conditions",
    "exampleEn": "Financial institutions must maintain robust cybersecurity firewalls against state-sponsored intrusion.",
    "exampleTr": "Mali kuruluşlar, devlet destekli siber sızmalara karşı güçlü siber güvenlik güvenlik duvarları sürdürmelidir.",
    "synonyms": [
      "sturdy",
      "strong",
      "resilient",
      "tough"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "tangible",
    "meaningsTr": [
      "somut",
      "hissedilir",
      "gözle görülür"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Perceptible by touch; clear and definite; real",
    "exampleEn": "Diplomatic summits rarely produce tangible breakthroughs without extensive preliminary staff talks.",
    "exampleTr": "Diplomatik zirveler, kapsamlı ön hazırlık görüşmeleri olmadan nadiren somut atılımlar üretir.",
    "synonyms": [
      "concrete",
      "palpable",
      "real",
      "visible"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "volatile",
    "meaningsTr": [
      "uçucu",
      "oynak",
      "istikrarsız"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Liable to change rapidly and unpredictably, especially for the worse",
    "exampleEn": "Cryptocurrency exchanges are notorious for extraordinarily volatile intraday price fluctuations.",
    "exampleTr": "Kripto para borsaları, gün içi olağanüstü oynak fiyat dalgalanmalarıyla bilinir.",
    "synonyms": [
      "unstable",
      "turbulent",
      "erratic",
      "fickle"
    ],
    "sourceCategory": "Cambridge / Pelikan"
  },
  {
    "term": "reluctant",
    "meaningsTr": [
      "isteksiz",
      "gönülsüz"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Unwilling and hesitant; disinclined",
    "exampleEn": "Central banks were initially reluctant to hike benchmark borrowing rates despite mounting inflation.",
    "exampleTr": "Merkez bankaları, artan enflasyona rağmen gösterge borçlanma faizlerini artırma konusunda başlangıçta isteksizdi.",
    "synonyms": [
      "unwilling",
      "hesitant",
      "disinclined",
      "loath"
    ],
    "sourceCategory": "YDS Pub / Remzi Hoca"
  },
  {
    "term": "hostile",
    "meaningsTr": [
      "düşmanca",
      "elverişsiz",
      "hasmane"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Unfriendly; antagonistic; of or belonging to a military enemy",
    "exampleEn": "Planetary probes must withstand the extremely hostile atmospheric pressure and acid clouds of Venus.",
    "exampleTr": "Gezegen sondaları, Venüs'ün son derece elverişsiz ve düşmanca atmosferik basıncına ve asit bulutlarına dayanmalıdır.",
    "synonyms": [
      "unfriendly",
      "antagonistic",
      "inhospitable",
      "adverse"
    ],
    "sourceCategory": "Benim Hocam / ODTÜ GV"
  },
  {
    "term": "apprehension",
    "meaningsTr": [
      "endişe",
      "korku",
      "kavrama",
      "yakalama"
    ],
    "type": "isim",
    "level": "C1",
    "definitionEn": "Anxiety or fear that something bad or unpleasant will happen; understanding",
    "exampleEn": "Citizens watched the geopolitical crisis escalate with mounting apprehension and dread.",
    "exampleTr": "Vatandaşlar, jeopolitik krizin tırmanışını giderek artan bir endişe ve korkuyla izlediler.",
    "synonyms": [
      "anxiety",
      "trepidation",
      "dread",
      "worry"
    ],
    "sourceCategory": "Remzi Hoca / More to Read"
  },
  {
    "term": "stagnation",
    "meaningsTr": [
      "durgunluk",
      "hareketsizlik"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "Lack of activity, growth, or development",
    "exampleEn": "Structural economic stagnation can only be overcome through targeted infrastructure investments.",
    "exampleTr": "Yapısal ekonomik durgunluk, ancak hedefe yönelik altyapı yatırımlarıyla aşılabilir.",
    "synonyms": [
      "inactivity",
      "sluggishness",
      "standstill",
      "torpor"
    ],
    "sourceCategory": "Akın Dil / Modadil"
  },
  {
    "term": "repercussion",
    "meaningsTr": [
      "yankı",
      "olumsuz sonuç",
      "ters tepki"
    ],
    "type": "isim",
    "level": "C1",
    "definitionEn": "An unintended consequence occurring some time after an event or action, especially an unwelcome one",
    "exampleEn": "The sudden devaluation of the national currency had disastrous repercussions across all retail sectors.",
    "exampleTr": "Ulusal para biriminin aniden devalüe edilmesi, tüm perakende sektörlerinde felaket niteliğinde olumsuz sonuçlara yol açtı.",
    "synonyms": [
      "consequence",
      "aftermath",
      "fallout",
      "outcome"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "surplus",
    "meaningsTr": [
      "fazlalık",
      "fazla",
      "artık"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "An amount of something left over when requirements have been met; an excess of production or supply",
    "exampleEn": "The export-oriented agrarian province reported a considerable grain surplus following the bountiful harvest.",
    "exampleTr": "İhracata yönelik tarım vilayeti, bereketli hasadın ardından önemli bir tahıl fazlalığı bildirdi.",
    "synonyms": [
      "excess",
      "overabundance",
      "glut",
      "leftover"
    ],
    "sourceCategory": "Cambridge / YDS Pub"
  },
  {
    "term": "upheaval",
    "meaningsTr": [
      "çalkantı",
      "kargaşa",
      "köklü değişim"
    ],
    "type": "isim",
    "level": "C1",
    "definitionEn": "A violent or sudden change or disruption to something",
    "exampleEn": "The geopolitical collapse of the empire triggered two decades of territorial conflict and social upheaval.",
    "exampleTr": "İmparatorluğun jeopolitik çöküşü, yirmi yıllık bölgesel çatışmayı ve toplumsal kargaşayı tetikledi.",
    "synonyms": [
      "turmoil",
      "disruption",
      "convulsion",
      "chaos"
    ],
    "sourceCategory": "Pelikan / Remzi Hoca"
  },
  {
    "term": "arbitrarily",
    "meaningsTr": [
      "keyfi olarak",
      "rastgele"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "On the basis of random choice or personal whim, rather than any reason or system",
    "exampleEn": "Political dissidents complained that administrative detentions were being imposed arbitrarily.",
    "exampleTr": "Siyasi muhalifler, idari gözaltıların keyfi bir şekilde uygulandığından şikâyet ettiler.",
    "synonyms": [
      "randomly",
      "capriciously",
      "whimsically"
    ],
    "sourceCategory": "Modadil / Akın Dil"
  },
  {
    "term": "fundamentally",
    "meaningsTr": [
      "esasen",
      "kökten",
      "temelde"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "In central or primary respects; essentially",
    "exampleEn": "The advent of quantum mechanics fundamentally revised our understanding of atomic causality.",
    "exampleTr": "Kuantum mekaniğinin ortaya çıkışı, atomik nedensellik anlayışımızı kökten revize etti.",
    "synonyms": [
      "essentially",
      "basically",
      "radically",
      "inherently"
    ],
    "sourceCategory": "Oxford / Benim Hocam"
  },
  {
    "term": "inadvertently",
    "meaningsTr": [
      "yanlışlıkla",
      "farkında olmadan",
      "istemeyerek"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "Without intention; accidentally",
    "exampleEn": "The lab technician inadvertently contaminated the bacterial culture with airborne fungal spores.",
    "exampleTr": "Laboratuvar teknisyeni, havadaki mantar sporlarıyla bakteri kültürünü yanlışlıkla kirletti.",
    "synonyms": [
      "accidentally",
      "unintentionally",
      "unwittingly"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "profoundly",
    "meaningsTr": [
      "derinden",
      "büyük ölçüde"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "To a great depth; intensely; extremely",
    "exampleEn": "Experiencing severe humanitarian crises profoundly influences a photojournalist's worldview.",
    "exampleTr": "Ağır insani krizleri deneyimlemek, bir foto muhabirinin dünya görüşünü derinden etkiler.",
    "synonyms": [
      "deeply",
      "intensely",
      "greatly",
      "immensely"
    ],
    "sourceCategory": "Cambridge / YDS Pub"
  },
  {
    "term": "culminate",
    "meaningsTr": [
      "zirveye ulaşmak",
      "ile sonuçlanmak",
      "noktalanmak"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To reach a climax or point of highest development; to end with a particular result",
    "exampleEn": "Years of rigorous laboratory research culminated in the discovery of an effective vaccine.",
    "exampleTr": "Yıllar süren titiz laboratuvar araştırmaları, etkili bir aşının keşfiyle sonuçlandı.",
    "synonyms": [
      "peak",
      "climax",
      "conclude",
      "terminate"
    ],
    "collocations": [
      "culminate in success",
      "culminate in failure"
    ],
    "sourceCategory": "Modadil / Suat Gürcan"
  },
  {
    "term": "pervasive",
    "meaningsTr": [
      "yaygın",
      "her yere sinen",
      "nüfuz eden"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Spreading widely throughout an area or a group of people, especially an unwelcome influence",
    "exampleEn": "Social media has established a pervasive presence in modern adolescent communication.",
    "exampleTr": "Sosyal medya, modern ergen iletişiminde yaygın bir varlık kurmuştur.",
    "synonyms": [
      "prevalent",
      "omnipresent",
      "widespread",
      "permeating"
    ],
    "collocations": [
      "pervasive influence",
      "pervasive problem"
    ],
    "sourceCategory": "Akın Dil / 100 Günde YDS"
  },
  {
    "term": "reluctance",
    "meaningsTr": [
      "isteksizlik",
      "gönülsüzlük",
      "tereddüt"
    ],
    "type": "isim",
    "level": "B2",
    "definitionEn": "Unwillingness or disinclination to do something",
    "exampleEn": "The committee voiced severe reluctance to invest public funds in unproven green technologies.",
    "exampleTr": "Komite, kamu fonlarını kanıtlanmamış yeşil teknolojilere yatırma konusunda ciddi bir isteksizlik dile getirdi.",
    "synonyms": [
      "unwillingness",
      "hesitation",
      "disinclination"
    ],
    "collocations": [
      "show reluctance",
      "overcome reluctance"
    ],
    "sourceCategory": "Benim Hocam / Hakkı Şahin"
  },
  {
    "term": "refrain from",
    "meaningsTr": [
      "kaçınmak",
      "sakınmak",
      "kendini alıkoymak"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To stop oneself from doing something; to abstain",
    "exampleEn": "Patients taking blood thinners must strictly refrain from consuming alcohol.",
    "exampleTr": "Kan sulandırıcı kullanan hastalar alkol tüketmekten kesinlikle kaçınmalıdır.",
    "synonyms": [
      "abstain from",
      "avoid",
      "desist from",
      "forbear"
    ],
    "collocations": [
      "refrain from smoking",
      "refrain from comment"
    ],
    "sourceCategory": "Remzi Hoca / YÖKDİL Sağlık"
  },
  {
    "term": "embark on",
    "meaningsTr": [
      "girişmek",
      "başlamak",
      "koyulmak"
    ],
    "type": "phrasal verb",
    "level": "B2",
    "definitionEn": "To begin a course of action, especially one that is important or challenging",
    "exampleEn": "The university decided to embark on a comprehensive curriculum reform.",
    "exampleTr": "Üniversite kapsamlı bir müfredat reformuna girişmeye karar verdi.",
    "synonyms": [
      "commence",
      "undertake",
      "launch",
      "initiate"
    ],
    "collocations": [
      "embark on a journey",
      "embark on a project"
    ],
    "sourceCategory": "Dilko / YDT Master"
  },
  {
    "term": "pave the way for",
    "meaningsTr": [
      "zemin hazırlamak",
      "önünü açmak",
      "olanağı sağlamak"
    ],
    "type": "phrasal verb",
    "level": "C1",
    "definitionEn": "To create the conditions that make it possible for something else to happen",
    "exampleEn": "The diplomatic peace accord paved the way for unprecedented regional economic cooperation.",
    "exampleTr": "Diplomatik barış antlaşması, benzeri görülmemiş bölgesel ekonomik iş birliğine zemin hazırladı.",
    "synonyms": [
      "facilitate",
      "enable",
      "prepare the ground for",
      "foster"
    ],
    "collocations": [
      "pave the way for reform",
      "pave the way for growth"
    ],
    "sourceCategory": "ODTÜ GV / More to Read"
  },
  {
    "term": "proliferation",
    "meaningsTr": [
      "hızlı artış",
      "çoğalma",
      "yayılma"
    ],
    "type": "isim",
    "level": "C1",
    "definitionEn": "Rapid increase in the number or amount of something; rapid reproduction of cells",
    "exampleEn": "The alarming proliferation of nuclear arms poses an existential threat to planetary stability.",
    "exampleTr": "Nükleer silahların endişe verici biçimde hızla çoğalması, gezegenin istikrarına varoluşsal bir tehdit oluşturmaktadır.",
    "synonyms": [
      "escalation",
      "multiplication",
      "expansion",
      "spread"
    ],
    "collocations": [
      "nuclear proliferation",
      "cell proliferation"
    ],
    "sourceCategory": "Pelikan / Yediiklim YDS"
  },
  {
    "term": "depict",
    "meaningsTr": [
      "tasvir etmek",
      "betimlemek",
      "göstermek"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To represent by a drawing, painting, or other art form; to describe in words",
    "exampleEn": "Renaissance paintings frequently depict historical events with allegorical symbolism.",
    "exampleTr": "Rönesans tabloları sıklıkla tarihi olayları alegorik sembollerle tasvir eder.",
    "synonyms": [
      "portray",
      "illustrate",
      "represent",
      "render"
    ],
    "collocations": [
      "accurately depict",
      "vividly depict"
    ],
    "sourceCategory": "Modadil / YDS Sınav Stratejileri"
  },
  {
    "term": "impair",
    "meaningsTr": [
      "bozmak",
      "zarar vermek",
      "zayıflatmak"
    ],
    "type": "fiil",
    "level": "B2",
    "definitionEn": "To weaken or damage something, especially a human faculty or bodily function",
    "exampleEn": "Prolonged exposure to excessive decibel levels can permanently impair hearing ability.",
    "exampleTr": "Aşırı desibel seviyelerine uzun süre maruz kalmak, işitme yetisine kalıcı olarak zarar verebilir.",
    "synonyms": [
      "damage",
      "harm",
      "diminish",
      "weaken"
    ],
    "collocations": [
      "impair vision",
      "impair judgment"
    ],
    "sourceCategory": "Akın Dil / YÖKDİL Sağlık"
  },
  {
    "term": "precipitate",
    "meaningsTr": [
      "tetiklemek",
      "hızlandırmak",
      "aniden yol açmak"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To cause an event or situation, typically one that is bad or undesirable, to happen suddenly",
    "exampleEn": "The unexpected bank bankruptcy precipitated a severe financial downturn nationwide.",
    "exampleTr": "Beklenmedik banka iflası, ülke çapında şiddetli bir mali gerilemeyi tetikledi.",
    "synonyms": [
      "trigger",
      "instigate",
      "provoke",
      "accelerate"
    ],
    "collocations": [
      "precipitate a crisis",
      "precipitate a collapse"
    ],
    "sourceCategory": "Cambridge / Oxford Academic"
  },
  {
    "term": "substantiate",
    "meaningsTr": [
      "kanıtlamak",
      "doğrulamak",
      "somutlaştırmak"
    ],
    "type": "fiil",
    "level": "C1",
    "definitionEn": "To provide evidence to support or prove the truth of a claim or hypothesis",
    "exampleEn": "The defense attorney failed to substantiate the client's alibi with documentary evidence.",
    "exampleTr": "Savunma avukatı, müvekkilinin mazeretini somut belgeli delillerle kanıtlayamadı.",
    "synonyms": [
      "corroborate",
      "verify",
      "authenticate",
      "validate"
    ],
    "collocations": [
      "substantiate a claim",
      "substantiate allegations"
    ],
    "sourceCategory": "Remzi Hoca / YDS Master"
  },
  {
    "term": "resilient",
    "meaningsTr": [
      "dirençli",
      "çabuk toparlanan",
      "esnek"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Able to withstand or recover quickly from difficult conditions",
    "exampleEn": "Coastal mangroves constitute remarkably resilient ecosystems against tropical storms.",
    "exampleTr": "Kıyı mangrovları, tropikal fırtınalara karşı son derece dirençli ekosistemler oluşturur.",
    "synonyms": [
      "tough",
      "hardy",
      "adaptable",
      "robust"
    ],
    "collocations": [
      "resilient economy",
      "resilient spirit"
    ],
    "sourceCategory": "Benim Hocam / YDS YDT"
  },
  {
    "term": "pragmatic",
    "meaningsTr": [
      "uygulamacı",
      "pratik",
      "faydacı"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations",
    "exampleEn": "Leaders must adopt a pragmatic approach to resolve territorial disputes peacefully.",
    "exampleTr": "Liderler, toprak anlaşmazlıklarını barışçıl bir şekilde çözmek için pragmatik bir yaklaşım benimsemelidir.",
    "synonyms": [
      "practical",
      "realistic",
      "sensible",
      "matter-of-fact"
    ],
    "collocations": [
      "pragmatic solution",
      "pragmatic approach"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  },
  {
    "term": "predominantly",
    "meaningsTr": [
      "ağırlıklı olarak",
      "çoğunlukla",
      "baskın bir şekilde"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "Mainly; for the most part; with the greatest power or influence",
    "exampleEn": "The island's economy is predominantly reliant upon eco-tourism and agricultural exports.",
    "exampleTr": "Adanın ekonomisi ağırlıklı olarak eko-turizm ve tarım ihracatına dayanmaktadır.",
    "synonyms": [
      "primarily",
      "chiefly",
      "principally",
      "mostly"
    ],
    "collocations": [
      "predominantly female",
      "predominantly agricultural"
    ],
    "sourceCategory": "Modadil / Akın Dil"
  },
  {
    "term": "concur with",
    "meaningsTr": [
      "aynı fikirde olmak",
      "katılmak",
      "hemfikir olmak"
    ],
    "type": "phrasal verb",
    "level": "C1",
    "definitionEn": "To agree with someone or with an opinion or finding",
    "exampleEn": "Most independent climate scientists concur with the findings of the international panel.",
    "exampleTr": "Çoğu bağımsız iklim bilimci, uluslararası panelin bulgularıyla hemfikirdir.",
    "synonyms": [
      "agree with",
      "assent to",
      "endorse"
    ],
    "collocations": [
      "concur with a view",
      "concur with a decision"
    ],
    "sourceCategory": "Yediiklim / Pelikan"
  },
  {
    "term": "ubiquitous",
    "meaningsTr": [
      "her yerde bulunan",
      "yaygın",
      "olağan"
    ],
    "type": "sıfat",
    "level": "C1",
    "definitionEn": "Present, appearing, or found everywhere at the same time",
    "exampleEn": "Smartphones have achieved an almost ubiquitous status across urban households worldwide.",
    "exampleTr": "Akıllı telefonlar, dünya genelindeki kentsel hanelerde neredeyse her yerde bulunan bir konuma ulaşmıştır.",
    "synonyms": [
      "omnipresent",
      "pervasive",
      "universal"
    ],
    "collocations": [
      "ubiquitous presence",
      "ubiquitous computing"
    ],
    "sourceCategory": "Cambridge Academic / Oxford 5000"
  },
  {
    "term": "lucid",
    "meaningsTr": [
      "açık",
      "anlaşılır",
      "berrak"
    ],
    "type": "sıfat",
    "level": "B2",
    "definitionEn": "Expressed clearly; easy to understand; showing the ability to think clearly",
    "exampleEn": "The professor gave an exceptionally lucid explanation of complex quantum mechanics.",
    "exampleTr": "Profesör, karmaşık kuantum mekaniğine dair son derece açık ve anlaşılır bir açıklama yaptı.",
    "synonyms": [
      "clear",
      "comprehensible",
      "intelligible",
      "coherent"
    ],
    "collocations": [
      "lucid explanation",
      "lucid style"
    ],
    "sourceCategory": "Dilko / ELS YDT"
  },
  {
    "term": "conspicuously",
    "meaningsTr": [
      "göze çarpar şekilde",
      "belirgin biçimde",
      "dikkat çekecek derecede"
    ],
    "type": "zarf",
    "level": "C1",
    "definitionEn": "In a clearly visible or attractive manner; in a way that attracts notice or attention",
    "exampleEn": "Several prominent cabinet ministers were conspicuously absent from the inaugural summit.",
    "exampleTr": "Birkaç önde gelen kabine bakanı, açılış zirvesinde göze çarpar şekilde yoktu.",
    "synonyms": [
      "noticeably",
      "markedly",
      "prominently",
      "strikingly"
    ],
    "collocations": [
      "conspicuously absent",
      "conspicuously present"
    ],
    "sourceCategory": "Remzi Hoca / Akın Dil"
  },
  {
    "term": "relentlessly",
    "meaningsTr": [
      "amansızca",
      "durmaksızın",
      "acımasızca"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "In an unceasingly intense or harsh way; without pausing or giving up",
    "exampleEn": "Human rights advocates campaigned relentlessly against child labor abuses.",
    "exampleTr": "İnsan hakları savunucuları, çocuk işçiliği suistimallerine karşı amansızca mücadele etti.",
    "synonyms": [
      "persistently",
      "untiringly",
      "unceasingly",
      "implacably"
    ],
    "collocations": [
      "pursue relentlessly",
      "work relentlessly"
    ],
    "sourceCategory": "Benim Hocam / Modadil"
  },
  {
    "term": "spontaneously",
    "meaningsTr": [
      "kendiliğinden",
      "doğal olarak",
      "aniden planlanmadan"
    ],
    "type": "zarf",
    "level": "B2",
    "definitionEn": "As a result of a sudden impulse and without premeditation or external cause",
    "exampleEn": "Crowds gathered spontaneously outside the presidential palace to celebrate the ceasefire.",
    "exampleTr": "Kalabalıklar, ateşkesi kutlamak için başkanlık sarayının önünde kendiliğinden toplandı.",
    "synonyms": [
      "impulsively",
      "instinctively",
      "voluntarily"
    ],
    "collocations": [
      "erupt spontaneously",
      "react spontaneously"
    ],
    "sourceCategory": "ODTÜ GV / Reader at Work"
  }
];
