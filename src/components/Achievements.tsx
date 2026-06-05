"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Mic, LayoutGrid, Globe, Flame } from "lucide-react";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  badgeText?: string;
  theme: "mauve" | "gold";
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      icon: <Shield className="text-mauve-accent" size={20} />,
      title: "QNX SDV Software Intern",
      description: "Working on real-time vehicle systems and exploring hypervisor partition security frameworks.",
      badgeText: "Professional",
      theme: "mauve",
    },
    {
      icon: <Award className="text-gold-highlight" size={20} />,
      title: "Head of Press & Communications",
      description: "Appointed to lead all public relations campaigns and media briefings for the Namma Sportika tournament.",
      badgeText: "Leadership",
      theme: "gold",
    },
    {
      icon: <Mic className="text-mauve-accent" size={20} />,
      title: "Event Host & Stage Anchor",
      description: "Anchored prestigious university summits, hosted panel discussions, and pitched ideas before VC panels.",
      badgeText: "Communication",
      theme: "mauve",
    },
    {
      icon: <LayoutGrid className="text-gold-highlight" size={20} />,
      title: "Product Strategy Case Studies",
      description: "Built end-to-end strategic spec sheets for Amazon Prime Video 2.0 and StayReal vacation platforms.",
      badgeText: "Strategy",
      theme: "gold",
    },
    {
      icon: <Flame className="text-mauve-accent" size={20} />,
      title: "Hackathon Competitor",
      description: "Represented GITAM University in national-level product management and software hackathons.",
      badgeText: "Innovation",
      theme: "mauve",
    },
  ];

  const languages = ["English", "Kannada", "Telugu", "Tamil", "Hindi"];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C] via-[#121115]/10 to-[#0A0A0C] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            HONORS & MILESTONES
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            Key Achievements
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const borderTheme = item.theme === "gold" ? "gradient-border-gold" : "gradient-border-mauve";
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
                      {item.icon}
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
                {languages.map((lang, lIdx) => (
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
