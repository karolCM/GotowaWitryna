"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Header */}
      <header className="border-b border-navy-800/60">
        <div className="mx-auto max-w-3xl px-6 py-6 flex items-center justify-between">
          <a
            href="/"
            className="font-display text-xl text-white tracking-tight"
          >
            Gotowa<span className="text-terracotta-400">Witryna</span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Strona główna
          </a>
        </div>
      </header>

      {/* Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl px-6 py-16 md:py-24"
      >
        <h1 className="font-display text-3xl md:text-4xl text-white mb-3">
          {title}
        </h1>
        <p className="text-sm text-slate-500 mb-12">
          Ostatnia aktualizacja: {lastUpdated}
        </p>

        <div className="prose-legal space-y-8 text-slate-300 leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-medium [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc [&_li]:text-slate-400 [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol>li]:list-decimal [&_ol>li]:text-slate-400 [&_a]:text-terracotta-400 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-terracotta-300 [&_strong]:text-white [&_strong]:font-medium">
          {children}
        </div>
      </motion.main>

      {/* Footer */}
      <footer className="border-t border-navy-800/40 py-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} GotowaWitryna. Wszystkie prawa
          zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
