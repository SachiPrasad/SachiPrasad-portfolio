"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const COMMAND = "whoami --role=engineer --focus=security,data";
const OUTPUT_LINES = [
  `> name: ${profile.name}`,
  `> role: ${profile.role}`,
  `> status: open to internships & full-time roles`,
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 250);
      }
    }, 38);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-grid-pattern overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg to-bg pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.07]">
        <div className="h-40 w-full bg-gradient-to-b from-transparent via-accent to-transparent animate-scan" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            // available for internships &amp; new-grad roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-700 leading-[1.05] text-glow"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-lg sm:text-xl text-muted font-display"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded bg-accent text-bg font-mono text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              view_projects()
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded border border-line font-mono text-sm hover:border-accent hover:text-accent transition-colors"
            >
              get_in_touch()
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-lg border border-line bg-surface/80 backdrop-blur shadow-2xl shadow-black/40"
        >
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent2/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            <span className="ml-3 font-mono text-xs text-muted">guest@portfolio: ~</span>
          </div>
          <div className="p-5 font-mono text-sm min-h-[180px]">
            <p className="text-muted">
              <span className="text-accent">guest@portfolio</span>
              <span className="text-ink">:~$</span> {typed}
              {!showOutput && <span className="animate-blink">_</span>}
            </p>
            {showOutput && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 space-y-1.5"
              >
                {OUTPUT_LINES.map((line, i) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="text-ink"
                  >
                    {line}
                  </motion.p>
                ))}
                <p className="text-muted mt-3">
                  <span className="text-accent">guest@portfolio</span>
                  <span className="text-ink">:~$</span>{" "}
                  <span className="animate-blink">_</span>
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
