"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-navy-800/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="font-display text-xl text-white tracking-tight"
            >
              Gotowa<span className="text-terracotta-400">Witryna</span>
            </a>
            <p className="mt-2 text-sm text-slate-600">
              Profesjonalne strony www z Twojego social media.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-slate-500">
            <a
              href="#przewaga"
              className="hover:text-slate-300 transition-colors"
            >
              Dlaczego my
            </a>
            <a
              href="#proces"
              className="hover:text-slate-300 transition-colors"
            >
              Proces
            </a>
            <a
              href="#oferta"
              className="hover:text-slate-300 transition-colors"
            >
              Oferta
            </a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {year} GotowaWitryna. Wszystkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-4">
            <a href="/polityka-prywatnosci" className="hover:text-slate-400 transition-colors">
              Polityka prywatności
            </a>
            <a href="/regulamin" className="hover:text-slate-400 transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
