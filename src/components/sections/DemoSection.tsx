"use client";

import { useState, useRef } from "react";
import { gridDemos } from "@/data/content";
import { Play, Pause, AudioLines } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger";

export default function DemoSection() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (index: number, audioUrl?: string) => {
    if (!audioUrl) return;

    if (playingIndex === index) {
      audioRef.current?.pause();
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.play().catch(err => {
          console.error("Erro ao tocar demo:", err);
          setPlayingIndex(null);
        });
      }
    }
  };

  return (
    <section id="demos">
      <audio 
        ref={audioRef} 
        onEnded={() => setPlayingIndex(null)}
        onError={() => setPlayingIndex(null)}
      />

      <div className="section-spacing">
        <div className="container-site">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center mb-24 text-center">
              <div className="w-12 h-12 rounded-full border border-[#e0c27a]/20 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(224,194,122,0.05)]">
                <AudioLines size={18} className="text-[#e0c27a]" />
              </div>
              <span className="section-label mt-5 block">Portfólio em Foco</span>
              <h2 className="mt-8 font-display font-bold text-4xl md:text-5xl tracking-tight text-white max-w-xl leading-tight">
                A voz certa para o momento <span className="text-gold">exato.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                Explore o espectro vocal do Sanzony.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {gridDemos.map((d, i) => (
              <StaggerItem
                key={i}
                onClick={() => togglePlay(i, d.audioUrl)}
                className={`luxury-card glass-card flex flex-col justify-between group cursor-pointer border-[#e0c27a]/10 hover:border-[#e0c27a]/20 transition-all duration-500 ${
                  playingIndex === i ? "border-[#e0c27a]/40 bg-white/5" : "border-white/5"
                }`}
              >
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="text-[0.6rem] uppercase tracking-widest text-[#e0c27a] font-medium">
                    {d.category}
                  </span>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-[#a67c2e] to-[#e0c27a] text-black flex items-center justify-center transition-all duration-500 shadow-lg shadow-black ${
                    playingIndex === i ? "opacity-100 scale-100" : "opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100"
                  }`}>
                    {playingIndex === i ? <Pause size={14} /> : <Play size={14} className="ml-1" />}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className={`font-display font-medium text-lg tracking-wide transition-colors ${
                    playingIndex === i ? "text-[#e0c27a]" : "text-white group-hover:text-[#e0c27a]"
                  }`}>
                    {d.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xs text-muted-foreground">{d.client}</p>
                    
                    {playingIndex === i ? (
                      <div className="flex items-center gap-[2px] h-3">
                        {[1, 2, 3, 2].map((v, idx) => (
                          <span 
                            key={idx} 
                            className="w-[1.5px] bg-[#e0c27a] rounded-full animate-pulse" 
                            style={{ height: `${(v/3)*100}%`, animationDelay: `${idx * 0.15}s`}} 
                          />
                        ))}
                      </div>
                    ) : (
                      <span className="text-[0.6rem] text-muted-foreground font-mono">
                        {d.duration}
                      </span>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
