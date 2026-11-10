import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#07070a] pb-20 pt-32 sm:pb-24 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "radial-gradient(ellipse 82% 68% at 50% 26%, black 15%, transparent 78%)",
          maskImage:
            "radial-gradient(ellipse 82% 68% at 50% 26%, black 15%, transparent 78%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-[560px] w-[min(94vw,1100px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(64,112,255,0.19)_0%,rgba(7,7,10,0)_70%)]"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <div className="inline-flex max-w-full items-center rounded-full border border-[#70a0ff]/35 bg-gradient-to-r from-[#2768ec] to-[#5b65ef] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_35px_rgba(47,103,235,0.28)] sm:text-xs sm:tracking-[0.14em]">
          <span className="sm:hidden">Strategy · Creative · Growth</span>
          <span className="hidden sm:inline">
            Strategy · Creative · Performance · Commerce
          </span>
        </div>

        <h1 className="mt-7 max-w-5xl text-balance text-[clamp(2.65rem,5.3vw,4.8rem)] font-bold leading-[0.99] tracking-[-0.055em] text-white">
          Build a brand people notice.
          <span className="block bg-gradient-to-r from-[#5b8dff] via-[#7488ff] to-[#9b7cff] bg-clip-text text-transparent">
            Turn attention into growth.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-[#a3a8b3] sm:text-lg sm:leading-8">
          TenLabs brings strategy, creative, performance media, and commerce
          together—so every touchpoint moves the same business goal.
        </p>

        <figure className="mt-10 w-full overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#111218] p-1.5 shadow-[0_30px_100px_-35px_rgba(55,105,255,0.55)] sm:mt-12 sm:rounded-[1.75rem] sm:p-2.5">
          <div className="flex h-10 items-center justify-between rounded-t-[0.95rem] border-b border-white/[0.07] bg-[#0d0e13] px-4 sm:h-12 sm:rounded-t-[1.2rem] sm:px-5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff665c]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f5bf4f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#62c454]" />
            </div>
            <figcaption className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#767c89] sm:text-xs">
              Digital experience · TenLabs
            </figcaption>
            <span className="h-2.5 w-11" aria-hidden="true" />
          </div>
          <div className="relative aspect-[2/1] overflow-hidden rounded-b-[0.95rem] bg-[#090910] sm:rounded-b-[1.2rem]">
            <Image
              src="/design2.webp"
              alt="A polished digital product interface designed by TenLabs"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 1152px) 1120px, calc(100vw - 40px)"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
          </div>
        </figure>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2f73ef] to-[#5b6df1] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_38px_rgba(47,115,239,0.32)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(47,115,239,0.45)] sm:w-auto sm:text-base"
          >
            Start a growth conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/work"
            className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.045] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/[0.075] sm:w-auto sm:text-base"
          >
            Explore our work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <p className="mt-3 text-xs text-[#707581] sm:text-sm">
          Tell us what&apos;s stuck. We&apos;ll help you find the next move.
        </p>
      </div>
    </section>
  );
}
