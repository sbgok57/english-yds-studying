/** Browser preference contains a voice ID only, never an API key. */
export function getSavedElevenLabsVoiceId(): string | undefined {
  try {
    if (typeof window === "undefined") return undefined;
    const id = window.localStorage.getItem("elevenlabs-voice-id");
    return id && /^[a-zA-Z0-9_-]{1,128}$/.test(id) ? id : undefined;
  } catch { return undefined; }
}
