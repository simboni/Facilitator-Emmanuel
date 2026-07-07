import { NextResponse } from "next/server";
import { firm } from "@/lib/firm";

// ---------------------------------------------------------------------------
// Contact form handler.
//
// Delivery: if a RESEND_API_KEY environment variable is configured, the
// message is emailed to the firm via Resend (https://resend.com — free tier
// is plenty for a firm this size). Until then, the endpoint validates and
// accepts the submission and reports `delivered: false`, so the front-end can
// offer the visitor a WhatsApp / email fallback that always gets through.
//
// To enable real email delivery later, set in the hosting environment:
//   RESEND_API_KEY=re_xxx
//   CONTACT_TO=jsmisiati@gmail.com   (optional, defaults to the firm email)
//   CONTACT_FROM=onboarding@resend.dev  (a verified sender)
// ---------------------------------------------------------------------------

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  company?: string; // honeypot — must stay empty
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept bots without doing anything.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const service = (body.service ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!email && !phone) errors.email = "Please give us an email or phone number.";
  if (email && !isEmail(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 5) errors.message = "Please tell us how we can help.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const to = process.env.CONTACT_TO || firm.contact.email;
  const from = process.env.CONTACT_FROM || "onboarding@resend.dev";
  const apiKey = process.env.RESEND_API_KEY;

  const text = [
    `New website enquiry — ${firm.name}`,
    "",
    `Name:    ${name}`,
    `Email:   ${email || "—"}`,
    `Phone:   ${phone || "—"}`,
    `Service: ${service || "General enquiry"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${firm.name} Website <${from}>`,
          to: [to],
          reply_to: email || undefined,
          subject: `Website enquiry from ${name}`,
          text,
        }),
      });
      if (!res.ok) throw new Error(`Resend responded ${res.status}`);
      return NextResponse.json({ ok: true, delivered: true });
    } catch (err) {
      console.error("Contact email failed:", err);
      // Fall through to the accepted-but-not-delivered response.
    }
  } else {
    // No provider configured yet — log so nothing is lost in dev.
    console.info("[contact] enquiry received (no email provider configured):\n", text);
  }

  return NextResponse.json({ ok: true, delivered: false });
}
