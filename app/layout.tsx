import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PremiumRuntime } from "@/components/PremiumRuntime";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "WISDOM Logistics - Transport France Cameroun",
    template: "%s - WISDOM Logistics"
  },
  description: site.description,
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  openGraph: {
    title: "WISDOM Logistics - Transport France Cameroun",
    description: site.description,
    type: "website",
    locale: "fr_FR"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <PremiumRuntime />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
