"use client";

import { motion } from "framer-motion";

const steps = [
  {
    kicker: "01 / Dépôt",
    title: "On qualifie l'envoi dès le premier échange.",
    text: "Nature de la marchandise, volume, ville d'arrivée, urgence et documents : tout est cadré avant de proposer une solution.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=75&w=900"
  },
  {
    kicker: "02 / Consolidation",
    title: "Les colis sont préparés, regroupés et suivis.",
    text: "Le groupage devient lisible : vos informations utiles restent accessibles, sans transformer le site en faux tableau de bord.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=75&w=900"
  },
  {
    kicker: "03 / Livraison",
    title: "La coordination continue jusqu'à la remise finale.",
    text: "France, transit, arrivée au Cameroun : chaque étape importante est expliquée clairement au client.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=75&w=900"
  }
];

const kpis = [
  ["24h", "pré-analyse devis"],
  ["7", "étapes de suivi"],
  ["2", "pays connectés"]
];

export function DataPlatform() {
  return (
    <div className="data-platform data-story">
      <div className="data-story-media" aria-hidden="true">
        {steps.map((step, index) => (
          <motion.figure
            className={`data-story-photo data-story-photo-${index + 1}`}
            key={step.kicker}
            initial={{ opacity: 0, y: 52, rotate: index === 1 ? 3 : -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? -1 : 1 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.82, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={step.image} alt="" />
          </motion.figure>
        ))}
      </div>
      <div className="data-story-copy">
        {steps.map((step, index) => (
          <motion.article
            className="data-story-card"
            key={step.title}
            initial={{ opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.72, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{step.kicker}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.article>
        ))}
        <motion.div
          className="data-story-kpis"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          {kpis.map(([value, label]) => (
            <span key={label}>
              <strong>{value}</strong>
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
