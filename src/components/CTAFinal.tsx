"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Lock, ArrowRight, CheckCircle } from "lucide-react";

export default function CTAFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    socialLink: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="kontakt" ref={ref} className="section-padding bg-primary-950">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-tight mb-6">
              Twoja profesjonalna strona czeka.
              <br />
              <span className="text-accent-400">Podaj link — resztą zajmiemy się my.</span>
            </h2>
            <p className="text-xl text-primary-200">
              Darmowy projekt w 24h. Bez zobowiązań. Decydujesz po zobaczeniu
              efektu.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle size={40} className="text-success" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-primary-950 mb-4">
                  Dziękujemy! Twój projekt demo będzie gotowy w ciągu 24 godzin.
                </h3>
                <p className="text-text-secondary text-lg">
                  Sprawdź skrzynkę e-mail — potwierdzenie jest już wysłane.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <label htmlFor="companyName" className="block text-sm font-semibold text-primary-950 mb-2">
                      Nazwa firmy
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="np. Salon Fryzjerski Anna"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent-500 focus:ring-4 focus:ring-accent-500/20 outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="email" className="block text-sm font-semibold text-primary-950 mb-2">
                      Adres e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="twoj@email.pl"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent-500 focus:ring-4 focus:ring-accent-500/20 outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="socialLink" className="block text-sm font-semibold text-primary-950 mb-2">
                      Link do profilu FB / IG
                    </label>
                    <input
                      type="url"
                      id="socialLink"
                      name="socialLink"
                      value={formData.socialLink}
                      onChange={handleChange}
                      placeholder="facebook.com/twojafirma"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent-500 focus:ring-4 focus:ring-accent-500/20 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto px-12 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
                >
                  {isSubmitting ? (
                    <>Przetwarzanie...</>
                  ) : (
                    <>
                      Otrzymaj darmowe demo
                      <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>

                {/* Trust Message */}
                <div className="flex items-center justify-center gap-2 text-sm text-text-secondary pt-4">
                  <Lock size={16} className="text-accent-500" />
                  <span>
                    🔒 Twoje dane są bezpieczne. Nie spamujemy. Używamy ich
                    wyłącznie do przygotowania Twojego projektu.
                  </span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
