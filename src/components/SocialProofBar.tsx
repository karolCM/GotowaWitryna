"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Rocket, Star, Clock, Briefcase, LucideIcon } from "lucide-react";

interface Metric {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

const metrics: Metric[] = [
  { value: 47, suffix: "+", label: "stron uruchomionych", icon: Rocket },
  { value: 4.9, suffix: "/5", label: "średnia ocena", icon: Star },
  { value: 24, suffix: "h", label: "czas realizacji demo", icon: Clock },
  { value: 12, suffix: "+", label: "branż obsługiwanych", icon: Briefcase },
];

function CountUp({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(value * easeOut);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function SocialProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-r from-blue-50 via-orange-50 to-blue-50 py-6 border-y border-orange-100 overflow-hidden"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/20 to-transparent animate-pulse" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group cursor-default"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={24} strokeWidth={2} />
                </motion.div>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 mb-1">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide font-medium">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
