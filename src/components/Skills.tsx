"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import Reveal from "@/components/Reveal";
import { Zap } from "lucide-react";

function WinBar({ title }: { title: string }) {
  return (
    <div className="window-bar">
      <div className="window-bar-btns">
        <div className="window-bar-btn close" /><div className="window-bar-btn min" /><div className="window-bar-btn max" />
      </div>
      <span className="window-title">{title}</span>
    </div>
  );
}

const FILE_NAMES: Record<string, string> = {
  "Technical Systems":   "tech_systems.app",
  "Product & Business":  "product.app",
  "Leadership & Strategy": "leadership.app",
};

export default function Skills() {
  const { skills } = portfolioData;
  return (
    <section id="skills" style={{ padding: "70px 5vw", background: "var(--desk)", borderTop: "1px solid var(--border)" }}>
      <Reveal>
        <div className="desk-section-head">
          <div className="desk-section-icon"><Zap size={20} color="var(--win)" strokeWidth={1.5} /></div>
          <div>
            <p className="desk-section-label">What I Bring</p>
            <h2 className="desk-section-title">A Multi-Disciplinary <em>Toolkit</em></h2>
          </div>
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="skills-cols">
        {skills.categories.map((cat, idx) => (
          <Reveal key={cat.title} delay={idx * 90}>
            <div className="skill-window window">
              <WinBar title={FILE_NAMES[cat.title] ?? "skills.app"} />
              <div className="window-body" style={{ padding: "22px 24px" }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ink3)", marginBottom: 5 }}>
                  {cat.title}
                </p>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--ink)", marginBottom: 16, lineHeight: 1.1 }}>
                  {cat.description.split(" ").slice(0, 5).join(" ")}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {cat.skills.map((s) => (
                    <span key={s.name} className="sk-tag">{s.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`@media(max-width:900px){.skills-cols{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
