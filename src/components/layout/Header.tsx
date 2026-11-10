"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

const solutionLinks = [
  { label: "Growth Systems", href: "/solutions/growth-systems" },
  { label: "Commerce Systems", href: "/solutions/commerce-systems" },
  { label: "Brand Systems", href: "/solutions/brand-systems" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="relative mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#090a0e]/88 px-4 py-3 shadow-[0_12px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="rounded-md text-xl font-semibold tracking-[-0.04em] text-white outline-none focus-visible:ring-2 focus-visible:ring-[#6d7cf7] sm:text-2xl"
            aria-label="TenLabs home"
          >
            Ten<span className="text-[#7184ff]">Labs</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              const isSolutions = link.label === "Solutions";

              return (
                <li
                  key={link.href}
                  className={isSolutions ? "group/solutions relative" : "relative"}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#6d7cf7] ${
                      active
                        ? "bg-white/[0.06] text-white"
                        : "text-[#a5aab5] hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isSolutions && (
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover/solutions:rotate-180 group-focus-within/solutions:rotate-180" />
                    )}
                  </Link>

                  {isSolutions && (
                    <div className="pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-[opacity,transform] duration-200 group-hover/solutions:pointer-events-auto group-hover/solutions:translate-y-0 group-hover/solutions:opacity-100 group-focus-within/solutions:pointer-events-auto group-focus-within/solutions:translate-y-0 group-focus-within/solutions:opacity-100">
                      <div className="rounded-2xl border border-white/10 bg-[#101116] p-2 shadow-2xl shadow-black/45">
                        {solutionLinks.map((solution) => (
                          <Link
                            key={solution.href}
                            href={solution.href}
                            className="group/item flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium text-[#b5bac4] outline-none transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:bg-white/[0.06] focus-visible:text-white"
                          >
                            {solution.label}
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:opacity-100" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden min-h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-[#3375ed] to-[#5c69ea] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(51,117,237,0.25)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Start a project
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white outline-none focus-visible:ring-2 focus-visible:ring-[#6d7cf7] lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="mt-3 border-t border-white/[0.08] pt-3 lg:hidden"
          >
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-3 py-3 text-sm font-medium ${
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href))
                      ? "bg-white/[0.07] text-white"
                      : "text-[#b1b6c0] hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="ml-3 grid gap-1 border-l border-white/10 pl-3">
                {solutionLinks.map((solution) => (
                  <Link
                    key={solution.href}
                    href={solution.href}
                    className="rounded-lg px-3 py-2 text-sm text-[#777e8b] hover:bg-white/[0.04] hover:text-white"
                  >
                    {solution.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3375ed] to-[#5c69ea] px-4 py-3 text-sm font-semibold text-white sm:hidden"
              >
                Start a project
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
