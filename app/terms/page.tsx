import { Metadata } from 'next';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Green Drift',
};

export default function TermsPage() {
  return (
    <section className="pt-40 pb-28">
      <div className="max-w-[720px] mx-auto px-6">
        <Reveal>
          <span className="eyebrow">LEGAL</span>
          <h1 className="font-display font-bold uppercase text-[clamp(1.8rem,4vw,2.4rem)] mt-5">
            Terms &amp; Conditions
          </h1>
          {/* PLACEHOLDER — this page needs real legal content before launch.
              Rider rental terms, franchise contract terms, and platform usage terms
              likely need to be drafted by counsel — do not launch with this placeholder live. */}
          <p className="text-steel leading-relaxed mt-6">
            This page is a placeholder. Rider rental terms, franchisee contract terms, and
            general platform usage terms need to be drafted and reviewed by counsel before
            this goes live — see CONTENT-AND-ASSETS-CHECKLIST.md, Section 6.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
