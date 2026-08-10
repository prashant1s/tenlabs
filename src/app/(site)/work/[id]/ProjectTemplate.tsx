"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// =========================================
// ANIMATION VARIANTS
// =========================================
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// =========================================
// YOUTUBE VIDEO COMPONENT (Reduced Height)
// =========================================
function YouTubeShowcase({ url }: { url: string }) {
  const [isInView, setIsInView] = useState(false);

  // Check if the URL is a YouTube Short
  const isShort = url?.includes("shorts/");

  // Extract YouTube ID from various URL formats
  const getYouTubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(url);

  if (!videoId) {
    return (
      <div className="w-full aspect-21/9 bg-[#101218] rounded-[2rem] flex items-center justify-center border border-white/10 text-[#9aa0ac] font-medium">
        Valid YouTube URL required.
      </div>
    );
  }

  // Reduced Height Ratios:
  // Landscape videos now use aspect-[21/9] which is significantly shorter in height than aspect-video (16:9).
  // Shorts remain aspect-[9/16] so they don't distort, but get a max-height so they aren't overly tall.
  const containerClasses = isShort
    ? "relative w-full max-w-[350px] mx-auto aspect-[9/16] bg-[#101218] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40 border border-white/10"
    : "relative w-full aspect-21/9 bg-[#101218] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40 border border-white/10";

  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.3 }}
      className={containerClasses}
    >
      {isInView && (
        <iframe
          // The scale-[1.35] is added back ONLY for standard landscape videos.
          // This zooms the video in slightly to fill the shorter 21:9 frame and eliminates black bars.
          className={`absolute inset-0 w-full h-full pointer-events-none ${!isShort && "scale-[1.35]"}`}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </motion.div>
  );
}
// =========================================
// MAIN TEMPLATE COMPONENT
// =========================================
export default function ProjectTemplate({ project }: { project: any }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const hasBannerImage = Boolean(project.bannerImage);

  return (
    <>
      <main className="min-h-screen bg-[#07070a]">

        {/* 1. INITIAL TEXT SECTION */}
        <section className="pt-32 md:pt-44 pb-12 px-4 md:px-8 mx-auto w-full max-w-325 flex flex-col items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full"
          >
            <motion.div variants={fadeUpVariant} className="mb-6 flex flex-wrap gap-3">
              {(project.services || []).map((service: string) => (
                <span
                  key={service}
                  className="rounded-full border border-[#6D7CF7]/25 bg-[#6D7CF7]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#9fb0ff]"
                >
                  {service}
                </span>
              ))}
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="text-3xl font-extrabold tracking-tight text-[#f3f4f6] md:text-4xl lg:text-5xl leading-[1.2]">
              {project.heroPreTitle}
              {project.heroHighlight && (
                <span className="text-[#6D7CF7]"> {project.heroHighlight} </span>
              )}
              {project.heroPostTitle}
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="mt-6 w-full text-base md:text-lg font-medium text-[#9aa0ac] leading-relaxed">
              {project.description}
            </motion.p>
          </motion.div>
        </section>

        {/* 2. SCROLL-REVEAL BANNER SECTION */}
        <div className="px-4 md:px-8 mx-auto w-full max-w-400 pb-12">
          <motion.section
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative isolate flex min-h-100 md:min-h-162.5 flex-col justify-center overflow-hidden rounded-[2.5rem] bg-[#101218] shadow-2xl shadow-black/40 border border-white/10"
          >
            {hasBannerImage && (
              <>
                <Image
                  src={project.bannerImage}
                  alt={`${project.brand || "Case study"} banner`}
                  fill
                  priority
                  sizes="100vw"
                  className="absolute inset-0 z-0 object-cover"
                />
                <div className="absolute inset-0 z-1 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
              </>
            )}
          </motion.section>
        </div>

        {/* 3. RESULTS GRID */}
        {project.stats && project.stats.length > 0 && (
          <div className="mx-auto max-w-7xl px-6 md:px-12 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-[2rem] bg-[#101218] p-8 md:p-12 shadow-xl shadow-black/40 border border-white/10"
            >
              {project.stats.map((result: any, i: number) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-bold text-[#6D7CF7] md:text-4xl mb-2">
                    {result.stat}
                  </span>
                  <span className="text-base font-medium text-[#9aa0ac] leading-snug">
                    {result.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* 4. CHALLENGE & STRATEGY */}
        <section className="px-6 py-20 md:py-20">
          <div className="mx-auto max-w-7xl">
            {project.challenges && project.challenges.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="mb-24 grid gap-12 md:grid-cols-12 md:gap-20"
              >
                <motion.div variants={fadeUpVariant} className="md:col-span-4">
                  <h2 className="text-3xl font-bold tracking-tight text-[#f3f4f6] md:text-5xl">The Challenge</h2>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="grid gap-8 md:col-span-8 md:grid-cols-2">
                  {project.challenges.map((challenge: any, i: number) => (
                    <div key={i}>
                      <h3 className="text-xl font-bold text-[#f3f4f6]">{challenge.title}</h3>
                      <p className="mt-3 text-[#9aa0ac]">{challenge.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {project.strategies && project.strategies.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="grid gap-12 border-t border-white/10 pt-24 md:grid-cols-12 md:gap-20"
              >
                <motion.div variants={fadeUpVariant} className="md:col-span-4">
                  <h2 className="text-3xl font-bold tracking-tight text-[#f3f4f6] md:text-5xl">Our Strategy</h2>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="grid gap-8 md:col-span-8 md:grid-cols-2">
                  {project.strategies.map((strat: any, i: number) => (
                    <div key={i} className="rounded-2xl bg-[#101218] p-8 border border-white/10">
                      <h3 className="text-xl font-bold text-[#f3f4f6]">{strat.title}</h3>
                      <p className="mt-3 text-[#9aa0ac] leading-relaxed">{strat.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>
        </section>

        {/* 5. FEATURED MEDIA (Images + Conditional Video) */}
        {((project.images && project.images.length > 0) || project.videoUrl) && (
          <section className="bg-[#0a0a0e] px-6 py-14 md:py-12">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl font-bold tracking-tight text-[#f3f4f6] md:text-4xl">Featured Work</h2>
              </motion.div>
              <div className="grid gap-8 md:grid-cols-2 items-start">

                {/* Standard Images */}
                {project.images?.map((img: any, i: number) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="w-full rounded-3xl overflow-hidden flex items-center justify-center">
                      {img.url ? (
                        <Image
                          src={img.url}
                          alt={img.title || `Featured work ${i + 1}`}
                          width={1200}
                          height={1200}
                          className="w-full h-auto object-contain"
                        />
                      ) : (
                        <div className="aspect-video w-full flex items-center justify-center bg-[#161925] rounded-3xl">
                           <span className="text-[#6e7480] font-medium">[ Image Placeholder ]</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#f3f4f6]">{img.title}</h4>
                      <p className="text-sm text-[#9aa0ac]">{img.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Place video IN the grid ONLY if there is no 2nd image */}
                {project.videoUrl && (!project.images || project.images.length < 2) && (
                  <div className="flex flex-col gap-4 w-full h-full justify-center">
                    <YouTubeShowcase url={project.videoUrl} />
                    <div>
                      {/* <h4 className="font-bold text-[#f3f4f6]">Project Video</h4>
                      <p className="text-sm text-[#9aa0ac]">Watch the final outcome</p> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 6. YOUTUBE VIDEO SHOWCASE (Fallback if 2+ images exist) */}
        {project.videoUrl && project.images && project.images.length >= 2 && (
          <section className="bg-[#07070a] py-12 md:py-16 px-4 md:px-8">
            <div className="mx-auto max-w-7xl flex justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <YouTubeShowcase url={project.videoUrl} />
              </motion.div>
            </div>
          </section>
        )}

        {/* 7. OUTCOME & LEARNINGS */}
        <section className="px-6 py-14 md:py-10">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid gap-16 md:grid-cols-2 md:gap-24"
            >
              <motion.div variants={fadeUpVariant}>
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-[#f3f4f6] md:text-4xl">The Outcome</h2>
                <ul className="space-y-6">
                  {(project.outcomes || []).map((item: any, i: number) => (
                    <li key={i} className="flex flex-col">
                      <span className="font-bold text-[#6D7CF7]">{item.title}</span>
                      <span className="text-[#9aa0ac] font-medium">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-[#f3f4f6] md:text-4xl">Key Learnings</h2>
                <div className="space-y-8">
                  {(project.learnings || []).map((learning: any, i: number) => (
                    <div key={i}>
                      <h4 className="font-bold text-[#f3f4f6]">{learning.title}</h4>
                      <p className="mt-1 text-[#9aa0ac]">{learning.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 8. BOTTOM QUOTE */}
        {project.quote && (
          <section className="bg-[#07070a] px-6 py-20 md:py-22">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <svg className="mx-auto mb-8 h-7 w-12 text-[#6D7CF7]/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <h2 className="text-2xl font-medium leading-relaxed text-white md:text-2xl md:leading-snug">
                  "{project.quote}"
                </h2>
              </motion.div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
