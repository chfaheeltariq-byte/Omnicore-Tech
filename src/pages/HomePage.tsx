import { AboutSection } from '../components/AboutSection'
import { CompactServicesSection } from '../components/CompactServicesSection'
import { ContactSection } from '../components/ContactSection'
import { CTASection } from '../components/CTASection'
import { FAQSection } from '../components/FAQSection'
import { HeroSection } from '../components/HeroSection'
import { PremiumServicesExperience } from '../components/PremiumServicesExperience'
import { AIInnovationSection } from '../components/AIInnovationSection'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { ProjectShowcase } from '../components/ProjectShowcase'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { WhyChooseUs } from '../components/WhyChooseUs'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div className="md:hidden">
        <CompactServicesSection />
      </div>
      <div className="hidden md:block">
        <PremiumServicesExperience />
      </div>
      <ProcessTimeline />
      <div className="hidden md:block">
        <AIInnovationSection />
      </div>
      <ProjectShowcase />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <div className="hidden md:block">
        <CTASection />
      </div>
      <ContactSection />
    </>
  )
}
