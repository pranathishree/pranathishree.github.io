import React from "react";
import HomeHero from "@/components/HomeHero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Impact from "@/components/Impact";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <div className="desktop">
      <HomeHero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Impact />
      <Achievements />
      <Contact />
      <Dock />
    </div>
  );
}
