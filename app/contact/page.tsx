"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ImageSlot } from "@/components/ImageSlot";
import { site } from "@/lib/site";

type SubmitState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const router = useRouter();
  const [status, setStatus] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      formData.append("_subject", "Contact WISDOM Logistics");
      formData.append("_captcha", "false");

      await fetch(`https://formsubmit.co/ajax/${site.quoteEmail}`, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      form.reset();
      setStatus("sent");
      window.setTimeout(() => router.push("/"), 2400);
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="page-hero contact-hero">
        <div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            Contact
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Contactez WISDOM Logistics.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Une question, un projet d'expédition ou une demande de devis ? Notre équipe vous répond rapidement. Le moyen le plus simple pour échanger avec nous reste WhatsApp.
          </motion.p>
        </div>
        <ImageSlot name="contact" alt="Équipe WISDOM Logistics disponible par WhatsApp et téléphone" priority />
      </section>

      <section className="contact-grid">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <h2>Nous joindre</h2>
          {[
            ["fa-phone", "Téléphone", site.phone],
            ["fa-envelope", "Email", site.email],
            ["fa-location-dot", "Adresse", site.address],
            ["fa-clock", "Horaires", site.hours]
          ].map(([icon, label, value]) => (
            <div key={label} className="contact-line">
              <div className="svc-card-icon">
                <i className={`fa-solid ${icon}`} />
              </div>
              <div>
                <p>{label}</p>
                <strong>{value}</strong>
              </div>
            </div>
          ))}
          <a
            href={`https://wa.me/${site.whatsapp}`}
            className="button button-primary contact-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp" /> Nous écrire sur WhatsApp
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <h2>Envoyer un message</h2>
          {status === "sent" ? (
            <div className="form-nx">
              <div className="info-card">
                <i className="fa-solid fa-circle-check" />
                <h3>Message envoyé</h3>
                <p>Votre message est bien parti. Notre équipe vous contacte rapidement. Vous allez être redirigé vers l'accueil.</p>
              </div>
            </div>
          ) : (
            <form className="form-nx" onSubmit={handleSubmit}>
              <label>Nom <input type="text" name="nom" required placeholder="Votre nom" /></label>
              <label>Email <input type="email" name="email" required placeholder="Votre adresse email" /></label>
              <label className="full">Sujet <input type="text" name="sujet" placeholder="Objet de votre demande" /></label>
              <label className="full">Message <textarea name="message" required placeholder="Décrivez votre demande ou votre projet d'expédition..." /></label>
              {status === "error" ? <p className="form-error">L'envoi n'a pas abouti. Vérifiez votre connexion puis réessayez.</p> : null}
              <button type="submit" className="form-submit" disabled={status === "sending"}>
                <i className="fa-solid fa-paper-plane" /> {status === "sending" ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </>
  );
}
