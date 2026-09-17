#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os

OUT_PATH = "src/lib/data-tenses-expanded.ts"

from tenses_data_part1 import TENSES_PART1

print("Loaded part 1:", len(TENSES_PART1))
