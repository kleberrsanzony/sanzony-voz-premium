import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Mic2, Radio, PlayCircle, ShieldCheck, Zap, MessageSquare } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brazilian Portuguese Commercial Voice Over | Professional Spots",
  description: "High-impact Brazilian Portuguese commercial voice over for TV, Radio, and Social Media Ads. Native Brazilian talent with broadcast-quality home studio.",
  alternates: {
    canonical: "/en/brazilian-portuguese-commercial-voice-over",
  },
};

export default function CommercialVoiceOverPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sanzonyvoz.com.br/en" },
          { "@type": "ListItem", "position": 2, "name": "Commercial Voice Over", "item": "https://www.sanzonyvoz.com.br/en/brazilian-portuguese-commercial-voice-over" }
        ]
      },
      {
        "@type": "Service",
        "name": "Brazilian Commercial Voice Over Services",
        "provider": { "@type": "Person", "name": "Sanzony" }
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
            <span className="section-label mb-6 block text-gold">Broadcast Quality Ads</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-8">
              Brazilian Commercial <br />
              <span className="text-gold">Voice Over Talents</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Premium spots for TV, Radio, and Digital. Authentic Brazilian Portuguese that drives engagement and sales.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section: The Standard */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Broadcast-Standard Recording for Every Medium
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Your commercial needs a voice that fits the mix perfectly. We provide clean, raw, or fully processed voice files that are ready to go live on TV networks, radio stations, or global streaming platforms. Native Brazilian Portuguese with high-impact interpretation.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-gold">
                  <Radio size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider font-display">TV & Radio Spots</span>
                </div>
                <div className="flex items-center gap-2 text-gold">
                  <PlayCircle size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider font-display">Social Media Ads</span>
                </div>
              </div>
            </Reveal>
            <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
              <Mic2 size={80} className="text-[#e0c27a] opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content Section */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
               <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full">
                 <div className="text-gold mb-6"><Zap size={24} /></div>
                 <h3 className="text-white font-display font-bold text-xl mb-4">Urgent Deliveries</h3>
                 <p className="text-xs text-muted-foreground leading-relaxed">
                   Need a spot delivered in hours? We prioritize commercial projects to ensure your campaign starts on time. Fast 24h turnaround as standard for most TV/Radio spots.
                 </p>
               </div>
            </Reveal>
            <Reveal delay={0.2}>
               <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full">
                 <div className="text-gold mb-6"><MessageSquare size={24} /></div>
                 <h3 className="text-white font-display font-bold text-xl mb-4">Direct Communication</h3>
                 <p className="text-xs text-muted-foreground leading-relaxed">
                   Work directly with the talent. We offer remote direction via CleanFeed or Zoom to ensure every syllable is perfect according to your <Link href="/en/voice-over-for-brands" className="text-gold hover:underline">brand guidelines</Link>.
                 </p>
               </div>
            </Reveal>
            <Reveal delay={0.3}>
               <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full">
                 <div className="text-gold mb-6"><ShieldCheck size={24} /></div>
                 <h3 className="text-white font-display font-bold text-xl mb-4">Premium Standards</h3>
                 <p className="text-xs text-muted-foreground leading-relaxed">
                   Maintain a high-quality <Link href="/locucao-premium" className="text-gold hover:underline">voice over profile</Link> across all channels. We ensure consistency across multiple scripts to build a cohesive brand identity in Brazil.
                 </p>
               </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SEO Mesh Links */}
      <section className="py-16 text-center border-t border-white/5">
        <div className="container-site flex justify-center gap-10 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
           <Link href="/en" className="hover:text-gold transition-colors">English Home</Link>
           <Link href="/faq" className="hover:text-gold transition-colors">How We Work</Link>
           <Link href="/brazilian-portuguese-voice-over" className="hover:text-gold transition-colors">Explore Categories</Link>
           <Link href="/locucao-para-propaganda" className="hover:text-gold transition-colors">Versão em Português</Link>
        </div>
      </section>

      {/* Conversion Final CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-24 bg-gold rounded-3xl border border-white/10 text-center relative shadow-[0_40px_100px_rgba(224,194,122,0.1)]">
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-7xl text-black mb-10">
                Ready to Hire <br />
                <span className="italic font-light">the Brazilian Voice?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Link 
                  href="/briefing" 
                  className="inline-flex h-16 items-center justify-center px-10 bg-black text-white font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-all rounded-md shadow-xl"
                  aria-label="Hire Brazilian commercial voice over artist and send your script"
                >
                  Hire & Send Script
                </Link>
                <Link 
                  href="/briefing" 
                  className="inline-flex h-16 items-center justify-center px-10 border border-black text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-black/5 transition-all rounded-md"
                  aria-label="Request a custom quote for commercial voice over services"
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
