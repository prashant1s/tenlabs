import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden border-t border-[#E8DCC4]/[0.07] bg-[#0A1C13] text-[#E8DCC4]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[min(900px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,rgba(10,28,19,0)_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:pt-24">
        <div className="flex flex-col gap-8 border-b border-[#E8DCC4]/10 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5CF6]">
              Let&apos;s build what&apos;s next
            </p>
            <p className="mt-4 max-w-2xl text-balance text-2xl font-semibold leading-tight text-[#E8DCC4] sm:text-3xl">
              Strategy, creative, performance, and commerce.
              <span className="block">Built to move together.</span>
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-xl border border-[#E8DCC4]/12 bg-[#E8DCC4]/[0.06] px-5 py-3 text-sm font-semibold text-[#E8DCC4] transition-colors hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <Link
          href="/"
          aria-label="TenLabs home"
          className="mx-auto mt-12 block w-fit text-center text-[clamp(5rem,14vw,11rem)] font-black leading-[0.78] tracking-[-0.075em] text-[#E8DCC4]"
        >
          Ten<span className="text-[#8B5CF6]">Labs</span>
        </Link>

        <div className="mt-12 flex flex-col gap-8 border-t border-[#E8DCC4]/10 pt-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-[#D8CDB8] transition-colors hover:text-[#E8DCC4]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm font-medium leading-6 text-[#D8CDB8] md:text-right">
            <p>Built with care in India.</p>
            <p>© {new Date().getFullYear()} TenLabs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
