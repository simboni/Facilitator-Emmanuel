import Link from "next/link";
import type { Service } from "@/lib/firm";
import { ServiceIcon } from "@/components/icons";

export function ServiceCard({
  service,
  href = "/services",
}: {
  service: Service;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-900/5"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-200 group-hover:bg-gold-100 group-hover:text-gold-700">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="font-serif text-lg font-semibold leading-snug text-navy-900">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-navy-500">{service.summary}</p>
      <span className="mt-auto pt-1 text-sm font-medium text-gold-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Learn more →
      </span>
    </Link>
  );
}
