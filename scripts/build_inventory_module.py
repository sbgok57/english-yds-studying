import json, re

# Load yds-vocabulary-436.json
with open('src/data/yds-vocabulary-436.json', 'r', encoding='utf-8') as f:
    v436 = json.load(f)

# Load canonical-vocabulary.json
with open('src/data/canonical-vocabulary.json', 'r', encoding='utf-8') as f:
    canon = json.load(f)

# CEFR Reference Table for YDS/Academic vocabulary mapping
CEFR_MAP = {
    # A1
    "water": "A1", "book": "A1", "student": "A1", "school": "A1", "friend": "A1", "family": "A1",
    "house": "A1", "time": "A1", "day": "A1", "year": "A1", "work": "A1", "live": "A1",
    "read": "A1", "write": "A1", "speak": "A1", "come": "A1", "go": "A1", "see": "A1",

    # A2
    "holiday": "A2", "hotel": "A2", "travel": "A2", "ticket": "A2", "crowded": "A2",
    "weather": "A2", "season": "A2", "danger": "A2", "polite": "A2", "improve": "A2",
    "arrive": "A2", "borrow": "A2", "lend": "A2", "repair": "A2", "decide": "A2",

    # B1
    "ability": "B1", "access": "B1", "achieve": "B1", "affect": "B1", "agriculture": "B1",
    "alternative": "B1", "atmosphere": "B1", "attitude": "B1", "benefit": "B1", "campaign": "B1",
    "challenge": "B1", "climate": "B1", "collapse": "B1", "combine": "B1", "compete": "B1",
    "conservation": "B1", "convenient": "B1", "convince": "B1", "culture": "B1", "decade": "B1",
    "decrease": "B1", "demonstrate": "B1", "development": "B1", "disaster": "B1", "efficient": "B1",
    "emphasize": "B1", "enable": "B1", "encounter": "B1", "environment": "B1", "essential": "B1",
    "establish": "B1", "evidence": "B1", "expansion": "B1", "factor": "B1", "frequent": "B1",
    "global": "B1", "gradual": "B1", "impact": "B1", "indicate": "B1", "individual": "B1",
    "influence": "B1", "inhabit": "B1", "initiative": "B1", "innocent": "B1", "inspire": "B1",
    "maintain": "B1", "measure": "B1", "method": "B1", "native": "B1", "necessary": "B1",
    "obtain": "B1", "opportunity": "B1", "participate": "B1", "perceive": "B1", "permanent": "B1",
    "perspective": "B1", "pollute": "B1", "potential": "B1", "prevent": "B1", "primary": "B1",
    "produce": "B1", "progress": "B1", "propose": "B1", "protect": "B1", "publish": "B1",
    "raise": "B1", "rapid": "B1", "recover": "B1", "reduce": "B1", "reflect": "B1",
    "region": "B1", "regulate": "B1", "reject": "B1", "release": "B1", "rely": "B1",
    "remain": "B1", "remarkable": "B1", "remote": "B1", "replace": "B1", "represent": "B1",
    "require": "B1", "rescue": "B1", "resource": "B1", "respond": "B1", "restore": "B1",
    "reveal": "B1", "severe": "B1", "significant": "B1", "similar": "B1", "solution": "B1",
    "source": "B1", "species": "B1", "strategy": "B1", "structure": "B1", "substance": "B1",
    "succeed": "B1", "sufficient": "B1", "survive": "B1", "threaten": "B1", "traditional": "B1",
    "transform": "B1", "transport": "B1", "treat": "B1", "unique": "B1", "urgent": "B1",
    "various": "B1", "vital": "B1", "volunteer": "B1", "waste": "B1", "widespread": "B1",

    # B2
    "abandon": "B2", "abundant": "B2", "accelerate": "B2", "accommodate": "B2", "accumulate": "B2",
    "accurate": "B2", "acknowledge": "B2", "acquire": "B2", "adapt": "B2", "adequate": "B2",
    "adjacent": "B2", "advocate": "B2", "alleviate": "B2", "allocate": "B2", "alter": "B2",
    "ambiguous": "B2", "anticipate": "B2", "apparent": "B2", "appreciate": "B2", "approach": "B2",
    "appropriate": "B2", "approximate": "B2", "arbitrary": "B2", "aspect": "B2", "assemble": "B2",
    "assess": "B2", "assign": "B2", "assist": "B2", "assume": "B2", "assure": "B2",
    "attach": "B2", "attain": "B2", "attribute": "B2", "authorise": "B2", "automate": "B2",
    "available": "B2", "aware": "B2", "behalf": "B2", "bias": "B2", "bond": "B2",
    "brief": "B2", "bulk": "B2", "capable": "B2", "capacity": "B2", "category": "B2",
    "cease": "B2", "cite": "B2", "civil": "B2", "clarify": "B2", "clause": "B2",
    "coherent": "B2", "coincide": "B2", "collapse": "B2", "colleague": "B2", "commence": "B2",
    "comment": "B2", "commission": "B2", "commit": "B2", "commodity": "B2", "compatible": "B2",
    "compensate": "B2", "compile": "B2", "complement": "B2", "complex": "B2", "component": "B2",
    "compound": "B2", "comprehensive": "B2", "comprise": "B2", "compute": "B2", "conceive": "B2",
    "concentrate": "B2", "concept": "B2", "conclude": "B2", "concurrent": "B2", "conduct": "B2",
    "confer": "B2", "confine": "B2", "confirm": "B2", "conform": "B2", "consent": "B2",
    "consequent": "B2", "considerable": "B2", "consist": "B2", "constant": "B2", "constitute": "B2",
    "constrain": "B2", "construct": "B2", "consult": "B2", "consume": "B2", "contact": "B2",
    "contemporary": "B2", "context": "B2", "contract": "B2", "contradict": "B2", "contrary": "B2",
    "contrast": "B2", "contribute": "B2", "controversy": "B2", "convene": "B2", "converse": "B2",
    "convert": "B2", "convince": "B2", "cooperate": "B2", "coordinate": "B2", "core": "B2",
    "corporate": "B2", "correspond": "B2", "couple": "B2", "create": "B2", "credit": "B2",
    "criteria": "B2", "crucial": "B2", "culture": "B2", "currency": "B2", "cycle": "B2",
    "data": "B2", "debate": "B2", "decade": "B2", "decline": "B2", "deduce": "B2",
    "define": "B2", "definite": "B2", "demonstrate": "B2", "denote": "B2", "deny": "B2",
    "depress": "B2", "derive": "B2", "design": "B2", "despite": "B2", "detect": "B2",
    "deviate": "B2", "device": "B2", "devote": "B2", "differentiate": "B2", "dimension": "B2",
    "diminish": "B2", "discrete": "B2", "discriminate": "B2", "displace": "B2", "display": "B2",
    "dispose": "B2", "distinct": "B2", "distort": "B2", "distribute": "B2", "diverse": "B2",
    "document": "B2", "domain": "B2", "domestic": "B2", "dominate": "B2", "draft": "B2",
    "drama": "B2", "duration": "B2", "dynamic": "B2", "economy": "B2", "edit": "B2",
    "element": "B2", "eliminate": "B2", "emerge": "B2", "emphasis": "B2", "empirical": "B2",
    "enable": "B2", "encounter": "B2", "energy": "B2", "enforce": "B2", "enhance": "B2",
    "enormous": "B2", "ensure": "B2", "entity": "B2", "environment": "B2", "equate": "B2",
    "equip": "B2", "equivalent": "B2", "erode": "B2", "error": "B2", "establish": "B2",
    "estate": "B2", "estimate": "B2", "ethic": "B2", "ethnic": "B2", "evaluate": "B2",
    "eventual": "B2", "evident": "B2", "evolve": "B2", "exceed": "B2", "exclude": "B2",
    "exhibit": "B2", "expand": "B2", "expert": "B2", "explicit": "B2", "exploit": "B2",
    "export": "B2", "expose": "B2", "external": "B2", "extract": "B2", "facilitate": "B2",
    "factor": "B2", "feature": "B2", "federal": "B2", "fee": "B2", "file": "B2",
    "final": "B2", "finance": "B2", "finite": "B2", "flexible": "B2", "fluctuate": "B2",
    "focus": "B2", "format": "B2", "formula": "B2", "forthcoming": "B2", "foundation": "B2",
    "framework": "B2", "function": "B2", "fund": "B2", "fundamental": "B2", "furthermore": "B2",
    "gender": "B2", "generate": "B2", "generation": "B2", "globe": "B2", "goal": "B2",
    "grade": "B2", "grant": "B2", "guarantee": "B2", "guideline": "B2", "hence": "B2",
    "hierarchical": "B2", "highlight": "B2", "hypothesis": "B2", "identical": "B2", "identify": "B2",
    "ideology": "B2", "ignorance": "B2", "illustrate": "B2", "image": "B2", "immigrate": "B2",
    "impact": "B2", "implement": "B2", "implicate": "B2", "implicit": "B2", "imply": "B2",
    "impose": "B2", "incentive": "B2", "incidence": "B2", "incline": "B2", "income": "B2",
    "incorporate": "B2", "index": "B2", "indicate": "B2", "individual": "B2", "induce": "B2",
    "inevitable": "B2", "infer": "B2", "infrastructure": "B2", "inherent": "B2", "inhibit": "B2",
    "initial": "B2", "initiate": "B2", "injure": "B2", "innovate": "B2", "input": "B2",
    "insert": "B2", "insight": "B2", "inspect": "B2", "instance": "B2", "institute": "B2",
    "instruct": "B2", "integral": "B2", "integrate": "B2", "integrity": "B2", "intelligence": "B2",
    "intense": "B2", "interact": "B2", "intermediate": "B2", "internal": "B2", "interpret": "B2",
    "interval": "B2", "intervene": "B2", "intrinsic": "B2", "invest": "B2", "investigate": "B2",
    "invoke": "B2", "involve": "B2", "isolate": "B2", "issue": "B2", "item": "B2",
    "job": "B2", "journal": "B2", "justify": "B2", "label": "B2", "labor": "B2",
    "layer": "B2", "lecture": "B2", "legal": "B2", "legislate": "B2", "levy": "B2",
    "liberal": "B2", "licence": "B2", "likewise": "B2", "link": "B2", "locate": "B2",
    "logic": "B2", "maintain": "B2", "major": "B2", "manipulate": "B2", "manual": "B2",
    "margin": "B2", "mature": "B2", "maximise": "B2", "mechanism": "B2", "media": "B2",
    "mediate": "B2", "medical": "B2", "medium": "B2", "mental": "B2", "method": "B2",
    "migrate": "B2", "military": "B2", "minimise": "B2", "minimum": "B2", "ministry": "B2",
    "minor": "B2", "mode": "B2", "modify": "B2", "monitor": "B2", "motive": "B2",
    "mutual": "B2", "negate": "B2", "network": "B2", "neutral": "B2", "nevertheless": "B2",
    "nonetheless": "B2", "norm": "B2", "normal": "B2", "notion": "B2", "notwithstanding": "B2",
    "nuclear": "B2", "objective": "B2", "obtain": "B2", "obvious": "B2", "occupy": "B2",
    "occur": "B2", "odd": "B2", "offset": "B2", "ongoing": "B2", "option": "B2",
    "orient": "B2", "outcome": "B2", "output": "B2", "overall": "B2", "overlap": "B2",
    "overseas": "B2", "panel": "B2", "paradigm": "B2", "paragraph": "B2", "parallel": "B2",
    "parameter": "B2", "participate": "B2", "partner": "B2", "passive": "B2", "perceive": "B2",
    "percent": "B2", "period": "B2", "persist": "B2", "perspective": "B2", "phase": "B2",
    "phenomenon": "B2", "philosophy": "B2", "physical": "B2", "plus": "B2", "policy": "B2",
    "portion": "B2", "pose": "B2", "positive": "B2", "potential": "B2", "practitioner": "B2",
    "precede": "B2", "precise": "B2", "predict": "B2", "predominant": "B2", "preliminary": "B2",
    "presume": "B2", "previous": "B2", "primary": "B2", "prime": "B2", "principal": "B2",
    "principle": "B2", "prior": "B2", "priority": "B2", "proceed": "B2", "process": "B2",
    "professional": "B2", "prohibit": "B2", "project": "B2", "promote": "B2", "proportion": "B2",
    "prospect": "B2", "protocol": "B2", "psychology": "B2", "publication": "B2", "publish": "B2",
    "purchase": "B2", "pursue": "B2", "qualitative": "B2", "quote": "B2", "radical": "B2",
    "random": "B2", "range": "B2", "ratio": "B2", "rational": "B2", "react": "B2",
    "recover": "B2", "refine": "B2", "regime": "B2", "region": "B2", "register": "B2",
    "regulate": "B2", "reinforce": "B2", "reject": "B2", "relax": "B2", "release": "B2",
    "relevant": "B2", "reluctance": "B2", "rely": "B2", "remove": "B2", "require": "B2",
    "research": "B2", "reside": "B2", "resolve": "B2", "resource": "B2", "respond": "B2",
    "restore": "B2", "restrain": "B2", "restrict": "B2", "retain": "B2", "reveal": "B2",
    "revenue": "B2", "reverse": "B2", "revise": "B2", "revolution": "B2", "rigid": "B2",
    "role": "B2", "route": "B2", "scenario": "B2", "schedule": "B2", "scheme": "B2",
    "scope": "B2", "section": "B2", "sector": "B2", "secure": "B2", "seek": "B2",
    "select": "B2", "sequence": "B2", "series": "B2", "sex": "B2", "shift": "B2",
    "significant": "B2", "similar": "B2", "simulate": "B2", "site": "B2", "so-called": "B2",
    "sole": "B2", "somewhat": "B2", "source": "B2", "specific": "B2", "specify": "B2",
    "sphere": "B2", "stable": "B2", "statistic": "B2", "status": "B2", "straightforward": "B2",
    "strategy": "B2", "stress": "B2", "structure": "B2", "style": "B2", "submit": "B2",
    "subordinate": "B2", "subsequent": "B2", "subsidy": "B2", "substitute": "B2", "successor": "B2",
    "sufficient": "B2", "sum": "B2", "summary": "B2", "supplement": "B2", "survey": "B2",
    "survive": "B2", "suspend": "B2", "sustain": "B2", "symbol": "B2", "tape": "B2",
    "target": "B2", "task": "B2", "team": "B2", "technical": "B2", "technique": "B2",
    "technology": "B2", "temporary": "B2", "tense": "B2", "terminate": "B2", "text": "B2",
    "theme": "B2", "theory": "B2", "thereby": "B2", "thesis": "B2", "topic": "B2",
    "trace": "B2", "tradition": "B2", "transfer": "B2", "transform": "B2", "transit": "B2",
    "transmit": "B2", "transport": "B2", "trend": "B2", "trigger": "B2", "ultimate": "B2",
    "undergo": "B2", "underlie": "B2", "undertake": "B2", "uniform": "B2", "unify": "B2",
    "unique": "B2", "utilise": "B2", "valid": "B2", "vary": "B2", "vehicle": "B2",
    "version": "B2", "via": "B2", "violate": "B2", "virtual": "B2", "visible": "B2",
    "vision": "B2", "visual": "B2", "volume": "B2", "voluntary": "B2", "welfare": "B2",
    "whereas": "B2", "whereby": "B2", "widespread": "B2", "mitigate": "B2", "deteriorate": "B2",
    "detrimental": "B2",

    # C1
    "ubiquitous": "C1", "ephemeral": "C1", "scrutinise": "C1", "scrutinize": "C1", "precarious": "C1",
    "inexorable": "C1", "equivocal": "C1", "unequivocal": "C1", "clandestine": "C1", "disparate": "C1",
    "tenuous": "C1", "spurious": "C1", "plausible": "C1", "implausible": "C1", "reticent": "C1",
    "perfunctory": "C1", "contentious": "C1", "esoteric": "C1", "tangible": "C1", "intangible": "C1",
    "meticulous": "C1", "pragmatic": "C1", "resilient": "C1", "substantiate": "C1", "corroborate": "C1",
    "disseminate": "C1", "exacerbate": "C1", "ameliorate": "C1", "proliferation": "C1", "discrepancy": "C1",
    "anomaly": "C1", "dichotomy": "C1", "paradox": "C1", "juxtaposition": "C1", "epitome": "C1",
    "conundrum": "C1", "imperative": "C1", "propensity": "C1", "salient": "C1", "quintessential": "C1",
    "lucid": "C1", "obviate": "C1", "circumvent": "C1", "reconcile": "C1", "stipulate": "C1",

    # C2
    "perspicacity": "C2", "pusillanimous": "C2", "prolixity": "C2", "petulant": "C2", "parsimonious": "C2",
    "obfuscate": "C2", "antediluvian": "C2", "ineluctable": "C2", "recondite": "C2", "truculent": "C2",
    "vicissitude": "C2", "sycophant": "C2", "anathema": "C2", "chicanery": "C2", "grandiloquent": "C2",
    "inchoate": "C2", "lugubrious": "C2", "mendacious": "C2", "nefarious": "C2", "penurious": "C2",
    "querulous": "C2", "redolent": "C2", "sagacious": "C2", "trenchant": "C2", "unctuous": "C2",
    "zealot": "C2", "adroit": "C2", "apotheosis": "C2", "bellicose": "C2", "calumny": "C2",
    "desultory": "C2", "enervate": "C2", "fastidious": "C2", "garrulous": "C2", "harangue": "C2",
}

# Collect all raw records from 436 dataset
raw_items = []
seen_words = set()

def normalize_key(w):
    w = str(w).strip().lower()
    # remove punctuation at boundaries
    w = re.sub(r'^[^\w]+|[^\w]+$', '', w)
    return w

for item in v436:
    w = item.get("word", "").strip()
    norm = normalize_key(w)
    if not norm or norm in seen_words:
        continue
    seen_words.add(norm)

    # Determine CEFR level
    raw_lvl = item.get("difficulty", "")
    if raw_lvl in ["A1", "A2", "B1", "B2", "C1", "C2"]:
        level = raw_lvl
    elif norm in CEFR_MAP:
        level = CEFR_MAP[norm]
    else:
        level = "B2" if raw_lvl == "YDS" else "UNCLASSIFIED"

    # Part of speech
    pos = item.get("partOfSpeech", "").strip().lower()
    if not pos:
        pos = "noun"

    # Phrasal verb check
    is_phrasal = " " in w and any(prep in w.split() for prep in ["up", "down", "in", "out", "on", "off", "away", "over", "into", "through"])

    meanings = item.get("meaningsTr", [])
    if isinstance(meanings, str):
        meanings = [m.strip() for m in meanings.split(",") if m.strip()]

    raw_items.append({
        "id": f"inv-{norm}",
        "word": w,
        "normalized": norm,
        "lemma": norm,
        "partOfSpeech": pos,
        "level": level,
        "turkishMeanings": meanings or ["anlam belirtilmedi"],
        "englishDefinition": item.get("visualMnemonic") or "",
        "example": item.get("example") or "",
        "exampleTr": item.get("exampleTr") or "",
        "pronunciation": item.get("pronunciation") or "",
        "sourceTags": ["flashcards"],
        "frequency": 80 if level in ["B1", "B2"] else (95 if level == "A1" else 60),
        "ydsPriority": item.get("importance", "high").replace("_priority", ""),
        "academic": True,
        "phrasalVerb": is_phrasal,
        "collocations": item.get("collocations", []),
        "memoryCode": item.get("visualMnemonic", "")
    })

# Add canonical flashcard sets (phrasal verbs, etc.)
for s in canon.get("sets", []):
    for c in s.get("cards", []):
        term = c.get("term", "").strip()
        norm = normalize_key(term)
        if not norm:
            continue
        if norm in seen_words:
            # Add tag
            for it in raw_items:
                if it["normalized"] == norm:
                    if "other" not in it["sourceTags"]:
                        it["sourceTags"].append("other")
            continue
        seen_words.add(norm)
        is_phrasal = " " in term
        level = "B1" if is_phrasal else "B2"
        raw_items.append({
            "id": f"inv-{norm}",
            "word": term,
            "normalized": norm,
            "lemma": norm,
            "partOfSpeech": "phrasal verb" if is_phrasal else "phrase",
            "level": level,
            "turkishMeanings": [c.get("meaningTr", "")],
            "englishDefinition": c.get("definitionEn", ""),
            "example": f"Please remember how to use {term} correctly in formal writing.",
            "exampleTr": f"Lütfen {term} ifadesini resmî yazımda doğru kullanmayı unutmayın.",
            "sourceTags": ["flashcards", "other"],
            "frequency": 75,
            "ydsPriority": "high",
            "academic": True,
            "phrasalVerb": is_phrasal,
            "collocations": [term],
            "memoryCode": ""
        })

# Add core A1/A2 words so that A1 and A2 groups have rich content
A1_A2_EXTRA = [
    # A1
    ("water", "noun", "A1", ["su"], "clear liquid without color or taste", "Drink plenty of water.", "Bol su için."),
    ("book", "noun", "A1", ["kitap"], "a written or printed work", "She read an interesting book.", "İlginç bir kitap okudu."),
    ("friend", "noun", "A1", ["arkadaş", "dost"], "a person whom one knows and with whom one has a bond", "He met his best friend.", "En iyi arkadaşıyla buluştu."),
    ("student", "noun", "A1", ["öğrenci"], "a person who is studying at a school or college", "She is a university student.", "O bir üniversite öğrencisidir."),
    ("family", "noun", "A1", ["aile"], "a group of one or more parents and their children", "Family is very important.", "Aile çok önemlidir."),
    ("school", "noun", "A1", ["okul"], "an institution for educating children", "The school is close to home.", "Okul eve yakındır."),
    ("speak", "verb", "A1", ["konuşmak"], "say something in order to convey information", "Can you speak English?", "İngilizce konuşabiliyor musunuz?"),
    ("listen", "verb", "A1", ["dinlemek"], "give one's attention to a sound", "Listen to the teacher.", "Öğretmeni dinleyin."),
    ("happy", "adjective", "A1", ["mutlu"], "feeling or showing pleasure", "They were very happy.", "Çok mutluydular."),
    ("small", "adjective", "A1", ["küçük"], "of limited size", "They live in a small house.", "Küçük bir evde yaşıyorlar."),

    # A2
    ("holiday", "noun", "A2", ["tatil", "bayram"], "an extended period of leisure and recreation", "We spent our holiday in Izmir.", "Tatilimizi İzmir'de geçirdik."),
    ("weather", "noun", "A2", ["hava durumu"], "the state of the atmosphere at a place and time", "The weather was sunny.", "Hava güneşliydi."),
    ("arrive", "verb", "A2", ["varmak", "ulaşmak"], "reach a place at the end of a journey", "The train will arrive soon.", "Tren yakında varacak."),
    ("decide", "verb", "A2", ["karar vermek"], "make a choice from a number of alternatives", "We decided to stay home.", "Evde kalmaya karar verdik."),
    ("crowded", "adjective", "A2", ["kalabalık"], "full of people, leaving little or no room", "The bus was very crowded.", "Otobüs çok kalabalıktı."),
    ("polite", "adjective", "A2", ["kibar", "nazik"], "having or showing good manners", "He was always polite to elders.", "Büyüklere karşı daima nazikti."),
    ("danger", "noun", "A2", ["tehlike"], "the possibility of suffering harm or injury", "He was warned about the danger.", "Tehlike konusunda uyarıldı."),
    ("borrow", "verb", "A2", ["ödünç almak"], "take and use with the intention of returning", "Can I borrow your pen?", "Kalemini ödünç alabilir miyim?"),


    # C1
    ("ubiquitous", "adjective", "C1", ["her yerde bulunan", "yaygın"], "present, appearing, or found everywhere", "Smartphones have become ubiquitous in modern society.", "Akıllı telefonlar modern toplumda her yerde bulunur hale geldi."),
    ("ephemeral", "adjective", "C1", ["kısa ömürlü", "geçici"], "lasting for a very short time", "Fame in the digital era can be notoriously ephemeral.", "Dijital çağda şöhret meşhur bir şekilde geçici olabilir."),
    ("scrutinize", "verb", "C1", ["dikkatle incelemek", "mercek altına almak"], "examine or inspect closely and thoroughly", "Regulators will closely scrutinize the proposed merger.", "Düzenleyiciler önerilen birleşmeyi titizlikle inceleyecek."),
    ("precarious", "adjective", "C1", ["güvencesiz", "tehlikeli", "pamuk ipliğine bağlı"], "not securely held or in position; dangerously likely to fall", "The refugees were living in precarious conditions.", "Mülteciler güvencesiz koşullarda yaşıyordu."),
    ("inexorable", "adjective", "C1", ["durdurulamaz", "kaçınılmaz", "amansız"], "impossible to stop or prevent", "The inexorable rise of global temperatures threatens coastal zones.", "Küresel sıcaklıkların durdurulamaz artışı kıyı bölgelerini tehdit ediyor."),
    ("plausible", "adjective", "C1", ["makul", "akla yatkın"], "seeming reasonable or probable", "The scientist offered a highly plausible explanation.", "Bilim insanı oldukça akla yatkın bir açıklama sundu."),
    ("pragmatic", "adjective", "C1", ["faydacı", "uygulamaya yönelik", "pragmatik"], "dealing with things sensibly and realistically", "We need a pragmatic approach to environmental regulation.", "Çevre düzenlemelerine yönelik pragmatik bir yaklaşıma ihtiyacımız var."),
    ("resilient", "adjective", "C1", ["dirençli", "çabuk toparlanan"], "able to withstand or recover quickly from difficult conditions", "Ecosystems can be remarkably resilient if protected from poaching.", "Ekosistemler kaçak avcılıktan korunursa dikkate değer ölçüde dirençli olabilir."),

    # C2
    ("perspicacity", "noun", "C2", ["keskin kavrayış", "ileri görüşlülük"], "the quality of having a ready insight into things; shrewdness", "Her analytical perspicacity saved the firm from financial ruin.", "Onun analitik keskin kavrayışı firmayı finansal çöküşten kurtardı."),
    ("obfuscate", "verb", "C2", ["anlaşılmaz kılmak", "örtbas etmek", "bulandırmak"], "render obscure, unclear, or unintelligible", "Political spokespersons often attempt to obfuscate uncomfortable truths.", "Siyasi sözcüler genellikle rahatsız edici gerçekleri anlaşılmaz kılmaya çalışırlar."),
    ("pusillanimous", "adjective", "C2", ["ödlek", "korkak", "çekingen"], "showing a lack of courage or determination; timid", "The committee made a pusillanimous decision to defer the investigation.", "Komite soruşturmayı ertelemek için korkakça bir karar aldı."),
    ("parsimonious", "adjective", "C2", ["aşırı tutumlu", "eli sıkı", "cimri"], "unwilling to spend money or use resources; stingy", "The state was criticized for its parsimonious welfare allocations.", "Devlet, cimri sosyal yardım ödenekleri nedeniyle eleştirildi."),
    ("ineluctable", "adjective", "C2", ["kaçınılmaz", "önüne geçilemez"], "unable to be resisted or avoided; inescapable", "Aging is an ineluctable biological reality.", "Yaşlanmak önüne geçilemez biyolojik bir gerçektir."),
    ("trenchant", "adjective", "C2", ["keskin", "etkili", "sert"], "vigorous or incisive in expression or style", "The editor wrote a trenchant critique of the fiscal proposal.", "Editör, mali teklife ilişkin sert ve etkili bir eleştiri yazdı."),
    ("adroit", "adjective", "C2", ["usta", "becerikli", "maharetli"], "clever or skillful in using the hands or mind", "With adroit diplomacy, the ambassador resolved the crisis peacefully.", "Büyükelçi maharetli bir diplomasiyle krizi barışçıl bir şekilde çözdü."),
    ("anathema", "noun", "C2", ["nefret edilen şey", "lanet", "tiksinti kaynağı"], "something or someone that one vehemently dislikes", "Censorship is anathema to a truly democratic society.", "Sansür, gerçekten demokratik bir toplum için nefret kaynağıdır."),

    # UNCLASSIFIED examples to test user classification
    ("serendipity", "noun", "UNCLASSIFIED", ["tatlı tesadüf", "şans eseri buluş"], "finding valuable things not sought for", "It was pure serendipity that we met.", "Karşılaşmamız tam bir tatlı tesadüftü."),
    ("petrichor", "noun", "UNCLASSIFIED", ["yağmur sonrası toprak kokusu"], "a pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather", "She loved the petrichor in autumn.", "Sonbahardaki yağmur sonrası toprak kokusunu çok severdi.")
]

for w, pos, lvl, meanings, defn, ex, exTr in A1_A2_EXTRA:
    norm = normalize_key(w)
    if norm in seen_words:
        continue
    seen_words.add(norm)
    raw_items.append({
        "id": f"inv-{norm}",
        "word": w,
        "normalized": norm,
        "lemma": norm,
        "partOfSpeech": pos,
        "level": lvl,
        "turkishMeanings": meanings,
        "englishDefinition": defn,
        "example": ex,
        "exampleTr": exTr,
        "sourceTags": ["flashcards", "reading"],
        "frequency": 90 if lvl in ["A1", "A2"] else 40,
        "ydsPriority": "medium" if lvl in ["A1", "A2"] else "low",
        "academic": lvl not in ["A1"],
        "phrasalVerb": False,
        "collocations": [f"study {w}"]
    })

print(f"Total inventory items compiled: {len(raw_items)}")

# Count levels
level_counts = {}
for it in raw_items:
    l = it["level"]
    level_counts[l] = level_counts.get(l, 0) + 1
print("Level counts in inventory:", level_counts)

# Save to ts
ts_code = '''// System-wide Read-Only Vocabulary Inventory

export type CefrInventoryLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "UNCLASSIFIED";

export type VocabularySource =
  | "flashcards"
  | "archive"
  | "reading"
  | "exams"
  | "grammar"
  | "user"
  | "other";

export interface VocabularyInventoryItem {
  id: string;
  word: string;
  normalized: string;
  lemma?: string;
  partOfSpeech?: string;
  level: CefrInventoryLevel;
  turkishMeanings: string[];
  englishDefinition?: string;
  example?: string;
  exampleTr?: string;
  pronunciation?: string;
  sourceTags: VocabularySource[];
  frequency?: number;
  ydsPriority?: "low" | "medium" | "high" | "critical";
  academic?: boolean;
  phrasalVerb?: boolean;
  collocations?: string[];
  memoryCode?: string;
  notes?: string;
}

export interface UserInventoryCustomization {
  notes?: Record<string, string>;
  levelOverrides?: Record<string, CefrInventoryLevel>;
  priorityOverrides?: Record<string, "low" | "medium" | "high" | "critical">;
  toAddList?: string[];
  toRemoveList?: string[];
  toCheckList?: string[];
  favorites?: string[];
  customWords?: VocabularyInventoryItem[];
}

export const INVENTORY_STORAGE_KEY = "yds-master-vocabulary-inventory-v1";

export function defaultUserCustomization(): UserInventoryCustomization {
  return {
    notes: {},
    levelOverrides: {},
    priorityOverrides: {},
    toAddList: [],
    toRemoveList: [],
    toCheckList: [],
    favorites: [],
    customWords: [],
  };
}

export const BASE_INVENTORY_ITEMS: VocabularyInventoryItem[] = ''' + json.dumps(raw_items, indent=2, ensure_ascii=False) + ''';

export function loadUserInventoryCustomization(): UserInventoryCustomization {
  if (typeof window === "undefined") return defaultUserCustomization();
  try {
    const raw = window.localStorage.getItem(INVENTORY_STORAGE_KEY);
    if (!raw) return defaultUserCustomization();
    const parsed = JSON.parse(raw);
    return {
      notes: typeof parsed.notes === "object" && parsed.notes !== null ? parsed.notes : {},
      levelOverrides: typeof parsed.levelOverrides === "object" && parsed.levelOverrides !== null ? parsed.levelOverrides : {},
      priorityOverrides: typeof parsed.priorityOverrides === "object" && parsed.priorityOverrides !== null ? parsed.priorityOverrides : {},
      toAddList: Array.isArray(parsed.toAddList) ? parsed.toAddList : [],
      toRemoveList: Array.isArray(parsed.toRemoveList) ? parsed.toRemoveList : [],
      toCheckList: Array.isArray(parsed.toCheckList) ? parsed.toCheckList : [],
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
      customWords: Array.isArray(parsed.customWords) ? parsed.customWords : [],
    };
  } catch {
    return defaultUserCustomization();
  }
}

export function saveUserInventoryCustomization(cust: UserInventoryCustomization): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(cust));
  } catch {
    /* safety */
  }
}

export function getMergedInventory(customization: UserInventoryCustomization): VocabularyInventoryItem[] {
  const merged = BASE_INVENTORY_ITEMS.map((item) => {
    const overrideLevel = customization.levelOverrides?.[item.id];
    const overridePriority = customization.priorityOverrides?.[item.id];
    const note = customization.notes?.[item.id];

    return {
      ...item,
      level: overrideLevel || item.level,
      ydsPriority: overridePriority || item.ydsPriority,
      notes: note || item.notes,
    };
  });

  if (customization.customWords && customization.customWords.length > 0) {
    return [...customization.customWords, ...merged];
  }

  return merged;
}

// Formula Injection Defense for CSV Export
export function sanitizeCsvField(field: unknown): string {
  if (field === null || field === undefined) return "";
  let str = String(field).trim();
  const first = str.charAt(0);
  if (first === "=" || first === "+" || first === "-" || first === "@" || first === "\t" || first === "\r") {
    str = "'" + str;
  }
  if (str.includes(",") || str.includes('"') || str.includes("\n") || str.includes("\r")) {
    str = '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

export function exportInventoryToCsv(items: VocabularyInventoryItem[]): string {
  const headers = [
    "Word",
    "CEFR Level",
    "Part of Speech",
    "Turkish Meanings",
    "English Definition",
    "Example",
    "Example Translation",
    "YDS Priority",
    "Academic",
    "Phrasal Verb",
    "Sources",
    "User Notes"
  ];

  const rows = items.map((item) => [
    sanitizeCsvField(item.word),
    sanitizeCsvField(item.level),
    sanitizeCsvField(item.partOfSpeech),
    sanitizeCsvField(item.turkishMeanings.join("; ")),
    sanitizeCsvField(item.englishDefinition || ""),
    sanitizeCsvField(item.example || ""),
    sanitizeCsvField(item.exampleTr || ""),
    sanitizeCsvField(item.ydsPriority || "medium"),
    sanitizeCsvField(item.academic ? "Yes" : "No"),
    sanitizeCsvField(item.phrasalVerb ? "Yes" : "No"),
    sanitizeCsvField(item.sourceTags.join(", ")),
    sanitizeCsvField(item.notes || ""),
  ].join(","));

  return [headers.join(","), ...rows].join("\\n");
}
'''

with open('src/lib/data-inventory.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print("src/lib/data-inventory.ts written successfully!")
