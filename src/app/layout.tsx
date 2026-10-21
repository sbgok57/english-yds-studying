import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import AiWidget from "@/components/AiWidget";
import { BadgeQueueProvider } from "@/components/gamification/BadgeQueueProvider";
import { CrashGuardianProvider } from "@/components/CrashGuardianProvider";
import RecoveryBanner from "@/components/RecoveryBanner";
import ErrorToast from "@/components/ErrorToast";
import CaptureBootstrap from "@/components/CaptureBootstrap";
import DebugPanel from "@/components/DebugPanel";
import PwaInstaller from "@/components/pwa/PwaInstaller";
import ThemeInitializer from "@/components/theme/ThemeInitializer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import DilMasterProSystem from "@/components/DilMasterProSystem";

export const metadata: Metadata = {
  metadataBase: new URL("https://dil-master.vercel.app"),
  title: "DİL MASTER | YDS · YDT · YÖKDİL Akademik Hazırlık Platformu",
  description:
    "ÖSYM standartlarında YDS, YDT ve YÖKDİL kelime, gramer, okuma, dinleme ve deneme merkezi. Görsel hafıza, kodlama taktikleri ve animasyonlu gramer ile hazırlanın.",
  alternates: {
    canonical: "https://dil-master.vercel.app",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DİL MASTER",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#07152d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('yds_theme_mode') || (localStorage.getItem('yds_theme') === 'light' ? 'light' : 'dark');
                  if (mode === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {
                  void e;
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <CrashGuardianProvider>
          <BadgeQueueProvider>
            <ThemeProvider>
              <ThemeInitializer />
              <Header />
              <main className="min-h-[calc(100vh-3.5rem)] pb-6 transition-all duration-300">{children}</main>
              <AiWidget />
              <RecoveryBanner />
              <ErrorToast />
              <CaptureBootstrap />
              <DebugPanel />
              <PwaInstaller />
            </ThemeProvider>
          </BadgeQueueProvider>
        </CrashGuardianProvider>
        <footer className="border-t border-white/10 py-8 mt-12 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
            <p className="text-sm text-white/50">
              🧠 DİL MASTER (YDS · YDT · YÖKDİL) — Görsel hafıza, kodlama taktikleri ve animasyonlu gramer ile hazırlanın.
            </p>
            <p className="text-xs text-white/30 font-mono">
              Kanka, bugün çalıştığın her kelime, yarınki netinin teminatıdır. ✨
            </p>
          </div>
        </footer>
        <DilMasterProSystem />
      </body>
    </html>
  );
}
