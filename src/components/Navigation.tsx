"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "In Action", href: "#in-action" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Scroll detection to adjust styling when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Trigger active states when section covers mid-viewport
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe each section in the DOM
    const sections = ["hero", "about", "experience", "projects", "in-action", "skills", "education", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const offsetPosition = targetEl.offsetTop - 80; // offset navbar height
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-mauve-hover via-gold-hover to-mauve-accent origin-[0%] z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "glass-navbar py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex flex-col cursor-pointer"
          >
            <span className="font-serif text-2xl tracking-wide font-normal text-gold-highlight group-hover:text-mauve-accent transition-colors duration-300">
              PRANATHI SHREE
            </span>
            <span className="text-[9px] tracking-[0.2em] font-mono text-[#8c889e] uppercase -mt-1 group-hover:text-gold-hover transition-colors duration-300">
              Technology & Strategy
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 text-sm tracking-wide transition-all duration-300 rounded-full hover:text-mauve-accent ${
                    isActive ? "text-mauve-accent font-medium" : "text-[#b2adc4]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-mauve-muted rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action buttons (Resume Download) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/resume.pdf"
              download="Pranathi_Shree_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-mono tracking-widest text-[#0a0a0c] bg-gold-highlight hover:bg-gold-hover transition-all duration-300 rounded-full font-bold group shadow-[0_0_15px_rgba(245,230,201,0.15)]"
            >
              <FileDown size={14} className="group-hover:-translate-y-[1px] transition-transform duration-300" />
              RESUME
              <ArrowUpRight size={12} className="opacity-60 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#b2adc4] hover:text-mauve-accent focus:outline-none transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 right-0 bg-charcoal-surface/95 backdrop-blur-xl border-b border-charcoal-border overflow-hidden"
            >
              <div className="flex flex-col px-6 py-8 gap-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`text-base tracking-wide py-2 border-b border-charcoal-border/50 hover:text-mauve-accent transition-colors ${
                        isActive ? "text-mauve-accent font-medium" : "text-[#b2adc4]"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <a
                  href="/resume.pdf"
                  download="Pranathi_Shree_Resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 text-xs font-mono tracking-widest text-[#0a0a0c] bg-gold-highlight hover:bg-gold-hover transition-colors rounded-full font-bold"
                >
                  <FileDown size={14} />
                  RESUME DOWNLOAD
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
