import { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import ClosingCta from '@/components/ClosingCta';
import { contact } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Hubs — Green Drift',
  description: 'Green Drift hubs serve riders and last-mile delivery companies directly — battery swaps, servicing, and fleet pickup in one place.',
};

export default function HubsPage() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal className="max-w-[640px]">
            <span className="eyebrow">HUBS</span>
            <h1 className="font-display font-bold uppercase text-[clamp(2rem,5vw,3.4rem)] mt-5 leading-[1.02]">
              Built for riders.
              <br />
              Built for delivery fleets.
            </h1>
            <p className="text-steel text-lg leading-relaxed mt-6 max-w-[520px]">
              Every Green Drift hub is dedicated infrastructure — battery swaps, servicing, and vehicle
              pickup — serving individual riders and last-mile delivery companies from the same location.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface2">
        <div className="max-w-[1240px] mx-auto px-6 py-20">
          <Reveal className="max-w-[600px] mb-10">
            <h2 className="font-display font-bold uppercase text-2xl">Live cities</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {contact.cities.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full border border-line font-mono text-xs uppercase tracking-widest text-steel"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="font-mono text-[0.68rem] text-steelDim mt-6">
              PLACEHOLDER — update this list as hubs go live, city by city.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="max-w-[1240px] mx-auto px-6 py-20">
          <Reveal className="max-w-[600px]">
            <span className="eyebrow">FOR DELIVERY COMPANIES</span>
            <h2 className="font-display font-bold uppercase text-2xl mt-4">
              Bulk fleet supply, SLA-backed.
            </h2>
            <p className="text-steel leading-relaxed mt-4">
              Running a delivery operation and need reliable EV supply at scale? Talk to us about dedicated
              hub capacity and fleet-level service agreements.
            </p>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
