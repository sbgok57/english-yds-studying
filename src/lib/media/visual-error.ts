/** Return an honest, retryable error when an image provider cannot supply media. */
export function createVisualUnavailableResponse(): Response {
  return new Response(
    JSON.stringify({
      ok: false,
      code: "IMAGE_PROVIDER_UNAVAILABLE",
      message: "Görsel sağlayıcısı şu anda yanıt vermiyor. Biraz sonra yeniden deneyin.",
      retryable: true,
    }),
    {
      status: 503,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}
