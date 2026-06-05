"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Server, Compass, Layers, ShieldCheck } from "lucide-react";

interface Milestone {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

export default function Experience() {
  const milestones: Milestone[] = [
    {
      icon: <Server className="text-mauve-accent" size={18} />,
      title: "Real-Time Operating Systems (RTOS)",
      description: "Learning the fundamentals of real-time scheduling, memory management, and microkernel architecture.",
      details: ["Inter-process communication (IPC)", "Priority inheritance & preemptive scheduling", "System latency optimization"],
    },
    {
      icon: <Layers className="text-gold-highlight" size={18} />,
      title: "Automotive Software Architecture",
      description: "Understanding software configurations and layers in modern connected cars (SDVs).",
      details: ["AUTOSAR standards concept", "Hypervisor partition isolation", "Message-passing services"],
    },
    {
      icon: <Cpu className="text-mauve-accent" size={18} />,
      title: "Embedded Systems Development",
      description: "Exploring board support packages (BSPs), device drivers, and low-level system APIs.",
      details: ["C programming for memory-constrained targets", "Hardware abstraction layers", "Debugging on real-time targets"],
    },
    {
      icon: <ShieldCheck className="text-gold-highlight" size={18} />,
      title: "System-Level Interaction Analysis",
      description: "Examining interactions between device hardware, operating system, and application software layers.",
      details: ["Resource manager structures", "POSIX conformance mapping", "Safety-critical system diagnostics"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C] via-[#121115]/20 to-[#0A0A0C] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            PROFESSIONAL EXPERIENCE
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            Where Systems Meet Strategy
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Timeline Role Header Panel */}
          <div className="lg:col-span-4 sticky top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border border-charcoal-border shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase font-bold">
                  ACTIVE INTERNSHIP
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gold-highlight mb-1">
                Software Intern
              </h3>
              <p className="font-serif italic text-lg text-mauve-accent mb-6">
                QNX / Software Defined Vehicles (SDVs)
              </p>
              
              <div className="h-[1px] bg-charcoal-border w-full mb-6" />

              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-[10px] font-mono text-[#8c889e] uppercase tracking-wider block mb-1">
                    Timeline
                  </span>
                  <span className="text-sm text-gold-highlight font-medium">
                    2025 – Present
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8c889e] uppercase tracking-wider block mb-1">
                    Core Tech Stack
                  </span>
                  <span className="text-xs text-mauve-accent font-mono bg-mauve-muted px-2.5 py-1 rounded-md inline-block mr-1.5 mb-1.5">
                    QNX Neutrino
                  </span>
                  <span className="text-xs text-mauve-accent font-mono bg-mauve-muted px-2.5 py-1 rounded-md inline-block mr-1.5 mb-1.5">
                    C / C++
                  </span>
                  <span className="text-xs text-mauve-accent font-mono bg-mauve-muted px-2.5 py-1 rounded-md inline-block mr-1.5 mb-1.5">
                    RTOS APIs
                  </span>
                  <span className="text-xs text-mauve-accent font-mono bg-mauve-muted px-2.5 py-1 rounded-md inline-block mb-1.5">
                    Embedded Systems
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Learning Steps */}
          <div className="lg:col-span-8 relative pl-6 md:pl-10">
            {/* The vertical timeline track line */}
            <div className="absolute left-0 top-2 bottom-2 w-[1px] timeline-line" />

            <div className="flex flex-col gap-10">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Circle Pin Marker */}
                  <div className="absolute left-[-24.5px] md:left-[-40.5px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0A0A0C] border-2 border-mauve-accent group-hover:border-gold-highlight group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                    <span className="h-1 w-1 rounded-full bg-mauve-accent group-hover:bg-gold-highlight" />
                  </div>

                  <div className="glass-card p-6 md:p-8 rounded-3xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-8 w-8 rounded-lg bg-charcoal-surface border border-charcoal-border flex items-center justify-center flex-shrink-0">
                        {milestone.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gold-highlight group-hover:text-mauve-accent transition-colors duration-300">
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
                          <span className="text-mauve-accent font-bold mt-0.5">•</span>
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
      </div>
    </section>
  );
}
