# DİL MASTER — Mobile App & PWA Release Guide (`MOBILE_RELEASE.md`)

**Package Identifier:** `com.dilmaster.app`  
**Canonical Web Origin:** `https://dil-master.vercel.app`  
**Android Project Path:** `android/`  
**CI Workflow:** `.github/workflows/android-release.yml`

---

## 1. Progressive Web App (PWA) Installation

DİL MASTER is a full installable PWA on Android, iOS, macOS, and Windows:
- **Manifest:** `public/manifest.json` (`display: "standalone"`, `start_url: "/"`, `lang: "tr"`)
- **Service Worker:** `public/sw.js` (`SW_VERSION = 'dil-master-offline-v2026.10.20'`)
  - Caches public app shell assets (`/`, `/manifest.json`, `/icons/icon-192.png`, `/icons/icon-512.png`, `/_next/static/*`).
  - Never caches `/api/*`, `/auth/*`, or session endpoints.
  - Returns a styled HTML offline fallback page (`Content-Type: text/html; charset=utf-8`) for offline navigation requests when `/` is not cached.

---

## 2. Native Android Wrapper (`android/`)

The repository includes a native Android WebView wrapper in `android/` configured for `https://dil-master.vercel.app`:

### Key Files
- `android/build.gradle` & `android/settings.gradle`
- `android/app/build.gradle` (`namespace "com.dilmaster.app"`, `compileSdk 34`, `minSdk 24`, `targetSdk 34`)
- `android/app/src/main/AndroidManifest.xml`
- `android/app/src/main/java/com/dilmaster/app/MainActivity.java`

### Building the Debug APK Locally
Requires JDK 17 and Android SDK Platform 34:

```bash
cd android
chmod +x gradlew
./gradlew assembleDebug
```

Output APK path:
```text
android/app/build/outputs/apk/debug/app-debug.apk
```

### Automated GitHub Actions APK Build
The workflow `.github/workflows/android-release.yml` builds the Android APK automatically in CI on pushes or manual `workflow_dispatch`:
1. Sets up Java 17 (`temurin`) and Android SDK.
2. Runs `./gradlew assembleDebug` inside `android/`.
3. Uploads `dil-master-android-debug-apk` as a downloadable GitHub Actions artifact.

### Signing a Production Release APK / AAB
To sign a release build for Google Play Store:
1. Generate a keystore:
   ```bash
   keytool -genkey -v -keystore dil-master-release.jks -keyalg RSA -keysize 2048 -validity 10000 -alias dilmaster
   ```
2. Provide `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, and `ANDROID_KEY_PASSWORD` in GitHub Repository Secrets.
3. Run `./gradlew bundleRelease` or `./gradlew assembleRelease`.
