"use client";

import { motion } from "framer-motion";
import { heroCategories, heroDemos } from "@/data/content";
import { DemoPlayer } from "./DemoPlayer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const easePremium = [0.22, 1, 0.36, 1] as [number, number, number, number];

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2, // Small wait for header to start
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easePremium }
  },
};

const headlineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headlineLineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easePremium } },
};

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      {/* Background simplificado com Ambient Glow */}

      <motion.div
        className="container-site relative z-10 w-full"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center mt-[0%]">

          {/* LEFT — HEADLINE */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <motion.span variants={itemVariants} className="section-label mb-8 block">
              Locução Premium & Branding Vocal
            </motion.span>

            <motion.h1
              variants={headlineVariants}
              className="font-display font-bold text-5xl xs:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter text-white mb-8 flex flex-col gap-1"
            >
              <motion.span variants={headlineLineVariants}>
                Sua marca não
              </motion.span>
              <motion.span variants={headlineLineVariants} className="text-muted-foreground font-light">
                precisa de uma voz.
              </motion.span>
              <motion.span variants={headlineLineVariants} className="text-gold mt-2">
                Precisa de presença.
              </motion.span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mb-10">
              Locução premium para campanhas, marcas e projetos que exigem mais do que som.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Button asChild className="w-full sm:w-auto h-14 px-10 text-[0.7rem] uppercase tracking-[0.2em] font-bold shadow-[0_0_40px_rgba(224,194,122,0.2)]">
                <a href="#demos">Ouvir Demos</a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto h-14 px-10 text-[0.7rem] uppercase tracking-[0.2em] font-bold bg-black/20 backdrop-blur-sm border-white/10 hover:border-gold/50 hover:bg-black/50">
                <Link href="/briefing">Fazer Briefing</Link>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — Interactive Demo Player (Client Component) */}
          <motion.div variants={itemVariants} className="md:col-span-5 w-full">
            <DemoPlayer heroCategories={heroCategories} heroDemos={heroDemos} />
          </motion.div>
        </div>

        {/* Scroll indicator CSS puro */}
        <motion.div variants={itemVariants} className="mt-20 flex justify-center w-full">
          <div className="flex flex-col items-center gap-3">
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#e0c27a] animate-pulse" />
            <span className="text-[0.60rem] uppercase tracking-[0.4em] text-[#7a5c2e]">Explorar</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
