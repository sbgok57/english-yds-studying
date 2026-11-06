# Human-recorded word pronunciations

The vocabulary player offers a separate **İnsan kaydı** action. It searches English Wiktionary for an exact word and one of the three supported accent labels (`en-GB`, `en-US`, `en-AU`), then verifies the Commons media URL and reuse-license metadata before returning the audio through Dil Master.

This is a recording lookup, not text-to-speech. It needs no provider account or API key. Coverage depends on volunteers having recorded that exact word in that exact accent, so a missing item is reported instead of being replaced with another accent or a generated voice. The word's ordinary voice button remains separate and continues to respect the configured speaker profile.

Commons recording metadata does not reliably identify a speaker's gender. These clips are therefore labeled **speaker gender unknown** and are not presented as the selected female/male voice. The site displays a credit link to the file page and the applicable license; each file can have a different license and contributor.

The endpoint accepts only a single English word, uses fixed Wikimedia API hosts, includes a descriptive User-Agent, restricts returned media to Wikimedia's upload host and supported audio MIME types, and caps downloads at 4 MiB. Temporary API/CDN errors produce an unavailable state. The app does not cache or rehost arbitrary user-provided URLs.

For full sentences, grammar lessons, reading passages, and Turkish narration, Wikimedia's word recordings do not provide arbitrary human narration. The existing configured provider/system-voice path remains responsible for those forms. An actual human recording for every lesson needs recordings and distribution rights for each lesson; no free public TTS service can turn arbitrary lesson text into human-recorded audio.
