"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-[128px]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container-custom relative z-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Branding */}
          <div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="font-display text-2xl font-bold tracking-tight inline-block"
            >
              Gotowa<span className="text-accent-400">Witryna</span>
            </motion.a>
            <p className="mt-4 text-primary-300 leading-relaxed max-w-sm">
              Profesjonalne strony internetowe dla małych firm. Z Twojego social
              media, w 24 godziny.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-800/50 border border-primary-700">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-primary-300">SSL Secure</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-800/50 border border-primary-700">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-primary-300">GDPR Ready</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent-400">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="#proces"
                  className="text-primary-300 hover:text-accent-400 transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  Jak to działa
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="#co-dostajesz"
                  className="text-primary-300 hover:text-accent-400 transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  Co dostajesz
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="#cennik"
                  className="text-primary-300 hover:text-accent-400 transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  Cennik
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="#realizacje"
                  className="text-primary-300 hover:text-accent-400 transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  Realizacje
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="#faq"
                  className="text-primary-300 hover:text-accent-400 transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  FAQ
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent-400">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500/20 to-accent-600/20 flex items-center justify-center border border-accent-500/30">
                  <Mail size={18} className="text-accent-400" />
                </div>
                <a
                  href="mailto:kontakt@gotowawitryna.pl"
                  className="text-primary-300 hover:text-accent-400 transition-colors font-medium"
                >
                  kontakt@gotowawitryna.pl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500/20 to-accent-600/20 flex items-center justify-center border border-accent-500/30">
                  <Phone size={18} className="text-accent-400" />
                </div>
                <a
                  href="tel:+48123456789"
                  className="text-primary-300 hover:text-accent-400 transition-colors font-medium"
                >
                  +48 123 456 789
                </a>
              </li>
            </ul>

            {/* Premium Social Icons */}
            <div className="flex gap-3 mt-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com/gotowawitryna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-primary-800 hover:bg-gradient-to-br hover:from-accent-500 hover:to-accent-600 flex items-center justify-center transition-all duration-300 border border-primary-700 hover:border-accent-500 group"
                aria-label="Facebook"
              >
                <Facebook size={18} className="group-hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/gotowawitryna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-primary-800 hover:bg-gradient-to-br hover:from-accent-500 hover:to-accent-600 flex items-center justify-center transition-all duration-300 border border-primary-700 hover:border-accent-500 group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="group-hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/company/gotowawitryna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-primary-800 hover:bg-gradient-to-br hover:from-accent-500 hover:to-accent-600 flex items-center justify-center transition-all duration-300 border border-primary-700 hover:border-accent-500 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:text-white transition-colors" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Premium Bottom Bar */}
        <div className="pt-8 border-t border-primary-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-primary-400">
            © {year} GotowaWitryna. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <motion.a
              whileHover={{ y: -1 }}
              href="/polityka-prywatnosci"
              className="text-primary-400 hover:text-accent-400 transition-colors"
            >
              Polityka prywatności
            </motion.a>
            <motion.a
              whileHover={{ y: -1 }}
              href="/regulamin"
              className="text-primary-400 hover:text-accent-400 transition-colors"
            >
              Regulamin
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
