"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Maximize2, ExternalLink, Calendar, X, Volume2, Sparkles } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import LucideIcon from "@/components/LucideIcon";

interface MediaItem {
  id: string;
  category: "speaking" | "presentations" | "leadership" | "internship";
  title: string;
  subtitle: string;
  description: string;
  date: string;
  skills: string[];
  thumbnailBg: string;
  mediaType: "video" | "image" | "presentation";
  relatedLink?: string;
  embedLabel?: string;
  icon: string;
}

export default function InAction() {
  const [activeTab, setActiveTab] = useState<"all" | "speaking" | "presentations" | "leadership" | "internship">("all");
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { inAction } = portfolioData;

  const tabs = [
    { id: "all", label: "All Moments" },
    { id: "speaking", label: "Public Speaking" },
    { id: "presentations", label: "Presentations" },
    { id: "leadership", label: "Leadership" },
    { id: "internship", label: "QNX Learning" }
  ] as const;

  const filteredItems = activeTab === "all" 
    ? (inAction.mediaItems as MediaItem[]) 
    : (inAction.mediaItems as MediaItem[]).filter((item) => item.category === activeTab);

  const handleOpenLightbox = (item: MediaItem) => {
    setLightboxItem(item);
    setIsPlaying(false);
  };

  const handleCloseLightbox = () => {
    setLightboxItem(null);
    setIsPlaying(false);
  };

  return (
    <section id="in-action" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gold-muted/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
              <span className="h-[1px] w-8 bg-mauve-accent"></span>
              {inAction.sectionTitle}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
              {inAction.heading}
            </h2>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-6 border-b border-charcoal-border/30 pb-2 overflow-x-auto max-w-full">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative pb-3 text-xs font-mono tracking-widest uppercase transition-colors duration-300 cursor-pointer whitespace-nowrap focus:outline-none"
                >
                  <span className={isActive ? "text-rose-accent font-semibold" : "text-[#8c889e] hover:text-[#e0ddf0]"}>
                    {tab.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeInActionTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-accent to-mauve-accent shadow-[0_2px_8px_rgba(255,197,217,0.4)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Media Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const iconColorClass = item.category === "speaking" || item.category === "leadership" ? "text-mauve-accent" : "text-gold-highlight";
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleOpenLightbox(item)}
                  className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-charcoal-border hover:border-mauve-accent/20 flex flex-col justify-between h-full min-h-[360px]"
                >
                  {/* Media Thumbnail representation */}
                  <div className={`h-48 w-full bg-gradient-to-br ${item.thumbnailBg} border-b border-charcoal-border relative flex items-center justify-center p-6 text-center overflow-hidden`}>
                    {/* Backdrop subtle overlay animation */}
                    <div className="absolute inset-0 bg-[#0A0A0C]/20 group-hover:bg-[#0A0A0C]/0 transition-colors duration-300" />
                    
                    {/* Tech graphic/concept representation */}
                    <div className="flex flex-col items-center gap-2 relative z-10">
                      <LucideIcon name={item.icon} size={28} className={`${iconColorClass} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="font-sans italic text-base text-[#e0ddf0] tracking-wide mt-2">
                        {item.subtitle}
                      </span>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 rounded-full bg-charcoal-surface/80 border border-charcoal-border text-gold-highlight">
                        {item.mediaType === "video" ? <Play size={14} fill="currentColor" /> : <Maximize2 size={14} />}
                      </div>
                    </div>
                  </div>

                  {/* Narrative Details */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[9px] font-mono tracking-widest text-[#8c889e] uppercase">
                          {item.category.toUpperCase()}
                        </span>
                        <span className="text-[9px] font-mono text-[#8c889e] flex items-center gap-1">
                          <Calendar size={10} /> {item.date}
                        </span>
                      </div>

                      <h3 className="text-base font-semibold text-gold-highlight mb-2 group-hover:text-mauve-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#b2adc4] leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Skills badges */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-charcoal-border/30">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] font-mono px-2 py-1 rounded bg-charcoal-surface border border-charcoal-border text-[#8c889e]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Video Player Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-[#0A0A0C]/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-4xl glass-card rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseLightbox}
                className="absolute top-4 right-4 z-20 p-2 text-[#8c889e] hover:text-mauve-accent bg-[#0A0A0C] border border-charcoal-border rounded-full cursor-pointer hover:border-mauve-accent transition-colors"
              >
                <X size={18} />
              </button>

              {/* Layout Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Media Playback Viewport */}
                <div className="lg:col-span-7 bg-black min-h-[300px] md:min-h-[400px] flex flex-col justify-center items-center relative p-8">
                  {isPlaying ? (
                    // Mock active video streaming simulator
                    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-4 text-[#8c889e]">
                      <div className="h-16 w-16 rounded-full border border-mauve-accent/40 flex items-center justify-center animate-pulse text-mauve-accent">
                        <Volume2 size={24} className="animate-[bounce_1s_infinite]" />
                      </div>
                      <span className="font-mono text-xs tracking-wider text-mauve-accent">
                        [Streaming Presentation Media Output...]
                      </span>
                      <p className="text-[10px] max-w-xs text-[#6e6b7c]">
                        Mock video presentation container. In production, this binds directly to YouTube/Vimeo APIs or mp4 records.
                      </p>
                      <button
                        onClick={() => setIsPlaying(false)}
                        className="px-4 py-2 border border-charcoal-border hover:border-mauve-accent rounded-full text-xs font-mono text-[#b2adc4] cursor-pointer mt-4"
                      >
                        STOP PRESENTATION
                      </button>
                    </div>
                  ) : (
                    // Mock Thumbnail overlay with play button
                    <div className={`absolute inset-0 bg-gradient-to-br ${lightboxItem.thumbnailBg} flex flex-col items-center justify-center p-6 text-center`}>
                      <div className="absolute inset-0 bg-[#0A0A0C]/40" />
                      
                      <div className="relative z-10 flex flex-col items-center gap-4">
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="h-16 w-16 rounded-full bg-gold-highlight hover:bg-gold-hover text-[#0a0a0c] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-gold-highlight/20"
                        >
                          <Play size={26} className="ml-1" fill="currentColor" />
                        </button>
                        <span className="font-mono text-xs tracking-widest text-[#e0ddf0]">
                          {lightboxItem.mediaType === "video" ? "PLAY EVENT RECORDING" : "OPEN FULLSCREEN VIEW"}
                        </span>
                        <p className="font-sans italic text-base text-[#e0ddf0] max-w-sm">
                          {lightboxItem.embedLabel}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Metadata Sidebar Panel */}
                <div className="lg:col-span-5 p-8 flex flex-col justify-between bg-charcoal-surface/30">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-mono tracking-widest text-mauve-accent bg-mauve-muted px-2.5 py-1 rounded-full uppercase">
                        {lightboxItem.category}
                      </span>
                      <span className="text-xs text-[#8c889e] font-mono flex items-center gap-1">
                        <Calendar size={12} /> {lightboxItem.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gold-highlight mb-3">
                      {lightboxItem.title}
                    </h3>
                    <p className="text-sm text-[#b2adc4] leading-relaxed mb-6">
                      {lightboxItem.description}
                    </p>

                    <h4 className="text-xs font-mono text-[#8c889e] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles size={12} className="text-mauve-accent" /> Skills Demonstrated
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {lightboxItem.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-charcoal-surface border border-charcoal-border text-gold-highlight"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Call-to-action buttons */}
                  {lightboxItem.relatedLink && (
                    <div className="pt-4 border-t border-charcoal-border/50">
                      <a
                        href={lightboxItem.relatedLink}
                        onClick={handleCloseLightbox}
                        className="inline-flex items-center gap-2 text-xs font-mono text-gold-highlight hover:text-mauve-accent transition-colors"
                      >
                        EXPLORE RELATED PROJECT CASE STUDY <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
