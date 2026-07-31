import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="app flex min-h-[70svh] flex-col items-center justify-center pt-2 text-center">
      <span className="pill pill-red">Off script</span>
      <p className="display mt-4 text-7xl text-red">404</p>
      <h1 className="display mt-2 text-2xl">This page left the agenda</h1>
      <p className="mt-2 max-w-xs text-sm text-ink-soft">Let&rsquo;s get you back to the main stage.</p>
      <Link href="/" className="act act-red mt-6">
        Back home <ArrowIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
