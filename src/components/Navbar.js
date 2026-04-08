"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Courses", id: "courses" },
  
  
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (link) => {
    setActive(link.name);
    setMenuOpen(false);

    // ✅ If NOT on homepage → go to home first
    if (pathname !== "/") {
      router.push(`/#${link.id}`);
      return;
    }

    // ✅ If already on homepage → scroll
    const section = document.getElementById(link.id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-sm border-b border-white/5">
      <div className="flex items-center justify-between px-6 md:px-8 py-4">

        {/* Logo */}
        <button
          onClick={() => handleScroll({ name: "Home", id: "home" })}
          className="flex items-center gap-2"
        >
          <Image src="/logo.png" alt="logo" width={36} height={36} />
          <span className="text-white font-semibold text-lg">NoaSec</span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(link)}
                className={`text-sm ${
                  active === link.name
                    ? "text-white underline"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact Page */}
        <Link
          href="/contact"
          className="hidden md:block px-5 py-2 bg-[#0ea5e9] text-white rounded-md hover:bg-[#38bdf8]"
        >
          Contact
        </Link>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-[#0a0a0f] border-t border-white/5">

          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link)}
              className="text-left text-gray-400"
            >
              {link.name}
            </button>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2 bg-[#0ea5e9] text-white rounded-md text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}