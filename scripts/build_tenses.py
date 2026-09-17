import json
import sys

# We will build the full dictionary of all 17 tenses and generate src/lib/data-tenses-expanded.ts
levels_order = ["A1", "A2", "B1", "B2", "C1", "C2", "YDS"]

# We will define each tense data dictionary with all 7 levels
tenses_data = []

def make_tense(slug, name, turkish, emoji, summary, level_dict):
    blocks = []
    for lvl in levels_order:
        b = level_dict[lvl]
        blocks.append({
            "level": lvl,
            "title": b["title"],
            "basicMeaning": b["meaning"],
            "usages": b["usages"],
            "nonUsages": b["nonUsages"],
            "positiveFormula": b["pos"],
            "negativeFormula": b["neg"],
            "questionFormula": b["que"],
            "shortAnswers": b["shortAns"],
            "subjectVerbAgreement": b["sva"],
            "verbForm": b["verbForm"],
            "auxiliaryVerb": b["aux"],
            "timeMarkers": b["timeMarkers"],
            "signalWords": b["signals"],
            "timeline": b["timeline"],
            "examples": b["examples"],
            "exampleTr": b["exampleTr"],
            "code": b["code"],
            "visualMemory": b["visual"],
            "commonMistake": b["mistake"],
            "correctWrongContrast": b["contrast"],
            "differenceFromSimilarTense": b["diff"],
            "levelTactic": b["tactic"],
            "miniTest": b["miniTest"],
            "explainedAnswer": b["explainedAns"]
        })
    return {
        "slug": slug,
        "name": name,
        "turkish": turkish,
        "emoji": emoji,
        "levelRange": "A1 - YDS",
        "summary": summary,
        "levels": blocks
    }

print("make_tense helper defined")
