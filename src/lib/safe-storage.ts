// Safe localStorage wrapper for SSR, privacy mode, and error resilience
export const safeStorage = {
  get(key: string): string | null {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        return window.localStorage.getItem(key);
      }
      return null;
    } catch {
      return null;
    }
  },

  set(key: string, value: string): void {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch (e) {
      console.warn(`safeStorage.set error for key "${key}":`, e);
    }
  },

  remove(key: string): void {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch (e) {
      console.warn(`safeStorage.remove error for key "${key}":`, e);
    }
  },

  getJSON<T>(key: string, fallback: T): T {
    try {
      const raw = this.get(key);
      if (!raw) return fallback;
      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  },

  setJSON<T>(key: string, value: T): void {
    try {
      this.set(key, JSON.stringify(value));
    } catch (e) {
      console.warn(`safeStorage.setJSON error for key "${key}":`, e);
    }
  },
};
