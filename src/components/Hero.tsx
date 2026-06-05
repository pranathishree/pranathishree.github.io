"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import LucideIcon from "@/components/LucideIcon";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  } as const;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-10 overflow-hidden dot-pattern"
    >
      {/* Background soft rose, mauve, and gold ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-rose-accent/10 via-mauve-accent/10 to-gold-highlight/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Hero Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Internship Badge */}
          <motion.div variants={itemVariants} className="inline-flex mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-surface border border-charcoal-border hover:border-rose-accent/30 text-xs font-mono text-rose-accent tracking-wider shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-colors">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-accent"></span>
              </span>
              {portfolioData.hero.internshipBadge}
            </span>
          </motion.div>

          {/* Large Statement */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-gold-highlight font-normal mb-4 text-glow"
          >
            {portfolioData.hero.mainHeading.prefix}{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-accent to-mauve-accent">
              {portfolioData.hero.mainHeading.gradient}
            </span>{" "}
            {portfolioData.hero.mainHeading.suffix}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[#b2adc4] text-sm md:text-base max-w-xl font-normal leading-relaxed mb-6"
          >
            {portfolioData.hero.subtitle}
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-6"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-rose-accent to-mauve-accent text-[#0a0a0c] font-medium tracking-wide rounded-full cursor-pointer hover:shadow-[0_0_25px_rgba(255,197,217,0.35)] transition-all duration-300 group"
            >
              {portfolioData.hero.ctaExplore}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="inline-flex items-center gap-2 px-7 py-3 bg-charcoal-surface border border-charcoal-border hover:border-rose-accent/40 text-gold-highlight font-medium tracking-wide rounded-full cursor-pointer transition-all duration-300"
            >
              {portfolioData.hero.ctaContact}
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Right Visuals (Dreamy Celestial & Sparkles Graphic) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center items-center h-[300px] md:h-[380px]"
        >
          {/* Main Visual Circle Frame with Glow */}
          <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-charcoal-border bg-[#121115]/40 backdrop-blur-md relative overflow-hidden flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            {/* Ambient vector details using soft rose-gold/mauve radial blend */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,197,217,0.15)_0%,rgba(212,191,249,0.08)_45%,transparent_75%)]" />
            
            {/* Celestial Starry orbits (outer ring spinning slowly) */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              fill="none"
              className="absolute opacity-50 animate-[spin_180s_linear_infinite]"
            >
              <circle cx="100" cy="100" r="88" stroke="rgba(255, 197, 217, 0.18)" strokeWidth="0.5" strokeDasharray="3 6" />
              <circle cx="100" cy="100" r="75" stroke="rgba(212, 191, 249, 0.25)" strokeWidth="0.75" />
              <circle cx="100" cy="100" r="58" stroke="rgba(245, 230, 201, 0.18)" strokeWidth="0.5" strokeDasharray="12 4" />
              
              {/* Star-like dots along the orbits */}
              <circle cx="100" cy="12" r="2.5" fill="#FFC5D9" className="animate-pulse" />
              <circle cx="175" cy="100" r="1.5" fill="#F5E6C9" />
              <circle cx="25" cy="100" r="2" fill="#D4BFF9" />
              <circle cx="100" cy="188" r="1.5" fill="#FFC5D9" />
            </svg>

            {/* Twinkling starburst sparkles (inner layout spinning reverse) */}
            <svg
              width="80%"
              height="80%"
              viewBox="0 0 100 100"
              fill="none"
              className="absolute opacity-40 animate-[spin_60s_linear_infinite_reverse]"
            >
              {/* Pinched sparkle 1: Top-Right */}
              <path
                d="M 68,22 Q 68,32 58,32 Q 68,32 68,42 Q 68,32 78,32 Q 68,32 68,22 Z"
                fill="#F5E6C9"
                className="opacity-80"
              />
              {/* Pinched sparkle 2: Bottom-Left */}
              <path
                d="M 32,78 Q 32,85 25,85 Q 32,85 32,92 Q 32,85 39,85 Q 32,85 32,78 Z"
                fill="#FFC5D9"
                className="opacity-60"
              />
              {/* Pinched sparkle 3: Center-Left */}
              <path
                d="M 22,35 Q 22,40 17,40 Q 22,40 22,45 Q 22,40 27,40 Q 22,40 22,35 Z"
                fill="#D4BFF9"
                className="opacity-70"
              />
              {/* Pinched sparkle 4: Center-Right */}
              <path
                d="M 78,65 Q 78,70 73,70 Q 78,70 78,75 Q 78,70 83,70 Q 78,70 78,65 Z"
                fill="#F5E6C9"
                className="opacity-75"
              />
              
              <circle cx="50" cy="50" r="38" stroke="rgba(255, 197, 217, 0.08)" strokeWidth="0.5" />
            </svg>

            {/* Profile Avatar Monogram with glowing rose/mauve/gold gradient text */}
            <div className="absolute flex flex-col items-center justify-center text-center z-10">
              {/* Glowing background aura */}
              <div className="absolute w-24 h-24 bg-gradient-to-r from-rose-accent/15 via-mauve-accent/15 to-gold-highlight/15 blur-xl rounded-full -z-10 animate-pulse" />
              
              <span className="font-serif text-6xl md:text-7xl bg-gradient-to-br from-rose-accent via-mauve-accent to-gold-highlight bg-clip-text text-transparent select-none drop-shadow-[0_0_15px_rgba(255,197,217,0.25)] font-light leading-none">
                {portfolioData.personal.monogram}
              </span>
              <span className="font-mono text-[8px] tracking-[0.3em] text-[#b2adc4] uppercase mt-2.5">{portfolioData.personal.role}</span>
            </div>

            {/* Subtle light streaks */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-rose-accent/5 to-transparent pointer-events-none" />
          </div>

          {/* Floating Card 1: Product Strategy */}
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-[8%] left-[-2%] md:left-[2%] glass-card p-3.5 rounded-2xl flex items-center gap-3 shadow-[0_15px_30px_rgba(255,197,217,0.12)] border-rose-accent/10 hover:border-rose-accent/20"
          >
            <div className="p-2.5 rounded-lg bg-gold-muted text-gold-highlight">
              <LucideIcon name={portfolioData.hero.floatingCards[0].icon} size={18} />
            </div>
            <div>
              <p className="text-[9px] font-mono tracking-widest text-[#b2adc4] uppercase">{portfolioData.hero.floatingCards[0].label}</p>
              <p className="text-xs font-semibold text-gold-highlight">{portfolioData.hero.floatingCards[0].value}</p>
            </div>
          </motion.div>

          {/* Floating Card 2: SDV & QNX */}
          <motion.div
            animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[12%] right-[-2%] md:right-[2%] glass-card p-3.5 rounded-2xl flex items-center gap-3 shadow-[0_15px_30px_rgba(212,191,249,0.12)] border-mauve-accent/10 hover:border-mauve-accent/20"
          >
            <div className="p-2.5 rounded-lg bg-mauve-muted text-mauve-accent">
              <LucideIcon name={portfolioData.hero.floatingCards[1].icon} size={18} />
            </div>
            <div>
              <p className="text-[9px] font-mono tracking-widest text-[#b2adc4] uppercase">{portfolioData.hero.floatingCards[1].label}</p>
              <p className="text-xs font-semibold text-mauve-accent">{portfolioData.hero.floatingCards[1].value}</p>
            </div>
          </motion.div>

          {/* Floating Card 3: Speaker */}
          <motion.div
            animate={{ y: [0, -8, 0], x: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[5%] left-[2%] md:left-[10%] glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-[0_12px_24px_rgba(255,197,217,0.1)] border-rose-accent/10 hover:border-rose-accent/20"
          >
            <LucideIcon name={portfolioData.hero.floatingCards[2].icon} size={14} className="text-rose-accent animate-pulse" />
            <span className="text-xs font-medium text-gold-highlight tracking-wide">{portfolioData.hero.floatingCards[2].value}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Stats Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-6 md:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 p-6 md:p-8 glass-card rounded-3xl"
        >
          {portfolioData.hero.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start text-center md:text-left px-2 border-r border-charcoal-border last:border-none"
            >
              <span className="font-space text-3xl md:text-4xl font-semibold text-gold-highlight tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-semibold text-[#e0ddf0]">{stat.label}</span>
              <span className="text-[10px] md:text-xs text-[#8c889e] font-mono mt-0.5">{stat.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Affordance */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer pointer-events-none opacity-40">
        <span className="text-[9px] font-mono tracking-[0.2em] text-[#8c889e] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={12} className="text-[#8c889e]" />
        </motion.div>
      </div>
    </section>
  );
}
