"use client";

import { motion } from "framer-motion";
import { CtaBand, Section } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";

const values = [
  ["Fiabilité", "Des opérations menées avec rigueur et une communication claire à chaque étape."],
  ["Sécurité", "Un soin constant apporté à l'emballage, à la manutention et à la traçabilité documentaire."],
  ["Transparence", "Un devoir de conseil et des informations compréhensibles sur les services, les délais et les procédures."],
  ["Réactivité", "Une réponse rapide aux demandes de devis et aux questions, y compris par WhatsApp."],
  ["Proximité", "Une connaissance approfondie du corridor France — Cameroun et des réalités locales."],
  ["Excellence client", "Un accompagnement humain et professionnel tout au long du parcours."],
];

function GlobeAnim() {
  return (
    <div className="globe-anim-wrap" aria-hidden="true">
      <div className="globe-svg-wrap">
        <svg viewBox="0 0 200 200" className="globe-svg">
          <circle cx="100" cy="100" r="80" fill="none" stroke="var(--blue-soft)" strokeWidth="1.5" />
          {[-50, -25, 0, 25, 50].map((offset, i) => (
            <ellipse
              key={i}
              cx="100"
              cy={100 + offset}
              rx={Math.sqrt(Math.max(0, 80 * 80 - offset * offset))}
              ry="12"
              fill="none"
              stroke="var(--blue-soft)"
              strokeWidth="1"
              opacity="0.6"
            />
          ))}
          {[0, 45, 90, 135].map((angle, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="100"
              rx="12"
              ry="80"
              fill="none"
              stroke="var(--blue-soft)"
              strokeWidth="1"
              opacity="0.6"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </svg>
        <motion.div
          className="globe-city-dot globe-paris"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="globe-city-dot globe-douala"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <span className="globe-label globe-label-paris">Paris</span>
        <span className="globe-label globe-label-douala">Douala</span>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">À propos</p>
          <h1>WISDOM Logistics, votre transitaire spécialiste France — Cameroun.</h1>
          <p>
            WISDOM Logistics est une entreprise de transport international, de logistique et de transit douanier dédiée aux échanges entre la France et le Cameroun. Notre métier : organiser et sécuriser l'acheminement de vos marchandises, en toute sérénité.
          </p>
          <GlobeAnim />
        </div>
        <div className="about-globe-wrap">
          <ImageSlot name="b2b" alt="Équipe logistique et entrepôt professionnel" priority />
          <div className="route-globe" aria-hidden="true">
            <span className="globe-line globe-line-a" />
            <span className="globe-line globe-line-b" />
            <i className="globe-point paris-point" />
            <i className="globe-point douala-point" />
          </div>
        </div>
      </section>

      <Section title="Mission, vision et valeurs">
        <div className="content">
          <h2>Notre mission</h2>
          <p>
            Simplifier vos expéditions France — Cameroun grâce à des solutions adaptées, sécurisées et accompagnées par une équipe à votre écoute. Vous comprenez chaque étape, vous obtenez une réponse claire et vous bénéficiez d'un suivi professionnel.
          </p>
          <h2>Notre vision</h2>
          <p>
            Devenir une référence du transport et de la logistique entre la France et le Cameroun, en combinant expertise métier, efficacité opérationnelle et expérience client moderne.
          </p>
          <h2>Notre engagement relationnel</h2>
          <p>
            Chaque client bénéficie d'un interlocuteur dédié, du devis à la livraison. Nous orientons systématiquement vers la solution la plus adaptée au budget et à l'urgence, avec une transparence totale sur les délais, les étapes et les documents nécessaires.
          </p>
        </div>
        <div className="info-grid">
          {values.map(([title, text]) => (
            <article className="info-card" key={title}>
              <i className="fa-solid fa-check" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Parlez-nous de votre projet d'expédition."
        text="Colis, fret, véhicule ou déménagement : nous vous proposons la solution adaptée à votre besoin et votre budget."
        cta="Demander un devis"
      />
    </>
  );
}
