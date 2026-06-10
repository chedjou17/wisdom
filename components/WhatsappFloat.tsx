import { site } from "@/lib/site";

export function WhatsappFloat() {
  // 1. Écrivez votre message normalement ici
  const messageText = "Bonjour WISDOM Logistics, je souhaiterais obtenir des informations concernant vos services de transport.";
  
  // 2. Encodez le texte pour nettoyer les espaces, accents et caractères spéciaux en format URL
  const encodedMessage = encodeURIComponent(messageText);

  return (
    <a
      className="wa-float"
      // 3. Ajoutez le paramètre ?text= à la fin de l'URL wa.me
      href={`https://wa.me/${site.whatsapp}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp WISDOM Logistics"
    >
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}