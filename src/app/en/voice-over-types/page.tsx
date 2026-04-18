import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import TiposDeLocucaoHub from "@/components/sections/TiposDeLocucaoHub";
import { Suspense } from "react";
import SetLanguage from "@/components/i18n/SetLanguage";

export const metadata: Metadata = {
  title: "30 Types of Professional Voice Over | Sanzony.Voz - Elite Catalog",
  description: "Explore our exclusive catalog with 30 types of professional voice over. From commercial and institutional to digital content, find the ideal voice to elevate your brand.",
  alternates: {
    canonical: "https://www.sanzonyvoz.com.br/en/voice-over-types",
    languages: {
      "pt-BR": "https://www.sanzonyvoz.com.br/tipos-de-locucao",
      "en-US": "https://www.sanzonyvoz.com.br/en/voice-over-types",
      "es-ES": "https://www.sanzonyvoz.com.br/es/tipos-de-locucion",
    },
  },
  openGraph: {
    title: "30 Types of Professional Voice Over | Sanzony.Voz",
    description: "Strategic catalog of vocal services for brands seeking authority and presence.",
    url: "https://www.sanzonyvoz.com.br/en/voice-over-types",
    siteName: "Sanzony Voz",
    locale: "en_US",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function EnglishVoiceOverTypesPage() {
  return (
    <main className="min-h-screen bg-black">
      <SetLanguage lang="en" />
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <TiposDeLocucaoHub />
      </Suspense>
      <Footer />
    </main>
  );
}
