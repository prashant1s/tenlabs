"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Volume2, VolumeX } from "lucide-react";

function MediaCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/3] w-[340px] shrink-0 overflow-hidden rounded-2xl border border-black/5 bg-[#0A0A0A] shadow-2xl transition-all duration-500 sm:w-[400px] lg:w-[440px] ${className}`}
    >
      {children}
    </div>
  );
}

// Gradient glow ring — a sibling of MediaCard so it can bleed past its
// rounded edges. Hover state is pure CSS via a `group/card` wrapper, no
// per-frame JS, same reasoning as the scroll-jank fix.
function CardGlowRing({ hoverClass = "" }: { hoverClass?: string }) {
  return (
    <div
      className={`absolute -inset-1 -z-10 rounded-[22px] bg-gradient-to-br from-[#6495ED] to-[#8B5CF6] opacity-0 blur-md transition-opacity duration-500 ${hoverClass}`}
    />
  );
}

// Glass shine + label tag — rendered as MediaCard's own children so its
// overflow-hidden/rounded-2xl clips them to the card shape instead of
// squaring off the corners.
function CardShine({ tag, hoverClass = "" }: { tag: string; hoverClass?: string }) {
  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${hoverClass}`}
      />
      <span
        className={`pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 ${hoverClass}`}
      >
        {tag}
      </span>
    </>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Blur filters and infinite JS-driven animations are cheap to paint once,
  // but Lenis repaints the whole viewport every frame while smooth-scrolling —
  // so an always-decoding video is what actually caused the scroll jank.
  // Pausing it once the hero leaves the viewport (and resuming on the way
  // back) keeps the decode cost off the main thread while it's offscreen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white pb-16 pt-28 font-sora md:pt-32"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroFloatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes heroFloatDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
      `}} />

      {/* Soft dot-grid texture, faded toward the edges via a mask */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
        style={{
          backgroundImage: "radial-gradient(rgba(10,10,10,0.09) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 35%, black 40%, transparent 90%)",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 35%, black 40%, transparent 90%)",
        }}
      />

      {/* Ambient two-tone glow — radial-gradients read like blurred blobs
          without the filter: blur() repaint cost. */}
      <div className="pointer-events-none absolute top-[38%] left-1/2 z-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(100,149,237,0.20)_0%,rgba(100,149,237,0)_70%)]" />
      <div className="pointer-events-none absolute bottom-[8%] right-[8%] z-0 h-[380px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.16)_0%,rgba(139,92,246,0)_70%)]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[6%] z-0 h-[320px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(100,149,237,0.12)_0%,rgba(100,149,237,0)_70%)]" />

      {/* Centered Content Container */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow */}
        <div
          className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-[#6495ED]/25 bg-[#6495ED]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#4F7DF3] opacity-0"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Websites That Convert
        </div>

        {/* Headline: Black text with gradient highlight */}
        <h1
          className="animate-fade-up mb-4 text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0A0A0A] opacity-0 md:mb-6"
          style={{ animationDelay: "0.2s" }}
        >
          A{" "}
          <span className="bg-gradient-to-r from-[#6495ED] to-[#8B5CF6] bg-clip-text text-transparent">
            website
          </span>
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
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[#6495ED] to-[#5A79E0] px-8 py-4 text-base font-medium text-white shadow-[0_10px_30px_rgba(100,149,237,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_40px_rgba(100,149,237,0.5)] active:scale-[0.98]"
          >
            <span className="relative z-10">Get in Touch</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            {/* Shine sweep on hover */}
            <span className="absolute inset-0 -translate-x-[120%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
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
        <div className="hidden animate-[heroFloatUp_5s_ease-in-out_infinite] lg:block lg:-translate-x-10 xl:-translate-x-16">
          <div className="group/card relative">
            <CardGlowRing hoverClass="group-hover/card:opacity-100" />
            <MediaCard className="-rotate-3 scale-[0.92] opacity-80 group-hover/card:z-20 group-hover/card:-translate-y-2 group-hover/card:rotate-0 group-hover/card:scale-100 group-hover/card:opacity-100 group-hover/card:shadow-[0_25px_60px_-12px_rgba(100,149,237,0.45)]">
              <Image
                src="/design1.webp"
                alt="Syngri — digital product studio website design"
                fill
                className="object-cover"
                sizes="440px"
              />
              <CardShine tag="Digital Studio" hoverClass="group-hover/card:opacity-100" />
            </MediaCard>
          </div>
        </div>

        {/* Center video */}
        <div className="group/video relative">
          <CardGlowRing hoverClass="group-hover/video:opacity-100" />
          <MediaCard className="z-10 aspect-video w-[380px] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.3)] group-hover/video:scale-[1.04] group-hover/video:shadow-[0_35px_80px_-15px_rgba(100,149,237,0.5)] sm:w-[460px] lg:w-[520px]">
            <video
              ref={videoRef}
              src="/video-in-center.mp4"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
            <CardShine tag="Live Site" hoverClass="group-hover/video:opacity-100" />
            <button
              type="button"
              onClick={() => setIsMuted((m) => !m)}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="absolute bottom-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/70 group-hover/video:opacity-100"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </MediaCard>
        </div>

        {/* Right design */}
        <div
          className="hidden animate-[heroFloatDown_5.5s_ease-in-out_infinite] lg:block lg:translate-x-10 xl:translate-x-16"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="group/card relative">
            <CardGlowRing hoverClass="group-hover/card:opacity-100" />
            <MediaCard className="rotate-3 scale-[0.92] opacity-80 group-hover/card:z-20 group-hover/card:-translate-y-2 group-hover/card:rotate-0 group-hover/card:scale-100 group-hover/card:opacity-100 group-hover/card:shadow-[0_25px_60px_-12px_rgba(100,149,237,0.45)]">
              <Image
                src="/design2.webp"
                alt="Budgeting app website design"
                fill
                className="object-cover"
                sizes="440px"
              />
              <CardShine tag="SaaS Product" hoverClass="group-hover/card:opacity-100" />
            </MediaCard>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
