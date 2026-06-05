"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Compass, Briefcase, Users, Star } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // Percentage for progress indicator
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillItem[];
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: SkillCategory[] = [
    {
      title: "Technical Systems",
      icon: <Terminal className="text-mauve-accent" size={20} />,
      description: "Writing code, mapping data, and configuring low-level vehicle operating layers.",
      skills: [
        { name: "QNX RTOS", level: 85 },
        { name: "Embedded Systems", level: 80 },
        { name: "C Language", level: 85 },
        { name: "SQL Database", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML / CSS", level: 90 },
        { name: "Figma UI/UX", level: 85 },
      ],
    },
    {
      title: "Product & Business",
      icon: <Briefcase className="text-gold-highlight" size={20} />,
      description: "Bridging the gap between engineering efforts and commercial success metrics.",
      skills: [
        { name: "Product Roadmapping", level: 90 },
        { name: "PRD Writing", level: 90 },
        { name: "User Story Mapping", level: 85 },
        { name: "Feature Prioritization", level: 90 },
        { name: "Market Research", level: 85 },
        { name: "Competitive Analysis", level: 85 },
        { name: "KPI Definition & Metrics", level: 80 },
        { name: "Go-To-Market Strategy", level: 80 },
      ],
    },
    {
      title: "Leadership & Strategy",
      icon: <Users className="text-mauve-accent" size={20} />,
      description: "Coordinating multi-functional efforts and articulating clear strategic visions.",
      skills: [
        { name: "Public Speaking", level: 95 },
        { name: "Communication", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Leadership", level: 90 },
        { name: "Crisis Management", level: 85 },
        { name: "Analytical Thinking", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C] via-[#121115]/10 to-[#0A0A0C] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            SKILLS VISUALIZATION
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            A Multi-Disciplinary Toolkit
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-charcoal-border flex flex-col justify-between"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-charcoal-surface border border-charcoal-border flex items-center justify-center flex-shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gold-highlight">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-[#b2adc4] leading-relaxed mb-8">
                  {category.description}
                </p>
              </div>

              {/* Skills Bars */}
              <div className="flex flex-col gap-5">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group flex flex-col gap-1.5"
                  >
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#e0ddf0] font-medium group-hover:text-mauve-accent transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#8c889e]">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-1.5 w-full bg-charcoal-surface rounded-full overflow-hidden border border-charcoal-border/30">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIdx * 0.05 + 0.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          catIdx % 2 === 0 
                            ? "from-mauve-accent to-mauve-hover" 
                            : "from-gold-highlight to-gold-hover"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
