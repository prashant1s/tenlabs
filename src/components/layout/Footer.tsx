import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#07070a] text-[#f3f4f6]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[min(900px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,124,247,0.2)_0%,rgba(7,7,10,0)_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:pt-24">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7184ff]">
              Let&apos;s build what&apos;s next
            </p>
            <p className="mt-4 max-w-xl text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Strategy, creative, performance, and commerce—built to move
              together.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#7184ff]/50 hover:bg-[#7184ff]/10"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <Link
          href="/"
          aria-label="TenLabs home"
          className="mt-12 block w-fit text-[clamp(5rem,14vw,11rem)] font-black leading-[0.78] tracking-[-0.075em] text-white"
        >
          Ten<span className="text-[#7184ff]">Labs</span>
        </Link>

        <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#9aa0ac] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm leading-6 text-[#737986] md:text-right">
            <p>Built with care in India.</p>
            <p>© {new Date().getFullYear()} TenLabs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
