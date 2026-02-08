"use client";

import { motion } from "framer-motion";
import { ScanSearch, Palette, Eye } from "lucide-react";
import SectionReveal from "./SectionReveal";

const steps = [
  {
    number: "01",
    icon: ScanSearch,
    title: "Analiza profilu",
    description:
      "Przeglądamy Twoje dotychczasowe publikacje, zdjęcia i opinie. Identyfikujemy to, co najlepiej prezentuje Twoją markę.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Profesjonalna adaptacja",
    description:
      "Nasi specjaliści wybierają najlepsze treści i układają je w czytelny, sprzedażowy projekt strony internetowej.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Prezentacja demo",
    description:
      "Przygotowujemy dla Ciebie gotową propozycję. Sprawdzasz, oceniasz i dopiero wtedy decydujesz. Bez zobowiązań.",
  },
];

export default function Process() {
  return (
    <section
      id="proces"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-terracotta-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="max-w-2xl mb-20">
            <p className="text-xs font-medium text-terracotta-400 tracking-widest uppercase mb-4">
              Nasz proces
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
              Ty budujesz markę na Facebooku,{" "}
              <span className="text-slate-400">
                my nadajemy jej formę strony&nbsp;www.
              </span>
            </h2>
          </div>
        </SectionReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] h-px bg-gradient-to-r from-navy-700 via-terracotta-500/30 to-navy-700" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <SectionReveal key={step.number} delay={0.15 * i}>
                <div className="relative">
                  {/* Number watermark — behind, offset to top-right */}
                  <div className="absolute -top-6 left-10 font-display text-8xl text-navy-800/40 select-none leading-none pointer-events-none">
                    {step.number}
                  </div>

                  {/* Step icon */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10 mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-800 border border-navy-700 text-terracotta-400"
                  >
                    <step.icon size={24} strokeWidth={1.5} />
                  </motion.div>

                  <h3 className="font-display text-2xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
