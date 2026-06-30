"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading index="05 // education" title="Education" />
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((ed, i) => (
          <motion.div
            key={ed.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-lg border border-line bg-surface p-6"
          >
            <p className="font-mono text-xs text-muted">{ed.period}</p>
            <h3 className="font-display text-lg font-600 mt-2">{ed.school}</h3>
            <p className="text-sm text-muted mt-1">{ed.degree}</p>
            <p className="font-mono text-xs text-accent mt-3">{ed.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
