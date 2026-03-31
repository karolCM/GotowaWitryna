"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Shield, Eye } from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "Nie ma Cię w Google",
    description:
      "71% polskich firm ma stronę internetową. Twoja konkurencja już tam jest. Klienci, którzy szukają Twoich usług w okolicy, trafiają do nich zamiast do Ciebie.",
  },
  {
    icon: Shield,
    title: "Facebook to nie Twoja własność",
    description:
      "Twoje treści, zdjęcia, opinie klientów — wszystko jest własnością Mety. Zmiana algorytmu, blokada konta, awaria serwisu — i Twoja firma znika z sieci z dnia na dzień.",
  },
  {
    icon: Eye,
    title: "Brak profesjonalnego wizerunku",
    description:
      "Strona www to pierwsza rzecz, którą sprawdza klient, zanim zadzwoni. Brak strony to brak zaufania. Własna witryna mówi: ta firma jest stabilna, profesjonalna i godna zaufania.",
  },
];

export default function Problem() {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="problem" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-bold text-accent-500 uppercase tracking-wider mb-4">
              Dlaczego to ważne
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary-950 leading-tight mb-6">
              Sam profil na Facebooku to dziś za mało.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Twoi klienci szukają usług w Google — nie na Facebooku. Gdy ktoś
              wpisze &quot;fryzjer Radom&quot; albo &quot;mechanik Wrocław&quot;,
              wyskakują firmy ze stronami internetowymi. Bez własnej strony
              jesteś dla tych klientów niewidoczny.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              A nawet gdy ktoś trafi na Twój profil na Facebooku — widzi chaotyczny
              wall postów, nie uporządkowaną ofertę. Brak strony www to sygnał:
              &quot;ta firma może nie być poważna&quot;.
            </p>
          </motion.div>

          {/* Right Column - Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="space-y-4"
          >
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="group p-6 rounded-2xl bg-white border-2 border-border hover:border-accent-200 hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center group-hover:bg-accent-500 transition-colors duration-300">
                      <Icon
                        size={24}
                        className="text-accent-500 group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-950 mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
