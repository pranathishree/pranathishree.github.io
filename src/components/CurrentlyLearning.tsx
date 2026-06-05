"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Cpu, Shield, Compass, Sparkles, TrendingUp, ChevronRight } from "lucide-react";

interface LearningTopic {
  title: string;
  status: string;
  progress: number;
  icon: React.ReactNode;
  focusArea: string;
  theme: "mauve" | "gold";
}

export default function CurrentlyLearning() {
  const learningTopics: LearningTopic[] = [
    {
      title: "QNX RTOS",
      status: "Active Deep-Dive",
      progress: 80,
      icon: <Shield className="text-mauve-accent" size={18} />,
      focusArea: "Preemptive scheduling, IPC, microkernel design hooks",
      theme: "mauve",
    },
    {
      title: "Embedded Systems",
      status: "Core Study",
      progress: 75,
      icon: <Cpu className="text-gold-highlight" size={18} />,
      focusArea: "C programming on hardware, board initialization (BSPs)",
      theme: "gold",
    },
    {
      title: "Product Management",
      status: "Advanced Study",
      progress: 85,
      icon: <Compass className="text-mauve-accent" size={18} />,
      focusArea: "PRD writing, user stories, feature prioritization frameworks",
      theme: "mauve",
    },
    {
      title: "Automotive Tech",
      status: "Trend Research",
      progress: 70,
      icon: <Cpu className="text-gold-highlight" size={18} />,
      focusArea: "Software Defined Vehicles (SDVs), AUTOSAR standards",
      theme: "gold",
    },
    {
      title: "Artificial Intelligence",
      status: "Application Building",
      progress: 80,
      icon: <Sparkles className="text-mauve-accent" size={18} />,
      focusArea: "NLP vectorization, Clustering algorithms, model inference",
      theme: "mauve",
    },
    {
      title: "Startup Growth",
      status: "Strategy Execution",
      progress: 75,
      icon: <TrendingUp className="text-gold-highlight" size={18} />,
      focusArea: "Go-to-market strategies, B2B acquisition loops",
      theme: "gold",
    },
  ];

  return (
    <section id="currently-learning" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            KNOWLEDGE ACQUISITION
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            Currently Learning
          </h2>
        </div>

        {/* Dashboard layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningTopics.map((topic, idx) => {
            const trackColor = topic.theme === "mauve" ? "from-mauve-accent to-mauve-hover" : "from-gold-highlight to-gold-hover";
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
                        {topic.icon}
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
