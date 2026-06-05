"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SpotlightEffect() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse tracking with spring physics
  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports hover events (avoid listening on touch-only devices)
    const mediaQuery = window.matchMedia("(hover: hover)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by 200px to center the 400px glow circle on the cursor
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dynamic desktop spotlight */}
      <motion.div
        className="hidden md:block absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.12]"
        style={{
          x: spotlightX,
          y: spotlightY,
          background: "radial-gradient(circle, #FFC5D9 0%, #D4BFF9 40%, #F5E6C9 70%, transparent 100%)",
        }}
      />
      
      {/* Fallback ambient glowing elements for mobile devices */}
      <div className="md:hidden absolute top-[-10%] left-[-20%] w-[300px] h-[300px] rounded-full blur-[90px] opacity-[0.08] bg-[#FFC5D9]" />
      <div className="md:hidden absolute bottom-[20%] right-[-20%] w-[350px] h-[350px] rounded-full blur-[110px] opacity-[0.06] bg-[#F5E6C9]" />
    </motion.div>
  );
}
