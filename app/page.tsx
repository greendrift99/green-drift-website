import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import AudienceSection from '@/components/AudienceSection';
import SavingsCalculator from '@/components/SavingsCalculator';
import Roadmap from '@/components/Roadmap';
import Departments from '@/components/Departments';
import Testimonials from '@/components/Testimonials';
import ClosingCta from '@/components/ClosingCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AudienceSection />
      <SavingsCalculator />
      <Roadmap />
      <Departments />
      <Testimonials />
      <ClosingCta />
    </>
  );
}
