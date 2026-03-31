"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const comparisons = [
  { feature: "Koszt na start", gotowawitryna: "od 0 zł", agencja: "2 500 – 9 000 zł", freelancer: "1 500 – 3 000 zł", zrobtosam: "0 zł" },
  { feature: "Koszt miesięczny", gotowawitryna: "od 149 zł", agencja: "0 zł (brak obsługi)", freelancer: "0 zł (brak obsługi)", zrobtosam: "39 – 99 zł" },
  { feature: "Czas realizacji", gotowawitryna: "24 – 48h", agencja: "4 – 8 tygodni", freelancer: "2 – 4 tygodnie", zrobtosam: "Kilka godzin (sam)" },
  { feature: "Artykuły blogowe", gotowawitryna: true, agencja: false, freelancer: false, zrobtosam: false },
  { feature: "Lead magnety", gotowawitryna: true, agencja: false, freelancer: false, zrobtosam: false },
  { feature: "Obsługa techniczna", gotowawitryna: true, agencja: false, freelancer: false, zrobtosam: false },
  { feature: "Hosting + domena + SSL", gotowawitryna: true, agencja: false, freelancer: false, zrobtosam: true },
  { feature: "Zmiany treści w cenie", gotowawitryna: true, agencja: false, freelancer: false, zrobtosam: true },
  { feature: "Twój wkład czasu", gotowawitryna: "~5 min (podaj link)", agencja: "Wiele godzin", freelancer: "Wiele godzin", zrobtosam: "Wiele godzin" },
];

export default function Comparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="porownanie" ref={ref} className="section-padding bg-bg-light">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-sm font-bold text-accent-500 uppercase tracking-wider mb-4">
            Porównanie
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary-950 leading-tight">
            Jak wypadamy na tle alternatyw?
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[800px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-primary-950 text-white">
                <th className="px-6 py-4 text-left font-semibold text-sm">Parametr</th>
                <th className="px-6 py-4 text-left font-semibold text-sm bg-accent-500">GotowaWitryna</th>
                <th className="px-6 py-4 text-left font-semibold text-sm text-primary-200">Agencja</th>
                <th className="px-6 py-4 text-left font-semibold text-sm text-primary-200">Freelancer</th>
                <th className="px-6 py-4 text-left font-semibold text-sm text-primary-200">Zrób to sam</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr
                  key={index}
                  className={`border-t border-border ${
                    index % 2 === 0 ? "bg-white" : "bg-bg-light"
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-primary-950">
                    {row.feature}
                  </td>
                  <td className={`px-6 py-4 font-semibold ${index % 2 === 0 ? "bg-accent-50" : ""}`}>
                    {typeof row.gotowawitryna === "boolean" ? (
                      row.gotowawitryna ? (
                        <span className="inline-flex items-center gap-2 text-success">
                          ✓ W cenie
                        </span>
                      ) : (
                        <span className="text-red-400">✗</span>
                      )
                    ) : (
                      <span className="text-accent-600">{row.gotowawitryna}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    {typeof row.agencja === "boolean" ? (
                      row.agencja ? (
                        <span className="text-success">✓</span>
                      ) : (
                        <span className="text-red-400">✗ Osobna opłata</span>
                      )
                    ) : (
                      row.agencja
                    )}
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    {typeof row.freelancer === "boolean" ? (
                      row.freelancer ? (
                        <span className="text-success">✓</span>
                      ) : (
                        <span className="text-red-400">✗</span>
                      )
                    ) : (
                      row.freelancer
                    )}
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    {typeof row.zrobtosam === "boolean" ? (
                      row.zrobtosam ? (
                        <span className="text-success">✓ Sam robisz</span>
                      ) : (
                        <span className="text-red-400">✗ Sam piszesz</span>
                      )
                    ) : (
                      row.zrobtosam
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
