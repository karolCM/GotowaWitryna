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
    <section id="co-dostajesz" ref={ref} className="section-padding relative overflow-hidden bg-gray-50">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50/30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container-custom relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-sm font-bold text-orange-600 uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200"
          >
            Wszystko w cenie
          </motion.span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight mb-6">
            Jedna usługa. Kompletne rozwiązanie.{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Zero pracy</span> po Twojej stronie.
          </h2>
          <p className="text-lg text-gray-600">
            Nie płacisz osobno za hosting, domenę, zmiany czy teksty. Wszystko
            jest wliczone w miesięczny abonament.
          </p>
        </motion.div>

        {/* Premium Features Grid */}
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
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-transparent to-blue-50/0 group-hover:from-orange-50/50 group-hover:to-blue-50/50 transition-all duration-500" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 group-hover:from-orange-500 group-hover:to-orange-600 flex items-center justify-center mb-6 transition-all duration-500 shadow-sm group-hover:shadow-lg">
                  <Icon
                    size={32}
                    className="text-orange-600 group-hover:text-white transition-colors duration-500 stroke-2"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Premium Bottom Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-50 to-green-50/50 rounded-2xl border-2 border-green-200 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-semibold text-gray-900 text-lg">
              Brak ukrytych kosztów. Wszystko wliczone w cenę.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
