"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor } from "lucide-react";

const portfolios = [
  {
    industry: "Salon fryzjerski",
    description:
      "Profesjonalna wizytówka z galerią fryzur, cennikiem i systemem rezerwacji.",
    package: "Biznes",
    color: "bg-pink-50",
  },
  {
    industry: "Warsztat samochodowy",
    description:
      "Strona z wyceną usług, mapą dojazdu i formularzem umawiania na wizytę.",
    package: "Start",
    color: "bg-blue-50",
  },
  {
    industry: "Restauracja",
    description:
      "Menu online, rezerwacja stolików i galeria wnętrza z profilu na Instagramie.",
    package: "Biznes",
    color: "bg-orange-50",
  },
  {
    industry: "Trener personalny",
    description:
      "Oferta treningów, lead magnet z planem 7-dniowym i zapisy na konsultację.",
    package: "Premium",
    color: "bg-green-50",
  },
  {
    industry: "Firma budowlana",
    description:
      "Portfolio realizacji z Facebooka, kalkulator wyceny i formularz kontaktowy.",
    package: "Biznes",
    color: "bg-yellow-50",
  },
  {
    industry: "Salon kosmetyczny",
    description:
      "Cennik zabiegów, galeria efektów, blog z poradami i system rezerwacji.",
    package: "Premium",
    color: "bg-purple-50",
  },
];

export default function Portfolio() {
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

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="realizacje" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-bold text-accent-500 uppercase tracking-wider mb-4">
            Realizacje
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary-950 leading-tight mb-6">
            Zobacz przykładowe strony, które stworzyliśmy.
          </h2>
          <p className="text-lg text-text-secondary">
            Każda z tych stron powstała na bazie profilu na Facebooku — w mniej
            niż 24 godziny.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolios.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="group"
            >
              <div className="relative bg-white rounded-2xl border-2 border-border overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
                {/* Mockup Frame */}
                <div className={`p-8 ${item.color}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Laptop Frame Top */}
                    <div className="bg-primary-950 h-6 rounded-t-xl flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    {/* Screen Content */}
                    <div className="aspect-[4/3] bg-gradient-to-b from-white to-gray-50 p-4">
                      {/* Mock Website Header */}
                      <div className="h-8 bg-primary-950 rounded mb-3" />
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="h-16 bg-accent-100 rounded" />
                        <div className="h-16 bg-gray-100 rounded" />
                      </div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                      <div className="mt-4 h-10 bg-accent-500 rounded-lg" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-bold text-primary-950">
                      {item.industry}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.package === "Premium"
                          ? "bg-yellow-100 text-yellow-700"
                          : item.package === "Biznes"
                          ? "bg-accent-100 text-accent-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {item.package}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
