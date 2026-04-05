"use client";

import { useState, useRef, useEffect } from "react";
import { gridDemos, playerSettings } from "@/data/content";
import { Play, Pause, AudioLines, Volume2, VolumeX } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger";

export default function DemoSection() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(playerSettings.defaultVolume);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (index: number, audioUrl?: string) => {
    if (!audioUrl) return;

    if (playingIndex === index) {
      audioRef.current?.pause();
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
      if (audioRef.current) {
        if (audioRef.current.src !== window.location.origin + audioUrl) {
          audioRef.current.src = audioUrl;
        }
        audioRef.current.play().catch(err => {
          console.error("Erro ao tocar demo:", err);
          setPlayingIndex(null);
        });
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    setIsMuted(v === 0);
    if (audioRef.current) {
      audioRef.current.volume = v;
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  return (
    <section id="demos">
      <audio 
        ref={audioRef} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setPlayingIndex(null)}
        onError={() => setPlayingIndex(null)}
      />

      <div className="section-spacing">
        <div className="container-site">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center mb-20 text-center">
              <div className="w-12 h-12 rounded-full border border-[#e0c27a]/20 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(224,194,122,0.05)]">
                <AudioLines size={18} className="text-[#e0c27a]" />
              </div>
              <span className="section-label mt-5 block">Portfólio em Foco</span>
              <h2 className="mt-8 font-display font-bold text-4xl md:text-5xl tracking-tight text-white max-w-xl leading-tight">
                A voz certa para o momento <span className="text-gold">exato.</span>
              </h2>
              
              {/* Global Volume for Grid */}
              <div className="mt-8 flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <button onClick={() => setIsMuted(!isMuted)} className="text-muted-foreground hover:text-[#e0c27a] transition-colors">
                  {isMuted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-1 bg-white/10 accent-[#e0c27a] cursor-pointer rounded-full"
                />
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {gridDemos.map((d, i) => (
              <StaggerItem
                key={i}
                onClick={() => togglePlay(i, d.audioUrl)}
                className={`luxury-card glass-card flex flex-col justify-between group cursor-pointer border-[#e0c27a]/15 hover:border-[#e0c27a]/25 transition-all duration-500 min-h-[220px] ${
                  playingIndex === i ? "bg-white/5 border-[#e0c27a]/30" : "border-white/5"
                }`}
              >
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="text-[0.6rem] uppercase tracking-widest text-[#e0c27a] font-medium">
                    {d.category}
                  </span>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${
                    playingIndex === i 
                      ? "bg-white text-black scale-110" 
                      : "bg-gradient-to-br from-[#a67c2e] to-[#e0c27a] text-black scale-100"
                  }`}>
                    {playingIndex === i ? <Pause size={14} /> : <Play size={14} className="ml-1" />}
                  </div>
                </div>
                
                <div className="relative z-10 space-y-4">
                  <div>
                    <h3 className={`font-display font-medium text-lg tracking-wide transition-colors ${
                      playingIndex === i ? "text-[#e0c27a]" : "text-white group-hover:text-[#e0c27a]"
                    }`}>
                      {d.title}
                    </h3>
                    
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[0.65rem] text-muted-foreground uppercase tracking-widest">{d.client}</p>
                      <span className="text-[0.6rem] text-muted-foreground font-mono tracking-wider">
                        {playingIndex === i ? formatTime(currentTime) : d.duration}
                      </span>
                    </div>
                  </div>

                  {/* Seekbar for Individual Card */}
                  {playingIndex === i && playerSettings.showProgressBar && (
                    <div className="pt-2 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                      <input 
                        type="range" 
                        min="0" 
                        max={duration || 0} 
                        step="0.1"
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1 bg-white/10 accent-[#e0c27a] cursor-pointer rounded-full appearance-none"
                        style={{
                          background: `linear-gradient(to right, #e0c27a ${(currentTime / duration) * 100 || 0}%, rgba(255,255,255,0.1) 0%)`
                        }}
                      />
                    </div>
                  )}
                  
                  {playingIndex === i && (
                    <div className="flex items-center gap-[4px] h-1.5 opacity-50">
                      {[1, 2, 3, 4, 3, 2, 1].map((v, idx) => (
                        <span 
                          key={idx} 
                          className="flex-1 bg-[#e0c27a] rounded-full animate-pulse" 
                          style={{ height: `${(v/4)*100}%`, animationDelay: `${idx * 0.1}s`}} 
                        />
                      ))}
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
