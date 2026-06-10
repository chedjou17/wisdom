// Configuration centrale de la marque et des coordonnées réutilisées dans tout le site.
function readNumber(value: string | undefined, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export const site = {
  name: "WISDOM Logistics",
  tagline:
    "Transporter vos marchandises. Simplifier votre logistique. Connecter la France au Cameroun.",
  description:
    "Transport, fret maritime, fret aérien, transit douanier et logistique France - Cameroun pour particuliers, diaspora et entreprises.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.wisdom-logistics.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "33778193567",
  phone: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+33 7 78 19 35 67",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@wisdom-logistics.com",
  quoteEmail: process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || "contact@wisdom-logistics.com",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "30 chemin de Gerocourt, 95650 Boissy-l'Aillerie",
  depot: process.env.NEXT_PUBLIC_DEPOT_LOCATION || "Dépôt sur Argenteuil",
  hours: process.env.NEXT_PUBLIC_COMPANY_HOURS || "Sur rendez-vous",
  map: {
    label: process.env.NEXT_PUBLIC_MAP_LABEL || "WISDOM Logistics",
    city: process.env.NEXT_PUBLIC_MAP_CITY || "Boissy-l'Aillerie, France",
    latitude: readNumber(process.env.NEXT_PUBLIC_MAP_LATITUDE, 49.0787),
    longitude: readNumber(process.env.NEXT_PUBLIC_MAP_LONGITUDE, 2.0326),
    zoom: readNumber(process.env.NEXT_PUBLIC_MAP_ZOOM, 13)
  }
};

export const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/solutions-entreprises-b2b", label: "Entreprises" },
  { href: "/diaspora-particuliers", label: "Particuliers" },
  { href: "/suivi-tracabilite", label: "Suivi" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export const serviceCards = [
  {
    slug: "colis-france-cameroun",
    icon: "fa-box-open",
    title: "Colis particuliers",
    text: "Envoyez cartons, bagages, documents et effets personnels vers le Cameroun."
  },
  {
    slug: "fret-maritime",
    icon: "fa-ship",
    title: "Fret maritime",
    text: "Solutions économiques FCL / LCL pour volumes importants, mobilier, palettes et conteneurs."
  },
  {
    slug: "fret-aerien",
    icon: "fa-plane-departure",
    title: "Fret aérien",
    text: "Acheminement rapide pour colis urgents, documents et marchandises sensibles au délai."
  },
  {
    slug: "groupage-maritime",
    icon: "fa-boxes-stacked",
    title: "Groupage maritime",
    text: "Consolidation de plusieurs expéditions LCL pour optimiser les coûts."
  },
  {
    slug: "transport-vehicules",
    icon: "fa-car-side",
    title: "Transport de véhicules",
    text: "Organisation d'expéditions pour berlines, SUV, 4x4 et utilitaires."
  },
  {
    slug: "transit-douanier",
    icon: "fa-file-signature",
    title: "Transit douanier",
    text: "Accompagnement documentaire, conformite et formalités import/export."
  },
  {
    slug: "stockage-entrepot",
    icon: "fa-warehouse",
    title: "Stockage & entrepôt",
    text: "Réception, consolidation, préparation et optimisation des marchandises."
  },
  {
    slug: "demenagement-international",
    icon: "fa-truck-ramp-box",
    title: "Déménagement",
    text: "Solutions pour familles et particuliers transferant leurs biens vers le Cameroun."
  },
  {
    slug: "assurance-transport",
    icon: "fa-shield-halved",
    title: "Assurance transport",
    text: "Couverture optionnelle de la valeur des marchandises pendant le trajet."
  }
];

export type ServicePage = {
  slug: string;
  title: string;
  seoTitle: string;
  meta: string;
  icon: string;
  lead: string;
  sections: { heading: string; body?: string; bullets?: string[] }[];
  cta: string;
  visual: "sea" | "air" | "boxes" | "vehicle" | "customs" | "warehouse" | "moving" | "shield";
};

export const services: ServicePage[] = [
  {
    slug: "colis-france-cameroun",
    title: "Envoyez vos colis vers le Cameroun, simplement et en sécurité",
    seoTitle: "Envoi colis France Cameroun - WISDOM Logistics",
    meta:
      "Envoyez cartons, bagages, documents et effets personnels vers le Cameroun avec un accompagnement professionnel.",
    icon: "fa-box-open",
    visual: "boxes",
    lead:
      "Vous souhaitez envoyer un carton, une valise, des documents ou des effets personnels à vos proches au Cameroun ? WISDOM Logistics s'occupe de tout. Nous accompagnons particuliers, familles et membres de la diaspora à chaque étape de leur envoi.",
    sections: [
      {
        heading: "Ce que vous pouvez envoyer",
        bullets: [
          "Cartons, valises et bagages.",
          "Documents et effets personnels.",
          "Petits équipements et marchandises légères.",
          "Colis familiaux de toute nature, hors produits réglementés."
        ]
      },
      {
        heading: "Comment ca marche",
        body:
          "Indiquez-nous la nature de votre colis, son poids estimé et sa destination : nous vous proposons la meilleure solution. Option maritime pour les envois non urgents, option aérienne pour les expéditions prioritaires. Selon l'organisation, votre colis peut être déposé ou collecte."
      }
    ],
    cta: "Estimer mon envoi de colis"
  },
  {
    slug: "fret-maritime",
    title: "Fret maritime France - Cameroun : conteneur complet et groupage",
    seoTitle: "Fret maritime France Cameroun (FCL / LCL) - WISDOM Logistics",
    meta:
      "Solutions de groupage, conteneur complet et transport maritime pour marchandises volumineuses.",
    icon: "fa-ship",
    visual: "sea",
    lead:
      "Le fret maritime est la solution la plus économique pour acheminer des volumes importants vers le Cameroun : mobilier, équipements, palettes, marchandises lourdes. WISDOM Logistics organise vos expéditions en conteneur complet ou en groupage, selon vos besoins.",
    sections: [
      {
        heading: "Deux formules",
        bullets: [
          "FCL - conteneur complet : un conteneur entièrement dédié à votre marchandise, idéal pour les gros volumes.",
          "LCL - groupage : vous partagez un conteneur avec d'autres expéditeurs et ne payez que l'espace utilisé."
        ]
      },
      {
        heading: "Accompagnement",
        body:
          "Nos équipes vous conseillent sur le choix du conteneur et l'optimisation du chargement. Vous bénéficiez d'un suivi de votre expédition jusqu'à l'arrivée au port."
      }
    ],
    cta: "Demander une cotation fret maritime"
  },
  {
    slug: "fret-aerien",
    title: "Fret aérien France - Cameroun : rapidité et sécurité",
    seoTitle: "Fret aérien France Cameroun - WISDOM Logistics",
    meta:
      "Acheminement rapide pour colis urgents, documents et marchandises sensibles aux délais.",
    icon: "fa-plane-departure",
    visual: "air",
    lead:
      "Quand le délai compte, le fret aérien est la solution. WISDOM Logistics achemine rapidement vos colis urgents, documents, équipements professionnels et marchandises sensibles au délai entre la France et le Cameroun.",
    sections: [
      {
        heading: "Vos avantages",
        bullets: [
          "Un gain de temps déterminant pour les envois prioritaires.",
          "Des unités de chargement adaptées à la nature de votre marchandise.",
          "Un parcours de devis rapide et un suivi de l'expédition.",
          "Un accompagnement sur les documents et restrictions produits."
        ]
      }
    ],
    cta: "Demander une cotation fret aérien"
  },
  {
    slug: "groupage-maritime",
    title: "Groupage maritime France - Cameroun : optimisez vos coûts",
    seoTitle: "Groupage maritime Cameroun (LCL) - WISDOM Logistics",
    meta:
      "Groupage maritime LCL pour cartons, palettes, mobilier partiel et petits volumes vers le Cameroun.",
    icon: "fa-boxes-stacked",
    visual: "boxes",
    lead:
      "Vous n'avez pas le volume nécessaire pour un conteneur complet ? Le groupage maritime vous permet de partager un conteneur avec d'autres expéditeurs et de réduire significativement vos coûts.",
    sections: [
      {
        heading: "A qui s'adresse le groupage",
        bullets: [
          "Cartons, palettes et mobilier partiel.",
          "Marchandises diverses de petit et moyen volume.",
          "Réapprovisionnements réguliers de commerçants."
        ]
      },
      {
        heading: "Organisation",
        body:
          "Nous organisons des départs programmés et prenons en charge l'empotage, la consolidation et le dépotage à l'arrivée."
      }
    ],
    cta: "Estimer mon expédition en groupage"
  },
  {
    slug: "transport-vehicules",
    title: "Expédiez votre véhicule de la France vers le Cameroun",
    seoTitle: "Transport de véhicules France Cameroun - WISDOM Logistics",
    meta:
      "Expedition de berlines, SUV, 4x4 et utilitaires en conventionnel ou conteneurisé.",
    icon: "fa-car-side",
    visual: "vehicle",
    lead:
      "WISDOM Logistics organise l'expédition de votre véhicule vers le Cameroun : berline, SUV, 4x4 ou utilitaire. Nous vous accompagnons sur le mode de transport le plus adapté et sur les documents nécessaires.",
    sections: [
      {
        heading: "Informations utiles pour votre devis",
        bullets: [
          "Marque, modèle et année du véhicule.",
          "Dimensions approximatives et etat roulant ou non roulant.",
          "Mode souhaité : transport conventionnel RoRo ou conteneurisé.",
          "Documents à prévoir : carte grise, pièce d'identité, informations d'exportation."
        ]
      }
    ],
    cta: "Demander un devis pour mon véhicule"
  },
  {
    slug: "transit-douanier",
    title: "Transit douanier France - Cameroun : sécurisez vos opérations",
    seoTitle: "Transit douanier Cameroun - Import Export - WISDOM Logistics",
    meta:
      "Accompagnement documentaire, formalités et coordination douanière France - Cameroun.",
    icon: "fa-file-signature",
    visual: "customs",
    lead:
      "Le passage en douane est une étape sensible de toute expédition internationale. WISDOM Logistics vous accompagne dans la préparation documentaire et les formalités, à l'import comme à l'export, pour éviter retards et pénalités.",
    sections: [
      {
        heading: "Notre accompagnement",
        bullets: [
          "Preparation et soumission des documents : déclaration en douane, facture commerciale, certificat d'origine.",
          "Conseil sur les formalités et la réglementation import/export.",
          "Coordination avec les acteurs de la chaîne logistique.",
          "Réduction des risques d'erreur et des immobilisations."
        ]
      }
    ],
    cta: "Être accompagne sur mes formalités douanières"
  },
  {
    slug: "stockage-entrepot",
    title: "Stockage et préparation de vos marchandises avant expédition",
    seoTitle: "Stockage et entrepôt export Cameroun - WISDOM Logistics",
    meta:
      "Réception, stockage temporaire, consolidation, préparation et optimisation du chargement à l'export.",
    icon: "fa-warehouse",
    visual: "warehouse",
    lead:
      "Avant le départ, vos marchandises peuvent être reçues, regroupées et préparées dans nos solutions de stockage. Un service particulièrement utile pour les commerçants et expéditeurs réguliers.",
    sections: [
      {
        heading: "Nos prestations",
        bullets: [
          "Réception et identification des marchandises.",
          "Stockage temporaire avant départ.",
          "Consolidation de plusieurs colis et préparation de commandes.",
          "Empotage, étiquetage et optimisation du chargement à l'export."
        ]
      }
    ],
    cta: "Discuter de mes besoins de stockage"
  },
  {
    slug: "demenagement-international",
    title: "Votre déménagement de la France vers le Cameroun",
    seoTitle: "Déménagement France Cameroun - WISDOM Logistics",
    meta:
      "Déménagement international pour familles et particuliers vers le Cameroun.",
    icon: "fa-truck-ramp-box",
    visual: "moving",
    lead:
      "Vous transférez votre vie ou celle de votre famille vers le Cameroun ? WISDOM Logistics organise votre déménagement international : mobilier, électroménager, cartons et effets personnels.",
    sections: [
      {
        heading: "Notre accompagnement",
        bullets: [
          "Évaluation du volume et conseils d'emballage.",
          "Transport de mobilier, électroménager, cartons et effets personnels.",
          "Solutions partagées ou dédiées selon le volume.",
          "Accompagnement documentaire pour vos effets personnels."
        ]
      }
    ],
    cta: "Preparer mon déménagement vers le Cameroun"
  },
  {
    slug: "assurance-transport",
    title: "Assurance transport : protégez la valeur de vos marchandises",
    seoTitle: "Assurance transport marchandises - WISDOM Logistics",
    meta:
      "Couverture optionnelle de la valeur des marchandises pendant leur acheminement.",
    icon: "fa-shield-halved",
    visual: "shield",
    lead:
      "Pour une tranquillité d'esprit totale, WISDOM Logistics vous propose une assurance transport optionnelle couvrant la valeur de vos marchandises pendant leur acheminement, en complément des responsabilités du transporteur.",
    sections: [
      {
        heading: "Ce que cela vous apporte",
        bullets: [
          "Une couverture ad valorem calculée sur la valeur déclarée.",
          "Un conseil sur le niveau de couverture adapté à votre envoi.",
          "Une sérénité accrue pour les marchandises sensibles ou de valeur."
        ]
      }
    ],
    cta: "Ajouter une assurance à mon expédition"
  }
];

export const processSteps = [
  ["Analyse du besoin", "Type de marchandise, volume, urgence et destination."],
  ["Cotation", "Solution adaptée : maritime, aérien, groupage, véhicule ou déménagement."],
  ["Collecte / dépôt", "Marchandise déposée ou prise en charge selon l'organisation retenue."],
  ["Preparation", "Identification, consolidation, emballage et documents si nécessaire."],
  ["Transport", "Acheminement international par voie maritime, aérienne ou combinee."],
  ["Douane", "Formalites, coordination et suivi opérationnel."],
  ["Livraison finale", "Remise au destinataire ou organisation du dernier kilomêtre."]
];

export const faq = [
  [
    "Comment obtenir un devis ?",
    "Remplissez le formulaire en ligne ou contactez-nous par WhatsApp en précisant la nature, le poids, le volume et la destination de votre envoi. Nous revenons vers vous avec une solution adaptée."
  ],
  [
    "Quelle différence entre fret maritime et fret aérien ?",
    "Le maritime est plus économique et adapté aux volumes importants, avec un délai plus long. L'aérien est plus rapide, recommandé pour les envois urgents ou sensibles au délai."
  ],
  [
    "Qu'est-ce que le groupage LCL ?",
    "Le groupage consolide plusieurs envois dans un même conteneur. Vous ne payez que pour l'espace utilisé, ce qui reduit le coût pour les petits volumes."
  ],
  [
    "Puis-je envoyer un véhicule au Cameroun ?",
    "Oui. WISDOM organise l'expédition de berlines, SUV, 4x4 et utilitaires, en conventionnel ou conteneurisé, avec accompagnement documentaire."
  ],
  [
    "Mes marchandises sont-elles assurées ?",
    "Une assurance transport optionnelle peut couvrir la valeur de vos marchandises. Nous vous conseillons sur le niveau de couverture lors du devis."
  ],
  [
    "Quels documents dois-je fournir ?",
    "Selon l'envoi : pièce d'identité, liste de contenu, et pour les véhicules la carte grise. Pour les entreprises, facture commerciale et documents douaniers."
  ],
  [
    "Livrez-vous jusqu'au destinataire au Cameroun ?",
    "Selon la zone, nous coordonnons la livraison finale ou la remise au destinataire, notamment à Douala, Yaoundé et au-delà selon coordination locale."
  ],
  [
    "Quels sont les délais ?",
    "Ils dépendent du mode de transport et des départs programmés. Une fourchette indicative vous est communiquée avec le devis."
  ]
];

