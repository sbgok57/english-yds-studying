// English Level Assessment Bank and Diagnostic Engine
import { evaluateCefrLevel } from "./adaptive/level-thresholds";

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type SkillType = 'grammar' | 'vocabulary' | 'reading' | 'sentence' | 'translation';

export const LEVEL_TEST_RESULT_STORAGE_KEY = "yds-master-level-assessment-result-v1";
export const LEVEL_TEST_ANSWERS_STORAGE_KEY = "yds-master-level-assessment-answers-v1";

export interface LevelTestQuestion {
  id: string;
  level: CefrLevel;
  skill: SkillType;
  stem: string;
  options: string[];
  answer: number;
  explanation: string;
  weight: number;
  discriminability: number;
  passage?: string;
  passageTitle?: string;
  isValidation?: boolean;
}

export const LEVEL_COLORS: Record<CefrLevel, { hex: string; name: string; bgClass: string; textClass: string; borderClass: string }> = {
  A1: { hex: '#22c55e', name: 'Yeşil', bgClass: 'bg-emerald-500/15', textClass: 'text-emerald-400', borderClass: 'border-emerald-500/40' },
  A2: { hex: '#84cc16', name: 'Lime', bgClass: 'bg-lime-500/15', textClass: 'text-lime-400', borderClass: 'border-lime-500/40' },
  B1: { hex: '#0ea5e9', name: 'Mavi', bgClass: 'bg-sky-500/15', textClass: 'text-sky-400', borderClass: 'border-sky-500/40' },
  B2: { hex: '#8b5cf6', name: 'Mor', bgClass: 'bg-purple-500/15', textClass: 'text-purple-400', borderClass: 'border-purple-500/40' },
  C1: { hex: '#d946ef', name: 'Fuşya', bgClass: 'bg-fuchsia-500/15', textClass: 'text-fuchsia-400', borderClass: 'border-fuchsia-500/40' },
  C2: { hex: '#f59e0b', name: 'Altın', bgClass: 'bg-amber-500/15', textClass: 'text-amber-300', borderClass: 'border-amber-400/50' },
};

export const LEVEL_TEST_QUESTIONS: LevelTestQuestion[] = [
  {
    "id": "lvl-a1-1",
    "level": "A1",
    "skill": "grammar",
    "stem": "My brother and I ------- students at the university in Ankara.",
    "options": [
      "am",
      "is",
      "are",
      "be",
      "being"
    ],
    "answer": 2,
    "explanation": "'My brother and I' çoğul özne (we) olduğu için 'to be' fiilinin şimdiki zaman çoğul hali 'are' kullanılır.",
    "weight": 1.0,
    "discriminability": 0.65
  },
  {
    "id": "lvl-a1-2",
    "level": "A1",
    "skill": "grammar",
    "stem": "She usually ------- breakfast with her family at 7:30 every morning.",
    "options": [
      "have",
      "has",
      "having",
      "is have",
      "had been"
    ],
    "answer": 1,
    "explanation": "Geniş zaman (Simple Present) kuralına göre üçüncü tekil şahıs (she) ile 'have' fiili 'has' olur.",
    "weight": 1.0,
    "discriminability": 0.7
  },
  {
    "id": "lvl-a1-3",
    "level": "A1",
    "skill": "vocabulary",
    "stem": "I need a glass of water because I am very -------.",
    "options": [
      "thirsty",
      "hungry",
      "angry",
      "sleepy",
      "bored"
    ],
    "answer": 0,
    "explanation": "Su içme ihtiyacı susuzluk (thirsty) ile ilgilidir. Hungry = aç, angry = kızgın.",
    "weight": 1.0,
    "discriminability": 0.75
  },
  {
    "id": "lvl-a1-4",
    "level": "A1",
    "skill": "sentence",
    "stem": "Which sentence is grammatically CORRECT?",
    "options": [
      "He don't likes watching horror movies.",
      "He doesn't like watching horror movies.",
      "He not like watching horror movies.",
      "He isn't like watch horror movies.",
      "He doesn't likes watch horror movies."
    ],
    "answer": 1,
    "explanation": "Simple Present olumsuz yapısında he/she/it için 'doesn't + V1' (like) kuralı geçerlidir.",
    "weight": 1.0,
    "discriminability": 0.8
  },
  {
    "id": "lvl-a1-5",
    "level": "A1",
    "skill": "translation",
    "stem": "\"Bu kitap benim değil, Ayşe'nin.\" cümlesinin doğru İngilizce karşılığı hangisidir?",
    "options": [
      "This book is not me, it is Ayşe.",
      "This book is not mine, it is Ayşe's.",
      "These book are not my, it is Ayşe.",
      "This book doesn't mine, it has Ayşe.",
      "This book isn't my, it is of Ayşe."
    ],
    "answer": 1,
    "explanation": "İyelik zamiri olarak 'mine' (benimki/benim) ve iyelik eki olarak 'Ayşe's' kullanılır.",
    "weight": 1.0,
    "discriminability": 0.75
  },
  {
    "id": "lvl-a1-6",
    "level": "A1",
    "skill": "reading",
    "passageTitle": "Kemal's Daily Routine",
    "passage": "Kemal is an engineer in Izmir. He lives near his office, so he walks to work every day. He finishes work at five o'clock and visits the library twice a week.",
    "stem": "According to the text, how does Kemal go to his workplace?",
    "options": [
      "By bus",
      "On foot",
      "By car",
      "By bicycle",
      "By train"
    ],
    "answer": 1,
    "explanation": "Metinde 'he walks to work every day' dendiği için işe yürüyerek (on foot) gider.",
    "weight": 1.0,
    "discriminability": 0.7
  },
  {
    "id": "lvl-a2-1",
    "level": "A2",
    "skill": "grammar",
    "stem": "Last summer, my family ------- to Antalya and stayed in a small hotel.",
    "options": [
      "go",
      "goes",
      "went",
      "have gone",
      "was going"
    ],
    "answer": 2,
    "explanation": "'Last summer' geçmişte belirli bir zamanı ifade ettiği için Simple Past Tense (went) gerektirir.",
    "weight": 1.1,
    "discriminability": 0.75
  },
  {
    "id": "lvl-a2-2",
    "level": "A2",
    "skill": "grammar",
    "stem": "While my mother was cooking dinner in the kitchen, my father ------- the newspaper.",
    "options": [
      "reads",
      "was reading",
      "has read",
      "is reading",
      "readed"
    ],
    "answer": 1,
    "explanation": "Geçmişte aynı anda devam eden iki paralel eylem için Past Continuous (was reading) kullanılır.",
    "weight": 1.1,
    "discriminability": 0.75
  },
  {
    "id": "lvl-a2-3",
    "level": "A2",
    "skill": "vocabulary",
    "stem": "The museum was so ------- that we had to wait in line for nearly an hour.",
    "options": [
      "empty",
      "crowded",
      "dangerous",
      "quiet",
      "ancient"
    ],
    "answer": 1,
    "explanation": "Bir saat kuyrukta beklemeyi gerektiren durum müzenin kalabalık (crowded) olmasıdır.",
    "weight": 1.1,
    "discriminability": 0.8
  },
  {
    "id": "lvl-a2-4",
    "level": "A2",
    "skill": "sentence",
    "stem": "Mount Everest is ------- mountain in the world.",
    "options": [
      "higher",
      "the highest",
      "more high",
      "most highest",
      "as high"
    ],
    "answer": 1,
    "explanation": "Dünyadaki tüm dağlar arasında en yüksek olanı belirtmek için superlative biçim 'the highest' kullanılır.",
    "weight": 1.1,
    "discriminability": 0.75
  },
  {
    "id": "lvl-a2-5",
    "level": "A2",
    "skill": "translation",
    "stem": "\"Dün gece yağmur yağdığı için konsere gidemedik.\" ifadesinin en doğru karşılığı hangisidir?",
    "options": [
      "We couldn't go to the concert because it rained last night.",
      "We didn't go to concert although it is raining.",
      "Because last night was rainy, so we can't go concert.",
      "We haven't gone to concert as it will rain yesterday.",
      "We cannot go to the concert since it rained last night."
    ],
    "answer": 0,
    "explanation": "Geçmiş yetersizlik için 'couldn't go' ve sebep bağlacı olarak 'because it rained' kullanılır.",
    "weight": 1.1,
    "discriminability": 0.8
  },
  {
    "id": "lvl-a2-6",
    "level": "A2",
    "skill": "reading",
    "passageTitle": "The Red Panda",
    "passage": "The red panda is slightly larger than a domestic cat. It spends most of its life in trees and feeds primarily on bamboo leaves. Because forests are shrinking, its population has declined significantly over recent decades.",
    "stem": "What is identified as the primary factor in the decrease of the red panda population?",
    "options": [
      "Shortage of clean drinking water",
      "The expansion of domestic cats",
      "The reduction of its natural forest habitats",
      "Harsh winter conditions in high altitudes",
      "Diseases caused by eating bamboo"
    ],
    "answer": 2,
    "explanation": "Metindeki 'Because forests are shrinking, its population has declined' ifadesi doğal orman alanlarının azalmasını işaret eder.",
    "weight": 1.1,
    "discriminability": 0.8
  },
  {
    "id": "lvl-b1-1",
    "level": "B1",
    "skill": "grammar",
    "stem": "Dr. Aris has been conducting research at the institute ------- he graduated from university in 2018.",
    "options": [
      "for",
      "since",
      "during",
      "until",
      "by"
    ],
    "answer": 1,
    "explanation": "'Since' kuralı: Since + Past zaman noktası (graduated), ana cümlede Present Perfect Continuous (has been conducting).",
    "weight": 1.2,
    "discriminability": 0.85
  },
  {
    "id": "lvl-b1-2",
    "level": "B1",
    "skill": "grammar",
    "stem": "The historic bridge, which was severely damaged in the storm, ------- by the municipality next spring.",
    "options": [
      "will restore",
      "will be restored",
      "has restored",
      "was restoring",
      "restores"
    ],
    "answer": 1,
    "explanation": "Gelecek zaman belirteci 'next spring' ve edilgen anlam (köprü restore edilecek) için Future Passive 'will be restored' gerekir.",
    "weight": 1.2,
    "discriminability": 0.85
  },
  {
    "id": "lvl-b1-3",
    "level": "B1",
    "skill": "vocabulary",
    "stem": "The government launched a nationwide campaign to ------- awareness about energy conservation.",
    "options": [
      "raise",
      "rise",
      "arise",
      "diminish",
      "postpone"
    ],
    "answer": 0,
    "explanation": "'Raise awareness' (farkındalık yaratmak/artırmak) sabit bir eşdizimdir (collocation). Rise nesne almaz.",
    "weight": 1.2,
    "discriminability": 0.85
  },
  {
    "id": "lvl-b1-4",
    "level": "B1",
    "skill": "vocabulary",
    "stem": "Due to heavy snow, the organizers decided to ------- the meeting until next Friday.",
    "options": [
      "call off",
      "put off",
      "look into",
      "carry out",
      "give up"
    ],
    "answer": 1,
    "explanation": "'Put off' ertelemek (postpone) demektir. 'Until next Friday' ifadesi iptal (call off) değil erteleme olduğunu gösterir.",
    "weight": 1.2,
    "discriminability": 0.85
  },
  {
    "id": "lvl-b1-5",
    "level": "B1",
    "skill": "sentence",
    "stem": "If she had studied more systematically, she ------- such difficulty in the examination.",
    "options": [
      "will not have",
      "would not have had",
      "did not have",
      "had not had",
      "does not have"
    ],
    "answer": 1,
    "explanation": "Type 3 Conditional: If + Past Perfect (had studied), main clause: would have + V3 (would not have had).",
    "weight": 1.2,
    "discriminability": 0.85
  },
  {
    "id": "lvl-b1-6",
    "level": "B1",
    "skill": "reading",
    "passageTitle": "Coffee Trade History",
    "passage": "Originally cultivated in Ethiopia, coffee spread across the Arabian Peninsula in the 15th century. Public coffeehouses rapidly evolved into vital hubs for intellectual debate, political discussion, and commercial transactions throughout Europe.",
    "stem": "It can be inferred from the passage that early European coffeehouses -------.",
    "options": [
      "were strictly forbidden for merchants and scholars",
      "served functions extending far beyond mere beverage consumption",
      "were directly managed by the Ethiopian imperial court",
      "focused exclusively on religious rituals",
      "discouraged any political dialogue among patrons"
    ],
    "answer": 1,
    "explanation": "Metindeki 'vital hubs for intellectual debate, political discussion, and commercial transactions' kahvehanelerin sadece içecek içilen yerler olmadığını gösterir.",
    "weight": 1.2,
    "discriminability": 0.85
  },
  {
    "id": "lvl-b2-1",
    "level": "B2",
    "skill": "grammar",
    "stem": "By the time the rescue helicopter arrived at the remote valley, the climbers ------- for over sixteen hours in sub-zero temperatures.",
    "options": [
      "waited",
      "have been waiting",
      "had been waiting",
      "will have waited",
      "are waiting"
    ],
    "answer": 2,
    "explanation": "'By the time + V2' yapısında ana cümlede geçmişteki sürecin öncesi anlatıldığı için Past Perfect Continuous ('had been waiting') kullanılır.",
    "weight": 1.3,
    "discriminability": 0.85
  },
  {
    "id": "lvl-b2-2",
    "level": "B2",
    "skill": "grammar",
    "stem": "The archaeologist concluded that the ancient clay tablets ------- by royal scribes rather than ordinary merchants.",
    "options": [
      "must have been written",
      "should write",
      "might write",
      "would write",
      "can have written"
    ],
    "answer": 0,
    "explanation": "Geçmişe yönelik güçlü çıkarım ve edilgen anlam: 'must have been + V3' (yazılmış olmalı).",
    "weight": 1.3,
    "discriminability": 0.85
  },
  {
    "id": "lvl-b2-3",
    "level": "B2",
    "skill": "vocabulary",
    "stem": "Prolonged exposure to chronic stress can produce ------- effects on cardiovascular and immune functions.",
    "options": [
      "detrimental",
      "lucrative",
      "redundant",
      "plausible",
      "superficial"
    ],
    "answer": 0,
    "explanation": "'Detrimental' = zararlı, hasar verici. Kronik stresin kalp ve bağışıklığa zararlı etkileri olur.",
    "weight": 1.3,
    "discriminability": 0.9
  },
  {
    "id": "lvl-b2-4",
    "level": "B2",
    "skill": "vocabulary",
    "stem": "The experimental drug proved remarkably effective, completely ------- the need for invasive surgical procedures.",
    "options": [
      "obviating",
      "reinforcing",
      "accelerating",
      "perpetuating",
      "disclosing"
    ],
    "answer": 0,
    "explanation": "'Obviate' = gereksiz kılmak, bertaraf etmek, ortadan kaldırmak. Ameliyat ihtiyacını gereksiz kıldı.",
    "weight": 1.3,
    "discriminability": 0.9
  },
  {
    "id": "lvl-b2-5",
    "level": "B2",
    "skill": "reading",
    "passageTitle": "Epigenetics and Inheritance",
    "passage": "Epigenetic mechanisms alter gene expression without mutating the underlying DNA sequence. Environmental stressors such as famine, environmental toxins, and severe psychological trauma can leave chemical methyl marks on chromatin, influencing health across subsequent generations.",
    "stem": "According to the passage, epigenetic modifications differ from standard genetic mutations because they -------.",
    "options": [
      "alter the fundamental nucleotide sequence of DNA",
      "occur exclusively during the embryonic phase of development",
      "modify expression patterns while leaving the core DNA sequence intact",
      "prevent chemical tags from adhering to chromosomes",
      "cannot be influenced by dietary or ecological factors"
    ],
    "answer": 2,
    "explanation": "'alter gene expression without mutating the underlying DNA sequence' ifadesi core DNA dizisini değiştirmeden gen ifadesini modifiye etmeyi açıklar.",
    "weight": 1.3,
    "discriminability": 0.9
  },
  {
    "id": "lvl-b2-6",
    "level": "B2",
    "skill": "sentence",
    "stem": "------- the widespread availability of synthetic fertilizers, soil degradation continues to threaten agricultural yields.",
    "options": [
      "Despite",
      "Because of",
      "In order that",
      "Consequently",
      "Provided that"
    ],
    "answer": 0,
    "explanation": "Cümle başında isim öbeği alan ve arkasından gelen olumsuz durumla zıtlık oluşturan edat 'Despite' (rağmen) olur.",
    "weight": 1.3,
    "discriminability": 0.85
  },
  {
    "id": "lvl-c1-1",
    "level": "C1",
    "skill": "grammar",
    "stem": "Seldom ------- such widespread consensus among international climatologists regarding the urgency of cutting methane emissions.",
    "options": [
      "has there been",
      "there has been",
      "is there being",
      "there was",
      "had it been"
    ],
    "answer": 0,
    "explanation": "Olumsuz zarf 'Seldom' cümlenin başına geldiğinde inversion (devrik yapı) oluşur: Seldom + has + there been.",
    "weight": 1.4,
    "discriminability": 0.9
  },
  {
    "id": "lvl-c1-2",
    "level": "C1",
    "skill": "grammar",
    "stem": "------- extensively in peer-reviewed journals, the team's computational model was adopted by meteorological centers worldwide.",
    "options": [
      "Having been validated",
      "Validating",
      "To validate",
      "Being validating",
      "Having validate"
    ],
    "answer": 0,
    "explanation": "Geçmişte tamamlanmış ve edilgen kısaltma (Participle Reduction): 'Having been validated' (Hakemli dergilerde doğrulanmış olan model...).",
    "weight": 1.4,
    "discriminability": 0.9
  },
  {
    "id": "lvl-c1-3",
    "level": "C1",
    "skill": "vocabulary",
    "stem": "The philosopher argued that human consciousness cannot be ------- reduced to mere neurochemical discharges.",
    "options": [
      "inexorably",
      "unequivocally",
      "perfunctorily",
      "precariously",
      "tentatively"
    ],
    "answer": 1,
    "explanation": "'Unequivocally' = şüpheye yer bırakmayacak biçimde, kesin olarak. İnsan bilinci tartışmasız şekilde sadece kimyaya indirgenemez.",
    "weight": 1.4,
    "discriminability": 0.92
  },
  {
    "id": "lvl-c1-4",
    "level": "C1",
    "skill": "reading",
    "passageTitle": "Deep Ocean Bioluminescence",
    "passage": "In the aphotic bathypelagic zone where sunlight cannot penetrate, over 90% of marine fauna produce bioluminescence. Beyond illumination, this chemiluminescence facilitates conspecific recognition, predatory luring, and counter-illumination camouflage against downwelling photons from upper layers.",
    "stem": "It can be deduced from the passage that counter-illumination is utilized by organisms to -------.",
    "options": [
      "increase metabolic expenditure to generate internal heat",
      "match background downwelling light to obscure their silhouettes from predators below",
      "blind competitors using intermittent high-intensity flashes",
      "attract prey into their gastrovascular cavities",
      "signal symbiotic bacteria located on benthic surfaces"
    ],
    "answer": 1,
    "explanation": "'counter-illumination camouflage against downwelling photons from upper layers' üstten gelen ışığa uyum sağlayarak aşağıdaki avcılara siluetini gizleme taktiğidir.",
    "weight": 1.4,
    "discriminability": 0.92
  },
  {
    "id": "lvl-c1-5",
    "level": "C1",
    "skill": "translation",
    "stem": "\"Sürdürülebilir kalkınma hedeflerine ulaşmak, ancak fosil yakıtlara olan küresel bağımlılığın kararlılıkla azaltılmasıyla mümkündür.\" cümlesinin en yakın karşılığı hangisidir?",
    "options": [
      "Reaching sustainable development goals will only be possible if global dependence on fossil fuels is decisively curtailed.",
      "To reach sustainable goals, countries must reduce fossil fuel consumption without delaying development.",
      "Achieving development targets depends partly on decreasing fossil fuels in major industrial centers.",
      "Unless sustainable development goals are reached, global reliance on fossil fuels cannot be eliminated.",
      "Fossil fuel dependence is decisively reduced whenever sustainable development targets are attained."
    ],
    "answer": 0,
    "explanation": "'Ancak ... ile mümkündür' vurgusu 'will only be possible if ... is decisively curtailed' yapısıyla tam örtüşür.",
    "weight": 1.4,
    "discriminability": 0.9
  },
  {
    "id": "lvl-c1-6",
    "level": "C1",
    "skill": "reading",
    "passageTitle": "Algorithmic Epistemology",
    "passage": "Deep learning models often function as inscrutable epistemic black boxes. While their empirical predictive veracity frequently surpasses human diagnostic capabilities, our inability to deconstruct their latent representations poses profound ethical dilemmas in jurisprudence and critical medicine.",
    "stem": "The author's primary concern regarding deep learning models stems from -------.",
    "options": [
      "their perpetual computational inaccuracy in clinical trials",
      "the opacity of their decision-making architectures despite high empirical success",
      "their excessive monetary costs compared to manual human labour",
      "the reluctance of medical professionals to integrate digital tools",
      "their failure to handle multifaceted statistical inputs"
    ],
    "answer": 1,
    "explanation": "'inscrutable epistemic black boxes' ve 'inability to deconstruct their latent representations' karar mekanizmalarının kapalılığına (opacity) işaret eder.",
    "weight": 1.4,
    "discriminability": 0.92
  },
  {
    "id": "lvl-c2-1",
    "level": "C2",
    "skill": "grammar",
    "stem": "Had it not been for the diplomat's adroit mediation, the escalating border skirmish ------- into a catastrophic regional war.",
    "options": [
      "would inevitably have degenerated",
      "will degenerate",
      "has degenerated",
      "would have been degenerating",
      "should degenerate"
    ],
    "answer": 0,
    "explanation": "İleri düzey Inversion + Past Unreality (Had it not been for...): 'would inevitably have degenerated' geçmişteki kaçınılmaz felaketi belirtir.",
    "weight": 1.5,
    "discriminability": 0.95
  },
  {
    "id": "lvl-c2-2",
    "level": "C2",
    "skill": "grammar",
    "stem": "The decree stipulates that every corporate entity, regardless of jurisdictional domicile, ------- financial transparency audits.",
    "options": [
      "undergo",
      "undergoes",
      "underwent",
      "shall have undergone",
      "undergoing"
    ],
    "answer": 0,
    "explanation": "Mandative Subjunctive yapısı: 'stipulates that + Subject + bare infinitive (V1)' kuralından dolayı 'undergo' kullanılır.",
    "weight": 1.5,
    "discriminability": 0.95
  },
  {
    "id": "lvl-c2-3",
    "level": "C2",
    "skill": "vocabulary",
    "stem": "Far from being a transient economic downturn, the collapse proved to be the ------- of an archaic fiscal orthodoxy.",
    "options": [
      "death knell",
      "silver lining",
      "prime mover",
      "status quo",
      "fait accompli"
    ],
    "answer": 0,
    "explanation": "'Death knell' = ölüm çanı, sonun başlangıcı. İdiomatic ileri düzey collocation.",
    "weight": 1.5,
    "discriminability": 0.95
  },
  {
    "id": "lvl-c2-4",
    "level": "C2",
    "skill": "vocabulary",
    "stem": "The treatise exhibits an extraordinary level of -------, dismantling entrenched dogmas with razor-sharp analytical precision.",
    "options": [
      "perspicacity",
      "pusillanimity",
      "prolixity",
      "petulance",
      "parsimony"
    ],
    "answer": 0,
    "explanation": "'Perspicacity' = üstün kavrayış yeteneği, derin anlayış ve keskin zeka. Diğer seçenekler (korkaklık, laf kalabalığı vb.) bağlama uymaz.",
    "weight": 1.5,
    "discriminability": 0.95
  },
  {
    "id": "lvl-c2-5",
    "level": "C2",
    "skill": "reading",
    "passageTitle": "Linguistic Relativity and Axiomatic Thought",
    "passage": "The neo-Whorfian paradigm does not advocate a vulgar determinism whereby lexical deficits render conceptual contemplation impossible; rather, it delineates how morphosyntactic predispositions habituate the human mind toward particular ontological saliences, tacitly nudging cognition along culturally sanctioned grooves.",
    "stem": "Which of the following best captures the author's nuanced stance on the neo-Whorfian paradigm?",
    "options": [
      "Language rigidly imprisons thought within insurmountable grammatical confines.",
      "Linguistic structures gently channel cognitive habits rather than absolutely dictating thought.",
      "Cultural variation plays no measurable role in shaping individual mental models.",
      "Lexical scarcity permanently incapacitates advanced mathematical computation.",
      "Grammar is merely an ephemeral byproduct of universal neurobiological substrate."
    ],
    "answer": 1,
    "explanation": "'does not advocate a vulgar determinism... rather habituate... tacitly nudging cognition' ifadesi dilin düşünceyi zorla hapsetmediğini, sadece bilişsel alışkanlıkları yönlendirdiğini belirtir.",
    "weight": 1.5,
    "discriminability": 0.95
  },
  {
    "id": "lvl-c2-6",
    "level": "C2",
    "skill": "translation",
    "stem": "\"Kurumun yapısal zaaflarını örtbas etme çabaları, ironik bir şekilde krizin derinleşmesine ve kamuoyu güveninin onarılamaz biçimde sarsılmasına çanak tutmuştur.\" cümlesinin en isabetli akademik çevirisi hangisidir?",
    "options": [
      "Attempts to obfuscate the institution's structural deficiencies ironically catalyzed the deepening of the crisis and irreparably undermined public trust.",
      "Trying to hide institutional flaws made the crisis worse and destroyed public belief in the company.",
      "Because the company concealed its problems, public trust was damaged during the prolonged financial breakdown.",
      "If the institution had addressed its deficiencies, the crisis would never have undermined public perception.",
      "The public trust was destroyed because the structural weakness of the company could not be hidden anymore."
    ],
    "answer": 0,
    "explanation": "'Obfuscate' (örtbas etmek/gizlemek), 'structural deficiencies' (yapısal zaaflar), 'catalyzed' (çanak tutmak/hızlandırmak) ve 'irreparably undermined' (onarılamaz biçimde sarsmak) tam karşılıktır.",
    "weight": 1.5,
    "discriminability": 0.95
  },
  {
    "id": "lvl-val-a1",
    "level": "A1",
    "skill": "grammar",
    "isValidation": true,
    "stem": "There ------- any milk left in the refrigerator.",
    "options": [
      "isn't",
      "aren't",
      "not is",
      "is no",
      "doesn't"
    ],
    "answer": 0,
    "explanation": "'Milk' sayılamayan isim (uncountable) olduğu için tekil olumsuz 'isn't any' kullanılır.",
    "weight": 1.0,
    "discriminability": 0.7
  },
  {
    "id": "lvl-val-a2",
    "level": "A2",
    "skill": "vocabulary",
    "isValidation": true,
    "stem": "Can you please ------- the lights? The room is too dark.",
    "options": [
      "turn on",
      "turn off",
      "give away",
      "take off",
      "look after"
    ],
    "answer": 0,
    "explanation": "Oda karanlık olduğunda ışıkları açmak (turn on) istenir.",
    "weight": 1.1,
    "discriminability": 0.75
  },
  {
    "id": "lvl-val-b1",
    "level": "B1",
    "skill": "grammar",
    "isValidation": true,
    "stem": "The student ------- essay won first prize was invited to the ceremony.",
    "options": [
      "whose",
      "whom",
      "which",
      "who",
      "where"
    ],
    "answer": 0,
    "explanation": "Öğrencinin makalesi (öğrenciye ait makale) iyelik ilişkisi belirttiği için Relative Pronoun 'whose' kullanılır.",
    "weight": 1.2,
    "discriminability": 0.85
  },
  {
    "id": "lvl-val-b2",
    "level": "B2",
    "skill": "sentence",
    "isValidation": true,
    "stem": "No sooner had the keynote speaker stepped onto the podium ------- the audience erupted into thunderous applause.",
    "options": [
      "than",
      "when",
      "then",
      "hardly",
      "scarcely"
    ],
    "answer": 0,
    "explanation": "'No sooner had ... than' kalıbı zorunlu bir eşleşmedir. (Hardly/scarcely ise 'when' ile kullanılır).",
    "weight": 1.3,
    "discriminability": 0.9
  },
  {
    "id": "lvl-val-c1",
    "level": "C1",
    "skill": "reading",
    "isValidation": true,
    "passageTitle": "Synthetic Biology Governance",
    "passage": "As gene-editing technologies undergo exponential democratisation, dual-use risks proliferate. The biosafety community must reconcile intellectual openness with preemptive biosecurity containment, lest benign open-source protocols be weaponised by rogue actors.",
    "stem": "The passage primarily warns against the danger of -------.",
    "options": [
      "excessive patent litigation stifling pharmaceutical profits",
      "benign genetic protocols being repurposed for malevolent objectives",
      "the prohibitive financial barriers obstructing academic bio-labs",
      "overly stringent laboratory safety protocols stalling research",
      "public mistrust in genetically modified agricultural crops"
    ],
    "answer": 1,
    "explanation": "'lest benign open-source protocols be weaponised by rogue actors' iyi niyetli protokollerin kötü niyetli amaçlarla kullanılma tehlikesine dikkat çeker.",
    "weight": 1.4,
    "discriminability": 0.92
  },
  {
    "id": "lvl-val-c2",
    "level": "C2",
    "skill": "vocabulary",
    "isValidation": true,
    "stem": "His speech was replete with high-minded platitudes that served merely to ------- the administration's complicity in the fiscal scandal.",
    "options": [
      "obfuscate",
      "elucidate",
      "substantiate",
      "repudiate",
      "delineate"
    ],
    "answer": 0,
    "explanation": "'Obfuscate' = örtbas etmek, bulanıklaştırmak. Boş laflar sadece suç ortaklığını örtbas etmeye yaradı.",
    "weight": 1.5,
    "discriminability": 0.95
  }
];

export const CORE_LEVEL_QUESTIONS = LEVEL_TEST_QUESTIONS.filter((q) => !q.isValidation);
export const VALIDATION_LEVEL_QUESTIONS = LEVEL_TEST_QUESTIONS.filter((q) => !!q.isValidation);

export interface LevelAssessmentResult {
  estimatedLevel: CefrLevel;
  levelBand?: string;
  confidence: 'low' | 'medium' | 'high';
  borderNote?: string;
  suggestValidation?: boolean;
  totalCorrect: number;
  totalWrong: number;
  totalEmpty: number;
  totalQuestions: number;
  scorePercent: number;
  levelScores: Record<CefrLevel, { correct: number; total: number; percent: number }>;
  skillScores: {
    grammar: number;
    vocabulary: number;
    reading: number;
    sentence: number;
    translation: number;
  };
  strengths: string[];
  weaknesses: string[];
  recommendedPlanDays: number;
  recommendedDailyMinutes: number;
  estimatedTransitionTime: string;
  levelColor: string;
  disclaimer: string;
}

export function calculateLevelAssessment(
  answers: Record<string, number>,
  activeQuestions: LevelTestQuestion[] = CORE_LEVEL_QUESTIONS
): LevelAssessmentResult {
  const levelStats: Record<CefrLevel, { correct: number; total: number }> = {
    A1: { correct: 0, total: 0 },
    A2: { correct: 0, total: 0 },
    B1: { correct: 0, total: 0 },
    B2: { correct: 0, total: 0 },
    C1: { correct: 0, total: 0 },
    C2: { correct: 0, total: 0 },
  };

  const skillStats: Record<SkillType, { correct: number; total: number }> = {
    grammar: { correct: 0, total: 0 },
    vocabulary: { correct: 0, total: 0 },
    reading: { correct: 0, total: 0 },
    sentence: { correct: 0, total: 0 },
    translation: { correct: 0, total: 0 },
  };

  let totalCorrect = 0;
  let totalWrong = 0;
  let totalEmpty = 0;

  for (const q of activeQuestions) {
    levelStats[q.level].total++;
    skillStats[q.skill].total++;

    const chosen = answers[q.id];
    if (chosen === undefined || chosen === -1) {
      totalEmpty++;
    } else if (chosen === q.answer) {
      totalCorrect++;
      levelStats[q.level].correct++;
      skillStats[q.skill].correct++;
    } else {
      totalWrong++;
    }
  }

  const levelScores: Record<CefrLevel, { correct: number; total: number; percent: number }> = {
    A1: { ...levelStats.A1, percent: levelStats.A1.total ? Math.round((levelStats.A1.correct / levelStats.A1.total) * 100) : 0 },
    A2: { ...levelStats.A2, percent: levelStats.A2.total ? Math.round((levelStats.A2.correct / levelStats.A2.total) * 100) : 0 },
    B1: { ...levelStats.B1, percent: levelStats.B1.total ? Math.round((levelStats.B1.correct / levelStats.B1.total) * 100) : 0 },
    B2: { ...levelStats.B2, percent: levelStats.B2.total ? Math.round((levelStats.B2.correct / levelStats.B2.total) * 100) : 0 },
    C1: { ...levelStats.C1, percent: levelStats.C1.total ? Math.round((levelStats.C1.correct / levelStats.C1.total) * 100) : 0 },
    C2: { ...levelStats.C2, percent: levelStats.C2.total ? Math.round((levelStats.C2.correct / levelStats.C2.total) * 100) : 0 },
  };

  const skillScores = {
    grammar: skillStats.grammar.total ? Math.round((skillStats.grammar.correct / skillStats.grammar.total) * 100) : 0,
    vocabulary: skillStats.vocabulary.total ? Math.round((skillStats.vocabulary.correct / skillStats.vocabulary.total) * 100) : 0,
    reading: skillStats.reading.total ? Math.round((skillStats.reading.correct / skillStats.reading.total) * 100) : 0,
    sentence: skillStats.sentence.total ? Math.round((skillStats.sentence.correct / skillStats.sentence.total) * 100) : 0,
    translation: skillStats.translation.total ? Math.round((skillStats.translation.correct / skillStats.translation.total) * 100) : 0,
  };

  // Diagnostic Level Evaluation using evaluateCefrLevel engine
  const evalResult = evaluateCefrLevel({
    levelAccuracy: {
      A1: levelScores.A1.percent,
      A2: levelScores.A2.percent,
      B1: levelScores.B1.percent,
      B2: levelScores.B2.percent,
      C1: levelScores.C1.percent,
      C2: levelScores.C2.percent,
    },
    skillAccuracy: skillScores,
    emptyCount: totalEmpty,
    totalQuestions: activeQuestions.length,
  });

  const estimatedLevel = evalResult.level;
  const confidence = evalResult.confidence;
  const borderNote = evalResult.borderNote;
  const levelBand = evalResult.levelBand;
  const suggestValidation = evalResult.suggestValidation;

  // Strengths & Weaknesses
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  const skillEntries: [string, number][] = [
    ['Gramer', skillScores.grammar],
    ['Kelime Bilgisi', skillScores.vocabulary],
    ['Okuma / Anlama (Reading)', skillScores.reading],
    ['Cümle Yapısı', skillScores.sentence],
    ['Çeviri / Anlam', skillScores.translation],
  ];

  skillEntries.sort((a, b) => b[1] - a[1]);

  skillEntries.slice(0, 2).forEach(([name, score]) => {
    if (score >= 60) strengths.push(`${name} (%${score})`);
  });

  skillEntries.slice(-2).reverse().forEach(([name, score]) => {
    if (score < 70) weaknesses.push(`${name} (%${score})`);
  });

  if (strengths.length === 0) strengths.push('Temel öğrenme potansiyeli ve motivasyon');
  if (weaknesses.length === 0) weaknesses.push('Üst düzey akademik nüanslar');

  // Recommendation parameters
  let recommendedPlanDays = 60;
  let recommendedDailyMinutes = 60;
  let estimatedTransitionTime = '8–12 Hafta';

  switch (estimatedLevel) {
    case 'A1':
      recommendedPlanDays = 90;
      recommendedDailyMinutes = 45;
      estimatedTransitionTime = '8–12 Hafta (Hızlı: 4–6 Hafta)';
      break;
    case 'A2':
      recommendedPlanDays = 90;
      recommendedDailyMinutes = 60;
      estimatedTransitionTime = '10–14 Hafta (Hızlı: 6–8 Hafta)';
      break;
    case 'B1':
      recommendedPlanDays = 60;
      recommendedDailyMinutes = 75;
      estimatedTransitionTime = '12–16 Hafta (Hızlı: 8–10 Hafta)';
      break;
    case 'B2':
      recommendedPlanDays = 60;
      recommendedDailyMinutes = 90;
      estimatedTransitionTime = '16–24 Hafta (Hızlı: 10–14 Hafta)';
      break;
    case 'C1':
      recommendedPlanDays = 30;
      recommendedDailyMinutes = 90;
      estimatedTransitionTime = '20–32 Hafta (Hızlı: 12–18 Hafta)';
      break;
    case 'C2':
      recommendedPlanDays = 30;
      recommendedDailyMinutes = 60;
      estimatedTransitionTime = 'Sürekli Akademik Pratik';
      break;
  }

  const scorePercent = Math.round((totalCorrect / activeQuestions.length) * 100);

  return {
    estimatedLevel,
    levelBand,
    confidence,
    borderNote,
    suggestValidation,
    totalCorrect,
    totalWrong,
    totalEmpty,
    totalQuestions: activeQuestions.length,
    scorePercent,
    levelScores,
    skillScores,
    strengths,
    weaknesses,
    recommendedPlanDays,
    recommendedDailyMinutes,
    estimatedTransitionTime,
    levelColor: LEVEL_COLORS[estimatedLevel].hex,
    disclaimer: 'Bu sonuç YDS Master içindeki performansına dayalı yaklaşık bir seviye tahminidir; resmî CEFR sertifikası değildir.',
  };
}
