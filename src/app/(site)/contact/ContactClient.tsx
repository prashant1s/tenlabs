"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Send,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_EMAIL = "sales@tenlabs.online";

export default function ContactClient({ splineSlot }: { splineSlot: React.ReactNode }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Framer Motion Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };

  // Parallax values for the floating cards
  const floatX1 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const floatY1 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);
  const floatX2 = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) - 0.5;
    const y = (e.clientY / innerHeight) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Spline Entrance
      tl.fromTo(splineRef.current,
        { y: 80, scale: 0.85, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" }
      )
      // 2. Headline
      .fromTo(headlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=1.2"
      )
      // 3. Buttons
      .fromTo(buttonsRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.7"
      );

      // Form Scroll Reveal
      gsap.fromTo(formRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          }
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // --- FORM STATE ---
  // No backend: submitting just hands the message to the visitor's own mail
  // client via a mailto: link, so there's nothing here to rate-limit or spam-check.
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = String(formData.get("firstName") ?? "");
    const lastName = String(formData.get("lastName") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`New Project Inquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(`${message}\n\n---\nFrom: ${firstName} ${lastName}\nEmail: ${email}`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setIsSuccess(true);
  };

  return (
    <main
      className="min-h-screen bg-[#0A1C13] overflow-hidden font-sans selection:bg-[#8B5CF6] selection:text-[#E8DCC4]"
      onMouseMove={handleMouseMove}
    >
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative h-screen min-h-[600px] w-full flex flex-col items-center justify-start pt-28 md:pt-36 bg-[#102D1E] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#102D1E] via-[#1F3D2B] to-[#0A1C13] z-0" />
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#8B5CF6]/15 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none z-0" />

          <div className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-[1200px] mx-auto">
            <h1
              ref={headlineRef}
              className="text-[34px] md:text-[48px] lg:text-[64px] font-bold tracking-tight text-[#E8DCC4] leading-[1] max-w-[700px] mb-8 drop-shadow-xl"
            >
              Let's Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BFA8FF] to-[#8B5CF6]">Something Amazing.</span>
            </h1>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-5">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView()}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E8DCC4] text-[#0A1C13] rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          <div
            ref={splineRef}
            className="absolute left-1/2 -translate-x-1/2 bottom-[-5vh] w-full max-w-[1000px] h-[70vh] flex justify-center items-end pointer-events-none z-10"
          >
            <motion.div style={{ x: floatX1, y: floatY1 }} className="absolute top-[30%] left-[20%] lg:left-[28%] z-20 hidden md:block">
              <FloatingCard icon={<Mail className="w-4 h-4 text-[#E8DCC4]"/>} label="sales@tenlabs.online" delay={0} />
            </motion.div>

            <motion.div style={{ x: floatX2, y: floatY1 }} className="absolute top-[70%] left-[12%] lg:left-[20%] z-20 hidden md:block">
              <FloatingCard
                delay={0.6}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#E8DCC4]">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                }
                label="Prashant Singh"
                href="https://www.linkedin.com/in/prashant-singh-280306399/"
              />
            </motion.div>

            <div className="relative w-full h-full pointer-events-auto">
              {splineSlot}
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section id="contact-form" className="relative py-24 md:py-32 px-6 bg-[#0A1C13]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

            <div className="lg:col-span-5 flex flex-col justify-center text-[#E8DCC4]">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Drop us a line.</h2>
              <p className="text-[#C9BDA6] mb-12 text-lg">
                Fill out the form and our team will get back to you within 24 hours. We can't wait to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center shrink-0 border border-[#8B5CF6]/30">
                    <MapPin className="w-5 h-5 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#D8CDB8] font-medium mb-1">Visit Studio</p>
                    <p className="text-lg font-semibold text-[#E8DCC4]">123 Innovation Drive,<br/>Tech City, 400001</p>
                  </div>
                </div>
              </div>
            </div>

            <div ref={formRef} className="lg:col-span-7">
              <div className="bg-[#102D1E]/80 backdrop-blur-xl border border-[#E8DCC4]/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-[80px] pointer-events-none" />

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center h-full py-20 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mb-6 border border-[#8B5CF6]/50">
                      <Sparkles className="w-10 h-10 text-[#8B5CF6]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#E8DCC4] mb-2">Almost there!</h3>
                    <p className="text-[#C9BDA6]">
                      Your email app should now be open with your message ready to go —
                      just hit send. If nothing opened, write to us directly at{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#8B5CF6] underline underline-offset-2">
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 group">
                        <label htmlFor="firstName" className="text-sm font-medium text-[#D8CDB8] group-focus-within:text-[#8B5CF6] transition-colors">First Name</label>
                        <input id="firstName" name="firstName" required type="text" className="w-full bg-[#E8DCC4]/5 border border-[#E8DCC4]/10 rounded-xl px-5 py-4 text-[#E8DCC4] placeholder-[#C9BDA6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:bg-[#E8DCC4]/10 transition-all" placeholder="John" />
                      </div>
                      <div className="space-y-2 group">
                        <label htmlFor="lastName" className="text-sm font-medium text-[#D8CDB8] group-focus-within:text-[#8B5CF6] transition-colors">Last Name</label>
                        <input id="lastName" name="lastName" required type="text" className="w-full bg-[#E8DCC4]/5 border border-[#E8DCC4]/10 rounded-xl px-5 py-4 text-[#E8DCC4] placeholder-[#C9BDA6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:bg-[#E8DCC4]/10 transition-all" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <label htmlFor="email" className="text-sm font-medium text-[#D8CDB8] group-focus-within:text-[#8B5CF6] transition-colors">Email Address</label>
                      <input id="email" name="email" required type="email" className="w-full bg-[#E8DCC4]/5 border border-[#E8DCC4]/10 rounded-xl px-5 py-4 text-[#E8DCC4] placeholder-[#C9BDA6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:bg-[#E8DCC4]/10 transition-all" placeholder="john@company.com" />
                    </div>

                    <div className="space-y-2 group">
                      <label htmlFor="message" className="text-sm font-medium text-[#D8CDB8] group-focus-within:text-[#8B5CF6] transition-colors">Your Message</label>
                      <textarea id="message" name="message" required rows={4} className="w-full bg-[#E8DCC4]/5 border border-[#E8DCC4]/10 rounded-xl px-5 py-4 text-[#E8DCC4] placeholder-[#C9BDA6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:bg-[#E8DCC4]/10 transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full relative overflow-hidden group bg-gradient-to-r from-[#7445DA] to-[#8B5CF6] text-[#E8DCC4] rounded-xl py-4 font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Send Message
                      <div className="absolute inset-0 bg-[#E8DCC4]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}

function FloatingCard({ delay, top, left, right, icon, label, href }: { delay: number, top?: string, left?: string, right?: string, icon: React.ReactNode, label: string, href?: string }) {
  const CardContent = (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#E8DCC4]/5 backdrop-blur-xl border border-[#E8DCC4]/10 shadow-2xl animate-[float_4s_ease-in-out_infinite] hover:bg-[#E8DCC4]/10 transition-colors pointer-events-auto" style={{ top, left, right, animationDelay: `${delay}s` }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}} />
      <div className="w-6 h-6 rounded-full flex items-center justify-center opacity-80">
        {icon}
      </div>
      <span className="text-[#E8DCC4]/90 text-xs font-medium">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block cursor-pointer hover:scale-105 transition-transform pointer-events-auto">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
