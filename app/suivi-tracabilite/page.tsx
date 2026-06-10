import type { Metadata } from "next";
import { ImageSlot } from "@/components/ImageSlot";
import { CtaBand, Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Suivi et traçabilité de vos expéditions — WISDOM Logistics",
  description: "Suivez votre expédition à chaque étape, de la collecte en France à la livraison finale au Cameroun."
};

const tracking = [
  ["Prise en charge", "Confirmation de la collecte ou du dépôt de la marchandise. Votre dossier est ouvert et votre interlocuteur identifié."],
  ["Départ", "Information sur l'embarquement et le mode de transport retenu : aérien, maritime ou groupage."],
  ["Transit", "Point de situation communiqué en cas de besoin ou de durée longue sur le trajet France — Cameroun."],
  ["Arrivée & douane", "Notification de l'arrivée au port ou à l'aéroport et suivi des formalités douanières en cours."],
  ["Distribution", "Organisation de la logistique locale depuis Douala vers la destination finale du destinataire."],
  ["Livraison confirmée", "Confirmation de la remise au destinataire au Cameroun, clôture du dossier."],
];

const security = [
  ["Sécurisation de l'embarquement", "Contrôle de l'emballage, identification des colis et vérification documentaire avant chaque départ."],
  ["Coordination des acteurs", "Liaison avec tous les intervenants de la chaîne : transporteurs, agents portuaires, transitaires locaux."],
  ["Traçabilité documentaire", "Suivi des documents de transport à chaque étape pour éviter tout blocage ou retard douanier."],
  ["Information proactive", "Vous êtes contacté aux étapes clés sans avoir à relancer. WhatsApp disponible pour toute question urgente."],
];

export default function TrackingPage() {
  return (
    <>
      <section className="page-hero tracking-hero">
        <div>
          <p className="eyebrow">Suivi & traçabilité</p>
          <h1>Suivez votre expédition à chaque étape, de Paris à Douala.</h1>
          <p>
            WISDOM Logistics sécurise l'embarquement, coordonne l'ensemble des acteurs et vous informe aux étapes clés — du départ en France jusqu'à la remise au destinataire au Cameroun.
          </p>
        </div>
        <ImageSlot name="airs" alt="Suivi d'expédition France Cameroun WISDOM Logistics" priority />
      </section>

      <Section title="Les étapes suivies" lead="Un parcours clair, de la prise en charge à la livraison finale.">
        <div className="premium-tracking-list progress-tracking-list">
          {tracking.map(([title, text], index) => (
            <article className="premium-track-item" key={title} style={{ "--i": index } as React.CSSProperties}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="tint" title="Nos engagements de sécurité">
        <div className="info-grid">
          {security.map(([title, text]) => (
            <article className="info-card" key={title}>
              <i className="fa-solid fa-shield-halved" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Une question sur votre expédition en cours ?"
        text="Contactez-nous directement par WhatsApp pour une réponse rapide, ou utilisez le formulaire de contact pour toute demande détaillée."
        cta="Contacter WISDOM Logistics"
      />
    </>
  );
}
