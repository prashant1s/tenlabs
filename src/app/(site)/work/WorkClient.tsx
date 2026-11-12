"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, ChevronDown, BarChart3, Target, TrendingUp, ShieldCheck, LineChart } from "lucide-react";
import Image from "next/image";

// NEW: Updated categories list
const categories = [
  "All Case Studies",
  "E-commerce",
  "Retail",
  "Health & Wellness",
  "Hospitality & Food",
  "Fashion & Lifestyle",
  "Automotive"
];

const ITEMS_PER_PAGE = 6;

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

// Types mapped from Sanity
interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  title: string;
  desc: string;
  category: string;
  date: string;
  metrics: Metric[];
  image: string;
}

export default function WorkClient({ initialCaseStudies }: { initialCaseStudies: CaseStudy[] }) {
  const [activeFilter, setActiveFilter] = useState("All Case Studies");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, sortOrder]);

  // 1. Filter
  const filteredStudies = activeFilter === "All Case Studies"
    ? initialCaseStudies
    : initialCaseStudies.filter((study) => study.category === activeFilter);

  // 2. Sort
  const sortedStudies = [...filteredStudies].sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  // 3. Paginate
  const totalPages = Math.ceil(sortedStudies.length / ITEMS_PER_PAGE);
  const paginatedStudies = sortedStudies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen bg-[#14281C] pb-24">

        {/* HERO SECTION */}
        <div className="bg-[#274B36] pt-32 pb-20 lg:pb-32 rounded-b-[2rem] lg:rounded-b-[4rem]">
          <section className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
              {/* Left Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl pt-10"
              >
                <motion.p variants={fadeUpVariant} className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B5CF6]">
                  Our Work
                </motion.p>
                <motion.h1 variants={fadeUpVariant} className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#E8DCC4] md:text-6xl lg:text-[4rem]">
                  Case Studies That Speak for <span className="text-[#8B5CF6]">Results</span>
                </motion.h1>
                <motion.p variants={fadeUpVariant} className="mt-6 text-lg text-[#C1B59E]">
                  We help ambitious brands grow with data-driven Meta Ads, Google Ads, and e-commerce strategies that deliver real business outcomes.
                </motion.p>

                {/* Icon Grid */}
                <motion.div variants={fadeUpVariant} className="mt-10 grid grid-cols-4 gap-4 text-center">
                  {[
                    { icon: <BarChart3 className="mx-auto mb-3 h-6 w-6 text-[#8B5CF6]" />, label: "Data-Driven\nStrategies" },
                    { icon: <TrendingUp className="mx-auto mb-3 h-6 w-6 text-[#8B5CF6]" />, label: "Proven\nResults" },
                    { icon: <ShieldCheck className="mx-auto mb-3 h-6 w-6 text-[#8B5CF6]" />, label: "Transparent\nReporting" },
                    { icon: <Target className="mx-auto mb-3 h-6 w-6 text-[#8B5CF6]" />, label: "Growth\nFocused" },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8B5CF6]/10">
                        {item.icon}
                      </div>
                      <span className="mt-3 whitespace-pre-line text-xs font-bold text-[#C1B59E]">{item.label}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Image & Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden h-[600px] w-full lg:block"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[450px] w-[350px] overflow-hidden rounded-[3rem] bg-gradient-to-b from-[#315B43] to-[#274B36] shadow-2xl shadow-black/40 border border-[#E8DCC4]/10">

                    <Image 
                      src="/header/workbanner.webp"
                      alt="Work case studies presentation"
                      fill
                      priority
                      className="object-cover"
                    />

                    {/* Gradient overlay to make it look premium and blend nicely */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14281C]/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating Stat 1 - Purple Theme (Matched to Reference Image) */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  // Changed bg to match and updated shadow to be PURPLE instead of blue
                  className="absolute -left-6 top-[15%] rounded-[24px] bg-[#8B5CF6] p-6 shadow-[0_16px_40px_rgba(139,92,246,0.45)]"
                >
                  <p className="text-sm font-medium text-[#E8DCC4]/90">Monthly Revenue</p>
                  <p className="mt-1 text-3xl font-black tracking-tight text-[#E8DCC4]">₹10L+</p>
                  <LineChart className="mt-4 h-8 w-8 text-[#E8DCC4] stroke-[2]" />
                </motion.div>

                {/* Floating Stat 2 - Blue Theme */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-[20%] rounded-[24px] bg-[#8B5CF6] p-6 shadow-[0_16px_40px_rgba(139,92,246,0.45)]"
                >
                  <p className="text-sm font-medium text-[#E8DCC4]/90">Google Ads</p>
                  <p className="mt-1 text-3xl font-black tracking-tight text-[#E8DCC4]">10X</p>
                  <p className="mt-3 text-xs font-bold text-[#E8DCC4]/90">ROAS Achieved</p>
                </motion.div>

                {/* Floating Stat 3 - Blue Theme */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 bottom-[15%] rounded-[24px] bg-[#8B5CF6] p-6 shadow-[0_16px_40px_rgba(139,92,246,0.45)]"
                >
                  <p className="text-sm font-medium text-[#E8DCC4]/90">Store Footfall</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <p className="text-3xl font-black tracking-tight text-[#E8DCC4]">+45%</p>
                    <span className="text-sm font-bold text-[#E8DCC4]">
                      ↑ Walk-ins
                    </span>
                  </div>
                  <p className="mt-3 text-[11px] font-medium text-[#E8DCC4]/80">vs Previous Period</p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* FILTERS & SORT */}
        <section className="mx-auto mt-24 max-w-7xl px-6 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 border-b border-[#E8DCC4]/10 pb-8 md:flex-row md:items-center">
            
            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                    activeFilter === cat
                      ? "border-[#8B5CF6] bg-[#8B5CF6] text-[#E8DCC4] shadow-lg shadow-[#8B5CF6]/20"
                      : "border-[#E8DCC4]/10 bg-transparent text-[#A89C86] hover:border-[#8B5CF6]/50 hover:text-[#E8DCC4]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Custom Sort Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="flex items-center gap-2 rounded-xl border border-[#315B43] bg-[#274B36] px-5 py-2.5 text-sm font-semibold text-[#E8DCC4] transition-colors hover:border-[#E8DCC4]/20"
              >
                Sort by: {sortOrder === "newest" ? "Newest" : "Oldest"}
                <ChevronDown className={`h-4 w-4 text-[#A89C86] transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {sortDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setSortDropdownOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full z-50 mt-2 w-full min-w-[160px] overflow-hidden rounded-xl border border-[#315B43] bg-[#274B36] shadow-xl shadow-black/40"
                    >
                      <button
                        onClick={() => { setSortOrder("newest"); setSortDropdownOpen(false); }}
                        className={`block w-full px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-[#E8DCC4]/5 ${sortOrder === "newest" ? "text-[#8B5CF6]" : "text-[#D7CAB2]"}`}
                      >
                        Newest
                      </button>
                      <button
                        onClick={() => { setSortOrder("oldest"); setSortDropdownOpen(false); }}
                        className={`block w-full px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-[#E8DCC4]/5 ${sortOrder === "oldest" ? "text-[#8B5CF6]" : "text-[#D7CAB2]"}`}
                      >
                        Oldest
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CASE STUDY GRID */}
        <section className="mx-auto mt-12 max-w-6xl px-6 md:px-8">
          {paginatedStudies.length === 0 ? (
            <div className="py-20 text-center text-[#C1B59E]">No case studies found in this category.</div>
          ) : (
            <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {paginatedStudies.map((study) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={study.id}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-[#E8DCC4]/5 bg-[#274B36] shadow-lg shadow-black/40 transition-colors hover:border-[#8B5CF6]/40"
                  >
                    {/* Image Top Half */}
                    <div className="relative aspect-3/2 w-full overflow-hidden bg-[#274B36] border-b border-[#315B43]">
                      <div className="absolute left-4 top-4 z-10 rounded-full border border-[#E8DCC4]/10 bg-[#14281C]/40 px-3 py-1 text-xs font-semibold text-[#E8DCC4] backdrop-blur-md">
                        {study.category}
                      </div>
                      {study.image ? (
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-[#A89C86] transition-transform duration-700 group-hover:scale-105">
                          [ Image Placeholder ]
                        </div>
                      )}
                    </div>

                    {/* Content Bottom Half */}
                    <div className="flex flex-1 flex-col p-3">
                      <h3 className="text-xl font-semibold text-[#E8DCC4]">{study.title}</h3>
                      <p className="mt-1 text-sm text-[#A89C86]">{study.desc}</p>

                      {/* Dynamic Metric Stats Grid (Fixed for Text Overflow) */}
                      {study.metrics && study.metrics.length > 0 && (
                        <div className="mt-auto pt-2">
                          <div className="grid grid-cols-2 gap-x-4 gap-y-4 border-t border-[#E8DCC4]/10 pt-4">
                            {study.metrics.map((metric, idx) => (
                              <div key={idx} className="flex flex-col">
                                <span className={`text-base md:text-lg font-semibold leading-tight wrap-break-word ${idx === study.metrics.length - 1 ? 'text-[#8B5CF6]' : 'text-[#E8DCC4]'}`}>
                                  {metric.value}
                                </span>
                                <span className="mt-1 text-[11px] font-medium tracking-wider text-[#A89C86] wrap-break-word line-clamp-2">
                                  {metric.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <Link
                        href={`/work/${study.id}`}
                        className="mt-3 flex items-center justify-between text-sm font-semibold text-[#D7CAB2] transition-colors group-hover:text-[#E8DCC4]"
                      >
                        View Case Study
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:text-[#8B5CF6]" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </section>

        {/* DYNAMIC PAGINATION */}
        {totalPages > 1 && (
          <section className="mt-16 flex justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold transition-all ${
                  currentPage === i + 1
                    ? "bg-[#8B5CF6] text-[#E8DCC4] shadow-lg shadow-[#8B5CF6]/20"
                    : "border border-[#E8DCC4]/10 bg-transparent text-[#A89C86] hover:bg-[#E8DCC4]/5 hover:text-[#E8DCC4]"
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            {currentPage < totalPages && (
              <button 
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8DCC4]/10 bg-transparent text-[#A89C86] transition-all hover:bg-[#E8DCC4]/5 hover:text-[#E8DCC4]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </section>
        )}

        {/* BOTTOM CTA BAR */}
        <section className="mx-auto mt-24 max-w-7xl px-6 md:px-8">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-[#E8DCC4]/10 bg-gradient-to-r from-[#274B36] to-[#14281C] p-8 shadow-2xl shadow-black/40 md:flex-row md:p-12">
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#8B5CF6]/10">
                <TrendingUp className="h-8 w-8 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#E8DCC4]">Ready to Be Our Next Success Story?</h3>
                <p className="mt-2 text-[#C1B59E]">Let's grow your brand with performance-driven strategies.</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group flex shrink-0 items-center gap-2 rounded-xl bg-[#8B5CF6] px-8 py-4 text-sm font-bold text-[#E8DCC4] transition-all hover:bg-[#7445DA]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

      </main>
      {/* <Footer /> */}
    </>
  );
}
