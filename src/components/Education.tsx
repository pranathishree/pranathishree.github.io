"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import Reveal from "@/components/Reveal";
import { GraduationCap } from "lucide-react";

interface EduItem {
  degree: string; institution: string; period: string;
  location: string; metricLabel: string; metricValue: string; details: string[];
}

const QUOTES: string[] = [
  "Where I found that technology and business aren't separate — they're the same conversation.",
  "Physics, Chemistry, Mathematics, Biology — a foundation in analytical thinking.",
  "CBSE curriculum — strong grounding in core subjects and sciences.",
];

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

export default function Education() {
  const list = portfolioData.education.educationList as EduItem[];

  return (
    <section id="education" style={{ padding: "70px 5vw", background: "var(--desk2)", borderTop: "1px solid var(--border)" }}>
      <Reveal>
        <div className="desk-section-head">
          <div className="desk-section-icon"><GraduationCap size={20} color="var(--win)" strokeWidth={1.5} /></div>
          <div>
            <p className="desk-section-label">Academic Background</p>
            <h2 className="desk-section-title">My <em>Education</em></h2>
          </div>
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="edu-cols">
        {list.map((item, idx) => (
          <Reveal key={idx} delay={idx * 100}>
            <div className="window" style={{ height: "100%" }}>
              <WinBar title={item.institution.toLowerCase().replace(/ /g, "_").slice(0,20) + ".edu"} />
              <div style={{ padding: "24px" }}>
                <span className="edu-tag">{item.degree.split("–")[0].trim()}</span>

                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--ink)", lineHeight: 1.05, marginBottom: 3 }}>
                  {item.institution}
                </h3>
                <p style={{ fontSize: 12, color: "var(--ink3)", marginBottom: 4, fontWeight: 400 }}>{item.location}</p>
                <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", color: "var(--ink3)", marginBottom: 16 }}>
                  {item.period}
                </p>

                {/* Thin divider */}
                <div style={{ height: 1, background: "linear-gradient(90deg,var(--border),transparent)", marginBottom: 14 }} />

                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.87rem", color: "rgba(58,50,40,0.52)", lineHeight: 1.65, marginBottom: 18 }}>
                  &ldquo;{QUOTES[idx]}&rdquo;
                </p>

                {/* Score */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--ink)", lineHeight: 1 }}>
                    {item.metricValue.split(":")[1]?.trim() ?? item.metricValue.split(" ")[0]}
                  </span>
                  <span style={{ fontSize: 11, color: "var(--ink3)", fontWeight: 400 }}>
                    {item.metricLabel}
                  </span>
                </div>

                {/* Details as small bullets */}
                {item.details?.length > 0 && (
                  <ul style={{ marginTop: 12, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
                    {item.details.slice(0,3).map((d,i) => (
                      <li key={i} style={{ fontSize: 11, color: "var(--ink3)", paddingLeft: 12, position: "relative", lineHeight: 1.4, fontWeight: 300 }}>
                        <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontSize: 10 }}>·</span>{d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`@media(max-width:900px){.edu-cols{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
