import Reveal from './Reveal';
import { roadmap } from '@/lib/content';

export default function Roadmap() {
  return (
    <section className="bg-surface2">
      <div className="max-w-[1240px] mx-auto px-6 py-24">
        <Reveal className="max-w-[600px] mb-14">
          <span className="eyebrow">OUR VISION &amp; FUTURE</span>
          <h2 className="font-display font-bold uppercase text-[clamp(1.6rem,3vw,2.2rem)] mt-4">
            A named roadmap, not a vague promise.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-5 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-3 left-0 right-0 h-[2px] bg-gradient-to-r from-leafDeep to-leafBright" />
            {roadmap.map((r) => (
              <div key={r.phase} className="relative pt-9">
                <div
                  className={`absolute top-0 left-0 w-6 h-6 rounded-full border-2 flex items-center justify-center bg-ink ${
                    r.final ? 'border-leafBright' : 'border-leafBright'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${r.final ? 'bg-gradient-to-br from-leafBright to-leafDeep' : 'bg-leafBright'}`}
                  />
                </div>
                <span className={`font-mono text-[0.7rem] uppercase tracking-wider ${r.final ? 'text-leafBright' : 'text-leafBright'}`}>
                  {r.phase}
                </span>
                <h4 className="font-display font-bold uppercase text-base mt-2">{r.title}</h4>
                <p className="text-steel text-sm leading-relaxed mt-1.5">{r.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
