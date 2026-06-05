"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";
import LucideIcon from "@/components/LucideIcon";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative overflow-hidden dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C] via-[#121115]/10 to-[#0A0A0C] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            {skills.sectionTitle}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            {skills.heading}
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.categories.map((category, catIdx) => (
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
                    <LucideIcon name={category.icon} className={catIdx % 2 === 0 ? "text-mauve-accent" : "text-gold-highlight"} size={20} />
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
