import { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import Roadmap from '@/components/Roadmap';
import Departments from '@/components/Departments';
import ClosingCta from '@/components/ClosingCta';

export const metadata: Metadata = {
  title: 'About — Green Drift',
  description: 'Green Drift is an EV rental platform built for the last mile — for riders, franchisee partners, and the brands who move with them.',
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal className="max-w-[680px]">
            <span className="eyebrow">ABOUT GREEN DRIFT</span>
            <h1 className="font-display font-bold uppercase text-[clamp(2rem,5vw,3.2rem)] mt-5 leading-[1.05]">
              The EV rental platform built for the last mile.
            </h1>
            <p className="text-steel text-lg leading-relaxed mt-6 max-w-[560px]">
              Green Drift is an EV company for riders and franchisee partners. We rent electric vehicles to
              riders who need to earn, and we run those fleets on behalf of partners who want dependable,
              transparent monthly income — with hubs built for both riders and last-mile delivery companies.
            </p>
          </Reveal>
        </div>
      </section>

      <Roadmap />
      <Departments />
      <ClosingCta />
    </>
  );
}
