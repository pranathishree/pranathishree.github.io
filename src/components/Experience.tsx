"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";

export default function Experience() {
  const { internships } = portfolioData as any;

  if (!internships || internships.length === 0) return null;

  return (
    <>
      {internships.map((internship: any, index: number) => (
        <section key={index} className="section-wrap intern-section" id={index === 0 ? "experience" : undefined} style={index > 0 ? { paddingTop: 0 } : {}}>
          <span className="intern-bg-text">{internship.bgText}</span>
          {index === 0 && (
            <div className="desk-section-head">
              <div className="desk-section-icon"><i className="ti ti-briefcase"></i></div>
              <div>
                <p className="desk-section-label">{internship.sectionLabel}</p>
                <h2 className="desk-section-title">{internship.sectionTitlePrefix} <em>{internship.sectionTitleHighlight}</em></h2>
              </div>
            </div>
          )}
          <div className="intern-grid">
            <div className="intern-window">
              <div className="window-bar">
                <div className="window-bar-btns"><div className="window-bar-btn close"></div><div className="window-bar-btn min"></div><div className="window-bar-btn max"></div></div>
                <span className="window-title">{internship.detailsWindow.title}</span>
              </div>
              <div className="window-body">
                <div className="intern-tag"><span className="hero-role-dot" style={{ background: internship.detailsWindow.tag === "Completed" ? "transparent" : "" }}></span>{internship.detailsWindow.tag}</div>
                <h3 className="intern-title-big">{internship.detailsWindow.role}<br/><em>{internship.detailsWindow.company}</em></h3>
                <p className="intern-co" style={{marginTop: "10px"}}>{internship.detailsWindow.keywords}</p>
              </div>
            </div>
            <div className="intern-window">
              <div className="window-bar">
                <div className="window-bar-btns"><div className="window-bar-btn close"></div><div className="window-bar-btn min"></div><div className="window-bar-btn max"></div></div>
                <span className="window-title">{internship.responsibilitiesWindow.title}</span>
              </div>
              <div className="window-body">
                <ul className="intern-bullets">
                  {internship.responsibilitiesWindow.bullets.map((bullet: string, i: number) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
