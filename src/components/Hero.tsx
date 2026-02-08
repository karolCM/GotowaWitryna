"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden noise-overlay">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-terracotta-500/8 blur-[120px]" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-navy-600/30 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-navy-600/50 bg-navy-900/50 backdrop-blur-sm mb-8"
          >
            <Sparkles size={14} className="text-terracotta-400" />
            <span className="text-xs font-medium text-slate-400 tracking-wide uppercase">
              Profesjonalne strony dla firm z social media
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight mb-6"
          >
            Przenosimy Twój biznes
            <br />
            z Facebooka{" "}
            <span className="relative inline-block">
              <span className="relative z-10">na profesjonalny</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-1 md:bottom-2 left-0 right-0 h-3 md:h-4 bg-terracotta-500/20 origin-left -z-0"
              />
            </span>
            <br />
            <span className="text-terracotta-400">poziom.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mb-10"
          >
            Wykorzystujemy Twoje zdjęcia i&nbsp;sukcesy z&nbsp;mediów
            społecznościowych, aby stworzyć dla Ciebie kompletną, gotową do
            sprzedaży stronę www.{" "}
            <span className="text-slate-300 font-medium">
              Bez angażowania Twojego czasu.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-500/20"
            >
              Poproś o przygotowanie mojego projektu
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#proces"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-navy-600 hover:border-navy-500 text-slate-300 hover:text-white font-medium rounded-xl transition-all duration-300"
            >
              Jak to działa?
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-14 flex items-center gap-6 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500/80" />
              Gotowy projekt w 24–48h
            </div>
            <div className="hidden sm:block w-px h-4 bg-navy-700" />
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500/80" />
              Bez zobowiązań
            </div>
            <div className="hidden md:block w-px h-4 bg-navy-700" />
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500/80" />
              Pełna obsługa techniczna
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-navy-600 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-2 rounded-full bg-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
