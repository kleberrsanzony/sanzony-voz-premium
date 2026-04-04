import { useEffect } from 'react'
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
import Lenis from 'lenis'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
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
    </div>
  )
}

export default App
