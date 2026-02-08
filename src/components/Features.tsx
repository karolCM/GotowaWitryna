"use client";

import { Camera, PenTool, Smartphone, Server, CheckCircle } from "lucide-react";
import SectionReveal from "./SectionReveal";

const features = [
  {
    icon: Camera,
    title: "Dobór materiałów",
    description:
      "Wybieramy zdjęcia, które najlepiej reprezentują Twoją jakość i budują profesjonalny wizerunek.",
  },
  {
    icon: PenTool,
    title: "Copywriting",
    description:
      "Piszemy teksty ofertowe na bazie Twoich dotychczasowych postów. Gotowe do sprzedaży od pierwszego dnia.",
  },
  {
    icon: Smartphone,
    title: "Mobilność",
    description:
      "Dbamy, aby strona była idealną wizytówką na każdym telefonie, tablecie i komputerze.",
  },
  {
    icon: Server,
    title: "Obsługa techniczna",
    description:
      "Zajmujemy się domeną, serwerem i bezpieczeństwem. Nie musisz wiedzieć nic o technologii.",
  },
];

export default function Features() {
  return (
    <section
      id="oferta"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-medium text-terracotta-400 tracking-widest uppercase mb-4">
              Wszystko w cenie
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
              Pełne wdrożenie Twojej marki{" "}
              <span className="text-slate-400">w sieci.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Jedna usługa, kompletne rozwiązanie. Od materiałów po hosting &mdash;
              wszystko masz w pakiecie.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <SectionReveal key={feature.title} delay={0.1 * i}>
              <div className="group relative h-full p-8 md:p-10 rounded-2xl border border-navy-700/40 bg-navy-900/20 hover:bg-navy-900/50 hover:border-navy-600/50 transition-all duration-500">
                {/* Top row */}
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-terracotta-500/10 text-terracotta-400 flex items-center justify-center group-hover:bg-terracotta-500/20 transition-colors duration-300">
                    <feature.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle
                        size={15}
                        className="text-green-500/70"
                        strokeWidth={2}
                      />
                      <h3 className="font-display text-lg text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-[15px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
