"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layout,
  PenTool,
  FileText,
  Magnet,
  Globe,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Profesjonalna strona www",
    description:
      "Zaprojektowana specjalnie dla Twojej branży. Z Twoimi zdjęciami, ofertą i danymi kontaktowymi. Wygląda świetnie na telefonie, tablecie i komputerze.",
  },
  {
    icon: PenTool,
    title: "Teksty i copywriting",
    description:
      "Piszemy wszystkie teksty na stronę — od opisu firmy po ofertę usług. Na bazie Twoich postów z social media, w języku który trafia do Twoich klientów.",
  },
  {
    icon: FileText,
    title: "Blog z artykułami SEO",
    description:
      "Co miesiąc publikujemy artykuły na Twoim blogu, zoptymalizowane pod Google. Dzięki temu Twoja strona rośnie w wynikach wyszukiwania z każdym miesiącem.",
  },
  {
    icon: Magnet,
    title: "Lead magnety dla Twojej branży",
    description:
      "Przygotowujemy darmowe materiały (poradniki, checklisty, kalkulatory), które zbierają adresy e-mail potencjalnych klientów. Ty dostajesz gotowe leady.",
  },
  {
    icon: Globe,
    title: "Domena + hosting + SSL",
    description:
      "Twój własny adres w internecie (np. twojafirma.pl), szybki serwer i bezpieczne połączenie — wszystko podpięte i utrzymywane przez nas.",
  },
  {
    icon: Wrench,
    title: "Obsługa techniczna i zmiany",
    description:
      "Chcesz zmienić zdjęcie? Dodać nową usługę? Zaktualizować cennik? Napisz do nas — zrobimy to za Ciebie. Nie musisz logować się do żadnego panelu.",
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="co-dostajesz" ref={ref} className="section-padding bg-bg-light">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-bold text-accent-500 uppercase tracking-wider mb-4">
            Wszystko w cenie
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary-950 leading-tight mb-6">
            Jedna usługa. Kompletne rozwiązanie. Zero pracy po Twojej stronie.
          </h2>
          <p className="text-lg text-text-secondary">
            Nie płacisz osobno za hosting, domenę, zmiany czy teksty. Wszystko
            jest wliczone w miesięczny abonament.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group bg-white rounded-2xl p-8 border-2 border-border hover:border-accent-200 hover:shadow-xl transition-all duration-300 card-hover"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent-50 group-hover:bg-accent-500 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon
                    size={32}
                    className="text-accent-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-primary-950 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border-2 border-accent-200">
            <span className="text-success text-xl">✓</span>
            <span className="font-semibold text-primary-950">
              Brak ukrytych kosztów. Wszystko wliczone w cenę.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
