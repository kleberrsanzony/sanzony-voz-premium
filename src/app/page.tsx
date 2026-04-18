import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import DemoSection from "@/components/sections/DemoSection";
import PositioningSection from "@/components/sections/PositioningSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StudioSection from "@/components/sections/StudioSection";
import CertificateSection from "@/components/sections/CertificateSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Sanzony.Voz Elite | Presença e Autoridade",
  description: "Voz de autoridade para campanhas globais, marcas premium e projetos que exigem impacto. Qualidade broadcast e entrega de elite em tempo recorde.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <div className="section-divider" />
      <DemoSection />
      <div className="section-divider" />
      <PositioningSection />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <ProcessSection />
      <div className="section-divider" />
      <StudioSection />
      <div className="section-divider" />
      <CertificateSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <CTASection />
      <Footer />
    </main>
  );
}
