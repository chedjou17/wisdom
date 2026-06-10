"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const storyImages = {
  port: {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=82&w=1500",
    source: "https://www.freepik.com/free-photos-vectors/container-shipping"
  },
  warehouse: {
    src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=82&w=1500",
    source: "https://www.freepik.com/free-photos-vectors/logistics-warehouse"
  },
  family: {
    src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=82&w=1400",
    source: "https://www.freepik.com/free-photos-vectors/african-logistics"
  },
  cargo: {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=82&w=1500",
    source: "https://www.freepik.com/free-photos-vectors/shipping-logistics"
  },
  documents: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=82&w=1300",
    source: "https://www.freepik.com/free-photos-vectors/supply-chain"
  }
};

export type StoryImageName = keyof typeof storyImages;

export function StoryImage({
  name,
  alt,
  label,
  metric,
  className = ""
}: {
  name: StoryImageName;
  alt: string;
  label: string;
  metric?: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-26, 28]);
  const metaY = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const image = storyImages[name];

  return (
    <motion.figure
      ref={ref}
      className={`story-image ${className}`}
      initial={{ opacity: 0, y: 36, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      data-source={image.source}
    >
      <motion.img src={image.src} alt={alt} loading="lazy" decoding="async" style={{ y: imageY }} />
      <div className="story-image-shade" />
      <motion.figcaption className="story-image-meta" style={{ y: metaY }}>
        <span>{label}</span>
        {metric ? <strong>{metric}</strong> : null}
      </motion.figcaption>
    </motion.figure>
  );
}
