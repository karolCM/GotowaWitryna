"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  ScanSearch,
  ImagePlus,
  FileText,
  MailCheck,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import SectionReveal from "./SectionReveal";

const analysisSteps = [
  {
    icon: ScanSearch,
    text: "Analizujemy potencjał Twojego profilu społecznościowego...",
    duration: 2200,
  },
  {
    icon: ImagePlus,
    text: "Przygotowujemy zestawienie najlepszych realizacji do Twojej galerii...",
    duration: 2400,
  },
  {
    icon: FileText,
    text: "Formujemy strukturę oferty na podstawie Twoich usług...",
    duration: 2000,
  },
  {
    icon: MailCheck,
    text: "Twoje zgłoszenie trafiło do naszego zespołu. Przygotowujemy demo.",
    duration: 0,
  },
];

type FlowState = "form" | "analyzing" | "done";

export default function LeadFlow() {
  const [state, setState] = useState<FlowState>("form");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const runAnalysis = useCallback(async () => {
    setState("analyzing");
    setCurrentStep(0);
    setCompletedSteps([]);

    for (let i = 0; i < analysisSteps.length; i++) {
      setCurrentStep(i);
      if (analysisSteps[i].duration > 0) {
        await new Promise((r) => setTimeout(r, analysisSteps[i].duration));
        setCompletedSteps((prev) => [...prev, i]);
      }
    }

    await new Promise((r) => setTimeout(r, 1200));
    setState("done");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !email.trim() || !link.trim()) return;
    runAnalysis();
  };

  return (
    <section
      id="kontakt"
      className="relative py-24 md:py-32 overflow-hidden noise-overlay"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-terracotta-500/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-medium text-terracotta-400 tracking-widest uppercase mb-4">
              Zacznij teraz
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
              Poproś o projekt demo
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Podaj link do swojego profilu na Facebooku lub Instagramie.
              Przeanalizujemy go i przygotujemy propozycję strony.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="relative p-8 md:p-10 rounded-2xl border border-navy-700/50 bg-navy-900/40 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {/* FORM STATE */}
              {state === "form" && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="company-name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Nazwa firmy
                    </label>
                    <input
                      id="company-name"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="np. Studio Fryzur Anna"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-navy-800/60 border border-navy-600/50 text-white placeholder:text-slate-600 focus:outline-none focus:border-terracotta-500/50 focus:ring-1 focus:ring-terracotta-500/20 transition-all duration-300"
                      aria-label="Wpisz nazwę swojej firmy"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Adres e-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ty@twojafirma.pl"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-navy-800/60 border border-navy-600/50 text-white placeholder:text-slate-600 focus:outline-none focus:border-terracotta-500/50 focus:ring-1 focus:ring-terracotta-500/20 transition-all duration-300"
                      aria-label="Wpisz swój adres e-mail"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="social-link"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Link do profilu (Facebook lub Instagram)
                    </label>
                    <input
                      id="social-link"
                      type="url"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      placeholder="https://facebook.com/twojafirma"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-navy-800/60 border border-navy-600/50 text-white placeholder:text-slate-600 focus:outline-none focus:border-terracotta-500/50 focus:ring-1 focus:ring-terracotta-500/20 transition-all duration-300"
                      aria-label="Wklej link do profilu na Facebooku lub Instagramie"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 px-7 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-500/20"
                  >
                    Poproś o przygotowanie mojego projektu
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    Bez zobowiązań. Sprawdzisz projekt zanim podejmiesz decyzję.
                  </p>
                </motion.form>
              )}

              {/* ANALYZING STATE */}
              {state === "analyzing" && (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <Loader2
                      size={28}
                      className="mx-auto text-terracotta-400 animate-spin mb-3"
                    />
                    <p className="text-sm text-slate-400">
                      Analiza profilu w toku...
                    </p>
                  </div>

                  <div className="space-y-4">
                    {analysisSteps.map((step, i) => {
                      const isActive = currentStep === i;
                      const isCompleted = completedSteps.includes(i);
                      const isUpcoming = currentStep < i;

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: isUpcoming ? 0.3 : 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.15,
                          }}
                          className="flex items-start gap-4"
                        >
                          <div
                            className={`shrink-0 mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${
                              isCompleted
                                ? "bg-green-500/10 text-green-400"
                                : isActive
                                  ? "bg-terracotta-500/15 text-terracotta-400"
                                  : "bg-navy-800 text-slate-600"
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle2 size={16} />
                            ) : isActive ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              >
                                <step.icon size={16} />
                              </motion.div>
                            ) : (
                              <step.icon size={16} />
                            )}
                          </div>
                          <p
                            className={`text-sm leading-relaxed pt-1 transition-colors duration-500 ${
                              isCompleted
                                ? "text-slate-300"
                                : isActive
                                  ? "text-white"
                                  : "text-slate-600"
                            }`}
                          >
                            {step.text}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6 h-1 rounded-full bg-navy-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-terracotta-500 to-terracotta-400"
                      initial={{ width: "0%" }}
                      animate={{
                        width: `${((currentStep + 1) / analysisSteps.length) * 100}%`,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              )}

              {/* DONE STATE */}
              {state === "done" && (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center py-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.1,
                    }}
                    className="mx-auto mb-6 w-16 h-16 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="font-display text-2xl text-white mb-3">
                    Zgłoszenie przyjęte!
                  </h3>
                  <p className="text-slate-400 leading-relaxed max-w-md mx-auto mb-6">
                    Nasz zespół analizuje Twój profil i przygotowuje
                    spersonalizowany projekt strony. Odezwiemy się w ciągu
                    24&ndash;48 godzin.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/60 border border-navy-700/50 text-sm text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse" />
                    Projekt w kolejce
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
