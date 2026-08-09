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
      className="relative z-0 bg-white text-[#0A0A0A]"
    >
        <div ref={footerInnerRef}>
          {/* ── Large Brand Name ── */}
          <div className="footer-animate flex items-end justify-center px-6 pb-6 pt-2 md:pt-26 lg:pt-20">
            <h2 className="text-[13vw] font-black leading-[0.85] tracking-tighter text-[#0A0A0A] drop-shadow-md md:text-[11vw]">
              Ten<span className="text-[#6495ED]">Labs</span>
            </h2>
          </div>

          {/* Divider */}
          <div className="mx-auto max-w-7xl border-t border-gray-200" />

          {/* ── Footer Meta Row ── */}
          <footer className="bg-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-4 md:flex-row md:px-12 md:py-14 lg:px-20 lg:py-24">

              {/* Nav Links */}
              <nav className="footer-animate flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12 text-center md:justify-end">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-gray-600 transition-colors hover:text-[#6495ED]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Copyright */}
              <div className="footer-animate text-center text-md text-gray-600 md:text-right">
                <p className="flex items-center justify-center gap-1.5 md:justify-end">
                  Built with <span className="text-[#6495ED] text-xl">♥</span> in India.
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

