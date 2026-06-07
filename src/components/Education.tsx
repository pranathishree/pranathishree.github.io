"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="section-wrap edu-section" id="education">
      <div className="desk-section-head">
        <div className="desk-section-icon"><i className="ti ti-school"></i></div>
        <div>
          <p className="desk-section-label">{education.sectionTitle}</p>
          <h2 className="desk-section-title">My <em>Education</em></h2>
        </div>
      </div>
      <div className="edu-cards">
        {education.educationList.map((edu, i) => {
          const classMap = ["edu-win-gitam", "edu-win-shesha", "edu-win-kv"];
          return (
            <div className={`edu-window ${classMap[i] || "edu-win-gitam"}`} key={i}>
              <div className="window-bar">
                <div className="window-bar-btns"><div className="window-bar-btn close"></div><div className="window-bar-btn min"></div><div className="window-bar-btn max"></div></div>
                <span className="window-title">edu_{i + 1}.pdf</span>
              </div>
              <div className="edu-window-body">
                <span className="edu-deg-badge">{edu.degree}</span>
                <h3 className="edu-win-inst">{edu.institution}</h3>
                <p className="edu-win-campus">{edu.location}</p>
                <p className="edu-win-dur">{edu.period}</p>
                <div className="edu-win-divider"></div>
                <span className="edu-win-cw-label">Details</span>
                <ul className="edu-win-cw-list">
                  {edu.details.map((detail, j) => <li key={j}>{detail}</li>)}
                </ul>
                <div className="edu-win-divider" style={{marginTop: "auto"}}></div>
                <span className="edu-win-score-lbl">{edu.metricLabel}</span>
                <div>
                  <span className="edu-win-score-val">{edu.metricValue}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
