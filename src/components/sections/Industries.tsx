"use client";

import { motion, Variants } from "framer-motion";
import {
  Sofa,
  Hotel,
  Stethoscope,
  Shirt,
  Gem,
  UtensilsCrossed,
  Landmark,
  Car,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Sofa,
  Hotel,
  Stethoscope,
  Shirt,
  Gem,
  UtensilsCrossed,
  Landmark,
  Car,
};

// Match the precise reveal stagger choreography from the Work section
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

function IndustryCard({
  name,
  icon,
  className = "",
}: {
  name: string;
  icon: string;
  className?: string;
}) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      variants={cardVariants}
      className={`industry-card group relative overflow-hidden rounded-2xl border border-[#E8DCC4]/5 bg-[#274B36] p-6 shadow-sm transition-all duration-500 hover:border-[#8B5CF6]/40 hover:shadow-lg hover:shadow-[#8B5CF6]/10 ${className}`}
    >
      {/* Simple radial glow fading in on hover */}
      <div className="industry-card-glow absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#8B5CF6]/15 group-hover:text-[#E8DCC4]">
        {Icon && <Icon className="h-6 w-6" strokeWidth={1.75} />}
      </div>

      <h3 className="relative z-10 mt-4 text-base font-semibold text-[#E8DCC4] transition-colors duration-300 group-hover:text-[#8B5CF6]">
        {name}
      </h3>
    </motion.div>
  );
}

export function Industries() {
  return (
    <section
      id="industries"
      // Section background set to pure dark
      className="py-10 md:py-16 bg-[#14281C]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading Module matching FeaturedWork scroll reveal */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10 text-center"
        >
          <p className="text-md font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
            Industries
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#E8DCC4] md:text-4xl">
            Deep expertise across verticals.
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-[#D7CAB2]">
            From boutique hospitality to fast scaling D2C - we understand the
            nuances that drive growth in your category.
          </p>
        </motion.div>

        {/* Instanced Framer Motion Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 px-6 sm:px-6 lg:px-8"
        >
          {industries.map((industry, i) => (
            <IndustryCard
              key={industry.name}
              name={industry.name}
              icon={industry.icon}
              className={
                i === industries.length - 1 && industries.length % 2 !== 0
                  ? "col-span-2 sm:col-span-1 lg:col-span-1"
                  : ""
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
