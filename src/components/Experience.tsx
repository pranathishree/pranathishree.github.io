"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import Reveal from "@/components/Reveal";
import { Briefcase } from "lucide-react";

function WinBar({ title, dark = false }: { title: string; dark?: boolean }) {
  return (
    <div className={dark ? "window-bar" : "window-bar"} style={dark ? { background: "rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.08)" } : {}}>
      <div className="window-bar-btns" aria-hidden="true">
        <div className="window-bar-btn close" /><div className="window-bar-btn min" /><div className="window-bar-btn max" />
      </div>
      <span className="window-title" style={dark ? { color: "var(--win)" } : {}}>{title}</span>
    </div>
  );
}

export default function Experience() {
  const { experience } = portfolioData;
  return (
    <>
      {experience.jobs.map((job, jIdx) => {
        const isActive = job.status === "ACTIVE";
        const bg = isActive ? "var(--ink)" : "var(--desk2)";
        const dark = isActive;
        return (
          <section key={jIdx} style={{ padding: "60px 5vw", background: bg, borderTop: "1px solid " + (dark ? "rgba(255,255,255,0.07)" : "var(--border)"), position: "relative", overflow: "hidden" }} id={jIdx === 0 ? "experience" : undefined}>
            {/* Ghost background text */}
            {dark && (
              <span style={{ position: "absolute", right: "-2rem", bottom: "-3rem", fontFamily: "var(--font-serif)", fontSize: "16rem", fontWeight: 400, fontStyle: "italic", color: "rgba(255,255,255,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap" }}>
                {job.company.split("/")[0].trim()}
              </span>
            )}
            <Reveal>
              <div className="desk-section-head">
                <div className="desk-section-icon" style={dark ? { background: "rgba(255,255,255,0.08)" } : {}}>
                  <Briefcase size={20} color={dark ? "var(--win)" : "var(--ink)"} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="desk-section-label" style={dark ? { color: "var(--win)" } : {}}>
                    {isActive ? `Current Role · ${job.timeline}` : `Past Role · ${job.timeline}`}
                  </p>
                  <h2 className="desk-section-title" style={dark ? { color: "var(--win)" } : {}}>
                    {job.role} — <em style={dark ? { color: "#6daee0" } : {}}>{job.company}</em>
                  </h2>
                </div>
              </div>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="exp-cols">
              {/* Left: title card */}
              <div className={dark ? "window-dark" : "window"}>
                <WinBar title="internship_details.txt" dark={dark} />
                <div style={{ padding: "28px 32px" }}>
                  {isActive && (
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(52,199,89,0.12)", border: "1px solid rgba(52,199,89,0.25)", color: "var(--green)", fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 5, marginBottom: 18 }}>
                      <span className="live-dot" style={{ background: "var(--green)" }} />Currently Active
                    </div>
                  )}
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem,2.8vw,2.4rem)", color: dark ? "var(--win)" : "var(--ink)", lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 6 }}>
                    {job.role}
                  </h3>
                  <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: dark ? "var(--win)" : "var(--ink3)" }}>
                    {job.company}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 18 }}>
                    {job.coreTechStack.map((t) => (
                      <span key={t} style={{ fontSize: 10, fontWeight: 500, color: dark ? "rgba(109,174,224,0.9)" : "var(--accent)", background: dark ? "rgba(109,174,224,0.1)" : "rgba(96,165,250,0.15)", border: `1px solid ${dark ? "rgba(109,174,224,0.2)" : "rgba(96,165,250,0.15)"}`, padding: "3px 9px", borderRadius: 4 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: milestones */}
              <div className={dark ? "window-dark" : "window"}>
                <WinBar title="responsibilities.md" dark={dark} />
                <div style={{ padding: "28px 32px" }}>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {job.milestones.map((m, i) => (
                      <li key={i} style={{ fontSize: 13, color: dark ? "var(--win)" : "var(--ink2)", fontWeight: 300, lineHeight: 1.65, paddingLeft: 18, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: dark ? "#6daee0" : "var(--accent)", fontSize: 11, top: 2 }}>→</span>
                        <strong style={{ color: dark ? "var(--win)" : "var(--ink)", fontWeight: 500 }}>{m.title}.</strong>{" "}{m.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <style>{`@media(max-width:900px){.exp-cols{grid-template-columns:1fr!important;}}`}</style>
          </section>
        );
      })}
    </>
  );
}
