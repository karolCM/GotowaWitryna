"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link, Cpu, Eye, Rocket, Clock } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Podaj nam link",
    description:
      "Wpisz adres swojego profilu na Facebooku lub Instagramie. To wszystko, czego od Ciebie potrzebujemy.",
    time: "2 minuty",
  },
  {
    number: "02",
    icon: Cpu,
    title: "My tworzymy Twój projekt",
    description:
      "Analizujemy Twoje zdjęcia, posty i opinie. Wybieramy najlepsze materiały i budujemy z nich profesjonalną stronę.",
    time: "do 24 godzin",
  },
  {
    number: "03",
    icon: Eye,
    title: "Sprawdzasz i oceniasz",
    description:
      "Dostajesz link do gotowego projektu. Przeglądasz go na telefonie i komputerze. Mówisz, co zmienić — albo akceptujesz.",
    time: "bez pośpiechu",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Uruchamiamy Twoją stronę",
    description:
      "Podpinamy domenę, aktywujemy hosting i SSL. Twoja strona jest online. Od tego momentu zajmujemy się wszystkim.",
    time: "1 dzień",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="proces" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-bold text-accent-500 uppercase tracking-wider mb-4">
            Jak to działa
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary-950 leading-tight mb-6">
            4 proste kroki do Twojej nowej strony.
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] border-t-2 border-dashed border-accent-200" />
                )}

                <div className="bg-white rounded-2xl p-6 border-2 border-border hover:border-accent-300 hover:shadow-xl transition-all duration-300 card-hover h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent-50 group-hover:bg-accent-500 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon
                      size={28}
                      className="text-accent-500 group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-primary-950 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Time Badge */}
                  <div className="flex items-center gap-2 text-xs font-medium text-accent-600">
                    <Clock size={14} />
                    <span>{step.time}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-accent-50 rounded-2xl border border-accent-200">
            <span className="text-2xl">⚡</span>
            <p className="text-lg font-semibold text-primary-950">
              Od Twojego linka do gotowej strony — maksymalnie 48 godzin.
              <span className="text-accent-500">
                {" "}
                A projekt demo otrzymujesz za darmo.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
