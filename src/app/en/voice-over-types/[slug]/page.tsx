import { voiceTypes } from "@/data/voice-types";
import VoiceTypeDetail from "@/components/sections/VoiceTypeDetail";
import { notFound } from "next/navigation";
import SetLanguage from "@/components/i18n/SetLanguage";
import { Metadata } from "next";
import enTranslations from "@/locales/en.json";

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
  const trans = (enTranslations.voice_hub.items as any)[slug];

  if (!item) return {};

  const title = `${trans?.title || item.title} | Sanzony.Voz - Elite Voiceover`;
  const description = trans?.shortDescription || item.shortDescription;
  const url = `https://www.sanzonyvoz.com.br/en/voice-over-types/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": `https://www.sanzonyvoz.com.br/tipos-de-locucao/${slug}`,
        "en-US": url,
        "es-ES": `https://www.sanzonyvoz.com.br/es/tipos-de-locucion/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Sanzony Voz",
      locale: "en_US",
      type: "article",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function EnglishVoiceTypePage({ params }: PageProps) {
  const { slug } = await params;
  const item = voiceTypes.find((t) => t.id === slug);
  const trans = (enTranslations.voice_hub.items as any)[slug];

  if (!item) {
    notFound();
  }

  // Related Items Logic: Same category, excluding current
  const relatedItems = voiceTypes
    .filter((t) => t.category === item.category && t.id !== slug)
    .slice(0, 3)
    .map((rel) => {
      const relTrans = (enTranslations.voice_hub.items as any)[rel.id];
      return {
        id: rel.id,
        title: relTrans?.title || rel.title,
        shortDescription: relTrans?.shortDescription || rel.shortDescription,
      };
    });

  const translations = {
    backToHub: "Back to Catalog",
    whyInvest: "Why Invest",
    benefits: "Strategic Benefits",
    objection: "Handling Objections",
    requestQuote: "Request a Quote",
    backHome: "Home",
    relatedTitle: enTranslations.voice_hub.sections.related_title,
    exploreMore: enTranslations.voice_hub.sections.explore_more
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
      <SetLanguage lang="en" />
      <VoiceTypeDetail 
        item={localizedItem} 
        relatedItems={relatedItems} 
        translations={translations} 
      />
    </>
  );
}
