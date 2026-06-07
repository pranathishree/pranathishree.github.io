"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import { ArrowUpRight, Camera, MousePointer2 } from "lucide-react";

export default function Hero() {
  const { personal, hero } = portfolioData;

  return (
    <section
      id="top"
      style={{
        minHeight: "calc(100vh - 28px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#e8e0d0",
        borderBottom: "1px solid #c8c0b0",
        position: "relative",
        overflow: "hidden",
      }}
      className="hero-grid"
    >
      {/* ── FANTASTIC BACKGROUND EFFECTS ── */}
      {/* Base warm overlay */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 80% at 30% 50%, rgba(200,148,10,0.03) 0%, transparent 70%)", zIndex: 0 }} />
      
      {/* Animated glowing orbs */}
      <div style={{
        position: "absolute", top: "-10%", left: "-10%", width: "60vw", height: "60vw",
        background: "radial-gradient(circle, rgba(45,90,142,0.12) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none", zIndex: 0,
        animation: "pulseGlow 8s ease-in-out infinite alternate"
      }} />
      <div style={{
        position: "absolute", bottom: "-20%", right: "-10%", width: "70vw", height: "70vw",
        background: "radial-gradient(circle, rgba(220,100,120,0.08) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none", zIndex: 0,
        animation: "pulseGlow 12s ease-in-out infinite alternate-reverse"
      }} />

      {/* ── LEFT: Bio ── */}
      <div style={{
        padding: "80px 5vw 60px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        borderRight: "1px solid rgba(200,192,176,0.5)",
        position: "relative", zIndex: 1,
      }}>
        {/* Traffic light buttons */}
        <div style={{ display: "flex", gap: 7, marginBottom: 40, animation: "fadeIn 0.6s ease-out both" }}>
          {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
            <div key={c} style={{ width: 13, height: 13, borderRadius: "50%", background: c, boxShadow: `0 1px 4px ${c}80`, animation: `slideUp 0.4s ${i * 0.1}s both` }} />
          ))}
        </div>

        {/* Amber accent bar */}
        <div className="amber-bar" style={{ width: 48, height: 4, borderRadius: 2, background: "linear-gradient(90deg, #febc2e, #ff5f57)", boxShadow: "0 2px 8px rgba(254,188,46,0.4)" }} />

        {/* Eyebrow */}
        <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7060", marginBottom: 22, animation: "slideUp 0.6s 0.1s both" }}>
          Portfolio · 2026 · CSBS · GITAM Bangalore
        </p>

        {/* Name */}
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(4.2rem, 8.5vw, 7.8rem)",
          lineHeight: 0.88,
          letterSpacing: "-0.03em",
          color: "#1a1610",
          marginBottom: 0,
          animation: "slideUp 0.7s 0.2s both"
        }}>
          <span className="hero-name-word" style={{ display: "block" }}>
            {personal.name.split(" ")[0]}
          </span>
          <span className="hero-name-word" style={{ display: "block" }}>
            <em style={{ 
              fontStyle: "italic", 
              color: "#2d5a8e",
              display: "inline-block",
            }}>
              {personal.name.split(" ")[1]}
            </em>
          </span>
        </h1>

        {/* Role pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "linear-gradient(135deg, #1a1610 0%, #2a241a 100%)", color: "#f5f2ec",
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
          padding: "8px 16px 8px 12px", borderRadius: 100,
          marginTop: 24, marginBottom: 28, alignSelf: "flex-start",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
          animation: "slideUp 0.6s 0.3s both",
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
          <span className="live-dot" style={{ background: "#28c840", boxShadow: "0 0 10px #28c840" }} />
          {hero.internshipBadge}
        </div>

        {/* Subtitle — italic serif */}
        <p style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "1.3rem",
          color: "#3a3228",
          lineHeight: 1.6,
          maxWidth: 440,
          marginBottom: 40,
          animation: "slideUp 0.6s 0.4s both",
        }}>
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "slideUp 0.6s 0.5s both" }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(45,90,142,0.6)", filter: "blur(12px)", borderRadius: 8, animation: "pulseGlow 3s infinite" }} />
            <a href="#projects" className="hero-btn-primary" style={{
              position: "relative",
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", padding: "14px 28px",
              background: "linear-gradient(to bottom, #2a241a, #1a1610)", color: "#f5f2ec",
              borderRadius: 8, border: "1px solid #3a3228",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)"; }}
            >
              View Work <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
          </div>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none", padding: "14px 28px",
            background: "rgba(255,255,255,0.2)", color: "#1a1610",
            border: "1px solid rgba(0,0,0,0.15)",
            backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            transition: "all 0.25s ease",
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,0.6)"; el.style.transform="translateY(-3px)"; el.style.borderColor="rgba(0,0,0,0.25)"; el.style.boxShadow="0 8px 20px rgba(0,0,0,0.08)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,0.2)"; el.style.transform=""; el.style.borderColor="rgba(0,0,0,0.15)"; el.style.boxShadow="0 4px 12px rgba(0,0,0,0.05)"; }}
          >
            Let&rsquo;s Talk
          </a>
        </div>

        {/* Mini stats row */}
        <div style={{ display: "flex", gap: 36, marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(0,0,0,0.08)", animation: "slideUp 0.6s 0.6s both" }}>
          {hero.stats.slice(0,3).map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#1a1610", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8a7060", marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: FANTASTIC MAC-OS SCATTER ── */}
      <div style={{ padding: "72px 4vw 60px", position: "relative", overflow: "hidden", zIndex: 1 }} className="hidden md:block">

        {/* Desktop header label */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32, animation: "fadeIn 1s ease-out both" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
          <span style={{ marginLeft: 8, fontSize: 11, fontWeight: 600, color: "#8a7060", letterSpacing: "0.08em", textTransform: "uppercase" }}>pranathi_shree_os</span>
        </div>

        <div style={{ position: "relative", width: "100%", height: "calc(100% - 56px)", minHeight: 500 }}>

          {/* Big editorial type */}
          <div style={{ position: "absolute", top: 120, left: 20, animation: "slideUp 0.8s 0.3s both" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7a6a", marginBottom: 6 }}>creative</div>
            <div style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.8rem, 7.5vw, 6.8rem)",
              fontStyle: "italic",
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
              color: "rgba(26,22,16,0.9)",
              textShadow: "0 4px 24px rgba(0,0,0,0.05)"
            }}>engineer</div>
            <div style={{ fontSize: 12, color: "#9a8a7a", marginTop: 12, fontWeight: 500, fontStyle: "italic" }}>Crafting systems that work beautifully</div>
          </div>

          {/* Folders row with continuous floating */}
          {[
            { label: "projects",     top: 10,  left: 20,  delay: "0s",   anim: "floatSlow" },
            { label: "strategy",     top: 10,  left: 140, delay: "1.2s", anim: "floatMedium" },
            { label: "leadership",   top: 10,  left: 260, delay: "0.5s", anim: "floatFast" },
          ].map((f) => (
            <div key={f.label} className="folder" style={{ position: "absolute", top: f.top, left: f.left, animation: `${f.anim} 5s ease-in-out ${f.delay} infinite`, filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.1))" }}>
              <div className="folder-icon">
                <div className="folder-back" /><div className="folder-tab" />
                <div className="folder-front" style={{ background: "linear-gradient(135deg, #a7d0e8, #7eb0cc)" }}><div className="folder-shine" /></div>
              </div>
              <span className="folder-label" style={{ fontWeight: 600 }}>{f.label}</span>
            </div>
          ))}

          {/* Sticky notes with glassmorphism and floating */}
          <div className="sticky" style={{ 
            "--rot": "3deg", position: "absolute", bottom: 170, right: 30, transform: "rotate(3deg)", 
            background: "rgba(255,248,180,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "2px 16px 32px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.8)",
            animation: "floatMedium 6s ease-in-out 0.2s infinite"
          } as React.CSSProperties}>
            <div className="sticky-title">currently</div>
            <div className="sticky-body">interning @ QNX /<br />SDV automotive ✓</div>
          </div>

          <div className="sticky sticky-blue" style={{ 
            "--rot": "-2deg", position: "absolute", bottom: 90, left: 40, transform: "rotate(-2deg)",
            background: "rgba(180,220,255,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "2px 16px 32px rgba(45,90,142,0.15), inset 0 2px 0 rgba(255,255,255,0.8)",
            animation: "floatSlow 7s ease-in-out 1.5s infinite"
          } as React.CSSProperties}>
            <div className="sticky-title">skills</div>
            <div className="sticky-body">product strategy<br />embedded systems<br />public speaking</div>
          </div>

          <div className="sticky sticky-pink" style={{ 
            "--rot": "-1.5deg", position: "absolute", top: 120, right: 35, transform: "rotate(-1.5deg)",
            background: "rgba(255,190,210,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "2px 16px 32px rgba(220,100,120,0.15), inset 0 2px 0 rgba(255,255,255,0.8)",
            animation: "floatFast 5s ease-in-out 0.8s infinite"
          } as React.CSSProperties}>
            <div className="sticky-title">fun fact</div>
            <div className="sticky-body">fluent in 5 languages 🌍</div>
          </div>

          {/* File icon with floating */}
          <div className="file-icon" style={{ position: "absolute", bottom: 130, left: 240, animation: "floatSlow 6.5s ease-in-out 2s infinite", filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.1))" }}>
            <div className="file-doc" style={{ background: "linear-gradient(to bottom right, #ffffff, #f0f0f0)", border: "1px solid #d0d0d0" }}>
              <div className="file-doc-lines">
                <div className="file-doc-line" /><div className="file-doc-line" />
                <div className="file-doc-line" /><div className="file-doc-line" />
              </div>
            </div>
            <span className="file-label" style={{ fontWeight: 600 }}>resume_2026.pdf</span>
          </div>

          {/* Photo frame placeholder with floating */}
          <div className="photo-frame" style={{ 
            position: "absolute", top: 10, right: 35, width: 120, height: 90, 
            background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.12)", animation: "floatMedium 5.5s ease-in-out 1.2s infinite" 
          }}>
            <span style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}><Camera size={26} color="#8a7a6a" strokeWidth={1.5} /></span>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6a6058" }}>portrait</span>
          </div>
          <div style={{ position: "absolute", top: 116, right: 35, fontSize: 10.5, fontWeight: 600, color: "#8a8070", textAlign: "center", width: 120, animation: "floatMedium 5.5s ease-in-out 1.2s infinite" }}>portrait.jpeg</div>

          {/* Floating Cursor icon */}
          <div style={{ position: "absolute", bottom: 195, left: 330, pointerEvents: "none", userSelect: "none", filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))", animation: "floatFast 4s ease-in-out infinite" }}>
            <MousePointer2 size={32} color="#ffffff" fill="#1a1610" strokeWidth={1.5} />
          </div>

          {/* Floating availability badge (Heavy Glassmorphism) */}
          <div style={{
            position: "absolute", bottom: 20, right: 24,
            background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
            backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.6)",
            borderRadius: 14,
            padding: "14px 22px",
            display: "flex", alignItems: "center", gap: 12,
            boxShadow: "0 12px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
            animation: "slideUp 0.8s 0.5s both, floatSlow 6s ease-in-out 0.5s infinite"
          }}>
            <span className="live-dot" style={{ background: "#28c840", boxShadow: "0 0 12px #28c840", width: 10, height: 10 }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#1a1610", letterSpacing: "0.08em" }}>Available</div>
              <div style={{ fontSize: 9.5, fontWeight: 600, color: "#6a6058", letterSpacing: "0.04em" }}>for 2026 roles</div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

