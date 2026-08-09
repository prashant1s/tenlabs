"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "@/lib/data";

export function LogoWall() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      // Replaced 'section-padding' with explicit smaller padding (py-12 md:py-16)
      className="border-y border-slate-100 bg-white py-12 md:py-12"
    >
      <div className="mx-auto max-w-8xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Reduced margin-bottom from mb-12 to mb-8
          className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400"
        >
          Our Partners
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-10 px-6 md:gap-18 lg:gap-15">
          {partners.map((partner, i) => {
            // 1. We declare the condition here inside the map loop
            const isHeavyLogo = partner.name?.toLowerCase().includes("hotstar") || partner.name?.toLowerCase().includes("jio");

            // 2. We use 'return' to render the JSX
            return (
              <div
                key={`${partner.name}-${i}`}
                className="flex shrink-0 items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  // Increased base resolution again to maintain maximum crispness
                  width={500} 
                  height={200}
                  quality={100}
                  // Bumped up the rendering heights, but scaling down JioHotstar
                  className={`w-auto object-contain transition-all ${
                    isHeavyLogo 
                      ? "h-12 md:h-16 lg:h-20 rounded-xl shadow-sm" 
                      : "h-24 md:h-32 lg:h-40"                       
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}