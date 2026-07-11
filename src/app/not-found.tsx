import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <p aria-hidden="true" className="display text-outline pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[38vw] leading-none">
        404
      </p>
      <div className="container-page relative flex min-h-[70svh] flex-col items-start justify-center py-20">
        <span className="chip chip-red -rotate-2">OFF SCRIPT</span>
        <h1 className="display mt-6 text-6xl sm:text-8xl">
          This page left
          <br />
          the <span className="text-red">agenda</span>.
        </h1>
        <p className="serif-note mt-5 max-w-md text-xl text-ink-soft">
          Even the best run-of-show has a missing slide. Let&rsquo;s get you back to
          the main stage.
        </p>
        <Link href="/" className="btn btn-red mt-8">
          Back to the top <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
