import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YDS Master — A1/A2'den YDS'ye Görsel Hafıza Odaklı Hazırlık Platformu",
  description: "3D flashcards, 180 dakikalık gerçek online optik form, 10 sesli multi-accent TTS ve 15 gramer konusuyla YDS'yi fethedin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <Toaster position="top-right" richColors theme="dark" />
      </body>
    </html>
  );
}
