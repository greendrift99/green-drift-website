import { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import ClosingCta from '@/components/ClosingCta';

export const metadata: Metadata = {
  title: 'Advertise With Us — Green Drift',
  description: 'Put your brand on a Green Drift fleet that\'s on the road all day, every day, in the neighborhoods that matter to you.',
};

const formats = [
  { title: 'Fleet Wrap', body: 'Full or partial vehicle livery across a defined fleet size and city.' },
  { title: 'Hub Branding', body: 'Signage and presence at Green Drift hubs — where riders swap batteries daily.' },
  { title: 'City Campaign', body: 'A time-boxed push across a whole city\'s fleet for a launch or seasonal moment.' },
];

export default function AdvertisePage() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal className="max-w-[640px]">
            <span className="eyebrow">ADVERTISE WITH US</span>
            <h1 className="font-display font-bold uppercase text-[clamp(2rem,5vw,3.4rem)] mt-5 leading-[1.02]">
              Your brand.
              <br />
              Moving through the city.
            </h1>
            <p className="text-steel text-lg leading-relaxed mt-6 max-w-[520px]">
              A Green Drift fleet is on the road all day, in the neighborhoods your customers already live in.
              Wrap the fleet, sponsor a hub, or run a city-level campaign.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface2">
        <div className="max-w-[1240px] mx-auto px-6 py-20">
          <Reveal>
            <h2 className="font-display font-bold uppercase text-2xl mb-10">Formats</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="border border-line rounded-md p-8 bg-surface h-full">
                  <h3 className="font-display font-bold uppercase text-lg">{f.title}</h3>
                  <p className="text-steel text-sm leading-relaxed mt-3">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1240px] mx-auto px-6 py-20">
          <Reveal className="max-w-[600px]">
            <span className="eyebrow">REPORTING</span>
            <h2 className="font-display font-bold uppercase text-2xl mt-4">
              See what your campaign actually reaches.
            </h2>
            <p className="text-steel leading-relaxed mt-4">
              {/* PLACEHOLDER — confirm what reporting Green Drift can actually provide before publishing claims */}
              Impressions, routes covered, and active hours — reporting detail to be confirmed against what the
              fleet telematics system can actually measure.
            </p>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
