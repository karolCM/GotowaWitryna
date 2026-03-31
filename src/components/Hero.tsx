"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Monitor, CheckCircle } from "lucide-react";
import { useRef, useEffect } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden"
    >
      {/* Background gradient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent-50 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-50 blur-[80px]" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 mb-6"
            >
              <span className="text-accent-500">⚡</span>
              <span className="text-sm font-semibold text-accent-600">
                Gotowa strona w 24 godziny
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-primary-950 mb-6"
            >
              Twoja firma zasługuje na{" "}
              <span className="text-accent-500">profesjonalną stronę</span>{" "}
              internetową.
              <br />
              My ją zbudujemy — z tego, co już masz.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8"
            >
              Podaj nam link do Twojego profilu na Facebooku. W ciągu 24 godzin
              przygotujemy dla Ciebie gotową stronę www — z Twoimi zdjęciami,
              ofertą i opinia klientów. <strong className="text-text-primary">
                Bez angażowania Twojego czasu.
              </strong>{" "}
              Sprawdzisz projekt za darmo, zanim podejmiesz decyzję.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20"
              >
                Otrzymaj darmowe demo
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#proces"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-950 text-primary-950 hover:bg-primary-950 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Zobacz jak to działa ↓
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-text-secondary"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-success flex-shrink-0" />
                <span>Bez zobowiązań</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-success flex-shrink-0" />
                <span>Gotowe w 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-success flex-shrink-0" />
                <span>Pełna obsługa techniczna</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Phone Mockup */}
            <div className="relative w-[280px] mx-auto">
              {/* Phone frame */}
              <div className="relative bg-primary-950 rounded-[40px] p-3 shadow-2xl">
                <div className="bg-white rounded-[32px] overflow-hidden">
                  {/* Phone screen content */}
                  <div className="aspect-[9/19] bg-gradient-to-b from-accent-50 to-white p-4">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-3 bg-primary-900 rounded-sm" />
                        <div className="w-6 h-3 bg-success rounded-sm" />
                      </div>
                    </div>

                    {/* Mock website preview */}
                    <div className="space-y-3">
                      <div className="h-20 bg-primary-950 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Salon Fryzjerski</span>
                      </div>
                      <div className="h-16 bg-accent-100 rounded-lg" />
                      <div className="h-24 bg-white border-2 border-accent-200 rounded-xl p-2 space-y-2">
                        <div className="h-8 bg-accent-500 rounded-lg" />
                        <div className="h-3 bg-gray-200 rounded" />
                        <div className="h-3 bg-gray-200 rounded w-3/4" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-square bg-accent-100 rounded-lg" />
                        <div className="aspect-square bg-accent-100 rounded-lg" />
                        <div className="aspect-square bg-accent-100 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-16 top-20 bg-white rounded-xl shadow-xl p-4 border border-accent-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-950 text-sm">Demo gotowe!</div>
                    <div className="text-xs text-text-secondary">W 24 godziny</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 bottom-32 bg-white rounded-xl shadow-xl p-4 border border-yellow-200"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <div className="font-semibold text-primary-950 text-sm">4.9/5</div>
                    <div className="text-xs text-text-secondary">średnia ocena</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary-300 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
