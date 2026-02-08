"use client";

import { Shield, Globe, Search } from "lucide-react";
import SectionReveal from "./SectionReveal";

const advantages = [
  {
    icon: Shield,
    title: "Profesjonalny wizerunek",
    description:
      "Zamień przypadkowe posty w uporządkowaną ofertę, która budzi zaufanie klientów od pierwszego spojrzenia.",
  },
  {
    icon: Globe,
    title: "Własność cyfrowa",
    description:
      "Twoja strona należy do Ciebie, nie do wielkich korporacji. Pełna kontrola nad treścią i wizerunkiem.",
  },
  {
    icon: Search,
    title: "Lepsza widoczność",
    description:
      "Pojawiaj się w Google, gdy ktoś szuka Twoich usług w okolicy. Docieraj do klientów poza Facebookiem.",
  },
];

export default function Advantage() {
  return (
    <section
      id="przewaga"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-medium text-terracotta-400 tracking-widest uppercase mb-4">
              Przewaga nad konkurencją
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
              Twoi klienci szukają profesjonalistów.{" "}
              <span className="text-slate-400">Bądź tam, gdzie oni.</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Quote block */}
        <SectionReveal delay={0.1}>
          <div className="relative mb-16 p-8 md:p-10 rounded-2xl bg-navy-900/50 border border-navy-700/50">
            <div className="absolute top-6 left-6 md:top-8 md:left-8 text-6xl font-display text-terracotta-500/20 leading-none select-none">
              &ldquo;
            </div>
            <blockquote className="relative z-10 pt-6 md:pt-4">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
                <strong className="text-white">
                  Sam profil na Facebooku to dziś za mało.
                </strong>{" "}
                Klienci chcą widzieć stabilną firmę. Własna strona www to
                sygnał, że Twoja działalność jest dojrzała, godna zaufania
                i&nbsp;dostępna dla każdego &mdash; nawet dla osób, które nie
                korzystają z mediów społecznościowych.
              </p>
            </blockquote>
          </div>
        </SectionReveal>

        {/* Advantage cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <SectionReveal key={item.title} delay={0.15 * i}>
              <div className="group relative h-full p-8 rounded-2xl border border-navy-700/40 bg-navy-900/30 hover:bg-navy-900/60 hover:border-navy-600/60 transition-all duration-500">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-terracotta-500/10 text-terracotta-400 group-hover:bg-terracotta-500/20 transition-colors duration-300">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
