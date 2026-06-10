"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (val) => setScrolled(val > 60));

  return (
    <motion.header
      className={`nx-header${scrolled ? " nx-header-scrolled" : ""}${open ? " nx-header-open" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    > 
      <Link className="nx-brand" href="/" aria-label="WISDOM Logistics">
        <div className="nx-back">
          <img src="/logo.svg" alt="WISDOM Logo" className="nx-brand-logo" />
        </div>
        <span>
          <strong>WISDOM</strong>
          <small>France - Cameroun</small>
        </span>
      </Link>

      <nav className="nx-nav">
        {navItems.slice(0, 7).map((item) => (
          <Link key={item.href} href={item.href} className={`nx-nav-link${pathname === item.href ? " active" : ""}`}>
            {item.label}
            {pathname === item.href && <motion.span className="nx-nav-dot" layoutId="nav-dot" />}
          </Link>
        ))}
      </nav>

      <div className="nx-header-right">
        <Link href="/devis" className="nx-header-cta">
          <i className="fa-solid fa-paper-plane" />
          <span>Devis gratuit</span>
        </Link>
        <button className="nx-burger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} />
          <motion.span animate={{ opacity: open ? 0 : 1 }} />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nx-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="nx-menu-inner">
              <div className="nx-menu-links">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link href={item.href} className="nx-menu-link" onClick={() => setOpen(false)}>
                      <span className="nx-menu-num">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
                  <Link href="/devis" className="nx-menu-cta" onClick={() => setOpen(false)}>
                    Demander un devis <i className="fa-solid fa-arrow-right" />
                  </Link>
                </motion.div>
              </div>
              <div className="nx-menu-meta">
                <p>{site.phone}</p>
                <p>{site.email}</p>
                <p className="nx-menu-label">France - Cameroun</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}