"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "Network Penetration Testing", desc: "Rigorous offensive assessments targeting your core infrastructure.", href: "/#" },
    { title: "Web Application Pen Testing", desc: "Deep testing of web apps targeting OWASP Top 10 vulnerabilities.", href: "/#" },
    { title: "Mobile Application Pen Testing", desc: "Security testing for Android and iOS apps.", href: "/#" },
    { title: "API Pen Testing", desc: "Testing APIs for authentication flaws and data leaks.", href: "/#" },
    { title: "Cloud Pen Testing", desc: "Security assessments for AWS, Azure, and cloud-native environments.", href: "/#" },
    { title: "Server & Firewall Hardening", desc: "CIS benchmark-based hardening of systems.", href: "/#" },
    { title: "Linux & Windows Hardening", desc: "OS-level hardening and secure configurations.", href: "/#" },
    { title: "Cloud Security Solutions", desc: "Zero-trust architecture and cloud protection.", href: "/#" },
    { title: "Managed SOC Operations", desc: "24/7 monitoring, detection, and response.", href: "/#" },
    { title: "Incident Response Services", desc: "Rapid containment and recovery from attacks.", href: "/#" },
    { title: "Threat Intelligence Hunting", desc: "Proactive threat hunting using intelligence feeds.", href: "/#" },
    { title: "Malware Analysis", desc: "Static and dynamic malware analysis.", href: "/services/malware-analysis" },
    { title: "Disk & Memory Forensics", desc: "Forensic analysis of storage and memory.", href: "/#" },
    { title: "Digital Evidence Collection", desc: "Secure evidence handling and investigation.", href: "/#" },
  ];

  return (
    <section id="services" className="bg-[#0a0a0f] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Enterprise Shielding Services
          </h2>

          
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">

          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between p-6 rounded-xl bg-[#0d1520] border border-white/10 hover:border-[#0ea5e9]/40 transition group"
            >
              <div>
                <h3 className="text-white font-semibold text-sm mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <Link
                href={s.href}
                className="mt-6 text-[#0ea5e9] text-xs font-semibold tracking-widest uppercase hover:text-[#38bdf8]"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}