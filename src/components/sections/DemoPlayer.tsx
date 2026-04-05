"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import type { DemoItem } from "@/data/content";
import { playerSettings } from "@/data/content";

export function DemoPlayer({ 
  heroCategories, 
  heroDemos 
}: { 
  heroCategories: readonly string[];
  heroDemos: DemoItem[];
}) {
  const [activeTab, setActiveTab] = useState<string>(heroCategories[0]);
  const [playing, setPlaying] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(playerSettings.defaultVolume);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const filtered = heroDemos.filter((d) => d.category === activeTab);

  const togglePlay = (index: number, audioUrl?: string) => {
    if (!audioUrl) return;

    if (playing === index) {
      audioRef.current?.pause();
      setPlaying(null);
    } else {
      setPlaying(index);
      if (audioRef.current) {
        if (audioRef.current.src !== window.location.origin + audioUrl) {
           audioRef.current.src = audioUrl;
        }
        audioRef.current.play().catch(err => {
          console.error("Erro ao reproduzir áudio:", err);
          setPlaying(null);
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

  // Sync volume state with audio ref
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Reset player when switching tabs
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlaying(null);
      setCurrentTime(0);
    }
  }, [activeTab]);

  return (
    <div className="glass-card animate-fade-in border-[#e0c27a]/15 hover:border-[#e0c27a]/25 shadow-2xl">
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setPlaying(null)}
        onError={() => setPlaying(null)}
      />

      {/* Header Controls (Toggles/Volume) */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-7 pb-4 border-b border-white/5">
        <div className="flex gap-2">
          {heroCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveTab(c)}
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

        {/* Global Volume Control */}
        <div className="flex items-center gap-2 group/volume">
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
            className="w-16 h-1 bg-white/10 accent-[#e0c27a] cursor-pointer rounded-full group-hover/volume:w-20 transition-all"
          />
        </div>
      </div>

      {/* Track list */}
      <div className="space-y-1">
        {filtered.map((d, i) => (
          <div
            key={`${activeTab}-${i}`}
            className={`flex flex-col gap-3 py-4 cursor-pointer group px-4 -mx-4 rounded-lg transition-all duration-300 ${
              playing === i ? "bg-white/5 border border-white/5" : "hover:bg-white/5 border border-transparent"
            }`}
            onClick={(e) => {
              if ((e.target as HTMLElement).tagName !== 'INPUT') {
                togglePlay(i, d.audioUrl);
              }
            }}
          >
            <div className="flex items-center gap-4">
              <button className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
                playing === i 
                  ? "bg-white text-black scale-110" 
                  : "bg-gradient-to-br from-[#a67c2e] to-[#e0c27a] text-black group-hover:scale-110"
              }`}>
                {playing === i ? <Pause size={12} /> : <Play size={12} className="ml-1" />}
              </button>

              <div className="flex-1 min-w-0">
                <h4 className={`font-display font-medium text-sm tracking-wide truncate transition-colors ${
                  playing === i ? "text-[#e0c27a]" : "text-foreground"
                }`}>
                  {d.title}
                </h4>
                <p className="text-[0.6rem] text-muted-foreground mt-0.5 uppercase tracking-widest">{d.client}</p>
              </div>
              
              <div className="flex items-center gap-4">
                {playing === i && (
                  <div className="flex items-center gap-[3px] h-4">
                    {[1, 2, 3, 2, 1].map((v, idx) => (
                      <span 
                        key={idx} 
                        className="w-[1.5px] bg-[#e0c27a] rounded-full animate-bounce" 
                        style={{ height: `${(v/4)*100}%`, animationDelay: `${idx * 0.1}s` }} 
                      />
                    ))}
                  </div>
                )}
                <span className="text-[0.6rem] text-muted-foreground font-mono tracking-wider w-10 text-right">
                  {playing === i ? formatTime(currentTime) : d.duration}
                </span>
              </div>
            </div>

            {/* Seekbar - Toggable via Code */}
            {playing === i && playerSettings.showProgressBar && (
              <div className="px-1 animate-fade-in" onClick={(e) => e.stopPropagation()}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

