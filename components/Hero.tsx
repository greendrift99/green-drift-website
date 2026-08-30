'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { heroSlides } from '@/lib/content';

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % heroSlides.length), []);
  const goTo = (i: number) => setIndex(i);

  useEffect(() => {
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next]);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-ink">
      {/* Ambient gradient wash, echoing the logo's leaf glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 900px 500px at 15% 10%, rgba(47,125,50,0.24), transparent 60%), radial-gradient(ellipse 700px 500px at 100% 30%, rgba(143,224,90,0.10), transparent 60%)',
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image ?? `placeholder-${index}`}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-0 z-0 bg-surface2"
          aria-hidden
        >
          {slide.image ? (
            <>
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
              {/* Scrim so hero text stays readable over a photo */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(10,15,12,0.92) 0%, rgba(10,15,12,0.68) 38%, rgba(10,15,12,0.25) 65%, rgba(10,15,12,0.05) 100%)',
                }}
              />
            </>
          ) : (
            /* PLACEHOLDER background — a drift-curve signature stands in until real
               photography lands for this slide (see CONTENT-AND-ASSETS-CHECKLIST.md) */
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1180 520" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <path
                d="M-40 380 C 220 380, 260 120, 520 140 C 760 158, 820 340, 1220 300"
                fill="none"
                stroke="url(#heroDriftGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />
              <defs>
                <linearGradient id="heroDriftGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2f7d32" stopOpacity="0" />
                  <stop offset="35%" stopColor="#8fe05a" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#8fe05a" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.headline}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
            className="max-w-[640px]"
          >
            <span className="eyebrow">{slide.eyebrow}</span>
            <h1 className="font-display font-bold uppercase leading-[0.98] text-[clamp(2.2rem,6vw,4.2rem)] mt-5 whitespace-pre-line">
              {slide.headline}
            </h1>
            <p className="text-steel text-[1.05rem] leading-relaxed mt-6 max-w-[480px]">{slide.sub}</p>
            <Link
              href={slide.cta.href}
              className="inline-flex mt-9 px-6 py-3.5 rounded-sm bg-gradient-to-br from-leafBright to-leafDeep text-ink font-semibold text-sm hover:shadow-[0_6px_28px_rgba(143,224,90,0.3)] transition-shadow duration-200"
            >
              {slide.cta.label}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators — Ather-style dash controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2.5">
        {heroSlides.map((s, i) => (
          <button
            key={s.headline}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? 'w-9 bg-leafBright' : 'w-4 bg-steel/30 hover:bg-steel/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
