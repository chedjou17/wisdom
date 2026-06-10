const image = (name: string) => `/images/${name}`;

export const photos = {
  hero: {
    src: image("aviondouala.avif"),
    alt: "Avion reliant la France au Cameroun"
  },
  paris: {
    src: image("toureifel.avif"),
    alt: "Tour Eiffel à Paris"
  },
  roissy: {
    src: image("ailavion.avif"),
    alt: "Avion au départ"
  },
  douala: {
    src: image("bateaudouala.jpeg"),
    alt: "Port et activité logistique"
  },
  doualaStreet: {
    src: image("lyon.jpg"),
    alt: "Zone urbaine animée"
  },
  cargoSea: {
    src: image("transportmaritime.avif"),
    alt: "Transport maritime de conteneurs"
  },
  diaspora: {
    src: image("preparation envoie.avif"),
    alt: "Préparation d'un envoi familial"
  },
  b2b: {
    src: image("salutation.jpg"),
    alt: "Entrepôt logistique"
  },
  contact: {
    src: image("service client.avif"),
    alt: "Service client WISDOM Logistics"
  },
  sea: {
    src: image("porte conteneur.avif"),
    alt: "Transport maritime"
  },
  air: {
    src: image("ailerons.avif"),
    alt: "Fret aérien"
  },
  airs: {
    src: image("imagepreuve.png"),
    alt: "Fret aérien"
  },faq: {
    src: image("faq.avif"),
    alt: "Fret aérien"
  },
  boxes: {
    src: image("carton et colis.avif"),
    alt: "Préparation d'envoi"
  },
  vehicle: {
    src: image("transport de vehicule.avif"),
    alt: "Transport de véhicule"
  },
  customs: {
    src: image("formaliter douaniere.avif"),
    alt: "Formalités douanières"
  },
  warehouse: {
    src: image("entrepot logistiqu.avif"),
    alt: "Stockage et entrepôt"
  },
   warehouses: {
    src: image("imagesentrepot..jpg"),
    alt: "Stockage et entrepôt"
  },
  moving: {
    src: image("demenagement et carton.avif"),
    alt: "Déménagement et cartons"
  },
  shield: {
    src: image("protection et assurance.avif"),
    alt: "Protection et assurance transport"
  }
} as const;

export type PhotoName = keyof typeof photos;
