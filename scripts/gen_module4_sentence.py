# -*- coding: utf-8 -*-
import json
from collections import Counter

def make_q(qid, stem, correct, distractors, a_idx, ex):
    assert len(distractors) == 4, f"{qid} distractors != 4"
    assert len(set([correct] + distractors)) == 5, f"{qid} duplicate options"
    opts = [None] * 5
    opts[a_idx] = correct
    d = 0
    for i in range(5):
        if i != a_idx:
            opts[i] = distractors[d]
            d += 1
    return {
        "id": qid,
        "t": "sentence",
        "s": stem,
        "o": opts,
        "a": a_idx,
        "ex": ex,
        "level": "YDS",
        "difficulty": "medium",
        "sourceType": "original-yds-style",
        "isOfficial": False,
    }

SENTENCES = [
