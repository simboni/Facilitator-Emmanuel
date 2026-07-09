import { Button } from "@/components/ui";
import { ArrowUpRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="bg-navy-gradient">
      <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <div className="font-mono text-7xl font-bold tracking-tight text-gold-400 sm:text-8xl">
          404
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold text-white text-balance sm:text-4xl">
          This page took a wrong turn.
        </h1>
        <p className="mt-4 max-w-md text-navy-100">
          The link is broken or the page has moved. Let&rsquo;s get you back to the good stuff.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="gold" size="lg" withArrow>
            Back home
          </Button>
          <Button href="/work" variant="white" size="lg">
            <ArrowUpRightIcon className="h-4 w-4" /> View my work
          </Button>
        </div>
      </div>
    </section>
  );
}
