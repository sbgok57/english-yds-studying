import { GrammarLesson } from '../../../types';

export const FOUNDATION_LESSONS: GrammarLesson[] = [
  {
    "topicId": "topic-be",
    "introduction": {
      "en": "The topic 'Verb \"To Be\"' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'\"To Be\" Fiili (Am/Is/Are/Was/Were)' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Verb \"To Be\"' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla '\"To Be\" Fiili (Am/Is/Are/Was/Were)' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Verb] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Verb \"To Be\" organizes information clearly from agent to predicate.",
      "explanationTr": "\"To Be\" Fiili (Am/Is/Are/Was/Were) için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
      "formulaBlocks": [
        {
          "role": "Subject",
          "text": "The researcher / Scientists",
          "note": "Özne öbeği"
        },
        {
          "role": "Core Grammar",
          "text": "Verb element",
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
      "explanationEn": "Affirmative statements using Verb \"To Be\" declare established facts or observed occurrences.",
      "explanationTr": "\"To Be\" Fiili (Am/Is/Are/Was/Were) yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
      "examples": [
        {
          "en": "Careful observation verb critical for scientific advancement.",
          "tr": "Dikkatli gözlem bilimsel ilerleme için kritik bir önem taşır.",
          "context": "Academic Research"
        },
        {
          "en": "The authors clearly demonstrated how verb contributes to modern theory.",
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
          "en": "The hypothesis does not rely on outdated assumptions regarding verb.",
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
          "en": "How does the chosen methodology reflect verb under controlled conditions?",
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
        "wrong": "The scientists was analyzing the verb without proper calibration.",
        "right": "The scientists were analyzing the verb without proper calibration.",
        "explanationEn": "Subject-verb agreement must be maintained between plural collective nouns and verb forms.",
        "explanationTr": "Çoğul özneler ile fiil formları arasındaki özne-yüklem uyumu daima korunmalıdır."
      },
      {
        "wrong": "Despite of verb, the results remained inconclusive.",
        "right": "Despite verb, the results remained inconclusive.",
        "explanationEn": "'Despite' is a preposition and does not take 'of'. Use 'in spite of' instead.",
        "explanationTr": "'Despite' edatı 'of' almaz; 'of' kullanılacaksa 'in spite of' tercih edilmelidir."
      }
    ],
    "visualExplanation": {
      "type": "blocks",
      "titleEn": "Structural Breakdown of Verb \"To Be\"",
      "titleTr": "\"To Be\" Fiili (Am/Is/Are/Was/Were) Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Verb \"To Be\".",
          "descTr": "\"To Be\" Fiili (Am/Is/Are/Was/Were) gerektiren özneyi ve bağlam ipuçlarını belirleyin."
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
        "en": "Modern climatologists state that verb plays an indispensable role in ecological balance.",
        "tr": "Modern iklimbilimciler, bu olgunun ekolojik dengede vazgeçilmez bir rol oynadığını belirtmektedir.",
        "context": "Environmental Science",
        "highlightedWords": [
          "verb",
          "indispensable"
        ]
      },
      {
        "en": "Economic stability remains vulnerable when international markets misunderstand verb.",
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
        "context": "Used frequently alongside Verb \"To Be\" to describe policy interventions."
      },
      {
        "word": "comprehensive",
        "meaningTr": "kapsamlı, ayrıntılı",
        "context": "Describes academic investigations and empirical reviews."
      }
    ],
    "memoryTricks": [
      {
        "title": "The 3-Second Rule for Verb",
        "mnemonicEn": "Read the subject, check the marker, verify the complement.",
        "mnemonicTr": "Özneye bak, gramer işaretçisini kontrol et, tamamlayıcıyı doğrula."
      }
    ],
    "microPractices": [
      {
        "id": "mp-be-1",
        "question": "Which form best completes the sentence regarding verb \"to be\"?",
        "questionTr": "\"To Be\" Fiili (Am/Is/Are/Was/Were) kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-be-2",
        "question": "Identify the sentence with CORRECT syntax for verb \"to be\":",
        "questionTr": "\"To Be\" Fiili (Am/Is/Are/Was/Were) açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Verb \"To Be\" questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında \"To Be\" Fiili (Am/Is/Are/Was/Were), cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-be-1",
        "question": "In academic discourse, mastery of verb \"to be\" enables the writer to:",
        "questionTr": "Akademik metinlerde \"to be\" fiili (am/is/are/was/were) yapısına hakimiyet yazara ne sağlar?",
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
        "Verb \"To Be\" core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  },
  {
    "topicId": "topic-pronouns",
    "introduction": {
      "en": "The topic 'Pronouns & Determiners' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Zamirler ve Belirteçler' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Pronouns & Determiners' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Zamirler ve Belirteçler' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Pronouns] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Pronouns & Determiners organizes information clearly from agent to predicate.",
      "explanationTr": "Zamirler ve Belirteçler için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
      "formulaBlocks": [
        {
          "role": "Subject",
          "text": "The researcher / Scientists",
          "note": "Özne öbeği"
        },
        {
          "role": "Core Grammar",
          "text": "Pronouns element",
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
      "explanationEn": "Affirmative statements using Pronouns & Determiners declare established facts or observed occurrences.",
      "explanationTr": "Zamirler ve Belirteçler yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
      "examples": [
        {
          "en": "Careful observation pronouns critical for scientific advancement.",
          "tr": "Dikkatli gözlem bilimsel ilerleme için kritik bir önem taşır.",
          "context": "Academic Research"
        },
        {
          "en": "The authors clearly demonstrated how pronouns contributes to modern theory.",
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
          "en": "The hypothesis does not rely on outdated assumptions regarding pronouns.",
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
          "en": "How does the chosen methodology reflect pronouns under controlled conditions?",
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
        "wrong": "The scientists was analyzing the pronouns without proper calibration.",
        "right": "The scientists were analyzing the pronouns without proper calibration.",
        "explanationEn": "Subject-verb agreement must be maintained between plural collective nouns and verb forms.",
        "explanationTr": "Çoğul özneler ile fiil formları arasındaki özne-yüklem uyumu daima korunmalıdır."
      },
      {
        "wrong": "Despite of pronouns, the results remained inconclusive.",
        "right": "Despite pronouns, the results remained inconclusive.",
        "explanationEn": "'Despite' is a preposition and does not take 'of'. Use 'in spite of' instead.",
        "explanationTr": "'Despite' edatı 'of' almaz; 'of' kullanılacaksa 'in spite of' tercih edilmelidir."
      }
    ],
    "visualExplanation": {
      "type": "blocks",
      "titleEn": "Structural Breakdown of Pronouns & Determiners",
      "titleTr": "Zamirler ve Belirteçler Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Pronouns & Determiners.",
          "descTr": "Zamirler ve Belirteçler gerektiren özneyi ve bağlam ipuçlarını belirleyin."
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
        "en": "Modern climatologists state that pronouns plays an indispensable role in ecological balance.",
        "tr": "Modern iklimbilimciler, bu olgunun ekolojik dengede vazgeçilmez bir rol oynadığını belirtmektedir.",
        "context": "Environmental Science",
        "highlightedWords": [
          "pronouns",
          "indispensable"
        ]
      },
      {
        "en": "Economic stability remains vulnerable when international markets misunderstand pronouns.",
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
        "context": "Used frequently alongside Pronouns & Determiners to describe policy interventions."
      },
      {
        "word": "comprehensive",
        "meaningTr": "kapsamlı, ayrıntılı",
        "context": "Describes academic investigations and empirical reviews."
      }
    ],
    "memoryTricks": [
      {
        "title": "The 3-Second Rule for Pronouns",
        "mnemonicEn": "Read the subject, check the marker, verify the complement.",
        "mnemonicTr": "Özneye bak, gramer işaretçisini kontrol et, tamamlayıcıyı doğrula."
      }
    ],
    "microPractices": [
      {
        "id": "mp-pronouns-1",
        "question": "Which form best completes the sentence regarding pronouns & determiners?",
        "questionTr": "Zamirler ve Belirteçler kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-pronouns-2",
        "question": "Identify the sentence with CORRECT syntax for pronouns & determiners:",
        "questionTr": "Zamirler ve Belirteçler açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Pronouns & Determiners questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Zamirler ve Belirteçler, cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-pronouns-1",
        "question": "In academic discourse, mastery of pronouns & determiners enables the writer to:",
        "questionTr": "Akademik metinlerde zamirler ve belirteçler yapısına hakimiyet yazara ne sağlar?",
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
        "Pronouns & Determiners core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  },
  {
    "topicId": "topic-articles",
    "introduction": {
      "en": "The topic 'Articles & Countability' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Artikeller (A, An, The)' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Articles & Countability' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Artikeller (A, An, The)' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Articles] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Articles & Countability organizes information clearly from agent to predicate.",
      "explanationTr": "Artikeller (A, An, The) için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
      "formulaBlocks": [
        {
          "role": "Subject",
          "text": "The researcher / Scientists",
          "note": "Özne öbeği"
        },
        {
          "role": "Core Grammar",
          "text": "Articles element",
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
      "explanationEn": "Affirmative statements using Articles & Countability declare established facts or observed occurrences.",
      "explanationTr": "Artikeller (A, An, The) yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
      "examples": [
        {
          "en": "Careful observation articles critical for scientific advancement.",
          "tr": "Dikkatli gözlem bilimsel ilerleme için kritik bir önem taşır.",
          "context": "Academic Research"
        },
        {
          "en": "The authors clearly demonstrated how articles contributes to modern theory.",
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
          "en": "The hypothesis does not rely on outdated assumptions regarding articles.",
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
          "en": "How does the chosen methodology reflect articles under controlled conditions?",
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
        "wrong": "The scientists was analyzing the articles without proper calibration.",
        "right": "The scientists were analyzing the articles without proper calibration.",
        "explanationEn": "Subject-verb agreement must be maintained between plural collective nouns and verb forms.",
        "explanationTr": "Çoğul özneler ile fiil formları arasındaki özne-yüklem uyumu daima korunmalıdır."
      },
      {
        "wrong": "Despite of articles, the results remained inconclusive.",
        "right": "Despite articles, the results remained inconclusive.",
        "explanationEn": "'Despite' is a preposition and does not take 'of'. Use 'in spite of' instead.",
        "explanationTr": "'Despite' edatı 'of' almaz; 'of' kullanılacaksa 'in spite of' tercih edilmelidir."
      }
    ],
    "visualExplanation": {
      "type": "blocks",
      "titleEn": "Structural Breakdown of Articles & Countability",
      "titleTr": "Artikeller (A, An, The) Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Articles & Countability.",
          "descTr": "Artikeller (A, An, The) gerektiren özneyi ve bağlam ipuçlarını belirleyin."
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
        "en": "Modern climatologists state that articles plays an indispensable role in ecological balance.",
        "tr": "Modern iklimbilimciler, bu olgunun ekolojik dengede vazgeçilmez bir rol oynadığını belirtmektedir.",
        "context": "Environmental Science",
        "highlightedWords": [
          "articles",
          "indispensable"
        ]
      },
      {
        "en": "Economic stability remains vulnerable when international markets misunderstand articles.",
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
        "context": "Used frequently alongside Articles & Countability to describe policy interventions."
      },
      {
        "word": "comprehensive",
        "meaningTr": "kapsamlı, ayrıntılı",
        "context": "Describes academic investigations and empirical reviews."
      }
    ],
    "memoryTricks": [
      {
        "title": "The 3-Second Rule for Articles",
        "mnemonicEn": "Read the subject, check the marker, verify the complement.",
        "mnemonicTr": "Özneye bak, gramer işaretçisini kontrol et, tamamlayıcıyı doğrula."
      }
    ],
    "microPractices": [
      {
        "id": "mp-articles-1",
        "question": "Which form best completes the sentence regarding articles & countability?",
        "questionTr": "Artikeller (A, An, The) kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-articles-2",
        "question": "Identify the sentence with CORRECT syntax for articles & countability:",
        "questionTr": "Artikeller (A, An, The) açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Articles & Countability questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Artikeller (A, An, The), cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-articles-1",
        "question": "In academic discourse, mastery of articles & countability enables the writer to:",
        "questionTr": "Akademik metinlerde artikeller (a, an, the) yapısına hakimiyet yazara ne sağlar?",
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
        "Articles & Countability core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  },
  {
    "topicId": "topic-present-simple",
    "introduction": {
      "en": "The topic 'Present Simple Tense' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Geniş Zaman' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Present Simple Tense' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Geniş Zaman' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Present] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Present Simple Tense organizes information clearly from agent to predicate.",
      "explanationTr": "Geniş Zaman için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
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
      "explanationEn": "Affirmative statements using Present Simple Tense declare established facts or observed occurrences.",
      "explanationTr": "Geniş Zaman yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
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
      "titleEn": "Structural Breakdown of Present Simple Tense",
      "titleTr": "Geniş Zaman Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Present Simple Tense.",
          "descTr": "Geniş Zaman gerektiren özneyi ve bağlam ipuçlarını belirleyin."
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
        "context": "Used frequently alongside Present Simple Tense to describe policy interventions."
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
        "id": "mp-present-simple-1",
        "question": "Which form best completes the sentence regarding present simple tense?",
        "questionTr": "Geniş Zaman kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-present-simple-2",
        "question": "Identify the sentence with CORRECT syntax for present simple tense:",
        "questionTr": "Geniş Zaman açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Present Simple Tense questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Geniş Zaman, cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-present-simple-1",
        "question": "In academic discourse, mastery of present simple tense enables the writer to:",
        "questionTr": "Akademik metinlerde geniş zaman yapısına hakimiyet yazara ne sağlar?",
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
        "Present Simple Tense core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  },
  {
    "topicId": "topic-present-continuous",
    "introduction": {
      "en": "The topic 'Present Continuous Tense' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Şimdiki Zaman' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Present Continuous Tense' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Şimdiki Zaman' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Present] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Present Continuous Tense organizes information clearly from agent to predicate.",
      "explanationTr": "Şimdiki Zaman için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
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
      "explanationEn": "Affirmative statements using Present Continuous Tense declare established facts or observed occurrences.",
      "explanationTr": "Şimdiki Zaman yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
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
      "titleEn": "Structural Breakdown of Present Continuous Tense",
      "titleTr": "Şimdiki Zaman Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Present Continuous Tense.",
          "descTr": "Şimdiki Zaman gerektiren özneyi ve bağlam ipuçlarını belirleyin."
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
        "context": "Used frequently alongside Present Continuous Tense to describe policy interventions."
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
        "id": "mp-present-continuous-1",
        "question": "Which form best completes the sentence regarding present continuous tense?",
        "questionTr": "Şimdiki Zaman kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-present-continuous-2",
        "question": "Identify the sentence with CORRECT syntax for present continuous tense:",
        "questionTr": "Şimdiki Zaman açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Present Continuous Tense questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Şimdiki Zaman, cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-present-continuous-1",
        "question": "In academic discourse, mastery of present continuous tense enables the writer to:",
        "questionTr": "Akademik metinlerde şimdiki zaman yapısına hakimiyet yazara ne sağlar?",
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
        "Present Continuous Tense core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  },
  {
    "topicId": "topic-past-simple",
    "introduction": {
      "en": "The topic 'Past Simple Tense' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Geçmiş Zaman' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Past Simple Tense' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Geçmiş Zaman' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Past] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Past Simple Tense organizes information clearly from agent to predicate.",
      "explanationTr": "Geçmiş Zaman için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
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
      "explanationEn": "Affirmative statements using Past Simple Tense declare established facts or observed occurrences.",
      "explanationTr": "Geçmiş Zaman yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
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
      "titleEn": "Structural Breakdown of Past Simple Tense",
      "titleTr": "Geçmiş Zaman Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Past Simple Tense.",
          "descTr": "Geçmiş Zaman gerektiren özneyi ve bağlam ipuçlarını belirleyin."
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
        "context": "Used frequently alongside Past Simple Tense to describe policy interventions."
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
        "id": "mp-past-simple-1",
        "question": "Which form best completes the sentence regarding past simple tense?",
        "questionTr": "Geçmiş Zaman kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-past-simple-2",
        "question": "Identify the sentence with CORRECT syntax for past simple tense:",
        "questionTr": "Geçmiş Zaman açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Past Simple Tense questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Geçmiş Zaman, cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-past-simple-1",
        "question": "In academic discourse, mastery of past simple tense enables the writer to:",
        "questionTr": "Akademik metinlerde geçmiş zaman yapısına hakimiyet yazara ne sağlar?",
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
        "Past Simple Tense core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  },
  {
    "topicId": "topic-future",
    "introduction": {
      "en": "The topic 'Future Forms' is foundational for constructing and analyzing academic English sentences in YDT and YDS exams.",
      "tr": "'Gelecek Zaman Formları' konusu, YDT ve YDS sınavlarında akademik İngilizce cümlelerini kurmak ve çözümlemek için temel bir yapı taşıdır."
    },
    "whyItMatters": {
      "en": "Examiners frequently test 'Future Forms' to verify whether candidates can detect precise syntactic relationships, time framing, and contextual nuance.",
      "tr": "ÖSYM sınav hazırlayıcıları, adayların cümle içi yapısal ilişkileri, zaman dilimini ve bağlamsal nüansı doğru kavrayıp kavramadığını ölçmek için sıklıkla 'Gelecek Zaman Formları' yapısını test eder."
    },
    "basicStructure": {
      "pattern": "[Subject] + [Future] + [Complement/Modifier]",
      "explanationEn": "The standard syntactic template for Future Forms organizes information clearly from agent to predicate.",
      "explanationTr": "Gelecek Zaman Formları için standart sözdizimi şablonu bilgiyi özneden yükleme doğru mantıksal bir sırayla düzenler.",
      "formulaBlocks": [
        {
          "role": "Subject",
          "text": "The researcher / Scientists",
          "note": "Özne öbeği"
        },
        {
          "role": "Core Grammar",
          "text": "Future element",
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
      "explanationEn": "Affirmative statements using Future Forms declare established facts or observed occurrences.",
      "explanationTr": "Gelecek Zaman Formları yapısındaki olumlu cümleler, kanıtlanmış olguları veya gözlemlenen durumları bildirir.",
      "examples": [
        {
          "en": "Careful observation future critical for scientific advancement.",
          "tr": "Dikkatli gözlem bilimsel ilerleme için kritik bir önem taşır.",
          "context": "Academic Research"
        },
        {
          "en": "The authors clearly demonstrated how future contributes to modern theory.",
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
          "en": "The hypothesis does not rely on outdated assumptions regarding future.",
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
          "en": "How does the chosen methodology reflect future under controlled conditions?",
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
        "wrong": "The scientists was analyzing the future without proper calibration.",
        "right": "The scientists were analyzing the future without proper calibration.",
        "explanationEn": "Subject-verb agreement must be maintained between plural collective nouns and verb forms.",
        "explanationTr": "Çoğul özneler ile fiil formları arasındaki özne-yüklem uyumu daima korunmalıdır."
      },
      {
        "wrong": "Despite of future, the results remained inconclusive.",
        "right": "Despite future, the results remained inconclusive.",
        "explanationEn": "'Despite' is a preposition and does not take 'of'. Use 'in spite of' instead.",
        "explanationTr": "'Despite' edatı 'of' almaz; 'of' kullanılacaksa 'in spite of' tercih edilmelidir."
      }
    ],
    "visualExplanation": {
      "type": "blocks",
      "titleEn": "Structural Breakdown of Future Forms",
      "titleTr": "Gelecek Zaman Formları Yapısal Görsel Şeması",
      "steps": [
        {
          "title": "Step 1: Identify Trigger",
          "descEn": "Locate the subject and discourse signals requiring Future Forms.",
          "descTr": "Gelecek Zaman Formları gerektiren özneyi ve bağlam ipuçlarını belirleyin."
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
        "en": "Modern climatologists state that future plays an indispensable role in ecological balance.",
        "tr": "Modern iklimbilimciler, bu olgunun ekolojik dengede vazgeçilmez bir rol oynadığını belirtmektedir.",
        "context": "Environmental Science",
        "highlightedWords": [
          "future",
          "indispensable"
        ]
      },
      {
        "en": "Economic stability remains vulnerable when international markets misunderstand future.",
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
        "context": "Used frequently alongside Future Forms to describe policy interventions."
      },
      {
        "word": "comprehensive",
        "meaningTr": "kapsamlı, ayrıntılı",
        "context": "Describes academic investigations and empirical reviews."
      }
    ],
    "memoryTricks": [
      {
        "title": "The 3-Second Rule for Future",
        "mnemonicEn": "Read the subject, check the marker, verify the complement.",
        "mnemonicTr": "Özneye bak, gramer işaretçisini kontrol et, tamamlayıcıyı doğrula."
      }
    ],
    "microPractices": [
      {
        "id": "mp-future-1",
        "question": "Which form best completes the sentence regarding future forms?",
        "questionTr": "Gelecek Zaman Formları kuralına göre cümleyi en doğru tamamlayan seçenek hangisidir?",
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
        "id": "mp-future-2",
        "question": "Identify the sentence with CORRECT syntax for future forms:",
        "questionTr": "Gelecek Zaman Formları açısından DOĞRU sözdizimine sahip cümleyi seçiniz:",
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
      "descriptionEn": "In YDS examination passages, Future Forms questions distinguish proficient readers by testing sentence boundaries and logical flow.",
      "descriptionTr": "YDS sınav paragraflarında ve cümle tamamlama sorularında Gelecek Zaman Formları, cümle sınırlarını ve mantıksal akışı ölçerek ayırt edici rol oynar.",
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
        "id": "fc-future-1",
        "question": "In academic discourse, mastery of future forms enables the writer to:",
        "questionTr": "Akademik metinlerde gelecek zaman formları yapısına hakimiyet yazara ne sağlar?",
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
        "Future Forms core rule",
        "Academic context application",
        "Error avoidance in ÖSYM formats"
      ]
    }
  }
];
