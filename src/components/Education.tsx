"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Sparkles, TrendingUp } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  metricLabel: string;
  metricValue: string;
  details: string[];
}

/* ─── color themes per card index ─── */
const THEMES = [
  {
    dot: "border-gold-highlight shadow-[0_0_24px_rgba(245,230,201,0.35)]",
    bar: "from-gold-highlight via-mauve-accent to-transparent",
    badge: "bg-gold-highlight/10 text-gold-highlight border-gold-highlight/30",
    metric: "text-gold-highlight",
    glow: "rgba(245,230,201,0.06)",
    accent: "#F5E6C9",
    liveRing: "ring-gold-highlight/30",
    liveDot: "bg-gold-highlight",
    connector: "bg-gold-highlight/25",
    isActive: true,
  },
  {
    dot: "border-mauve-accent shadow-[0_0_24px_rgba(212,191,249,0.35)]",
    bar: "from-mauve-accent via-rose-accent to-transparent",
    badge: "bg-mauve-accent/10 text-mauve-accent border-mauve-accent/30",
    metric: "text-mauve-accent",
    glow: "rgba(212,191,249,0.06)",
    accent: "#D4BFF9",
    liveRing: "ring-mauve-accent/30",
    liveDot: "bg-mauve-accent",
    connector: "bg-mauve-accent/25",
    isActive: false,
  },
  {
    dot: "border-rose-accent shadow-[0_0_24px_rgba(255,197,217,0.35)]",
    bar: "from-rose-accent via-mauve-accent to-transparent",
    badge: "bg-rose-accent/10 text-rose-accent border-rose-accent/30",
    metric: "text-rose-accent",
    glow: "rgba(255,197,217,0.06)",
    accent: "#FFC5D9",
    liveRing: "ring-rose-accent/30",
    liveDot: "bg-rose-accent",
    connector: "bg-rose-accent/25",
    isActive: false,
  },
] as const;

export default function Education() {
  const { education } = portfolioData;
  const list = education.educationList as EducationItem[];
  const sectionRef = React.useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="education" className="py-28 relative overflow-hidden">

      {/* ── Ambient background glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-mauve-accent/4 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full bg-gold-highlight/4 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <span className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.3em] text-[#8c889e] uppercase mb-4">
            <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-mauve-accent" />
            {education.sectionTitle}
            <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-mauve-accent" />
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-gold-highlight font-normal gold-glow mb-4">
            {education.heading}
          </h2>
          <p className="text-sm text-[#8c889e] max-w-sm leading-relaxed">
            An academic path that bridges technical depth with strategic business thinking.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════
            DESKTOP — centered alternating timeline
            ═══════════════════════════════════════ */}
        <div className="hidden md:block relative">

          {/* Scroll-driven center line — background track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/[0.04] rounded-full" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] rounded-full bg-gradient-to-b from-gold-highlight/70 via-mauve-accent/50 to-rose-accent/30"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-20">
            {list.map((item, idx) => {
              const theme = THEMES[idx % THEMES.length];
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative grid grid-cols-2 items-center min-h-[260px]">

                  {/* Left column */}
                  <div className="pr-16 flex flex-col items-end">
                    {isLeft ? (
                      <DesktopCard item={item} idx={idx} theme={theme} dir="left" />
                    ) : (
                      <MetaPanel item={item} theme={theme} align="right" />
                    )}
                  </div>

                  {/* Center node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12, type: "spring", stiffness: 200 }}
                    className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
                  >
                    {/* Outer glow ring */}
                    <div
                      className="absolute w-16 h-16 rounded-full opacity-20 blur-md"
                      style={{ background: theme.accent }}
                    />
                    {/* Connector to left card */}
                    {isLeft && (
                      <div className={`absolute right-[28px] top-1/2 -translate-y-1/2 h-[1px] w-12 ${theme.connector}`} />
                    )}
                    {/* Connector to right card */}
                    {!isLeft && (
                      <div className={`absolute left-[28px] top-1/2 -translate-y-1/2 h-[1px] w-12 ${theme.connector}`} />
                    )}
                    {/* The dot itself */}
                    <div className={`relative w-12 h-12 rounded-full bg-[#0A0A0C] border-2 ${theme.dot} flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                      {idx === 0 && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.liveDot} opacity-60`} />
                          <span className={`relative inline-flex h-3 w-3 rounded-full ${theme.liveDot}`} />
                        </span>
                      )}
                      <span className="text-xs font-bold font-mono" style={{ color: theme.accent }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>

                  {/* Right column */}
                  <div className="pl-16 flex flex-col items-start">
                    {!isLeft ? (
                      <DesktopCard item={item} idx={idx} theme={theme} dir="right" />
                    ) : (
                      <MetaPanel item={item} theme={theme} align="left" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════
            MOBILE — single-column left-rail
            ═══════════════════════════════════════ */}
        <div className="md:hidden relative pl-12">
          <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-white/[0.04] rounded-full" />
          <motion.div
            className="absolute left-[20px] top-0 w-[2px] rounded-full bg-gradient-to-b from-gold-highlight/70 via-mauve-accent/50 to-rose-accent/30"
            style={{ height: lineHeight }}
          />
          <div className="flex flex-col gap-10">
            {list.map((item, idx) => {
              const theme = THEMES[idx % THEMES.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Rail dot */}
                  <div className={`absolute left-[-32px] top-5 w-10 h-10 rounded-full bg-[#0A0A0C] border-2 ${theme.dot} flex items-center justify-center z-10`}>
                    {idx === 0 && (
                      <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.liveDot} opacity-60`} />
                        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${theme.liveDot}`} />
                      </span>
                    )}
                    <span className="text-[10px] font-bold font-mono" style={{ color: theme.accent }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <MobileCard item={item} idx={idx} theme={theme} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════
   Desktop card (full-featured)
   ══════════════════════════════════ */
function DesktopCard({
  item,
  idx,
  theme,
  dir,
}: {
  item: EducationItem;
  idx: number;
  theme: (typeof THEMES)[number];
  dir: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: dir === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.12 }}
      className="group relative w-full max-w-[440px]"
    >
      {/* Card glow backdrop */}
      <div
        className="absolute -inset-4 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ background: theme.glow }}
      />

      <div className="relative rounded-[28px] overflow-hidden border border-white/[0.07] group-hover:border-white/[0.14] transition-all duration-500 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.6)]"
        style={{ background: "rgba(14,13,17,0.85)", backdropFilter: "blur(20px)" }}
      >
        {/* Gradient accent bar */}
        <div className={`h-[3px] w-full bg-gradient-to-r ${theme.bar}`} />

        <div className="p-7">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 mb-5">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-white/[0.08]"
                style={{ background: `${theme.glow}` }}>
                <GraduationCap size={16} style={{ color: theme.accent }} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] font-semibold text-white/90 group-hover:text-white transition-colors duration-300 leading-snug">
                  {item.degree}
                </h3>
                <p className="text-xs text-[#8c889e] mt-1 italic font-sans">
                  {item.institution}
                </p>
              </div>
            </div>

            {/* Live / Past badge */}
            {idx === 0 ? (
              <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border shrink-0 ${theme.badge}`}>
                <Sparkles size={9} />
                Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#8c889e]/70 border border-white/[0.06] px-2.5 py-1 rounded-full shrink-0">
                Alumni
              </span>
            )}
          </div>

          {/* Meta row: period + location */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#8c889e] bg-white/[0.04] border border-white/[0.07] px-3 py-1 rounded-full">
              <Calendar size={10} />
              {item.period}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#8c889e] bg-white/[0.04] border border-white/[0.07] px-3 py-1 rounded-full">
              <MapPin size={10} />
              {item.location}
            </span>
          </div>

          {/* Metric callout */}
          <div className="flex items-center justify-between rounded-2xl px-4 py-3 mb-5 border border-white/[0.06]"
            style={{ background: "rgba(255,255,255,0.025)" }}>
            <div className="flex items-center gap-2">
              <TrendingUp size={13} className="text-[#8c889e]" />
              <span className="text-[10px] font-mono text-[#8c889e] uppercase tracking-wider">
                {item.metricLabel}
              </span>
            </div>
            <span className={`text-sm font-bold font-space ${theme.metric}`}>
              {item.metricValue}
            </span>
          </div>

          {/* Bullet details */}
          <ul className="flex flex-col gap-2.5">
            {item.details.map((detail, dIdx) => (
              <li
                key={dIdx}
                className="flex items-start gap-2.5 text-[11px] text-white/50 leading-relaxed group-hover:text-white/65 transition-colors duration-300"
              >
                <BookOpen size={11} className="shrink-0 mt-0.5" style={{ color: theme.accent, opacity: 0.6 }} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════
   Desktop meta panel (opposite side)
   ══════════════════════════════════ */
function MetaPanel({
  item,
  theme,
  align,
}: {
  item: EducationItem;
  theme: (typeof THEMES)[number];
  align: "left" | "right";
}) {
  return (
    <div className={`flex flex-col gap-3 ${align === "right" ? "items-end text-right" : "items-start text-left"}`}>
      {/* Big year display */}
      <span
        className="text-6xl font-serif font-light select-none leading-none opacity-20"
        style={{ color: theme.accent }}
      >
        {item.period.split("–")[0].trim()}
      </span>
      <div className="flex flex-col gap-2">
        <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono text-[#8c889e] bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 rounded-full`}>
          <Calendar size={10} />
          {item.period}
        </span>
        <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono text-[#8c889e] bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 rounded-full`}>
          <MapPin size={10} />
          {item.location}
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════
   Mobile card (compact)
   ══════════════════════════════════ */
function MobileCard({
  item,
  idx,
  theme,
}: {
  item: EducationItem;
  idx: number;
  theme: (typeof THEMES)[number];
}) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-white/[0.07] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]"
      style={{ background: "rgba(14,13,17,0.85)", backdropFilter: "blur(16px)" }}
    >
      <div className={`h-[3px] bg-gradient-to-r ${theme.bar}`} />
      <div className="p-5">
        <div className="flex items-start gap-2.5 mb-3">
          <GraduationCap size={14} className="shrink-0 mt-0.5" style={{ color: theme.accent }} />
          <div>
            <h3 className="text-sm font-semibold text-white/90 leading-snug">{item.degree}</h3>
            <p className="text-xs text-[#8c889e] italic mt-0.5">{item.institution}</p>
          </div>
          {idx === 0 && (
            <span className={`ml-auto inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-1 rounded-full border shrink-0 ${theme.badge}`}>
              <Sparkles size={8} /> Live
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#8c889e] bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full">
            <Calendar size={9} />{item.period}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#8c889e] bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full">
            <MapPin size={9} />{item.location}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl px-3 py-2 mb-3 border border-white/[0.05]"
          style={{ background: "rgba(255,255,255,0.02)" }}>
          <span className="text-[9px] font-mono text-[#8c889e] uppercase tracking-wider">{item.metricLabel}</span>
          <span className={`text-xs font-bold ${theme.metric}`}>{item.metricValue}</span>
        </div>

        <ul className="flex flex-col gap-1.5">
          {item.details.map((d, i) => (
            <li key={i} className="flex items-start gap-2 text-[10px] text-white/45 leading-relaxed">
              <BookOpen size={10} className="shrink-0 mt-0.5" style={{ color: theme.accent, opacity: 0.5 }} />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
