"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SmartImage } from "@/components/SmartImage";
import { photos } from "@/lib/photos";
import { serviceCards, site, processSteps } from "@/lib/site";
import { RouteTracker } from "@/components/RouteTracker";

const storySteps = [
  {
    step: "01",
    label: "Collecte en France",
    title: "Chaque expédition commence par une analyse claire du besoin.",
    text: "Nature des marchandises, volume, urgence et destination : nous identifions la solution adaptée avant tout mouvement.",
    image: photos.paris
  },
  {
    step: "02",
    label: "Choix du transport",
    title: "Aérien pour l'urgence, maritime pour les volumes.",
    text: "Fret aérien pour les envois prioritaires, maritime ou groupage pour les volumes plus importants. La solution est choisie selon votre budget et votre délai.",
    image: photos.roissy
  },
  {
    step: "03",
    label: "Traversée atlantique",
    title: "Votre marchandise est suivie à chaque étape du trajet.",
    text: "Embarquement, transit, suivi opérationnel : vous êtes informé aux points clés du parcours.",
    image: photos.cargoSea
  },
  {
    step: "04",
    label: "Douane Cameroun",
    title: "Un accompagnement documentaire complet à l'arrivée.",
    text: "Déclaration, conformité et coordination avec les acteurs locaux pour éviter retards et blocages.",
    image: photos.customs
  },
  {
    step: "05",
    label: "Distribution à Douala",
    title: "La logistique locale prend le relais depuis Douala.",
    text: "Déconsolidation, organisation du dernier kilomètre et remise au destinataire selon les zones couvertes.",
    image: photos.douala
  },
  {
    step: "06",
    label: "Livraison confirmée",
    title: "Le parcours se clôture avec une confirmation claire.",
    text: "Remise au destinataire et confirmation de livraison : le cycle est complet, du devis à la livraison finale.",
    image: photos.boxes
  }
];

function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function JourneyStory() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".journey-step-panel").forEach((panel) => {
        const number = panel.querySelector(".journey-step-number");
        const copy = panel.querySelector(".journey-step-copy");
        const media = panel.querySelector(".journey-step-media");

        gsap.fromTo(number, { autoAlpha: 0, x: -42 }, {
          autoAlpha: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: panel, start: "top 72%" }
        });
        gsap.fromTo(copy, { autoAlpha: 0, y: 54 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.82,
          ease: "power3.out",
          scrollTrigger: { trigger: panel, start: "top 68%" }
        });
        gsap.fromTo(media, { autoAlpha: 0, y: 80, scale: 0.96 }, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: { trigger: panel, start: "top 66%" }
        });
      });
    }, ref);

    return () => context.revert();
  }, []);

  return (
    <section className="journey-scroll-section" ref={ref}>
      <Reveal className="section-intro journey-scroll-intro">
        <p className="eyebrow">Processus de prise en charge</p>
        <h2>De la collecte en France à la livraison au Cameroun.</h2>
        <p>Un accompagnement complet : conseil, collecte, transport, douane et remise finale au destinataire.</p>
      </Reveal>
      <div className="journey-step-list">
        {storySteps.map((item, index) => (
          <article className="journey-step-panel" key={item.step}>
            <div className="journey-step-number">{item.step}</div>
            <div className="journey-step-copy">
              <p className="eyebrow">{item.label}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <div className="journey-step-media">
              <SmartImage src={item.image.src} alt={item.image.alt} width={1200} height={820} loading={index === 0 ? "eager" : "lazy"} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyWisdom() {
  const cards = [
    {
      image: photos.diaspora,
      kicker: "Particuliers & diaspora",
      title: "Un service humain pour les envois familiaux vers le Cameroun.",
      text: "Cartons, bagages, effets personnels : nous guidons chaque étape et répondons rapidement, y compris par WhatsApp."
    },
    {
      image: photos.b2b,
      kicker: "Entreprises",
      title: "Un partenaire structuré pour les flux commerciaux réguliers.",
      text: "Départs programmés, documentation maîtrisée, optimisation des coûts et interlocuteur dédié pour chaque compte."
    },
    {
      image: photos.douala,
      kicker: "Couverture Cameroun",
      title: "Douala et Yaoundé en priorité, au-delà selon coordination locale.",
      text: "Douane, distribution et dernier kilomètre : le réseau local complète la chaîne jusqu'au destinataire final."
    }
  ];

  return (
    <section className="visual-proof-section">
      <Reveal className="section-intro">
        <p className="eyebrow">Pourquoi WISDOM Logistics</p>
        <h2>Spécialiste de l'axe France — Cameroun.</h2>
        <p>Un seul corridor maîtrisé : fret maritime, fret aérien, transit douanier, véhicules, déménagement et logistique entreprise.</p>
      </Reveal>
      <div className="visual-proof-grid">
        {cards.map((card, index) => (
          <motion.article
            className={index === 1 ? "visual-proof-card wide" : "visual-proof-card"}
            key={card.title}
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.78, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <SmartImage src={card.image.src} alt={card.image.alt} width={980} height={720} />
            <div>
              <span>{card.kicker}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function serviceImage(slug: string) {
  if (slug.includes("maritime") || slug.includes("groupage")) return photos.cargoSea;
  if (slug.includes("aerien")) return photos.air;
  if (slug.includes("vehicules")) return photos.vehicle;
  if (slug.includes("douanier")) return photos.customs;
  if (slug.includes("stockage")) return photos.warehouse;
  if (slug.includes("demenagement")) return photos.moving;
  if (slug.includes("assurance")) return photos.shield;
  return photos.boxes;
}

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let raf = 0;
    let last = performance.now();
    let paused = false;

    const tick = (now: number) => {
      const delta = now - last;
      last = now;
      if (!paused) {
        carousel.scrollLeft += delta * 0.045;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 2) {
          carousel.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };

    carousel.addEventListener("mouseenter", pause);
    carousel.addEventListener("mouseleave", resume);
    carousel.addEventListener("touchstart", pause, { passive: true });
    carousel.addEventListener("touchend", resume);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      carousel.removeEventListener("mouseenter", pause);
      carousel.removeEventListener("mouseleave", resume);
      carousel.removeEventListener("touchstart", pause);
      carousel.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bridge-hero apple-hero hero-wow">
        <div className="hero-content">
          <motion.div className="country-pair" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span><img src="/images/flag-france.svg" alt="" /> France</span>
            <i />
            <span><img src="/images/flag-cameroon.svg" alt="" /> Cameroun</span>
          </motion.div>
          <motion.p className="hero-kicker" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Transport & logistique internationale
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
            Votre partenaire transport & logistique entre la France et le Cameroun.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Fret maritime, fret aérien, groupage, transport de véhicules, transit douanier, déménagement et logistique entreprise : WISDOM Logistics accompagne particuliers, diaspora et entreprises du devis à la livraison finale.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44 }}>
            <Link href="/devis" className="button button-primary">Obtenir un devis</Link>
            <Link href="/services" className="button button-secondary">Découvrir nos services</Link>
          </motion.div>
        </div>
        <motion.div className="hero-photo-stage" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <SmartImage src={photos.hero.src} alt={photos.hero.alt} width={1400} height={1100} loading="eager" />
          <div className="hero-proof-card">
            <span>France</span>
            <strong>Cameroun</strong>
            <small>Un interlocuteur dédié, du devis à la livraison.</small>
          </div>
        </motion.div>
      </section>

      {/* PROCESS */}
      <JourneyStory />

      {/* ROUTE TRACKER */}
      <RouteTracker />

      {/* IDENTITY */}
      <section className="identity-section">
        <Reveal className="section-intro">
          <p className="eyebrow">Nos engagements</p>
          <h2>Une spécialisation claire sur l'axe France — Cameroun.</h2>
          <p>WISDOM Logistics organise, sécurise et simplifie vos expéditions grâce à des solutions fiables, structurées et adaptées à chaque besoin.</p>
        </Reveal>
        <div className="identity-grid">
          <Reveal className="identity-visual" delay={0.08}>
            <SmartImage src={photos.paris.src} alt={photos.paris.alt} width={900} height={620} />
            <div>
              <span>France</span>
              <strong>Collecte, dépôt et consolidation</strong>
            </div>
          </Reveal>
          <Reveal className="identity-visual" delay={0.16}>
            <SmartImage src={photos.douala.src} alt={photos.douala.alt} width={900} height={620} />
            <div>
              <span>Cameroun</span>
              <strong>Douane, distribution et livraison finale</strong>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY WISDOM */}
      <WhyWisdom />

      {/* SERVICES */}
      <section className="services-showcase">
        <Reveal className="section-intro">
          <p className="eyebrow">Nos services</p>
          <h2>Une solution pour chaque besoin d'expédition.</h2>
          <p>Colis familial, fret aérien, maritime, groupage, véhicule, transit douanier, stockage ou déménagement international.</p>
        </Reveal>
        <div className="service-carousel" ref={carouselRef} aria-label="Services WISDOM Logistics">
          {serviceCards.map((card) => {
            const photo = serviceImage(card.slug);
            return (
              <Link href={`/services/${card.slug}`} className="service-tile image-service-tile" key={card.slug}>
                <SmartImage src={photo.src} alt="" width={520} height={360} />
                <span className="service-tile-shade" />
                <i className={`fa-solid ${card.icon}`} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div>
          <p className="eyebrow">Prêt à expédier ?</p>
          <h2>Décrivez votre besoin, nous organisons le reste.</h2>
          <p>Un conseiller vous aide à choisir la solution adaptée au volume, au délai et à la destination finale au Cameroun.</p>
        </div>
        <div className="final-actions">
          <Link href="/devis" className="button button-primary">Obtenir un devis</Link>
          <a href={`https://wa.me/${site.whatsapp}`} className="button button-secondary" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp" /> WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
