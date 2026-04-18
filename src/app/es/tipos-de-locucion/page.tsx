import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import TiposDeLocucaoHub from "@/components/sections/TiposDeLocucaoHub";
import { Suspense } from "react";
import SetLanguage from "@/components/i18n/SetLanguage";

export const metadata: Metadata = {
  title: "30 Tipos de Locución Profesional | Sanzony.Voz - Catálogo de Élite",
  description: "Explore nuestro catálogo exclusivo con 30 tipos de locución profesional. De comercial e institucional a contenido digital, encuentre la voz ideal para elevar su marca.",
  alternates: {
    canonical: "https://www.sanzonyvoz.com.br/es/tipos-de-locucion",
    languages: {
      "pt-BR": "https://www.sanzonyvoz.com.br/tipos-de-locucao",
      "en-US": "https://www.sanzonyvoz.com.br/en/voice-over-types",
      "es-ES": "https://www.sanzonyvoz.com.br/es/tipos-de-locucion",
    },
  },
  openGraph: {
    title: "30 Tipos de Locución Profesional | Sanzony.Voz",
    description: "Catálogo estratégico de servicios vocales para marcas que buscan autoridad y presencia.",
    url: "https://www.sanzonyvoz.com.br/es/tipos-de-locucion",
    siteName: "Sanzony Voz",
    locale: "es_ES",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function SpanishVoiceOverTypesPage() {
  return (
    <main className="min-h-screen bg-black">
      <SetLanguage lang="es" />
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <TiposDeLocucaoHub />
      </Suspense>
      <Footer />
    </main>
  );
}
