import assert from "node:assert/strict";
import { NextRequest } from "next/server";
import { GET } from "../src/app/api/word-photo/route";

const originalFetch = global.fetch;

async function run() {
  let requestedUrl = "";
  global.fetch = (async (input: RequestInfo | URL) => {
    requestedUrl = String(input);
    return Response.json({
      query: {
        pages: [
          { title: "File:mitigate diagram.png", imageinfo: [{ mime: "image/png", url: "https://upload.wikimedia.org/diagram.png", thumburl: "https://upload.wikimedia.org/diagram-thumb.png", extmetadata: { LicenseShortName: { value: "CC BY-SA 4.0" }, Artist: { value: "Diagram author" } } }] },
          { title: "File:mitigate-example.gif", imageinfo: [{ mime: "image/gif", url: "https://upload.wikimedia.org/mitigate.gif", thumburl: "https://upload.wikimedia.org/mitigate-thumb.gif", descriptionurl: "https://commons.wikimedia.org/wiki/File:mitigate-example.gif", extmetadata: { LicenseShortName: { value: "CC BY 4.0" }, Artist: { value: "<a>Example author</a>" }, LicenseUrl: { value: "https://creativecommons.org/licenses/by/4.0/" } } }] },
        ],
      },
    });
  }) as typeof fetch;

  try {
    const response = await GET(new NextRequest("https://dil-master.test/api/word-photo?word=mitigate&meaning=hafifletmek&animated=1"));
    const body = await response.json();
    assert.equal(response.status, 200);
    assert.equal(body.mimeType, "image/gif");
    assert.equal(body.mediaType, "animated-image");
    assert.equal(body.imageUrl, "https://upload.wikimedia.org/mitigate.gif", "GIF result must use original animation, not a resized still thumbnail.");
    assert.equal(body.attribution, "Example author");
    assert.equal(body.license, "CC BY 4.0");
    assert.match(requestedUrl, /mitigate/);
    assert.match(requestedUrl, /hafifletmek/, "Wikimedia search must include the Turkish meaning as context.");

    global.fetch = (async () => Response.json({ query: { pages: [{ title: "File:static.png", imageinfo: [{ mime: "image/png", url: "https://upload.wikimedia.org/static.png", extmetadata: { LicenseShortName: { value: "CC0" }, Artist: { value: "Author" } } }] }] } })) as typeof fetch;
    const noGif = await GET(new NextRequest("https://dil-master.test/api/word-photo?word=mitigate&animated=1"));
    assert.equal(noGif.status, 404, "A still image must never be reported as an animation.");
    const noGifBody = await noGif.json();
    assert.equal(noGifBody.code, "GIF_NOT_FOUND");

    global.fetch = (async () => Response.json({ query: { pages: [{ title: "File:sample.jpg", imageinfo: [{ mime: "image/jpeg", url: "https://attacker.invalid/sample.jpg", extmetadata: { LicenseShortName: { value: "CC0" }, Artist: { value: "Author" } } }] }] } })) as typeof fetch;
    const unsafeHost = await GET(new NextRequest("https://dil-master.test/api/word-photo?word=mitigate"));
    assert.equal(unsafeHost.status, 404, "Untrusted image hosts must never be returned to the browser.");

    global.fetch = (async () => Response.json({ query: { pages: [{ title: "File:sample.jpg", imageinfo: [{ mime: "image/jpeg", url: "https://upload.wikimedia.org/sample.jpg", thumburl: "https://upload.wikimedia.org/sample-thumb.jpg", extmetadata: { LicenseShortName: { value: "CC0" }, Artist: { value: "Author &#99999999; Name" } } }] }] } })) as typeof fetch;
    const malformedEntity = await GET(new NextRequest("https://dil-master.test/api/word-photo?word=mitigate"));
    assert.equal(malformedEntity.status, 200, "Malformed metadata entities must not crash the photo route.");
    const malformedEntityBody = await malformedEntity.json();
    assert.equal(malformedEntityBody.attribution, "Author Name");
    console.log("  ✅ PASS: Commons photo route requires attribution and returns only original GIF media for animation mode.");
  } finally {
    global.fetch = originalFetch;
  }
}

void run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
