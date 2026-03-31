"use client";

import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Branding */}
          <div>
            <a
              href="#"
              className="font-display text-2xl font-bold tracking-tight"
            >
              Gotowa<span className="text-accent-400">Witryna</span>
            </a>
            <p className="mt-4 text-primary-300 leading-relaxed max-w-sm">
              Profesjonalne strony internetowe dla małych firm. Z Twojego social
              media, w 24 godziny.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#proces"
                  className="text-primary-300 hover:text-accent-400 transition-colors"
                >
                  Jak to działa
                </a>
              </li>
              <li>
                <a
                  href="#co-dostajesz"
                  className="text-primary-300 hover:text-accent-400 transition-colors"
                >
                  Co dostajesz
                </a>
              </li>
              <li>
                <a
                  href="#cennik"
                  className="text-primary-300 hover:text-accent-400 transition-colors"
                >
                  Cennik
                </a>
              </li>
              <li>
                <a
                  href="#realizacje"
                  className="text-primary-300 hover:text-accent-400 transition-colors"
                >
                  Realizacje
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-primary-300 hover:text-accent-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent-400" />
                <a
                  href="mailto:kontakt@gotowawitryna.pl"
                  className="text-primary-300 hover:text-accent-400 transition-colors"
                >
                  kontakt@gotowawitryna.pl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent-400" />
                <a
                  href="tel:+48123456789"
                  className="text-primary-300 hover:text-accent-400 transition-colors"
                >
                  +48 123 456 789
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com/gotowawitryna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-800 hover:bg-accent-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/gotowawitryna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-800 hover:bg-accent-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/company/gotowawitryna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-800 hover:bg-accent-500 flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-400">
          <p>© {year} GotowaWitryna. Wszystkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <a
              href="/polityka-prywatnosci"
              className="hover:text-accent-400 transition-colors"
            >
              Polityka prywatności
            </a>
            <a
              href="/regulamin"
              className="hover:text-accent-400 transition-colors"
            >
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
