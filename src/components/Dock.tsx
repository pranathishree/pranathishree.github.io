"use client";
import React from "react";

export default function Dock() {
  return (
    <div className="mac-dock">
      <a href="#top" className="dock-item">
        <div className="app-icon app-home"><i className="ti ti-home"></i></div>
        <span className="dock-tooltip">Home</span>
      </a>
      <a href="#about" className="dock-item">
        <div className="app-icon app-about"><i className="ti ti-user"></i></div>
        <span className="dock-tooltip">About</span>
      </a>
      <a href="#education" className="dock-item">
        <div className="app-icon app-edu"><i className="ti ti-school"></i></div>
        <span className="dock-tooltip">Education</span>
      </a>
      <a href="#skills" className="dock-item">
        <div className="app-icon app-skills"><i className="ti ti-bolt"></i></div>
        <span className="dock-tooltip">Skills</span>
      </a>
      <a href="#projects" className="dock-item">
        <div className="app-icon app-proj"><i className="ti ti-folder-open"></i></div>
        <span className="dock-tooltip">Projects</span>
      </a>
      <a href="#activities" className="dock-item">
        <div className="app-icon app-act"><i className="ti ti-trophy"></i></div>
        <span className="dock-tooltip">Impact</span>
      </a>
      <a href="#contact" className="dock-item">
        <div className="app-icon app-mail"><i className="ti ti-mail"></i></div>
        <span className="dock-tooltip">Contact</span>
      </a>
    </div>
  );
}
