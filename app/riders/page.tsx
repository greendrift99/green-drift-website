import { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import HowItWorks from '@/components/HowItWorks';
import SavingsCalculator from '@/components/SavingsCalculator';
import Testimonials from '@/components/Testimonials';
import ClosingCta from '@/components/ClosingCta';
import { howItWorksRider } from '@/lib/content';

export const metadata: Metadata = {
  title: 'For Riders — Green Drift',
  description: 'Rent a Green Drift EV and start earning today. No large upfront cost, fast battery swaps, transparent plans.',
};

// PLACEHOLDER — replace with real, confirmed plan pricing before launch
const plans = [
  { name: 'Daily Flex', price: 'PLACEHOLDER ₹/day', body: 'Pay as you ride. Best for trying it out.' },
  { name: 'Weekly', price: 'PLACEHOLDER ₹/week', body: 'Best for riders working most days of the week.' },
  { name: 'Monthly', price: 'PLACEHOLDER ₹/month', body: 'Lowest effective daily cost. Best value for full-time riders.' },
];

export default function RidersPage() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal className="max-w-[640px]">
            <span className="eyebrow">FOR RIDERS</span>
            <h1 className="font-display font-bold uppercase text-[clamp(2rem,5vw,3.4rem)] mt-5 leading-[1.02]">
              Ride more.
              <br />
              Spend less.
              <br />
              Worry less.
            </h1>
            <p className="text-steel text-lg leading-relaxed mt-6 max-w-[520px]">
              Every rupee of fuel and repair cost comes straight out of your day&rsquo;s earnings. Rent a Green
              Drift EV instead — lower running cost, fast battery swaps, and support when you need it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface2">
        <div className="max-w-[1240px] mx-auto px-6 py-20">
          <Reveal>
            <h2 className="font-display font-bold uppercase text-2xl mb-10">Plans</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="border border-line rounded-md p-8 bg-surface h-full flex flex-col">
                  <h3 className="font-display font-bold uppercase text-xl">{p.name}</h3>
                  <div className="font-mono text-leafBright text-sm mt-3">{p.price}</div>
                  <p className="text-steel text-sm leading-relaxed mt-4 flex-1">{p.body}</p>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex justify-center px-5 py-3 rounded-sm bg-gradient-to-br from-leafBright to-leafDeep text-ink font-semibold text-sm"
                  >
                    Get started
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks title="How to join" steps={howItWorksRider} />
      <SavingsCalculator />
      <Testimonials />
      <ClosingCta />
    </>
  );
}
