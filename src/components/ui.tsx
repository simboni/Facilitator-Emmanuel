import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

/* ------------------------------- Button ------------------------------- */

type ButtonVariant = "primary" | "gold" | "outline" | "ghost" | "white";
type ButtonSize = "md" | "lg";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-sm hover:shadow-md ring-offset-white",
  gold: "btn-sheen bg-gold-400 text-navy-900 hover:bg-gold-300 shadow-sm hover:shadow-md ring-offset-white font-semibold",
  outline:
    "border border-navy-200 text-navy-800 hover:border-navy-400 hover:bg-navy-50 ring-offset-white",
  ghost: "text-navy-700 hover:bg-navy-50 ring-offset-white",
  white:
    "bg-white text-navy-900 hover:bg-navy-50 shadow-sm hover:shadow-md ring-offset-navy-900",
};

const buttonSizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "onClick">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  className = "",
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const cls = `${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      )}
    </>
  );
  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={`group/btn ${cls}`} onClick={onClick} {...rest}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group/btn ${cls}`} onClick={onClick}>
        {content}
      </Link>
    );
  }
  return (
    <button
      className={`group/btn ${cls}`}
      onClick={onClick}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {content}
    </button>
  );
}

/* ------------------------------ Section ------------------------------- */

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

/* ------------------------------ Eyebrow ------------------------------- */

export function Eyebrow({
  children,
  className = "",
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] ${
        light ? "text-gold-300" : "text-gold-600"
      } ${className}`}
    >
      <span className={`h-px w-6 ${light ? "bg-gold-300/70" : "bg-gold-500/70"}`} />
      {children}
    </span>
  );
}

/* --------------------------- Section heading -------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-balance ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${
            light ? "text-navy-100" : "text-navy-500"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
