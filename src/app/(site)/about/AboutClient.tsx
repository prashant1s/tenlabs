"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";
import { projects as allProjects } from "@/lib/data";

const projects = allProjects.slice(0, 6).map((p) => ({
  ...p,
  title: p.brand,
  industry: p.category,
  slug: p.id,
  img: p.bannerImage || p.coverImage,
}));

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function AboutPage() {

  return (
    <>


      <main className="min-h-screen bg-[#0A1C13]">

        {/* ========================================= */}
        {/* 1. HERO SECTION (FIXED) */}
        {/* ========================================= */}
        <section className="relative min-h-screen bg-[#0A1C13] overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about/about-banner.webp"
              alt="TenLabs Team"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 md:px-0.5">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-xl md:max-w-2xl"
            >
              <motion.p
                variants={fadeUpVariant}
                className="mb-9 text-xl font-bold uppercase tracking-[0.2em] text-[#8B5CF6]"
              >
                About Us
              </motion.p>

              <motion.h1
                variants={fadeUpVariant}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#E8DCC4]"
              >
                We build
                <br />
                <span className="font-serif font-light italic text-[#8B5CF6]">
                  what moves
                </span>
                <br />
                brands forward
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="mt-5 max-w-xl text-base leading-relaxed text-[#C9BDA6] md:text-lg"
              >
                At TenLabs, we combine strategy, creativity and performance to build
                systems that attract, convert and scale for brands that aim higher.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 2. PHILOSOPHY SECTION (LIGHT) */}
        {/* ========================================= */}
        <section className="bg-[#0A1C13] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8"
            >

              {/* Left Sidebar Title */}
              <motion.div variants={fadeUpVariant} className="w-full lg:w-2/12 shrink-0 lg:self-start lg:pt-4">
                <div className="border-l border-[#E8DCC4]/10 pl-4">
                  <h3 className="text-md font-bold uppercase tracking-widest text-[#8B5CF6]">
                    Our <br /> Philosophy
                  </h3>
                </div>
              </motion.div>

              {/* Middle Content - Heading */}
              <motion.div variants={fadeUpVariant} className="w-full lg:w-3/12 shrink-0">
                <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight text-[#E8DCC4] leading-[1.1]">
                  Most agencies <br /> sell services. <br />
                  We build <br />
                  <span className="font-serif italic text-[#8B5CF6] font-light">systems.</span>
                </h2>
              </motion.div>

              {/* Right Content - 4 Horizontal Columns */}
              <motion.div variants={fadeUpVariant} className="w-full lg:w-7/12 flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <div className="md:w-1/4 w-full md:border-l border-[#E8DCC4]/10 md:pl-6 md:pr-4 py-2">
                  <p className="text-md font-bold text-[#E8DCC4] leading-snug">A Meta <br /> campaign.</p>
                </div>
                <div className="md:w-1/4 w-full md:border-l border-[#E8DCC4]/10 md:pl-6 md:pr-4 py-2">
                  <p className="text-md font-bold text-[#E8DCC4] leading-snug">A Shopify <br /> store.</p>
                </div>
                <div className="md:w-1/4 w-full md:border-l border-[#E8DCC4]/10 md:pl-6 md:pr-4 py-2">
                  <p className="text-md font-bold text-[#E8DCC4] leading-snug">An SEO <br /> strategy.</p>
                </div>
                <div className="md:w-1/4 w-full md:border-l border-[#E8DCC4]/10 md:pl-6 md:pr-4 py-2">
                  <p className="text-md font-medium text-[#D8CDB8] leading-snug mb-6">
                    Individually they <br /> create activity.
                  </p>
                  <p className="text-md font-bold text-[#8B5CF6] leading-snug">
                    Together they <br /> create growth.
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 3. OUR WORK SECTION (DARK) */}
        {/* ========================================= */}
        <section className="bg-[#0A1C13] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

              {/* Left Sidebar Content */}
              <motion.div variants={fadeUpVariant} className="md:col-span-4 lg:col-span-3 flex flex-col justify-center">
                <h3 className="text-md font-bold uppercase tracking-widest text-[#8B5CF6] mb-8">
                  Our Work
                </h3>
                <h2 className="text-3xl md:text-4xl font-serif text-[#E8DCC4] leading-[1.1] mb-6">
                  Systems that <br /> create real impact.
                </h2>
                <p className="text-md text-[#D8CDB8] mb-10 leading-relaxed font-medium">
                  Across platforms. Across industries. <br />
                  One purpose - growth.
                </p>
                <Link href="/work" className="group flex items-center gap-4 text-sm font-bold text-[#E8DCC4] transition-colors hover:text-[#8B5CF6]">
                  Explore Case Studies
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8DCC4]/20 transition-all group-hover:border-[#8B5CF6]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>

              {/* Right Content - 3x2 Image Grid (FETCHED FROM SANITY) */}
              <motion.div variants={fadeUpVariant} className="md:col-span-8 lg:col-span-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {projects.map((item, idx) => (
                    <Link
                      href={`/work/${item.slug}`}
                      key={idx}
                      className="group relative aspect-[4/3] md:aspect-[5/4] w-full overflow-hidden bg-[#102D1E] block border border-[#E8DCC4]/5"
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
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1C13]/80 via-transparent to-[#0A1C13]/30 pointer-events-none z-0" />

                      {/* Text content with increased z-index */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-start z-10">
                        <h4 className="text-xl md:text-2xl text-[#E8DCC4] tracking-wide font-serif mb-1 drop-shadow-md">
                          {item.title || item.brand || "Project Name"}
                        </h4>
                        <p className="text-[10px] md:text-xs font-medium text-[#D8CDB8] uppercase tracking-widest drop-shadow-md">
                          {item.category || item.industry || "Case Study"}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {/* Show empty placeholder cards if data is still loading */}
                  {projects.length === 0 && Array.from({ length: 6 }).map((_, idx) => (
                    <div key={`skeleton-${idx}`} className="relative aspect-[4/3] md:aspect-[5/4] w-full bg-[#102D1E] animate-pulse border border-[#E8DCC4]/5" />
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 6. FOUNDER'S NOTE (LIGHT) */}
        {/* ========================================= */}
        <section className="bg-[#0A1C13] py-24 md:py-14">
          <div className="mx-auto w-full px-4 md:px-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
              className="relative w-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-[#E8DCC4]/10"
            >
              <Image
                src="/about/Founder Note.png"
                alt="Founder's Note - Aman Agarwal"
                width={1920}
                height={600}
                quality={100}
                className="h-auto w-full object-cover"
              />
            </motion.div>
          </div>
        </section>


        {/* ========================================= */}
        {/* 4. OPERATING SYSTEM (DARK) */}
        {/* ========================================= */}
        <section className="bg-[#0A1C13] px-6 pb-24 md:pb-32 pt-10 border-t border-[#E8DCC4]/5">
          <div className="mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-12">

              {/* Left Sidebar Title */}
              <motion.div variants={fadeUpVariant} className="md:col-span-3">
                <div className="border-l border-[#E8DCC4]/20 pl-4">
                  <h3 className="text-md font-bold uppercase tracking-widest text-[#8B5CF6]">
                    Our Operating <br /> System
                  </h3>
                </div>
              </motion.div>

              {/* Right Content - 5 Steps */}
              <motion.div variants={fadeUpVariant} className="md:col-span-9 flex flex-col md:flex-row justify-between gap-8 md:gap-4">
                {[
                  { num: "01", title: "RESEARCH", desc: "We dive deep into your business, audience and market." },
                  { num: "02", title: "BUILD", desc: "We create strategies, assets and systems that convert." },
                  { num: "03", title: "LAUNCH", desc: "We launch with precision, testing every variable that matters." },
                  { num: "04", title: "SCALE", desc: "We scale what works, optimize continuously and improve ROI." },
                  { num: "05", title: "REPEAT", desc: "We keep iterating to compound growth over time." },
                ].map((step, idx) => (
                  <div key={idx} className="flex-1 relative flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl font-light font-serif italic text-[#8B5CF6]">{step.num}</span>
                      {idx !== 4 && <ArrowRight className="text-[#C9BDA6] hidden md:block w-4 h-4" />}
                    </div>
                    <h4 className="text-xs font-bold tracking-widest text-[#8B5CF6] uppercase mb-3">{step.title}</h4>
                    <p className="text-xs text-[#C9BDA6] leading-relaxed pr-4">{step.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 5. OUR JOURNEY TIMELINE (LIGHT) */}
        {/* ========================================= */}
        <section className="bg-[#0A1C13] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-12">

              {/* Left Sidebar Title */}
              <motion.div variants={fadeUpVariant} className="md:col-span-3">
                <div className="border-l border-[#E8DCC4]/10 pl-4">
                  <h3 className="text-md font-bold uppercase tracking-widest text-[#8B5CF6]">
                    Our Journey
                  </h3>
                </div>
              </motion.div>

              {/* Right Content - Horizontal Timeline */}
              <motion.div variants={fadeUpVariant} className="md:col-span-9 relative pt-2">

                {/* Base Faded Horizontal Line - Nudged to center perfectly on the dots */}
                <div className="absolute top-[64px] left-0 w-full h-[2px] bg-[#E8DCC4]/10 hidden md:block z-0" />

                {/* Animated Flowing Blue Line - Nudged to center perfectly on the dots */}
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute top-[64px] left-0 h-[2px] bg-[#8B5CF6] hidden md:block z-0 origin-left"
                />

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
                  {[
                    { year: "2023", title: "20+ Brands", desc: "More brands, more responsibility." },
                    { year: "2024", title: "National Presence", desc: "Scaling systems. Building trust." },
                    { year: "2025", title: "150+ Projects", desc: "Still curious. Still building." },
                  ].map((item, idx) => (
                    <div key={idx} className="relative flex flex-col z-10">

                      {/* Year Container - Fixed height */}
                      <div className="h-[44px] flex items-end mb-4 md:mb-0">
                        <span className="text-3xl lg:text-[2.5rem] font-medium text-[#E8DCC4] leading-none">
                          {item.year}
                        </span>
                      </div>

                      {/* Timeline Dot - Aligned with the 2px line */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.3, duration: 0.4, type: "spring" }}
                        className="absolute top-13 left-0 w-3 h-3 rounded-full bg-[#8B5CF6] hidden md:block ring-4 ring-[#0A1C13] z-10"
                      />

                      {/* Text Content */}
                      <div className="md:pt-14">
                        <h4 className="text-lg font-bold text-[#E8DCC4] mb-2">{item.title}</h4>
                        <p className="text-sm md:text-base text-[#D8CDB8] leading-relaxed pr-2">{item.desc}</p>
                      </div>

                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================= */}
        {/* 7. FINAL CTA BANNER (DARK) */}
        {/* ========================================= */}
        <section className="bg-[#0A1C13] px-6 pb-14">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A1C13] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl"
            >
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#E8DCC4] tracking-tight leading-tight">
                  Not looking for an agency. <br />
                  Looking for a <span className="font-serif italic text-[#8B5CF6] font-light">growth partner?</span>
                </h2>
              </div>

              <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-end gap-8">
                <p className="text-md text-[#C9BDA6] max-w-xs leading-relaxed">
                  Whether you're starting from scratch or looking to scale, we're ready when you are.
                </p>
                <Link href="/contact" className="group shrink-0 flex items-center gap-4 text-[#E8DCC4] font-bold transition-colors hover:text-[#8B5CF6]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E8DCC4]/20 transition-all group-hover:border-[#8B5CF6]">
                    <ArrowUpRight className="h-6 w-6" />
                  </span>
                  Let's Talk
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
