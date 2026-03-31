"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna K.",
    industry: "Salon kosmetyczny, Wrocław",
    text: "Wysłałam link do Facebooka w poniedziałek, a we wtorek rano miałam gotowy projekt strony. Byłam w szoku, jak dobrze to wygląda. Polecam każdemu, kto nie ma czasu na bawienie się w technologię.",
    rating: 5,
  },
  {
    name: "Marek W.",
    industry: "Warsztat samochodowy, Kraków",
    text: "Latami zastanawiałem się nad stroną, ale ceny agencji mnie odstraszały. Tutaj za 149 zł miesięcznie mam stronę, blog i ktoś się tym za mnie zajmuje. W końcu jestem w Google.",
    rating: 5,
  },
  {
    name: "Katarzyna L.",
    industry: "Trener personalny, Warszawa",
    text: "Lead magnet, który mi przygotowali, zbiera 10-15 maili tygodniowo. Połowa z nich umawia się na konsultację. Strona zwróciła się w pierwszym miesiącu.",
    rating: 5,
  },
  {
    name: "Tomasz B.",
    industry: "Firma budowlana, Lublin",
    text: "Nie musiałem nic robić. Podałem Facebooka, powiedziałem co chcę zmienić w demo — i tyle. Blog piszą za mnie, zmiany robią w jeden dzień. Dokładnie to, czego szukałem.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="opinie" ref={ref} className="section-padding bg-bg-light">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-bold text-accent-500 uppercase tracking-wider mb-4">
            Opinie klientów
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary-950 leading-tight">
            Co mówią nasi klienci.
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-primary-950 leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-600">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-primary-950">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {testimonials[currentIndex].industry}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white border-2 border-border hover:border-accent-300 hover:bg-accent-50 flex items-center justify-center transition-all duration-300"
              aria-label="Poprzednia opinia"
            >
              <ChevronLeft size={24} className="text-primary-950" />
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white border-2 border-border hover:border-accent-300 hover:bg-accent-50 flex items-center justify-center transition-all duration-300"
              aria-label="Następna opinia"
            >
              <ChevronRight size={24} className="text-primary-950" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-accent-500"
                    : "bg-primary-300 hover:bg-primary-400"
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
