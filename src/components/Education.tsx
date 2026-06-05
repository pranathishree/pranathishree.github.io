"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  metricLabel: string;
  metricValue: string;
  details: string[];
}

export default function Education() {
  const { education } = portfolioData;
  const list = education.educationList as EducationItem[];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-mauve-accent/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent inline-block" />
            {education.sectionTitle}
            <span className="h-[1px] w-8 bg-mauve-accent inline-block" />
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            {education.heading}
          </h2>
          <p className="mt-4 text-sm text-[#8c889e] max-w-md">
            An academic path that bridges technical depth with strategic thinking.
          </p>
        </div>

        {/* ─── DESKTOP: centered alternating timeline ─── */}
        <div className="hidden md:block relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-highlight/60 via-mauve-accent/40 to-transparent rounded-full" />

          <div className="flex flex-col gap-16">
            {list.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative grid grid-cols-2 gap-0 items-center">

                  {/* ── Left side ── */}
                  <div className={`pr-12 ${isLeft ? "flex justify-end" : ""}`}>
                    {isLeft ? (
                      <EducationCard item={item} idx={idx} dir="left" />
                    ) : (
                      /* period pill on right side's left column */
                      <div className="flex justify-end">
                        <PeriodPill item={item} />
                      </div>
                    )}
                  </div>

                  {/* ── Center dot (absolutely on the line) ── */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0A0A0C] border-2 border-gold-highlight flex items-center justify-center shadow-[0_0_18px_rgba(245,230,201,0.25)]">
                      <span className="text-gold-highlight font-bold text-xs font-mono">{idx + 1}</span>
                    </div>
                    {/* Horizontal connector to card */}
                    <div className={`absolute top-1/2 -translate-y-1/2 h-[1px] w-8 bg-gold-highlight/30 ${isLeft ? "right-full mr-[-2px]" : "left-full ml-[-2px]"}`} />
                  </motion.div>

                  {/* ── Right side ── */}
                  <div className={`pl-12 ${!isLeft ? "flex justify-start" : ""}`}>
                    {!isLeft ? (
                      <EducationCard item={item} idx={idx} dir="right" />
                    ) : (
                      <div className="flex justify-start">
                        <PeriodPill item={item} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── MOBILE: single-column left-rail timeline ─── */}
        <div className="md:hidden relative pl-10">
          {/* Left rail line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-highlight/60 via-mauve-accent/40 to-transparent rounded-full" />

          <div className="flex flex-col gap-10">
            {list.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative"
              >
                {/* Dot on rail */}
                <div className="absolute left-[-28px] top-4 w-9 h-9 rounded-full bg-[#0A0A0C] border-2 border-gold-highlight flex items-center justify-center shadow-[0_0_14px_rgba(245,230,201,0.2)]">
                  <span className="text-gold-highlight font-bold text-xs font-mono">{idx + 1}</span>
                </div>
                <EducationCard item={item} idx={idx} dir="right" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Sub-components ───────── */

function PeriodPill({ item }: { item: EducationItem }) {
  return (
    <div className="flex flex-col gap-2 text-right">
      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-gold-highlight/80 bg-gold-highlight/8 border border-gold-highlight/20 px-3 py-1.5 rounded-full">
        <Calendar size={11} />
        {item.period}
      </span>
      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8c889e] bg-charcoal-surface border border-charcoal-border px-3 py-1.5 rounded-full">
        <MapPin size={11} />
        {item.location}
      </span>
    </div>
  );
}

function EducationCard({
  item,
  idx,
  dir,
}: {
  item: EducationItem;
  idx: number;
  dir: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: dir === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: idx * 0.15 }}
      className="group w-full max-w-[440px]"
    >
      <div className="relative glass-card rounded-3xl overflow-hidden border border-charcoal-border/80 hover:border-gold-highlight/30 transition-all duration-300 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]">
        {/* Gradient accent top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-gold-highlight via-mauve-accent to-gold-highlight/20" />

        <div className="p-6">
          {/* Title row */}
          <div className="flex items-start gap-3 mb-4">
            <div className="mt-0.5 w-8 h-8 rounded-lg bg-charcoal-surface border border-charcoal-border flex items-center justify-center shrink-0">
              <GraduationCap size={15} className="text-gold-highlight" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gold-highlight group-hover:text-mauve-accent transition-colors duration-300 leading-snug">
                {item.degree}
              </h3>
              <p className="text-xs text-mauve-accent mt-0.5 font-sans italic">
                {item.institution}
              </p>
            </div>
          </div>

          {/* Metric callout */}
          <div className="flex items-center justify-between bg-charcoal-surface/60 border border-charcoal-border rounded-xl px-4 py-2.5 mb-4">
            <span className="text-[10px] font-mono text-[#8c889e] uppercase tracking-wider">
              {item.metricLabel}
            </span>
            <span className="text-sm font-bold text-gold-highlight font-space">
              {item.metricValue}
            </span>
          </div>

          {/* Details */}
          <ul className="flex flex-col gap-2">
            {item.details.map((detail, dIdx) => (
              <li
                key={dIdx}
                className="flex items-start gap-2 text-[11px] md:text-xs text-[#b2adc4] leading-relaxed"
              >
                <BookOpen size={12} className="text-mauve-accent/70 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
