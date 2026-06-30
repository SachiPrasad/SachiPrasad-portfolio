"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="eyebrow mb-2">{index}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-700">{title}</h2>
      {subtitle && <p className="mt-3 text-muted max-w-2xl">{subtitle}</p>}
      <div className="mt-6 h-px w-full bg-line" />
    </motion.div>
  );
}
