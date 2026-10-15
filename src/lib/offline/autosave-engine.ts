"use client";

/**
 * DİL MASTER — Her Eylemde Otomatik Kaydetme ve Çevrimdışı Outbox Motoru (Autosave Engine)
 * P0 Reliability & Anti-Crash Standartları
 * 
 * - IndexedDB Transaction tabanlı anında atomik yerel kayıt
 * - Opaque scope tabanlı kullanıcı izolasyonu (Hesaplar arası sıfır sızıntı)
 * - 409 Çakışma Koruması: Ağ isteği sürerken gelen yeni yerel kayıt asla ezilmez
 * - Idempotent Outbox: Ağ geri geldiğinde güvenli ve tekrarsız senkronizasyon
 * - PII & Gizlilik Zırhı: Serbest metin, kişisel not ve parolalar asla sunucuya gitmez
 */

export interface AutosaveSnapshot {
  id: string;              // Benzersiz snapshot kimliği
  scopeId: string;         // Opaque kullanıcı kapsamı
  gameId: string;          // Oyun veya ders kimliği
  stepIndex: number;       // Kaldığı adım
  score: number;           // Kazanılan puan
  streak: number;          // Seri
  isCorrect: boolean | null;
  userAnswerSummary: string; // Yalnızca izinli özet (örn: "Option A", "Match Pair 1") - Serbest metin YOK
  hasConfirmed: boolean;   // "Tamam, anladım" onayı verildi mi?
  completed: boolean;      // Oyun bitti mi?
  version: number;         // Çakışma önleyici versiyon sayacı
  timestamp: number;       // Oluşturulma anı
}

export interface OutboxItem {
  id: string;
  scopeId: string;
  snapshot: AutosaveSnapshot;
  retryCount: number;
  lastAttempt: number;
}

const IDB_NAME = "dilmaster_autosave_v2";
const STORE_SNAPSHOTS = "snapshots";
const STORE_OUTBOX = "outbox";

// Bellek-içi önbellek (Fallback & Senkron okuma)
const MEMORY_SNAPSHOTS = new Map<string, AutosaveSnapshot>();
const MEMORY_OUTBOX = new Map<string, OutboxItem>();

// Opaque Scope Çözümleyici: Ham e-posta veya parola asla key yapılmaz
export function getOpaqueScopeId(): string {
  if (typeof window === "undefined") return "scope_ssr";
  try {
    const raw =
      window.localStorage.getItem("yds-master-session") ||
      window.localStorage.getItem("yds_username") ||
      "guest_anonymous";
    // Basit ve deterministik opaque hash
    let hash = 0;
    for (let i = 0; i < raw.length; i++) {
      hash = (hash << 5) - hash + raw.charCodeAt(i);
      hash |= 0;
    }
    return `scope_${Math.abs(hash).toString(36)}`;
  } catch {
    return "scope_guest_safe";
  }
}

// IndexedDB Bağlantı Yardımcısı
function openDB(): Promise<IDBDatabase | null> {
  if (typeof window === "undefined" || !("indexedDB" in window)) {
    return Promise.resolve(null);
  }

  return new Promise((resolve) => {
    try {
      const req = window.indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE_SNAPSHOTS)) {
          db.createObjectStore(STORE_SNAPSHOTS, { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains(STORE_OUTBOX)) {
          db.createObjectStore(STORE_OUTBOX, { keyPath: "id" });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

/**
 * 1. Her Eylemde Atomik Yerel Kayıt
 * Discrete eylemi gecikmesiz olarak IndexedDB transaction'ı ile yazar.
 */
export async function saveGameAction(
  gameId: string,
  data: {
    stepIndex: number;
    score: number;
    streak?: number;
    isCorrect?: boolean | null;
    userAnswerSummary?: string;
    hasConfirmed?: boolean;
    completed?: boolean;
  }
): Promise<AutosaveSnapshot> {
  const scopeId = getOpaqueScopeId();
  const compositeKey = `${scopeId}::${gameId}`;

  const prev = MEMORY_SNAPSHOTS.get(compositeKey);
  const version = (prev?.version || 0) + 1;

  const snapshot: AutosaveSnapshot = {
    id: compositeKey,
    scopeId,
    gameId,
    stepIndex: data.stepIndex,
    score: data.score,
    streak: data.streak ?? 0,
    isCorrect: data.isCorrect ?? null,
    userAnswerSummary: (data.userAnswerSummary || "").slice(0, 100), // PII Koruması: allowlist limit
    hasConfirmed: data.hasConfirmed ?? false,
    completed: data.completed ?? false,
    version,
    timestamp: Date.now(),
  };

  // Belleğe senkron yaz
  MEMORY_SNAPSHOTS.set(compositeKey, snapshot);

  // IndexedDB transaction ile kalıcı yaz
  try {
    const db = await openDB();
    if (db) {
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction([STORE_SNAPSHOTS, STORE_OUTBOX], "readwrite");
        const snapStore = tx.objectStore(STORE_SNAPSHOTS);
        const outStore = tx.objectStore(STORE_OUTBOX);

        snapStore.put(snapshot);

        // Tamamlanma veya önemli puan durumunda outbox'a da ekle
        if (snapshot.completed || snapshot.score > 0) {
          const outboxItem: OutboxItem = {
            id: `outbox_${compositeKey}_v${version}`,
            scopeId,
            snapshot,
            retryCount: 0,
            lastAttempt: 0,
          };
          outStore.put(outboxItem);
          MEMORY_OUTBOX.set(outboxItem.id, outboxItem);
        }

        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(new Error("Transaction aborted"));
      });
    }
  } catch (err) {
    console.warn("[AUTOSAVE_IDB_WARN] IndexedDB write fallback to memory:", err);
  }

  // İnternet varsa arka planda senkronizasyonu tetikle
  if (typeof navigator !== "undefined" && navigator.onLine) {
    void triggerOutboxSync();
  }

  return snapshot;
}

/**
 * 2. Kaldığı Yerden Devam Etme (Resume Game State)
 */
export async function loadGameAction(gameId: string): Promise<AutosaveSnapshot | null> {
  const scopeId = getOpaqueScopeId();
  const compositeKey = `${scopeId}::${gameId}`;

  // Önce bellekten hızlı yanıt
  if (MEMORY_SNAPSHOTS.has(compositeKey)) {
    return MEMORY_SNAPSHOTS.get(compositeKey)!;
  }

  // IndexedDB'den yükle
  try {
    const db = await openDB();
    if (db) {
      const snap = await new Promise<AutosaveSnapshot | null>((resolve) => {
        const tx = db.transaction(STORE_SNAPSHOTS, "readonly");
        const store = tx.objectStore(STORE_SNAPSHOTS);
        const req = store.get(compositeKey);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });

      if (snap) {
        MEMORY_SNAPSHOTS.set(compositeKey, snap);
        return snap;
      }
    }
  } catch {
    // safe fallback
  }

  return null;
}

/**
 * 3. Idempotent Outbox Senkronizasyonu & 409 Çakışma Koruması
 */
let isSyncing = false;

export async function triggerOutboxSync(): Promise<{ synced: number; failed: number }> {
  if (typeof window === "undefined" || !navigator.onLine || isSyncing) {
    return { synced: 0, failed: 0 };
  }

  isSyncing = true;
  let synced = 0;
  let failed = 0;

  try {
    const db = await openDB();
    if (!db) return { synced: 0, failed: 0 };

    const items = await new Promise<OutboxItem[]>((resolve) => {
      const tx = db.transaction(STORE_OUTBOX, "readonly");
      const store = tx.objectStore(STORE_OUTBOX);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });

    const activeScope = getOpaqueScopeId();

    for (const item of items) {
      // Başka kullanıcının outbox verisi geçerli oturumla eşitlemez (Hesap izolasyonu)
      if (item.scopeId !== activeScope) continue;

      try {
        const payload = {
          type: "game",
          category: "Genel",
          title: `🎮 Oyun: ${item.snapshot.gameId}`,
          details: `Adım: ${item.snapshot.stepIndex} • ${item.snapshot.score} Puan • Tamamlandı: ${item.snapshot.completed ? "Evet" : "Devam"}`,
          scoreOrCount: `${item.snapshot.score} Puan`,
          points: Math.min(item.snapshot.score, 50),
          timeSpentMinutes: 1,
          metadata: {
            snapshotId: item.snapshot.id,
            version: item.snapshot.version,
            gameId: item.snapshot.gameId,
            completed: item.snapshot.completed,
          },
        };

        const res = await fetch("/api/activity", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          // 409 / Yarış Koşulu Koruması:
          // İstek sürerken kullanıcı yeni bir yerel eylem yapmış olabilir.
          // Silme işlemi yalnızca kaydedilen snapshot versiyonu ile yerel versiyon eşitse yapılır!
          const currentSnap = MEMORY_SNAPSHOTS.get(item.snapshot.id);
          const isStillLatest = !currentSnap || currentSnap.version === item.snapshot.version;

          if (isStillLatest) {
            await new Promise<void>((resDel) => {
              const txDel = db.transaction(STORE_OUTBOX, "readwrite");
              txDel.objectStore(STORE_OUTBOX).delete(item.id);
              txDel.oncomplete = () => resDel();
              txDel.onerror = () => resDel();
            });
            MEMORY_OUTBOX.delete(item.id);
          }
          synced++;
        } else if (res.status === 409) {
          // Çakışma durumunda yerel veriyi koru, zorla ezme
          console.warn("[SYNC_409_CONFLICT] Server conflict detected, local version preserved.");
          failed++;
        } else {
          failed++;
        }
      } catch {
        failed++;
      }
    }
  } finally {
    isSyncing = false;
  }

  return { synced, failed };
}

/**
 * 4. Hesap Değişikliğinde İzolasyon (Oturum Kapatma / Değiştirme)
 */
export function handleAccountSwitch(): void {
  // Bellek içi oturuma bağlı kayıtları temizle
  MEMORY_SNAPSHOTS.clear();
  MEMORY_OUTBOX.clear();
  isSyncing = false;
}

// Tarayıcı çevrimiçi olduğunda otomatik senkronizasyon dinleyicisi
if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    void triggerOutboxSync();
  });
}
