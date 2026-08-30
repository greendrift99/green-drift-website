import Link from 'next/link';
import Image from 'next/image';
import Reveal from './Reveal';
import PlaceholderArt from './PlaceholderArt';
import { audiences } from '@/lib/content';

const artVariant: Record<string, 'rider' | 'partner' | 'advertise'> = {
  riders: 'rider',
  partners: 'partner',
  advertise: 'advertise',
};

// Real photography available so far — keyed by audience. Add entries here as more
// real assets land (see CONTENT-AND-ASSETS-CHECKLIST.md); anything not listed keeps
// using PlaceholderArt automatically.
const realImages: Partial<Record<string, string>> = {
  riders: '/images/hero-rider-sealink.jpg',
};

export default function AudienceSection() {
  return (
    <>
      {audiences.map((a, i) => (
        <section key={a.key} id={a.key} className={i % 2 === 1 ? 'bg-surface2' : ''}>
          <div className="max-w-[1240px] mx-auto px-6 py-24 md:py-28">
            <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
              <Reveal className={i % 2 === 1 ? '[direction:ltr]' : ''}>
                <span className="eyebrow">{a.eyebrow}</span>
                <h2 className="font-display font-bold uppercase text-[clamp(1.6rem,3vw,2.2rem)] mt-4 leading-tight">
                  {a.title}
                </h2>
                <p className="text-steel leading-relaxed mt-5 max-w-[480px]">{a.body}</p>
                <ul className="flex flex-col gap-3.5 mt-7">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-3 items-start text-[0.95rem] leading-relaxed">
                      <svg className="shrink-0 w-[18px] h-[18px] mt-0.5 text-leafBright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={a.cta.href}
                  className="inline-flex mt-8 px-5 py-3 rounded-sm bg-gradient-to-br from-leafBright to-leafDeep text-ink font-semibold text-sm hover:shadow-[0_6px_24px_rgba(143,224,90,0.28)] transition-shadow duration-200"
                >
                  {a.cta.label}
                </Link>
              </Reveal>

              <Reveal delay={0.1} className={i % 2 === 1 ? '[direction:ltr]' : ''}>
                {realImages[a.key] ? (
                  <div className="aspect-[4/3.1] rounded-lg border border-line overflow-hidden relative">
                    <Image
                      src={realImages[a.key] as string}
                      alt={a.title}
                      fill
                      sizes="(min-width: 768px) 560px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <PlaceholderArt variant={artVariant[a.key] ?? 'rider'} />
                )}
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
