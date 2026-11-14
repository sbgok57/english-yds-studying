import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type CommonsPage = {
  title?: string;
  imageinfo?: Array<{
    url?: string;
    thumburl?: string;
    descriptionurl?: string;
    mime?: string;
    extmetadata?: Record<string, { value?: string }>;
  }>;
};

const UNSUITABLE_TITLE = /\b(chart|graph|diagram|infographic|icon|logo|map|plot|symbol|formula|flag|coat of arms|figure|chapter|report|publication|estimated|per capita|scenario|emissions|dataset|statistical|recommendations|adaptation|typeface|font|sample)\b/i;
const UNSUITABLE_DESCRIPTION = /\b(chart|graph|diagram|infographic|icon|logo|map|plot|symbol|formula|flag|coat of arms|flow diagram|screenshot|bar chart|figure|chapter|report|publication|estimated|per capita|scenario|emissions|dataset|statistical analysis|recommendations|adaptation|typeface sample|font specimen)\b/i;
const SAFE_MEDIA_HOSTS = new Set(["upload.wikimedia.org", "thumb.wikimedia.org", "commons.wikimedia.org"]);

function plainText(value: string | undefined, maxLength = 240): string {
  if (!value) return "";
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&#(\d+);/g, (_, n: string) => decodeCodePoint(Number(n)))
    .replace(/&#x([\da-f]+);/gi, (_, n: string) => decodeCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function decodeCodePoint(codePoint: number): string {
  if (!Number.isInteger(codePoint) || codePoint < 0 || codePoint > 0x10ffff || (codePoint >= 0xd800 && codePoint <= 0xdfff)) {
    return " ";
  }
  return String.fromCodePoint(codePoint);
}

function safeCommonsUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && SAFE_MEDIA_HOSTS.has(url.hostname) ? url.toString() : null;
  } catch {
    return null;
  }
}

function matchesHeadword(text: string, word: string): boolean {
  const normalize = (value: string) => value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("en")
    .replace(/[_-]+/g, " ");
  const tokens = normalize(text).split(/[^a-z0-9]+/).filter(Boolean);
  const normalizedWord = normalize(word).trim();
  if (!normalizedWord) return false;
  if (tokens.includes(normalizedWord)) return true;
  // Accept common English inflections (mitigate/mitigation, reduce/reduction)
  // while requiring a real headword signal in the file title or description.
  const stem = normalizedWord.length >= 5 ? normalizedWord.slice(0, -1) : "";
  return Boolean(stem && tokens.some((token) => token.startsWith(stem)));
}

export async function GET(request: NextRequest) {
  const word = (request.nextUrl.searchParams.get("word") || "").replace(/[<>\u0000-\u001f]/g, " ").trim().slice(0, 90);
  const meaning = (request.nextUrl.searchParams.get("meaning") || "").replace(/[<>\u0000-\u001f]/g, " ").trim().slice(0, 140);
  const animated = request.nextUrl.searchParams.get("animated") === "1";

  if (!word) return NextResponse.json({ ok: false, code: "WORD_REQUIRED" }, { status: 400 });

  try {
    let candidate: CommonsPage | undefined;
    // Search the English headword with the Turkish meaning first. Wikimedia's
    // search treats terms as required matches, so retry by headword alone when
    // that exact bilingual query has no usable media.
    const searchQueries = [...new Set([`${word} ${meaning}`.trim(), word])];
    for (const searchText of searchQueries) {
      const query = new URL("https://commons.wikimedia.org/w/api.php");
      query.search = new URLSearchParams({
        action: "query",
        format: "json",
        formatversion: "2",
        generator: "search",
        gsrsearch: searchText,
        gsrnamespace: "6",
        gsrlimit: "24",
        prop: "imageinfo",
        // `mime` must be explicitly requested; otherwise the API omits it and
        // all otherwise-valid media would be rejected by the safety filter.
        iiprop: "url|mime|extmetadata",
        iiurlwidth: "900",
      }).toString();

      const response = await fetch(query, {
        headers: {
          Accept: "application/json",
          "User-Agent": "DilMasterVocabulary/1.0 (https://dil-master.vercel.app; educational image search)",
        },
        signal: AbortSignal.timeout(8000),
        cache: "no-store",
      });
      if (!response.ok) {
        return NextResponse.json({ ok: false, code: "COMMONS_UNAVAILABLE" }, { status: 502, headers: { "Cache-Control": "no-store" } });
      }
      const payload = await response.json() as { query?: { pages?: CommonsPage[] } };
      candidate = (payload.query?.pages ?? []).find((page) => {
        // Commons filenames commonly join labels to digits with underscores
        // (for example, "chapter3_figure2"); normalize those separators so
        // the word-boundary filter still rejects figures and data visualizations.
        const searchableTitle = page.title?.replace(/[_\d]+/g, " ");
        if (!searchableTitle || UNSUITABLE_TITLE.test(searchableTitle)) return false;
        const info = page.imageinfo?.[0];
        if (!info) return false;
        if (animated && info.mime !== "image/gif") return false;
        if (!animated && !["image/jpeg", "image/png", "image/webp", "image/gif"].includes(info.mime || "")) return false;
        const metadata = info.extmetadata || {};
        const description = plainText(metadata.ImageDescription?.value || metadata.ObjectName?.value, 600);
        if (UNSUITABLE_DESCRIPTION.test(description)) return false;
        // Commons search is broad and may return a homonym or unrelated file.
        // Require a headword (or a simple inflection) in the title/description;
        // never pass an unrelated image off as a vocabulary illustration.
        if (!matchesHeadword(`${page.title} ${description}`, word)) return false;
        const hasLicense = Boolean(plainText(metadata.LicenseShortName?.value || metadata.UsageTerms?.value, 100));
        const hasAttribution = Boolean(plainText(metadata.Attribution?.value || metadata.Artist?.value, 240));
        return hasLicense && hasAttribution && Boolean(safeCommonsUrl(animated ? info.url : info.thumburl || info.url));
      });
      if (candidate) break;
    }

    if (!candidate?.imageinfo?.[0]) {
      return NextResponse.json(
        { ok: false, code: animated ? "GIF_NOT_FOUND" : "PHOTO_NOT_FOUND", message: animated ? "Bu kelime için uygun, gerçek GIF biçiminde bir Commons animasyonu bulunamadı." : "Bu kelime ve anlam için uygun lisans bilgili Commons fotoğrafı bulunamadı." },
        { status: 404, headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" } },
      );
    }

    const info = candidate.imageinfo[0];
    const metadata = info.extmetadata || {};
    // Use the original file for GIFs: a resized thumbnail may be a still frame.
    const imageUrl = safeCommonsUrl(animated ? info.url : info.thumburl || info.url);
    const sourcePage = safeCommonsUrl(info.descriptionurl);
    const licenseUrlRaw = metadata.LicenseUrl?.value;
    let licenseUrl: string | null = null;
    try {
      if (licenseUrlRaw) {
        const parsed = new URL(licenseUrlRaw);
        if (parsed.protocol === "https:") licenseUrl = parsed.toString();
      }
    } catch { /* Attribution remains available even if an external license link is malformed. */ }

    return NextResponse.json({
      ok: true,
      mode: animated ? "animation" : "photo",
      mediaType: info.mime === "image/gif" ? "animated-image" : "image",
      mimeType: info.mime,
      imageUrl,
      title: plainText(candidate.title, 180),
      alt: `${word} — ${meaning || "kelime görseli"}; Wikimedia Commons görseli`,
      license: plainText(metadata.LicenseShortName?.value || metadata.UsageTerms?.value || "Lisans bilgisi belirtilmemiş", 100),
      attribution: plainText(metadata.Attribution?.value || metadata.Artist?.value || "Üretici bilgisi belirtilmemiş", 240),
      licenseUrl,
      sourcePage,
    }, { headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" } });
  } catch (error) {
    const timeout = error instanceof Error && error.name === "TimeoutError";
    return NextResponse.json({ ok: false, code: timeout ? "COMMONS_TIMEOUT" : "COMMONS_UNAVAILABLE", message: "Ücretsiz Commons görsel kataloğuna şu anda ulaşılamıyor." }, { status: timeout ? 504 : 502, headers: { "Cache-Control": "no-store" } });
  }
}
