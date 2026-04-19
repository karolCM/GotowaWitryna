"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ThumbsUp, Layout, Globe, FileText } from "lucide-react";

const beforeItems = [
  "Chaotyczny profil FB",
  "Brak w Google",
  "Zero kontroli nad treścią",
  "Klienci nie mogą znaleźć oferty",
];

// Statystyki dla sekcji Before
const stats = {
  internetUsers: {
    value: "30M+",
    label: "Polaków korzysta z internetu",
    icon: Globe,
  },
  facebookUsers: {
    value: "~15M",
    label: "aktywnych użytkowników Facebooka",
    icon: ThumbsUp,
  },
  lostCustomers: {
    value: "~15M",
    label: "potencjalnych klientów pomijanych",
    icon: () => (
      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
        <span className="text-red-500 text-xs font-bold">!</span>
      </div>
    ),
  },
};

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
    <section id="rozwiazanie" ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-bold text-orange-600 uppercase tracking-wider mb-4">
            Nasze rozwiązanie
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-6">
            Przenosimy Twój biznes z Facebooka na profesjonalną stronę www.
            <br />
            A potem się nią zajmujemy — za Ciebie.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nie musisz nic wiedzieć o technologii. Nie musisz pisać tekstów.
            Nie musisz szukać hostingu. Podajesz nam link do swojego profilu — a my
            robimy resztę. Budujemy stronę z Twoich najlepszych zdjęć i postów,
            piszemy teksty ofertowe, podpinamy domenę, uruchamiamy blog i lead
            magnety. I utrzymujemy to wszystko co miesiąc.
          </p>
        </motion.div>

        {/* Before/After Visualization */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-md bg-white rounded-2xl p-6 border-2 border-red-200 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-500 text-lg">😞</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900">
                Before
              </h3>
            </div>

            {/* Facebook Frame Visualization */}
            <div className="bg-gray-100 rounded-xl p-4 mb-4">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="flex items-center gap-2 p-3 border-b">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <ThumbsUp size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded w-3/4 mb-1"></div>
                    <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="p-3 space-y-2">
                  <div className="h-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded"></div>
                  <div className="flex gap-2">
                    <div className="w-1/3 h-20 bg-gray-200 rounded"></div>
                    <div className="w-1/3 h-20 bg-gray-200 rounded"></div>
                    <div className="w-1/3 h-20 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 mb-4 border border-red-100">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-blue-500" />
                    <span className="text-sm text-gray-700">Użytkownicy internetu</span>
                  </div>
                  <span className="text-sm font-bold text-blue-600">~30M</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp size={16} className="text-blue-500" />
                    <span className="text-sm text-gray-700">Facebook</span>
                  </div>
                  <span className="text-sm font-bold text-gray-600">~15M</span>
                </div>
                <div className="border-t border-red-200 pt-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-500 text-xs font-bold">!</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">Utracone szanse</span>
                    </div>
                    <span className="text-lg font-bold text-red-600">~15M</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    Pomijasz połowę Polaków korzystających z internetu
                  </p>
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {beforeItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                  <span className="text-gray-600 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
              <ArrowRight size={28} className="text-white" />
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-md bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-500 text-lg">🎉</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900">
                  After
                </h3>
              </div>

              {/* Professional Website Wireframe */}
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-4 mb-4">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-3 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-2 bg-gray-700 rounded"></div>
                      <div className="w-16 h-2 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">Twoja Firma</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-orange-100 rounded"></div>
                      <div className="h-12 bg-blue-100 rounded"></div>
                      <div className="h-12 bg-green-100 rounded"></div>
                    </div>
                    <div className="h-20 bg-gray-100 rounded p-2">
                      <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {afterItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm">{item}</span>
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
