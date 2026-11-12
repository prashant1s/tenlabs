"use client";

import { motion, Variants } from "framer-motion";
import { whyUs } from "@/lib/data";

// Consistent Framer Motion reveal orchestration
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#0A1C13] py-12 md:py-20"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#8B5CF6]/[0.035] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading Module matching other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-2xl px-6 md:mb-16 lg:px-8"
        >
          <p className="text-md font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
            Why Brands Work With Us
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#E8DCC4] md:text-5xl">
            One partner. Every capability.
          </h2>
        </motion.div>

        {/* Instanced Framer Motion Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="px-2 sm:px-4 lg:px-8 grid gap-4 md:grid-cols-2"
        >
          {whyUs.map((item, i) => (
            <motion.div
              variants={cardVariants}
              key={item.title}
              className="group flex flex-col gap-4 rounded-3xl border border-[#E8DCC4]/10 bg-[#102D1E] p-7 transition-all duration-300 hover:border-[#8B5CF6]/50 hover:shadow-lg hover:shadow-[#8B5CF6]/10 sm:flex-row sm:gap-6 sm:p-8"
            >
              <div className="w-16 shrink-0 text-4xl font-bold leading-none tracking-tighter text-[#8B5CF6] transition-transform duration-300 group-hover:-translate-y-1 md:text-5xl">
                0{i + 1}
              </div>
              
              <div className="min-w-0">
                <h3 className="text-xl font-bold leading-tight text-[#E8DCC4] transition-colors duration-300 group-hover:text-[#8B5CF6]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#D8CDB8]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
