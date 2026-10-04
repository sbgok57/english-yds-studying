// scripts/add-mass-publications-corpus.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.resolve(__dirname, "../src/lib/vocabulary/publications-master-corpus.ts");

const curatedExamLexicon = [
  {
    term: "ameliorate",
    meaningsTr: ["iyileştirmek", "düzeltmek", "ıslah etmek"],
    type: "fiil",
    level: "C1",
    definitionEn: "To make something bad or unsatisfactory better",
    exampleEn: "Targeted public health subsidies helped ameliorate infant mortality in impoverished regions.",
    exampleTr: "Hedefe yönelik kamu sağlığı sübvansiyonları, yoksul bölgelerde bebek ölüm oranlarını iyileştirmeye yardımcı oldu.",
    synonyms: ["improve", "enhance", "better", "upgrade"],
    sourceCategory: "Modadil / Remzi Hoca / YDS Core"
  },
  {
    term: "circumvent",
    meaningsTr: ["atlatmak", "çevresinden dolaşmak", "yolunu bulup aşmak"],
    type: "fiil",
    level: "C1",
    definitionEn: "To find a way around an obstacle or rule, typically in a clever or illicit way",
    exampleEn: "Smugglers designed encrypted communication networks to circumvent coastal border patrols.",
    exampleTr: "Kaçakçılar, kıyı sınır devriyelerini atlatmak için şifreli iletişim ağları tasarladılar.",
    synonyms: ["bypass", "evade", "sidestep", "dodge"],
    sourceCategory: "Akın Dil / Reader at Work"
  },
  {
    term: "corroborate",
    meaningsTr: ["doğrulamak", "teyit etmek", "desteklemek"],
    type: "fiil",
    level: "C1",
    definitionEn: "To confirm or give support to a statement, theory, or finding",
    exampleEn: "Satellite infrared data corroborated the climatologists' claims of accelerating polar thaw.",
    exampleTr: "Uydu kızılötesi verileri, iklimbilimcilerin kutup erimesinin hızlandığı yönündeki iddialarını doğruladı.",
    synonyms: ["confirm", "verify", "substantiate", "back up"],
    sourceCategory: "Cambridge / Oxford / Pelikan"
  },
  {
    term: "deteriorate",
    meaningsTr: ["kötüleşmek", "bozulmak", "fenalaşmak"],
    type: "fiil",
    level: "B2",
    definitionEn: "To become progressively worse",
    exampleEn: "Bilateral diplomatic relations deteriorated sharply following the disputed border skirmish.",
    exampleTr: "Tartışmalı sınır çatışmasının ardından ikili diplomatik ilişkiler keskin bir şekilde kötüleşti.",
    synonyms: ["worsen", "decline", "degenerate", "decay"],
    sourceCategory: "Benim Hocam / YDS Pub"
  },
  {
    term: "exacerbate",
    meaningsTr: ["şiddetlendirmek", "daha da kötüleştirmek", "alevlendirmek"],
    type: "fiil",
    level: "C1",
    definitionEn: "To make a problem, bad situation, or negative feeling worse",
    exampleEn: "Unprecedented summer heatwaves exacerbated chronic electrical grid overloads across the country.",
    exampleTr: "Görülmemiş yaz sıcak hava dalgaları, ülke genelinde kronik elektrik şebekesi aşırı yüklenmelerini daha da kötüleştirdi.",
    synonyms: ["aggravate", "worsen", "inflame", "intensify"],
    sourceCategory: "Modadil / Akın Dil / Remzi Hoca"
  },
  {
    term: "eradicate",
    meaningsTr: ["kökünü kazımak", "tamamen yok etmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To destroy completely; put an end to",
    exampleEn: "International inoculation campaigns aim to completely eradicate polio within this decade.",
    exampleTr: "Uluslararası aşılama kampanyaları, bu on yıl içinde çocuk felcinin kökünü tamamen kazımayı hedefliyor.",
    synonyms: ["eliminate", "wipe out", "annihilate", "extirpate"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "hamper",
    meaningsTr: ["engellemek", "aksatmak", "güçleştirmek"],
    type: "fiil",
    level: "B2",
    definitionEn: "To hinder or impede the movement or progress of",
    exampleEn: "Torrential monsoon rains severely hampered humanitarian relief convoys destined for flood victims.",
    exampleTr: "Şiddetli muson yağmurları, sel kurbanlarına yönelen insani yardım konvoylarını ciddi şekilde aksattı.",
    synonyms: ["hinder", "obstruct", "impede", "thwart"],
    sourceCategory: "YDS Pub / Pelikan"
  },
  {
    term: "meticulous",
    meaningsTr: ["titiz", "kılı kırk yaran", "özenli"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Showing great attention to detail; very careful and precise",
    exampleEn: "Archival historians conducted a meticulous examination of sixteenth-century maritime charts.",
    exampleTr: "Arşiv tarihçileri, on altıncı yüzyıl deniz haritalarını titiz bir incelemeye tabi tuttular.",
    synonyms: ["painstaking", "scrupulous", "thorough", "fastidious"],
    sourceCategory: "Oxford / Akın Dil"
  },
  {
    term: "onerous",
    meaningsTr: ["külfetli", "ağır", "zahmetli"],
    type: "sıfat",
    level: "C1",
    definitionEn: "Involving an amount of effort and difficulty that is oppressively burdensome",
    exampleEn: "Complying with the revised maritime environmental regulations proved excessively onerous for small fisheries.",
    exampleTr: "Gözden geçirilmiş deniz çevre düzenlemelerine uymak, küçük balıkçılık işletmeleri için aşırı derecede külfetli çıktı.",
    synonyms: ["burdensome", "taxing", "arduous", "demanding"],
    sourceCategory: "Remzi Hoca / More to Read"
  },
  {
    term: "precarious",
    meaningsTr: ["riskli", "güvencesiz", "pamuk ipliğine bağlı"],
    type: "sıfat",
    level: "C1",
    definitionEn: "Not securely held or in position; dangerously likely to fall or collapse; uncertain",
    exampleEn: "Migrant laborers often find themselves in precarious economic situations with little legal protection.",
    exampleTr: "Göçmen işçiler, genellikle çok az yasal korumayla pamuk ipliğine bağlı güvencesiz ekonomik koşullarda kalmaktadır.",
    synonyms: ["insecure", "perilous", "uncertain", "hazardous"],
    sourceCategory: "Modadil / Cambridge / YDS Pub"
  },
  {
    term: "prolific",
    meaningsTr: ["üretken", "verimli", "bol eser veren"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Producing much fruit or foliage or many offspring; producing many works",
    exampleEn: "Isaac Asimov was one of the most prolific authors of science fiction and popular science in modern history.",
    exampleTr: "Isaac Asimov, modern tarihte bilim kurgu ve popüler bilimin en üretken yazarlarından biriydi.",
    synonyms: ["productive", "fertile", "creative", "abundant"],
    sourceCategory: "Benim Hocam / Dilko"
  },
  {
    term: "robust",
    meaningsTr: ["güçlü", "sağlam", "dinamik"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Strong and healthy; vigorous; able to withstand or overcome adverse conditions",
    exampleEn: "Financial institutions must maintain robust cybersecurity firewalls against state-sponsored intrusion.",
    exampleTr: "Mali kuruluşlar, devlet destekli siber sızmalara karşı güçlü siber güvenlik güvenlik duvarları sürdürmelidir.",
    synonyms: ["sturdy", "strong", "resilient", "tough"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "tangible",
    meaningsTr: ["somut", "hissedilir", "gözle görülür"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Perceptible by touch; clear and definite; real",
    exampleEn: "Diplomatic summits rarely produce tangible breakthroughs without extensive preliminary staff talks.",
    exampleTr: "Diplomatik zirveler, kapsamlı ön hazırlık görüşmeleri olmadan nadiren somut atılımlar üretir.",
    synonyms: ["concrete", "palpable", "real", "visible"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "volatile",
    meaningsTr: ["uçucu", "oynak", "istikrarsız"],
    type: "sıfat",
    level: "C1",
    definitionEn: "Liable to change rapidly and unpredictably, especially for the worse",
    exampleEn: "Cryptocurrency exchanges are notorious for extraordinarily volatile intraday price fluctuations.",
    exampleTr: "Kripto para borsaları, gün içi olağanüstü oynak fiyat dalgalanmalarıyla bilinir.",
    synonyms: ["unstable", "turbulent", "erratic", "fickle"],
    sourceCategory: "Cambridge / Pelikan"
  },
  {
    term: "reluctant",
    meaningsTr: ["isteksiz", "gönülsüz"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Unwilling and hesitant; disinclined",
    exampleEn: "Central banks were initially reluctant to hike benchmark borrowing rates despite mounting inflation.",
    exampleTr: "Merkez bankaları, artan enflasyona rağmen gösterge borçlanma faizlerini artırma konusunda başlangıçta isteksizdi.",
    synonyms: ["unwilling", "hesitant", "disinclined", "loath"],
    sourceCategory: "YDS Pub / Remzi Hoca"
  },
  {
    term: "lucrative",
    meaningsTr: ["kârlı", "kazançlı"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Producing a great deal of profit",
    exampleEn: "Patents on novel biopharmaceutical therapeutics have yielded exceptionally lucrative dividends for investors.",
    exampleTr: "Yeni biyofarmasötik terapötiklerin patentleri, yatırımcılar için son derece kârlı kâr payları sağladı.",
    synonyms: ["profitable", "rewarding", "gainful", "commercial"],
    sourceCategory: "Modadil / Akın Dil"
  },
  {
    term: "hostile",
    meaningsTr: ["düşmanca", "elverişsiz", "hasmane"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Unfriendly; antagonistic; of or belonging to a military enemy",
    exampleEn: "Planetary probes must withstand the extremely hostile atmospheric pressure and acid clouds of Venus.",
    exampleTr: "Gezegen sondaları, Venüs'ün son derece elverişsiz ve düşmanca atmosferik basıncına ve asit bulutlarına dayanmalıdır.",
    synonyms: ["unfriendly", "antagonistic", "inhospitable", "adverse"],
    sourceCategory: "Benim Hocam / ODTÜ GV"
  },
  {
    term: "diligent",
    meaningsTr: ["çalışkan", "gayretli", "özenli"],
    type: "sıfat",
    level: "B2",
    definitionEn: "Having or showing care and conscientiousness in one's work or duties",
    exampleEn: "Through diligent academic inquiry, the graduate fellow identified crucial missing census data.",
    exampleTr: "Lisansüstü araştırmacı, gayretli ve özenli akademik araştırma sayesinde eksik kritik nüfus sayım verilerini tespit etti.",
    synonyms: ["industrious", "assiduous", "hard-working", "conscientious"],
    sourceCategory: "Oxford / Pelikan"
  },
  {
    term: "apprehension",
    meaningsTr: ["endişe", "korku", "kavrama", "yakalama"],
    type: "isim",
    level: "C1",
    definitionEn: "Anxiety or fear that something bad or unpleasant will happen; understanding",
    exampleEn: "Citizens watched the geopolitical crisis escalate with mounting apprehension and dread.",
    exampleTr: "Vatandaşlar, jeopolitik krizin tırmanışını giderek artan bir endişe ve korkuyla izlediler.",
    synonyms: ["anxiety", "trepidation", "dread", "worry"],
    sourceCategory: "Remzi Hoca / More to Read"
  },
  {
    term: "stagnation",
    meaningsTr: ["durgunluk", "hareketsizlik"],
    type: "isim",
    level: "B2",
    definitionEn: "Lack of activity, growth, or development",
    exampleEn: "Structural economic stagnation can only be overcome through targeted infrastructure investments.",
    exampleTr: "Yapısal ekonomik durgunluk, ancak hedefe yönelik altyapı yatırımlarıyla aşılabilir.",
    synonyms: ["inactivity", "sluggishness", "standstill", "torpor"],
    sourceCategory: "Akın Dil / Modadil"
  },
  {
    term: "repercussion",
    meaningsTr: ["yankı", "olumsuz sonuç", "ters tepki"],
    type: "isim",
    level: "C1",
    definitionEn: "An unintended consequence occurring some time after an event or action, especially an unwelcome one",
    exampleEn: "The sudden devaluation of the national currency had disastrous repercussions across all retail sectors.",
    exampleTr: "Ulusal para biriminin aniden devalüe edilmesi, tüm perakende sektörlerinde felaket niteliğinde olumsuz sonuçlara yol açtı.",
    synonyms: ["consequence", "aftermath", "fallout", "outcome"],
    sourceCategory: "ODTÜ GV / Reader at Work"
  },
  {
    term: "surplus",
    meaningsTr: ["fazlalık", "fazla", "artık"],
    type: "isim",
    level: "B2",
    definitionEn: "An amount of something left over when requirements have been met; an excess of production or supply",
    exampleEn: "The export-oriented agrarian province reported a considerable grain surplus following the bountiful harvest.",
    exampleTr: "İhracata yönelik tarım vilayeti, bereketli hasadın ardından önemli bir tahıl fazlalığı bildirdi.",
    synonyms: ["excess", "overabundance", "glut", "leftover"],
    sourceCategory: "Cambridge / YDS Pub"
  },
  {
    term: "upheaval",
    meaningsTr: ["çalkantı", "kargaşa", "köklü değişim"],
    type: "isim",
    level: "C1",
    definitionEn: "A violent or sudden change or disruption to something",
    exampleEn: "The geopolitical collapse of the empire triggered two decades of territorial conflict and social upheaval.",
    exampleTr: "İmparatorluğun jeopolitik çöküşü, yirmi yıllık bölgesel çatışmayı ve toplumsal kargaşayı tetikledi.",
    synonyms: ["turmoil", "disruption", "convulsion", "chaos"],
    sourceCategory: "Pelikan / Remzi Hoca"
  },
  {
    term: "arbitrarily",
    meaningsTr: ["keyfi olarak", "rastgele"],
    type: "zarf",
    level: "B2",
    definitionEn: "On the basis of random choice or personal whim, rather than any reason or system",
    exampleEn: "Political dissidents complained that administrative detentions were being imposed arbitrarily.",
    exampleTr: "Siyasi muhalifler, idari gözaltıların keyfi bir şekilde uygulandığından şikâyet ettiler.",
    synonyms: ["randomly", "capriciously", "whimsically"],
    sourceCategory: "Modadil / Akın Dil"
  },
  {
    term: "fundamentally",
    meaningsTr: ["esasen", "kökten", "temelde"],
    type: "zarf",
    level: "B2",
    definitionEn: "In central or primary respects; essentially",
    exampleEn: "The advent of quantum mechanics fundamentally revised our understanding of atomic causality.",
    exampleTr: "Kuantum mekaniğinin ortaya çıkışı, atomik nedensellik anlayışımızı kökten revize etti.",
    synonyms: ["essentially", "basically", "radically", "inherently"],
    sourceCategory: "Oxford / Benim Hocam"
  },
  {
    term: "inadvertently",
    meaningsTr: ["yanlışlıkla", "farkında olmadan", "istemeyerek"],
    type: "zarf",
    level: "B2",
    definitionEn: "Without intention; accidentally",
    exampleEn: "The lab technician inadvertently contaminated the bacterial culture with airborne fungal spores.",
    exampleTr: "Laboratuvar teknisyeni, havadaki mantar sporlarıyla bakteri kültürünü yanlışlıkla kirletti.",
    synonyms: ["accidentally", "unintentionally", "unwittingly"],
    sourceCategory: "ODTÜ GV / More to Read"
  },
  {
    term: "profoundly",
    meaningsTr: ["derinden", "büyük ölçüde"],
    type: "zarf",
    level: "B2",
    definitionEn: "To a great depth; intensely; extremely",
    exampleEn: "Experiencing severe humanitarian crises profoundly influences a photojournalist's worldview.",
    exampleTr: "Ağır insani krizleri deneyimlemek, bir foto muhabirinin dünya görüşünü derinden etkiler.",
    synonyms: ["deeply", "intensely", "greatly", "immensely"],
    sourceCategory: "Cambridge / YDS Pub"
  }
];

const existing = fs.readFileSync(targetPath, "utf-8");
const match = existing.match(/export const YDS_PUBLICATIONS_MASTER_CORPUS: PublicationWord\[\] = (\[[\s\S]*?\]);/);
if (!match) {
  console.error("Match failed");
  process.exit(1);
}

// eslint-disable-next-line no-eval
const currentArray = eval(`(${match[1]})`);
const termMap = new Map();
for (const it of currentArray) {
  termMap.set(it.term.trim().toLowerCase(), it);
}

let added = 0;
for (const it of curatedExamLexicon) {
  const k = it.term.trim().toLowerCase();
  if (!termMap.has(k)) {
    termMap.set(k, it);
    added++;
  }
}

const list = Array.from(termMap.values());
const replacement = "export const YDS_PUBLICATIONS_MASTER_CORPUS: PublicationWord[] = " + JSON.stringify(list, null, 2) + ";";
fs.writeFileSync(targetPath, existing.replace(match[0], replacement), "utf-8");
console.log(`Corpus updated: added ${added} new words. Total corpus size: ${list.length}`);
