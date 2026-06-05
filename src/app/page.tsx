import SpotlightEffect from "@/components/SpotlightEffect";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import InAction from "@/components/InAction";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Interactive Spotlight */}
      <SpotlightEffect />

      {/* Global Navigation */}
      <Navigation />

      {/* Main Content Sections */}
      <main className="flex-grow w-full">
        {/* Hero Banner Section */}
        <Hero />

        {/* Narrative / About Section */}
        <About />

        {/* Professional Experience Section */}
        <Experience />

        {/* Projects Grid Section */}
        <Projects />

        {/* Media Portfolio In Action Section */}
        <InAction />

        {/* Interactive Skills Radar / Bar Section */}
        <Skills />

        {/* Education Timeline Section */}
        <Education />

        {/* Honors & Milestones Section */}
        <Achievements />

        {/* Syllabus / Dashboard Learning Section */}
        <CurrentlyLearning />

        {/* Contact Form & Links Section */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <footer className="w-full py-12 border-t border-charcoal-border bg-[#0A0A0C]/80 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center md:text-left">
            <span className="font-serif text-xl tracking-wide text-gold-highlight font-normal">
              PRANATHI SHREE D A
            </span>
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#8c889e] uppercase mt-0.5">
              Future Product Leader
            </span>
          </div>
          
          <div className="text-[11px] font-mono text-[#8c889e] tracking-wider text-center md:text-right">
            <p>© {new Date().getFullYear()} Pranathi Shree D A. All rights reserved.</p>
            <p className="mt-1 opacity-60">Computer Science & Business Systems Student</p>
          </div>
        </div>
      </footer>

      {/* Dynamic Scroll Interaction Utility */}
      <BackToTop />
    </div>
  );
}
