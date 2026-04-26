"use client";

import React from "react";
import { VoiceTypeItem } from "@/components/sections/VoiceTypeItem";
import { Accordion } from "@/components/ui/accordion";
import { voiceTypes } from "@/data/voice-types";
import { useLanguage } from "@/context/LanguageContext";
import { VoiceJourneyDiagram } from "@/components/illustrations/VoiceJourneyDiagram";

export default function TiposDeLocucaoHub() {
  const { t } = useLanguage();

  const categories = [
    { key: "institutional", label: t.voice_hub?.categories?.institutional || "Institucionais e Corporativas" },
    { key: "commercial", label: t.voice_hub?.categories?.commercial || "Comerciais e Promocionais" },
    { key: "digital", label: t.voice_hub?.categories?.digital || "Conteúdo Digital e Streaming" },
    { key: "education", label: t.voice_hub?.categories?.education || "Educação, Informação e Jornalismo" },
    { key: "creative", label: t.voice_hub?.categories?.creative || "Criativas e Experienciais" },
    { key: "relationship", label: t.voice_hub?.categories?.relationship || "Relacionamento e Engajamento" },
  ];

  // Mapping of category labels in data to keys
  const categoryMap: { [key: string]: string } = {
    "Institucionais e Corporativas": "institutional",
    "Comerciais e Promocionais": "commercial",
    "Conteúdo Digital e Streaming": "digital",
    "Educação, Informação e Jornalismo": "education",
    "Criativas e Experienciais": "creative",
    "Relacionamento e Engajamento": "relationship"
  };

  const hubStrings = t.voice_hub || {
    hero: {
      label: "Catálogo Estratégico",
      title: "30 Tipos de",
      title_accent: "Locução Profissional",
      subtitle: "Cada projeto exige um tom, um ritmo e uma intenção específica. Explore nosso hub de serviços e descubra como a voz certa transforma percepção em autoridade."
    },
    sections: {
      estilo: "estilo",
      estilos: "estilos",
      authority_title: "Autoridade Vocal e Branding",
      authority_desc: "A locução profissional vai além de uma voz bonita; trata-se de branding vocal estratégico.",
      scalability_title: "Escalabilidade de Conteúdo",
      scalability_desc: "Nossa estrutura de 30 tipos de locução cobre desde o digital dinâmico..."
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        <div className="bg-ambient-layer opacity-20" />
        <div className="container-site relative z-10">
          <span className="section-label mb-4 block text-center lg:text-left">
            {hubStrings.hero?.label}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium mb-6 text-center lg:text-left">
            {hubStrings.hero?.title} <span className="text-gold">{hubStrings.hero?.title_accent}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-center lg:text-left">
            {hubStrings.hero?.subtitle}
          </p>
        </div>
      </section>

      {/* Voice Journey Connector */}
      <div className="container-site">
        <VoiceJourneyDiagram />
      </div>

      {/* Categories Section */}
      <section className="pb-32">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16">
            {categories.map((cat) => {
              // We filter based on the Portuguese label used in the data file
              const filteredTypes = voiceTypes.filter((type) => categoryMap[type.category] === cat.key);
              
              if (filteredTypes.length === 0) return null;

              return (
                <div key={cat.key} className="space-y-8">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                    <h2 className="text-2xl md:text-3xl font-display font-medium text-white/90">
                      {cat.label}
                    </h2>
                    <span className="text-xs font-mono text-gold/60 bg-gold/5 px-2 py-1 rounded">
                      {filteredTypes.length} {filteredTypes.length === 1 ? hubStrings.sections?.estilo : hubStrings.sections?.estilos}
                    </span>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {filteredTypes.map((type) => (
                      <VoiceTypeItem key={type.id} item={type} />
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
          
          {/* SEO Footnote / Expanding Content Area */}
          <div className="mt-32 pt-16 border-t border-border-subtle">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="space-y-4">
                <h3 className="text-lg font-display text-gold">{hubStrings.sections?.authority_title}</h3>
                <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: hubStrings.sections?.authority_desc }} />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-display text-gold">{hubStrings.sections?.scalability_title}</h3>
                <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: hubStrings.sections?.scalability_desc }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
