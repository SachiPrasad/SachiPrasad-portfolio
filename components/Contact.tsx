"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        index="07 // contact"
        title="Let's build something"
        subtitle="Open to internships, full-time roles, and interesting collaborations in data, ML, or security."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-line bg-surface p-8 grid sm:grid-cols-2 gap-6"
      >
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-3 group"
        >
          <span className="h-10 w-10 rounded border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
            <Mail size={16} />
          </span>
          <div>
            <p className="text-xs text-muted font-mono">email</p>
            <p className="text-sm group-hover:text-accent transition-colors">{profile.email}</p>
          </div>
        </a>
        <a href={`tel:${profile.phone}`} className="flex items-center gap-3 group">
          <span className="h-10 w-10 rounded border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
            <Phone size={16} />
          </span>
          <div>
            <p className="text-xs text-muted font-mono">phone</p>
            <p className="text-sm group-hover:text-accent transition-colors">{profile.phone}</p>
          </div>
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
          <span className="h-10 w-10 rounded border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
            <Github size={16} />
          </span>
          <div>
            <p className="text-xs text-muted font-mono">github</p>
            <p className="text-sm group-hover:text-accent transition-colors">github.com/SachiPrasad</p>
          </div>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
          <span className="h-10 w-10 rounded border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
            <Linkedin size={16} />
          </span>
          <div>
            <p className="text-xs text-muted font-mono">linkedin</p>
            <p className="text-sm group-hover:text-accent transition-colors">linkedin.com/in/sachiprasad</p>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
