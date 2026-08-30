import Reveal from './Reveal';
import { departments } from '@/lib/content';

export default function Departments() {
  return (
    <section>
      <div className="max-w-[1240px] mx-auto px-6 py-24">
        <Reveal className="max-w-[600px] mb-14">
          <span className="eyebrow">WHAT WE BUILD</span>
          <h2 className="font-display font-bold uppercase text-[clamp(1.6rem,3vw,2.2rem)] mt-4">
            One platform, six systems, working together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-3 border border-line rounded-lg overflow-hidden bg-line">
            {departments.map((d) => (
              <div key={d.idx} className="bg-surface p-8 hover:bg-surface2 transition-colors duration-200">
                <span className="font-mono text-xs text-leafBright">{d.idx}</span>
                <h3 className="font-display font-bold uppercase text-lg mt-3.5">{d.title}</h3>
                <p className="text-steel text-sm leading-relaxed mt-2.5">{d.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
