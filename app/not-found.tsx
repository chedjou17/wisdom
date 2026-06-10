import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero compact">
      <div>
        <p className="eyebrow">Page introuvable</p>
        <h1>Cette page n'existe pas encore</h1>
        <p>Revenez vers les services ou envoyez directement une demande de devis.</p>
        <Link href="/services" className="button button-primary">
          Voir les services
        </Link>
      </div>
    </section>
  );
}
