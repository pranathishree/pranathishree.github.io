"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, Sparkles } from "lucide-react";

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

const LinkedinIcon = ({ size = 20, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const socialLinks = [
    {
      name: "Email",
      value: "pranathishree16@gmail.com",
      href: "mailto:pranathishree16@gmail.com",
      icon: <Mail size={18} className="text-mauve-accent" />,
      label: "Direct Email Link",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/pranathi-shree",
      href: "https://linkedin.com/in/pranathi-shree",
      icon: <LinkedinIcon size={18} className="text-gold-highlight" />,
      label: "Professional Profile",
    },
    {
      name: "GitHub",
      value: "github.com/pranathishree",
      href: "https://github.com/pranathishree",
      icon: <GithubIcon size={18} className="text-mauve-accent" />,
      label: "Code Repositories",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden dot-pattern">
      {/* Background glow ambient layers */}
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[400px] bg-mauve-muted/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[300px] bg-gold-muted/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#8c889e] uppercase mb-3 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-mauve-accent"></span>
            CONNECTION HUB
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gold-highlight font-normal">
            Start A Conversation
          </h2>
        </div>

        {/* Form & Social channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left panel: Info & links */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <p className="text-lg text-[#b2adc4] font-normal leading-relaxed mb-8 max-w-md">
                Whether you want to discuss QNX, embedded vehicle stacks, a product roadmap challenge, or public speaking anchoring, I'd love to connect.
              </p>

              <div className="flex flex-col gap-6">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noreferrer" : undefined}
                    className="glass-card p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-charcoal-surface border border-charcoal-border flex-shrink-0 group-hover:border-mauve-accent/20 transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#8c889e] uppercase block mb-0.5">
                        {link.name} ({link.label})
                      </span>
                      <span className="text-sm font-semibold text-gold-highlight group-hover:text-mauve-accent transition-colors duration-300">
                        {link.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-12 text-xs font-mono text-[#8c889e] flex items-center gap-2">
              <Sparkles size={14} className="text-mauve-accent" />
              <span>Designed & Built to Premium Founder Standards.</span>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-[#8c889e] uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Pranathi Shree"
                        className="w-full bg-charcoal-surface/80 border border-charcoal-border hover:border-[#8c889e]/30 focus:border-mauve-accent text-sm text-[#e0ddf0] placeholder:text-[#8c889e]/30 rounded-xl px-4 py-3.5 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-[#8c889e] uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-charcoal-surface/80 border border-charcoal-border hover:border-[#8c889e]/30 focus:border-mauve-accent text-sm text-[#e0ddf0] placeholder:text-[#8c889e]/30 rounded-xl px-4 py-3.5 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-mono text-[#8c889e] uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell me about your product strategic challenge, software architecture task, or hosting engagement..."
                        className="w-full bg-charcoal-surface/80 border border-charcoal-border hover:border-[#8c889e]/30 focus:border-mauve-accent text-sm text-[#e0ddf0] placeholder:text-[#8c889e]/30 rounded-xl px-4 py-3.5 focus:outline-none transition-all duration-300 resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2.5 w-full py-4 mt-2 bg-gradient-to-r from-mauve-accent to-mauve-hover text-[#0a0a0c] font-semibold text-sm rounded-xl cursor-pointer hover:shadow-[0_0_20px_rgba(212,191,249,0.3)] disabled:opacity-50 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 border-2 border-[#0a0a0c] border-t-transparent rounded-full animate-spin" />
                          TRANSMITTING MESSAGE...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          SEND MESSAGE
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-4"
                  >
                    <div className="h-16 w-16 rounded-full bg-mauve-muted text-mauve-accent flex items-center justify-center mb-2 animate-bounce">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="font-serif text-2xl text-gold-highlight">
                      Message Transmitted!
                    </h3>
                    <p className="text-xs text-[#b2adc4] max-w-sm leading-relaxed">
                      Thank you for reaching out, Pranathi Shree will get back to you shortly at the email address provided.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
