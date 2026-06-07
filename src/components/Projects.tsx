"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import Reveal from "@/components/Reveal";
import { Folder } from "lucide-react";

function WinBar({ title }: { title: string }) {
  return (
    <div className="window-bar">
      <div className="window-bar-btns" aria-hidden="true">
        <div className="window-bar-btn close" /><div className="window-bar-btn min" /><div className="window-bar-btn max" />
      </div>
      <span className="window-title">{title}</span>
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;
  return (
    <section id="projects" style={{ padding: "70px 5vw", background: "var(--desk2)", borderTop: "1px solid var(--border)" }}>
      <Reveal>
        <div className="desk-section-head">
          <div className="desk-section-icon"><Folder size={20} color="var(--win)" strokeWidth={1.5} /></div>
          <div>
            <p className="desk-section-label">My Work</p>
            <h2 className="desk-section-title">Selected <em>Projects</em></h2>
          </div>
        </div>
      </Reveal>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {projects.projectsList.map((proj, idx) => (
          <Reveal key={proj.id} delay={idx * 70}>
            <div className="window proj-window-hover">
              <WinBar title={proj.title.toLowerCase().replace(/ /g, "_").slice(0, 30) + ".pdf"} />
              <div style={{ padding: "26px 32px", display: "grid", gridTemplateColumns: "56px 1fr 130px", gap: 24, alignItems: "start" }} className="proj-row">
                {/* Number */}
                <span className="proj-num">{String(idx + 1).padStart(2, "0")}.</span>

                {/* Content */}
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--ink)", marginBottom: 6, lineHeight: 1.05 }}>
                    {proj.title}
                  </p>
                  <p style={{ fontSize: 13.5, color: "var(--ink2)", fontWeight: 300, lineHeight: 1.7, marginBottom: 12 }}>
                    {proj.description}
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
                    {proj.highlights.map((h) => (
                      <li key={h} style={{ fontSize: 12, color: "var(--ink3)", paddingLeft: 14, position: "relative", lineHeight: 1.5 }}>
                        <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontWeight: 700 }}>–</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  {/* Tech stack pills — use highlights as tags if no dedicated field */}
                  {((proj as { techStack?: string[] }).techStack ?? []).length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 12 }}>
                      {((proj as { techStack?: string[] }).techStack ?? []).map((t: string) => (
                        <span key={t} className="sk-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Meta */}
                <div style={{ textAlign: "right" }}>
                  <span style={{
                    display: "inline-block",
                    fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "var(--accent)", background: "rgba(96,165,250,0.15)", border: "1px solid rgba(96,165,250,0.15)",
                    padding: "3px 10px", borderRadius: 100, marginBottom: 8,
                  }}>
                    {proj.category}
                  </span>
                  <br />
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontStyle: "italic", color: "var(--ink)", lineHeight: 1 }}>
                    2025
                  </span>
                  {proj.githubUrl && proj.githubUrl !== "#" && (
                    <div style={{ marginTop: 10 }}>
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: 10, color: "var(--accent)", textDecoration: "none", fontWeight: 700, letterSpacing: "0.06em" }}>
                        GitHub ↗
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media(max-width:900px){
          .proj-row {
            grid-template-columns: 44px 1fr !important;
          }
          .proj-row > :last-child {
            display: block;
            grid-column: 2 / -1;
            text-align: left !important;
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid rgba(0,0,0,0.06);
          }
          .proj-row > :last-child br {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
