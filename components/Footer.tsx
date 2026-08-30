import Link from 'next/link';
import Image from 'next/image';
import { contact } from '@/lib/content';

const columns = [
  {
    title: 'Riders',
    links: [
      { label: 'How it works', href: '/riders' },
      { label: 'Plans & pricing', href: '/riders' },
      { label: 'Battery swap map', href: '/hubs' },
    ],
  },
  {
    title: 'Partners',
    links: [
      { label: 'Investment tiers', href: '/partners' },
      { label: 'How payout works', href: '/partners' },
      { label: 'Apply', href: '/partners' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Hubs', href: '/hubs' },
      { label: 'Advertise with us', href: '/advertise' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Talk to us', href: '/contact' },
      { label: contact.email, href: `mailto:${contact.email}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line pt-14 pb-8">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/logo/logo-icon-transparent.png"
                alt="Green Drift"
                width={26}
                height={17}
                className="h-[22px] w-auto"
              />
              <span className="font-display font-bold text-base tracking-wide uppercase">
                Green<span className="text-leafBright">Drift</span>
              </span>
            </div>
            <p className="text-steel text-sm leading-relaxed mt-3 max-w-[220px]">
              The EV rental platform built for the last mile.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="font-mono text-[0.7rem] uppercase tracking-widest text-steelDim mb-3">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-steel hover:text-paper transition-colors duration-150">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-line mt-11 pt-5 flex flex-wrap justify-between gap-x-6 gap-y-3 text-steelDim text-xs font-mono">
          <span>© {new Date().getFullYear()} GREEN DRIFT MOBILITY PVT. LTD.</span>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-steel transition-colors duration-150">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-steel transition-colors duration-150">
              Privacy Policy
            </Link>
          </div>
          <span>{contact.cities.join(' · ').toUpperCase()}, INDIA</span>
        </div>
      </div>
    </footer>
  );
}
