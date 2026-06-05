"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ShieldAlert, Video, Home, TrendingUp } from "lucide-react";

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  gridClass: string;
  highlights: string[];
  problem: string;
  solution: string;
  impact: string;
  demoUrl: string;
  githubUrl: string;
  icon: React.ReactNode;
  theme: "mauve" | "gold";
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "ai-fraud",
      title: "AI Fraud Company Detection System",
      category: "Technical / NLP & ML",
      description: "Built a machine learning fraud detection platform to identify fake companies, fraudulent job ads, and online recruiter scams.",
      gridClass: "lg:col-span-8",
      highlights: ["HTML/CSS/JS", "TF-IDF NLP", "Naive Bayes", "K-Means Clustering"],
      problem: "Fake job advertisements and fraudulent company listings exploit job seekers, leading to identity theft and financial scams. Tracking these fake entities manually at scale is inefficient.",
      solution: "Implemented an analysis dashboard running Python-based NLP models. We used TF-IDF vectorization to process text content, Naive Bayes for company categorization, and K-Means clustering to discover anomaly clusters and red flags.",
      impact: "Significantly improved detection rates of automated scam postings. Created a red-flag warning dashboard indicating high-risk attributes like vague descriptions, unverified emails, and suspicious domains.",
      demoUrl: "#",
      githubUrl: "https://github.com/pranathishree",
      icon: <ShieldAlert size={24} className="text-mauve-accent" />,
      theme: "mauve",
    },
    {
      id: "prime-2",
      title: "Amazon Prime Video 2.0",
      category: "Product Strategy",
      description: "Formulated a user retention strategy and feature roadmap targeting Gen Z audiences, introducing social features.",
      gridClass: "lg:col-span-4",
      highlights: ["Retention Strategy", "PrimeSync Feature", "Product Roadmap", "KPI Definition"],
      problem: "Stagnant engagement rates and user churn on Prime Video, particularly within the Gen Z demographic who prefer shared interactive media experiences rather than isolated streaming.",
      solution: "Designed 'PrimeSync' – a native, low-latency co-watching experience integrated with localized chat. Created a comprehensive product spec (PRD) detailing user stories, UX wireframes, and target launch milestones.",
      impact: "Defined core success metrics (e.g., Weekly Co-Watching Hours, Cohort Retention Rate, Feature Adoption Rate) to improve monthly active users (MAU) and session times.",
      demoUrl: "#",
      githubUrl: "https://github.com/pranathishree",
      icon: <Video size={24} className="text-gold-highlight" />,
      theme: "gold",
    },
    {
      id: "stayreal",
      title: "StayReal – Trust Every Stay",
      category: "Product Strategy",
      description: "Designed a traveler safety verification strategy and matching mechanism to solve vacation rental discrepancies.",
      gridClass: "lg:col-span-4",
      highlights: ["Reality Match Score™", "Listing Verification", "Traveler Safety", "Trust Optimization"],
      problem: "Vacation rental bait-and-switch listings and photoshopped images cause extreme traveler distress and degrade platform booking confidence.",
      solution: "Conceptualized 'Reality Match Score™' - a verification mechanism utilizing spatial AI and metadata checks. Designed structured traveler safety certificates and listing compliance guidelines.",
      impact: "Reduced customer service disputes regarding listing differences, directly increasing return-booking metrics in simulations and testing prototypes.",
      demoUrl: "#",
      githubUrl: "https://github.com/pranathishree",
      icon: <Home size={24} className="text-gold-highlight" />,
      theme: "gold",
    },
    {
      id: "scorptech",
      title: "Scorptech Growth Strategy",
      category: "Business Growth Strategy",
      description: "Constructed a 90-day growth and B2B client acquisition roadmap incorporating viral loop mechanisms.",
      gridClass: "lg:col-span-8",
      highlights: ["B2B Outreach", "Growth Hacking", "Referral Loops", "90-Day Roadmap"],
      problem: "Inefficient early-stage B2B marketing channels and high client acquisition costs preventing Scorptech from scaling its services.",
      solution: "Constructed a structured 90-day go-to-market plan featuring multi-channel email sequencing, a two-sided B2B referral system, and organic industry influencer partner networks.",
      impact: "Outlined a predictable outreach model detailing concrete weekly targets, acquisition cost estimates, and conversion funnel optimizations.",
      demoUrl: "#",
      githubUrl: "https://github.com/pranathishree",
      icon: <TrendingUp size={24} className="text-mauve-accent" />,
      theme: "mauve",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D4BFF9]/3 blur-[140px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            PORTFOLIO Bento
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            Strategic Initiatives & Engineering
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {projects.map((project, index) => {
            const borderTheme = project.theme === "gold" ? "gradient-border-gold" : "gradient-border-mauve";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`${project.gridClass} ${borderTheme} rounded-3xl p-8 cursor-pointer flex flex-col justify-between group h-full min-h-[300px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-[#0A0A0C] border border-charcoal-border flex items-center justify-center">
                      {project.icon}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-mauve-accent bg-mauve-muted px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-gold-highlight group-hover:text-mauve-accent transition-colors duration-300 font-normal mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#b2adc4] leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-charcoal-border/50">
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.slice(0, 3).map((hl, hlIdx) => (
                      <span key={hlIdx} className="text-xs text-[#8c889e] font-mono">
                        #{hl}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-gold-highlight flex items-center gap-1 group-hover:text-mauve-accent transition-colors">
                    View Case Study <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0C]/90 backdrop-blur-md"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-4xl glass-card rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Header Panel */}
              <div className="p-8 border-b border-charcoal-border bg-charcoal-surface/40 flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono text-mauve-accent uppercase tracking-widest block mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-gold-highlight font-normal">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-[#8c889e] hover:text-mauve-accent bg-[#0A0A0C] border border-charcoal-border rounded-full cursor-pointer hover:border-mauve-accent transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="p-8 max-h-[60vh] overflow-y-auto flex flex-col gap-8">
                {/* Highlights tags */}
                <div className="flex flex-wrap gap-2.5">
                  {selectedProject.highlights.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-charcoal-surface border border-charcoal-border text-gold-highlight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Case Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Left Column: Problem */}
                  <div className="md:col-span-1 flex flex-col gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#8c889e] uppercase font-bold">
                      THE PROBLEM
                    </span>
                    <p className="text-sm text-[#b2adc4] leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Middle Column: Solution */}
                  <div className="md:col-span-1 flex flex-col gap-2 border-t md:border-t-0 md:border-x border-charcoal-border pt-6 md:pt-0 md:px-6">
                    <span className="text-[10px] font-mono tracking-widest text-mauve-accent uppercase font-bold">
                      THE SOLUTION
                    </span>
                    <p className="text-sm text-[#b2adc4] leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                  {/* Right Column: Impact */}
                  <div className="md:col-span-1 flex flex-col gap-2 border-t md:border-t-0 pt-6 md:pt-0">
                    <span className="text-[10px] font-mono tracking-widest text-gold-highlight uppercase font-bold">
                      THE IMPACT
                    </span>
                    <p className="text-sm text-[#b2adc4] leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Panel */}
              <div className="p-6 bg-charcoal-surface/20 border-t border-charcoal-border flex justify-end gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono bg-charcoal-surface border border-charcoal-border text-[#b2adc4] hover:text-mauve-accent hover:border-mauve-accent transition-colors"
                >
                  <GithubIcon size={14} /> GITHUB REPO
                </a>
                <a
                  href={selectedProject.demoUrl}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono bg-gold-highlight hover:bg-gold-hover text-[#0a0a0c] font-bold transition-colors"
                >
                  <ArrowUpRight size={14} /> EXPLORE DEMO
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
