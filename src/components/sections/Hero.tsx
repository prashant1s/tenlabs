import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#E8DCC4]/[0.06] bg-[#14281C] pb-20 pt-32 sm:pb-24 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,220,196,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(232,220,196,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "radial-gradient(ellipse 82% 68% at 50% 26%, black 15%, transparent 78%)",
          maskImage:
            "radial-gradient(ellipse 82% 68% at 50% 26%, black 15%, transparent 78%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-[560px] w-[min(94vw,1100px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.19)_0%,rgba(20,40,28,0)_70%)]"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <div className="inline-flex max-w-full items-center rounded-full border border-[#BFA8FF]/35 bg-gradient-to-r from-[#7445DA] to-[#9A6CFF] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#E8DCC4] shadow-[0_10px_35px_rgba(139,92,246,0.28)] sm:text-xs sm:tracking-[0.14em]">
          <span className="sm:hidden">Strategy · Creative · Growth</span>
          <span className="hidden sm:inline">
            Strategy · Creative · Performance · Commerce
          </span>
        </div>

        <h1 className="mt-7 max-w-5xl text-balance text-[clamp(2.65rem,5.3vw,4.8rem)] font-bold leading-[0.99] tracking-[-0.055em] text-[#E8DCC4]">
          Build a brand people notice.
          <span className="block bg-gradient-to-r from-[#BFA8FF] via-[#A97FFF] to-[#8B5CF6] bg-clip-text text-transparent">
            Turn attention into growth.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-[#C1B59E] sm:text-lg sm:leading-8">
          TenLabs brings strategy, creative, performance media, and commerce
          together—so every touchpoint moves the same business goal.
        </p>

        <figure className="mt-10 w-full overflow-hidden rounded-[1.35rem] border border-[#E8DCC4]/12 bg-[#274B36] p-1.5 shadow-[0_30px_100px_-35px_rgba(139,92,246,0.55)] sm:mt-12 sm:rounded-[1.75rem] sm:p-2.5">
          <div className="flex h-10 items-center justify-between rounded-t-[0.95rem] border-b border-[#E8DCC4]/[0.07] bg-[#183222] px-4 sm:h-12 sm:rounded-t-[1.2rem] sm:px-5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff665c]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f5bf4f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#62c454]" />
            </div>
            <figcaption className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A89C86] sm:text-xs">
              Digital experience · TenLabs
            </figcaption>
            <span className="h-2.5 w-11" aria-hidden="true" />
          </div>
          <div className="relative aspect-[2/1] overflow-hidden rounded-b-[0.95rem] bg-[#14281C] sm:rounded-b-[1.2rem]">
            <Image
              src="/design2.webp"
              alt="A polished digital product interface designed by TenLabs"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 1152px) 1120px, calc(100vw - 40px)"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#E8DCC4]/[0.06]" />
          </div>
        </figure>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7445DA] to-[#9A6CFF] px-7 py-3.5 text-sm font-semibold text-[#E8DCC4] shadow-[0_14px_38px_rgba(139,92,246,0.32)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(139,92,246,0.45)] sm:w-auto sm:text-base"
          >
            Start a growth conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/work"
            className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl border border-[#E8DCC4]/12 bg-[#E8DCC4]/[0.045] px-7 py-3.5 text-sm font-semibold text-[#E8DCC4] transition-colors hover:border-[#E8DCC4]/25 hover:bg-[#E8DCC4]/[0.075] sm:w-auto sm:text-base"
          >
            Explore our work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <p className="mt-3 text-xs text-[#A89C86] sm:text-sm">
          Tell us what&apos;s stuck. We&apos;ll help you find the next move.
        </p>
      </div>
    </section>
  );
}
