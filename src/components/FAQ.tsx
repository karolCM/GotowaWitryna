"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionReveal from "./SectionReveal";

const faqs = [
  {
    question: "Ile czasu muszę na to poświęcić?",
    answer:
      "Prawie zero. Bazujemy na tym, co już opublikowałeś w sieci. Analizujemy Twoje posty, zdjęcia i opinie, a następnie tworzymy stronę na ich podstawie. Jedyne, co musisz zrobić, to przejrzeć gotowy projekt i zatwierdzić go.",
  },
  {
    question: "Czy strona będzie wyglądać jak inne?",
    answer:
      "Nie. Każdy projekt jest indywidualnie dopasowany do charakteru Twojej branży i Twoich materiałów. Nie używamy gotowych szablonów — każda strona jest kuratorowana przez nasz zespół specjalnie dla Ciebie.",
  },
  {
    question: "Kiedy zobaczę efekt?",
    answer:
      "Przygotowanie wstępnego projektu zajmuje nam zazwyczaj od 24 do 48 godzin od Twojego zgłoszenia. Dostajesz pełną propozycję strony, którą możesz ocenić zanim podejmiesz jakąkolwiek decyzję.",
  },
  {
    question: "Czy muszę znać się na technologii?",
    answer:
      "Absolutnie nie. Zajmujemy się wszystkim — od projektu graficznego, przez domenę i hosting, po bezpieczeństwo. Ty koncentrujesz się na swoim biznesie, my na Twojej obecności w sieci.",
  },
  {
    question: "Co jeśli projekt mi się nie spodoba?",
    answer:
      "Nie ma problemu. Najpierw przygotowujemy demo — możesz je ocenić bez żadnych zobowiązań. Jeśli nie będzie odpowiadać Twoim oczekiwaniom, nic nie tracisz.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <SectionReveal delay={0.05 * index}>
      <div className="border-b border-navy-700/40">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-6 text-left group"
          aria-expanded={open}
        >
          <span className="font-display text-lg md:text-xl text-white group-hover:text-terracotta-300 transition-colors duration-300 pr-8">
            {question}
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 text-slate-500"
          >
            <ChevronDown size={20} />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-6 text-slate-400 leading-relaxed max-w-2xl">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionReveal>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="mx-auto max-w-3xl px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-medium text-terracotta-400 tracking-widest uppercase mb-4">
              Najczęstsze pytania
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Masz pytania?{" "}
              <span className="text-slate-400">Mamy odpowiedzi.</span>
            </h2>
          </div>
        </SectionReveal>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
