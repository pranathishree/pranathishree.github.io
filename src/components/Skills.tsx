"use client";
import React from "react";
import portfolioData from "@/data/portfolio.json";

export default function Skills() {
  const { coreSkills, skillset } = portfolioData;

  return (
    <>
      {/* ── SKILLS (6 windows) ── */}
      <section className="section-wrap skills-section" id="skills">
        <span className="skills-label-above">{coreSkills.labelAbove}</span>
        <div className="skills-heading-wrap">
          <div className="skills-heading-icon-wrap"><i className="ti ti-bolt"></i></div>
          <span className="skills-heading-my">{coreSkills.headingMy}</span>
          <span className="skills-heading-skills">{coreSkills.headingSkills}</span>
        </div>
        <div className="skills-grid">
          {coreSkills.items.map((item, i) => (
            <div className="skill-window" key={i}>
              <div className="window-bar">
                <div className="window-bar-btns">
                  <div className="window-bar-btn close"></div>
                  <div className="window-bar-btn min"></div>
                  <div className="window-bar-btn max"></div>
                </div>
                <span className="window-title">{item.filename}</span>
              </div>
              <div className="window-body">
                <p className="sk-cat">{item.category}</p>
                <p className="sk-name">{item.name}</p>
                <div className="sk-tags">
                  {item.tags.map((tag, j) => (
                    <span className="sk-tag" key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOFT / TECH / TOOLS (3 windows) ── */}
      <section className="section-wrap skillset-section" id="skillset">
        <div className="desk-section-head">
          <div className="desk-section-icon"><i className="ti ti-layout-grid"></i></div>
          <div>
            <p className="desk-section-label">{skillset.sectionTitle}</p>
            <h2 className="desk-section-title">Soft Skills, Tech &amp; <em>Tools</em></h2>
          </div>
        </div>
        <div className="skillset-grid">
          {skillset.categories.map((cat, i) => (
            <div className="skillset-window" key={i}>
              <div className="window-bar">
                <div className="window-bar-btns">
                  <div className="window-bar-btn close"></div>
                  <div className="window-bar-btn min"></div>
                  <div className="window-bar-btn max"></div>
                </div>
                <span className="window-title">{cat.filename}</span>
              </div>
              <div className="skillset-window-body">
                <p className="skillset-cat-label">{cat.categoryLabel}</p>
                <p className="skillset-title">{cat.title}</p>
                
                {cat.type === "list" && (
                  <ul className="soft-skills-list">
                    {cat.items.map((skill: any, j: number) => (
                      <li className="soft-skill-item" key={j}>
                        <i className={`ti ti-${skill.icon}`}></i>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                )}

                {cat.type === "bars" && (
                  <div className="tech-skills-list">
                    {cat.items.map((skill: any, j: number) => (
                      <div className="tech-skill-item" key={j}>
                        <span className="tech-skill-name">
                          {skill.name}
                          <span className="tech-skill-lv">{skill.level}</span>
                        </span>
                        <div className="tech-skill-bar-bg">
                          <div className="tech-skill-bar-fill" style={{ width: `${skill.percentage}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {cat.type === "grid" && (
                  <div className="tools-grid">
                    {cat.items.map((tool: any, j: number) => (
                      <div className="tool-item" key={j}>
                        <ToolIcon tool={tool} />
                        <span className="tool-name">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const ToolIcon = ({ tool }: { tool: any }) => {
  const [imgError, setImgError] = React.useState(false);
  return (
    <div className="tool-icon-wrap" style={{ background: tool.bg }}>
      {tool.image && !imgError ? (
        <img src={tool.image} alt={tool.name} onError={() => setImgError(true)} />
      ) : (
        <i className={`ti ti-${tool.icon}`} style={{ color: tool.iconColor, fontSize: "18px" }}></i>
      )}
    </div>
  );
};
