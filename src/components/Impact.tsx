"use client";
import React, { useState } from "react";
import portfolioData from "@/data/portfolio.json";
import ImageDropzone from "./ImageDropzone";

export default function Impact() {
  const { inAction } = portfolioData;
  const [activeMedia, setActiveMedia] = useState<string | null>(null);

  return (
    <>
      <section className="section-wrap extra-section" id="activities">
      <div className="desk-section-head">
        <div className="desk-section-icon"><i className="ti ti-trophy"></i></div>
        <div>
          <p className="desk-section-label">{inAction.sectionTitle}</p>
          <h2 className="desk-section-title">Extra<em>curricular</em> Activities</h2>
        </div>
      </div>
      <div className="extra-grid">
        {inAction.mediaItems.map((item, i) => (
          <div className="extra-window" key={i}>
            <div className="window-bar">
              <div className="window-bar-btns"><div className="window-bar-btn close"></div><div className="window-bar-btn min"></div><div className="window-bar-btn max"></div></div>
              <span className="window-title">{item.id}.folder</span>
            </div>
            <div className="window-body">
              <p className="ex-cat">{item.category}</p>
              <h3 className="ex-title">{item.title}</h3>
              <p className="ex-body">{item.description}</p>
              <div 
                className="ex-photos" 
                style={item.images && item.images.length === 1 ? { display: "flex", justifyContent: "center" } : undefined}
              >
                {item.images && item.images.length > 0 ? (
                  item.images.map((imgSrc: string, j: number) => (
                    <div 
                      className="ex-slot" 
                      key={j} 
                      style={{ 
                        padding: 0, 
                        overflow: "hidden", 
                        cursor: "pointer",
                        width: item.images && item.images.length === 1 ? "calc(50% - 3px)" : "auto"
                      }}
                      onClick={() => setActiveMedia(imgSrc)}
                    >
                      {imgSrc.endsWith('.mp4') ? (
                        <video 
                          src={imgSrc} 
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                          muted 
                          playsInline 
                        />
                      ) : (
                        <img 
                          src={imgSrc} 
                          alt={item.title} 
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                        />
                      )}
                      <div className="corner-brackets">
                        <div className="bracket tl"></div>
                        <div className="bracket tr"></div>
                        <div className="bracket bl"></div>
                        <div className="bracket br"></div>
                        <i className={`ti ${imgSrc.endsWith('.mp4') ? 'ti-player-play-filled' : 'ti-camera'} center-icon`}></i>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="ex-slot"><ImageDropzone label="+ Photo" /></div>
                    <div className="ex-slot"><ImageDropzone label="+ Photo" /></div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div 
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px"
          }}
          onClick={() => setActiveMedia(null)}
        >
          <div 
            style={{ position: "relative", maxWidth: "100%", maxHeight: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveMedia(null)}
              style={{
                position: "absolute", top: "-40px", right: "-10px",
                background: "none", border: "none", color: "white",
                fontSize: "36px", cursor: "pointer"
              }}
            >
              &times;
            </button>
            {activeMedia.endsWith('.mp4') ? (
              <video 
                src={activeMedia} 
                controls
                style={{ maxWidth: "100%", maxHeight: "85vh", borderRadius: "8px" }} 
              />
            ) : (
              <img 
                src={activeMedia} 
                alt="Fullscreen media" 
                style={{ maxWidth: "100%", maxHeight: "85vh", borderRadius: "8px", objectFit: "contain" }} 
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
