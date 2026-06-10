"use client";

import { motion } from "framer-motion";

export function BounceIcon({ icon }: { icon: string }) {
  return (
    <motion.span
      className="service-bounce-icon"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <i className={`fa-solid ${icon}`} />
    </motion.span>
  );
}
