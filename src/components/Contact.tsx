"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";

export default function Contact() {
  const { contact } = portfolioData;

  const formRef = React.useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = React.useState(false);
  const [sendStatus, setSendStatus] = React.useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSending(true);
    setSendStatus("idle");

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      setSendStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      setSendStatus("error");
    } finally {
      setIsSending(false);
      // Reset success status after 3 seconds
      setTimeout(() => {
        if (sendStatus !== "error") setSendStatus("idle");
      }, 3000);
    }
  };

  return (
    <>
      <section className="section-wrap contact-section" id="contact">
        <div className="desk-section-head">
          <div className="desk-section-icon"><i className="ti ti-mail"></i></div>
          <div>
            <p className="desk-section-label">Get In Touch</p>
            <h2 className="desk-section-title">Let&apos;s <em>Connect</em></h2>
          </div>
        </div>
        <div className="contact-grid">
          {/* LEFT WINDOW — Contact Info */}
          <div className="contact-window">
            <div className="window-bar">
              <div className="window-bar-btns"><div className="window-bar-btn close"></div><div className="window-bar-btn min"></div><div className="window-bar-btn max"></div></div>
              <span className="window-title">contact_info.vcf</span>
            </div>
            <div className="window-body">
              <h2 className="ct-head">Let&apos;s<br/><em>Connect</em></h2>
              <p className="ct-sub">{contact.description}</p>
              <div className="ct-links">
                {/* Email */}
                <a href="mailto:pranathishree16@gmail.com" className="ct-link">
                  <div className="ct-link-left">
                    <i className="ti ti-mail ct-link-icon"></i>
                    <div>
                      <span className="ct-link-lbl">Email</span>
                      <span className="ct-link-val">pranathishree16@gmail.com</span>
                    </div>
                  </div>
                  <i className="ti ti-arrow-up-right ct-arrow"></i>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/pranathishree" target="_blank" rel="noreferrer" className="ct-link">
                  <div className="ct-link-left">
                    <i className="ti ti-brand-linkedin ct-link-icon"></i>
                    <div>
                      <span className="ct-link-lbl">LinkedIn</span>
                      <span className="ct-link-val">linkedin.com/in/pranathishree</span>
                    </div>
                  </div>
                  <i className="ti ti-arrow-up-right ct-arrow"></i>
                </a>
                {/* GitHub */}
                <a href="https://github.com/pranathishree" target="_blank" rel="noreferrer" className="ct-link">
                  <div className="ct-link-left">
                    <i className="ti ti-brand-github ct-link-icon"></i>
                    <div>
                      <span className="ct-link-lbl">GitHub</span>
                      <span className="ct-link-val">github.com/pranathishree</span>
                    </div>
                  </div>
                  <i className="ti ti-arrow-up-right ct-arrow"></i>
                </a>
                {/* Location */}
                <a href="#" className="ct-link">
                  <div className="ct-link-left">
                    <i className="ti ti-map-pin ct-link-icon"></i>
                    <div>
                      <span className="ct-link-lbl">Based In</span>
                      <span className="ct-link-val">Bangalore, India</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT WINDOW — Apple Mail Compose Style */}
          <div className="contact-window mail-app-window">
            <div className="window-bar mail-bar" style={{ display: "flex", justifyContent: "space-between", paddingRight: "16px" }}>
              <div className="window-bar-btns"><div className="window-bar-btn close"></div><div className="window-bar-btn min"></div><div className="window-bar-btn max"></div></div>
              <button 
                form="mail-form" 
                type="submit" 
                disabled={isSending}
                className="mail-send-btn"
                style={{ background: "none", border: "none", color: "rgba(245,242,236,0.8)", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", transition: "color 0.2s" }}
              >
                {isSending ? <i className="ti ti-loader icon-spin"></i> : <i className="ti ti-send"></i>}
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
            
            <form ref={formRef} id="mail-form" onSubmit={sendEmail} className="mail-body" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div className="mail-header-fields" style={{ padding: "0 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="mail-field" style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "12px 0" }}>
                  <span style={{ color: "rgba(245,242,236,0.4)", width: "60px", fontSize: "13px" }}>To:</span>
                  <span style={{ color: "rgba(245,242,236,0.9)", fontSize: "13px" }}>Pranathi Shree</span>
                </div>
                <div className="mail-field" style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "12px 0", alignItems: "center" }}>
                  <span style={{ color: "rgba(245,242,236,0.4)", width: "60px", fontSize: "13px" }}>From:</span>
                  <input type="email" name="user_email" required placeholder="your.email@example.com" style={{ background: "none", border: "none", outline: "none", color: "rgba(245,242,236,0.9)", fontSize: "13px", flex: 1 }} />
                </div>
                <div className="mail-field" style={{ display: "flex", padding: "12px 0", alignItems: "center" }}>
                  <span style={{ color: "rgba(245,242,236,0.4)", width: "60px", fontSize: "13px" }}>Subject:</span>
                  <input type="text" name="user_name" required placeholder="Your Name" style={{ background: "none", border: "none", outline: "none", color: "rgba(245,242,236,0.9)", fontSize: "13px", flex: 1, fontWeight: "600" }} />
                </div>
              </div>
              
              <div className="mail-content" style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <textarea name="message" required placeholder="Write your message here..." style={{ background: "none", border: "none", outline: "none", color: "rgba(245,242,236,0.9)", fontSize: "14px", lineHeight: "1.6", resize: "none", flex: 1, minHeight: "150px" }}></textarea>
                
                {sendStatus === "success" && (
                  <div style={{ padding: "10px 14px", background: "rgba(46, 204, 113, 0.1)", border: "1px solid rgba(46, 204, 113, 0.3)", borderRadius: "6px", color: "#2ecc71", fontSize: "12px", display: "flex", alignItems: "center", gap: "8px", marginTop: "16px" }}>
                    <i className="ti ti-check"></i> Message sent successfully!
                  </div>
                )}
                {sendStatus === "error" && (
                  <div style={{ padding: "10px 14px", background: "rgba(231, 76, 60, 0.1)", border: "1px solid rgba(231, 76, 60, 0.3)", borderRadius: "6px", color: "#e74c3c", fontSize: "12px", display: "flex", alignItems: "center", gap: "8px", marginTop: "16px" }}>
                    <i className="ti ti-alert-circle"></i> Failed to send message. Please try again.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER — outside section, inside desktop wrapper */}
      <footer>
        <span className="foot-logo">Pranathi Shree</span>
        <span className="foot-copy">© {new Date().getFullYear()} · CSBS · GITAM University Bangalore</span>
        <div className="foot-links">
          <a href="mailto:pranathishree16@gmail.com">Email</a>
          <a href="https://linkedin.com/in/pranathishree" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/pranathishree" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </>
  );
}
