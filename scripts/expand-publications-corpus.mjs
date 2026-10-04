// scripts/expand-publications-corpus.mjs
// Expands YDS_PUBLICATIONS_MASTER_CORPUS with high-frequency 2013-2026 YDS/YDT/YÖKDİL exam lexicon
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.resolve(__dirname, "../src/lib/vocabulary/publications-master-corpus.ts");

// Read existing file
const existingContent = fs.readFileSync(targetPath, "utf-8");

// Parse existing array items from the ts file
const match = existingContent.match(/export const YDS_PUBLICATIONS_MASTER_CORPUS: PublicationWord\[\] = (\[[\s\S]*?\]);/);
if (!match) {
  console.error("Could not find YDS_PUBLICATIONS_MASTER_CORPUS in target file");
  process.exit(1);
}

// Additional high-yield 2013-2026 YDS / YDT / YÖKDİL publications vocabulary
const additionalWords = [
  // PHRASAL VERBS & PREPOSITIONAL VERBS (Akın Dil, Modadil, Remzi Hoca, Dilko)
  {
    term: "account for",
    meaningsTr: ["oluşturmak", "açıklamak", "sorumlu olmak"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To form a particular amount or part of something; to explain the cause of something",
    exampleEn: "Renewable sources account for almost thirty percent of national electricity production.",
    exampleTr: "Yenilenebilir kaynaklar, ulusal elektrik üretiminin neredeyse yüzde otuzunu oluşturmaktadır.",
    synonyms: ["comprise", "constitute", "explain"],
    collocations: ["account for the difference", "account for 20% of"],
    sourceCategory: "Akın Dil / Modadil / YDS Core"
  },
  {
    term: "bring about",
    meaningsTr: ["sebep olmak", "yol açmak", "doğurmak"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To cause something to happen",
    exampleEn: "The Industrial Revolution brought about profound transformations in European society.",
    exampleTr: "Sanayi Devrimi, Avrupa toplumunda derin dönüşümlere yol açtı.",
    synonyms: ["cause", "lead to", "trigger", "give rise to"],
    collocations: ["bring about changes", "bring about reform"],
    sourceCategory: "Remzi Hoca / YDS Pub / Pelikan"
  },
  {
    term: "carry out",
    meaningsTr: ["yürütmek", "gerçekleştirmek", "uygulamak"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To perform or complete a task, experiment, or duty",
    exampleEn: "Neuroscientists carried out extensive experiments to monitor brain plasticity.",
    exampleTr: "Sinirbilimciler, beyin plastisitesini izlemek için kapsamlı deneyler yürüttüler.",
    synonyms: ["conduct", "execute", "implement", "perform"],
    collocations: ["carry out research", "carry out an experiment"],
    sourceCategory: "Modadil / Akın Dil / Benim Hocam"
  },
  {
    term: "cope with",
    meaningsTr: ["başa çıkmak", "üstesinden gelmek"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To deal successfully with a difficult situation or problem",
    exampleEn: "Elderly patients often struggle to cope with chronic cardiovascular conditions.",
    exampleTr: "Yaşlı hastalar genellikle kronik kardiyovasküler rahatsızlıklarla başa çıkmakta zorlanır.",
    synonyms: ["deal with", "handle", "manage", "tackle"],
    collocations: ["cope with stress", "cope with difficulties"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "cut down on",
    meaningsTr: ["azaltmak", "kısmak"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To reduce the amount or consumption of something",
    exampleEn: "Public health guidelines advise citizens to cut down on processed sugar and salt.",
    exampleTr: "Halk sağlığı kılavuzları, vatandaşlara işlenmiş şeker ve tuzu azaltmalarını tavsiye ediyor.",
    synonyms: ["reduce", "decrease", "curtail"],
    collocations: ["cut down on expenses", "cut down on emissions"],
    sourceCategory: "Dilko / ELS / Cambridge"
  },
  {
    term: "figure out",
    meaningsTr: ["anlamak", "çözmek", "kavramak"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To understand or solve something after thought or investigation",
    exampleEn: "Geneticists are attempting to figure out the exact mutation triggering hereditary disorders.",
    exampleTr: "Genetikçiler, kalıtsal bozuklukları tetikleyen kesin mutasyonu çözmeye çalışıyorlar.",
    synonyms: ["understand", "solve", "decipher", "comprehend"],
    collocations: ["figure out a solution", "figure out how"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "give up",
    meaningsTr: ["bırakmak", "vazgeçmek", "pes etmek"],
    type: "phrasal verb",
    level: "B1",
    definitionEn: "To cease making an effort; to stop doing or using something",
    exampleEn: "Despite severe financial setbacks, the archeologist refused to give up his excavation.",
    exampleTr: "Ciddi mali aksaklıklara rağmen arkeolog kazı çalışmalarından vazgeçmeyi reddetti.",
    synonyms: ["abandon", "renounce", "surrender"],
    collocations: ["give up smoking", "give up hope"],
    sourceCategory: "Benim Hocam / YDS Pub"
  },
  {
    term: "keep up with",
    meaningsTr: ["ayak uydurmak", "hızına yetişmek"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To move or progress at the same rate as someone or something",
    exampleEn: "Developing economies must modernize their digital infrastructure to keep up with global standards.",
    exampleTr: "Gelişmekte olan ekonomiler, küresel standartlara ayak uydurabilmek için dijital altyapılarını modernize etmelidir.",
    synonyms: ["pace with", "match", "stay abreast of"],
    collocations: ["keep up with changes", "keep up with technology"],
    sourceCategory: "Remzi Hoca / İrem"
  },
  {
    term: "look into",
    meaningsTr: ["incelemek", "araştırmak"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To investigate the details of a problem or situation",
    exampleEn: "The parliamentary commission was instructed to look into corporate environmental violations.",
    exampleTr: "Meclis komisyonuna, şirketlerin çevre ihlallerini inceleme talimatı verildi.",
    synonyms: ["investigate", "examine", "scrutinize", "probe"],
    collocations: ["look into the matter", "look into allegations"],
    sourceCategory: "Pelikan / YDS Pub"
  },
  {
    term: "make up for",
    meaningsTr: ["telafi etmek", "karşılamak"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To compensate for something lost, missed, or lacking",
    exampleEn: "Extra weekend lectures were scheduled to make up for lost class hours during the snowstorm.",
    exampleTr: "Kar fırtınası sırasında kaybedilen ders saatlerini telafi etmek için hafta sonu ek dersler planlandı.",
    synonyms: ["compensate for", "offset", "redress"],
    collocations: ["make up for lost time", "make up for deficits"],
    sourceCategory: "Akın Dil / Modadil / Cambridge"
  },
  {
    term: "put off",
    meaningsTr: ["ertelemek"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To postpone something to a later date or time",
    exampleEn: "Due to political unrest, international observers decided to put off the referendum.",
    exampleTr: "Siyasi huzursuzluk nedeniyle uluslararası gözlemciler referandumu ertelemeye karar verdiler.",
    synonyms: ["postpone", "delay", "defer"],
    collocations: ["put off a meeting", "put off making a decision"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "put up with",
    meaningsTr: ["katlanmak", "tahammül etmek"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To tolerate or endure an unpleasant situation or person",
    exampleEn: "Residents living near the industrial harbor can no longer put up with severe noise pollution.",
    exampleTr: "Sanayi limanının yakınında yaşayan bölge sakinleri artık şiddetli gürültü kirliliğine katlanamıyor.",
    synonyms: ["tolerate", "endure", "bear", "stand"],
    collocations: ["put up with noise", "put up with conditions"],
    sourceCategory: "Remzi Hoca / Modadil"
  },
  {
    term: "rely on",
    meaningsTr: ["güvenmek", "bel bağlamak", "-e bağımlı olmak"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To depend on with full trust or confidence",
    exampleEn: "Many arid regions rely on seasonal precipitation for agricultural irrigation.",
    exampleTr: "Birçok kurak bölge, tarımsal sulama için mevsimsel yağışlara bel bağlamaktadır.",
    synonyms: ["depend on", "count on", "bank on"],
    collocations: ["rely heavily on", "rely on data"],
    sourceCategory: "Benim Hocam / Akın Dil"
  },
  {
    term: "run out of",
    meaningsTr: ["tükenmek", "bitmek (kaynak/zaman)"],
    type: "phrasal verb",
    level: "B1",
    definitionEn: "To use up all of one's supply of something",
    exampleEn: "Unless alternative aquifers are tapped, the metropolis could run out of potable water by next summer.",
    exampleTr: "Alternatif akiferler açılmadığı takdirde, metropolün içilebilir suyu gelecek yaza kadar tükenebilir.",
    synonyms: ["exhaust", "deplete", "drain"],
    collocations: ["run out of time", "run out of money"],
    sourceCategory: "YDS Pub / Dilko"
  },
  {
    term: "stem from",
    meaningsTr: ["-den kaynaklanmak", "-den ileri gelmek"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To originate from or be caused by something",
    exampleEn: "Much of modern diplomatic friction stems from conflicting maritime territory claims.",
    exampleTr: "Modern diplomatik sürtüşmelerin büyük bir kısmı, çelişen deniz yetki alanı iddialarından kaynaklanmaktadır.",
    synonyms: ["originate from", "derive from", "arise from"],
    collocations: ["stem from the fact that", "stem from childhood"],
    sourceCategory: "Modadil / Cambridge / Akın Dil"
  },
  {
    term: "turn down",
    meaningsTr: ["reddetmek", "geri çevirmek"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To reject or refuse an offer, request, or proposal",
    exampleEn: "The board of directors turned down the lucrative takeover offer from foreign competitors.",
    exampleTr: "Yönetim kurulu, yabancı rakiplerden gelen cazip devralma teklifini reddetti.",
    synonyms: ["reject", "refuse", "decline", "dismiss"],
    collocations: ["turn down an offer", "turn down an invitation"],
    sourceCategory: "Remzi Hoca / Yargı"
  },
  {
    term: "wipe out",
    meaningsTr: ["yok etmek", "kökünü kazımak"],
    type: "phrasal verb",
    level: "B2",
    definitionEn: "To destroy or remove something completely",
    exampleEn: "The volcanic eruption wiped out numerous prehistoric settlements along the coastline.",
    exampleTr: "Volkanik patlama, kıyı şeridindeki çok sayıda tarih öncesi yerleşimi tamamen yok etti.",
    synonyms: ["destroy", "eradicate", "eliminate", "annihilate"],
    collocations: ["wipe out diseases", "wipe out populations"],
    sourceCategory: "Pelikan / ODTÜ GV"
  },
  // HIGH-FREQUENCY ACADEMIC VERBS (Cambridge, Oxford, Modadil, Akın Dil)
  {
    term: "acquire",
    meaningsTr: ["edinmek", "kazanmak", "elde etmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To buy, obtain, or develop an asset, skill, or quality",
    exampleEn: "Children acquire second-language fluency much faster through interactive immersion.",
    exampleTr: "Çocuklar, etkileşimli daldırma yöntemiyle ikinci dil akıcılığını çok daha hızlı edinirler.",
    synonyms: ["obtain", "gain", "attain", "procure"],
    collocations: ["acquire knowledge", "acquire skills"],
    sourceCategory: "Cambridge / Oxford / Akın Dil"
  },
  {
    term: "alter",
    meaningsTr: ["değiştirmek", "başkalaşmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To change or cause to change in character or composition",
    exampleEn: "Genetic engineering can alter plant traits to resist extreme climatic droughts.",
    exampleTr: "Genetik mühendisliği, aşırı iklimsel kuraklıklara direnmek amacıyla bitki özelliklerini değiştirebilir.",
    synonyms: ["modify", "change", "transform", "adjust"],
    collocations: ["alter plans", "alter behavior"],
    sourceCategory: "Modadil / Remzi Hoca"
  },
  {
    term: "anticipate",
    meaningsTr: ["öngörmek", "ummak", "beklemek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To foresee, expect, or predict a future outcome",
    exampleEn: "Economists anticipate a modest rebound in international trade over the next quarter.",
    exampleTr: "Ekonomistler, önümüzdeki çeyrekte uluslararası ticarette ılımlı bir toparlanma öngörüyor.",
    synonyms: ["foresee", "predict", "expect", "envisage"],
    collocations: ["anticipate problems", "anticipate needs"],
    sourceCategory: "YDS Pub / Benim Hocam"
  },
  {
    term: "assess",
    meaningsTr: ["değerlendirmek", "paha biçmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To evaluate the nature, ability, or quality of something",
    exampleEn: "Psychologists designed comprehensive questionnaires to assess cognitive burnout in students.",
    exampleTr: "Psikologlar, öğrencilerde bilişsel tükenmişliği değerlendirmek için kapsamlı anketler tasarladılar.",
    synonyms: ["evaluate", "gauge", "appraise", "estimate"],
    collocations: ["assess the impact", "assess risks"],
    sourceCategory: "ODTÜ GV / More to Read"
  },
  {
    term: "attain",
    meaningsTr: ["ulaşmak", "elde etmek", "erişmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To succeed in achieving a goal or reaching an advanced state",
    exampleEn: "Only through relentless dedication did the physicist attain international scientific acclaim.",
    exampleTr: "Fizikçi, ancak amansız bir adanmışlık sayesinde uluslararası bilimsel takdire ulaştı.",
    synonyms: ["achieve", "reach", "accomplish", "gain"],
    collocations: ["attain a goal", "attain success"],
    sourceCategory: "Akın Dil / Pelikan"
  },
  {
    term: "cease",
    meaningsTr: ["durmak", "sona ermek", "durdurmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To bring or come to an end; stop",
    exampleEn: "Both warring factions agreed to cease military hostilities along the border corridor.",
    exampleTr: "Savaşan her iki grup da sınır koridoru boyunca askeri çatışmaları durdurmayı kabul etti.",
    synonyms: ["stop", "halt", "terminate", "discontinue"],
    collocations: ["cease operations", "cease fire"],
    sourceCategory: "Dilko / Yargı"
  },
  {
    term: "coincide",
    meaningsTr: ["aynı zamana rastlamak", "çakışmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To occur at or during the same time; correspond in nature",
    exampleEn: "The publication of the revolutionary monograph coincided with the astronomer's centennial jubilee.",
    exampleTr: "Devrim niteliğindeki monografinin yayımlanması, gökbilimcinin yüzüncü yıl jübilesiyle çakıştı.",
    synonyms: ["concur", "overlap", "synchronize"],
    collocations: ["coincide with", "dates coincide"],
    sourceCategory: "Cambridge / Modadil"
  },
  {
    term: "compensate",
    meaningsTr: ["telafi etmek", "tazmin etmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To give something, especially money, in recognition of loss or injury",
    exampleEn: "The insurance consortium agreed to compensate farmers for devastating crop losses caused by hail.",
    exampleTr: "Sigorta konsorsiyumu, dolu fırtınasının neden olduğu yıkıcı ürün kayıpları için çiftçilere tazminat ödemeyi kabul etti.",
    synonyms: ["reimburse", "indemnify", "make up for"],
    collocations: ["compensate for damages", "compensate victims"],
    sourceCategory: "YDS Pub / Remzi Hoca"
  },
  {
    term: "compile",
    meaningsTr: ["derlemek", "bir araya getirmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To produce something by assembling information collected from other sources",
    exampleEn: "Linguists spent a decade compiling an exhaustive lexicographical dictionary of extinct dialects.",
    exampleTr: "Dilbilimciler, soyu tükenmiş lehçelerin kapsamlı bir sözlüğünü derlemek için on yıl harcadılar.",
    synonyms: ["assemble", "gather", "collate", "accumulate"],
    collocations: ["compile data", "compile a list"],
    sourceCategory: "Oxford / Benim Hocam"
  },
  {
    term: "conceive",
    meaningsTr: ["tasarlamak", "tasavvur etmek", "kavramak"],
    type: "fiil",
    level: "C1",
    definitionEn: "To form a mental representation or concept of; devise",
    exampleEn: "It is difficult to conceive how ancient civilizations transported monumental megaliths across mountains.",
    exampleTr: "Eski uygarlıkların dağların üzerinden anıtsal megalitleri nasıl taşıdığını tasavvur etmek zordur.",
    synonyms: ["envisage", "imagine", "devise", "conceptualize"],
    collocations: ["conceive an idea", "conceive a plan"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "confirm",
    meaningsTr: ["doğrulamak", "onaylamak"],
    type: "fiil",
    level: "B1",
    definitionEn: "To establish the truth or correctness of something previously believed",
    exampleEn: "Recent genomic sequencing confirmed that the fossil belonged to a previously uncataloged hominid.",
    exampleTr: "Son genomik dizilim, fosilin daha önce kataloglanmamış bir insansıya ait olduğunu doğruladı.",
    synonyms: ["verify", "substantiate", "corroborate", "validate"],
    collocations: ["confirm suspicions", "confirm findings"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "conform to",
    meaningsTr: ["uymak", "uyum göstermek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To comply with rules, standards, or laws",
    exampleEn: "All imported manufactured consumer electronics must conform to strict European safety directives.",
    exampleTr: "İthal edilen tüm tüketici elektroniği ürünleri, katı Avrupa güvenlik yönergelerine uymak zorundadır.",
    synonyms: ["comply with", "abide by", "follow"],
    collocations: ["conform to standards", "conform to rules"],
    sourceCategory: "Remzi Hoca / İrem"
  },
  {
    term: "constitute",
    meaningsTr: ["oluşturmak", "teşkil etmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To be a part of a whole; form",
    exampleEn: "Women constitute more than fifty-five percent of enrolled undergraduate cohorts in medical faculties.",
    exampleTr: "Kadınlar, tıp fakültelerinde kayıtlı lisans gruplarının yüzde elli beşinden fazlasını oluşturmaktadır.",
    synonyms: ["compose", "make up", "form", "comprise"],
    collocations: ["constitute a threat", "constitute a majority"],
    sourceCategory: "Cambridge / YDS Pub"
  },
  {
    term: "contemplate",
    meaningsTr: ["düşünmek", "tasarlamak", "kafa yormak"],
    type: "fiil",
    level: "C1",
    definitionEn: "To think profoundly and at length; consider",
    exampleEn: "The urban planning council is contemplating the introduction of congestion fees in historic districts.",
    exampleTr: "Şehir planlama konseyi, tarihi bölgelerde trafik sıkışıklığı ücreti getirmeyi derinlemesine düşünüyor.",
    synonyms: ["consider", "ponder", "deliberate", "reflect upon"],
    collocations: ["contemplate the future", "contemplate resignation"],
    sourceCategory: "ODTÜ GV / More to Read"
  },
  {
    term: "contradict",
    meaningsTr: ["çelişmek", "aksini iddia etmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To deny the truth of a statement by asserting the opposite",
    exampleEn: "Empirical field findings directly contradict the theoretical predictions made by early sociologists.",
    exampleTr: "Ampirik saha bulguları, erken dönem sosyologların teorik tahminleriyle doğrudan çelişmektedir.",
    synonyms: ["dispute", "refute", "conflict with", "counter"],
    collocations: ["contradict evidence", "contradict rumors"],
    sourceCategory: "Pelikan / Akın Dil"
  },
  {
    term: "convey",
    meaningsTr: ["aktarmak", "iletmek", "ifade etmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To communicate a message or idea; transport",
    exampleEn: "Poetry allows authors to convey nuanced emotional states that prose can seldom capture.",
    exampleTr: "Şiir, yazarların düzyazının nadiren yakalayabildiği ince duygusal durumları aktarmalarını sağlar.",
    synonyms: ["communicate", "express", "transmit", "impart"],
    collocations: ["convey a message", "convey an impression"],
    sourceCategory: "Modadil / Benim Hocam"
  },
  {
    term: "deduce",
    meaningsTr: ["sonuç çıkarmak", "tümdengelim yapmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To arrive at a fact or a conclusion by reasoning",
    exampleEn: "From the chemical composition of the sediment, geologists deduced that an inland sea once existed.",
    exampleTr: "Tortulun kimyasal bileşiminden yola çıkan jeologlar, bir zamanlar bir iç denizin var olduğu sonucunu çıkardılar.",
    synonyms: ["infer", "conclude", "derive", "glean"],
    collocations: ["deduce from facts", "deduce a hypothesis"],
    sourceCategory: "Oxford / Dilko"
  },
  {
    term: "demonstrate",
    meaningsTr: ["göstermek", "kanıtlamak", "ispat etmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To clearly show the existence or truth of something by giving proof or evidence",
    exampleEn: "Clinical trials demonstrated the remarkable efficacy of the novel antiviral therapeutic agent.",
    exampleTr: "Klinik deneyler, yeni antiviral terapötik ajanın kayda değer etkinliğini gösterdi.",
    synonyms: ["show", "prove", "illustrate", "manifest"],
    collocations: ["demonstrate ability", "demonstrate conclusively"],
    sourceCategory: "YDS Pub / Remzi Hoca"
  },
  {
    term: "deter",
    meaningsTr: ["caydırıcı olmak", "vazgeçirmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To discourage someone from doing something through fear of the consequences",
    exampleEn: "Severe judicial penalties are designed to deter individuals from engaging in white-collar tax evasion.",
    exampleTr: "Ağır adli cezalar, bireyleri beyaz yakalı vergi kaçakçılığına kalkışmaktan caydırmak amacıyla tasarlanmıştır.",
    synonyms: ["discourage", "dissuade", "prevent", "inhibit"],
    collocations: ["deter crime", "deter aggression"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "differentiate",
    meaningsTr: ["ayırt etmek", "farklılaştırmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To recognize or ascertain what makes someone or something different",
    exampleEn: "Trained ornithologists can readily differentiate related songbird species by their melodic cadences.",
    exampleTr: "Eğitimli kuşbilimciler, akraba ötücü kuş türlerini melodik ritimlerinden kolayca ayırt edebilirler.",
    synonyms: ["distinguish", "discriminate", "tell apart"],
    collocations: ["differentiate between", "differentiate from"],
    sourceCategory: "Cambridge / Pelikan"
  },
  {
    term: "diminish",
    meaningsTr: ["azalmak", "azaltmak", "küçülmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To make or become less",
    exampleEn: "Prolonged social isolation can severely diminish a person's cognitive resilience and well-being.",
    exampleTr: "Uzun süreli sosyal izolasyon, bir kişinin bilişsel direncini ve esenliğini ciddi şekilde azaltabilir.",
    synonyms: ["decrease", "lessen", "reduce", "dwindle"],
    collocations: ["diminish over time", "diminish importance"],
    sourceCategory: "Benim Hocam / ODTÜ GV"
  },
  {
    term: "discern",
    meaningsTr: ["fark etmek", "ayırt etmek", "sezmek"],
    type: "fiil",
    level: "C1",
    definitionEn: "To perceive or recognize something through the senses or intellect",
    exampleEn: "Economists struggled to discern any coherent pattern amid the volatile commodity price swings.",
    exampleTr: "Ekonomistler, dalgalı emtia fiyat hareketleri arasında tutarlı bir örüntü sezmekte zorlandılar.",
    synonyms: ["perceive", "detect", "distinguish", "recognize"],
    collocations: ["discern differences", "discern the truth"],
    sourceCategory: "Reader at Work / Remzi Hoca"
  },
  {
    term: "distort",
    meaningsTr: ["çarpıtmak", "tahrif etmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To pull or twist out of shape; give a misleading or false account or impression of",
    exampleEn: "Partisan media outlets deliberately distorted the minister's remarks regarding demographic trends.",
    exampleTr: "Taraflı medya organları, bakanın demografik eğilimlere ilişkin sözlerini kasten çarpıttı.",
    synonyms: ["misrepresent", "falsify", "warp", "skew"],
    collocations: ["distort the truth", "distort facts"],
    sourceCategory: "YDS Pub / Modadil"
  },
  {
    term: "eliminate",
    meaningsTr: ["ortadan kaldırmak", "elemek"],
    type: "fiil",
    level: "B1",
    definitionEn: "To completely remove or get rid of something",
    exampleEn: "Modern immunization programs have successfully eliminated smallpox from human populations.",
    exampleTr: "Modern aşılama programları, çiçek hastalığını insan popülasyonlarından tamamen ortadan kaldırmıştır.",
    synonyms: ["eradicate", "remove", "abolish", "terminate"],
    collocations: ["eliminate risks", "eliminate poverty"],
    sourceCategory: "Akın Dil / Cambridge"
  },
  {
    term: "emphasize",
    meaningsTr: ["vurgulamak", "üzerinde durmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To give special importance or prominence to something in speaking or writing",
    exampleEn: "The pedagogical handbook emphasized the vital role of formative assessments in student mastery.",
    exampleTr: "Pedagojik el kitabı, biçimlendirici değerlendirmelerin öğrenci başarısındaki hayati rolünü vurguladı.",
    synonyms: ["stress", "underline", "highlight", "accentuate"],
    collocations: ["emphasize the importance", "emphasize that"],
    sourceCategory: "Oxford / Benim Hocam"
  },
  {
    term: "enhance",
    meaningsTr: ["geliştirmek", "artırmak", "iyileştirmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To intensify, increase, or further improve the quality, value, or extent of",
    exampleEn: "Regular aerobic conditioning enhances cardiovascular stamina and cerebral blood flow.",
    exampleTr: "Düzenli aerobik kondisyon, kardiyovasküler dayanıklılığı ve beyin kan akışını artırır.",
    synonyms: ["improve", "boost", "augment", "elevate"],
    collocations: ["enhance performance", "enhance skills"],
    sourceCategory: "Modadil / Remzi Hoca"
  },
  {
    term: "ensure",
    meaningsTr: ["sağlamak", "garantiye almak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To make certain that something will occur or be so",
    exampleEn: "Aviation regulations ensure that commercial airliners undergo rigorous pre-flight inspections.",
    exampleTr: "Havacılık düzenlemeleri, ticari yolcu uçaklarının uçuş öncesi titiz denetimlerden geçmesini sağlar.",
    synonyms: ["guarantee", "secure", "make certain"],
    collocations: ["ensure safety", "ensure compliance"],
    sourceCategory: "YDS Pub / Akın Dil"
  },
  {
    term: "evaluate",
    meaningsTr: ["değerlendirmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To form an idea of the amount, number, or value of; assess",
    exampleEn: "Independent examiners were appointed to evaluate the environmental safety of the proposed dam.",
    exampleTr: "Önerilen barajın çevre güvenliğini değerlendirmek üzere bağımsız denetçiler atandı.",
    synonyms: ["assess", "appraise", "judge", "rate"],
    collocations: ["evaluate progress", "evaluate effectiveness"],
    sourceCategory: "ODTÜ GV / More to Read"
  },
  {
    term: "exceed",
    meaningsTr: ["aşmak", "ötesine geçmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To be greater in number or size than a quantity, number, or other units",
    exampleEn: "Quarterly corporate revenues substantially exceeded the conservative forecasts of Wall Street analysts.",
    exampleTr: "Üç aylık şirket gelirleri, Wall Street analistlerinin muhafazakâr tahminlerini büyük ölçüde aştı.",
    synonyms: ["surpass", "outstrip", "transcend", "outdo"],
    collocations: ["exceed expectations", "exceed limits"],
    sourceCategory: "Pelikan / Dilko"
  },
  {
    term: "exploit",
    meaningsTr: ["faydalanmak", "istismar etmek", "kullanmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To make full use of and derive benefit from a resource; treat someone unfairly for one's own advantage",
    exampleEn: "Developing nations must learn how to exploit renewable geothermal assets sustainably.",
    exampleTr: "Gelişmekte olan ülkeler, yenilenebilir jeotermal kaynaklardan sürdürülebilir biçimde yararlanmayı öğrenmelidir.",
    synonyms: ["utilize", "harness", "leverage", "abuse"],
    collocations: ["exploit resources", "exploit opportunities"],
    sourceCategory: "Cambridge / Akın Dil"
  },
  {
    term: "facilitate",
    meaningsTr: ["kolaylaştırmak", "olanak sağlamak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To make an action or process easy or easier",
    exampleEn: "Bilateral trade treaties facilitate cross-border transport of essential agricultural commodities.",
    exampleTr: "İkili ticaret anlaşmaları, temel tarımsal emtiaların sınır ötesi taşınmasını kolaylaştırır.",
    synonyms: ["ease", "expedite", "smooth", "promote"],
    collocations: ["facilitate learning", "facilitate communication"],
    sourceCategory: "Modadil / Remzi Hoca"
  },
  {
    term: "fluctuate",
    meaningsTr: ["dalgalanmak", "iniş çıkış göstermek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To rise and fall irregularly in number or amount",
    exampleEn: "Agricultural commodity prices fluctuate drastically depending upon geopolitical conflicts and weather.",
    exampleTr: "Tarımsal emtia fiyatları, jeopolitik çatışmalara ve hava koşullarına bağlı olarak büyük ölçüde dalgalanır.",
    synonyms: ["oscillate", "vary", "waver", "swing"],
    collocations: ["fluctuate widely", "temperatures fluctuate"],
    sourceCategory: "Benim Hocam / YDS Pub"
  },
  {
    term: "foster",
    meaningsTr: ["teşvik etmek", "büyütmek", "geliştirmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To encourage or promote the development of something desirable",
    exampleEn: "Collaborative research seminars foster interdisciplinary innovation among doctoral candidates.",
    exampleTr: "İş birliğine dayalı araştırma seminerleri, doktora adayları arasında disiplinler arası yeniliği teşvik eder.",
    synonyms: ["encourage", "nurture", "promote", "cultivate"],
    collocations: ["foster growth", "foster creativity"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "hinder",
    meaningsTr: ["engellemek", "aksatmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To create difficulties for someone or something, resulting in delay or obstruction",
    exampleEn: "Severe logistical gridlocks hindered international rescue missions following the earthquake.",
    exampleTr: "Şiddetli lojistik tıkanıklıklar, depremin ardından uluslararası kurtarma misyonlarını engelledi.",
    synonyms: ["impede", "obstruct", "hamper", "block"],
    collocations: ["hinder progress", "hinder development"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "implement",
    meaningsTr: ["yürürlüğe koymak", "uygulamak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To put a decision, plan, or agreement into effect",
    exampleEn: "Municipal authorities plan to implement stricter recycling regulations starting next fiscal year.",
    exampleTr: "Belediye yetkilileri, gelecek mali yıldan itibaren daha katı geri dönüşüm düzenlemelerini uygulamayı planlıyor.",
    synonyms: ["execute", "apply", "enforce", "carry out"],
    collocations: ["implement policies", "implement reforms"],
    sourceCategory: "Oxford / Pelikan"
  },
  {
    term: "induce",
    meaningsTr: ["tetiklemek", "neden olmak", "ikna etmek"],
    type: "fiil",
    level: "C1",
    definitionEn: "To succeed in persuading or leading someone to do something; bring about or give rise to",
    exampleEn: "Excessive occupational stress can induce acute cardiovascular episodes and immune dysfunction.",
    exampleTr: "Aşırı mesleki stres, akut kardiyovasküler krizleri ve bağışıklık bozukluğunu tetikleyebilir.",
    synonyms: ["cause", "provoke", "stimulate", "prompt"],
    collocations: ["induce sleep", "induce vomiting"],
    sourceCategory: "Cambridge / Remzi Hoca"
  },
  {
    term: "inhibit",
    meaningsTr: ["engellemek", "dizginlemek", "yavaşlatmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To hinder, restrain, or prevent an action or process",
    exampleEn: "Antibiotic compounds inhibit the synthesis of bacterial cell walls, preventing pathogen proliferation.",
    exampleTr: "Antibiyotik bileşikleri, bakteriyel hücre duvarlarının sentezini engelleyerek patojen çoğalmasını önler.",
    synonyms: ["suppress", "restrain", "hinder", "curb"],
    collocations: ["inhibit growth", "inhibit enzymes"],
    sourceCategory: "YDS Pub / Benim Hocam"
  },
  {
    term: "initiate",
    meaningsTr: ["başlatmak", "öncülük etmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To cause a process or action to begin",
    exampleEn: "The university medical center initiated a nationwide longitudinal trial on Alzheimer's biomarkers.",
    exampleTr: "Üniversite tıp merkezi, Alzheimer biyobelirteçleri üzerine ülke çapında uzun vadeli bir deneme başlattı.",
    synonyms: ["start", "commence", "launch", "inaugurate"],
    collocations: ["initiate a project", "initiate proceedings"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "integrate",
    meaningsTr: ["bütünleştirmek", "entegre etmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To combine one thing with another so that they become a whole",
    exampleEn: "Smart cities aim to integrate artificial intelligence sensors into municipal transit networks.",
    exampleTr: "Akıllı şehirler, yapay zekâ sensörlerini belediye toplu taşıma ağlarına entegre etmeyi hedefliyor.",
    synonyms: ["combine", "incorporate", "amalgamate", "merge"],
    collocations: ["integrate into", "integrate systems"],
    sourceCategory: "ODTÜ GV / More to Read"
  },
  {
    term: "justify",
    meaningsTr: ["haklı çıkarmak", "gerekçelendirmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To show or prove to be right or reasonable",
    exampleEn: "The mayor could not justify the exorbitant budget overruns incurred during stadium construction.",
    exampleTr: "Belediye başkanı, stadyum inşaatı sırasında meydana gelen fahiş bütçe aşımlarını gerekçelendiremedi.",
    synonyms: ["vindicate", "substantiate", "defend", "warrant"],
    collocations: ["justify expenses", "justify actions"],
    sourceCategory: "Dilko / Remzi Hoca"
  },
  {
    term: "maintain",
    meaningsTr: ["sürdürmek", "korumak", "iddia etmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To cause or enable a condition or state of affairs to continue; assert strongly",
    exampleEn: "Economists maintain that fiscal austerity without structural reform rarely sparks sustainable growth.",
    exampleTr: "Ekonomistler, yapısal reform olmaksızın mali kemer sıkmanın nadiren sürdürülebilir büyüme sağladığını iddia etmektedir.",
    synonyms: ["preserve", "sustain", "uphold", "assert"],
    collocations: ["maintain standards", "maintain order"],
    sourceCategory: "Oxford / Pelikan"
  },
  {
    term: "modify",
    meaningsTr: ["değiştirmek", "uyarlamak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To make partial or minor changes to something, typically so as to improve it",
    exampleEn: "Aerospace engineers modified the aerodynamic wings to reduce supersonic turbulence.",
    exampleTr: "Havacılık ve uzay mühendisleri, süpersonik türbülansı azaltmak için aerodinamik kanatları değiştirdiler.",
    synonyms: ["alter", "adapt", "adjust", "amend"],
    collocations: ["modify behavior", "modify an agreement"],
    sourceCategory: "Cambridge / Akın Dil"
  },
  {
    term: "perceive",
    meaningsTr: ["algılamak", "farkına varmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To become aware or conscious of something; interpret in a stated way",
    exampleEn: "Consumers perceive certified organic produce as fundamentally healthier than conventional crops.",
    exampleTr: "Tüketiciler, sertifikalı organik ürünleri geleneksel mahsullere göre temelde daha sağlıklı olarak algılamaktadır.",
    synonyms: ["sense", "discern", "recognize", "regard"],
    collocations: ["perceive a threat", "perceive reality"],
    sourceCategory: "Benim Hocam / Modadil"
  },
  {
    term: "postpone",
    meaningsTr: ["ertelemek"],
    type: "fiil",
    level: "B1",
    definitionEn: "To cause or arrange for something to take place at a time later than that first scheduled",
    exampleEn: "The diplomatic summit was postponed until all delegational ambassadors completed treaty reviews.",
    exampleTr: "Diplomatik zirve, tüm delege büyükelçileri antlaşma incelemelerini tamamlayana kadar ertelendi.",
    synonyms: ["delay", "defer", "put off", "shelve"],
    collocations: ["postpone a meeting", "postpone a decision"],
    sourceCategory: "YDS Pub / Remzi Hoca"
  },
  {
    term: "reinforce",
    meaningsTr: ["güçlendirmek", "pekiştirmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To strengthen or support an object, feeling, or argument",
    exampleEn: "Recent geological surveys reinforce the hypothesis that volcanic plumes trigger continental rifts.",
    exampleTr: "Son jeolojik araştırmalar, volkanik dumanların kıtasal yarıkları tetiklediği hipotezini güçlendirmektedir.",
    synonyms: ["strengthen", "fortify", "bolster", "consolidate"],
    collocations: ["reinforce beliefs", "reinforce structures"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "retain",
    meaningsTr: ["alıkoymak", "muhafaza etmek", "sürdürmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To continue to have something; keep possession of",
    exampleEn: "Ceramic thermal coatings retain heat effectively under extreme atmospheric re-entry conditions.",
    exampleTr: "Seramik termal kaplamalar, aşırı atmosferik yeniden giriş koşulları altında ısıyı etkili bir şekilde muhafaza eder.",
    synonyms: ["keep", "preserve", "hold", "maintain"],
    collocations: ["retain memory", "retain control"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "sustain",
    meaningsTr: ["sürdürmek", "ayakta tutmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To strengthen or support physically or mentally; maintain over a prolonged period",
    exampleEn: "The biosphere cannot sustain the current hyper-consumptive trajectory of modern civilization.",
    exampleTr: "Biyosfer, modern uygarlığın mevcut aşırı tüketimci gidişatını ayakta tutamaz.",
    synonyms: ["maintain", "support", "prolong", "endure"],
    collocations: ["sustain life", "sustain economic growth"],
    sourceCategory: "Cambridge / Pelikan"
  },
  {
    term: "trigger",
    meaningsTr: ["tetiklemek", "başlatmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To cause an event or situation to happen or exist",
    exampleEn: "Sudden drops in atmospheric barometric pressure frequently trigger migraine attacks in sensitive subjects.",
    exampleTr: "Atmosferik barometrik basınçtaki ani düşüşler, hassas deneklerde sıklıkla migren ataklarını tetikler.",
    synonyms: ["precipitate", "spark", "activate", "prompt"],
    collocations: ["trigger a reaction", "trigger a crisis"],
    sourceCategory: "Remzi Hoca / Benim Hocam"
  },
  {
    term: "undermine",
    meaningsTr: ["baltalamak", "sarsmak", "zayıflatmak"],
    type: "fiil",
    level: "C1",
    definitionEn: "To lessen the effectiveness, power, or ability of, especially gradually or insidiously",
    exampleEn: "Pervasive judicial corruption severely undermines citizen trust in constitutional democratic institutions.",
    exampleTr: "Yaygın yargı yolsuzluğu, vatandaşların anayasal demokratik kurumlara olan güvenini ciddi biçimde baltalar.",
    synonyms: ["weaken", "compromise", "sabotage", "erode"],
    collocations: ["undermine authority", "undermine confidence"],
    sourceCategory: "ODTÜ GV / More to Read / YDS Pub"
  },
  {
    term: "utilize",
    meaningsTr: ["faydalanmak", "kullanmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To make practical and effective use of",
    exampleEn: "Agronomists utilize satellite telemetry to monitor crop irrigation and soil nutrient depletion.",
    exampleTr: "Ziraat uzmanları, ekin sulamasını ve toprak besin maddesi tükenmesini izlemek için uydu telemetrisini kullanır.",
    synonyms: ["employ", "use", "apply", "exploit"],
    collocations: ["utilize resources", "utilize technology"],
    sourceCategory: "Oxford / Akın Dil"
  },
  {
    term: "yield",
    meaningsTr: ["ürün vermek", "sağlamak", "boyun eğmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To produce or provide a natural, agricultural, or industrial product; surrender",
    exampleEn: "Drought-resistant maize varieties yield fifteen percent more grain under adverse hydrological stress.",
    exampleTr: "Kuraklığa dayanıklı mısır çeşitleri, olumsuz hidrolojik stres altında yüzde on beş daha fazla tahıl ürünü verir.",
    synonyms: ["produce", "generate", "provide", "surrender"],
    collocations: ["yield results", "yield profits"],
    sourceCategory: "Modadil / Cambridge"
  },
  // HIGH-YIELD ACADEMIC NOUNS
  {
    term: "breakthrough",
    meaningsTr: ["çığır açıcı gelişme", "büyük buluş"],
    type: "isim",
    level: "B2",
    definitionEn: "A sudden, dramatic, and important discovery or development",
    exampleEn: "The invention of CRISPR gene editing marks an unprecedented breakthrough in molecular oncology.",
    exampleTr: "CRISPR gen düzenlemesinin icadı, moleküler onkolojide eşi görülmemiş bir çığır açıcı gelişmeye işaret ediyor.",
    synonyms: ["advancement", "discovery", "triumph", "stride"],
    collocations: ["scientific breakthrough", "major breakthrough"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "catastrophe",
    meaningsTr: ["felaket", "yıkım"],
    type: "isim",
    level: "B2",
    definitionEn: "An event causing great and often sudden damage or suffering; a disaster",
    exampleEn: "The meltdown of the offshore petrochemical refinery triggered an ecological catastrophe in the marine estuary.",
    exampleTr: "Açık deniz petrokimya rafinerisinin çöküşü, deniz halicinde ekolojik bir felaketi tetikledi.",
    synonyms: ["disaster", "calamity", "tragedy", "devastation"],
    collocations: ["natural catastrophe", "avoid catastrophe"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "complexity",
    meaningsTr: ["karmaşıklık", "çapraşıklık"],
    type: "isim",
    level: "B2",
    definitionEn: "The state or quality of being intricate or complex",
    exampleEn: "The immense computational complexity of quantum encryption safeguards sensitive interbank transfers.",
    exampleTr: "Kuantum şifrelemenin muazzam hesaplama karmaşıklığı, hassas bankalar arası transferleri korur.",
    synonyms: ["intricacy", "sophistication", "convolutedness"],
    collocations: ["growing complexity", "levels of complexity"],
    sourceCategory: "Benim Hocam / Remzi Hoca"
  },
  {
    term: "deficiency",
    meaningsTr: ["eksiklik", "yetersizlik"],
    type: "isim",
    level: "B2",
    definitionEn: "A lack or shortage of something necessary",
    exampleEn: "Severe vitamin D deficiency is implicated in autoimmune vulnerabilities and bone mineral loss.",
    exampleTr: "Şiddetli D vitamini eksikliği, otoimmün hassasiyetlerde ve kemik mineral kaybında rol oynamaktadır.",
    synonyms: ["shortage", "scarcity", "lack", "insufficiency"],
    collocations: ["iron deficiency", "deficiency of vitamins"],
    sourceCategory: "Cambridge / Pelikan"
  },
  {
    term: "dilemma",
    meaningsTr: ["ikilem", "çıkmaz"],
    type: "isim",
    level: "B2",
    definitionEn: "A situation in which a difficult choice has to be made between two or more alternatives",
    exampleEn: "Bioethicists face a profound moral dilemma regarding the genomic engineering of human embryos.",
    exampleTr: "Biyoetikçiler, insan embriyolarının genomik mühendisliği konusunda derin bir ahlaki ikilemle karşı karşıyadır.",
    synonyms: ["quandary", "predicament", "impasse"],
    collocations: ["moral dilemma", "face a dilemma"],
    sourceCategory: "Oxford / YDS Pub"
  },
  {
    term: "disparity",
    meaningsTr: ["farklılık", "uçurum", "eşitsizlik"],
    type: "isim",
    level: "C1",
    definitionEn: "A great difference or inequality",
    exampleEn: "The persistent socioeconomic disparity between metropolitan capitals and agrarian provinces fuels domestic migration.",
    exampleTr: "Metropol başkentleri ile tarım vilayetleri arasındaki kalıcı sosyoekonomik uçurum iç göçü körüklüyor.",
    synonyms: ["gap", "imbalance", "inequality", "divergence"],
    collocations: ["income disparity", "growing disparity"],
    sourceCategory: "ODTÜ GV / More to Read"
  },
  {
    term: "diversity",
    meaningsTr: ["çeşitlilik", "farklılık"],
    type: "isim",
    level: "B2",
    definitionEn: "The state of being diverse; a range of different things",
    exampleEn: "Rainforest canopy canopies harbor an astounding diversity of previously undescribed coleopteran species.",
    exampleTr: "Yağmur ormanı gölgelikleri, daha önce tanımlanmamış kın kanatlı türlerinin şaşırtıcı bir çeşitliliğine ev sahipliği yapar.",
    synonyms: ["variety", "heterogeneity", "multiplicity"],
    collocations: ["biological diversity", "cultural diversity"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "efficacy",
    meaningsTr: ["etkinlik", "yararlılık"],
    type: "isim",
    level: "C1",
    definitionEn: "The ability to produce a desired or intended result",
    exampleEn: "Phase III double-blind trials verified the therapeutic efficacy of the novel pediatric immunogen.",
    exampleTr: "Aşama III çift kör denemeleri, yeni pediatrik immünojenin terapötik etkinliğini doğruladı.",
    synonyms: ["effectiveness", "potency", "usefulness", "success"],
    collocations: ["clinical efficacy", "prove efficacy"],
    sourceCategory: "Remzi Hoca / Pelikan"
  },
  {
    term: "hypothesis",
    meaningsTr: ["hipotez", "varsayım"],
    type: "isim",
    level: "B2",
    definitionEn: "A proposed explanation made on the basis of limited evidence as a starting point for investigation",
    exampleEn: "Astrobiologists formulated an audacious hypothesis suggesting microbial life beneath the Martian regolith.",
    exampleTr: "Astrobiyologlar, Mars regolitinin altında mikrobiyal yaşam olduğunu öne süren cesur bir hipotez formüle ettiler.",
    synonyms: ["theory", "conjecture", "premise", "postulate"],
    collocations: ["test a hypothesis", "formulate a hypothesis"],
    sourceCategory: "Cambridge / Benim Hocam"
  },
  {
    term: "incentive",
    meaningsTr: ["teşvik", "özendirici ödül"],
    type: "isim",
    level: "B2",
    definitionEn: "A thing that motivates or encourages someone to do something",
    exampleEn: "Tax credits provide a potent financial incentive for corporations to transition toward clean solar energy.",
    exampleTr: "Vergi indirimleri, şirketlerin temiz güneş enerjisine geçiş yapması için güçlü bir mali teşvik sağlar.",
    synonyms: ["inducement", "motivation", "stimulus", "encouragement"],
    collocations: ["financial incentive", "create incentives"],
    sourceCategory: "YDS Pub / Dilko"
  },
  {
    term: "insight",
    meaningsTr: ["içgörü", "kavrayış"],
    type: "isim",
    level: "B2",
    definitionEn: "The capacity to gain an accurate and deep intuitive understanding of a person or thing",
    exampleEn: "Brain imaging scans provide fascinating neurological insight into the mechanics of auditory memory.",
    exampleTr: "Beyin görüntüleme taramaları, işitsel hafızanın mekaniğine dair büyüleyici nörolojik içgörüler sunar.",
    synonyms: ["understanding", "perception", "comprehension", "awareness"],
    collocations: ["gain insight into", "valuable insight"],
    sourceCategory: "Oxford / Akın Dil"
  },
  {
    term: "jeopardy",
    meaningsTr: ["tehlike", "risk"],
    type: "isim",
    level: "C1",
    definitionEn: "Danger of loss, harm, or failure",
    exampleEn: "Rapid polar glacier retreat puts numerous maritime mammals in immediate ecological jeopardy.",
    exampleTr: "Hızlı kutup buzulu erimesi, birçok deniz memelisini doğrudan ekolojik tehlikeye atmaktadır.",
    synonyms: ["peril", "hazard", "risk", "danger"],
    collocations: ["in jeopardy", "put in jeopardy"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "precaution",
    meaningsTr: ["önlem", "tedbir"],
    type: "isim",
    level: "B2",
    definitionEn: "A measure taken in advance to prevent something dangerous or unpleasant from happening",
    exampleEn: "Civil defense engineers took every possible precaution to reinforce the subterranean subway against seismic shocks.",
    exampleTr: "Sivil savunma mühendisleri, yer altı metrosunu sismik şoklara karşı güçlendirmek için olası her türlü önlemi aldılar.",
    synonyms: ["safeguard", "preventive measure", "protection"],
    collocations: ["take precautions", "safety precaution"],
    sourceCategory: "Modadil / Remzi Hoca"
  },
  {
    term: "prosperity",
    meaningsTr: ["refah", "zenginlik"],
    type: "isim",
    level: "B2",
    definitionEn: "The state of being prosperous, flourishing, or successful, especially financially",
    exampleEn: "Post-war industrial revival brought unprecedented material prosperity to working-class urban families.",
    exampleTr: "Savaş sonrası sanayi canlanması, işçi sınıfı kentli ailelere eşi görülmemiş bir maddi refah getirdi.",
    synonyms: ["wealth", "affluence", "well-being", "opulence"],
    collocations: ["economic prosperity", "peace and prosperity"],
    sourceCategory: "Benim Hocam / Cambridge"
  },
  {
    term: "resilience",
    meaningsTr: ["direnç", "esneklik", "kendini toparlama gücü"],
    type: "isim",
    level: "B2",
    definitionEn: "The capacity to withstand or to recover quickly from difficulties; toughness",
    exampleEn: "Ecosystem resilience determines how rapidly mangrove wetlands recover following intense typhoon surges.",
    exampleTr: "Ekosistem direnci, mangrov sulak alanlarının şiddetli tayfun dalgalanmalarının ardından ne kadar hızla toparlanacağını belirler.",
    synonyms: ["toughness", "adaptability", "endurance", "flexibility"],
    collocations: ["build resilience", "mental resilience"],
    sourceCategory: "Pelikan / Akın Dil"
  },
  {
    term: "scarcity",
    meaningsTr: ["kıtlık", "yetersizlik"],
    type: "isim",
    level: "B2",
    definitionEn: "The state of being scarce or in short supply; shortage",
    exampleEn: "Chronic freshwater scarcity threatens geopolitical stability across several sub-Saharan drainage basins.",
    exampleTr: "Kronik tatlı su kıtlığı, Sahra altı birkaç havza genelinde jeopolitik istikrarı tehdit ediyor.",
    synonyms: ["shortage", "dearth", "paucity", "lack"],
    collocations: ["water scarcity", "scarcity of resources"],
    sourceCategory: "YDS Pub / Remzi Hoca"
  },
  // HIGH-YIELD ACADEMIC ADJECTIVES & ADVERBS
  {
    term: "abrupt",
    meaningsTr: ["ani", "beklenmedik", "sert"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Sudden and unexpected",
    exampleEn: "An abrupt reversal of central banking interest rate policy rattled international bond exchanges.",
    exampleTr: "Merkez bankacılığı faiz oranı politikasının ani bir şekilde tersine dönmesi uluslararası tahvil borsalarını sarstı.",
    synonyms: ["sudden", "unexpected", "precipitous", "hasty"],
    collocations: ["abrupt change", "abrupt ending"],
    sourceCategory: "ODTÜ GV / More to Read"
  },
  {
    term: "chronic",
    meaningsTr: ["kronik", "müzmin", "süregelen"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Persisting for a long time or constantly recurring",
    exampleEn: "Inadequate public transit leads to chronic urban congestion during peak commuter hours.",
    exampleTr: "Yetersiz toplu taşıma, yoğun işe gidiş saatlerinde müzmin kentsel trafik sıkışıklığına yol açar.",
    synonyms: ["persistent", "long-standing", "incurable"],
    collocations: ["chronic illness", "chronic pain"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "coherent",
    meaningsTr: ["tutarlı", "anlaşılır", "bağlantılı"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Logical and consistent; clear and easy to understand",
    exampleEn: "The defense ministry formulated a coherent national security doctrine to counter cyber threats.",
    exampleTr: "Savunma bakanlığı, siber tehditlere karşı koymak için tutarlı bir ulusal güvenlik doktrini formüle etti.",
    synonyms: ["logical", "consistent", "lucid", "rational"],
    collocations: ["coherent argument", "coherent strategy"],
    sourceCategory: "Oxford / Cambridge"
  },
  {
    term: "comprehensive",
    meaningsTr: ["kapsamlı", "etraflı"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Including or dealing with all or nearly all elements or aspects of something",
    exampleEn: "The World Health Organization published a comprehensive compendium on tropical epidemic prevention.",
    exampleTr: "Dünya Sağlık Örgütü, tropikal salgın hastalıkların önlenmesine ilişkin kapsamlı bir kılavuz yayımladı.",
    synonyms: ["exhaustive", "thorough", "all-inclusive", "extensive"],
    collocations: ["comprehensive study", "comprehensive review"],
    sourceCategory: "Benim Hocam / YDS Pub"
  },
  {
    term: "compulsory",
    meaningsTr: ["zorunlu", "mecburi"],
    type: "sıfat",
    level: "B1",
    definitionEn: "Required by law or a rule; obligatory",
    exampleEn: "Primary schooling was made strictly compulsory for all minors aged six through fourteen.",
    exampleTr: "İlköğretim, altı ila on dört yaş arasındaki tüm küçükler için kesinlikle zorunlu hale getirildi.",
    synonyms: ["mandatory", "obligatory", "required", "statutory"],
    collocations: ["compulsory education", "compulsory service"],
    sourceCategory: "Dilko / Pelikan"
  },
  {
    term: "conclusive",
    meaningsTr: ["kesin", "sonuçlandırıcı", "inkâr edilemez"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Serving to settle an issue or produce a definitive verdict",
    exampleEn: "Forensic ballistic analysis offered conclusive proof establishing the suspect's presence at the scene.",
    exampleTr: "Adli balistik analizi, şüphelinin olay yerindeki varlığını kanıtlayan kesin deliller sundu.",
    synonyms: ["definitive", "decisive", "irrefutable", "indisputable"],
    collocations: ["conclusive evidence", "conclusive proof"],
    sourceCategory: "Remzi Hoca / Akın Dil"
  },
  {
    term: "deleterious",
    meaningsTr: ["zararlı", "hasar verici"],
    type: "sıfat",
    level: "C1",
    definitionEn: "Causing harm or damage",
    exampleEn: "Excessive exposure to microplastic particulate pollutants exerts deleterious effects on marine biodiversity.",
    exampleTr: "Mikroplastik partikül kirleticilere aşırı maruz kalma, deniz biyoçeşitliliği üzerinde zararlı etkiler gösterir.",
    synonyms: ["harmful", "damaging", "detrimental", "injurious"],
    collocations: ["deleterious effect", "deleterious consequences"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "drastic",
    meaningsTr: ["radikal", "şiddetli", "kapsamlı"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Likely to have a strong or far-reaching effect; radical and extreme",
    exampleEn: "The government implemented drastic austerity cuts to stabilize sovereign bond default ratings.",
    exampleTr: "Hükümet, devlet tahvili temerrüt notlarını istikrara kavuşturmak için radikal kemer sıkma kesintileri uyguladı.",
    synonyms: ["radical", "extreme", "severe", "dramatic"],
    collocations: ["drastic measures", "drastic action"],
    sourceCategory: "Modadil / Cambridge"
  },
  {
    term: "empirical",
    meaningsTr: ["ampirik", "deneye/gözleme dayalı"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Based on, concerned with, or verifiable by observation or experience rather than theory",
    exampleEn: "Astronomers require empirical observational validation before accepting speculative cosmological models.",
    exampleTr: "Gökbilimciler, spekülatif kozmolojik modelleri kabul etmeden önce ampirik gözlemsel doğrulama talep ederler.",
    synonyms: ["experimental", "observed", "factual", "practical"],
    collocations: ["empirical evidence", "empirical study"],
    sourceCategory: "Benim Hocam / Oxford"
  },
  {
    term: "feasible",
    meaningsTr: ["uygulanabilir", "mümkün", "yapılabilir"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Possible to do easily or conveniently",
    exampleEn: "Civil architects determined that constructing a submerged floating tunnel across the strait was technically feasible.",
    exampleTr: "İnşaat mimarları, boğaz boyunca batık yüzer bir tünel inşa etmenin teknik olarak uygulanabilir olduğunu belirlediler.",
    synonyms: ["practicable", "viable", "achievable", "workable"],
    collocations: ["economically feasible", "technically feasible"],
    sourceCategory: "Akın Dil / Pelikan"
  },
  {
    term: "fundamental",
    meaningsTr: ["temel", "esas"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Forming a necessary base or core; of central importance",
    exampleEn: "Freedom of scholarly expression is a fundamental prerequisite for academic integrity.",
    exampleTr: "Bilimsel ifade özgürlüğü, akademik dürüstlük için temel bir ön koşuldur.",
    synonyms: ["basic", "essential", "primary", "foundational"],
    collocations: ["fundamental human rights", "fundamental flaw"],
    sourceCategory: "YDS Pub / Remzi Hoca"
  },
  {
    term: "inevitable",
    meaningsTr: ["kaçınılmaz"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Certain to happen; unavoidable",
    exampleEn: "Without substantial defensive dykes, catastrophic coastal flooding becomes an inevitable reality.",
    exampleTr: "Önemli savunma setleri olmaksızın, feci kıyı taşkınları kaçınılmaz bir gerçeklik haline gelir.",
    synonyms: ["unavoidable", "inescapable", "inexorable"],
    collocations: ["inevitable outcome", "inevitable consequence"],
    sourceCategory: "Modadil / Cambridge"
  },
  {
    term: "paramount",
    meaningsTr: ["en önemli", "başlıca", "üstün"],
    type: "sıfat",
    level: "C1",
    definitionEn: "More important than anything else; supreme",
    exampleEn: "Patient confidentiality is of paramount ethical importance throughout medical research trials.",
    exampleTr: "Tıbbi araştırma denemeleri boyunca hasta mahremiyeti son derece büyük ve en önemli etik öneme sahiptir.",
    synonyms: ["supreme", "chief", "foremost", "predominant"],
    collocations: ["of paramount importance", "paramount concern"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "plausible",
    meaningsTr: ["makul", "akla yatkın", "inandırıcı"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Seeming reasonable or probable",
    exampleEn: "Paleontologists proposed a plausible correlation between comet impacts and Cretaceous dinosaur extinctions.",
    exampleTr: "Paleontologlar, kuyruklu yıldız çarpmaları ile Kretase dinozorlarının yok oluşu arasında akla yatkın bir korelasyon önerdiler.",
    synonyms: ["credible", "reasonable", "believable", "feasible"],
    collocations: ["plausible explanation", "plausible scenario"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "profound",
    meaningsTr: ["derin", "büyük", "esaslı"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Very great or intense; having or showing great knowledge or insight",
    exampleEn: "The invention of Gutenberg's movable type printing press exerted a profound impact upon global literacy.",
    exampleTr: "Gutenberg'in hareketli harfli matbaasının icadı, küresel okuryazarlık üzerinde derin bir etki yarattı.",
    synonyms: ["deep", "immense", "far-reaching", "intense"],
    collocations: ["profound impact", "profound effect"],
    sourceCategory: "Remzi Hoca / Benim Hocam"
  },
  {
    term: "ubiquitous",
    meaningsTr: ["her yerde bulunan", "yaygın"],
    type: "sıfat",
    level: "C1",
    definitionEn: "Present, appearing, or found everywhere",
    exampleEn: "Smartphones have become ubiquitous fixtures of modern interpersonal socialization.",
    exampleTr: "Akıllı telefonlar, modern kişilerarası sosyalleşmenin her yerde bulunan demirbaşları haline geldi.",
    synonyms: ["omnipresent", "pervasive", "universal", "widespread"],
    collocations: ["ubiquitous presence", "ubiquitous technology"],
    sourceCategory: "Oxford / Cambridge / YDS Pub"
  },
  {
    term: "unprecedented",
    meaningsTr: ["eşi benzeri görülmemiş"],
    type: "sıfat",
    level: "C1",
    definitionEn: "Never done or known before",
    exampleEn: "The speed of global mRNA vaccine development represented an unprecedented scientific triumph.",
    exampleTr: "Küresel mRNA aşı geliştirme hızı, eşi benzeri görülmemiş bir bilimsel zaferi temsil etti.",
    synonyms: ["unmatched", "unrivaled", "extraordinary", "novel"],
    collocations: ["unprecedented scale", "unprecedented level"],
    sourceCategory: "Pelikan / ODTÜ GV"
  },
  {
    term: "vital",
    meaningsTr: ["hayati", "son derece önemli"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Absolutely necessary; essential",
    exampleEn: "Access to verified factual information is vital for maintaining a robust democratic electorate.",
    exampleTr: "Doğrulanmış olgusal bilgilere erişim, güçlü bir demokratik seçmen kitlesini sürdürmek için hayati önem taşır.",
    synonyms: ["crucial", "essential", "indispensable", "critical"],
    collocations: ["vital role", "vital importance"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "vulnerable",
    meaningsTr: ["savunmasız", "hassas", "kırılgan"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Susceptible to physical or emotional attack or harm",
    exampleEn: "Coastal communities are increasingly vulnerable to catastrophic storm surges sparked by oceanic warming.",
    exampleTr: "Kıyı toplulukları, okyanus ısınmasının yol açtığı feci fırtına dalgalarına karşı giderek daha savunmasız hale gelmektedir.",
    synonyms: ["susceptible", "defenseless", "exposed", "fragile"],
    collocations: ["vulnerable populations", "vulnerable to disease"],
    sourceCategory: "YDS Pub / Remzi Hoca"
  },
  {
    term: "consistently",
    meaningsTr: ["sürekli olarak", "tutarlı biçimde"],
    type: "zarf",
    level: "B2",
    definitionEn: "In every case or on every occasion; invariably",
    exampleEn: "Longitudinal educational assessments consistently show that early childhood literacy drives long-term career success.",
    exampleTr: "Uzun vadeli eğitim değerlendirmeleri, erken çocukluk okuryazarlığının uzun vadeli kariyer başarısını tutarlı bir şekilde desteklediğini göstermektedir.",
    synonyms: ["invariably", "regularly", "constantly"],
    collocations: ["consistently high", "consistently demonstrated"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "primarily",
    meaningsTr: ["başlıca", "öncelikle", "esasen"],
    type: "zarf",
    level: "B2",
    definitionEn: "For the most part; mainly",
    exampleEn: "The hospital's intensive pediatric care unit is primarily funded by charitable research foundations.",
    exampleTr: "Hastanenin yoğun çocuk bakım ünitesi, esasen hayırsever araştırma vakıfları tarafından finanse edilmektedir.",
    synonyms: ["mainly", "chiefly", "predominantly", "principally"],
    collocations: ["primarily responsible", "primarily focused"],
    sourceCategory: "Cambridge / Oxford"
  },
  {
    term: "subsequently",
    meaningsTr: ["sonradan", "daha sonra", "akabinde"],
    type: "zarf",
    level: "B2",
    definitionEn: "After a particular thing has happened; afterwards",
    exampleEn: "The treaty was signed in Paris and subsequently ratified by all twenty-four sovereign member states.",
    exampleTr: "Antlaşma Paris'te imzalandı ve akabinde yirmi dört egemen üye devletin tamamı tarafından onaylandı.",
    synonyms: ["afterwards", "later", "consequently"],
    collocations: ["subsequently published", "subsequently proved"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  }
];

// Combine existing with additional, deduplicate by term (lowercase)
const existingCode = match[1];
// eslint-disable-next-line no-eval
const currentArray = eval(`(${existingCode})`);
const termMap = new Map();

for (const item of currentArray) {
  termMap.set(item.term.trim().toLowerCase(), item);
}

let addedCount = 0;
for (const item of additionalWords) {
  const key = item.term.trim().toLowerCase();
  if (!termMap.has(key)) {
    termMap.set(key, item);
    addedCount++;
  }
}

const merged = Array.from(termMap.values());
console.log(`Corpus: previous ${currentArray.length}, added ${addedCount}, total ${merged.length}`);

// Write back formatted
const replacement = "export const YDS_PUBLICATIONS_MASTER_CORPUS: PublicationWord[] = " + JSON.stringify(merged, null, 2) + ";";
const newContent = existingContent.replace(match[0], replacement);
fs.writeFileSync(targetPath, newContent, "utf-8");
console.log("Successfully updated src/lib/vocabulary/publications-master-corpus.ts!");
