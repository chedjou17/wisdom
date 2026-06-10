const image = (name: string) => `/images/${name}`;

export const photos = {
  hero: {
    src: image("aviondouala.avif"),
    alt: "Avion reliant la France au Cameroun"
    , fallback: '...'
  },
  paris: {
    src: image("toureifel.avif"),
    alt: "Tour Eiffel à Paris"
    , fallback: '...'
  },
  roissy: {
    src: image("ailavion.avif"),
    alt: "Avion au départ"
    , fallback: '...'
  },
  douala: {
    src: image("bateaudouala.jpeg"),
    alt: "Port et activité logistique"
    , fallback: '...'
  },
  doualaStreet: {
    src: image("lyon.jpg"),
    alt: "Zone urbaine animée"
    , fallback: '...'
  },
  cargoSea: {
    src: image("transportmaritime.avif"),
    alt: "Transport maritime de conteneurs"
    , fallback: '...'
  },
  diaspora: {
    src: image("preparation envoie.avif"),
    alt: "Préparation d'un envoi familial"
    , fallback: '...'
  },
  b2b: {
    src: image("salutation.jpg"),
    alt: "Entrepôt logistique"
    , fallback: '...'
  },
  contact: {
    src: image("service client.avif"),
    alt: "Service client WISDOM Logistics"
    , fallback: '...'
  },
  sea: {
    src: image("porte conteneur.avif"),
    alt: "Transport maritime"
    , fallback: '...'
  },
  air: {
    src: image("ailerons.avif"),
    alt: "Fret aérien"
    , fallback: '...'
  },
  airs: {
    src: image("imagepreuve.png"),
    alt: "Fret aérien"
    , fallback: '...'
  },faq: {
    src: image("faq.avif"),
    alt: "Fret aérien"
    , fallback: '...'
  },
  boxes: {
    src: image("carton et colis.avif"),
    alt: "Préparation d'envoi"
    , fallback: '...'
  },
  vehicle: {
    src: image("transport de vehicule.avif"),
    alt: "Transport de véhicule"
    , fallback: '...'
  },
  customs: {
    src: image("formaliter douaniere.avif"),
    alt: "Formalités douanières"
    , fallback: '...'
  },
  warehouse: {
    src: image("entrepot logistiqu.avif"),
    alt: "Stockage et entrepôt"
    , fallback: '...'
  },
   warehouses: {
    src: image("imagesentrepot..jpg"),
    alt: "Stockage et entrepôt"
    , fallback: '...'
  },
  moving: {
    src: image("demenagement et carton.avif"),
    alt: "Déménagement et cartons"
    , fallback: '...'
  },
  shield: {
    src: image("protection et assurance.avif"),
    alt: "Protection et assurance transport"
    , fallback: '...'
  }
} as const;

export type PhotoName = keyof typeof photos;
