#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os

OUT_FILE = os.path.abspath("src/lib/data-tenses-expanded.ts")

# 17 Tenses metadata
TENSES_META = [
    {"slug": "simple-present", "name": "Simple Present Tense", "turkish": "Geniş Zaman", "emoji": "☀️", "levelRange": "A1 - YDS"},
    {"slug": "present-continuous", "name": "Present Continuous Tense", "turkish": "Şimdiki Zaman", "emoji": "🏃", "levelRange": "A1 - YDS"},
    {"slug": "simple-past", "name": "Simple Past Tense", "turkish": "Geçmiş Zaman (Dili Geçmiş)", "emoji": "🏛️", "levelRange": "A1 - YDS"},
    {"slug": "past-continuous", "name": "Past Continuous Tense", "turkish": "Geçmişte Süregelen Zaman", "emoji": "🎬", "levelRange": "A2 - YDS"},
    {"slug": "present-perfect", "name": "Present Perfect Tense", "turkish": "Yakın Geçmiş / Etkisi Süren Zaman", "emoji": "🌉", "levelRange": "A2 - YDS"},
    {"slug": "present-perfect-continuous", "name": "Present Perfect Continuous Tense", "turkish": "Süreç Vurgulayan Yakın Geçmiş", "emoji": "⏱️", "levelRange": "B1 - YDS"},
    {"slug": "past-perfect", "name": "Past Perfect Tense", "turkish": "Öncesi Geçmiş Zaman (Past of the Past)", "emoji": "🕰️", "levelRange": "B1 - YDS"},
    {"slug": "past-perfect-continuous", "name": "Past Perfect Continuous Tense", "turkish": "Geçmişte Süregelen Süreç", "emoji": "⏳", "levelRange": "B2 - YDS"},
    {"slug": "simple-future", "name": "Simple Future Tense (will)", "turkish": "Gelecek Zaman (will)", "emoji": "🔮", "levelRange": "A1 - YDS"},
    {"slug": "be-going-to", "name": "Be Going To Future", "turkish": "Planlı / Kanıtlı Gelecek Zaman", "emoji": "🎯", "levelRange": "A1 - YDS"},
    {"slug": "present-continuous-future", "name": "Present Continuous for Future", "turkish": "Kesinleşmiş Gelecek Düzenlemeleri", "emoji": "📅", "levelRange": "A2 - YDS"},
    {"slug": "simple-present-future", "name": "Simple Present for Scheduled Future", "turkish": "Resmi Tarife & Çizelgeler", "emoji": "🚆", "levelRange": "B1 - YDS"},
    {"slug": "future-continuous", "name": "Future Continuous Tense", "turkish": "Gelecekte Süregelen Zaman", "emoji": "🛰️", "levelRange": "B1 - YDS"},
    {"slug": "future-perfect", "name": "Future Perfect Tense", "turkish": "Gelecekte Tamamlanmış Zaman", "emoji": "🏁", "levelRange": "B2 - YDS"},
    {"slug": "future-perfect-continuous", "name": "Future Perfect Continuous Tense", "turkish": "Gelecekte Süreç Tamamlama", "emoji": "📈", "levelRange": "C1 - YDS"},
    {"slug": "future-in-the-past", "name": "Future in the Past", "turkish": "Geçmişteki Gelecek (would / was-were going to)", "emoji": "⏪", "levelRange": "B2 - YDS"},
    {"slug": "used-to-would", "name": "Used to & Would", "turkish": "Geçmiş Alışkanlıklar ve Durumlar", "emoji": "📜", "levelRange": "B1 - YDS"}
]

print("Tenses meta loaded:", len(TENSES_META))
