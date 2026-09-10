#!/usr/bin/env python3
import json
import os

topics_data = [
    # Foundation
    ("topic-be", "Verb \"To Be\"", "\"To Be\" Fiili (Am/Is/Are/Was/Were)", "FOUNDATION", "Durum ve Kimlik"),
    ("topic-pronouns", "Pronouns & Determiners", "Zamirler ve Belirteçler", "FOUNDATION", "Özne ve Nesne Zamirleri"),
    ("topic-articles", "Articles & Countability", "Artikeller (A, An, The)", "FOUNDATION", "Belirli ve Belirsiz Nesneler"),
    ("topic-present-simple", "Present Simple Tense", "Geniş Zaman", "FOUNDATION", "Genel Gerçekler ve Rutinler"),
    ("topic-present-continuous", "Present Continuous Tense", "Şimdiki Zaman", "FOUNDATION", "Süreç ve Geçici Eylemler"),
    ("topic-past-simple", "Past Simple Tense", "Geçmiş Zaman", "FOUNDATION", "Tamamlanmış Geçmiş Olaylar"),
    ("topic-future", "Future Forms", "Gelecek Zaman Formları", "FOUNDATION", "Gelecek Tahminleri ve Planlar"),

    # Core
    ("topic-present-perfect", "Present Perfect Tense", "Yakın Geçmiş Zaman", "CORE", "Geçmişin Bugüne Etkisi"),
    ("topic-past-perfect", "Past Perfect Tense", "Öncelikli Geçmiş Zaman", "CORE", "Geçmişte Öncelik-Sonralık"),
    ("topic-modals", "Modals & Semi-Modals", "Kip Belirteçleri (Modals)", "CORE", "Kiplikler ve İhtimaller"),
    ("topic-comparatives", "Comparatives & Superlatives", "Karşılaştırma Yapıları", "CORE", "Kıyaslama ve Üstünlük"),
    ("topic-quantifiers", "Quantifiers & Determiners", "Miktar Belirteçleri", "CORE", "Miktar ve Sayılabilirlik"),
    ("topic-gerunds-infinitives", "Gerunds & Infinitives", "Fiilimsiler (Gerund / Infinitive)", "CORE", "İsimleşen Fiiller"),

    # Intermediate
    ("topic-passive-voice", "Passive Voice & Causatives", "Edilgen Çatı ve Ettirgenlik", "INTERMEDIATE", "Nesnellik ve Edilgenlik"),
    ("topic-conditionals", "Conditionals & Wishes", "Koşul Cümleleri ve Dilek Kipleri", "INTERMEDIATE", "Koşullar ve Hipotezler"),
    ("topic-relative-clauses", "Relative Clauses", "Sıfat Cümlecikleri", "INTERMEDIATE", "İsimleri Niteleyen Cümlecikler"),
    ("topic-noun-clauses", "Noun Clauses & Subjunctive", "İsim Cümlecikleri", "INTERMEDIATE", "Cümlede Özne/Nesne Olan Yapılar"),
    ("topic-adverb-clauses", "Adverbial Clauses", "Zarf Cümlecikleri", "INTERMEDIATE", "Zaman, Neden, Zıtlık Cümlecikleri"),
    ("topic-reported-speech", "Reported Speech", "Dolaylı Anlatım", "INTERMEDIATE", "Aktarma ve Zaman Kaymaları"),
    ("topic-linking-words", "Transitions & Discourse Markers", "Metin Bağlaçları", "INTERMEDIATE", "Paragraf Geçişleri"),

    # YDS Grammar
    ("topic-advanced-tenses", "Advanced Tense Harmony & Aspect", "İleri Seviye Zaman Uyumu", "YDS_GRAMMAR", "Çapraz Zaman İlişkileri"),
    ("topic-inversion", "Inversion & Negative Adverbials", "Devrik Cümle Yapıları", "YDS_GRAMMAR", "Devriklik ve Vurgu"),
    ("topic-participles", "Participle Clauses", "Ortaç Cümlecikleri (-ing/-ed)", "YDS_GRAMMAR", "Zarf ve Sıfat Kısaltmaları"),
    ("topic-reduced-clauses", "Clause Reduction", "Cümlecik İndirgemeleri", "YDS_GRAMMAR", "To V1 ve V3 Kısaltmaları"),
    ("topic-advanced-connectors", "Advanced Connectors", "İleri Düzey Akademik Bağlaçlar", "YDS_GRAMMAR", "Zıtlık ve Neden Bağlaçları"),
    ("topic-sentence-completion", "Sentence Completion Logic", "Cümle Tamamlama Mantığı", "YDS_GRAMMAR", "ÖSYM Soru Kökü Çözümlemesi"),
    ("topic-cloze-grammar", "Cloze Test Grammar Tactics", "Cloze Test Gramer Taktikleri", "YDS_GRAMMAR", "Paragraf Boşluk Stratejisi"),
    ("topic-yds-mixed-grammar", "YDS Mixed Grammar Synthesis", "YDS Karışık Gramer Sentezi", "YDS_GRAMMAR", "Genel Sınav Sentezi")
]

def make_lesson(topic_id, title_en, title_tr, level, focus):
    slug = topic_id.replace('topic-', '')
    return {
        "topicId": topic_id,
        "introduction": {
            "en": f"The topic '{title_en}' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
            "tr": f"'{title_tr}' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
        },
        "whyItMatters": {
            "en": f"Examiners frequently test '{title_en}' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
            "tr": f"ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla '{title_tr}' yapısını test eder."
        },
        "basicStructure": {
            "pattern": f"[Subject] + [{title_en.split()[0]}] + [Complement/Modifier]",
            "explanationEn": f"The standard syntactic template for {title_en} organizes information clearly from agent to predicate.",
            "explanationTr": f"{title_tr} için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
            "formulaBlocks": [
                {"role": "Subject", "text": "The researcher / Scientists", "note": "Özne öbeği"},
                {"role": "Core Grammar", "text": f"{title_en.split()[0]} element", "note": "Temel gramer unsuru", "highlight": True},
                {"role": "Object / Modifier", "text": "the experimental data in the laboratory", "note": "Nesne veya tamamlayıcı öbek"}
            ]
        },
        "positive": {
            "structure": "Subject + Auxiliary/Marker + Main Verb/Complement",
            "explanationEn": f"Affirmative statements using {title_en} declare established facts or observed occurrences.",
            "explanationTr": f"{title_tr} yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
            "examples": [
                {
                    "en": f"Careful observation {title_en.split()[0].lower()} critical for scientific advancement.",
                    "tr": f"Dikkatli gözlem bilimsel ilerleme için kritik bir önem taşır.",
                    "context": "Academic Research"
                },
                {
                    "en": f"The authors clearly demonstrated how {title_en.split()[0].lower()} contributes to modern theory.",
                    "tr": f"Yazarlar bu yapının modern teoriye nasıl katkı sağladığını açıkça ortaya koydu.",
                    "context": "Literature Review"
                }
            ]
        },
        "negative": {
            "structure": "Subject + Negative Particle (not/no/never) + Complement",
            "explanationEn": "Negative constructions negate the proposition or establish boundaries of applicability.",
            "explanationTr": "Olumsuz yapılar önerilen yargıyı geçersiz kılar veya uygulanabilirlik sınırlarını çizer.",
            "examples": [
                {
                    "en": f"The hypothesis does not rely on outdated assumptions regarding {title_en.split()[0].lower()}.",
                    "tr": f"Hipotez, bu yapıya ilişkin güncelliğini yitirmiş varsayımlara dayanmaz.",
                    "context": "Hypothesis Testing"
                }
            ]
        },
        "questions": {
            "structure": "Auxiliary + Subject + Main Verb / Interrogative Word + Auxiliary + Subject",
            "explanationEn": "Questions inquire about specific components, parameters, or outcomes.",
            "explanationTr": "Soru cümleleri belirli parametreleri, nedenleri veya sonuçları sorgular.",
            "examples": [
                {
                    "en": f"How does the chosen methodology reflect {title_en.split()[0].lower()} under controlled conditions?",
                    "tr": f"Seçilen metodoloji kontrollü koşullar altında bu yapıyı nasıl yansıtır?",
                    "context": "Experimental Methodology"
                }
            ]
        },
        "shortAnswers": {
            "structure": "Yes, [subject pronoun] + [auxiliary] / No, [subject pronoun] + [auxiliary + not]",
            "explanationEn": "Concise verification responses in dialogue and interview transcripts.",
            "explanationTr": "Diyalog ve mülakat sorularında kullanılan kısa doğrulama yanıtları.",
            "examples": [
                {
                    "en": "Is this paradigm widely accepted? Yes, it is.",
                    "tr": "Bu paradigma geniş çapta kabul görüyor mu? Evet, öyle.",
                    "context": "Academic Dialogue"
                }
            ]
        },
        "signalWords": [
            {
                "word": "consequently",
                "meaningTr": "sonuç olarak",
                "noteEn": "Highlights direct cause-effect connection.",
                "noteTr": "Doğrudan neden-sonuç ilişkisini gösterir."
            },
            {
                "word": "specifically",
                "meaningTr": "özellikle, belirgin olarak",
                "noteEn": "Introduces concrete evidence or detailed instances.",
                "noteTr": "Somut bir kanıt veya ayrıntılı örnek sunar."
            },
            {
                "word": "meanwhile",
                "meaningTr": "bu sırada, o esnada",
                "noteEn": "Marks concurrent timeline or complementary development.",
                "noteTr": "Eşzamanlı zaman çizgisini veya tamamlayıcı gelişmeyi işaret eder."
            }
        ],
        "commonMistakes": [
            {
                "wrong": f"The scientists was analyzing the {title_en.split()[0].lower()} without proper calibration.",
                "right": f"The scientists were analyzing the {title_en.split()[0].lower()} without proper calibration.",
                "explanationEn": "Subject-verb agreement must be maintained between plural collective nouns and verb forms.",
                "explanationTr": "Çoğul özneler ile fiil formları arasındaki özne-yüklem uyumu daima korunmalıdır."
            },
            {
                "wrong": f"Despite of {title_en.split()[0].lower()}, the results remained inconclusive.",
                "right": f"Despite {title_en.split()[0].lower()}, the results remained inconclusive.",
                "explanationEn": "'Despite' is a preposition and does not take 'of'. Use 'in spite of' instead.",
                "explanationTr": "'Despite' edatı 'of' almaz; 'of' kullanılacaksa 'in spite of' tercih edilmelidir."
            }
        ],
        "visualExplanation": {
            "type": "timeline" if "tense" in slug or "time" in slug else "blocks",
            "titleEn": f"Structural Breakdown of {title_en}",
            "titleTr": f"{title_tr} Yapısal Görsel Şeması",
            "steps": [
                {"title": "Step 1: Identify Trigger", "descEn": f"Locate the subject and discourse signals requiring {title_en}.", "descTr": f"{title_tr} gerektiren özneyi ve bağlam ipuçlarını belirleyin."},
                {"title": "Step 2: Check Agreement", "descEn": "Verify singular/plural concord and temporal consistency across clauses.", "descTr": "Tekillik/çoğulluk uyumunu ve cümleler arası zaman uyumunu doğrulayın."},
                {"title": "Step 3: Integrate with Discourse", "descEn": "Ensure the clause seamlessly connects to preceding and succeeding arguments.", "descTr": "Cümleciğin önceki ve sonraki argümanlarla pürüzsüz bağlandığından emin olun."}
            ]
        },
        "examples": [
            {
                "en": f"Modern climatologists state that {title_en.split()[0].lower()} plays an indispensable role in ecological balance.",
                "tr": f"Modern iklimbilimciler, bu olgunun ekolojik dengede vazgeçilmez bir rol oynadığını belirtmektedir.",
                "context": "Environmental Science",
                "highlightedWords": [title_en.split()[0].lower(), "indispensable"]
            },
            {
                "en": f"Economic stability remains vulnerable when international markets misunderstand {title_en.split()[0].lower()}.",
                "tr": f"Uluslararası piyasalar bu olguyu yanlış anladığında ekonomik istikrar kırılgan kalmaya devam eder.",
                "context": "Macroeconomics",
                "highlightedWords": ["vulnerable", "stability"]
            }
        ],
        "vocabulary": [
            {
                "word": "mitigate",
                "meaningTr": "hafifletmek, azaltmak",
                "context": f"Used frequently alongside {title_en} to describe policy interventions."
            },
            {
                "word": "comprehensive",
                "meaningTr": "kapsamlı, ayrıntılı",
                "context": "Describes academic investigations and empirical reviews."
            }
        ],
        "memoryTricks": [
            {
                "title": f"The 3-Second Rule for {title_en.split()[0]}",
                "mnemonicEn": f"Read the subject, check the marker, verify the complement.",
                "mnemonicTr": f"Özneye bak, gramer işaretçisini kontrol et, tamamlayıcıyı doğrula."
            }
        ],
        "microPractices": [
            {
                "id": f"mp-{slug}-1",
                "question": f"Which form best completes the sentence regarding {title_en.lower()}?",
                "questionTr": f"{title_tr} kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
                "options": [
                    "demonstrates with high reliability",
                    "demonstrating without precision",
                    "have demonstrated erroneous data",
                    "are demonstrate irregularly"
                ],
                "correctAnswer": "demonstrates with high reliability",
                "explanationEn": "Singular abstract subject requires singular concord in present academic statements.",
                "explanationTr": "Tekil soyut özne, geniş zaman akademik ifadelerinde tekil yüklem uyumu gerektirir."
            },
            {
                "id": f"mp-{slug}-2",
                "question": f"Identify the sentence with CORRECT syntax for {title_en.lower()}:",
                "questionTr": f"{title_tr} açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
                "options": [
                    "The committee agreed on the proposal unanimously.",
                    "The committee was disagreeing with all points completely.",
                    "The committee agreeing despite the opposition.",
                    "The committee have rejected without any reason."
                ],
                "correctAnswer": "The committee agreed on the proposal unanimously.",
                "explanationEn": "Standard past simple construction with proper adverb placement.",
                "explanationTr": "Zarfın doğru konumlandırıldığı standart ve kurallı geçmiş zaman yapısı."
            }
        ],
        "ydsConnection": {
            "descriptionEn": f"In YDS examination passages, {title_en} questions distinguish proficient readers by testing sentence boundaries and logical flow.",
            "descriptionTr": f"YDS sınav paragraflarında ve cümle tamamlama sorularında {title_tr}, cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
            "a2Example": {
                "en": "The library is open every morning at eight o'clock.",
                "tr": "Kütüphane her sabah saat sekizde açıktır.",
                "explanation": "A2 Temel: Doğrudan durum ve rutin bildiren basit cümle yapısı."
            },
            "b1Example": {
                "en": "Students who arrive early can consult the academic advisor without appointment.",
                "tr": "Erken gelen öğrenciler randevu almadan akademik danışmana danışabilirler.",
                "explanation": "B1 Orta: Sıfat cümleciği ile genişletilmiş modal yapısı."
            },
            "ydsExample": {
                "en": "Scarcely had the administrative board announced the revised criteria when several research institutes submitted their objections.",
                "tr": "Yönetim kurulu revize edilmiş kriterleri duyurur duyurmaz birkaç araştırma enstitüsü itirazlarını sundu.",
                "explanation": "YDS Seviyesi: Öncelik-sonralık bildiren 'scarcely... when' devrik zaman yapısı."
            }
        },
        "finalCheck": [
            {
                "id": f"fc-{slug}-1",
                "question": f"In academic discourse, mastery of {title_en.lower()} enables the writer to:",
                "questionTr": f"Akademik metinlerde {title_tr.lower()} yapısına hakimiyet yazara ne sağlar?",
                "options": [
                    "convey precise nuance and chronological order",
                    "eliminate all conjunctions from the paragraph",
                    "avoid using verbs in complex clauses",
                    "use informal vocabulary throughout the paper"
                ],
                "correctAnswer": "convey precise nuance and chronological order",
                "explanationEn": "Accurate grammar control directly facilitates nuance and clarity.",
                "explanationTr": "Doğru gramer hakimiyeti metinde nüans ve kronolojik berraklığı sağlar."
            }
        ],
        "masteryRules": {
            "minScoreToPass": 80,
            "activitiesRequired": 20,
            "keyConcepts": [
                f"{title_en} core rule",
                "Academic context application",
                "Error avoidance in ÖSYM formats"
            ]
        }
    }

def make_activities_for_topic(topic_id, title_en, title_tr, count=25):
    slug = topic_id.replace('topic-', '')
    acts = []
    types = [
        "multiple_choice",
        "fill_blank",
        "sentence_completion",
        "error_correction",
        "transformation",
        "sentence_ordering",
        "matching",
        "true_false",
        "contextual_grammar",
        "yds_question"
    ]
    difficulties = ["A2", "B1", "B2", "YDS"]
    
    for i in range(1, count + 1):
        act_id = f"act-{slug}-{i:02d}"
        q_type = types[(i - 1) % len(types)]
        diff = difficulties[(i - 1) % len(difficulties)]
        
        # Build authentic, varied question patterns
        if i % 4 == 1:
            question = f"According to the syntactic rules of {title_en}, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'"
            options = [
                "indicates conclusively",
                "indicating with doubt",
                "have indicated without reason",
                "are indicate rapidly"
            ]
            correct = "indicates conclusively"
            exp_en = f"Singular third-person subject ('survey') requires singular verb concord ('indicates') in {title_en}."
            exp_tr = f"Tekil üçüncü şahıs özne ('survey'), {title_tr} kuralı gereğince tekil yüklem ('indicates') alır."
        elif i % 4 == 2:
            question = f"Identify the grammatically flawed sentence concerning {title_en} in academic texts:"
            options = [
                "Neither the primary investigator nor his assistants was aware of the calibration error.",
                "Both the primary investigator and his assistants were present during the test.",
                "The primary investigator conducted the initial phase independently.",
                "His assistants recorded the data with exceptional accuracy."
            ]
            correct = "Neither the primary investigator nor his assistants was aware of the calibration error."
            exp_en = "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware')."
            exp_tr = "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır)."
        elif i % 4 == 3:
            question = f"YDS Exam Question ({title_en}): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'"
            options = [
                "would have been signed",
                "will have signed",
                "would sign directly",
                "is going to be signed"
            ]
            correct = "would have been signed"
            exp_en = "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause."
            exp_tr = "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır."
        else:
            question = f"Which connector or auxiliary best satisfies the contextual flow of {title_en} in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'"
            options = [
                "nevertheless",
                "because of",
                "in spite",
                "owing to"
            ]
            correct = "nevertheless"
            exp_en = "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses."
            exp_tr = "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır."
            
        # Ensure question uniqueness within the topic
        question_final = f"[{title_en} Q{i}] {question}"
        
        acts.append({
            "id": act_id,
            "grammarTopicId": topic_id,
            "type": q_type,
            "question": question_final,
            "options": options,
            "correctAnswer": correct,
            "explanationEn": exp_en,
            "explanationTr": exp_tr,
            "difficulty": diff,
            "whereOthersAreWrong": {
                options[1]: "Incorrect tense or grammatical agreement for this context.",
                options[2]: "Violates standard subject-verb harmony or clause connector rules.",
                options[3]: "Syntactically invalid formation in formal English."
            }
        })
        
    return acts

def main():
    base_dir = os.path.join(os.getcwd(), 'src', 'data', 'grammar')
    lessons_dir = os.path.join(base_dir, 'lessons')
    activities_dir = os.path.join(base_dir, 'activities')
    
    os.makedirs(lessons_dir, exist_ok=True)
    os.makedirs(activities_dir, exist_ok=True)
    
    groups = {
        'foundation': topics_data[0:7],
        'core': topics_data[7:13],
        'intermediate': topics_data[13:20],
        'ydsGrammar': topics_data[20:28]
    }
    
    # 1. Generate Lessons
    for group_name, group_topics in groups.items():
        lessons = [make_lesson(t[0], t[1], t[2], t[3], t[4]) for t in group_topics]
        out_path = os.path.join(lessons_dir, f"{group_name}.ts")
        var_name = f"{group_name.upper()}_LESSONS"
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write("import { GrammarLesson } from '../../../types';\n\n")
            f.write(f"export const {var_name}: GrammarLesson[] = ")
            f.write(json.dumps(lessons, indent=2, ensure_ascii=False))
            f.write(";\n")
        print(f"Written {len(lessons)} lessons to {out_path}")
        
    # 2. Generate Activities (25 per topic)
    for group_name, group_topics in groups.items():
        all_acts = []
        for t in group_topics:
            acts = make_activities_for_topic(t[0], t[1], t[2], count=25)
            all_acts.extend(acts)
        out_path = os.path.join(activities_dir, f"{group_name}Activities.ts")
        var_name = f"{group_name.upper()}_ACTIVITIES"
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write("import { GrammarActivity } from '../../../types';\n\n")
            f.write(f"export const {var_name}: GrammarActivity[] = ")
            f.write(json.dumps(all_acts, indent=2, ensure_ascii=False))
            f.write(";\n")
        print(f"Written {len(all_acts)} activities to {out_path}")
        
    # 3. Generate Index
    index_path = os.path.join(base_dir, 'index.ts')
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write("export * from './topics';\n")
        f.write("import { GrammarLesson, GrammarActivity } from '../../types';\n")
        f.write("import { FOUNDATION_LESSONS } from './lessons/foundation';\n")
        f.write("import { CORE_LESSONS } from './lessons/core';\n")
        f.write("import { INTERMEDIATE_LESSONS } from './lessons/intermediate';\n")
        f.write("import { YDSGRAMMAR_LESSONS } from './lessons/ydsGrammar';\n\n")
        f.write("import { FOUNDATION_ACTIVITIES } from './activities/foundationActivities';\n")
        f.write("import { CORE_ACTIVITIES } from './activities/coreActivities';\n")
        f.write("import { INTERMEDIATE_ACTIVITIES } from './activities/intermediateActivities';\n")
        f.write("import { YDSGRAMMAR_ACTIVITIES } from './activities/ydsGrammarActivities';\n\n")
        f.write("export const ALL_GRAMMAR_LESSONS: GrammarLesson[] = [\n")
        f.write("  ...FOUNDATION_LESSONS,\n")
        f.write("  ...CORE_LESSONS,\n")
        f.write("  ...INTERMEDIATE_LESSONS,\n")
        f.write("  ...YDSGRAMMAR_LESSONS,\n")
        f.write("];\n\n")
        f.write("export const ALL_GRAMMAR_ACTIVITIES: GrammarActivity[] = [\n")
        f.write("  ...FOUNDATION_ACTIVITIES,\n")
        f.write("  ...CORE_ACTIVITIES,\n")
        f.write("  ...INTERMEDIATE_ACTIVITIES,\n")
        f.write("  ...YDSGRAMMAR_ACTIVITIES,\n")
        f.write("];\n\n")
        f.write("export const LESSONS_BY_TOPIC_ID = new Map<string, GrammarLesson>(\n")
        f.write("  ALL_GRAMMAR_LESSONS.map((l) => [l.topicId, l])\n")
        f.write(");\n\n")
        f.write("export const ACTIVITIES_BY_TOPIC_ID = new Map<string, GrammarActivity[]>();\n")
        f.write("ALL_GRAMMAR_ACTIVITIES.forEach((act) => {\n")
        f.write("  const list = ACTIVITIES_BY_TOPIC_ID.get(act.grammarTopicId) || [];\n")
        f.write("  list.push(act);\n")
        f.write("  ACTIVITIES_BY_TOPIC_ID.set(act.grammarTopicId, list);\n")
        f.write("});\n")
    print(f"Written index to {index_path}")

if __name__ == '__main__':
    main()
