import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Globe, Mic2, Star, Zap, CheckCircle2, Headphones, Activity } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voice Over Brazil | Brazilian Portuguese for Global Clients",
  description: "Professional Brazilian Portuguese voice over for international clients. High-end studio quality, native accent, and global delivery standards.",
  alternates: {
    canonical: "/voice-over-brazil",
  },
};

export default function VoiceOverBrazilPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sanzonyvoz.com.br" },
          { "@type": "ListItem", "position": 2, "name": "Voice Over Brazil", "item": "https://www.sanzonyvoz.com.br/voice-over-brazil" }
        ]
      },
      {
        "@type": "ProfessionalService",
        "name": "Sanzony Voice Over Brazil",
        "description": "Premium native Brazilian voice talent for international production houses and global brands."
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="container-site relative z-10 text-center">
          <Reveal>
            <span className="section-label mb-6 block text-gold">Global Supply Chain</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-8">
              Voice Over <span className="text-gold">Brazil</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              The high-end voice over solution for global agencies and brands targeting the Brazilian market. Elite quality, native soul.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section: Global Standards */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Bridging the Gap: Local Voice, Global Standards
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Hiring a voice over from Brazil shouldn't be a technical hurdle. We operate with international broadcast standards (EBU R128), offering high-res 48kHz WAV files and remote direction via CleanFeed or Zoom. It's the <Link href="/brazilian-portuguese-voice-over" className="text-gold hover:underline">brazilian voice</Link> your project needs, with the professional workflow you demand.
              </p>
              <div className="flex flex-wrap gap-6">
                 <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e0c27a]">
                    <ShieldCheck size={16} />
                    <span>Broadcast Tier</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e0c27a]">
                    <Headphones size={16} />
                    <span>Remote Ready</span>
                 </div>
              </div>
            </Reveal>
            <div className="relative aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
               <Globe size={100} className="text-gold opacity-10 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content Blocks: When / Value / Scale */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Zap size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Scale & Velocity</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Trusted by international production houses for volume projects. From large-scale e-learning to high-volume <Link href="/locucao-profissional" className="text-gold hover:underline">locução profissional</Link> projects, we scale with your needs.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Activity size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Strategic ROI</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A premium native voice reduces customer friction. In the competitive Brazilian market, using a <Link href="/locucao-premium" className="text-gold hover:underline">top-tier voice</Link> ensures trust and better conversion rates for global brands.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Target size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Market Presence</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We don't just speak Portuguese; we capture the cultural nuances that make a brand successful in Brazil. Essential for localized <Link href="/locucao-para-propaganda" className="text-gold hover:underline">commercial ads</Link>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Strategic SEO Mesh */}
      <section className="py-16 border-b border-white/5">
        <div className="container-site">
          <div className="flex flex-wrap justify-between items-center gap-6 text-[0.65rem] uppercase tracking-widest text-muted-foreground font-semibold">
             <Link href="/en" className="hover:text-gold transition-colors">English Home</Link>
             <Link href="/en/voice-over-for-brands" className="hover:text-gold transition-colors">Commercials EN</Link>
             <Link href="/faq" className="hover:text-gold transition-colors">Global Support</Link>
             <Link href="/brazilian-portuguese-voice-over" className="hover:text-gold transition-colors">VO Hub</Link>
          </div>
        </div>
      </section>

      {/* Conversion Final CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-24 bg-gradient-to-t from-black to-white/[0.03] rounded-3xl border border-white/10 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gold opacity-20" />
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-7xl mb-8">
                Premium Voice of <br />
                <span className="text-gold font-light italic">Brazil for the World.</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Link 
                  href="/briefing" 
                  className="inline-flex h-16 items-center justify-center px-10 bg-white text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-gold transition-all rounded-md shadow-xl"
                  aria-label="Hire Brazilian voice over for international projects and start your brief"
                >
                  Hire Now & Brief
                </Link>
                <Link 
                  href="/briefing" 
                  className="inline-flex h-16 items-center justify-center px-10 border border-white/20 text-white font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-all rounded-md"
                  aria-label="Request a custom voice over quote for global production"
                >
                  Request a Quote
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
