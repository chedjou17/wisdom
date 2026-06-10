import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales - WISDOM Logistics",
  description: "Mentions légales du site WISDOM Logistics."
};

export default function LegalPage() {
  return (
    <>
      <section className="page-hero compact">
        <div>
          <p className="eyebrow">Informations légales</p>
          <h1>Mentions légales</h1>
          <p>Informations à adapter avec les données juridiques définitives de l'entreprise.</p>
        </div>
      </section>
      <Section title="Éditeur du site">
        <div className="legal-grid">
          <article className="info-card">
            <h3>Entreprise</h3>
            <p>WISDOM Logistics</p>
          </article>
          <article className="info-card">
            <h3>Coordonnées</h3>
            <p>{site.email}</p>
            <p>{site.address}</p>
          </article>
          <article className="info-card">
            <h3>Hébergement</h3>
            <p>Vercel.</p>
          </article>
        </div>
      </Section>
    </>
  );
}
