import { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { contact } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact — Green Drift',
  description: 'Get in touch with Green Drift — as a rider, a franchisee partner, an advertiser, or a delivery company.',
};

export default function ContactPage() {
  return (
    <section className="pt-40 pb-28">
      <div className="max-w-[720px] mx-auto px-6">
        <Reveal>
          <span className="eyebrow">GET IN TOUCH</span>
          <h1 className="font-display font-bold uppercase text-[clamp(2rem,4vw,2.8rem)] mt-5">
            Let&rsquo;s talk.
          </h1>
          <p className="text-steel leading-relaxed mt-4">
            Tell us why you&rsquo;re reaching out and we&rsquo;ll route it to the right person.
          </p>
        </Reveal>

        <ContactForm />

        <Reveal delay={0.15}>
          <div className="mt-14 pt-8 border-t border-line text-sm text-steel">
            <div>{contact.email}</div>
            <div className="mt-1">{contact.cities.join(' · ')}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
