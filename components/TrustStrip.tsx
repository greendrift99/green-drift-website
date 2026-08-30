import { trustStrip } from '@/lib/content';

export default function TrustStrip() {
  return (
    <div className="border-y border-line bg-surface">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
        {trustStrip.map((item, i) => (
          <div
            key={item.label}
            className={`py-8 px-5 text-center ${i < trustStrip.length - 1 ? 'md:border-r border-line' : ''}`}
          >
            <div className="font-display font-bold text-2xl text-paper">{item.value}</div>
            <div className="font-mono text-[0.7rem] uppercase tracking-widest text-steel mt-1.5">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
