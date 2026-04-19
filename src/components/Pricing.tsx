"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "START",
    subtitle: "Profesjonalna wizytówka w sieci",
    popular: false,
    priceUpfront: 149,
    priceNoUpfront: 199,
    setupUpfront: 499,
    setupNoUpfront: 0,
    features: [
      "Strona one-page (landing page)",
      "Profesjonalny copywriting",
      "Domena .pl + hosting + SSL",
      "Responsywność (telefon, tablet, komputer)",
      "2 artykuły blogowe / miesiąc",
      "1 lead magnet branżowy",
      "Formularz kontaktowy z powiadomieniami e-mail",
      "Google Business Profile — konfiguracja",
      "Podstawowe SEO on-page",
      "Drobne zmiany treści (do 2h / miesiąc)",
    ],
  },
  {
    name: "BIZNES",
    subtitle: "Pełna strona z marketingiem",
    popular: true,
    priceUpfront: 249,
    priceNoUpfront: 349,
    setupUpfront: 999,
    setupNoUpfront: 0,
    features: [
      "Wszystko z pakietu Start",
      "Strona multi-page (do 5 podstron)",
      "4 artykuły blogowe / miesiąc",
      "2 lead magnety (rotacja sezonowa)",
      "Integracja Google Analytics + miesięczny raport",
      "Widget social media na stronie",
      "Pop-upy CTA / exit intent",
      "Zmiany treści (do 4h / miesiąc)",
    ],
  },
  {
    name: "PREMIUM",
    subtitle: "Maksymalny wzrost online",
    popular: false,
    priceUpfront: 399,
    priceNoUpfront: 549,
    setupUpfront: 1499,
    setupNoUpfront: 0,
    features: [
      "Wszystko z pakietu Biznes",
      "Strona rozbudowana (do 10 podstron)",
      "8 artykułów blogowych / miesiąc",
      "Newsletter — konfiguracja + automatyzacja",
      "Landing pages pod kampanie reklamowe",
      "Testy A/B przycisków i formularzy",
      "Priorytetowe wsparcie (odpowiedź do 4h)",
      "Zmiany treści (do 8h / miesiąc)",
    ],
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [noUpfront, setNoUpfront] = useState(false);

  return (
    <section id="cennik" ref={ref} className="section-padding bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container-custom relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-sm font-bold text-orange-600 uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200"
          >
            Cennik
          </motion.span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight mb-6">
            Prosta, przejrzysta cena.{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Bez ukrytych kosztów.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Wybierz pakiet, który pasuje do Twojej firmy. Możesz go zmienić w
            dowolnym momencie.
          </p>

          {/* Premium Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 bg-white rounded-2xl shadow-sm border border-orange-100">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setNoUpfront(false)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                !noUpfront
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-orange-50"
              }`}
            >
              Z opłatą startową
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setNoUpfront(true)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                noUpfront
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-orange-50"
              }`}
            >
              0 zł na start (umowa 12 mc)
            </motion.button>
          </div>
        </motion.div>

        {/* Premium Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 pt-12 border-2 transition-all duration-500 cursor-pointer ${
                plan.popular
                  ? "border-orange-300 shadow-xl bg-gradient-to-br from-orange-50 to-white"
                  : "border-gray-200 bg-white hover:border-orange-200 hover:shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                >
                  <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    <Sparkles size={14} />
                    Najpopularniejszy
                  </span>
                </motion.div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6 relative z-10">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6 relative z-10">
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className={`text-5xl font-extrabold ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                    {noUpfront ? plan.priceNoUpfront : plan.priceUpfront}
                  </span>
                  <span className="text-gray-600 font-medium">zł netto / mc</span>
                </div>
                {!noUpfront && (
                  <p className="text-sm text-gray-600 mt-3">
                    + jednorazowo{" "}
                    <span className="font-semibold text-gray-900">{plan.setupUpfront} zł netto</span>
                  </p>
                )}
                {noUpfront && (
                  <p className="text-sm text-orange-600 font-semibold mt-3 flex items-center justify-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Umowa na 12 miesięcy
                  </p>
                )}
              </div>

              {/* Premium CTA */}
              <motion.a
                href="#kontakt"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 mb-6 relative z-10 ${
                  plan.popular
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:shadow-orange-500/30"
                    : "bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg"
                }`}
              >
                Zamów darmowe demo
                <ArrowRight size={18} className="inline ml-2" />
              </motion.a>

              {/* Features */}
              <ul className="space-y-3 relative z-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Decorative gradient */}
              {plan.popular && (
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-200/50 to-transparent rounded-full blur-2xl" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Premium Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl border-2 border-orange-100 shadow-sm">
            <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-600 text-sm">
              Wszystkie ceny netto (+ 23% VAT). Cena obejmuje absolutnie wszystko —
              bez ukrytych opłat za hosting, domenę czy zmiany. Faktura VAT co
              miesiąc. Płatność kartą lub przelewem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
