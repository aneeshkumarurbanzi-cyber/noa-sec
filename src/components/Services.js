import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Network Penetration Testing",
      desc: "Rigorous offensive assessments targeting your core infrastructure to identify mission-critical gaps.",
      cta: "Learn More",
      href: "/services/network-penetration-testing",
    },
    {
      title: "Managed SOC Operations",
      desc: "24/7 technical surveillance and incident response powered by our proprietary threat intelligence.",
      cta: "Learn More",
      href: "/services/managed-soc-operations",
    },
    {
      title: "Digital Evidence Collection",
      desc: "Post-breach analysis and recovery protocols to secure chain of custody and understand vector origin.",
      cta: "Learn More",
      href: "/services/digital-evidence-collection",
    },
    {
      title: "Cloud Security Solutions",
      desc: "Hardening multi-cloud architectures with zero-trust principles and containerized safety locks.",
      cta: "Learn More",
      href: "/services/cloud-security-solutions",
    },
    {
      title: "Web Application Pentesting",
      desc: "Deep-dive assessments of web apps targeting OWASP Top 10.",
      cta: "Learn More",
      href: "/services/web-application-pentesting",
    },
    {
      title: "Vulnerability Assessment",
      desc: "Systematic scanning and prioritization of vulnerabilities.",
      cta: "Learn More",
      href: "/services/vulnerability-assessment",
    },
    {
      title: "Incident Response Services",
      desc: "Rapid containment and recovery workflows.",
      cta: "Learn More",
      href: "/services/incident-response-services",
    },
    {
      title: "Threat Intelligence Hunting",
      desc: "Proactive threat hunting using intelligence feeds.",
      cta: "Learn More",
      href: "/services/threat-intelligence-hunting",
    },
    {
      title: "Disk & Memory Forensics",
      desc: "Deep forensic extraction and analysis.",
      cta: "Learn More",
      href: "/services/disk-memory-forensics",
    },
    {
      title: "Malware Analysis",
      desc: "Static and dynamic malware dissection.",
      cta: "Learn More",
      href: "/services/malware-analysis",
    },
    {
      title: "Server & Firewall Hardening",
      desc: "CIS-benchmark hardening of systems.",
      cta: "Learn More",
      href: "/services/server-firewall-hardening",
    },
    {
      title: "Linux & Windows Administration",
      desc: "Secure OS-level administration and patching.",
      cta: "Learn More",
      href: "/services/linux-windows-administration",
    },
  ];

  return (
    <section className="bg-[#0a0a0f] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <section id="services"></section>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Enterprise Shielding Services
        </h2>

        <p className="text-gray-400 text-sm max-w-md mb-12">
          Bespoke security solutions for high-stakes environments.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-4 p-6 rounded-xl bg-[#0d1520] border border-white/10 hover:border-[#0ea5e9]/40 transition group"
            >
              <div>
                <h3 className="text-white font-semibold text-sm mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* ✅ FIXED LINK */}
              <Link
                href={s.href}
                className="mt-auto text-[#0ea5e9] text-xs font-semibold tracking-widest uppercase hover:text-[#38bdf8]"
              >
                {s.cta} →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}