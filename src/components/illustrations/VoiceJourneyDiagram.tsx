"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function VoiceJourneyDiagram() {
  const { language } = useLanguage();

  const labels = {
    pt: { brand: "Marca", connection: "Voz & Intenção", audience: "Receptores / Audiência" },
    en: { brand: "Brand", connection: "Voice & Intent", audience: "Receivers / Audience" },
    es: { brand: "Marca", connection: "Voz e Intención", audience: "Receptores / Audiencia" }
  };
  const t = labels[language as keyof typeof labels] || labels.pt;

  return (
    <div className="relative w-full py-16 hidden sm:flex items-center justify-center">
      <svg width="800" height="200" viewBox="0 0 800 200" fill="none" className="overflow-visible" aria-hidden="true">
        
        {/* Nodes Background Glow */}
        <circle cx="100" cy="100" r="40" fill="#a67c2e" opacity="0.05" />
        <circle cx="400" cy="100" r="50" fill="#e0c27a" opacity="0.1" />
        <circle cx="700" cy="100" r="40" fill="#a67c2e" opacity="0.05" />

        {/* Lines (Paths) connecting nodes */}
        {/* Path 1: Brand to Voice (Converging) */}
        <motion.path 
          d="M 120 100 C 200 100, 300 100, 370 100" 
          stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4"
        />
        <motion.path 
          d="M 115 80 C 200 60, 300 90, 370 95" 
          stroke="rgba(255,255,255,0.1)" strokeWidth="1"
        />
        <motion.path 
          d="M 115 120 C 200 140, 300 110, 370 105" 
          stroke="rgba(255,255,255,0.1)" strokeWidth="1"
        />

        {/* Path 2: Voice to Audience (Diverging) */}
        <motion.path 
          d="M 430 100 C 500 100, 600 100, 680 100" 
          stroke="#e0c27a" strokeWidth="2" strokeOpacity="0.4"
        />
        <motion.path 
          d="M 425 90 C 500 50, 600 60, 685 85" 
          stroke="#e0c27a" strokeWidth="1" strokeOpacity="0.3"
        />
        <motion.path 
          d="M 425 110 C 500 150, 600 140, 685 115" 
          stroke="#e0c27a" strokeWidth="1" strokeOpacity="0.3"
        />

        {/* Animated Synapse Dots (Brand to Voice) */}
        <motion.circle cx="0" cy="0" r="2" fill="#fff">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 120 100 C 200 100, 300 100, 370 100" />
        </motion.circle>
        
        <motion.circle cx="0" cy="0" r="1.5" fill="#fff" opacity="0.6">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 115 80 C 200 60, 300 90, 370 95" />
        </motion.circle>

        {/* Animated Synapse Dots (Voice to Audience) */}
        <motion.circle cx="0" cy="0" r="3" fill="#e0c27a" style={{ filter: "drop-shadow(0 0 2px #e0c27a)" }}>
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 430 100 C 500 100, 600 100, 680 100" />
        </motion.circle>
        <motion.circle cx="0" cy="0" r="2" fill="#e0c27a" opacity="0.8">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 425 90 C 500 50, 600 60, 685 85" />
        </motion.circle>
        <motion.circle cx="0" cy="0" r="2" fill="#e0c27a" opacity="0.8">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M 425 110 C 500 150, 600 140, 685 115" />
        </motion.circle>

        {/* Central Core: The Voice Base */}
        <circle cx="400" cy="100" r="25" fill="#000" stroke="#e0c27a" strokeWidth="2" />
        {/* Core Pulsing Ring */}
        <motion.circle cx="400" cy="100" r="25" fill="none" stroke="#e0c27a" strokeWidth="1"
          animate={{ r: [25, 40], opacity: [0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        
        {/* Play Icon Inside Core */}
        <path d="M 395 90 L 395 110 L 410 100 Z" fill="#e0c27a" />

        {/* Left Core: Brand */}
        <rect x="80" y="80" width="40" height="40" rx="4" fill="#050505" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        {/* Right Core: Audience */}
        <circle cx="700" cy="100" r="20" fill="#050505" stroke="#e0c27a" strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="700" cy="100" r="12" fill="#050505" stroke="#e0c27a" strokeOpacity="0.6" strokeWidth="1" />

        {/* Labels below nodes */}
        <text x="100" y="145" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.1em" opacity="0.8">
          {t.brand}
        </text>
        <text x="400" y="170" textAnchor="middle" fill="#e0c27a" fontSize="13" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.15em">
          {t.connection}
        </text>
        <text x="700" y="145" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.1em" opacity="0.8">
          {t.audience}
        </text>
      </svg>
    </div>
  );
}
