"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/data/content";
import { Button } from "@/components/ui/button";

const easePremium = [0.22, 1, 0.36, 1] as [number, number, number, number];

const headerContainerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easePremium,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      variants={headerContainerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent border-transparent"
        }`}
    >
      <div className="container-site flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <motion.a
          variants={headerItemVariants}
          href="#inicio"
          className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground transition-transform hover:scale-[1.02]"
        >
          Sanzony<span className="text-gold">.</span>Voz
          <span className="text-[0.5rem] font-light ml-0.5 align-super text-[#7a5c2e]">™</span>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks?.map((l: any) => (
            <motion.a
              key={l.href}
              variants={headerItemVariants}
              href={l.href}
              className="text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground hover:text-white transition-colors relative group py-2"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#e0c27a] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.div variants={headerItemVariants} className="hidden lg:block">
          <Button variant="outline" asChild className="text-[0.55rem] h-10 px-6">
            <Link href="/briefing">Fazer Briefing</Link>
          </Button>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button
          variants={headerItemVariants}
          className="lg:hidden text-silver hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Editorial Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: easePremium }}
            className="fixed inset-0 top-[80px] z-40 bg-black/98 backdrop-blur-3xl lg:hidden flex flex-col"
          >
            <div className="container-site h-full overflow-y-auto flex flex-col justify-between pt-12 pb-12">
              <nav className="flex flex-col gap-6">
                {navLinks?.map((l: any, i: number) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: easePremium }}
                    className="text-4xl font-display font-black tracking-tighter text-white hover:text-[#e0c27a] transition-colors"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="flex flex-col gap-8 mt-12"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: easePremium }}
              >
                <div className="h-px w-full bg-white/5" />
                <div className="flex flex-col gap-3">
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#7a5c2e] font-bold">
                    Elite Room Access
                  </span>
                  <Button asChild className="w-full text-[0.65rem] py-6">
                    <Link href="/briefing" onClick={() => setOpen(false)}>
                      Solicitar Briefing Direto
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
