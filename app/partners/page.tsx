import { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import HowItWorks from '@/components/HowItWorks';
import ClosingCta from '@/components/ClosingCta';
import { howItWorksPartner } from '@/lib/content';

export const metadata: Metadata = {
  title: 'For Franchisee Partners — Green Drift',
  description: 'Own a Green Drift EV fleet. Start with 5 vehicles, one 3-year contract, one fixed monthly payout — and a live dashboard that shows you everything.',
};

// PLACEHOLDER — replace with real, legally-reviewed tier structure and figures before launch
const tiers = [
  {
    name: 'Starter',
    vehicles: '5 vehicles',
    ticket: 'PLACEHOLDER ₹',
    body: 'The entry point — five vehicles, registered in your name, fully managed by Green Drift.',
  },
  {
    name: 'Growth',
    vehicles: 'Multi-unit',
    ticket: 'PLACEHOLDER ₹',
    body: 'Scale linearly with vehicle count. Priority hub allocation as fleet size grows.',
  },
  {
    name: 'Hub-Level',
    vehicles: 'Full hub',
    ticket: 'PLACEHOLDER ₹',
    body: 'Larger investment including hub infrastructure and a bigger allocated fleet.',
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <Reveal className="max-w-[640px]">
            <span className="eyebrow">FOR FRANCHISEE PARTNERS</span>
            <h1 className="font-display font-bold uppercase text-[clamp(2rem,5vw,3.4rem)] mt-5 leading-[1.02]">
              Own a fleet.
              <br />
              Get paid every month.
            </h1>
            <p className="text-steel text-lg leading-relaxed mt-6 max-w-[520px]">
              Most EV franchise pitches sound the same: own the asset, get a fixed payout, trust us. Green
              Drift shows you — live utilization, live maintenance logs, live payout history.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface2">
        <div className="max-w-[1240px] mx-auto px-6 py-20">
          <Reveal>
            <h2 className="font-display font-bold uppercase text-2xl mb-10">Investment tiers</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="border border-line rounded-md p-8 bg-surface h-full flex flex-col">
                  <span className="font-mono text-xs text-leafBright uppercase tracking-widest">{t.vehicles}</span>
                  <h3 className="font-display font-bold uppercase text-xl mt-3">{t.name}</h3>
                  <div className="font-mono text-steel text-sm mt-2">{t.ticket} · 3-year contract</div>
                  <p className="text-steel text-sm leading-relaxed mt-4 flex-1">{t.body}</p>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex justify-center px-5 py-3 rounded-sm bg-gradient-to-br from-steel to-steelDim text-ink font-semibold text-sm"
                  >
                    Apply as a partner
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="font-mono text-[0.68rem] text-steelDim mt-8">
            Ticket sizes and payout figures shown are placeholders pending legal and finance review — do not
            publish live without confirmed numbers.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-[1240px] mx-auto px-6 py-20">
          <Reveal className="max-w-[600px]">
            <span className="eyebrow">YOUR DASHBOARD</span>
            <h2 className="font-display font-bold uppercase text-2xl mt-4">
              See your fleet, live — not a promise.
            </h2>
            <p className="text-steel leading-relaxed mt-4">
              Every vehicle you own is visible to you: live utilization, live maintenance logs, live payout
              history. No other EV fleet company in India shows you this by default.
            </p>
          </Reveal>
        </div>
      </section>

      <HowItWorks title="How partnership works" steps={howItWorksPartner} />
      <ClosingCta />
    </>
  );
}
