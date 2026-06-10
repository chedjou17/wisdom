"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ImageSlot } from "@/components/ImageSlot";
import { serviceCards } from "@/lib/site";

const highlights = [
  ["Fret aérien", "Acheminement rapide pour les envois urgents, documents et marchandises sensibles au délai."],
  ["Fret maritime", "Solution économique FCL / LCL pour les volumes importants, palettes, mobilier et conteneurs."],
  ["Transit douanier", "Accompagnement documentaire et formalités import/export pour sécuriser chaque opération."]
];

export default function Services() {
  return (
    <>
      <section className="page-hero service-hero">
        <div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            Nos services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Des solutions de transport et de logistique France — Cameroun.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            De l'envoi d'un colis à la gestion de flux commerciaux réguliers, WISDOM Logistics propose une gamme complète de services. Chacun fait l'objet d'un accompagnement de bout en bout : conseil, devis, prise en charge, transport, douane et livraison.
          </motion.p>
        </div>
        <ImageSlot name="warehouses" alt="Entrepôt logistique WISDOM Logistics France Cameroun" priority />
      </section>

      <section className="service-focus">
        {highlights.map(([title, text], index) => (
          <motion.article
            className="focus-card"
            key={title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </motion.article>
        ))}
      </section>

      <section className="content-section">
        <div className="section-intro">
          <p className="eyebrow">Catalogue de services</p>
          <h2>Choisissez la solution adaptée à votre envoi.</h2>
          <p>Découvrez chaque service en détail, avec ses spécificités, ses avantages et un formulaire de devis dédié.</p>
        </div>
        <div className="services-editorial-grid">
          {serviceCards.map((card, i) => (
            <motion.div
              key={card.slug}
              className={i === 0 ? "service-editorial-item featured" : "service-editorial-item"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.04 }}
            >
              <Link href={`/services/${card.slug}`} className="service-editorial-card">
                <div className="service-editorial-index">{String(i + 1).padStart(2, "0")}</div>
                <div className="service-editorial-icon">
                  <i className={`fa-solid ${card.icon}`} />
                </div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
                <span className="service-editorial-link">
                  Voir le service <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
