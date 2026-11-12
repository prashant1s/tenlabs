"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
// import { Footer } from "@/components/layout/Footer";
// import { Header } from "@/components/layout/Header";
import { projects as allProjects } from "@/lib/data";

import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Sparkles,
  Palette,
  HeartHandshake,
  Mic,
  Megaphone,
  MessageSquare,
  Mail,
  Users,
} from "lucide-react";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const projects = allProjects.slice(0, 6).map((p) => ({
  ...p,
  title: p.brand,
  industry: p.category,
  slug: p.id,
  img: p.bannerImage || p.coverImage,
}));

export default function BrandSystemsPage() {

  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen bg-[#14281C]">
        {/* 1. HERO SECTION */}
        <section className="relative min-h-screen w-full overflow-hidden bg-[#14281C] font-sans">
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
          `,
            }}
          />
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-[#14281C]/50" />

          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col lg:flex-row items-center justify-between px-6 pt-32 pb-20 md:px-12 lg:px-6">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="mb-4 sm:mb-6 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#E8DCC4]/90 animate-[fadeSlideUp_0.8s_ease_0.2s_both]">
                <Link
                  href="/solutions"
                  className="hover:text-[#E8DCC4] transition-colors"
                >
                  Solutions
                </Link>
                <span>/</span>
                <span className="text-[#E8DCC4]">Brand Systems</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-[#E8DCC4] leading-[1.05] mb-6 animate-[fadeSlideUp_0.8s_ease_0.4s_both]">
                BUILD TRUST.
                <br />
                <span className="font-serif italic text-[#8B5CF6] font-light">
                  BUILD RECALL.
                </span>
              </h1>
              <p className="mb-8 max-w-sm sm:max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-[#E8DCC4]/80 animate-[fadeSlideUp_0.8s_ease_0.7s_both]">
                We create compelling brand narratives, thumb-stopping creatives,
                and authentic creator campaigns that capture attention and build
                lasting loyalty.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 animate-[fadeSlideUp_0.8s_ease_0.9s_both]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#E8DCC4] px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-[#14281C] hover:scale-105 transition-transform"
                >
                  Build Your Brand <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="w-full lg:w-1/2 relative h-125 mt-12 lg:mt-0 hidden md:block animate-[fadeSlideUp_0.8s_ease_0.9s_both]">
              <div className="absolute top-4 left-4 lg:left-12 w-64 bg-[#14281C]/50 backdrop-blur-xl border border-[#E8DCC4]/20 rounded-2xl p-5 shadow-2xl z-30 transition-transform hover:scale-105">
                <p className="text-xs text-[#D7CAB2] mb-1 font-medium">
                  Content Impressions
                </p>
                <p className="text-2xl font-bold text-[#E8DCC4] mb-2">50M+</p>
                <div className="flex items-center gap-1 text-[10px] font-bold text-green-400 mb-4">
                  <ArrowUpRight className="w-3 h-3" /> Across campaigns
                </div>
                <svg className="w-full h-8" viewBox="0 0 100 30" fill="none">
                  <path
                    d="M0 25C10 25 15 15 25 15C35 15 40 20 50 10C60 0 65 15 75 5C85 -5 95 10 100 5"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="100" cy="5" r="2" fill="#8B5CF6" />
                </svg>
              </div>
              <div className="absolute top-55 left-0 lg:left-4 w-48 bg-[#14281C]/50 backdrop-blur-xl border border-[#E8DCC4]/20 rounded-2xl p-5 shadow-2xl z-20 transition-transform hover:scale-105">
                <p className="text-xs text-[#D7CAB2] mb-1 font-medium">
                  Creators Onboarded
                </p>
                <p className="text-2xl font-bold text-[#E8DCC4] mb-2">250+</p>
                <div className="flex items-center gap-1 text-[10px] font-bold text-green-400 mb-4">
                  <ArrowUpRight className="w-3 h-3" /> UGC & Influencers
                </div>
                <svg className="w-full h-8" viewBox="0 0 100 30" fill="none">
                  <path
                    d="M0 25 L20 20 L40 25 L60 15 L80 10 L100 0"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="100" cy="0" r="2" fill="#22c55e" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-0 lg:right-4 w-64 bg-[#14281C]/50 backdrop-blur-xl border border-[#E8DCC4]/20 rounded-2xl p-5 shadow-2xl z-10 transition-transform hover:scale-105">
                <p className="text-xs text-[#D7CAB2] mb-1 font-medium">
                  Platforms Mastered
                </p>
                <p className="text-2xl font-bold text-[#E8DCC4] mb-1">
                  Omnichannel
                </p>
                <p className="text-xs text-[#C1B59E] mb-4">
                  Content distributed everywhere
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="https://cdn.simpleicons.org/instagram/E4405F"
                    alt="Insta"
                    width={20}
                    height={20}
                    className="h-4 w-auto object-contain"
                    unoptimized
                  />
                  <Image
                    src="https://cdn.simpleicons.org/youtube/FF0000"
                    alt="YT"
                    width={20}
                    height={20}
                    className="h-4 w-auto object-contain"
                    unoptimized
                  />
                  <Image
                    src="https://cdn.simpleicons.org/tiktok/FFFFFF"
                    alt="TikTok"
                    width={20}
                    height={20}
                    className="h-4 w-auto object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE FUNNEL */}
        <section
          id="process"
          className="py-20 bg-[#1F3D2B] border-b border-[#E8DCC4]/10"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="w-full lg:w-1/3 shrink-0">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5CF6] mb-4 block">
                  OUR BRAND ENGINE
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-[#E8DCC4] leading-tight mb-6">
                  Content that connects,
                  <br />
                  <span className="italic text-[#C1B59E] font-light">
                    creatives that convert.
                  </span>
                </h2>
                <p className="text-[#C1B59E] mb-8">
                  From strategy and positioning to mass distribution via the
                  creator economy.
                </p>
              </div>
              <div className="w-full lg:w-2/3 flex flex-wrap md:flex-nowrap justify-between relative mt-8 lg:mt-0">
                <div className="absolute top-6 left-12 right-12 h-px border-t border-dashed border-[#E8DCC4]/10 hidden md:block z-0"></div>
                {[
                  {
                    num: "01",
                    title: "STRATEGIZE",
                    desc: "Define your positioning and core messaging.",
                    icon: Sparkles,
                  },
                  {
                    num: "02",
                    title: "CREATE",
                    desc: "Produce high-quality shoots and ad creatives.",
                    icon: Palette,
                  },
                  {
                    num: "03",
                    title: "DISTRIBUTE",
                    desc: "Manage social channels and organic reach.",
                    icon: Megaphone,
                  },
                  {
                    num: "04",
                    title: "ENGAGE",
                    desc: "Leverage UGC and influencers to build trust.",
                    icon: HeartHandshake,
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="relative z-10 flex flex-col items-center text-center w-1/2 md:w-1/4 px-2 mb-10 md:mb-0"
                  >
                    <div className="w-12 h-12 bg-[#274B36] rounded-full flex items-center justify-center text-[#8B5CF6] shadow-md border border-[#E8DCC4]/10 mb-4">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#A89C86] mb-2">
                      {step.num}
                    </span>
                    <h3 className="text-sm font-black text-[#E8DCC4] tracking-wider mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#C1B59E] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHAT WE DO */}
        <section className="py-15 bg-[#14281C]">
          <div className="mx-auto max-w-7xl px-6 mt-16">
            <div className="bg-[#274B36] rounded-[2rem] p-8 md:p-12 shadow-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5CF6] mb-2 block">
                WHAT WE DO
              </span>
              <h2 className="text-3xl font-bold text-[#E8DCC4] mb-10">
                End-to-end creative & brand solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Social Media */}
                <div className="bg-[#315B43] border border-[#E8DCC4]/5 rounded-2xl p-6 flex flex-col justify-between group hover:border-pink-500/30 transition-colors">
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-pink-500/10 text-pink-400 mb-6">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <h3 className="text-[#E8DCC4] font-bold mb-2">Social Media</h3>
                    <ul className="text-sm text-[#C1B59E] leading-relaxed mb-8 space-y-1">
                      <li>• Social Media Management</li>
                      <li>• Content Strategy</li>
                      <li>• Content Calendars</li>
                      <li>• Community Engagement</li>
                    </ul>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image
                      src="https://cdn.simpleicons.org/instagram/E4405F"
                      alt="Instagram"
                      width={20}
                      height={20}
                      className="h-5 w-auto object-contain"
                      unoptimized
                    />
                    <Image
                      src="https://cdn.simpleicons.org/youtube/FF0000"
                      alt="YouTube"
                      width={20}
                      height={16}
                      className="h-4 w-auto object-contain"
                      unoptimized
                    />
                    <Image
                      src="https://cdn.simpleicons.org/facebook/1877F2"
                      alt="Facebook"
                      width={20}
                      height={20}
                      className="h-5 w-auto object-contain"
                      unoptimized
                    />
                    <Image
                      src="https://cdn.simpleicons.org/pinterest/E60023"
                      alt="Facebook"
                      width={20}
                      height={20}
                      className="h-5 w-auto object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Creative Production */}
                <div className="bg-[#315B43] border border-[#E8DCC4]/5 rounded-2xl p-6 flex flex-col justify-between group hover:border-[#8B5CF6]/30 transition-colors">
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#8B5CF6]/10 text-[#BFA8FF] mb-6">
                      <Camera className="w-5 h-5" />
                    </div>
                    <h3 className="text-[#E8DCC4] font-bold mb-2">
                      Creative Production
                    </h3>
                    <ul className="text-sm text-[#C1B59E] leading-relaxed mb-6 space-y-1">
                      <li>• Product Shoots</li>
                      <li>• Ad Creatives</li>
                      <li>• Reels & Shorts</li>
                      <li>• High-End Video Production</li>
                    </ul>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image
                      src="https://api.iconify.design/simple-icons:canva.svg?color=%2300C4CC"
                      alt="Canva"
                      width={20}
                      height={20}
                      className="h-7 w-auto"
                      unoptimized
                    />

                    <Image
                      src="https://cdn.simpleicons.org/figma/F24E1E"
                      alt="Figma"
                      width={20}
                      height={20}
                      className="h-5 w-auto object-contain"
                      unoptimized
                    />
                    <Image
                      src="https://api.iconify.design/simple-icons:adobepremierepro.svg?color=%239999FF"
                      alt="Premiere Pro"
                      width={20}
                      height={20}
                      className="h-5 w-auto"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Creator Economy */}
                <div className="bg-[#315B43] border border-[#E8DCC4]/5 rounded-2xl p-6 flex flex-col justify-between group hover:border-orange-500/30 transition-colors">
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 mb-6">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-[#E8DCC4] font-bold mb-2">
                      Creator Economy
                    </h3>
                    <ul className="text-sm text-[#C1B59E] leading-relaxed mb-8 space-y-1">
                      <li>• Influencer Marketing</li>
                      <li>• UGC Creation</li>
                      <li>• Creator Collaborations</li>
                      <li>• Viral Seeding</li>
                    </ul>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Image
                      src="https://cdn.simpleicons.org/tiktok/FFFFFF"
                      alt="TikTok"
                      width={20}
                      height={20}
                      className="h-5 w-auto object-contain"
                      unoptimized
                    />
                    <Image
                      src="https://cdn.simpleicons.org/youtube/FF0000"
                      alt="YouTube"
                      width={20}
                      height={16}
                      className="h-4 w-auto object-contain"
                      unoptimized
                    />
                    <Mic className="w-5 h-5 text-orange-400 opacity-80" />
                    <Image
                      src="https://cdn.simpleicons.org/instagram/E4405F"
                      alt="Instagram"
                      width={20}
                      height={20}
                      className="h-5 w-auto object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Brand Positioning */}
                <div className="bg-[#315B43] border border-[#E8DCC4]/5 rounded-2xl p-6 flex flex-col justify-between group hover:border-[#8B5CF6]/30 transition-colors">
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#8B5CF6]/10 text-[#BFA8FF] mb-6">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-[#E8DCC4] font-bold mb-2">
                      Brand Positioning
                    </h3>
                    <ul className="text-sm text-[#C1B59E] leading-relaxed mb-8 space-y-1">
                      <li>• Brand Messaging</li>
                      <li>• Brand Strategy</li>
                      <li>• Campaign Planning</li>
                      <li>• Visual Identity</li>
                    </ul>
                  </div>
                  <div className="flex gap-4 items-center">
                    {/* <Palette className="w-5 h-5 text-[#BFA8FF] opacity-80" /> */}
                    <Image
                      src="https://api.iconify.design/simple-icons:notion.svg?color=%23FFFFFF"
                      alt="Notion"
                      width={20}
                      height={20}
                      className="h-5 w-auto"
                      unoptimized
                    />
                    <Image
                      src="https://api.iconify.design/fa6-brands:google.svg?color=%234285F4"
                      alt="Google"
                      width={20}
                      height={20}
                      className="h-5 w-auto"
                      unoptimized
                    />
                    <Image
                      src="https://api.iconify.design/fa6-brands:meta.svg?color=%230066FF"
                      alt="Meta"
                      width={20}
                      height={20}
                      className="h-5 w-auto"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 4. RESULTS THAT MATTER (CASE STUDIES) */}
        {/* ========================================= */}
        <section className="bg-[#14281C] px-6 py-24 md:py-32 mt-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8"
            >
              {/* Left Sidebar Content */}
              <motion.div
                variants={staggerContainer}
                className="md:col-span-4 lg:col-span-3 flex flex-col justify-center"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6] mb-8">
                  Our Work
                </h3>
                <h2 className="text-4xl md:text-5xl font-serif text-[#E8DCC4] leading-[1.1] mb-6">
                  Systems that <br /> create real impact.
                </h2>
                <p className="text-sm text-[#C1B59E] mb-10 leading-relaxed font-medium">
                  Across platforms. Across industries. <br />
                  One purpose - brand love.
                </p>
                <Link
                  href="/work"
                  className="group flex items-center gap-4 text-sm font-bold text-[#E8DCC4] transition-colors hover:text-[#8B5CF6]"
                >
                  Explore Case Studies
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8DCC4]/20 transition-all group-hover:border-[#8B5CF6]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>

              {/* Right Content - 3x2 Image Grid (FETCHED FROM SANITY) */}
              <motion.div
                variants={staggerContainer}
                className="md:col-span-8 lg:col-span-9"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {projects.map((item, idx) => (
                    <Link
                      href={`/work/${item.slug}`}
                      key={idx}
                      className="group relative aspect-4/3 md:aspect-5/4 w-full overflow-hidden bg-[#274B36] block border border-[#E8DCC4]/5"
                    >
                      {item.img && (
                        <Image
                          src={item.img}
                          alt={item.title || item.brand || "Project Image"}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-90 z-0"
                        />
                      )}

                      {/* Dark overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#14281C]/80 via-transparent to-[#14281C]/30 pointer-events-none z-0" />

                      {/* Text content with increased z-index */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-start z-10">
                        <h4 className="text-xl md:text-2xl text-[#E8DCC4] tracking-wide font-serif mb-1 drop-shadow-md">
                          {item.title || item.brand || "Project Name"}
                        </h4>
                        <p className="text-[10px] md:text-xs font-medium text-[#D7CAB2] uppercase tracking-widest drop-shadow-md">
                          {item.category || item.industry || "Case Study"}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {/* Show empty placeholder cards if data is still loading */}
                  {projects.length === 0 &&
                    Array.from({ length: 6 }).map((_, idx) => (
                      <div
                        key={`skeleton-${idx}`}
                        className="relative aspect-4/3 md:aspect-5/4 w-full bg-[#274B36] animate-pulse border border-[#E8DCC4]/5"
                      />
                    ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 5. FINAL CTA SECTION */}
        {/* ========================================= */}
        <section className="py-16 md:py-24 bg-[#1F3D2B]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="bg-[#274B36] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl">
              <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-40 mix-blend-screen">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-75 h-50 bg-[#8B5CF6] rounded-full blur-[100px]"></div>
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,50 Q25,20 50,50 T100,50"
                    stroke="rgba(139,92,246,0.3)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <path
                    d="M0,60 Q30,80 60,50 T100,60"
                    stroke="rgba(139,92,246,0.2)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <path
                    d="M0,40 Q40,10 70,50 T100,40"
                    stroke="rgba(139,92,246,0.4)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="relative z-10 w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#E8DCC4] mb-4">
                  Ready to build your
                  <br />
                  brand engine?
                </h2>
                <p className="text-[#C1B59E] text-sm md:text-base leading-relaxed">
                  Let's build a brand system that drives real, measurable
                  results.
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-[#E8DCC4] px-6 py-3.5 rounded-xl font-bold text-sm border border-[#E8DCC4]/20 hover:bg-[#E8DCC4]/5 transition-colors"
                >
                  Write to Us <Mail className="w-4 h-4 opacity-50" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
