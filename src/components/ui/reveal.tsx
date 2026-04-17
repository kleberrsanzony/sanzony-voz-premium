"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  yOffset?: number;
  x?: number;
  y?: number;
  delay?: number;
  duration?: number;
  blur?: boolean;
}

export function Reveal({
  children,
  width = "100%",
  yOffset = 30, // Keep for backward compatibility
  x = 0,
  y,
  delay = 0,
  duration = 0.8,
  blur = true,
}: RevealProps) {
  // Use y if provided, otherwise fallback to yOffset
  const initialY = y !== undefined ? y : yOffset;

  return (
    <div style={{ width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            y: initialY, 
            x: x, 
            filter: blur ? "blur(8px)" : "none" 
          },
          visible: { 
            opacity: 1, 
            y: 0, 
            x: 0, 
            filter: "blur(0px)" 
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
