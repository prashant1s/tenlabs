"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { footerLinks } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const footerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const elements = footerInnerRef.current?.querySelectorAll(".footer-animate");
      if (elements && elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-0 overflow-hidden bg-[#07070a] text-[#f3f4f6]"
    >
        {/* Ambient glow, consistent with the hero and section treatment */}
        <div className="glow-accent pointer-events-none absolute left-1/2 top-0 z-0 h-105 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full" />

        <div ref={footerInnerRef} className="relative z-10">
          {/* Large brand name */}
          <div className="footer-animate flex items-end justify-center px-6 pb-6 pt-2 md:pt-26 lg:pt-20">
            <h2 className="text-[13vw] font-black leading-[0.85] tracking-tighter text-[#f3f4f6] md:text-[11vw]">
              Ten<span className="text-[#6D7CF7]">Labs</span>
            </h2>
          </div>

          {/* Divider */}
          <div className="mx-auto max-w-7xl border-t border-white/10" />

          {/* Footer meta row */}
          <footer>
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-4 md:flex-row md:px-12 md:py-14 lg:px-20 lg:py-24">

              {/* Nav Links */}
              <nav className="footer-animate flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12 text-center md:justify-end">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-[#9aa0ac] transition-colors hover:text-[#6D7CF7]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Copyright */}
              <div className="footer-animate text-center text-md text-[#9aa0ac] md:text-right">
                <p className="flex items-center justify-center gap-1.5 md:justify-end">
                  Built with <span className="text-[#6D7CF7] text-xl">♥</span> in India.
                </p>
                <p className="mt-1">
                  © {new Date().getFullYear()} TenLabs. All Rights Reserved.
                </p>
              </div>

            </div>
          </footer>
        </div>
      </div>
  );
}

