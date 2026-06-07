import portfolioData from "@/data/portfolio.json";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import MediaGallery from "@/components/MediaGallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen flex flex-col">
      {/* Desktop surface */}
      <div style={{ paddingTop: 0 }}>
        <main className="w-full">
          <Hero />

          {/* Stats strip */}
          <div className="stats-strip flex-wrap">
            {portfolioData.hero.stats.map((s) => (
              <div key={s.label} className="stat-block">
                <span className="stat-n">{s.value}</span>
                <span className="stat-l">{s.label} · {s.desc}</span>
              </div>
            ))}
          </div>

          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />

          {/* Milestones — dark timeline */}
          <Achievements />

          {/* Photos & Videos gallery */}
          <MediaGallery />

          <Contact />
        </main>

        {/* Footer */}
        <footer style={{
          padding: "24px 5vw",
          background: "rgba(16,12,6,0.98)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12
        }}>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(245,242,236,0.65)" }}>
            Pranathi Shree
          </span>
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,242,236,0.2)" }}>
            © {new Date().getFullYear()} · All rights reserved
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["About", "Projects", "Gallery", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="footer-link">{l}</a>
            ))}
          </div>
        </footer>
      </div>

      {/* macOS Dock */}
      <Dock />
    </div>
  );
}
