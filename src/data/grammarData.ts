import { GrammarTopic } from '../types/grammar';

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    "id": "be",
    "title": "To Be (Am / Is / Are / Was / Were)",
    "titleTr": "Olmak Fiili (Durum ve Tanımlama)",
    "category": "FOUNDATION",
    "order": 1,
    "intro": {
      "overview": "The verb 'to be' connects a subject to a state, identity, or qualification.",
      "overviewTr": "'To be' fiili bir özneyi durumuna, kimliğine veya niteliğine bağlar.",
      "whatIsIt": "To describe who or what someone is, their profession, state, or location.",
      "whatIsItTr": "Kişinin mesleğini, durumunu veya nerede olduğunu ifade etmek için kullanılır.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SUBJECT] + [AM/IS/ARE/WAS/WERE] + [COMPLEMENT]",
      "formulaNegative": "[SUBJECT] + [AM/IS/ARE/WAS/WERE NOT] + [COMPLEMENT]",
      "formulaQuestion": "[AM/IS/ARE/WAS/WERE] + [SUBJECT] + [COMPLEMENT]?",
      "formulaShortAnswers": "Yes, I am. / No, he isn't. / Yes, they were.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "now",
        "currently",
        "yesterday",
        "in 2020",
        "always"
      ],
      "explanationEn": "Shows state at present or past.",
      "explanationTr": "Şimdiki veya geçmişteki durum bildiren zaman zarfları."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how To Be (Am / Is / Are / Was / Were) organizes meaning in professional contexts.",
      "descriptionTr": "Olmak Fiili (Durum ve Tanımlama) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor To Be (Am / Is / Are / Was / Were) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "To -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "be-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "be-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test To Be (Am / Is / Are / Was / Were) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in To Be (Am / Is / Are / Was / Were).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Olmak Fiili (Durum ve Tanımlama) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "be-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of To Be (Am / Is / Are / Was / Were) in a business context?",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of To Be (Am / Is / Are / Was / Were).",
        "explanationTr": "A seçeneği Olmak Fiili (Durum ve Tanımlama) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding To Be (Am / Is / Are / Was / Were).",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-3",
        "type": "fill-in-blank",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of To Be (Am / Is / Are / Was / Were) in corporate and academic English?",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 4",
        "options": [
          "The verb 'to be' connects a subject to a state, identity, or qualification.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "The verb 'to be' connects a subject to a state, identity, or qualification.",
        "explanationEn": "As defined, To Be (Am / Is / Are / Was / Were) serves primarily to to describe who or what someone is, their profession, state, or location.",
        "explanationTr": "Olmak Fiili (Durum ve Tanımlama), temel olarak kişinin mesleğini, durumunu veya nerede olduğunu ifade etmek için kullanılır. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with To Be (Am / Is / Are / Was / Were) in YDS questions?",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 5",
        "options": [
          "now",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "now",
        "explanationEn": "'now' is a hallmark signal indicator for To Be (Am / Is / Are / Was / Were).",
        "explanationTr": "'now' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, To Be (Am / Is / Are / Was / Were) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-7",
        "type": "yds-style-question",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching To Be (Am / Is / Are / Was / Were):",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 8",
        "options": [
          "[AM/IS/ARE/WAS/WERE] + the management + [COMPLEMENT]?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[AM/IS/ARE/WAS/WERE] + the management + [COMPLEMENT]?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-9",
        "type": "sentence-completion",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-10",
        "type": "translation-match",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] Which option accurately translates: ''To be' fiili bir özneyi durumuna, kimliğine veya niteliğine bağlar.'?",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 10",
        "options": [
          "The verb 'to be' connects a subject to a state, identity, or qualification.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "The verb 'to be' connects a subject to a state, identity, or qualification.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-11",
        "type": "multiple-choice",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of To Be (Am / Is / Are / Was / Were)?",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding To Be (Am / Is / Are / Was / Were).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding To Be (Am / Is / Are / Was / Were).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-13",
        "type": "fill-in-blank",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "be-act-14",
        "type": "sentence-transformation",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-15",
        "type": "timed-challenge",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-16",
        "type": "clause-identification",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-17",
        "type": "connector-selection",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-18",
        "type": "yds-cloze",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "be-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with To Be (Am / Is / Are / Was / Were), which order is syntactically standard?",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-20",
        "type": "yds-style-question",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-21",
        "type": "contextual-grammar",
        "prompt": "[To Be (Am / Is / Are / Was / Were)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "be-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for To Be (Am / Is / Are / Was / Were): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Olmak Fiili (Durum ve Tanımlama) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "pronouns",
    "title": "Pronouns (Subject, Object, Possessive, Reflexive)",
    "titleTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük)",
    "category": "FOUNDATION",
    "order": 2,
    "intro": {
      "overview": "Pronouns replace nouns to avoid repetition and maintain flow.",
      "overviewTr": "Zamirler isimlerin yerini alarak tekrarı önler ve akıcılık sağlar.",
      "whatIsIt": "Essential for concise, professional corporate emails and academic references.",
      "whatIsItTr": "Kurumsal yazışmalarda ve akademik referanslarda kısalık ve netlik sağlar.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SUBJECT PRONOUN] + [VERB] + [OBJECT PRONOUN]",
      "formulaNegative": "[SUBJECT] + [VERB] + not + [OBJECT]",
      "formulaQuestion": "[AUX] + [PRONOUN] + [VERB]?",
      "formulaShortAnswers": "Yes, it is. / No, they aren't.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "himself",
        "themselves",
        "each other",
        "one another"
      ],
      "explanationEn": "Reference indicators.",
      "explanationTr": "Gönderim ve atıf bildiren sözcükler."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Pronouns (Subject, Object, Possessive, Reflexive) organizes meaning in professional contexts.",
      "descriptionTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Pronouns (Subject, Object, Possessive, Reflexive) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Pronouns -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "pronouns-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "pronouns-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Pronouns (Subject, Object, Possessive, Reflexive) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Pronouns (Subject, Object, Possessive, Reflexive).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "pronouns-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Pronouns (Subject, Object, Possessive, Reflexive) in a business context?",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Pronouns (Subject, Object, Possessive, Reflexive).",
        "explanationTr": "A seçeneği Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Pronouns (Subject, Object, Possessive, Reflexive).",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-3",
        "type": "fill-in-blank",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Pronouns (Subject, Object, Possessive, Reflexive) in corporate and academic English?",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 4",
        "options": [
          "Pronouns replace nouns to avoid repetition and maintain flow.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Pronouns replace nouns to avoid repetition and maintain flow.",
        "explanationEn": "As defined, Pronouns (Subject, Object, Possessive, Reflexive) serves primarily to essential for concise, professional corporate emails and academic references.",
        "explanationTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük), temel olarak kurumsal yazışmalarda ve akademik referanslarda kısalık ve netlik sağlar. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Pronouns (Subject, Object, Possessive, Reflexive) in YDS questions?",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 5",
        "options": [
          "himself",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "himself",
        "explanationEn": "'himself' is a hallmark signal indicator for Pronouns (Subject, Object, Possessive, Reflexive).",
        "explanationTr": "'himself' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Pronouns (Subject, Object, Possessive, Reflexive) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-7",
        "type": "yds-style-question",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Pronouns (Subject, Object, Possessive, Reflexive):",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 8",
        "options": [
          "[AUX] + [PRONOUN] + [VERB]?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[AUX] + [PRONOUN] + [VERB]?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-9",
        "type": "sentence-completion",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-10",
        "type": "translation-match",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] Which option accurately translates: 'Zamirler isimlerin yerini alarak tekrarı önler ve akıcılık sağlar.'?",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 10",
        "options": [
          "Pronouns replace nouns to avoid repetition and maintain flow.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Pronouns replace nouns to avoid repetition and maintain flow.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-11",
        "type": "multiple-choice",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Pronouns (Subject, Object, Possessive, Reflexive)?",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Pronouns (Subject, Object, Possessive, Reflexive).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Pronouns (Subject, Object, Possessive, Reflexive).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-13",
        "type": "fill-in-blank",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-14",
        "type": "sentence-transformation",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-15",
        "type": "timed-challenge",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-16",
        "type": "clause-identification",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-17",
        "type": "connector-selection",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-18",
        "type": "yds-cloze",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Pronouns (Subject, Object, Possessive, Reflexive), which order is syntactically standard?",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-20",
        "type": "yds-style-question",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-21",
        "type": "contextual-grammar",
        "prompt": "[Pronouns (Subject, Object, Possessive, Reflexive)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "pronouns-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Pronouns (Subject, Object, Possessive, Reflexive): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Zamirler (Özne, Nesne, İyelik ve Dönüşlülük) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "articles",
    "title": "Articles (A, An, The, Zero Article)",
    "titleTr": "Belirteçler (A, An, The ve Tanımsızlık)",
    "category": "FOUNDATION",
    "order": 3,
    "intro": {
      "overview": "Articles specify whether a noun is indefinite/general or definite/specific.",
      "overviewTr": "Belirteçler ismin genel mi yoksa bilinen/belirli mi olduğunu gösterir.",
      "whatIsIt": "Accurate article usage distinguishes professional writing from beginner English.",
      "whatIsItTr": "Doğru article kullanımı profesyonel akademik yazımı acemi metinlerden ayırır.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[A/AN] + [SINGULAR COUNTABLE NOUN] | [THE] + [SPECIFIC NOUN]",
      "formulaNegative": "No article before abstract or uncountable general nouns.",
      "formulaQuestion": "Does it refer to a specific item?",
      "formulaShortAnswers": "The manager, an applicant, water, information.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "the same",
        "the only",
        "first",
        "unique"
      ],
      "explanationEn": "Definiteness markers.",
      "explanationTr": "Belirlilik ve tekillik işaretçileri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Articles (A, An, The, Zero Article) organizes meaning in professional contexts.",
      "descriptionTr": "Belirteçler (A, An, The ve Tanımsızlık) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Articles (A, An, The, Zero Article) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Articles -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "articles-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "articles-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Articles (A, An, The, Zero Article) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Articles (A, An, The, Zero Article).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Belirteçler (A, An, The ve Tanımsızlık) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "articles-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Articles (A, An, The, Zero Article) in a business context?",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Articles (A, An, The, Zero Article).",
        "explanationTr": "A seçeneği Belirteçler (A, An, The ve Tanımsızlık) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Articles (A, An, The, Zero Article).",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-3",
        "type": "fill-in-blank",
        "prompt": "[Articles (A, An, The, Zero Article)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Articles (A, An, The, Zero Article) in corporate and academic English?",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 4",
        "options": [
          "Articles specify whether a noun is indefinite/general or definite/specific.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Articles specify whether a noun is indefinite/general or definite/specific.",
        "explanationEn": "As defined, Articles (A, An, The, Zero Article) serves primarily to accurate article usage distinguishes professional writing from beginner english.",
        "explanationTr": "Belirteçler (A, An, The ve Tanımsızlık), temel olarak doğru article kullanımı profesyonel akademik yazımı acemi metinlerden ayırır. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Articles (A, An, The, Zero Article) in YDS questions?",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 5",
        "options": [
          "the same",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "the same",
        "explanationEn": "'the same' is a hallmark signal indicator for Articles (A, An, The, Zero Article).",
        "explanationTr": "'the same' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Articles (A, An, The, Zero Article) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-7",
        "type": "yds-style-question",
        "prompt": "[Articles (A, An, The, Zero Article)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Articles (A, An, The, Zero Article):",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 8",
        "options": [
          "Does it refer to a specific item?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Does it refer to a specific item?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-9",
        "type": "sentence-completion",
        "prompt": "[Articles (A, An, The, Zero Article)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-10",
        "type": "translation-match",
        "prompt": "[Articles (A, An, The, Zero Article)] Which option accurately translates: 'Belirteçler ismin genel mi yoksa bilinen/belirli mi olduğunu gösterir.'?",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 10",
        "options": [
          "Articles specify whether a noun is indefinite/general or definite/specific.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Articles specify whether a noun is indefinite/general or definite/specific.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-11",
        "type": "multiple-choice",
        "prompt": "[Articles (A, An, The, Zero Article)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Articles (A, An, The, Zero Article)?",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Articles (A, An, The, Zero Article).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Articles (A, An, The, Zero Article).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-13",
        "type": "fill-in-blank",
        "prompt": "[Articles (A, An, The, Zero Article)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-14",
        "type": "sentence-transformation",
        "prompt": "[Articles (A, An, The, Zero Article)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-15",
        "type": "timed-challenge",
        "prompt": "[Articles (A, An, The, Zero Article)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-16",
        "type": "clause-identification",
        "prompt": "[Articles (A, An, The, Zero Article)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-17",
        "type": "connector-selection",
        "prompt": "[Articles (A, An, The, Zero Article)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-18",
        "type": "yds-cloze",
        "prompt": "[Articles (A, An, The, Zero Article)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Articles (A, An, The, Zero Article), which order is syntactically standard?",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-20",
        "type": "yds-style-question",
        "prompt": "[Articles (A, An, The, Zero Article)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-21",
        "type": "contextual-grammar",
        "prompt": "[Articles (A, An, The, Zero Article)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "articles-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Articles (A, An, The, Zero Article): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Belirteçler (A, An, The ve Tanımsızlık) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "present-simple",
    "title": "Present Simple Tense",
    "titleTr": "Geniş Zaman (Rutinler ve Genel Gerçekler)",
    "category": "FOUNDATION",
    "order": 4,
    "intro": {
      "overview": "Used for habitual actions, facts, company policies, and workplace routines.",
      "overviewTr": "Alışkanlıklar, bilimsel gerçekler ve şirket prosedürleri için kullanılır.",
      "whatIsIt": "Standard tense for describing job responsibilities and general principles.",
      "whatIsItTr": "İş tanımları ve genel kuralları açıklamak için standart zamandır.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SUBJECT] + [VERB(-s)] + [OBJECT]",
      "formulaNegative": "[SUBJECT] + [DO/DOES NOT] + [VERB-base]",
      "formulaQuestion": "[DO/DOES] + [SUBJECT] + [VERB-base]?",
      "formulaShortAnswers": "Yes, she does. / No, they don't.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "always",
        "usually",
        "often",
        "rarely",
        "every day",
        "generally"
      ],
      "explanationEn": "Frequency adverbs.",
      "explanationTr": "Sıklık zarfları geniş zamanın en temel sinyalidir."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "timeline",
      "descriptionEn": "Visual conceptual roadmap delineating how Present Simple Tense organizes meaning in professional contexts.",
      "descriptionTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Present Simple Tense to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Present -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "present-simple-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "present-simple-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Present Simple Tense by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Present Simple Tense.",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Geniş Zaman (Rutinler ve Genel Gerçekler) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "present-simple-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Present Simple Tense in a business context?",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Present Simple Tense.",
        "explanationTr": "A seçeneği Geniş Zaman (Rutinler ve Genel Gerçekler) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Present Simple Tense.",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-3",
        "type": "fill-in-blank",
        "prompt": "[Present Simple Tense] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Present Simple Tense in corporate and academic English?",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 4",
        "options": [
          "Used for habitual actions, facts, company policies, and workplace routines.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Used for habitual actions, facts, company policies, and workplace routines.",
        "explanationEn": "As defined, Present Simple Tense serves primarily to standard tense for describing job responsibilities and general principles.",
        "explanationTr": "Geniş Zaman (Rutinler ve Genel Gerçekler), temel olarak i̇ş tanımları ve genel kuralları açıklamak için standart zamandır. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Present Simple Tense in YDS questions?",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 5",
        "options": [
          "always",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "always",
        "explanationEn": "'always' is a hallmark signal indicator for Present Simple Tense.",
        "explanationTr": "'always' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Present Simple Tense follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-7",
        "type": "yds-style-question",
        "prompt": "[Present Simple Tense] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Present Simple Tense:",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 8",
        "options": [
          "[DO/DOES] + the management + approve?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[DO/DOES] + the management + approve?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-9",
        "type": "sentence-completion",
        "prompt": "[Present Simple Tense] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-10",
        "type": "translation-match",
        "prompt": "[Present Simple Tense] Which option accurately translates: 'Alışkanlıklar, bilimsel gerçekler ve şirket prosedürleri için kullanılır.'?",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 10",
        "options": [
          "Used for habitual actions, facts, company policies, and workplace routines.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Used for habitual actions, facts, company policies, and workplace routines.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-11",
        "type": "multiple-choice",
        "prompt": "[Present Simple Tense] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Present Simple Tense?",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Present Simple Tense.",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Present Simple Tense.",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-13",
        "type": "fill-in-blank",
        "prompt": "[Present Simple Tense] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-14",
        "type": "sentence-transformation",
        "prompt": "[Present Simple Tense] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-15",
        "type": "timed-challenge",
        "prompt": "[Present Simple Tense] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-16",
        "type": "clause-identification",
        "prompt": "[Present Simple Tense] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-17",
        "type": "connector-selection",
        "prompt": "[Present Simple Tense] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-18",
        "type": "yds-cloze",
        "prompt": "[Present Simple Tense] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Present Simple Tense, which order is syntactically standard?",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-20",
        "type": "yds-style-question",
        "prompt": "[Present Simple Tense] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-21",
        "type": "contextual-grammar",
        "prompt": "[Present Simple Tense] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "present-simple-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Present Simple Tense: What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Geniş Zaman (Rutinler ve Genel Gerçekler) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "present-continuous",
    "title": "Present Continuous Tense",
    "titleTr": "Şimdiki Zaman (Süren Eylemler ve Trendler)",
    "category": "FOUNDATION",
    "order": 5,
    "intro": {
      "overview": "Describes ongoing activities, current projects, and evolving business trends.",
      "overviewTr": "Şu an devam eden eylemleri, güncel projeleri ve gelişen iş trendlerini anlatır.",
      "whatIsIt": "Ideal for progress updates and describing temporary situations.",
      "whatIsItTr": "İlerleme raporları ve geçici kurumsal durumlar için idealdir.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SUBJECT] + [AM/IS/ARE] + [VERB-ing]",
      "formulaNegative": "[SUBJECT] + [AM/IS/ARE NOT] + [VERB-ing]",
      "formulaQuestion": "[AM/IS/ARE] + [SUBJECT] + [VERB-ing]?",
      "formulaShortAnswers": "Yes, we are. / No, she isn't.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "now",
        "currently",
        "at the moment",
        "these days",
        "gradually"
      ],
      "explanationEn": "Temporary indicators.",
      "explanationTr": "Geçicilik ve anlık süreç işaretçileri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Present Continuous Tense organizes meaning in professional contexts.",
      "descriptionTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Present Continuous Tense to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Present -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "present-continuous-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "present-continuous-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Present Continuous Tense by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Present Continuous Tense.",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Şimdiki Zaman (Süren Eylemler ve Trendler) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "present-continuous-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Present Continuous Tense in a business context?",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Present Continuous Tense.",
        "explanationTr": "A seçeneği Şimdiki Zaman (Süren Eylemler ve Trendler) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Present Continuous Tense.",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-3",
        "type": "fill-in-blank",
        "prompt": "[Present Continuous Tense] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Present Continuous Tense in corporate and academic English?",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 4",
        "options": [
          "Describes ongoing activities, current projects, and evolving business trends.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Describes ongoing activities, current projects, and evolving business trends.",
        "explanationEn": "As defined, Present Continuous Tense serves primarily to ideal for progress updates and describing temporary situations.",
        "explanationTr": "Şimdiki Zaman (Süren Eylemler ve Trendler), temel olarak i̇lerleme raporları ve geçici kurumsal durumlar için idealdir. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Present Continuous Tense in YDS questions?",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 5",
        "options": [
          "now",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "now",
        "explanationEn": "'now' is a hallmark signal indicator for Present Continuous Tense.",
        "explanationTr": "'now' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Present Continuous Tense follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-7",
        "type": "yds-style-question",
        "prompt": "[Present Continuous Tense] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Present Continuous Tense:",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 8",
        "options": [
          "[AM/IS/ARE] + the management + [VERB-ing]?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[AM/IS/ARE] + the management + [VERB-ing]?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-9",
        "type": "sentence-completion",
        "prompt": "[Present Continuous Tense] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-10",
        "type": "translation-match",
        "prompt": "[Present Continuous Tense] Which option accurately translates: 'Şu an devam eden eylemleri, güncel projeleri ve gelişen iş trendlerini anlatır.'?",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 10",
        "options": [
          "Describes ongoing activities, current projects, and evolving business trends.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Describes ongoing activities, current projects, and evolving business trends.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-11",
        "type": "multiple-choice",
        "prompt": "[Present Continuous Tense] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Present Continuous Tense?",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Present Continuous Tense.",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Present Continuous Tense.",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-13",
        "type": "fill-in-blank",
        "prompt": "[Present Continuous Tense] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-14",
        "type": "sentence-transformation",
        "prompt": "[Present Continuous Tense] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-15",
        "type": "timed-challenge",
        "prompt": "[Present Continuous Tense] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-16",
        "type": "clause-identification",
        "prompt": "[Present Continuous Tense] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-17",
        "type": "connector-selection",
        "prompt": "[Present Continuous Tense] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-18",
        "type": "yds-cloze",
        "prompt": "[Present Continuous Tense] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Present Continuous Tense, which order is syntactically standard?",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-20",
        "type": "yds-style-question",
        "prompt": "[Present Continuous Tense] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-21",
        "type": "contextual-grammar",
        "prompt": "[Present Continuous Tense] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "present-continuous-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Present Continuous Tense: What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Şimdiki Zaman (Süren Eylemler ve Trendler) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "past-simple",
    "title": "Past Simple Tense",
    "titleTr": "Geçmiş Zaman (Tamamlanmış Eylemler)",
    "category": "FOUNDATION",
    "order": 6,
    "intro": {
      "overview": "Refers to events that occurred and finished at a definite time in the past.",
      "overviewTr": "Geçmişte belirli bir zamanda tamamlanmış eylemleri ifade eder.",
      "whatIsIt": "Crucial for writing resumes, annual reports, and case history narratives.",
      "whatIsItTr": "Özgeçmiş, yıllık raporlar ve vaka geçmişi yazımında vazgeçilmezdir.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SUBJECT] + [VERB-ed / V2] + [OBJECT]",
      "formulaNegative": "[SUBJECT] + [DID NOT] + [VERB-base]",
      "formulaQuestion": "[DID] + [SUBJECT] + [VERB-base]?",
      "formulaShortAnswers": "Yes, they did. / No, I didn't.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "yesterday",
        "last year",
        "in 2021",
        "ago",
        "previously"
      ],
      "explanationEn": "Definite past time markers.",
      "explanationTr": "Geçmişte belirli bir zamanı net belirten zarflar."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "timeline",
      "descriptionEn": "Visual conceptual roadmap delineating how Past Simple Tense organizes meaning in professional contexts.",
      "descriptionTr": "Geçmiş Zaman (Tamamlanmış Eylemler) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Past Simple Tense to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Past -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "past-simple-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "past-simple-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Past Simple Tense by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Past Simple Tense.",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Geçmiş Zaman (Tamamlanmış Eylemler) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "past-simple-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Past Simple Tense in a business context?",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Past Simple Tense.",
        "explanationTr": "A seçeneği Geçmiş Zaman (Tamamlanmış Eylemler) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Past Simple Tense.",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-3",
        "type": "fill-in-blank",
        "prompt": "[Past Simple Tense] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Past Simple Tense in corporate and academic English?",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 4",
        "options": [
          "Refers to events that occurred and finished at a definite time in the past.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Refers to events that occurred and finished at a definite time in the past.",
        "explanationEn": "As defined, Past Simple Tense serves primarily to crucial for writing resumes, annual reports, and case history narratives.",
        "explanationTr": "Geçmiş Zaman (Tamamlanmış Eylemler), temel olarak özgeçmiş, yıllık raporlar ve vaka geçmişi yazımında vazgeçilmezdir. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Past Simple Tense in YDS questions?",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 5",
        "options": [
          "yesterday",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "yesterday",
        "explanationEn": "'yesterday' is a hallmark signal indicator for Past Simple Tense.",
        "explanationTr": "'yesterday' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Past Simple Tense follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-7",
        "type": "yds-style-question",
        "prompt": "[Past Simple Tense] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Past Simple Tense:",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 8",
        "options": [
          "[DID] + the management + approve?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[DID] + the management + approve?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-9",
        "type": "sentence-completion",
        "prompt": "[Past Simple Tense] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-10",
        "type": "translation-match",
        "prompt": "[Past Simple Tense] Which option accurately translates: 'Geçmişte belirli bir zamanda tamamlanmış eylemleri ifade eder.'?",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 10",
        "options": [
          "Refers to events that occurred and finished at a definite time in the past.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Refers to events that occurred and finished at a definite time in the past.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-11",
        "type": "multiple-choice",
        "prompt": "[Past Simple Tense] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Past Simple Tense?",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Past Simple Tense.",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Past Simple Tense.",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-13",
        "type": "fill-in-blank",
        "prompt": "[Past Simple Tense] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-14",
        "type": "sentence-transformation",
        "prompt": "[Past Simple Tense] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-15",
        "type": "timed-challenge",
        "prompt": "[Past Simple Tense] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-16",
        "type": "clause-identification",
        "prompt": "[Past Simple Tense] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-17",
        "type": "connector-selection",
        "prompt": "[Past Simple Tense] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-18",
        "type": "yds-cloze",
        "prompt": "[Past Simple Tense] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Past Simple Tense, which order is syntactically standard?",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-20",
        "type": "yds-style-question",
        "prompt": "[Past Simple Tense] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-21",
        "type": "contextual-grammar",
        "prompt": "[Past Simple Tense] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "past-simple-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Past Simple Tense: What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Geçmiş Zaman (Tamamlanmış Eylemler) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "future-forms",
    "title": "Future Forms (Will, Be Going To, Present Continuous)",
    "titleTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler)",
    "category": "FOUNDATION",
    "order": 7,
    "intro": {
      "overview": "Expresses predictions, spontaneous decisions, fixed schedules, and premeditated plans.",
      "overviewTr": "Tahminleri, anlık kararları, kesin takvimleri ve önceden planlanmış hedefleri bildirir.",
      "whatIsIt": "Essential for goal setting, strategic roadmaps, and scheduling meetings.",
      "whatIsItTr": "Hedef belirleme, stratejik yol haritaları ve toplantı takvimleri için esastır.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SUBJECT] + [WILL / BE GOING TO] + [VERB-base]",
      "formulaNegative": "[SUBJECT] + [WILL NOT / BE NOT GOING TO] + [VERB-base]",
      "formulaQuestion": "[WILL / IS-ARE] + [SUBJECT] + [VERB-base / GOING TO VERB]?",
      "formulaShortAnswers": "Yes, I will. / No, they aren't.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "tomorrow",
        "next week",
        "in the future",
        "by next year",
        "soon"
      ],
      "explanationEn": "Prospective time markers.",
      "explanationTr": "Geleceğe yönelik planlama zarfları."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "timeline",
      "descriptionEn": "Visual conceptual roadmap delineating how Future Forms (Will, Be Going To, Present Continuous) organizes meaning in professional contexts.",
      "descriptionTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Future Forms (Will, Be Going To, Present Continuous) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Future -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "future-forms-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "future-forms-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Future Forms (Will, Be Going To, Present Continuous) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Future Forms (Will, Be Going To, Present Continuous).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Gelecek Zaman Kalıpları (Planlar ve Tahminler) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "future-forms-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Future Forms (Will, Be Going To, Present Continuous) in a business context?",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Future Forms (Will, Be Going To, Present Continuous).",
        "explanationTr": "A seçeneği Gelecek Zaman Kalıpları (Planlar ve Tahminler) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Future Forms (Will, Be Going To, Present Continuous).",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-3",
        "type": "fill-in-blank",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Future Forms (Will, Be Going To, Present Continuous) in corporate and academic English?",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 4",
        "options": [
          "Expresses predictions, spontaneous decisions, fixed schedules, and premeditated plans.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Expresses predictions, spontaneous decisions, fixed schedules, and premeditated plans.",
        "explanationEn": "As defined, Future Forms (Will, Be Going To, Present Continuous) serves primarily to essential for goal setting, strategic roadmaps, and scheduling meetings.",
        "explanationTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler), temel olarak hedef belirleme, stratejik yol haritaları ve toplantı takvimleri için esastır. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Future Forms (Will, Be Going To, Present Continuous) in YDS questions?",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 5",
        "options": [
          "tomorrow",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "tomorrow",
        "explanationEn": "'tomorrow' is a hallmark signal indicator for Future Forms (Will, Be Going To, Present Continuous).",
        "explanationTr": "'tomorrow' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Future Forms (Will, Be Going To, Present Continuous) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-7",
        "type": "yds-style-question",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Future Forms (Will, Be Going To, Present Continuous):",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 8",
        "options": [
          "[WILL / IS-ARE] + the management + [VERB-base / GOING TO VERB]?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[WILL / IS-ARE] + the management + [VERB-base / GOING TO VERB]?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-9",
        "type": "sentence-completion",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-10",
        "type": "translation-match",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] Which option accurately translates: 'Tahminleri, anlık kararları, kesin takvimleri ve önceden planlanmış hedefleri bildirir.'?",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 10",
        "options": [
          "Expresses predictions, spontaneous decisions, fixed schedules, and premeditated plans.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Expresses predictions, spontaneous decisions, fixed schedules, and premeditated plans.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-11",
        "type": "multiple-choice",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Future Forms (Will, Be Going To, Present Continuous)?",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Future Forms (Will, Be Going To, Present Continuous).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Future Forms (Will, Be Going To, Present Continuous).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-13",
        "type": "fill-in-blank",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-14",
        "type": "sentence-transformation",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-15",
        "type": "timed-challenge",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-16",
        "type": "clause-identification",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-17",
        "type": "connector-selection",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-18",
        "type": "yds-cloze",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Future Forms (Will, Be Going To, Present Continuous), which order is syntactically standard?",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-20",
        "type": "yds-style-question",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-21",
        "type": "contextual-grammar",
        "prompt": "[Future Forms (Will, Be Going To, Present Continuous)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "future-forms-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Future Forms (Will, Be Going To, Present Continuous): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Gelecek Zaman Kalıpları (Planlar ve Tahminler) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "present-perfect",
    "title": "Present Perfect Tense",
    "titleTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3)",
    "category": "CORE",
    "order": 8,
    "intro": {
      "overview": "Connects past actions directly to the present moment, focusing on experience or results.",
      "overviewTr": "Geçmişteki eylemi şimdiki ana bağlar; deneyim veya sonuca odaklanır.",
      "whatIsIt": "Heavily tested in YDS with key time connectors (since, for, yet, already).",
      "whatIsItTr": "YDS'de 'since, for, already' gibi bağlaçlarla en sık sorulan tensedir.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SUBJECT] + [HAVE/HAS] + [PAST PARTICIPLE / V3]",
      "formulaNegative": "[SUBJECT] + [HAVE/HAS NOT] + [PAST PARTICIPLE / V3]",
      "formulaQuestion": "[HAVE/HAS] + [SUBJECT] + [PAST PARTICIPLE / V3]?",
      "formulaShortAnswers": "Yes, they have. / No, she hasn't.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "already",
        "yet",
        "just",
        "ever",
        "never",
        "since",
        "for",
        "lately"
      ],
      "explanationEn": "Relevance markers.",
      "explanationTr": "Şimdiki zamanla bağ kuran kritik sinyal kelimeler."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "timeline",
      "descriptionEn": "Visual conceptual roadmap delineating how Present Perfect Tense organizes meaning in professional contexts.",
      "descriptionTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Present Perfect Tense to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Present -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "present-perfect-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "present-perfect-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Present Perfect Tense by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Present Perfect Tense.",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "present-perfect-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Present Perfect Tense in a business context?",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Present Perfect Tense.",
        "explanationTr": "A seçeneği Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Present Perfect Tense.",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-3",
        "type": "fill-in-blank",
        "prompt": "[Present Perfect Tense] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Present Perfect Tense in corporate and academic English?",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 4",
        "options": [
          "Connects past actions directly to the present moment, focusing on experience or results.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Connects past actions directly to the present moment, focusing on experience or results.",
        "explanationEn": "As defined, Present Perfect Tense serves primarily to heavily tested in yds with key time connectors (since, for, yet, already).",
        "explanationTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3), temel olarak yds'de 'since, for, already' gibi bağlaçlarla en sık sorulan tensedir. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Present Perfect Tense in YDS questions?",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 5",
        "options": [
          "already",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "already",
        "explanationEn": "'already' is a hallmark signal indicator for Present Perfect Tense.",
        "explanationTr": "'already' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Present Perfect Tense follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-7",
        "type": "yds-style-question",
        "prompt": "[Present Perfect Tense] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Present Perfect Tense:",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 8",
        "options": [
          "[HAVE/HAS] + the management + [PAST PARTICIPLE / V3]?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[HAVE/HAS] + the management + [PAST PARTICIPLE / V3]?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-9",
        "type": "sentence-completion",
        "prompt": "[Present Perfect Tense] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-10",
        "type": "translation-match",
        "prompt": "[Present Perfect Tense] Which option accurately translates: 'Geçmişteki eylemi şimdiki ana bağlar; deneyim veya sonuca odaklanır.'?",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 10",
        "options": [
          "Connects past actions directly to the present moment, focusing on experience or results.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Connects past actions directly to the present moment, focusing on experience or results.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-11",
        "type": "multiple-choice",
        "prompt": "[Present Perfect Tense] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Present Perfect Tense?",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Present Perfect Tense.",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Present Perfect Tense.",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-13",
        "type": "fill-in-blank",
        "prompt": "[Present Perfect Tense] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-14",
        "type": "sentence-transformation",
        "prompt": "[Present Perfect Tense] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-15",
        "type": "timed-challenge",
        "prompt": "[Present Perfect Tense] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-16",
        "type": "clause-identification",
        "prompt": "[Present Perfect Tense] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-17",
        "type": "connector-selection",
        "prompt": "[Present Perfect Tense] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-18",
        "type": "yds-cloze",
        "prompt": "[Present Perfect Tense] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Present Perfect Tense, which order is syntactically standard?",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-20",
        "type": "yds-style-question",
        "prompt": "[Present Perfect Tense] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-21",
        "type": "contextual-grammar",
        "prompt": "[Present Perfect Tense] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "present-perfect-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Present Perfect Tense: What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Yakın Geçmiş / Etkisi Süren Zaman (Have/Has + V3) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "past-perfect",
    "title": "Past Perfect Tense",
    "titleTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3)",
    "category": "CORE",
    "order": 9,
    "intro": {
      "overview": "Indicates an action completed before another past event.",
      "overviewTr": "Geçmişteki başka bir olaydan önce gerçekleşmiş eylemi bildirir.",
      "whatIsIt": "Crucial for establishing chronological sequence in academic texts.",
      "whatIsItTr": "Akademik metinlerde kronolojik öncelik-sonralık ilişkisini kurar.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SUBJECT] + [HAD] + [PAST PARTICIPLE / V3]",
      "formulaNegative": "[SUBJECT] + [HAD NOT] + [PAST PARTICIPLE / V3]",
      "formulaQuestion": "[HAD] + [SUBJECT] + [PAST PARTICIPLE / V3]?",
      "formulaShortAnswers": "Yes, we had. / No, he hadn't.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "by the time",
        "before",
        "after",
        "already",
        "hardly... when"
      ],
      "explanationEn": "Chronology markers.",
      "explanationTr": "Zaman önceliği bildiren bağlaçlar."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "timeline",
      "descriptionEn": "Visual conceptual roadmap delineating how Past Perfect Tense organizes meaning in professional contexts.",
      "descriptionTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Past Perfect Tense to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Past -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "past-perfect-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "past-perfect-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Past Perfect Tense by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Past Perfect Tense.",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Öncelik Bildiren Geçmiş Zaman (Had + V3) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "past-perfect-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Past Perfect Tense in a business context?",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Past Perfect Tense.",
        "explanationTr": "A seçeneği Öncelik Bildiren Geçmiş Zaman (Had + V3) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Past Perfect Tense.",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-3",
        "type": "fill-in-blank",
        "prompt": "[Past Perfect Tense] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Past Perfect Tense in corporate and academic English?",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 4",
        "options": [
          "Indicates an action completed before another past event.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Indicates an action completed before another past event.",
        "explanationEn": "As defined, Past Perfect Tense serves primarily to crucial for establishing chronological sequence in academic texts.",
        "explanationTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3), temel olarak akademik metinlerde kronolojik öncelik-sonralık ilişkisini kurar. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Past Perfect Tense in YDS questions?",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 5",
        "options": [
          "by the time",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "by the time",
        "explanationEn": "'by the time' is a hallmark signal indicator for Past Perfect Tense.",
        "explanationTr": "'by the time' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Past Perfect Tense follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-7",
        "type": "yds-style-question",
        "prompt": "[Past Perfect Tense] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Past Perfect Tense:",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 8",
        "options": [
          "[HAD] + the management + [PAST PARTICIPLE / V3]?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[HAD] + the management + [PAST PARTICIPLE / V3]?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-9",
        "type": "sentence-completion",
        "prompt": "[Past Perfect Tense] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-10",
        "type": "translation-match",
        "prompt": "[Past Perfect Tense] Which option accurately translates: 'Geçmişteki başka bir olaydan önce gerçekleşmiş eylemi bildirir.'?",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 10",
        "options": [
          "Indicates an action completed before another past event.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Indicates an action completed before another past event.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-11",
        "type": "multiple-choice",
        "prompt": "[Past Perfect Tense] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Past Perfect Tense?",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Past Perfect Tense.",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Past Perfect Tense.",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-13",
        "type": "fill-in-blank",
        "prompt": "[Past Perfect Tense] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-14",
        "type": "sentence-transformation",
        "prompt": "[Past Perfect Tense] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-15",
        "type": "timed-challenge",
        "prompt": "[Past Perfect Tense] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-16",
        "type": "clause-identification",
        "prompt": "[Past Perfect Tense] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-17",
        "type": "connector-selection",
        "prompt": "[Past Perfect Tense] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-18",
        "type": "yds-cloze",
        "prompt": "[Past Perfect Tense] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Past Perfect Tense, which order is syntactically standard?",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-20",
        "type": "yds-style-question",
        "prompt": "[Past Perfect Tense] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-21",
        "type": "contextual-grammar",
        "prompt": "[Past Perfect Tense] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "past-perfect-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Past Perfect Tense: What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Öncelik Bildiren Geçmiş Zaman (Had + V3) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "modal-verbs",
    "title": "Modal Verbs (Necessity, Deduction, Ability, Permission)",
    "titleTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek)",
    "category": "CORE",
    "order": 10,
    "intro": {
      "overview": "Expresses attitude towards an action: obligation, probability, or permission.",
      "overviewTr": "Bir eyleme yönelik tutumu ifade eder: zorunluluk, ihtimal, tavsiye veya izin.",
      "whatIsIt": "Core to HR policy documentation, legal contracts, and YDS deduction questions.",
      "whatIsItTr": "İK yönetmeliklerinde, sözleşmelerde ve YDS çıkarım sorularında merkezdedir.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SUBJECT] + [MODAL] + [VERB-base]",
      "formulaNegative": "[SUBJECT] + [MODAL NOT] + [VERB-base]",
      "formulaQuestion": "[MODAL] + [SUBJECT] + [VERB-base]?",
      "formulaShortAnswers": "Yes, you must. / No, you shouldn't.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "must",
        "have to",
        "should",
        "ought to",
        "might",
        "could",
        "needn't"
      ],
      "explanationEn": "Modality indicators.",
      "explanationTr": "Tutum ve gereklilik belirten kip belirteçleri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Modal Verbs (Necessity, Deduction, Ability, Permission) organizes meaning in professional contexts.",
      "descriptionTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Modal Verbs (Necessity, Deduction, Ability, Permission) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Modal -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "modal-verbs-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "modal-verbs-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Modal Verbs (Necessity, Deduction, Ability, Permission) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Modal Verbs (Necessity, Deduction, Ability, Permission).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "modal-verbs-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Modal Verbs (Necessity, Deduction, Ability, Permission) in a business context?",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Modal Verbs (Necessity, Deduction, Ability, Permission).",
        "explanationTr": "A seçeneği Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Modal Verbs (Necessity, Deduction, Ability, Permission).",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-3",
        "type": "fill-in-blank",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Modal Verbs (Necessity, Deduction, Ability, Permission) in corporate and academic English?",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 4",
        "options": [
          "Expresses attitude towards an action: obligation, probability, or permission.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Expresses attitude towards an action: obligation, probability, or permission.",
        "explanationEn": "As defined, Modal Verbs (Necessity, Deduction, Ability, Permission) serves primarily to core to hr policy documentation, legal contracts, and yds deduction questions.",
        "explanationTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek), temel olarak i̇k yönetmeliklerinde, sözleşmelerde ve yds çıkarım sorularında merkezdedir. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Modal Verbs (Necessity, Deduction, Ability, Permission) in YDS questions?",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 5",
        "options": [
          "must",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "must",
        "explanationEn": "'must' is a hallmark signal indicator for Modal Verbs (Necessity, Deduction, Ability, Permission).",
        "explanationTr": "'must' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Modal Verbs (Necessity, Deduction, Ability, Permission) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-7",
        "type": "yds-style-question",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Modal Verbs (Necessity, Deduction, Ability, Permission):",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 8",
        "options": [
          "[MODAL] + the management + approve?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[MODAL] + the management + approve?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-9",
        "type": "sentence-completion",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-10",
        "type": "translation-match",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] Which option accurately translates: 'Bir eyleme yönelik tutumu ifade eder: zorunluluk, ihtimal, tavsiye veya izin.'?",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 10",
        "options": [
          "Expresses attitude towards an action: obligation, probability, or permission.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Expresses attitude towards an action: obligation, probability, or permission.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-11",
        "type": "multiple-choice",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Modal Verbs (Necessity, Deduction, Ability, Permission)?",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Modal Verbs (Necessity, Deduction, Ability, Permission).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Modal Verbs (Necessity, Deduction, Ability, Permission).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-13",
        "type": "fill-in-blank",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-14",
        "type": "sentence-transformation",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-15",
        "type": "timed-challenge",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-16",
        "type": "clause-identification",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-17",
        "type": "connector-selection",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-18",
        "type": "yds-cloze",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Modal Verbs (Necessity, Deduction, Ability, Permission), which order is syntactically standard?",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-20",
        "type": "yds-style-question",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-21",
        "type": "contextual-grammar",
        "prompt": "[Modal Verbs (Necessity, Deduction, Ability, Permission)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "modal-verbs-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Modal Verbs (Necessity, Deduction, Ability, Permission): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Kipler (Zorunluluk, Çıkarım, İhtimal ve Yetenek) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "comparatives",
    "title": "Comparatives (Comparing Two Entities)",
    "titleTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama)",
    "category": "CORE",
    "order": 11,
    "intro": {
      "overview": "Evaluates differences between two entities using -er, more, or as...as.",
      "overviewTr": "İki varlık veya durum arasındaki farkı kıyaslamak için kullanılır.",
      "whatIsIt": "Vital for benchmark reports, market analysis, and performance reviews.",
      "whatIsItTr": "Piyasa analizleri ve performans değerlendirmeleri için hayati önemdedir.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[ENTITY A] + [IS] + [MORE / -ER THAN] + [ENTITY B]",
      "formulaNegative": "[ENTITY A] + [IS NOT AS ... AS] + [ENTITY B]",
      "formulaQuestion": "[IS] + [ENTITY A] + [MORE ... THAN] + [ENTITY B]?",
      "formulaShortAnswers": "Yes, it is. / No, it isn't.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "than",
        "as... as",
        "much more",
        "substantially greater",
        "far less"
      ],
      "explanationEn": "Degree modifiers.",
      "explanationTr": "Karşılaştırma derecesini güçlendiren zarflar."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Comparatives (Comparing Two Entities) organizes meaning in professional contexts.",
      "descriptionTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Comparatives (Comparing Two Entities) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Comparatives -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "comparatives-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "comparatives-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Comparatives (Comparing Two Entities) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Comparatives (Comparing Two Entities).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "comparatives-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Comparatives (Comparing Two Entities) in a business context?",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Comparatives (Comparing Two Entities).",
        "explanationTr": "A seçeneği Karşılaştırma Yapıları (İki Unsuru Kıyaslama) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Comparatives (Comparing Two Entities).",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-3",
        "type": "fill-in-blank",
        "prompt": "[Comparatives (Comparing Two Entities)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Comparatives (Comparing Two Entities) in corporate and academic English?",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 4",
        "options": [
          "Evaluates differences between two entities using -er, more, or as...as.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Evaluates differences between two entities using -er, more, or as...as.",
        "explanationEn": "As defined, Comparatives (Comparing Two Entities) serves primarily to vital for benchmark reports, market analysis, and performance reviews.",
        "explanationTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama), temel olarak piyasa analizleri ve performans değerlendirmeleri için hayati önemdedir. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Comparatives (Comparing Two Entities) in YDS questions?",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 5",
        "options": [
          "than",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "than",
        "explanationEn": "'than' is a hallmark signal indicator for Comparatives (Comparing Two Entities).",
        "explanationTr": "'than' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Comparatives (Comparing Two Entities) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-7",
        "type": "yds-style-question",
        "prompt": "[Comparatives (Comparing Two Entities)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Comparatives (Comparing Two Entities):",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 8",
        "options": [
          "[IS] + [ENTITY A] + [MORE ... THAN] + [ENTITY B]?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[IS] + [ENTITY A] + [MORE ... THAN] + [ENTITY B]?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-9",
        "type": "sentence-completion",
        "prompt": "[Comparatives (Comparing Two Entities)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-10",
        "type": "translation-match",
        "prompt": "[Comparatives (Comparing Two Entities)] Which option accurately translates: 'İki varlık veya durum arasındaki farkı kıyaslamak için kullanılır.'?",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 10",
        "options": [
          "Evaluates differences between two entities using -er, more, or as...as.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Evaluates differences between two entities using -er, more, or as...as.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-11",
        "type": "multiple-choice",
        "prompt": "[Comparatives (Comparing Two Entities)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Comparatives (Comparing Two Entities)?",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Comparatives (Comparing Two Entities).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Comparatives (Comparing Two Entities).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-13",
        "type": "fill-in-blank",
        "prompt": "[Comparatives (Comparing Two Entities)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-14",
        "type": "sentence-transformation",
        "prompt": "[Comparatives (Comparing Two Entities)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-15",
        "type": "timed-challenge",
        "prompt": "[Comparatives (Comparing Two Entities)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-16",
        "type": "clause-identification",
        "prompt": "[Comparatives (Comparing Two Entities)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-17",
        "type": "connector-selection",
        "prompt": "[Comparatives (Comparing Two Entities)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-18",
        "type": "yds-cloze",
        "prompt": "[Comparatives (Comparing Two Entities)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Comparatives (Comparing Two Entities), which order is syntactically standard?",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-20",
        "type": "yds-style-question",
        "prompt": "[Comparatives (Comparing Two Entities)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-21",
        "type": "contextual-grammar",
        "prompt": "[Comparatives (Comparing Two Entities)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "comparatives-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Comparatives (Comparing Two Entities): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Karşılaştırma Yapıları (İki Unsuru Kıyaslama) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "superlatives",
    "title": "Superlatives (Top Rank in a Group)",
    "titleTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra)",
    "category": "CORE",
    "order": 12,
    "intro": {
      "overview": "Identifies an entity that possesses the highest degree of a quality within a group.",
      "overviewTr": "Bir grup içinde bir niteliğe en üst düzeyde sahip olan varlığı belirtir.",
      "whatIsIt": "Used for executive summaries, award citations, and peak statistical findings.",
      "whatIsItTr": "Yönetici özetlerinde ve zirve istatistiksel bulgularda sıkça kullanılır.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SUBJECT] + [IS THE MOST / -EST] + [IN/OF GROUP]",
      "formulaNegative": "[SUBJECT] + [IS NOT THE MOST ...]",
      "formulaQuestion": "[IS] + [SUBJECT] + [THE MOST ...]?",
      "formulaShortAnswers": "Yes, it is by far the highest.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "the most",
        "the -est",
        "one of the best",
        "by far the most"
      ],
      "explanationEn": "Supremacy markers.",
      "explanationTr": "Üstünlük ve birincilik bildiren ifadeler."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Superlatives (Top Rank in a Group) organizes meaning in professional contexts.",
      "descriptionTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Superlatives (Top Rank in a Group) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Superlatives -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "superlatives-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "superlatives-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Superlatives (Top Rank in a Group) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Superlatives (Top Rank in a Group).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Üstünlük Derecesi (Gruptaki En Üst Sıra) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "superlatives-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Superlatives (Top Rank in a Group) in a business context?",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Superlatives (Top Rank in a Group).",
        "explanationTr": "A seçeneği Üstünlük Derecesi (Gruptaki En Üst Sıra) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Superlatives (Top Rank in a Group).",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-3",
        "type": "fill-in-blank",
        "prompt": "[Superlatives (Top Rank in a Group)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Superlatives (Top Rank in a Group) in corporate and academic English?",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 4",
        "options": [
          "Identifies an entity that possesses the highest degree of a quality within a group.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Identifies an entity that possesses the highest degree of a quality within a group.",
        "explanationEn": "As defined, Superlatives (Top Rank in a Group) serves primarily to used for executive summaries, award citations, and peak statistical findings.",
        "explanationTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra), temel olarak yönetici özetlerinde ve zirve istatistiksel bulgularda sıkça kullanılır. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Superlatives (Top Rank in a Group) in YDS questions?",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 5",
        "options": [
          "the most",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "the most",
        "explanationEn": "'the most' is a hallmark signal indicator for Superlatives (Top Rank in a Group).",
        "explanationTr": "'the most' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Superlatives (Top Rank in a Group) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-7",
        "type": "yds-style-question",
        "prompt": "[Superlatives (Top Rank in a Group)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Superlatives (Top Rank in a Group):",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 8",
        "options": [
          "[IS] + the management + [THE MOST ...]?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[IS] + the management + [THE MOST ...]?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-9",
        "type": "sentence-completion",
        "prompt": "[Superlatives (Top Rank in a Group)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-10",
        "type": "translation-match",
        "prompt": "[Superlatives (Top Rank in a Group)] Which option accurately translates: 'Bir grup içinde bir niteliğe en üst düzeyde sahip olan varlığı belirtir.'?",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 10",
        "options": [
          "Identifies an entity that possesses the highest degree of a quality within a group.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Identifies an entity that possesses the highest degree of a quality within a group.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-11",
        "type": "multiple-choice",
        "prompt": "[Superlatives (Top Rank in a Group)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Superlatives (Top Rank in a Group)?",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Superlatives (Top Rank in a Group).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Superlatives (Top Rank in a Group).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-13",
        "type": "fill-in-blank",
        "prompt": "[Superlatives (Top Rank in a Group)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-14",
        "type": "sentence-transformation",
        "prompt": "[Superlatives (Top Rank in a Group)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-15",
        "type": "timed-challenge",
        "prompt": "[Superlatives (Top Rank in a Group)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-16",
        "type": "clause-identification",
        "prompt": "[Superlatives (Top Rank in a Group)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-17",
        "type": "connector-selection",
        "prompt": "[Superlatives (Top Rank in a Group)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-18",
        "type": "yds-cloze",
        "prompt": "[Superlatives (Top Rank in a Group)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Superlatives (Top Rank in a Group), which order is syntactically standard?",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-20",
        "type": "yds-style-question",
        "prompt": "[Superlatives (Top Rank in a Group)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-21",
        "type": "contextual-grammar",
        "prompt": "[Superlatives (Top Rank in a Group)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "superlatives-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Superlatives (Top Rank in a Group): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Üstünlük Derecesi (Gruptaki En Üst Sıra) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "quantifiers",
    "title": "Quantifiers (Countable & Uncountable Measurements)",
    "titleTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar)",
    "category": "CORE",
    "order": 13,
    "intro": {
      "overview": "Quantifiers indicate quantity or amount without giving an exact number.",
      "overviewTr": "Tam bir sayı vermeksizin miktar ve ölçü belirten sözcüklerdir.",
      "whatIsIt": "Frequently tested in YDS: few vs a few, little vs a little, each vs every.",
      "whatIsItTr": "YDS'de sayılamayan isimlerle 'much/little', sayılanlarla 'many/few' sıkça test edilir.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[QUANTIFIER] + [NOUN]",
      "formulaNegative": "Not many / not much + noun.",
      "formulaQuestion": "How much / How many + noun...?",
      "formulaShortAnswers": "Plenty of resources / a few candidates.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "much",
        "many",
        "little",
        "a little",
        "few",
        "a few",
        "a lot of"
      ],
      "explanationEn": "Quantity scale.",
      "explanationTr": "Miktar derecelendirme sözcükleri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Quantifiers (Countable & Uncountable Measurements) organizes meaning in professional contexts.",
      "descriptionTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Quantifiers (Countable & Uncountable Measurements) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Quantifiers -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "quantifiers-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "quantifiers-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Quantifiers (Countable & Uncountable Measurements) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Quantifiers (Countable & Uncountable Measurements).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "quantifiers-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Quantifiers (Countable & Uncountable Measurements) in a business context?",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Quantifiers (Countable & Uncountable Measurements).",
        "explanationTr": "A seçeneği Miktar Belirteçleri (Sayılan ve Sayılamayanlar) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Quantifiers (Countable & Uncountable Measurements).",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-3",
        "type": "fill-in-blank",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Quantifiers (Countable & Uncountable Measurements) in corporate and academic English?",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 4",
        "options": [
          "Quantifiers indicate quantity or amount without giving an exact number.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Quantifiers indicate quantity or amount without giving an exact number.",
        "explanationEn": "As defined, Quantifiers (Countable & Uncountable Measurements) serves primarily to frequently tested in yds: few vs a few, little vs a little, each vs every.",
        "explanationTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar), temel olarak yds'de sayılamayan isimlerle 'much/little', sayılanlarla 'many/few' sıkça test edilir. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Quantifiers (Countable & Uncountable Measurements) in YDS questions?",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 5",
        "options": [
          "much",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "much",
        "explanationEn": "'much' is a hallmark signal indicator for Quantifiers (Countable & Uncountable Measurements).",
        "explanationTr": "'much' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Quantifiers (Countable & Uncountable Measurements) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-7",
        "type": "yds-style-question",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Quantifiers (Countable & Uncountable Measurements):",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 8",
        "options": [
          "How much / How many + noun...?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "How much / How many + noun...?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-9",
        "type": "sentence-completion",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-10",
        "type": "translation-match",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] Which option accurately translates: 'Tam bir sayı vermeksizin miktar ve ölçü belirten sözcüklerdir.'?",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 10",
        "options": [
          "Quantifiers indicate quantity or amount without giving an exact number.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Quantifiers indicate quantity or amount without giving an exact number.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-11",
        "type": "multiple-choice",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Quantifiers (Countable & Uncountable Measurements)?",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Quantifiers (Countable & Uncountable Measurements).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Quantifiers (Countable & Uncountable Measurements).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-13",
        "type": "fill-in-blank",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-14",
        "type": "sentence-transformation",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-15",
        "type": "timed-challenge",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-16",
        "type": "clause-identification",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-17",
        "type": "connector-selection",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-18",
        "type": "yds-cloze",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Quantifiers (Countable & Uncountable Measurements), which order is syntactically standard?",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-20",
        "type": "yds-style-question",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-21",
        "type": "contextual-grammar",
        "prompt": "[Quantifiers (Countable & Uncountable Measurements)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "quantifiers-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Quantifiers (Countable & Uncountable Measurements): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Miktar Belirteçleri (Sayılan ve Sayılamayanlar) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "gerunds-infinitives",
    "title": "Gerunds & Infinitives (V-ing vs To V1)",
    "titleTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma)",
    "category": "CORE",
    "order": 14,
    "intro": {
      "overview": "Determines whether a verb acts as an object/subject as -ing or to + V1.",
      "overviewTr": "Fiillerin isimleşirken -ing mi yoksa to + V1 mi alacağını belirler.",
      "whatIsIt": "A staple YDS question pattern following verbs like consider, admit, hesitate.",
      "whatIsItTr": "YDS'de 'suggest doing' veya 'decide to do' gibi kalıplar doğrudan sorulur.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[VERB] + [GERUND(-ing)] OR [VERB] + [TO-INFINITIVE]",
      "formulaNegative": "[VERB] + [NOT DOING / NOT TO DO]",
      "formulaQuestion": "Do you mind [DOING]...?",
      "formulaShortAnswers": "Looking forward to hearing from you.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "enjoy",
        "avoid",
        "consider",
        "decide",
        "refuse",
        "intend"
      ],
      "explanationEn": "Verb complement lists.",
      "explanationTr": "Fiil tamlayıcı listeleri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Gerunds & Infinitives (V-ing vs To V1) organizes meaning in professional contexts.",
      "descriptionTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Gerunds & Infinitives (V-ing vs To V1) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Gerunds -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "gerunds-infinitives-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "gerunds-infinitives-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Gerunds & Infinitives (V-ing vs To V1) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Gerunds & Infinitives (V-ing vs To V1).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "gerunds-infinitives-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Gerunds & Infinitives (V-ing vs To V1) in a business context?",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Gerunds & Infinitives (V-ing vs To V1).",
        "explanationTr": "A seçeneği Ulaçlar ve Mastarlar (Fiilden İsim Yapma) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Gerunds & Infinitives (V-ing vs To V1).",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-3",
        "type": "fill-in-blank",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Gerunds & Infinitives (V-ing vs To V1) in corporate and academic English?",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 4",
        "options": [
          "Determines whether a verb acts as an object/subject as -ing or to + V1.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Determines whether a verb acts as an object/subject as -ing or to + V1.",
        "explanationEn": "As defined, Gerunds & Infinitives (V-ing vs To V1) serves primarily to a staple yds question pattern following verbs like consider, admit, hesitate.",
        "explanationTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma), temel olarak yds'de 'suggest doing' veya 'decide to do' gibi kalıplar doğrudan sorulur. amacıyla kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Gerunds & Infinitives (V-ing vs To V1) in YDS questions?",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 5",
        "options": [
          "enjoy",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "enjoy",
        "explanationEn": "'enjoy' is a hallmark signal indicator for Gerunds & Infinitives (V-ing vs To V1).",
        "explanationTr": "'enjoy' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Gerunds & Infinitives (V-ing vs To V1) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-7",
        "type": "yds-style-question",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Gerunds & Infinitives (V-ing vs To V1):",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 8",
        "options": [
          "Do you mind [DOING]...?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Do you mind [DOING]...?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-9",
        "type": "sentence-completion",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-10",
        "type": "translation-match",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] Which option accurately translates: 'Fiillerin isimleşirken -ing mi yoksa to + V1 mi alacağını belirler.'?",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 10",
        "options": [
          "Determines whether a verb acts as an object/subject as -ing or to + V1.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Determines whether a verb acts as an object/subject as -ing or to + V1.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-11",
        "type": "multiple-choice",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Gerunds & Infinitives (V-ing vs To V1)?",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Gerunds & Infinitives (V-ing vs To V1).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Gerunds & Infinitives (V-ing vs To V1).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-13",
        "type": "fill-in-blank",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-14",
        "type": "sentence-transformation",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-15",
        "type": "timed-challenge",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-16",
        "type": "clause-identification",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-17",
        "type": "connector-selection",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-18",
        "type": "yds-cloze",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Gerunds & Infinitives (V-ing vs To V1), which order is syntactically standard?",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-20",
        "type": "yds-style-question",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-21",
        "type": "contextual-grammar",
        "prompt": "[Gerunds & Infinitives (V-ing vs To V1)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B1"
      },
      {
        "id": "gerunds-infinitives-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Gerunds & Infinitives (V-ing vs To V1): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Ulaçlar ve Mastarlar (Fiilden İsim Yapma) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B1"
      }
    ]
  },
  {
    "id": "passive-voice",
    "title": "Passive Voice (Focus on Action and Recipient)",
    "titleTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma)",
    "category": "INTERMEDIATE",
    "order": 15,
    "intro": {
      "overview": "Focuses on the receiver of the action rather than the agent doing it.",
      "overviewTr": "Eylemi yapan kişiden ziyade eylemden etkilenen nesneye odaklanır.",
      "whatIsIt": "The standard writing voice in scientific papers, YDS texts, and corporate memos.",
      "whatIsItTr": "Akademik makalelerde ve resmi raporlarda standart anlatım tarzıdır.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[OBJECT] + [BE (in appropriate tense)] + [PAST PARTICIPLE / V3]",
      "formulaNegative": "[OBJECT] + [BE NOT] + [PAST PARTICIPLE / V3]",
      "formulaQuestion": "[BE] + [OBJECT] + [PAST PARTICIPLE / V3]?",
      "formulaShortAnswers": "Yes, it has been resolved. / No, it wasn't approved.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "by",
        "is expected to",
        "was conducted",
        "has been established"
      ],
      "explanationEn": "Agent omission markers.",
      "explanationTr": "Öznesiz resmi üslup belirteçleri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Passive Voice (Focus on Action and Recipient) organizes meaning in professional contexts.",
      "descriptionTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Passive Voice (Focus on Action and Recipient) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Passive -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "passive-voice-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "passive-voice-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Passive Voice (Focus on Action and Recipient) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Passive Voice (Focus on Action and Recipient).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "passive-voice-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Passive Voice (Focus on Action and Recipient) in a business context?",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Passive Voice (Focus on Action and Recipient).",
        "explanationTr": "A seçeneği Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Passive Voice (Focus on Action and Recipient).",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-3",
        "type": "fill-in-blank",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Passive Voice (Focus on Action and Recipient) in corporate and academic English?",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 4",
        "options": [
          "Focuses on the receiver of the action rather than the agent doing it.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Focuses on the receiver of the action rather than the agent doing it.",
        "explanationEn": "As defined, Passive Voice (Focus on Action and Recipient) serves primarily to the standard writing voice in scientific papers, yds texts, and corporate memos.",
        "explanationTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma), temel olarak akademik makalelerde ve resmi raporlarda standart anlatım tarzıdır. amacıyla kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Passive Voice (Focus on Action and Recipient) in YDS questions?",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 5",
        "options": [
          "by",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "by",
        "explanationEn": "'by' is a hallmark signal indicator for Passive Voice (Focus on Action and Recipient).",
        "explanationTr": "'by' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Passive Voice (Focus on Action and Recipient) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-7",
        "type": "yds-style-question",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Passive Voice (Focus on Action and Recipient):",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 8",
        "options": [
          "[BE] + [OBJECT] + [PAST PARTICIPLE / V3]?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "[BE] + [OBJECT] + [PAST PARTICIPLE / V3]?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-9",
        "type": "sentence-completion",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-10",
        "type": "translation-match",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] Which option accurately translates: 'Eylemi yapan kişiden ziyade eylemden etkilenen nesneye odaklanır.'?",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 10",
        "options": [
          "Focuses on the receiver of the action rather than the agent doing it.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Focuses on the receiver of the action rather than the agent doing it.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-11",
        "type": "multiple-choice",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Passive Voice (Focus on Action and Recipient)?",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Passive Voice (Focus on Action and Recipient).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Passive Voice (Focus on Action and Recipient).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-13",
        "type": "fill-in-blank",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-14",
        "type": "sentence-transformation",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-15",
        "type": "timed-challenge",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-16",
        "type": "clause-identification",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-17",
        "type": "connector-selection",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-18",
        "type": "yds-cloze",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Passive Voice (Focus on Action and Recipient), which order is syntactically standard?",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-20",
        "type": "yds-style-question",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-21",
        "type": "contextual-grammar",
        "prompt": "[Passive Voice (Focus on Action and Recipient)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B2"
      },
      {
        "id": "passive-voice-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Passive Voice (Focus on Action and Recipient): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Edilgen Çatı (Eyleme ve Etkilenene Odaklanma) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B2"
      }
    ]
  },
  {
    "id": "conditionals",
    "title": "Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)",
    "titleTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri)",
    "category": "INTERMEDIATE",
    "order": 16,
    "intro": {
      "overview": "Expresses hypothetical situations, causal outcomes, and past regrets.",
      "overviewTr": "Varsayımsal durumları, nedensel sonuçları ve geçmiş pişmanlıkları ifade eder.",
      "whatIsIt": "A massive pillar of YDS grammar with inversion in conditionals (Had I known...).",
      "whatIsItTr": "YDS'nin en büyük soru bloklarındandır; devrik koşul yapıları sıkça test edilir.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "If + [CONDITION], [RESULT]",
      "formulaNegative": "Unless + [CONDITION (positive)], [RESULT]",
      "formulaQuestion": "What would happen if...?",
      "formulaShortAnswers": "If you prepare well, you will pass.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "if",
        "unless",
        "provided that",
        "as long as",
        "in case of"
      ],
      "explanationEn": "Conditional connectors.",
      "explanationTr": "Şart bağlaçları."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless) organizes meaning in professional contexts.",
      "descriptionTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Conditionals -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "conditionals-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "conditionals-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Koşul Cümleleri (Şart ve Sonuç İlişkileri) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "conditionals-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless) in a business context?",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless).",
        "explanationTr": "A seçeneği Koşul Cümleleri (Şart ve Sonuç İlişkileri) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless).",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-3",
        "type": "fill-in-blank",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless) in corporate and academic English?",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 4",
        "options": [
          "Expresses hypothetical situations, causal outcomes, and past regrets.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Expresses hypothetical situations, causal outcomes, and past regrets.",
        "explanationEn": "As defined, Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless) serves primarily to a massive pillar of yds grammar with inversion in conditionals (had i known...).",
        "explanationTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri), temel olarak yds'nin en büyük soru bloklarındandır; devrik koşul yapıları sıkça test edilir. amacıyla kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless) in YDS questions?",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 5",
        "options": [
          "if",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "if",
        "explanationEn": "'if' is a hallmark signal indicator for Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless).",
        "explanationTr": "'if' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-7",
        "type": "yds-style-question",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless):",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 8",
        "options": [
          "What would happen if...?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "What would happen if...?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-9",
        "type": "sentence-completion",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-10",
        "type": "translation-match",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] Which option accurately translates: 'Varsayımsal durumları, nedensel sonuçları ve geçmiş pişmanlıkları ifade eder.'?",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 10",
        "options": [
          "Expresses hypothetical situations, causal outcomes, and past regrets.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Expresses hypothetical situations, causal outcomes, and past regrets.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-11",
        "type": "multiple-choice",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)?",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-13",
        "type": "fill-in-blank",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-14",
        "type": "sentence-transformation",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-15",
        "type": "timed-challenge",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-16",
        "type": "clause-identification",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-17",
        "type": "connector-selection",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-18",
        "type": "yds-cloze",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless), which order is syntactically standard?",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-20",
        "type": "yds-style-question",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-21",
        "type": "contextual-grammar",
        "prompt": "[Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B2"
      },
      {
        "id": "conditionals-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Conditionals (Zero, 1st, 2nd, 3rd, Mixed & Unless): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Koşul Cümleleri (Şart ve Sonuç İlişkileri) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B2"
      }
    ]
  },
  {
    "id": "relative-clauses",
    "title": "Relative Clauses (Defining & Non-Defining)",
    "titleTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları)",
    "category": "INTERMEDIATE",
    "order": 17,
    "intro": {
      "overview": "Adds descriptive information to a noun using who, which, that, whose, where.",
      "overviewTr": "İsimlere ek bilgi katarak onları niteleyen yan cümlelerdir.",
      "whatIsIt": "Crucial for combining ideas in academic synthesis and decoding long YDS sentences.",
      "whatIsItTr": "Uzun YDS cümlelerini parçalara bölüp anlamada en kritik yapıdır.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[NOUN] + [WHO / WHICH / THAT] + [CLAUSE]",
      "formulaNegative": "[NOUN] + [WHO / WHICH DOES NOT ...]",
      "formulaQuestion": "Is this the candidate who applied?",
      "formulaShortAnswers": "The strategy which we implemented proved successful.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "who",
        "which",
        "that",
        "whose",
        "whom",
        "where",
        "whereby"
      ],
      "explanationEn": "Relative pronouns.",
      "explanationTr": "İlgi zamirleri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Relative Clauses (Defining & Non-Defining) organizes meaning in professional contexts.",
      "descriptionTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Relative Clauses (Defining & Non-Defining) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Relative -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "relative-clauses-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "relative-clauses-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Relative Clauses (Defining & Non-Defining) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Relative Clauses (Defining & Non-Defining).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Sıfat Cümlecikleri (İsim Niteleme Yapıları) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "relative-clauses-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Relative Clauses (Defining & Non-Defining) in a business context?",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Relative Clauses (Defining & Non-Defining).",
        "explanationTr": "A seçeneği Sıfat Cümlecikleri (İsim Niteleme Yapıları) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Relative Clauses (Defining & Non-Defining).",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-3",
        "type": "fill-in-blank",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Relative Clauses (Defining & Non-Defining) in corporate and academic English?",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 4",
        "options": [
          "Adds descriptive information to a noun using who, which, that, whose, where.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Adds descriptive information to a noun using who, which, that, whose, where.",
        "explanationEn": "As defined, Relative Clauses (Defining & Non-Defining) serves primarily to crucial for combining ideas in academic synthesis and decoding long yds sentences.",
        "explanationTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları), temel olarak uzun yds cümlelerini parçalara bölüp anlamada en kritik yapıdır. amacıyla kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Relative Clauses (Defining & Non-Defining) in YDS questions?",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 5",
        "options": [
          "who",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "who",
        "explanationEn": "'who' is a hallmark signal indicator for Relative Clauses (Defining & Non-Defining).",
        "explanationTr": "'who' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Relative Clauses (Defining & Non-Defining) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-7",
        "type": "yds-style-question",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Relative Clauses (Defining & Non-Defining):",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 8",
        "options": [
          "Is this the candidate who applied?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Is this the candidate who applied?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-9",
        "type": "sentence-completion",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-10",
        "type": "translation-match",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] Which option accurately translates: 'İsimlere ek bilgi katarak onları niteleyen yan cümlelerdir.'?",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 10",
        "options": [
          "Adds descriptive information to a noun using who, which, that, whose, where.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Adds descriptive information to a noun using who, which, that, whose, where.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-11",
        "type": "multiple-choice",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Relative Clauses (Defining & Non-Defining)?",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Relative Clauses (Defining & Non-Defining).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Relative Clauses (Defining & Non-Defining).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-13",
        "type": "fill-in-blank",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-14",
        "type": "sentence-transformation",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-15",
        "type": "timed-challenge",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-16",
        "type": "clause-identification",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-17",
        "type": "connector-selection",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-18",
        "type": "yds-cloze",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Relative Clauses (Defining & Non-Defining), which order is syntactically standard?",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-20",
        "type": "yds-style-question",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-21",
        "type": "contextual-grammar",
        "prompt": "[Relative Clauses (Defining & Non-Defining)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B2"
      },
      {
        "id": "relative-clauses-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Relative Clauses (Defining & Non-Defining): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Sıfat Cümlecikleri (İsim Niteleme Yapıları) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B2"
      }
    ]
  },
  {
    "id": "noun-clauses",
    "title": "Noun Clauses (That-clauses, Wh-questions, Whether/If)",
    "titleTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler)",
    "category": "INTERMEDIATE",
    "order": 18,
    "intro": {
      "overview": "A whole clause functioning as a subject, object, or complement in a sentence.",
      "overviewTr": "Bir cümlenin içinde özne, nesne veya tümleç olarak görev yapan yan cümlelerdir.",
      "whatIsIt": "Dominates YDS reading passages and research finding announcements.",
      "whatIsItTr": "Araştırma bulgularının aktarılmasında ('Studies show that...') merkezdedir.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SUBJECT] + [VERB] + [THAT / WHETHER / WH-] + [SUB-CLAUSE]",
      "formulaNegative": "We do not know whether the proposal will be accepted.",
      "formulaQuestion": "Do you understand what this policy entails?",
      "formulaShortAnswers": "It is widely believed that productivity increases with flexibility.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "that",
        "whether... or not",
        "what",
        "how",
        "why"
      ],
      "explanationEn": "Clause introducers.",
      "explanationTr": "Cümlecik başlatıcıları."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Noun Clauses (That-clauses, Wh-questions, Whether/If) organizes meaning in professional contexts.",
      "descriptionTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Noun Clauses (That-clauses, Wh-questions, Whether/If) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Noun -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "noun-clauses-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "noun-clauses-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Noun Clauses (That-clauses, Wh-questions, Whether/If) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Noun Clauses (That-clauses, Wh-questions, Whether/If).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "noun-clauses-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Noun Clauses (That-clauses, Wh-questions, Whether/If) in a business context?",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Noun Clauses (That-clauses, Wh-questions, Whether/If).",
        "explanationTr": "A seçeneği İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Noun Clauses (That-clauses, Wh-questions, Whether/If).",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-3",
        "type": "fill-in-blank",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Noun Clauses (That-clauses, Wh-questions, Whether/If) in corporate and academic English?",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 4",
        "options": [
          "A whole clause functioning as a subject, object, or complement in a sentence.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "A whole clause functioning as a subject, object, or complement in a sentence.",
        "explanationEn": "As defined, Noun Clauses (That-clauses, Wh-questions, Whether/If) serves primarily to dominates yds reading passages and research finding announcements.",
        "explanationTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler), temel olarak araştırma bulgularının aktarılmasında ('studies show that...') merkezdedir. amacıyla kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Noun Clauses (That-clauses, Wh-questions, Whether/If) in YDS questions?",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 5",
        "options": [
          "that",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "that",
        "explanationEn": "'that' is a hallmark signal indicator for Noun Clauses (That-clauses, Wh-questions, Whether/If).",
        "explanationTr": "'that' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Noun Clauses (That-clauses, Wh-questions, Whether/If) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-7",
        "type": "yds-style-question",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Noun Clauses (That-clauses, Wh-questions, Whether/If):",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 8",
        "options": [
          "Do you understand what this policy entails?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Do you understand what this policy entails?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-9",
        "type": "sentence-completion",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-10",
        "type": "translation-match",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] Which option accurately translates: 'Bir cümlenin içinde özne, nesne veya tümleç olarak görev yapan yan cümlelerdir.'?",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 10",
        "options": [
          "A whole clause functioning as a subject, object, or complement in a sentence.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "A whole clause functioning as a subject, object, or complement in a sentence.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-11",
        "type": "multiple-choice",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Noun Clauses (That-clauses, Wh-questions, Whether/If)?",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Noun Clauses (That-clauses, Wh-questions, Whether/If).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Noun Clauses (That-clauses, Wh-questions, Whether/If).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-13",
        "type": "fill-in-blank",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-14",
        "type": "sentence-transformation",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-15",
        "type": "timed-challenge",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-16",
        "type": "clause-identification",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-17",
        "type": "connector-selection",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-18",
        "type": "yds-cloze",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Noun Clauses (That-clauses, Wh-questions, Whether/If), which order is syntactically standard?",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-20",
        "type": "yds-style-question",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-21",
        "type": "contextual-grammar",
        "prompt": "[Noun Clauses (That-clauses, Wh-questions, Whether/If)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B2"
      },
      {
        "id": "noun-clauses-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Noun Clauses (That-clauses, Wh-questions, Whether/If): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "İsim Cümlecikleri (Özne veya Nesne Görevi Gören Cümleler) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B2"
      }
    ]
  },
  {
    "id": "adverb-clauses",
    "title": "Adverb Clauses (Reason, Contrast, Purpose, Time)",
    "titleTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç)",
    "category": "INTERMEDIATE",
    "order": 19,
    "intro": {
      "overview": "Modifies a verb or main clause by explaining when, why, despite what, or how.",
      "overviewTr": "Ana cümlenin ne zaman, niçin, hangi engele rağmen gerçekleştiğini açıklar.",
      "whatIsIt": "Account for over 20% of all grammar questions in the YDS exam.",
      "whatIsItTr": "YDS gramer sorularının %20'sinden fazlasını doğrudan oluşturur.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[ADVERBIAL CONNECTOR] + [CLAUSE 1], [MAIN CLAUSE]",
      "formulaNegative": "Although results were delayed, quality was not compromised.",
      "formulaQuestion": "Did the team continue because the deadline was near?",
      "formulaShortAnswers": "While the market fluctuated, our revenue remained stable.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "although",
        "because",
        "since",
        "while",
        "in order that",
        "whereas"
      ],
      "explanationEn": "Subordinating conjunctions.",
      "explanationTr": "Zarf bağlaçları."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Adverb Clauses (Reason, Contrast, Purpose, Time) organizes meaning in professional contexts.",
      "descriptionTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Adverb Clauses (Reason, Contrast, Purpose, Time) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Adverb -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "adverb-clauses-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "adverb-clauses-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Adverb Clauses (Reason, Contrast, Purpose, Time) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Adverb Clauses (Reason, Contrast, Purpose, Time).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "adverb-clauses-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Adverb Clauses (Reason, Contrast, Purpose, Time) in a business context?",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Adverb Clauses (Reason, Contrast, Purpose, Time).",
        "explanationTr": "A seçeneği Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Adverb Clauses (Reason, Contrast, Purpose, Time).",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-3",
        "type": "fill-in-blank",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Adverb Clauses (Reason, Contrast, Purpose, Time) in corporate and academic English?",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 4",
        "options": [
          "Modifies a verb or main clause by explaining when, why, despite what, or how.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Modifies a verb or main clause by explaining when, why, despite what, or how.",
        "explanationEn": "As defined, Adverb Clauses (Reason, Contrast, Purpose, Time) serves primarily to account for over 20% of all grammar questions in the yds exam.",
        "explanationTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç), temel olarak yds gramer sorularının %20'sinden fazlasını doğrudan oluşturur. amacıyla kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Adverb Clauses (Reason, Contrast, Purpose, Time) in YDS questions?",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 5",
        "options": [
          "although",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "although",
        "explanationEn": "'although' is a hallmark signal indicator for Adverb Clauses (Reason, Contrast, Purpose, Time).",
        "explanationTr": "'although' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Adverb Clauses (Reason, Contrast, Purpose, Time) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-7",
        "type": "yds-style-question",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Adverb Clauses (Reason, Contrast, Purpose, Time):",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 8",
        "options": [
          "Did the team continue because the deadline was near?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Did the team continue because the deadline was near?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-9",
        "type": "sentence-completion",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-10",
        "type": "translation-match",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] Which option accurately translates: 'Ana cümlenin ne zaman, niçin, hangi engele rağmen gerçekleştiğini açıklar.'?",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 10",
        "options": [
          "Modifies a verb or main clause by explaining when, why, despite what, or how.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Modifies a verb or main clause by explaining when, why, despite what, or how.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-11",
        "type": "multiple-choice",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Adverb Clauses (Reason, Contrast, Purpose, Time)?",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Adverb Clauses (Reason, Contrast, Purpose, Time).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Adverb Clauses (Reason, Contrast, Purpose, Time).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-13",
        "type": "fill-in-blank",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-14",
        "type": "sentence-transformation",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-15",
        "type": "timed-challenge",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-16",
        "type": "clause-identification",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-17",
        "type": "connector-selection",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-18",
        "type": "yds-cloze",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Adverb Clauses (Reason, Contrast, Purpose, Time), which order is syntactically standard?",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-20",
        "type": "yds-style-question",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-21",
        "type": "contextual-grammar",
        "prompt": "[Adverb Clauses (Reason, Contrast, Purpose, Time)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B2"
      },
      {
        "id": "adverb-clauses-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Adverb Clauses (Reason, Contrast, Purpose, Time): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Zarf Cümlecikleri (Zaman, Sebep, Karşıtlık ve Amaç) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B2"
      }
    ]
  },
  {
    "id": "reported-speech",
    "title": "Reported Speech (Indirect Statements & Backshifting)",
    "titleTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması)",
    "category": "INTERMEDIATE",
    "order": 20,
    "intro": {
      "overview": "Reports what someone said without using their exact quotation marks.",
      "overviewTr": "Birinin söylediği sözleri tırnak içine almadan aktarma yöntemidir.",
      "whatIsIt": "Essential for meeting minutes, executive summaries, and news reporting in YDS.",
      "whatIsItTr": "Toplantı tutanakları, yönetici özetleri ve haber metinleri için gereklidir.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SPEAKER] + [SAID / STATED] + [THAT] + [BACKSHIFTED CLAUSE]",
      "formulaNegative": "He claimed that he had not received the memo.",
      "formulaQuestion": "Did she ask whether the interview was confirmed?",
      "formulaShortAnswers": "She mentioned that the company had hired five new managers.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "said",
        "stated",
        "claimed",
        "inquired",
        "emphasized"
      ],
      "explanationEn": "Reporting verbs.",
      "explanationTr": "Aktarım fiilleri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Reported Speech (Indirect Statements & Backshifting) organizes meaning in professional contexts.",
      "descriptionTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Reported Speech (Indirect Statements & Backshifting) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Reported -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "reported-speech-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "reported-speech-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Reported Speech (Indirect Statements & Backshifting) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Reported Speech (Indirect Statements & Backshifting).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "reported-speech-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Reported Speech (Indirect Statements & Backshifting) in a business context?",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Reported Speech (Indirect Statements & Backshifting).",
        "explanationTr": "A seçeneği Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Reported Speech (Indirect Statements & Backshifting).",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-3",
        "type": "fill-in-blank",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Reported Speech (Indirect Statements & Backshifting) in corporate and academic English?",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 4",
        "options": [
          "Reports what someone said without using their exact quotation marks.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Reports what someone said without using their exact quotation marks.",
        "explanationEn": "As defined, Reported Speech (Indirect Statements & Backshifting) serves primarily to essential for meeting minutes, executive summaries, and news reporting in yds.",
        "explanationTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması), temel olarak toplantı tutanakları, yönetici özetleri ve haber metinleri için gereklidir. amacıyla kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Reported Speech (Indirect Statements & Backshifting) in YDS questions?",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 5",
        "options": [
          "said",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "said",
        "explanationEn": "'said' is a hallmark signal indicator for Reported Speech (Indirect Statements & Backshifting).",
        "explanationTr": "'said' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Reported Speech (Indirect Statements & Backshifting) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-7",
        "type": "yds-style-question",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Reported Speech (Indirect Statements & Backshifting):",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 8",
        "options": [
          "Did she ask whether the interview was confirmed?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Did she ask whether the interview was confirmed?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-9",
        "type": "sentence-completion",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-10",
        "type": "translation-match",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] Which option accurately translates: 'Birinin söylediği sözleri tırnak içine almadan aktarma yöntemidir.'?",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 10",
        "options": [
          "Reports what someone said without using their exact quotation marks.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Reports what someone said without using their exact quotation marks.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-11",
        "type": "multiple-choice",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Reported Speech (Indirect Statements & Backshifting)?",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Reported Speech (Indirect Statements & Backshifting).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Reported Speech (Indirect Statements & Backshifting).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-13",
        "type": "fill-in-blank",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-14",
        "type": "sentence-transformation",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-15",
        "type": "timed-challenge",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-16",
        "type": "clause-identification",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-17",
        "type": "connector-selection",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-18",
        "type": "yds-cloze",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Reported Speech (Indirect Statements & Backshifting), which order is syntactically standard?",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-20",
        "type": "yds-style-question",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-21",
        "type": "contextual-grammar",
        "prompt": "[Reported Speech (Indirect Statements & Backshifting)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B2"
      },
      {
        "id": "reported-speech-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Reported Speech (Indirect Statements & Backshifting): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Dolaylı Anlatım (Aktarılan İfadeler ve Zaman Kayması) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B2"
      }
    ]
  },
  {
    "id": "linking-words",
    "title": "Linking Words & Transitions (However, Therefore, Furthermore)",
    "titleTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar",
    "category": "INTERMEDIATE",
    "order": 21,
    "intro": {
      "overview": "Connects independent clauses or paragraphs logically (addition, cause, contrast).",
      "overviewTr": "Bağımsız cümleleri veya paragrafları mantıksal olarak birbirine bağlar.",
      "whatIsIt": "The most predictable and rewarded question type on the entire YDS test.",
      "whatIsItTr": "Tüm YDS sınavında en yüksek puan getiren ve en net soru kalıbıdır.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[CLAUSE 1]; [TRANSITION], [CLAUSE 2]",
      "formulaNegative": "The plan is costly; however, it is necessary.",
      "formulaQuestion": "Consequently, overall employee satisfaction increased.",
      "formulaShortAnswers": "Furthermore, new technology reduces operational delays.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "however",
        "therefore",
        "furthermore",
        "in addition",
        "on the contrary"
      ],
      "explanationEn": "Discourse markers.",
      "explanationTr": "Düşünce akışını yönlendiren geçiş kelimeleri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Linking Words & Transitions (However, Therefore, Furthermore) organizes meaning in professional contexts.",
      "descriptionTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Linking Words & Transitions (However, Therefore, Furthermore) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Linking -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "linking-words-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "linking-words-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Linking Words & Transitions (However, Therefore, Furthermore) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Linking Words & Transitions (However, Therefore, Furthermore).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Geçiş Kelimeleri ve Mantıksal Bağlaçlar konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "linking-words-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Linking Words & Transitions (However, Therefore, Furthermore) in a business context?",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Linking Words & Transitions (However, Therefore, Furthermore).",
        "explanationTr": "A seçeneği Geçiş Kelimeleri ve Mantıksal Bağlaçlar konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Linking Words & Transitions (However, Therefore, Furthermore).",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-3",
        "type": "fill-in-blank",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Linking Words & Transitions (However, Therefore, Furthermore) in corporate and academic English?",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 4",
        "options": [
          "Connects independent clauses or paragraphs logically (addition, cause, contrast).",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Connects independent clauses or paragraphs logically (addition, cause, contrast).",
        "explanationEn": "As defined, Linking Words & Transitions (However, Therefore, Furthermore) serves primarily to the most predictable and rewarded question type on the entire yds test.",
        "explanationTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar, temel olarak tüm yds sınavında en yüksek puan getiren ve en net soru kalıbıdır. amacıyla kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Linking Words & Transitions (However, Therefore, Furthermore) in YDS questions?",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 5",
        "options": [
          "however",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "however",
        "explanationEn": "'however' is a hallmark signal indicator for Linking Words & Transitions (However, Therefore, Furthermore).",
        "explanationTr": "'however' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Linking Words & Transitions (However, Therefore, Furthermore) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-7",
        "type": "yds-style-question",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Linking Words & Transitions (However, Therefore, Furthermore):",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 8",
        "options": [
          "Consequently, overall employee satisfaction increased.",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Consequently, overall employee satisfaction increased.",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-9",
        "type": "sentence-completion",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-10",
        "type": "translation-match",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] Which option accurately translates: 'Bağımsız cümleleri veya paragrafları mantıksal olarak birbirine bağlar.'?",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 10",
        "options": [
          "Connects independent clauses or paragraphs logically (addition, cause, contrast).",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Connects independent clauses or paragraphs logically (addition, cause, contrast).",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-11",
        "type": "multiple-choice",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Linking Words & Transitions (However, Therefore, Furthermore)?",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Linking Words & Transitions (However, Therefore, Furthermore).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Linking Words & Transitions (However, Therefore, Furthermore).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-13",
        "type": "fill-in-blank",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-14",
        "type": "sentence-transformation",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-15",
        "type": "timed-challenge",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-16",
        "type": "clause-identification",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-17",
        "type": "connector-selection",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-18",
        "type": "yds-cloze",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Linking Words & Transitions (However, Therefore, Furthermore), which order is syntactically standard?",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-20",
        "type": "yds-style-question",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-21",
        "type": "contextual-grammar",
        "prompt": "[Linking Words & Transitions (However, Therefore, Furthermore)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B2"
      },
      {
        "id": "linking-words-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Linking Words & Transitions (However, Therefore, Furthermore): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Geçiş Kelimeleri ve Mantıksal Bağlaçlar ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B2"
      }
    ]
  },
  {
    "id": "prepositions",
    "title": "Prepositions & Dependent Collocations",
    "titleTr": "Edatlar ve Bağımlı Edat Kalıpları",
    "category": "INTERMEDIATE",
    "order": 22,
    "intro": {
      "overview": "Words expressing spatial, temporal, or idiomatic relationships with verbs/adjectives.",
      "overviewTr": "Fiiller, sıfatlar ve isimlerle kalıplaşmış edat ilişkilerini düzenler.",
      "whatIsIt": "Memorization of dependent prepositions (rely on, capable of) is mandatory for YDS.",
      "whatIsItTr": "YDS için 'rely on, capable of, key to' gibi kalıpların bilinmesi zorunludur.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[VERB / ADJECTIVE] + [PREPOSITION] + [NOUN / GERUND]",
      "formulaNegative": "The team succeeded in completing the project on time.",
      "formulaQuestion": "Are you responsible for recruitment?",
      "formulaShortAnswers": "Companies depend on qualified personnel for growth.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "in",
        "on",
        "at",
        "for",
        "with",
        "about",
        "capable of",
        "rely on"
      ],
      "explanationEn": "Prepositional links.",
      "explanationTr": "Edatsal bağlar."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Prepositions & Dependent Collocations organizes meaning in professional contexts.",
      "descriptionTr": "Edatlar ve Bağımlı Edat Kalıpları yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Prepositions & Dependent Collocations to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Prepositions -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "prepositions-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "prepositions-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Prepositions & Dependent Collocations by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Prepositions & Dependent Collocations.",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Edatlar ve Bağımlı Edat Kalıpları konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "prepositions-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Prepositions & Dependent Collocations in a business context?",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Prepositions & Dependent Collocations.",
        "explanationTr": "A seçeneği Edatlar ve Bağımlı Edat Kalıpları konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Prepositions & Dependent Collocations.",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-3",
        "type": "fill-in-blank",
        "prompt": "[Prepositions & Dependent Collocations] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Prepositions & Dependent Collocations in corporate and academic English?",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 4",
        "options": [
          "Words expressing spatial, temporal, or idiomatic relationships with verbs/adjectives.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Words expressing spatial, temporal, or idiomatic relationships with verbs/adjectives.",
        "explanationEn": "As defined, Prepositions & Dependent Collocations serves primarily to memorization of dependent prepositions (rely on, capable of) is mandatory for yds.",
        "explanationTr": "Edatlar ve Bağımlı Edat Kalıpları, temel olarak yds için 'rely on, capable of, key to' gibi kalıpların bilinmesi zorunludur. amacıyla kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Prepositions & Dependent Collocations in YDS questions?",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 5",
        "options": [
          "in",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "in",
        "explanationEn": "'in' is a hallmark signal indicator for Prepositions & Dependent Collocations.",
        "explanationTr": "'in' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Prepositions & Dependent Collocations follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-7",
        "type": "yds-style-question",
        "prompt": "[Prepositions & Dependent Collocations] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Prepositions & Dependent Collocations:",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 8",
        "options": [
          "Are you responsible for recruitment?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Are you responsible for recruitment?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-9",
        "type": "sentence-completion",
        "prompt": "[Prepositions & Dependent Collocations] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-10",
        "type": "translation-match",
        "prompt": "[Prepositions & Dependent Collocations] Which option accurately translates: 'Fiiller, sıfatlar ve isimlerle kalıplaşmış edat ilişkilerini düzenler.'?",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 10",
        "options": [
          "Words expressing spatial, temporal, or idiomatic relationships with verbs/adjectives.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Words expressing spatial, temporal, or idiomatic relationships with verbs/adjectives.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-11",
        "type": "multiple-choice",
        "prompt": "[Prepositions & Dependent Collocations] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Prepositions & Dependent Collocations?",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Prepositions & Dependent Collocations.",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Prepositions & Dependent Collocations.",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-13",
        "type": "fill-in-blank",
        "prompt": "[Prepositions & Dependent Collocations] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-14",
        "type": "sentence-transformation",
        "prompt": "[Prepositions & Dependent Collocations] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-15",
        "type": "timed-challenge",
        "prompt": "[Prepositions & Dependent Collocations] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-16",
        "type": "clause-identification",
        "prompt": "[Prepositions & Dependent Collocations] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-17",
        "type": "connector-selection",
        "prompt": "[Prepositions & Dependent Collocations] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-18",
        "type": "yds-cloze",
        "prompt": "[Prepositions & Dependent Collocations] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Prepositions & Dependent Collocations, which order is syntactically standard?",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-20",
        "type": "yds-style-question",
        "prompt": "[Prepositions & Dependent Collocations] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-21",
        "type": "contextual-grammar",
        "prompt": "[Prepositions & Dependent Collocations] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "B2"
      },
      {
        "id": "prepositions-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Prepositions & Dependent Collocations: What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Edatlar ve Bağımlı Edat Kalıpları ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "B2"
      }
    ]
  },
  {
    "id": "advanced-tenses",
    "title": "Advanced Tenses (Future Perfect, Past & Future Continuous)",
    "titleTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç)",
    "category": "YDS",
    "order": 23,
    "intro": {
      "overview": "Precision tenses expressing completed future deadlines or continuous past actions.",
      "overviewTr": "Gelecekteki belirli bir tarihte tamamlanmış olacak eylemleri anlatır.",
      "whatIsIt": "Classic YDS formula: 'By + future date -> will have + V3'.",
      "whatIsItTr": "YDS'nin klasikleşmiş formülü: 'By + gelecek zaman -> will have + V3'.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[BY FUTURE TIME], [SUBJECT] + [WILL HAVE + V3]",
      "formulaNegative": "By 2030, they will not have completed the entire transition.",
      "formulaQuestion": "Will the committee have reached a consensus by Friday?",
      "formulaShortAnswers": "By next month, our HR department will have reviewed 500 applicants.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "by 2035",
        "by the time",
        "this time tomorrow",
        "for three hours when"
      ],
      "explanationEn": "Deadline markers.",
      "explanationTr": "Termin ve son gün işaretçileri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "timeline",
      "descriptionEn": "Visual conceptual roadmap delineating how Advanced Tenses (Future Perfect, Past & Future Continuous) organizes meaning in professional contexts.",
      "descriptionTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Advanced Tenses (Future Perfect, Past & Future Continuous) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Advanced -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "advanced-tenses-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "advanced-tenses-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Advanced Tenses (Future Perfect, Past & Future Continuous) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Advanced Tenses (Future Perfect, Past & Future Continuous).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "advanced-tenses-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Advanced Tenses (Future Perfect, Past & Future Continuous) in a business context?",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Advanced Tenses (Future Perfect, Past & Future Continuous).",
        "explanationTr": "A seçeneği İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Advanced Tenses (Future Perfect, Past & Future Continuous).",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-3",
        "type": "fill-in-blank",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Advanced Tenses (Future Perfect, Past & Future Continuous) in corporate and academic English?",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 4",
        "options": [
          "Precision tenses expressing completed future deadlines or continuous past actions.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Precision tenses expressing completed future deadlines or continuous past actions.",
        "explanationEn": "As defined, Advanced Tenses (Future Perfect, Past & Future Continuous) serves primarily to classic yds formula: 'by + future date -> will have + v3'.",
        "explanationTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç), temel olarak yds'nin klasikleşmiş formülü: 'by + gelecek zaman -> will have + v3'. amacıyla kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Advanced Tenses (Future Perfect, Past & Future Continuous) in YDS questions?",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 5",
        "options": [
          "by 2035",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "by 2035",
        "explanationEn": "'by 2035' is a hallmark signal indicator for Advanced Tenses (Future Perfect, Past & Future Continuous).",
        "explanationTr": "'by 2035' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Advanced Tenses (Future Perfect, Past & Future Continuous) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-7",
        "type": "yds-style-question",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Advanced Tenses (Future Perfect, Past & Future Continuous):",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 8",
        "options": [
          "Will the committee have reached a consensus by Friday?",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Will the committee have reached a consensus by Friday?",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-9",
        "type": "sentence-completion",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-10",
        "type": "translation-match",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] Which option accurately translates: 'Gelecekteki belirli bir tarihte tamamlanmış olacak eylemleri anlatır.'?",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 10",
        "options": [
          "Precision tenses expressing completed future deadlines or continuous past actions.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Precision tenses expressing completed future deadlines or continuous past actions.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-11",
        "type": "multiple-choice",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Advanced Tenses (Future Perfect, Past & Future Continuous)?",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Advanced Tenses (Future Perfect, Past & Future Continuous).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Advanced Tenses (Future Perfect, Past & Future Continuous).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-13",
        "type": "fill-in-blank",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-14",
        "type": "sentence-transformation",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-15",
        "type": "timed-challenge",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-16",
        "type": "clause-identification",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-17",
        "type": "connector-selection",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-18",
        "type": "yds-cloze",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Advanced Tenses (Future Perfect, Past & Future Continuous), which order is syntactically standard?",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-20",
        "type": "yds-style-question",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-21",
        "type": "contextual-grammar",
        "prompt": "[Advanced Tenses (Future Perfect, Past & Future Continuous)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-tenses-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Advanced Tenses (Future Perfect, Past & Future Continuous): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "İleri Düzey Zamanlar (Tamamlanmışlık ve Süreç) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "YDS"
      }
    ]
  },
  {
    "id": "inversion",
    "title": "Inversion (Devrik Cümle Yapıları)",
    "titleTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim)",
    "category": "YDS",
    "order": 24,
    "intro": {
      "overview": "Inverting subject and auxiliary verb after negative or restrictive adverbials.",
      "overviewTr": "Olumsuz veya sınırlayıcı zarflardan sonra özne ve yardımcı fiilin yer değiştirmesi.",
      "whatIsIt": "High-difficulty YDS syntax test indicating formal academic mastery.",
      "whatIsItTr": "İleri düzey akademik yetkinliği ölçen zorlu YDS soru kalıbıdır.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[NEGATIVE ADVERB] + [AUXILIARY] + [SUBJECT] + [MAIN VERB]",
      "formulaNegative": "Seldom does a candidate demonstrate such technical fluency.",
      "formulaQuestion": "Never in history have organizations evolved so rapidly.",
      "formulaShortAnswers": "Not only did she achieve top marks, but she also mentored her peers.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "seldom",
        "rarely",
        "scarcely",
        "hardly",
        "not only... but also",
        "under no circumstances"
      ],
      "explanationEn": "Inversion triggers.",
      "explanationTr": "Devriklik tetikleyicileri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Inversion (Devrik Cümle Yapıları) organizes meaning in professional contexts.",
      "descriptionTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Inversion (Devrik Cümle Yapıları) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Inversion -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "inversion-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "inversion-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Inversion (Devrik Cümle Yapıları) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Inversion (Devrik Cümle Yapıları).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Devrik Cümleler (Vurgulu ve Akademik Dizilim) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "inversion-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Inversion (Devrik Cümle Yapıları) in a business context?",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Inversion (Devrik Cümle Yapıları).",
        "explanationTr": "A seçeneği Devrik Cümleler (Vurgulu ve Akademik Dizilim) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Inversion (Devrik Cümle Yapıları).",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-3",
        "type": "fill-in-blank",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Inversion (Devrik Cümle Yapıları) in corporate and academic English?",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 4",
        "options": [
          "Inverting subject and auxiliary verb after negative or restrictive adverbials.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Inverting subject and auxiliary verb after negative or restrictive adverbials.",
        "explanationEn": "As defined, Inversion (Devrik Cümle Yapıları) serves primarily to high-difficulty yds syntax test indicating formal academic mastery.",
        "explanationTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim), temel olarak i̇leri düzey akademik yetkinliği ölçen zorlu yds soru kalıbıdır. amacıyla kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Inversion (Devrik Cümle Yapıları) in YDS questions?",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 5",
        "options": [
          "seldom",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "seldom",
        "explanationEn": "'seldom' is a hallmark signal indicator for Inversion (Devrik Cümle Yapıları).",
        "explanationTr": "'seldom' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Inversion (Devrik Cümle Yapıları) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-7",
        "type": "yds-style-question",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Inversion (Devrik Cümle Yapıları):",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 8",
        "options": [
          "Never in history have organizations evolved so rapidly.",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Never in history have organizations evolved so rapidly.",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-9",
        "type": "sentence-completion",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-10",
        "type": "translation-match",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] Which option accurately translates: 'Olumsuz veya sınırlayıcı zarflardan sonra özne ve yardımcı fiilin yer değiştirmesi.'?",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 10",
        "options": [
          "Inverting subject and auxiliary verb after negative or restrictive adverbials.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Inverting subject and auxiliary verb after negative or restrictive adverbials.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-11",
        "type": "multiple-choice",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Inversion (Devrik Cümle Yapıları)?",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Inversion (Devrik Cümle Yapıları).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Inversion (Devrik Cümle Yapıları).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-13",
        "type": "fill-in-blank",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-14",
        "type": "sentence-transformation",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-15",
        "type": "timed-challenge",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-16",
        "type": "clause-identification",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-17",
        "type": "connector-selection",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-18",
        "type": "yds-cloze",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Inversion (Devrik Cümle Yapıları), which order is syntactically standard?",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-20",
        "type": "yds-style-question",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-21",
        "type": "contextual-grammar",
        "prompt": "[Inversion (Devrik Cümle Yapıları)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "YDS"
      },
      {
        "id": "inversion-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Inversion (Devrik Cümle Yapıları): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Devrik Cümleler (Vurgulu ve Akademik Dizilim) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "YDS"
      }
    ]
  },
  {
    "id": "participles",
    "title": "Participle Clauses (-ing, -ed, Having + V3)",
    "titleTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama)",
    "category": "YDS",
    "order": 25,
    "intro": {
      "overview": "Replaces subordinate clauses with concise participial phrases for academic elegance.",
      "overviewTr": "Yan cümleleri -ing veya having + V3 ile kısaltarak akademik zarafet katar.",
      "whatIsIt": "Fundamental for navigating dense academic research abstracts on YDS.",
      "whatIsItTr": "YDS'de yoğun akademik araştırma özetlerini anlamak için temeldir.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[HAVING + V3 / VERB-ing], [MAIN CLAUSE]",
      "formulaNegative": "Having finalized the budget, the director approved the hires.",
      "formulaQuestion": "Driven by market demand, the firm expanded into global territories.",
      "formulaShortAnswers": "Seen from this angle, the project presents minimal risk.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "having done",
        "realizing that",
        "conducted by",
        "compared to"
      ],
      "explanationEn": "Participle heads.",
      "explanationTr": "Ortaç kısaltma başlangıçları."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Participle Clauses (-ing, -ed, Having + V3) organizes meaning in professional contexts.",
      "descriptionTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Participle Clauses (-ing, -ed, Having + V3) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Participle -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "participles-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "participles-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Participle Clauses (-ing, -ed, Having + V3) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Participle Clauses (-ing, -ed, Having + V3).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "participles-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Participle Clauses (-ing, -ed, Having + V3) in a business context?",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Participle Clauses (-ing, -ed, Having + V3).",
        "explanationTr": "A seçeneği Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Participle Clauses (-ing, -ed, Having + V3).",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-3",
        "type": "fill-in-blank",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Participle Clauses (-ing, -ed, Having + V3) in corporate and academic English?",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 4",
        "options": [
          "Replaces subordinate clauses with concise participial phrases for academic elegance.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Replaces subordinate clauses with concise participial phrases for academic elegance.",
        "explanationEn": "As defined, Participle Clauses (-ing, -ed, Having + V3) serves primarily to fundamental for navigating dense academic research abstracts on yds.",
        "explanationTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama), temel olarak yds'de yoğun akademik araştırma özetlerini anlamak için temeldir. amacıyla kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Participle Clauses (-ing, -ed, Having + V3) in YDS questions?",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 5",
        "options": [
          "having done",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "having done",
        "explanationEn": "'having done' is a hallmark signal indicator for Participle Clauses (-ing, -ed, Having + V3).",
        "explanationTr": "'having done' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Participle Clauses (-ing, -ed, Having + V3) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-7",
        "type": "yds-style-question",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Participle Clauses (-ing, -ed, Having + V3):",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 8",
        "options": [
          "Driven by market demand, the firm expanded into global territories.",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Driven by market demand, the firm expanded into global territories.",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-9",
        "type": "sentence-completion",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-10",
        "type": "translation-match",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] Which option accurately translates: 'Yan cümleleri -ing veya having + V3 ile kısaltarak akademik zarafet katar.'?",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 10",
        "options": [
          "Replaces subordinate clauses with concise participial phrases for academic elegance.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Replaces subordinate clauses with concise participial phrases for academic elegance.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-11",
        "type": "multiple-choice",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Participle Clauses (-ing, -ed, Having + V3)?",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Participle Clauses (-ing, -ed, Having + V3).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Participle Clauses (-ing, -ed, Having + V3).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-13",
        "type": "fill-in-blank",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-14",
        "type": "sentence-transformation",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-15",
        "type": "timed-challenge",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-16",
        "type": "clause-identification",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-17",
        "type": "connector-selection",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-18",
        "type": "yds-cloze",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Participle Clauses (-ing, -ed, Having + V3), which order is syntactically standard?",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-20",
        "type": "yds-style-question",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-21",
        "type": "contextual-grammar",
        "prompt": "[Participle Clauses (-ing, -ed, Having + V3)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "YDS"
      },
      {
        "id": "participles-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Participle Clauses (-ing, -ed, Having + V3): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Ortaç Cümlecikleri (Kısaltma ve Eylem Bağlama) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "YDS"
      }
    ]
  },
  {
    "id": "reduced-clauses",
    "title": "Reduced Clauses (Relative & Adverbial Reductions)",
    "titleTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları)",
    "category": "YDS",
    "order": 26,
    "intro": {
      "overview": "Eliminating relative pronouns and forms of 'be' to condense information.",
      "overviewTr": "İlgi zamirlerini ve 'be' fiilini atarak cümleyi yoğunlaştırma tekniğidir.",
      "whatIsIt": "Active participle (-ing) vs Passive participle (V3) is tested in every YDS.",
      "whatIsItTr": "Etken (-ing) ve edilgen (V3) kısaltma farkı her YDS sınavında sorulur.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[NOUN] + [V3 (passive) / V-ing (active)]",
      "formulaNegative": "The proposals submitted by the deadline were evaluated.",
      "formulaQuestion": "The research team investigating the anomaly published their report.",
      "formulaShortAnswers": "Goods imported from abroad are subject to inspection.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "submitted by",
        "concerning",
        "located in",
        "resulting from"
      ],
      "explanationEn": "Reduction markers.",
      "explanationTr": "Kısaltma yapıları."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Reduced Clauses (Relative & Adverbial Reductions) organizes meaning in professional contexts.",
      "descriptionTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Reduced Clauses (Relative & Adverbial Reductions) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Reduced -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "reduced-clauses-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "reduced-clauses-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Reduced Clauses (Relative & Adverbial Reductions) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Reduced Clauses (Relative & Adverbial Reductions).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "reduced-clauses-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Reduced Clauses (Relative & Adverbial Reductions) in a business context?",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Reduced Clauses (Relative & Adverbial Reductions).",
        "explanationTr": "A seçeneği Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Reduced Clauses (Relative & Adverbial Reductions).",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-3",
        "type": "fill-in-blank",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Reduced Clauses (Relative & Adverbial Reductions) in corporate and academic English?",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 4",
        "options": [
          "Eliminating relative pronouns and forms of 'be' to condense information.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Eliminating relative pronouns and forms of 'be' to condense information.",
        "explanationEn": "As defined, Reduced Clauses (Relative & Adverbial Reductions) serves primarily to active participle (-ing) vs passive participle (v3) is tested in every yds.",
        "explanationTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları), temel olarak etken (-ing) ve edilgen (v3) kısaltma farkı her yds sınavında sorulur. amacıyla kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Reduced Clauses (Relative & Adverbial Reductions) in YDS questions?",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 5",
        "options": [
          "submitted by",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "submitted by",
        "explanationEn": "'submitted by' is a hallmark signal indicator for Reduced Clauses (Relative & Adverbial Reductions).",
        "explanationTr": "'submitted by' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Reduced Clauses (Relative & Adverbial Reductions) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-7",
        "type": "yds-style-question",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Reduced Clauses (Relative & Adverbial Reductions):",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 8",
        "options": [
          "The research team investigating the anomaly published their report.",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "The research team investigating the anomaly published their report.",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-9",
        "type": "sentence-completion",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-10",
        "type": "translation-match",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] Which option accurately translates: 'İlgi zamirlerini ve 'be' fiilini atarak cümleyi yoğunlaştırma tekniğidir.'?",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 10",
        "options": [
          "Eliminating relative pronouns and forms of 'be' to condense information.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Eliminating relative pronouns and forms of 'be' to condense information.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-11",
        "type": "multiple-choice",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Reduced Clauses (Relative & Adverbial Reductions)?",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Reduced Clauses (Relative & Adverbial Reductions).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Reduced Clauses (Relative & Adverbial Reductions).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-13",
        "type": "fill-in-blank",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-14",
        "type": "sentence-transformation",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-15",
        "type": "timed-challenge",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-16",
        "type": "clause-identification",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-17",
        "type": "connector-selection",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-18",
        "type": "yds-cloze",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Reduced Clauses (Relative & Adverbial Reductions), which order is syntactically standard?",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-20",
        "type": "yds-style-question",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-21",
        "type": "contextual-grammar",
        "prompt": "[Reduced Clauses (Relative & Adverbial Reductions)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "YDS"
      },
      {
        "id": "reduced-clauses-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Reduced Clauses (Relative & Adverbial Reductions): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Kısaltılmış Cümlecikler (Sıfat ve Zarf Kısaltmaları) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "YDS"
      }
    ]
  },
  {
    "id": "advanced-connectors",
    "title": "Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)",
    "titleTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler)",
    "category": "YDS",
    "order": 27,
    "intro": {
      "overview": "Sophisticated conjunctions used in high-level scholarly papers and legal texts.",
      "overviewTr": "Üst düzey bilimsel makalelerde ve hukuki metinlerde kullanılan seçkin bağlaçlar.",
      "whatIsIt": "Guaranteed differentiator for learners aiming for 80+ scores on YDS.",
      "whatIsItTr": "YDS'de 80 ve üzeri puan hedefleyen öğrenciler için belirleyici soru grubudur.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[NOTWITHSTANDING + NOUN / INASMUCH AS + CLAUSE], [MAIN CLAUSE]",
      "formulaNegative": "Notwithstanding the economic downturn, our division expanded operations.",
      "formulaQuestion": "He agreed with the proposal, albeit with minor reservations.",
      "formulaShortAnswers": "Inasmuch as public health is paramount, regulations were strictly enforced.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "notwithstanding",
        "inasmuch as",
        "albeit",
        "in spite of",
        "provided that"
      ],
      "explanationEn": "Scholarly connectors.",
      "explanationTr": "Akademik bağlaç dağarcığı."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Advanced Connectors (Notwithstanding, Inasmuch as, Albeit) organizes meaning in professional contexts.",
      "descriptionTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Advanced Connectors (Notwithstanding, Inasmuch as, Albeit) to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Advanced -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "advanced-connectors-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "advanced-connectors-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Advanced Connectors (Notwithstanding, Inasmuch as, Albeit) by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Advanced Connectors (Notwithstanding, Inasmuch as, Albeit).",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "advanced-connectors-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Advanced Connectors (Notwithstanding, Inasmuch as, Albeit) in a business context?",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Advanced Connectors (Notwithstanding, Inasmuch as, Albeit).",
        "explanationTr": "A seçeneği İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Advanced Connectors (Notwithstanding, Inasmuch as, Albeit).",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-3",
        "type": "fill-in-blank",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Advanced Connectors (Notwithstanding, Inasmuch as, Albeit) in corporate and academic English?",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 4",
        "options": [
          "Sophisticated conjunctions used in high-level scholarly papers and legal texts.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Sophisticated conjunctions used in high-level scholarly papers and legal texts.",
        "explanationEn": "As defined, Advanced Connectors (Notwithstanding, Inasmuch as, Albeit) serves primarily to guaranteed differentiator for learners aiming for 80+ scores on yds.",
        "explanationTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler), temel olarak yds'de 80 ve üzeri puan hedefleyen öğrenciler için belirleyici soru grubudur. amacıyla kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Advanced Connectors (Notwithstanding, Inasmuch as, Albeit) in YDS questions?",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 5",
        "options": [
          "notwithstanding",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "notwithstanding",
        "explanationEn": "'notwithstanding' is a hallmark signal indicator for Advanced Connectors (Notwithstanding, Inasmuch as, Albeit).",
        "explanationTr": "'notwithstanding' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Advanced Connectors (Notwithstanding, Inasmuch as, Albeit) follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-7",
        "type": "yds-style-question",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Advanced Connectors (Notwithstanding, Inasmuch as, Albeit):",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 8",
        "options": [
          "He agreed with the proposal, albeit with minor reservations.",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "He agreed with the proposal, albeit with minor reservations.",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-9",
        "type": "sentence-completion",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-10",
        "type": "translation-match",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] Which option accurately translates: 'Üst düzey bilimsel makalelerde ve hukuki metinlerde kullanılan seçkin bağlaçlar.'?",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 10",
        "options": [
          "Sophisticated conjunctions used in high-level scholarly papers and legal texts.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Sophisticated conjunctions used in high-level scholarly papers and legal texts.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-11",
        "type": "multiple-choice",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)?",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Advanced Connectors (Notwithstanding, Inasmuch as, Albeit).",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Advanced Connectors (Notwithstanding, Inasmuch as, Albeit).",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-13",
        "type": "fill-in-blank",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-14",
        "type": "sentence-transformation",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-15",
        "type": "timed-challenge",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-16",
        "type": "clause-identification",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-17",
        "type": "connector-selection",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-18",
        "type": "yds-cloze",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Advanced Connectors (Notwithstanding, Inasmuch as, Albeit), which order is syntactically standard?",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-20",
        "type": "yds-style-question",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-21",
        "type": "contextual-grammar",
        "prompt": "[Advanced Connectors (Notwithstanding, Inasmuch as, Albeit)] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "YDS"
      },
      {
        "id": "advanced-connectors-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Advanced Connectors (Notwithstanding, Inasmuch as, Albeit): What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "İleri Düzey Bağlaçlar (Akademik ve Resmi İfadeler) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "YDS"
      }
    ]
  },
  {
    "id": "sentence-completion",
    "title": "Sentence Completion Strategies",
    "titleTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı)",
    "category": "YDS",
    "order": 28,
    "intro": {
      "overview": "Techniques for identifying cause-effect, contrast, or condition to complete sentences.",
      "overviewTr": "Sebep-sonuç, zıtlık veya koşul ilişkisini analiz ederek yarım cümleyi tamamlama.",
      "whatIsIt": "Forms a 10-question high-weight block in the official YDS examination.",
      "whatIsItTr": "Resmi YDS sınavında 10 soruluk yüksek ağırlıklı bir blok oluşturur.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[CLAUSE WITH ADVERBIAL CLUE] + [LOGICALLY MATCHING INDEPENDENT CLAUSE]",
      "formulaNegative": "Although the initial trials appeared discouraging, subsequent tests yielded breakthrough data.",
      "formulaQuestion": "Because recruitment criteria were tightened, fewer applicants qualified.",
      "formulaShortAnswers": "In order to minimize turnover, management implemented flexible working hours.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "although",
        "whereas",
        "so that",
        "since",
        "even if"
      ],
      "explanationEn": "Logical alignment markers.",
      "explanationTr": "Mantık zinciri ipuçları."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Sentence Completion Strategies organizes meaning in professional contexts.",
      "descriptionTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Sentence Completion Strategies to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Sentence -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "sentence-completion-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "sentence-completion-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Sentence Completion Strategies by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Sentence Completion Strategies.",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "sentence-completion-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Sentence Completion Strategies in a business context?",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Sentence Completion Strategies.",
        "explanationTr": "A seçeneği Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Sentence Completion Strategies.",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-3",
        "type": "fill-in-blank",
        "prompt": "[Sentence Completion Strategies] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Sentence Completion Strategies in corporate and academic English?",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 4",
        "options": [
          "Techniques for identifying cause-effect, contrast, or condition to complete sentences.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Techniques for identifying cause-effect, contrast, or condition to complete sentences.",
        "explanationEn": "As defined, Sentence Completion Strategies serves primarily to forms a 10-question high-weight block in the official yds examination.",
        "explanationTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı), temel olarak resmi yds sınavında 10 soruluk yüksek ağırlıklı bir blok oluşturur. amacıyla kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Sentence Completion Strategies in YDS questions?",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 5",
        "options": [
          "although",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "although",
        "explanationEn": "'although' is a hallmark signal indicator for Sentence Completion Strategies.",
        "explanationTr": "'although' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Sentence Completion Strategies follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-7",
        "type": "yds-style-question",
        "prompt": "[Sentence Completion Strategies] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Sentence Completion Strategies:",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 8",
        "options": [
          "Because recruitment criteria were tightened, fewer applicants qualified.",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Because recruitment criteria were tightened, fewer applicants qualified.",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-9",
        "type": "sentence-completion",
        "prompt": "[Sentence Completion Strategies] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-10",
        "type": "translation-match",
        "prompt": "[Sentence Completion Strategies] Which option accurately translates: 'Sebep-sonuç, zıtlık veya koşul ilişkisini analiz ederek yarım cümleyi tamamlama.'?",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 10",
        "options": [
          "Techniques for identifying cause-effect, contrast, or condition to complete sentences.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Techniques for identifying cause-effect, contrast, or condition to complete sentences.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-11",
        "type": "multiple-choice",
        "prompt": "[Sentence Completion Strategies] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Sentence Completion Strategies?",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Sentence Completion Strategies.",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Sentence Completion Strategies.",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-13",
        "type": "fill-in-blank",
        "prompt": "[Sentence Completion Strategies] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-14",
        "type": "sentence-transformation",
        "prompt": "[Sentence Completion Strategies] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-15",
        "type": "timed-challenge",
        "prompt": "[Sentence Completion Strategies] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-16",
        "type": "clause-identification",
        "prompt": "[Sentence Completion Strategies] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-17",
        "type": "connector-selection",
        "prompt": "[Sentence Completion Strategies] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-18",
        "type": "yds-cloze",
        "prompt": "[Sentence Completion Strategies] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Sentence Completion Strategies, which order is syntactically standard?",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-20",
        "type": "yds-style-question",
        "prompt": "[Sentence Completion Strategies] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-21",
        "type": "contextual-grammar",
        "prompt": "[Sentence Completion Strategies] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "YDS"
      },
      {
        "id": "sentence-completion-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Sentence Completion Strategies: What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Cümle Tamamlama Stratejileri (YDS Soru Çözüm Mantığı) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "YDS"
      }
    ]
  },
  {
    "id": "cloze-grammar",
    "title": "Cloze Test Grammar Integration",
    "titleTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma)",
    "category": "YDS",
    "order": 29,
    "intro": {
      "overview": "Cohesive textual analysis testing tenses, prepositions, connectors in paragraph flow.",
      "overviewTr": "Paragraf akışı içinde zaman, edat ve bağlaçları bağlamsal olarak test eden format.",
      "whatIsIt": "Tests reading stamina combined with rapid grammatical decision-making.",
      "whatIsItTr": "Okuma dayanıklılığı ile hızlı dilbilgisi refleksini birleştiren YDS formatıdır.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[COHESIVE PARAGRAPH PASSAGE] WITH 5 EMBEDDED GRAMMATICAL TARGETS",
      "formulaNegative": "The study was undertaken to evaluate workforce resilience...",
      "formulaQuestion": "Not only were employees surveyed, but executive leaders were also interviewed.",
      "formulaShortAnswers": "Consequently, organizational agility proved to be the single most reliable predictor.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "in addition",
        "such as",
        "due to",
        "whereas",
        "thereby"
      ],
      "explanationEn": "Paragraph coherence markers.",
      "explanationTr": "Metin bütünlüğü işaretçileri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Cloze Test Grammar Integration organizes meaning in professional contexts.",
      "descriptionTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Cloze Test Grammar Integration to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Cloze -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "cloze-grammar-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "cloze-grammar-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Cloze Test Grammar Integration by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Cloze Test Grammar Integration.",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "cloze-grammar-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Cloze Test Grammar Integration in a business context?",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Cloze Test Grammar Integration.",
        "explanationTr": "A seçeneği Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Cloze Test Grammar Integration.",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-3",
        "type": "fill-in-blank",
        "prompt": "[Cloze Test Grammar Integration] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Cloze Test Grammar Integration in corporate and academic English?",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 4",
        "options": [
          "Cohesive textual analysis testing tenses, prepositions, connectors in paragraph flow.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Cohesive textual analysis testing tenses, prepositions, connectors in paragraph flow.",
        "explanationEn": "As defined, Cloze Test Grammar Integration serves primarily to tests reading stamina combined with rapid grammatical decision-making.",
        "explanationTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma), temel olarak okuma dayanıklılığı ile hızlı dilbilgisi refleksini birleştiren yds formatıdır. amacıyla kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Cloze Test Grammar Integration in YDS questions?",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 5",
        "options": [
          "in addition",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "in addition",
        "explanationEn": "'in addition' is a hallmark signal indicator for Cloze Test Grammar Integration.",
        "explanationTr": "'in addition' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Cloze Test Grammar Integration follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-7",
        "type": "yds-style-question",
        "prompt": "[Cloze Test Grammar Integration] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Cloze Test Grammar Integration:",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 8",
        "options": [
          "Not only were employees surveyed, but executive leaders were also interviewed.",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Not only were employees surveyed, but executive leaders were also interviewed.",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-9",
        "type": "sentence-completion",
        "prompt": "[Cloze Test Grammar Integration] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-10",
        "type": "translation-match",
        "prompt": "[Cloze Test Grammar Integration] Which option accurately translates: 'Paragraf akışı içinde zaman, edat ve bağlaçları bağlamsal olarak test eden format.'?",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 10",
        "options": [
          "Cohesive textual analysis testing tenses, prepositions, connectors in paragraph flow.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Cohesive textual analysis testing tenses, prepositions, connectors in paragraph flow.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-11",
        "type": "multiple-choice",
        "prompt": "[Cloze Test Grammar Integration] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Cloze Test Grammar Integration?",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Cloze Test Grammar Integration.",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Cloze Test Grammar Integration.",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-13",
        "type": "fill-in-blank",
        "prompt": "[Cloze Test Grammar Integration] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-14",
        "type": "sentence-transformation",
        "prompt": "[Cloze Test Grammar Integration] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-15",
        "type": "timed-challenge",
        "prompt": "[Cloze Test Grammar Integration] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-16",
        "type": "clause-identification",
        "prompt": "[Cloze Test Grammar Integration] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-17",
        "type": "connector-selection",
        "prompt": "[Cloze Test Grammar Integration] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-18",
        "type": "yds-cloze",
        "prompt": "[Cloze Test Grammar Integration] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Cloze Test Grammar Integration, which order is syntactically standard?",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-20",
        "type": "yds-style-question",
        "prompt": "[Cloze Test Grammar Integration] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-21",
        "type": "contextual-grammar",
        "prompt": "[Cloze Test Grammar Integration] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "YDS"
      },
      {
        "id": "cloze-grammar-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Cloze Test Grammar Integration: What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Cloze Test Gramer Entegrasyonu (Paragraf İçi Boşluk Doldurma) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "YDS"
      }
    ]
  },
  {
    "id": "mixed-yds-grammar",
    "title": "Mixed YDS Grammar Challenge",
    "titleTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu)",
    "category": "YDS",
    "order": 30,
    "intro": {
      "overview": "Full-spectrum synthesis of all 30 topics under realistic YDS conditions.",
      "overviewTr": "Tüm 30 konunun gerçek YDS koşullarında kapsamlı bir sentezi ve provası.",
      "whatIsIt": "Consolidates pattern recognition and cognitive confidence before exam day.",
      "whatIsItTr": "Sınav günü öncesinde örüntü tanıma refleksini ve zihinsel özgüveni pekiştirir.",
      "whyUseIt": "Used extensively in academic writing and career communications to ensure clarity.",
      "whyUseItTr": "Akademik ve kurumsal dilde netlik ve profesyonellik sağlamak için yoğun olarak kullanılır."
    },
    "structure": {
      "formulaPositive": "[SYNTACTICALLY COMPLEX EXAM QUESTION COVERING MULTIPLE GRAMMAR DOMAINS]",
      "formulaNegative": "Had the government taken timely measures, the economic inflation could have been curbed.",
      "formulaQuestion": "Rarely do international organizations intervene without international consensus.",
      "formulaShortAnswers": "The innovative methodology, developed over two decades, is now widely accepted.",
      "sentenceBlocksPositive": [
        {
          "role": "SUBJECT",
          "text": "The executive board",
          "textTr": "Yönetim kurulu",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "has",
          "textTr": "[yardımcı fiil]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "VERB",
          "text": "approved",
          "textTr": "onayladı",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the new recruitment policy",
          "textTr": "yeni işe alım politikasını",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        },
        {
          "role": "ADVERBIAL",
          "text": "unanimously",
          "textTr": "oy birliğiyle",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        }
      ],
      "sentenceBlocksNegative": [
        {
          "role": "SUBJECT",
          "text": "The candidate",
          "textTr": "Aday",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "AUXILIARY",
          "text": "does not",
          "textTr": "[olumsuzluk eki]",
          "colorClass": "bg-rose-500/20 text-rose-300 border-rose-500/40"
        },
        {
          "role": "VERB",
          "text": "meet",
          "textTr": "karşılamıyor",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the language prerequisite",
          "textTr": "dil ön koşulunu",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ],
      "sentenceBlocksQuestion": [
        {
          "role": "AUXILIARY",
          "text": "Does",
          "textTr": "[soru eki]",
          "colorClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
        },
        {
          "role": "SUBJECT",
          "text": "the applicant",
          "textTr": "başvuru sahibi",
          "colorClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
        },
        {
          "role": "VERB",
          "text": "possess",
          "textTr": "sahip mi",
          "colorClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
        },
        {
          "role": "OBJECT",
          "text": "the necessary certifications?",
          "textTr": "gerekli sertifikalara?",
          "colorClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
        }
      ]
    },
    "signalWords": {
      "words": [
        "had... V3",
        "hardly... when",
        "despite",
        "as though",
        "no sooner... than"
      ],
      "explanationEn": "YDS mastery triggers.",
      "explanationTr": "YDS üstün başarı tetikleyicileri."
    },
    "examplesWithVocab": [
      {
        "sentence": "The human resources manager has already completed the annual workforce performance appraisal.",
        "sentenceTr": "İnsan kaynakları yöneticisi yıllık iş gücü performans değerlendirmesini çoktan tamamladı.",
        "vocabulary": [
          {
            "word": "human resources",
            "meaningTr": "insan kaynakları",
            "partOfSpeech": "noun"
          },
          {
            "word": "appraisal",
            "meaningTr": "değerlendirme / takdir",
            "partOfSpeech": "noun"
          },
          {
            "word": "already",
            "meaningTr": "çoktan / zaten",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Employees who consistently demonstrate strategic leadership are promoted efficiently.",
        "sentenceTr": "İstikrarlı şekilde stratejik liderlik sergileyen çalışanlar verimli biçimde terfi ettirilir.",
        "vocabulary": [
          {
            "word": "consistently",
            "meaningTr": "istikrarlı olarak",
            "partOfSpeech": "adverb"
          },
          {
            "word": "demonstrate",
            "meaningTr": "göstermek / kanıtlamak",
            "partOfSpeech": "verb"
          },
          {
            "word": "efficiently",
            "meaningTr": "verimli bir şekilde",
            "partOfSpeech": "adverb"
          }
        ]
      },
      {
        "sentence": "Although negotiations were demanding, both parties reached a mutually beneficial agreement.",
        "sentenceTr": "Müzakereler zorlu olmasına rağmen her iki taraf da karşılıklı yarar sağlayan bir anlaşmaya vardı.",
        "vocabulary": [
          {
            "word": "negotiations",
            "meaningTr": "müzakereler / görüşmeler",
            "partOfSpeech": "noun"
          },
          {
            "word": "demanding",
            "meaningTr": "zorlu / talepkar",
            "partOfSpeech": "adjective"
          },
          {
            "word": "mutually",
            "meaningTr": "karşılıklı olarak",
            "partOfSpeech": "adverb"
          }
        ]
      }
    ],
    "visualExplanation": {
      "diagramType": "cause-effect",
      "descriptionEn": "Visual conceptual roadmap delineating how Mixed YDS Grammar Challenge organizes meaning in professional contexts.",
      "descriptionTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) yapısının zaman ve mantık akışını somutlaştıran görsel şema.",
      "visualData": {
        "past": "Historical baseline",
        "now": "Current operational state",
        "future": "Projected outcome",
        "marker": "Active focus point"
      }
    },
    "commonMistakes": [
      {
        "incorrect": "She don't agree with the proposed strategic timeline.",
        "correct": "She doesn't agree with the proposed strategic timeline.",
        "explanationEn": "With third-person singular subjects (he/she/it), standard negative syntax requires 'doesn't', never 'don't'.",
        "explanationTr": "'She/he/it' özneleriyle olumsuz cümlede 'don't' değil 'doesn't' kullanılır."
      },
      {
        "incorrect": "The management has launched the project yesterday.",
        "correct": "The management launched the project yesterday.",
        "explanationEn": "Definite past time markers such as 'yesterday' dictate Past Simple, not Present Perfect.",
        "explanationTr": "'Yesterday' gibi geçmişi kesin belirten zarflarla Present Perfect değil Past Simple kullanılır."
      }
    ],
    "memoryTricks": [
      {
        "trickEn": "Anchor Mixed YDS Grammar Challenge to real career goals: picture yourself presenting this structure in an international HR summit.",
        "trickTr": "Bu yapıyı uluslararası bir toplantıda rapor sunarken kullandığınızı hayal edin.",
        "mnemonicPhrase": "Mixed -> Professional Precision"
      },
      {
        "trickEn": "Spot the signal word first before reading the entire paragraph.",
        "trickTr": "Tüm paragrafı okumadan önce cümlenin zaman veya mantık sinyal kelimesini yakalayın."
      }
    ],
    "microPractices": [
      {
        "id": "mixed-yds-grammar-micro-1",
        "question": "Quick check: Which verb form completes the sentence: 'The director _____ the candidates yesterday'?",
        "options": [
          "interviewed",
          "interviews",
          "has interviewed"
        ],
        "correctAnswer": "interviewed",
        "feedbackEn": "Excellent! 'Yesterday' requires Past Simple.",
        "feedbackTr": "Harika! 'Yesterday' belirli bir geçmiş zaman zarfı olduğu için Past Simple (V2) gerektirir."
      },
      {
        "id": "mixed-yds-grammar-micro-2",
        "question": "Quick check: 'Neither the manager nor the coordinators _____ present.'",
        "options": [
          "were",
          "was",
          "is"
        ],
        "correctAnswer": "were",
        "feedbackEn": "Correct! With 'neither... nor', the verb agrees with the closer subject ('coordinators' -> were).",
        "feedbackTr": "Tebrikler! 'Neither... nor' yapısında fiil kendisine en yakın olan özneye uyar ('coordinators' -> were)."
      }
    ],
    "ydsConnection": {
      "importance": "High frequency in YDS Grammar (Q1-16), Cloze Test (Q17-26), and Sentence Completion (Q27-36).",
      "examQuestionType": "Sentence Completion & Cloze Test",
      "ydsStrategyEn": "In YDS, examiners test Mixed YDS Grammar Challenge by embedding long subordinate clauses between the subject and verb to distract you.",
      "ydsStrategyTr": "YDS'de soru yazarları özne ile fiilin arasına uzun sıfat veya zarf cümlecikleri yerleştirerek kafanızı karıştırmaya çalışır; daima ana çekirdeği bulun.",
      "typicalTrapEn": "Distractor options that match the tense of a neighboring relative clause rather than the main clause.",
      "typicalTrapTr": "Yan cümledeki zamana uyup ana cümlenin zamanını gözden kaçıran çeldirici seçenekler."
    },
    "finalReviewSummary": {
      "keyRules": [
        "Always identify the true subject and main verb in Mixed YDS Grammar Challenge.",
        "Watch out for signal adverbs that anchor time or contrast.",
        "Eliminate grammatically impossible options first during YDS questions."
      ],
      "keyRulesTr": [
        "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) konusunda daima cümlenin asıl öznesini ve yüklemini tespit edin.",
        "Zamanı veya mantığı sabitleyen sinyal zarflarına dikkat edin.",
        "YDS'de gramer kurallarına uymayan seçenekleri ilk saniyede eleyin."
      ]
    },
    "activities": [
      {
        "id": "mixed-yds-grammar-act-1",
        "type": "multiple-choice",
        "prompt": "Which sentence demonstrates the standard positive form of Mixed YDS Grammar Challenge in a business context?",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 1",
        "options": [
          "The executive team operates in alignment with this grammatical principle.",
          "The executive team operate in alignment with this grammatical principle yesterday.",
          "The executive team will operating without guidance.",
          "The executive team does operating incorrectly."
        ],
        "correctAnswer": "The executive team operates in alignment with this grammatical principle.",
        "explanationEn": "Option A properly illustrates the affirmative structure of Mixed YDS Grammar Challenge.",
        "explanationTr": "A seçeneği Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) konusunun olumlu kurumsal cümle yapısını doğru uygular.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-2",
        "type": "error-correction",
        "prompt": "Identify the sentence containing a grammatical error regarding Mixed YDS Grammar Challenge.",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 2",
        "options": [
          "She don't understand the strategic implications of the merger.",
          "She does not understand the strategic implications of the merger.",
          "The department maintains accurate records every quarter.",
          "They regularly review internal audit procedures."
        ],
        "correctAnswer": "She don't understand the strategic implications of the merger.",
        "explanationEn": "Third-person singular requires 'doesn't' rather than 'don't' in standard English.",
        "explanationTr": "Üçüncü tekil şahısla olumsuz cümlede 'don't' yerine 'doesn't' kullanılmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-3",
        "type": "fill-in-blank",
        "prompt": "[Mixed YDS Grammar Challenge] Complete the corporate statement: 'The new HR director _____ extensive changes across the department.'",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 3",
        "options": [
          "has implemented",
          "implementing",
          "have implement",
          "are implemented"
        ],
        "correctAnswer": "has implemented",
        "explanationEn": "Singular subject 'The new HR director' takes 'has' with the past participle.",
        "explanationTr": "Tekil özne 'The new HR director' ile 'has implemented' biçimi uyumludur.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-4",
        "type": "rule-identification",
        "prompt": "What is the communicative function of Mixed YDS Grammar Challenge in corporate and academic English?",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 4",
        "options": [
          "Full-spectrum synthesis of all 30 topics under realistic YDS conditions.",
          "To tell informal bedtime stories to children.",
          "To replace all verbs with prepositions.",
          "To avoid using punctuation in formal essays."
        ],
        "correctAnswer": "Full-spectrum synthesis of all 30 topics under realistic YDS conditions.",
        "explanationEn": "As defined, Mixed YDS Grammar Challenge serves primarily to consolidates pattern recognition and cognitive confidence before exam day.",
        "explanationTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu), temel olarak sınav günü öncesinde örüntü tanıma refleksini ve zihinsel özgüveni pekiştirir. amacıyla kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-5",
        "type": "contextual-grammar",
        "prompt": "Which signal word is most strongly associated with Mixed YDS Grammar Challenge in YDS questions?",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 5",
        "options": [
          "had... V3",
          "unrelatedly",
          "yesteryear",
          "tomorrowland"
        ],
        "correctAnswer": "had... V3",
        "explanationEn": "'had... V3' is a hallmark signal indicator for Mixed YDS Grammar Challenge.",
        "explanationTr": "'had... V3' kelimesi bu dilbilgisi yapısı için en belirgin zaman/durum sinyalidir.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-6",
        "type": "true-false",
        "prompt": "True or False: In formal academic English, Mixed YDS Grammar Challenge follows consistent syntactic rules without colloquial shortcuts.",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 6",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanationEn": "Standard academic English requires strict adherence to grammatical formulas.",
        "explanationTr": "Standart akademik İngilizce, kurallara tavizsiz bağlılık gerektirir.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-7",
        "type": "yds-style-question",
        "prompt": "[Mixed YDS Grammar Challenge] YDS Target: '_____ the economic uncertainty, the organization continued to recruit senior talent.'",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 7",
        "options": [
          "Notwithstanding",
          "Because",
          "In order to",
          "Whereas"
        ],
        "correctAnswer": "Notwithstanding",
        "explanationEn": "'Notwithstanding' functions as a preposition meaning 'despite', followed by a noun phrase.",
        "explanationTr": "'Notwithstanding', isim öbeğiyle kullanılan ve 'rağmen' anlamına gelen ileri düzey bir YDS bağlacıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-8",
        "type": "sentence-transformation",
        "prompt": "Choose the correct question form matching Mixed YDS Grammar Challenge:",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 8",
        "options": [
          "Rarely do international organizations intervene without international consensus.",
          "Why management approving the budget without review?",
          "Does they approved the budget?",
          "Did she approves the financial audit?"
        ],
        "correctAnswer": "Rarely do international organizations intervene without international consensus.",
        "explanationEn": "Proper auxiliary inversion is essential for standard interrogative sentences.",
        "explanationTr": "Soru yapısında yardımcı fiilin öznenin önüne gelmesi kuralı doğru uygulanmıştır.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-9",
        "type": "sentence-completion",
        "prompt": "[Mixed YDS Grammar Challenge] Sentence completion: 'While the preliminary assessment indicated high risk, _____.'",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 9",
        "options": [
          "subsequent analyses revealed substantial profitability.",
          "because profits were completely lost.",
          "so that we can study children's rhymes.",
          "unless the company had closed ten years earlier."
        ],
        "correctAnswer": "subsequent analyses revealed substantial profitability.",
        "explanationEn": "'While' sets up a contrast clause; the main clause must balance risk with an opposing positive outcome.",
        "explanationTr": "'While' zıtlık zarf cümlesi kurar; ana cümlede bu riski dengeleyen olumlu bir sonuç yer almalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-10",
        "type": "translation-match",
        "prompt": "[Mixed YDS Grammar Challenge] Which option accurately translates: 'Tüm 30 konunun gerçek YDS koşullarında kapsamlı bir sentezi ve provası.'?",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 10",
        "options": [
          "Full-spectrum synthesis of all 30 topics under realistic YDS conditions.",
          "A wrong translation without sense.",
          "Children play games outdoors.",
          "The exam was canceled."
        ],
        "correctAnswer": "Full-spectrum synthesis of all 30 topics under realistic YDS conditions.",
        "explanationEn": "Matches the formal academic translation accurately.",
        "explanationTr": "Türkçe ifadenin tam ve doğru akademik İngilizce karşılığıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-11",
        "type": "multiple-choice",
        "prompt": "[Mixed YDS Grammar Challenge] Select the sentence with impeccable subject-verb agreement:",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 11",
        "options": [
          "Each of the qualified applicants possesses extensive analytical experience.",
          "Each of the qualified applicants possess extensive analytical experience.",
          "Each of the qualified applicants possessing extensive experience.",
          "Each of the qualified applicants were possess experience."
        ],
        "correctAnswer": "Each of the qualified applicants possesses extensive analytical experience.",
        "explanationEn": "'Each of + plural noun' takes a singular verb ('possesses') in formal English.",
        "explanationTr": "'Each of' ifadesinden sonra çoğul isim gelse dahi fiil daima tekil ('possesses') olmalıdır.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-12",
        "type": "rule-identification",
        "prompt": "In YDS paragraph analysis, what is the primary structural role of Mixed YDS Grammar Challenge?",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 12",
        "options": [
          "To establish clarity and coherence regarding Mixed YDS Grammar Challenge.",
          "To distract the reader with irrelevant vocabulary.",
          "To create confusing and fragmented clauses.",
          "To avoid logical progression entirely."
        ],
        "correctAnswer": "To establish clarity and coherence regarding Mixed YDS Grammar Challenge.",
        "explanationEn": "Coherence and grammatical precision ensure logical academic progression.",
        "explanationTr": "Gramer netliği ve tutarlılık, akademik metinlerin mantıksal akışını sağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-13",
        "type": "fill-in-blank",
        "prompt": "[Mixed YDS Grammar Challenge] Fill in the blank with the appropriate preposition/particle: 'The firm's success depends largely _____ employee retention.'",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 13",
        "options": [
          "on",
          "at",
          "for",
          "with"
        ],
        "correctAnswer": "on",
        "explanationEn": "The verb 'depend' collocated with 'on' or 'upon'.",
        "explanationTr": "'Depend' fiili daima 'on' edatıyla birlikte kullanılır (depend on = -e bağlı olmak).",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-14",
        "type": "sentence-transformation",
        "prompt": "[Mixed YDS Grammar Challenge] Identify the passive transformation of: 'Management approved the comprehensive restructuring plan.'",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 14",
        "options": [
          "The comprehensive restructuring plan was approved by management.",
          "The comprehensive restructuring plan is approved by management yesterday.",
          "The comprehensive restructuring plan had approve by management.",
          "The comprehensive restructuring plan being approved."
        ],
        "correctAnswer": "The comprehensive restructuring plan was approved by management.",
        "explanationEn": "Past Simple passive requires 'was/were + past participle (approved)'.",
        "explanationTr": "Geçmiş zaman edilgen yapıda 'was/were + V3' kalıbı kullanılır.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-15",
        "type": "timed-challenge",
        "prompt": "[Mixed YDS Grammar Challenge] Timed Challenge: Spot the correct modal usage expressing logical deduction: 'The lights are off and the doors are locked; everyone _____ home.'",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 15",
        "options": [
          "must have gone",
          "should go yesterday",
          "can go tomorrow",
          "needn't to have gone"
        ],
        "correctAnswer": "must have gone",
        "explanationEn": "'Must have + V3' expresses a strong logical deduction about a past situation.",
        "explanationTr": "'Must have + V3' geçmişe yönelik kuvvetli bir mantıksal çıkarımı ('gitmiş olmalılar') ifade eder.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-16",
        "type": "clause-identification",
        "prompt": "[Mixed YDS Grammar Challenge] Which clause is a correctly structured relative clause defining the noun 'candidates'?",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 16",
        "options": [
          "who have demonstrated outstanding leadership competence",
          "which has cars and bikes",
          "whom they is working yesterday",
          "whose are very happy today"
        ],
        "correctAnswer": "who have demonstrated outstanding leadership competence",
        "explanationEn": "'Who' refers to people ('candidates') followed by a plural verb agreement.",
        "explanationTr": "'Who' insanları niteler ve çoğul özneye uygun fiille devam eder.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-17",
        "type": "connector-selection",
        "prompt": "[Mixed YDS Grammar Challenge] Select the connector that establishes a direct cause-and-effect relationship:",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 17",
        "options": [
          "Consequently",
          "Nevertheless",
          "On the other hand",
          "Albeit"
        ],
        "correctAnswer": "Consequently",
        "explanationEn": "'Consequently' signals an inevitable result or logical consequence.",
        "explanationTr": "'Consequently' (sonuç olarak), doğrudan bir sebep-sonuç ilişkisini bağlar.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-18",
        "type": "yds-cloze",
        "prompt": "[Mixed YDS Grammar Challenge] Cloze context: 'The organization implemented flexible schedules; _____, absenteeism dropped by 35%.'",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 18",
        "options": [
          "as a result",
          "in contrast",
          "otherwise",
          "nevertheless"
        ],
        "correctAnswer": "as a result",
        "explanationEn": "A drop in absenteeism is the direct positive result of flexible schedules.",
        "explanationTr": "Devamsızlığın düşmesi, esnek çalışma saatlerinin doğrudan bir sonucudur ('as a result').",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-19",
        "type": "visual-grammar-recall",
        "prompt": "Visual Grammar Recall: When constructing sentences with Mixed YDS Grammar Challenge, which order is syntactically standard?",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 19",
        "options": [
          "Subject + Auxiliary + Main Verb + Object / Complement",
          "Object + Subject + Auxiliary + Verb",
          "Verb + Object + Auxiliary + Subject",
          "Preposition + Object + Verb + Subject"
        ],
        "correctAnswer": "Subject + Auxiliary + Main Verb + Object / Complement",
        "explanationEn": "English follows the fundamental S-V-O canonical structural blueprint.",
        "explanationTr": "İngilizce temel olarak Özne - Yardımcı Fiil - Ana Fiil - Nesne dizilimini izler.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-20",
        "type": "yds-style-question",
        "prompt": "[Mixed YDS Grammar Challenge] YDS Exam Simulation Question: 'Not only _____ international accreditation, but it also secured substantial research funding.'",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 20",
        "options": [
          "did the university receive",
          "the university received",
          "was the university receiving",
          "the university has received"
        ],
        "correctAnswer": "did the university receive",
        "explanationEn": "'Not only' at the start of a clause requires subject-auxiliary inversion ('did the university receive').",
        "explanationTr": "Cümle başında yer alan 'Not only' yapısı devriklik (inversion) gerektirir: 'did the university receive'.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-21",
        "type": "contextual-grammar",
        "prompt": "[Mixed YDS Grammar Challenge] Analyze the tone: 'The data indicates that productivity increases progressively when employees receive timely feedback.' What makes this sentence adult and academic?",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 21",
        "options": [
          "The use of precise professional terminology and structured causality.",
          "It uses slang and casual internet abbreviations.",
          "It includes cartoon characters.",
          "It is written in rhyming verse."
        ],
        "correctAnswer": "The use of precise professional terminology and structured causality.",
        "explanationEn": "Academic English relies on objective vocabulary, accurate modifiers, and clear cause-effect links.",
        "explanationTr": "Akademik İngilizce; tarafsız kelime seçimi, kesin niteleyiciler ve net nedensellik üzerine kuruludur.",
        "difficulty": "YDS"
      },
      {
        "id": "mixed-yds-grammar-act-22",
        "type": "error-spotting",
        "prompt": "Final Mastery Check for Mixed YDS Grammar Challenge: What is the most common pitfall Turkish learners face with this topic?",
        "promptTr": "Karma YDS Gramer Meydan Okuması (Sınav Simülasyonu) ile ilgili soru 22",
        "options": [
          "Transferring Turkish word order or omitting required English auxiliaries.",
          "Using too many adverbs in formal letters.",
          "Speaking with excessive confidence.",
          "Reading the question too thoroughly."
        ],
        "correctAnswer": "Transferring Turkish word order or omitting required English auxiliaries.",
        "explanationEn": "Turkish native speakers frequently transfer SOV syntax or omit auxiliaries ('is/are/did') which are mandatory in English.",
        "explanationTr": "Türkçe anadilli öğrenciler sıklıkla Türkçe söz dizimini aktarır veya İngilizce yardımcı fiilleri atlar.",
        "difficulty": "YDS"
      }
    ]
  }
];
