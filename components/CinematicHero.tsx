"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

const WORDS = ["Transporter.", "Sécuriser.", "Livrer."];
const STATS = [
  { num: "1", label: "axe spécialisé", sub: "France - Cameroun" },
  { num: "9", label: "services", sub: "Maritime, aérien, déménagement" },
  { num: "3", label: "profils clients", sub: "Particuliers - Diaspora - Entreprises" }
];

export function CinematicHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const setSize = () => {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    setSize();
    window.addEventListener("resize", setSize);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.01, 100);
    camera.position.set(0, 0, 5);

    const lineCount = 180;
    const group = new THREE.Group();
    scene.add(group);

    const lineMat = new THREE.LineBasicMaterial({ color: 0xf26100, transparent: true, opacity: 0.18 });
    const lineMat2 = new THREE.LineBasicMaterial({ color: 0x0f766e, transparent: true, opacity: 0.14 });

    for (let i = 0; i < lineCount; i++) {
      const pts = [];
      const xStart = (Math.random() - 0.5) * 14;
      const yStart = (Math.random() - 0.5) * 9;
      const zStart = (Math.random() - 0.5) * 3;
      for (let j = 0; j < 12; j++) {
        pts.push(
          new THREE.Vector3(
            xStart + j * 0.12 + (Math.random() - 0.5) * 0.5,
            yStart + Math.sin(j * 0.4 + i) * 0.4,
            zStart
          )
        );
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = i % 2 === 0 ? lineMat : lineMat2;
      const line = new THREE.Line(geo, mat);
      group.add(line);
    }

    const pCount = 1200;
    const pPos = new Float32Array(pCount * 3);
    const pVel = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 16;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      pVel[i * 3] = (Math.random() - 0.5) * 0.002;
      pVel[i * 3 + 1] = (Math.random() - 0.5) * 0.001;
      pVel[i * 3 + 2] = 0;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ size: 0.018, color: 0xf8ad3d, transparent: true, opacity: 0.55 });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    let mx = 0;
    let my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const clock = new THREE.Clock();
    let af = 0;
    function animate() {
      af = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      group.rotation.y += (mx * 0.12 - group.rotation.y) * 0.04;
      group.rotation.x += (my * 0.06 - group.rotation.x) * 0.04;
      particles.rotation.y = t * 0.015;

      const pos = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < pCount; i++) {
        pos[i * 3] += pVel[i * 3];
        pos[i * 3 + 1] += pVel[i * 3 + 1];
        if (Math.abs(pos[i * 3]) > 8) pVel[i * 3] *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 5) pVel[i * 3 + 1] *= -1;
      }
      pGeo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(af);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="ch-hero" ref={containerRef}>
      <canvas ref={canvasRef} className="ch-canvas" />
      <div className="ch-media" />
      <div className="ch-gradient" />

      <motion.div className="ch-content" style={{ y: copyY, opacity }}>
        <motion.p
          className="ch-eyebrow"
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.18em" }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          
        </motion.p>

        <div className="ch-kinetic" aria-label="Transporter. Sécuriser. Livrer.">
          {WORDS.map((word, i) => (
            <motion.span
              key={word}
              className={`ch-word ch-word-${i}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, skewX: i % 2 === 0 ? -8 : 8 }}
              animate={{ opacity: 1, x: 0, skewX: 0 }}
              transition={{ duration: 0.9, delay: 0.3 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="ch-lead"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          WISDOM Logistics organise, sécurise et simplifie vos expéditions entre la France et le Cameroun: fret maritime, aérien, groupage, transit douanier et déménagement.
        </motion.p>

        <motion.div
          className="ch-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Link href="/devis" className="ch-btn ch-btn-primary">
            <span>Obtenir un devis</span>
            <i className="fa-solid fa-arrow-right" />
          </Link>
          <Link href="/services" className="ch-btn ch-btn-ghost">
            Nos services
          </Link>
        </motion.div>

        <motion.div
          className="ch-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {STATS.map((s, i) => (
            <div key={i} className="ch-stat">
              <strong>{s.num}</strong>
              <span>{s.label}</span>
              <small>{s.sub}</small>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="ch-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
        <motion.span animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
      </motion.div>
    </section>
  );
}
