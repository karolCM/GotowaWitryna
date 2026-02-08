"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "gw-cookie-consent";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          role="dialog"
          aria-label="Zgoda na pliki cookies"
        >
          <div className="mx-auto max-w-3xl p-6 md:p-8 rounded-2xl bg-navy-900/95 backdrop-blur-xl border border-navy-700/60 shadow-2xl shadow-black/30">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-xl bg-terracotta-500/10 text-terracotta-400 items-center justify-center mt-0.5">
                <Cookie size={20} strokeWidth={1.5} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg text-white mb-2">
                  Ta strona używa plików cookies
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  Wykorzystujemy pliki cookies, aby zapewnić prawidłowe
                  działanie strony i&nbsp;analizować ruch. Klikając
                  &bdquo;Akceptuję&rdquo;, wyrażasz zgodę na ich
                  wykorzystanie. Więcej informacji znajdziesz w&nbsp;naszej{" "}
                  <a
                    href="/polityka-prywatnosci"
                    className="text-terracotta-400 underline underline-offset-2 hover:text-terracotta-300 transition-colors"
                  >
                    polityce prywatności
                  </a>
                  .
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={accept}
                    className="px-6 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                  >
                    Akceptuję
                  </button>
                  <button
                    onClick={decline}
                    className="px-6 py-2.5 border border-navy-600 hover:border-navy-500 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300"
                  >
                    Tylko niezbędne
                  </button>
                </div>
              </div>

              <button
                onClick={decline}
                className="shrink-0 text-slate-600 hover:text-slate-400 transition-colors p-1"
                aria-label="Zamknij powiadomienie o cookies"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
