"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Jak to działa", href: "#proces" },
  { label: "Co dostajesz", href: "#co-dostajesz" },
  { label: "Cennik", href: "#cennik" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl md:text-2xl font-bold text-primary-950 tracking-tight"
            aria-label="GotowaWitryna - strona główna"
          >
            Gotowa
            <span className="text-accent-500">Witryna</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-sm text-text-secondary hover:text-primary-950 transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="ml-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-accent-500/20"
            >
              Otrzymaj darmowe demo →
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary-950 p-2"
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-border"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary hover:text-primary-950 text-base py-2 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 bg-accent-500 text-white text-sm font-semibold rounded-lg text-center"
              >
                Otrzymaj darmowe demo →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
