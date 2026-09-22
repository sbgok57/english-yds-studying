import type { BankQ } from "./data-bank-core";


export interface ReadingPassage {
  id: string;
  emoji?: string;
  title: string;
  level: string;
  topic: string;
  paragraphs: string[];
  content?: string;
  glossary: { word: string; tr: string }[];
  questions: { q: string; a: string }[];
}

export const PASSAGES: ReadingPassage[] = [
  {
    id: "neuroplasticity-and-language",
    emoji: "🧠",
    title: "Neuroplasticity and Second Language Acquisition",
    level: "B2 - YDS Düzeyi",
    topic: "Nörobilim & Dil Edinimi",
    paragraphs: [
      "For decades, neuroscientists posited that the adult human brain was an immutable organ, structurally fixed after critical developmental windows in early childhood. However, ground-breaking neuroimaging studies have thoroughly dismantled this rigid doctrine, demonstrating that neuroplasticity persists across the entire human lifespan.",
      "When adults embark on mastering a new language, cortical networks undergo substantial structural and functional reorganization. Synaptogenesis intensifies in the left temporal lobe, while the corpus callosum exhibits heightened myelination, accelerating inter-hemispheric communication.",
      "Far from being a passive memorization task, vocabulary acquisition and grammar synthesis compel the brain to construct novel neural circuits, effectively shielding against premature neurodegenerative decline. Consequently, linguistic immersion serves not merely as a practical communicative tool, but as a robust cognitive safeguard."
    ],
    glossary: [
      { word: "posited", tr: "öne sürdü, varsaydı" },
      { word: "immutable", tr: "değişmez, sabit" },
      { word: "dismantled", tr: "çürüttü, parçalara ayırdı" },
      { word: "doctrine", tr: "öğreti, ilke" },
      { word: "neuroplasticity", tr: "beyin esnekliği, sinirsel uyum yeteneği" },
      { word: "substantial", tr: "büyük ölçüde, önemli" },
      { word: "intensifies", tr: "yoğunlaşır, artar" },
      { word: "myelination", tr: "miyelin kılıf oluşumu" },
      { word: "compel", tr: "zorlamak, sevk etmek" },
      { word: "safeguard", tr: "güvence, koruma kalkanı" }
    ],
    questions: [
      {
        q: "What traditional view regarding the adult human brain was disproven by modern neuroimaging?",
        a: "Traditional neuroscience viewed the adult brain as an immutable organ fixed after early childhood; neuroimaging proved neuroplasticity persists throughout life."
      },
      {
        q: "Which specific anatomical regions of the brain experience structural transformations during adult language learning?",
        a: "The left temporal lobe (intensified synaptogenesis) and the corpus callosum (heightened myelination)."
      },
      {
        q: "How does second language acquisition contribute to long-term neurological health?",
        a: "It compels the brain to construct novel neural circuits, shielding against premature neurodegenerative decline."
      }
    ]
  },
  {
    id: "ocean-acidification-ecosystems",
    emoji: "🌊",
    title: "Ocean Acidification and Marine Calcification",
    level: "C1 - İleri YDS",
    topic: "Çevre Bilimi & Oşinografi",
    paragraphs: [
      "Since the advent of the Industrial Revolution, anthropogenic carbon emissions have dramatically shifted global biogeochemical balances. While considerable public scrutiny focuses on atmospheric warming, the oceans have surreptitiously absorbed roughly thirty percent of all emitted carbon dioxide, initiating an insidious process known as ocean acidification.",
      "When dissolved carbon dioxide reacts with seawater, it forms carbonic acid, which dissociates into hydrogen ions and bicarbonate. The resulting surge in hydrogen ion concentration precipitates a commensurate drop in ocean pH levels. Critically, these excess hydrogen ions bind with freely available carbonate ions, starving marine organisms of the essential building blocks required to calcify shells and skeletons.",
      "Pteropods, corals, and molluscs are already exhibiting brittle morphology and diminished calcification rates, triggering systemic disruptions across marine trophic cascades."
    ],
    glossary: [
      { word: "anthropogenic", tr: "insan kaynaklı" },
      { word: "scrutiny", tr: "dikkatli inceleme, teftiş" },
      { word: "surreptitiously", tr: "gizlice, hissettirmeden" },
      { word: "insidious", tr: "sinsi, gizlice ilerleyen" },
      { word: "dissociates", tr: "ayrışır, bölünür" },
      { word: "commensurate", tr: "orantılı, eş değer" },
      { word: "precipitates", tr: "tetikler, hızlandırır" },
      { word: "brittle", tr: "kırılgan, gevrek" },
      { word: "diminished", tr: "azalmış, zayıflamış" },
      { word: "trophic cascades", tr: "besin zinciri zincirleme etkileri" }
    ],
    questions: [
      {
        q: "Approximately how much emitted carbon dioxide has been sequestered by the oceans since the Industrial Revolution?",
        a: "The oceans have surreptitiously absorbed roughly thirty percent of all anthropogenic carbon emissions."
      },
      {
        q: "What chemical reaction impairs the capacity of marine organisms to build shells?",
        a: "Excess hydrogen ions bind with available carbonate ions, depleting the building blocks needed for calcification."
      },
      {
        q: "Which specific marine organisms are cited as currently showing signs of biological stress?",
        a: "Pteropods, corals, and molluscs with brittle morphology and diminished calcification."
      }
    ]
  },
  {
    id: "urban-farming-sustainability",
    emoji: "🌿",
    title: "Urban Agriculture and Sustainable Metropolises",
    level: "B2 - YDS Düzeyi",
    topic: "Sürdürülebilirlik & Şehircilik",
    paragraphs: [
      "Urban farming is gaining rapid momentum in metropolises worldwide as planners grapple with food security, greenhouse gas emissions, and urban sprawl. By transforming unutilized rooftops, vacant lots, and vertical hydroponic warehouses into productive agricultural hubs, cities are redefining their relationship with resource consumption.",
      "Proponents underline that localized food production substantially shrinks food miles—the distance agricultural produce travels from field to plate—thereby diminishing logistical carbon footprints. Furthermore, urban vegetation helps alleviate the urban heat island effect and enhances rainwater retention.",
      "Nonetheless, skeptics contend that high capital expenditure for vertical indoor systems and elevated municipal water tariffs may compromise commercial viability unless powered by decentralized renewable energy."
    ],
    glossary: [
      { word: "grapple with", tr: "mücadele etmek, boğuşmak" },
      { word: "unutilized", tr: "kullanılmayan, atıl" },
      { word: "hydroponic", tr: "topraksız tarım yöntemi" },
      { word: "proponents", tr: "savunucular, destekçiler" },
      { word: "food miles", tr: "gıda taşıma mesafesi" },
      { word: "alleviate", tr: "hafifletmek, azaltmak" },
      { word: "heat island effect", tr: "kentsel ısı adası etkisi" },
      { word: "skeptics", tr: "şüpheciler, eleştirenler" },
      { word: "capital expenditure", tr: "sermaye harcaması, yatırım maliyeti" },
      { word: "viability", tr: "yaşayabilirlik, uygulanabilirlik" }
    ],
    questions: [
      {
        q: "What primary ecological advantage is achieved by reducing 'food miles'?",
        a: "Cutting food miles diminishes logistical carbon footprints caused by long-distance transportation."
      },
      {
        q: "How does urban vegetation physically mitigate microclimatic challenges in cities?",
        a: "It alleviates the urban heat island effect and enhances rainwater retention."
      },
      {
        q: "What major obstacles do critics emphasize regarding vertical farming?",
        a: "High capital expenditure and steep municipal water costs that may compromise economic viability."
      }
    ]
  },
  {
    id: "artificial-intelligence-ethics",
    emoji: "🤖",
    title: "The Emergence of Machine Learning and Societal Ethics",
    level: "C1 - İleri YDS",
    topic: "Yapay Zeka & Toplum",
    paragraphs: [
      "Artificial intelligence has decisively migrated from speculative theoretical science to the bedrock of contemporary digital civilization. Modern architectures rely on deep statistical patterns harvested from petabytes of empirical data rather than rigid hard-coded rules.",
      "From diagnostic imaging algorithms that surpass human oncologists in early tumor identification to autonomous logistics algorithms, algorithmic automation delivers extraordinary efficiencies. However, algorithmic biases, opacity in 'black-box' reasoning, and massive labor displacement present formidable ethical dilemmas.",
      "Governments and academic institutions are consequently scrambling to codify normative regulatory frameworks that balance innovative breakthroughs with privacy rights and equitable access."
    ],
    glossary: [
      { word: "decisively", tr: "kesin olarak, belirgin şekilde" },
      { word: "bedrock", tr: "temeltaşı, dayanak" },
      { word: "empirical", tr: "deneysel, gözleme dayalı" },
      { word: "diagnostic", tr: "teşhis edici" },
      { word: "formidable", tr: "zorlu, ürkütücü" },
      { word: "opacity", tr: "opaklık, anlaşılamazlık" },
      { word: "displacement", tr: "yerinden edilme, işsiz bırakma" },
      { word: "scrambling", tr: "telaşla çabalamak" },
      { word: "normative", tr: "kural koyucu, standart belirleyen" },
      { word: "equitable", tr: "adil, hakkaniyetli" }
    ],
    questions: [
      {
        q: "How does machine learning fundamentally deviate from early computational programming?",
        a: "It extracts deep statistical patterns from empirical data rather than relying on hand-crafted rules."
      },
      {
        q: "What are the primary ethical concerns highlighted by critics regarding AI adoption?",
        a: "Algorithmic biases, lack of interpretability in black-box models, and societal labor displacement."
      },
      {
        q: "Why are international regulatory frameworks urgently needed?",
        a: "To strike an equitable balance between technological innovation, privacy protection, and fair access."
      }
    ]
  },
  {
    id: "quantum-computing-cryptography",
    emoji: "⚛️",
    title: "Quantum Supremacy and the Future of Cryptography",
    level: "C1 - İleri YDS",
    topic: "Kuantum Fiziği & Kriptografi",
    paragraphs: [
      "The realization of fault-tolerant quantum computing represents an existential paradigm shift for global telecommunications and financial infrastructure. Unlike classical computers governed by binary digits that exist strictly as zeros or ones, quantum processors exploit the enigmatic principles of superposition and entanglement through quantum bits, or qubits.",
      "This fundamental computational leverage enables algorithms, notably Shor's algorithm, to factor gargantuan composite integers in polynomial time. Consequently, the asymmetric public-key cryptographic protocols that secure the global internet—such as RSA and elliptic-curve cryptography—are rendered theoretically obsolete against a sufficiently coherent quantum adversary.",
      "In response, the international cryptology community is urgently standardizing post-quantum lattice-based cryptographic algorithms to fortify sensitive state secrets and private communications before practical quantum advantage matures."
    ],
    glossary: [
      { word: "fault-tolerant", tr: "hataya dayanıklı" },
      { word: "existential", tr: "varoluşsal, hayati" },
      { word: "enigmatic", tr: "gizemli, anlaşılması güç" },
      { word: "superposition", tr: "üst üste binme, süperpozisyon" },
      { word: "entanglement", tr: "dolanıklık (kuantum)" },
      { word: "gargantuan", tr: "devasa, muazzam" },
      { word: "asymmetric", tr: "asimetrik, simetrik olmayan" },
      { word: "coherent", tr: "eşevreli, uyumlu" },
      { word: "fortify", tr: "güçlendirmek, tahkim etmek" },
      { word: "advantage", tr: "üstünlük, avantaj" }
    ],
    questions: [
      {
        q: "What fundamental quantum phenomena distinguish quantum computing from binary computing?",
        a: "Superposition and quantum entanglement allow qubits to process vast multi-state computations simultaneously."
      },
      {
        q: "Why does Shor's algorithm pose an existential threat to current internet security protocols?",
        a: "It can factor large composite numbers in polynomial time, dismantling RSA and elliptic-curve cryptography."
      },
      {
        q: "What defensive measure is being coordinated internationally against future quantum computers?",
        a: "The urgent standardization and implementation of post-quantum lattice-based cryptographic algorithms."
      }
    ]
  },
  {
    id: "microplastics-marine-bioaccumulation",
    emoji: "🐟",
    title: "Microplastics and Bioaccumulation in Aquatic Ecosystems",
    level: "B2 - YDS Düzeyi",
    topic: "Çevre Biyolojisi & Ekotoksikoloji",
    paragraphs: [
      "Microplastics—synthetic polymer particles measuring less than five millimeters across—have permeated virtually every marine habitat on Earth, from sunlit coastal estuaries to abyssal trenches. Resulting from the progressive mechanical and photodegradative breakdown of mismanaged synthetic debris, these ubiquitous contaminants represent an acute environmental hazard.",
      "Due to their microscopic proportions, microplastics are readily ingested by primary trophic consumers such as zooplankton and small pelagic organisms. Once consumed, the particles resist enzymatic digestion, accumulating inside digestive tracts and translocating into circulatory systems, while concurrently desorbing toxic plasticizers and heavy metals into biological tissue.",
      "As smaller organisms are predated by apex predators, contaminant concentrations amplify up the marine food web through biomagnification, ultimately threatening global seafood safety and biodiversity."
    ],
    glossary: [
      { word: "permeated", tr: "nüfuz etti, yayıldı" },
      { word: "estuaries", tr: "nehir ağızları, haliçler" },
      { word: "photodegradative", tr: "ışıkla bozunmaya dayalı" },
      { word: "ubiquitous", tr: "her yerde bulunan, yaygın" },
      { word: "acute", tr: "şiddetli, akut, kritik" },
      { word: "ingested", tr: "yutulmuş, sindirilmiş" },
      { word: "trophic", tr: "beslenme ile ilgili" },
      { word: "enzymatic", tr: "enzimatik" },
      { word: "translocating", tr: "yer değiştirerek yayılma" },
      { word: "biomagnification", tr: "biyobirikim, besin zincirinde zehir artışı" }
    ],
    questions: [
      {
        q: "How are environmental microplastics predominantly generated in marine settings?",
        a: "Through the mechanical and photodegradative breakdown of improperly managed synthetic plastic debris."
      },
      {
        q: "What physiological threat do microplastics pose after ingestion by primary consumers?",
        a: "They accumulate in digestive tracts, translocate into circulatory systems, and release hazardous chemicals into tissue."
      },
      {
        q: "How do toxic contaminants eventually reach apex marine predators and human seafood consumers?",
        a: "Contaminant concentrations exponentially amplify across trophic levels through the process of biomagnification."
      }
    ]
  }
];

// Ensure every passage has content populated for full backwards-compatibility
PASSAGES.forEach((p) => {
  if (!p.content && p.paragraphs) {
    p.content = p.paragraphs.join("\n\n");
  }
});

// Backward-compatible alias
export const READING_PASSAGES: ReadingPassage[] = PASSAGES;

export function getReadingPassages(): ReadingPassage[] {
  return PASSAGES;
}

export function getReadingPassageById(id: string): ReadingPassage | undefined {
  return PASSAGES.find((p) => p.id === id);
}


// YDS soru bankası — PASAJLAR (cloze + reading soruları)
export const PASSAGE_BANK_QUESTIONS: BankQ[] = [
  // ================= CLOZE (4 pasaj × 5 = 20) =================
  // ---- Cloze 1 ----
  { t: "cloze", pt: "Cloze Test", p: "Paper, one of the most influential inventions in human history, was first invented in China around 105 AD. Before paper, people wrote on materials such as bamboo, silk, and animal skins, all of which were expensive and difficult to produce. The invention of paper gradually transformed the way knowledge was recorded and shared. By the 8th century, the technique had spread to the Middle East and later to Europe. Today, although digital media has reduced the demand for paper, it still plays an essential role in education and publishing.", s: "Paper, one of the most influential inventions in human history, was first ---- in China around 105 AD.", o: ["invented", "destroyed", "discovered", "forbidden", "discussed"], a: 0, ex: "paper 'icat edildi'." },
  { t: "cloze", pt: "Cloze Test", p: "Paper, one of the most influential inventions in human history, was first invented in China around 105 AD. Before paper, people wrote on materials such as bamboo, silk, and animal skins, all of which were expensive and difficult to produce. The invention of paper gradually transformed the way knowledge was recorded and shared. By the 8th century, the technique had spread to the Middle East and later to Europe. Today, although digital media has reduced the demand for paper, it still plays an essential role in education and publishing.", s: "...materials such as bamboo, silk, and animal skins, all of which were expensive and ---- to produce.", o: ["difficult", "easy", "cheap", "instant", "optional"], a: 0, ex: "expensive and difficult." },
  { t: "cloze", pt: "Cloze Test", p: "Paper, one of the most influential inventions in human history, was first invented in China around 105 AD. Before paper, people wrote on materials such as bamboo, silk, and animal skins, all of which were expensive and difficult to produce. The invention of paper gradually transformed the way knowledge was recorded and shared. By the 8th century, the technique had spread to the Middle East and later to Europe. Today, although digital media has reduced the demand for paper, it still plays an essential role in education and publishing.", s: "The invention of paper gradually ---- the way knowledge was recorded and shared.", o: ["transformed", "ignored", "blocked", "delayed", "preserved"], a: 0, ex: "transformed = dönüştürdü." },
  { t: "cloze", pt: "Cloze Test", p: "Paper, one of the most influential inventions in human history, was first invented in China around 105 AD. Before paper, people wrote on materials such as bamboo, silk, and animal skins, all of which were expensive and difficult to produce. The invention of paper gradually transformed the way knowledge was recorded and shared. By the 8th century, the technique had spread to the Middle East and later to Europe. Today, although digital media has reduced the demand for paper, it still plays an essential role in education and publishing.", s: "By the 8th century, the technique had ---- to the Middle East and later to Europe.", o: ["spread", "returned", "retreated", "shrunk", "fallen"], a: 0, ex: "spread = yayıldı." },
  { t: "cloze", pt: "Cloze Test", p: "Paper, one of the most influential inventions in human history, was first invented in China around 105 AD. Before paper, people wrote on materials such as bamboo, silk, and animal skins, all of which were expensive and difficult to produce. The invention of paper gradually transformed the way knowledge was recorded and shared. By the 8th century, the technique had spread to the Middle East and later to Europe. Today, although digital media has reduced the demand for paper, it still plays an essential role in education and publishing.", s: "Today, although digital media has reduced the demand for paper, it still ---- an essential role in education and publishing.", o: ["plays", "loses", "avoids", "neglects", "abandons"], a: 0, ex: "play a role kalıbı." },
  // ---- Cloze 2 ----
  { t: "cloze", pt: "Cloze Test", p: "Sleep is far more than a simple state of rest. During the night, the brain carries out a series of essential maintenance tasks. One of the most important of these is memory consolidation, the process by which the day's experiences are transferred from short-term to long-term storage. The immune system is also highly active during sleep, releasing proteins that help the body fight infection. Despite its importance, however, modern lifestyles have led to a widespread reduction in average sleep duration, with serious consequences for public health.", s: "Sleep is far more than a simple state of rest. During the night, the brain carries ---- a series of essential maintenance tasks.", o: ["out", "off", "away", "up with", "into"], a: 0, ex: "carry out = yürütmek." },
  { t: "cloze", pt: "Cloze Test", p: "Sleep is far more than a simple state of rest. During the night, the brain carries out a series of essential maintenance tasks. One of the most important of these is memory consolidation, the process by which the day's experiences are transferred from short-term to long-term storage. The immune system is also highly active during sleep, releasing proteins that help the body fight infection. Despite its importance, however, modern lifestyles have led to a widespread reduction in average sleep duration, with serious consequences for public health.", s: "One of the most important of these is memory consolidation, the process ---- which the day's experiences are transferred to long-term storage.", o: ["by", "at", "on", "for", "with"], a: 0, ex: "the process by which." },
  { t: "cloze", pt: "Cloze Test", p: "Sleep is far more than a simple state of rest. During the night, the brain carries out a series of essential maintenance tasks. One of the most important of these is memory consolidation, the process by which the day's experiences are transferred from short-term to long-term storage. The immune system is also highly active during sleep, releasing proteins that help the body fight infection. Despite its importance, however, modern lifestyles have led to a widespread reduction in average sleep duration, with serious consequences for public health.", s: "The immune system is also highly active during sleep, ---- proteins that help the body fight infection.", o: ["releasing", "release", "released", "to release", "releases"], a: 0, ex: "aktif kısaltma: releasing." },
  { t: "cloze", pt: "Cloze Test", p: "Sleep is far more than a simple state of rest. During the night, the brain carries out a series of essential maintenance tasks. One of the most important of these is memory consolidation, the process by which the day's experiences are transferred from short-term to long-term storage. The immune system is also highly active during sleep, releasing proteins that help the body fight infection. Despite its importance, however, modern lifestyles have led to a widespread reduction in average sleep duration, with serious consequences for public health.", s: "Despite its importance, however, modern lifestyles have ---- to a widespread reduction in average sleep duration.", o: ["led", "caused", "resulted", "brought", "taken"], a: 0, ex: "lead to = yol açmak." },
  { t: "cloze", pt: "Cloze Test", p: "Sleep is far more than a simple state of rest. During the night, the brain carries out a series of essential maintenance tasks. One of the most important of these is memory consolidation, the process by which the day's experiences are transferred from short-term to long-term storage. The immune system is also highly active during sleep, releasing proteins that help the body fight infection. Despite its importance, however, modern lifestyles have led to a widespread reduction in average sleep duration, with serious consequences for public health.", s: "...with serious consequences ---- public health.", o: ["for", "on", "at", "in", "to"], a: 0, ex: "consequences for." },
  // ---- Cloze 3 ----
  { t: "cloze", pt: "Cloze Test", p: "The honeybee has become an unlikely urban resident. On rooftops across the world's major cities, beehives are appearing at an impressive rate. Cities, it turns out, can be surprisingly hospitable to bees: urban gardens and parks offer a diverse range of flowering plants, often with fewer pesticides than intensive farmland. Some studies have even found that city bees are healthier and more productive than their rural counterparts. However, too many hives in a limited area can put pressure on wild pollinators, which are often more vulnerable than managed honeybees.", s: "On rooftops across the world's major cities, beehives are appearing at an impressive ----.", o: ["rate", "cost", "delay", "height", "speed"], a: 0, ex: "at a rate = hızda/oranda." },
  { t: "cloze", pt: "Cloze Test", p: "The honeybee has become an unlikely urban resident. On rooftops across the world's major cities, beehives are appearing at an impressive rate. Cities, it turns out, can be surprisingly hospitable to bees: urban gardens and parks offer a diverse range of flowering plants, often with fewer pesticides than intensive farmland. Some studies have even found that city bees are healthier and more productive than their rural counterparts. However, too many hives in a limited area can put pressure on wild pollinators, which are often more vulnerable than managed honeybees.", s: "Cities, it turns out, can be surprisingly ---- to bees.", o: ["hospitable", "hostile", "dangerous", "harmful", "indifferent"], a: 0, ex: "hospitable = elverişli." },
  { t: "cloze", pt: "Cloze Test", p: "The honeybee has become an unlikely urban resident. On rooftops across the world's major cities, beehives are appearing at an impressive rate. Cities, it turns out, can be surprisingly hospitable to bees: urban gardens and parks offer a diverse range of flowering plants, often with fewer pesticides than intensive farmland. Some studies have even found that city bees are healthier and more productive than their rural counterparts. However, too many hives in a limited area can put pressure on wild pollinators, which are often more vulnerable than managed honeybees.", s: "...often with fewer pesticides than intensive ----.", o: ["farmland", "seaside", "mountain", "desert", "ocean"], a: 0, ex: "intensive farmland = yoğun tarım arazisi." },
  { t: "cloze", pt: "Cloze Test", p: "The honeybee has become an unlikely urban resident. On rooftops across the world's major cities, beehives are appearing at an impressive rate. Cities, it turns out, can be surprisingly hospitable to bees: urban gardens and parks offer a diverse range of flowering plants, often with fewer pesticides than intensive farmland. Some studies have even found that city bees are healthier and more productive than their rural counterparts. However, too many hives in a limited area can put pressure on wild pollinators, which are often more vulnerable than managed honeybees.", s: "Some studies have even found that city bees are healthier and more productive than their rural ----.", o: ["counterparts", "enemies", "predators", "rivals", "owners"], a: 0, ex: "counterparts = karşılıkları." },
  { t: "cloze", pt: "Cloze Test", p: "The honeybee has become an unlikely urban resident. On rooftops across the world's major cities, beehives are appearing at an impressive rate. Cities, it turns out, can be surprisingly hospitable to bees: urban gardens and parks offer a diverse range of flowering plants, often with fewer pesticides than intensive farmland. Some studies have even found that city bees are healthier and more productive than their rural counterparts. However, too many hives in a limited area can put pressure on wild pollinators, which are often more vulnerable than managed honeybees.", s: "However, too many hives in a limited area can put ---- on wild pollinators.", o: ["pressure", "pleasure", "praise", "value", "weight"], a: 0, ex: "put pressure on = baskı yapmak." },
  // ---- Cloze 4 ----
  { t: "cloze", pt: "Cloze Test", p: "In the digital age, human attention has become one of the world's most valuable resources. The business models of many large technology companies are built on capturing and holding our attention for as long as possible, then selling it to advertisers. This 'attention economy' has profound consequences for how information is produced and consumed. Content is increasingly designed to be engaging rather than informative, prioritising emotion over accuracy. A growing counter-movement, however, is seeking ways to help individuals reclaim their focus.", s: "In the digital age, human attention has become one of the world's most ---- resources.", o: ["valuable", "worthless", "useless", "cheap", "common"], a: 0, ex: "valuable = değerli." },
  { t: "cloze", pt: "Cloze Test", p: "In the digital age, human attention has become one of the world's most valuable resources. The business models of many large technology companies are built on capturing and holding our attention for as long as possible, then selling it to advertisers. This 'attention economy' has profound consequences for how information is produced and consumed. Content is increasingly designed to be engaging rather than informative, prioritising emotion over accuracy. A growing counter-movement, however, is seeking ways to help individuals reclaim their focus.", s: "The business models of many large technology companies are built on capturing and holding our attention for as long as possible, then selling it to ----.", o: ["advertisers", "readers", "students", "writers", "scientists"], a: 0, ex: "advertisers = reklam verenler." },
  { t: "cloze", pt: "Cloze Test", p: "In the digital age, human attention has become one of the world's most valuable resources. The business models of many large technology companies are built on capturing and holding our attention for as long as possible, then selling it to advertisers. This 'attention economy' has profound consequences for how information is produced and consumed. Content is increasingly designed to be engaging rather than informative, prioritising emotion over accuracy. A growing counter-movement, however, is seeking ways to help individuals reclaim their focus.", s: "This 'attention economy' has ---- consequences for how information is produced and consumed.", o: ["profound", "trivial", "superficial", "negligible", "minor"], a: 0, ex: "profound = derin." },
  { t: "cloze", pt: "Cloze Test", p: "In the digital age, human attention has become one of the world's most valuable resources. The business models of many large technology companies are built on capturing and holding our attention for as long as possible, then selling it to advertisers. This 'attention economy' has profound consequences for how information is produced and consumed. Content is increasingly designed to be engaging rather than informative, prioritising emotion over accuracy. A growing counter-movement, however, is seeking ways to help individuals reclaim their focus.", s: "Content is increasingly designed to be engaging rather than informative, prioritising emotion ---- accuracy.", o: ["over", "under", "with", "for", "by"], a: 0, ex: "prioritise ... over ... = ...e tercih etmek." },
  { t: "cloze", pt: "Cloze Test", p: "In the digital age, human attention has become one of the world's most valuable resources. The business models of many large technology companies are built on capturing and holding our attention for as long as possible, then selling it to advertisers. This 'attention economy' has profound consequences for how information is produced and consumed. Content is increasingly designed to be engaging rather than informative, prioritising emotion over accuracy. A growing counter-movement, however, is seeking ways to help individuals reclaim their focus.", s: "A growing counter-movement, however, is seeking ways to help individuals ---- their focus.", o: ["reclaim", "lose", "abandon", "waste", "ignore"], a: 0, ex: "reclaim = geri kazanmak." },

  // ================= READING (4 pasaj × 5 = 20) =================
  // ---- Reading 1 ----
  { t: "reading", pt: "Reading Passage", p: "Exposure to artificial light at night has become a growing health concern. The human body produces melatonin, a hormone that regulates sleep, in response to darkness. When people use smartphones or watch television late at night, the blue light from these screens suppresses melatonin production, making it harder to fall asleep. Researchers therefore recommend reducing screen time in the hour before bed and keeping bedrooms as dark as possible to improve sleep quality.", s: "According to the passage, what is melatonin?", o: ["A hormone that regulates sleep and is produced in response to darkness.", "A type of blue light emitted by screens.", "A disease caused by artificial light.", "A hormone produced by smartphones.", "A chemical found only in children."], a: 0, ex: "Metinde tanımı veriliyor." },
  { t: "reading", pt: "Reading Passage", p: "Exposure to artificial light at night has become a growing health concern. The human body produces melatonin, a hormone that regulates sleep, in response to darkness. When people use smartphones or watch television late at night, the blue light from these screens suppresses melatonin production, making it harder to fall asleep. Researchers therefore recommend reducing screen time in the hour before bed and keeping bedrooms as dark as possible to improve sleep quality.", s: "According to the passage, the blue light from screens ----.", o: ["suppresses melatonin production", "increases melatonin production", "has no effect on sleep", "improves sleep quality", "is recommended before bed"], a: 0, ex: "Metin: suppresses melatonin production." },
  { t: "reading", pt: "Reading Passage", p: "Exposure to artificial light at night has become a growing health concern. The human body produces melatonin, a hormone that regulates sleep, in response to darkness. When people use smartphones or watch television late at night, the blue light from these screens suppresses melatonin production, making it harder to fall asleep. Researchers therefore recommend reducing screen time in the hour before bed and keeping bedrooms as dark as possible to improve sleep quality.", s: "Which of the following is a recommendation made in the passage?", o: ["Reducing screen time in the hour before bed", "Using smartphones more at night", "Keeping bedrooms bright", "Watching television to fall asleep", "Ignoring sleep quality"], a: 0, ex: "Metin: recommend reducing screen time." },
  { t: "reading", pt: "Reading Passage", p: "Exposure to artificial light at night has become a growing health concern. The human body produces melatonin, a hormone that regulates sleep, in response to darkness. When people use smartphones or watch television late at night, the blue light from these screens suppresses melatonin production, making it harder to fall asleep. Researchers therefore recommend reducing screen time in the hour before bed and keeping bedrooms as dark as possible to improve sleep quality.", s: "What happens when melatonin production is suppressed?", o: ["It becomes harder to fall asleep.", "Sleep quality improves instantly.", "The body produces more melatonin.", "Darkness becomes unnecessary.", "Smartphones stop emitting blue light."], a: 0, ex: "Metin: making it harder to fall asleep." },
  { t: "reading", pt: "Reading Passage", p: "Exposure to artificial light at night has become a growing health concern. The human body produces melatonin, a hormone that regulates sleep, in response to darkness. When people use smartphones or watch television late at night, the blue light from these screens suppresses melatonin production, making it harder to fall asleep. Researchers therefore recommend reducing screen time in the hour before bed and keeping bedrooms as dark as possible to improve sleep quality.", s: "The passage is mainly about ----.", o: ["the negative effects of artificial light at night on sleep", "how to produce melatonin artificially", "the history of the smartphone", "why darkness is harmful", "the benefits of watching television at night"], a: 0, ex: "Ana fikir: gece yapay ışığın uykuya etkisi." },
  // ---- Reading 2 ----
  { t: "reading", pt: "Reading Passage", p: "Contrary to popular belief, the Vikings were not merely raiders. Archaeological evidence shows that they were also skilled traders and settlers, establishing trade routes that stretched from Scandinavia to the Middle East. Their ships, designed for both shallow rivers and open seas, allowed them to travel vast distances. In many of the places they reached, they founded permanent settlements and gradually integrated with local populations, leaving a lasting cultural legacy.", s: "What is the main idea of the passage?", o: ["The Vikings were more than just raiders; they were traders and settlers too.", "The Vikings were only interested in looting and fighting.", "Scandinavia was the richest region in the Middle Ages.", "Archaeologists disagree about the Vikings.", "The Vikings never left Scandinavia."], a: 0, ex: "not merely raiders → more than just raiders." },
  { t: "reading", pt: "Reading Passage", p: "Contrary to popular belief, the Vikings were not merely raiders. Archaeological evidence shows that they were also skilled traders and settlers, establishing trade routes that stretched from Scandinavia to the Middle East. Their ships, designed for both shallow rivers and open seas, allowed them to travel vast distances. In many of the places they reached, they founded permanent settlements and gradually integrated with local populations, leaving a lasting cultural legacy.", s: "According to the passage, what made it possible for the Vikings to travel vast distances?", o: ["Their ships, which could sail both shallow rivers and open seas.", "Their powerful horses.", "Their knowledge of modern navigation.", "Their large armies.", "Their maps of the Middle East."], a: 0, ex: "Metin: ships designed for shallow rivers and open seas." },
  { t: "reading", pt: "Reading Passage", p: "Contrary to popular belief, the Vikings were not merely raiders. Archaeological evidence shows that they were also skilled traders and settlers, establishing trade routes that stretched from Scandinavia to the Middle East. Their ships, designed for both shallow rivers and open seas, allowed them to travel vast distances. In many of the places they reached, they founded permanent settlements and gradually integrated with local populations, leaving a lasting cultural legacy.", s: "The phrase 'Contrary to popular belief' suggests that ----.", o: ["most people have a mistaken view of the Vikings", "the Vikings were exactly as people think", "popular beliefs are always correct", "the Vikings were unimportant in history", "archaeologists agree with popular belief"], a: 0, ex: "Contrary to = ...aksine." },
  { t: "reading", pt: "Reading Passage", p: "Contrary to popular belief, the Vikings were not merely raiders. Archaeological evidence shows that they were also skilled traders and settlers, establishing trade routes that stretched from Scandinavia to the Middle East. Their ships, designed for both shallow rivers and open seas, allowed them to travel vast distances. In many of the places they reached, they founded permanent settlements and gradually integrated with local populations, leaving a lasting cultural legacy.", s: "What did the Vikings do in many of the places they reached?", o: ["They founded permanent settlements and integrated with local populations.", "They destroyed every settlement they found.", "They immediately returned to Scandinavia.", "They avoided all contact with locals.", "They sold all their ships."], a: 0, ex: "Metin: founded permanent settlements." },
  { t: "reading", pt: "Reading Passage", p: "Contrary to popular belief, the Vikings were not merely raiders. Archaeological evidence shows that they were also skilled traders and settlers, establishing trade routes that stretched from Scandinavia to the Middle East. Their ships, designed for both shallow rivers and open seas, allowed them to travel vast distances. In many of the places they reached, they founded permanent settlements and gradually integrated with local populations, leaving a lasting cultural legacy.", s: "According to the passage, the Vikings' trade routes stretched ----.", o: ["from Scandinavia to the Middle East", "from Asia to America", "from Africa to Australia", "only within Scandinavia", "across the Pacific Ocean"], a: 0, ex: "Metin: Scandinavia to the Middle East." },
  // ---- Reading 3 ----
  { t: "reading", pt: "Reading Passage", p: "Urban farming is gaining popularity in many cities around the world. Rooftop gardens, community plots, and vertical farms are transforming unused urban spaces into productive green areas. Proponents argue that urban agriculture reduces the distance food travels, thereby cutting carbon emissions, and provides fresh produce to communities that lack access to healthy food. Critics, however, point out that urban farms can be expensive to maintain and rarely produce enough food to feed entire cities.", s: "According to the passage, urban farming is becoming ----.", o: ["increasingly popular in cities worldwide", "less common in modern cities", "popular only in rural areas", "completely unprofitable", "a practice limited to one city"], a: 0, ex: "Metin: gaining popularity in many cities." },
  { t: "reading", pt: "Reading Passage", p: "Urban farming is gaining popularity in many cities around the world. Rooftop gardens, community plots, and vertical farms are transforming unused urban spaces into productive green areas. Proponents argue that urban agriculture reduces the distance food travels, thereby cutting carbon emissions, and provides fresh produce to communities that lack access to healthy food. Critics, however, point out that urban farms can be expensive to maintain and rarely produce enough food to feed entire cities.", s: "According to proponents, one benefit of urban agriculture is that it ----.", o: ["reduces the distance food travels and thus cuts carbon emissions", "increases carbon emissions significantly", "makes food more expensive for everyone", "requires no fresh produce", "eliminates the need for healthy food"], a: 0, ex: "Metin: reduces distance → cuts emissions." },
  { t: "reading", pt: "Reading Passage", p: "Urban farming is gaining popularity in many cities around the world. Rooftop gardens, community plots, and vertical farms are transforming unused urban spaces into productive green areas. Proponents argue that urban agriculture reduces the distance food travels, thereby cutting carbon emissions, and provides fresh produce to communities that lack access to healthy food. Critics, however, point out that urban farms can be expensive to maintain and rarely produce enough food to feed entire cities.", s: "What criticism of urban farming is mentioned in the passage?", o: ["Urban farms are costly to maintain and rarely feed whole cities.", "Urban farms produce too much food for cities.", "Urban farming increases the distance food travels.", "Urban farming has no effect on carbon emissions.", "Urban farms are always profitable."], a: 0, ex: "Metin: expensive to maintain." },
  { t: "reading", pt: "Reading Passage", p: "Urban farming is gaining popularity in many cities around the world. Rooftop gardens, community plots, and vertical farms are transforming unused urban spaces into productive green areas. Proponents argue that urban agriculture reduces the distance food travels, thereby cutting carbon emissions, and provides fresh produce to communities that lack access to healthy food. Critics, however, point out that urban farms can be expensive to maintain and rarely produce enough food to feed entire cities.", s: "The word 'Proponents' in the passage is closest in meaning to ----.", o: ["supporters", "opponents", "critics", "observers", "competitors"], a: 0, ex: "proponents = destekleyenler." },
  { t: "reading", pt: "Reading Passage", p: "Urban farming is gaining popularity in many cities around the world. Rooftop gardens, community plots, and vertical farms are transforming unused urban spaces into productive green areas. Proponents argue that urban agriculture reduces the distance food travels, thereby cutting carbon emissions, and provides fresh produce to communities that lack access to healthy food. Critics, however, point out that urban farms can be expensive to maintain and rarely produce enough food to feed entire cities.", s: "Which of the following is NOT mentioned as an example of urban farming?", o: ["Underground tunnels", "Rooftop gardens", "Community plots", "Vertical farms", "All of the above are mentioned"], a: 0, ex: "Yeraltı tünelleri metinde yok." },
  // ---- Reading 4 ----
  { t: "reading", pt: "Reading Passage", p: "Artificial intelligence has moved from the margins of computer science to the centre of everyday life. Systems that once existed only in research laboratories now power the recommendation engines behind streaming platforms and the fraud-detection algorithms that protect our bank accounts. The current wave of progress is driven largely by machine learning, in which systems learn patterns from vast quantities of data rather than being explicitly programmed. Yet the rise of AI also raises difficult questions about bias, privacy, and the future of work.", s: "According to the passage, AI systems now power ----.", o: ["recommendation engines and fraud-detection algorithms", "only laboratory experiments", "only streaming platforms", "only bank accounts", "nothing of practical value"], a: 0, ex: "Metin: recommendation engines + fraud detection." },
  { t: "reading", pt: "Reading Passage", p: "Artificial intelligence has moved from the margins of computer science to the centre of everyday life. Systems that once existed only in research laboratories now power the recommendation engines behind streaming platforms and the fraud-detection algorithms that protect our bank accounts. The current wave of progress is driven largely by machine learning, in which systems learn patterns from vast quantities of data rather than being explicitly programmed. Yet the rise of AI also raises difficult questions about bias, privacy, and the future of work.", s: "How does machine learning differ from traditional programming, according to the passage?", o: ["Systems learn patterns from data instead of being explicitly programmed.", "Systems are programmed with strict rules.", "Systems cannot learn from data.", "Systems do not use any data.", "Systems work only in laboratories."], a: 0, ex: "Metin: learn patterns from data." },
  { t: "reading", pt: "Reading Passage", p: "Artificial intelligence has moved from the margins of computer science to the centre of everyday life. Systems that once existed only in research laboratories now power the recommendation engines behind streaming platforms and the fraud-detection algorithms that protect our bank accounts. The current wave of progress is driven largely by machine learning, in which systems learn patterns from vast quantities of data rather than being explicitly programmed. Yet the rise of AI also raises difficult questions about bias, privacy, and the future of work.", s: "According to the passage, the rise of AI raises difficult questions about ----.", o: ["bias, privacy, and the future of work", "only the weather", "only entertainment", "only sports", "only ancient history"], a: 0, ex: "Metin: bias, privacy, future of work." },
  { t: "reading", pt: "Reading Passage", p: "Artificial intelligence has moved from the margins of computer science to the centre of everyday life. Systems that once existed only in research laboratories now power the recommendation engines behind streaming platforms and the fraud-detection algorithms that protect our bank accounts. The current wave of progress is driven largely by machine learning, in which systems learn patterns from vast quantities of data rather than being explicitly programmed. Yet the rise of AI also raises difficult questions about bias, privacy, and the future of work.", s: "The phrase 'from the margins to the centre' means that AI has become ----.", o: ["a central part of everyday life", "completely forgotten", "less important than before", "relevant only in laboratories", "a marginal topic"], a: 0, ex: "Kenardan merkeze = önem kazanmak." },
  { t: "reading", pt: "Reading Passage", p: "Artificial intelligence has moved from the margins of computer science to the centre of everyday life. Systems that once existed only in research laboratories now power the recommendation engines behind streaming platforms and the fraud-detection algorithms that protect our bank accounts. The current wave of progress is driven largely by machine learning, in which systems learn patterns from vast quantities of data rather than being explicitly programmed. Yet the rise of AI also raises difficult questions about bias, privacy, and the future of work.", s: "What is the main idea of the passage?", o: ["AI has become central to daily life, driven by machine learning, but raises important questions.", "AI is no longer used in the real world.", "Machine learning has been abandoned.", "AI only exists in laboratories.", "AI has no effect on bank accounts."], a: 0, ex: "Ana fikir: AI merkeze taşındı + sorular doğurdu." },
];

