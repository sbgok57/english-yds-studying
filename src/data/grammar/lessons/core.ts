import { GrammarLesson } from '../../../types';

export const CORE_LESSONS: GrammarLesson[] = [
  {
    "topicId": "topic-present-perfect",
    "introduction": {
      "en": "The topic 'Present Perfect Tense' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Yakın Geçmiş Zaman' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Present Perfect Tense' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Yakın Geçmiş Zaman' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Present] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Present Perfect Tense organizes information clearly from agent to predicate.",
      "explanationTr": "Yakın Geçmiş Zaman için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
      "formulaBlocks": [
        {
          "role": "Subject",
          "text": "The researcher / Scientists",
          "note": "Özne öbeği"
        },
        {
          "role": "Core Grammar",
          "text": "Present element",
          "note": "Temel gramer unsuru",
          "highlight": true
        },
        {
          "role": "Object / Modifier",
          "text": "the experimental data in the laboratory",
          "note": "Nesne veya tamamlayıcı öbek"
        }
      ]
    },
    "positive": {
      "structure": "Subject + Auxiliary/Marker + Main Verb/Complement",
      "explanationEn": "Affirmative statements using Present Perfect Tense declare established facts or observed occurrences.",
      "explanationTr": "Yakın Geçmiş Zaman yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
      "examples": [
        {
          "en": "Careful observation present critical for scientific advancement.",
          "tr": "Dikkatli gözlem bilimsel ilerleme için kritik bir önem taşır.",
          "context": "Academic Research"
        },
        {
          "en": "The authors clearly demonstrated how present contributes to modern theory.",
          "tr": "Yazarlar bu yapının modern teoriye nasıl katkı sağladığını açıkça ortaya koydu.",
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
          "en": "The hypothesis does not rely on outdated assumptions regarding present.",
          "tr": "Hipotez, bu yapıya ilişkin güncelliğini yitirmiş varsayımlara dayanmaz.",
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
          "en": "How does the chosen methodology reflect present under controlled conditions?",
          "tr": "Seçilen metodoloji kontrollü koşullar altında bu yapıyı nasıl yansıtır?",
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
        "wrong": "The scientists was analyzing the present without proper calibration.",
        "right": "The scientists were analyzing the present without proper calibration.",
        "explanationEn": "Subject-verb agreement must be maintained between plural collective nouns and verb forms.",
        "explanationTr": "Çoğul özneler ile fiil formları arasındaki özne-yüklem uyumu daima korunmalıdır."
      },
      {
        "wrong": "Despite of present, the results remained inconclusive.",
        "right": "Despite present, the results remained inconclusive.",
        "explanationEn": "'Despite' is a preposition and does not take 'of'. Use 'in spite of' instead.",
        "explanationTr": "'Despite' edatı 'of' almaz; 'of' kullanılacaksa 'in spite of' tercih edilmelidir."
      }
    ],
    "visualExplanation": {
      "type": "blocks",
      "titleEn": "Structural Breakdown of Present Perfect Tense",
      "titleTr": "Yakın Geçmiş Zaman Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Present Perfect Tense.",
          "descTr": "Yakın Geçmiş Zaman gerektiren özneyi ve bağlam ipuçlarını belirleyin."
        },
        {
          "title": "Step 2: Check Agreement",
          "descEn": "Verify singular/plural concord and temporal consistency across clauses.",
          "descTr": "Tekillik/çoğulluk uyumunu ve cümleler arası zaman uyumunu doğrulayın."
        },
        {
          "title": "Step 3: Integrate with Discourse",
          "descEn": "Ensure the clause seamlessly connects to preceding and succeeding arguments.",
          "descTr": "Cümleciğin önceki ve sonraki argümanlarla pürüzsüz bağlandığından emin olun."
        }
      ]
    },
    "examples": [
      {
        "en": "Modern climatologists state that present plays an indispensable role in ecological balance.",
        "tr": "Modern iklimbilimciler, bu olgunun ekolojik dengede vazgeçilmez bir rol oynadığını belirtmektedir.",
        "context": "Environmental Science",
        "highlightedWords": [
          "present",
          "indispensable"
        ]
      },
      {
        "en": "Economic stability remains vulnerable when international markets misunderstand present.",
        "tr": "Uluslararası piyasalar bu olguyu yanlış anladığında ekonomik istikrar kırılgan kalmaya devam eder.",
        "context": "Macroeconomics",
        "highlightedWords": [
          "vulnerable",
          "stability"
        ]
      }
    ],
    "vocabulary": [
      {
        "word": "mitigate",
        "meaningTr": "hafifletmek, azaltmak",
        "context": "Used frequently alongside Present Perfect Tense to describe policy interventions."
      },
      {
        "word": "comprehensive",
        "meaningTr": "kapsamlı, ayrıntılı",
        "context": "Describes academic investigations and empirical reviews."
      }
    ],
    "memoryTricks": [
      {
        "title": "The 3-Second Rule for Present",
        "mnemonicEn": "Read the subject, check the marker, verify the complement.",
        "mnemonicTr": "Özneye bak, gramer işaretçisini kontrol et, tamamlayıcıyı doğrula."
      }
    ],
    "microPractices": [
      {
        "id": "mp-present-perfect-1",
        "question": "Which form best completes the sentence regarding present perfect tense?",
        "questionTr": "Yakın Geçmiş Zaman kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-present-perfect-2",
        "question": "Identify the sentence with CORRECT syntax for present perfect tense:",
        "questionTr": "Yakın Geçmiş Zaman açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Present Perfect Tense questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Yakın Geçmiş Zaman, cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-present-perfect-1",
        "question": "In academic discourse, mastery of present perfect tense enables the writer to:",
        "questionTr": "Akademik metinlerde yakın geçmiş zaman yapısına hakimiyet yazara ne sağlar?",
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
        "Present Perfect Tense core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  },
  {
    "topicId": "topic-past-perfect",
    "introduction": {
      "en": "The topic 'Past Perfect Tense' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Öncelikli Geçmiş Zaman' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Past Perfect Tense' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Öncelikli Geçmiş Zaman' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Past] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Past Perfect Tense organizes information clearly from agent to predicate.",
      "explanationTr": "Öncelikli Geçmiş Zaman için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
      "formulaBlocks": [
        {
          "role": "Subject",
          "text": "The researcher / Scientists",
          "note": "Özne öbeği"
        },
        {
          "role": "Core Grammar",
          "text": "Past element",
          "note": "Temel gramer unsuru",
          "highlight": true
        },
        {
          "role": "Object / Modifier",
          "text": "the experimental data in the laboratory",
          "note": "Nesne veya tamamlayıcı öbek"
        }
      ]
    },
    "positive": {
      "structure": "Subject + Auxiliary/Marker + Main Verb/Complement",
      "explanationEn": "Affirmative statements using Past Perfect Tense declare established facts or observed occurrences.",
      "explanationTr": "Öncelikli Geçmiş Zaman yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
      "examples": [
        {
          "en": "Careful observation past critical for scientific advancement.",
          "tr": "Dikkatli gözlem bilimsel ilerleme için kritik bir önem taşır.",
          "context": "Academic Research"
        },
        {
          "en": "The authors clearly demonstrated how past contributes to modern theory.",
          "tr": "Yazarlar bu yapının modern teoriye nasıl katkı sağladığını açıkça ortaya koydu.",
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
          "en": "The hypothesis does not rely on outdated assumptions regarding past.",
          "tr": "Hipotez, bu yapıya ilişkin güncelliğini yitirmiş varsayımlara dayanmaz.",
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
          "en": "How does the chosen methodology reflect past under controlled conditions?",
          "tr": "Seçilen metodoloji kontrollü koşullar altında bu yapıyı nasıl yansıtır?",
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
        "wrong": "The scientists was analyzing the past without proper calibration.",
        "right": "The scientists were analyzing the past without proper calibration.",
        "explanationEn": "Subject-verb agreement must be maintained between plural collective nouns and verb forms.",
        "explanationTr": "Çoğul özneler ile fiil formları arasındaki özne-yüklem uyumu daima korunmalıdır."
      },
      {
        "wrong": "Despite of past, the results remained inconclusive.",
        "right": "Despite past, the results remained inconclusive.",
        "explanationEn": "'Despite' is a preposition and does not take 'of'. Use 'in spite of' instead.",
        "explanationTr": "'Despite' edatı 'of' almaz; 'of' kullanılacaksa 'in spite of' tercih edilmelidir."
      }
    ],
    "visualExplanation": {
      "type": "blocks",
      "titleEn": "Structural Breakdown of Past Perfect Tense",
      "titleTr": "Öncelikli Geçmiş Zaman Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Past Perfect Tense.",
          "descTr": "Öncelikli Geçmiş Zaman gerektiren özneyi ve bağlam ipuçlarını belirleyin."
        },
        {
          "title": "Step 2: Check Agreement",
          "descEn": "Verify singular/plural concord and temporal consistency across clauses.",
          "descTr": "Tekillik/çoğulluk uyumunu ve cümleler arası zaman uyumunu doğrulayın."
        },
        {
          "title": "Step 3: Integrate with Discourse",
          "descEn": "Ensure the clause seamlessly connects to preceding and succeeding arguments.",
          "descTr": "Cümleciğin önceki ve sonraki argümanlarla pürüzsüz bağlandığından emin olun."
        }
      ]
    },
    "examples": [
      {
        "en": "Modern climatologists state that past plays an indispensable role in ecological balance.",
        "tr": "Modern iklimbilimciler, bu olgunun ekolojik dengede vazgeçilmez bir rol oynadığını belirtmektedir.",
        "context": "Environmental Science",
        "highlightedWords": [
          "past",
          "indispensable"
        ]
      },
      {
        "en": "Economic stability remains vulnerable when international markets misunderstand past.",
        "tr": "Uluslararası piyasalar bu olguyu yanlış anladığında ekonomik istikrar kırılgan kalmaya devam eder.",
        "context": "Macroeconomics",
        "highlightedWords": [
          "vulnerable",
          "stability"
        ]
      }
    ],
    "vocabulary": [
      {
        "word": "mitigate",
        "meaningTr": "hafifletmek, azaltmak",
        "context": "Used frequently alongside Past Perfect Tense to describe policy interventions."
      },
      {
        "word": "comprehensive",
        "meaningTr": "kapsamlı, ayrıntılı",
        "context": "Describes academic investigations and empirical reviews."
      }
    ],
    "memoryTricks": [
      {
        "title": "The 3-Second Rule for Past",
        "mnemonicEn": "Read the subject, check the marker, verify the complement.",
        "mnemonicTr": "Özneye bak, gramer işaretçisini kontrol et, tamamlayıcıyı doğrula."
      }
    ],
    "microPractices": [
      {
        "id": "mp-past-perfect-1",
        "question": "Which form best completes the sentence regarding past perfect tense?",
        "questionTr": "Öncelikli Geçmiş Zaman kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-past-perfect-2",
        "question": "Identify the sentence with CORRECT syntax for past perfect tense:",
        "questionTr": "Öncelikli Geçmiş Zaman açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Past Perfect Tense questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Öncelikli Geçmiş Zaman, cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-past-perfect-1",
        "question": "In academic discourse, mastery of past perfect tense enables the writer to:",
        "questionTr": "Akademik metinlerde öncelikli geçmiş zaman yapısına hakimiyet yazara ne sağlar?",
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
        "Past Perfect Tense core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  },
  {
    "topicId": "topic-modals",
    "introduction": {
      "en": "The topic 'Modals & Semi-Modals' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Kip Belirteçleri (Modals)' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Modals & Semi-Modals' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Kip Belirteçleri (Modals)' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Modals] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Modals & Semi-Modals organizes information clearly from agent to predicate.",
      "explanationTr": "Kip Belirteçleri (Modals) için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
      "formulaBlocks": [
        {
          "role": "Subject",
          "text": "The researcher / Scientists",
          "note": "Özne öbeği"
        },
        {
          "role": "Core Grammar",
          "text": "Modals element",
          "note": "Temel gramer unsuru",
          "highlight": true
        },
        {
          "role": "Object / Modifier",
          "text": "the experimental data in the laboratory",
          "note": "Nesne veya tamamlayıcı öbek"
        }
      ]
    },
    "positive": {
      "structure": "Subject + Auxiliary/Marker + Main Verb/Complement",
      "explanationEn": "Affirmative statements using Modals & Semi-Modals declare established facts or observed occurrences.",
      "explanationTr": "Kip Belirteçleri (Modals) yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
      "examples": [
        {
          "en": "Careful observation modals critical for scientific advancement.",
          "tr": "Dikkatli gözlem bilimsel ilerleme için kritik bir önem taşır.",
          "context": "Academic Research"
        },
        {
          "en": "The authors clearly demonstrated how modals contributes to modern theory.",
          "tr": "Yazarlar bu yapının modern teoriye nasıl katkı sağladığını açıkça ortaya koydu.",
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
          "en": "The hypothesis does not rely on outdated assumptions regarding modals.",
          "tr": "Hipotez, bu yapıya ilişkin güncelliğini yitirmiş varsayımlara dayanmaz.",
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
          "en": "How does the chosen methodology reflect modals under controlled conditions?",
          "tr": "Seçilen metodoloji kontrollü koşullar altında bu yapıyı nasıl yansıtır?",
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
        "wrong": "The scientists was analyzing the modals without proper calibration.",
        "right": "The scientists were analyzing the modals without proper calibration.",
        "explanationEn": "Subject-verb agreement must be maintained between plural collective nouns and verb forms.",
        "explanationTr": "Çoğul özneler ile fiil formları arasındaki özne-yüklem uyumu daima korunmalıdır."
      },
      {
        "wrong": "Despite of modals, the results remained inconclusive.",
        "right": "Despite modals, the results remained inconclusive.",
        "explanationEn": "'Despite' is a preposition and does not take 'of'. Use 'in spite of' instead.",
        "explanationTr": "'Despite' edatı 'of' almaz; 'of' kullanılacaksa 'in spite of' tercih edilmelidir."
      }
    ],
    "visualExplanation": {
      "type": "blocks",
      "titleEn": "Structural Breakdown of Modals & Semi-Modals",
      "titleTr": "Kip Belirteçleri (Modals) Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Modals & Semi-Modals.",
          "descTr": "Kip Belirteçleri (Modals) gerektiren özneyi ve bağlam ipuçlarını belirleyin."
        },
        {
          "title": "Step 2: Check Agreement",
          "descEn": "Verify singular/plural concord and temporal consistency across clauses.",
          "descTr": "Tekillik/çoğulluk uyumunu ve cümleler arası zaman uyumunu doğrulayın."
        },
        {
          "title": "Step 3: Integrate with Discourse",
          "descEn": "Ensure the clause seamlessly connects to preceding and succeeding arguments.",
          "descTr": "Cümleciğin önceki ve sonraki argümanlarla pürüzsüz bağlandığından emin olun."
        }
      ]
    },
    "examples": [
      {
        "en": "Modern climatologists state that modals plays an indispensable role in ecological balance.",
        "tr": "Modern iklimbilimciler, bu olgunun ekolojik dengede vazgeçilmez bir rol oynadığını belirtmektedir.",
        "context": "Environmental Science",
        "highlightedWords": [
          "modals",
          "indispensable"
        ]
      },
      {
        "en": "Economic stability remains vulnerable when international markets misunderstand modals.",
        "tr": "Uluslararası piyasalar bu olguyu yanlış anladığında ekonomik istikrar kırılgan kalmaya devam eder.",
        "context": "Macroeconomics",
        "highlightedWords": [
          "vulnerable",
          "stability"
        ]
      }
    ],
    "vocabulary": [
      {
        "word": "mitigate",
        "meaningTr": "hafifletmek, azaltmak",
        "context": "Used frequently alongside Modals & Semi-Modals to describe policy interventions."
      },
      {
        "word": "comprehensive",
        "meaningTr": "kapsamlı, ayrıntılı",
        "context": "Describes academic investigations and empirical reviews."
      }
    ],
    "memoryTricks": [
      {
        "title": "The 3-Second Rule for Modals",
        "mnemonicEn": "Read the subject, check the marker, verify the complement.",
        "mnemonicTr": "Özneye bak, gramer işaretçisini kontrol et, tamamlayıcıyı doğrula."
      }
    ],
    "microPractices": [
      {
        "id": "mp-modals-1",
        "question": "Which form best completes the sentence regarding modals & semi-modals?",
        "questionTr": "Kip Belirteçleri (Modals) kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-modals-2",
        "question": "Identify the sentence with CORRECT syntax for modals & semi-modals:",
        "questionTr": "Kip Belirteçleri (Modals) açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Modals & Semi-Modals questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Kip Belirteçleri (Modals), cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-modals-1",
        "question": "In academic discourse, mastery of modals & semi-modals enables the writer to:",
        "questionTr": "Akademik metinlerde kip belirteçleri (modals) yapısına hakimiyet yazara ne sağlar?",
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
        "Modals & Semi-Modals core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  },
  {
    "topicId": "topic-comparatives",
    "introduction": {
      "en": "The topic 'Comparatives & Superlatives' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Karşılaştırma Yapıları' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Comparatives & Superlatives' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Karşılaştırma Yapıları' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Comparatives] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Comparatives & Superlatives organizes information clearly from agent to predicate.",
      "explanationTr": "Karşılaştırma Yapıları için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
      "formulaBlocks": [
        {
          "role": "Subject",
          "text": "The researcher / Scientists",
          "note": "Özne öbeği"
        },
        {
          "role": "Core Grammar",
          "text": "Comparatives element",
          "note": "Temel gramer unsuru",
          "highlight": true
        },
        {
          "role": "Object / Modifier",
          "text": "the experimental data in the laboratory",
          "note": "Nesne veya tamamlayıcı öbek"
        }
      ]
    },
    "positive": {
      "structure": "Subject + Auxiliary/Marker + Main Verb/Complement",
      "explanationEn": "Affirmative statements using Comparatives & Superlatives declare established facts or observed occurrences.",
      "explanationTr": "Karşılaştırma Yapıları yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
      "examples": [
        {
          "en": "Careful observation comparatives critical for scientific advancement.",
          "tr": "Dikkatli gözlem bilimsel ilerleme için kritik bir önem taşır.",
          "context": "Academic Research"
        },
        {
          "en": "The authors clearly demonstrated how comparatives contributes to modern theory.",
          "tr": "Yazarlar bu yapının modern teoriye nasıl katkı sağladığını açıkça ortaya koydu.",
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
          "en": "The hypothesis does not rely on outdated assumptions regarding comparatives.",
          "tr": "Hipotez, bu yapıya ilişkin güncelliğini yitirmiş varsayımlara dayanmaz.",
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
          "en": "How does the chosen methodology reflect comparatives under controlled conditions?",
          "tr": "Seçilen metodoloji kontrollü koşullar altında bu yapıyı nasıl yansıtır?",
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
        "wrong": "The scientists was analyzing the comparatives without proper calibration.",
        "right": "The scientists were analyzing the comparatives without proper calibration.",
        "explanationEn": "Subject-verb agreement must be maintained between plural collective nouns and verb forms.",
        "explanationTr": "Çoğul özneler ile fiil formları arasındaki özne-yüklem uyumu daima korunmalıdır."
      },
      {
        "wrong": "Despite of comparatives, the results remained inconclusive.",
        "right": "Despite comparatives, the results remained inconclusive.",
        "explanationEn": "'Despite' is a preposition and does not take 'of'. Use 'in spite of' instead.",
        "explanationTr": "'Despite' edatı 'of' almaz; 'of' kullanılacaksa 'in spite of' tercih edilmelidir."
      }
    ],
    "visualExplanation": {
      "type": "blocks",
      "titleEn": "Structural Breakdown of Comparatives & Superlatives",
      "titleTr": "Karşılaştırma Yapıları Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Comparatives & Superlatives.",
          "descTr": "Karşılaştırma Yapıları gerektiren özneyi ve bağlam ipuçlarını belirleyin."
        },
        {
          "title": "Step 2: Check Agreement",
          "descEn": "Verify singular/plural concord and temporal consistency across clauses.",
          "descTr": "Tekillik/çoğulluk uyumunu ve cümleler arası zaman uyumunu doğrulayın."
        },
        {
          "title": "Step 3: Integrate with Discourse",
          "descEn": "Ensure the clause seamlessly connects to preceding and succeeding arguments.",
          "descTr": "Cümleciğin önceki ve sonraki argümanlarla pürüzsüz bağlandığından emin olun."
        }
      ]
    },
    "examples": [
      {
        "en": "Modern climatologists state that comparatives plays an indispensable role in ecological balance.",
        "tr": "Modern iklimbilimciler, bu olgunun ekolojik dengede vazgeçilmez bir rol oynadığını belirtmektedir.",
        "context": "Environmental Science",
        "highlightedWords": [
          "comparatives",
          "indispensable"
        ]
      },
      {
        "en": "Economic stability remains vulnerable when international markets misunderstand comparatives.",
        "tr": "Uluslararası piyasalar bu olguyu yanlış anladığında ekonomik istikrar kırılgan kalmaya devam eder.",
        "context": "Macroeconomics",
        "highlightedWords": [
          "vulnerable",
          "stability"
        ]
      }
    ],
    "vocabulary": [
      {
        "word": "mitigate",
        "meaningTr": "hafifletmek, azaltmak",
        "context": "Used frequently alongside Comparatives & Superlatives to describe policy interventions."
      },
      {
        "word": "comprehensive",
        "meaningTr": "kapsamlı, ayrıntılı",
        "context": "Describes academic investigations and empirical reviews."
      }
    ],
    "memoryTricks": [
      {
        "title": "The 3-Second Rule for Comparatives",
        "mnemonicEn": "Read the subject, check the marker, verify the complement.",
        "mnemonicTr": "Özneye bak, gramer işaretçisini kontrol et, tamamlayıcıyı doğrula."
      }
    ],
    "microPractices": [
      {
        "id": "mp-comparatives-1",
        "question": "Which form best completes the sentence regarding comparatives & superlatives?",
        "questionTr": "Karşılaştırma Yapıları kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-comparatives-2",
        "question": "Identify the sentence with CORRECT syntax for comparatives & superlatives:",
        "questionTr": "Karşılaştırma Yapıları açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Comparatives & Superlatives questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Karşılaştırma Yapıları, cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-comparatives-1",
        "question": "In academic discourse, mastery of comparatives & superlatives enables the writer to:",
        "questionTr": "Akademik metinlerde karşılaştırma yapıları yapısına hakimiyet yazara ne sağlar?",
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
        "Comparatives & Superlatives core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  },
  {
    "topicId": "topic-quantifiers",
    "introduction": {
      "en": "The topic 'Quantifiers & Determiners' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Miktar Belirteçleri' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Quantifiers & Determiners' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Miktar Belirteçleri' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Quantifiers] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Quantifiers & Determiners organizes information clearly from agent to predicate.",
      "explanationTr": "Miktar Belirteçleri için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
      "formulaBlocks": [
        {
          "role": "Subject",
          "text": "The researcher / Scientists",
          "note": "Özne öbeği"
        },
        {
          "role": "Core Grammar",
          "text": "Quantifiers element",
          "note": "Temel gramer unsuru",
          "highlight": true
        },
        {
          "role": "Object / Modifier",
          "text": "the experimental data in the laboratory",
          "note": "Nesne veya tamamlayıcı öbek"
        }
      ]
    },
    "positive": {
      "structure": "Subject + Auxiliary/Marker + Main Verb/Complement",
      "explanationEn": "Affirmative statements using Quantifiers & Determiners declare established facts or observed occurrences.",
      "explanationTr": "Miktar Belirteçleri yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
      "examples": [
        {
          "en": "Careful observation quantifiers critical for scientific advancement.",
          "tr": "Dikkatli gözlem bilimsel ilerleme için kritik bir önem taşır.",
          "context": "Academic Research"
        },
        {
          "en": "The authors clearly demonstrated how quantifiers contributes to modern theory.",
          "tr": "Yazarlar bu yapının modern teoriye nasıl katkı sağladığını açıkça ortaya koydu.",
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
          "en": "The hypothesis does not rely on outdated assumptions regarding quantifiers.",
          "tr": "Hipotez, bu yapıya ilişkin güncelliğini yitirmiş varsayımlara dayanmaz.",
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
          "en": "How does the chosen methodology reflect quantifiers under controlled conditions?",
          "tr": "Seçilen metodoloji kontrollü koşullar altında bu yapıyı nasıl yansıtır?",
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
        "wrong": "The scientists was analyzing the quantifiers without proper calibration.",
        "right": "The scientists were analyzing the quantifiers without proper calibration.",
        "explanationEn": "Subject-verb agreement must be maintained between plural collective nouns and verb forms.",
        "explanationTr": "Çoğul özneler ile fiil formları arasındaki özne-yüklem uyumu daima korunmalıdır."
      },
      {
        "wrong": "Despite of quantifiers, the results remained inconclusive.",
        "right": "Despite quantifiers, the results remained inconclusive.",
        "explanationEn": "'Despite' is a preposition and does not take 'of'. Use 'in spite of' instead.",
        "explanationTr": "'Despite' edatı 'of' almaz; 'of' kullanılacaksa 'in spite of' tercih edilmelidir."
      }
    ],
    "visualExplanation": {
      "type": "blocks",
      "titleEn": "Structural Breakdown of Quantifiers & Determiners",
      "titleTr": "Miktar Belirteçleri Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Quantifiers & Determiners.",
          "descTr": "Miktar Belirteçleri gerektiren özneyi ve bağlam ipuçlarını belirleyin."
        },
        {
          "title": "Step 2: Check Agreement",
          "descEn": "Verify singular/plural concord and temporal consistency across clauses.",
          "descTr": "Tekillik/çoğulluk uyumunu ve cümleler arası zaman uyumunu doğrulayın."
        },
        {
          "title": "Step 3: Integrate with Discourse",
          "descEn": "Ensure the clause seamlessly connects to preceding and succeeding arguments.",
          "descTr": "Cümleciğin önceki ve sonraki argümanlarla pürüzsüz bağlandığından emin olun."
        }
      ]
    },
    "examples": [
      {
        "en": "Modern climatologists state that quantifiers plays an indispensable role in ecological balance.",
        "tr": "Modern iklimbilimciler, bu olgunun ekolojik dengede vazgeçilmez bir rol oynadığını belirtmektedir.",
        "context": "Environmental Science",
        "highlightedWords": [
          "quantifiers",
          "indispensable"
        ]
      },
      {
        "en": "Economic stability remains vulnerable when international markets misunderstand quantifiers.",
        "tr": "Uluslararası piyasalar bu olguyu yanlış anladığında ekonomik istikrar kırılgan kalmaya devam eder.",
        "context": "Macroeconomics",
        "highlightedWords": [
          "vulnerable",
          "stability"
        ]
      }
    ],
    "vocabulary": [
      {
        "word": "mitigate",
        "meaningTr": "hafifletmek, azaltmak",
        "context": "Used frequently alongside Quantifiers & Determiners to describe policy interventions."
      },
      {
        "word": "comprehensive",
        "meaningTr": "kapsamlı, ayrıntılı",
        "context": "Describes academic investigations and empirical reviews."
      }
    ],
    "memoryTricks": [
      {
        "title": "The 3-Second Rule for Quantifiers",
        "mnemonicEn": "Read the subject, check the marker, verify the complement.",
        "mnemonicTr": "Özneye bak, gramer işaretçisini kontrol et, tamamlayıcıyı doğrula."
      }
    ],
    "microPractices": [
      {
        "id": "mp-quantifiers-1",
        "question": "Which form best completes the sentence regarding quantifiers & determiners?",
        "questionTr": "Miktar Belirteçleri kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-quantifiers-2",
        "question": "Identify the sentence with CORRECT syntax for quantifiers & determiners:",
        "questionTr": "Miktar Belirteçleri açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Quantifiers & Determiners questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Miktar Belirteçleri, cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-quantifiers-1",
        "question": "In academic discourse, mastery of quantifiers & determiners enables the writer to:",
        "questionTr": "Akademik metinlerde miktar belirteçleri yapısına hakimiyet yazara ne sağlar?",
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
        "Quantifiers & Determiners core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  },
  {
    "topicId": "topic-gerunds-infinitives",
    "introduction": {
      "en": "The topic 'Gerunds & Infinitives' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Fiilimsiler (Gerund / Infinitive)' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Gerunds & Infinitives' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Fiilimsiler (Gerund / Infinitive)' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Gerunds] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Gerunds & Infinitives organizes information clearly from agent to predicate.",
      "explanationTr": "Fiilimsiler (Gerund / Infinitive) için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
      "formulaBlocks": [
        {
          "role": "Subject",
          "text": "The researcher / Scientists",
          "note": "Özne öbeği"
        },
        {
          "role": "Core Grammar",
          "text": "Gerunds element",
          "note": "Temel gramer unsuru",
          "highlight": true
        },
        {
          "role": "Object / Modifier",
          "text": "the experimental data in the laboratory",
          "note": "Nesne veya tamamlayıcı öbek"
        }
      ]
    },
    "positive": {
      "structure": "Subject + Auxiliary/Marker + Main Verb/Complement",
      "explanationEn": "Affirmative statements using Gerunds & Infinitives declare established facts or observed occurrences.",
      "explanationTr": "Fiilimsiler (Gerund / Infinitive) yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
      "examples": [
        {
          "en": "Careful observation gerunds critical for scientific advancement.",
          "tr": "Dikkatli gözlem bilimsel ilerleme için kritik bir önem taşır.",
          "context": "Academic Research"
        },
        {
          "en": "The authors clearly demonstrated how gerunds contributes to modern theory.",
          "tr": "Yazarlar bu yapının modern teoriye nasıl katkı sağladığını açıkça ortaya koydu.",
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
          "en": "The hypothesis does not rely on outdated assumptions regarding gerunds.",
          "tr": "Hipotez, bu yapıya ilişkin güncelliğini yitirmiş varsayımlara dayanmaz.",
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
          "en": "How does the chosen methodology reflect gerunds under controlled conditions?",
          "tr": "Seçilen metodoloji kontrollü koşullar altında bu yapıyı nasıl yansıtır?",
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
        "wrong": "The scientists was analyzing the gerunds without proper calibration.",
        "right": "The scientists were analyzing the gerunds without proper calibration.",
        "explanationEn": "Subject-verb agreement must be maintained between plural collective nouns and verb forms.",
        "explanationTr": "Çoğul özneler ile fiil formları arasındaki özne-yüklem uyumu daima korunmalıdır."
      },
      {
        "wrong": "Despite of gerunds, the results remained inconclusive.",
        "right": "Despite gerunds, the results remained inconclusive.",
        "explanationEn": "'Despite' is a preposition and does not take 'of'. Use 'in spite of' instead.",
        "explanationTr": "'Despite' edatı 'of' almaz; 'of' kullanılacaksa 'in spite of' tercih edilmelidir."
      }
    ],
    "visualExplanation": {
      "type": "blocks",
      "titleEn": "Structural Breakdown of Gerunds & Infinitives",
      "titleTr": "Fiilimsiler (Gerund / Infinitive) Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Gerunds & Infinitives.",
          "descTr": "Fiilimsiler (Gerund / Infinitive) gerektiren özneyi ve bağlam ipuçlarını belirleyin."
        },
        {
          "title": "Step 2: Check Agreement",
          "descEn": "Verify singular/plural concord and temporal consistency across clauses.",
          "descTr": "Tekillik/çoğulluk uyumunu ve cümleler arası zaman uyumunu doğrulayın."
        },
        {
          "title": "Step 3: Integrate with Discourse",
          "descEn": "Ensure the clause seamlessly connects to preceding and succeeding arguments.",
          "descTr": "Cümleciğin önceki ve sonraki argümanlarla pürüzsüz bağlandığından emin olun."
        }
      ]
    },
    "examples": [
      {
        "en": "Modern climatologists state that gerunds plays an indispensable role in ecological balance.",
        "tr": "Modern iklimbilimciler, bu olgunun ekolojik dengede vazgeçilmez bir rol oynadığını belirtmektedir.",
        "context": "Environmental Science",
        "highlightedWords": [
          "gerunds",
          "indispensable"
        ]
      },
      {
        "en": "Economic stability remains vulnerable when international markets misunderstand gerunds.",
        "tr": "Uluslararası piyasalar bu olguyu yanlış anladığında ekonomik istikrar kırılgan kalmaya devam eder.",
        "context": "Macroeconomics",
        "highlightedWords": [
          "vulnerable",
          "stability"
        ]
      }
    ],
    "vocabulary": [
      {
        "word": "mitigate",
        "meaningTr": "hafifletmek, azaltmak",
        "context": "Used frequently alongside Gerunds & Infinitives to describe policy interventions."
      },
      {
        "word": "comprehensive",
        "meaningTr": "kapsamlı, ayrıntılı",
        "context": "Describes academic investigations and empirical reviews."
      }
    ],
    "memoryTricks": [
      {
        "title": "The 3-Second Rule for Gerunds",
        "mnemonicEn": "Read the subject, check the marker, verify the complement.",
        "mnemonicTr": "Özneye bak, gramer işaretçisini kontrol et, tamamlayıcıyı doğrula."
      }
    ],
    "microPractices": [
      {
        "id": "mp-gerunds-infinitives-1",
        "question": "Which form best completes the sentence regarding gerunds & infinitives?",
        "questionTr": "Fiilimsiler (Gerund / Infinitive) kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-gerunds-infinitives-2",
        "question": "Identify the sentence with CORRECT syntax for gerunds & infinitives:",
        "questionTr": "Fiilimsiler (Gerund / Infinitive) açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Gerunds & Infinitives questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Fiilimsiler (Gerund / Infinitive), cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-gerunds-infinitives-1",
        "question": "In academic discourse, mastery of gerunds & infinitives enables the writer to:",
        "questionTr": "Akademik metinlerde fiilimsiler (gerund / infinitive) yapısına hakimiyet yazara ne sağlar?",
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
        "Gerunds & Infinitives core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  }
];
