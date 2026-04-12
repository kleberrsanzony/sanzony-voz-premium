import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanzony.Voz | Presença e Autoridade",
  description: "Sua marca não precisa de uma voz. Precisa de presença. Premium voiceover e vocal branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-black text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
