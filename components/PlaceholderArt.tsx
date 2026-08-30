'use client';

// A restrained, on-brand stand-in for real photography/screenshots. Renders an abstract
// route-line motif in the Green Drift palette so empty sections read as "designed, awaiting
// real assets" rather than "broken". Swap for next/image once real photography lands —
// see CONTENT-AND-ASSETS-CHECKLIST.md.

const variants = {
  rider: {
    label: 'Rider photography',
    path: 'M-10 90 C 60 90, 90 20, 160 40 C 220 56, 240 110, 320 95',
  },
  partner: {
    label: 'Fleet / dashboard visual',
    path: 'M-10 40 C 70 40, 80 100, 160 70 C 230 45, 250 100, 320 60',
  },
  advertise: {
    label: 'Branded fleet visual',
    path: 'M-10 70 C 80 20, 120 120, 200 60 C 250 25, 270 90, 320 50',
  },
} as const;

export default function PlaceholderArt({ variant = 'rider' }: { variant?: keyof typeof variants }) {
  const v = variants[variant];
  return (
    <div className="aspect-[4/3.1] rounded-lg border border-line bg-surface relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(143,224,90,0.14), transparent 55%)',
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 320 130"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d={v.path} fill="none" stroke="url(#placeholderGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
        <defs>
          <linearGradient id="placeholderGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2f7d32" stopOpacity="0" />
            <stop offset="50%" stopColor="#8fe05a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8fe05a" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2.5 px-6 text-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-steelDim">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="11" r="2" />
            <path d="M21 15l-4.5-4.5a1 1 0 0 0-1.4 0L9 17" />
          </svg>
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-steelDim">
            {v.label} pending
          </span>
        </div>
      </div>
    </div>
  );
}
