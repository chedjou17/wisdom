"use client";

import { CtaBand, Section } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";

const profiles = [
  ["Importateurs", "Planification maritime ou aérienne, groupage, documentation et suivi des flux réguliers vers le Cameroun."],
  ["Commerçants", "Consolidation, stockage et calendrier de départs programmés pour réduire les coûts de réapprovisionnement."],
  ["PME", "Externalisation de l'organisation transport, gestion des formalités douanières et coordination de la livraison finale."],
  ["E-commerce", "Expédition de lots de produits, gestion des commandes groupées, stockage et préparation au départ."],
  ["Distributeurs", "Solutions multimodales, optimisation des délais et accompagnement opérationnel sur mesure."],
];

const incoterms = [
  ["EXW", "Ex Works", "L'acheteur prend en charge l'intégralité du transport depuis l'usine du vendeur."],
  ["FOB", "Free On Board", "Le vendeur livre à bord du navire ; le transport principal revient à l'acheteur."],
  ["CIF", "Cost, Insurance & Freight", "Le vendeur règle le fret et l'assurance jusqu'au port d'arrivée."],
  ["DAP", "Delivered At Place", "Le vendeur livre au lieu convenu, hors dédouanement import."],
  ["DDP", "Delivered Duty Paid", "Le vendeur livre dédouané, droits et taxes inclus."],
];

const engagements = [
  ["Interlocuteur dédié", "Un référent unique assure le suivi de vos flux réguliers, du devis à la livraison."],
  ["Départs programmés", "Des calendriers d'expédition anticipés pour planifier vos réapprovisionnements."],
  ["Conformité douanière", "Une documentation maîtrisée et une coordination avec les acteurs de la chaîne logistique."],
  ["Optimisation continue", "Un arbitrage régulier entre coût, volume, urgence et contrainte de délai."],
];

function B2BPipelineAnim() {
  return (
    <div className="b2b-pipeline-wrap" aria-hidden="true">
      <svg className="b2b-pipeline-svg" viewBox="0 0 400 80" fill="none">
        {[40, 140, 240, 340].map((cx, i) => (
          <circle key={i} cx={cx} cy="40" r="16" fill="var(--blue)" opacity="0.15" stroke="var(--blue)" strokeWidth="1.5" />
        ))}
        {[40, 140, 240, 340].map((cx, i) => (
          <circle key={`inner-${i}`} cx={cx} cy="40" r="7" fill="var(--blue)" />
        ))}
        {[0, 1, 2].map((i) => (
          <line
            key={`line-${i}`}
            x1={40 + i * 100 + 16}
            y1="40"
            x2={40 + (i + 1) * 100 - 16}
            y2="40"
            stroke="var(--blue)"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="b2b-pipe-line"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
        {["Fournisseur", "Transport", "Douane", "Réception"].map((label, i) => (
          <text key={label} x={40 + i * 100} y="68" textAnchor="middle" fill="var(--ink-soft)" fontSize="9" fontFamily="inherit">
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
}

export default function B2BPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Solutions entreprises</p>
          <h1>Un partenaire logistique fiable pour vos flux vers le Cameroun.</h1>
          <p>
            WISDOM Logistics accompagne les importateurs, commerçants, PME, e-commerçants et distributeurs qui souhaitent structurer leurs opérations vers le Cameroun avec un interlocuteur dédié, des départs programmés et une documentation maîtrisée.
          </p>
          <B2BPipelineAnim />
        </div>
        <ImageSlot name="b2b" alt="Entrepôt et flux logistiques professionnels France Cameroun" priority />
      </section>

      <Section title="Solutions par profil client">
        <div className="info-grid">
          {profiles.map(([title, text]) => (
            <article className="info-card" key={title}>
              <i className="fa-solid fa-building" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="tint" title="Nos engagements B2B">
        <div className="info-grid">
          {engagements.map(([title, text]) => (
            <article className="info-card" key={title}>
              <i className="fa-solid fa-diagram-project" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Repères Incoterms">
        <div className="content">
          <p>
            Pour qualifier correctement une demande B2B, WISDOM Logistics vous conseille sur l'incoterm le plus adapté à votre opération. Les incoterms définissent la répartition des coûts et des responsabilités entre vendeur et acheteur.
          </p>
        </div>
        <div className="info-grid">
          {incoterms.map(([code, name, desc]) => (
            <article className="info-card" key={code}>
              <i className="fa-solid fa-file-contract" />
              <h3><strong>{code}</strong> — {name}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Vous avez des expéditions régulières vers le Cameroun ?"
        text="Construisons ensemble une solution fiable, optimisée et adaptée à votre activité, avec un interlocuteur dédié et un conseil sur les incoterms les plus pertinents."
        cta="Demander un échange commercial"
      />
    </>
  );
}
