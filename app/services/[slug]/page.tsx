import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, Section } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";
import { serviceCards, services } from "@/lib/site";
import { BounceIcon } from "./BounceIcon";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.meta,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const related = serviceCards.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="page-hero service-detail-hero">
        <div>
          <p className="eyebrow">Service WISDOM Logistics</p>
          <BounceIcon icon={service.icon} />
          <h1>{service.title}</h1>
          <p>{service.lead}</p>
        </div>
        <ImageSlot name={service.visual} alt={service.title} />
      </section>

      <Section title="Détail du service" lead="Une solution pensée selon la nature des marchandises, le délai, le volume et la destination finale au Cameroun.">
        <div className="split">
          <div className="content service-detail-content">
            {service.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body ? <p>{section.body}</p> : null}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
          <aside className="quote-aside">
            <i className={`fa-solid ${service.icon} service-bounce-icon`} />
            <h3>Demande de cotation</h3>
            <p>
              Précisez la nature des marchandises, les villes de départ et de destination, le poids, le volume et votre niveau d'urgence. Nous revenons vers vous avec une proposition adaptée.
            </p>
            <a className="button button-primary" href={`/devis?service=${encodeURIComponent(service.title)}`}>
              {service.cta}
            </a>
          </aside>
        </div>
      </Section>

      <Section tone="tint" title="Services complémentaires">
        <div className="service-grid">
          {related.map((item) => (
            <a className="service-card service-card-simple" key={item.slug} href={`/services/${item.slug}`}>
              <i className={`fa-solid ${item.icon}`} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>Voir le service</span>
            </a>
          ))}
        </div>
      </Section>

      <CtaBand cta={service.cta} />
    </>
  );
}
