"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Ile muszę na to poświęcić czasu?",
    answer:
      "Dosłownie 2-5 minut. Podajesz nam link do swojego profilu na Facebooku lub Instagramie — i to wszystko. My robimy całą resztę. Jedyny moment, gdy angażujesz się bardziej, to przegląd gotowego projektu i ewentualne uwagi.",
  },
  {
    question: "Czy muszę znać się na technologii?",
    answer:
      "Absolutnie nie. Nie musisz wiedzieć co to hosting, domena czy WordPress. My zajmujemy się całą technologią. Jeśli umiesz wysłać wiadomość na Messengerze — to umiesz współpracować z nami.",
  },
  {
    question: "Ile kosztuje strona?",
    answer:
      "Pakiet Start to 149 zł netto miesięcznie (+ jednorazowa opłata startowa 499 zł) lub 199 zł netto miesięcznie z umową na 12 miesięcy bez opłaty startowej. W cenie masz wszystko — stronę, hosting, domenę, blog, lead magnet i obsługę techniczną.",
  },
  {
    question: "Czy mogę zobaczyć stronę przed zapłatą?",
    answer:
      "Tak! Projekt demo przygotowujemy za darmo i bez zobowiązań. Dopiero gdy go zaakceptujesz, uruchamiamy stronę i zaczyna się abonament.",
  },
  {
    question: "Co to jest lead magnet?",
    answer:
      "To darmowy materiał (np. poradnik PDF, checklista, kalkulator), który umieszczamy na Twojej stronie. Klient pobiera go w zamian za podanie swojego adresu e-mail — a Ty dostajesz kontakt do potencjalnego klienta. Przygotowujemy go za Ciebie, dopasowany do Twojej branży.",
  },
  {
    question: "Co jeśli projekt mi się nie spodoba?",
    answer:
      "Wprowadzamy poprawki na podstawie Twoich uwag — bez dodatkowych opłat. Jeśli mimo poprawek nie chcesz kontynuować — nic nie płacisz. Nie podpisujesz żadnej umowy na etapie demo.",
  },
  {
    question: "Ile czekam na gotową stronę?",
    answer:
      "Projekt demo otrzymujesz w ciągu 24 godzin od podania linka do profilu. Po akceptacji — uruchomienie strony na żywo trwa kolejne 24h. Łącznie: od Twojego linka do działającej strony w mniej niż 48 godzin.",
  },
  {
    question: "Co dostaje moja firma każdego miesiąca?",
    answer:
      "W zależności od pakietu: 2-8 artykułów blogowych zoptymalizowanych pod Google, lead magnet branżowy, pełną obsługę techniczną (hosting, bezpieczeństwo, aktualizacje), a także Twoje drobne zmiany treści realizowane na bieżąco.",
  },
  {
    question: "Czy strona będzie widoczna w Google?",
    answer:
      "Tak. Każdą stronę optymalizujemy pod SEO (pojawianie się w Google). Dodatkowo artykuły blogowe, które publikujemy co miesiąc, stopniowo zwiększają Twoją widoczność na frazy, których szukają Twoi klienci.",
  },
  {
    question: "Czy mogę zrezygnować?",
    answer:
      "Tak. Jeśli wybrałeś wariant z opłatą startową — wypowiadasz umowę z miesięcznym okresem wypowiedzenia, bez kar. Jeśli wybrałeś wariant \"0 zł na start\" — umowa trwa minimum 12 miesięcy, a potem również przechodzi na miesięczne wypowiedzenie.",
  },
  {
    question: "Kto jest właścicielem strony?",
    answer:
      "Domena jest rejestrowana na Twoje dane — należy do Ciebie. Treści na stronie (teksty, zdjęcia) są Twoją własnością. Jeśli zrezygnujesz z usługi, możesz przenieść domenę do innego dostawcy.",
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-display text-lg md:text-xl text-primary-950 group-hover:text-accent-500 transition-colors duration-300 pr-8">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-text-secondary"
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
            <p className="pb-6 text-text-secondary leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-bold text-accent-500 uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary-950 leading-tight">
            Najczęstsze pytania.
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto divide-y divide-border">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
