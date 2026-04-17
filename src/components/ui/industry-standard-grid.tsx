"use client";

import React from "react";
import { cn } from "@/lib/utils";

const BRANDS = [
  "Neumann", "Focusrite Scarlett", "Havit", "Sennheiser", "Apple", "Logic Pro",
  "Novation", "Universal Audio (UADx)", "Mastering The Mix", "SLATE DIGITAL",
  "PSPAUDIOWARE", "FABFILTER", "PLUGIN ALLIANCE", "CYTOMIC", "IZOTOPE",
  "DADA LIFE", "NATIVE INSTRUMENTS", "SUPERTONE", "TONE EMPIRE", "TOWNSEND LABS",
  "UVI", "WAVES FACTORY", "ANTARES", "ACUSTICA AUDIO", "CHRIS LIEPE",
  "CRADLE", "IK MULTIMEDIA", "AVALON", "KAZROG", "NURO AUDIO",
  "SONIBLE", "MXL", "AUDIO PUNKS", "BABY AUDIO", "ANALOG OBSESSION",
  "Studio Elite"
];

export function IndustryStandardGrid() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 md:gap-3 w-full h-full p-2 md:p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5">
      {BRANDS.map((brand, i) => {
        // Alternating colors like the reference image (blue/orange glows)
        const isOrange = i % 7 === 0 || i % 5 === 2;

        return (
          <div 
            key={i}
            className={cn(
              "relative aspect-square flex flex-col items-center justify-center p-2 rounded-lg bg-[#080808] border border-white/5 transition-all duration-500 group cursor-default",
              isOrange 
                ? "hover:shadow-[0_0_15px_rgba(224,194,122,0.1),inset_0_0_20px_rgba(224,194,122,0.05)] hover:border-[#e0c27a]/20" 
                : "hover:shadow-[0_0_15px_rgba(59,130,246,0.1),inset_0_0_20px_rgba(59,130,246,0.05)] hover:border-blue-500/20"
            )}
          >
            {/* Subtle Inner Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Brand Text */}
            <span className={cn(
               "text-[0.55rem] md:text-[0.65rem] font-display font-bold uppercase tracking-tighter text-center leading-tight transition-colors duration-300",
               isOrange ? "group-hover:text-[#e0c27a]" : "group-hover:text-blue-400",
               "text-white/40 group-hover:text-white/90"
            )}>
              {brand}
            </span>

            {/* Micro Decorative Element */}
            <div className={cn(
              "absolute bottom-1 right-1 w-1 h-1 rounded-full opacity-20",
              isOrange ? "bg-[#e0c27a]" : "bg-blue-500"
            )} />
          </div>
        );
      })}
    </div>
  );
}
