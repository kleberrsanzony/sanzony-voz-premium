import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Globe, Mic2, Star, Zap, Target, Layout, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brazilian Portuguese Voice Over for Brands | Sanzony Voz",
  description: "Premium Brazilian Portuguese voice over for global brands. High-end studio quality, fast turnaround, and strategic interpretation for commercials and corporate videos.",
  alternates: {
    canonical: "/brazilian-portuguese-voice-over",
  },
};

export default function BrazilianVoiceOverPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sanzonyvoz.com.br" },
          { "@type": "ListItem", "position": 2, "name": "Brazilian Portuguese Voice Over", "item": "https://www.sanzonyvoz.com.br/brazilian-portuguese-voice-over" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why hire a native Brazilian voice over artist?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A native Brazilian artist ensures correct intonation, cultural relevance, and an authentic connection with the local audience that non-native speakers simply cannot replicate."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle remote direction for international clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer live direct sessions via Zoom, CleanFeed, or Google Meet, allowing global clients to direct the performance in real-time from anywhere in the world."
            }
          }
        ]
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
            <span className="section-label mb-6 block text-gold">International Standards</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-8">
              Brazilian Portuguese <span className="text-gold">Voice Over</span> for Global Brands
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Elevate your campaign with a premium Brazilian voice. Authentic accent, broadcast-quality recording, and strategic interpretation focused on results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section 1: International Reach */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Broadcast Quality from Our Pro Home Studio
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Operating from a high-end recording environment, we deliver crystal clear audio that meets international broadcast standards. Whether you need a spot for TV, Radio, or Digital Social Ads, our production pipeline is built for high-performance and absolute clarity.
              </p>
              <div className="flex items-center gap-4 text-sm text-gold-mid">
                <Mic2 size={18} className="text-gold" />
                <span>Professional Gear & Acoustic Treatment</span>
              </div>
            </Reveal>
            <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
              <Globe size={80} className="text-[#e0c27a] opacity-10 animate-[spin_20s_linear_infinite]" />
            </div>
          </div>
        </div>
      </section>

      {/* DEEP CONTENT: Why/When / Applications / Standards */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Target size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Why choose us?</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Perfect for global brands requiring an authentic <Link href="/en" className="text-gold hover:underline">brazilian voice</Link> without the logistical hurdles of a physical studio. We bridge the cultural gap with professional, strategic interpretation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Layout size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Real Applications</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Extensively used for landing page videos, <Link href="/en/voice-over-for-brands" className="text-gold hover:underline">commercial ads</Link>, corporate manifestos, and localized e-learning content that needs to sound natural and premium to a Brazilian audience.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><ShieldCheck size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Elite Standards</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We maintain a <Link href="/locucao-premium" className="text-gold hover:underline">premium standard</Link> across all deliveries. You get the same clarity and presence found in the biggest production houses in London or New York, but with a local soul.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Internal Navigation Mesh Footer Section */}
      <section className="py-16 border-b border-white/5">
        <div className="container-site">
          <div className="flex flex-wrap justify-between items-center gap-6 text-[0.6rem] uppercase tracking-widest text-muted-foreground font-semibold">
             <Link href="/en" className="hover:text-gold transition-colors">English Home</Link>
             <Link href="/locucao-profissional" className="hover:text-gold transition-colors">Português BR</Link>
             <Link href="/faq" className="hover:text-gold transition-colors">FAQ & Support</Link>
             <Link href="/en/voice-over-for-brands" className="hover:text-gold transition-colors">Commercial Tier</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-24 bg-[#0a0a0a] rounded-3xl border border-white/5 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[100px] group-hover:bg-gold/20 transition-all duration-700" />
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-7xl mb-8">
                Ready to find your <br />
                <span className="text-gold">Brazilian Voice?</span>
              </h2>
              <Link 
                href="/briefing" 
                className="inline-flex h-16 items-center justify-center px-12 bg-white text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-gold transition-all rounded-md shadow-[0_0_50px_rgba(224,194,122,0.2)]"
                aria-label="Send your brief and request a custom quote for Brazilian Portuguese voice over"
              >
                Hire Now & Send Brief
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
