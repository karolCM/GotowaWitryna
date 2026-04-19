"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Scissors,
  Sparkles,
  Wrench,
  HardHat,
  UtensilsCrossed,
  Camera,
  Dumbbell,
  Home,
  Palette,
  Scale,
  PawPrint,
  Truck,
} from "lucide-react";

const industries = [
  { name: "Fryzjerzy i barberzy", icon: Scissors, slug: "fryzjerzy-barberzy" },
  { name: "Salony kosmetyczne", icon: Sparkles, slug: "salony-kosmetyczne" },
  { name: "Warsztaty samochodowe", icon: Wrench, slug: "warsztaty-samochodowe" },
  { name: "Firmy budowlane i remontowe", icon: HardHat, slug: "firmy-budowlane" },
  { name: "Restauracje i gastronomia", icon: UtensilsCrossed, slug: "restauracje-gastronomia" },
  { name: "Fotografowie", icon: Camera, slug: "fotografowie" },
  { name: "Trenerzy personalni", icon: Dumbbell, slug: "trenerzy-personalni" },
  { name: "Usługi dla domu", icon: Home, slug: "uslugi-dla-domu" },
  { name: "Rzemieślnicy i artyści", icon: Palette, slug: "rzemieslnicy-artysci" },
  { name: "Doradcy i konsultanci", icon: Scale, slug: "doradcy-konsultanci" },
  { name: "Usługi dla zwierząt", icon: PawPrint, slug: "uslugi-dla-zwierzat" },
  { name: "Transport i przeprowadzki", icon: Truck, slug: "transport-przeprowadzki" },
];

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="branze" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-bold text-accent-500 uppercase tracking-wider mb-4">
            Dla kogo to jest
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary-950 leading-tight mb-6">
            Stworzone dla lokalnych firm, które chcą rosnąć.
          </h2>
          <p className="text-lg text-text-secondary">
            Obsługujemy dziesiątki branż. Każdą stronę dopasowujemy do specyfiki
            Twojej działalności.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.a
                key={index}
                href={`/branza/${industry.slug}`}
                variants={item}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-bg-light border-2 border-border hover:border-accent-300 hover:bg-accent-50 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-accent-500 flex items-center justify-center mb-4 shadow-sm transition-colors duration-300">
                  <Icon
                    size={28}
                    className="text-accent-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-primary-950 text-center group-hover:text-accent-600 transition-colors duration-200">
                  {industry.name}
                </span>
              </motion.a>
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
          <p className="text-text-secondary">
            Nie widzisz swojej branży?{" "}
            <a
              href="#kontakt"
              className="text-accent-500 font-semibold hover:text-accent-600 transition-colors"
            >
              Napisz do nas
            </a>
            {" "}— obsługujemy praktycznie każdy lokalny biznes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
