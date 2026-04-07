"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home" // ✅ FIXED
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f] scroll-mt-24"
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-24 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-[#0ea5e9]/40 bg-[#0ea5e9]/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-pulse" />
            <span className="text-[#0ea5e9] text-xs font-semibold tracking-widest uppercase">
              Securing the Future
            </span>
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-white"
          >
            Defend. Detect.{" "}
            <span className="text-[#0ea5e9]">Dominate.</span>
          </motion.h1>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-base leading-relaxed max-w-md"
          >
            Real-World Cybersecurity Training & Expert Security Services —
            Kottayam | Kerala. NoaSec prepares cybersecurity professionals and
            protects organizations through practical, industry-aligned training.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <Link
              href="/#courses" // ✅ FIX (works from any page)
              className="px-6 py-3 rounded-md bg-[#0ea5e9] hover:bg-[#38bdf8] text-white text-sm font-semibold transition"
            >
              Explore Our Courses
            </Link>

            <Link
              href="/#services" // ✅ FIX
              className="px-6 py-3 text-white text-sm font-semibold border border-white/20 rounded-md hover:bg-white/5 transition"
            >
              View Security Services
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-full max-w-lg rounded-xl overflow-hidden border border-white/10 aspect-[4/3] bg-[#0d1520]"
          >
            <Image
              src="/hero-monitors.png"
              width={720}
              height={480}
              alt="dashboard"
              className="w-full object-cover"
            />
          </motion.div>

          {/* Floating stat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-6 right-4 md:-right-4 flex items-center gap-3 bg-[#0d1520]/90 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0ea5e9]/10 border border-[#0ea5e9]/30">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <div>
              <span className="text-white text-xl font-bold">100%</span>
              <p className="text-gray-400 text-[11px] uppercase">Practical</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}