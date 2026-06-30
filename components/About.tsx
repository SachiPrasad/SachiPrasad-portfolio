"use client";

import { motion } from "framer-motion";
import { profile, coursework } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading index="01 // about" title="About me" />
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg text-muted leading-relaxed"
        >
          {profile.summary}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-lg border border-line bg-surface p-6"
        >
          <p className="font-mono text-xs text-accent mb-4">## coursework</p>
          <ul className="space-y-2.5">
            {coursework.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-ink">
                <span className="text-accent2 font-mono mt-0.5">›</span>
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
