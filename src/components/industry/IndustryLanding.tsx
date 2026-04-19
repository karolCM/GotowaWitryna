"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Zap,
  Shield,
  Clock,
  Lock,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Facebook,
  Mail,
  Building2,
  Star,
} from "lucide-react";
import type { IndustryData } from "@/lib/industries-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── CTA Form ────────────────────────────────────────────────────────────────

function IndustryCTAForm({ industryName }: { industryName: string }) {
  const [formData, setFormData] = useState({ companyName: "", email: "", socialLink: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle size={40} className="text-green-600" />
        </motion.div>
        <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Dziękujemy! Twój projekt demo będzie gotowy w ciągu 24 godzin.
        </h3>
        <p className="text-gray-600 text-lg">Sprawdź skrzynkę e-mail — potwierdzenie jest już wysłane.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-semibold text-gray-900 mb-2">
            Nazwa {industryName}
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="np. Fryzjer Anna Kowalska"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all duration-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
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
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all duration-300"
          />
        </div>
        <div>
          <label htmlFor="socialLink" className="block text-sm font-semibold text-gray-900 mb-2">
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
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all duration-300"
          />
        </div>
      </div>
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/30 disabled:opacity-50 flex items-center justify-center gap-3 mx-auto"
      >
        {isSubmitting ? "Przetwarzanie..." : (
          <>Otrzymaj darmowe demo <ArrowRight size={20} /></>
        )}
      </motion.button>
      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
        <Lock size={14} className="text-orange-500" />
        <span>Twoje dane są bezpieczne. Nie spamujemy. Demo jest bezpłatne i bez zobowiązań.</span>
      </div>
    </form>
  );
}

// ─── Hero Form (compact, inside card) ────────────────────────────────────────

function HeroForm({ industryName }: { industryName: string }) {
  const [formData, setFormData] = useState({ companyName: "", email: "", socialLink: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-center py-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
          className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5"
        >
          <CheckCircle size={32} className="text-green-600" />
        </motion.div>
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
          Dziękujemy! Odezwiemy się w ciągu 24h.
        </h3>
        <p className="text-sm text-gray-500">
          Sprawdź skrzynkę e-mail — potwierdzenie już wysłane.
        </p>
      </motion.div>
    );
  }

  const fields = [
    {
      name: "companyName",
      label: `Nazwa ${industryName}`,
      placeholder: "np. Salon Fryzjerski Anna",
      type: "text",
      icon: Building2,
    },
    {
      name: "email",
      label: "Adres e-mail",
      placeholder: "twoj@email.pl",
      type: "email",
      icon: Mail,
    },
    {
      name: "socialLink",
      label: "Link do profilu Facebook / Instagram",
      placeholder: "facebook.com/twojafirma",
      type: "url",
      icon: Facebook,
    },
  ] as const;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map(({ name, label, placeholder, type, icon: Icon }) => (
        <div key={name}>
          <label htmlFor={`hero-${name}`} className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
            {label}
          </label>
          <div className={`relative transition-all duration-200 ${focused === name ? "scale-[1.01]" : ""}`}>
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icon size={16} className={focused === name ? "text-orange-500" : "text-gray-400"} />
            </div>
            <input
              id={`hero-${name}`}
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              onFocus={() => setFocused(name)}
              onBlur={() => setFocused(null)}
              placeholder={placeholder}
              required
              className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 outline-none transition-all duration-200 text-sm bg-gray-50 focus:bg-white ${
                focused === name
                  ? "border-orange-500 ring-4 ring-orange-500/10 shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
          </div>
        </div>
      ))}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 mt-2 text-base"
      >
        {isSubmitting ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full block"
            />
            Przygotowujemy demo...
          </>
        ) : (
          <>
            Otrzymaj darmowe demo
            <ArrowRight size={20} />
          </>
        )}
      </motion.button>

      <div className="flex items-center justify-center gap-1.5 pt-1">
        <Lock size={12} className="text-gray-400" />
        <p className="text-xs text-gray-400 text-center">
          Bezpłatnie i bez zobowiązań. Twoje dane są bezpieczne.
        </p>
      </div>
    </form>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display text-base md:text-lg text-gray-900 group-hover:text-orange-600 transition-colors pr-8">
          {question}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 text-gray-400">
          <ChevronDown size={20} />
        </motion.span>
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-gray-600 leading-relaxed max-w-2xl">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── Main Landing Component ───────────────────────────────────────────────────

export default function IndustryLanding({ industry }: { industry: IndustryData }) {
  const painRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const painInView = useInView(painRef, { once: true, margin: "-80px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[100dvh] flex items-center bg-gradient-to-br from-white via-orange-50/20 to-orange-50/40 overflow-hidden pt-20">
          {/* Animated background blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-100/60 to-orange-200/30 blur-[120px]"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-50/40 to-blue-100/20 blur-[100px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>

          <div className="relative z-10 container-custom py-16 lg:py-20">
            <div className="grid lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-16 items-center">

              {/* LEFT — copy */}
              <div>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-50 to-orange-100/80 border border-orange-200 mb-8 shadow-sm"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center"
                  >
                    <Zap size={13} className="text-white" />
                  </motion.div>
                  <span className="text-sm font-semibold text-orange-700">{industry.hero.badge}</span>
                </motion.div>

                {/* H1 */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold leading-[1.1] text-gray-900 mb-6"
                >
                  {industry.hero.headline}{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    {industry.hero.headlineAccent}
                  </span>{" "}
                  {industry.hero.headlineSuffix}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-lg text-gray-600 leading-relaxed mb-10"
                >
                  {industry.hero.subheadline}
                </motion.p>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap gap-3 mb-10"
                >
                  {[
                    { icon: Shield, label: "Bez zobowiązań" },
                    { icon: Clock, label: "Demo gotowe w 24h" },
                    { icon: CheckCircle, label: "Pełna obsługa techniczna" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-orange-100 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <Icon size={12} className="text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">{label}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Social proof row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex -space-x-2">
                    {["bg-orange-400", "bg-blue-400", "bg-green-400", "bg-purple-400"].map((c, i) => (
                      <div key={i} className={`w-9 h-9 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                        {["A", "M", "K", "P"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      {[0,1,2,3,4].map(i => <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />)}
                      <span className="text-sm font-bold text-gray-900 ml-1">4.9</span>
                    </div>
                    <p className="text-xs text-gray-500">Ponad 120 lokalnych firm nam zaufało</p>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT — hero form card */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Glow behind card */}
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/20 to-orange-600/10 rounded-3xl blur-2xl" />

                <div className="relative bg-white rounded-3xl shadow-2xl border border-orange-100/60 overflow-hidden">
                  {/* Card top stripe */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

                  <div className="p-8">
                    {/* Card header */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-semibold text-green-700">Darmowe demo — bez zobowiązań</span>
                      </div>
                      <h2 className="font-display text-2xl font-bold text-gray-900 leading-tight mb-2">
                        Otrzymaj gotową stronę<br />
                        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">w ciągu 24 godzin</span>
                      </h2>
                      <p className="text-sm text-gray-500">
                        Podaj link do Facebooka — my robimy resztę. Sprawdzisz efekt zanim zapłacisz.
                      </p>
                    </div>

                    <HeroForm industryName={industry.name} />
                  </div>

                  {/* Bottom strip */}
                  <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-center gap-6">
                    {[
                      { label: "120+", sub: "firm" },
                      { label: "24h", sub: "do demo" },
                      { label: "4.9★", sub: "ocena" },
                    ].map(({ label, sub }) => (
                      <div key={sub} className="text-center">
                        <div className="text-sm font-bold text-gray-900">{label}</div>
                        <div className="text-xs text-gray-500">{sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── PAIN POINTS ──────────────────────────────────────────────── */}
        <section ref={painRef} className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={painInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <span className="inline-block text-sm font-bold text-orange-600 uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200">
                Dlaczego to ważne
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Bez strony www tracisz klientów{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  każdego dnia
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {industry.painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={painInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group p-7 rounded-2xl bg-white border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5 group-hover:bg-red-500 transition-colors duration-300">
                    <AlertTriangle size={22} className="text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section id="jak-to-dziala" className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <span className="inline-block text-sm font-bold text-orange-600 uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200">
                Jak to działa
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Od linku do Facebooka do{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  gotowej strony
                </span>{" "}
                w 3 kroki
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Podajesz link do profilu",
                  description: "Wklejasz link do swojego Facebooka lub Instagrama w formularzu. To zajmuje dosłownie minutę.",
                },
                {
                  step: "02",
                  title: "My budujemy demo w 24h",
                  description: "Tworzymy profesjonalną stronę z Twoich zdjęć, postów i informacji. Copywriting piszemy za Ciebie.",
                },
                {
                  step: "03",
                  title: "Akceptujesz i startujemy",
                  description: "Przeglądasz projekt, wprowadzamy ewentualne poprawki i uruchamiamy stronę na żywo. Domyślnie gotowe w 48h.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative text-center"
                >
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 border-t-2 border-dashed border-orange-200" />
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange-500/20">
                    <span className="font-display text-xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────────────────────── */}
        <section ref={benefitsRef} className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <span className="inline-block text-sm font-bold text-orange-600 uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200">
                Co dostajesz
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Strona www{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  {industry.nameDative}
                </span>{" "}
                zawiera wszystko
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {industry.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group p-7 rounded-2xl bg-white border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-400 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                    <Check size={20} className="text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}

              {/* Lead magnet card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.5, delay: industry.benefits.length * 0.1 }}
                className="p-7 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/60 border-2 border-orange-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center mb-5">
                  <Sparkles size={20} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Lead magnet branżowy</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Przygotujemy bezpłatny materiał do pobrania, który zbiera maile klientów:
                </p>
                <p className="text-sm font-semibold text-orange-700 italic">„{industry.leadMagnet}"</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PRICING ──────────────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <span className="inline-block text-sm font-bold text-orange-600 uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200">
                Cennik
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                Prosta cena.{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Bez ukrytych kosztów.
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                W abonamencie masz wszystko — hosting, domenę, blog, zmiany i obsługę techniczną.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "START",
                  subtitle: "Profesjonalna wizytówka w sieci",
                  price: 149,
                  popular: false,
                  features: [
                    "Strona one-page (landing page)",
                    "Profesjonalny copywriting",
                    "Domena .pl + hosting + SSL",
                    "Responsywna na każde urządzenie",
                    "2 artykuły blogowe / miesiąc",
                    "1 lead magnet branżowy",
                    "Formularz kontaktowy",
                    "Google Business Profile",
                    "Podstawowe SEO on-page",
                  ],
                },
                {
                  name: "BIZNES",
                  subtitle: "Pełna strona z marketingiem",
                  price: 249,
                  popular: true,
                  features: [
                    "Wszystko z pakietu Start",
                    "Strona multi-page (do 5 podstron)",
                    "4 artykuły blogowe / miesiąc",
                    "2 lead magnety (rotacja sezonowa)",
                    "Google Analytics + raport miesięczny",
                    "Widget social media",
                    "Pop-upy CTA / exit intent",
                    "Zmiany treści (do 4h / miesiąc)",
                  ],
                },
                {
                  name: "PREMIUM",
                  subtitle: "Maksymalny wzrost online",
                  price: 399,
                  popular: false,
                  features: [
                    "Wszystko z pakietu Biznes",
                    "Strona rozbudowana (do 10 podstron)",
                    "8 artykułów blogowych / miesiąc",
                    "Newsletter — konfiguracja i automatyzacja",
                    "Landing pages pod kampanie",
                    "Testy A/B przycisków i formularzy",
                    "Priorytetowe wsparcie (odpowiedź do 4h)",
                    "Zmiany treści (do 8h / miesiąc)",
                  ],
                },
              ].map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-3xl p-8 pt-12 border-2 transition-all duration-300 ${
                    plan.popular
                      ? "border-orange-300 shadow-xl bg-gradient-to-br from-orange-50 to-white"
                      : "border-gray-200 bg-white hover:border-orange-200 hover:shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                        <Sparkles size={12} /> Najpopularniejszy
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                    <p className="text-sm text-gray-500">{plan.subtitle}</p>
                  </div>
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1.5">
                      <span className={`text-5xl font-extrabold ${plan.popular ? "bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent" : "text-gray-900"}`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-500 font-medium">zł netto / mc</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">+ jednorazowa opłata startowa</p>
                  </div>
                  <a
                    href="#kontakt"
                    className={`block w-full py-3.5 px-6 rounded-xl font-semibold text-center transition-all duration-300 mb-6 ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-orange-500/30"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    Zamów darmowe demo →
                  </a>
                  <ul className="space-y-2.5">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-green-600" />
                        </div>
                        <span className="text-sm text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-10"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-sm text-gray-600">
                  Wszystkie ceny netto (+ 23% VAT). Faktura VAT co miesiąc. Możliwa umowa bez opłaty startowej na 12 mc.
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── COMPARISON ───────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                GotowaWitryna vs agencja vs samodzielna budowa
              </h2>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-4 font-semibold text-gray-500 w-1/3"></th>
                    <th className="text-center py-4 px-4">
                      <span className="inline-block px-3 py-1.5 bg-orange-500 text-white text-xs font-bold rounded-full">GotowaWitryna</span>
                    </th>
                    <th className="text-center py-4 px-4 text-gray-600 font-semibold">Agencja</th>
                    <th className="text-center py-4 px-4 text-gray-600 font-semibold">Sam/a</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Czas do uruchomienia", "24–48h", "4–8 tygodni", "Tygodnie/miesiące"],
                    ["Miesięczny koszt", "149–399 zł", "500–3000 zł", "Twój czas"],
                    ["Copywriting i treści", "✓ W cenie", "Drogi dodatek", "Piszesz sam"],
                    ["Blog i SEO co miesiąc", "✓ W cenie", "Drogi dodatek", "Sam utrzymujesz"],
                    ["Obsługa techniczna", "✓ W cenie", "Drogi dodatek", "Sam rozwiązujesz"],
                    ["Lead magnety", "✓ W cenie", "Osobna wycena", "Sam tworzysz"],
                    ["Demo bez zobowiązań", "✓ Tak", "Rzadko", "Nie dotyczy"],
                  ].map(([label, us, agency, self], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3.5 px-4 font-medium text-gray-700">{label}</td>
                      <td className="py-3.5 px-4 text-center font-semibold text-orange-600">{us}</td>
                      <td className="py-3.5 px-4 text-center text-gray-500">{agency}</td>
                      <td className="py-3.5 px-4 text-center text-gray-500">{self}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section ref={faqRef} className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <span className="inline-block text-sm font-bold text-orange-600 uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200">
                FAQ
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                Najczęstsze pytania
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-gray-100 shadow-sm divide-y divide-gray-100 px-8">
              {[
                ...industry.faq,
                {
                  question: "Ile muszę poświęcić czasu?",
                  answer: "Dosłownie 2–5 minut. Podajesz nam link do swojego profilu na Facebooku lub Instagramie — i to wszystko. Resztą zajmujemy się my.",
                },
                {
                  question: "Czy mogę zobaczyć stronę przed zapłatą?",
                  answer: "Tak! Projekt demo przygotowujemy za darmo i bez zobowiązań. Dopiero gdy go zaakceptujesz, uruchamiamy stronę i zaczyna się abonament.",
                },
                {
                  question: "Czy mogę zrezygnować w dowolnym momencie?",
                  answer: "Tak. Jeśli wybrałeś wariant z opłatą startową — wypowiadasz umowę z miesięcznym okresem wypowiedzenia, bez kar. Wariant bez opłaty startowej ma umowę na 12 miesięcy.",
                },
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FORM ─────────────────────────────────────────────────── */}
        <section id="kontakt" ref={ctaRef} className="py-20 bg-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Gotowy na profesjonalną stronę{" "}
                  <br />
                  <span className="text-orange-400">{industry.nameDative}?</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Darmowy projekt w 24h. Bez zobowiązań. Decydujesz po zobaczeniu efektu.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <IndustryCTAForm industryName={industry.name} />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
