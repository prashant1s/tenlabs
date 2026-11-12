"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function GlobalPresence() {
  return (
    <section className="bg-[#0A1C13] py-6 md:py-8">
      <div className="mx-auto w-full max-w-8xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          // Keeps the rounded corners and subtle shadow visible
          className="relative w-full overflow-hidden rounded-[1.5rem] border border-[#E8DCC4]/8 shadow-2xl shadow-black/40 md:rounded-[2rem]"
        >
          <Image
            src="/global-presence.png"
            alt="Building Brands Across Borders - India, UK, UAE, USA"
            width={1920}
            height={600}
            quality={100}
            className="h-auto w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
