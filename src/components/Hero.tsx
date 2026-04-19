"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import { useRef, useEffect } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center bg-gradient-to-br from-white via-accent-50/30 to-primary-50 overflow-hidden"
    >
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-100/50 to-orange-200/30 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-50/40 to-blue-100/20 blur-[100px]"
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-50 to-accent-100/80 border border-accent-200 mb-8 shadow-sm"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center"
              >
                <Zap size={14} className="text-white" />
              </motion.div>
              <span className="text-sm font-semibold text-accent-700">
                Gotowa strona w 24 godziny
              </span>
            </motion.div>

            {/* Premium Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[58px] font-extrabold leading-[1.1] text-gray-900 mb-6"
            >
              Twoja firma zasługuje na{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">profesjonalną stronę</span>{" "}
              internetową.
             
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10"
            >
              Podaj nam link do Twojego profilu na Facebooku. W ciągu 24 godzin
              przygotujemy dla Ciebie gotową stronę www — z Twoimi zdjęciami,
              ofertą i opinia klientów.{" "}
              <strong className="text-gray-900">
                Bez angażowania Twojego czasu.
              </strong>{" "}
              Sprawdzisz projekt za darmo, zanim podejmiesz decyzję.
            </motion.p>

            {/* Premium CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.a
                href="#kontakt"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-4.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-500/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Otrzymaj darmowe demo
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 transition-opacity duration-300" />
              </motion.a>
              <motion.a
                href="#proces"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-10 py-4.5 border-2 border-primary-950 text-primary-950 hover:bg-primary-950 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Zobacz jak to działa
              </motion.a>
            </motion.div>

            {/* Premium Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white border border-orange-100 shadow-sm cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <Shield size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">Bez zobowiązań</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white border border-orange-100 shadow-sm cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">Gotowe w 24h</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white border border-orange-100 shadow-sm cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">Pełna obsługa techniczna</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Premium Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Phone Mockup */}
            <div className="relative w-[320px] mx-auto">
              {/* Glow effect behind phone */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-accent-400/40 to-accent-600/40 blur-3xl rounded-full"
              />

              {/* Phone frame */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-[48px] p-4 shadow-premium-xl">
                <div className="bg-white rounded-[40px] overflow-hidden">
                  {/* Phone screen content */}
                  <div className="aspect-[9/19] bg-gradient-to-b from-orange-50 via-white to-blue-50 p-5">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-5 text-xs text-gray-500">
                      <span className="font-semibold">9:41</span>
                      <div className="flex gap-1.5">
                        <div className="w-5 h-3.5 bg-gray-900 rounded-sm" />
                        <div className="w-7 h-3.5 bg-green-500 rounded-sm" />
                      </div>
                    </div>

                    {/* Mock website preview */}
                    <div className="space-y-4">
                      <div className="h-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">Salon Fryzjerski</span>
                      </div>
                      <div className="h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl" />
                      <div className="h-28 bg-white border-2 border-orange-200 rounded-2xl p-3 space-y-2.5 shadow-sm">
                        <div className="h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl" />
                        <div className="h-3 bg-gray-200 rounded" />
                        <div className="h-3 bg-gray-200 rounded w-4/5" />
                      </div>
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl" />
                        <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl" />
                        <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-20 top-24 bg-white rounded-2xl shadow-premium-lg p-5 border border-orange-100"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle size={24} className="text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Demo gotowe!</div>
                    <div className="text-xs text-orange-600 font-medium">W 24 godziny</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-16 bottom-36 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-premium-lg p-5 border border-yellow-200"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">4.9/5</div>
                    <div className="text-xs text-gray-600">średnia ocena</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Premium Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="group relative"
        >
          <div className="w-7 h-12 rounded-full border-2 border-orange-300 flex items-start justify-center p-2.5 bg-white/50 backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-3 rounded-full bg-gradient-to-b from-orange-500 to-orange-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-orange-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Przewiń
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
