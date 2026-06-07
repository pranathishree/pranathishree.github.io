"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import Reveal from "@/components/Reveal";

import { Trophy } from "lucide-react";

const BADGE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Professional:  { bg: "rgba(96,165,250,0.15)",   text: "var(--accent)", border: "rgba(96,165,250,0.15)" },
  Leadership:    { bg: "rgba(138,96,32,0.1)",    text: "var(--amber)", border: "rgba(138,96,32,0.22)" },
  Communication: { bg: "rgba(52,199,89,0.1)",    text: "#1a7a3a", border: "rgba(52,199,89,0.22)" },
  Strategy:      { bg: "rgba(138,96,32,0.1)",    text: "var(--amber)", border: "rgba(138,96,32,0.22)" },
  Innovation:    { bg: "rgba(155,60,200,0.1)",   text: "#7a20b0", border: "rgba(155,60,200,0.22)" },
};

const MILESTONE_ICONS: Record<string, string> = {
  Shield: "🛡️", Award: "🏆", Mic: "🎙️", LayoutGrid: "📊", Flame: "🔥",
};

const YEARS: string[] = ["2025", "2024", "2024", "2024", "2023"];

export default function Achievements() {
  const { achievements } = portfolioData;
  const items = achievements.achievementsList;

  return (
    <section
      id="achievements"
      style={{ padding: "70px 5vw", background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}
    >
      {/* Ghost background text */}
      <span style={{
        position: "absolute", right: "-1rem", top: "-2rem",
        fontFamily: "var(--font-serif)", fontSize: "18rem",
        fontWeight: 400, fontStyle: "italic",
        color: "rgba(255,255,255,0.025)", lineHeight: 1,
        pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap",
      }}>
        milestones
      </span>

      <Reveal>
        <div className="desk-section-head">
          <div className="desk-section-icon" style={{ background: "rgba(255,255,255,0.08)" }}>
            <Trophy size={20} color="var(--win)" strokeWidth={1.5} />
          </div>
          <div>
            <p className="desk-section-label" style={{ color: "var(--win)" }}>Honors &amp; Recognition</p>
            <h2 className="desk-section-title" style={{ color: "var(--win)" }}>
              Key <em style={{ color: "#6daee0" }}>Milestones</em>
            </h2>
          </div>
        </div>
      </Reveal>

      {/* Timeline */}
      <div style={{ position: "relative", marginTop: 8 }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute", left: 22, top: 0, bottom: 0, width: 1,
          background: "linear-gradient(to bottom, rgba(109,174,224,0.5), rgba(109,174,224,0.08))",
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {items.map((item, idx) => {
            const badge = BADGE_COLORS[item.badgeText] ?? BADGE_COLORS.Professional;
            const icon = MILESTONE_ICONS[item.icon] ?? "⭐";
            return (
              <Reveal key={idx} delay={idx * 90}>
                <div style={{ display: "flex", gap: 28, padding: "28px 0", borderBottom: idx < items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", position: "relative" }}>
                  {/* Timeline node */}
                  <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
                    <div style={{
                      width: 44, height: 44,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.06)",
                      border: "1.5px solid rgba(255,255,255,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.2rem",
                      boxShadow: "0 0 0 4px rgba(109,174,224,0.06)",
                    }}>
                      {icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, paddingTop: 8 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                      <div>
                        <h3 style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.35rem", color: "var(--win)",
                          lineHeight: 1.05, marginBottom: 5,
                          letterSpacing: "-0.01em",
                        }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: 13, color: "var(--win)", fontWeight: 300, lineHeight: 1.7, maxWidth: 540 }}>
                          {item.description}
                        </p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, flexShrink: 0 }}>
                        <span style={{
                          fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase",
                          color: badge.text, background: badge.bg, border: `1px solid ${badge.border}`,
                          padding: "3px 10px", borderRadius: 100,
                        }}>
                          {item.badgeText}
                        </span>
                        <span style={{
                          fontFamily: "var(--font-serif)", fontStyle: "italic",
                          fontSize: "1.1rem", color: "var(--win)", lineHeight: 1,
                        }}>
                          {YEARS[idx]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Bottom stats row */}
      <Reveal delay={500}>
        <div style={{
          marginTop: 48, paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
        }}>
          {[
            { n: "5+",    l: "Milestones" },
            { n: "3",     l: "Leadership Roles" },
            { n: "1,500+",l: "Athletes Managed" },
            { n: "40%",   l: "Platform Growth" },
          ].map((s, i) => (
            <div key={i} style={{
              textAlign: "center", padding: "20px 0",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--win)", lineHeight: 1, marginBottom: 5 }}>
                {s.n}
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--win)" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
