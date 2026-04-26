"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function ValueBreakdownChart() {
  const { language } = useLanguage();
  
  const labels = {
    pt: { t1: "Voz", t2: "Técnica", t3: "Hardware", t4: "Direitos" },
    en: { t1: "Voice", t2: "Technique", t3: "Hardware", t4: "Rights" },
    es: { t1: "Voz", t2: "Técnica", t3: "Hardware", t4: "Derechos" }
  };
  const t = labels[language as keyof typeof labels] || labels.pt;

  const arcs = [
    { label: t.t1, color: "rgba(255,255,255,0.2)", radius: 60, strokeWidth: 4, delay: 0.2 },
    { label: t.t2, color: "rgba(224,194,122,0.4)", radius: 85, strokeWidth: 8, delay: 0.4 },
    { label: t.t3, color: "rgba(224,194,122,0.7)", radius: 110, strokeWidth: 12, delay: 0.6 },
    { label: t.t4, color: "#e0c27a", radius: 140, strokeWidth: 18, delay: 0.8 },
  ];

  const circumference = (r: number) => 2 * Math.PI * r;

  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto bg-[#030303] rounded-[2rem] border border-white/5 flex items-center justify-center p-8 shadow-2xl overflow-hidden group">
      
      {/* Background radial soft light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,194,122,0.05)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

      <svg width="320" height="320" viewBox="0 0 320 320" className="transform -rotate-90 origin-center overflow-visible">
        {/* Glow Filter */}
        <defs>
          <filter id="arcGlow">
             <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
             <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
             </feMerge>
          </filter>
        </defs>

        {arcs.map((arc, i) => {
           const c = circumference(arc.radius);
           // We'll draw 75% of the circle (270 degrees) to leave a gap for labels
           const arcLength = c * 0.75; 
           
           return (
             <g key={i}>
                {/* Background Track */}
                <circle cy="160" cx="160" r={arc.radius} fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth={arc.strokeWidth} />
                
                {/* Animated Arc */}
                <motion.circle 
                  cy="160" 
                  cx="160" 
                  r={arc.radius} 
                  fill="none" 
                  stroke={arc.color} 
                  strokeWidth={arc.strokeWidth}
                  strokeLinecap="round"
                  strokeDasharray={`${c}`}
                  filter={i === 3 ? "url(#arcGlow)" : ""}
                  initial={{ strokeDashoffset: c }}
                  whileInView={{ strokeDashoffset: c - arcLength }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: arc.delay }}
                />
             </g>
           );
        })}
      </svg>

      {/* Overlay Labels (HTML for better rendering) */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-end items-center pb-12">
         {/* Value multiplier indicator at the center */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="block text-3xl font-display font-light text-white group-hover:scale-110 transition-transform duration-500">10x</span>
            <span className="block text-[0.5rem] tracking-[0.2em] font-display uppercase text-gold">ROI</span>
         </div>

         {/* Legend / Key */}
         <div className="flex gap-4">
           {arcs.map((arc, i) => (
             <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + (i * 0.1) }}
                className="flex items-center gap-1.5"
             >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: i === 3 ? "#e0c27a" : arc.color }} />
                <span className="text-[0.55rem] uppercase tracking-widest text-white/50">{arc.label}</span>
             </motion.div>
           ))}
         </div>
      </div>
    </div>
  );
}
