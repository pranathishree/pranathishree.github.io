"use client";
import React, { useEffect, useState } from "react";
import { 
  Home, 
  User, 
  GraduationCap, 
  Briefcase, 
  Zap, 
  Folder, 
  Trophy, 
  Image as ImageIcon, 
  Mail 
} from "lucide-react";

const DOCK_ITEMS = [
  { icon: Home,          label: "Home",       href: "#top" },
  { icon: User,          label: "About",      href: "#about" },
  { icon: GraduationCap, label: "Education",  href: "#education" },
  { icon: Briefcase,     label: "Experience", href: "#experience" },
  { icon: Zap,           label: "Skills",     href: "#skills" },
  { icon: Folder,        label: "Projects",   href: "#projects" },
  { icon: Trophy,        label: "Milestones", href: "#achievements" },
  { icon: ImageIcon,     label: "Gallery",    href: "#gallery" },
  { icon: Mail,          label: "Contact",    href: "#contact" },
];

export default function Dock() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    DOCK_ITEMS.forEach((item) => {
      const section = document.getElementById(item.href.substring(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dock" aria-label="Navigation dock">
      {DOCK_ITEMS.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeSection === item.href.substring(1);
        return (
          <React.Fragment key={item.href}>
            {idx === 1 && <div className="dock-sep" />}
            <a
              href={item.href}
              className="dock-item"
              data-label={item.label}
              aria-label={item.label}
              style={isActive ? { transform: "scale(1.15) translateY(-4px)" } : {}}
            >
              <Icon size={22} strokeWidth={1.5} color={isActive ? "var(--accent)" : "var(--ink)"} />
              {/* Active indicator dot */}
              <div 
                className="dock-dot" 
                style={{ 
                  background: isActive ? "var(--accent)" : "rgba(0,0,0,0.35)",
                  opacity: isActive ? 1 : 0,
                  transform: `translateX(-50%) scale(${isActive ? 1.2 : 0.8})`,
                  transition: "all 0.2s"
                }} 
              />
            </a>
          </React.Fragment>
        );
      })}
    </div>
  );
}
