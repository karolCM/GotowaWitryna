"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check, ArrowRight, Globe, ThumbsUp } from "lucide-react";

const beforeItems = [
  "Chaotyczny profil FB",
  "Brak w Google",
  "Zero kontroli nad treścią",
  "Klienci nie mogą znaleźć oferty",
];

const afterItems = [
  "Profesjonalna strona www",
  "Widoczność w Google",
  "Pełna kontrola nad wizerunkiem",
  "Klienci trafiają prosto na ofertę",
  "Blog i lead magnety zbierają leady",
];

export default function Solution() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rozwiazanie" ref={ref} className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-bold text-orange-600 uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200">
            Nasze rozwiązanie
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-6">
            Przenosimy Twój biznes z Facebooka{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              na profesjonalną stronę
            </span>{" "}
            www.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nie musisz nic wiedzieć o technologii. Nie musisz pisać tekstów.
            Nie musisz szukać hostingu. Podajesz nam link do swojego profilu — a my
            robimy resztę.
          </p>
        </motion.div>

        {/* Before / After Comparison */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] gap-0 lg:gap-0 items-stretch max-w-5xl mx-auto">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-white rounded-2xl lg:rounded-r-none border-2 border-red-200 shadow-lg overflow-hidden flex flex-col"
          >
            {/* Card top accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-red-400 to-red-500" />

            <div className="p-8 flex flex-col flex-1">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-xl flex-shrink-0">
                  😞
                </div>
                <div>
                  <p className="text-xs font-bold text-red-500 uppercase tracking-widest">Sytuacja obecna</p>
                  <h3 className="font-display text-2xl font-bold text-gray-900">Before</h3>
                </div>
              </div>

              {/* Facebook mockup */}
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 mb-6 shadow-sm">
                {/* FB header */}
                <div className="bg-[#1877f2] px-3 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp size={14} className="text-white" />
                    <span className="text-white font-bold text-xs">Facebook</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-5 h-1.5 bg-white/30 rounded" />
                    <div className="w-5 h-1.5 bg-white/30 rounded" />
                  </div>
                </div>
                {/* FB cover */}
                <div className="h-14 bg-gradient-to-r from-blue-200 to-indigo-300" />
                {/* FB profile */}
                <div className="px-3 pb-3 -mt-5">
                  <div className="flex items-end gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white shadow" />
                    <div className="pb-1">
                      <div className="h-2 w-20 bg-gray-700 rounded mb-1" />
                      <div className="h-1.5 w-14 bg-gray-300 rounded" />
                    </div>
                  </div>
                  {/* Posts */}
                  <div className="space-y-2">
                    <div className="h-8 bg-gray-200 rounded" />
                    <div className="grid grid-cols-3 gap-1">
                      <div className="h-10 bg-gray-200 rounded" />
                      <div className="h-10 bg-gray-300 rounded" />
                      <div className="h-10 bg-gray-200 rounded" />
                    </div>
                    <div className="h-6 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="rounded-xl bg-red-50 border border-red-100 p-4 mb-6">
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-3">Klienci których tracisz</p>
                <div className="flex items-center gap-3 mb-2">
                  <Globe size={14} className="text-blue-500 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Polacy w internecie</span>
                      <span className="font-bold text-gray-800">~30M</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-blue-400 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ThumbsUp size={14} className="text-blue-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Użytkownicy Facebooka</span>
                      <span className="font-bold text-gray-800">~15M</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-blue-400 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-red-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-red-700">Pomijasz połowę Polaków</span>
                  <span className="text-lg font-black text-red-600">~15M</span>
                </div>
              </div>

              {/* List */}
              <ul className="space-y-3 mt-auto">
                {beforeItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X size={11} className="text-red-500 stroke-[3]" />
                    </div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CENTER ARROW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex items-center justify-center z-10 py-6 lg:py-0"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl shadow-orange-200 ring-4 ring-white">
              <ArrowRight size={24} className="text-white" />
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-white rounded-2xl lg:rounded-l-none border-2 border-green-200 shadow-lg overflow-hidden flex flex-col"
          >
            {/* Card top accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-green-400 to-emerald-500" />

            <div className="p-8 flex flex-col flex-1">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-xl flex-shrink-0">
                  🎉
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 uppercase tracking-widest">Z GotowaWitryna</p>
                  <h3 className="font-display text-2xl font-bold text-gray-900">After</h3>
                </div>
              </div>

              {/* Website mockup */}
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 mb-6 shadow-sm">
                {/* Browser bar */}
                <div className="bg-gray-800 px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 h-4 bg-gray-700 rounded-md flex items-center px-2">
                    <span className="text-gray-400 text-[9px]">🔒 twojafirma.pl</span>
                  </div>
                </div>
                {/* Website hero */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 text-center">
                  <div className="text-white font-bold text-xs mb-1">Twoja Firma</div>
                  <div className="h-1 w-16 bg-white/40 rounded mx-auto mb-2" />
                  <div className="h-5 w-20 bg-white/20 rounded-full mx-auto" />
                </div>
                {/* Website content */}
                <div className="p-3 bg-white space-y-2">
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="h-8 bg-orange-50 rounded border border-orange-100" />
                    <div className="h-8 bg-blue-50 rounded border border-blue-100" />
                    <div className="h-8 bg-green-50 rounded border border-green-100" />
                  </div>
                  <div className="h-6 bg-gray-100 rounded" />
                  <div className="flex gap-2">
                    <div className="flex-1 h-4 bg-gray-100 rounded" />
                    <div className="w-12 h-4 bg-orange-200 rounded" />
                  </div>
                </div>
              </div>

              {/* Google preview */}
              <div className="rounded-xl bg-green-50 border border-green-100 p-4 mb-6">
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">Widoczność w Google</p>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <div className="w-full h-full rounded bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                        <Globe size={10} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-green-700 truncate">twojafirma.pl</div>
                      <div className="text-xs font-semibold text-blue-700 leading-tight">Twoja Firma – Usługi w Twojej okolicy</div>
                      <div className="h-1.5 bg-gray-200 rounded w-4/5 mt-1" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <div className="flex">
                      {[0,1,2,3,4].map(i => (
                        <span key={i} className="text-yellow-400 text-[10px]">★</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-500">4.9 · 48 opinii</span>
                  </div>
                </div>
              </div>

              {/* List */}
              <ul className="space-y-3 mt-auto">
                {afterItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-green-600 stroke-[3]" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
