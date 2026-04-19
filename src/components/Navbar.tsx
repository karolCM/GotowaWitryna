"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Jak to działa", anchor: "proces" },
  { label: "Co dostajesz", anchor: "co-dostajesz" },
  { label: "Cennik", anchor: "cennik" },
  { label: "Realizacje", anchor: "realizacje" },
  { label: "FAQ", anchor: "faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // On any page other than the homepage we need absolute anchors (/#section)
  const isHome = pathname === "/";
  const prefix = isHome ? "" : "/";

  const href = (anchor: string) => `${prefix}#${anchor}`;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-orange-100/50 shadow-sm"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — always goes to homepage */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            className="font-display text-xl md:text-2xl font-bold text-gray-900 tracking-tight"
            aria-label="GotowaWitryna - strona główna"
          >
            Gotowa
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Witryna</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.anchor}
                href={href(link.anchor)}
                whileHover={{ y: -2 }}
                className="link-underline text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium cursor-pointer"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ml-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/30"
            >
              Otrzymaj darmowe demo →
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-900 p-2 cursor-pointer"
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
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
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-orange-100"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.anchor}
                  href={href(link.anchor)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-600 hover:text-gray-900 text-base py-3 px-4 rounded-lg hover:bg-orange-50 transition-all font-medium cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-xl text-center shadow-md"
              >
                Otrzymaj darmowe demo →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
