"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        index="02 // skills"
        title="Technical stack"
        subtitle="Tools I reach for when turning raw data and ideas into working software."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="rounded-lg border border-line bg-surface p-5 hover:border-accent/50 transition-colors"
          >
            <p className="font-mono text-xs text-accent2 mb-3">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono px-2.5 py-1 rounded border border-line text-ink bg-surface2"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
