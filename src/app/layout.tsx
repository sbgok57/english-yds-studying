import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import AmbientBackground from "@/components/AmbientBackground";
import AiWidget from "@/components/AiWidget";
import { BadgeQueueProvider } from "@/components/gamification/BadgeQueueProvider";
import { CrashGuardianProvider } from "@/components/CrashGuardianProvider";
import RecoveryBanner from "@/components/RecoveryBanner";

export const metadata: Metadata = {
  title: "YDS Master — A1/A2'den YDS'ye Görsel Hafıza Odaklı Hazırlık Platformu",
  description:
    "3D flashcards, 180 dakikalık gerçek online optik form, 500 avatar, 15 animasyonlu gramer konusu ve 11 soru tipi taktikleriyle YDS'yi fethedin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body>
        <CrashGuardianProvider>
          <BadgeQueueProvider>
            <AmbientBackground />
            <Header />
            <main className="min-h-[calc(100vh-4rem)]">{children}</main>
            <AiWidget />
            <RecoveryBanner />
          </BadgeQueueProvider>
        </CrashGuardianProvider>
        <footer className="border-t border-white/10 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
            <p className="text-sm text-white/50">
              🧠 YDS Master — Görsel hafıza, kodlama taktikleri ve animasyonlu gramer ile hazırlanın.
            </p>
            <p className="text-xs text-white/30 font-mono">
              Kanka, bugün çalıştığın her kelime, yarınki netinin teminatıdır. ✨
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
