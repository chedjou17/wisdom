import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  lead,
  children,
  tone = "light"
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  tone?: "light" | "tint" | "dark";
}) {
  return (
    <section className={`section section-${tone}`}>
      <div className="section-inner">
        <div className="section-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {lead ? <p>{lead}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Parlez-nous de votre expédition",
  text = "Une demande claire permet de construire une solution adaptée à votre volume, votre urgence et votre budget.",
  cta = "Obtenir un devis"
}: {
  title?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <section className="cta-band">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link href="/devis" className="button button-light">
        {cta}
      </Link>
    </section>
  );
}
