"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import {
  CUSTOM_AVATAR_OPTIONS,
  CustomAvatarConfig,
  DEFAULT_CUSTOM_AVATAR,
  customAvatarDataUrl,
  normalizeCustomAvatarConfig,
} from "@/lib/custom-avatar";

const CONFIG_STORAGE_KEY = "dil-master-custom-avatar-config-v1";

const CONTROL_FIELDS: {
  key: keyof CustomAvatarConfig;
  label: string;
  options: readonly { id: string; label: string }[];
}[] = [
  { key: "skin", label: "Ten tonu", options: CUSTOM_AVATAR_OPTIONS.skin },
  { key: "face", label: "Yüz biçimi", options: CUSTOM_AVATAR_OPTIONS.face },
  { key: "hair", label: "Saç biçimi", options: CUSTOM_AVATAR_OPTIONS.hair },
  { key: "hairColor", label: "Saç rengi", options: CUSTOM_AVATAR_OPTIONS.hairColor },
  { key: "eyes", label: "Göz rengi", options: CUSTOM_AVATAR_OPTIONS.eyes },
  { key: "expression", label: "Yüz ifadesi", options: CUSTOM_AVATAR_OPTIONS.expression },
  { key: "headwear", label: "Baş aksesuarı", options: CUSTOM_AVATAR_OPTIONS.headwear },
  { key: "outfit", label: "Kıyafet biçimi", options: CUSTOM_AVATAR_OPTIONS.outfit },
  { key: "outfitColor", label: "Kıyafet rengi", options: CUSTOM_AVATAR_OPTIONS.outfitColor },
  { key: "accessory", label: "Gözlük ve takı", options: CUSTOM_AVATAR_OPTIONS.accessory },
  { key: "background", label: "Arka plan", options: CUSTOM_AVATAR_OPTIONS.background },
];

function randomOption<T extends readonly { id: string }[]>(options: T): T[number]["id"] {
  const index = Math.floor(Math.random() * options.length);
  return options[index]?.id ?? options[0].id;
}

function randomAvatarConfig(): CustomAvatarConfig {
  return {
    skin: randomOption(CUSTOM_AVATAR_OPTIONS.skin),
    face: randomOption(CUSTOM_AVATAR_OPTIONS.face),
    hair: randomOption(CUSTOM_AVATAR_OPTIONS.hair),
    hairColor: randomOption(CUSTOM_AVATAR_OPTIONS.hairColor),
    eyes: randomOption(CUSTOM_AVATAR_OPTIONS.eyes),
    expression: randomOption(CUSTOM_AVATAR_OPTIONS.expression),
    headwear: randomOption(CUSTOM_AVATAR_OPTIONS.headwear),
    outfit: randomOption(CUSTOM_AVATAR_OPTIONS.outfit),
    outfitColor: randomOption(CUSTOM_AVATAR_OPTIONS.outfitColor),
    accessory: randomOption(CUSTOM_AVATAR_OPTIONS.accessory),
    background: randomOption(CUSTOM_AVATAR_OPTIONS.background),
  };
}

export default function AvatarCreator({
  onSave,
}: {
  onSave: (dataUrl: string) => void;
}) {
  const [config, setConfig] = useState<CustomAvatarConfig>(DEFAULT_CUSTOM_AVATAR);
  const [message, setMessage] = useState("");
  const preview = useMemo(() => customAvatarDataUrl(config), [config]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CONFIG_STORAGE_KEY);
      if (saved) setConfig(normalizeCustomAvatarConfig(JSON.parse(saved) as unknown));
    } catch {
      setConfig(DEFAULT_CUSTOM_AVATAR);
    }
  }, []);

  const chooseOption = (key: keyof CustomAvatarConfig, value: string) => {
    setConfig((current) => normalizeCustomAvatarConfig({ ...current, [key]: value }));
    setMessage("");
  };

  const saveAvatar = () => {
    try {
      window.localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
      onSave(preview);
      setMessage("Avatarın kaydedildi ve profilinde kullanılmaya başladı.");
      toast.success("Karakter tasarımın kaydedildi. Artık profilinde!", { duration: 2100, id: "avatar-feedback" });
    } catch {
      setMessage("Avatar kaydedilemedi. Depolama alanı dolu olabilir; seçimin önizlemede duruyor.");
    }
  };

  return (
    <section
      className="card-vibrant rounded-3xl p-5 sm:p-7"
      aria-labelledby="avatar-creator-heading"
      data-testid="avatar-creator"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
        <div>
          <span className="inline-flex rounded-full bg-fuchsia-500/15 px-3 py-1 text-xs font-bold text-fuchsia-700 dark:text-fuchsia-200">
            Kendin tasarla · Kaydetmeden önce canlı önizleme
          </span>
          <h2 id="avatar-creator-heading" className="mt-3 text-2xl font-black text-slate-900 dark:text-white">
            Sana benzeyen avatarı oluştur
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Görünüm seçeneklerini özgürce birleştir. Başörtüsü, saç, kıyafet ve aksesuarlar isteğe bağlıdır;
            seçimler kimliğin hakkında herhangi bir varsayım yapmaz.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {CONTROL_FIELDS.map((field) => (
              <label key={field.key} className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                {field.label}
                <select
                  value={config[field.key]}
                  onChange={(event) => chooseOption(field.key, event.target.value)}
                  className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 dark:border-white/15 dark:bg-slate-900 dark:text-white"
                  aria-label={field.label}
                >
                  {field.options.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                setConfig(randomAvatarConfig());
                setMessage("");
              }}
              className="min-h-11 rounded-xl border border-fuchsia-300 bg-fuchsia-50 px-4 py-2 font-bold text-fuchsia-800 hover:bg-fuchsia-100 dark:border-fuchsia-400/40 dark:bg-fuchsia-500/10 dark:text-fuchsia-100"
            >
              Rastgele kombinasyon
            </button>
            <button
              type="button"
              onClick={() => {
                setConfig(DEFAULT_CUSTOM_AVATAR);
                setMessage("");
              }}
              className="min-h-11 rounded-xl border border-slate-300 px-4 py-2 font-bold text-slate-700 hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
            >
              Varsayılana dön
            </button>
            <button
              type="button"
              onClick={saveAvatar}
              className="min-h-11 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-5 py-2 font-black text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-105"
            >
              Avatarımı kaydet
            </button>
          </div>
          <p className="mt-3 min-h-6 text-sm font-semibold text-emerald-700 dark:text-emerald-300" aria-live="polite">
            {message}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 dark:border-white/10 dark:from-slate-900 dark:to-slate-950">
          <Image
            src={preview}
            alt="Seçimlerine göre oluşturulan avatar önizlemesi"
            width={240}
            height={240}
            unoptimized
            className="h-56 w-56 max-w-full rounded-3xl shadow-xl"
            data-testid="avatar-creator-preview"
          />
          <p className="mt-3 text-center text-xs font-semibold text-slate-600 dark:text-slate-300">
            Seçimlerin anında görünür. Kaydettiğinde profil avatarın güncellenir.
          </p>
          <p className="mt-2 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-200">
            11 özelleştirilebilir kategori
          </p>
        </div>
      </div>
    </section>
  );
}
