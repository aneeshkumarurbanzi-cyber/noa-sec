"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#05070d] text-white py-20 px-6 md:px-16 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Enterprise Security <br /> Services
          </h2>

          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0c0f17] border border-white/10">
                🎯
              </div>
              <div>
                <h3 className="font-semibold">Penetration Testing</h3>
                <p className="text-gray-400 text-sm">
                  Identifying and exploiting vulnerabilities before attackers do.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0c0f17] border border-white/10">
                📊
              </div>
              <div>
                <h3 className="font-semibold">SOC Operations</h3>
                <p className="text-gray-400 text-sm">
                  24/7 monitoring and response for your critical infrastructure.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0c0f17] border border-white/10">
                🧬
              </div>
              <div>
                <h3 className="font-semibold">Digital Forensics</h3>
                <p className="text-gray-400 text-sm">
                  Deep analysis and evidence collection for digital incidents.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0c0f17] border border-white/10">
                ☁️
              </div>
              <div>
                <h3 className="font-semibold">Cloud Security</h3>
                <p className="text-gray-400 text-sm">
                  Hardening cloud environments against cloud-native threats.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/server-rack.jpg"
            alt="Server racks"
            width={600}
            height={800}
            className="rounded-xl object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent rounded-xl"></div>
        </div>

      </div>
    </motion.section>
  );
}