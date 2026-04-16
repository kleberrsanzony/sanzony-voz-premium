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
  metadataBase: new URL("https://www.sanzonyvoz.com.br"),
  title: {
    default: "Sanzony.Voz Elite | Presença e Autoridade",
    template: "%s | Sanzony.Voz Elite"
  },
  description: "Sua marca não precisa de uma voz. Precisa de presença. Elite voiceover e vocal branding de alto impacto.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sanzony.Voz Elite | Presença e Autoridade",
    description: "Locução de alto nível para marcas que buscam exclusividade.",
    url: "https://www.sanzonyvoz.com.br",
    siteName: "Sanzony.Voz Elite",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanzony.Voz Elite | Presença e Autoridade",
    description: "Locução de alto nível para marcas que buscam exclusividade.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
