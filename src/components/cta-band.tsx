import { firm } from "@/lib/firm";
import { Button, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export function CtaBand({
  title = "Ready to put your finances in expert hands?",
  intro = "Book a free, no-obligation consultation. Tell us what you need and we'll show you how we can help — with clear advice and fair, transparent fees.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="bg-navy-gradient relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-16">
          <div
            className="hero-orb"
            style={{
              width: "20rem",
              height: "20rem",
              background: "rgba(206,162,60,0.18)",
              top: "-6rem",
              right: "-2rem",
            }}
            aria-hidden="true"
          />
          <Reveal
            variant="scale"
            className="relative mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <Eyebrow light>Let&rsquo;s talk</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl text-balance">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-100 sm:text-lg">
              {intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="gold" size="lg" withArrow>
                Request a Free Quote
              </Button>
              <Button
                href={`tel:${firm.contact.phones[0]}`}
                variant="white"
                size="lg"
              >
                <PhoneIcon className="h-5 w-5" />
                {firm.contact.phones[0]}
              </Button>
            </div>
            <a
              href={`https://wa.me/${firm.contact.whatsappIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-100 transition-colors hover:text-gold-300"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              Prefer WhatsApp? Message us directly
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
