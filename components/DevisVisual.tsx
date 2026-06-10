"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  { icon: "fa-box-open",        label: "Collecte",   color: "#1f4fa3" },
  { icon: "fa-warehouse",       label: "Préparation",color: "#1f4fa3" },
  { icon: "fa-plane-departure", label: "Départ",     color: "#1f4fa3" },
  { icon: "fa-ship",            label: "Transit",    color: "#1f4fa3" },
  { icon: "fa-file-signature",  label: "Douane",     color: "#1f4fa3" },
  { icon: "fa-map-marker-alt",  label: "Livraison",  color: "#0f7a3b" },
];

export function DevisVisual() {
  const [active, setActive] = useState(0);
  const [lit, setLit] = useState<number[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % STEPS.length;
        setLit((l) => (next === 0 ? [0] : [...l.filter((x) => x < next), next]));
        return next;
      });
    }, 900);
    setLit([0]);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="devis-visual" aria-hidden="true">
      {/* Top label */}
      <div className="devis-visual-header">
        <span><img src="/images/flag-france.svg" alt="" /> France</span>
        {/* <span className="devis-visual-flag">🇫🇷</span> */}
        <span className="devis-visual-route-label">France → Cameroun</span>
        {/* <span className="devis-visual-flag">🇨🇲</span> */}
         <span><img src="/images/flag-cameroon.svg" alt="" /> Cameroun</span>
      </div>

      {/* Steps */}
      <div className="devis-visual-steps">
        {STEPS.map((step, i) => {
          const isActive = i === active;
          const isDone = lit.includes(i) && !isActive;
          return (
            <div key={step.label} className={`dv-step${isActive ? " dv-active" : ""}${isDone ? " dv-done" : ""}`}>
              {/* connector line */}
              {i < STEPS.length - 1 && (
                <div className={`dv-line${lit.includes(i + 1) ? " dv-line-lit" : ""}`} />
              )}
              <div className="dv-node">
                <i className={`fa-solid ${step.icon}`} />
              </div>
              <span className="dv-label">{step.label}</span>
            </div>
          );
        })}
      </div>

      {/* Active step pill */}
      <div className="devis-visual-pill">
        <i className={`fa-solid ${STEPS[active].icon}`} />
        <span>{STEPS[active].label} en cours…</span>
      </div>

      {/* Bottom reassurance */}
      <div className="devis-visual-footer">
        <div className="dv-badge"><i className="fa-solid fa-shield-halved" /> Sécurisé</div>
        <div className="dv-badge"><i className="fa-solid fa-headset" /> Suivi personnalisé</div>
        <div className="dv-badge"><i className="fa-brands fa-whatsapp" /> WhatsApp</div>
      </div>
    </div>
  );
}
