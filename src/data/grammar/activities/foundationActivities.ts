import { GrammarActivity } from '../../../types';

export const FOUNDATION_ACTIVITIES: GrammarActivity[] = [
  {
    "id": "act-be-01",
    "grammarTopicId": "topic-be",
    "type": "multiple_choice",
    "question": "[Verb \"To Be\" Q1] According to the syntactic rules of Verb \"To Be\", which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Verb \"To Be\".",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), \"To Be\" Fiili (Am/Is/Are/Was/Were) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-02",
    "grammarTopicId": "topic-be",
    "type": "fill_blank",
    "question": "[Verb \"To Be\" Q2] Identify the grammatically flawed sentence concerning Verb \"To Be\" in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-03",
    "grammarTopicId": "topic-be",
    "type": "sentence_completion",
    "question": "[Verb \"To Be\" Q3] YDS Exam Question (Verb \"To Be\"): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-04",
    "grammarTopicId": "topic-be",
    "type": "error_correction",
    "question": "[Verb \"To Be\" Q4] Which connector or auxiliary best satisfies the contextual flow of Verb \"To Be\" in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-05",
    "grammarTopicId": "topic-be",
    "type": "transformation",
    "question": "[Verb \"To Be\" Q5] According to the syntactic rules of Verb \"To Be\", which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Verb \"To Be\".",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), \"To Be\" Fiili (Am/Is/Are/Was/Were) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-06",
    "grammarTopicId": "topic-be",
    "type": "sentence_ordering",
    "question": "[Verb \"To Be\" Q6] Identify the grammatically flawed sentence concerning Verb \"To Be\" in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-07",
    "grammarTopicId": "topic-be",
    "type": "matching",
    "question": "[Verb \"To Be\" Q7] YDS Exam Question (Verb \"To Be\"): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-08",
    "grammarTopicId": "topic-be",
    "type": "true_false",
    "question": "[Verb \"To Be\" Q8] Which connector or auxiliary best satisfies the contextual flow of Verb \"To Be\" in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-09",
    "grammarTopicId": "topic-be",
    "type": "contextual_grammar",
    "question": "[Verb \"To Be\" Q9] According to the syntactic rules of Verb \"To Be\", which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Verb \"To Be\".",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), \"To Be\" Fiili (Am/Is/Are/Was/Were) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-10",
    "grammarTopicId": "topic-be",
    "type": "yds_question",
    "question": "[Verb \"To Be\" Q10] Identify the grammatically flawed sentence concerning Verb \"To Be\" in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-11",
    "grammarTopicId": "topic-be",
    "type": "multiple_choice",
    "question": "[Verb \"To Be\" Q11] YDS Exam Question (Verb \"To Be\"): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-12",
    "grammarTopicId": "topic-be",
    "type": "fill_blank",
    "question": "[Verb \"To Be\" Q12] Which connector or auxiliary best satisfies the contextual flow of Verb \"To Be\" in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-13",
    "grammarTopicId": "topic-be",
    "type": "sentence_completion",
    "question": "[Verb \"To Be\" Q13] According to the syntactic rules of Verb \"To Be\", which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Verb \"To Be\".",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), \"To Be\" Fiili (Am/Is/Are/Was/Were) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-14",
    "grammarTopicId": "topic-be",
    "type": "error_correction",
    "question": "[Verb \"To Be\" Q14] Identify the grammatically flawed sentence concerning Verb \"To Be\" in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-15",
    "grammarTopicId": "topic-be",
    "type": "transformation",
    "question": "[Verb \"To Be\" Q15] YDS Exam Question (Verb \"To Be\"): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-16",
    "grammarTopicId": "topic-be",
    "type": "sentence_ordering",
    "question": "[Verb \"To Be\" Q16] Which connector or auxiliary best satisfies the contextual flow of Verb \"To Be\" in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-17",
    "grammarTopicId": "topic-be",
    "type": "matching",
    "question": "[Verb \"To Be\" Q17] According to the syntactic rules of Verb \"To Be\", which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Verb \"To Be\".",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), \"To Be\" Fiili (Am/Is/Are/Was/Were) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-18",
    "grammarTopicId": "topic-be",
    "type": "true_false",
    "question": "[Verb \"To Be\" Q18] Identify the grammatically flawed sentence concerning Verb \"To Be\" in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-19",
    "grammarTopicId": "topic-be",
    "type": "contextual_grammar",
    "question": "[Verb \"To Be\" Q19] YDS Exam Question (Verb \"To Be\"): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-20",
    "grammarTopicId": "topic-be",
    "type": "yds_question",
    "question": "[Verb \"To Be\" Q20] Which connector or auxiliary best satisfies the contextual flow of Verb \"To Be\" in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-21",
    "grammarTopicId": "topic-be",
    "type": "multiple_choice",
    "question": "[Verb \"To Be\" Q21] According to the syntactic rules of Verb \"To Be\", which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Verb \"To Be\".",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), \"To Be\" Fiili (Am/Is/Are/Was/Were) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-22",
    "grammarTopicId": "topic-be",
    "type": "fill_blank",
    "question": "[Verb \"To Be\" Q22] Identify the grammatically flawed sentence concerning Verb \"To Be\" in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-23",
    "grammarTopicId": "topic-be",
    "type": "sentence_completion",
    "question": "[Verb \"To Be\" Q23] YDS Exam Question (Verb \"To Be\"): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-24",
    "grammarTopicId": "topic-be",
    "type": "error_correction",
    "question": "[Verb \"To Be\" Q24] Which connector or auxiliary best satisfies the contextual flow of Verb \"To Be\" in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-be-25",
    "grammarTopicId": "topic-be",
    "type": "transformation",
    "question": "[Verb \"To Be\" Q25] According to the syntactic rules of Verb \"To Be\", which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Verb \"To Be\".",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), \"To Be\" Fiili (Am/Is/Are/Was/Were) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-01",
    "grammarTopicId": "topic-pronouns",
    "type": "multiple_choice",
    "question": "[Pronouns & Determiners Q1] According to the syntactic rules of Pronouns & Determiners, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Pronouns & Determiners.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Zamirler ve Belirteçler kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-02",
    "grammarTopicId": "topic-pronouns",
    "type": "fill_blank",
    "question": "[Pronouns & Determiners Q2] Identify the grammatically flawed sentence concerning Pronouns & Determiners in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-03",
    "grammarTopicId": "topic-pronouns",
    "type": "sentence_completion",
    "question": "[Pronouns & Determiners Q3] YDS Exam Question (Pronouns & Determiners): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-04",
    "grammarTopicId": "topic-pronouns",
    "type": "error_correction",
    "question": "[Pronouns & Determiners Q4] Which connector or auxiliary best satisfies the contextual flow of Pronouns & Determiners in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-05",
    "grammarTopicId": "topic-pronouns",
    "type": "transformation",
    "question": "[Pronouns & Determiners Q5] According to the syntactic rules of Pronouns & Determiners, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Pronouns & Determiners.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Zamirler ve Belirteçler kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-06",
    "grammarTopicId": "topic-pronouns",
    "type": "sentence_ordering",
    "question": "[Pronouns & Determiners Q6] Identify the grammatically flawed sentence concerning Pronouns & Determiners in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-07",
    "grammarTopicId": "topic-pronouns",
    "type": "matching",
    "question": "[Pronouns & Determiners Q7] YDS Exam Question (Pronouns & Determiners): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-08",
    "grammarTopicId": "topic-pronouns",
    "type": "true_false",
    "question": "[Pronouns & Determiners Q8] Which connector or auxiliary best satisfies the contextual flow of Pronouns & Determiners in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-09",
    "grammarTopicId": "topic-pronouns",
    "type": "contextual_grammar",
    "question": "[Pronouns & Determiners Q9] According to the syntactic rules of Pronouns & Determiners, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Pronouns & Determiners.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Zamirler ve Belirteçler kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-10",
    "grammarTopicId": "topic-pronouns",
    "type": "yds_question",
    "question": "[Pronouns & Determiners Q10] Identify the grammatically flawed sentence concerning Pronouns & Determiners in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-11",
    "grammarTopicId": "topic-pronouns",
    "type": "multiple_choice",
    "question": "[Pronouns & Determiners Q11] YDS Exam Question (Pronouns & Determiners): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-12",
    "grammarTopicId": "topic-pronouns",
    "type": "fill_blank",
    "question": "[Pronouns & Determiners Q12] Which connector or auxiliary best satisfies the contextual flow of Pronouns & Determiners in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-13",
    "grammarTopicId": "topic-pronouns",
    "type": "sentence_completion",
    "question": "[Pronouns & Determiners Q13] According to the syntactic rules of Pronouns & Determiners, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Pronouns & Determiners.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Zamirler ve Belirteçler kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-14",
    "grammarTopicId": "topic-pronouns",
    "type": "error_correction",
    "question": "[Pronouns & Determiners Q14] Identify the grammatically flawed sentence concerning Pronouns & Determiners in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-15",
    "grammarTopicId": "topic-pronouns",
    "type": "transformation",
    "question": "[Pronouns & Determiners Q15] YDS Exam Question (Pronouns & Determiners): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-16",
    "grammarTopicId": "topic-pronouns",
    "type": "sentence_ordering",
    "question": "[Pronouns & Determiners Q16] Which connector or auxiliary best satisfies the contextual flow of Pronouns & Determiners in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-17",
    "grammarTopicId": "topic-pronouns",
    "type": "matching",
    "question": "[Pronouns & Determiners Q17] According to the syntactic rules of Pronouns & Determiners, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Pronouns & Determiners.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Zamirler ve Belirteçler kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-18",
    "grammarTopicId": "topic-pronouns",
    "type": "true_false",
    "question": "[Pronouns & Determiners Q18] Identify the grammatically flawed sentence concerning Pronouns & Determiners in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-19",
    "grammarTopicId": "topic-pronouns",
    "type": "contextual_grammar",
    "question": "[Pronouns & Determiners Q19] YDS Exam Question (Pronouns & Determiners): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-20",
    "grammarTopicId": "topic-pronouns",
    "type": "yds_question",
    "question": "[Pronouns & Determiners Q20] Which connector or auxiliary best satisfies the contextual flow of Pronouns & Determiners in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-21",
    "grammarTopicId": "topic-pronouns",
    "type": "multiple_choice",
    "question": "[Pronouns & Determiners Q21] According to the syntactic rules of Pronouns & Determiners, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Pronouns & Determiners.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Zamirler ve Belirteçler kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-22",
    "grammarTopicId": "topic-pronouns",
    "type": "fill_blank",
    "question": "[Pronouns & Determiners Q22] Identify the grammatically flawed sentence concerning Pronouns & Determiners in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-23",
    "grammarTopicId": "topic-pronouns",
    "type": "sentence_completion",
    "question": "[Pronouns & Determiners Q23] YDS Exam Question (Pronouns & Determiners): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-24",
    "grammarTopicId": "topic-pronouns",
    "type": "error_correction",
    "question": "[Pronouns & Determiners Q24] Which connector or auxiliary best satisfies the contextual flow of Pronouns & Determiners in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-pronouns-25",
    "grammarTopicId": "topic-pronouns",
    "type": "transformation",
    "question": "[Pronouns & Determiners Q25] According to the syntactic rules of Pronouns & Determiners, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Pronouns & Determiners.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Zamirler ve Belirteçler kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-01",
    "grammarTopicId": "topic-articles",
    "type": "multiple_choice",
    "question": "[Articles & Countability Q1] According to the syntactic rules of Articles & Countability, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Articles & Countability.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Artikeller (A, An, The) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-02",
    "grammarTopicId": "topic-articles",
    "type": "fill_blank",
    "question": "[Articles & Countability Q2] Identify the grammatically flawed sentence concerning Articles & Countability in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-03",
    "grammarTopicId": "topic-articles",
    "type": "sentence_completion",
    "question": "[Articles & Countability Q3] YDS Exam Question (Articles & Countability): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-04",
    "grammarTopicId": "topic-articles",
    "type": "error_correction",
    "question": "[Articles & Countability Q4] Which connector or auxiliary best satisfies the contextual flow of Articles & Countability in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-05",
    "grammarTopicId": "topic-articles",
    "type": "transformation",
    "question": "[Articles & Countability Q5] According to the syntactic rules of Articles & Countability, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Articles & Countability.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Artikeller (A, An, The) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-06",
    "grammarTopicId": "topic-articles",
    "type": "sentence_ordering",
    "question": "[Articles & Countability Q6] Identify the grammatically flawed sentence concerning Articles & Countability in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-07",
    "grammarTopicId": "topic-articles",
    "type": "matching",
    "question": "[Articles & Countability Q7] YDS Exam Question (Articles & Countability): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-08",
    "grammarTopicId": "topic-articles",
    "type": "true_false",
    "question": "[Articles & Countability Q8] Which connector or auxiliary best satisfies the contextual flow of Articles & Countability in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-09",
    "grammarTopicId": "topic-articles",
    "type": "contextual_grammar",
    "question": "[Articles & Countability Q9] According to the syntactic rules of Articles & Countability, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Articles & Countability.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Artikeller (A, An, The) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-10",
    "grammarTopicId": "topic-articles",
    "type": "yds_question",
    "question": "[Articles & Countability Q10] Identify the grammatically flawed sentence concerning Articles & Countability in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-11",
    "grammarTopicId": "topic-articles",
    "type": "multiple_choice",
    "question": "[Articles & Countability Q11] YDS Exam Question (Articles & Countability): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-12",
    "grammarTopicId": "topic-articles",
    "type": "fill_blank",
    "question": "[Articles & Countability Q12] Which connector or auxiliary best satisfies the contextual flow of Articles & Countability in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-13",
    "grammarTopicId": "topic-articles",
    "type": "sentence_completion",
    "question": "[Articles & Countability Q13] According to the syntactic rules of Articles & Countability, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Articles & Countability.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Artikeller (A, An, The) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-14",
    "grammarTopicId": "topic-articles",
    "type": "error_correction",
    "question": "[Articles & Countability Q14] Identify the grammatically flawed sentence concerning Articles & Countability in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-15",
    "grammarTopicId": "topic-articles",
    "type": "transformation",
    "question": "[Articles & Countability Q15] YDS Exam Question (Articles & Countability): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-16",
    "grammarTopicId": "topic-articles",
    "type": "sentence_ordering",
    "question": "[Articles & Countability Q16] Which connector or auxiliary best satisfies the contextual flow of Articles & Countability in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-17",
    "grammarTopicId": "topic-articles",
    "type": "matching",
    "question": "[Articles & Countability Q17] According to the syntactic rules of Articles & Countability, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Articles & Countability.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Artikeller (A, An, The) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-18",
    "grammarTopicId": "topic-articles",
    "type": "true_false",
    "question": "[Articles & Countability Q18] Identify the grammatically flawed sentence concerning Articles & Countability in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-19",
    "grammarTopicId": "topic-articles",
    "type": "contextual_grammar",
    "question": "[Articles & Countability Q19] YDS Exam Question (Articles & Countability): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-20",
    "grammarTopicId": "topic-articles",
    "type": "yds_question",
    "question": "[Articles & Countability Q20] Which connector or auxiliary best satisfies the contextual flow of Articles & Countability in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-21",
    "grammarTopicId": "topic-articles",
    "type": "multiple_choice",
    "question": "[Articles & Countability Q21] According to the syntactic rules of Articles & Countability, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Articles & Countability.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Artikeller (A, An, The) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-22",
    "grammarTopicId": "topic-articles",
    "type": "fill_blank",
    "question": "[Articles & Countability Q22] Identify the grammatically flawed sentence concerning Articles & Countability in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-23",
    "grammarTopicId": "topic-articles",
    "type": "sentence_completion",
    "question": "[Articles & Countability Q23] YDS Exam Question (Articles & Countability): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-24",
    "grammarTopicId": "topic-articles",
    "type": "error_correction",
    "question": "[Articles & Countability Q24] Which connector or auxiliary best satisfies the contextual flow of Articles & Countability in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-articles-25",
    "grammarTopicId": "topic-articles",
    "type": "transformation",
    "question": "[Articles & Countability Q25] According to the syntactic rules of Articles & Countability, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Articles & Countability.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Artikeller (A, An, The) kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-01",
    "grammarTopicId": "topic-present-simple",
    "type": "multiple_choice",
    "question": "[Present Simple Tense Q1] According to the syntactic rules of Present Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geniş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-02",
    "grammarTopicId": "topic-present-simple",
    "type": "fill_blank",
    "question": "[Present Simple Tense Q2] Identify the grammatically flawed sentence concerning Present Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-03",
    "grammarTopicId": "topic-present-simple",
    "type": "sentence_completion",
    "question": "[Present Simple Tense Q3] YDS Exam Question (Present Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-04",
    "grammarTopicId": "topic-present-simple",
    "type": "error_correction",
    "question": "[Present Simple Tense Q4] Which connector or auxiliary best satisfies the contextual flow of Present Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-05",
    "grammarTopicId": "topic-present-simple",
    "type": "transformation",
    "question": "[Present Simple Tense Q5] According to the syntactic rules of Present Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geniş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-06",
    "grammarTopicId": "topic-present-simple",
    "type": "sentence_ordering",
    "question": "[Present Simple Tense Q6] Identify the grammatically flawed sentence concerning Present Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-07",
    "grammarTopicId": "topic-present-simple",
    "type": "matching",
    "question": "[Present Simple Tense Q7] YDS Exam Question (Present Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-08",
    "grammarTopicId": "topic-present-simple",
    "type": "true_false",
    "question": "[Present Simple Tense Q8] Which connector or auxiliary best satisfies the contextual flow of Present Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-09",
    "grammarTopicId": "topic-present-simple",
    "type": "contextual_grammar",
    "question": "[Present Simple Tense Q9] According to the syntactic rules of Present Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geniş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-10",
    "grammarTopicId": "topic-present-simple",
    "type": "yds_question",
    "question": "[Present Simple Tense Q10] Identify the grammatically flawed sentence concerning Present Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-11",
    "grammarTopicId": "topic-present-simple",
    "type": "multiple_choice",
    "question": "[Present Simple Tense Q11] YDS Exam Question (Present Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-12",
    "grammarTopicId": "topic-present-simple",
    "type": "fill_blank",
    "question": "[Present Simple Tense Q12] Which connector or auxiliary best satisfies the contextual flow of Present Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-13",
    "grammarTopicId": "topic-present-simple",
    "type": "sentence_completion",
    "question": "[Present Simple Tense Q13] According to the syntactic rules of Present Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geniş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-14",
    "grammarTopicId": "topic-present-simple",
    "type": "error_correction",
    "question": "[Present Simple Tense Q14] Identify the grammatically flawed sentence concerning Present Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-15",
    "grammarTopicId": "topic-present-simple",
    "type": "transformation",
    "question": "[Present Simple Tense Q15] YDS Exam Question (Present Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-16",
    "grammarTopicId": "topic-present-simple",
    "type": "sentence_ordering",
    "question": "[Present Simple Tense Q16] Which connector or auxiliary best satisfies the contextual flow of Present Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-17",
    "grammarTopicId": "topic-present-simple",
    "type": "matching",
    "question": "[Present Simple Tense Q17] According to the syntactic rules of Present Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geniş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-18",
    "grammarTopicId": "topic-present-simple",
    "type": "true_false",
    "question": "[Present Simple Tense Q18] Identify the grammatically flawed sentence concerning Present Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-19",
    "grammarTopicId": "topic-present-simple",
    "type": "contextual_grammar",
    "question": "[Present Simple Tense Q19] YDS Exam Question (Present Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-20",
    "grammarTopicId": "topic-present-simple",
    "type": "yds_question",
    "question": "[Present Simple Tense Q20] Which connector or auxiliary best satisfies the contextual flow of Present Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-21",
    "grammarTopicId": "topic-present-simple",
    "type": "multiple_choice",
    "question": "[Present Simple Tense Q21] According to the syntactic rules of Present Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geniş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-22",
    "grammarTopicId": "topic-present-simple",
    "type": "fill_blank",
    "question": "[Present Simple Tense Q22] Identify the grammatically flawed sentence concerning Present Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-23",
    "grammarTopicId": "topic-present-simple",
    "type": "sentence_completion",
    "question": "[Present Simple Tense Q23] YDS Exam Question (Present Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-24",
    "grammarTopicId": "topic-present-simple",
    "type": "error_correction",
    "question": "[Present Simple Tense Q24] Which connector or auxiliary best satisfies the contextual flow of Present Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-simple-25",
    "grammarTopicId": "topic-present-simple",
    "type": "transformation",
    "question": "[Present Simple Tense Q25] According to the syntactic rules of Present Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geniş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-01",
    "grammarTopicId": "topic-present-continuous",
    "type": "multiple_choice",
    "question": "[Present Continuous Tense Q1] According to the syntactic rules of Present Continuous Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Continuous Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Şimdiki Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-02",
    "grammarTopicId": "topic-present-continuous",
    "type": "fill_blank",
    "question": "[Present Continuous Tense Q2] Identify the grammatically flawed sentence concerning Present Continuous Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-03",
    "grammarTopicId": "topic-present-continuous",
    "type": "sentence_completion",
    "question": "[Present Continuous Tense Q3] YDS Exam Question (Present Continuous Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-04",
    "grammarTopicId": "topic-present-continuous",
    "type": "error_correction",
    "question": "[Present Continuous Tense Q4] Which connector or auxiliary best satisfies the contextual flow of Present Continuous Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-05",
    "grammarTopicId": "topic-present-continuous",
    "type": "transformation",
    "question": "[Present Continuous Tense Q5] According to the syntactic rules of Present Continuous Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Continuous Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Şimdiki Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-06",
    "grammarTopicId": "topic-present-continuous",
    "type": "sentence_ordering",
    "question": "[Present Continuous Tense Q6] Identify the grammatically flawed sentence concerning Present Continuous Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-07",
    "grammarTopicId": "topic-present-continuous",
    "type": "matching",
    "question": "[Present Continuous Tense Q7] YDS Exam Question (Present Continuous Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-08",
    "grammarTopicId": "topic-present-continuous",
    "type": "true_false",
    "question": "[Present Continuous Tense Q8] Which connector or auxiliary best satisfies the contextual flow of Present Continuous Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-09",
    "grammarTopicId": "topic-present-continuous",
    "type": "contextual_grammar",
    "question": "[Present Continuous Tense Q9] According to the syntactic rules of Present Continuous Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Continuous Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Şimdiki Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-10",
    "grammarTopicId": "topic-present-continuous",
    "type": "yds_question",
    "question": "[Present Continuous Tense Q10] Identify the grammatically flawed sentence concerning Present Continuous Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-11",
    "grammarTopicId": "topic-present-continuous",
    "type": "multiple_choice",
    "question": "[Present Continuous Tense Q11] YDS Exam Question (Present Continuous Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-12",
    "grammarTopicId": "topic-present-continuous",
    "type": "fill_blank",
    "question": "[Present Continuous Tense Q12] Which connector or auxiliary best satisfies the contextual flow of Present Continuous Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-13",
    "grammarTopicId": "topic-present-continuous",
    "type": "sentence_completion",
    "question": "[Present Continuous Tense Q13] According to the syntactic rules of Present Continuous Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Continuous Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Şimdiki Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-14",
    "grammarTopicId": "topic-present-continuous",
    "type": "error_correction",
    "question": "[Present Continuous Tense Q14] Identify the grammatically flawed sentence concerning Present Continuous Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-15",
    "grammarTopicId": "topic-present-continuous",
    "type": "transformation",
    "question": "[Present Continuous Tense Q15] YDS Exam Question (Present Continuous Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-16",
    "grammarTopicId": "topic-present-continuous",
    "type": "sentence_ordering",
    "question": "[Present Continuous Tense Q16] Which connector or auxiliary best satisfies the contextual flow of Present Continuous Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-17",
    "grammarTopicId": "topic-present-continuous",
    "type": "matching",
    "question": "[Present Continuous Tense Q17] According to the syntactic rules of Present Continuous Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Continuous Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Şimdiki Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-18",
    "grammarTopicId": "topic-present-continuous",
    "type": "true_false",
    "question": "[Present Continuous Tense Q18] Identify the grammatically flawed sentence concerning Present Continuous Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-19",
    "grammarTopicId": "topic-present-continuous",
    "type": "contextual_grammar",
    "question": "[Present Continuous Tense Q19] YDS Exam Question (Present Continuous Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-20",
    "grammarTopicId": "topic-present-continuous",
    "type": "yds_question",
    "question": "[Present Continuous Tense Q20] Which connector or auxiliary best satisfies the contextual flow of Present Continuous Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-21",
    "grammarTopicId": "topic-present-continuous",
    "type": "multiple_choice",
    "question": "[Present Continuous Tense Q21] According to the syntactic rules of Present Continuous Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Continuous Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Şimdiki Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-22",
    "grammarTopicId": "topic-present-continuous",
    "type": "fill_blank",
    "question": "[Present Continuous Tense Q22] Identify the grammatically flawed sentence concerning Present Continuous Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-23",
    "grammarTopicId": "topic-present-continuous",
    "type": "sentence_completion",
    "question": "[Present Continuous Tense Q23] YDS Exam Question (Present Continuous Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-24",
    "grammarTopicId": "topic-present-continuous",
    "type": "error_correction",
    "question": "[Present Continuous Tense Q24] Which connector or auxiliary best satisfies the contextual flow of Present Continuous Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-present-continuous-25",
    "grammarTopicId": "topic-present-continuous",
    "type": "transformation",
    "question": "[Present Continuous Tense Q25] According to the syntactic rules of Present Continuous Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Present Continuous Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Şimdiki Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-01",
    "grammarTopicId": "topic-past-simple",
    "type": "multiple_choice",
    "question": "[Past Simple Tense Q1] According to the syntactic rules of Past Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Past Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geçmiş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-02",
    "grammarTopicId": "topic-past-simple",
    "type": "fill_blank",
    "question": "[Past Simple Tense Q2] Identify the grammatically flawed sentence concerning Past Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-03",
    "grammarTopicId": "topic-past-simple",
    "type": "sentence_completion",
    "question": "[Past Simple Tense Q3] YDS Exam Question (Past Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-04",
    "grammarTopicId": "topic-past-simple",
    "type": "error_correction",
    "question": "[Past Simple Tense Q4] Which connector or auxiliary best satisfies the contextual flow of Past Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-05",
    "grammarTopicId": "topic-past-simple",
    "type": "transformation",
    "question": "[Past Simple Tense Q5] According to the syntactic rules of Past Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Past Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geçmiş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-06",
    "grammarTopicId": "topic-past-simple",
    "type": "sentence_ordering",
    "question": "[Past Simple Tense Q6] Identify the grammatically flawed sentence concerning Past Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-07",
    "grammarTopicId": "topic-past-simple",
    "type": "matching",
    "question": "[Past Simple Tense Q7] YDS Exam Question (Past Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-08",
    "grammarTopicId": "topic-past-simple",
    "type": "true_false",
    "question": "[Past Simple Tense Q8] Which connector or auxiliary best satisfies the contextual flow of Past Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-09",
    "grammarTopicId": "topic-past-simple",
    "type": "contextual_grammar",
    "question": "[Past Simple Tense Q9] According to the syntactic rules of Past Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Past Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geçmiş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-10",
    "grammarTopicId": "topic-past-simple",
    "type": "yds_question",
    "question": "[Past Simple Tense Q10] Identify the grammatically flawed sentence concerning Past Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-11",
    "grammarTopicId": "topic-past-simple",
    "type": "multiple_choice",
    "question": "[Past Simple Tense Q11] YDS Exam Question (Past Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-12",
    "grammarTopicId": "topic-past-simple",
    "type": "fill_blank",
    "question": "[Past Simple Tense Q12] Which connector or auxiliary best satisfies the contextual flow of Past Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-13",
    "grammarTopicId": "topic-past-simple",
    "type": "sentence_completion",
    "question": "[Past Simple Tense Q13] According to the syntactic rules of Past Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Past Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geçmiş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-14",
    "grammarTopicId": "topic-past-simple",
    "type": "error_correction",
    "question": "[Past Simple Tense Q14] Identify the grammatically flawed sentence concerning Past Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-15",
    "grammarTopicId": "topic-past-simple",
    "type": "transformation",
    "question": "[Past Simple Tense Q15] YDS Exam Question (Past Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-16",
    "grammarTopicId": "topic-past-simple",
    "type": "sentence_ordering",
    "question": "[Past Simple Tense Q16] Which connector or auxiliary best satisfies the contextual flow of Past Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-17",
    "grammarTopicId": "topic-past-simple",
    "type": "matching",
    "question": "[Past Simple Tense Q17] According to the syntactic rules of Past Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Past Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geçmiş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-18",
    "grammarTopicId": "topic-past-simple",
    "type": "true_false",
    "question": "[Past Simple Tense Q18] Identify the grammatically flawed sentence concerning Past Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-19",
    "grammarTopicId": "topic-past-simple",
    "type": "contextual_grammar",
    "question": "[Past Simple Tense Q19] YDS Exam Question (Past Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-20",
    "grammarTopicId": "topic-past-simple",
    "type": "yds_question",
    "question": "[Past Simple Tense Q20] Which connector or auxiliary best satisfies the contextual flow of Past Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-21",
    "grammarTopicId": "topic-past-simple",
    "type": "multiple_choice",
    "question": "[Past Simple Tense Q21] According to the syntactic rules of Past Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Past Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geçmiş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-22",
    "grammarTopicId": "topic-past-simple",
    "type": "fill_blank",
    "question": "[Past Simple Tense Q22] Identify the grammatically flawed sentence concerning Past Simple Tense in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-23",
    "grammarTopicId": "topic-past-simple",
    "type": "sentence_completion",
    "question": "[Past Simple Tense Q23] YDS Exam Question (Past Simple Tense): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-24",
    "grammarTopicId": "topic-past-simple",
    "type": "error_correction",
    "question": "[Past Simple Tense Q24] Which connector or auxiliary best satisfies the contextual flow of Past Simple Tense in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-past-simple-25",
    "grammarTopicId": "topic-past-simple",
    "type": "transformation",
    "question": "[Past Simple Tense Q25] According to the syntactic rules of Past Simple Tense, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Past Simple Tense.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Geçmiş Zaman kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-01",
    "grammarTopicId": "topic-future",
    "type": "multiple_choice",
    "question": "[Future Forms Q1] According to the syntactic rules of Future Forms, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Future Forms.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Gelecek Zaman Formları kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-02",
    "grammarTopicId": "topic-future",
    "type": "fill_blank",
    "question": "[Future Forms Q2] Identify the grammatically flawed sentence concerning Future Forms in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-03",
    "grammarTopicId": "topic-future",
    "type": "sentence_completion",
    "question": "[Future Forms Q3] YDS Exam Question (Future Forms): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-04",
    "grammarTopicId": "topic-future",
    "type": "error_correction",
    "question": "[Future Forms Q4] Which connector or auxiliary best satisfies the contextual flow of Future Forms in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-05",
    "grammarTopicId": "topic-future",
    "type": "transformation",
    "question": "[Future Forms Q5] According to the syntactic rules of Future Forms, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Future Forms.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Gelecek Zaman Formları kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-06",
    "grammarTopicId": "topic-future",
    "type": "sentence_ordering",
    "question": "[Future Forms Q6] Identify the grammatically flawed sentence concerning Future Forms in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-07",
    "grammarTopicId": "topic-future",
    "type": "matching",
    "question": "[Future Forms Q7] YDS Exam Question (Future Forms): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-08",
    "grammarTopicId": "topic-future",
    "type": "true_false",
    "question": "[Future Forms Q8] Which connector or auxiliary best satisfies the contextual flow of Future Forms in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-09",
    "grammarTopicId": "topic-future",
    "type": "contextual_grammar",
    "question": "[Future Forms Q9] According to the syntactic rules of Future Forms, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Future Forms.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Gelecek Zaman Formları kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-10",
    "grammarTopicId": "topic-future",
    "type": "yds_question",
    "question": "[Future Forms Q10] Identify the grammatically flawed sentence concerning Future Forms in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-11",
    "grammarTopicId": "topic-future",
    "type": "multiple_choice",
    "question": "[Future Forms Q11] YDS Exam Question (Future Forms): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-12",
    "grammarTopicId": "topic-future",
    "type": "fill_blank",
    "question": "[Future Forms Q12] Which connector or auxiliary best satisfies the contextual flow of Future Forms in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-13",
    "grammarTopicId": "topic-future",
    "type": "sentence_completion",
    "question": "[Future Forms Q13] According to the syntactic rules of Future Forms, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Future Forms.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Gelecek Zaman Formları kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-14",
    "grammarTopicId": "topic-future",
    "type": "error_correction",
    "question": "[Future Forms Q14] Identify the grammatically flawed sentence concerning Future Forms in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-15",
    "grammarTopicId": "topic-future",
    "type": "transformation",
    "question": "[Future Forms Q15] YDS Exam Question (Future Forms): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-16",
    "grammarTopicId": "topic-future",
    "type": "sentence_ordering",
    "question": "[Future Forms Q16] Which connector or auxiliary best satisfies the contextual flow of Future Forms in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-17",
    "grammarTopicId": "topic-future",
    "type": "matching",
    "question": "[Future Forms Q17] According to the syntactic rules of Future Forms, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Future Forms.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Gelecek Zaman Formları kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-18",
    "grammarTopicId": "topic-future",
    "type": "true_false",
    "question": "[Future Forms Q18] Identify the grammatically flawed sentence concerning Future Forms in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-19",
    "grammarTopicId": "topic-future",
    "type": "contextual_grammar",
    "question": "[Future Forms Q19] YDS Exam Question (Future Forms): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-20",
    "grammarTopicId": "topic-future",
    "type": "yds_question",
    "question": "[Future Forms Q20] Which connector or auxiliary best satisfies the contextual flow of Future Forms in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-21",
    "grammarTopicId": "topic-future",
    "type": "multiple_choice",
    "question": "[Future Forms Q21] According to the syntactic rules of Future Forms, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Future Forms.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Gelecek Zaman Formları kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-22",
    "grammarTopicId": "topic-future",
    "type": "fill_blank",
    "question": "[Future Forms Q22] Identify the grammatically flawed sentence concerning Future Forms in academic texts:",
    "options": [
      "Neither the primary investigator nor his assistants was aware of the calibration error.",
      "Both the primary investigator and his assistants were present during the test.",
      "The primary investigator conducted the initial phase independently.",
      "His assistants recorded the data with exceptional accuracy."
    ],
    "correctAnswer": "Neither the primary investigator nor his assistants was aware of the calibration error.",
    "explanationEn": "With 'neither... nor', the verb agrees with the closer subject ('assistants' -> 'were aware', not 'was aware').",
    "explanationTr": "'Neither... nor' yapısında yüklem kendisine en yakın olan özneye uyar ('assistants' çoğul olduğu için 'were aware' olmalıdır).",
    "difficulty": "B1",
    "whereOthersAreWrong": {
      "Both the primary investigator and his assistants were present during the test.": "Incorrect tense or grammatical agreement for this context.",
      "The primary investigator conducted the initial phase independently.": "Violates standard subject-verb harmony or clause connector rules.",
      "His assistants recorded the data with exceptional accuracy.": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-23",
    "grammarTopicId": "topic-future",
    "type": "sentence_completion",
    "question": "[Future Forms Q23] YDS Exam Question (Future Forms): 'Had the diplomatic delegation arrived earlier, the preliminary treaty ---- before midnight.'",
    "options": [
      "would have been signed",
      "will have signed",
      "would sign directly",
      "is going to be signed"
    ],
    "correctAnswer": "would have been signed",
    "explanationEn": "Inverted Type 3 conditional ('Had... arrived') requires 'would have + V3' (passive: 'would have been signed') in the main clause.",
    "explanationTr": "Geçmişe yönelik devrik Type 3 koşul cümlesinde ana cümle 'would have been V3' biçiminde kurulmalıdır.",
    "difficulty": "B2",
    "whereOthersAreWrong": {
      "will have signed": "Incorrect tense or grammatical agreement for this context.",
      "would sign directly": "Violates standard subject-verb harmony or clause connector rules.",
      "is going to be signed": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-24",
    "grammarTopicId": "topic-future",
    "type": "error_correction",
    "question": "[Future Forms Q24] Which connector or auxiliary best satisfies the contextual flow of Future Forms in: 'The laboratory results were promising; ----, the committee requested further empirical verification.'",
    "options": [
      "nevertheless",
      "because of",
      "in spite",
      "owing to"
    ],
    "correctAnswer": "nevertheless",
    "explanationEn": "'Nevertheless' is a transitional adverb followed by a comma indicating contrast between two independent clauses.",
    "explanationTr": "'Nevertheless' iki bağımsız cümle arasında zıtlık kuran ve noktalı virgülden sonra gelen geçiş zarfıdır.",
    "difficulty": "YDS",
    "whereOthersAreWrong": {
      "because of": "Incorrect tense or grammatical agreement for this context.",
      "in spite": "Violates standard subject-verb harmony or clause connector rules.",
      "owing to": "Syntactically invalid formation in formal English."
    }
  },
  {
    "id": "act-future-25",
    "grammarTopicId": "topic-future",
    "type": "transformation",
    "question": "[Future Forms Q25] According to the syntactic rules of Future Forms, which option correctly completes: 'The latest demographic survey ---- that urban migration has accelerated over the past decade.'",
    "options": [
      "indicates conclusively",
      "indicating with doubt",
      "have indicated without reason",
      "are indicate rapidly"
    ],
    "correctAnswer": "indicates conclusively",
    "explanationEn": "Singular third-person subject ('survey') requires singular verb concord ('indicates') in Future Forms.",
    "explanationTr": "Tekil üçüncü şahıs özne ('survey'), Gelecek Zaman Formları kuralı gereğince tekil yüklem ('indicates') alır.",
    "difficulty": "A2",
    "whereOthersAreWrong": {
      "indicating with doubt": "Incorrect tense or grammatical agreement for this context.",
      "have indicated without reason": "Violates standard subject-verb harmony or clause connector rules.",
      "are indicate rapidly": "Syntactically invalid formation in formal English."
    }
  }
];
