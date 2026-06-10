import Link from "next/link";
import { serviceCards, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <img src="/logo-real.png" alt="" className="footer-logo" />
          <h2>{site.name}</h2>
          <p>{site.tagline}</p>
        </div>
        <div>
          <h3>Services</h3>
          {serviceCards.slice(0, 6).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Accès rapide</h3>
          <Link href="/devis">Demande de devis</Link>
          <Link href="/solutions-entreprises-b2b">Solutions entreprises</Link>
          <Link href="/diaspora-particuliers">Diaspora & particuliers</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p>{site.phone}</p>
          <p>{site.email}</p>
          <p>{site.address}</p>
          <p>{site.depot}</p>
          <p>{site.hours}</p>
          <Link href={`https://wa.me/${site.whatsapp}`}>WhatsApp direct</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} WISDOM Logistics.</span>
        <span>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-confidentialite">Confidentialité</Link>
        </span>
      </div>
    </footer>
  );
}
