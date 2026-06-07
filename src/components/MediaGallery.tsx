"use client";
import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import { Image as ImageIcon } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────── */
interface MediaSlot {
  id: string;
  type: "photo" | "video";
  label: string;
  sublabel: string;
  emoji: string;
  /** Replace with your actual image/video path e.g. "/media/event-host.jpg" */
  src?: string;
  aspect?: "landscape" | "portrait" | "square";
  span?: "wide" | "normal";
}

/* ─────────────────────────────────────────────────────────
   PLACEHOLDER DATA
   → Replace `src` with real paths once you add files to /public/media/
───────────────────────────────────────────────────────── */
const MEDIA: MediaSlot[] = [
  {
    id: "host",
    type: "photo",
    label: "Event Host & Anchor",
    sublabel: "GITAM Annual Summit · 2024",
    emoji: "🎙️",
    src: undefined,
    span: "wide",
    aspect: "landscape",
  },
  {
    id: "sportika",
    type: "photo",
    label: "Namma Sportika",
    sublabel: "Press & Comms Lead · 2024",
    emoji: "📰",
    src: undefined,
    aspect: "portrait",
  },
  {
    id: "qnx",
    type: "photo",
    label: "QNX Internship",
    sublabel: "Software Defined Vehicles · 2025",
    emoji: "💻",
    src: undefined,
    aspect: "portrait",
  },
  {
    id: "hackathon",
    type: "photo",
    label: "Hackathon Pitch",
    sublabel: "National PM Competition · 2024",
    emoji: "💡",
    src: undefined,
    aspect: "landscape",
  },
  {
    id: "panel",
    type: "video",
    label: "Panel Discussion",
    sublabel: "Industry Expert Moderation",
    emoji: "▶️",
    src: undefined,
    aspect: "landscape",
    span: "wide",
  },
  {
    id: "campus",
    type: "photo",
    label: "Campus Life",
    sublabel: "GITAM University · Bengaluru",
    emoji: "🎓",
    src: undefined,
    aspect: "square",
  },
];

/* ─────────────────────────────────────────────────────────
   PLACEHOLDER CARD
───────────────────────────────────────────────────────── */
function MediaCard({ slot }: { slot: MediaSlot }) {
  const [hovered, setHovered] = useState(false);

  const aspectH = slot.aspect === "portrait" ? "280px" : slot.aspect === "square" ? "220px" : "200px";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        height: aspectH,
        background: slot.src
          ? "transparent"
          : "linear-gradient(135deg, #2a2416 0%, #211c12 50%, var(--ink) 100%)",
        border: "1px solid rgba(255,255,255,0.09)",
        cursor: "pointer",
        transition: "transform 0.22s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s",
        transform: hovered ? "scale(1.015)" : "scale(1)",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.45)"
          : "0 4px 16px rgba(0,0,0,0.25)",
        gridColumn: slot.span === "wide" ? "span 2" : "span 1",
      }}
    >
      {slot.src ? (
        /* Real image / video */
        slot.type === "video" ? (
          <video
            src={slot.src}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            muted loop playsInline
            autoPlay={hovered}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={slot.src}
            alt={slot.label}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )
      ) : (
        /* Placeholder UI */
        <>
          {/* Grain overlay */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
            opacity: 0.6,
          }} />

          {/* Subtle grid pattern */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />

          {/* Upload hint icon */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: 10,
          }}>
            <div style={{
              width: 52, height: 52,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
              border: "1.5px dashed rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.5rem",
              transition: "background 0.2s",
              ...(hovered && { background: "rgba(255,255,255,0.1)" }),
            }}>
              {hovered ? "+" : slot.emoji}
            </div>
            {hovered && (
              <p style={{ fontSize: 9.5, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Add {slot.type === "video" ? "Video" : "Photo"}
              </p>
            )}
          </div>
        </>
      )}

      {/* Caption overlay — always shown */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "24px 18px 16px",
        background: "linear-gradient(to top, rgba(10,8,5,0.85) 0%, transparent 100%)",
        opacity: hovered ? 1 : slot.src ? 0.7 : 0.95,
        transition: "opacity 0.2s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
          {slot.type === "video" && (
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,80,80,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "4px 0 4px 6px", borderColor: "transparent transparent transparent white", marginLeft: 1 }} />
            </div>
          )}
          <p style={{ fontSize: 12.5, fontWeight: 600, color: "#fff", lineHeight: 1 }}>{slot.label}</p>
        </div>
        <p style={{ fontSize: 10, color: "rgba(255,255,255,0.48)", letterSpacing: "0.08em", fontWeight: 400 }}>{slot.sublabel}</p>
      </div>

      {/* Type badge */}
      <div style={{
        position: "absolute", top: 12, right: 12,
        fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase",
        color: slot.type === "video" ? "#ff6060" : "var(--win)",
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(6px)",
        padding: "3px 8px", borderRadius: 5,
        border: `1px solid ${slot.type === "video" ? "rgba(255,80,80,0.3)" : "rgba(255,255,255,0.1)"}`,
      }}>
        {slot.type === "video" ? "● Video" : "◻ Photo"}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────── */
export default function MediaGallery() {
  return (
    <section
      id="gallery"
      style={{ padding: "70px 5vw", background: "#161208", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <Reveal>
        <div className="desk-section-head">
          <div className="desk-section-icon" style={{ background: "rgba(255,255,255,0.07)" }}>📸</div>
          <div>
            <p className="desk-section-label" style={{ color: "var(--win)" }}>In Action</p>
            <h2 className="desk-section-title" style={{ color: "var(--win)" }}>
              Photos &amp; <em style={{ color: "#6daee0" }}>Videos</em>
            </h2>
          </div>
        </div>

        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--win)", lineHeight: 1.7, maxWidth: 500, marginBottom: 36, marginTop: -8 }}>
          From anchoring university summits to managing press operations and competing in hackathons — captured in the field.
        </p>
      </Reveal>

      {/* Masonry-style grid */}
      <Reveal delay={100}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 14,
        }} className="gallery-grid">
          {MEDIA.map((slot) => (
            <MediaCard key={slot.id} slot={slot} />
          ))}
        </div>
      </Reveal>

      {/* Help note */}
      <Reveal delay={200}>
        <div style={{
          marginTop: 28,
          padding: "14px 20px",
          background: "rgba(255,255,255,0.03)",
          border: "1px dashed rgba(255,255,255,0.1)",
          borderRadius: 10,
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ fontSize: "1.2rem" }}>💡</span>
          <div>
            <p style={{ fontSize: 11.5, fontWeight: 600, color: "var(--win)", marginBottom: 2 }}>Add your photos &amp; videos</p>
            <p style={{ fontSize: 10.5, color: "var(--win)", fontWeight: 300, lineHeight: 1.6 }}>
              Drop your files into <code style={{ background: "rgba(255,255,255,0.08)", padding: "1px 6px", borderRadius: 3, fontSize: 10 }}>/public/media/</code> and update the <code style={{ background: "rgba(255,255,255,0.08)", padding: "1px 6px", borderRadius: 3, fontSize: 10 }}>src</code> paths in <code style={{ background: "rgba(255,255,255,0.08)", padding: "1px 6px", borderRadius: 3, fontSize: 10 }}>MediaGallery.tsx</code>
            </p>
          </div>
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-grid > * { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
