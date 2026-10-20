export type AudioRequestErrorCode =
  | "INVALID_RESPONSE"
  | "VOICE_UNAVAILABLE"
  | "PROVIDER_ERROR"
  | "NETWORK_ERROR";

export class AudioRequestError extends Error {
  constructor(
    message: string,
    public readonly code: AudioRequestErrorCode,
    public readonly status?: number,
  ) {
    super(message);
    this.name = "AudioRequestError";
  }
}

export async function requestPronunciationAudio(
  text: string,
  accent: string,
  signal?: AbortSignal,
  fetchImpl: typeof fetch = fetch,
): Promise<Blob> {
  let response: Response;

  try {
    response = await fetchImpl("/api/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "audio/mpeg, application/json",
      },
      body: JSON.stringify({ text, accent }),
      signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }

    throw new AudioRequestError(
      "The pronunciation service could not be reached.",
      "NETWORK_ERROR",
    );
  }

  const contentType = (
    response.headers.get("content-type") ?? ""
  ).toLowerCase();

  if (!response.ok) {
    let message = `Audio service failed (${response.status}).`;

    if (contentType.includes("application/json")) {
      try {
        const data: unknown = await response.json();

        if (
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof (data as { error?: unknown }).error === "string"
        ) {
          message = (data as { error: string }).error;
        }
      } catch {
        // Preserve the safe default error message.
      }
    }

    throw new AudioRequestError(
      message,
      response.status === 404
        ? "VOICE_UNAVAILABLE"
        : "PROVIDER_ERROR",
      response.status,
    );
  }

  // HTTP 200 is not sufficient: validate the response format.
  if (
    !contentType.startsWith("audio/") ||
    contentType.includes("application/json")
  ) {
    throw new AudioRequestError(
      "The server did not return playable audio. Check the TTS provider and fallback response.",
      "INVALID_RESPONSE",
      response.status,
    );
  }

  const blob = await response.blob();

  if (blob.size === 0) {
    throw new AudioRequestError(
      "The audio response was empty.",
      "INVALID_RESPONSE",
      response.status,
    );
  }

  return blob;
}
