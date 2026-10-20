"use client";

import { useEffect, useId, useState } from "react";
import { extractImageThemePalette, type ImageThemePalette } from "@/shared/theme-palette";

export type ThemePresetId = "calm" | "pastel" | "vivid" | "neon" | "ocean" | "forest" | "paper" | "emoji" | "photo";
export type ThemePatternId = "none" | "dots" | "grid" | "stars" | "waves";
export type ThemeMotionId = "none" | "aurora" | "float";

export type ThemeSelection = {
  presetId: ThemePresetId;
  patternId: ThemePatternId;
  motionId: ThemeMotionId;
  customPalette: ImageThemePalette | null;
};

export type ThemeSaveHandler = (selection: ThemeSelection, image?: File) => Promise<void> | void;

type Preset = {
  id: ThemePresetId;
  label: string;
  emoji: string;
  description: string;
  palette: ImageThemePalette;
  dark?: boolean;
};

export const THEME_PRESETS: readonly Preset[] = [
  { id: "calm", label: "Sakin gökkuşağı", emoji: "🌈", description: "Açık, dengeli ve uzun okumaya uygun.", palette: { primary: "#145b9f", secondary: "#08786f", surface: "#ffffff", soft: "#edf6ff", text: "#17233c" } },
  { id: "pastel", label: "Pastel bahçe", emoji: "🌷", description: "Yumuşak pembe, lila ve mint vurgular.", palette: { primary: "#7951a8", secondary: "#117c72", surface: "#fffaff", soft: "#f8efff", text: "#29243a" } },
  { id: "vivid", label: "Canlı enerji", emoji: "🎨", description: "Canlı renkler; metin kontrastı korunur.", palette: { primary: "#a13b12", secondary: "#075f9e", surface: "#fffdf7", soft: "#fff1dc", text: "#211c18" } },
  { id: "neon", label: "Neon gece", emoji: "🌌", description: "Koyu yüzey ve neon vurgu renkleri.", palette: { primary: "#62e7ff", secondary: "#f28cff", surface: "#17162b", soft: "#25223c", text: "#f8f6ff" }, dark: true },
  { id: "ocean", label: "Okyanus", emoji: "🌊", description: "Mavi ve teal tonlarında rahat çalışma alanı.", palette: { primary: "#075b91", secondary: "#007c74", surface: "#f3fbff", soft: "#dff4ff", text: "#142b42" } },
  { id: "forest", label: "Orman", emoji: "🌿", description: "Yeşil, taş ve toprak tonları.", palette: { primary: "#27623e", secondary: "#8a5618", surface: "#f7fbf5", soft: "#e7f3e5", text: "#1b2c20" } },
  { id: "paper", label: "Sıcak kâğıt", emoji: "📜", description: "Krem arka plan, düşük parlaklık ve sakin vurgu.", palette: { primary: "#794518", secondary: "#5a5f2a", surface: "#fff8e9", soft: "#f4e9d0", text: "#35291b" } },
  { id: "emoji", label: "Emoji neşesi", emoji: "✨", description: "Sevimli ikonlar ve renkli ama okunaklı yüzeyler.", palette: { primary: "#844419", secondary: "#37672e", surface: "#fffdf2", soft: "#fff0cf", text: "#29251d" } },
  { id: "photo", label: "Fotoğrafımdan", emoji: "🖼️", description: "Fotoğrafın renklerinden yaklaşık vurgu paleti.", palette: { primary: "#145b9f", secondary: "#08786f", surface: "#ffffff", soft: "#edf6ff", text: "#17233c" } },
];

const STORAGE_KEY = "dil-master-theme-selection:v1";
const DEFAULT_SELECTION: ThemeSelection = { presetId: "calm", patternId: "none", motionId: "none", customPalette: null };

function readSavedSelection(): ThemeSelection {
  if (typeof localStorage === "undefined") return DEFAULT_SELECTION;
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null") as Partial<ThemeSelection> | null;
    const presetId = THEME_PRESETS.some((preset) => preset.id === value?.presetId) ? value!.presetId! : "calm";
    const patternId: ThemePatternId = ["none", "dots", "grid", "stars", "waves"].includes(String(value?.patternId)) ? value!.patternId! : "none";
    const motionId: ThemeMotionId = ["none", "aurora", "float"].includes(String(value?.motionId)) ? value!.motionId! : "none";
    const customPalette = value?.customPalette && typeof value.customPalette.primary === "string" ? value.customPalette : null;
    return { presetId, patternId, motionId, customPalette };
  } catch {
    return DEFAULT_SELECTION;
  }
}

function applyTheme(selection: ThemeSelection, photoUrl: string) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const preset = THEME_PRESETS.find((item) => item.id === selection.presetId) ?? THEME_PRESETS[0]!;
  const palette = selection.customPalette ?? preset.palette;
  root.dataset.ydsTheme = selection.presetId;
  root.dataset.ydsPattern = selection.patternId;
  root.dataset.ydsMotion = selection.motionId;
  root.style.colorScheme = preset.dark ? "dark" : "light";
  root.style.setProperty("--yds-primary", palette.primary);
  root.style.setProperty("--yds-primary-hover", palette.primary);
  root.style.setProperty("--yds-primary-soft", palette.soft);
  root.style.setProperty("--yds-teal", palette.secondary);
  root.style.setProperty("--yds-teal-ink", palette.secondary);
  root.style.setProperty("--yds-teal-soft", palette.soft);
  root.style.setProperty("--yds-bg", palette.surface);
  root.style.setProperty("--yds-surface", palette.surface);
  root.style.setProperty("--yds-surface-muted", palette.soft);
  root.style.setProperty("--yds-text", palette.text);
  root.style.setProperty("--yds-text-muted", palette.text);
  root.style.setProperty("--yds-wallpaper-image", photoUrl ? `url("${photoUrl}")` : "none");
  root.style.setProperty("--yds-wallpaper-overlay", preset.dark ? "rgb(13 13 28 / 68%)" : "rgb(255 255 255 / 72%)");
}

/** Additive theme picker. The host may persist settings/image in the signed-in user's profile. */
export function CustomThemeStudio({ onSaveTheme }: { onSaveTheme?: ThemeSaveHandler }) {
  const id = useId();
  const [selection, setSelection] = useState<ThemeSelection>(readSavedSelection);
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoFile, setPhotoFile] = useState<File | undefined>();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    applyTheme(selection, photoUrl);
  }, [selection, photoUrl]);

  useEffect(() => {
    if (!photoUrl.startsWith("blob:")) return;
    return () => URL.revokeObjectURL(photoUrl);
  }, [photoUrl]);

  function choosePreset(presetId: ThemePresetId) {
    setSelection((current) => ({ ...current, presetId, customPalette: presetId === "photo" ? current.customPalette : null }));
    setError("");
    setStatus(`${THEME_PRESETS.find((preset) => preset.id === presetId)?.label ?? "Tema"} canlı önizlemeye uygulandı.`);
  }

  async function handlePhoto(file?: File) {
    if (!file) return;
    setBusy(true);
    setError("");
    setStatus("Fotoğraf inceleniyor ve yaklaşık renk paleti çıkarılıyor…");
    try {
      const palette = await extractImageThemePalette(file);
      const nextUrl = URL.createObjectURL(file);
      setPhotoUrl(nextUrl);
      setPhotoFile(file);
      setSelection((current) => ({ ...current, presetId: "photo", customPalette: palette }));
      setStatus("Fotoğrafa uygun yaklaşık renk paleti hazır. Kaydetmeden önce önizlemeyi kontrol edebilirsin.");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Fotoğraf işlenemedi.");
      setStatus("");
    } finally {
      setBusy(false);
    }
  }

  async function save() {
    setBusy(true);
    setError("");
    setStatus("");
    try {
      if (onSaveTheme) {
        await onSaveTheme(selection, photoFile);
      } else if (typeof localStorage !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
      }
      setStatus(photoFile && !onSaveTheme
        ? "Tema ve renk paleti bu tarayıcıya kaydedildi. Fotoğraf dosyasını hesaplar arasında saklamak için host uygulamada güvenli görsel depolaması bağlanmalı."
        : "Tema tercihi kaydedildi.");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Tema kaydedilemedi.");
    } finally {
      setBusy(false);
    }
  }

  const activePreset = THEME_PRESETS.find((preset) => preset.id === selection.presetId) ?? THEME_PRESETS[0]!;
  const activePalette = selection.customPalette ?? activePreset.palette;

  return (
    <section className="yds-card yds-panel yds-theme-studio" aria-labelledby={`${id}-heading`} aria-busy={busy}>
      <div className="yds-panel-heading">
        <div>
          <p className="yds-eyebrow">Görünümünü kişiselleştir</p>
          <h2 id={`${id}-heading`}>Tema atölyesi</h2>
          <p className="yds-subtitle">Düzen aynı kalır; renkler, yüzey deseni ve arka plan hareketi değişir.</p>
        </div>
        <span className="yds-theme-preview-emoji" aria-hidden="true">{activePreset.emoji}</span>
      </div>

      <fieldset className="yds-theme-choice-group">
        <legend>Renk teması</legend>
        <div className="yds-theme-presets">
          {THEME_PRESETS.map((preset) => (
            <button
              key={preset.id}
              className="yds-theme-preset"
              type="button"
              aria-pressed={selection.presetId === preset.id}
              onClick={() => choosePreset(preset.id)}
            >
              <span className="yds-theme-swatch" style={{ background: `linear-gradient(135deg, ${preset.palette.primary} 0 40%, ${preset.palette.secondary} 40% 70%, ${preset.palette.surface} 70%)` }} aria-hidden="true" />
              <span><strong>{preset.emoji} {preset.label}</strong><small>{preset.description}</small></span>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="yds-theme-options">
        <label htmlFor={`${id}-pattern`}>Arka plan deseni
          <select id={`${id}-pattern`} value={selection.patternId} onChange={(event) => setSelection((current) => ({ ...current, patternId: event.target.value as ThemePatternId }))}>
            <option value="none">Düz renk</option><option value="dots">Noktalar</option><option value="grid">İnce kareler</option><option value="stars">Yıldızlar / emoji</option><option value="waves">Dalgalar</option>
          </select>
        </label>
        <label htmlFor={`${id}-motion`}>Arka plan animasyonu
          <select id={`${id}-motion`} value={selection.motionId} onChange={(event) => setSelection((current) => ({ ...current, motionId: event.target.value as ThemeMotionId }))}>
            <option value="none">Kapalı · pil dostu</option><option value="aurora">Yavaş aurora</option><option value="float">Yumuşak yüzen şekiller</option>
          </select>
        </label>
      </div>
      <p className="yds-exam-footnote">Cihazında “hareketi azalt” açıksa hareketli efektler otomatik olarak durur. Bunlar yalnızca uygulamanın içindeki arka plan efektleridir; telefonun sistem duvar kâğıdını değiştirmez.</p>

      <div className="yds-theme-photo-row">
        <label className="yds-button yds-button-secondary" htmlFor={`${id}-photo`}>🖼️ Fotoğraf seç ve renkleri çıkar</label>
        <input id={`${id}-photo`} className="yds-visually-hidden" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => void handlePhoto(event.target.files?.[0])} disabled={busy} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {photoUrl && <img className="yds-theme-photo-thumb" src={photoUrl} alt="Tema için seçtiğin fotoğrafın yerel önizlemesi" loading="lazy" decoding="async" />}
      </div>

      <div className="yds-theme-live-preview" aria-label="Tema renk önizlemesi">
        <div><span>Örnek kart</span><strong>Study a little, grow every day.</strong><small>Fotoğraftan çıkarılan renkler yaklaşık seçimdir.</small></div>
        <div className="yds-theme-preview-chips"><i style={{ background: activePalette.primary }} /><i style={{ background: activePalette.secondary }} /><i style={{ background: activePalette.soft }} /></div>
      </div>

      <button className="yds-button" type="button" onClick={() => void save()} disabled={busy}>
        {busy ? "Kaydediliyor…" : "Temayı hesabıma kaydet"}
      </button>
      {error && <p className="yds-exam-error" role="alert">{error}</p>}
      {status && <p className="yds-exam-status" role="status" aria-live="polite">{status}</p>}
    </section>
  );
}

export default CustomThemeStudio;
