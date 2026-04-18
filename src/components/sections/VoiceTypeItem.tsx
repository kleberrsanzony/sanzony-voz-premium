"use client";

import React from "react";
import { 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { VoiceType } from "@/data/voice-types";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface VoiceTypeItemProps {
  item: VoiceType;
}

export const VoiceTypeItem: React.FC<VoiceTypeItemProps> = ({ item }) => {
  const { t } = useLanguage();
  
  // Safely get translation, fallback to data strings if translation is missing
  const translatedItem = (t.voice_hub?.items as any)?.[item.id] || item;
  const sectionLabels = t.voice_hub?.sections || {
    why_invest: "Por que investir",
    objection: "Quebra de Objeção",
    benefits: "Benefícios Estratégicos"
  };

  return (
    <AccordionItem 
      value={item.id} 
      className="border-border-subtle hover:border-gold/20 transition-colors bg-card/30 rounded-lg mb-4 overflow-hidden"
    >
      <AccordionTrigger className="px-6 py-5 hover:no-underline text-left group">
        <div className="flex flex-col gap-1 pr-6">
          <h3 className="text-lg md:text-xl font-display font-medium text-foreground group-hover:text-gold transition-colors">
            {translatedItem.title}
          </h3>
          <p className="text-sm text-muted-foreground font-normal line-clamp-1">
            {translatedItem.shortDescription}
          </p>
        </div>
      </AccordionTrigger>
      
      <AccordionContent className="px-6 pb-6 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
          {/* Left Side: Strategic Copy */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-gold mb-2 uppercase tracking-wider">
                {sectionLabels.why_invest}
              </p>
              <p className="text-secondary-foreground leading-relaxed">
                {translatedItem.whyInvest}
              </p>
            </div>
            
            <div className="bg-secondary/50 p-4 rounded-md border border-border-subtle">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                {sectionLabels.objection}
              </p>
              <p className="text-sm italic text-foreground/80">
                "{translatedItem.objectionBreak}"
              </p>
            </div>
          </div>

          {/* Right Side: Benefits & Action */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <p className="text-sm font-medium text-gold mb-3 uppercase tracking-wider">
                {sectionLabels.benefits}
              </p>
              <ul className="space-y-3">
                {(translatedItem.benefits || []).map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-secondary-foreground">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild className="w-full md:w-auto self-end bg-gold hover:bg-gold-light text-black font-semibold group transition-all duration-300">
              <Link href={item.ctaLink} className="flex items-center justify-center gap-2">
                {translatedItem.ctaText || "Solicitar Orçamento"}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
