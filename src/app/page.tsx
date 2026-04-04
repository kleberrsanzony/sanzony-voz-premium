import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import DemoSection from "@/components/sections/DemoSection";
import PositioningSection from "@/components/sections/PositioningSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StudioSection from "@/components/sections/StudioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DemoSection />
      <PositioningSection />
      <ServicesSection />
      <ProcessSection />
      <StudioSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
