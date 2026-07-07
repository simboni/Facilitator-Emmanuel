import type { Service } from "@/lib/firm";
import { ServiceIcon } from "@/components/icons";
import { SpotlightCard } from "@/components/spotlight-card";

export function ServiceCard({
  service,
  href = "/services",
}: {
  service: Service;
  href?: string;
}) {
  return (
    <SpotlightCard
      href={href}
      className="group flex h-full flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-xl hover:shadow-navy-900/10"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-100 group-hover:text-gold-700">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="font-serif text-lg font-semibold leading-snug text-navy-900">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-navy-500">{service.summary}</p>
      <span className="mt-auto flex items-center gap-1.5 pt-1 text-sm font-medium text-gold-600 transition-all duration-300 group-hover:gap-2.5">
        <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Learn more
        </span>
        <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          →
        </span>
      </span>
    </SpotlightCard>
  );
}
