type VisualUnavailableOptions = {
  status?: 502 | 503;
  code?: "IMAGE_PROVIDER_UNAVAILABLE" | "IMAGE_PROVIDER_NOT_CONFIGURED";
  message?: string;
  retryable?: boolean;
};

/** Return an honest, retryable error when an image provider cannot supply media. */
export function createVisualUnavailableResponse(options: VisualUnavailableOptions = {}): Response {
  const {
    status = 503,
    code = "IMAGE_PROVIDER_UNAVAILABLE",
    message = "Görsel sağlayıcısı şu anda yanıt vermiyor. Biraz sonra yeniden deneyin.",
    retryable = true,
  } = options;
  return new Response(
    JSON.stringify({
      ok: false,
      code,
      message,
      retryable,
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}
