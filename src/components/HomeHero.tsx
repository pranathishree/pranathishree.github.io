"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import ImageDropzone from "./ImageDropzone";

export default function HomeHero() {
  const { hero } = portfolioData;
  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-left">
          <div className="hero-os-bar">
            <div className="os-btn os-close"></div>
            <div className="os-btn os-min"></div>
            <div className="os-btn os-max"></div>
          </div>
          <p className="hero-eyebrow">Portfolio · {new Date().getFullYear()} · CSBS · GITAM Bangalore</p>
          <h1 className="hero-name">Pranathi<br/><span className="hero-name-it">Shree</span> D A</h1>
          <div className="hero-role-tag">
            <span className="hero-role-dot"></span>
            {hero.internshipBadge || "Available for Opportunities"}
          </div>
          <p className="hero-sub">{hero.subtitle}</p>
          <div className="hero-ctas">
            <a href="#projects" className="hero-cta"><i className="ti ti-folder-open"></i> {hero.ctaExplore}</a>
            <a href="#contact" className="hero-cta-ghost"><i className="ti ti-send"></i> {hero.ctaContact}</a>
          </div>
        </div>
        <div className="hero-right">
          <p className="hero-right-title">pranathi_portfolio — Desktop</p>
          <div style={{position: "relative", width: "100%", height: "calc(100% - 40px)", minHeight: "500px"}}>
            <div className="folder" style={{position: "absolute", top: "30px", left: "30px"}}>
              <div className="folder-icon"><div className="folder-back"></div><div className="folder-tab"></div><div className="folder-front"><div className="folder-shine"></div></div></div>
              <span className="folder-label">projects</span>
            </div>
            <div className="folder" style={{position: "absolute", top: "30px", left: "140px"}}>
              <div className="folder-icon"><div className="folder-back"></div><div className="folder-tab"></div><div className="folder-front"><div className="folder-shine"></div></div></div>
              <span className="folder-label">case studies</span>
            </div>
            <div className="folder" style={{position: "absolute", top: "30px", left: "250px"}}>
              <div className="folder-icon"><div className="folder-back"></div><div className="folder-tab"></div><div className="folder-front"><div className="folder-shine"></div></div></div>
              <span className="folder-label">achievements</span>
            </div>
            <div className="folder" style={{position: "absolute", top: "30px", left: "360px"}}>
              <div className="folder-icon"><div className="folder-back"></div><div className="folder-tab"></div><div className="folder-front"><div className="folder-shine"></div></div></div>
              <span className="folder-label">leadership</span>
            </div>

            <div style={{position: "absolute", top: "130px", left: "20px", right: "20px", zIndex: 1}}>
              <div style={{fontFamily: "'DM Serif Display',serif", fontSize: "clamp(3.5rem,7vw,6.5rem)", fontStyle: "italic", lineHeight: "0.88", letterSpacing: "-0.04em", color: "var(--ink)"}}>portfolio</div>
            </div>

            {/* Creative Addition: Glassmorphism Music Widget */}
            <div className="music-widget" style={{position: "absolute", top: "260px", left: "30px", width: "160px", background: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)", borderRadius: "16px", padding: "12px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", zIndex: 2}}>
              <div style={{width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px rgba(255,154,158,0.4)"}}>
                <i className="ti ti-music" style={{color: "white", fontSize: "16px"}}></i>
              </div>
              <div style={{display: "flex", flexDirection: "column"}}>
                <span style={{fontSize: "11px", fontWeight: 700, color: "var(--ink)", letterSpacing: "0.02em"}}>Now Playing</span>
                <span style={{fontSize: "9px", color: "var(--ink3)", marginTop: "2px"}}>Lofi Study Beats</span>
              </div>
            </div>

            {/* Creative Addition: Terminal Snippet */}
            <div style={{position: "absolute", bottom: "130px", left: "180px", background: "#1c1c1e", borderRadius: "8px", padding: "12px 16px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", width: "220px", transform: "rotate(-2deg)", zIndex: 2}}>
              <div style={{display: "flex", gap: "6px", marginBottom: "8px"}}>
                <div style={{width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56"}}></div>
                <div style={{width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e"}}></div>
                <div style={{width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f"}}></div>
              </div>
              <div style={{fontFamily: "monospace", fontSize: "10px", color: "#4af626"}}>❯ ./build_future.sh</div>
              <div style={{fontFamily: "monospace", fontSize: "10px", color: "#999", marginTop: "4px"}}>Compiling ideas... 100%</div>
            </div>

            {/* Creative Addition: Figma File */}
            <div className="file-icon" style={{position: "absolute", top: "260px", left: "240px", zIndex: 2}}>
              <div style={{width: "36px", height: "46px", background: "#f24e1e", borderRadius: "4px", position: "relative", margin: "0 auto 6px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 5px rgba(0,0,0,0.1)"}}>
                <i className="ti ti-brand-figma" style={{color: "white", fontSize: "20px"}}></i>
                <div style={{position: "absolute", top: "0", right: "0", width: "12px", height: "12px", background: "rgba(255,255,255,0.3)", borderBottomLeftRadius: "4px"}}></div>
              </div>
              <span className="file-label">wireframes.fig</span>
            </div>

            <div className="sticky sticky-pink" style={{position: "absolute", bottom: "30px", right: "30px", transform: "rotate(2deg)", zIndex: 3}}>
              <div className="sticky-title">currently</div>
              <div className="sticky-body">interning on QNX / SDV automotive systems</div>
            </div>

            <div className="sticky sticky-blue" style={{position: "absolute", bottom: "30px", left: "30px", transform: "rotate(-1.5deg)", zIndex: 3}}>
              <div className="sticky-title">top skills</div>
              <div className="sticky-body">• product strategy<br/>• embedded systems<br/>• public speaking</div>
            </div>

            <div className="file-icon" style={{position: "absolute", top: "280px", left: "340px", zIndex: 2}}>
              <div className="file-doc"><div className="file-doc-lines"><div className="file-doc-line"></div><div className="file-doc-line"></div><div className="file-doc-line"></div><div className="file-doc-line"></div></div></div>
              <span className="file-label">resume_2026.pdf</span>
            </div>

            <div className="img-thumb" style={{position: "absolute", top: "130px", right: "30px", width: "180px", height: "140px", background: "none", zIndex: 2}}>
              <img src="/Portrait.jpeg" alt="Pranathi" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }} />
            </div>
            <div className="img-filename" style={{position: "absolute", top: "276px", right: "30px", width: "180px", textAlign: "center", zIndex: 2}}>Me.jpeg</div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stats-strip-inner">
          {hero.stats.map((stat, i) => {
            const icons = ["ti-school", "ti-briefcase", "ti-language", "ti-cpu"];
            const widths = ["83%", "65%", "100%", "50%"];
            return (
              <div className="stat-block" key={i}>
                <i className={`ti ${icons[i] || 'ti-star'} stat-block-icon`}></i>
                <span className="stat-n">{stat.value}</span>
                <span className="stat-l">{stat.label} · {stat.desc}</span>
                <div className="stat-bar"><div className="stat-bar-fill" style={{width: widths[i] || "50%"}}></div></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
