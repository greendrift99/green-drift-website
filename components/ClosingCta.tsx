import Link from 'next/link';
import Reveal from './Reveal';

export default function ClosingCta() {
  return (
    <section className="text-center py-28 px-6">
      <Reveal className="max-w-[720px] mx-auto">
        <span className="eyebrow">READY WHEN YOU ARE</span>
        <h2 className="font-display font-bold uppercase text-[clamp(1.8rem,4vw,2.8rem)] mt-5 leading-tight">
          Ride today. Invest for the next three years. Talk to us about anything bigger.
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link
            href="/riders"
            className="px-6 py-3.5 rounded-sm bg-gradient-to-br from-leafBright to-leafDeep text-ink font-semibold text-sm hover:shadow-[0_6px_24px_rgba(143,224,90,0.28)] transition-shadow duration-200"
          >
            Ride with Green Drift
          </Link>
          <Link
            href="/partners"
            className="px-6 py-3.5 rounded-sm bg-gradient-to-br from-steel to-steelDim text-ink font-semibold text-sm hover:shadow-[0_6px_24px_rgba(195,203,209,0.22)] transition-shadow duration-200"
          >
            Invest with Green Drift
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-sm border border-line font-semibold text-sm hover:bg-surface2 transition-colors duration-200"
          >
            Talk to us
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
