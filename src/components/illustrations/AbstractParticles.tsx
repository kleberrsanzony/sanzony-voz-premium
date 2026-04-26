"use client";

import { motion } from "framer-motion";

export function AbstractParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-30"
      >
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter blur-[80px] sm:blur-[120px] mix-blend-screen">
          {/* Main Gold Mass */}
          <path d="M400 200 C300 100 100 300 200 400 C300 500 500 500 600 400 C700 300 500 100 400 200 Z" fill="#e0c27a" fillOpacity="0.15" />
          
          {/* Darker Copper/Gold Mass */}
          <path d="M400 600 C500 700 700 500 600 400 C500 300 300 300 200 400 C100 500 300 700 400 600 Z" fill="#a67c2e" fillOpacity="0.1" />
          
          {/* Subtle Bright Center */}
          <circle cx="400" cy="400" r="150" fill="#ffffff" fillOpacity="0.03" />
        </svg>
      </motion.div>
    </div>
  );
}
