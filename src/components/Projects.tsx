"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="section-wrap projects-section" id="projects">
      <div className="desk-section-head">
        <div className="desk-section-icon"><i className="ti ti-folder-open"></i></div>
        <div>
          <p className="desk-section-label">{projects.sectionTitle}</p>
          <h2 className="desk-section-title">Selected <em>Projects</em></h2>
        </div>
      </div>
      <div className="proj-list">
        {projects.projectsList.map((proj, i) => (
          <div className={`proj-doc proj-doc-${(i % 4) + 1}`} key={i}>
            <div className="window-bar" style={{position: "relative"}}>
              <div className="window-bar-btns"><div className="window-bar-btn close"></div><div className="window-bar-btn min"></div><div className="window-bar-btn max"></div></div>
              <span className="window-title">{proj.id}.pdf</span>
              <div className="proj-clip"></div>
            </div>
            <div className="proj-doc-body">
              <div className="proj-doc-left">
                <div className="proj-field"><p className="proj-field-label">Category</p><p className="proj-field-value-bold">{proj.category}</p></div>
                <div className="proj-field"><p className="proj-field-label">Theme</p><p className="proj-field-value">{proj.theme}</p></div>
                <div className="proj-field"><p className="proj-field-label">Impact</p><p className="proj-field-value"><span style={{color: "#34c759", fontWeight: 600}}>{proj.impact ? "High Impact" : "Completed"}</span></p></div>
              </div>
              <div className="proj-doc-right">
                <p className="proj-field-label" style={{marginBottom: "6px"}}>Description</p>
                <div className="proj-doc-right-top">
                  <h3 className="proj-title-large">{proj.title}</h3>
                  <a href={proj.demoUrl !== "#" ? proj.demoUrl : proj.githubUrl} className="proj-link-btn" target="_blank" rel="noreferrer"><i className="ti ti-world"></i> View</a>
                </div>
                <p className="proj-desc-body">{proj.description}</p>
                <p className="proj-field-label" style={{marginBottom: "8px"}}>Highlights</p>
                <ul className="proj-deliverables">
                  {proj.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
