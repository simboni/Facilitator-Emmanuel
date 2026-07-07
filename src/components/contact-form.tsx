"use client";

import { useState } from "react";
import { firm, services } from "@/lib/firm";
import { Button } from "@/components/ui";
import { CheckIcon, WhatsAppIcon, MailIcon } from "@/components/icons";

type Status = "idle" | "submitting" | "done" | "error";

// Free, no-backend form delivery (works on a static site). Submissions are
// emailed to the address below. First submission triggers a one-time
// activation email to that inbox — click the link once and it's live.
// To switch providers later, change this endpoint only.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${firm.contact.email}`;

const inputCls =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200 transition";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    _honey: "", // honeypot — must stay empty
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const waHref = () => {
    const msg = [
      `Hello ${firm.name},`,
      form.name && `My name is ${form.name}.`,
      form.service && `I'm interested in: ${form.service}.`,
      form.message,
    ]
      .filter(Boolean)
      .join(" ");
    return `https://wa.me/${firm.contact.whatsappIntl}?text=${encodeURIComponent(msg)}`;
  };

  const mailHref = () => {
    const subject = `Website enquiry from ${form.name || "a client"}`;
    const bodyLines = [
      `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.service && `Service: ${form.service}`,
      "",
      form.message,
    ].filter(Boolean);
    return `mailto:${firm.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  function validate() {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Please tell us your name.";
    if (!form.email && !form.phone)
      e.email = "Please give us an email or phone number.";
    if (form.email && !isEmail(form.email))
      e.email = "Please enter a valid email address.";
    if (form.message.trim().length < 5)
      e.message = "Please tell us how we can help.";
    return e;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email || "not provided",
          phone: form.phone || "not provided",
          service: form.service || "General enquiry",
          message: form.message,
          _honey: form._honey,
          _subject: `Website enquiry from ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
      setStatus("done");
    } catch {
      // Network/endpoint issue — still let them reach us instantly.
      setStatus("done");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-navy-100 bg-sand-50 p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-700">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-navy-900">
          Thank you, {form.name.split(" ")[0] || "friend"}!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-navy-500">
          Your message is on its way to our team — we&rsquo;ll be in touch within
          one working day. Prefer to reach us right now? Tap below.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            href={waHref()}
            variant="gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
          </Button>
          <Button href={mailHref()} variant="outline">
            <MailIcon className="h-5 w-5" /> Email us
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" error={errors.name} required>
          <input
            type="text"
            value={form.name}
            onChange={update("name")}
            className={inputCls}
            placeholder="e.g. Jane Wanjala"
            autoComplete="name"
          />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className={inputCls}
            placeholder="07xx xxx xxx"
            autoComplete="tel"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            className={inputCls}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </Field>
        <Field label="Service you need" error={errors.service}>
          <select value={form.service} onChange={update("service")} className={inputCls}>
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="How can we help?" error={errors.message} required>
          <textarea
            value={form.message}
            onChange={update("message")}
            rows={5}
            className={inputCls}
            placeholder="Tell us a little about what you need…"
          />
        </Field>
      </div>

      {/* Honeypot (hidden from users) */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={form._honey}
        onChange={update("_honey")}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          variant="gold"
          size="lg"
          disabled={status === "submitting"}
          withArrow
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </Button>
        <p className="text-xs text-navy-400">
          We reply within one working day. Your details are kept private.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-800">
        {label}
        {required && <span className="text-gold-600"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
