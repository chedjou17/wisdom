"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { serviceCards, site } from "@/lib/site";

const profiles = ["Particulier", "Entreprise", "Commerçant"];
const urgencies = ["Standard", "Express", "À planifier"];

export function QuoteForm() {
  // Le découpage en étapes rend le formulaire moins lourd qu'un long formulaire unique.
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    // Chaque champ correspond directement au tableau envoye par email via FormSubmit.
    name: "",
    phone: "",
    email: "",
    profile: profiles[0],
    service: serviceCards[0].title,
    departure: "",
    destination: "",
    goods: "",
    measures: "",
    urgency: urgencies[0],
    message: "",
    consent: false
  });

  const summary = useMemo(
    // Ce resume texte facilite le diagnostic et donne une copie lisible dans l'email recu.
    () =>
      [
        `Nom: ${data.name}`,
        `Téléphone / WhatsApp: ${data.phone}`,
        `Email: ${data.email}`,
        `Profil: ${data.profile}`,
        `Service: ${data.service}`,
        `Départ: ${data.departure}`,
        `Destination: ${data.destination}`,
        `Marchandises: ${data.goods}`,
        `Poids / volume / dimensions: ${data.measures}`,
        `Urgence: ${data.urgency}`,
        `Message: ${data.message}`
      ].join("\n"),
    [data]
  );

  function update(field: keyof typeof data, value: string | boolean) {
    // Un seul updater évite de répéter la logique setState pour chaque champ.
    setData((current) => ({ ...current, [field]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    // FormSubmit fonctionne mieux avec une vraie soumission HTML qu'avec fetch/AJAX.
    // Cette methode evite les erreurs CORS et laisse FormSubmit gerer l'activation email.
    const form = document.createElement("form");
    form.method = "POST";
    form.action = `https://formsubmit.co/${encodeURIComponent(site.quoteEmail)}`;
    form.style.display = "none";

    const fields: Record<string, string> = {
      _subject: `Demande de devis - ${data.service}`,
      _template: "table",
      _captcha: "false",
      _next: `${window.location.origin}/merci`,
      nom: data.name,
      telephone_whatsapp: data.phone,
      email: data.email,
      profil: data.profile,
      service: data.service,
      ville_depart_france: data.departure,
      ville_destination_cameroun: data.destination,
      nature_marchandises: data.goods,
      poids_volume_dimensions: data.measures || "-",
      urgence: data.urgency,
      message: data.message || "-",
      resume: summary
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  }

  return (
    <div className="form-shell">
      <div className="form-steps" aria-label="Etapes du formulaire">
        {["Coordonnées", "Expédition", "Validation"].map((label, index) => (
          <span key={label} className={step === index + 1 ? "active" : ""}>
            {index + 1}. {label}
          </span>
        ))}
      </div>
      <form className="quote-form" onSubmit={submit}>
        {/* Étape 1 : identifier la personne avant de demander les détails d'expédition. */}
        {step === 1 ? (
          <div className="form-grid">
            <Field label="Nom et prénom">
              <input required value={data.name} onChange={(e) => update("name", e.target.value)} />
            </Field>
            <Field label="Téléphone / WhatsApp">
              <input required value={data.phone} onChange={(e) => update("phone", e.target.value)} />
            </Field>
            <Field label="Email">
              <input required type="email" value={data.email} onChange={(e) => update("email", e.target.value)} />
            </Field>
            <Field label="Profil">
              <select value={data.profile} onChange={(e) => update("profile", e.target.value)}>
                {profiles.map((profile) => (
                  <option key={profile}>{profile}</option>
                ))}
              </select>
            </Field>
          </div>
        ) : null}

        {/* Étape 2 : collecter les informations opérationnelles nécessaires au devis. */}
        {step === 2 ? (
          <div className="form-grid">
            <Field label="Service souhaité">
              <select value={data.service} onChange={(e) => update("service", e.target.value)}>
                {serviceCards.map((service) => (
                  <option key={service.slug}>{service.title}</option>
                ))}
              </select>
            </Field>
            <Field label="Urgence">
              <select value={data.urgency} onChange={(e) => update("urgency", e.target.value)}>
                {urgencies.map((urgency) => (
                  <option key={urgency}>{urgency}</option>
                ))}
              </select>
            </Field>
            <Field label="Ville de départ en France">
              <input required value={data.departure} onChange={(e) => update("departure", e.target.value)} />
            </Field>
            <Field label="Ville de destination au Cameroun">
              <input required value={data.destination} onChange={(e) => update("destination", e.target.value)} />
            </Field>
            <Field label="Nature des marchandises" full>
              <input required value={data.goods} onChange={(e) => update("goods", e.target.value)} />
            </Field>
            <Field label="Poids, volume, dimensions" full>
              <input value={data.measures} onChange={(e) => update("measures", e.target.value)} />
            </Field>
          </div>
        ) : null}

        {/* Étape 3 : ajouter le contexte libre et valider le consentement avant l'envoi. */}
        {step === 3 ? (
          <div className="form-grid">
            <Field label="Message libre" full>
              <textarea value={data.message} onChange={(e) => update("message", e.target.value)} />
            </Field>
            <label className="checkbox field full">
              <input
                required
                type="checkbox"
                checked={data.consent}
                onChange={(e) => update("consent", e.target.checked)}
              />
              <span>J'accepte que mes informations soient utilisées pour répondre à ma demande de devis.</span>
            </label>
            {sent ? (
              <p className="form-note">Votre demande a bien été envoyée. L'équipe vous recontactera rapidement.</p>
            ) : null}
            {error ? (
              <p className="form-error">{error}</p>
            ) : null}
          </div>
        ) : null}

        <div className="form-actions">
          {step > 1 ? (
            <button className="button button-secondary" type="button" onClick={() => setStep((value) => value - 1)}>
              Retour
            </button>
          ) : null}
          {step < 3 ? (
            <button className="button" type="button" onClick={() => setStep((value) => value + 1)}>
              Continuer
            </button>
          ) : (
            <button className="button" type="submit" disabled={sending}>
              {sending ? "Envoi en cours" : "Envoyer ma demande"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  children,
  full = false
}: {
  label: string;
  children: ReactNode;
  full?: boolean;
}) {
  return (
    <label className={full ? "field full" : "field"}>
      <span>{label}</span>
      {children}
    </label>
  );
}
