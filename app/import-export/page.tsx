"use client";

import { CtaBand, Section } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";

const forWho = [
  ["Commerçants & distributeurs", "Organisation des flux d'approvisionnement entre la France et le Cameroun, avec optimisation des coûts et des délais."],
  ["PME", "Externalisation de la logistique internationale : transport, documentation, formalités et livraison finale coordonnés par un seul interlocuteur."],
  ["Acteurs e-commerce", "Expédition de lots de produits et commandes groupées, avec des solutions maritimes ou aériennes adaptées aux volumes."],
];

const services = [
  ["Organisation des flux", "Coordination du transport et de la documentation pour des opérations import/export plus lisibles et mieux maîtrisées."],
  ["Conseil Incoterms", "Orientation vers l'incoterm le plus adapté à chaque opération pour définir clairement les responsabilités vendeur/acheteur."],
  ["Accompagnement documentaire", "Préparation des documents utiles : facture commerciale, déclaration en douane, certificat d'origine."],
  ["Calendrier de départ", "Planification des expéditions selon les contraintes de volume, de délai et de budget de chaque client."],
];

export default function ImportExportPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Import / Export</p>
          <h1>Coordonnez vos flux commerciaux entre la France et le Cameroun.</h1>
          <p>
            WISDOM Logistics est votre partenaire de coordination commerciale entre la France et le Cameroun. Nous organisons vos flux de marchandises, la documentation associée et la coordination avec les acteurs de la chaîne logistique, pour des opérations fluides et conformes.
          </p>
        </div>
        <ImageSlot name="b2b" alt="Coordination import export France Cameroun" />
      </section>

      <Section title="Pour qui">
        <div className="info-grid">
          {forWho.map(([title, text]) => (
            <article className="info-card" key={title}>
              <i className="fa-solid fa-briefcase" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="tint" title="Ce que nous organisons">
        <div className="info-grid">
          {services.map(([title, text]) => (
            <article className="info-card" key={title}>
              <i className="fa-solid fa-list-check" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Structurez vos opérations import/export vers le Cameroun."
        text="Un interlocuteur dédié, des départs programmés et une documentation maîtrisée pour des flux commerciaux réguliers et fiables."
        cta="Demander un devis"
      />
    </>
  );
}
