import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Politique de confidentialité - WISDOM Logistics",
  description: "Politique de confidentialité du site WISDOM Logistics."
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero compact">
        <div>
          <p className="eyebrow">Confidentialité</p>
          <h1>Politique de confidentialité</h1>
          <p>Cette page présente les principes de traitement des données collectées via le site.</p>
        </div>
      </section>
      <Section title="Données collectées">
        <div className="content">
          <p>
            Les formulaires du site peuvent collecter votre nom, vos coordonnées, votre profil, les informations relatives à votre expédition et votre message. Ces données servent uniquement à répondre à votre demande de devis ou de contact.
          </p>
          <h2>Base et durée de conservation</h2>
          <p>
            Les informations sont traitées sur la base de votre demande volontaire. La durée de conservation doit être adaptée aux obligations commerciales et légales applicables.
          </p>
          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l'accès, la rectification ou la suppression de vos données en contactant WISDOM Logistics via les coordonnées indiquées sur la page contact.
          </p>
        </div>
      </Section>
    </>
  );
}
