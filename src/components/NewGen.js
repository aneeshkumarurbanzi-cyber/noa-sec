"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NewGen() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen bg-[#05070d] flex items-center px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative">
            
            <div className="absolute -top-4 -left-4 w-10 h-10 border-l-2 border-t-2 border-white/30"></div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-r-2 border-b-2 border-white/30"></div>

            <Image
              src="/newgen-monitors.png"
              width={600}
              height={400}
              alt="Cyber dashboard"
              className="rounded-md object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            NEXT-GEN <br />
            <span className="text-[#7dd3fc]">CYBERSECURITY</span> <br />
            POWERHOUSE
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            NoaSec is not just a provider; we are the architects of digital
            resilience. In a world where perimeter defense is no longer enough,
            we provide the offensive intelligence and defensive depth required
            to survive and thrive in the modern threat landscape.
          </p>

          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#7dd3fc]"></span>
              ELITE INTELLIGENCE GATHERING
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#7dd3fc]"></span>
              STATE-OF-THE-ART TRAINING LABS
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#7dd3fc]"></span>
              PROACTIVE THREAT NEUTRALIZATION
            </li>
          </ul>

        </div>
      </div>
    </motion.section>
  );
}