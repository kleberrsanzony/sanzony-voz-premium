"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function BrandImpactChart() {
  const { language } = useLanguage();
  
  const labels = {
    pt: {
      generic: "Voz Comum / Banco de Voz",
      premium: "Branding Vocal Premium",
      yAxis: "Percepção de Valor & Retenção",
      xAxis: "Tempo de Exposição"
    },
    en: {
      generic: "Generic Voice / Stock Audio",
      premium: "Premium Vocal Branding",
      yAxis: "Value Perception & Retention",
      xAxis: "Exposure Time"
    },
    es: {
      generic: "Voz Común / Banco de Voz",
      premium: "Branding Vocal Premium",
      yAxis: "Percepción de Valor y Retención",
      xAxis: "Tiempo de Exposición"
    }
  };

  const t = labels[language as keyof typeof labels] || labels.pt;

  return (
    <div className="relative w-full aspect-square sm:aspect-video lg:aspect-[21/9] bg-[#030303] rounded-2xl border border-white/5 overflow-hidden flex flex-col p-4 sm:p-8 group shadow-2xl">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#e0c27a 1px, transparent 1px), linear-gradient(90deg, #e0c27a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
      }} />
      
      {/* Axis Labels */}
      <div className="absolute top-8 left-8 origin-top-left -rotate-90 text-[0.55rem] sm:text-xs text-white/30 uppercase tracking-[0.2em] font-display whitespace-nowrap hidden sm:block">
        {t.yAxis}
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[0.5rem] sm:text-[0.65rem] text-white/30 uppercase tracking-[0.2em] font-display">
        {t.xAxis}
      </div>

      {/* SVG Chart Area */}
      <div className="relative w-full h-full flex-1 mt-4 sm:mt-0 ml-0 sm:ml-8 mb-6 sm:mb-8">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 400" preserveAspectRatio="none">
          {/* Defs for gradients */}
          <defs>
            <linearGradient id="impactGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e0c27a" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#e0c27a" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Baseline Generic Voice - Dashed Line */}
          <motion.path 
            d="M0 320 C 300 310, 600 300, 1000 290" 
            fill="none" 
            stroke="rgba(255,255,255,0.15)" 
            strokeWidth="2"
            strokeDasharray="10 10"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Data Points Generic */}
          <motion.circle cx="500" cy="305" r="3" fill="rgba(255,255,255,0.3)" 
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }} 
          />
          <motion.circle cx="1000" cy="290" r="3" fill="rgba(255,255,255,0.3)" 
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2 }} 
          />
          
          {/* Premium Voice Impact (Hockey Stick Curve) */}
          <motion.path 
            d="M0 320 C 400 280, 500 150, 1000 40" 
            fill="none" 
            stroke="#e0c27a" 
            strokeWidth="4"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          />
          
          {/* Data Points Premium */}
          <motion.circle cx="460" cy="225" r="4" fill="#e0c27a" 
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} 
          >
             <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
          </motion.circle>
          
          <motion.circle cx="1000" cy="40" r="6" fill="#fff" stroke="#e0c27a" strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.5 }} 
          />

          {/* Gradient Fill under Premium Curve */}
          <motion.path 
            d="M0 320 C 400 280, 500 150, 1000 40 L1000 400 L0 400 Z" 
            fill="url(#impactGradient)" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, delay: 1 }}
          />

          {/* Labels */}
          <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2.2 }}>
            <rect x="80" y="325" width="16" height="4" fill="rgba(255,255,255,0.4)" rx="2" />
            <text x="105" y="330" fill="rgba(255,255,255,0.5)" fontSize="16" fontFamily="sans-serif" dominantBaseline="middle">
              {t.generic}
            </text>
          </motion.g>

          <motion.g initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2.5 }}>
            <rect x="680" y="60" width="16" height="4" fill="#e0c27a" rx="2" filter="url(#glow)" />
            <text x="705" y="65" fill="#e0c27a" fontSize="20" fontWeight="bold" fontFamily="sans-serif" dominantBaseline="middle">
              {t.premium}
            </text>
          </motion.g>

        </svg>
      </div>
    </div>
  );
}
