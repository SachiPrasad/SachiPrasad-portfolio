"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        index="06 // achievements"
        title="Leadership & extracurriculars"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-lg border border-line bg-surface p-6"
          >
            <Trophy size={18} className="text-accent2" />
            <h3 className="font-display text-base font-600 mt-3">{a.title}</h3>
            <p className="font-mono text-xs text-muted mt-1">{a.period}</p>
            <p className="text-sm text-muted mt-3 leading-relaxed">{a.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
