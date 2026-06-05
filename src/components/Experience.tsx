"use client";

import React from "react";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";
import LucideIcon from "@/components/LucideIcon";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C] via-[#121115]/20 to-[#0A0A0C] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            {experience.sectionTitle}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            {experience.heading}
          </h2>
        </div>

        {/* Jobs List */}
        <div className="flex flex-col gap-24">
          {experience.jobs.map((job, jobIdx) => {
            const isActive = job.status === "ACTIVE";

            return (
              <div
                key={jobIdx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative"
              >
                {/* Timeline Role Header Panel */}
                <div className="lg:col-span-4 sticky top-28">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`glass-card p-8 rounded-3xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] border transition-all duration-300 ${
                      isActive
                        ? "border-rose-accent/30 bg-gradient-to-br from-charcoal-surface to-purple-950/10 shadow-[0_15px_40px_-10px_rgba(255,197,217,0.08)]"
                        : "border-charcoal-border/80 bg-charcoal-surface/40 opacity-85 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      {isActive ? (
                        <>
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]"></span>
                          </span>
                          <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase font-bold">
                            Active Role
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="h-2.5 w-2.5 rounded-full bg-[#8c889e]/50" />
                          <span className="text-xs font-mono tracking-widest text-[#8c889e] uppercase font-bold">
                            Past Role
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold text-gold-highlight mb-1">
                      {job.role}
                    </h3>
                    <p className="font-sans italic text-lg text-mauve-accent mb-6">
                      {job.company}
                    </p>

                    <div className="h-[1px] bg-charcoal-border w-full mb-6" />

                    <div className="flex flex-col gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-[#8c889e] uppercase tracking-wider block mb-1">
                          Timeline
                        </span>
                        <span className="text-sm text-gold-highlight font-medium">
                          {job.timeline}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#8c889e] uppercase tracking-wider block mb-1">
                          Core Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {job.coreTechStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                                isActive
                                  ? "text-mauve-accent bg-mauve-muted"
                                  : "text-[#8c889e] bg-charcoal-surface/60"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Learning Steps */}
                <div className="lg:col-span-8 relative pl-6 md:pl-10">
                  {/* The vertical timeline track line */}
                  <div className={`absolute left-[6px] top-2 bottom-2 w-[2px] ${
                    isActive
                      ? "bg-gradient-to-b from-rose-accent/70 via-mauve-accent/35 to-transparent"
                      : "bg-gradient-to-b from-[#8c889e]/30 via-charcoal-border/10 to-transparent"
                  }`} />

                  <div className="flex flex-col gap-10">
                    {job.milestones.map((milestone, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="relative group"
                      >
                        {/* Circle Pin Marker */}
                        <div className={`absolute left-[-24.5px] md:left-[-40.5px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0A0A0C] border-2 transition-all duration-300 flex items-center justify-center ${
                          isActive
                            ? "border-mauve-accent group-hover:border-rose-accent group-hover:scale-125"
                            : "border-mauve-accent/30 group-hover:border-mauve-accent group-hover:scale-125"
                        }`}>
                          <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                            isActive
                              ? "bg-mauve-accent group-hover:bg-rose-accent"
                              : "bg-mauve-accent/30 group-hover:bg-mauve-accent"
                          }`} />
                        </div>

                        <div className={`glass-card p-6 md:p-8 rounded-3xl transition-all duration-300 border ${
                          isActive
                            ? "border-charcoal-border/80 hover:border-rose-accent/30"
                            : "border-charcoal-border/60 hover:border-mauve-accent/20"
                        }`}>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-8 w-8 rounded-lg bg-charcoal-surface border border-charcoal-border flex items-center justify-center flex-shrink-0">
                              <LucideIcon name={milestone.icon} className={isActive ? "text-mauve-accent" : "text-[#8c889e]"} size={18} />
                            </div>
                            <h4 className={`text-lg font-semibold text-gold-highlight transition-colors duration-300 ${
                              isActive ? "group-hover:text-mauve-accent" : "group-hover:text-[#b2adc4]"
                            }`}>
                              {milestone.title}
                            </h4>
                          </div>

                          <p className="text-[#b2adc4] text-sm leading-relaxed mb-4">
                            {milestone.description}
                          </p>

                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                            {milestone.details.map((detail, dIdx) => (
                              <li
                                key={dIdx}
                                className="flex items-start gap-2 text-xs text-[#8c889e] leading-normal"
                              >
                                <span className={`font-bold mt-0.5 ${isActive ? "text-mauve-accent" : "text-[#8c889e]/60"}`}>•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
