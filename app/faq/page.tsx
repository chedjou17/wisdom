"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faq } from "@/lib/site";
import { ImageSlot } from "@/components/ImageSlot";
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="page-hero faq-hero">
        <div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>FAQ</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Les réponses essentielles avant votre envoi.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Délais, groupage, documents, véhicules, assurance et livraison : les points à connaître pour préparer votre transport France - Cameroun.
          </motion.p>
        </div>
        <ImageSlot name="faq" alt="Suivi d'expédition France Cameroun WISDOM Logistics" priority />
      </section>
      <section className="faq-section">
        {faq.map(([q, a], i) => (
          <motion.div
            key={q}
            className="faq-item"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            <button onClick={() => setOpen(open === i ? null : i)}>
              {q}
              <motion.i className="fa-solid fa-chevron-down" animate={{ rotate: open === i ? 180 : 0 }} />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                  {a}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>
    </>
  );
}
