import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Logistique entreprise France Cameroun - WISDOM Logistics"
};

export default function BusinessRedirectPage() {
  permanentRedirect("/solutions-entreprises-b2b");
}
