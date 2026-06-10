"use client";
import { useEffect } from "react";

export function PremiumRuntime() {
  useEffect(() => {
    // Smooth scroll with Lenis
    let lenis: any;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ duration: 1.1, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });
    return () => { if (lenis) lenis.destroy(); };
  }, []);
  return null;
}
