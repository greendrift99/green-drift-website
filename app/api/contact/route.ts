import { NextRequest, NextResponse } from 'next/server';

// This route validates and logs contact submissions. It's the wiring point for a real
// destination — swap the TODO block below for an email send (e.g. Resend, SendGrid), a
// CRM webhook, or a database write, once you've picked one. See CONTENT-AND-ASSETS-CHECKLIST.md.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { reason, name, contactInfo, message } = body ?? {};

    if (!name || !contactInfo || !message) {
      return NextResponse.json(
        { ok: false, error: 'Name, contact info, and message are all required.' },
        { status: 400 }
      );
    }

    // TODO: replace this log with a real destination before launch —
    // e.g. send via an email provider, POST to a CRM webhook, or write to a database.
    console.log('[Green Drift contact form submission]', {
      reason,
      name,
      contactInfo,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Could not process submission.' }, { status: 500 });
  }
}
