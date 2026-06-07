"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import Reveal from "@/components/Reveal";
import { User } from "lucide-react";

const LANGUAGES = [
  { lang: "English",  level: "Native" },
  { lang: "Kannada",  level: "Fluent" },
  { lang: "Telugu",   level: "Fluent" },
  { lang: "Tamil",    level: "Fluent" },
  { lang: "Hindi",    level: "Fluent" },
];
const BADGE_COLORS: Record<string,string> = {
  Native: "var(--accent)", Fluent: "var(--accent)",
};

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

export default function About() {
  const { about } = portfolioData;
  return (
    <section id="about" style={{ padding: "70px 5vw", background: "var(--desk)", borderTop: "1px solid var(--border)" }}>
      <Reveal>
        <div className="desk-section-head">
          <div className="desk-section-icon"><User size={20} color="var(--win)" strokeWidth={1.5} /></div>
          <div>
            <p className="desk-section-label">Who I Am</p>
            <h2 className="desk-section-title">
              Strategy, <em>Tech</em> &amp; Everything In Between.
            </h2>
          </div>
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="about-cols">
        {/* Bio window */}
        <Reveal delay={80}>
          <div className="window">
            <WinBar title="about_pranathi.txt" />
            <div className="window-body">
              {about.descriptionParagraphs.map((p, i) => (
                <p key={i} style={{ fontSize: 13.5, color: "var(--ink2)", lineHeight: 1.88, fontWeight: 300, marginBottom: i < about.descriptionParagraphs.length - 1 ? 14 : 0 }}>
                  {p}
                </p>
              ))}
              {/* Quote pull */}
              <blockquote style={{
                fontFamily: "var(--font-serif)", fontStyle: "italic",
                fontSize: "1.05rem", color: "var(--accent)",
                borderLeft: "3px solid var(--accent)",
                paddingLeft: 16, marginTop: 20, lineHeight: 1.6,
              }}>
                &ldquo;{about.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Languages window */}
          <Reveal delay={160}>
            <div className="window">
              <WinBar title="languages.txt" />
              <div style={{ padding: "18px 24px" }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink3)", marginBottom: 12 }}>
                  🌍 Multilingual — 5 Languages
                </p>
                {LANGUAGES.map((l, i) => (
                  <div key={l.lang} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "10px 0",
                    borderBottom: i < LANGUAGES.length - 1 ? "1px solid #e0d8cc" : "none",
                  }}>
                    <span style={{ fontSize: 13.5, fontWeight: 500, color: "var(--ink)" }}>{l.lang}</span>
                    <span style={{
                      fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
                      color: BADGE_COLORS[l.level] ?? "var(--accent)",
                      background: "rgba(96,165,250,0.15)",
                      border: "1px solid rgba(96,165,250,0.15)",
                      padding: "2px 9px", borderRadius: 100,
                    }}>{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Interests mini-grid */}
          <Reveal delay={240}>
            <div className="window">
              <WinBar title="interests.txt" />
              <div style={{ padding: "18px 24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {about.interests.map((item) => (
                    <div key={item.title} style={{
                      padding: "10px 12px",
                      background: "rgba(96,165,250,0.15)",
                      border: "1px solid rgba(96,165,250,0.15)",
                      borderRadius: 8,
                    }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--ink)", marginBottom: 3, lineHeight: 1.2 }}>{item.title}</div>
                      <div style={{ fontSize: 11, color: "var(--ink3)", lineHeight: 1.5, fontWeight: 300 }}>{item.description.split(" ").slice(0,8).join(" ")}…</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`@media(max-width:900px){.about-cols{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
