"use client";

import { CtaBand, Section } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";

const advice = [
  ["Carton solide", "Utilisez un emballage adapté au poids et fermez chaque colis soigneusement. Un carton bien fermé réduit les risques de détérioration pendant le transport."],
  ["Objets protégés", "Séparez les objets fragiles et comblez les espaces vides avec du papier bulle ou du papier journal pour éviter les mouvements."],
  ["Étiquette lisible", "Indiquez clairement le nom, le téléphone, la ville de destination et les coordonnées du destinataire sur chaque colis."],
  ["Liste de contenu", "Établissez une liste simple du contenu pour faciliter le suivi, la préparation documentaire et les éventuels contrôles douaniers."],
];

const restricted = [
  ["Produits dangereux", "Matières inflammables, gaz sous pression, produits corrosifs ou explosifs sont interdits au transport."],
  ["Denrées périssables", "Les aliments sans conditionnement adapté ne peuvent être acceptés sans accord préalable."],
  ["Produits réglementés", "Certains articles nécessitent une autorisation spécifique. Signalez-les lors de la demande de devis."],
  ["Objets de valeur", "Les marchandises de grande valeur doivent être déclarées et assurées avant l'expédition."],
];

export default function DiasporaPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Diaspora & particuliers</p>
          <h1>Envoyez vos colis au Cameroun en toute confiance.</h1>
          <p>
            Envoyer un colis à sa famille doit être simple et sécurisé. WISDOM Logistics accompagne les familles, étudiants, salariés et membres de la diaspora camerounaise, même sans connaissance des procédures. Nous vous expliquons chaque étape clairement.
          </p>
        </div>
        <ImageSlot name="diaspora" alt="Colis prêts pour une expédition vers le Cameroun" priority />
      </section>

      <Section title="Ce que vous pouvez envoyer">
        <div className="content">
          <p>
            Que vous envoyiez un carton, une valise, des documents, un équipement ou des effets personnels, WISDOM Logistics vous accompagne à toutes les étapes de votre expédition vers le Cameroun. Notre équipe vous conseille sur la solution la plus adaptée selon l'urgence, le volume et le budget.
          </p>
          <ul>
            <li>Cartons, valises et bagages.</li>
            <li>Documents et effets personnels.</li>
            <li>Petits équipements et marchandises légères.</li>
            <li>Colis familiaux de toute nature, hors produits réglementés.</li>
          </ul>
          <p>
            Option maritime pour les envois non urgents. Option aérienne pour les expéditions prioritaires. Votre colis peut être déposé ou collecté selon l'organisation retenue.
          </p>
        </div>
      </Section>

      <Section tone="tint" title="Conseils d'emballage">
        <div className="info-grid">
          {advice.map(([title, text]) => (
            <article className="info-card" key={title}>
              <i className="fa-solid fa-box" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Produits réglementés ou interdits">
        <div className="content">
          <p>
            Certaines marchandises sont soumises à restriction ou interdites au transport international. Pour éviter tout blocage ou retard, signalez-nous à l'avance la nature complète de votre envoi. La liste précise est confirmée lors du devis.
          </p>
        </div>
        <div className="info-grid">
          {restricted.map(([title, text]) => (
            <article className="info-card" key={title}>
              <i className="fa-solid fa-triangle-exclamation" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Votre famille attend un colis au Cameroun ?"
        text="Contactez-nous par WhatsApp ou via le formulaire de devis. Nous vous guidons rapidement vers la meilleure solution."
        cta="Préparer mon envoi"
      />
    </>
  );
}
