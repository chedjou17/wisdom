"use client";

import { motion } from "framer-motion";
import { photos, type PhotoName } from "@/lib/photos";
import { SmartImage } from "@/components/SmartImage";

const imageMap = {
  hero: photos.hero,
  services: photos.warehouse,
  b2b: photos.b2b,
  diaspora: photos.diaspora,
  contact: photos.contact,
  sea: photos.sea,
  air: photos.air,
  boxes: photos.boxes,
  vehicle: photos.vehicle,
  customs: photos.customs,
  warehouse: photos.warehouse,
  moving: photos.moving,
  shield: photos.shield,
  paris: photos.paris,
  douala: photos.douala,
  roissy: photos.roissy,
  "cargo-sea": photos.cargoSea
} satisfies Record<string, { src: string; alt: string; fallback?: string }>;

export type ImageSlotName = keyof typeof imageMap | PhotoName;

export function ImageSlot({
  name,
  alt,
  compact = false,
  className = "",
  priority = false
}: {
  name: ImageSlotName;
  alt?: string;
  compact?: boolean;
  className?: string;
  priority?: boolean;
}) {
  const image = imageMap[name as keyof typeof imageMap] ?? photos[name as PhotoName];

  return (
    <motion.figure
      className={`${compact ? "image-slot image-slot-compact" : "image-slot"} ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <SmartImage
        src={image.src}
        fallback={image.fallback}
        alt={alt ?? image.alt}
        width={1200}
        height={820}
        loading={priority ? "eager" : "lazy"}
      />
    </motion.figure>
  );
}
