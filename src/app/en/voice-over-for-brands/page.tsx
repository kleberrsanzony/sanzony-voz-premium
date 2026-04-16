import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Star, Target, Zap, CheckCircle2, DollarSign } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brazilian Voice Over for Brands | High-End Studio Quality",
  description: "Give your brand a premium Brazilian voice. Native speakers, broadcast-quality audio, and 24h turnaround for commercials and social ads.",
  alternates: {
    canonical: "/en/voice-over-for-brands",
  },
};

export default function VoiceOverForBrandsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sanzonyvoz.com.br/en" },
          { "@type": "ListItem", "position": 2, "name": "Voice Over for Brands", "item": "https://www.sanzonyvoz.com.br/en/voice-over-for-brands" }
        ]
      },
      {
        "@type": "Service",
        "name": "Commercial Brazilian Portuguese Voice Over",
        "provider": { "@type": "Person", "name": "Sanzony" },
        "description": "High-end voice over services for international brands targeting the Brazilian market."
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
            <span className="section-label mb-6 block text-gold">Commercial Excellence</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-8">
              The Brazilian Voice <br />
              <span className="text-gold">Your Brand Needs</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Strategic, emotional, and persuasive. We create the perfect sonic identity for your brand in the Brazilian market.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-white">
                Premium Voice Quality for Global Campaigns
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Consistency is key for global brands. We provide a reliable, broadcast-standard voice-over service that ensures your campaign sounds expensive, professional, and authentic to local ears.
              </p>
              <div className="space-y-4">
                {[ "Native Brazilian Portuguese", "Strategic Performance", "24h Project Turnaround" ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold" />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
              <Star size={80} className="text-[#e0c27a] opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Conversion Section */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Target size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left font-display">Targeted Delivery</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We specialize in matching the tone to your audience. From high-energy commercials to sophisticated lifestyle spots, we ensure your message lands with precision.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Zap size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left font-display">Fast Turnaround</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Time to market matters. Our studio pipeline is optimized for agility, delivering high-res files in record time to keep your production on track.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><DollarSign size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left font-display">Clear ROI</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Investing in a <Link href="/locucao-premium" className="text-gold hover:underline">premium voice</Link> raises the perceived value of your product, directly impacting trust and customer conversion.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Internal SEO Mesh */}
      <section className="py-16 text-center">
        <div className="container-site flex justify-center gap-10 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
          <Link href="/en" className="hover:text-gold transition-colors">English Home</Link>
          <Link href="/faq" className="hover:text-gold transition-colors">FAQ & Support</Link>
          <Link href="/brazilian-portuguese-voice-over" className="hover:text-gold transition-colors">Voice Over Hub</Link>
        </div>
      </section>

      {/* Conversion Focused CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-24 bg-gold rounded-[2rem] text-black text-center relative overflow-hidden group shadow-[0_50px_100px_rgba(224,194,122,0.1)]">
             <div className="absolute inset-x-0 bottom-0 h-1 bg-black/10" />
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-7xl mb-8">
                Ready to Hire <br />
                <span className="italic font-light">the perfect voice?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Link 
                  href="/briefing" 
                  className="inline-flex h-16 items-center justify-center px-10 bg-black text-white font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-all rounded-md shadow-xl"
                >
                  Request a Quote
                </Link>
                <Link 
                  href="/briefing" 
                  className="inline-flex h-16 items-center justify-center px-10 border border-black text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-black/5 transition-all rounded-md"
                >
                  Send your brief
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
