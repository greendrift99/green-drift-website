'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const reasons = [
  'Become a rider',
  'Become a franchisee partner',
  'Advertise your brand',
  'Delivery company partnership',
  'Something else',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      reason: data.get('reason'),
      name: data.get('name'),
      contactInfo: data.get('contactInfo'),
      message: data.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong. Please try again.');
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <Reveal delay={0.1}>
        <div className="mt-10 border border-line rounded-md p-8 bg-surface">
          <h3 className="font-display font-bold uppercase text-xl text-leafBright">Message sent.</h3>
          <p className="text-steel text-sm leading-relaxed mt-3">
            Thanks for reaching out — we&rsquo;ll get back to you shortly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 px-5 py-2.5 rounded-sm border border-line text-sm font-semibold hover:bg-surface2 transition-colors duration-150"
          >
            Send another message
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={0.1}>
      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
        <div>
          <label htmlFor="reason" className="font-mono text-xs uppercase tracking-widest text-steelDim block mb-2">
            I&rsquo;m reaching out to
          </label>
          <select
            id="reason"
            name="reason"
            className="w-full bg-surface border border-line rounded-sm px-4 py-3 text-sm"
            defaultValue={reasons[0]}
          >
            {reasons.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-steelDim block mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-surface border border-line rounded-sm px-4 py-3 text-sm"
            />
          </div>
          <div>
            <label htmlFor="contactInfo" className="font-mono text-xs uppercase tracking-widest text-steelDim block mb-2">
              Phone or email
            </label>
            <input
              id="contactInfo"
              name="contactInfo"
              type="text"
              required
              className="w-full bg-surface border border-line rounded-sm px-4 py-3 text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-steelDim block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full bg-surface border border-line rounded-sm px-4 py-3 text-sm"
          />
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-400 font-mono">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-2 px-6 py-3.5 rounded-sm bg-gradient-to-br from-leafBright to-leafDeep text-ink font-semibold text-sm self-start disabled:opacity-60 transition-opacity duration-150"
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </Reveal>
  );
}
