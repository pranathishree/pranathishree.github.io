"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Cpu, Layers, Lightbulb, Sparkles, TrendingUp } from "lucide-react";

export default function About() {
  const interests = [
    {
      icon: <Compass className="text-mauve-accent" size={20} />,
      title: "Product Management",
      description: "Defining product roadmaps, detailing specifications, and aligning engineering with customer needs.",
    },
    {
      icon: <Cpu className="text-gold-highlight" size={20} />,
      title: "Automotive Technology & Embedded Systems",
      description: "Diving into QNX RTOS, Software Defined Vehicles (SDVs), and automotive safety layers.",
    },
    {
      icon: <Sparkles className="text-mauve-accent" size={20} />,
      title: "AI Applications",
      description: "Applying natural language processing and clustering model techniques to real-world datasets.",
    },
    {
      icon: <TrendingUp className="text-gold-highlight" size={20} />,
      title: "Startup Ecosystems",
      description: "Formulating business growth hacks, outreach roadmaps, and B2B engagement strategies.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow element */}
      <div className="absolute bottom-10 right-0 w-[400px] h-[300px] bg-mauve-muted/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            ABOUT ME
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            Bridging Code, Product, & Business
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#e0ddf0] text-lg md:text-xl font-normal leading-relaxed"
            >
              I am a <span className="text-mauve-accent font-semibold">Computer Science & Business Systems</span> student with a unique academic path that combines technical engineering with business management methodologies. This dual training allows me to look at code through the lens of business value and product longevity.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#b2adc4] text-base leading-relaxed"
            >
              Currently, I am working as a Software Intern exploring QNX-based Software Defined Vehicle systems. Learning real-time operating systems (RTOS) and studying how vehicle systems are transitioning to standardized software stacks has opened my eyes to the future of automotive IoT and embedded architectures.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#b2adc4] text-base leading-relaxed"
            >
              My goal is to step into product leadership, taking product concepts from early user research and technical specification writing through design iterations in Figma, all the way to launch and go-to-market execution.
            </motion.div>

            {/* Editorial Serif Blockquote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 mt-4 rounded-3xl bg-charcoal-surface border-l-2 border-mauve-accent shadow-inner overflow-hidden"
            >
              <div className="absolute top-0 right-0 font-serif text-9xl text-charcoal-border pointer-events-none select-none translate-y-[-20%] translate-x-[20%]">
                “
              </div>
              <p className="font-serif text-xl italic text-gold-highlight leading-relaxed relative z-10">
                “Building technology is exciting, but building technology that aligns with commercial logic and solves core user problems is what truly drives change.”
              </p>
            </motion.div>
          </div>

          {/* Interests Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-xs font-mono tracking-widest text-[#8c889e] uppercase mb-2">
              AREAS OF INTEREST & STUDY
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {interests.map((interest, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex gap-4 transition-all duration-300 hover:translate-x-1"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-charcoal-surface border border-charcoal-border flex-shrink-0">
                    {interest.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gold-highlight mb-1.5">
                      {interest.title}
                    </h4>
                    <p className="text-xs text-[#b2adc4] leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
