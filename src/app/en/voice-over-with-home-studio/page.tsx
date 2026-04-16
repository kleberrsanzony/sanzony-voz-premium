import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Mic2, Headphones, ShieldCheck, Globe, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Home Studio Voice Over | Broadcast Quality",
  description: "High-end Brazilian Portuguese voice over directly from a professional home studio. Broadcast-quality recordings with fast delivery for global clients.",
  alternates: {
    canonical: "/en/voice-over-with-home-studio",
  },
};

export default function HomeStudioVoiceOverPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sanzonyvoz.com.br/en" },
          { "@type": "ListItem", "position": 2, "name": "Professional Home Studio", "item": "https://www.sanzonyvoz.com.br/en/voice-over-with-home-studio" }
        ]
      },
      {
        "@type": "Service",
        "name": "Home Studio Voice Over Services",
        "description": "Premium Brazilian VO recording services with international broadcast standards."
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
            <span className="section-label mb-6 block text-gold">Elite Recording Environment</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-8">
              Professional <span className="text-gold">Home Studio</span> Voice Over
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Crystal clear audio. Zero background noise. Broadcast quality delivered directly to your inbox anywhere in the world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Studio Specs Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Tier-1 Equipment for Uncompromising Sound
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Operating from a custom-built, acoustically treated home studio, we provide the same quality you'd expect from the biggest commercial studios in London or LA. Our workflow is designed for high-resolution <Link href="/en/brazilian-portuguese-commercial-voice-over" className="text-gold hover:underline">commercial recording</Link> with zero technical artifacts.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Acoustically Treated", "High-End Microphones", "Focusrite/Universal Interfaces", "Ultra-Low Noise Floor"].map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 size={14} className="text-gold" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <div className="relative aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
              <Headphones size={80} className="text-[#e0c27a] opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Group */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
             <Reveal delay={0.1}>
               <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[2rem] h-full">
                 <div className="text-gold mb-6"><Globe size={24} /></div>
                 <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Global Reach</h3>
                 <p className="text-xs text-muted-foreground leading-relaxed">
                   Eliminate geographic barriers. Our <Link href="/brazilian-portuguese-voice-over" className="text-gold hover:underline">native Brazilian voice over</Link> service is accessible globally with seamless delivery via cloud storage or direct transfer.
                 </p>
               </div>
             </Reveal>
             <Reveal delay={0.2}>
               <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[2rem] h-full">
                 <div className="text-gold mb-6"><Zap size={24} /></div>
                 <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Agile Sessions</h3>
                 <p className="text-xs text-muted-foreground leading-relaxed">
                   Home studio setups allow for immediate recording sessions. Need a revision or a quick <Link href="/en/voice-over-for-brands" className="text-gold hover:underline">brand spot</Link>? Our turnaround is unmatched in the industry.
                 </p>
               </div>
             </Reveal>
             <Reveal delay={0.3}>
               <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[2rem] h-full">
                 <div className="text-gold mb-6"><ShieldCheck size={24} /></div>
                 <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Quality Assured</h3>
                 <p className="text-xs text-muted-foreground leading-relaxed">
                   We maintain <Link href="/locucao-premium" className="text-gold hover:underline">premium tier standards</Link> on all home studio outputs. Every file is manually inspected for technical perfection before reaching your hands.
                 </p>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Mesh Links Section */}
      <section className="py-16 text-center border-b border-white/5">
        <div className="container-site flex justify-center gap-10 text-[0.65rem] uppercase tracking-widest text-muted-foreground font-semibold">
           <Link href="/en" className="hover:text-gold transition-colors">English Home</Link>
           <Link href="/faq" className="hover:text-gold transition-colors">Tech FAQ</Link>
           <Link href="/briefing" className="hover:text-gold transition-colors">Start Your Brief</Link>
           <Link href="/home-studio-voice-over" className="hover:text-gold transition-colors">Versão em Português</Link>
        </div>
      </section>

      {/* Conversion Focused CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-24 bg-gradient-to-br from-[#111] to-black rounded-[3rem] border border-white/5 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-7xl mb-10">
                Studio Quality <br />
                <span className="text-gold font-light">delivered at speed.</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link 
                  href="/briefing" 
                  className="inline-flex h-16 items-center justify-center px-12 bg-white text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-gold transition-all rounded-md"
                  aria-label="Hire direct from our home studio and send your project briefing"
                >
                  Hire & Send Brief
                </Link>
                <Link 
                  href="/briefing" 
                  className="inline-flex h-16 items-center justify-center px-12 border border-white/20 text-white font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-all rounded-md"
                  aria-label="Request a custom quote for home studio voice over services"
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
