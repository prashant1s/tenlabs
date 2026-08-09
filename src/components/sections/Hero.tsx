"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function MediaCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/3] w-[340px] shrink-0 overflow-hidden rounded-2xl border border-black/5 bg-[#0A0A0A] shadow-2xl sm:w-[400px] lg:w-[440px] ${className}`}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white pb-16 pt-28 font-sora md:pt-32"
    >
      {/* Ambient glow behind the showcase */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6495ED]/10 blur-[140px]" />

      {/* Centered Content Container */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center">

        {/* Headline: Black text with Blue highlight */}
        <h1
          className="animate-fade-up mb-4 text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A0A0A] opacity-0 md:mb-6"
          style={{ animationDelay: "0.2s" }}
        >
          A <span className="text-[#6495ED]">website</span>
          <br className="hidden md:block" /> makes it real.
        </h1>

        {/* Subheading: Dark grey text for contrast against white background */}
        <p
          className="animate-fade-up mb-10 text-[clamp(1.25rem,2.5vw,1.75rem)] font-light text-gray-600 opacity-0 md:mb-12"
          style={{ animationDelay: "0.4s" }}
        >
          Strategy. Creativity. Growth.
        </p>

        {/* CTA Button */}
        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#6495ED] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#4F7DF3] hover:shadow-[0_0_20px_rgba(100,149,237,0.3)] active:scale-[0.98]"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Website Showcase Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-14 hidden w-full items-center justify-center gap-6 sm:flex md:mt-20 lg:gap-8"
      >
        {/* Left design */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block lg:-translate-x-10 xl:-translate-x-16"
        >
          <MediaCard className="-rotate-3 scale-[0.92] opacity-80">
            <Image
              src="/design1.webp"
              alt="Syngri — digital product studio website design"
              fill
              className="object-cover"
              sizes="440px"
            />
          </MediaCard>
        </motion.div>

        {/* Center video */}
        <MediaCard className="z-10 aspect-video w-[380px] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.3)] sm:w-[460px] lg:w-[520px]">
          <video
            src="/video-in-center.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        </MediaCard>

        {/* Right design */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="hidden lg:block lg:translate-x-10 xl:translate-x-16"
        >
          <MediaCard className="rotate-3 scale-[0.92] opacity-80">
            <Image
              src="/design2.webp"
              alt="Budgeting app website design"
              fill
              className="object-cover"
              sizes="440px"
            />
          </MediaCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
