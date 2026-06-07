"use client";

import React, { useEffect, useState } from "react";
import portfolioData from "@/data/portfolio.json";
import { Command } from "lucide-react";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Education",  href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navigation() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="menubar">
      {/* OS Logo */}
      <span className="flex items-center justify-center select-none opacity-90 hover:opacity-100 transition-opacity cursor-default">
        <Command size={15} color="var(--win)" strokeWidth={2.5} />
      </span>

      {/* Nav links */}
      <ul className="hidden md:flex gap-4 list-none items-center">
        <li>
          <a
            href="#top"
            className="text-[13px] font-bold text-white hover:text-white transition-colors tracking-tight mr-2"
          >
            {portfolioData.personal.name}
          </a>
        </li>
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-xs text-white/70 hover:text-white transition-colors tracking-wide"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right — live dot + clock */}
      <div className="ml-auto flex items-center gap-3">
        <span className="live-dot" />
        <span className="text-xs font-medium text-white/80 tabular-nums">
          {time}
        </span>
      </div>
    </div>
  );
}
