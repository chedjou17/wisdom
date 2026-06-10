"use client";

import { useEffect, useRef, useState } from "react";

/* ─── DATA ────────────────────────────────────────────── */
const steps = [
  {
    step: "01",
    label: "Collecte en France",
    title: "Le colis entre dans une chaîne claire dès Paris.",
    text: "Nous identifions l'envoi, vérifions les informations utiles et préparons le départ avec une vision simple du trajet.",
    imgSrc: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1800&q=85&auto=format&fit=crop",
    imgAlt: "Entrepôt logistique, Paris",
  },
  {
    step: "02",
    label: "Départ de Roissy CDG",
    title: "Le bon mode de transport est choisi selon l'urgence.",
    text: "Aérien pour les envois prioritaires, maritime ou groupage pour les volumes. Le client comprend pourquoi cette route est retenue.",
    imgSrc: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=85&auto=format&fit=crop",
    imgAlt: "Avion cargo au départ de Roissy CDG",
  },
  {
    step: "03",
    label: "Traversée atlantique",
    title: "Le corridor France — Cameroun devient visible.",
    text: "Le suivi transforme une attente abstraite en parcours lisible, avec des points de contrôle et une communication humaine.",
    imgSrc: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1800&q=85&auto=format&fit=crop",
    imgAlt: "Porte-conteneurs en mer, traversée atlantique",
  },
  {
    step: "04",
    label: "Douane Cameroun",
    title: "Le dossier accompagne la marchandise à l'arrivée.",
    text: "Documents, nature des biens et coordonnées destinataire sont structurés pour limiter les blocages et accélérer la suite.",
    imgSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=85&auto=format&fit=crop",
    imgAlt: "Documents douaniers et paperasse administrative",
  },
  {
    step: "05",
    label: "Distribution à Douala",
    title: "La logistique locale prend le relais.",
    text: "Depuis Douala, l'acheminement final est organisé selon la destination, le contact destinataire et les contraintes terrain.",
    imgSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85&auto=format&fit=crop",
    imgAlt: "Livraison finale à Douala, Cameroun",
  },
  {
    step: "06",
    label: "Livraison confirmée",
    title: "Le colis arrive, le lien est tenu.",
    text: "La remise finale clôture le parcours avec une information claire et un interlocuteur disponible jusqu'au bout.",
    imgSrc: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1800&q=85&auto=format&fit=crop",
    imgAlt: "Réception d'un colis, livraison confirmée",
  },
];

const TOTAL = steps.length;

/* ─── HOOK : activeIndex from scroll ─────────────────── */
function useScrollStory(sectionRef: React.RefObject<HTMLElement | null>) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top; // px scrolled into section
      const sectionHeight = rect.height - window.innerHeight; // total scrollable
      const raw = sectionTop / sectionHeight; // 0 → 1
      const clamped = Math.max(0, Math.min(1, raw));
      // Map 0→1 to index 0→(TOTAL-1)
      const idx = Math.min(TOTAL - 1, Math.floor(clamped * TOTAL));
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionRef]);

  return activeIndex;
}

/* ─── MINI MAP ────────────────────────────────────────── */
function MiniMap({ active }: { active: number }) {
  const DOT_SPACING = 54;
  const TOTAL_H = DOT_SPACING * (TOTAL - 1);
  const cursorY = (active / (TOTAL - 1)) * TOTAL_H;

  return (
    <div className="ss-minimap" aria-hidden="true">
      {/* vertical rail */}
      <div className="ss-rail" />

      {/* animated cursor */}
      <div
        className="ss-cursor"
        style={{ transform: `translateY(${cursorY}px)` }}
      />

      {/* dots */}
      {steps.map((s, i) => (
        <div
          key={s.step}
          className={`ss-dot${i === active ? " ss-dot-active" : i < active ? " ss-dot-done" : ""}`}
          style={{ top: i * DOT_SPACING }}
        />
      ))}
    </div>
  );
}

/* ─── COMPONENT ───────────────────────────────────────── */
export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const activeIndex = useScrollStory(sectionRef);

  return (
    <section className="ss-section" ref={sectionRef}>
      {/* sticky viewport */}
      <div className="ss-sticky">

        {/* background images (all stacked, only active visible) */}
        <div className="ss-bgs" aria-hidden="true">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`ss-bg${i === activeIndex ? " ss-bg-active" : ""}`}
            >
              <img src={s.imgSrc} alt="" loading={i === 0 ? "eager" : "lazy"} decoding="async" />
            </div>
          ))}
          {/* dark overlay */}
          <div className="ss-overlay" />
        </div>

        {/* text panels (all stacked, only active visible) */}
        <div className="ss-panels">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`ss-panel${
                i === activeIndex
                  ? " ss-panel-active"
                  : i < activeIndex
                  ? " ss-panel-past"
                  : ""
              }`}
            >
              <span className="ss-num" aria-hidden="true">{s.step}</span>
              <p className="ss-eyebrow">{s.label}</p>
              <h2 className="ss-title">{s.title}</h2>
              <p className="ss-text">{s.text}</p>
            </div>
          ))}
        </div>

        {/* mini map */}
        <MiniMap active={activeIndex} />

        {/* scroll hint (only on step 0) */}
        {activeIndex === 0 && (
          <div className="ss-hint" aria-hidden="true">
            <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
              <rect x="1" y="1" width="16" height="26" rx="8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
              <circle cx="9" cy="8" r="2.5" fill="white">
                <animate attributeName="cy" values="8;18;8" dur="1.6s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0;1" dur="1.6s" repeatCount="indefinite"/>
              </circle>
            </svg>
            <span>Défiler</span>
          </div>
        )}
      </div>
    </section>
  );
}
