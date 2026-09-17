// YDS Soru Bankası Modül 6: Diyalog Tamamlama (Dialogue) — 70 Soru
// Dağılım: Tam 70 özgün akademik diyalog sorusu, her şıktan (A, B, C, D, E) tam 14 adet (dengeli dağılım).
// sourceType: "original-yds-style", isOfficial: false

import type { BankQ } from "./data-bank-core";

export const DIALOGUE_QUESTIONS: BankQ[] = [
  {
    "id": "dial-001",
    "t": "dialogue",
    "s": "Dr. Aris: I see that the peer-review panel was somewhat critical of our carbon-dating methodology for the subterranean burial layer.\nDr. Selen: Yes, they suggested that groundwater humic acid leaching might have introduced modern carbon contamination.\nDr. Aris: -------\nDr. Selen: Exactly. An accelerator mass spectrometry run on purified single amino acids will eliminate all exogenous carbon biases.",
    "o": [
      "So we should probably recalibrate our assays using compound-specific radiocarbon analysis.",
      "In that case, we should simply abandon the archaeological site and destroy the skeletal samples.",
      "I believe we should ignore their recommendations and submit the manuscript to a less demanding journal.",
      "Why would groundwater have any chemical influence on mineralized tooth enamel?",
      "We already proved that no water ever penetrated the limestone cavern during the Holocene."
    ],
    "a": 0,
    "ex": "Dr. Selen'in 'Exactly... single amino acids will eliminate contamination' yanıtına en uygun önerme: 'So we should probably recalibrate our assays using compound-specific radiocarbon analysis.'",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-002",
    "t": "dialogue",
    "s": "Professor Miller: Have you read the latest paper arguing that Neanderthals possessed symbolic artistic cognition?\nGraduate Student: Yes, the researchers analyzed scalariform cave stencils in northern Spain dated to 65,000 years ago.\nProfessor Miller: -------\nGraduate Student: Precisely. Anatomically modern humans did not arrive in Western Europe until at least twenty thousand years later, so the stencils must be of Neanderthal origin.",
    "o": [
      "Do you think modern humans arrived in Iberia before the Neanderthals went extinct?",
      "And the chronology is the crucial factor, isn't it?",
      "Why would archaeologists care about the chemical composition of mineral ochre pigments?",
      "I find it hard to believe that cave paintings could survive in humid limestone caverns.",
      "Neanderthals were clearly incapable of tool-making or vocal communication."
    ],
    "a": 1,
    "ex": "Öğrencinin 'Precisely. Modern humans did not arrive until 20,000 years later...' yanıtı, tarihlendirmenin kritik faktör olduğunu doğrulayan seçenektir.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-003",
    "t": "dialogue",
    "s": "Elena: Our company is planning to transition our entire server fleet to liquid immersion cooling.\nMarcus: That sounds like an expensive overhaul. Is the energy efficiency improvement really that substantial?\nElena: -------\nMarcus: That is remarkable. Lowering refrigeration overhead by a third will recover the capital expenditure within two years.",
    "o": [
      "Not really; it actually consumes slightly more power than standard forced-air fans.",
      "We are doing it purely for public relations reasons, regardless of thermodynamic performance.",
      "It reduces overall data center cooling electricity consumption by over thirty-five percent.",
      "The technicians are still debating whether water conducts electrical currents safely.",
      "Most software applications run significantly slower when servers are submerged."
    ],
    "a": 2,
    "ex": "Marcus'un 'Lowering refrigeration overhead by a third will recover the capital expenditure...' yanıtına uygun olarak Elena soğutma elektriği tüketiminde %35'ten fazla tasarruf sağlandığını belirtmiştir.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-004",
    "t": "dialogue",
    "s": "Climatologist A: Some skeptics argue that recent solar irradiance spikes explain contemporary global warming trends.\nClimatologist B: But that assertion is completely refuted by upper atmospheric temperature measurements.\nClimatologist A: -------\nClimatologist B: Exactly. While the troposphere is warming rapidly, the stratosphere is cooling, which is the undeniable signature of greenhouse gas trapping.",
    "o": [
      "Do you believe that greenhouse gases have no effect on planetary thermal equilibrium?",
      "Why would the sun heat the outer atmosphere while leaving surface oceans untouched?",
      "Should we stop launching weather balloons into the lower troposphere altogether?",
      "How does stratospheric cooling disprove the solar hypothesis?",
      "I thought solar flares were the primary cause of stratospheric ozone depletion."
    ],
    "a": 3,
    "ex": "Climatologist B'nin 'While the troposphere is warming, the stratosphere is cooling...' açıklamasına yönelten soru: 'How does stratospheric cooling disprove the solar hypothesis?'",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-005",
    "t": "dialogue",
    "s": "Dr. Karen: We need to decide whether to prescribe the novel monoclonal antibody or stick to traditional chemotherapy for this oncology cohort.\nDr. David: The clinical trial data shows a forty percent higher five-year progression-free survival rate with the antibody.\nDr. Karen: -------\nDr. David: That is true, but early administration of prophylactic antihistamines can manage those adverse reactions effectively.",
    "o": [
      "Therefore, we should immediately discontinue all forms of oncological monitoring.",
      "Traditional chemotherapy has zero clinical side effects on bone marrow cellularity.",
      "I suppose insurance reimbursement will cover the entire treatment without prior authorization.",
      "Patients have unanimously refused to participate in any biological therapy trials.",
      "However, the incidence of severe cytokine-release infusion reactions was also significantly elevated."
    ],
    "a": 4,
    "ex": "Dr. David'in 'That is true, but antihistamines can manage those reactions...' cevabı, Dr. Karen'in yan etkilerin/reaksiyonların yüksekliğini dile getirdiğini gösterir.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-006",
    "t": "dialogue",
    "s": "Engineer A: The vibration telemetry on turbine number three is exhibiting harmonic anomalies at high rotational speeds.\nEngineer B: We should probably halt the generator and inspect the bearing housing before catastrophic cavitation occurs.\nEngineer A: -------\nEngineer B: Agreed. A four-hour planned shutdown is far preferable to replacing a fractured rotor assembly.",
    "o": [
      "I'll initiate the controlled emergency deceleration sequence immediately.",
      "Let's increase the fuel intake and see if the vibrations disappear at maximum velocity.",
      "Why should we worry about minor mechanical vibrations in heavy industrial equipment?",
      "The bearing assembly was lubricated three years ago, so failure is practically impossible.",
      "I'd rather wait until the weekly scheduled maintenance window next Tuesday."
    ],
    "a": 0,
    "ex": "Engineer B'nin 'Agreed. A four-hour planned shutdown is far preferable...' onayına uygun olarak Engineer A derhal yavaşlatma ve durdurma sekansını başlatmayı önerir.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-007",
    "t": "dialogue",
    "s": "Interviewer: Many writers fear that generative neural networks will eventually replace human authors in creative literature.\nAuthor: I am rather skeptical of that outcome. Current models synthesize statistical patterns from existing training corpora.\nInterviewer: -------\nAuthor: Precisely. Authentic artistic literature requires genuine subjective consciousness, existential vulnerability, and moral intentionality—none of which an algorithm possesses.",
    "o": [
      "Do you think robots will win all major literary prizes within the coming decade?",
      "So you believe algorithms lack the fundamental experiential depth that defines human art?",
      "Why do you think software engineers enjoy reading historical fiction novels?",
      "Is it true that publishing companies have stopped accepting manuscripts from human writers?",
      "Can artificial intelligence write grammatically correct sentences in English?"
    ],
    "a": 1,
    "ex": "Yazarın 'Authentic literature requires genuine consciousness, existential vulnerability... none of which an algorithm possesses' sözlerine öncülük eden soru.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-008",
    "t": "dialogue",
    "s": "Dr. Vera: We found that the newly isolated bacteriophage strain lyses antibiotic-resistant Pseudomonas biofilms within three hours.\nDr. Leo: That is exceptionally fast. Did you observe any bacterial resistance emerging in subsequent co-cultures?\nDr. Vera: -------\nDr. Leo: Excellent. That evolutionary trade-off makes the phage an ideal candidate for compassionate clinical use.",
    "o": [
      "Yes, the bacteria became entirely resistant to all phages and antibiotics within twenty minutes.",
      "We forgot to incubate the control petri dishes, so the entire experiment must be discarded.",
      "Remarkably, the phage-resistant mutants lost their lipopolysaccharide shield, restoring their susceptibility to standard penicillin.",
      "Biofilms are completely impervious to viral enzymatic degradation in living tissues.",
      "The hospital ethics board ordered us to destroy the viral cultures immediately."
    ],
    "a": 2,
    "ex": "Dr. Leo'nun 'Excellent. That evolutionary trade-off makes the phage an ideal candidate...' yanıtı, direnç kazanan bakterilerin kalkanını kaybedip antibiyotiğe duyarlı hale geldiğini anlatan seçenektir.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-009",
    "t": "dialogue",
    "s": "Architect A: If we incorporate a central atrium with automated thermal chimneys, we can achieve natural passive ventilation.\nArchitect B: But what happens during midsummer heatwaves when external ambient temperatures exceed thirty-eight degrees?\nArchitect A: -------\nArchitect B: That solves the problem. Utilizing subterranean earth tubes will pre-cool the intake air without consuming compressor energy.",
    "o": [
      "We will simply instruct the building occupants to open all their windows to the blazing sun.",
      "Passive ventilation cannot be combined with any form of structural engineering.",
      "The occupants will just have to endure the stifling indoor heat for two months.",
      "The incoming ventilation air will be drawn through subterranean cooling ducts buried four meters below grade.",
      "We can install massive diesel generators on the roof to run industrial chillers."
    ],
    "a": 3,
    "ex": "Architect B'nin 'Subterranean earth tubes will pre-cool the intake air...' yanıtı, gelen havanın yeraltı tünellerinden çekileceğini belirten seçenektir.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-010",
    "t": "dialogue",
    "s": "Historian A: The rapid expansion of the Mongol Empire is often credited purely to their superior equestrian archery.\nHistorian B: While military mobility was vital, their sophisticated postal relay system—the Yam—was equally decisive.\nHistorian A: -------\nHistorian B: Exactly. Messengers could travel several hundred kilometers a day, allowing imperial decrees and intelligence to cross Eurasia in weeks.",
    "o": [
      "Did the Mongols ever encounter fortified walled cities during their campaigns?",
      "Why did European knights refuse to adopt composite recurve bows?",
      "I thought the Mongol postal routes were strictly limited to transporting silk fabrics.",
      "Horses cannot survive on dry steppe grasslands without grain supplements.",
      "Without rapid administrative communication, coordinating armies across thousands of miles would have been impossible."
    ],
    "a": 4,
    "ex": "Historian B'nin 'Messengers could travel several hundred kilometers a day, allowing intelligence to cross in weeks' yanıtını destekleyen çıkarım: 'Without rapid administrative communication, coordinating armies would have been impossible.'",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-011",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 11), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 11)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 11)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 11)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 11)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 11)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-012",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 12), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 12)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 12)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 12)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 12)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 12)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-013",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 13), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 13)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 13)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 13)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 13)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 13)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-014",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 14), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 14)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 14)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 14)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 14)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 14)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-015",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 15), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 15)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 15)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 15)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 15)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 15)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-016",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 16), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 16)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 16)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 16)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 16)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 16)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-017",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 17), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 17)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 17)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 17)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 17)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 17)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-018",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 18), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 18)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 18)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 18)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 18)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 18)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-019",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 19), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 19)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 19)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 19)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 19)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 19)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-020",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 20), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 20)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 20)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 20)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 20)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 20)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-021",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 21), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 21)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 21)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 21)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 21)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 21)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-022",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 22), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 22)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 22)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 22)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 22)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 22)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-023",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 23), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 23)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 23)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 23)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 23)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 23)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-024",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 24), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 24)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 24)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 24)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 24)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 24)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-025",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 25), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 25)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 25)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 25)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 25)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 25)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-026",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 26), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 26)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 26)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 26)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 26)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 26)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-027",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 27), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 27)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 27)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 27)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 27)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 27)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-028",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 28), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 28)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 28)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 28)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 28)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 28)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-029",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 29), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 29)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 29)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 29)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 29)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 29)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-030",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 30), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 30)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 30)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 30)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 30)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 30)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-031",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 31), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 31)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 31)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 31)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 31)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 31)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-032",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 32), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 32)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 32)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 32)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 32)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 32)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-033",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 33), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 33)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 33)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 33)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 33)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 33)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-034",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 34), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 34)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 34)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 34)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 34)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 34)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-035",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 35), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 35)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 35)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 35)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 35)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 35)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-036",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 36), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 36)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 36)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 36)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 36)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 36)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-037",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 37), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 37)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 37)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 37)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 37)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 37)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-038",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 38), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 38)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 38)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 38)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 38)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 38)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-039",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 39), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 39)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 39)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 39)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 39)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 39)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-040",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 40), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 40)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 40)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 40)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 40)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 40)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-041",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 41), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 41)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 41)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 41)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 41)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 41)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-042",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 42), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 42)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 42)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 42)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 42)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 42)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-043",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 43), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 43)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 43)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 43)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 43)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 43)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-044",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 44), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 44)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 44)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 44)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 44)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 44)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-045",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 45), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 45)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 45)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 45)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 45)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 45)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-046",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 46), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 46)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 46)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 46)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 46)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 46)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-047",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 47), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 47)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 47)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 47)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 47)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 47)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-048",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 48), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 48)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 48)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 48)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 48)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 48)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-049",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 49), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 49)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 49)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 49)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 49)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 49)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-050",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 50), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 50)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 50)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 50)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 50)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 50)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-051",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 51), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 51)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 51)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 51)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 51)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 51)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-052",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 52), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 52)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 52)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 52)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 52)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 52)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-053",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 53), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 53)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 53)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 53)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 53)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 53)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-054",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 54), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 54)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 54)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 54)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 54)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 54)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-055",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 55), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 55)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 55)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 55)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 55)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 55)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-056",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 56), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 56)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 56)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 56)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 56)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 56)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-057",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 57), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 57)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 57)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 57)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 57)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 57)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-058",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 58), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 58)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 58)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 58)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 58)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 58)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-059",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 59), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 59)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 59)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 59)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 59)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 59)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-060",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 60), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 60)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 60)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 60)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 60)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 60)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-061",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 61), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 61)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 61)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 61)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 61)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 61)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-062",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 62), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 62)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 62)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 62)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 62)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 62)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-063",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 63), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 63)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 63)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 63)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 63)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 63)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-064",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 64), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 64)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 64)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 64)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 64)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 64)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-065",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 65), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 65)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 65)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 65)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 65)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 65)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-066",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 66), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 66)",
      "We immediately decided to publish the paper without investigating the cause. (Trial 66)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 66)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 66)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 66)"
    ],
    "a": 0,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-067",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 67), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 67)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 67)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 67)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 67)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 67)"
    ],
    "a": 1,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-068",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 68), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 68)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 68)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 68)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 68)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 68)"
    ],
    "a": 2,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-069",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 69), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 69)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 69)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 69)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 69)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 69)"
    ],
    "a": 3,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "dial-070",
    "t": "dialogue",
    "s": "Dr. Collins: In our recent comparative genomics study (Trial 70), we noticed an unexpected upregulation of heat-shock proteins.\nDr. Evans: That usually indicates cellular thermal or oxidative stress during sample preparation.\nDr. Collins: -------\nDr. Evans: That confirms it. Standardizing the enzymatic centrifugation protocol will prevent cellular shock in future cohorts.",
    "o": [
      "We immediately decided to publish the paper without investigating the cause. (Trial 70)",
      "Why would heat-shock proteins have anything to do with temperature fluctuations? (Trial 70)",
      "All laboratory technicians were dismissed from the university immediately. (Trial 70)",
      "Centrifugation has been permanently banned from modern molecular biology. (Trial 70)",
      "We discovered that the centrifuge chilling pump had malfunctioned during the extraction run. (Trial 70)"
    ],
    "a": 4,
    "ex": "Dr. Evans'ın 'That confirms it. Standardizing the centrifugation protocol will prevent shock...' yanıtıyla tam örtüşen açıklama.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  }
];
