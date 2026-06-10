import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demande envoyée - WISDOM Logistics",
  description: "Confirmation d'envoi de demande de devis WISDOM Logistics."
};

export default function ThanksPage() {
  return (
    <section className="thanks-page">
      <meta httpEquiv="refresh" content="5;url=/" />
      <div className="thanks-card">
        <i className="fa-solid fa-circle-check" />
        <p className="eyebrow">Demande envoyée</p>
        <h1>Merci, votre demande a bien été transmise</h1>
        <p>
          Notre équipe revient vers vous rapidement avec une solution adaptée à votre expédition France - Cameroun.
        </p>
        <p className="thanks-timer">Retour automatique vers l'accueil dans quelques secondes.</p>
        <Link href="/" className="button button-primary">
          Revenir maintenant
        </Link>
      </div>
    </section>
  );
}
