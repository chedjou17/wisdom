const collageItems = [
  {
    label: "Paris, collecte",
    src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=72&w=900",
    className: "collage-item collage-item-a"
  },
  {
    label: "Port, consolidation",
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=72&w=1000",
    className: "collage-item collage-item-b"
  },
  {
    label: "Douane, contrôle",
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=72&w=760",
    className: "collage-item collage-item-c"
  },
  {
    label: "Douala, livraison",
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=72&w=900",
    className: "collage-item collage-item-d"
  }
];

export function EditorialCollage() {
  return (
    <section className="editorial-collage">
      <div className="collage-statement">
        <span>Opérations coordonnées</span>
        <p>
          Un parcours clair, du premier échange jusqu'à la livraison finale.
        </p>
      </div>
      {collageItems.map((item) => (
        <figure className={item.className} key={item.label}>
          <figcaption>{item.label}</figcaption>
          <img src={item.src} alt={item.label} loading="lazy" decoding="async" />
        </figure>
      ))}
    </section>
  );
}

export function AudienceGateway() {
  return (
    <section className="audience-gateway">
      <div className="gateway-panel gateway-panel-private">
        <span>Particuliers & diaspora</span>
        <h2>Envoyer sans complexité</h2>
        <p>Colis, bagages, effets personnels et accompagnement clair pour vos proches au Cameroun.</p>
        <a href="/diaspora-particuliers">Voir les solutions</a>
      </div>
      <div className="gateway-panel gateway-panel-business">
        <span>Entreprises & flux B2B</span>
        <h2>Structurer vos opérations</h2>
        <p>Groupage, import/export, stockage, documentation et suivi pour vos flux réguliers.</p>
        <a href="/solutions-entreprises-b2b">Découvrir l'offre</a>
      </div>
    </section>
  );
}
