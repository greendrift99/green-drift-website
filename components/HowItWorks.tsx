import Reveal from './Reveal';

type Step = { step: string; title: string; body: string };

export default function HowItWorks({ title, steps }: { title: string; steps: Step[] }) {
  return (
    <section>
      <div className="max-w-[1240px] mx-auto px-6 py-20">
        <Reveal>
          <h3 className="font-display font-bold uppercase text-2xl mb-10">{title}</h3>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div className="border border-line rounded-md p-7 h-full bg-surface">
                <span className="font-mono text-leafBright text-sm">{s.step}</span>
                <h4 className="font-display font-bold uppercase text-lg mt-3">{s.title}</h4>
                <p className="text-steel text-sm leading-relaxed mt-2.5">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
