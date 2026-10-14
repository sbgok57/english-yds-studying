export const MAX_THEME_IMAGE_BYTES = 5 * 1024 * 1024;
export const THEME_IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;

export type ImageThemePalette = {
  primary: string;
  secondary: string;
  surface: string;
  soft: string;
  text: string;
};

type Rgb = { r: number; g: number; b: number };

function parseHex(hex: string): Rgb | null {
  const match = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex.trim());
  if (!match) return null;
  return { r: Number.parseInt(match[1]!, 16), g: Number.parseInt(match[2]!, 16), b: Number.parseInt(match[3]!, 16) };
}

function toHex({ r, g, b }: Rgb): string {
  return `#${[r, g, b].map((channel) => Math.round(channel).toString(16).padStart(2, "0")).join("")}`;
}

function luminance({ r, g, b }: Rgb): number {
  const linear = [r, g, b].map((channel) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return linear[0]! * 0.2126 + linear[1]! * 0.7152 + linear[2]! * 0.0722;
}

export function contrastRatio(foregroundHex: string, backgroundHex: string): number {
  const foreground = parseHex(foregroundHex);
  const background = parseHex(backgroundHex);
  if (!foreground || !background) return 1;
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0]! + 0.05) / (values[1]! + 0.05);
}

function blend(foreground: Rgb, background: Rgb, amount: number): Rgb {
  return {
    r: foreground.r * (1 - amount) + background.r * amount,
    g: foreground.g * (1 - amount) + background.g * amount,
    b: foreground.b * (1 - amount) + background.b * amount,
  };
}

function readableAccent(hex: string): string {
  let rgb = parseHex(hex) ?? { r: 24, g: 93, b: 150 };
  const white = { r: 255, g: 255, b: 255 };
  for (let attempt = 0; attempt < 16 && contrastRatio(toHex(rgb), "#ffffff") < 4.5; attempt += 1) {
    rgb = blend(rgb, { r: 0, g: 0, b: 0 }, 0.11);
  }
  return toHex(rgb);
}

/**
 * Extracts an approximate accessible palette from an image selected by the user.
 * Only raster JPEG/PNG/WebP is accepted; SVG/GIF are excluded. The caller owns persistence.
 */
export async function extractImageThemePalette(file: File): Promise<ImageThemePalette> {
  if (!THEME_IMAGE_MIME_TYPES.includes(file.type as (typeof THEME_IMAGE_MIME_TYPES)[number])) {
    throw new Error("Yalnızca JPEG, PNG veya WebP fotoğraf kullanılabilir.");
  }
  if (file.size < 1 || file.size > MAX_THEME_IMAGE_BYTES) {
    throw new Error("Fotoğraf boş olamaz ve en fazla 5 MB olabilir.");
  }
  if (typeof createImageBitmap !== "function" || typeof document === "undefined") {
    throw new Error("Bu tarayıcı fotoğraftan renk çıkarımını desteklemiyor.");
  }

  const bitmap = await createImageBitmap(file);
  try {
    if (bitmap.width < 1 || bitmap.height < 1 || bitmap.width * bitmap.height > 40_000_000) {
      throw new Error("Fotoğrafın piksel boyutu güvenli sınırı aşıyor.");
    }
    const canvas = document.createElement("canvas");
    const sampleSize = 48;
    canvas.width = sampleSize;
    canvas.height = sampleSize;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) throw new Error("Fotoğraf renkleri okunamadı.");
    context.drawImage(bitmap, 0, 0, sampleSize, sampleSize);
    const data = context.getImageData(0, 0, sampleSize, sampleSize).data;
    const bins = new Map<number, { r: number; g: number; b: number; count: number }>();

    for (let index = 0; index < data.length; index += 4) {
      const alpha = data[index + 3]!;
      if (alpha < 160) continue;
      const r = data[index]!;
      const g = data[index + 1]!;
      const b = data[index + 2]!;
      const key = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
      const entry = bins.get(key) ?? { r: 0, g: 0, b: 0, count: 0 };
      entry.r += r;
      entry.g += g;
      entry.b += b;
      entry.count += 1;
      bins.set(key, entry);
    }

    const ranked = [...bins.values()].sort((left, right) => right.count - left.count);
    if (ranked.length === 0) throw new Error("Fotoğrafta okunabilir piksel bulunamadı.");
    const colorOf = (entry: (typeof ranked)[number]) => toHex({
      r: entry.r / entry.count,
      g: entry.g / entry.count,
      b: entry.b / entry.count,
    });
    const dominant = colorOf(ranked[0]!);
    const secondary = colorOf(ranked.find((entry) => {
      const difference = Math.abs(entry.r / entry.count - (ranked[0]!.r / ranked[0]!.count))
        + Math.abs(entry.g / entry.count - (ranked[0]!.g / ranked[0]!.count))
        + Math.abs(entry.b / entry.count - (ranked[0]!.b / ranked[0]!.count));
      return difference > 72;
    }) ?? ranked[Math.min(1, ranked.length - 1)]!);
    const dominantRgb = parseHex(dominant)!;
    const secondaryRgb = parseHex(secondary)!;
    const surfaceRgb = blend(dominantRgb, { r: 255, g: 255, b: 255 }, 0.93);
    const softRgb = blend(secondaryRgb, { r: 255, g: 255, b: 255 }, 0.88);
    const surface = toHex(surfaceRgb);
    const text = contrastRatio("#17233c", surface) >= 4.5 ? "#17233c" : "#101820";

    return {
      primary: readableAccent(dominant),
      secondary: readableAccent(secondary),
      surface,
      soft: toHex(softRgb),
      text,
    };
  } finally {
    bitmap.close();
  }
}
