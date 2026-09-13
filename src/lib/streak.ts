// Yerel güne çevir — UTC saat dilimi kayması bug'ını (Türkiye UTC+3) kökten çözer
export function toLocalDay(d: Date | string | number): string {
  const dateObj = d instanceof Date ? d : new Date(d);
  if (isNaN(dateObj.getTime())) return "";
  return dateObj.toLocaleDateString("sv-SE", { timeZone: "Europe/Istanbul" }); // "2026-09-13"
}

/**
 * Gerçek aktivite tarihlerinden kesintisiz streak serisi hesaplar.
 * @param activityDates Öğrencinin aktif olarak çalıştığı tarihlerin listesi
 * @returns Serinin kaç gün olduğu (Aktivite yoksa 0 döner, asla sahte 7 değil!)
 */
export function calcStreak(activityDates: (Date | string | number)[]): number {
  if (!activityDates || activityDates.length === 0) return 0;

  const validDays = new Set<string>();
  for (const item of activityDates) {
    const formatted = toLocalDay(item);
    if (formatted) validDays.add(formatted);
  }

  if (validDays.size === 0) return 0;

  let streak = 0;
  const cursor = new Date();

  // Bugün henüz çalışmadıysa seri kopmamıştır — dünden geriye saymaya başla
  if (!validDays.has(toLocalDay(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }

  while (validDays.has(toLocalDay(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
    if (streak > 3650) break; // sonsuz döngü sigortası
  }

  return streak;
}

// İstemci tarafında da güvenle çalışan aktivite takipçisi (localStorage & çevrimdışı destek)
const ACTIVITY_STORAGE_KEY = "yds_user_activity_dates_v1";

export function recordClientActivity(): void {
  if (typeof window === "undefined") return;
  try {
    const today = toLocalDay(new Date());
    const raw = window.localStorage.getItem(ACTIVITY_STORAGE_KEY);
    const dates: string[] = raw ? JSON.parse(raw) : [];
    if (!dates.includes(today)) {
      dates.push(today);
      window.localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(dates));
    }
  } catch {
    // safe ignore
  }
}

export function getClientStreak(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem(ACTIVITY_STORAGE_KEY);
    if (!raw) return 0;
    const dates: string[] = JSON.parse(raw);
    return calcStreak(dates);
  } catch {
    return 0;
  }
}
