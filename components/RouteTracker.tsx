"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const PATH_D = "M180,140 C200,200 320,180 420,230 C510,275 545,320 590,355";
const PATH_LEN = 500;

function AnimatedPlane({ progress }: { progress: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pos, setPos] = useState({ x: 180, y: 140 });
  const [angle, setAngle] = useState(30);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    const pt = path.getPointAtLength(progress * length);
    const DELTA = Math.min(5, length * 0.01);
    const ptAhead = path.getPointAtLength(Math.min(progress * length + DELTA, length));
    const deg = (Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x) * 180) / Math.PI;
    setPos({ x: pt.x, y: pt.y });
    setAngle(deg);
  }, [progress]);

  return (
    <>
      {/* invisible path for measurement */}
      <path ref={pathRef} d={PATH_D} stroke="none" fill="none" style={{ pointerEvents: "none" }} />

      {/* glow halo */}
      <circle cx={pos.x} cy={pos.y} r={18} fill="rgba(31,79,163,0.13)" />

      {/* plane group rotated along path */}
      <g transform={`translate(${pos.x},${pos.y}) rotate(${angle})`}>
        {/* body */}
        <path d="M-13,0 L7,-3.5 C10,-4 14,-2 14,0 C14,2 10,4 7,3.5 Z" fill="#1f4fa3" />
        {/* left wing */}
        <path d="M-2,-3.5 L4,-13 L8,-9 L1,0 Z" fill="#1f4fa3" />
        {/* right wing */}
        <path d="M-2,3.5 L4,13 L8,9 L1,0 Z" fill="#1f4fa3" />
        {/* tail fin top */}
        <path d="M-11,-2 L-16,-7 L-12,-5 Z" fill="#1046a0" />
        {/* tail fin bottom */}
        <path d="M-11,2 L-16,7 L-12,5 Z" fill="#1046a0" />
        {/* window */}
        <circle cx="5" cy="0" r="1.8" fill="rgba(255,255,255,0.6)" />
      </g>
    </>
  );
}

export function RouteTracker() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const DURATION = 6000;
    const animate = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = (now - startRef.current) % DURATION;
      setProgress(elapsed / DURATION);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      startRef.current = 0;
    };
  }, [inView]);

  const dashOffset = PATH_LEN * (1 - progress);

  return (
    <div className="rt-section" ref={sectionRef}>
      <div className="rt-header">
        <p className="eyebrow">Corridor France — Cameroun</p>
        <h2>Paris — Douala, un axe maîtrisé.</h2>
        <p>
          Spécialisés sur ce corridor, nous connaissons chaque étape du parcours :
          collecte, transport, douane, distribution finale.
        </p>
      </div>

      <div className="rt-layout">
        {/* MAP */}
        <div className="rt-map-wrap">
          <svg
            viewBox="0 0 800 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rt-svg"
            aria-hidden="true"
          >
            <rect width="800" height="500" rx="16" fill="#e8f0fa" />

            {/* Europe */}
            <path
              d="M55,40 L270,40 L295,80 L280,148 L240,168 L198,185 L172,205 L130,195 L90,162 L52,130 Z"
              fill="#d4e3f5" stroke="#b0c8e6" strokeWidth="1.2"
            />
            {/* France */}
            <path
              d="M152,82 L228,72 L248,128 L218,162 L176,168 L150,144 L142,112 Z"
              fill="#dce9f7" stroke="#5b90cf" strokeWidth="1.5"
            />

            {/* Africa */}
            <path
              d="M460,180 L648,162 L708,224 L726,316 L706,424 L648,462 L562,474 L480,452 L440,382 L420,302 L440,232 Z"
              fill="#d4e3f5" stroke="#b0c8e6" strokeWidth="1.2"
            />
            {/* Cameroun */}
            <path
              d="M552,300 L616,294 L636,342 L616,388 L570,394 L544,362 L540,330 Z"
              fill="#dce9f7" stroke="#5b90cf" strokeWidth="1.5"
            />

            {/* Atlantic label */}
            <text x="340" y="285" textAnchor="middle" fill="#8aa8c8"
              fontSize="9" fontWeight="600" letterSpacing="3" opacity="0.6">
              OCÉAN ATLANTIQUE
            </text>

            {/* Static dashed guide */}
            <path d={PATH_D} stroke="#c0d0e6" strokeWidth="1.5"
              strokeDasharray="5 5" strokeLinecap="round" />

            {/* Animated progress line */}
            <path
              d={PATH_D}
              stroke="#1f4fa3"
              strokeWidth="2.5"
              strokeDasharray={PATH_LEN}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.05s linear" }}
            />

            {/* Animated plane */}
            <AnimatedPlane progress={progress} />

            {/* Paris dot */}
            <circle cx="180" cy="140" r="7" fill="#10213b" />
            <circle cx="180" cy="140" r="13" fill="#10213b" fillOpacity="0.12" />
            <text x="192" y="128" fill="#10213b" fontSize="11" fontWeight="700">Paris</text>
            <text x="192" y="142" fill="#65758b" fontSize="9">Roissy CDG</text>

            {/* Douala dot */}
            <circle cx="590" cy="355" r="7" fill="#0f7a3b" />
            <circle cx="590" cy="355" r="13" fill="#0f7a3b" fillOpacity="0.12" />
            <text x="604" y="343" fill="#10213b" fontSize="11" fontWeight="700">Douala</text>
            <text x="604" y="357" fill="#65758b" fontSize="9">Cameroun</text>
          </svg>
        </div>

        {/* CTA ONLY */}
        <div className="rt-cta-col">
          <div className="rt-cta">
            <p>Délais indicatifs confirmés au devis selon le mode de transport et les départs programmés.</p>
            <Link href="/devis" className="button button-primary">Demander un devis</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
