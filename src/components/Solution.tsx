"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

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
    <section id="rozwiazanie" ref={ref} className="section-padding bg-bg-light">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-bold text-accent-500 uppercase tracking-wider mb-4">
            Nasze rozwiązanie
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary-950 leading-tight mb-6">
            Przenosimy Twój biznes z Facebooka na profesjonalną stronę www.
            <br />
            A potem się nią zajmujemy — za Ciebie.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Nie musisz nic wiedzieć o technologii. Nie musisz pisać tekstów.
            Nie musisz szukać hostingu. Podajesz nam link do swojego profilu — a my
            robimy resztę. Budujemy stronę z Twoich najlepszych zdjęć i postów,
            piszemy teksty ofertowe, podpinamy domenę, uruchamiamy blog i lead
            magnety. I utrzymujemy to wszystko co miesiąc.
          </p>
        </motion.div>

        {/* Before/After Visualization */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border-2 border-red-200 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-500 text-lg">😞</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-primary-950">
                Before
              </h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-red-400 mt-1">✗</span>
                  <span className="text-text-secondary">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden md:flex justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center shadow-lg">
              <ArrowRight size={32} className="text-white" />
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border-2 border-success/30 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-success text-lg">🎉</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-950">
                  After
                </h3>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-success mt-1">✓</span>
                    <span className="text-text-secondary">{item}</span>
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
