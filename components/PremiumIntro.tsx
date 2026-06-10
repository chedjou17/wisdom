"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function PremiumIntro() {
  const [phase, setPhase] = useState<"idle" | "loading" | "reveal" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("wisdom-intro-v3-played");
    if (hasPlayed) { setPhase("done"); return; }
    setPhase("loading");
    sessionStorage.setItem("wisdom-intro-v3-played", "true");

    // Three.js particle globe
    const canvas = canvasRef.current;
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 4;

    // Particle sphere
    const particleCount = 2400;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const r = 1.8 + (Math.random() - 0.5) * 0.4;
      positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(phi);
      // Orange to teal gradient
      const t = Math.random();
      colors[i * 3] = t > 0.5 ? 0.95 : 0.06;
      colors[i * 3 + 1] = t > 0.5 ? 0.38 : 0.46;
      colors[i * 3 + 2] = t > 0.5 ? 0.0 : 0.43;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({ size: 0.022, vertexColors: true, transparent: true, opacity: 0 });
    const globe = new THREE.Points(geo, mat);
    scene.add(globe);

    // Animate
    let elapsed = 0;
    const clock = new THREE.Clock();
    function animate() {
      animFrameRef.current = requestAnimationFrame(animate);
      elapsed = clock.getElapsedTime();
      globe.rotation.y = elapsed * 0.18;
      globe.rotation.x = Math.sin(elapsed * 0.06) * 0.15;
      mat.opacity = Math.min(elapsed * 1.2, 0.9);
      renderer.render(scene, camera);
    }
    animate();

    // ── AJUSTEMENT : Ralentissement de la barre de progression ──
    let prog = 0;
    const interval = setInterval(() => {
      // Progression plus petite (entre 1 et 3%) pour atteindre 100% en environ 4 secondes
      prog += Math.random() * 2 + 1; 
      if (prog >= 100) { prog = 100; clearInterval(interval); }
      setProgress(Math.min(prog, 100));
    }, 100);

    // ── AJUSTEMENT : Augmentation des délais pour laisser le temps de voir ──
    // La phase "reveal" commence à 4,5s (au lieu de 2,4s)
    const t1 = setTimeout(() => setPhase("reveal"), 6500); 
    // L'animation se termine et disparaît à 6,5s (au lieu de 3,6s)
    const t2 = setTimeout(() => { setPhase("done"); }, 8500);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearInterval(interval);
      cancelAnimationFrame(animFrameRef.current);
      renderer.dispose();
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="wisdom-intro"
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <canvas ref={canvasRef} className="wisdom-intro-canvas" />
          <div className="wisdom-intro-content">
            <motion.div
              className="wisdom-intro-logo"
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src="/logo-real.png" alt="WISDOM Logistics" />
            </motion.div>
            <motion.div
              className="wisdom-intro-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>France</span>
              <span className="wisdom-intro-dot" />
              <span>Cameroun</span>
            </motion.div>
            <motion.div
              className="wisdom-intro-bar-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "reveal" ? 0 : 1 }} // Cache doucement la barre pendant le reveal
              transition={{ duration: 0.4, delay: phase === "reveal" ? 0 : 0.8 }}
            >
              <div className="wisdom-intro-bar">
                <motion.div
                  className="wisdom-intro-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}