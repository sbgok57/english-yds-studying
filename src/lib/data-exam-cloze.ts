// YDS Soru Bankası Modül 3: Cloze Test (20 Pasaj x 5 Soru = 100 Soru)
// Dağılım: Tam 100 özgün akademik soru, her şıktan (A, B, C, D, E) tam 20 adet (dengeli dağılım).
// sourceType: "original-yds-style", isOfficial: false

import type { BankQ } from "./data-bank-core";

export const CLOZE_QUESTIONS: BankQ[] = [
  {
    "id": "cloze-001",
    "t": "cloze",
    "p": "Deep-sea hydrothermal vents, discovered along mid-ocean ridges in 1977, completely revolutionized biological science. Thriving in total darkness under immense hydrostatic pressure, unique communities of organisms depend not on solar energy, but on chemosynthetic bacteria (1) ------- convert toxic hydrogen sulfide into organic nutrients. Giant tube worms, (2) ------- lack mouths and digestive tracts, live in an obligate symbiotic relationship (3) ------- these microscopic chemotrophs. Before this discovery, scientists (4) ------- that all life on Earth was fundamentally dependent on photosynthesis. Consequently, astrobiologists now hypothesize that similar chemoautotrophic ecosystems could (5) ------- exist on icy Jovian moons like Europa.",
    "pt": "Deep-Sea Hydrothermal Vents",
    "s": "Question 1",
    "o": [
      "that",
      "whom",
      "where",
      "what",
      "whose"
    ],
    "a": 0,
    "ex": "(1) Chemosynthetic bacteria nesnesini niteleyen relative pronoun 'that' veya 'which'tir.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-002",
    "t": "cloze",
    "p": "Deep-sea hydrothermal vents, discovered along mid-ocean ridges in 1977, completely revolutionized biological science. Thriving in total darkness under immense hydrostatic pressure, unique communities of organisms depend not on solar energy, but on chemosynthetic bacteria (1) ------- convert toxic hydrogen sulfide into organic nutrients. Giant tube worms, (2) ------- lack mouths and digestive tracts, live in an obligate symbiotic relationship (3) ------- these microscopic chemotrophs. Before this discovery, scientists (4) ------- that all life on Earth was fundamentally dependent on photosynthesis. Consequently, astrobiologists now hypothesize that similar chemoautotrophic ecosystems could (5) ------- exist on icy Jovian moons like Europa.",
    "pt": "Deep-Sea Hydrothermal Vents",
    "s": "Question 2",
    "o": [
      "whom",
      "which",
      "who",
      "where",
      "that"
    ],
    "a": 1,
    "ex": "(2) Virgülle ayrılmış non-defining relative clause'da tube worms (tüp solucanları) için 'which' kullanılır.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-003",
    "t": "cloze",
    "p": "Deep-sea hydrothermal vents, discovered along mid-ocean ridges in 1977, completely revolutionized biological science. Thriving in total darkness under immense hydrostatic pressure, unique communities of organisms depend not on solar energy, but on chemosynthetic bacteria (1) ------- convert toxic hydrogen sulfide into organic nutrients. Giant tube worms, (2) ------- lack mouths and digestive tracts, live in an obligate symbiotic relationship (3) ------- these microscopic chemotrophs. Before this discovery, scientists (4) ------- that all life on Earth was fundamentally dependent on photosynthesis. Consequently, astrobiologists now hypothesize that similar chemoautotrophic ecosystems could (5) ------- exist on icy Jovian moons like Europa.",
    "pt": "Deep-Sea Hydrothermal Vents",
    "s": "Question 3",
    "o": [
      "from",
      "against",
      "with",
      "at",
      "towards"
    ],
    "a": 2,
    "ex": "(3) 'Relationship with...' (bakterilerle ortak yaşam ilişkisi).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-004",
    "t": "cloze",
    "p": "Deep-sea hydrothermal vents, discovered along mid-ocean ridges in 1977, completely revolutionized biological science. Thriving in total darkness under immense hydrostatic pressure, unique communities of organisms depend not on solar energy, but on chemosynthetic bacteria (1) ------- convert toxic hydrogen sulfide into organic nutrients. Giant tube worms, (2) ------- lack mouths and digestive tracts, live in an obligate symbiotic relationship (3) ------- these microscopic chemotrophs. Before this discovery, scientists (4) ------- that all life on Earth was fundamentally dependent on photosynthesis. Consequently, astrobiologists now hypothesize that similar chemoautotrophic ecosystems could (5) ------- exist on icy Jovian moons like Europa.",
    "pt": "Deep-Sea Hydrothermal Vents",
    "s": "Question 4",
    "o": [
      "assume",
      "have assumed",
      "will assume",
      "had assumed",
      "are assuming"
    ],
    "a": 3,
    "ex": "(4) 1977'deki keşiften önce var olan varsayım: Geçmişin geçmişi için Past Perfect (had assumed) kullanılır.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-005",
    "t": "cloze",
    "p": "Deep-sea hydrothermal vents, discovered along mid-ocean ridges in 1977, completely revolutionized biological science. Thriving in total darkness under immense hydrostatic pressure, unique communities of organisms depend not on solar energy, but on chemosynthetic bacteria (1) ------- convert toxic hydrogen sulfide into organic nutrients. Giant tube worms, (2) ------- lack mouths and digestive tracts, live in an obligate symbiotic relationship (3) ------- these microscopic chemotrophs. Before this discovery, scientists (4) ------- that all life on Earth was fundamentally dependent on photosynthesis. Consequently, astrobiologists now hypothesize that similar chemoautotrophic ecosystems could (5) ------- exist on icy Jovian moons like Europa.",
    "pt": "Deep-Sea Hydrothermal Vents",
    "s": "Question 5",
    "o": [
      "reluctantly",
      "scarcely",
      "erratically",
      "negligibly",
      "plausibly"
    ],
    "a": 4,
    "ex": "(5) 'plausibly exist' (akla yatkın/muhtemel şekilde var olmak); astrobiyologların bilimsel hipotezini ifade eder.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-006",
    "t": "cloze",
    "p": "Honeybees communicate the location of lucrative floral nectar sources through a sophisticated choreography known as the waggle dance. Karl von Frisch first deciphered this behavior, demonstrating that the angle of the dance relative to vertical gravity (1) ------- the angle of the food source relative to the sun. Furthermore, the duration of the waggle run directly correlates (2) ------- the distance of the forage site. (3) ------- cloudy conditions obscure the sun, bees utilize polarized ultraviolet light to maintain navigational orientation. If a scout bee discovers an exceptionally rich meadow, she will perform the dance repeatedly, (4) ------- other foragers to exploit the patch before floral nectar (5) -------.",
    "pt": "Honeybee Navigation and the Waggle Dance",
    "s": "Question 1",
    "o": [
      "obliterates",
      "encodes",
      "suppresses",
      "distorts",
      "impedes"
    ],
    "a": 1,
    "ex": "(1) 'encodes the angle' (açıyı kodlar/iletir); arının dans açısı ile güneş açısı arasındaki bilgi aktarımı.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-007",
    "t": "cloze",
    "p": "Honeybees communicate the location of lucrative floral nectar sources through a sophisticated choreography known as the waggle dance. Karl von Frisch first deciphered this behavior, demonstrating that the angle of the dance relative to vertical gravity (1) ------- the angle of the food source relative to the sun. Furthermore, the duration of the waggle run directly correlates (2) ------- the distance of the forage site. (3) ------- cloudy conditions obscure the sun, bees utilize polarized ultraviolet light to maintain navigational orientation. If a scout bee discovers an exceptionally rich meadow, she will perform the dance repeatedly, (4) ------- other foragers to exploit the patch before floral nectar (5) -------.",
    "pt": "Honeybee Navigation and the Waggle Dance",
    "s": "Question 2",
    "o": [
      "against",
      "from",
      "with",
      "on",
      "at"
    ],
    "a": 2,
    "ex": "(2) 'correlates with...' (ile doğrudan ilişkilidir).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-008",
    "t": "cloze",
    "p": "Honeybees communicate the location of lucrative floral nectar sources through a sophisticated choreography known as the waggle dance. Karl von Frisch first deciphered this behavior, demonstrating that the angle of the dance relative to vertical gravity (1) ------- the angle of the food source relative to the sun. Furthermore, the duration of the waggle run directly correlates (2) ------- the distance of the forage site. (3) ------- cloudy conditions obscure the sun, bees utilize polarized ultraviolet light to maintain navigational orientation. If a scout bee discovers an exceptionally rich meadow, she will perform the dance repeatedly, (4) ------- other foragers to exploit the patch before floral nectar (5) -------.",
    "pt": "Honeybee Navigation and the Waggle Dance",
    "s": "Question 3",
    "o": [
      "Despite",
      "Because of",
      "In spite of",
      "Even when",
      "Owing to"
    ],
    "a": 3,
    "ex": "(3) 'Even when cloudy conditions obscure...' (Bulutlar güneşi kapattığında bile) + tam cümle.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-009",
    "t": "cloze",
    "p": "Honeybees communicate the location of lucrative floral nectar sources through a sophisticated choreography known as the waggle dance. Karl von Frisch first deciphered this behavior, demonstrating that the angle of the dance relative to vertical gravity (1) ------- the angle of the food source relative to the sun. Furthermore, the duration of the waggle run directly correlates (2) ------- the distance of the forage site. (3) ------- cloudy conditions obscure the sun, bees utilize polarized ultraviolet light to maintain navigational orientation. If a scout bee discovers an exceptionally rich meadow, she will perform the dance repeatedly, (4) ------- other foragers to exploit the patch before floral nectar (5) -------.",
    "pt": "Honeybee Navigation and the Waggle Dance",
    "s": "Question 4",
    "o": [
      "having recruited",
      "to be recruited",
      "recruited",
      "recruit",
      "recruiting"
    ],
    "a": 4,
    "ex": "(4) Aktif sonuç bildiren V-ing kısaltması: 'recruiting other foragers' (diğer toplayıcı arıları harekete geçirerek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-010",
    "t": "cloze",
    "p": "Honeybees communicate the location of lucrative floral nectar sources through a sophisticated choreography known as the waggle dance. Karl von Frisch first deciphered this behavior, demonstrating that the angle of the dance relative to vertical gravity (1) ------- the angle of the food source relative to the sun. Furthermore, the duration of the waggle run directly correlates (2) ------- the distance of the forage site. (3) ------- cloudy conditions obscure the sun, bees utilize polarized ultraviolet light to maintain navigational orientation. If a scout bee discovers an exceptionally rich meadow, she will perform the dance repeatedly, (4) ------- other foragers to exploit the patch before floral nectar (5) -------.",
    "pt": "Honeybee Navigation and the Waggle Dance",
    "s": "Question 5",
    "o": [
      "dwindles",
      "flourishes",
      "accumulates",
      "expands",
      "surges"
    ],
    "a": 0,
    "ex": "(5) 'dwindles' (tükenir, azalır); nektar bitmeden önce toplama telaşı.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-011",
    "t": "cloze",
    "p": "Recovered from a Roman shipwreck off the Greek coast in 1901, the Antikythera Mechanism is widely regarded as the world's oldest analog computer. Dating back to the second century BCE, the bronze device (1) ------- over thirty precision-cut gear wheels designed to predict astronomical positions and lunar eclipses. Modern micro-focus X-ray tomography (2) ------- inscriptions on its casing that served as an operational manual. The astonishing complexity of its differential gears indicates that Hellenistic mechanical engineering had reached a peak (3) ------- was previously thought impossible for antiquity. Historians wonder how such advanced mechanical knowledge (4) ------- lost during the subsequent centuries, only (5) ------- in fourteenth-century medieval Europe.",
    "pt": "The Antikythera Mechanism",
    "s": "Question 1",
    "o": [
      "expelled",
      "forfeited",
      "housed",
      "discarded",
      "abandoned"
    ],
    "a": 2,
    "ex": "(1) 'housed over thirty gears' (otuzdan fazla dişliyi bünyesinde barındırıyordu).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-012",
    "t": "cloze",
    "p": "Recovered from a Roman shipwreck off the Greek coast in 1901, the Antikythera Mechanism is widely regarded as the world's oldest analog computer. Dating back to the second century BCE, the bronze device (1) ------- over thirty precision-cut gear wheels designed to predict astronomical positions and lunar eclipses. Modern micro-focus X-ray tomography (2) ------- inscriptions on its casing that served as an operational manual. The astonishing complexity of its differential gears indicates that Hellenistic mechanical engineering had reached a peak (3) ------- was previously thought impossible for antiquity. Historians wonder how such advanced mechanical knowledge (4) ------- lost during the subsequent centuries, only (5) ------- in fourteenth-century medieval Europe.",
    "pt": "The Antikythera Mechanism",
    "s": "Question 2",
    "o": [
      "was revealing",
      "had revealed",
      "is revealing",
      "has revealed",
      "revealed"
    ],
    "a": 3,
    "ex": "(2) Modern X-ışını tomografisinin günümüze ulaşan keşifleri: Present Perfect (has revealed).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-013",
    "t": "cloze",
    "p": "Recovered from a Roman shipwreck off the Greek coast in 1901, the Antikythera Mechanism is widely regarded as the world's oldest analog computer. Dating back to the second century BCE, the bronze device (1) ------- over thirty precision-cut gear wheels designed to predict astronomical positions and lunar eclipses. Modern micro-focus X-ray tomography (2) ------- inscriptions on its casing that served as an operational manual. The astonishing complexity of its differential gears indicates that Hellenistic mechanical engineering had reached a peak (3) ------- was previously thought impossible for antiquity. Historians wonder how such advanced mechanical knowledge (4) ------- lost during the subsequent centuries, only (5) ------- in fourteenth-century medieval Europe.",
    "pt": "The Antikythera Mechanism",
    "s": "Question 3",
    "o": [
      "what",
      "whom",
      "where",
      "whose",
      "that"
    ],
    "a": 4,
    "ex": "(3) 'a peak that was thought impossible' (imkansız görülen bir zirve); niteleyen relative pronoun.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-014",
    "t": "cloze",
    "p": "Recovered from a Roman shipwreck off the Greek coast in 1901, the Antikythera Mechanism is widely regarded as the world's oldest analog computer. Dating back to the second century BCE, the bronze device (1) ------- over thirty precision-cut gear wheels designed to predict astronomical positions and lunar eclipses. Modern micro-focus X-ray tomography (2) ------- inscriptions on its casing that served as an operational manual. The astonishing complexity of its differential gears indicates that Hellenistic mechanical engineering had reached a peak (3) ------- was previously thought impossible for antiquity. Historians wonder how such advanced mechanical knowledge (4) ------- lost during the subsequent centuries, only (5) ------- in fourteenth-century medieval Europe.",
    "pt": "The Antikythera Mechanism",
    "s": "Question 4",
    "o": [
      "could have been",
      "must be",
      "should be",
      "has to be",
      "can be"
    ],
    "a": 0,
    "ex": "(4) 'could have been lost' (nasıl kaybolmuş olabileceğini merak ederler); geçmişe yönelik olasılık/şaşkınlık.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-015",
    "t": "cloze",
    "p": "Recovered from a Roman shipwreck off the Greek coast in 1901, the Antikythera Mechanism is widely regarded as the world's oldest analog computer. Dating back to the second century BCE, the bronze device (1) ------- over thirty precision-cut gear wheels designed to predict astronomical positions and lunar eclipses. Modern micro-focus X-ray tomography (2) ------- inscriptions on its casing that served as an operational manual. The astonishing complexity of its differential gears indicates that Hellenistic mechanical engineering had reached a peak (3) ------- was previously thought impossible for antiquity. Historians wonder how such advanced mechanical knowledge (4) ------- lost during the subsequent centuries, only (5) ------- in fourteenth-century medieval Europe.",
    "pt": "The Antikythera Mechanism",
    "s": "Question 5",
    "o": [
      "re-emerging",
      "to re-emerge",
      "re-emerged",
      "having re-emerged",
      "re-emerge"
    ],
    "a": 1,
    "ex": "(5) 'only to re-emerge' (ancak yüzyıllar sonra yeniden ortaya çıkmak üzere); beklenmedik sonucu veren 'only to V1' kalıbı.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-016",
    "t": "cloze",
    "p": "Metropolitan centers frequently experience temperatures significantly higher than surrounding rural landscapes, a phenomenon (1) ------- as the urban heat island effect. Dark asphalt pavements and concrete building facades absorb intense solar radiation throughout the day and (2) ------- it as heat during the night. To combat this thermal retention, civil engineers advocate (3) ------- vegetated green roofs across downtown districts. Plant canopies lower ambient temperatures (4) ------- evapotranspiration, while also providing rainwater retention and urban biodiversity corridors. (5) ------- initial installation costs remain substantial, municipal tax rebates have made green roofing increasingly popular.",
    "pt": "Urban Heat Islands and Green Roofs",
    "s": "Question 1",
    "o": [
      "knowing",
      "knows",
      "knew",
      "known",
      "to know"
    ],
    "a": 3,
    "ex": "(1) 'a phenomenon known as...' = which is known as (edilgen kısaltma).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-017",
    "t": "cloze",
    "p": "Metropolitan centers frequently experience temperatures significantly higher than surrounding rural landscapes, a phenomenon (1) ------- as the urban heat island effect. Dark asphalt pavements and concrete building facades absorb intense solar radiation throughout the day and (2) ------- it as heat during the night. To combat this thermal retention, civil engineers advocate (3) ------- vegetated green roofs across downtown districts. Plant canopies lower ambient temperatures (4) ------- evapotranspiration, while also providing rainwater retention and urban biodiversity corridors. (5) ------- initial installation costs remain substantial, municipal tax rebates have made green roofing increasingly popular.",
    "pt": "Urban Heat Islands and Green Roofs",
    "s": "Question 2",
    "o": [
      "quench",
      "absorb",
      "withhold",
      "suppress",
      "re-emit"
    ],
    "a": 4,
    "ex": "(2) 'absorb and re-emit it' (soğurup gece ısı olarak geri yaymak).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-018",
    "t": "cloze",
    "p": "Metropolitan centers frequently experience temperatures significantly higher than surrounding rural landscapes, a phenomenon (1) ------- as the urban heat island effect. Dark asphalt pavements and concrete building facades absorb intense solar radiation throughout the day and (2) ------- it as heat during the night. To combat this thermal retention, civil engineers advocate (3) ------- vegetated green roofs across downtown districts. Plant canopies lower ambient temperatures (4) ------- evapotranspiration, while also providing rainwater retention and urban biodiversity corridors. (5) ------- initial installation costs remain substantial, municipal tax rebates have made green roofing increasingly popular.",
    "pt": "Urban Heat Islands and Green Roofs",
    "s": "Question 3",
    "o": [
      "installing",
      "to install",
      "install",
      "installed",
      "having installed"
    ],
    "a": 0,
    "ex": "(3) 'advocate + V-ing' (advocate installing vegetated roofs).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-019",
    "t": "cloze",
    "p": "Metropolitan centers frequently experience temperatures significantly higher than surrounding rural landscapes, a phenomenon (1) ------- as the urban heat island effect. Dark asphalt pavements and concrete building facades absorb intense solar radiation throughout the day and (2) ------- it as heat during the night. To combat this thermal retention, civil engineers advocate (3) ------- vegetated green roofs across downtown districts. Plant canopies lower ambient temperatures (4) ------- evapotranspiration, while also providing rainwater retention and urban biodiversity corridors. (5) ------- initial installation costs remain substantial, municipal tax rebates have made green roofing increasingly popular.",
    "pt": "Urban Heat Islands and Green Roofs",
    "s": "Question 4",
    "o": [
      "against",
      "through",
      "despite",
      "beyond",
      "under"
    ],
    "a": 1,
    "ex": "(4) 'through evapotranspiration' (terleme-buharlaşma yoluyla/aracılığıyla).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-020",
    "t": "cloze",
    "p": "Metropolitan centers frequently experience temperatures significantly higher than surrounding rural landscapes, a phenomenon (1) ------- as the urban heat island effect. Dark asphalt pavements and concrete building facades absorb intense solar radiation throughout the day and (2) ------- it as heat during the night. To combat this thermal retention, civil engineers advocate (3) ------- vegetated green roofs across downtown districts. Plant canopies lower ambient temperatures (4) ------- evapotranspiration, while also providing rainwater retention and urban biodiversity corridors. (5) ------- initial installation costs remain substantial, municipal tax rebates have made green roofing increasingly popular.",
    "pt": "Urban Heat Islands and Green Roofs",
    "s": "Question 5",
    "o": [
      "Despite",
      "Because of",
      "Although",
      "Owing to",
      "In spite of"
    ],
    "a": 2,
    "ex": "(5) 'Although initial installation costs remain substantial...' (Yüksek olmasına rağmen) + tam cümle.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-021",
    "t": "cloze",
    "p": "Along the arid trade arteries of the Silk Road, caravanserais served as vital roadside inns that fostered intercontinental commerce. Typically spaced thirty to forty kilometers apart—the distance a laden camel caravan (1) ------- in a single day—these fortified complexes provided merchants (2) ------- free lodging, fodder for pack animals, and protection from nomadic bandits. The Seljuk state financed these establishments (3) ------- royal endowments and trade customs revenues. By guaranteeing the safety of foreign travelers, imperial rulers (4) ------- stimulated long-distance trade, transforming cities like Samarkand and Tabriz into thriving economic hubs (5) ------- culture and goods intermingled.",
    "pt": "Medieval Caravanserais of the Silk Road",
    "s": "Question 1",
    "o": [
      "must cover",
      "should cover",
      "ought to cover",
      "might have covered",
      "could cover"
    ],
    "a": 4,
    "ex": "(1) 'a camel caravan could cover' (bir devenin bir günde kat edebileceği mesafe); geçmiş yetenek.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-022",
    "t": "cloze",
    "p": "Along the arid trade arteries of the Silk Road, caravanserais served as vital roadside inns that fostered intercontinental commerce. Typically spaced thirty to forty kilometers apart—the distance a laden camel caravan (1) ------- in a single day—these fortified complexes provided merchants (2) ------- free lodging, fodder for pack animals, and protection from nomadic bandits. The Seljuk state financed these establishments (3) ------- royal endowments and trade customs revenues. By guaranteeing the safety of foreign travelers, imperial rulers (4) ------- stimulated long-distance trade, transforming cities like Samarkand and Tabriz into thriving economic hubs (5) ------- culture and goods intermingled.",
    "pt": "Medieval Caravanserais of the Silk Road",
    "s": "Question 2",
    "o": [
      "with",
      "from",
      "against",
      "to",
      "for"
    ],
    "a": 0,
    "ex": "(2) 'provide someone with something' (tüccarlara barınma ve koruma sağlamak).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-023",
    "t": "cloze",
    "p": "Along the arid trade arteries of the Silk Road, caravanserais served as vital roadside inns that fostered intercontinental commerce. Typically spaced thirty to forty kilometers apart—the distance a laden camel caravan (1) ------- in a single day—these fortified complexes provided merchants (2) ------- free lodging, fodder for pack animals, and protection from nomadic bandits. The Seljuk state financed these establishments (3) ------- royal endowments and trade customs revenues. By guaranteeing the safety of foreign travelers, imperial rulers (4) ------- stimulated long-distance trade, transforming cities like Samarkand and Tabriz into thriving economic hubs (5) ------- culture and goods intermingled.",
    "pt": "Medieval Caravanserais of the Silk Road",
    "s": "Question 3",
    "o": [
      "in spite of",
      "by means of",
      "regardless of",
      "in contrast to",
      "on behalf of"
    ],
    "a": 1,
    "ex": "(3) 'by means of royal endowments' (vakıflar ve gümrük gelirleri vasıtasıyla).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-024",
    "t": "cloze",
    "p": "Along the arid trade arteries of the Silk Road, caravanserais served as vital roadside inns that fostered intercontinental commerce. Typically spaced thirty to forty kilometers apart—the distance a laden camel caravan (1) ------- in a single day—these fortified complexes provided merchants (2) ------- free lodging, fodder for pack animals, and protection from nomadic bandits. The Seljuk state financed these establishments (3) ------- royal endowments and trade customs revenues. By guaranteeing the safety of foreign travelers, imperial rulers (4) ------- stimulated long-distance trade, transforming cities like Samarkand and Tabriz into thriving economic hubs (5) ------- culture and goods intermingled.",
    "pt": "Medieval Caravanserais of the Silk Road",
    "s": "Question 4",
    "o": [
      "negligibly",
      "peripherally",
      "substantially",
      "nominally",
      "trivially"
    ],
    "a": 2,
    "ex": "(4) 'substantially stimulated' (ticareti kayda değer/büyük ölçüde canlandırdılar).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-025",
    "t": "cloze",
    "p": "Along the arid trade arteries of the Silk Road, caravanserais served as vital roadside inns that fostered intercontinental commerce. Typically spaced thirty to forty kilometers apart—the distance a laden camel caravan (1) ------- in a single day—these fortified complexes provided merchants (2) ------- free lodging, fodder for pack animals, and protection from nomadic bandits. The Seljuk state financed these establishments (3) ------- royal endowments and trade customs revenues. By guaranteeing the safety of foreign travelers, imperial rulers (4) ------- stimulated long-distance trade, transforming cities like Samarkand and Tabriz into thriving economic hubs (5) ------- culture and goods intermingled.",
    "pt": "Medieval Caravanserais of the Silk Road",
    "s": "Question 5",
    "o": [
      "which",
      "that",
      "whose",
      "where",
      "whom"
    ],
    "a": 3,
    "ex": "(5) 'economic hubs where culture and goods intermingled' (kültür ve malların kaynaştığı merkezler).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-026",
    "t": "cloze",
    "p": "In recent years, biomedical research has illuminated the intricate communication network linking the gastrointestinal tract and the central nervous system, termed the gut-brain axis. Trillions of symbiotic bacteria residing in the human colon (1) ------- a profound influence on cognitive functions and emotional regulation. These microorganisms synthesize essential neurotransmitters, (2) ------- serotonin and gamma-aminobutyric acid, which transmit biochemical signals via the vagus nerve. Disturbances in microbial composition, (3) ------- as dysbiosis, have been implicated in anxiety disorders and depression. Consequently, dietary interventions aimed at (4) ------- microbial diversity are emerging as (5) ------- therapeutic avenues in psychiatric medicine.",
    "pt": "The Gut-Brain Axis and Microbiome",
    "s": "Question 1",
    "o": [
      "exert",
      "suffer",
      "surrender",
      "forfeit",
      "repress"
    ],
    "a": 0,
    "ex": "(1) 'exert an influence on' (üzerinde derin bir etki yaratmak/etki uygulamak).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-027",
    "t": "cloze",
    "p": "In recent years, biomedical research has illuminated the intricate communication network linking the gastrointestinal tract and the central nervous system, termed the gut-brain axis. Trillions of symbiotic bacteria residing in the human colon (1) ------- a profound influence on cognitive functions and emotional regulation. These microorganisms synthesize essential neurotransmitters, (2) ------- serotonin and gamma-aminobutyric acid, which transmit biochemical signals via the vagus nerve. Disturbances in microbial composition, (3) ------- as dysbiosis, have been implicated in anxiety disorders and depression. Consequently, dietary interventions aimed at (4) ------- microbial diversity are emerging as (5) ------- therapeutic avenues in psychiatric medicine.",
    "pt": "The Gut-Brain Axis and Microbiome",
    "s": "Question 2",
    "o": [
      "excluded",
      "including",
      "included",
      "to include",
      "include"
    ],
    "a": 1,
    "ex": "(2) Örnekleme bildiren zarf fiil: 'including serotonin' (serotonin dahil).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-028",
    "t": "cloze",
    "p": "In recent years, biomedical research has illuminated the intricate communication network linking the gastrointestinal tract and the central nervous system, termed the gut-brain axis. Trillions of symbiotic bacteria residing in the human colon (1) ------- a profound influence on cognitive functions and emotional regulation. These microorganisms synthesize essential neurotransmitters, (2) ------- serotonin and gamma-aminobutyric acid, which transmit biochemical signals via the vagus nerve. Disturbances in microbial composition, (3) ------- as dysbiosis, have been implicated in anxiety disorders and depression. Consequently, dietary interventions aimed at (4) ------- microbial diversity are emerging as (5) ------- therapeutic avenues in psychiatric medicine.",
    "pt": "The Gut-Brain Axis and Microbiome",
    "s": "Question 3",
    "o": [
      "knowing",
      "knew",
      "known",
      "to know",
      "knows"
    ],
    "a": 2,
    "ex": "(3) 'Disturbances... known as dysbiosis' (disbiyozis olarak bilinen bozukluklar; edilgen kısaltma).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-029",
    "t": "cloze",
    "p": "In recent years, biomedical research has illuminated the intricate communication network linking the gastrointestinal tract and the central nervous system, termed the gut-brain axis. Trillions of symbiotic bacteria residing in the human colon (1) ------- a profound influence on cognitive functions and emotional regulation. These microorganisms synthesize essential neurotransmitters, (2) ------- serotonin and gamma-aminobutyric acid, which transmit biochemical signals via the vagus nerve. Disturbances in microbial composition, (3) ------- as dysbiosis, have been implicated in anxiety disorders and depression. Consequently, dietary interventions aimed at (4) ------- microbial diversity are emerging as (5) ------- therapeutic avenues in psychiatric medicine.",
    "pt": "The Gut-Brain Axis and Microbiome",
    "s": "Question 4",
    "o": [
      "restore",
      "restored",
      "to restore",
      "restoring",
      "restoration"
    ],
    "a": 3,
    "ex": "(4) Edat arkası gerund: 'aimed at restoring microbial diversity'.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-030",
    "t": "cloze",
    "p": "In recent years, biomedical research has illuminated the intricate communication network linking the gastrointestinal tract and the central nervous system, termed the gut-brain axis. Trillions of symbiotic bacteria residing in the human colon (1) ------- a profound influence on cognitive functions and emotional regulation. These microorganisms synthesize essential neurotransmitters, (2) ------- serotonin and gamma-aminobutyric acid, which transmit biochemical signals via the vagus nerve. Disturbances in microbial composition, (3) ------- as dysbiosis, have been implicated in anxiety disorders and depression. Consequently, dietary interventions aimed at (4) ------- microbial diversity are emerging as (5) ------- therapeutic avenues in psychiatric medicine.",
    "pt": "The Gut-Brain Axis and Microbiome",
    "s": "Question 5",
    "o": [
      "hopeless",
      "obsolete",
      "detrimental",
      "futile",
      "promising"
    ],
    "a": 4,
    "ex": "(5) 'promising therapeutic avenues' (umut vadeden tedavi yolları).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-031",
    "t": "cloze",
    "p": "Deep learning algorithms have demonstrated remarkable proficiency in interpreting complex diagnostic imaging datasets. Convolutional neural networks, trained on millions of labeled tomographies, can (1) ------- detect malignant micro-calcifications that human radiologists might overlook during routine screenings. (2) -------, artificial intelligence systems never suffer from physical fatigue or perceptual distraction. Despite these undeniable advantages, legal scholars caution that autonomous diagnostic systems cannot entirely (3) ------- board-certified medical practitioners. Accountability for false negatives (4) ------- rests with human physicians, making hybrid collaborative workflows the most (5) ------- operational model for the foreseeable future.",
    "pt": "Artificial Intelligence in Clinical Radiology",
    "s": "Question 1",
    "o": [
      "erratically",
      "accurately",
      "haphazardly",
      "negligently",
      "carelessly"
    ],
    "a": 1,
    "ex": "(1) 'accurately detect' (doğru ve hatasız biçimde tespit etmek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-032",
    "t": "cloze",
    "p": "Deep learning algorithms have demonstrated remarkable proficiency in interpreting complex diagnostic imaging datasets. Convolutional neural networks, trained on millions of labeled tomographies, can (1) ------- detect malignant micro-calcifications that human radiologists might overlook during routine screenings. (2) -------, artificial intelligence systems never suffer from physical fatigue or perceptual distraction. Despite these undeniable advantages, legal scholars caution that autonomous diagnostic systems cannot entirely (3) ------- board-certified medical practitioners. Accountability for false negatives (4) ------- rests with human physicians, making hybrid collaborative workflows the most (5) ------- operational model for the foreseeable future.",
    "pt": "Artificial Intelligence in Clinical Radiology",
    "s": "Question 2",
    "o": [
      "Nevertheless",
      "Otherwise",
      "Moreover",
      "Instead",
      "On the contrary"
    ],
    "a": 2,
    "ex": "(2) Ek avantaj sunan geçiş zarfı: 'Moreover' (Dahası/Üstelik yorulmazlar).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-033",
    "t": "cloze",
    "p": "Deep learning algorithms have demonstrated remarkable proficiency in interpreting complex diagnostic imaging datasets. Convolutional neural networks, trained on millions of labeled tomographies, can (1) ------- detect malignant micro-calcifications that human radiologists might overlook during routine screenings. (2) -------, artificial intelligence systems never suffer from physical fatigue or perceptual distraction. Despite these undeniable advantages, legal scholars caution that autonomous diagnostic systems cannot entirely (3) ------- board-certified medical practitioners. Accountability for false negatives (4) ------- rests with human physicians, making hybrid collaborative workflows the most (5) ------- operational model for the foreseeable future.",
    "pt": "Artificial Intelligence in Clinical Radiology",
    "s": "Question 3",
    "o": [
      "foster",
      "endorse",
      "nurture",
      "supplant",
      "bolster"
    ],
    "a": 3,
    "ex": "(3) 'supplant practitioners' (uzman hekimlerin yerini tamamen almak/onları tahtından etmek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-034",
    "t": "cloze",
    "p": "Deep learning algorithms have demonstrated remarkable proficiency in interpreting complex diagnostic imaging datasets. Convolutional neural networks, trained on millions of labeled tomographies, can (1) ------- detect malignant micro-calcifications that human radiologists might overlook during routine screenings. (2) -------, artificial intelligence systems never suffer from physical fatigue or perceptual distraction. Despite these undeniable advantages, legal scholars caution that autonomous diagnostic systems cannot entirely (3) ------- board-certified medical practitioners. Accountability for false negatives (4) ------- rests with human physicians, making hybrid collaborative workflows the most (5) ------- operational model for the foreseeable future.",
    "pt": "Artificial Intelligence in Clinical Radiology",
    "s": "Question 4",
    "o": [
      "superficially",
      "scantly",
      "marginally",
      "fleetingly",
      "ultimately"
    ],
    "a": 4,
    "ex": "(4) 'ultimately rests with' (nihayetinde hekimlerin sorumluluğundadır).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-035",
    "t": "cloze",
    "p": "Deep learning algorithms have demonstrated remarkable proficiency in interpreting complex diagnostic imaging datasets. Convolutional neural networks, trained on millions of labeled tomographies, can (1) ------- detect malignant micro-calcifications that human radiologists might overlook during routine screenings. (2) -------, artificial intelligence systems never suffer from physical fatigue or perceptual distraction. Despite these undeniable advantages, legal scholars caution that autonomous diagnostic systems cannot entirely (3) ------- board-certified medical practitioners. Accountability for false negatives (4) ------- rests with human physicians, making hybrid collaborative workflows the most (5) ------- operational model for the foreseeable future.",
    "pt": "Artificial Intelligence in Clinical Radiology",
    "s": "Question 5",
    "o": [
      "viable",
      "futile",
      "unfeasible",
      "hazardous",
      "barren"
    ],
    "a": 0,
    "ex": "(5) 'viable operational model' (uygulanabilir/en mantıklı çalışma modeli).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-036",
    "t": "cloze",
    "p": "Major plinian volcanic eruptions inject vast plumes of sulfur dioxide aerosol directly into the stratosphere, where they reflect incoming solar irradiance. In 536 CE, a colossal volcanic eruption in the Northern Hemisphere plunged Eurasia (1) ------- a prolonged volcanic winter. Tree-ring chronologies reveal that summer temperatures plummeted (2) ------- several degrees Celsius, causing widespread crop failures and famine from Ireland to China. Byzantine historians documented that the sun shone with the dimness of the moon for nearly eighteen months. (3) ------- food security collapsed, weakened populations became highly susceptible (4) ------- the Justinianic Plague. This catastrophic convergence demonstrates how geophysical events can severely (5) ------- human geopolitical stability.",
    "pt": "Volcanic Forcing and Historical Climate Crises",
    "s": "Question 1",
    "o": [
      "onto",
      "against",
      "into",
      "under",
      "with"
    ],
    "a": 2,
    "ex": "(1) 'plunge someone into...' (bir şeye/karanlığa sürüklemek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-037",
    "t": "cloze",
    "p": "Major plinian volcanic eruptions inject vast plumes of sulfur dioxide aerosol directly into the stratosphere, where they reflect incoming solar irradiance. In 536 CE, a colossal volcanic eruption in the Northern Hemisphere plunged Eurasia (1) ------- a prolonged volcanic winter. Tree-ring chronologies reveal that summer temperatures plummeted (2) ------- several degrees Celsius, causing widespread crop failures and famine from Ireland to China. Byzantine historians documented that the sun shone with the dimness of the moon for nearly eighteen months. (3) ------- food security collapsed, weakened populations became highly susceptible (4) ------- the Justinianic Plague. This catastrophic convergence demonstrates how geophysical events can severely (5) ------- human geopolitical stability.",
    "pt": "Volcanic Forcing and Historical Climate Crises",
    "s": "Question 2",
    "o": [
      "at",
      "on",
      "in",
      "by",
      "from"
    ],
    "a": 3,
    "ex": "(2) Değişim miktarını belirten edat: 'plummeted by several degrees' (birkaç derece birden düşmek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-038",
    "t": "cloze",
    "p": "Major plinian volcanic eruptions inject vast plumes of sulfur dioxide aerosol directly into the stratosphere, where they reflect incoming solar irradiance. In 536 CE, a colossal volcanic eruption in the Northern Hemisphere plunged Eurasia (1) ------- a prolonged volcanic winter. Tree-ring chronologies reveal that summer temperatures plummeted (2) ------- several degrees Celsius, causing widespread crop failures and famine from Ireland to China. Byzantine historians documented that the sun shone with the dimness of the moon for nearly eighteen months. (3) ------- food security collapsed, weakened populations became highly susceptible (4) ------- the Justinianic Plague. This catastrophic convergence demonstrates how geophysical events can severely (5) ------- human geopolitical stability.",
    "pt": "Volcanic Forcing and Historical Climate Crises",
    "s": "Question 3",
    "o": [
      "Despite",
      "Whereas",
      "In spite of",
      "Regardless of",
      "As"
    ],
    "a": 4,
    "ex": "(3) Zaman ve neden bağlacı + cümle: 'As food security collapsed' (Gıda güvenliği çöktükçe).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-039",
    "t": "cloze",
    "p": "Major plinian volcanic eruptions inject vast plumes of sulfur dioxide aerosol directly into the stratosphere, where they reflect incoming solar irradiance. In 536 CE, a colossal volcanic eruption in the Northern Hemisphere plunged Eurasia (1) ------- a prolonged volcanic winter. Tree-ring chronologies reveal that summer temperatures plummeted (2) ------- several degrees Celsius, causing widespread crop failures and famine from Ireland to China. Byzantine historians documented that the sun shone with the dimness of the moon for nearly eighteen months. (3) ------- food security collapsed, weakened populations became highly susceptible (4) ------- the Justinianic Plague. This catastrophic convergence demonstrates how geophysical events can severely (5) ------- human geopolitical stability.",
    "pt": "Volcanic Forcing and Historical Climate Crises",
    "s": "Question 4",
    "o": [
      "to",
      "with",
      "from",
      "for",
      "at"
    ],
    "a": 0,
    "ex": "(4) 'susceptible to the plague' (vebaya karşı savunmasız/açık).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-040",
    "t": "cloze",
    "p": "Major plinian volcanic eruptions inject vast plumes of sulfur dioxide aerosol directly into the stratosphere, where they reflect incoming solar irradiance. In 536 CE, a colossal volcanic eruption in the Northern Hemisphere plunged Eurasia (1) ------- a prolonged volcanic winter. Tree-ring chronologies reveal that summer temperatures plummeted (2) ------- several degrees Celsius, causing widespread crop failures and famine from Ireland to China. Byzantine historians documented that the sun shone with the dimness of the moon for nearly eighteen months. (3) ------- food security collapsed, weakened populations became highly susceptible (4) ------- the Justinianic Plague. This catastrophic convergence demonstrates how geophysical events can severely (5) ------- human geopolitical stability.",
    "pt": "Volcanic Forcing and Historical Climate Crises",
    "s": "Question 5",
    "o": [
      "fortify",
      "destabilize",
      "bolster",
      "buttress",
      "reinforce"
    ],
    "a": 1,
    "ex": "(5) 'destabilize geopolitical stability' (jeopolitik istikrarı derinden sarsmak).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-041",
    "t": "cloze",
    "p": "Discovered by French soldiers near the Nile Delta town of Rashid in 1799, the Rosetta Stone provided the indispensable key to unlocking ancient Egyptian hieroglyphic script. The basalt stele bears an imperial decree issued in 196 BCE, inscribed in three distinct scripts: Egyptian hieroglyphs, Demotic, and Ancient Greek. (1) ------- scholars could readily comprehend the Greek text, they were able to cross-reference proper nouns and imperial cartouches. Jean-François Champollion finally (2) ------- the code in 1822, recognizing that hieroglyphs represented both phonetic sounds and ideographic concepts. His breakthrough transformed Egyptology from romantic speculation (3) ------- a rigorous philological discipline. (4) ------- his premature death at age forty-one, Champollion had compiled an extensive Egyptian grammar (5) ------- continues to instruct modern linguists.",
    "pt": "Deciphering the Rosetta Stone",
    "s": "Question 1",
    "o": [
      "Although",
      "Whereas",
      "While",
      "Because",
      "Despite"
    ],
    "a": 3,
    "ex": "(1) 'Because scholars could readily comprehend...' (Yunan metnini anlayabildikleri için) neden bağlacı.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-042",
    "t": "cloze",
    "p": "Discovered by French soldiers near the Nile Delta town of Rashid in 1799, the Rosetta Stone provided the indispensable key to unlocking ancient Egyptian hieroglyphic script. The basalt stele bears an imperial decree issued in 196 BCE, inscribed in three distinct scripts: Egyptian hieroglyphs, Demotic, and Ancient Greek. (1) ------- scholars could readily comprehend the Greek text, they were able to cross-reference proper nouns and imperial cartouches. Jean-François Champollion finally (2) ------- the code in 1822, recognizing that hieroglyphs represented both phonetic sounds and ideographic concepts. His breakthrough transformed Egyptology from romantic speculation (3) ------- a rigorous philological discipline. (4) ------- his premature death at age forty-one, Champollion had compiled an extensive Egyptian grammar (5) ------- continues to instruct modern linguists.",
    "pt": "Deciphering the Rosetta Stone",
    "s": "Question 2",
    "o": [
      "distorted",
      "forfeited",
      "buried",
      "concealed",
      "cracked"
    ],
    "a": 4,
    "ex": "(2) 'cracked the code' (şifreyi çözdü).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-043",
    "t": "cloze",
    "p": "Discovered by French soldiers near the Nile Delta town of Rashid in 1799, the Rosetta Stone provided the indispensable key to unlocking ancient Egyptian hieroglyphic script. The basalt stele bears an imperial decree issued in 196 BCE, inscribed in three distinct scripts: Egyptian hieroglyphs, Demotic, and Ancient Greek. (1) ------- scholars could readily comprehend the Greek text, they were able to cross-reference proper nouns and imperial cartouches. Jean-François Champollion finally (2) ------- the code in 1822, recognizing that hieroglyphs represented both phonetic sounds and ideographic concepts. His breakthrough transformed Egyptology from romantic speculation (3) ------- a rigorous philological discipline. (4) ------- his premature death at age forty-one, Champollion had compiled an extensive Egyptian grammar (5) ------- continues to instruct modern linguists.",
    "pt": "Deciphering the Rosetta Stone",
    "s": "Question 3",
    "o": [
      "into",
      "onto",
      "against",
      "from",
      "towards"
    ],
    "a": 0,
    "ex": "(3) 'transform from A into B' (spekülasyondan titiz bir disipline dönüştürmek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-044",
    "t": "cloze",
    "p": "Discovered by French soldiers near the Nile Delta town of Rashid in 1799, the Rosetta Stone provided the indispensable key to unlocking ancient Egyptian hieroglyphic script. The basalt stele bears an imperial decree issued in 196 BCE, inscribed in three distinct scripts: Egyptian hieroglyphs, Demotic, and Ancient Greek. (1) ------- scholars could readily comprehend the Greek text, they were able to cross-reference proper nouns and imperial cartouches. Jean-François Champollion finally (2) ------- the code in 1822, recognizing that hieroglyphs represented both phonetic sounds and ideographic concepts. His breakthrough transformed Egyptology from romantic speculation (3) ------- a rigorous philological discipline. (4) ------- his premature death at age forty-one, Champollion had compiled an extensive Egyptian grammar (5) ------- continues to instruct modern linguists.",
    "pt": "Deciphering the Rosetta Stone",
    "s": "Question 4",
    "o": [
      "Despite of",
      "Prior to",
      "Owing",
      "Because",
      "Due"
    ],
    "a": 1,
    "ex": "(4) 'Prior to his premature death' (Erken ölümünden önce) + isim öbeği.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-045",
    "t": "cloze",
    "p": "Discovered by French soldiers near the Nile Delta town of Rashid in 1799, the Rosetta Stone provided the indispensable key to unlocking ancient Egyptian hieroglyphic script. The basalt stele bears an imperial decree issued in 196 BCE, inscribed in three distinct scripts: Egyptian hieroglyphs, Demotic, and Ancient Greek. (1) ------- scholars could readily comprehend the Greek text, they were able to cross-reference proper nouns and imperial cartouches. Jean-François Champollion finally (2) ------- the code in 1822, recognizing that hieroglyphs represented both phonetic sounds and ideographic concepts. His breakthrough transformed Egyptology from romantic speculation (3) ------- a rigorous philological discipline. (4) ------- his premature death at age forty-one, Champollion had compiled an extensive Egyptian grammar (5) ------- continues to instruct modern linguists.",
    "pt": "Deciphering the Rosetta Stone",
    "s": "Question 5",
    "o": [
      "who",
      "whom",
      "that",
      "where",
      "whose"
    ],
    "a": 2,
    "ex": "(5) 'an Egyptian grammar that continues to instruct' (bilgi vermeyi sürdüren gramer kitabı); nesne relative pronoun.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-046",
    "t": "cloze",
    "p": "Coral reefs, frequently dubbed the rainforests of the ocean, support nearly twenty-five percent of all marine species despite occupying less than one percent of the sea floor. Scleractinian corals maintain an obligate mutualistic relationship with microscopic dinoflagellate algae known as zooxanthellae, (1) ------- reside within coral polyp tissues. Under prolonged elevated sea surface temperatures, corals experience thermal stress and expel these pigmented symbionts, (2) ------- their stark white calcium carbonate skeletons. If water temperatures (3) ------- to normal baseline ranges within several weeks, the bleached corals will starve and succumb to bacterial infections. Marine biologists warn that without drastic greenhouse gas curbs, global coral coverage (4) ------- by ninety percent before the century (5) -------.",
    "pt": "Coral Bleaching and Ocean Warming",
    "s": "Question 1",
    "o": [
      "whom",
      "who",
      "where",
      "whose",
      "which"
    ],
    "a": 4,
    "ex": "(1) Zooxanthellae (algler) için non-defining relative pronoun: 'which reside within tissues'.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-047",
    "t": "cloze",
    "p": "Coral reefs, frequently dubbed the rainforests of the ocean, support nearly twenty-five percent of all marine species despite occupying less than one percent of the sea floor. Scleractinian corals maintain an obligate mutualistic relationship with microscopic dinoflagellate algae known as zooxanthellae, (1) ------- reside within coral polyp tissues. Under prolonged elevated sea surface temperatures, corals experience thermal stress and expel these pigmented symbionts, (2) ------- their stark white calcium carbonate skeletons. If water temperatures (3) ------- to normal baseline ranges within several weeks, the bleached corals will starve and succumb to bacterial infections. Marine biologists warn that without drastic greenhouse gas curbs, global coral coverage (4) ------- by ninety percent before the century (5) -------.",
    "pt": "Coral Bleaching and Ocean Warming",
    "s": "Question 2",
    "o": [
      "exposing",
      "exposed",
      "having exposed",
      "to expose",
      "expose"
    ],
    "a": 0,
    "ex": "(2) Aktif sonuç kısaltması: 'exposing their stark white skeletons' (beyaz iskeletlerini açığa çıkararak).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-048",
    "t": "cloze",
    "p": "Coral reefs, frequently dubbed the rainforests of the ocean, support nearly twenty-five percent of all marine species despite occupying less than one percent of the sea floor. Scleractinian corals maintain an obligate mutualistic relationship with microscopic dinoflagellate algae known as zooxanthellae, (1) ------- reside within coral polyp tissues. Under prolonged elevated sea surface temperatures, corals experience thermal stress and expel these pigmented symbionts, (2) ------- their stark white calcium carbonate skeletons. If water temperatures (3) ------- to normal baseline ranges within several weeks, the bleached corals will starve and succumb to bacterial infections. Marine biologists warn that without drastic greenhouse gas curbs, global coral coverage (4) ------- by ninety percent before the century (5) -------.",
    "pt": "Coral Bleaching and Ocean Warming",
    "s": "Question 3",
    "o": [
      "will not return",
      "do not return",
      "did not return",
      "had not returned",
      "would not return"
    ],
    "a": 1,
    "ex": "(3) Type 1 koşul cümlesi yan cümlecik: If + Present Simple ('do not return').",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-049",
    "t": "cloze",
    "p": "Coral reefs, frequently dubbed the rainforests of the ocean, support nearly twenty-five percent of all marine species despite occupying less than one percent of the sea floor. Scleractinian corals maintain an obligate mutualistic relationship with microscopic dinoflagellate algae known as zooxanthellae, (1) ------- reside within coral polyp tissues. Under prolonged elevated sea surface temperatures, corals experience thermal stress and expel these pigmented symbionts, (2) ------- their stark white calcium carbonate skeletons. If water temperatures (3) ------- to normal baseline ranges within several weeks, the bleached corals will starve and succumb to bacterial infections. Marine biologists warn that without drastic greenhouse gas curbs, global coral coverage (4) ------- by ninety percent before the century (5) -------.",
    "pt": "Coral Bleaching and Ocean Warming",
    "s": "Question 4",
    "o": [
      "contracted",
      "had contracted",
      "will contract",
      "has contracted",
      "contracts"
    ],
    "a": 2,
    "ex": "(4) Gelecek tahmini ana cümle: 'global coral coverage will contract'.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-050",
    "t": "cloze",
    "p": "Coral reefs, frequently dubbed the rainforests of the ocean, support nearly twenty-five percent of all marine species despite occupying less than one percent of the sea floor. Scleractinian corals maintain an obligate mutualistic relationship with microscopic dinoflagellate algae known as zooxanthellae, (1) ------- reside within coral polyp tissues. Under prolonged elevated sea surface temperatures, corals experience thermal stress and expel these pigmented symbionts, (2) ------- their stark white calcium carbonate skeletons. If water temperatures (3) ------- to normal baseline ranges within several weeks, the bleached corals will starve and succumb to bacterial infections. Marine biologists warn that without drastic greenhouse gas curbs, global coral coverage (4) ------- by ninety percent before the century (5) -------.",
    "pt": "Coral Bleaching and Ocean Warming",
    "s": "Question 5",
    "o": [
      "will end",
      "ended",
      "has ended",
      "ends",
      "is ending"
    ],
    "a": 3,
    "ex": "(5) 'before the century ends' (zaman bağlacı yan cümlesi kuralı: Present Simple).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-051",
    "t": "cloze",
    "p": "Pterosaurs were the earliest vertebrates known to have evolved powered flapping flight, dominating Mesozoic skies for over one hundred and fifty million years. Unlike birds, whose wings (1) ------- primarily of specialized feathers, pterosaur flight membranes were composed of tough skin and muscle tissue braced by an elongated fourth digit. To achieve takeoff with wingspans exceeding ten meters, large pterosaurs (2) ------- an explosive quadrupedal vault, pushing off the ground using both forelimbs and hindlimbs simultaneously. Their hollow, air-filled bones significantly reduced skeletal mass (3) ------- compromising structural rigidity. (4) ------- their sudden extinction at the Cretaceous-Paleogene boundary, these remarkable reptiles (5) ------- a staggering variety of ecological niches across all continents.",
    "pt": "The Evolutionary Biomechanics of Pterosaurs",
    "s": "Question 1",
    "o": [
      "consist",
      "consisting",
      "are consisted",
      "have consisted",
      "had consisted"
    ],
    "a": 0,
    "ex": "(1) 'wings consist of...' (kanatları tüylerden oluşur; aktif geniş zaman).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-052",
    "t": "cloze",
    "p": "Pterosaurs were the earliest vertebrates known to have evolved powered flapping flight, dominating Mesozoic skies for over one hundred and fifty million years. Unlike birds, whose wings (1) ------- primarily of specialized feathers, pterosaur flight membranes were composed of tough skin and muscle tissue braced by an elongated fourth digit. To achieve takeoff with wingspans exceeding ten meters, large pterosaurs (2) ------- an explosive quadrupedal vault, pushing off the ground using both forelimbs and hindlimbs simultaneously. Their hollow, air-filled bones significantly reduced skeletal mass (3) ------- compromising structural rigidity. (4) ------- their sudden extinction at the Cretaceous-Paleogene boundary, these remarkable reptiles (5) ------- a staggering variety of ecological niches across all continents.",
    "pt": "The Evolutionary Biomechanics of Pterosaurs",
    "s": "Question 2",
    "o": [
      "forfeited",
      "utilized",
      "discarded",
      "impeded",
      "stifled"
    ],
    "a": 1,
    "ex": "(2) 'utilized an explosive quadrupedal vault' (dört ayaklı fırlama mekanizmasını kullandılar).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-053",
    "t": "cloze",
    "p": "Pterosaurs were the earliest vertebrates known to have evolved powered flapping flight, dominating Mesozoic skies for over one hundred and fifty million years. Unlike birds, whose wings (1) ------- primarily of specialized feathers, pterosaur flight membranes were composed of tough skin and muscle tissue braced by an elongated fourth digit. To achieve takeoff with wingspans exceeding ten meters, large pterosaurs (2) ------- an explosive quadrupedal vault, pushing off the ground using both forelimbs and hindlimbs simultaneously. Their hollow, air-filled bones significantly reduced skeletal mass (3) ------- compromising structural rigidity. (4) ------- their sudden extinction at the Cretaceous-Paleogene boundary, these remarkable reptiles (5) ------- a staggering variety of ecological niches across all continents.",
    "pt": "The Evolutionary Biomechanics of Pterosaurs",
    "s": "Question 3",
    "o": [
      "with",
      "beyond",
      "without",
      "against",
      "under"
    ],
    "a": 2,
    "ex": "(3) 'without compromising structural rigidity' (yapısal sertlikten ödün vermeden).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-054",
    "t": "cloze",
    "p": "Pterosaurs were the earliest vertebrates known to have evolved powered flapping flight, dominating Mesozoic skies for over one hundred and fifty million years. Unlike birds, whose wings (1) ------- primarily of specialized feathers, pterosaur flight membranes were composed of tough skin and muscle tissue braced by an elongated fourth digit. To achieve takeoff with wingspans exceeding ten meters, large pterosaurs (2) ------- an explosive quadrupedal vault, pushing off the ground using both forelimbs and hindlimbs simultaneously. Their hollow, air-filled bones significantly reduced skeletal mass (3) ------- compromising structural rigidity. (4) ------- their sudden extinction at the Cretaceous-Paleogene boundary, these remarkable reptiles (5) ------- a staggering variety of ecological niches across all continents.",
    "pt": "The Evolutionary Biomechanics of Pterosaurs",
    "s": "Question 4",
    "o": [
      "Since",
      "While",
      "As",
      "Until",
      "Although"
    ],
    "a": 3,
    "ex": "(4) 'Until their sudden extinction...' (Ani yok oluşlarına kadar) + isim öbeği.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-055",
    "t": "cloze",
    "p": "Pterosaurs were the earliest vertebrates known to have evolved powered flapping flight, dominating Mesozoic skies for over one hundred and fifty million years. Unlike birds, whose wings (1) ------- primarily of specialized feathers, pterosaur flight membranes were composed of tough skin and muscle tissue braced by an elongated fourth digit. To achieve takeoff with wingspans exceeding ten meters, large pterosaurs (2) ------- an explosive quadrupedal vault, pushing off the ground using both forelimbs and hindlimbs simultaneously. Their hollow, air-filled bones significantly reduced skeletal mass (3) ------- compromising structural rigidity. (4) ------- their sudden extinction at the Cretaceous-Paleogene boundary, these remarkable reptiles (5) ------- a staggering variety of ecological niches across all continents.",
    "pt": "The Evolutionary Biomechanics of Pterosaurs",
    "s": "Question 5",
    "o": [
      "had been occupying",
      "were occupying",
      "occupy",
      "will occupy",
      "occupied"
    ],
    "a": 4,
    "ex": "(5) 'occupied a staggering variety of niches' (çeşitli ekolojik nişleri doldurdular).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-056",
    "t": "cloze",
    "p": "Epidemiological studies have revealed that individuals with higher educational attainment and mentally stimulating occupations exhibit greater resistance (1) ------- clinical symptoms of dementia. This phenomenon, known as cognitive reserve, posits that lifelong intellectual engagement fosters alternative neural circuitry capable of compensating (2) ------- Alzheimer's pathology. Post-mortem examinations have identified individuals whose brains harbored advanced neurofibrillary tangles, (3) ------- who displayed no cognitive impairment while alive. Engaging in bilingual communication, musical performance, and strategic gaming appears to (4) ------- the structural integrity of white matter tracts. Therefore, cognitive reserve (5) ------- not merely as a passive biological inheritance, but as a malleable lifelong asset.",
    "pt": "Cognitive Reserve and Healthy Brain Aging",
    "s": "Question 1",
    "o": [
      "with",
      "to",
      "from",
      "for",
      "at"
    ],
    "a": 1,
    "ex": "(1) 'resistance to symptoms' (semptomlara karşı direnç).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-057",
    "t": "cloze",
    "p": "Epidemiological studies have revealed that individuals with higher educational attainment and mentally stimulating occupations exhibit greater resistance (1) ------- clinical symptoms of dementia. This phenomenon, known as cognitive reserve, posits that lifelong intellectual engagement fosters alternative neural circuitry capable of compensating (2) ------- Alzheimer's pathology. Post-mortem examinations have identified individuals whose brains harbored advanced neurofibrillary tangles, (3) ------- who displayed no cognitive impairment while alive. Engaging in bilingual communication, musical performance, and strategic gaming appears to (4) ------- the structural integrity of white matter tracts. Therefore, cognitive reserve (5) ------- not merely as a passive biological inheritance, but as a malleable lifelong asset.",
    "pt": "Cognitive Reserve and Healthy Brain Aging",
    "s": "Question 2",
    "o": [
      "with",
      "from",
      "for",
      "by",
      "at"
    ],
    "a": 2,
    "ex": "(2) 'compensating for Alzheimer's pathology' (patolojiyi telafi etme/dengeleme).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-058",
    "t": "cloze",
    "p": "Epidemiological studies have revealed that individuals with higher educational attainment and mentally stimulating occupations exhibit greater resistance (1) ------- clinical symptoms of dementia. This phenomenon, known as cognitive reserve, posits that lifelong intellectual engagement fosters alternative neural circuitry capable of compensating (2) ------- Alzheimer's pathology. Post-mortem examinations have identified individuals whose brains harbored advanced neurofibrillary tangles, (3) ------- who displayed no cognitive impairment while alive. Engaging in bilingual communication, musical performance, and strategic gaming appears to (4) ------- the structural integrity of white matter tracts. Therefore, cognitive reserve (5) ------- not merely as a passive biological inheritance, but as a malleable lifelong asset.",
    "pt": "Cognitive Reserve and Healthy Brain Aging",
    "s": "Question 3",
    "o": [
      "because",
      "so",
      "therefore",
      "yet",
      "moreover"
    ],
    "a": 3,
    "ex": "(3) Beklenmedik zıtlık bağlacı: 'tangles vardı, yine de (yet) hiçbir zihinsel gerileme göstermediler'.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-059",
    "t": "cloze",
    "p": "Epidemiological studies have revealed that individuals with higher educational attainment and mentally stimulating occupations exhibit greater resistance (1) ------- clinical symptoms of dementia. This phenomenon, known as cognitive reserve, posits that lifelong intellectual engagement fosters alternative neural circuitry capable of compensating (2) ------- Alzheimer's pathology. Post-mortem examinations have identified individuals whose brains harbored advanced neurofibrillary tangles, (3) ------- who displayed no cognitive impairment while alive. Engaging in bilingual communication, musical performance, and strategic gaming appears to (4) ------- the structural integrity of white matter tracts. Therefore, cognitive reserve (5) ------- not merely as a passive biological inheritance, but as a malleable lifelong asset.",
    "pt": "Cognitive Reserve and Healthy Brain Aging",
    "s": "Question 4",
    "o": [
      "deteriorate",
      "impede",
      "undermine",
      "curtail",
      "reinforce"
    ],
    "a": 4,
    "ex": "(4) 'reinforce structural integrity' (yapısal bütünlüğü güçlendirmek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-060",
    "t": "cloze",
    "p": "Epidemiological studies have revealed that individuals with higher educational attainment and mentally stimulating occupations exhibit greater resistance (1) ------- clinical symptoms of dementia. This phenomenon, known as cognitive reserve, posits that lifelong intellectual engagement fosters alternative neural circuitry capable of compensating (2) ------- Alzheimer's pathology. Post-mortem examinations have identified individuals whose brains harbored advanced neurofibrillary tangles, (3) ------- who displayed no cognitive impairment while alive. Engaging in bilingual communication, musical performance, and strategic gaming appears to (4) ------- the structural integrity of white matter tracts. Therefore, cognitive reserve (5) ------- not merely as a passive biological inheritance, but as a malleable lifelong asset.",
    "pt": "Cognitive Reserve and Healthy Brain Aging",
    "s": "Question 5",
    "o": [
      "operates",
      "operated",
      "is operating",
      "had operated",
      "was operated"
    ],
    "a": 0,
    "ex": "(5) Bilimsel gerçeklik / genel tanım: Present Simple ('operates not merely as...').",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-061",
    "t": "cloze",
    "p": "While battery electric vehicles are rapidly transforming passenger transit, heavy industrial sectors such as steelmaking and maritime shipping require high-density chemical fuels to decarbonize. Green hydrogen, produced (1) ------- the electrolysis of water utilizing surplus renewable electricity, offers a zero-emission alternative to coking coal. (2) -------, transporting and storing molecular hydrogen presents formidable engineering challenges due to its low volumetric energy density and tendency to embrittle metal pipelines. Engineers are developing ammonia synthesis and liquid organic hydrogen carriers to mitigate these transport hazards. If industrial scale-up continues at present rates, green hydrogen (3) ------- cost-competitive with fossil fuels (4) ------- the mid-2030s, (5) ------- a cornerstone of net-zero heavy manufacturing.",
    "pt": "Green Hydrogen and Industrial Decarbonization",
    "s": "Question 1",
    "o": [
      "against",
      "despite",
      "via",
      "beyond",
      "under"
    ],
    "a": 2,
    "ex": "(1) 'produced via the electrolysis...' (elektroliz yoluyla üretilen).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-062",
    "t": "cloze",
    "p": "While battery electric vehicles are rapidly transforming passenger transit, heavy industrial sectors such as steelmaking and maritime shipping require high-density chemical fuels to decarbonize. Green hydrogen, produced (1) ------- the electrolysis of water utilizing surplus renewable electricity, offers a zero-emission alternative to coking coal. (2) -------, transporting and storing molecular hydrogen presents formidable engineering challenges due to its low volumetric energy density and tendency to embrittle metal pipelines. Engineers are developing ammonia synthesis and liquid organic hydrogen carriers to mitigate these transport hazards. If industrial scale-up continues at present rates, green hydrogen (3) ------- cost-competitive with fossil fuels (4) ------- the mid-2030s, (5) ------- a cornerstone of net-zero heavy manufacturing.",
    "pt": "Green Hydrogen and Industrial Decarbonization",
    "s": "Question 2",
    "o": [
      "Furthermore",
      "Consequently",
      "Similarly",
      "However",
      "Likewise"
    ],
    "a": 3,
    "ex": "(2) Zıtlık geçiş zarfı: 'However, transporting... presents challenges' (Ancak taşınması zorluklar yaratır).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-063",
    "t": "cloze",
    "p": "While battery electric vehicles are rapidly transforming passenger transit, heavy industrial sectors such as steelmaking and maritime shipping require high-density chemical fuels to decarbonize. Green hydrogen, produced (1) ------- the electrolysis of water utilizing surplus renewable electricity, offers a zero-emission alternative to coking coal. (2) -------, transporting and storing molecular hydrogen presents formidable engineering challenges due to its low volumetric energy density and tendency to embrittle metal pipelines. Engineers are developing ammonia synthesis and liquid organic hydrogen carriers to mitigate these transport hazards. If industrial scale-up continues at present rates, green hydrogen (3) ------- cost-competitive with fossil fuels (4) ------- the mid-2030s, (5) ------- a cornerstone of net-zero heavy manufacturing.",
    "pt": "Green Hydrogen and Industrial Decarbonization",
    "s": "Question 3",
    "o": [
      "became",
      "had become",
      "has become",
      "becomes",
      "will become"
    ],
    "a": 4,
    "ex": "(3) Gelecek öngörüsü ana cümle: 'green hydrogen will become cost-competitive'.",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-064",
    "t": "cloze",
    "p": "While battery electric vehicles are rapidly transforming passenger transit, heavy industrial sectors such as steelmaking and maritime shipping require high-density chemical fuels to decarbonize. Green hydrogen, produced (1) ------- the electrolysis of water utilizing surplus renewable electricity, offers a zero-emission alternative to coking coal. (2) -------, transporting and storing molecular hydrogen presents formidable engineering challenges due to its low volumetric energy density and tendency to embrittle metal pipelines. Engineers are developing ammonia synthesis and liquid organic hydrogen carriers to mitigate these transport hazards. If industrial scale-up continues at present rates, green hydrogen (3) ------- cost-competitive with fossil fuels (4) ------- the mid-2030s, (5) ------- a cornerstone of net-zero heavy manufacturing.",
    "pt": "Green Hydrogen and Industrial Decarbonization",
    "s": "Question 4",
    "o": [
      "by",
      "at",
      "in",
      "from",
      "on"
    ],
    "a": 0,
    "ex": "(4) Belirli bir tarihe kadar: 'by the mid-2030s' (2030'ların ortasına kadar).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-065",
    "t": "cloze",
    "p": "While battery electric vehicles are rapidly transforming passenger transit, heavy industrial sectors such as steelmaking and maritime shipping require high-density chemical fuels to decarbonize. Green hydrogen, produced (1) ------- the electrolysis of water utilizing surplus renewable electricity, offers a zero-emission alternative to coking coal. (2) -------, transporting and storing molecular hydrogen presents formidable engineering challenges due to its low volumetric energy density and tendency to embrittle metal pipelines. Engineers are developing ammonia synthesis and liquid organic hydrogen carriers to mitigate these transport hazards. If industrial scale-up continues at present rates, green hydrogen (3) ------- cost-competitive with fossil fuels (4) ------- the mid-2030s, (5) ------- a cornerstone of net-zero heavy manufacturing.",
    "pt": "Green Hydrogen and Industrial Decarbonization",
    "s": "Question 5",
    "o": [
      "having become",
      "becoming",
      "to be become",
      "became",
      "become"
    ],
    "a": 1,
    "ex": "(5) Aktif sonuç bildiren V-ing kısaltması: 'becoming a cornerstone' (köşe taşı haline gelerek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-066",
    "t": "cloze",
    "p": "Situated on the fertile Konya Plain of central Anatolia, Çatalhöyük is celebrated as one of the world's earliest proto-urban settlements, flourishing between 7100 and 5700 BCE. The settlement was organized in a distinctive honeycomb layout, (1) ------- houses were built directly adjacent to one another without streets, requiring inhabitants to traverse rooftops and enter dwellings (2) ------- wooden ladders. Excavations led by Ian Hodder revealed a remarkably egalitarian society with no archaeological traces of social stratification or centralized administrative palaces. Burials placed beneath domestic plaster floors indicate that ancestral memory played an indispensable role (3) ------- communal cohesion. (4) ------- agricultural yields fluctuated with seasonal droughts, the community thrived (5) ------- over fourteen centuries.",
    "pt": "The Neolithic Metropolis of Çatalhöyük",
    "s": "Question 1",
    "o": [
      "which",
      "that",
      "whose",
      "where",
      "whom"
    ],
    "a": 3,
    "ex": "(1) Yer bildiren relative pronoun: 'honeycomb layout where houses were built...'",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-067",
    "t": "cloze",
    "p": "Situated on the fertile Konya Plain of central Anatolia, Çatalhöyük is celebrated as one of the world's earliest proto-urban settlements, flourishing between 7100 and 5700 BCE. The settlement was organized in a distinctive honeycomb layout, (1) ------- houses were built directly adjacent to one another without streets, requiring inhabitants to traverse rooftops and enter dwellings (2) ------- wooden ladders. Excavations led by Ian Hodder revealed a remarkably egalitarian society with no archaeological traces of social stratification or centralized administrative palaces. Burials placed beneath domestic plaster floors indicate that ancestral memory played an indispensable role (3) ------- communal cohesion. (4) ------- agricultural yields fluctuated with seasonal droughts, the community thrived (5) ------- over fourteen centuries.",
    "pt": "The Neolithic Metropolis of Çatalhöyük",
    "s": "Question 2",
    "o": [
      "under",
      "against",
      "from",
      "at",
      "via"
    ],
    "a": 4,
    "ex": "(2) 'enter dwellings via wooden ladders' (ahşap merdivenler vasıtasıyla girmek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-068",
    "t": "cloze",
    "p": "Situated on the fertile Konya Plain of central Anatolia, Çatalhöyük is celebrated as one of the world's earliest proto-urban settlements, flourishing between 7100 and 5700 BCE. The settlement was organized in a distinctive honeycomb layout, (1) ------- houses were built directly adjacent to one another without streets, requiring inhabitants to traverse rooftops and enter dwellings (2) ------- wooden ladders. Excavations led by Ian Hodder revealed a remarkably egalitarian society with no archaeological traces of social stratification or centralized administrative palaces. Burials placed beneath domestic plaster floors indicate that ancestral memory played an indispensable role (3) ------- communal cohesion. (4) ------- agricultural yields fluctuated with seasonal droughts, the community thrived (5) ------- over fourteen centuries.",
    "pt": "The Neolithic Metropolis of Çatalhöyük",
    "s": "Question 3",
    "o": [
      "in",
      "for",
      "at",
      "with",
      "from"
    ],
    "a": 0,
    "ex": "(3) 'played an indispensable role in communal cohesion' (toplumsal uyumda hayati rol oynadı).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-069",
    "t": "cloze",
    "p": "Situated on the fertile Konya Plain of central Anatolia, Çatalhöyük is celebrated as one of the world's earliest proto-urban settlements, flourishing between 7100 and 5700 BCE. The settlement was organized in a distinctive honeycomb layout, (1) ------- houses were built directly adjacent to one another without streets, requiring inhabitants to traverse rooftops and enter dwellings (2) ------- wooden ladders. Excavations led by Ian Hodder revealed a remarkably egalitarian society with no archaeological traces of social stratification or centralized administrative palaces. Burials placed beneath domestic plaster floors indicate that ancestral memory played an indispensable role (3) ------- communal cohesion. (4) ------- agricultural yields fluctuated with seasonal droughts, the community thrived (5) ------- over fourteen centuries.",
    "pt": "The Neolithic Metropolis of Çatalhöyük",
    "s": "Question 4",
    "o": [
      "In spite of",
      "Even though",
      "Because of",
      "Owing to",
      "Due to"
    ],
    "a": 1,
    "ex": "(4) Zıtlık bağlacı + cümle: 'Even though agricultural yields fluctuated...' (dalgalanmasına rağmen).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-070",
    "t": "cloze",
    "p": "Situated on the fertile Konya Plain of central Anatolia, Çatalhöyük is celebrated as one of the world's earliest proto-urban settlements, flourishing between 7100 and 5700 BCE. The settlement was organized in a distinctive honeycomb layout, (1) ------- houses were built directly adjacent to one another without streets, requiring inhabitants to traverse rooftops and enter dwellings (2) ------- wooden ladders. Excavations led by Ian Hodder revealed a remarkably egalitarian society with no archaeological traces of social stratification or centralized administrative palaces. Burials placed beneath domestic plaster floors indicate that ancestral memory played an indispensable role (3) ------- communal cohesion. (4) ------- agricultural yields fluctuated with seasonal droughts, the community thrived (5) ------- over fourteen centuries.",
    "pt": "The Neolithic Metropolis of Çatalhöyük",
    "s": "Question 5",
    "o": [
      "since",
      "in",
      "for",
      "during",
      "at"
    ],
    "a": 2,
    "ex": "(5) Süreç bildiren edat: 'thrived for over fourteen centuries' (14 yüzyıldan uzun bir süre boyunca).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-071",
    "t": "cloze",
    "p": "The proposition that grammatical structures and lexical vocabularies shape human perceptual categorization is known as the Sapir-Whorf hypothesis. In its strongest formulation, the theory asserted that language determines cognitive boundaries, making thoughts unexpressed in a given tongue (1) ------- unthinkable. Contemporary psycholinguists have largely repudiated this linguistic determinism, adopting instead a moderate relativist position. Cross-cultural experiments on color recognition demonstrate that while linguistic labels do not prevent observers (2) ------- distinguishing chromatic hues, they (3) ------- bias reaction times during categorical sorting tasks. Language, therefore, functions not as a prison of thought, but as a subtle guide that directs our attention (4) ------- specific dimensions of reality, (5) ------- habitual cognitive pathways across cultures.",
    "pt": "The Sapir-Whorf Linguistic Relativity Hypothesis",
    "s": "Question 1",
    "o": [
      "marginally",
      "nominally",
      "superficially",
      "scantly",
      "virtually"
    ],
    "a": 4,
    "ex": "(1) 'virtually unthinkable' (neredeyse/adeta düşünülemez).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-072",
    "t": "cloze",
    "p": "The proposition that grammatical structures and lexical vocabularies shape human perceptual categorization is known as the Sapir-Whorf hypothesis. In its strongest formulation, the theory asserted that language determines cognitive boundaries, making thoughts unexpressed in a given tongue (1) ------- unthinkable. Contemporary psycholinguists have largely repudiated this linguistic determinism, adopting instead a moderate relativist position. Cross-cultural experiments on color recognition demonstrate that while linguistic labels do not prevent observers (2) ------- distinguishing chromatic hues, they (3) ------- bias reaction times during categorical sorting tasks. Language, therefore, functions not as a prison of thought, but as a subtle guide that directs our attention (4) ------- specific dimensions of reality, (5) ------- habitual cognitive pathways across cultures.",
    "pt": "The Sapir-Whorf Linguistic Relativity Hypothesis",
    "s": "Question 2",
    "o": [
      "from",
      "to",
      "with",
      "against",
      "at"
    ],
    "a": 0,
    "ex": "(2) 'prevent someone from doing something' (ayırt etmekten alıkoymaz).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-073",
    "t": "cloze",
    "p": "The proposition that grammatical structures and lexical vocabularies shape human perceptual categorization is known as the Sapir-Whorf hypothesis. In its strongest formulation, the theory asserted that language determines cognitive boundaries, making thoughts unexpressed in a given tongue (1) ------- unthinkable. Contemporary psycholinguists have largely repudiated this linguistic determinism, adopting instead a moderate relativist position. Cross-cultural experiments on color recognition demonstrate that while linguistic labels do not prevent observers (2) ------- distinguishing chromatic hues, they (3) ------- bias reaction times during categorical sorting tasks. Language, therefore, functions not as a prison of thought, but as a subtle guide that directs our attention (4) ------- specific dimensions of reality, (5) ------- habitual cognitive pathways across cultures.",
    "pt": "The Sapir-Whorf Linguistic Relativity Hypothesis",
    "s": "Question 3",
    "o": [
      "sporadically",
      "systematically",
      "erratically",
      "negligibly",
      "randomly"
    ],
    "a": 1,
    "ex": "(3) 'systematically bias reaction times' (tepki sürelerini düzenli/sistematik olarak etkiler).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-074",
    "t": "cloze",
    "p": "The proposition that grammatical structures and lexical vocabularies shape human perceptual categorization is known as the Sapir-Whorf hypothesis. In its strongest formulation, the theory asserted that language determines cognitive boundaries, making thoughts unexpressed in a given tongue (1) ------- unthinkable. Contemporary psycholinguists have largely repudiated this linguistic determinism, adopting instead a moderate relativist position. Cross-cultural experiments on color recognition demonstrate that while linguistic labels do not prevent observers (2) ------- distinguishing chromatic hues, they (3) ------- bias reaction times during categorical sorting tasks. Language, therefore, functions not as a prison of thought, but as a subtle guide that directs our attention (4) ------- specific dimensions of reality, (5) ------- habitual cognitive pathways across cultures.",
    "pt": "The Sapir-Whorf Linguistic Relativity Hypothesis",
    "s": "Question 4",
    "o": [
      "from",
      "against",
      "toward",
      "with",
      "under"
    ],
    "a": 2,
    "ex": "(4) 'directs our attention toward specific dimensions' (dikkatimizi belirli boyutlara yöneltir).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-075",
    "t": "cloze",
    "p": "The proposition that grammatical structures and lexical vocabularies shape human perceptual categorization is known as the Sapir-Whorf hypothesis. In its strongest formulation, the theory asserted that language determines cognitive boundaries, making thoughts unexpressed in a given tongue (1) ------- unthinkable. Contemporary psycholinguists have largely repudiated this linguistic determinism, adopting instead a moderate relativist position. Cross-cultural experiments on color recognition demonstrate that while linguistic labels do not prevent observers (2) ------- distinguishing chromatic hues, they (3) ------- bias reaction times during categorical sorting tasks. Language, therefore, functions not as a prison of thought, but as a subtle guide that directs our attention (4) ------- specific dimensions of reality, (5) ------- habitual cognitive pathways across cultures.",
    "pt": "The Sapir-Whorf Linguistic Relativity Hypothesis",
    "s": "Question 5",
    "o": [
      "shaped",
      "having shaped",
      "to shape",
      "shaping",
      "shape"
    ],
    "a": 3,
    "ex": "(5) Aktif sonuç kısaltması: 'shaping habitual cognitive pathways' (bilişsel yolları şekillendirerek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-076",
    "t": "cloze",
    "p": "Quantum entanglement, famously dismissed by Albert Einstein as 'spooky action at a distance,' represents one of the most counterintuitive principles of modern physics. When two subatomic particles become entangled, their quantum states remain intrinsically linked, (1) ------- that measuring the physical property of one instantaneously dictates the state of the other, (2) ------- the distance separating them. Pioneering experiments by Alain Aspect and John Clauser conclusively refuted local hidden variable theories, (3) ------- quantum mechanics violated Bell's inequalities. Far from being a mere theoretical curiosity, entanglement has become the foundational resource for quantum cryptography, (4) ------- communication protocols that are theoretically impervious (5) ------- interception.",
    "pt": "Quantum Entanglement and Information Theory",
    "s": "Question 1",
    "o": [
      "meaning",
      "meant",
      "having meant",
      "to mean",
      "means"
    ],
    "a": 0,
    "ex": "(1) Açıklayıcı aktif kısaltma: 'meaning that measuring one...' (biri ölçüldüğünde diğeri de belirlenir anlamına gelerek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-077",
    "t": "cloze",
    "p": "Quantum entanglement, famously dismissed by Albert Einstein as 'spooky action at a distance,' represents one of the most counterintuitive principles of modern physics. When two subatomic particles become entangled, their quantum states remain intrinsically linked, (1) ------- that measuring the physical property of one instantaneously dictates the state of the other, (2) ------- the distance separating them. Pioneering experiments by Alain Aspect and John Clauser conclusively refuted local hidden variable theories, (3) ------- quantum mechanics violated Bell's inequalities. Far from being a mere theoretical curiosity, entanglement has become the foundational resource for quantum cryptography, (4) ------- communication protocols that are theoretically impervious (5) ------- interception.",
    "pt": "Quantum Entanglement and Information Theory",
    "s": "Question 2",
    "o": [
      "in spite",
      "regardless of",
      "because of",
      "owing to",
      "due to"
    ],
    "a": 1,
    "ex": "(2) 'regardless of the distance separating them' (aralarındaki mesafeye bakılmaksızın).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-078",
    "t": "cloze",
    "p": "Quantum entanglement, famously dismissed by Albert Einstein as 'spooky action at a distance,' represents one of the most counterintuitive principles of modern physics. When two subatomic particles become entangled, their quantum states remain intrinsically linked, (1) ------- that measuring the physical property of one instantaneously dictates the state of the other, (2) ------- the distance separating them. Pioneering experiments by Alain Aspect and John Clauser conclusively refuted local hidden variable theories, (3) ------- quantum mechanics violated Bell's inequalities. Far from being a mere theoretical curiosity, entanglement has become the foundational resource for quantum cryptography, (4) ------- communication protocols that are theoretically impervious (5) ------- interception.",
    "pt": "Quantum Entanglement and Information Theory",
    "s": "Question 3",
    "o": [
      "proven",
      "proved",
      "proving",
      "to prove",
      "prove"
    ],
    "a": 2,
    "ex": "(3) Deneylerin kanıtladığı sonuç: 'proving that quantum mechanics violated...' (ispatlayarak).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-079",
    "t": "cloze",
    "p": "Quantum entanglement, famously dismissed by Albert Einstein as 'spooky action at a distance,' represents one of the most counterintuitive principles of modern physics. When two subatomic particles become entangled, their quantum states remain intrinsically linked, (1) ------- that measuring the physical property of one instantaneously dictates the state of the other, (2) ------- the distance separating them. Pioneering experiments by Alain Aspect and John Clauser conclusively refuted local hidden variable theories, (3) ------- quantum mechanics violated Bell's inequalities. Far from being a mere theoretical curiosity, entanglement has become the foundational resource for quantum cryptography, (4) ------- communication protocols that are theoretically impervious (5) ------- interception.",
    "pt": "Quantum Entanglement and Information Theory",
    "s": "Question 4",
    "o": [
      "enabled",
      "to enable",
      "having enabled",
      "enabling",
      "enable"
    ],
    "a": 3,
    "ex": "(4) 'enabling communication protocols' (iletişim protokollerini mümkün kılarak).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-080",
    "t": "cloze",
    "p": "Quantum entanglement, famously dismissed by Albert Einstein as 'spooky action at a distance,' represents one of the most counterintuitive principles of modern physics. When two subatomic particles become entangled, their quantum states remain intrinsically linked, (1) ------- that measuring the physical property of one instantaneously dictates the state of the other, (2) ------- the distance separating them. Pioneering experiments by Alain Aspect and John Clauser conclusively refuted local hidden variable theories, (3) ------- quantum mechanics violated Bell's inequalities. Far from being a mere theoretical curiosity, entanglement has become the foundational resource for quantum cryptography, (4) ------- communication protocols that are theoretically impervious (5) ------- interception.",
    "pt": "Quantum Entanglement and Information Theory",
    "s": "Question 5",
    "o": [
      "with",
      "from",
      "for",
      "against",
      "to"
    ],
    "a": 4,
    "ex": "(5) 'impervious to interception' (müdahale ve dinlemeye karşı bağışık/geçirimsiz).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-081",
    "t": "cloze",
    "p": "While oceanic plastic pollution has captured widespread international media attention, freshwater lakes and fluvial basins suffer from equally pervasive synthetic debris. Synthetic microfibers shed from synthetic garments during domestic laundering enter municipal wastewater systems, bypassing conventional sewage filters (1) ------- their microscopic dimensions. Once discharged into riverways, these non-biodegradable particles (2) ------- ingested by benthic invertebrates and filter-feeding fish. Toxic hydrophobic contaminants adhere to plastic surfaces, (3) ------- chemical bioaccumulation throughout aquatic trophic chains. Recent limnological surveys indicate that apex predatory fish harbor significant concentrations of microplastics in their gastrointestinal tracts. Environmental chemists warn that unless synthetic textile production is regulated, freshwater ecological integrity (4) ------- severely compromised (5) ------- the coming decades.",
    "pt": "Microplastics in Freshwater Food Webs",
    "s": "Question 1",
    "o": [
      "in spite of",
      "due to",
      "although",
      "whereas",
      "while"
    ],
    "a": 1,
    "ex": "(1) Neden bildiren edat + isim öbeği: 'due to their microscopic dimensions' (mikroskobik boyutları yüzünden).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-082",
    "t": "cloze",
    "p": "While oceanic plastic pollution has captured widespread international media attention, freshwater lakes and fluvial basins suffer from equally pervasive synthetic debris. Synthetic microfibers shed from synthetic garments during domestic laundering enter municipal wastewater systems, bypassing conventional sewage filters (1) ------- their microscopic dimensions. Once discharged into riverways, these non-biodegradable particles (2) ------- ingested by benthic invertebrates and filter-feeding fish. Toxic hydrophobic contaminants adhere to plastic surfaces, (3) ------- chemical bioaccumulation throughout aquatic trophic chains. Recent limnological surveys indicate that apex predatory fish harbor significant concentrations of microplastics in their gastrointestinal tracts. Environmental chemists warn that unless synthetic textile production is regulated, freshwater ecological integrity (4) ------- severely compromised (5) ------- the coming decades.",
    "pt": "Microplastics in Freshwater Food Webs",
    "s": "Question 2",
    "o": [
      "were readily",
      "had readily",
      "are readily",
      "are being readily",
      "have readily"
    ],
    "a": 2,
    "ex": "(2) Genel gerçek pasif: 'are readily ingested' (kolayca yutulurlar).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-083",
    "t": "cloze",
    "p": "While oceanic plastic pollution has captured widespread international media attention, freshwater lakes and fluvial basins suffer from equally pervasive synthetic debris. Synthetic microfibers shed from synthetic garments during domestic laundering enter municipal wastewater systems, bypassing conventional sewage filters (1) ------- their microscopic dimensions. Once discharged into riverways, these non-biodegradable particles (2) ------- ingested by benthic invertebrates and filter-feeding fish. Toxic hydrophobic contaminants adhere to plastic surfaces, (3) ------- chemical bioaccumulation throughout aquatic trophic chains. Recent limnological surveys indicate that apex predatory fish harbor significant concentrations of microplastics in their gastrointestinal tracts. Environmental chemists warn that unless synthetic textile production is regulated, freshwater ecological integrity (4) ------- severely compromised (5) ------- the coming decades.",
    "pt": "Microplastics in Freshwater Food Webs",
    "s": "Question 3",
    "o": [
      "amplified",
      "having amplified",
      "to amplify",
      "amplifying",
      "amplify"
    ],
    "a": 3,
    "ex": "(3) Aktif sonuç kısaltması: 'amplifying chemical bioaccumulation' (biyolojik birikimi büyüterek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-084",
    "t": "cloze",
    "p": "While oceanic plastic pollution has captured widespread international media attention, freshwater lakes and fluvial basins suffer from equally pervasive synthetic debris. Synthetic microfibers shed from synthetic garments during domestic laundering enter municipal wastewater systems, bypassing conventional sewage filters (1) ------- their microscopic dimensions. Once discharged into riverways, these non-biodegradable particles (2) ------- ingested by benthic invertebrates and filter-feeding fish. Toxic hydrophobic contaminants adhere to plastic surfaces, (3) ------- chemical bioaccumulation throughout aquatic trophic chains. Recent limnological surveys indicate that apex predatory fish harbor significant concentrations of microplastics in their gastrointestinal tracts. Environmental chemists warn that unless synthetic textile production is regulated, freshwater ecological integrity (4) ------- severely compromised (5) ------- the coming decades.",
    "pt": "Microplastics in Freshwater Food Webs",
    "s": "Question 4",
    "o": [
      "was",
      "had been",
      "is being",
      "would be",
      "will be"
    ],
    "a": 4,
    "ex": "(4) 'unless... is regulated, integrity will be compromised' (Type 1 koşul ana cümle will be).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-085",
    "t": "cloze",
    "p": "While oceanic plastic pollution has captured widespread international media attention, freshwater lakes and fluvial basins suffer from equally pervasive synthetic debris. Synthetic microfibers shed from synthetic garments during domestic laundering enter municipal wastewater systems, bypassing conventional sewage filters (1) ------- their microscopic dimensions. Once discharged into riverways, these non-biodegradable particles (2) ------- ingested by benthic invertebrates and filter-feeding fish. Toxic hydrophobic contaminants adhere to plastic surfaces, (3) ------- chemical bioaccumulation throughout aquatic trophic chains. Recent limnological surveys indicate that apex predatory fish harbor significant concentrations of microplastics in their gastrointestinal tracts. Environmental chemists warn that unless synthetic textile production is regulated, freshwater ecological integrity (4) ------- severely compromised (5) ------- the coming decades.",
    "pt": "Microplastics in Freshwater Food Webs",
    "s": "Question 5",
    "o": [
      "over",
      "at",
      "on",
      "from",
      "against"
    ],
    "a": 0,
    "ex": "(5) Zaman süreci: 'over the coming decades' (önümüzdeki on yıllar boyunca).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-086",
    "t": "cloze",
    "p": "Around 1200 BCE, the Eastern Mediterranean experienced one of the most cataclysmic civilizational ruptures in human history. Within a span of less than half a century, powerful palace economies including the Mycenaeans of Greece, the Hittite Empire of Anatolia, and the New Kingdom of Egypt (1) ------- collapsed or experienced severe systemic contraction. For decades, archaeologists attributed this sudden collapse primarily (2) ------- invasions by enigmatic maritime raiders known as the 'Sea Peoples.' However, contemporary scholarship emphasizes a multi-causal 'systems collapse' model, (3) ------- prolonged megadroughts, seismic disasters, trade disruptions, and internal social rebellions combined to overwhelm palace administrative resilience. With the fall of royal courts, writing systems like Linear B vanished (4) ------- several centuries, plunging Greece (5) ------- a prolonged illiterate dark age.",
    "pt": "The Late Bronze Age Collapse in the Eastern Mediterranean",
    "s": "Question 1",
    "o": [
      "neither",
      "both",
      "either",
      "whether",
      "not only"
    ],
    "a": 2,
    "ex": "(1) İkili yapı: 'either collapsed or experienced...' (ya çöktü ya da daraldı).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-087",
    "t": "cloze",
    "p": "Around 1200 BCE, the Eastern Mediterranean experienced one of the most cataclysmic civilizational ruptures in human history. Within a span of less than half a century, powerful palace economies including the Mycenaeans of Greece, the Hittite Empire of Anatolia, and the New Kingdom of Egypt (1) ------- collapsed or experienced severe systemic contraction. For decades, archaeologists attributed this sudden collapse primarily (2) ------- invasions by enigmatic maritime raiders known as the 'Sea Peoples.' However, contemporary scholarship emphasizes a multi-causal 'systems collapse' model, (3) ------- prolonged megadroughts, seismic disasters, trade disruptions, and internal social rebellions combined to overwhelm palace administrative resilience. With the fall of royal courts, writing systems like Linear B vanished (4) ------- several centuries, plunging Greece (5) ------- a prolonged illiterate dark age.",
    "pt": "The Late Bronze Age Collapse in the Eastern Mediterranean",
    "s": "Question 2",
    "o": [
      "with",
      "for",
      "from",
      "to",
      "by"
    ],
    "a": 3,
    "ex": "(2) 'attributed this collapse primarily to invasions' (çöküşü istilalara bağladılar).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-088",
    "t": "cloze",
    "p": "Around 1200 BCE, the Eastern Mediterranean experienced one of the most cataclysmic civilizational ruptures in human history. Within a span of less than half a century, powerful palace economies including the Mycenaeans of Greece, the Hittite Empire of Anatolia, and the New Kingdom of Egypt (1) ------- collapsed or experienced severe systemic contraction. For decades, archaeologists attributed this sudden collapse primarily (2) ------- invasions by enigmatic maritime raiders known as the 'Sea Peoples.' However, contemporary scholarship emphasizes a multi-causal 'systems collapse' model, (3) ------- prolonged megadroughts, seismic disasters, trade disruptions, and internal social rebellions combined to overwhelm palace administrative resilience. With the fall of royal courts, writing systems like Linear B vanished (4) ------- several centuries, plunging Greece (5) ------- a prolonged illiterate dark age.",
    "pt": "The Late Bronze Age Collapse in the Eastern Mediterranean",
    "s": "Question 3",
    "o": [
      "which",
      "whose",
      "whereby",
      "that",
      "in which"
    ],
    "a": 4,
    "ex": "(3) Modelin içeriğini anlatan edatlı relative: 'a model in which prolonged megadroughts...'",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-089",
    "t": "cloze",
    "p": "Around 1200 BCE, the Eastern Mediterranean experienced one of the most cataclysmic civilizational ruptures in human history. Within a span of less than half a century, powerful palace economies including the Mycenaeans of Greece, the Hittite Empire of Anatolia, and the New Kingdom of Egypt (1) ------- collapsed or experienced severe systemic contraction. For decades, archaeologists attributed this sudden collapse primarily (2) ------- invasions by enigmatic maritime raiders known as the 'Sea Peoples.' However, contemporary scholarship emphasizes a multi-causal 'systems collapse' model, (3) ------- prolonged megadroughts, seismic disasters, trade disruptions, and internal social rebellions combined to overwhelm palace administrative resilience. With the fall of royal courts, writing systems like Linear B vanished (4) ------- several centuries, plunging Greece (5) ------- a prolonged illiterate dark age.",
    "pt": "The Late Bronze Age Collapse in the Eastern Mediterranean",
    "s": "Question 4",
    "o": [
      "for",
      "since",
      "during",
      "in",
      "at"
    ],
    "a": 0,
    "ex": "(4) Zaman süresi: 'vanished for several centuries' (birkaç yüzyıl boyunca yok oldu).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-090",
    "t": "cloze",
    "p": "Around 1200 BCE, the Eastern Mediterranean experienced one of the most cataclysmic civilizational ruptures in human history. Within a span of less than half a century, powerful palace economies including the Mycenaeans of Greece, the Hittite Empire of Anatolia, and the New Kingdom of Egypt (1) ------- collapsed or experienced severe systemic contraction. For decades, archaeologists attributed this sudden collapse primarily (2) ------- invasions by enigmatic maritime raiders known as the 'Sea Peoples.' However, contemporary scholarship emphasizes a multi-causal 'systems collapse' model, (3) ------- prolonged megadroughts, seismic disasters, trade disruptions, and internal social rebellions combined to overwhelm palace administrative resilience. With the fall of royal courts, writing systems like Linear B vanished (4) ------- several centuries, plunging Greece (5) ------- a prolonged illiterate dark age.",
    "pt": "The Late Bronze Age Collapse in the Eastern Mediterranean",
    "s": "Question 5",
    "o": [
      "onto",
      "into",
      "against",
      "under",
      "with"
    ],
    "a": 1,
    "ex": "(5) 'plunging Greece into a dark age' (Yunanistan'ı karanlık çağa sürükleyerek).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-091",
    "t": "cloze",
    "p": "Far from being an inactive state of metabolic quiescence, nocturnal sleep involves highly organized neurological cycles vital for memory consolidation. During slow-wave non-REM sleep, the brain generates synchronized delta oscillations that facilitate the transfer of newly acquired memories from the temporary hippocampus (1) ------- long-term neocortical storage sites. Subsequently, rapid eye movement (REM) sleep enables the emotional integration and schematic restructuring of these memory traces. Neuroscientists have demonstrated that sleep-deprived individuals exhibit severe deficits in declarative learning, (2) ------- the synaptic pruning mechanisms essential for neural plasticity are halted. (3) -------, chronic sleep fragmentation has been identified as a significant risk factor (4) ------- early-onset neurodegenerative pathologies. Ensuring seven to eight hours of uninterrupted rest is therefore (5) ------- for maintaining cognitive vigor across the human lifespan.",
    "pt": "Sleep Architecture and Memory Consolidation",
    "s": "Question 1",
    "o": [
      "from",
      "against",
      "under",
      "to",
      "with"
    ],
    "a": 3,
    "ex": "(1) 'transfer from A to B' (hipokampüsten neokortekse aktarım).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-092",
    "t": "cloze",
    "p": "Far from being an inactive state of metabolic quiescence, nocturnal sleep involves highly organized neurological cycles vital for memory consolidation. During slow-wave non-REM sleep, the brain generates synchronized delta oscillations that facilitate the transfer of newly acquired memories from the temporary hippocampus (1) ------- long-term neocortical storage sites. Subsequently, rapid eye movement (REM) sleep enables the emotional integration and schematic restructuring of these memory traces. Neuroscientists have demonstrated that sleep-deprived individuals exhibit severe deficits in declarative learning, (2) ------- the synaptic pruning mechanisms essential for neural plasticity are halted. (3) -------, chronic sleep fragmentation has been identified as a significant risk factor (4) ------- early-onset neurodegenerative pathologies. Ensuring seven to eight hours of uninterrupted rest is therefore (5) ------- for maintaining cognitive vigor across the human lifespan.",
    "pt": "Sleep Architecture and Memory Consolidation",
    "s": "Question 2",
    "o": [
      "despite",
      "whereas",
      "while",
      "in spite of",
      "as"
    ],
    "a": 4,
    "ex": "(2) Neden bildiren bağlaç: 'as the synaptic pruning mechanisms are halted' (çünkü durmaktadır).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-093",
    "t": "cloze",
    "p": "Far from being an inactive state of metabolic quiescence, nocturnal sleep involves highly organized neurological cycles vital for memory consolidation. During slow-wave non-REM sleep, the brain generates synchronized delta oscillations that facilitate the transfer of newly acquired memories from the temporary hippocampus (1) ------- long-term neocortical storage sites. Subsequently, rapid eye movement (REM) sleep enables the emotional integration and schematic restructuring of these memory traces. Neuroscientists have demonstrated that sleep-deprived individuals exhibit severe deficits in declarative learning, (2) ------- the synaptic pruning mechanisms essential for neural plasticity are halted. (3) -------, chronic sleep fragmentation has been identified as a significant risk factor (4) ------- early-onset neurodegenerative pathologies. Ensuring seven to eight hours of uninterrupted rest is therefore (5) ------- for maintaining cognitive vigor across the human lifespan.",
    "pt": "Sleep Architecture and Memory Consolidation",
    "s": "Question 3",
    "o": [
      "Furthermore",
      "Nevertheless",
      "Otherwise",
      "Instead",
      "On the contrary"
    ],
    "a": 0,
    "ex": "(3) İlave risk ekleyen geçiş zarfı: 'Furthermore, chronic sleep fragmentation...' (Dahası/Üstelik).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-094",
    "t": "cloze",
    "p": "Far from being an inactive state of metabolic quiescence, nocturnal sleep involves highly organized neurological cycles vital for memory consolidation. During slow-wave non-REM sleep, the brain generates synchronized delta oscillations that facilitate the transfer of newly acquired memories from the temporary hippocampus (1) ------- long-term neocortical storage sites. Subsequently, rapid eye movement (REM) sleep enables the emotional integration and schematic restructuring of these memory traces. Neuroscientists have demonstrated that sleep-deprived individuals exhibit severe deficits in declarative learning, (2) ------- the synaptic pruning mechanisms essential for neural plasticity are halted. (3) -------, chronic sleep fragmentation has been identified as a significant risk factor (4) ------- early-onset neurodegenerative pathologies. Ensuring seven to eight hours of uninterrupted rest is therefore (5) ------- for maintaining cognitive vigor across the human lifespan.",
    "pt": "Sleep Architecture and Memory Consolidation",
    "s": "Question 4",
    "o": [
      "with",
      "for",
      "at",
      "against",
      "from"
    ],
    "a": 1,
    "ex": "(4) 'a risk factor for pathologies' (hastalıklar için bir risk faktörü).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-095",
    "t": "cloze",
    "p": "Far from being an inactive state of metabolic quiescence, nocturnal sleep involves highly organized neurological cycles vital for memory consolidation. During slow-wave non-REM sleep, the brain generates synchronized delta oscillations that facilitate the transfer of newly acquired memories from the temporary hippocampus (1) ------- long-term neocortical storage sites. Subsequently, rapid eye movement (REM) sleep enables the emotional integration and schematic restructuring of these memory traces. Neuroscientists have demonstrated that sleep-deprived individuals exhibit severe deficits in declarative learning, (2) ------- the synaptic pruning mechanisms essential for neural plasticity are halted. (3) -------, chronic sleep fragmentation has been identified as a significant risk factor (4) ------- early-onset neurodegenerative pathologies. Ensuring seven to eight hours of uninterrupted rest is therefore (5) ------- for maintaining cognitive vigor across the human lifespan.",
    "pt": "Sleep Architecture and Memory Consolidation",
    "s": "Question 5",
    "o": [
      "trivial",
      "optional",
      "essential",
      "superfluous",
      "redundant"
    ],
    "a": 2,
    "ex": "(5) 'essential for maintaining vigor' (zindeliği korumak için elzem/zorunlu).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-096",
    "t": "cloze",
    "p": "Industrial agriculture, characterized by monoculture planting, synthetic nitrogen fertilization, and intensive mechanical tilling, has degraded more than one-third of the world's arable topsoils. Regenerative farming practices aim to reverse this terrestrial degradation by restoring soil microbial ecology and sequestering atmospheric carbon. By eliminating tillage and maintaining continuous vegetative cover (1) ------- diverse multi-species cover crops, farmers can prevent soil erosion and rebuild fungal mycorrhizal networks. These subterranean fungal webs stabilize organic carbon in resilient aggregates that resist microbial decomposition (2) ------- decades. (3) ------- transitioning from chemical-intensive systems requires several years of yield adjustment, long-term economic returns often surpass conventional baselines (4) ------- reduced input expenditures. Regenerative agriculture thus presents a scalable nature-based solution that simultaneously addresses food security (5) ------- climate change mitigation.",
    "pt": "Regenerative Agriculture and Soil Organic Carbon",
    "s": "Question 1",
    "o": [
      "against",
      "despite",
      "beyond",
      "under",
      "through"
    ],
    "a": 4,
    "ex": "(1) 'through diverse multi-species cover crops' (örtü bitkileri vasıtasıyla/aracılığıyla).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-097",
    "t": "cloze",
    "p": "Industrial agriculture, characterized by monoculture planting, synthetic nitrogen fertilization, and intensive mechanical tilling, has degraded more than one-third of the world's arable topsoils. Regenerative farming practices aim to reverse this terrestrial degradation by restoring soil microbial ecology and sequestering atmospheric carbon. By eliminating tillage and maintaining continuous vegetative cover (1) ------- diverse multi-species cover crops, farmers can prevent soil erosion and rebuild fungal mycorrhizal networks. These subterranean fungal webs stabilize organic carbon in resilient aggregates that resist microbial decomposition (2) ------- decades. (3) ------- transitioning from chemical-intensive systems requires several years of yield adjustment, long-term economic returns often surpass conventional baselines (4) ------- reduced input expenditures. Regenerative agriculture thus presents a scalable nature-based solution that simultaneously addresses food security (5) ------- climate change mitigation.",
    "pt": "Regenerative Agriculture and Soil Organic Carbon",
    "s": "Question 2",
    "o": [
      "for",
      "since",
      "in",
      "during",
      "at"
    ],
    "a": 0,
    "ex": "(2) Süreç bildiren edat: 'resist decomposition for decades' (on yıllar boyunca bozulmaya direnen).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-098",
    "t": "cloze",
    "p": "Industrial agriculture, characterized by monoculture planting, synthetic nitrogen fertilization, and intensive mechanical tilling, has degraded more than one-third of the world's arable topsoils. Regenerative farming practices aim to reverse this terrestrial degradation by restoring soil microbial ecology and sequestering atmospheric carbon. By eliminating tillage and maintaining continuous vegetative cover (1) ------- diverse multi-species cover crops, farmers can prevent soil erosion and rebuild fungal mycorrhizal networks. These subterranean fungal webs stabilize organic carbon in resilient aggregates that resist microbial decomposition (2) ------- decades. (3) ------- transitioning from chemical-intensive systems requires several years of yield adjustment, long-term economic returns often surpass conventional baselines (4) ------- reduced input expenditures. Regenerative agriculture thus presents a scalable nature-based solution that simultaneously addresses food security (5) ------- climate change mitigation.",
    "pt": "Regenerative Agriculture and Soil Organic Carbon",
    "s": "Question 3",
    "o": [
      "Despite",
      "Although",
      "Because of",
      "Owing to",
      "In spite of"
    ],
    "a": 1,
    "ex": "(3) Zıtlık bağlacı + tam cümle: 'Although transitioning requires several years...' (Yıllar almasına rağmen).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-099",
    "t": "cloze",
    "p": "Industrial agriculture, characterized by monoculture planting, synthetic nitrogen fertilization, and intensive mechanical tilling, has degraded more than one-third of the world's arable topsoils. Regenerative farming practices aim to reverse this terrestrial degradation by restoring soil microbial ecology and sequestering atmospheric carbon. By eliminating tillage and maintaining continuous vegetative cover (1) ------- diverse multi-species cover crops, farmers can prevent soil erosion and rebuild fungal mycorrhizal networks. These subterranean fungal webs stabilize organic carbon in resilient aggregates that resist microbial decomposition (2) ------- decades. (3) ------- transitioning from chemical-intensive systems requires several years of yield adjustment, long-term economic returns often surpass conventional baselines (4) ------- reduced input expenditures. Regenerative agriculture thus presents a scalable nature-based solution that simultaneously addresses food security (5) ------- climate change mitigation.",
    "pt": "Regenerative Agriculture and Soil Organic Carbon",
    "s": "Question 4",
    "o": [
      "in spite of",
      "although",
      "due to",
      "whereas",
      "while"
    ],
    "a": 2,
    "ex": "(4) Neden edatı: 'due to reduced input expenditures' (azalan girdi harcamaları sayesinde/nedeniyle).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  },
  {
    "id": "cloze-100",
    "t": "cloze",
    "p": "Industrial agriculture, characterized by monoculture planting, synthetic nitrogen fertilization, and intensive mechanical tilling, has degraded more than one-third of the world's arable topsoils. Regenerative farming practices aim to reverse this terrestrial degradation by restoring soil microbial ecology and sequestering atmospheric carbon. By eliminating tillage and maintaining continuous vegetative cover (1) ------- diverse multi-species cover crops, farmers can prevent soil erosion and rebuild fungal mycorrhizal networks. These subterranean fungal webs stabilize organic carbon in resilient aggregates that resist microbial decomposition (2) ------- decades. (3) ------- transitioning from chemical-intensive systems requires several years of yield adjustment, long-term economic returns often surpass conventional baselines (4) ------- reduced input expenditures. Regenerative agriculture thus presents a scalable nature-based solution that simultaneously addresses food security (5) ------- climate change mitigation.",
    "pt": "Regenerative Agriculture and Soil Organic Carbon",
    "s": "Question 5",
    "o": [
      "or",
      "nor",
      "but",
      "and",
      "yet"
    ],
    "a": 3,
    "ex": "(5) İkili bağlaç: 'simultaneously addresses A and B' (aynı anda hem gıda güvenliğini hem iklim değişikliğini).",
    "level": "YDS",
    "difficulty": "medium",
    "sourceType": "original-yds-style",
    "isOfficial": false
  }
];
