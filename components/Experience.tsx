"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading index="04 // experience" title="Where I've worked" />
      <div className="space-y-6">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid md:grid-cols-[200px_1fr] gap-6 border-l-2 border-line pl-6 relative"
          >
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent" />
            <div>
              <p className="font-mono text-xs text-muted">{job.period}</p>
              <p className="font-mono text-xs text-accent2 mt-1">{job.location}</p>
            </div>
            <div>
              <h3 className="font-display text-xl font-600">{job.role}</h3>
              <p className="text-accent font-mono text-sm mt-1">{job.company}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex gap-2 leading-relaxed">
                    <span className="text-accent2 font-mono mt-0.5">›</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
