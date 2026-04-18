"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { heroCategories as staticCategories, heroDemos as staticDemos } from "@/data/content";
import { demoService, DemoEntry } from "@/services/demoService";
import { DemoPlayer } from "./DemoPlayer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

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
  const { t } = useLanguage();
  const [demos, setDemos] = useState<DemoEntry[]>([]);
  const [categories, setCategories] = useState<string[]>(Array.from(staticCategories));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const allDemos = await demoService.getDemos();
        const heroDemos = allDemos.filter(d => d.location === 'hero');
        if (heroDemos.length > 0) {
          setDemos(heroDemos);
          const uniqueCats = Array.from(new Set(heroDemos.map(d => d.category))).sort();
          setCategories(uniqueCats);
        } else {
          setDemos(staticDemos as any);
        }
      } catch (err) {
        console.error("Hero: Error fetching demos", err);
        setDemos(staticDemos as any);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

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
              {t.hero.label}
            </motion.span>

            <motion.h1
              variants={headlineVariants}
              className="font-display font-bold text-4xl xs:text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-white mb-8 flex flex-col gap-1"
            >
              <motion.span variants={headlineLineVariants}>
                {t.hero.line1}
              </motion.span>
              <motion.span variants={headlineLineVariants} className="text-muted-foreground font-light">
                {t.hero.line2}
              </motion.span>
              <motion.span variants={headlineLineVariants} className="text-[#e0c27a] mt-2">
                {t.hero.line3}
              </motion.span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mb-10">
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Button asChild className="w-full sm:w-auto h-12 md:h-14 px-8 bg-white text-black font-display font-bold text-sm hover:bg-[#e0c27a] transition-all rounded-sm uppercase tracking-widest">
                <a href="#demos" aria-label="Explorar portfólio de demonstrações de voz">{t.hero.cta_main}</a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto h-12 md:h-14 px-8 font-display font-bold text-sm bg-black/20 backdrop-blur-sm border-white/10 hover:border-[#e0c27a]/50 hover:bg-black/50 transition-all rounded-sm uppercase tracking-widest">
                <Link href="/briefing" aria-label="Ir para página de briefing e solicitar orçamento">{t.hero.cta_sec}</Link>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — Interactive Demo Player (Client Component) */}
          <motion.div variants={itemVariants} className="md:col-span-5 w-full">
            <DemoPlayer heroCategories={categories} heroDemos={demos.length > 0 ? demos : staticDemos as any} />
          </motion.div>
        </div>

        {/* Scroll indicator CSS puro */}
        <motion.div variants={itemVariants} className="mt-20 flex justify-center w-full">
          <div className="flex flex-col items-center gap-3">
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#e0c27a] animate-pulse" />
            <span className="text-[0.60rem] uppercase tracking-[0.4em] text-[#7a5c2e]">{t.hero.scroll}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
