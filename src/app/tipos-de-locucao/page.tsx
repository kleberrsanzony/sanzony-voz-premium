import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import TiposDeLocucaoHub from "@/components/sections/TiposDeLocucaoHub";
import { Suspense } from "react";
import SetLanguage from "@/components/i18n/SetLanguage";

export const metadata: Metadata = {
  title: "30 Tipos de Locução Profissional | Sanzony.Voz - Catálogo Elite",
  description: "Explore nosso catálogo exclusivo com 30 tipos de locução profissional. De comercial e institucional a conteúdo digital, encontre a voz ideal para elevar sua marca.",
  alternates: {
    canonical: "https://www.sanzonyvoz.com.br/tipos-de-locucao",
    languages: {
      "pt-BR": "https://www.sanzonyvoz.com.br/tipos-de-locucao",
      "en-US": "https://www.sanzonyvoz.com.br/en/voice-over-types",
      "es-ES": "https://www.sanzonyvoz.com.br/es/tipos-de-locucion",
    },
  },
  openGraph: {
    title: "30 Tipos de Locução Profissional | Sanzony.Voz",
    description: "Catálogo estratégico de serviços vocais para marcas que buscam autoridade e presença.",
    url: "https://www.sanzonyvoz.com.br/tipos-de-locucao",
    siteName: "Sanzony Voz",
    locale: "pt_BR",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function TiposDeLocucaoPage() {
  return (
    <main className="min-h-screen bg-black">
      <SetLanguage lang="pt" />
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <TiposDeLocucaoHub />
      </Suspense>
      <Footer />
    </main>
  );
}
