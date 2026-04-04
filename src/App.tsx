import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DemoSection from '@/components/DemoSection'
import PositioningSection from '@/components/PositioningSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import StudioSection from '@/components/StudioSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const App = () => (
  <div className="grain-overlay">
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
    <WhatsAppButton />
  </div>
)

export default App
