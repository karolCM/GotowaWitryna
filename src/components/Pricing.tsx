"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";

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
    <section id="cennik" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-sm font-bold text-accent-500 uppercase tracking-wider mb-4">
            Cennik
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary-950 leading-tight mb-6">
            Prosta, przejrzysta cena. Bez ukrytych kosztów.
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Wybierz pakiet, który pasuje do Twojej firmy. Możesz go zmienić w
            dowolnym momencie.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-bg-light rounded-full">
            <button
              onClick={() => setNoUpfront(false)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                !noUpfront
                  ? "bg-accent-500 text-white shadow-lg"
                  : "text-text-secondary hover:text-primary-950"
              }`}
            >
              Z opłatą startową
            </button>
            <button
              onClick={() => setNoUpfront(true)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                noUpfront
                  ? "bg-accent-500 text-white shadow-lg"
                  : "text-text-secondary hover:text-primary-950"
              }`}
            >
              0 zł na start (umowa 12 mc)
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 card-hover ${
                plan.popular
                  ? "border-accent-300 shadow-xl bg-accent-50/30"
                  : "border-border bg-white hover:border-accent-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 bg-accent-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    Najpopularniejszy
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-primary-950 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-secondary">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-primary-950">
                    {noUpfront ? plan.priceNoUpfront : plan.priceUpfront}
                  </span>
                  <span className="text-text-secondary">zł netto / miesiąc</span>
                </div>
                {!noUpfront && (
                  <p className="text-sm text-text-secondary mt-2">
                    + jednorazowo {plan.setupUpfront} zł netto
                  </p>
                )}
                {noUpfront && (
                  <p className="text-sm text-accent-600 font-medium mt-2">
                    Umowa na 12 miesięcy
                  </p>
                )}
              </div>

              {/* CTA */}
              <a
                href="#kontakt"
                className={`block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 mb-6 ${
                  plan.popular
                    ? "bg-accent-500 hover:bg-accent-600 text-white shadow-lg"
                    : "bg-primary-950 hover:bg-primary-900 text-white"
                }`}
              >
                Zamów darmowe demo
                <ArrowRight size={18} className="inline ml-2" />
              </a>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-success flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-text-secondary text-sm"
        >
          Wszystkie ceny netto (+ 23% VAT). Cena obejmuje absolutnie wszystko —
          bez ukrytych opłat za hosting, domenę czy zmiany. Faktura VAT co
          miesiąc. Płatność kartą lub przelewem.
        </motion.p>
      </div>
    </section>
  );
}
