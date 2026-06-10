"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { site } from "@/lib/site";
import { DevisVisual } from "@/components/DevisVisual";

type SubmitState = "idle" | "sending" | "sent" | "error";

export default function Devis() {
  const router = useRouter();
  const [status, setStatus] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      formData.append("_subject", "Nouveau devis WISDOM Logistics");
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
      <section className="page-hero quote-hero">
        <div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            Devis gratuit
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Obtenez votre devis transport France — Cameroun.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Décrivez votre besoin en quelques minutes. Plus votre demande est précise, plus notre réponse sera rapide et adaptée. Nous revenons vers vous avec une solution adaptée à votre volume, votre urgence et votre budget.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <DevisVisual />
        </motion.div>
      </section>

      <section className="content-section quote-section">
        {status === "sent" ? (
          <motion.div className="form-nx quote-form-shell" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}>
            <div className="info-card">
              <i className="fa-solid fa-circle-check" />
              <h3>Demande envoyée</h3>
              <p>Votre demande de devis a bien été transmise. Nous revenons vers vous rapidement avec une proposition adaptée. Vous allez être redirigé vers l'accueil.</p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            className="form-nx quote-form-shell"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label>Nom complet <input type="text" name="nom" required placeholder="Votre nom et prénom" /></label>
            <label>Email <input type="email" name="email" required placeholder="Votre adresse email" /></label>
            <label>Téléphone / WhatsApp <input type="tel" name="telephone" placeholder="+33 6 00 00 00 00" /></label>
            <label>
              Profil
              <select name="profil">
                <option value="">Sélectionner</option>
                <option>Particulier</option>
                <option>Entreprise</option>
                <option>Commerçant</option>
              </select>
            </label>
            <label>
              Service souhaité
              <select name="type">
                <option value="">Sélectionner</option>
                <option>Colis particulier</option>
                <option>Fret maritime (FCL / LCL)</option>
                <option>Fret aérien</option>
                <option>Groupage maritime</option>
                <option>Transport de véhicule</option>
                <option>Transit douanier</option>
                <option>Déménagement international</option>
                <option>Import / Export</option>
                <option>Assurance transport</option>
                <option>Autre</option>
              </select>
            </label>
            <label className="full">Ville de départ en France <input type="text" name="depart" placeholder="Paris, Lyon, Marseille..." /></label>
            <label className="full">Destination au Cameroun <input type="text" name="destination" placeholder="Douala, Yaoundé..." /></label>
            <label className="full">
              Niveau d'urgence
              <select name="urgence">
                <option value="">Sélectionner</option>
                <option>Standard</option>
                <option>Express</option>
                <option>À planifier</option>
              </select>
            </label>
            <label className="full">Nature des marchandises, poids, volume et précisions <textarea name="description" placeholder="Décrivez votre envoi : nature des biens, poids estimé, dimensions, nombre de colis..." required /></label>
            {status === "error" ? <p className="form-error">L'envoi n'a pas abouti. Vérifiez votre connexion puis réessayez ou contactez-nous par WhatsApp.</p> : null}
            <button type="submit" className="form-submit" disabled={status === "sending"}>
              <i className="fa-solid fa-paper-plane" /> {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </motion.form>
        )}
      </section>
    </>
  );
}
