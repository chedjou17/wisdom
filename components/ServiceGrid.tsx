import Link from "next/link";
import { serviceCards } from "@/lib/site";
import { ImageSlot, type ImageSlotName } from "@/components/ImageSlot";

const serviceImages: Record<string, ImageSlotName> = {
  "colis-france-cameroun": "boxes",
  "fret-maritime": "sea",
  "fret-aerien": "air",
  "groupage-maritime": "boxes",
  "transport-vehicules": "vehicle",
  "transit-douanier": "customs",
  "stockage-entrepot": "warehouse",
  "demenagement-international": "moving",
  "assurance-transport": "shield"
};

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {serviceCards.map((service) => (
        <Link className="service-card" key={service.slug} href={`/services/${service.slug}`}>
          <ImageSlot name={serviceImages[service.slug]} alt={service.title} compact />
          <div className="service-card-body">
            <i className={`fa-solid ${service.icon}`} />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <span>Voir le service</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
