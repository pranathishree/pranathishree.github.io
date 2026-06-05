"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import LucideIcon from "@/components/LucideIcon";

interface Achievement {
  icon: string;
  title: string;
  description: string;
  badgeText?: string;
  theme: "mauve" | "gold";
}

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 relative overflow-hidden dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C] via-[#121115]/10 to-[#0A0A0C] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            {achievements.sectionTitle}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            {achievements.heading}
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(achievements.achievementsList as Achievement[]).map((item, idx) => {
            const borderTheme = item.theme === "gold" ? "gradient-border-gold" : "gradient-border-mauve";
            const iconColorClass = item.theme === "gold" ? "text-gold-highlight" : "text-mauve-accent";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${borderTheme} rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[200px] group hover:translate-y-[-2px] transition-transform duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.3)]`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-10 w-10 rounded-xl bg-[#0A0A0C] border border-charcoal-border flex items-center justify-center">
                      <LucideIcon name={item.icon} className={iconColorClass} size={20} />
                    </div>
                    {item.badgeText && (
                      <span className="text-[9px] font-mono tracking-wider bg-charcoal-surface border border-charcoal-border px-2.5 py-1 rounded-full text-gold-highlight uppercase">
                        {item.badgeText}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-gold-highlight group-hover:text-mauve-accent transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#b2adc4] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Languages card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="gradient-border-gold rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[200px] shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#0A0A0C] border border-charcoal-border flex items-center justify-center">
                  <Globe className="text-gold-highlight" size={20} />
                </div>
                <span className="text-[9px] font-mono tracking-wider bg-charcoal-surface border border-charcoal-border px-2.5 py-1 rounded-full text-mauve-accent uppercase">
                  Multilingual
                </span>
              </div>

              <h3 className="text-base font-semibold text-gold-highlight mb-4">
                Fluent in 5 Languages
              </h3>
              
              <div className="flex flex-wrap gap-1.5">
                {achievements.languages.map((lang, lIdx) => (
                  <span
                    key={lIdx}
                    className="text-[10px] font-mono bg-mauve-muted text-mauve-accent px-2.5 py-1.5 rounded-lg border border-mauve-accent/15"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
