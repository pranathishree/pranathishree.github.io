"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import LucideIcon from "@/components/LucideIcon";

interface LearningTopic {
  title: string;
  status: string;
  progress: number;
  icon: string;
  focusArea: string;
  theme: "mauve" | "gold";
}

export default function CurrentlyLearning() {
  const { currentlyLearning } = portfolioData;

  return (
    <section id="currently-learning" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            {currentlyLearning.sectionTitle}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            {currentlyLearning.heading}
          </h2>
        </div>

        {/* Dashboard layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(currentlyLearning.learningList as LearningTopic[]).map((topic, idx) => {
            const trackColor = topic.theme === "mauve" ? "from-mauve-accent to-mauve-hover" : "from-gold-highlight to-gold-hover";
            const iconColorClass = topic.theme === "mauve" ? "text-mauve-accent" : "text-gold-highlight";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-6 rounded-3xl flex flex-col justify-between border border-charcoal-border hover:border-mauve-accent/25 duration-300"
              >
                <div>
                  {/* Title & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-charcoal-surface border border-charcoal-border flex items-center justify-center">
                        <LucideIcon name={topic.icon} className={iconColorClass} size={18} />
                      </div>
                      <h3 className="font-semibold text-gold-highlight">
                        {topic.title}
                      </h3>
                    </div>
                    <span className="text-[9px] font-mono text-mauve-accent bg-mauve-muted px-2.5 py-1 rounded-full uppercase">
                      {topic.status}
                    </span>
                  </div>

                  {/* Bullet / Focus Area */}
                  <div className="flex gap-2 items-start mt-4 mb-8">
                    <ChevronRight size={14} className="text-mauve-accent shrink-0 mt-0.5" />
                    <p className="text-xs text-[#b2adc4] leading-relaxed">
                      <span className="font-medium text-[#e0ddf0]">Focus:</span> {topic.focusArea}
                    </p>
                  </div>
                </div>

                {/* Progress bar container */}
                <div className="flex flex-col gap-1.5 pt-4 border-t border-charcoal-border/30">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-[#8c889e] uppercase">Syllabus Completion</span>
                    <span className="text-gold-highlight">{topic.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-charcoal-surface rounded-full overflow-hidden border border-charcoal-border/25">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${topic.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.05 + 0.2 }}
                      className={`h-full rounded-full bg-gradient-to-r ${trackColor}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
