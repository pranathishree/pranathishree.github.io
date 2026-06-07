"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import ImageDropzone from "./ImageDropzone";

export default function About() {
  const { about } = portfolioData;

  return (
    <section className="section-wrap about-section" id="about">
      <div className="desk-section-head">
        <div className="desk-section-icon"><i className="ti ti-user"></i></div>
        <div>
          <p className="desk-section-label">{about.sectionTitle}</p>
          <h2 className="desk-section-title">About <em>Me</em></h2>
        </div>
      </div>
      <div className="about-grid" style={{alignItems: "stretch"}}>
        <div className="window">
          <div className="window-bar">
            <div className="window-bar-btns"><div className="window-bar-btn close"></div><div className="window-bar-btn min"></div><div className="window-bar-btn max"></div></div>
            <span className="window-title">about_pranathi.txt</span>
          </div>
          <div className="about-window-body">
            {about.descriptionParagraphs.map((p, i) => (
              <p className="about-para" key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="photo-window">
          <div className="window-bar">
            <div className="window-bar-btns"><div className="window-bar-btn close"></div><div className="window-bar-btn min"></div><div className="window-bar-btn max"></div></div>
            <span className="window-title">pranathi_photo.jpeg</span>
          </div>
          <div className="photo-slot" style={{ padding: 0, overflow: "hidden" }}>
            <img src="/about.jpeg" alt="Pranathi" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
