import { Metadata } from 'next';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Privacy Policy — Green Drift',
};

export default function PrivacyPage() {
  return (
    <section className="pt-40 pb-28">
      <div className="max-w-[720px] mx-auto px-6">
        <Reveal>
          <span className="eyebrow">LEGAL</span>
          <h1 className="font-display font-bold uppercase text-[clamp(1.8rem,4vw,2.4rem)] mt-5">
            Privacy Policy
          </h1>
          {/* PLACEHOLDER — needs real legal content. Given the contact form collects name,
              phone/email, and message (app/api/contact/route.ts), and rider KYC will collect
              Aadhaar/PAN/bank details per the product PRD, this page needs to accurately
              describe what's collected, how it's stored, and how long it's retained. */}
          <p className="text-steel leading-relaxed mt-6">
            This page is a placeholder. Once the contact form, rider KYC flow, and franchisee
            dashboard are handling real personal data (including Aadhaar/PAN/bank details per
            the rider onboarding flow), this policy needs to accurately describe what&rsquo;s
            collected, how it&rsquo;s stored, and how long it&rsquo;s retained — see
            CONTENT-AND-ASSETS-CHECKLIST.md, Section 6.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
