"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section className="section-wrap ach-section" id="achievements">
      <div className="desk-section-head">
        <div className="desk-section-icon"><i className="ti ti-star"></i></div>
        <div>
          <p className="desk-section-label">{achievements.sectionTitle}</p>
          <h2 className="desk-section-title">Highlights &amp; <em>Achievements</em></h2>
        </div>
      </div>
      <div className="ach-grid">
        {achievements.achievementsList.map((ach, i) => (
          <div className="ach-card" key={i}>
            <i className={`ti ${ach.icon} ach-card-icon`}></i>
            <h3 className="ach-title">{ach.title}</h3>
            <p className="ach-body">{ach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
