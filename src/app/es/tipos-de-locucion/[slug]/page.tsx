import { voiceTypes } from "@/data/voice-types";
import VoiceTypeDetail from "@/components/sections/VoiceTypeDetail";
import { notFound } from "next/navigation";
import SetLanguage from "@/components/i18n/SetLanguage";
import { Metadata } from "next";
import esTranslations from "@/locales/es.json";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return voiceTypes.map((type) => ({
    slug: type.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = voiceTypes.find((t) => t.id === slug);
  const trans = (esTranslations.voice_hub.items as any)[slug];

  if (!item) return {};

  const title = `${trans?.title || item.title} | Sanzony.Voz - Locución Elite`;
  const description = trans?.shortDescription || item.shortDescription;
  const url = `https://www.sanzonyvoz.com.br/es/tipos-de-locucion/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": `https://www.sanzonyvoz.com.br/tipos-de-locucao/${slug}`,
        "en-US": `https://www.sanzonyvoz.com.br/en/voice-over-types/${slug}`,
        "es-ES": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Sanzony Voz",
      locale: "es_ES",
      type: "article",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function SpanishVoiceTypePage({ params }: PageProps) {
  const { slug } = await params;
  const item = voiceTypes.find((t) => t.id === slug);
  const trans = (esTranslations.voice_hub.items as any)[slug];

  if (!item) {
    notFound();
  }

  // Related Items Logic: Same category, excluding current
  const relatedItems = voiceTypes
    .filter((t) => t.category === item.category && t.id !== slug)
    .slice(0, 3)
    .map((rel) => {
      const relTrans = (esTranslations.voice_hub.items as any)[rel.id];
      return {
        id: rel.id,
        title: relTrans?.title || rel.title,
        shortDescription: relTrans?.shortDescription || rel.shortDescription,
      };
    });

  const translations = {
    backToHub: "Volver al Catálogo",
    whyInvest: "Por qué invertir",
    benefits: "Beneficios Estratégicos",
    objection: "Manejo de Objeciones",
    requestQuote: "Solicitar Presupuesto",
    backHome: "Inicio",
    relatedTitle: esTranslations.voice_hub.sections.related_title,
    exploreMore: esTranslations.voice_hub.sections.explore_more
  };

  const localizedItem = {
    ...item,
    title: trans?.title || item.title,
    shortDescription: trans?.shortDescription || item.shortDescription,
    benefits: trans?.benefits || item.benefits,
    whyInvest: trans?.whyInvest || item.whyInvest,
    objectionBreak: trans?.objectionBreak || item.objectionBreak,
    ctaText: trans?.ctaText || item.ctaText,
  };

  return (
    <>
      <SetLanguage lang="es" />
      <VoiceTypeDetail 
        item={localizedItem} 
        relatedItems={relatedItems} 
        translations={translations} 
      />
    </>
  );
}
