import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import DemoSection from "@/components/sections/DemoSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CertificateSection from "@/components/sections/CertificateSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import AuthoritySection from "@/components/sections/AuthoritySection";

export const metadata: Metadata = {
  title: "Sanzonÿ | Locutor Profissional | +20 Anos de Experiência",
  description: "Sanzonÿ — locutor profissional com mais de 20 anos de experiência em locução para publicidade, audiovisual e projetos corporativos. Qualidade broadcast. Solicite agora.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <AuthoritySection />
      <div className="section-divider" />
      <DemoSection />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <ProcessSection />
      <div className="section-divider" />
      <CertificateSection />
      <div className="section-divider" />
      <CTASection />
      <Footer />
    </main>
  );
}
