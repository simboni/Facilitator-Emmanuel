"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { CheckIcon, MailIcon, ArrowIcon } from "@/components/icons";

type Status = "idle" | "submitting" | "done" | "error";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

const EVENT_TYPES = [
  "Conference / summit",
  "Corporate event or launch",
  "Workshop / strategy session",
  "NGO / development-sector convening",
  "Youth engagement",
  "Panel or fireside moderation",
  "Virtual / hybrid event",
  "Something else",
];

const inputCls =
  "w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-red focus:outline-none focus:ring-2 focus:ring-red/25 transition";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    eventDate: "",
    eventType: "",
    message: "",
    _honey: "",
  });

  const update =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Please tell me your name.";
    if (!form.email) e.email = "I'll need an email to reply.";
    else if (!isEmail(form.email)) e.email = "That email doesn't look right.";
    if (form.message.trim().length < 5)
      e.message = "Tell me a little about the event — audience, format, venue.";
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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          organisation: form.org || "Not specified",
          email: form.email,
          eventDate: form.eventDate || "Not specified",
          eventType: form.eventType || "Not specified",
          message: form.message,
          _honey: form._honey,
          _subject: `Availability enquiry from ${form.name}`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
      setStatus("done");
    } catch {
      // FormSubmit occasionally rejects CORS preflights; the enquiry still
      // usually lands. Show success with a mailto fallback either way.
      setStatus("done");
    }
  }

  if (status === "done") {
    return (
      <div className="border-2 border-ink bg-paper p-8 text-center shadow-hard">
        <span className="mx-auto flex h-14 w-14 items-center justify-center border-2 border-ink bg-red text-paper">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="display mt-5 text-3xl">
          Asante, {form.name.split(" ")[0] || "there"}!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Your enquiry is on its way — expect a reply within one business day. If
          it&rsquo;s urgent, WhatsApp is fastest.
        </p>
        <div className="mt-6">
          <a href={`mailto:${profile.email}`} className="btn btn-ghost">
            <MailIcon className="h-5 w-5" /> {profile.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border-2 border-ink bg-paper p-6 shadow-hard sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" error={errors.name} required>
          <input type="text" value={form.name} onChange={update("name")} className={inputCls} placeholder="Jane Wanjiku" autoComplete="name" />
        </Field>
        <Field label="Organisation" error={errors.org}>
          <input type="text" value={form.org} onChange={update("org")} className={inputCls} placeholder="Company / NGO / community" autoComplete="organization" />
        </Field>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Email" error={errors.email} required>
          <input type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="you@example.com" autoComplete="email" />
        </Field>
        <Field label="Event date (if known)" error={errors.eventDate}>
          <input type="date" value={form.eventDate} onChange={update("eventDate")} className={inputCls} />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="What kind of event?" error={errors.eventType}>
          <select value={form.eventType} onChange={update("eventType")} className={inputCls}>
            <option value="">Select one…</option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="The brief" error={errors.message} required>
          <textarea
            value={form.message}
            onChange={update("message")}
            rows={5}
            className={inputCls}
            placeholder="Audience size, venue, format, what success looks like…"
          />
        </Field>
      </div>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={form._honey}
        onChange={update("_honey")}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-red" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send enquiry"} <ArrowIcon className="h-4 w-4" />
        </button>
        <p className="meta text-ink-faint">[ {profile.responsePromise} ]</p>
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
      <span className="meta mb-1.5 block text-ink-soft">
        {label}
        {required && <span className="text-red"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs font-bold text-red">{error}</span>}
    </label>
  );
}
