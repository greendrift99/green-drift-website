import Reveal from './Reveal';
import { testimonials } from '@/lib/content';

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-[1240px] mx-auto px-6 py-24">
        <Reveal className="max-w-[600px] mb-12">
          <span className="eyebrow">WHAT OUR RIDERS SAY</span>
          <h2 className="font-display font-bold uppercase text-[clamp(1.6rem,3vw,2.2rem)] mt-4">
            Real riders. Real earnings.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.08}>
              <div className="border border-line rounded-md p-7 h-full bg-surface flex flex-col">
                {/* PLACEHOLDER — rider photo */}
                <div className="w-12 h-12 rounded-full bg-surface2 border border-line mb-5" />
                <p className="text-[0.95rem] leading-relaxed text-paper flex-1">&ldquo;{t.quote}&rdquo;</p>
                <span className="font-mono text-xs text-steelDim mt-5 uppercase tracking-wider">{t.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
