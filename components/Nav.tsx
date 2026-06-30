"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-accent">
          sachi<span className="text-ink">@</span>portfolio
          <span className="animate-blink">_</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 font-mono text-xs text-muted">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent transition-colors">
                <span className="text-accent2">{`0${i + 1}.`}</span> {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Sachi_Prasad_Resume.pdf"
          className="font-mono text-xs border border-line px-3 py-1.5 rounded hover:border-accent hover:text-accent transition-colors"
        >
          ./resume.pdf
        </a>
      </nav>
    </motion.header>
  );
}
