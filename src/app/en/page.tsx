"use client";
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
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function EnglishHome() {
  const { setLanguage } = useLanguage();

  // Force language to English for this route
  useEffect(() => {
    setLanguage("en");
  }, [setLanguage]);

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
