"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        index="03 // projects"
        title="Selected work"
        subtitle="A mix of applied ML, full-stack systems, and algorithmic problem-solving."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="group rounded-lg border border-line bg-surface p-6 flex flex-col hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-600 leading-snug">{p.title}</h3>
              <span className="shrink-0 font-mono text-[11px] px-2 py-1 rounded bg-accent/10 text-accent border border-accent/30">
                {p.metric}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">{p.description}</p>
            <ul className="mt-4 space-y-1.5">
              {p.points.map((pt) => (
                <li key={pt} className="text-xs text-muted flex gap-2">
                  <span className="text-accent2 font-mono">›</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono px-2 py-1 rounded border border-line text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-line flex items-center gap-4">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-accent transition-colors"
              >
                <Github size={14} /> source
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} /> live demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
