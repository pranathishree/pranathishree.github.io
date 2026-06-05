"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

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
  const educationList: EducationItem[] = [
    {
      degree: "B.Tech – Computer Science & Business Systems",
      institution: "GITAM University",
      period: "2023 – 2027",
      location: "Bengaluru, India",
      metricLabel: "Academic Performance",
      metricValue: "CGPA: 8.33 (SGPA: 8.43)",
      details: [
        "Specialized program designed by Tata Consultancy Services (TCS) to bridge the gap between engineering skills and business strategy.",
        "Coursework: Software Engineering, Data Structures, Design Thinking, Marketing Management, Finance, Business Analytics, Computer Architecture.",
      ],
    },
    {
      degree: "Pre-University (PCMB - Physics, Chemistry, Math, Biology)",
      institution: "Sheshadripuram Composite PU College",
      period: "2021 – 2023",
      location: "Bengaluru, India",
      metricLabel: "Board Score",
      metricValue: "84.5%",
      details: [
        "Focused study in science and mathematics, developing analytical foundations and problem-solving methodologies.",
      ],
    },
    {
      degree: "Secondary School Examination",
      institution: "Kendriya Vidyalaya Malleshwaram",
      period: "2019 – 2021",
      location: "Bengaluru, India",
      metricLabel: "Board Score",
      metricValue: "72.3%",
      details: [
        "Foundation school curriculum with strong participation in public speaking, local debating, and sports council activities.",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            ACADEMIC FOUNDATION
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            Education Journey
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="relative pl-6 md:pl-10 max-w-4xl mx-auto">
          {/* Vertical timeline track line */}
          <div className="absolute left-0 top-2 bottom-2 w-[1px] timeline-line" />

          <div className="flex flex-col gap-12">
            {educationList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline Marker Pin */}
                <div className="absolute left-[-24.5px] md:left-[-40.5px] top-1 w-3.5 h-3.5 rounded-full bg-[#0A0A0C] border-2 border-gold-highlight group-hover:border-mauve-accent group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                  <span className="h-1 w-1 rounded-full bg-gold-highlight group-hover:bg-mauve-accent" />
                </div>

                {/* Card Container */}
                <div className="glass-card p-6 md:p-8 rounded-3xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gold-highlight group-hover:text-mauve-accent transition-colors duration-300">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-serif italic text-mauve-accent mt-1 flex items-center gap-2">
                        <GraduationCap size={16} /> {item.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs font-mono text-[#8c889e] shrink-0">
                      <span className="flex items-center gap-1 bg-charcoal-surface border border-charcoal-border px-3 py-1 rounded-full">
                        <Calendar size={12} /> {item.period}
                      </span>
                      <span className="flex items-center gap-1 bg-charcoal-surface border border-charcoal-border px-3 py-1 rounded-full">
                        <MapPin size={12} /> {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary Metric box */}
                  <div className="p-4 rounded-2xl bg-charcoal-surface/60 border border-charcoal-border mb-6 flex items-center justify-between">
                    <span className="text-xs text-[#8c889e] font-mono uppercase tracking-wider">
                      {item.metricLabel}
                    </span>
                    <span className="text-sm font-semibold text-gold-highlight font-space">
                      {item.metricValue}
                    </span>
                  </div>

                  {/* Bullet details */}
                  <ul className="flex flex-col gap-3">
                    {item.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs md:text-sm text-[#b2adc4] leading-relaxed"
                      >
                        <Award size={14} className="text-mauve-accent shrink-0 mt-0.5" />
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
    </section>
  );
}
