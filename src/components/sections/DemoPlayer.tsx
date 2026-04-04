"use client";

import { useState } from "react";
import { Play, Pause } from "lucide-react";

export function DemoPlayer({ 
  heroCategories, 
  heroDemos 
}: { 
  heroCategories: readonly string[];
  heroDemos: any[];
}) {
  const [activeTab, setActiveTab] = useState<string>(heroCategories[0]);
  const [playing, setPlaying] = useState<number | null>(null);
  
  const filtered = heroDemos.filter((d) => d.category === activeTab);

  return (
    <div className="glass-card animate-fade-in border-[#e0c27a]/10 hover:border-[#e0c27a]/20">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-7">
        {heroCategories.map((c) => (
          <button
            key={c}
            onClick={() => { setActiveTab(c); setPlaying(null); }}
            className={`px-4 py-1.5 text-[0.5rem] uppercase tracking-[0.3em] rounded-sm transition-all duration-500 cursor-pointer ${
              activeTab === c 
                ? "text-[#e0c27a] font-semibold bg-[#e0c27a]/10 border border-[#e0c27a]/30" 
                : "text-muted-foreground hover:text-white bg-[#111] border border-white/5 hover:border-white/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Track list */}
      <div className="space-y-0">
        {filtered.map((d, i) => (
          <div
            key={`${activeTab}-${i}`}
            className="flex items-center gap-4 py-5 cursor-pointer group px-3 -mx-3 rounded-md transition-colors hover:bg-white/5 border-t border-white/5 first:border-0"
            onClick={() => setPlaying(playing === i ? null : i)}
          >
            <button className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#a67c2e] to-[#e0c27a] text-black transition-transform group-hover:scale-110 shadow-lg shadow-black/50">
              {playing === i ? <Pause size={12} /> : <Play size={12} className="ml-1" />}
            </button>
            <div className="flex-1 min-w-0">
              <h4 className="font-display font-medium text-sm tracking-wide truncate text-foreground group-hover:text-[#e0c27a] transition-colors">{d.title}</h4>
              <p className="text-[0.6rem] text-muted-foreground mt-0.5">{d.client}</p>
            </div>
            {/* Simple audio visualizer instead of complex framer-motion */}
            {playing === i && (
              <div className="flex items-center gap-[3px] h-4">
                {[1, 2, 3, 4, 2].map((v, idx) => (
                  <span 
                    key={idx} 
                    className="w-[2px] bg-[#e0c27a] rounded-full animate-pulse" 
                    style={{ height: `${(v/4)*100}%`, animationDelay: `${idx * 0.15}s`}} 
                  />
                ))}
              </div>
            )}
            <span className="text-[0.6rem] text-muted-foreground font-mono tracking-wider">{d.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
