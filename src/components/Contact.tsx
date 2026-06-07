"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import portfolioData from "@/data/portfolio.json";
import Reveal from "@/components/Reveal";
import { Mail } from "lucide-react";

const EJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "";
const EJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "";

const ICON_MAP: Record<string, string> = {
  Email: "✉️", LinkedIn: "💼", GitHub: "🐙",
};

export default function Contact() {
  const [form, setForm]         = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmit] = useState(false);
  const [success, setSuccess]   = useState(false);
  const [errMsg, setErrMsg]     = useState<string | null>(null);

  const { contact } = portfolioData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmit(true);
    setErrMsg(null);
    try {
      await emailjs.send(
        EJS_SERVICE_ID, EJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, reply_to: form.email },
        { publicKey: EJS_PUBLIC_KEY }
      );
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrMsg("Message failed to send — please email directly.");
    } finally {
      setSubmit(false);
    }
  };

  return (
    <section id="contact" style={{ padding: "60px 5vw", background: "var(--ink)" }}>
      <Reveal>
        <div className="desk-section-head" style={{ marginBottom: 48 }}>
        <div className="desk-section-icon" style={{ background: "rgba(255,255,255,0.08)" }}>
          <Mail size={20} color="var(--win)" strokeWidth={1.5} />
        </div>
        <div>
          <p className="desk-section-label" style={{ color: "var(--win)" }}>Get In Touch</p>
          <h2 className="desk-section-title" style={{ color: "var(--win)" }}>
            Start a <em style={{ color: "#6daee0" }}>Conversation</em>
          </h2>
        </div>
      </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="ct-cols">
        {/* Left: links */}
        <div className="window-dark">
          <div className="window-bar" style={{ background: "rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="window-bar-btns">
              <div className="window-bar-btn close" /><div className="window-bar-btn min" /><div className="window-bar-btn max" />
            </div>
            <span className="window-title" style={{ color: "var(--win)" }}>contact_links.txt</span>
          </div>
          <div style={{ padding: "28px 32px" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem,3.5vw,3.2rem)", color: "var(--win)", lineHeight: 0.9, letterSpacing: "-0.03em", marginBottom: 10 }}>
              Let&rsquo;s <em style={{ fontStyle: "italic", color: "#6daee0" }}>talk</em>.
            </h3>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--win)", lineHeight: 1.6, marginBottom: 28 }}>
              {contact.description}
            </p>
            <div>
              {contact.socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="ct-link">
                  <div>
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--win)", display: "block", marginBottom: 2 }}>
                      {link.name}
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 500, color: "var(--win)" }}>{link.value}</span>
                  </div>
                  <span style={{ color: "rgba(109,174,224,0.6)", fontSize: 14 }}>
                    {ICON_MAP[link.name] ?? "→"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="window-dark">
          <div className="window-bar" style={{ background: "rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="window-bar-btns">
              <div className="window-bar-btn close" /><div className="window-bar-btn min" /><div className="window-bar-btn max" />
            </div>
            <span className="window-title" style={{ color: "var(--win)" }}>new_message.txt</span>
          </div>
          <div style={{ padding: "28px 32px" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.35rem", color: "var(--win)", marginBottom: 20 }}>
              Write a message
            </p>

            {success ? (
              <div style={{ padding: "18px 20px", background: "rgba(52,199,89,0.1)", border: "1px solid rgba(52,199,89,0.25)", borderRadius: 8, color: "var(--green)", fontSize: 13 }}>
                ✓ Message sent! I&rsquo;ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errMsg && (
                  <div style={{ padding: "10px 14px", background: "rgba(255,80,80,0.1)", border: "1px solid rgba(255,80,80,0.25)", borderRadius: 6, color: "#ff8080", fontSize: 12, marginBottom: 14 }}>
                    {errMsg}
                  </div>
                )}
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="c-input"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="c-input"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message…"
                  required
                  rows={4}
                  className="c-input"
                  style={{ resize: "none", minHeight: 80 }}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    background: "var(--win)", color: "var(--ink)",
                    border: "none", padding: "10px 24px",
                    fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700,
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    cursor: submitting ? "not-allowed" : "pointer",
                    borderRadius: 6, opacity: submitting ? 0.6 : 1,
                    transition: "opacity .15s, transform .1s",
                    marginTop: 4,
                  }}
                >
                  {submitting ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){.ct-cols{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
